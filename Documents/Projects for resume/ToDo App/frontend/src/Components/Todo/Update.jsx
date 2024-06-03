import React from 'react'
import './Todo.css'

const Update = ({ hide }) => {
    return (
        <div className='p-5 d-flex justify-content-center align-items-start flex-column update'>
            <h3>Update you task</h3>
            <input type="text" className='todo-inputs my-4 w-100 p-3' />
            <textarea className='todo-inputs w-100 p-3'></textarea>
            <div className="btns">
                <button className='btn btn-dark my-4'>Update</button>
                <button className='btn btn-danger mx-3 my-4' onClick={() => { hide() }}>Close</button>
            </div>


        </div>
    )
}

export default Update