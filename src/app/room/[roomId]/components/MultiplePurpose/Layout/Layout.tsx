import {PropsWithChildren} from 'react'

const Layout = ({children}: PropsWithChildren) => {
  return (
    <section className=" rounded-md border-gray-300/20 bg-gradient-to-tr from-blue-800 to-purple-800 h-1/2">
      <main className="w-full h-full bg-gray-700 min-h-[200px] max-h-full border-2 border-gray-300/20 rounded-md p-2 text-gray-200 focus:outline-none">
        {children}
      </main>
    </section>
  )
}
export default Layout
