import React from 'react'

export default function PostAuthorBio(props) {
    return (
        <div>
            <img 
                style={ { width:"150px", height:"150px", borderRadius:"50%", verticalAlign:"middle" } } 
                src={ props.author.avatar }
                alt={ props.author.name }
            /> 
            <h5>{ props.author.name }</h5>
            <p>{ props.author.description }</p>
        </div>
    )
}
