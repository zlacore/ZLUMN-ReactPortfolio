import { useRef } from "react"

//INSTRUCTIONAL COMMENTS
// GIVEN a single-page application portfolio for a web developer
// WHEN I load the portfolio
// THEN I am presented with a page containing a header, a section for content, and a footer
// WHEN I view the header
// THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
// WHEN I view the navigation titles
// THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
// WHEN I click on a navigation title
// THEN the browser URL changes and I am presented with the corresponding section below the navigation and that title is highlighted
// WHEN I load the portfolio the first time
// THEN the About Me title and section are selected by default
// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short bio about them

export default function aboutMe() {
    {/*TODO: Build aboutme component*/ }
    return (
        <div className="d-flex flex-column justify-content-center">
            <h3>About Me</h3>
            <img src="placehold.it/200x200"></img>
            <div>
                <h4>Hello! There will be information about me here in the future!</h4>
            </div>
        </div>
    )
}

