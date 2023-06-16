import {Dispatch, SetStateAction} from 'react'

interface Props {
  label: string
  value: any
  modifier: Dispatch<SetStateAction<any>>
}

const Input = ({label, value, modifier}: Props) => {
  return (
    <input
      type="text"
      placeholder={`Type your ${label} here`}
      className="w-full max-w-xs text-white input input-bordered input-md bg-[#35343c] p-3"
      onChange={e => modifier(e.target.value)}
      value={value}
    />
  )
}
export default Input
