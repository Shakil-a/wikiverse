// 
import React from 'react';
import {pages, users, tags} from '../../../server/seedData'
import {fetchPages} from '../components/App'
import apiURL from '../api' 

export const Page = ({page, setIsPageView}) => {
//   const [page, setPage] = useState(' ')
//   const handleClick = async () => {
//     const res = await fetch(`${apiURL}/wiki`)
//     const data = await res.json()
//     setPage(data)
// }
/* this is where we are passing in the information from the page.js and the two parameters page and setIsPageView is being used,
the onClick changes the default of setIsPageView from true to false so that we can return to the page of titles once we click the button*/
  return <>
    <h3>{page.title}</h3>
    <h4>Author: {page.authorId}</h4>
    <h4>Published: {page.status}</h4>  
    <p>{page.content}</p>
    <h4>Tags: {page.tags}</h4>
    <button onClick={() => setIsPageView(false)}  > Back to Wikiverse</button>  
  </> 
}