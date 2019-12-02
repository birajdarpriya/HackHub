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

import avatar1 from '../../assets/utils/images/avatars/avatar1.png';
import avatar2 from '../../assets/utils/images/avatars/avatar2.png';
import avatar3 from '../../assets/utils/images/avatars/avatar3.png';
import avatar4 from '../../assets/utils/images/avatars/avatar4.png';
import avatar5 from '../../assets/utils/images/avatars/avatar5.png';
// import '../../theme/bower_components/jquery/dist/jquery.min.js';
import { addNewApp} from "../Utility/filteringApps";
//import { Redirect } from 'react-router-dom';
import Const from "../../Const";
import { decode } from 'he';
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class ViewApp extends Component {
  constructor(props) {
    super(props);

    this.state = { geritScore: 0 ,
	collapse: true,
      fadeIn: true,
      timeout: 300,
      max_chars : 500,
      selectedFiles : [],
      inputs: ['teammember1'],
      hashTags : ['hackhub'],

      // assign value
      id: this.props.location.state.data[0].id,
      projectName: this.props.location.state.data[0].title,
      symbol: "./appJSONs/thumbnails/image1.jpg",
      category: this.props.location.state.data[0].title,
      teamName: this.props.location.state.data[0].teamname,
      teammember1: this.props.location.state.data[0].teammember1,
      teammember2: this.props.location.state.data[0].teammember2,
      teammember3: this.props.location.state.data[0].teammember3,
      teammember4: this.props.location.state.data[0].teammember4,
      teammember5: this.props.location.state.data[0].teammember5,
      projectDesc: decode(this.props.location.state.data[0].purpose),
      attachmentname1: this.props.location.state.data[0].attachmentname1,
      attachmenturl1: this.props.location.state.data[0].attachmenturl1,
teamMembers : [{name: "abc", email: "123"}]

      //attachment1: this.props.location.state.data[0].fileData1
    }

    if (this.state.teammember2) {
      this.state = {
        inputs: ['teammember1', 'teammember2']
      }
    }

    if (this.state.teammember3) {
      var newInput = `teammember${this.state.inputs.length + 1}`;
      this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
    }

    if (this.state.teammember4) {
      var newInput = `teammember${this.state.inputs.length + 1}`;
      this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
    }

    if (this.state.teammember5) {
      var newInput = `teammember${this.state.inputs.length + 1}`;
      this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
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


    let formData = new FormData();
    formData.append("title", this.state.projectName);
    formData.append("symbol", "./appJSONs/thumbnails/image1.jpg");
    formData.append("category", this.state.projectName);
    formData.append("teamname", this.state.teamName);
    formData.append("teammember1", this.state.teammember1);
    formData.append("teammember2", this.state.teammember2);
    formData.append("teammember3", this.state.teammember3);
    formData.append("teammember4", this.state.teammember4);
    formData.append("teammember5", this.state.teammember5);
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

    fetch(Const.BACKENDURL + "books/hackhub", options)
    //fetch("https://hackhub-001.appspot.com/books/hackhub", options)
      .then( (response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok.');
          }
        });

    //addNewApp(newAppObj, appDetailsObj);
   //this.props.history.push("/dashboard");
   this.props.push("/dashboard");
  }

  updateApplication = (e) => {

    let formData = new FormData();
    formData.append("id", this.state.id);
    formData.append("title", this.state.projectName);
    formData.append("symbol", "./appJSONs/thumbnails/image1.jpg");
    formData.append("category", this.state.projectName);
    formData.append("teamname", this.state.teamName);
    formData.append("teammember1", this.state.teammember1);
    formData.append("teammember2", this.state.teammember2);
    formData.append("teammember3", this.state.teammember3);
    formData.append("teammember4", this.state.teammember4);
    formData.append("teammember5", this.state.teammember5);
    formData.append("purpose", this.state.projectDesc);
    formData.append("attachmentname1", this.state.attachmentname1);
    formData.append("attachment1", this.state.fileData1);

    const options = {
    method: "put",
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
    fetch(Const.BACKENDURL + "books/hackhub", options)
      .then( (response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok.');
          }

          this.setState({
             redirect: true
           })
        });

    //addNewApp(newAppObj, appDetailsObj);
   //this.props.history.push("/dashboard");
   //this.props.push("/dashboard");
  }


  deleteApplication = (e) => {

    let formData = new FormData();
    formData.append("id", this.props.location.state.data[0].id);

    const options = {
    method: "delete",
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
    fetch(Const.BACKENDURL + "books/hackhub", options)
      .then( (response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok.');
          }

          this.setState({
             redirect: true
           })
        });

    //addNewApp(newAppObj, appDetailsObj);
   //this.props.history.push("/dashboard");
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

renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/dashboard' />
    }
  }

  onCloseApp = event => {
    this.props.history.push("/dashboard");
  }

  render() {
    
    const applicationData = this.props.location.state.data[0];

    const id = applicationData.id;
    const projectName = applicationData.title;
    var version = applicationData.symbol;
    version = version.indexOf(".jpg") ? "1.2.0" : version;

    const teamName = applicationData.teamname;
    const defaultAvatarList = [avatar1, avatar2, avatar3, avatar4, avatar5]

    var teamMembers = [];
     for (var i=1; i<6; i++) {
          var teamMember = applicationData["teammember"+i] && {name : applicationData["teammember"+i] , 
		     email :  (applicationData["teammemberemail"+i] ? applicationData["teammemberemail"+i] : (applicationData.teammember1+ "@example.com")), avatar : defaultAvatarList[i]};
          teamMember && teamMembers.push(teamMember);
      }

      const colorMap = {
       "Hackademy 2019" : {color : "bg-aqua", icon : "ion-bag"},
       "Code Grind 1.0" : {color : "bg-red", icon : "ion-stats-bars"},
       "Code Grind 2.0" : {color : "bg-purple", icon : "ion-person-add"},
       "Pune To Paris" : {color : "bg-green", icon : "ion-pie-graph"},
       "Any <body> Can Code" : {color : "bg-yellow", icon : "ion-compass"},
       "default" : {color : "bg-gray", icon : "ion-bookmark"},
       null : {color : "bg-gray", icon : "ion-bookmark"},
     }

    const hackathonName = applicationData.hackathonName;
    const colorCode = colorMap[hackathonName] ||  colorMap["default"] ;
    const category = applicationData.category;
    const projectDesc = applicationData.purpose;
    const attachmentname1 = (!applicationData.attachmentname1 || applicationData.attachmentname1 === "undefined") ? "Attachment" : applicationData.attachmentname1 ;
    const attachmenturl1 = applicationData.attachmenturl1;
    const keywords = applicationData.keywords && applicationData.keywords.split(' ') || ["hackathon"];
 




    return (

      <div className="wrapper">
      {this.renderRedirect()}
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
                  <a href="/add-app" className="dropdown-toggle" data-toggle="dropdown">
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
                  <li><a href="#" id = "Hackademy 2019" name="Hackademy 2019" onClick ={this.handleCategorySelected}><i className="fa fa-circle-o"></i> Hackademy 2019</a></li>
<li><a href="#" id = "Code Grind 1.0" name="Code Grind 1.0" onClick ={this.handleCategorySelected}><i className="fa fa-circle-o"></i> Code Grind 1.0</a></li>
<li><a href="#" id = "Code Grind 2.0" name="Code Grind 2.0" onClick ={this.handleCategorySelected}><i className="fa fa-circle-o"></i> Code Grind 2.0</a></li>
<li><a href="#" id = "Pune to Paris" name="Pune to Paris" onClick ={this.handleCategorySelected}><i className="fa fa-circle-o"></i> Pune to Paris</a></li>
<li><a href="#" id = "Any <body> Can Code" name="Any <body> Can Code" onClick ={this.handleCategorySelected}><i className="fa fa-circle-o"></i> Any &lt; body &gt; Can Code</a></li>
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
              View your application
            {/* <small>Preview</small> */}
            </h1>
          </section>
     {/* <ol className="breadcrumb">
              <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
              <li><a href="#">Forms</a></li>
              <li className="active">General Elements</li>
            </ol> */}

         {/* <div class="pull-right box-tools">

          <button type="button" class="btn btn-success btn-sm" onClick={this.onCloseApp}><i class="fa fa-times"></i>
          </button>
              </div> */}
        <section className="content"><Row>
  <Col xs="12" sm="12" md="12">
            {/*Categories*/}
           <Card>
              <CardHeader className = {"widget-user-header " +colorCode.color}>


				<div class="pull-right box-tools">
				{/*<button type="button" class="btn btn-success btn-sm" data-widget="collapse"><i class="fa fa-minus"></i>
				</button>*/}
				<button type="button" class="btn btn-success btn-sm" onClick={this.onCloseApp}><i className="fa fa-times"></i>
				</button>
                                <div className="pull-left mr-4 small-box">
                                <div className="inner" >
                                <h4 >{hackathonName}</h4>
				<h5 >{category}</h5>
                                </div>
                                <div className="icon">
			          <i className={"icon " + colorCode.icon}></i>
			        </div>
                                
                                </div>
			      </div>

      				<div class="widget-user-image">
        				<img class="img-circle" src="../dist/img/user7-128x128.jpg" alt="User Avatar" />
      				</div>
				<h3 class="widget-user-username">{projectName}</h3>
      				<h5 class="widget-user-desc">{version}</h5>


              </CardHeader>
              <CardBody>
                
                 <Row>
                 <Col xs="12" sm="12" md="12">
                  <div>
                   <p>{projectDesc}</p>
                  </div>
		  
                  </Col>  </Row>           </CardBody>
            </Card>

            {/*Categories End*/}
        </Col>
        </Row>


    <form role="form" name="addAppFrm">
        <Row className="mt-3">
          <Col xs="12" sm="6">
            {/*<Card>
              <CardHeader>
                <strong>Project Details</strong>
                <small> Highlights</small>
              </CardHeader>
              <CardBody>
                    <FormGroup>
                      <Label htmlFor="projectName">Name</Label>
                      <p>{projectName}</p>
                    </FormGroup>


		    <FormGroup >
                      <Label htmlFor="projectDesc">Description</Label>
                      <p>{projectDesc}</p>

                  </FormGroup>
              </CardBody>
            </Card> */}

  <Card>
              <CardHeader className = {colorCode.color}>
                <strong>Team</strong>
                <small> Details</small>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="teamName">Team Name</Label>
                  <p>{teamName}</p>
                </FormGroup>

<FormGroup>
                  <Label htmlFor="teamMembers">Team Members</Label>
		  
 <Row style={{fontSize: '12px', textAlign : 'center'}}>

{ teamMembers && teamMembers.length >0 && teamMembers.map(teamMember => <Col xs="4" id={teamMember.name} name={teamMember.name} key={teamMember.name} >
                    <div className="widget-content p-0">
		        <div className="widget-content-wrapper">
		            <div className="widget-content-left mr-3">
		                <div className="widget-content-left">
		                    <img width="50" className="rounded-circle" src={teamMember.avatar} alt="Avatar" />
		                </div>
		            </div>
		            <div className="widget-content-left flex2">
		                <div className="widget-heading">{teamMember.name}</div>
		                <div className="widget-subheading opacity-7">{teamMember.email}</div>
		            </div>
		        </div>
		    </div>
</Col>
)}


    </Row>
                </FormGroup>

              </CardBody>
            </Card>
          </Col>

<Col xs="12" md="6">
            <Card>
              <CardHeader className = {colorCode.color}>
                <strong>Documents</strong> Attachments
              </CardHeader>
              <CardBody>
                  <FormGroup>
                  {/*<FormGroup className="files">*/}
                      {/*}<Label htmlFor="file-multiple-input">Multiple File input</Label>*/}
                      <p>
                      {attachmenturl1 !== "" ? (
                        <a href={attachmenturl1} target="_blank">{attachmentname1}</a>
                      ) : (
                        <div></div>
                      )}
                      </p>
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
</Row>
<Row className="mt-3">
  <Col xs="12" sm="12" md="12">
            {/*Categories*/}
           <Card>
              <CardHeader className = {colorCode.color}>
                <strong>Categories</strong>
              </CardHeader>
              <CardBody>
                
                 <Row>
                 <Col xs="12" sm="12" md="12">
                  <FormGroup>
                   <div id="hashTagsDiv"> 
                       {keywords.map(hashTag => <Badge style={{fontSize : "90%"}} className="mb-2 mr-2" color="dark" 
				      type="badge" id="hashTags" key={hashTag} onDoubleClick={ (event) =>this.deleteHashTags(event) }>{hashTag} </Badge>
                        )}

                   </div>
                     
		   </FormGroup>
		  
                  </Col>  </Row>           </CardBody>
              <CardFooter>

              </CardFooter>
            </Card>

            {/*Categories End*/}
        </Col>
        </Row>
        <div className="box-footer">
            {/*<button type="button" className="btn btn-primary" onClick={this.getScore}>Check Gerit Score</button>{this.state.getScore}*/}

            {this.state.getScore > 0 && <span>+{this.state.getScore}</span>}

            <button type="button" className="btn btn-primary" style={{ float: "right" }} onClick={this.deleteApplication}>Delete</button>
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

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};

export default withRouter(connect(mapStateToProps)(ViewApp));
