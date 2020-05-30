import React from 'react'

export const Validation = (prop) => {
    return (
        <div>
            {prop.len > 5 ? "Text long enough" : "Text too short"}
        </div>
    )
}