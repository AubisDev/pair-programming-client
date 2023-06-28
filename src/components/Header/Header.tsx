export const Header = () => {
  return (
    <>
      <h1 className="text-5xl font-bold text-gray-100">
        Welcome to{' '}
        <span className="text-purple-600 drop-shadow-title">
          Pair Programming
        </span>
      </h1>
      <h4 className="w-4/5 pt-4 text-lg font-semibold text-center ">
        Necesitas ayuda para resolver algoritmos? Invita a un companero para
        resolverlos mas rapido.
      </h4>
      <h4 className="w-4/5 pb-8 text-lg font-semibold text-center">
        Crea una sala, mandale invitacion y a resolver!
      </h4>
    </>
  )
}
export default Header
