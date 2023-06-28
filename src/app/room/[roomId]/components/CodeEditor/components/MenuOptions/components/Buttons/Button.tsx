import PlayIcon from '../svg/PlayIcon'
import ShareIcon from '../svg/ShareIcon'

interface Props {
  label: string
  action: () => void
}

export const Button = ({label, action}: Props) => {
  return (
    <button
      className="flex flex-row items-center justify-center p-2 text-white capitalize duration-200 border rounded-lg btn-sm hover:bg-white/10 border-white/20"
      onClick={() => action()}
    >
      {label}
      <span className="">{label === 'Run' ? <PlayIcon /> : <ShareIcon />}</span>
    </button>
  )
}
export default Button
