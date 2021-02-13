import React from 'react';
import '../App.css';
import { useHistory } from 'react-router-dom';

const Page3 = () =>{
    let history = useHistory();

    const redirect = () => {
        history.push('/dsjkfgrsuyfygesuydctdxc67tfyfVGHJCFXDTF78t67tuygjhbvghTFYFUYGuhv');
}

    const redirectStats = () => {
    history.push('/stats')
    
}
        const previous = () => {
        history.push('/JVjhdbkjDVGfda8e7dwy9845y2h3iwhjvGHCHVSCKBJNZBFAIUFYA9')}
    
        const next = () => {
        history.push('/AKJBDABDKJbjbkjbndbfiuesfy783463945783648234iyurwhffbjdvcaca~DSErq6t87ywiau')};
    
        

    return (
        <div class="content">
        <div>
            <header className="App-header">
            <img src='acslogo.png' className='App-logo2' alt="logo" />
            </header>
            <button class="buttonPages" 
            onClick={redirectStats}> 
            <p class="button-inside"><h1 class='h2'>STATS</h1></p>
            </button>
            <br></br>
            <button class="button-nav" onClick={previous}>BACK</button>
            <button class="button-nav" onClick={next}>NEXT</button>
            <br></br>
            <button class="buttonPages" 
            onClick={redirect}>
            <p class="button-inside"><h1 class='h2'>ZING!</h1></p>
            </button>
             <br></br>
             </div>
        </div>
    )
}

export default Page3


