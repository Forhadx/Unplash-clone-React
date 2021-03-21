import React from 'react';

const Topic = props =>{
    console.log(props.match.params.id)
    console.log(props.match.params.title)
    return(
        <div>
            topics
        </div>
    )
}

export default Topic;