import React, { Component } from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';
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
import { addNewApp} from "../Utility/filteringApps";

class AddApp extends Component {
  constructor(props) {
    super(props);
    this.state = { geritScore: 0 ,
	collapse: true,
      fadeIn: true,
      timeout: 300,
      max_chars : 500,
      selectedFiles : [],
      inputs: ['teammember1'],
      hashTags : ['hackhub']
    }
  }

  getScore = () => {
    this.setState({ geritScore: 3 });
  }

  addApplication = (e) => {

    var newAppObj = {};
    newAppObj.title = this.state.projectName;
    newAppObj.symbol = "./appJSONs/thumbnails/image1.jpg"
    newAppObj.keywords = this.state.projectName;

   var appDetailsObj =  {
    "title": this.state.projectName,
    "identifier": this.state.projectName.toLowerCase(),
    "thumbnail": "./thumbnails/fundstransfer",
    "keywords": this.state.projectName.toLowerCase(),
    "content" : {
      "descriptionText": this.state.projectDesc,
      "additionalResources": [
        "./appJSONs/resources/fundstransfer/image1",
        "./appJSONs/resources/fundstransfer/image2",
        "./appJSONs/resources/fundstransfer/video1"
      ],
      "githubLink" : this.state.projectVersion,
      "nexusLink" : this.state.teamName
    }
  };

    console.log("AddApp list state")
    console.log(this.state)

    let formData = new FormData();
    formData.append("title", this.state.projectName);
    formData.append("symbol", "./appJSONs/thumbnails/image1.jpg");
    formData.append("category", this.state.projectName);
    formData.append("teamname", this.state.teamName);
    formData.append("teammember1", this.state.teammember1);
    formData.append("purpose", this.state.projectDesc);
    formData.append("attachmentname1", this.state.attachmentname1);
    formData.append("attachment1", this.state.fileData1);

    const options = {
    method: "post",
    cache: "no-cache",
    body: formData,
    //credentials: 'include',
    headers: {
      'Accept': 'application/json',
      //'Content-Type': 'multipart/form-data'
      //'Content-Type': 'multipart/form-data'
      //'Content-Type': 'application/x-www-form-urlencoded'
    }
  };


    //fetch("http://127.0.0.1:8080/books/hackhub", options)
    fetch("https://hackhub-001.appspot.com/books/hackhub", options)
      .then( (response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok.');
          }
        });

    //addNewApp(newAppObj, appDetailsObj);
   this.props.history.push("/dashboard");
  }

