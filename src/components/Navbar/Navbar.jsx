import './NavbarStyles.sass'
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className='d-flex justify-content-center mb-5 gap-4'>
                <Link className='links' to="/">React State Management</Link>
                <Link className='links' to="/redux-home">Redux State Management</Link>
            </div>
        </>
    )
}

export default Navbar;