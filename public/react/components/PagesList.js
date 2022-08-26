//  import React from 'react';
//  import { Page } from './Page';

// export const PagesList = ({pages}) => {
//  	return <>
//  		{
//  			pages.map((page, idx) => {
// 				return <Page page={page} key={idx} />
// 			})
// 		}
// 	</>
//  } 

 import React from 'react';
 import { tags, pages } from '../../../server/seedData';
  //import { pages, tags } from './Page';


// this allows us to view the page of article titles through making the setIsPageView true and also passing the page into setPageView
 export const PagesList = ({pages, setIsPageView, setPageView}) => {
     const clickHandler = (page) => {
         setIsPageView(true)
         setPageView(page)
     }
// the .map() method iterates through the array of articles and assigns them a key in which they can be used later on.
   return <>
        {
            pages.map((page, idx) => {
                 return <h3 key={idx} onClick={() => clickHandler(page)}>{page.title}</h3>
             })
         }
            
    </>
 } 