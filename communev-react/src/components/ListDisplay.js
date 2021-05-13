import React from 'react'

function ListDisplay(props) {
    return (
        <div className="listDisplay">
            {props.title} {props.first} {props.last}
        </div>
    )
}

export default ListDisplay
