import './FormStyles.sass'
import {useDispatch} from "react-redux";
import {useState} from "react";
import {setAll} from "../../../state/personData/personDataSlice.js";


function RForm(){
    // const pData = useSelector((state) => state.personalData);
    const dispatch = useDispatch();

    const [inputError, setInputError] = useState({
        nameError: '',
        emailError: '',
        ageError: '',
        expenseError: '',
        submitError: ''
    });

    const [tempData, setTempData] = useState({
        name: '',
        email: '',
        age: '',
        expense: ''
    });

    const handleNameChange = (event) => {
        // console.log(event.target)
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

    const handleExpenseChange = (event) => {
        const expenseRegex = /^[0-9]{1,9}$/;
        setTempData({...tempData, expense: event.target.value})
        if (!event.target.value){
            setInputError({...inputError, expenseError: 'Must enter a number'})
        }
        else if (!expenseRegex.test(event.target.value))
            setInputError({...inputError, expenseError: 'Incorrect number format'})
        else
            setInputError({...inputError, expenseError: ''})
    }

    const handleSubmit = (event) => {
        if (inputError.nameError || inputError.emailError || inputError.ageError || inputError.expenseError) {
            setInputError({...inputError, submitError: 'Incorrect format in one or more fields'})
        }
        else if (!tempData.name || !tempData.email || !tempData.email || !tempData.age || !tempData.expense)
            setInputError({...inputError, submitError: 'Please fill the required fields'})
        else
            dispatch(setAll(tempData))

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
                            onChange={handleExpenseChange}
                        />
                        {inputError.expenseError && <p className='error'>{inputError.expenseError}</p>}
                    </label>
                    <div className='d-flex justify-content-center mt-1'>
                        <input type="submit" id='submit-button'/>
                    </div>
                    {inputError.submitError && <p className='error text-center'>{inputError.submitError}</p>}
                </form>
            </div>
        </div>
    )
}

export default RForm