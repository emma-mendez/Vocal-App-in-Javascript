import React from 'react';
import '../App.css';
import 'swiper/swiper-bundle.css';
import { useHistory } from 'react-router-dom';

const Home = () =>{
    let history = useHistory();

    const redirectCourse = () => {
        history.push('/course');
}

    const redirectStudio = () => {
    history.push('/studio-menu')
    
}

const previous = () => {
    history.push('/')};

    const next = () => {
    history.push('/page2')}

    
    return (
    <>
        <div>
            <header>
            <img src='acslogo.png' className="logo" alt="logo" />
            </header>
            <React.Fragment>
                {/* <Swiper id="main"> */}
                    <button class="buttonPages" onClick={redirectCourse}> 
                    <p class="button-inside"><h1 class='h2'>SING</h1></p></button>
                    <br></br>
                    <button class="button-nav" onClick={previous}>BACK</button>
                    <button class="button-nav" onClick={next}>NEXT</button>
                    <button class="buttonPages" onClick={redirectStudio}>
                    <p class="button-inside"><h1 class='h2'>STUDIO</h1></p>
                    </button>
                    <br></br>
            </React.Fragment>
        </div>
        </>
    );
}

export default Home