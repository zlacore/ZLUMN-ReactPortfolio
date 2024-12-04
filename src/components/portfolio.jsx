// import placeholder1 from './src/assets/img/jake2.png'
// import placeholder2 from './src/assets/img/theo3.png'
import React from 'react'
//Instructional Comments
// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories

export default function myPortfolio() {
    {/*TODO: Build portfolio component*/ }
    const projectArray = [{
        "title": "Example 1",
        "img": './src/assets/img/jake2.jpg',
        "desc": "description",
        "pageLink": "",
        "gitLink": ""
    },
    {
        "title": "Example 2",
        "img": "./src/assets/img/jake2.jpg",
        "desc": "description",
        "pageLink": "",
        "gitLink": ""
    },
    {
        "title": "Example 3",
        "img": "./src/assets/img/jake2.jpg",
        "desc": "description",
        "pageLink": "",
        "gitLink": ""
    }
    ]
    // Code assisted by Lucas Hallman ///////////////////////
    function renderProjectPiece(project) {
        const title = project.title;
        const img = project.img;
        const desc = project.desc;
        const pageLink = project.pageLink;
        const gitLink = project.gitLink;
        return (
            <>
                <div className="card imgdiv1 justify-content-center flex-row d-inline-block">
                    <div>
                        {title}
                        <img className='portimg h-25 w-25' src={project.img}></img>
                    </div>
                    <section className="content">
                        {desc}
                        {pageLink}
                        {gitLink}
                    </section>
                </div>
            </>
        );
    };
    
    //run renderProjectPiece on all projects in the array, then stick those onto the projectmount on the project page.
    
    function renderProjectsModule(projectArray) {
        const module = []
        for (let i = 0; i < projectArray.length; i++) {
            const newCard = renderProjectPiece(projectArray[i]);
            module.push(newCard);
        }
        return module;
    };
    ////////////////////////////////////////
    return (
        renderProjectsModule(projectArray)

        // / Old hardcoded portfolio images and captions //////
        // <div className="d-flex justify-content-center flex-column">
        //     <div className="imgdiv1 justify-content-center flex-row d-inline-block">
        //         <span >
        //             <h2>Example 1</h2>
        //             <img className='portimg h-25 w-25' src='./src/assets/img/jake2.jpg'></img>
        //         </span>
        //         <span>

        //             <h2>Example 2</h2>

        //             <img className='portimg h-25 w-25' src='./src/assets/img/theo3.png'></img>
        //         </span>
        //         <span>

        //             <h2>Example 3</h2>
        //             <img className='portimg h-25 w-25' src='./src/assets/img/jake2.jpg'></img>
        //         </span>
        //     </div>
        //     <div className="imgdiv1 align-content-center flex-row d-inline-block">
        //         <span>
        //             <h2>Example 4</h2>
        //             <img className='portimg h-25 w-25' src='./src/assets/img/theo3.png'></img>
        //         </span>
        //         <span>

        //             <h2>Example 5</h2>
        //             <img className='portimg h-25 w-25' src='./src/assets/img/jake2.jpg'></img>
        //         </span>
        //         <span>

        //             <h2>Example 6</h2>
        //             <img className='portimg h-25 w-25' src='./src/assets/img/theo3.png'></img>
        //         </span>
        //     </div>
        // </div>

    )
}