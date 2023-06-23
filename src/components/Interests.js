import React, {useState} from 'react'
import Spinner from './Spinner';
import Footer from './Footer';

const interests = [
    {
      id: '1',
      title: 'Web Development',
      description: 'I am passionate about web development and have successfully completed various projects in this field, including the creation of virtual galleries and advanced tour guides. My expertise extends to a range of programming languages and technologies, such as PUG, CSS, HTML, JavaScript, Node.js, React.js, MySQL, and MongoDB. I continuously expand my knowledge and skills by attending workshops, such as the Folio3 Summer Internship Workshops, where I gained insights into the latest industry trends and best practices. Additionally, I have valuable professional experience as an intern at Interns Pakistan, where I had the opportunity to apply my web development skills in a real-world environment. I am dedicated to delivering high-quality, user-friendly web solutions that exceed expectations and enhance the digital experience.',
      tag: 'Academic'
    },
    {
        id: '2',
        title: 'Data Analysis',
        description: 'I am passionate about data analysis and have undertaken several exciting projects in this field. From developing a movie recommendation system to creating sorting visualizers and conducting in-depth analyses of supermarket sales, fish data, Netflix data, and liver patient data, I have gained valuable experience in extracting insights and making data-driven decisions. My proficiency in Python and its powerful libraries, including numpy, matplotlib, seaborn, tkinter, pandas, sklearn, and statsmodels, has enabled me to manipulate and visualize data effectively. Additionally, I have had the opportunity to enhance my skills through an internship at The Sparks Foundation, where I gained hands-on experience in real-world data analysis projects. I am dedicated to leveraging my expertise in data analysis to uncover meaningful patterns and drive informed decision-making.',
        tag: 'Academic'
    },
    {
        id: '3',
        title: 'Problem Solving',
        description: 'I have a deep passion for problem-solving and enjoy the thrill of tackling complex programming challenges. I have actively engaged in honing my skills through platforms like HackerRank, where I have successfully solved numerous programming questions focused on data structures and object-oriented concepts using C and C++. Additionally, I have participated in various coding challenges at my university, including prestigious events like Coders Cup and Dev Day coding challenges. These experiences have not only sharpened my problem-solving abilities but have also enhanced my proficiency in algorithmic thinking and efficient coding practices. I continuously strive to expand my knowledge and skills in the realm of problem-solving, and I approach each challenge with dedication, perseverance, and a commitment to delivering optimal solutions.',
        tag: 'Academic'
    },
];

export default function Interests(props){
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        props.setProgress(50); //not progressing 2nd time
        setLoading(false);
        props.setProgress(100);
    }, 1500);

    return(
        <>
            <div className="container" style={{ display: "flex", justifyContent: "center" }}>
                <h2 style={{marginTop: "80px", fontWeight: "bold" }}>MY INTERESTS</h2>
            </div>

            {loading && <Spinner />}

            {!loading && <>
                <div className="container text-center">
                    {interests.map((element, index)=>{
                        return <div style = {{marginBottom: "5px"}}>
                            <div className={`row d-flex justify-content-${index%2===0?"start":"end"}`} key={element.id}>
                                <div className="col-6 mt-3">
                                    <div className="card" style={{height: "22rem"}}>
                                        <div>
                                            <span className="badge rounded-pill bg-danger" style = {{disply:"flex", justifyContent:"flex-end", position:"absolute", right:"0"}}>{element.tag}</span>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title" style={{marginTop: "10px", fontWeight: "bold" }}>{element.title}</h5>
                                            <p className="card-text">{element.description}</p>
                                        </div>
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