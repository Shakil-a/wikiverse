import React, {useState} from 'react';

export const AddForm = () => {

    function AddForm() {
        const [title, setTitle] = useState('')
        const [articleContent, setArticleContent] = useState('')
        const [authorName, setAuthorName] = useState('')
        const [authorEmail, setAuthorEmail] = useState('')
        const [tags, setTags] = useState('')
 
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h1>wikiPedia</h1>
        <p>Please fill out this form</p>
        <label></label>
        <input type='test' placeholder='Title' value= {title} onChange={e => setTitle(e.target.value)}/>
        <input type='test' placeholder='Article Content' value={articleContent} onChange={e => setArticleContent(e.target.value)}/>
        <input type='test' placeholder='Author Name' value={authorName} onChange={e => setAuthorName(e.target.value)}/>
        <input type='test' placeholder='Author Email' value={authorEmail} onChange={e => setAuthorEmail(e.target.value)}/>
        <input type='test' placeholder='Tags' value={tags} onChange={e => setTags(e.target.value)}/>
        <br></br>

        
        <label>
          I agree that this information is correct
          <input type='checkbox' value= {tickedCheckbox} onChange ={e => setTickedCheckbox(true)}/><br></br>
        </label>
  
        <div className='radioGroup'>
          <label>
            I would like to receive email updates
            <input type='radio'/>
          </label>
          <label>
            I would not like to receive emails
            <input type='radio'/>
          </label>
        </div>
  
        <button type='submit'>Submit</button>
      </form>
    </main>
    );
  }
}
