import React from 'react'
import { useAuth } from '../auth/auth';
import { useState } from 'react';


const Songs = () => {
    const {score ,setScore} = useAuth();


    const incrementScore = () => {
        setScore(score + 1);
    };
    return (
        <div className='p-3.5  '>
        <h1 className="text-center text-shadow-lg text-4xl rounded-2xl px-3.5 py-3.5 font-bold text-red-500 ">Your Score is {score}</h1>

        
            <div className="grid grid-cols-2 gap-4 p-15">
                <div className="w-1/2 h-120 p-2 m-3 b-3 items-center bg-green-100">
                <button onClick={incrementScore}>Content in Div 1</button></div>
                <div className="w-1/2 h-120 p-2 m-3  b-3 items-center bg-green-100">
                <button onClick={incrementScore}>Content in Div 2</button>
                </div>
            </div>
        </div>

    )
}

export default Songs
