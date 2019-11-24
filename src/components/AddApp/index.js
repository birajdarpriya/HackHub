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
 Dropdown,
Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

import avatar1 from '../../assets/utils/images/avatars/avatar1.png';
import avatar2 from '../../assets/utils/images/avatars/avatar2.png';
import avatar3 from '../../assets/utils/images/avatars/avatar3.png';
import avatar4 from '../../assets/utils/images/avatars/avatar4.png';
import avatar5 from '../../assets/utils/images/avatars/avatar5.png';
import addTeamIcon from '../../theme/bower_components/Ionicons/png/512/ios7-plus-outline.png';
import { addNewApp} from "../Utility/filteringApps";
import Const from "../../Const";

class AddApp extends Component {
  constructor(props) {
    super(props);

   this.defaultAvatarList =[avatar1, avatar2, avatar3, avatar4, avatar5];
    //Constants 
    this.hackathonList = [
      { value: "hackademy2019", label: "Hackademy 2019" },
      { value: "codegrind1", label: "Code Grind 1.0" },
      { value: "codegrind2", label: "Code Grind 2.0" },
      { value: "punetoparis", label: "Pune To Paris" },
      { value: "anybodycancode", label: "Any Body Can Code" }
    ];

   this.themeList = {
     "Select a Hackathon" : [],
     "Hackademy 2019" :   [
      { value: "hackademy2019ai", label: "Artificial Intelligence" },
      { value: "hackademy2019ml", label: "Machine Learning" },
      { value: "hackademy2019dataengg", label: "Data Engineering" }
    ],
    
"Code Grind 1.0" :   [
      { value: "codegrind1ai", label: "Code Grind 1.0 - AI" },
      { value: "codegrind1ml", label: "Code Grind 1.0 - ML" },
      { value: "codegrind1dataengg", label: "Code Grind 1.0 - Data Engg" }
    ],

"Code Grind 2.0" :   [
      { value: "codegrind2ai", label: "Code Grind 2.0 - AI" },
      { value: "codegrind2ml", label: "Code Grind 2.0 - ML" },
      { value: "codegrind2dataengg", label: "Code Grind 2.0 - Data Engg" }
    ],

"Pune To Paris" :   [
      { value: "punetoparisai", label: "PTP - Artificial Intelligence" },
      { value: "punetoparisml", label: "PTP -Machine Learning" },
      { value: "punetoparisdataengg", label: "PTP -Data Engineering" }
    ],
"Any Body Can Code" :   [
      { value: "anybodycancodeai", label: " ABCC - Artificial Intelligence" },
      { value: "anybodycancodeml", label: "ABCC - Machine Learning" },
      { value: "anybodycancodedataengg", label: "ABCC -Data Engineering" }
    ],
    };
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.toggleAddTeamMember = this.toggleAddTeamMember.bind(this);
        this.addTeamMember = this.addTeamMember.bind(this);
    this.state = { geritScore: 0 ,
	collapse: true,
      fadeIn: true,
      timeout: 300,
      max_chars : 500,
      selectedFiles : [],
      inputs: ['teammember1'],
      teamMembers : [],
      hashTags : ['hackhub'],
      selectedHackathon : '',
      selectedTheme : '',
      dropdownOpen: false,
      addTeamMemberModal : false
    }
  }

componentDidUpdate () {
  //console.log(JSON.stringify(this.state));
  console.log(JSON.stringify(this.props));
}

  getScore = () => {
    this.setState({ geritScore: 3 });
  }

  onCloseApp = event => {
    this.props.history.push("/dashboard");
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


    console.log(JSON.stringify(this.state));

    let formData = new FormData();
    formData.append("title", this.state.projectName);
    formData.append("symbol", "./appJSONs/thumbnails/image1.jpg");
    formData.append("category", this.state.projectName);
    formData.append("teamname", this.state.teamName);

    this.state.teamMembers.map((teammember, index) => {
          debugger;
          formData.append("teammember"+(index+1), this.state.teamMembers[index] && this.state.teamMembers[index].name);
    })
 
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
      .then( (response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok.');
          }

          this.props.history.push("/dashboard");
        });

