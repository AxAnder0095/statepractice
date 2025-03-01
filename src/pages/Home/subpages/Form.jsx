import './FormStyles.sass'
import {useOutletContext} from "react-router-dom";
import {useState} from "react";

function Form(){
    const context = useOutletContext()

    const [inputError, setInputError] = useState({
        nameError: '',
        emailError: '',
        ageError: '',
        expenseError: 0,
        submitError: ''
    });

    const [tempData, setTempData] = useState({
        name: '',
        email: '',
        age: '',
        expense: ''
    });

    const handleNameChange = (event) => {
        const nameRegex = /^[a-zA-Z]$/;
        setTempData({...tempData, name: event.target.value})
        if (!event.target.value){
            setInputError({...inputError, nameError: 'Must enter a name'})
        }
        else if (nameRegex.test(event.target.value))
            setInputError({...inputError, nameError: 'Incorrect name format'})
        else
            setInputError({...inputError, nameError: ''})
    };

    const handleEmailChange = (event) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        setTempData({...tempData, email: event.target.value})
        if (!event.target.value){
            setInputError({...inputError, emailError: 'Must enter an email'})
        }
        else if (!emailRegex.test(event.target.value))
            setInputError({...inputError, emailError: 'Incorrect email format'})
        else
            setInputError({...inputError, emailError: ''})
    };

    const handleAgeChange = (event) => {
        const ageRegex = /^[0-9]{0,2}$/;
        setTempData({...tempData, age: event.target.value})
        if (!event.target.value){
            setInputError({...inputError, ageError: 'Must enter an age'})
        }
        else if (!ageRegex.test(event.target.value))
            setInputError({...inputError, ageError: 'Incorrect age format'})
        else
            setInputError({...inputError, ageError: ''})
    };

    const handleSubmit = (event) => {
        if (inputError.nameError || inputError.emailError || inputError.ageError) {
            setInputError({...inputError, submitError: 'Incorrect format in one or more fields'})
        }
        else
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
                            onChange={handleEmailChange}
                        />
                        {inputError.nameError && <p className='error'>{inputError.emailError}</p>}

                    </label>
                    <label className='labels'>
                        <p className='m-0'>Enter age</p>
                        <input
                            className='inputs'
                            type='text'
                            placeholder='age'
                            // onChange={(e) => setTempData({...tempData, age: e.target.value})}
                            onChange={handleAgeChange}
                        />
                        {inputError.ageError && <p className='error'>{inputError.ageError}</p>}
                    </label>
                    <label className='labels'>
                        <p className='m-0'>Enter expense amount</p>
                        <input
                            className='inputs'
                            type='text'
                            placeholder='amount'
                            onChange={(e) => setTempData({...tempData, expense: e.target.value})}
                        />
                    </label>
                    <div className='d-flex justify-content-center mt-1'>
                        <input type="submit" id='submit-button'/>
                    </div>
                    {inputError.submitError && <p className='error'>{inputError.submitError}</p>}
                </form>
            </div>
        </div>
    )
}

export default Form