'use client'
import Editor, {DiffEditor, useMonaco, loader} from '@monaco-editor/react'
import {useState} from 'react'
import EditorLoader from './components/EditorLoader'

const Room = () => {
  //   const [editorState, setEditorState] = useState({
  //     text: '',
  //   })

  return (
    <div>
      <Editor
        height="100vh"
        width="50vw"
        defaultLanguage="javascript"
        defaultValue="// Your code here"
        theme="vs-dark"
        loading={<EditorLoader />}
      />
    </div>
  )
}
export default Room
