import React from 'react';
import {Link} from "react-router-dom"

const CharacterCard = (props) => {

    let linkButton = null;
    if(props.showLink){
       linkButton = 
        <Link to={{ pathname: '/character/' + props.id,}} className="hinge btn btn-info">View</Link>;
        }
    return(
            <div className="col-xs-12 col-sm-6 col-md-4" style={{paddingTop:"10px"}}>
                <div style={{minHeight:"670px",  backgroundColor:"#fafafa"}} className="card CharacterCard">

                    <img style={{display:"block", width:"100%", borderRadius:"1%" }} src={props.image} alt={props.name} className="card-img-top" />

                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <hr></hr>
                        <b>Species:</b>{props.species}<br />
                        <b>Status:</b>{props.status}<br />
                        <b>Gender:</b>{props.gender}<br />
                        <b>Location:</b>{props.location}<br />
                        <b>Place of origin:</b>{props.origin}<br />
                        <br />
                        {linkButton}
                    </div>                    
                </div>

            </div>
    );
}

export default CharacterCard;