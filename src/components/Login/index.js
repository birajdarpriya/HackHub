import React, { Component } from 'react';

import '../../theme/bower_components/bootstrap/dist/css/bootstrap.min.css';
import '../../theme/bower_components/font-awesome/css/font-awesome.min.css';
import '../../theme/bower_components/Ionicons/css/ionicons.min.css';
import '../../theme/dist/css/AdminLTE.css';
import '../../theme/plugins/iCheck/square/blue.css';


class Login extends Component {

  constructor(props){
    super(props);

  } 
  
  onSubmit = ( ) =>{
      this.props.history.push("dashboard");
  }
  render() {
    return (

        <div className="login-box">
            <div className="login-logo">
                <a href="../../index2.html"><b>HackHub</b></a>
            </div>
  
            <div className="login-box-body">
                <p className="login-box-msg">Sign in to start your session</p>

                <form action="../../index2.html" method="post">
                        <div className="form-group has-feedback">
                            <input type="email" className="form-control" placeholder="Email"></input>
                            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" placeholder="Password"></input>
                            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>
                        
                    <div className="row">
                        <div className="col-xs-8">
                        <div className="checkbox icheck">
                            
                        </div>
                        </div> 
                        <div className="col-xs-4">
                        <button type="button" onClick={this.onSubmit} className="btn btn-primary btn-block btn-flat">Sign In</button>
                        </div>
                    </div>
                </form>

                <a href="#">I forgot my password</a><br/>                
            </div>
        </div>
    
    );
  }
}

export default Login;
