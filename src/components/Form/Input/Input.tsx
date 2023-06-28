import {Dispatch, SetStateAction} from 'react'

interface Props {
  label: string
  value: any
  modifier: Dispatch<SetStateAction<any>>
}

export const Input = ({label, value, modifier}: Props) => {
  return (
    <input
      type="text"
      placeholder={`Type your ${label} here`}
      className="w-full max-w-xs p-3 text-white bg-[#20013b] input input-bordered input-md border-white/20 hover:outline-purple-500/80"
      onChange={e => modifier(e.target.value)}
      value={value}
    />
  )
}
export default Input
