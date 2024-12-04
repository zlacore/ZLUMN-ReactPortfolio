// Instructions:
// WHEN I view the header
// THEN I am presented with the developer's name and the navigation bar
// import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PageHeader({ setNavTab }) {
   // const [navTab, setNavTab] = useState("aboutme")

//     function renderPage() {
//         if (navTab === "aboutme") {
//            return (<AboutMe />, console.log("aboutme"))
//         }
//         if (navTab === "portfolio") {
//            return (<MyPortfolio />, console.log("portfolio"))
//         }
//          if (navTab === "contact") {
//            return (<ContactMe />, console.log("contact"))
//          }
//         if (navTab === "resume") {
//            return (<MyResume />, console.log("resume"))
//          }
//       }
//  const handlePageChange = (page) => setCurrentPage(page);


    console.log("PAGE HEADER")
    {/*TODO: Build header component*/}
    return (
    <header className="bg-color-6320ee d-flex justify-content-around">
        <h1>Zachary LaCore</h1>
        <nav className="navbar navbar-inverse d-flex justify-content-around justify-content-between">
            <button onClick={()=>setNavTab("aboutme")}id="aboutBtn">About Me</button>

            <button onClick={()=>setNavTab("portfolio")}id="portBtn">Portfolio</button>

            <button onClick={()=>setNavTab("contact")}id="contBtn">Contact</button>

            <button onClick={()=>setNavTab("resume")}id="resBtn">Resume</button>
        </nav>
    </header>
    )
}