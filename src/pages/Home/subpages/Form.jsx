import './FormStyles.sass'
import {useOutletContext} from "react-router-dom";
import {useState} from "react";

function Form(){
    const context = useOutletContext()
    const [tempData, setTempData] = useState({
        name: '',
        email: '',
        age: 0,
        expense: 0
    })

    const handleSubmit = (event) => {
        context.updateData(tempData)
        event.preventDefault()
    }


    return (
        <div className='h-100' id='form-container'>
            <div className='p-5' id='inner-form'>
                <form onSubmit={handleSubmit}>
                    <label className='labels'>
                        <p className='m-0'>Enter first and last name</p>
                        <input
                            className='inputs'
                            type='text'
                            placeholder='name'
                            onChange={(e) => setTempData({...tempData, name: e.target.value})}
                        />
                    </label>
                    <label className='labels'>
                        <p className='m-0'>Enter email address</p>
                        <input
                            className='inputs'
                            type='text'
                            placeholder='email'
                            onChange={(e) => setTempData({...tempData, email: e.target.value})}
                        />
                    </label>
                    <label className='labels'>
                        <p className='m-0'>Enter age</p>
                        <input
                            className='inputs'
                            type='text'
                            placeholder='age'
                            onChange={(e) => setTempData({...tempData, age: e.target.value})}
                        />
                    </label>
                    <label className='labels'>
                        <p className='m-0'>Enter expense amount</p>
                        <input
                            className='inputs'
                            type='number'
                            placeholder='amount'
                            onChange={(e) => setTempData({...tempData, expense: e.target.value})}
                        />
                    </label>
                    <div className='d-flex justify-content-center mt-3'>
                        <input type="submit" id='submit-button'/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form