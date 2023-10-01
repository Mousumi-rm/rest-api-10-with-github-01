import React from 'react';
import './ApiProps.css'

const ApiProps = (props) => {
    const{id,title,userId }= props.myTodo;
    return (
        <div className='props-style'>
            <h1>Completed:{props.completed}</h1>
            <p>Id:{id}</p>
            <p>title:{title}</p>
            <p>UserId:{userId}</p>           
        </div>
    );
};

export default ApiProps;