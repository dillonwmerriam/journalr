import {useState} from 'react'
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import './MyJournal.scss'
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

export default function MyJournal() {

  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [rawMessage, setRawMessage] = useState('')
  const [entries, setEntries] = useState([])

  const handleSubmit = (rawMessage) => { 
    return(
      setEntries([...entries, rawMessage])
    )
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
      </div>
      
      <div className='postButton'>
        <button
          onClick = {() => handleSubmit(rawMessage)}
        >submit</button>
      </div>

      <div className='journalEntryList'>
        {entries.map(entry => (
          <div className='entries'>
            <div dangerouslySetInnerHTML={{__html:entry}}></div>
          </div>
        ) )}

      </div>
    </div>
  )
}
