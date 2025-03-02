import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Home from "./pages/Home/Home.jsx";
import Layout from "./layout/Layout.jsx";
import ReduxHome from "./pages/ReduxHome/ReduxHome.jsx";
import Form from "./pages/Home/subpages/Form.jsx";
import Information from "./pages/Home/subpages/Information.jsx";
import RInformation from "./pages/ReduxHome/subpages/RInformation.jsx";
import RForm from "./pages/ReduxHome/subpages/RForm.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Layout/>}>
                        <Route path={'/home'} element={<Home/>}>
                            <Route path={'form'} element={<Form/>}/>
                            <Route path={'information'} element={<Information/>}/>
                        </Route>
                        <Route path={'/redux-home'} element={<ReduxHome/>}>
                            <Route path={'r-form'} element={<RForm/>}/>
                            <Route path={'r-information'} element={<RInformation/>}/>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
