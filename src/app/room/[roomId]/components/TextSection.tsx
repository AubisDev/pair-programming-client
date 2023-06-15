const TextSection = () => {
  return (
    <div className="p-2 border-2 rounded-md border-gray-300/20 bg-gradient-to-tr from-blue-800 to-purple-800 h-1/2">
      <textarea
        defaultValue="Write any exercise, tip, cases or anything you need in here. The main idea of the code which must be in here always on sight"
        className="w-full h-full bg-gray-700 min-h-[200px] max-h-[50vh] border-2 border-gray-300/20 rounded-md p-2 text-gray-200 focus:outline-none "
      ></textarea>
    </div>
  )
}
export default TextSection
