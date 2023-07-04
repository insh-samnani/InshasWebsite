import React from 'react'

export default function Education(props) {
  return (
    <div className="card mb-3">
      <div>
          <span className="badge rounded-pill bg-danger" style = {{disply:"flex", justifyContent:"flex-end", position:"absolute", right:"0"}}>{!isNaN(parseInt(props.grade.charAt(0)))?"CGPA: "+props.grade:"Grade: "+props.grade}</span>
      </div>

      <div className="row g-0">
        
        <div className="col-md-4">
          <img src={props.logo} className="img-fluid rounded-start" alt={`${props.institution} Logo`} style ={{height: "200px", width: "200px"}}/>
        </div>
        <div className="col-md-8">
          <div className="card-body" style={{height: "21rem"}}>
            <h5 className="card-title" style = {{marginTop: "8px"}}>{props.institution}</h5>
            <p className="card-text">{props.degree} - {props.degreeName}</p>
            <p className="card-title">Activities and Societies:</p>
            <ul className="list-group list-group-flush" style={{ listStyleType: "square" }}>
              {props.more.map((elem) => {
                return <li className="list-group-item" key={elem}><i>{elem}</i></li>;
              })}
            </ul>
            <p className="card-text"><small className="text-body-secondary">{props.year}</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}
