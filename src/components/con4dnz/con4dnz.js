import React, { useState} from 'react'
import styled from 'styled-components';

const theme = {
    orange: {
        default: '#FF9800',
        hover: 'orange',
    }, 
    red: {
        default: '#E91E63',
        hover: '#E040FB',
    },
    green: {
        default: '#FF9800',
        hover: 'orange',
    },
    purple: {
        default: '#FF9800',
        hover: 'orange',
    }
};


const Button = styled.button`
    background-color: ${props => theme[props.theme].default};
    color: white;
    padding: 5px 15px;
    border-radius: 5px;
    outline: 0;
    box-shadow: 0px 2px 2px lightgray;
    margin 10px 0px;
    cursor pointer;
    text-transform: none;
    transition: ease background-color 250ms;
    &:hover {     
        background-color: ${props => theme[props.theme].hover};
    }
`

Button.defaultProps= {
    theme: 'orange'
};


function toDo(){
}

// const types = ["1", "2", "3"]

// function ToggleGroup(){ ActiveXObject, setactive 


//     const [active, setActive = useState(types[0])]
//     return 
//     <div>
//         {types.map}
//     </div>

// }



export default function con4dnz() {
    return (
        <>
            <h1>Confidence Essentials For You</h1>
            <a href="/quiz-mood">
                <Button>
                Mood Today - Quiz
                </Button>
                </a>
            <div>
                <Button theme='' onClick={toDo}>
                Self Care Session
                </Button>
            </div>
            <div>
                <Button theme='' onClick={toDo}>
                To Do List
                </Button>
            </div>
        </>
    );
}
