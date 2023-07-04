import React from 'react'

export default function Skills(props) {
    const checker=(level)=>{
        if(level<25)
        {
            return "Competent"
        }
        else if(level>=25&&level<50)
        {
            return "Advanced"
        }
        else if(level>=50&&level<75)
        {
            return "Proficient"
        }
        else{
            return "Expert"
        }
    }
  return (
    <div className="card col mb-3 mx-2 my-2" style={{ maxWidth: "150px", height: "180px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
    <div>
      <h5 className="card-title my-2">{props.skill}</h5>
    </div>
    <div>
        <p className="card-text" style={{ textAlign: "center" }}><i>{checker(props.level)}</i></p>
    </div>
    <div className="progress my-2" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
      <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: `${props.level.toString()}%` }}></div>
    </div>
  </div>
  
        
  )
}