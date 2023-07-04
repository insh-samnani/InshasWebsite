import React from 'react'

export default function Courses(props) {
    
  return (
    <div className="card text-center mb-4 mx-2 my-3" style={{width: "18rem",height:"150px",display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
  <div className="card-body" style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
    <div style={{textAlign: "center"}}>
      <h4 className="card-title">{props.shortForm}</h4>
    </div>
    <div style={{textAlign: "center"}}>
      <p className="card-text">{props.code}</p>
    </div>
    <div style={{textAlign: "center"}}>
      <p className="card-text"><i>"{props.fullForm}"</i></p>
    </div>
  </div>
</div>


  )
}
