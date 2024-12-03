import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import AboutMe from './components/about';
import ContactMe from './components/contact';
import PageFooter from './components/footer';
import PageHeader from './components/header';
import MyPortfolio from './components/portfolio';
import MyResume from './components/resume'
import { useRef } from 'react';


//TODO: Implement logic to switch between tabs using useState and conditional statements
function App() {
  const [navTab, setNavTab] = useState("aboutme")
  // const aboutBtn = document.getElementById("aboutBtn")
  // const portBtn = document.getElementById("portBtn")
  // const contBtn = document.getElementById("contBtn")
  // const resBtn = document.getElementById("resBtn")

  // aboutBtn.onClick = () => {
  //   setNavTab("aboutme")
  // }
  // portBtn.onClick = () => {
  //   setNavTab("portfolio")
  // }
  // contBtn.onClick = () => {
  //   setNavTab("contact")
  // }
  // resBtn.onClick = () => {
  //   setNavTab("resume")
  // }
  function renderPage() {
    if (navTab === "aboutme") {
      console.log("aboutme")
      return <AboutMe />
    }
    if (navTab === "portfolio") {
      console.log("portfolio")
      return <MyPortfolio />
    }
    if (navTab === "contact") {
      console.log("contact")
      return <ContactMe />
    }
    if (navTab === "resume") {
      console.log("resume")
      return <MyResume />
    }
  }

  const handlePageChange = (page) => setNavTab(page);

  return (
    <>
      <header>
        <PageHeader setNavTab={setNavTab} handlePageChange={handlePageChange} />
      </header>
      <main>
        {renderPage()}
        <div>

        </div>
      </main>
      <footer>
        <PageFooter />
      </footer>
      {/* <aboutMe />
      <contactMe />
      <myPortfolio />
      <myResume /> */}
    </>
  )
}

export default App