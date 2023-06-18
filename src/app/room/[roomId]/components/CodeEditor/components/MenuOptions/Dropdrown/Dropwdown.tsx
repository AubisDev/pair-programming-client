import Option from './Option/Option'

interface Props {
  label: string
  options: string[]
}

const Dropwdown = ({label, options}: Props) => {
  return (
    <details className="dropdown mb-32 z-[100]  ">
      <summary className="m-1 btn bg-purple-900 text-white btn-sm capitalize  border border-white/30 outine-none hover:bg-purple-800 hover:outline-none">
        {label}
      </summary>
      <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
        {options.map(option => (
          <Option key={option} option={option} />
        ))}
      </ul>
    </details>
  )
}
export default Dropwdown
