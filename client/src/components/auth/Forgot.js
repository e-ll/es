import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Grid, Card, CardContent, Typography, Button } from "@material-ui/core";

import styles from "./Login.module.css";
import TextFieldGroup from "../common/TextFieldGroup";
import { loginUser } from "../../actions/authActions";
import Axios from "axios";
import { API_URL } from "../../utilis/config";

class Forgot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      errors: {},
      sending: false,
      status: false,
      error: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/events");
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
      email: this.state.email,
    };
    this.setState({ error: false });
    fetch(`${API_URL}/api/users/forgot`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        this.setState({ sending: true });
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ sending: false });
        this.setState({ status: true });
        if (data.error) this.setState({ error: true,  status: false, });
        this.setState({ msg: data.msg });
      })
      .catch((err) => console.log(err));
    // this.props.loginUser(userData);
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
                Забыли пароль
              </Typography>
              {!this.state.status && this.state.sending && <Loading />}
              {this.state.status &&
                !this.state.sending &&
                !this.state.error && <p>{this.state.msg}</p>}
              {!this.state.status && !this.state.sending && (
                <>
                  <form onSubmit={this.onSubmit} className="mb-2">
                    <TextFieldGroup
                      label="Email"
                      placeholder="Email"
                      name="email"
                      type="email"
                      value={this.state.email}
                      onChange={this.onChange}
                      error={errors.email}
                    />
                    <Button
                      className="primary-color marginT-1"
                      type="submit"
                      variant="contained"
                    >
                      Принять
                    </Button>
                  </form>
                  {this.state.error && this.state.msg}
                  <Typography variant="subtitle2" className={login__info}>
                    <Link to="/login">Войти</Link>
                  </Typography>
                  {/* <Typography variant="subtitle2" className={login__info}>
                    У вас еще нет аккаунта?{" "}
                    <Link to="/register">Зарегистрироваться</Link>
                  </Typography> */}
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

export default connect(mapStateToProps, { loginUser })(Forgot);
