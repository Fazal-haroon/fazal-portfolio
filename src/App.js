import Navbar from './components/Navbar';
import Home from '../src/components/Home';
import Skills from '../src/components/Skills';
import Project from '../src/components/Project';
import Experience from '../src/components/Experience';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import {Route, Routes} from "react-router-dom"

function App() {
    return (<>

            <Navbar/>

            <Routes>

                <Route path="/" element={<Home/>}/>
                <Route path="/skills" exact element={<Skills/>}/>
                <Route path="/project" exact element={<Project/>}/>
                <Route path="/experience" exact element={<Experience/>}/>


            </Routes>
        </>);
}

export default App;
