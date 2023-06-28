import {
  EditorContext,
  EditorConfigContextType,
} from '@/app/room/[roomId]/context/editorContext'
import {useContext} from 'react'
import {Theme} from '@/app/room/[roomId]/components/CodeEditor/model'

const ThemeMenu = () => {
  const {theme, monacoThemes, handleThemeChange} = useContext(
    EditorContext,
  ) as EditorConfigContextType

  return (
    <>
      <summary className="py-2 text-sm w-[291px] text-white">
        Themes{'  '}
        <span className="ml-1 text-xs text-gray-300/60">
          ({theme as string})
        </span>
      </summary>
      <ul className="h-[200px] overflow-y-scroll border-l border-gray-300/30 ml-1">
        {Object.values(monacoThemes).map((themeOption: any, index) => (
          <li
            key={themeOption}
            onClick={() =>
              handleThemeChange(
                Object.keys(monacoThemes)[index] as Theme<string> & string,
              )
            }
          >
            <a>{themeOption}</a>
          </li>
        ))}
      </ul>
    </>
  )
}
export default ThemeMenu
