import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import { connect } from "react-redux";
import { login } from "../actions/authActions";
import config from '../config.json';
import { withRouter, Redirect } from "react-router-dom";
import Const from "../Const";

class Login extends Component {

  onFailure = (error) => {
    alert(error);
  };

  googleResponse = (response) => {
    console.log(response)
    /*if (!response.tokenId) {
      console.error("Unable to get tokenId from Google", response)
      return;
    }*/

    const tokenBlob = new Blob([JSON.stringify({ tokenId: response.tokenId }, null, 2)], { type: 'application/json' });
    /*const options = {
      method: 'POST',
      body: tokenBlob,
      mode: 'cors',
      cache: 'default'
    };*/

    /*fetch(config.GOOGLE_AUTH_CALLBACK_URL, options)
      .then(r => {
        r.json().then(user => {
          const token = user.token;
          console.log(token);
          this.props.login(token);
        });
      })*/
      //console.log(JSON.stringify({ tokenId: response.tokenId }, null, 2))
      //const token = JSON.stringify({ tokenId: response.tokenId }, null, 2);
      console.log(response.tokenId)

      fetch(Const.BACKENDURL + "books/oauth/" + response.tokenId)
        .then(r => {
          r.json().then(user => {
            //console.log(user)
            //const token = user.token;
            //console.log(JSON.stringify({ email: response.email }, null, 2));
            this.props.login(user);
          });
        })
  };

  render() {
    let content = !!this.props.auth.isAuthenticated ?
      (
        <div>
          <Redirect to={{
            pathname: '/'
          }} />
        </div>
      ) :
      (
        <div className="login-box">
            <div className="login-logo">
                <a href="../../index2.html"><b>HackHub</b></a>
            </div>

            <div className="login-box-body">
                <p className="login-box-msg">Sign in to start your session</p>

                <form action="../../index2.html" method="post">
                    {/*}
                        <div className="form-group has-feedback">
                            <input type="email" className="form-control" placeholder="Email"></input>
                            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" placeholder="Password"></input>
                            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>*/}
                        <h3></h3>
                        <div>
                        <GoogleLogin
                          clientId={config.GOOGLE_CLIENT_ID}
                          buttonText="Google Login"
                          onSuccess={this.googleResponse}
                          onFailure={this.googleResponse}
                        />
                        </div>
{/*
                    <div className="row">
                        <div className="col-xs-8">
                        <div className="checkbox icheck">

                        </div>
                        </div>
                        <div className="col-xs-4">
                        <button type="button" onClick={this.onSubmit} className="btn btn-primary btn-block btn-flat"></button>
                        </div>
                    </div>*/}
                </form>

                {/*}<a href="#">I forgot my password</a><br/>*/}
            </div>
        </div>
      );

    return (
      <div>
          {content}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (token) => {
      dispatch(login(token));
    }
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
