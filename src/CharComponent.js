import React,{ Component } from "react";


const CharComponent = (prop) => {
        const style = {
            display : 'inline-block',
            padding : '16px',
            margin : '16px',
            border : '1px solid black',
            //text-align : 'center';
        };
        return (
            <div style={style} onClick={prop.click}>
                <p>{prop.name}</p>
            </div>
        );
    }
export default CharComponent;