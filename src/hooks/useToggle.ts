import {useState} from 'react'

export const useToggle = (initialState: boolean = false) => {
  const [on, toggle] = useState(initialState)

  const toggleState = () => toggle(!on)

  return {
    toggleState,
    on,
  }
}
