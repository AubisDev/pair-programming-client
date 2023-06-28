import {loader} from '@monaco-editor/react'
import {monacoThemes} from '../utils'

const defineTheme = (theme: string) => {
  return new Promise(res => {
    Promise.all([
      loader.init(),
      import(
        `../../../../../../../node_modules/monaco-themes/themes/${monacoThemes[theme]}.json`
      ),
    ]).then(([monaco, themeData]) => {
      monaco.editor.defineTheme(theme, themeData)
      res(0)
    })
  })
}

export {defineTheme}
