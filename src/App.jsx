import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Home from "./pages/Home.jsx";
import Layout from "./layout/Layout.jsx";
import ReduxHome from "./pages/ReduxHome.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path={'/redux-home'} element={<ReduxHome/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
