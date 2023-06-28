export const Button = ({action, text}: {action: any; text: string}) => {
  const btnStyle =
    'px-4 py-2 font-bold duration-300 border-2 border-purple-700 rounded-md bg-black/50 hover:bg-purple-900 hover:border-white/50 min-w-[90px] '
  return (
    <>
      <button onClick={() => action()} className={btnStyle}>
        {text}
      </button>
    </>
  )
}
export default Button
