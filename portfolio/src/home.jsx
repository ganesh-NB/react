import me from './me.jpg';
function Home() {
    return (
        <div className="home">
            <h1 className="welcome">Welcome to My Portfolio My name is Ganesh NB
                <img className='photo' src={me} alt="Ganesh NB" />
            </h1>
            <p className='dis'>This is the home section of my portfolio website.
                Here, you can find information about me, my skills, projects, and contact details.
                i am a BCA student and currently in 3rd year. I am interested in web development and
                programming. I have experience in HTML, CSS, JavaScript, and React.js.
                Feel free to explore my portfolio and get in touch with me for any opportunities or collaborations.
            </p>
            <hr />
        </div>
    );          
}
export default Home;