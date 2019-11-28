import React, { Component } from 'react';
import {
  Badge,
  Button,  ButtonGroup,
  Card,  CardBody,  CardFooter,  CardHeader, CardTitle,
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

    this.techStackList = ["ReactJS 13", "ReactJS 16", "Angular 6.0", "Angular 2", "PolymerJS", "OxyGen JS", "Javascript/HTML", "python", "ruby", "Django", "Sever JS", "scala" , "cobol", "puppets", "Bamboo", "Jenkin", "GitHub", "Google Cloud", "AWS", "NLP", "Artificial Intelligence", "Machine Learning", "Ruby on Rails", "Java", "Node.js", "JSF", "Spring Boot", "SQL", "Pascal", "Pega", "Android", "iOS", "Oracle", "Blockchain", "Big Data", "Hadoop", "MongoDB" ];

this.businessFunctionList = [ "Banking" , "Core Banking", "Digital Banking", "Currency Exchange", "Stock Exchange", "Commodities", "Co-operative Bank", "Credit Cards", "Import-Export", "Loans", "Advances", "Billing", "Payments",  "e-Banking", "Net Banking", "Phone Banking", "Branch", "Call Centers","Staff Channels","Channels", "ATM", "Self Servicing", "RBWM", "GBM", "Insurance", "Investment Bankig", "Alexa", "Internet of Things" , "IOT", "Social Service", "Infrastructure", "Agriculture", "Education", "Private Sector" , "Government", "Automobiles", "Textiles"];
 

    this.hackathonList = [
      { value: "hackademy2019", label: "Hackademy 2019" },
      { value: "codegrind1", label: "Code Grind 1.0" },
      { value: "codegrind2", label: "Code Grind 2.0" },
      { value: "punetoparis", label: "Pune To Paris" },
      { value: "anybodycancode", label: "Any <body> Can Code" }
    ];

   this.themeList = {
     "Select a Hackathon" : [],
     "Hackademy 2019" :   [
      { value: "hackademy2019ai", label: "Hackademy 2019 -AI" },
      { value: "hackademy2019ml", label: "Hackademy 2019 - Machine Learning" },
      { value: "hackademy2019dataengg", label: "Hackademy 2019 - Data Engineering" }
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
"Any <body> Can Code" :   [
      { value: "anybodycancodeai", label: " ABCC - Artificial Intelligence" },
      { value: "anybodycancodeml", label: "ABCC - Machine Learning" },
      { value: "anybodycancodedataengg", label: "ABCC -Data Engineering" }
    ],
    };
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.toggleDisplayModal = this.toggleDisplayModal.bind(this);
        this.addTeamMember = this.addTeamMember.bind(this);
        this.addTechStack = this.addTechStack.bind(this);
        this.addBusFunc = this.addBusFunc.bind(this);
        this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
        this.onBusinessCheckboxClick = this.onBusinessCheckboxClick.bind(this);

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
      addTeamMemberModal : false,
      addTechStackModal : false,
      addBusFnModal :false,
      duplicateKeyword :false,
      techSelected: [],
      businessSelected : [],
      maxTechStack : false
    }
  }

