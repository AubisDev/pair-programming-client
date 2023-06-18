'use client'
import EditorLoader from '../EditorLoader'
import {Dispatch, SetStateAction, useContext, useState} from 'react'
import {socket} from '@/app/utils/socket'
import {useParams} from 'next/navigation'
import MenuOption from './components/MenuOptions/MenuOption'
import EditorConfigProvider, {
  EditorConfigContextType,
  EditorContext,
} from './context/editorContext'
import EditorComponent from './EditorComponent'

interface Props {
  content: string | undefined
  editorContent: string | undefined
  setEditorContent: Dispatch<SetStateAction<string | undefined>>
  onSaveClick: () => void
}

const CodeEditor = ({
  editorContent,
  setEditorContent,
  onSaveClick,
  content,
}: Props) => {
  const params = useParams()

  const handleChange = (e: string | undefined) => {
    setEditorContent(e)
  }
  return (
    <EditorConfigProvider>
      <MenuOption />
      <EditorComponent handleChange={handleChange} content={content} />
    </EditorConfigProvider>
  )
}
export default CodeEditor
