import {Resizable} from 're-resizable'
import {PropsWithChildren} from 'react'

const ResizableContainer = ({children}: PropsWithChildren) => {
  return (
    <Resizable
      minWidth="600px"
      defaultSize={{
        height: '100vh',
        width: '50vw',
      }}
      minHeight="100vh"
      maxWidth={1000}
    >
      {children}
    </Resizable>
  )
}
export default ResizableContainer
