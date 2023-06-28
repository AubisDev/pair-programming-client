import {
  EditorContext,
  EditorConfigContextType,
} from '@/app/room/[roomId]/context/editorContext'
import {Theme} from '@/app/room/[roomId]/components/CodeEditor/lib/defineTheme'
import {useContext} from 'react'

const ThemeMenu = () => {
  const {monacoThemes, theme, handleThemeChange} = useContext(
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
        {Object.values(monacoThemes).map((themeOption, i) => (
          <li
            key={themeOption}
            onClick={() =>
              handleThemeChange(
                Object.keys(monacoThemes)[i] as Theme<string> & string,
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
