import '../PageStyles.sass'
import {useState} from "react";
import {Link, Outlet} from "react-router-dom";

function Home(){

    const [budgetData, setBudgetData] = useState({
        name: '',
        email: '',
        age: 0,
        expense: 0
    })

    const updateData = (data) => {
        setBudgetData({...budgetData,
            name: data.name,
            email: data.email,
            age: data.age,
            expense: data.expense,})
    }

    const contextState = {
        budgetData,
        updateData

    }

    // useEffect(() => {
    //     setState({...state, count: state.count + 1})
    // }, [state.count]);

    return (
        <div className='home-containers h-100'>
            <h3 className='text-center p-3 bg-dark text-light m-0' id='title'>React State Management Home</h3>
            <div className='row w-100 m-auto' id='home-links'>
                <Link className='subpage-links w-25 text-center p-3' to={'/home/form'}>Form</Link>
                <Link className='subpage-links w-25 text-center p-3' to={'/home/information'}>Information</Link>
                <Link className='subpage-links w-25 text-center p-3' to={'/'}>Change Info</Link>
                <Link className='subpage-links w-25 text-center p-3' to={'/'}>idk yet</Link>
            </div>
            <div className='container border border-dark' id='main-content'>
                <Outlet context={contextState}/>
            </div>
        </div>
    )
}
export default Home;