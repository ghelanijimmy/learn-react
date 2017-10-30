import React from 'react';
import './Person.css';
const person = (props) => {    
    return (
        <div className="Person">
            <h3 onClick={props.click}>I'm {props.name} and I am {props.age} years old!!</h3>
            <em>{props.children}</em>
            <input type="text" onChange={props.changed} value={props.name} />
            <input type="text" onChange={props.typeLengthCalc} />
            <p>Length: {props.typeLength}</p>
            <p>Value: {props.typedContent}</p>
            {
                props.typeLength > 5 ?
                <p>Too long</p> :
                <p>Too Short</p>
            }
        </div>
    );
};

export default person; 