import React from 'react'

export const UserInput = (props) => {
    return (
        <div>
            <input type='text' onChange={props.change} value={props.username}/>
        </div>
    )
}

