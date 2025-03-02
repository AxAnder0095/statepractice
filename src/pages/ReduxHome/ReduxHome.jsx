import '../PageStyles.sass'
import {Link, Outlet} from "react-router-dom";

function Home(){
    return (
        <div className='home-containers h-100'>
            <h3 className='text-center p-3 bg-dark text-light m-0' id='title'>React State Management Home</h3>
            <div className='row w-100 m-auto' id='home-links'>
                <Link className='subpage-links w-50 text-center p-3' to={'/redux-home/r-form'}>Form</Link>
                <Link className='subpage-links w-50 text-center p-3' to={'/redux-home/r-information'}>Information</Link>
            </div>
            <div className='container border border-dark' id='main-content'>
                <Outlet/>
            </div>
        </div>
    )
}
export default Home;