import React, {useState} from 'react'
import Spinner from './Spinner';
import image1 from '../Imagess/InshaSamnani1.jpeg';
import image2 from '../Imagess/InshaSamnani2.jpeg';
import Footer from './Footer';

const awards = [
    {
      id: '1',
      title: 'Position Holder',
      description: 'I am proud to have achieved the position of being a consistent top performer at FAST-National University of Computer and Emerging Sciences. Throughout the Spring 2022, Fall 2022, and Spring 2023 semesters, I maintained a perfect 4.0 GPA, earning the prestigious position holder title. This accomplishment reflects my dedication, hard work, and commitment to excellence in my Computer Science studies. It is a testament to my strong academic abilities, consistent academic performance, and passion for learning. I am grateful for the opportunity to be recognized for my achievements and will continue to strive for academic excellence in my future endeavors.',
      institution: 'FAST-NUCES',
      imgUrl: image1
    },
    {
        id: '2',
        title: 'Deans List',
        description: 'I am honored to have consistently achieved the esteemed position of being a deans list holder at FAST-National University of Computer and Emerging Sciences. Throughout the Fall 2020, Spring 2021, and Fall 2021 semesters, I maintained a remarkable GPA of 3.5 or above, earning this prestigious recognition. This accomplishment showcases my dedication, academic excellence, and commitment to achieving outstanding results in my Computer Science studies. It is a testament to my hard work, perseverance, and passion for learning. Being a deans list holder signifies my ability to consistently perform at a high level and highlights my commitment to academic excellence. I am proud of this achievement and will continue to strive for excellence in all my future academic endeavors.',
        institution: 'FAST-NUCES',
        imgUrl: image2
    },
    // {
    //     id: '3',
    //     title: '3rd Position in Science and Commerce Olympiad',
    //     description: 'I am proud to have secured the 3rd position in both the Science and Commerce Olympiad at Aga Khan Higher Secondary School. This recognition highlights my exceptional performance and dedication to academic excellence. As a Computer Science student at AKHSS, I have always been passionate about exploring the intersection of mathematics and programming. One notable project I completed during my studies was the development of a thermopole representation using the Newton-Raphson method. This project not only demonstrated my technical skills but also showcased my ability to apply mathematical concepts in innovative ways. I am honored to have received this award and it further motivates me to continue pushing the boundaries of knowledge in the field of Computer Science.',
    //     institution: 'AKHSS',
    //     imgUrl: image2
    // },
    // {
    //     id: '4',
    //     title: '1st Position in 9th Grade Board Examinations (Islamiat)',
    //     description: 'I take great pride in achieving the 1st position in Islamiat at Aga Khan School Garden during my 9th grade board examinations. This accomplishment reflects my commitment to academic excellence and my deep understanding and appreciation of the subject. Through diligent study and a passion for learning, I was able to excel in the subject of Islamiat and secure the top position among my peers. This achievement has not only bolstered my confidence but has also reinforced my dedication to continuous growth and knowledge acquisition. I am grateful for the guidance and support of my teachers, whose expertise and mentorship played a vital role in my success. This award serves as a testament to my hard work, determination, and the value I place on academic achievement.',
    //     institution: 'AKSGDN',
    //     imgUrl: image2
    // },
];

export default function Awards(props){
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 1500);

    return(
        <>
            <div className="container" style={{ display: "flex", justifyContent: "center" }}>
                <h1 style={{marginTop: "80px", fontWeight: "bold" }}>MY AWARDS</h1>
            </div>

            {loading && <Spinner />}

            {!loading && <>
                <div className="container text-center">
                    {awards.map((element)=>{
                        return <div className="row d-flex justify-content-center" style = {{marginBottom: "5px"}} key={element.id}>
                                <div className="col-6 mt-3">
                                    <img className="card-img-top" src={element.imgUrl} alt="Loading..." style={{objectFit: "contain", height: "350px"}} />
                                </div>
                                <div className="col-6 mt-3">
                                    <div className="card">
                                        <div>
                                            <span className="badge rounded-pill bg-danger" style = {{disply:"flex", justifyContent:"flex-end", position:"absolute", right:"0"}}>{element.institution}</span>
                                        </div>
                                        <div className="card-body" style={{height: "22rem",  overflow: "auto"}}>
                                            <h5 className="card-title" style={{marginTop: "10px", fontWeight: "bold" }}>{element.title}</h5>
                                            <p className="card-text">{element.description}</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    })}
                </div>
                <Footer title="Insha Samnani - BSCS (FAST-NUCES)" />
            </>
            }
        </>
    )
}