import './FormStyles.sass'
import {useSelector} from "react-redux";


function RForm(){
    const pData = useSelector((state) => state.personalData);
    // const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault()
    }


    return (
        <div className='h-100' id='form-container'>
            <div className='p-5' id='inner-form'>
                <form onSubmit={handleSubmit}>
                    <label className='labels'>
                        <p className='m-0'>Enter first and last name {pData.name}</p>
                        <input
                            className='inputs'
                            type='text'
                            placeholder='name'
                        />

                    </label>
                    <label className='labels'>
                        <p className='m-0'>Enter email address</p>
                        <input
                            className='inputs'
                            type='text'
                            placeholder='email'
                        />
                    </label>
                    <label className='labels'>
                        <p className='m-0'>Enter age</p>
                        <input
                            className='inputs'
                            type='text'
                            placeholder='age'
                        />
                    </label>
                    <label className='labels'>
                        <p className='m-0'>Enter expense amount</p>
                        <input
                            className='inputs'
                            type='text'
                            placeholder='amount'

                        />
                        {/*{inputError.expenseError && <p className='error'>{inputError.expenseError}</p>}*/}
                    </label>
                    <div className='d-flex justify-content-center mt-1'>
                        <input type="submit" id='submit-button'/>
                    </div>
                    {/*{inputError.submitError && <p className='error text-center'>{inputError.submitError}</p>}*/}
                </form>
            </div>
        </div>
    )
}

export default RForm