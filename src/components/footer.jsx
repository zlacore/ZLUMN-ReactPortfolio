// WHEN I view the footer
// THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)

import { useRef } from "react"

export default function PageFooter() {
    {/*TODO: Complete footer component*/}
    const footerRef = useRef(null)
    return (
        <footer className="d-flex justify-content-around position-absolute bottom-50 start-50 translate-middle">
            <a className=".ml-1 .mr-1" href="https://github.com/zlacore">Github</a>
            <a className=".ml-1 .mr-1" href="linkedin">LinkedIn</a>
            <a className=".ml-1 .mr-1" href="youtube.com">Youtube</a>
        </footer>
    )
}