componentDidUpdate () {
  //console.log(JSON.stringify(this.state));
 // console.log(JSON.stringify(this.props));
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

    var keywordsList = this.state.hashTags;
    formData.append("hackathonName", this.state.selectedHackathon);
    formData.append("category", this.state.selectedTheme);
    formData.append("title", this.state.projectName);
    formData.append("symbol", this.state.projectVersion);
    formData.append("purpose", this.state.projectDesc);



    keywordsList.push(this.state.selectedHackathon, this.state.selectedTheme, this.state.projectName, this.state.teamName )
    /*Team Details */
    formData.append("teamname", this.state.teamName);
    this.state.teamMembers.map((teammember, index) => {
          debugger;
          formData.append("teammember"+(index+1), teammember && teammember.name);
          formData.append("teammemberemail"+(index+1), teammember && teammember.email);
          keywordsList.push(teammember.name, teammember.email);
    })
    
    /*Keywords*/ 

   
    formData.append("keywords", keywordsList.join(' ') );
    /*Attachments*/
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

 addTeamMember(event) {
     this.toggleDisplayModal(event);
     var teamSize = this.state.teamMembers.length;
        if( teamSize < 5) {
                var newTeamMember = {name: this.state.teamMemberName || ("Geek God"+ (teamSize+1)) , size :'50', email : this.state.teamMemberEmail || "example@website.com" , avatar: this.defaultAvatarList[teamSize] || avatar4}
        	this.setState(prevState => ({ teamMembers: prevState.teamMembers.concat([newTeamMember]) }));
	}

  }

 addTechStack(event) {
     this.toggleDisplayModal(event);
     this.setState(prevState => ({ hashTags: [ ...prevState.hashTags, ...prevState.techSelected ], duplicateKeyword : false }));

  }

addBusFunc(event) {
     this.toggleDisplayModal(event);
     this.setState(prevState => ({ hashTags: [ ...prevState.hashTags, ...prevState.businessSelected ], duplicateKeyword : false }));

  }
createNewBadge(name) {
              return <Badge color="success" className="float-right">name</Badge>;
}

 appendHashTags(event) {
         var newHashTag = event.target.value;
	 if(event.charCode === 13){
                if(!this.state.hashTags.includes(newHashTag)) {
			this.setState(prevState => ({ hashTags: prevState.hashTags.concat([newHashTag]), duplicateKeyword : false }));
             		event.target.value='';
		   } else {
		               this.setState(prevState => ({duplicateKeyword : true }));
		   }

	  }

  }

  deleteHashTags(selectedTag) {
                var newHashTags = this.state.hashTags.filter((targetTag) => {  return targetTag !== selectedTag.target.innerText});
                
                 /*Note that if the hashtag is added by Tech Stack Selection, it has to be unselected while deleting hasTag*/
var unselectTechStack = this.state.techSelected.filter((targetTechStack) => {  return targetTechStack !== selectedTag.target.innerText});
        	this.setState(prevState => ({ hashTags: newHashTags, techSelected: unselectTechStack, duplicateKeyword : false }));

/*Note that if the hashtag is added by Business Function, it has to be unselected while deleting hasTag*/
var unselectTechStack = this.state.businessSelected.filter((targetBusFn) => {  return targetBusFn !== selectedTag.target.innerText});
        	this.setState(prevState => ({ hashTags: newHashTags, businessSelected: unselectTechStack, duplicateKeyword : false }));

	  
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

 onCheckboxBtnClick(selected) {
        const index = this.state.techSelected.indexOf(selected);

		      if (index < 0) {
			       if(this.state.techSelected.length > 7){
					 this.setState({ maxTechStack: true});
			       } else {
			       		this.state.techSelected.push(selected);
					this.setState({ maxTechStack: false});
                               }
			} else {
			    this.state.techSelected.splice(index, 1);
               		    this.setState({ maxTechStack: false});
			}
			this.setState({techSelected: [...this.state.techSelected]});
       
    }


 onBusinessCheckboxClick(selected) {
        const index = this.state.businessSelected.indexOf(selected);

		      if (index < 0) {
			       if(this.state.businessSelected.length > 3){
					 this.setState({ maxTechStack: true});
			       } else {
			       		this.state.businessSelected.push(selected);
					this.setState({ maxTechStack: false});
                               }
			} else {
			    this.state.businessSelected.splice(index, 1);
               		    this.setState({ maxTechStack: false});
			}
			this.setState({businessSelected: [...this.state.businessSelected]});
       
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


toggleDisplayModal(event) {
 this.setState({
            [event.target.name]: !this.state[event.target.name]
        });
}
  render() {
    return (
      <div className="wrapper">
        {/*Add Team Member Modal */}
       <Modal isOpen={this.state.addTeamMemberModal} toggle={this.toggleDisplayModal} className={this.props.className}>
                    <ModalHeader className = "bg-light-blue" toggle={this.toggleDisplayModal}>Adding New Team Member...</ModalHeader>
                    <ModalBody className="d-table-cell">
                     <Row className="justify-content-center align-self-center">
                      <Col md="3" sm="6" xs="12" className="d-table-cell mx-auto">
		                    <img style={{fontSize: '20px', textAlign : 'center', marginTop: '20%'}} width={100} className="rounded-circle d-inline-block" src={this.defaultAvatarList[this.state.teamMembers.length]} alt="Avatar" />
                      </Col>
		      <Col md="9" sm="6" xs="12">
				 <Label htmlFor="teamMemberName">Name</Label>
				  <Input type="text" id="teamMemberName" name ="teamMemberName" placeholder="Geek God"     
                                   onChange={this.handleChange} required />
				<Label htmlFor="teamMemberEmail">Team Name</Label>
				  <Input type="email" id="teamMemberEmail" name ="teamMemberEmail" placeholder="example@website.com"  
                                    onChange={this.handleChange} required />
                      </Col>
                     </Row>
			 
                    </ModalBody>
                    <ModalFooter>
                        <Button color="link" name="addTeamMemberModal" onClick={this.toggleDisplayModal}>Cancel</Button>
                        <Button color="primary" name="addTeamMemberModal" onClick={this.addTeamMember}>Add</Button>{' '}
                    </ModalFooter>
                </Modal>
        {/*Add Technology Stack Modal */}

<Modal isOpen={this.state.addTechStackModal} toggle={this.toggleDisplayModal}>
                    <ModalHeader className = "bg-light-blue" toggle={this.toggleDisplayModal}>Adding Technology Stack...</ModalHeader>
                    <ModalBody className="d-table-cell">
                     <Row className="justify-content-center align-self-center">
                        <Col lg="12">
                            <Card className="main-card">
                                <CardBody>
                                    <CardTitle>Available Technologies</CardTitle>
                                    <div className="text-center">
                                     {this.state.maxTechStack && <p className="small text-danger"> Maximum 8 can be selected. Consider unselecting unwanted options ! </p>}
                                        <ButtonGroup size="sm" className="d-block">
                                   {
					this.techStackList.map((technology, index) => {
					    return (

                                                 <Button outline key = {technology} className="mb-2 mr-2 btn-outline-primary" color="info" 
							onClick={() => this.onCheckboxBtnClick(technology)}
                                                    active={this.state.techSelected.includes(technology)}>
                                                    <span className="small"> {technology}</span> </Button>

					    )
					})
				    }   
                                        </ButtonGroup>
                                        <div className="divider"/>
                                        {/*<p>Selected: {JSON.stringify(this.state.techSelected)}</p>*/}
{this.state.techSelected.map(techStack => <Badge style={{fontSize : "90%"}} className="mb-2 mr-2" color="dark" 
				      type="badge" key={techStack}>{techStack} </Badge>
                        )}
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                     </Row>
                    </ModalBody>
                    <ModalFooter>
                        <p> Add upto 8 Technology Stacks. If you can't find your option here, then enter in the keyword section </p>
                        <Button color="link" name="addTechStackModal" onClick={this.toggleDisplayModal}>Cancel</Button>
                        <Button color="primary" name="addTechStackModal" onClick={this.addTechStack}>Add</Button>{' '}
                    </ModalFooter>
                </Modal>

{/*Add Business Function Modal */}

<Modal isOpen={this.state.addBusFnModal} toggle={this.toggleDisplayModal}>
                    <ModalHeader className = "bg-light-blue" toggle={this.toggleDisplayModal}>Adding Business Functions...</ModalHeader>
                    <ModalBody className="d-table-cell">
                     <Row className="justify-content-center align-self-center">
                        <Col lg="12">
                            <Card className="main-card">
                                <CardBody>
                                    <CardTitle>Available Business Functions</CardTitle>
                                    <div className="text-center">
                                     {this.state.maxTechStack && <p className="small text-danger"> Maximum 4 can be selected. Consider unselecting unwanted options ! </p>}
                                        <ButtonGroup size="sm" className="d-block">
                                   {
					this.businessFunctionList.map((business, index) => {
					    return (

                                                 <Button outline key = {business} className="mb-2 mr-2 btn-outline-primary" color="info" 
							onClick={() => this.onBusinessCheckboxClick(business)}
                                                    active={this.state.businessSelected.includes(business)}>
                                                    <span className="small"> {business}</span> </Button>

					    )
					})
				    }   
                                        </ButtonGroup>
                                        <div className="divider"/>
                                        {/*<p>Selected: {JSON.stringify(this.state.techSelected)}</p>*/}
{this.state.businessSelected.map(business => <Badge style={{fontSize : "90%"}} className="mb-2 mr-2" color="dark" 
				      type="badge" key={business}>{business} </Badge>
                        )}
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                     </Row>
                    </ModalBody>
                    <ModalFooter>
                        <p> Add upto 4 Business Functions. If you can't find your option here, then enter in the keyword section </p>
                        <Button color="link" name="addBusFnModal" onClick={this.toggleDisplayModal}>Cancel</Button>
                        <Button color="primary" name="addBusFnModal" onClick={this.addBusFunc}>Add</Button>{' '}
                    </ModalFooter>
                </Modal>

{/*Header section */}
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
                  <i className="fa fa-dashboard"></i> <span>Hackathons</span>
                  <span className="pull-right-container">
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li><a href="index.html"><i className="fa fa-circle-o"></i> Hackademy 2019</a></li>
                  <li><a href="index2.html"><i className="fa fa-circle-o"></i> Code Grind 1.0</a></li>
                  <li><a href="index2.html"><i className="fa fa-circle-o"></i> Code Grind 2.0</a></li>
                  <li><a href="index2.html"><i className="fa fa-circle-o"></i> Pune to Paris</a></li>
                  <li><a href="index2.html"><i className="fa fa-circle-o"></i> Anybody Can Code</a></li>
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
              <CardHeader className = "bg-light-blue">
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
    <Row className="mt-3">
     	<Col xs="12" sm="12" md="6">
            {/*Team Members*/}
	  <Card>
              <CardHeader className = "bg-light-blue">
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
	<Button  name="addTeamMemberModal" style={{fontSize: '20px', textAlign : 'center', marginTop: '10%'}} className="btn btn-primary btn-rounded align-middle"  
                onClick={ (event) => this.toggleDisplayModal(event) }>
	 +
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
              <CardHeader className = "bg-light-blue">
                <strong>Categories</strong>
              </CardHeader>
              <CardBody>
                <Row>
        <Col xs="12" sm="12" md="4">
                 <Button name="addTechStackModal" style={{textAlign : 'center', marginBottom: '5%'}} className="btn btn-primary btn-rounded align-middle"  
                onClick={ (event) => this.toggleDisplayModal(event) }>
	 Technology Stack
	</Button>
                 </Col>

              <Col xs="12" sm="12" md="4">
                 <Button name ="addBusFnModal" style={{textAlign : 'center', marginBottom: '5%'}} className="btn btn-primary btn-rounded align-middle"  
                onClick={ (event) => this.toggleDisplayModal(event) }>
	 Business Functions
	</Button>
                 </Col>

              <Col xs="12" sm="12" md="4">
                 <Button style={{textAlign : 'center', marginBottom: '5%'}} className="btn btn-primary btn-rounded align-middle"  
                onClick={ (event) => this.toggleDisplayModal(event) }>
	        Hackathon Specific
	</Button>
                 </Col>
                </Row>
                 <Row>
                 <Col xs="12" sm="12" md="12">
                  <FormGroup>
                   <div id="hashTagsDiv"> 
                       {this.state.hashTags.map(hashTag => <Badge style={{fontSize : "90%"}} className="mb-2 mr-2" color="dark" 
				      type="badge" id="hashTags" key={hashTag} onDoubleClick={ (event) =>this.deleteHashTags(event) }>{hashTag} </Badge>
                        )}
                     <div className="text-secondary small"> Double click on a keyword to remove ! </div>
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
                          {!this.state.duplicateKeyword && <p className="help-block">Keep adding keywords and hashtags</p> }
                          {this.state.duplicateKeyword && <p className="text-danger">Keyword already exists</p>}
                        </div>

                  </FormGroup>
                  </Col>  </Row>           </CardBody>
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
        <Row className="mt-3">
          <Col xs="12" md="6">
            <Card>
              <CardHeader className = "bg-light-blue">
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
            <button type="button" className="btn btn-danger" onClick={this.getScore}>Discard</button>{this.state.getScore}
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
