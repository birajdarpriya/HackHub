import React, { PureComponent } from "react";
import PropTypes from "prop-types";

// import Gallery from "./Gallery";

class HackHubDetail extends PureComponent {
  onCloseApp = event => {
    this.props.onCloseApp(event);
  }

  searchKeyword = event => {
  }
  render() {
    const teammember2 = this.props.appDetailsData.teammember2;
    const teammember3 = this.props.appDetailsData.teammember3;
    const teammember4 = this.props.appDetailsData.teammember4;
    const teammember5 = this.props.appDetailsData.teammember5;
    const teammember6 = this.props.appDetailsData.teammember6;
    const teammember7 = this.props.appDetailsData.teammember7;
    const teammember8 = this.props.appDetailsData.teammember8;
    const teammember9 = this.props.appDetailsData.teammember9;
    const attachmentname1 = this.props.appDetailsData.attachmentname1;
    const attachmentname2 = this.props.appDetailsData.attachmentname2;
    const attachmentname3 = this.props.appDetailsData.attachmentname3;
    const attachmentname4 = this.props.appDetailsData.attachmentname4;
    const attachmentname5 = this.props.appDetailsData.attachmentname5;
    const attachmentname6 = this.props.appDetailsData.attachmentname6;
    const attachmentname7 = this.props.appDetailsData.attachmentname7;
    const attachmentname8 = this.props.appDetailsData.attachmentname8;
    const attachmentname9 = this.props.appDetailsData.attachmentname9;

    return (
      <div>
       {this.props.appDetailsData.map(appDetails => (
          <div>
           { /*<div><span>Application Title : </span>{appDetails.title}</div>
          <img alt={appDetails.title} src={appDetails.thumbnail}/>

           <div><span>Application Title : </span>{appDetails.content.descriptionText}</div>

	  <div><span>Github Link : </span>{appDetails.content.githubLink}</div>
	  <div><span>Nexus Link : </span>{appDetails.content.nexusLink}</div> */}
        <section className="content">
        <div class="row">
          	<div class="col-md-12">
          		<div class="box box-widget widget-user-2">
            			<div class="widget-user-header bg-yellow">
				<div class="pull-right box-tools">
				/*<button type="button" class="btn btn-success btn-sm" data-widget="collapse"><i class="fa fa-minus"></i>
				</button>*/
				<button type="button" class="btn btn-success btn-sm" onClick={this.onCloseApp}><i class="fa fa-times"></i>
				</button>
			      </div>

      				<div class="widget-user-image">
        				<img class="img-circle" src="../dist/img/user7-128x128.jpg" alt="User Avatar" />
      				</div>
				<h3 class="widget-user-username">{appDetails.title}</h3>
      				<h5 class="widget-user-desc">{appDetails.teamname}</h5>
    				</div>
                        </div>

                        <section className="box content">
  				<h3 class="">Description</h3>
              				<p class="widget-user-desc">{appDetails.purpose}</p>
          <h3 class="">Team Members</h3>
                      <p class="widget-user-desc">{appDetails.teammember1}</p>
                      {teammember2 !== "" ? (
                        <p class="widget-user-desc">{appDetails.teammember2}</p>
                      ) : (
                        <div></div>
                      )}
                      {teammember3 !== "" ? (
                        <p class="widget-user-desc">{appDetails.teammember3}</p>
                      ) : (
                        <div></div>
                      )}
                      {teammember4 !== "" ? (
                        <p class="widget-user-desc">{appDetails.teammember4}</p>
                      ) : (
                        <div></div>
                      )}
                      {teammember5 !== "" ? (
                        <p class="widget-user-desc">{appDetails.teammember5}</p>
                      ) : (
                        <div></div>
                      )}
                      {teammember6 !== "" ? (
                        <p class="widget-user-desc">{appDetails.teammember6}</p>
                      ) : (
                        <div></div>
                      )}
                      {teammember7 !== "" ? (
                        <p class="widget-user-desc">{appDetails.teammember7}</p>
                      ) : (
                        <div></div>
                      )}
                      {teammember8 !== "" ? (
                        <p class="widget-user-desc">{appDetails.teammember8}</p>
                      ) : (
                        <div></div>
                      )}
                      {teammember9 !== "" ? (
                        <p class="widget-user-desc">{appDetails.teammember9}</p>
                      ) : (
                        <div></div>
                      )}
            <h3 class="">Published Date</h3>
                        <p class="widget-user-desc">{appDetails.publisheddate}</p>
            <h3 class="">Business Function</h3>
                        <p class="widget-user-desc">{appDetails.businessfunction}</p>
            <h3 class="">Version</h3>
                        <p class="widget-user-desc">{appDetails.version}</p>
            <h3 class="">Service Line</h3>
                        <p class="widget-user-desc">{appDetails.serviceline}</p>
				<h3 class="">Github Link</h3>
              				<a href={appDetails.githubUrl} target="_blank">{appDetails.githubUrl}</a>
				<h3 class="">Confluence Link</h3>
              				<a href={appDetails.confluenceUrl} target="_blank">{appDetails.confluenceUrl}</a>



                      <h3 class="">Attachments</h3>
                      {attachmentname1 !== "" ? (
                        <a href={appDetails.attachmenturl1} target="_blank">{appDetails.attachmentname1}</a>
                      ) : (
                        <div></div>
                      )}



                        </section>
            		<div class="box-footer no-padding">
              			<ul class="nav nav-stacked">
                			<li>footer</li>

              			</ul>
            		</div>

          	</div>
	  </div>
          </section>
          </div>

        ))}
      <div>

      </div>
    </div>
    );
  }
}
HackHubDetail.propTypes = {
  appDetailsData : PropTypes.array,
  title: PropTypes.string,
  symbol: PropTypes.string,
  thumbnail : PropTypes.string,
  onCloseApp : PropTypes.func
};
export default HackHubDetail;
