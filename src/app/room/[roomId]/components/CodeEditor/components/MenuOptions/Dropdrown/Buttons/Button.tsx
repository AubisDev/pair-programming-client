interface Props {
  label: string
  action: () => void
}

const Button = ({label, action}: Props) => {
  return (
    <button
      className="btn btn-sm bg-purple-900 text-white capitalize mt-1 outline-nones border-white/30 hover:bg-purple-800 "
      onClick={action}
    >
      {label}
    </button>
  )
}
export default Button
