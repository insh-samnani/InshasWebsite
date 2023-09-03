import React, {useState} from 'react'
import Spinner from './Spinner';
import Footer from './Footer';

const certificate = [
    {
        id: '19',
        title: 'Org Projector',
        description: '"Org Projector" is an innovative web solution that transforms organization dynamics. This MERN-based platform streamlines registration, fosters cross-project collaboration, and enhances task management. It empowers efficient teamwork, inviting members, task assignment, and progress tracking, revolutionizing how organizations operate.',
        course: 'Personal',
        projectUrl: 'https://github.com/insh-samnani/OrgProjector',
        dateDuration: '15th June, 2023 - 30th June, 2023',
        technology: 'MERN Stack',
        contributors: [{name: 'Ismail Ahmed Ansari', url: 'https://www.linkedin.com/in/ismail-ahmed-ansari-27378720b/'}],
        contributorss: true
    },
    {
      id: '1',
      title: 'Advance Tour Guides - Web Application',
      description: 'ATG is a web-based GUI application providing tailored travel support within Pakistan to end users. Usually, the tour websites do not provide a good GUI, but ATG attracts user via its front-end and provides all in one easily understandable feature. It provides hassle-free and complete services in the domain of customized tours, hotels, flights, and transportation.',
      course: 'Database Systems',
      projectUrl: 'https://github.com/insh-samnani/Advance-Tour-Guides-Web-Application',
      technology: 'PUG, CSS, JavaScript, Node.js, MySQL.',
      dateDuration: '1st September, 2022 - 30th December 2022',
      contributors: [],
      contributorss: false
    },
    {
        id: '2',
        title: 'Virtual Gallery',
        description: 'VG is designed to reduce the device load and store our pictures on the website. We have added three features: uploading the image, filtering the images based on name and date. Furthermore, the grid view of the gallery can be seen across different devices because of the media query. Each picture will have its own view (in a new tab) and a download button.',
        course: 'Personal',
        projectUrl: 'https://github.com/insh-samnani/Virtual-Gallery',
        technology: 'HTML, CSS, JavaScript, PHP, MySQL.',
        dateDuration: '1st July, 2022 - 30th July, 2022',
        contributors: [{name: 'Ismail', url: 'https://www.linkedin.com/in/ismail-ahmed-ansari-27378720b/'}],
        contributorss: true
    },
    {
        id: '3',
        title: 'Product Title Classification',
        description: 'Product title classification is a crucial task in e-commerce platforms that categorizes product titles into appropriate classes, enabling sellers to list their items correctly and helping buyers find products of interest. Therefore, a product title classifier may need to be designed differently from a text classifier in order to effectively handle these unique properties.',
        course: 'Information Retrieval',
        projectUrl: 'https://github.com/insh-samnani/Product-Title-Classification',
        dateDuration: '15th January, 2023 - 30th May, 2023',
        technology: 'Python (numpy, pandas, re, nltk, sklearn, seaborn, matplotlib, tkinter, and pickle).',
        contributors: [{name: 'Ismail Ahmed Ansari', url: 'https://www.linkedin.com/in/ismail-ahmed-ansari-27378720b/'}, {name: 'Abdul Basit Samad', url: 'https://www.linkedin.com/in/abdul-basit-samad-34645a22b/'}],
        contributorss: true
    },
    {
        id: '4',
        title: 'A CYBERPHYSICAL SYSTEM FOR DATA-DRIVEN REAL-TIME TRAFFIC PREDICTION ON THE LAS VEGAS I-15 FREEWAY',
        description: 'This report addresses traffic congestion issues and the need for effective traffic control management in urban areas. It proposes two real-time traffic prediction models based on Neural Networks, aiming to fill the research gap by incorporating missing statistics and ensuring ongoing accuracy. The report also suggests utilizing a Cyber-Physical System (CPS) that integrates real-time sensor data and advanced deep learning models. The objective is to provide a potential solution to tackle traffic congestion problems.',
        course: 'Computer Networks',
        projectUrl: 'https://github.com/insh-samnani/A-CYBERPHYSICAL-SYSTEM-FOR-DATA-DRIVEN-REAL-TIME-TRAFFIC-PREDICTION-ON-THE-LAS-VEGAS-I-15-FREEWAY',
        dateDuration: '15th January, 2023 - 30th May, 2023',
        technology: 'Research paper, Microsoft Word.',
        contributors: [{name: 'Ismail Ahmed Ansari', url: 'https://www.linkedin.com/in/ismail-ahmed-ansari-27378720b/'}, {name: 'Abdul Basit Samad', url: 'https://www.linkedin.com/in/abdul-basit-samad-34645a22b/'}, {name: 'Yusra Adam', url: 'https://www.linkedin.com/in/yusra-adam-79a578223/'}],
        contributorss: true
    },
    {
        id: '5',
        title: 'Sequence Alignment Problem using OMP',
        description: 'The problem is solved by using the dynamic approach. This approach will introduce gap into the strings as to equalize the lengths. Since it can be easily proved that the addition of the extra gaps after equalizing the lengths will only lead to increment of penalty, but the time complexity (O(n*m)) will be much lesser than that of brute force approach and maybe possible of greedy approach.',
        course: 'PDC',
        projectUrl: 'https://github.com/insh-samnani/Sequence-Alignment-Problem-using-OMP',
        dateDuration: '15th August, 2022 - 30th December, 2022',
        technology: 'Linux, Ubuntu, C++, OpenMP.',
        contributors: [{name: 'Ismail Ahmed Ansari', url: 'https://www.linkedin.com/in/ismail-ahmed-ansari-27378720b/'}],
        contributorss: true
    },
    {
        id: '6',
        title: 'Sorting Visualizer',
        description: 'Sorting Visualizer is an application that allows user to select a file and the sorting algorithm and can see step by step visualization of how the elements are being sorted in real time fashion. The sorting visualizer will not only entertain the illustrations but also tell iterations, number of steps and the resulted arrays after a single manipulation.',
        course: 'Algorithms',
        projectUrl: 'https://github.com/insh-samnani/Sorting-Visualizer',
        dateDuration: '15th August, 2022 - 30th December, 2022',
        technology: 'Python (numpy, matplotlib, and tkinter).',
        contributors: [{name: 'Ismail Ahmed Ansari', url: 'https://www.linkedin.com/in/ismail-ahmed-ansari-27378720b/'}],
        contributorss: true
    },
    {
        id: '7',
        title: 'Fish Data Analysis',
        description: 'The project is implemented using python, reflecting various predictions on fishes for their heights, weights, and lengths using linear and multiple regression models. For that, we also checked that our data is normally distributed or not via different plots including residplot and qqplot. Moreover, it includes statistical and visual representations and hypothesis testing to visualize changing trends in fishes and test different assumptions.',
        course: 'Personal',
        projectUrl: 'https://github.com/insh-samnani/Personal-Projects/blob/main/Project2.ipynb',
        dateDuration: '1st June, 2022 - 15th July, 2022',
        technology: 'Python (numpy, pandas, seaborn, matplotlib, statsmodel, itertools, io, and scipy).',
        contributors: [{name: 'Ismail Ahmed Ansari', url: 'https://www.linkedin.com/in/ismail-ahmed-ansari-27378720b/'}],
        contributorss: true
    },
    {
        id: '8',
        title: 'Liver Patients Analysis',
        description: 'The project analyzes a dataset on liver patients using Python. It applies various classifier algorithms to predict liver disease presence and selects the best-performing algorithm. Regressor algorithms are used to predict direct bilirubin levels based on total bilirubin. Unsupervised learning algorithms are explored but found to be inaccurate for this dataset.',
        course: 'Personal',
        projectUrl: 'https://github.com/insh-samnani/Personal-Projects/blob/main/Project3.ipynb',
        dateDuration: '1st June, 2022 - 15th July, 2022',
        technology: 'Python (numpy, pandas, seaborn, matplotlib, sklearn, and io).',
        contributors: [{name: 'Ismail Ahmed Ansari', url: 'https://www.linkedin.com/in/ismail-ahmed-ansari-27378720b/'}],
        contributorss: true
    },
    {
        id: '9',
        title: 'Movie Recommendation System Using Python',
        description: 'This Python project recommends movies to users using two different recommender systems. The first system is based on popularity, recommending movies with higher average ratings or those currently trending. The second system uses collaborative filtering, considering user ratings on movies that were rated by a specific number of users. The algorithm calculates cosine similarity to recommend three similar movies based on the users input. Although the dataset is small, the code and criteria can be applied to larger pre-processed datasets for more accurate recommendations.',
        course: 'Personal',
        projectUrl: 'https://github.com/insh-samnani/Movie-Recommendation-System-Python/blob/main/Movie_Recommendation_System.ipynb',
        dateDuration: '1st June, 2022 - 15th July, 2022',
        technology: 'Python (numpy, pandas, sklearn, and difflib).',
        contributors: [{name: 'Ismail Ahmed Ansari', url: 'https://www.linkedin.com/in/ismail-ahmed-ansari-27378720b/'}],
        contributorss: true
    },
    {
        id: '10',
        title: 'Dining Philosophers',
        description: 'The Dining Philosophers Problem is a classical synchronization problem where five philosophers sit around a table, alternating between thinking and eating. They require both a right and left chopstick to eat. If both chopsticks are unavailable, they put down one chopstick and continue thinking. This problem serves as an analogy for process synchronization, highlighting challenges in resource allocation and synchronization.',
        course: 'Operating Systems',
        projectUrl: 'https://github.com/insh-samnani/Dining-Philosophers',
        dateDuration: '1st March, 2022 - 1st June, 2022',
        technology: 'Linux, Ubuntu, C++, Kernel, Semaphores.',
        contributors: [{name: 'Ismail Ahmed Ansari', url: 'https://www.linkedin.com/in/ismail-ahmed-ansari-27378720b/'}, {name: 'Anjiya Muhammad Ali', url: 'https://www.linkedin.com/in/anjiya-muhammad-ali-563586216/'}],
        contributorss: true
    },
    {
        id: '11',
        title: 'Natural Language Processing Research',
        description: 'NATURAL LANGUAGE PROCESSING refers to a branch of COMPUTER SCIENCE that deals with the ability of the COMPUTERS to understand the text and words same as HUMAN BEINGS. It applies the computational techniques to analyze or synthesize the speech or natural language.',
        course: 'Theory of Automata',
        projectUrl: 'https://github.com/insh-samnani/Natural-Language-Processing-Research',
        dateDuration: '1st January, 2022 - 1st June, 2022',
        technology: 'Research papers, Microsoft Word',
        contributors: [{name: 'Ismail Ahmed Ansari', url: 'https://www.linkedin.com/in/ismail-ahmed-ansari-27378720b/'}],
        contributorss: true
    },
    {
        id: '12',
        title: 'Netflix Data Analysis',
        description: 'The project is implemented using python, reflecting various predictions on movies using the linear regression model, including the correlations between different variables. For that, we also checked that our data is normally distributed or not via different plots including residplot and qqplot. Moreover, it includes statistical and visual representations to test different features and trends of our dataset to know about the most popular movies during particular years. Apart from this, the project showcase about the number of actors and directors for different movies.',
        course: 'Personal',
        projectUrl: 'https://github.com/insh-samnani/Personal-Projects/blob/main/Project1.ipynb',
        dateDuration: '1st June, 2022 - 30th June, 2022',
        technology: 'Python (numpy, pandas, seaborn, statsmodel, io, and sklearn).',
        contributors: [{name: 'Ismail Ahmed Ansari', url: 'https://www.linkedin.com/in/ismail-ahmed-ansari-27378720b/'}],
        contributorss: true
    },
    {
        id: '13',
        title: 'Super Market Sales Analysis',
        description: 'The project is implemented using python through various statistical approaches including pie chart, bar chart, histogram, count plot, and distplot. It also used various descriptive approaches including mean, groupby, and average. This supermarket analysis revolves around finding how different factors contributes to higher sales in particular supermarket of a particular city.',
        course: 'Probability and Stats',
        projectUrl: 'https://github.com/insh-samnani/Super-Market-Sales-Analysis/tree/master',
        dateDuration: '1st June, 2022 - 30th June, 2022',
        technology: 'Python (plotly, matplotlib, seaborn, numpy, pandas, and sklearn).',
        contributors: [{name: 'Ismail Ahmed Ansari', url: 'https://www.linkedin.com/in/ismail-ahmed-ansari-27378720b/'}, {name: 'Yusra Adam', url: 'https://www.linkedin.com/in/yusra-adam-79a578223/'}],
        contributorss: true
    },
    {
        id: '14',
        title: 'Linear Algebra in Chemistry',
        description: 'In chemistry, linear algebra is used to solve unescapable task of balancing chemical equations. Balancing chemical equations is fundamental when it comes to laboratory work as the correct ratios of reactants and products is vital to most chemical reactions.',
        course: 'Linear Algebra',
        projectUrl: 'https://github.com/insh-samnani/Linear-Algebra-in-Chemistry',
        dateDuration: '15th August, 2021 - 30th December, 2021',
        technology: 'Linear Algebra Concepts.',
        contributors: [{name: 'Ismail Ahmed Ansari', url: 'https://www.linkedin.com/in/ismail-ahmed-ansari-27378720b/'}, {name: 'Yusra Adam', url: 'https://www.linkedin.com/in/yusra-adam-79a578223/'}],
        contributorss: true
    },
    {
        id: '15',
        title: 'Movie Recommendation System',
        description: 'Recommendation system arises due to preferences based on user’s choices and opinions. Some people like genre specific movies while others prefer to watch according to what the ratings say. Taking all this into account, it is unfear to say that a particular movie would be liked by many. There comes need of a movie recommendation system which is what we have achieved using data structures. This feature of recommendation to general public is being fulfilled by our project but apart from this, we have also provided facility to help movie makers or those which face difficulty in their starting years.',
        course: 'Data Structures',
        projectUrl: 'https://github.com/insh-samnani/Movie-Recommendation-System',
        dateDuration: '1st November, 2021 - 30th December, 2021',
        technology: 'C++, Data Structures (Arrays, Linkedlist, Trees, Stacks, Queues, and Heap).',
        contributors: [{name: 'Ismail Ahmed Ansari', url: 'https://www.linkedin.com/in/ismail-ahmed-ansari-27378720b/'}],
        contributorss: true
    },
    {
        id: '16',
        title: 'Sudoku Mystifier',
        description: 'Sudoku, sounds interesting? A 9 by 9 grid that needs to be completed in such a way that each row, each column and each of the 9 main 3 by 3 sub-grids contains just one of each of the numbers 1 to 9. Our project “Sudoku Mystifier” also performs the same functionality. Solving the sudoku puzzle with user defined inputs as well as solving grid with random values detecting whether the inputs are valid or not is what “Sudoku Mystifier” does.',
        course: 'COAL',
        projectUrl: 'https://github.com/insh-samnani/Sudoku-Solver',
        dateDuration: '15th August, 2021 - 30th December, 2021',
        technology: 'Irvine32.inc Library, Assembly Language',
        contributors: [{name: 'Ismail Ahmed Ansari', url: 'https://www.linkedin.com/in/ismail-ahmed-ansari-27378720b/'}, {name: 'Yusra Adam', url: 'https://www.linkedin.com/in/yusra-adam-79a578223/'}],
        contributorss: true
    },
    {
        id: '17',
        title: 'Advance Tour Guides',
        description: 'This system is maintained using C++ through an object-oriented approach. It will offer tours to various cities in Pakistan. The information provided by the user will entertain them as per their interest in several areas, including mode of travel, medical cautions, and different activities. Also, It will provide information regarding various tour packages based on their preferred environment. Furthermore, this program will maintain a connection between tour guides and tourists through an administrative platform. Lastly, it will also consider the banking system as per the requirements for billing and loan facilities.',
        course: 'Programming Fundamentals',
        projectUrl: 'https://github.com/insh-samnani/Advance-Tour-Guide',
        dateDuration: '1st April, 2021 - 30th May, 2021',
        technology: 'C',
        contributors: [],
        contributorss: false
    },
    {
        id: '18',
        title: 'MIIDY',
        description: 'Gaming has both physical and mental effects on individuals. Excessive gaming can lead to physical issues such as sleep and hygiene irregularities. Mentally, gaming can have positive or negative impacts, influencing cognitive abilities and emotional well-being. The game "MIIDY" focuses on enhancing psychological factors and character-building concepts to help individuals manage daily life challenges effectively.',
        course: 'Psychology',
        projectUrl: 'https://github.com/insh-samnani/MIIDY-Psychological-Game',
        dateDuration: '15th August, 2021 - 30th December, 2021',
        technology: 'Irvine32.inc Library, Assembly Language',
        contributors: [{name: 'Ismail Ahmed Ansari', url: 'https://www.linkedin.com/in/ismail-ahmed-ansari-27378720b/'}, {name: 'Yusra Adam', url: 'https://www.linkedin.com/in/yusra-adam-79a578223/'}, {name: 'Muhib Ahmed', url: 'https://www.linkedin.com/in/muhib-ahmed-366204225/'}],
        contributorss: true
    },
];

