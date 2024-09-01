import React from "react";

function User(props){   
    return(
        <div>
            <h1>Nombre: {props.name}</h1>
            <p>Edad: {props.age}</p>
        </div>
    );
}

function Users(){
    return(
        <div>
            <User name="Fabricio" age="25"/>
            <User name="Tatan" age="30"/>
            <User name="Lorena" age="20"/>
        </div>
    );
}

export default Users;