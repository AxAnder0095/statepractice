import './HomeStyles.sass'
import {useState} from 'react'

function Home(){

    const [state, setState] = useState({
        name: '',
        age: 0,
        count: 0
    })

    function handleClick(){
        setState({...state, name: 'Alex', age: 29})
    }

    // useEffect(() => {
    //     setState({...state, count: state.count + 1})
    // }, [state.count]);

    return (
        <>
            <div className='container d-flex justify-content-center align-items-center' id='home-container'>
                <div className='' id='inner-content'>
                    <h3>State Management Practice</h3>
                    <p>Name: {state.name}</p>
                    <p>Age: {state.age}</p>
                    <p>Count: {state.count}</p>
                    <button onClick={handleClick}>Click to update name and age</button>
                </div>
            </div>
        </>
    )
}
export default Home;