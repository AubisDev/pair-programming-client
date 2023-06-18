interface Props {
  option: string
  key: string
}

const Option = ({option, key}: Props) => {
  return (
    <li key={key} className="">
      {option}
    </li>
  )
}
export default Option
