import React, {useState} from 'react'
import Spinner from './Spinner';
import Footer from './Footer';
import certificate1 from '../Imagess/skillSchoolPK.jpg'
import certificate2 from '../Imagess/WebDesign.jpg'
import certificate3 from '../Imagess/Coursera.jpg'
import certificate4 from '../Imagess/Folio3.png'
import certificate5 from '../Imagess/Loreal.jpeg'
import certificate6 from '../Imagess/Wordpress.jpg'
import certificate7 from '../Imagess/DS1.jpg'
import certificate8 from '../Imagess/DS2.jpg'
import certificate9 from '../Imagess/DS3.jpg'
import certificate10 from '../Imagess/DS4.jpg'
import certificate11 from '../Imagess/DS5.jpg'
import certificate12 from '../Imagess/DS6.jpg'
import certificate13 from '../Imagess/DS7.jpg'
import certificate14 from '../Imagess/DS8.jpg'
import certificate15 from '../Imagess/DS9.jpg'
import certificate16 from '../Imagess/DS10.jpg'
import certificate17 from '../Imagess/DS11.jpg'
import certificate18 from '../Imagess/DS12.jpg'
import certificate19 from '../Imagess/DS13.jpg'
import certificate20 from '../Imagess/DS14.jpg'
import certificate21 from '../Imagess/DS15.jpg'
import certificate22 from '../Imagess/DS16.jpg'
import certificate23 from '../Imagess/DS17.jpg'
import certificate24 from '../Imagess/DS18.jpg'
import certificate25 from '../Imagess/Nestle.jpg'
import certificate26 from '../Imagess/C++.jpg'
import certificate27 from '../Imagess/Graphic.jpg'
import certificate28 from '../Imagess/Scholarly.JPG'
import certificate29 from '../Imagess/DS19.jpg'
import certificate30 from '../Imagess/GreatLearning.jpg'
import certificate31 from '../Imagess/GreatLearning1.jpg'

