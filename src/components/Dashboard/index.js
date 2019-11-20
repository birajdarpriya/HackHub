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
import SearchApp from "../AppResults/SearchApp";
import AppResults from "../AppResults/AppResults";
import HackHubList from "../AppResults/HackHubList";
import { filterApps, filterAppsData, fetchApplcationDetails, filterhackhublist } from "../Utility/filteringApps";
import AppDetails from "../AppResults/AppDetails";
import HackHubDetail from "../AppResults/HackHubDetail";
import Const from "../../Const";

class Dashboard extends Component {

  componentDidMount () {
    fetch(Const.BACKENDURL + "books/hackhub")
      .then(res => res.json())
      .then(this.onLoad);
  }

  onLoad = (data) => {
    this.setState({
      apps: data,
      filterApps: filterhackhublist(data, this.state.searchString, 20),
      appDetailsData: fetchApplcationDetails("Fund Transfer"),
      searchString: "",
      showApp: false
    });

  }



  constructor(props) {
    super(props);
    let pageTitle = "";
    let url = window.location.href;
    let page = url.substr(url.lastIndexOf('/') + 1);
    let showAppState = false;
    if (page === 'login') {
      pageTitle = 'Login';
      showAppState = true;
    }
    if (page === 'mailbox') {
      pageTitle = 'Mailbox';
      showAppState = true;
    }

    this.state = {
      filterApps: "",
      appDetailsData: "",
      searchString: "",
      showApp: false
    };

  }

  handleSearchChange = event => {
    this.setState({
      //filterApps: filterApps(event.target.value, 20),
      searchString: event.target.value,
      filterApps: filterhackhublist(this.state.apps, event.target.value, 20)

    });
    /*
    fetch('http://127.0.0.1:8080/books/appList')
      .then(res => res.json())
      .then(this.onLoad);
    */
  };

  handleAppSelected = id => {
    /*fetch('http://hackhub-001.appspot.com/books/hackhub/' + id)
      .then(res => res.json())
      .then(data => {
        this.setState({
          appDetailsData: data,
          showApp: true
        });
      });*/

      fetch(Const.BACKENDURL + "books/hackhub/" + id)
        .then(res => res.json())
        .then(data => {
          this.props.history.push("/view-app", {data : data});
        });
  }

  handleAppClose = event => {
    this.setState({
      showApp: false
    });
  }

  onAdd = () => {
    this.props.history.push("/add-app");
  }

  render () {
    return this.state.filterApps ?
      this.renderData() :
      this.renderLoading()
  }

  renderLoading () {
    return <div>Loading...</div>
  }

  renderData() {
    return (
      <div className="wrapper">

        {/*Header Start*/}
        <header className="main-header">
          <a href="/dashboard" className="logo">
            <span className="logo-mini"><b>A</b>LT</span>
            <span className="logo-lg"><b>HackHub</b></span>
          </a>

          <nav className="navbar navbar-static-top">
            <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
              <span className="sr-only">Toggle navigation</span>
            </a>

            <div className="navbar-custom-menu">
              <ul className="nav navbar-nav">
                <li className="dropdown messages-menu" onClick={this.onAdd}>
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-plus"></i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        {/*Header End*/}
        {/*Aside Start*/}
        <aside className="main-sidebar">
          <section className="sidebar">

            <div className="user-panel">
              <div className="pull-left image">
                <img src={require("../../theme/dist/img/avatar3.png")} className="img-circle" alt="User Image" />
              </div>
              <div className="pull-left info">
                <p>Priya Birajdar</p>
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
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li><a href="pages/layout/top-nav.html"><i className="fa fa-circle-o"></i> Insurance</a></li>
                </ul>
              </li>
              <li>
                <a href="pages/widgets.html">
                  <i className="fa fa-th"></i> <span>Screen Resolutions</span>
                </a>
              </li>
            </ul>
          </section>
        </aside>
        {/*Aside end*/}
        <div className="content-wrapper">
          <div style={{ display: this.state.showApp ? 'none' : 'block' }}>

            <section className="content-header">
              <h1>
                Search </h1>
              <SearchApp textChange={this.handleSearchChange} />
            </section>

            <section className="content-header">
              <h1>
                Featured Apps {this.state.searchSting}
                <small>showing all apps</small>
              </h1>
            </section>

            <section className="content">
              <div className="row">
                <HackHubList onSelectApp={this.handleAppSelected} searchResults={this.state.filterApps} />
              </div>
            </section>
          </div>
          {this.state.showApp &&
            <div>


                  <HackHubDetail appDetailsData={this.state.appDetailsData} onCloseApp={this.handleAppClose} />


            </div>
          }
        </div>

        <footer className="main-footer">
          <div className="pull-right hidden-xs">
            <b>Version</b> 1.0.0
        </div>
          <strong>Copyright &copy; 2019 EEP P20 Team Assignment HackHub.</strong> All rights
          reserved.
      </footer>
        <div className="control-sidebar-bg"></div>
      </div>
    );
  }
}

export default Dashboard;