const Projects = (props) => {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 1500);

    return(
        <>  
            <div className="container" style={{ display: "flex", justifyContent: "center" }}>
                <h1 style={{marginTop: "80px", fontWeight: "bold" }}>MY PROJECTS</h1>
            </div>

            {loading && <Spinner />}

            {!loading && <>
                <div className="container">
                    <div className="row">
                        {certificate.map((element)=>{
                            const modalId = `exampleModal-${element.id}`;
                            return <div className = "col-md-4 d-flex justify-content-center" key={element.id}>
                                        <div className="modal fade" id={modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id="exampleModalLabel">{element.title}-Contributors</h1>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        {element.contributors.map((person, index)=>{
                                                            return <div key={index}>
                                                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                                                                    <div>{person.name}</div>
                                                                    <button type="button" className="btn btn-dark" onClick={() => window.open(person.url, "_blank")}>
                                                                        View LinkedIn
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-3">
                                            <div className="card">
                                            <div>
                                                <span className="badge rounded-pill bg-danger" style = {{disply:"flex", justifyContent:"flex-end", position:"absolute", right:"0"}}>{element.course}</span>
                                            </div>
                                                <div className="card-body" style={{width: "22rem", height: "20rem", overflow: "auto"}}>
                                                    <h5 className="card-title" style={{marginTop: "5px", fontWeight: "bold"}}>{element.title}</h5>
                                                    <p className="card-text">{element.description}</p>
                                                    <p className = "card-text"><small className = "text-muted">Technologies Used: {element.technology}</small></p>
                                                    <p className = "card-text"><small className = "text-muted">Developed Between: {element.dateDuration}</small></p>
                                                </div>
                                            </div>
                                            <div className = "mt-2" style={{ display: "flex", justifyContent: "space-between" }}>
                                                        <button type="button" className="btn btn-dark btn-sm" onClick={() => window.open(element.projectUrl, "_blank")} >View Project</button>
                                                        <button type="button" className="btn btn-dark btn-sm" data-bs-toggle="modal" data-bs-target={`#${modalId}`} disabled={!element.contributorss}>View Contributors</button>
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

export default Projects;