import {PropsWithChildren} from 'react'

export const Layout = ({children}: PropsWithChildren) => {
  return (
    <section className="rounded-md border-gray-300/20 h-1/2">
      <main className="w-full h-full bg-gradient-to-tr from-blue-800/50 to-purple-800/50 min-h-[200px] max-h-full border border-gray-300/20 rounded-md  text-gray-200 focus:outline-none p-2">
        {children}
      </main>
    </section>
  )
}
export default Layout