const certificate = [
    {
        id: '31',
        title: 'Cloud Foundations',
        description: 'Cloud Foundations" is a prestigious certificate that validates my comprehensive understanding of cloud computing fundamentals. It signifies my expertise in key concepts such as virtualization, infrastructure as a service (IaaS), platform as a service (PaaS), and software as a service (SaaS). With this certification, I am equipped to leverage the power of cloud technologies to drive innovation and efficiency.',
        issuer: 'GreatLearning',
        imgUrl: certificate30,
        issueDate: 'June, 2023'
    },
    {
        id: '30',
        title: 'Introduction to AWS',
        description: 'Introduction to AWS" is a recognized certificate that demonstrates my proficiency in Amazon Web Services (AWS), a leading cloud computing platform. This certification validates my foundational knowledge of AWS services, including compute, storage, database, and networking. With this credential, I am equipped to leverage AWS to design scalable and secure cloud solutions.',
        issuer: 'GreatLearning',
        imgUrl: certificate31,
        issueDate: 'June, 2023'
    },
    {
      id: '1',
      title: 'Complete Web App Development Course',
      description: 'I possess a strong foundation in web development. Proficient in creating well-designed and interactive websites, I am skilled in front-end technologies like HTML and CSS, as well as back-end scripting with JavaScript and PHP. My certification demonstrates my ability to deliver dynamic and engaging web solutions.',
      issuer: 'SkillSchoolPK',
      imgUrl: certificate1,
      issueDate: '14th July, 2021'
    },
    {
        id: '2',
        title: 'Web Designing using Wordpress',
        description: 'I have acquired comprehensive knowledge and skills in leveraging the power of this popular content management system (CMS). Proficient in creating and customizing WordPress websites, I can efficiently manage themes, and site functionalities to deliver seamless user experiences. My certification demonstrates my expertise in utilizing WordPress to build professional and visually appealing websites.',
        issuer: 'Meditechx',
        imgUrl: certificate2,
        issueDate: '28th July, 2020'
    },
    {
        id: '3',
        title: 'HTML, CSS, and Javascript for Web Developers',
        description: 'I possess a solid foundation in front-end web development. Skilled in creating responsive and visually appealing websites, I have a strong understanding of HTML for structure, CSS for styling, and JavaScript for interactive elements. My certification showcases my ability to design and develop engaging user experiences using these essential web technologies.',
        issuer: 'Coursera',
        imgUrl: certificate3,
        issueDate: '7th August, 2021'
    },
    {
        id: '4',
        title: 'Data Science Bootcamp',
        description: 'I have gained expertise in leveraging advanced analytical techniques to extract valuable insights from complex datasets. Proficient in data statistical analysis and machine learning, I am skilled in using tools such as Python to uncover patterns and trends. With my certification, I am equipped to contribute to data-driven decision-making processes and drive impactful business outcomes.',
        issuer: 'Folio3',
        imgUrl: certificate4,
        issueDate: 'July, 2023'
    },
    {
        id: '5',
        title: 'Loreal Brandstorm',
        description: 'Collaborated on the concept of Avanxa, an innovative hairband that leverages hardware and software technologies. Proposed a vision for personalized hairstyling experiences through augmented reality and artificial intelligence. Received certification for contributions to hair styling innovation and technology.',
        issuer: 'L\'Oreal',
        imgUrl: certificate5,
        issueDate: '10th April, 2023'
    },
    {
        id: '6',
        title: 'Wordpress',
        description: 'I have acquired comprehensive knowledge and skills in leveraging the power of this popular content management system (CMS). Proficient in creating and customizing WordPress websites, I can efficiently manage themes, and site functionalities to deliver seamless user experiences. My certification demonstrates my expertise in utilizing WordPress to build professional and visually appealing websites.',
        issuer: 'Meditechx',
        imgUrl: certificate6,
        issueDate: '12th March, 2022'
    },
    {
        id: '7',
        title: 'Cleaning Data in Python',
        description: 'Acquired expertise in using Python for data cleaning and preprocessing tasks. Developed skills in handling missing data, removing duplicates, standardizing formats, and resolving inconsistencies. Applied various techniques and libraries to ensure data quality and improve data analysis outcomes.',
        issuer: 'DataCamp',
        imgUrl: certificate7,
        issueDate: '29th June, 2022'
    },
    {
        id: '8',
        title: 'Exploratory Data Analysis in Python',
        description: 'Proficient in leveraging Python libraries such as Pandas, NumPy, and Matplotlib to conduct comprehensive exploratory data analysis. Skilled in visualizing data, identifying patterns, and extracting meaningful insights to support data-driven decision-making. Experienced in data preprocessing, descriptive statistics, and data visualization techniques to uncover valuable information from diverse datasets.',
        issuer: 'DataCamp',
        imgUrl: certificate8,
        issueDate: '9th July, 2022'
    },
    {
        id: '9',
        title: 'Intermediate Regression with Statsmodels in Python',
        description: 'Well-versed in utilizing Statsmodels library to perform regression analysis on complex datasets. Skilled in implementing various regression models, including linear regression and logistic regression. Proficient in interpreting regression results, assessing model fit, and conducting hypothesis testing to derive meaningful insights and make informed predictions.',
        issuer: 'DataCamp',
        imgUrl: certificate9,
        issueDate: '14th July, 2022'
    },
    {
        id: '10',
        title: 'Machine Learning with Scikit-Learn',
        description: 'Proficient in applying Scikit-Learn library to develop and deploy machine learning models. Experienced in implementing a wide range of supervised and unsupervised learning algorithms, such as linear regression, decision trees, support vector machines, and clustering techniques. Skilled in data preprocessing, feature engineering, model evaluation, and hyperparameter tuning to achieve optimal performance and accuracy in machine learning tasks.',
        issuer: 'DataCamp',
        imgUrl: certificate10,
        issueDate: '3rd July, 2022'
    },
    {
        id: '11',
        title: 'Machine Learning with Tree-Based Models in Python',
        description: 'Proficient in utilizing tree-based algorithms, including decision trees, random forests, and gradient boosting, to solve complex machine learning problems. Skilled in feature selection, model interpretation, and ensemble techniques to improve predictive accuracy and handle large datasets.',
        issuer: 'DataCamp',
        imgUrl: certificate11,
        issueDate: '5th July, 2022'
    },
    {
        id: '12',
        title: 'Statistical Thinking in Python (Part 2)',
        description: 'Advanced knowledge and practical skills in statistical analysis using Python. Proficient in applying statistical models, hypothesis testing, and regression analysis to draw meaningful insights from data. Experienced in using Python libraries such as NumPy, pandas, and seaborn for data manipulation, visualization, and statistical analysis.',
        issuer: 'DataCamp',
        imgUrl: certificate12,
        issueDate: '30th June, 2022'
    },
    {
        id: '13',
        title: 'Supervised Learning with Scikit-Learn',
        description: 'Developed expertise in applying supervised learning algorithms using Scikit-Learn library in Python. Proficient in building and evaluating predictive models, feature selection, and model optimization. Skilled in techniques such as linear regression, logistic regression, decision trees, random forests, and support vector machines for solving classification and regression problems.',
        issuer: 'DataCamp',
        imgUrl: certificate13,
        issueDate: '3rd July, 2022'
    },
    {
        id: '14',
        title: 'Unsupervised Learning in Python',
        description: 'Acquired proficiency in implementing unsupervised learning techniques using Python. Skilled in applying clustering algorithms such as k-means and hierarchical clustering for identifying patterns and structures in unlabeled data. Experienced in dimensionality reduction methods like principal component analysis (PCA) for visualizing high-dimensional data.',
        issuer: 'DataCamp',
        imgUrl: certificate14,
        issueDate: '2nd July, 2022'
    },
    {
        id: '15',
        title: 'Hypothesis Testing in Python',
        description: 'Developed expertise in conducting statistical hypothesis tests using Python. Proficient in formulating null and alternative hypotheses, selecting appropriate test statistics, and interpreting p-values and confidence intervals. Skilled in performing t-tests, chi-square tests, ANOVA, and other statistical tests to analyze and draw conclusions from data.',
        issuer: 'DataCamp',
        imgUrl: certificate15,
        issueDate: '27th June, 2022'
    },
    {
        id: '16',
        title: 'Introduction to Regression with Statsmodels in Python',
        description: 'Acquired comprehensive knowledge of regression analysis using Statsmodels library in Python. Proficient in building and interpreting various regression models, including linear regression, multiple regression, and logistic regression. Skilled in assessing model performance, conducting hypothesis tests, and making data-driven predictions and inferences.',
        issuer: 'DataCamp',
        imgUrl: certificate16,
        issueDate: '23rd June, 2022'
    },
    {
        id: '17',
        title: 'Statistical Thinking in Python (Part 1)',
        description: 'Developed a solid foundation in statistical concepts and their practical application using Python. Proficient in exploratory data analysis, hypothesis testing, and statistical inference. Skilled in using statistical models and techniques to extract meaningful insights and make data-driven decisions.',
        issuer: 'DataCamp',
        imgUrl: certificate17,
        issueDate: '22nd June, 2022'
    },
    {
        id: '18',
        title: 'Introduction to Importing Data in Python',
        description: 'Equipped with the skills to efficiently import and manage data from various file formats, databases, and web sources using Python. Proficient in data cleaning, manipulation, and transformation techniques. Experienced in handling large datasets and extracting valuable information for analysis and decision-making.',
        issuer: 'DataCamp',
        imgUrl: certificate18,
        issueDate: '3rd April, 2022'
    },
    {
        id: '19',
        title: 'Intermediate Data Visualization with Seaborn',
        description: 'Demonstrated expertise in creating visually appealing and informative data visualizations using the Seaborn library in Python. Proficient in generating various types of plots, including bar plots, scatter plots, and heatmaps, to effectively communicate insights from complex datasets. Skilled in customizing visual elements, adding annotations, and utilizing advanced techniques for data visualization with Seaborn.',
        issuer: 'DataCamp',
        imgUrl: certificate19,
        issueDate: '17th March, 2022'
    },
    {
        id: '20',
        title: 'Introduction to Data Visualization in Matplotlib',
        description: 'Proficient in creating visually appealing and informative plots and charts using Matplotlib library in Python. Skilled in customizing plot aesthetics, handling multiple subplots, and incorporating annotations and color schemes for effective data communication. Experienced in conveying complex data patterns and trends through clear and engaging visualizations.',
        issuer: 'DataCamp',
        imgUrl: certificate20,
        issueDate: '6th February, 2022'
    },
    {
        id: '21',
        title: 'Joining Data with Pandas',
        description: 'Adept at using Pandas library in Python for merging, concatenating, and combining datasets. Skilled in performing various types of joins, such as inner, outer, left, and right joins, to efficiently combine data from multiple sources. Proficient in handling missing values, duplicate records, and ensuring data integrity during the joining process.',
        issuer: 'DataCamp',
        imgUrl: certificate21,
        issueDate: '5th February, 2022'
    },
    {
        id: '22',
        title: 'Intermediate Python',
        description: 'Proficient in utilizing advanced Python concepts and techniques to solve complex programming problems. Experienced in working with data structures, file handling, error handling, and object-oriented programming. Skilled in writing efficient and modular code, optimizing performance, and implementing best coding practices.',
        issuer: 'DataCamp',
        imgUrl: certificate22,
        issueDate: '31st January, 2022'
    },
    {
        id: '23',
        title: 'Introduction to Python',
        description: 'Equipped with foundational knowledge of Python programming language, including syntax, data types, control structures, and basic data manipulation. Experienced in writing simple scripts, performing calculations, and creating basic applications. Familiarity with fundamental programming concepts and principles.',
        issuer: 'DataCamp',
        imgUrl: certificate23,
        issueDate: '30th January, 2022'
    },
    {
        id: '24',
        title: 'Data Manipulation with Pandas',
        description: 'Proficient in utilizing the powerful Pandas library for data manipulation tasks in Python. Skilled in performing data cleaning, filtering, sorting, and transformation operations. Experienced in handling missing data, merging datasets, and conducting exploratory data analysis using Pandas functionalities.',
        issuer: 'DataCamp',
        imgUrl: certificate24,
        issueDate: '3rd February, 2022'
    },
    {
        id: '25',
        title: 'Introduction to Data Visualization in Seaborn',
        description: 'Acquired foundational knowledge in data visualization using the Seaborn library in Python. Proficient in creating visually compelling plots, such as bar plots, scatter plots, and heatmaps, to effectively communicate data insights. Demonstrated ability to customize visual elements and apply various plotting techniques in Seaborn for enhanced data exploration and presentation.',
        issuer: 'DataCamp',
        imgUrl: certificate29,
        issueDate: '9th February, 2022'
    },
    {
        id: '26',
        title: 'Lets C++',
        description: 'Acquired proficiency in C++ programming language, including concepts like object-oriented programming, data structures, and algorithms. Developed practical skills in writing efficient and reliable code, handling memory management, and implementing software solutions using C++. Equipped with a strong foundation in C++ programming to contribute to software development projects effectively.',
        issuer: 'Meditechx',
        imgUrl: certificate26,
        issueDate: '26th July, 2020'
    },
    {
        id: '27',
        title: 'Nesternship - How to Ace Your Interview',
        description: 'Gained comprehensive knowledge and practical skills in preparing for and excelling in job interviews. Developed expertise in crafting impactful resumes, honing interview techniques, and effectively communicating strengths. Equipped with valuable strategies and insights to confidently navigate the interview process and stand out as a strong candidate.',
        issuer: 'Nestle',
        imgUrl: certificate25,
        issueDate: 'April, 2023'
    },
    {
        id: '28',
        title: 'Graphic Design',
        description: 'Acquired fundamental skills in graphic design principles, including layout, color theory, typography, and visual communication. Proficient in using industry-standard graphic design software to create visually appealing designs for various media platforms. Developed an understanding of design concepts and the ability to translate ideas into creative and impactful visual designs.',
        issuer: 'DigiSkills',
        imgUrl: certificate27,
        issueDate: '8th September, 2021'
    },
    {
        id: '29',
        title: 'Certificate of Merit',
        description: 'Ranked among the top 20 participants worldwide in a challenging and comprehensive quiz covering a wide range of general knowledge topics. Demonstrated strong analytical and critical thinking skills in answering multiple-choice questions accurately and efficiently.  Proven ability to excel in competitive environments and showcase a broad understanding of diverse subject areas.',
        issuer: 'Sholarly Global',
        imgUrl: certificate28,
        issueDate: 'July, 2021'
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
                <h1 style={{marginTop: "80px", fontWeight: "bold" }}>MY CERTIFICATES</h1>
            </div>

            {loading && <Spinner />}

            {!loading && <>
                <div className="container">
                    <div className="row">
                        {certificate.map((element)=>{
                            return <div className = "col-md-4 d-flex justify-content-center mt-3" key={element.id}>
                                        <div className="my-3 mt-3">
                                            <div className="card" style={{width: "23rem", height: "39rem"}}>
                                            <div>
                                                <span className="badge rounded-pill bg-danger" style = {{disply:"flex", justifyContent:"flex-end", position:"absolute", right:"0"}}>{element.issuer}</span>
                                            </div>
                                            <img className="card-img-top" src={element.imgUrl} alt="Certificate Loading" style={{objectFit: "contain", height: "250px", marginTop: "15px"}} />
                                                <div className="card-body mt-3">
                                                    <h5 className="card-title" style={{fontWeight: "bold"}}>{element.title}</h5>
                                                    <p className="card-text">{element.description}</p>
                                                    <p className = "card-text"><small className = "text-muted">Issued On {element.issueDate}</small></p>
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