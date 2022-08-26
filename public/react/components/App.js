// import React, { useState, useEffect } from 'react';
// import { PagesList,  } from './PagesList';
// import { Page } from './Page';

// // import and prepend the api url to any fetch calls
// import apiURL from '../api';

// export const App = () => {

// 	const [pages, setPages] = useState([]);

// 	async function fetchPages(){
// 		try {
// 			const response = await fetch(`${apiURL}/wiki`);
// 			const pagesData = await response.json();
// 			setPages(pagesData);
// 		} catch (err) {
// 			console.log("Oh no an error! ", err)
// 		}
// 	}

// 	useEffect(() => {
// 		fetchPages();
// 	}, []);

// 	return (
// 		<main>	
//       <h1>WikiVerse</h1>
// 			<h2>An interesting 📚</h2>
// 			<PagesList pages={pages} />
// 		</main>
// 	)
// }

import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import { Page } from './Page';
import { Form } from './form'

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {
	// this is where we are creating our states 

    const [pagesCollection, setPagesCollection] = useState([]);
    const [isPageView, setIsPageView] = useState(false)
    const [pageView, setPageView] = useState({})
	const [form, setForm] = useState('')
    
/*This function fetches the api Url from the api.js file and converts the responsew to a Json format and inserts the data into one page. */
    async function fetchPages(){
        try {
            const response = await fetch(`${apiURL}/wiki`);
            const pagesData = await response.json();
            setPagesCollection(pagesData);
            setAuthorsList()
            console.log(pagesData)
        } catch (err) {
            console.log("Oh no an error! ", err)
        }
    }
// it loads up one component within the page rather than the whole page
    useEffect(() => {
        fetchPages();
    }, []);

	/* this is where we can actually view our page, its a ternary that gets the page and setIsPageView from Page.js and if the ternary is false, then the function pagelist for pagelist.js runs and the setIsPageView becomes true which means that page is passed throug and shows the page where all the other article tiles are stores*/
    return (
        <main>    
			
      <h1>WikiVerse</h1>
	  
            {
                isPageView
                  ? <Page page={pageView} setIsPageView = {setIsPageView}/>
                  : [<h2 key={0} >An Interesting Title</h2>, 
                  <PagesList key={1} setPageView={setPageView} setIsPageView={setIsPageView} pages={pagesCollection} />]
            }



             
            
            
        </main>
    )
}