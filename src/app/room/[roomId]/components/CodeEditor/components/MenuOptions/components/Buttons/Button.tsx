interface Props {
  label: string
  action: () => void
}

const Button = ({label, action}: Props) => {
  return (
    <button
      className="mr-2 text-white capitalize bg-purple-900 btn btn-sm outline-nones border-white/30 hover:bg-purple-800 "
      onClick={action}
    >
      {label}
    </button>
  )
}
export default Button
