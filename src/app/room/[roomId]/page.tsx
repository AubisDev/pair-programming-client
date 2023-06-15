'use client'
import Editor, {DiffEditor, useMonaco, loader} from '@monaco-editor/react'
import {useState} from 'react'
import {Resizable} from 're-resizable'
import CodeEditor from './components/CodeEditor'
import ResizableContainer from './components/ResizableContainer'
import Whiteboard from './components/Whiteboard'
import TextSection from './components/TextSection'

const Room = () => {
  return (
    <div className="flex flex-row h-screen">
      <ResizableContainer>
        <CodeEditor />
      </ResizableContainer>
      <div className="flex flex-col  h-full min-w-[400px] w-auto">
        {/* <Whiteboard /> */}
        <TextSection />
        <div className="h-1/2">chatWTe</div>d
      </div>
    </div>
  )
}
export default Room
