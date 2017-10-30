import React from 'react';

const UserOutput = (props) => {
    return(
        <div>
            <p>Username: {props.username}</p>
            <button onClick={props.clicked} >Test para</button>
        </div>
    );
};

export default UserOutput;