import LanguageMenu from './LanguageMenu/LanguageMenu'
import ThemeMenu from './ThemeMenu/ThemeMenu'

export const Menus = () => {
  return (
    <ul className="absolute right-0 z-50 text-sm border rounded-md min-w-56 menu bg-blue-950 border-gray-300/20">
      <details open={false}>
        <LanguageMenu />
      </details>
      <details open={false}>
        <ThemeMenu />
      </details>
    </ul>
  )
}
export default Menus
