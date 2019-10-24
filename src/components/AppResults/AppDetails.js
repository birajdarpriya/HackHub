import React, { PureComponent } from "react";
import PropTypes from "prop-types";

// import Gallery from "./Gallery";

class AppDetails extends PureComponent {
  onCloseApp = event => {
    this.props.onCloseApp(event);
  }

  searchKeyword = event => {
  }
  render() {
   
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
				{/*<button type="button" class="btn btn-success btn-sm" data-widget="collapse"><i class="fa fa-minus"></i>
				</button>*/}
				<button type="button" class="btn btn-success btn-sm" onClick={this.onCloseApp}><i class="fa fa-times"></i>
				</button>
			      </div>

      				<div class="widget-user-image">
        				<img class="img-circle" src="../dist/img/user7-128x128.jpg" alt="User Avatar" />
      				</div>
				<h3 class="widget-user-username">{appDetails.title}</h3>
      				<h5 class="widget-user-desc">React JS App</h5>
    				</div>

                        </div>
    
                        <section className="box content">
  				<h3 class="">Description</h3>
              				<p class="widget-user-desc">{appDetails.content.descriptionText}</p>
				<h3 class="">Github Link</h3>
              				<a href={appDetails.content.githubLink} target="_blank">{appDetails.content.githubLink}</a>
				<h3 class="">Nexus Link</h3>
              				<a href={appDetails.content.nexusLink} target="_blank">{appDetails.content.nexusLink}</a>
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
AppDetails.propTypes = {
  appDetailsData : PropTypes.array,
  title: PropTypes.string,
  symbol: PropTypes.string,
  thumbnail : PropTypes.string,
  onCloseApp : PropTypes.func
};
export default AppDetails;
