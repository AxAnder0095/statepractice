import './HomeStyles.sass'
import {useState} from 'react'

function Home(){

    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        age: 0,
        count: 0
    })

    function handleClick(){
        setState({...state, count: state.count + 1})
    }

    // function handleSubmit(){
    //     console.log(state.firstName)
    // }

    // useEffect(() => {
    //     setState({...state, count: state.count + 1})
    // }, [state.count]);

    return (
        <>
            <div className='container d-flex justify-content-center align-items-center' id='home-container'>
                <div className='inner-content'>
                    <h3>Form</h3>
                    {/*<form onSubmit={handleSubmit}>*/}
                    {/*    <label htmlFor={'firstName'}>First Name:*/}
                    {/*        <input*/}
                    {/*            type="text"*/}
                    {/*            value={state.firstName}*/}
                    {/*            onChange={(fName) => setState({...state, firstName: fName.target.value})}*/}
                    {/*        />*/}
                    {/*    </label>*/}
                    {/*    <lable htmlFor={'lastName'}> Last name:*/}
                    {/*        <input*/}
                    {/*        type="text"*/}
                    {/*        value={state.lastName}*/}
                    {/*        onChange={(lName) => setState({...state, lastName: lName.target.value})}/>*/}
                    {/*    </lable>*/}
                    {/*    <label htmlFor={'age'}> Age:*/}
                    {/*        <input*/}
                    {/*        type="number"*/}
                    {/*        value={state.age}*/}
                    {/*        onChange={(pAge) => setState({...state, age: pAge.target.value})}/>*/}
                    {/*    </label>*/}
                    {/*    <input type="submit" />*/}
                    {/*</form>*/}
                </div>
                <div className='inner-content'>
                    <h3>Name and Age display</h3>
                    <p>First Name: {state.firstName}</p>
                    <p>Last Name: {state.lastName}</p>
                    <p>Age: {state.age}</p>
                    <button onClick={handleClick}>Count: {state.count}</button>
                </div>
            </div>
        </>
    )
}
export default Home;