handleBlur = (e) => {
    let value, name;
    value = e.target.value;
    name = e.target.name;
   debugger;
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

 appendInput() {
        if(this.state.inputs.length < 5) {
        	var newInput = `teammember${this.state.inputs.length + 1}`;
        	this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
	}
  }

createNewBadge(name) {
              return <Badge color="success" className="float-right">name</Badge>;
}

 appendHashTags(event) {
	 if(event.charCode === 13){
	  	var newHashTag = event.target.value;
        	this.setState(prevState => ({ hashTags: prevState.hashTags.concat([newHashTag]) }));
		event.target.value='';
	  }
  }

  handleDescChange(event) {
        this.handleChange(event);
        var input = event.target.value;
        this.setState({
            chars_left: this.state.max_chars - input.length
  	});
   }

onFileSelect(event){
    this.handleChange(event);

    var files = event.target.files
      if(files.length < 5){
         this.setState({
         selectedFile: files,
      	 loaded: 0,
      })
   } else {
    event.target.value = null // discard selected file
   alert("More than 4 files selected");
  }
}

onFileUpload () {
    const data = new FormData();
     for(var x = 0; x<this.state.selectedFile.length; x++) {
       data.append('file', this.state.selectedFile[x]);
   }


       this.setState({"fileData" : data});
}

handleFileUpload = (e) => {
  if (e.target.name == "attachmenturl1") {
    this.setState({"fileData1" : e.target.files[0]});
  }
}


  render() {
    return (
      <div className="wrapper">
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
    <form role="form" name="addAppFrm">
        <Row>
          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>Project Details</strong>
                <small> Highlights</small>
              </CardHeader>
              <CardBody>
                    <FormGroup>
                      <Label htmlFor="projectName">Name</Label>
                      <Input type="text" id="projectName"name="projectName" placeholder="Enter project name" onChange={this.handleChange} required />
                    </FormGroup>
		  <FormGroup>
                      <Label>Project Id </Label>
                      <p className="form-control-static">system-generated-id</p>
                  </FormGroup>
                    <FormGroup>
                      <Label htmlFor="projectVersion">Version</Label>
                      {/*}<Input type="text" id="projectVersion" name="projectVersion" placeholder="0.0.1" pattern="(\d+\.)(\d+\.)(\d+\.)(\d)" onChange={this.handleChange}  onBlur={this.handleBlur} required />*/}
                      <Input type="text" id="projectVersion" name="projectVersion" placeholder="0.0.1" pattern="(\d+\.)(\d+\.)(\d+\.)(\d)" onChange={this.handleChange} required />
                    </FormGroup>
		    <FormGroup >
                      <Label htmlFor="projectDesc">Description</Label>
                      <Input type="textarea" name="projectDesc" id="projectDesc" rows="9" maxLength = "500"
                             placeholder="Keep it short and simple..." onChange={this.handleDescChange.bind(this)} />
		      <p>Characters Left: {this.state.chars_left}</p>

                  </FormGroup>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>Team</strong>
                <small> Details</small>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="teamName">Team Name</Label>
                  <Input type="text" id="teamName" name ="teamName" placeholder="Enter your team name" onChange={this.handleChange} required />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="teamMembers">Team Members</Label>
		   <div id="dynamicInput">
                       {this.state.inputs.map(input => <Input  type="text" id={input} name={input} placeholder="Enter team member" onChange={this.handleChange} key={input}/>)}
                   </div>
                  <button type="button" id="addTeamMember" onClick={ () => this.appendInput() }>
                    +
               </button>
                </FormGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Documents</strong> Attachments
              </CardHeader>
              <CardBody>
                  <FormGroup>
                  {/*<FormGroup className="files">*/}
                      {/*}<Label htmlFor="file-multiple-input">Multiple File input</Label>*/}
                      <Label htmlFor="attachmentname1">Attachment Description</Label>
                      <Input type="text" id="attachmentname1" name ="attachmentname1" placeholder="Enter attachment description" onChange={this.handleChange} />
                      <Label htmlFor="attachmentname1">Attachment</Label>
                      <Input type="file" id="attachmenturl1" name="attachmenturl1" onChange={this.handleFileUpload} />
                      {/*}<Input  type="file" id="file-multiple-input" name="file-multiple-input"  onChange={this.onFileSelect.bind(this)} multiple />
                       <button type="button" className="btn btn-success pull-right" onClick={this.onFileUpload.bind(this)}>Upload</button>*/}

                  </FormGroup>

              </CardBody>
              { /*<CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter> */}
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Categories</strong>
              </CardHeader>
              <CardBody>
                  <FormGroup>
                   <div id="hashTagsDiv">
                       {this.state.hashTags.map(hashTag => <Badge  type="text" id="hashTags" key={hashTag}>{hashTag} </Badge>)}
                   </div>


		       <div className="card-header-actions">
                  	  {this.componentList}
               	       </div>
		   </FormGroup>
		   <FormGroup >
                        <Label htmlFor="prependedInput">Keywords</Label>
                        <div className="controls">
                          <InputGroup className="input-prepend">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>#</InputGroupText>
                            </InputGroupAddon>
                            <Input id="prependedInput" size="16" type="text" onKeyPress={ (event) =>this.appendHashTags(event) }/>
                          </InputGroup>
                          <p className="help-block">Keep adding keywords and hashtags</p>
                        </div>

                  </FormGroup>

              </CardBody>
              <CardFooter>

              </CardFooter>
            </Card>

          </Col>
        </Row>
        <div className="box-footer">
            <button type="button" className="btn btn-primary" onClick={this.getScore}>Check Gerit Score</button>{this.state.getScore}
            {this.state.getScore > 0 && <span>+{this.state.getScore}</span>}
            <button type="button" className="btn btn-primary" style={{ float: "right" }} onClick={this.addApplication}>Submit</button>
        </div>
    </form>
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
