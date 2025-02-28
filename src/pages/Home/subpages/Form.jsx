import './FormStyles.sass'
import {useOutletContext} from "react-router-dom";
import {useState} from "react";

function Form(){
    const context = useOutletContext()

    const [inputError, setInputError] = useState({
        nameError: '',
        emailError: '',
        ageError: '',
        expenseError: 0
    });
    const [tempData, setTempData] = useState({
        name: '',
        email: '',
        age: 0,
        expense: 0
    })

    const handleSubmit = (event) => {
        // if (inputError.nameError) {
        //
        // }

        context.updateData(tempData)
        event.preventDefault()
    }

    const handleNameChange = (event) => {
        setTempData({...tempData, name: event.target.value})
        console.log(event.target.value)
        if (!event.target.value){
            setInputError({...inputError, nameError: 'Must enter a name'})
        }
        else{
            setInputError({...inputError, nameError: ''})
        }
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
                            // onChange={(e) => setTempData({...tempData, name: e.target.value})}
                            onChange={handleNameChange}
                        />
                        {inputError.nameError && <p className='error'>{inputError.nameError}</p>}
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