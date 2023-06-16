const Label = ({inputLabel}: {inputLabel: string}) => {
  return (
    <label className="w-2/5 label">
      <span className="text-white label-text">{inputLabel} : </span>
    </label>
  )
}
export default Label
