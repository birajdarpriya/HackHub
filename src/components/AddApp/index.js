import React, { Component } from 'react';

import '../../theme/bower_components/bootstrap/dist/css/bootstrap.min.css';
import '../../theme/bower_components/font-awesome/css/font-awesome.min.css';
import '../../theme/bower_components/Ionicons/css/ionicons.min.css';
import '../../theme/dist/css/AdminLTE.css';
import '../../theme/plugins/iCheck/square/blue.css';

import '../../theme/bower_components/morris.js/morris.css';
import '../../theme/bower_components/jvectormap/jquery-jvectormap.css';
import '../../theme/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';
import '../../theme/bower_components/bootstrap-daterangepicker/daterangepicker.css';

import '../../theme/dist/css/skins/_all-skins.min.css';
import '../../theme/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css';
// import '../../theme/bower_components/jquery/dist/jquery.min.js';


class AddApp extends Component {
  constructor(props) {
    super(props);
    this.state = { geritScore: 0 };
  }

  getScore = () => {
    this.setState({ geritScore: 3 });
  }

  addApplication = (e) => {
    var appObj = {};
    appObj.content = {};
    appObj.title = this.state.appTitle;
    appObj.gitHubLink = this.state.gitLink;
    appObj.nexusLink = this.state.nexusLink;
    appObj.content.descriptionText = this.state.appDesc;
   this.props.history.push("/dashboard");
  }

  handleChange = (e) => {
    let value, name;
    value = e.target.value;
    name = e.target.name;

    if ((!e.target.value || !e.target.name) && e.target.value !== false) {
      value = document.getElementById(e.target.id).value;
      name = document.getElementById(e.target.id).name;
    }
    var obj = {};
    obj[name] = value;
    this.setState(obj);
    console.log(this.state);
  }

  render() {
    return (
      <div className="wrapper">
        <header className="main-header">
          <a href="index2.html" className="logo">
            <span className="logo-mini"><b>A</b>LT</span>
            <span className="logo-lg"><b>HackHub</b></span>
          </a>
          <nav className="navbar navbar-static-top">
            <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
              <span className="sr-only">Toggle navigation</span>
            </a>
            <div className="navbar-custom-menu">
              <ul className="nav navbar-nav">
                <li className="dropdown messages-menu">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-plus"></i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <aside className="main-sidebar">
          <section className="sidebar">
            <div className="user-panel">
              <div className="pull-left image">
                <img src={require("../../theme/dist/img/user2-160x160.jpg")} className="img-circle" alt="User Image" />
              </div>
              <div className="pull-left info">
                <p>Priya Indi</p>
                <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
              </div>
            </div>
            <ul className="sidebar-menu" data-widget="tree">
              {/* <li className="header">MAIN NAVIGATION</li> */}
              <li className="active treeview">
                <a href="#">
                  <i className="fa fa-dashboard"></i> <span>Departments</span>
                  <span className="pull-right-container">
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li className="active"><a href="index.html"><i className="fa fa-circle-o"></i> RBWM</a></li>
                  <li><a href="index2.html"><i className="fa fa-circle-o"></i> GBM</a></li>
                </ul>
              </li>
              <li className="treeview">
                <a href="#">
                  <i className="fa fa-files-o"></i>
                  <span>Domains</span>
                  <span className="pull-right-container">
                    <span className="label label-primary pull-right">4</span>
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li><a href="pages/layout/top-nav.html"><i className="fa fa-circle-o"></i> Insurance</a></li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-th"></i> <span>Screen Resolutions</span>
                </a>
              </li>
            </ul>
          </section>
        </aside>
        <div className="content-wrapper">
          <section className="content-header">
            <h1>
              Upload your application
            {/* <small>Preview</small> */}
            </h1>
            {/* <ol className="breadcrumb">
              <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
              <li><a href="#">Forms</a></li>
              <li className="active">General Elements</li>
            </ol> */}
          </section>
          <section className="content">
            <div className="row">
              <div className="col-md-12">
                <div className="box box-primary">
                  <div className="box-header with-border">
                    <h3 className="box-title">Application Details</h3>
                  </div>
                  <form role="form" name="addAppFrm">
                    <div className="box-body">
                      <div className="form-group">
                        <label htmlFor="appTitle">Application Title (It should be unique)</label>
                        <input type="text" className="form-control" name="appTitle" id="appTitle" placeholder="Enter application name" onChange={this.handleChange} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="gitLink">GitHub Repository Link</label>
                        <input type="url" className="form-control" name="gitLink" id="gitLink" placeholder="Provide gihub repo url here" onChange={this.handleChange} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="nexusLink">Nexus Package Link</label>
                        <input type="url" className="form-control" name="nexusLink" id="nexusLink" placeholder="Provide nexus package url here" onChange={this.handleChange} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="appDesc">Application Description</label>
                        <textarea className="form-control" name="appDesc" id="appDesc" placeholder="Provide application information here" onChange={this.handleChange} />
                      </div>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" id="agreeCheck" name="agreeCheck" onChange={this.handleChange} /> I agree
                      </label>
                      </div>
                    </div>
                    <div className="box-footer">
                      <button type="submit" className="btn btn-primary" onClick={this.getScore}>Check Gerit Score</button>{this.state.getScore}
                      {this.state.getScore > 0 && <span>+{this.state.getScore}</span>}
                      <button type="submit" disabled={!this.state.agreeCheck} className="btn btn-primary" style={{ float: "right" }}onClick={this.addApplication}>Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
        <footer className="main-footer">
          <div className="pull-right hidden-xs">
            <b>Version</b> 1.0.0
        </div>
          <strong>Copyright &copy; 2019 EEP P20 Team Assignment HackHub.</strong> All rights
          reserved.
      </footer>
      </div >
    );
  }
}

export default AddApp;
