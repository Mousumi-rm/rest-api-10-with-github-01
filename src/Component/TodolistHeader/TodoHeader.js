import React from 'react';

const TodoHeader = () => {
   
    return (
        <div>
            <h2>Student-Id Portal</h2>
            <div>
                <nav>
                    <a href="/home">Home</a>
                    <a href="/about-us">About Us</a>
                    <a href="/contact">Contact Us</a>
                </nav>
                <div>
                    <input type="text" placeholder="search student Id" />
                    <button className='btn  btn-primary'>Search</button>
                </div>
            </div>
             
        </div>
    );
};

export default TodoHeader;