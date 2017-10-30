import React from 'react';

const UserOutput = (props) => {
    return(
        <div>
            <p>Test {props.username}</p>
            <p onClick={props.clicked} >Test para</p>
            <p>{props.children}</p>
        </div>
    );
};

export default UserOutput;