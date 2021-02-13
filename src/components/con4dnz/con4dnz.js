import React from 'react'
import styled from 'styled-components';


const theme = {
    orange: {
        default: '#FF9800',
        hover: 'orange',
    }, 
    red: {
        default: '#FF9800',
        hover: 'orange',
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

export default function con4dnz() {
    return (
        <>
            <a href="/quiz-mood">
                <Button onClick={toDo}>
                    Button
                </Button>
                </a>
            <div>
                <Button theme='' onClick={toDo}>
                    Button
                </Button>
            </div>
            <div>
                <Button theme='' onClick={toDo}>
                    Button
                </Button>
            </div>
        </>
    );
}
