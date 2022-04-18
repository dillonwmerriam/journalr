import { useState, useEffect } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import './MyJournal.scss';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import currentDate from '../../App';

export default function MyJournal() {

  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [rawMessage, setRawMessage] = useState('')
  const [entries, setEntries] = useState([])
  var selectedDay = new Date().toLocaleDateString('en-us', { month:"numeric", day:"numeric", year:"numeric" }) 


  useEffect(() => {
    async function getEntries() {
      const response = await fetch(`http://localhost:5000/entries/`);
  
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const entries = await response.json();
      JSON.stringify(entries);
      setEntries(entries);
      
    }
  
    getEntries();
  
    return;
  }, [entries.length]);

  const handleSubmit = (rawMessage) => { 
    console.log(rawMessage)
  }

  const onEditorStateChange = editorState => {
    setEditorState(editorState)
    setRawMessage(
      draftToHtml(
        convertToRaw(editorState.getCurrentContent() )
        )
      )
  }

  return (
    <div>
      <div className='myjournal_wrapper'>
        <div className='title'>
          <h1>My Journal</h1>
        </div>
        <div className='journal'>
          <Editor
            editorState={editorState}
            toolbarClassName="rich-editor"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onEditorStateChange}
            placeholder='New Entry'
          />
        </div>
        <div className='postButton'>
        <button
          onClick = {() => handleSubmit(rawMessage)}
        >submit</button>
        </div>

        <div className='journalEntryList'>
          {entries.filter(e=> e.date === selectedDay).map(item => (
            <div className='entries'>
              <div dangerouslySetInnerHTML={{__html:item.entry}}></div>
            </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}
