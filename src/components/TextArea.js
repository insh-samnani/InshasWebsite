import React, {useState} from 'react'
import Footer from './Footer';
import Spinner from './Spinner';
import myImage from '../Imagess/InshaSamnani.jpeg';
import hiHand from '../Imagess/hiHand.gif';
import Contact from './Contact';
import Education from './Education';
import Skills from './Skills';
import Courses from './Courses';
import Lang from './Lang';

export default function TextArea(props) {
  const [loading, setLoading] = useState(true);
  
  setTimeout(() => {
    setLoading(false);
  }, 1500);

  const words = props.name.split(/\s+/);
  const itemsPerSlide = 5;
  const itemsPerSlide1 = 3; 
  const skillGroups = [];
  for (let i = 0; i < props.skill.length; i += itemsPerSlide) {
    skillGroups.push(props.skill.slice(i, i + itemsPerSlide));
  }
  const courseGroups = [];
  for (let i = 0; i < props.courses.length; i += itemsPerSlide1) {
    courseGroups.push(props.courses.slice(i, i + itemsPerSlide1));
  }
  
  return (
    <>

      <div className="container" style={{ display: "flex", justifyContent: "center" }}>
          <h1 style={{marginTop: "80px", fontWeight: "bold" }}>ABOUT ME</h1>
      </div>

      {loading && <Spinner />}

      {!loading && <>
      <div className='container'>
        <div className="container text-center">
          <div className="row">
            <div className="col">          
                <h1 className="text-center" style = {{marginTop: "10px"}}>Hi !!!</h1>
                <div className="d-flex justify-content-center">
                  <img src={hiHand} className="card-img-top" alt="Hi GIF" style={{height:"15vh",width:"auto"}} />
                </div>
            </div>
            <div className="col">
              <div className="d-flex justify-content-center">
                <img src={myImage} className="card-img-top" alt="Insha Samnani" style={{width: "300px", height: "300px"}}/>
              </div>
            </div>
            <div className="col">
              <h1>This</h1>
              <h1>is</h1>
              {words.map((elem, index)=>{return(<><h1 className="text-center" key={index} style = {{fontWeight: "bold"}}>{elem}</h1></>) })}
            </div>
          </div>
        </div>

        <div className='container text-center' style={{marginTop: "10px"}}>
              <h5 className="card-title text-center"><i>"{props.about}"</i></h5>
        </div>

        <div className='container text-center'>
          <h2 style = {{marginTop: "30px", fontWeight: "bold"}}>EDUCATION</h2>
          <div className="row">
              {props.edu.map((elem, index)=>{
                  return (
                    <div className="col-md-4" key = {index}>
                      <Education key={elem} more={elem.more} grade={elem.grade} year={elem.year} degreeName={elem.degreeName} degree={elem.degree} institution={elem.institution} logo={elem.logo}/>
                    </div>
                  );
              })}
          </div>
        </div>
        
        <h2 className = "text-center" style = {{marginTop: "30px", fontWeight: "bold"}}>SKILLS</h2>
        <div className="container text-center" >
        <div id="skillsCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {skillGroups.map((group, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <div className="row row-cols-2 justify-content-center align-items-center" style={{ flexWrap: "wrap", height: "100%" }}>
                  {group.map((elem) => (
                    <Skills
                      key={elem.skill}
                      skill={elem.skill}
                      description={elem.description}
                      level={elem.level}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#skillsCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" style={{backgroundColor:"black"}}></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#skillsCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" style={{backgroundColor:"black"}}></span>
            <span className="visually-hidden">Next</span>
          </button>

        </div>
      </div>
      <h2 className = "text-center" style = {{marginTop: "30px", fontWeight: "bold"}}>COURSES</h2>
        <div className="container text-center">
          <div id="courseCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {courseGroups.map((group, index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                  <div className="row row-cols-2 justify-content-center align-items-center" style={{ flexWrap: "wrap", height: "100%" }}>
                    {group.map((elem) => (
                      <Courses key={elem.code} code={elem.code} shortForm={elem.shortForm} fullForm={elem.fullForm}/>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#courseCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" style={{backgroundColor:"black"}}></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#courseCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" style={{backgroundColor:"black"}}></span>
              <span className="visually-hidden">Next</span>
            </button>

          </div>
        </div>
        <h2 className = "text-center" style = {{marginTop: "30px", fontWeight: "bold"}}>LANGUAGES</h2>
        <table className="table">
          <thead className='text-center'>
              <tr>
              <th scope="col">#</th>
              <th scope="col">Languages</th>
              <th scope="col">Proficiency Level</th>
              </tr>
          </thead>
          <tbody className='text-center'>
            {
              props.languages.map((elem)=>{
                return <Lang key={elem.sno} sno={elem.sno} name={elem.name} level={elem.level}/>
              })
            }
          </tbody>
        </table>

        <div className="container text-center">
        <h2 style = {{marginTop: "30px", fontWeight: "bold"}}>CONTACT ME</h2>
          <div className="row">
              {props.info.map((elem, index) => {
                return (
                  <div className="col-md-6" key = {index}>
                    <Contact key={elem.name} name={elem.name} link={elem.link} details={elem.details} img={elem.img} />
                  </div>
                );
            })}
          </div>
        </div>

      </div> 
      <Footer title="Insha Samnani - BSCS (FAST-NUCES)" /> 
      </>
      }
    </>
  )
}