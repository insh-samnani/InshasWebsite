import React from 'react';

export default function Contact(props) {
  return (
    <div className="card mb-3 my-2 mx-2" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4" style={{ height: "50px" }}>
          <img src={props.img} className="img-fluid rounded-start my-2" alt={props.name} style={{ height: "65px" }} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title" style = {{marginTop: "5px"}}>{props.name}</h3>
            {props.details.length > 0 ? (
              <h5 className="card-text">{props.details}</h5>
            ) : (
              <a href={props.link}  target="_blank" rel="noopener noreferrer">
                <button type="button" className="btn btn-danger">
                  Open {props.name} Profile
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
