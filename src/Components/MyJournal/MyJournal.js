import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import './MyJournal.scss';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import currentDate from '../../App';

export default function MyJournal() {

  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [rawMessage, setRawMessage] = useState('')
  const dispatch = useDispatch()
  const state = useSelector(state => state.journal)

  const handleSubmit = (rawMessage) => { 
    dispatch({
      type:'NEW_ENTRY',
      payload:{key:currentDate, entry:rawMessage}
    })
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
          {state.entries.map(item => (
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
