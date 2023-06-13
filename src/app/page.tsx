import Background from '@/components/svg/background'

export const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen min-h-screen overflow-hidden text-gray-200 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <div className="relative flex flex-col items-center justify-center w-full h-full bg-black/40">
        <h1 className="text-5xl font-bold text-gray-100">
          Welcome to <span className="text-purple-700">Pair Programming</span>
        </h1>
        <h4 className="w-4/5 pt-4 text-lg font-semibold text-center ">
          Necesitas ayuda para resolver algoritmos? Invita a un companero para
          resolverlos mas rapido.
        </h4>
        <h4 className="w-4/5 pb-8 text-lg font-semibold text-center">
          Crea una sala, mandale invitacion y a resolver!
        </h4>
        <div className="flex flex-row">
          <button className="px-4 py-2 mr-3 font-bold border-2 border-purple-700 rounded-md bg-black/50">
            Create Room
          </button>
          <button className="px-4 py-2 font-bold border-2 border-purple-700 rounded-md bg-black/50">
            Log In
          </button>
          <Background />
        </div>
      </div>
    </main>
  )
}

export default Home
