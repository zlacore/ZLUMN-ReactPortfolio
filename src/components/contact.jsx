//Instructions:
// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message
// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address
// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies

import 'bootstrap/dist/css/bootstrap.min.css';
export default function contactMe() {

    {/*TODO: Build contact component*/ }
    return (
        <>
            <form className="d-flex justify-content-center contactform">
                {/* <div className="d-inline-block" id="namediv"> */}
                    <label for="name">Name:</label>
                    <input id="name" placeholder="Name" required></input>
                {/* </div> */}
                {/* <div id="emaildiv"> */}
                    <label for="email">Email:</label>
                    <input id="email" type="email" placeholder="Email" required></input>
                {/* </div> */}
                {/* <div id="msgdiv"> */}
                    <label for="message">Message:</label>
                    <input id="msg" type="textbox" placeholder="Put your message here!" required ></input>
                {/* </div> */}
                    <button type="submit">
                        Submit
                    </button>
            </form>
        </>
    )
}