import React from 'react';
import avatar from '../images/Avatar.png';

const Home = () => {
    return(
        <div className="content">      
            <div className="home page">
                <img className="avatar-img" src={avatar} alt="avatar"/>
                <div className="about-me">
                    <h1 className="about-me-title">Yağızhan Avcı <br/> Full Stack Web Developer</h1>
                    <p className="about-me-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus at modi accusantium error voluptatem maxime quas? At alias est adipisci.</p>
                    <ul className="my-skills">
                        <li><i className="fab fa-html5"></i><br/>HTML</li>
                        <li><i className="fab fa-css3-alt"></i><br/>CSS</li>
                        <li><i className="fab fa-js-square"></i><br/>JavaScript</li>
                        <li><i className="fab fa-react"></i><br/>React</li>
                    </ul>
                </div>
            </div>   
        </div>
    )
}

export default Home;