    //addNewApp(newAppObj, appDetailsObj);

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
  console.log(this.state)
  }

 addTeamMember() {
     this.toggleAddTeamMember();
     var teamSize = this.state.teamMembers.length;
        if( teamSize < 5) {
                var newTeamMember = {name: this.state.teamMemberName || ("Geek God"+ (teamSize+1)) , size :'50', email : this.state.teamMemberEmail || "example@website.com" , avatar: this.defaultAvatarList[teamSize] || avatar4}
        	this.setState(prevState => ({ teamMembers: prevState.teamMembers.concat([newTeamMember]) }));
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

/*Dropdown methods */
 onMouseEnter() {
        this.setState({dropdownOpen: true});
    }

    onMouseLeave() {
        this.setState({dropdownOpen: false});
    }


toggleAddTeamMember() {
 this.setState({
            addTeamMemberModal: !this.state.addTeamMemberModal
        });
}
  render() {
    return (
      <div className="wrapper">
       <Modal isOpen={this.state.addTeamMemberModal} toggle={this.toggleAddTeamMember} className={this.props.className}>
                    <ModalHeader toggle={this.toggleAddTeamMember}>Adding New Team Member...</ModalHeader>
                    <ModalBody>
			 <Label htmlFor="teamMemberName">Name</Label>
                  <Input type="text" id="teamMemberName" name ="teamMemberName" placeholder="Geek God" onChange={this.handleChange} required />
                <Label htmlFor="teamMemberEmail">Team Name</Label>
                  <Input type="email" id="teamMemberEmail" name ="teamMemberEmail" placeholder="example@website.com" onChange={this.handleChange} required />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="link" onClick={this.toggleAddTeamMember}>Cancel</Button>
                        <Button color="primary" onClick={this.addTeamMember}>Add</Button>{' '}
                    </ModalFooter>
                </Modal>
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


          <div className="pull-right box-tools">

          <button type="button" className = "btn btn-success btn-sm" onClick={this.onCloseApp}><i className="fa fa-times"></i>
          </button>
              </div>

<section className="content">
  <Form role="form" name ="addAppForm">
    <Row>
	<Col xs="12" sm="12" md="12">
            {/*Project Details*/}
	   <Card>
              <CardHeader>
                <strong>Project Details</strong>
                <small> Highlights</small>
              </CardHeader>
              <CardBody>
		<Row>
		<Col xs="12" sm="12" md="3" mb="3">
                  <Label for="hackathonName">Select Hackathon</Label>
        		<Input type="select" name="hackathonName" id="hackathonName" 
				placeholder= "Select a Hackathon"
					onChange={event => this.setState({selectedHackathon: event.target.value})}>
				    {
					this.hackathonList.map(hackathon => {
					    return (
						<option key={hackathon.value} value={hackathon.label}>
						    {hackathon.label}
						</option>
					    )
					})
				    }
        		</Input>
                </Col>

			{ this.state.selectedHackathon && <Col xs="12" sm="12" md="3" mb="3">
			       <Label for="themeName">Select Themes</Label>
				<Input type="select" name="themeName" id="themeName"
					onChange={event => this.setState({selectedTheme: event.target.value})}>
				    {
					this.themeList[this.state.selectedHackathon].map(theme => {
					    return (
						<option key={theme.value} value={theme.label}>
						    {theme.label}
						</option>
					    )
					})
				    }
				</Input>
      		    		</Col>
			 }
           	<Col xs="12" sm="12" md="3" mb="3">
			<Label htmlFor="projectName">Project Name</Label>
                        <Input type="text" id="projectName"name="projectName" maxLength="25"  placeholder="Enter project name" onChange={this.handleChange} required />
			<FormFeedback>Oops! This name is alreadt taken.</FormFeedback>
		</Col>
		<Col xs="12" sm="12" md="3" mb="3">
			 <Label htmlFor="projectVersion">Version</Label>
                      	 <Input type="version" id="projectVersion" name="projectVersion" placeholder="1.2.333" pattern="^(([1-9]+\d*\.)+[1-9]+\d*)|[1-9]+\d*$" onChange={this.handleChange} required />
		</Col>
                </Row>
                <Row>
                <Col xs="12" sm="12" md="12" mb="12">
			<Label htmlFor="projectDesc">Description</Label>
                      	<Input type="textarea" name="projectDesc" id="projectDesc" rows="4" maxLength = "500"
                             placeholder="Keep it short and simple..." onChange={this.handleDescChange.bind(this)} />
		      	<p>Characters Left: {this.state.chars_left}</p>
		</Col>
                </Row>
              </CardBody>
            </Card>
        </Col>
    </Row>
    <Row>
     	<Col xs="12" sm="12" md="6">
            {/*Team Members*/}
	  <Card>
              <CardHeader>
                <strong>Team</strong>
                <small> Details</small>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="teamName">Team Name</Label>
                  <Input type="text" id="teamName" name ="teamName" placeholder="Enter team name" onChange={this.handleChange} required />
                </FormGroup>

<FormGroup>
                  <Label htmlFor="teamMembers">Team Members</Label>
		  
 <Row style={{fontSize: '12px', textAlign : 'center'}}>

{this.state.teamMembers.map(teamMember => <Col xs="4" id={teamMember.name} name={teamMember.name} key={teamMember.name} >
                    <div className="widget-content p-0">
		        <div className="widget-content-wrapper">
		            <div className="widget-content-left mr-3">
		                <div className="widget-content-left">
		                    <img width={teamMember.size} className="rounded-circle" src={teamMember.avatar} alt="Avatar" />
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

{
  (this.state.teamMembers.length < 5) && <Col xs="4" >
<Button  className="btn btn-primary" onClick={ () => this.toggleAddTeamMember() }>
                           <div className="widget-content-wrapper">
		            <div className="widget-content-left mr-3">
		                <div className="widget-content-left">
		                    <img width={50} className="rounded-circle" src={addTeamIcon} alt="Add Tem Member" />
		                </div>
		            </div>
		            <div className="widget-content-left flex2">
		                <div className="widget-heading">Add Team Member</div>
		            </div>
		  	  </div>
</Button>
</Col>
}
    </Row>
		
                </FormGroup>

              </CardBody>
            </Card>
            {/*Team Members End*/}
        </Col>
        <Col xs="12" sm="12" md="6">
            {/*Categories*/}
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

            {/*Categories End*/}
        </Col>
    </Row>
  </Form>
</section>

        <section className="content">
    <form role="form" name="addAppFrm">
        <Row>
          <Col xs="12" sm="6">
         
          </Col>
          <Col xs="12" sm="6">
            
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
