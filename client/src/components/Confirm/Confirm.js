import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Card, CardContent } from "@material-ui/core";
import { API_URL } from "../../utilis/config";

export default class Confirm extends Component {
  state = {
    confirming: true,
    msg: "",
  };

  componentDidMount = () => {
    const { id } = this.props.match.params;

    this.props.match.params && this.props.match.params.id &&
      fetch(`${API_URL}/api/users/confirm/${id}`)
        .then((res) => res.json())
        .then((data) => {
          this.setState({ confirming: false });
          this.setState({ msg: data.msg });
        })
        .catch((err) => console.log(err));
  };

  render = () => (
    <Grid container justify="center">
      <Grid item xs={12} sm={8} md={6}>
        <Card>
          <CardContent>
            {this.props.match.params && this.props.match.params.id ? 
              <div className="confirm">
                {this.state.confirming ? (
                  "Loading"
                ) : (
                  <div>
                    <p>{this.state.msg}</p>
                    <Link to="/login">Войти</Link>
                  </div>
                )}
              </div>
            : <p>Вам отправлено письмо для подтверждения почты</p>}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
