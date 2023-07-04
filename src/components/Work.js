import React, {useState} from 'react'
import Spinner from './Spinner';
import Footer from './Footer';
import workexp1 from '../Imagess/workexp1.png'
import workexp2 from '../Imagess/workexp2.png'
import workexp3 from '../Imagess/work3.jpeg'
import workexp4 from '../Imagess/workexp4.png'
import workexp5 from '../Imagess/workexp5.png'
import workexp6 from '../Imagess/workexp6.jpeg'

const work = [
    {
      id: '1',
      title: 'Summer Internship Workshops',
      company: 'Folio3 Pvt Ltd',
      description: 'I exposed myself to new developmental technologies. Also, I developed new prowess by working on challenging projects. Moreover, I accessed the workflow inside the industry under the supervision of Folio3 professionals.',
      imgUrl: workexp1,
      expDate: '1st June, 2022 - 15th August 2022'
    },
    {
        id: '2',
        title: 'Student Lab Assistant',
        company: 'FAST-NUCES',
        description: 'I Assisted the lab instructor for the "Data Structures" and "Object-Oriented Programming" course. Also,  clarified the concepts for students and resolved bugs in their code.',
        imgUrl: workexp2,
        expDate: '1st September, 2022 - 30th May, 2023'
    },
    {
        id: '3',
        title: 'Campus Ambassador',
        company: 'Systems Limited',
        description: 'I Represented Systems Limited, a leading IT company, as a campus ambassador at FAST-NUCES Karachi. Actively engaged with students, organized events, and promoted company initiatives to foster a strong relationship between the company and the university.',
        imgUrl: workexp6,
        expDate: '1st February, 2023 - Present'
    },
    {
        id: '4',
        title: 'Internee: Front-end Development',
        company: 'Interns Pakistan',
        description: 'I familiarized myself with HTML, CSS, Responsive Web Design, and JavaScript. Also, I developed a food ordering website on WordPress.',
        imgUrl: workexp3,
        expDate: '1st August, 2021 - 30th August 2021'
    },
    {
        id: '5',
        title: 'Teaching Assistant',
        company: 'FAST-NUCES',
        description: 'I was assigned as a teaching assistant for the course "Calculus and Analytical Geometry". The contract included checking assignments, quizzes, and presentations of students and reporting their progress to their respective course teachers.',
        imgUrl: workexp2,
        expDate: '1st September, 2021 - 30th December 2021'
    },
    {
        id: '6',
        title: 'Internee: Data Scientist',
        company: 'The Sparks Foundation',
        description: 'I analyzed the data using machine learning algorithms, including supervised, unsupervised, and decision trees. Also, I used exploratory data analysis to draw meaningful insights from various datasets.',
        imgUrl: workexp5,
        expDate: '1st July, 2022 - 30th July 2022'
    },
    {
        id: '7',
        title: 'Content Writer',
        company: 'Freelancing',
        description: 'I worked under a team as a content writer. I wrote many blogs on topics related to science, technology, and general discussions, such as the political, social, and economical conditions of Pakistan. I was assigned to present my thoughts and ideas for these topics in the form of words.',
        imgUrl: workexp4,
        expDate: '1st July, 2022 - 30th July 2022'
    },
];

export default function Certificates(props){
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 1500);

    return(
        <>
            <div className="container" style={{ display: "flex", justifyContent: "center" }}>
                <h1 style={{marginTop: "80px", fontWeight: "bold" }}>MY WORK EXPERIENCE</h1>
            </div>

            {loading && <Spinner />}

            {!loading && <>
                <div className="container">
                    <div className="row">
                        {work.map((element)=>{
                            return <div className = "col-md-4 d-flex justify-content-center mt-3" key={element.id}>
                                        <div className="my-3 mt-3">
                                            <div className="card" style={{width: "23rem", height: "35rem"}}>
                                            <div>
                                                <span className="badge rounded-pill bg-danger" style = {{disply:"flex", justifyContent:"flex-end", position:"absolute", right:"0"}}>{element.company}</span>
                                            </div>
                                            <img className="card-img-top" src={element.imgUrl} alt="Certificate Loading" style={{objectFit: "contain", height: "250px", marginTop: "20px"}} />
                                                <div className="card-body">
                                                    <h5 className="card-title" style={{fontWeight: "bold"}}>{element.title}</h5>
                                                    <p className="card-text">{element.description}</p>
                                                    <p className = "card-text"><small className = "text-muted">From {element.expDate}</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        })}
                    </div>
                </div>
                <Footer title="Insha Samnani - BSCS (FAST-NUCES)" />
            </>
            }
        </>
    )
}