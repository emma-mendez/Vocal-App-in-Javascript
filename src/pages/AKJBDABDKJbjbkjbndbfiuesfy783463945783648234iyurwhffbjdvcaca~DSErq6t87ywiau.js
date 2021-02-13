import React from 'react';
import '../App.css';
import { useHistory } from 'react-router-dom';

const Home = () =>{
    let history = useHistory();

    const redirectCourse = () => {
        history.push('/JVJHBKJHIbvgjbjkugyTYGHV786ftuvgjkui876FTYGHvcfdryTYGHOJPllkjh');
}

    const redirectStudio = () => {
    history.push('/GCVJHIUH7y8tygujghbkVGTF67TGYHbkhjgvcukjlmkljhjklnj,.kjuygu')
    
}

const previous = () => {
    history.push('/')};

    const next = () => {
    history.push('/JVjhdbkjDVGfda8e7dwy9845y2h3iwhjvGHCHVSCKBJNZBFAIUFYA9')}

    
    return (
    <>
            <div class="content">
            <div>
            <header>
            <img src='acslogo.png'  className='App-logo2' alt="logo" />
            </header>
            <>
                    <button class="buttonPages" onClick={redirectCourse}> 
                    <p class="button-inside"><h1 class='h2'>SING</h1></p></button>
                    <br></br>
                    <button class="button-nav" onClick={previous}>BACK</button>
                    <button class="button-nav" onClick={next}>NEXT</button>
                    <br></br>
                    <button class="buttonPages" onClick={redirectStudio}>
                    <p class="button-inside"><h1 class='h2'>STUDIO</h1></p>
                    </button>            </>
        </div>
        </div>
        </>
    );
}

export default Home