import { Routes, Route } from "react-router-dom"
import Homee from "./paginas/Homee.js"
import Contact from "./paginas/Contact.js"
import Conteiner from "./Conteiner.js"
import NewProject from "./paginas/NewProject.js"
import Navbar from "./Navbar.js"
import Project from "./paginas/Project.js"
import Footer from "./Footer.js"
function App() {
    return(
        <>
            <Navbar/>
             <Routes>
                <Route element={<Conteiner customClass="min_height" />} >
                    <Route exact path="/" element={<Homee />} /> 
                    <Route path="/" element={<Homee />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/newproject" element={<NewProject />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
            <Footer/>
        </>
    )
}
export default App

