import {useState} from 'react'
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import './MyJournal.scss'
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

export default function MyJournal() {

  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const onEditorStateChange = editorState => {
    setEditorState(editorState)
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
        <button>submit</button>
      </div>
    </div>
  )
}
