import React from 'react';

const person = (props) => {
    
    return (
        <div>
            <h3>I'm {props.name} and I am {props.age} years old!!</h3>
            <em>{props.children}</em>
        </div>
    );
};

export default person; 