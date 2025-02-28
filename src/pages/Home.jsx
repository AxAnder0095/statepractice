import './PageStyles.sass'
import {useState} from "react";
import {Link} from "react-router-dom";

function Home(){
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    // function handleSubmit(event){
    //     event.preventDefault()
    //     console.log(state.firstName)
    // }

    // useEffect(() => {
    //     setState({...state, count: state.count + 1})
    // }, [state.count]);

    return (
        <div className='home-containers'>
            <h3 className='text-center p-3 bg-dark text-light m-0'>React State Management Home</h3>
            <div className='row w-100 m-auto'>
                <Link className='subpage-links w-25 text-center p-3' to={'/'}>Form</Link>
                <Link className='subpage-links w-25 text-center p-3' to={'/'}>Information</Link>
                <Link className='subpage-links w-25 text-center p-3' to={'/'}>Change Info</Link>
                <Link className='subpage-links w-25 text-center p-3' to={'/'}>idk yet</Link>
            </div>
        </div>
    )
}
export default Home;