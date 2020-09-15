import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Grid, Card, CardContent, Typography, Button } from "@material-ui/core";

import styles from "./Login.module.css";
import TextFieldGroup from "../common/TextFieldGroup";
import { loginUser } from "../../actions/authActions";
import { API_URL } from "../../utilis/config";

class ChangePassword extends Component {
  constructor() {
    super();
    this.state = {
      password: "",
      password2: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/events");
    }
    if (this.props.match.params && !this.props.match.params.id) {
      this.props.history.push("/login");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/events");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const userData = {
      password: this.state.password,
      password2: this.state.password2,
      token: this.props.match.params.id,
    };
    this.setState({ error: false });
    fetch(`${API_URL}/api/users/change-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        this.setState({ sending: true });
        return res.json();
      })
      .then((data) => {
        this.setState({ sending: false });
        if (data.error) {
          this.setState({ error: true, status: false });
        } else {
          this.setState({ status: true });
        }
        this.setState({ msg: data.msg });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { errors } = this.state;

    const { login, login__card, login__info } = styles;
    const Loading = () => "Loading";

    return (
      <Grid className={login} container justify="center">
        <Grid item xs={12} sm={8} md={6}>
          <Card className={login__card}>
            <CardContent>
              <Typography variant="h5" paragraph>
                Поменять пароль
              </Typography>
              {!this.state.status && this.state.sending && <Loading />}
              {this.state.status && !this.state.sending && !this.state.error && (
                <>
                  <p>{this.state.msg}</p>{" "}
                  <Typography variant="subtitle2" className={login__info}>
                    <Link to="/login">Войти</Link>
                  </Typography>
                </>
              )}
              {!this.state.status && !this.state.sending && (
                <>
                  <form onSubmit={this.onSubmit} className="mb-2">
                    <TextFieldGroup
                      label="Пароль"
                      placeholder="Пароль"
                      name="password"
                      autocomplete="on"
                      type="password"
                      value={this.state.password}
                      onChange={this.onChange}
                      error={errors.password}
                    />
                    <TextFieldGroup
                      label="Повторите пароль"
                      placeholder="Повторите пароль"
                      name="password2"
                      type="password"
                      value={this.state.password2}
                      onChange={this.onChange}
                      error={errors.password2}
                    />
                    {this.state.error && this.state.msg}

                    <Button
                      className="primary-color marginT-1"
                      type="submit"
                      variant="contained"
                    >
                      Поменять
                    </Button>
                  </form>
                </>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(ChangePassword);
