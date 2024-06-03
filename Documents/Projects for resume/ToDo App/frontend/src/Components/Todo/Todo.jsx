import React, { useState } from 'react'
import './Todo.css';
import TodoCard from './TodoCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from './Update';


const Todo = () => {
    const show = () => {
        document.getElementById("textarea").style.display = "block";
    }
    const [Inputs, setInputs] = useState({ title: "", body: "" });
    const [Array, setArray] = useState([])
    const [showUpdatePopup, setShowUdatePopup] = useState(false);


    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...Inputs, [name]: value });
    }
    const submit = () => {
        if (Inputs.title === "" || Inputs.body === "") {
            toast.error("Title or Body should not be empty")

        } else {
            setArray([...Array, Inputs])
            setInputs({ title: "", body: "" })
            toast.success("Your Task Is Saved");
            toast.error("Your Task Is Not Saved !Please SignUp")
        }

    }
    console.log(Array)

    const del = (id) => {
        console.log(id)
        Array.splice(id, "1")
        setArray([...Array])

    }

    const dis = () => {
        setShowUdatePopup(true);
    }

    const hid = () => {
        setShowUdatePopup(false)
    }



    return (
        <>
            <div className='todo'>
                <ToastContainer />
                <div className='todo-main  d-flex justify-content-center align-items-center my-4 flex-column'>
                    <div className='d-flex flex-column todo-inputs-div w-50 p-1'>
                        <input type="text" onClick={show} onChange={change} value={Inputs.title} name='title' placeholder='TITLE' className='my-2 p-2 todo-inputs' />
                        <textarea id='textarea' onChange={change} value={Inputs.body} name='body' type="text" placeholder='BODY' className='p-2 todo-inputs' />
                    </div>
                    <div className='w-50 d-flex justify-content-end my-3 '>
                        <button className='home-btn px-2 py-1' onClick={submit}>Add</button>

                    </div>

                </div>
                <div className="todo-body">
                    <div className="container-fluid">
                        <div className="row">
                            {Array && Array.map((item, index) => <div className="col-lg-3 col-10 mx-5 my-2" key={index}>
                                <TodoCard title={item.title} body={item.body} id={index} delid={del} display={dis} />
                            </div>)}


                        </div>
                    </div>

                </div>
            </div>
            {showUpdatePopup && <div className="todo-update ">
                <div className="container update" id='todo-update'> <Update hide={hid} /></div>

            </div>}
        </>
    )
}

export default Todo