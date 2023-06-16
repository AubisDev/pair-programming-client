import {socket} from '@/app/utils/socket'
import {ChangeEvent, useState} from 'react'

const TextSection = () => {
  const [text, setText] = useState('')
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
    socket.emit('textarea', text)
  }

  socket.on('textarea', text => {
    setText(text)
  })

  return (
    <div className="p-2 border-2 rounded-md border-gray-300/20 bg-gradient-to-tr from-blue-800 to-purple-800 h-1/2">
      <textarea
        onChange={event => handleChange(event)}
        defaultValue="Write any exercise, tip, cases or anything you need in here. The main idea of the code which must be in here always on sight"
        className="w-full h-full bg-gray-700 min-h-[200px] max-h-[50vh] border-2 border-gray-300/20 rounded-md p-2 text-gray-200 focus:outline-none "
      ></textarea>
    </div>
  )
}
export default TextSection
