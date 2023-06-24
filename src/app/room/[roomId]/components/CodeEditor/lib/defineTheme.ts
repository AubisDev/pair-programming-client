import {loader} from '@monaco-editor/react'

export type Theme<T> = {
  [key: string]: T
}

export const monacoThemes: Theme<string> = {
  active4d: 'Active4D',
  allHallowsEve: 'All Hallows Eve',
  amy: 'Amy',
  birdsOfParadise: 'Birds of Paradise',
  blackboard: 'Blackboard',
  brillianceBlack: 'Brilliance Black',
  brillianceDull: 'Brilliance Dull',
  chromeDevtools: 'Chrome DevTools',
  cloudsMidnight: 'Clouds Midnight',
  clouds: 'Clouds',
  cobalt: 'Cobalt',
  dawn: 'Dawn',
  dreamweaver: 'Dreamweaver',
  eiffel: 'Eiffel',
  espressoLibre: 'Espresso Libre',
  github: 'GitHub',
  idle: 'IDLE',
  katzenmilch: 'Katzenmilch',
  kuroirTheme: 'Kuroir Theme',
  lazy: 'LAZY',
  magicwbAmiga: 'MagicWB (Amiga)',
  merbivoreSoft: 'Merbivore Soft',
  merbivore: 'Merbivore',
  monokaiBright: 'Monokai Bright',
  monokai: 'Monokai',
  nightOwl: 'Night Owl',
  oceanicNext: 'Oceanic Next',
  pastelsOnDark: 'Pastels on Dark',
  slushAndPoppies: 'Slush and Poppies',
  solarizedDark: 'Solarized-dark',
  solarizedLight: 'Solarized-light',
  spacecadet: 'SpaceCadet',
  sunburst: 'Sunburst',
  textmateMacClassic: 'Textmate (Mac Classic)',
  tomorrowNightBlue: 'Tomorrow-Night-Blue',
  tomorrowMightBright: 'Tomorrow-Night-Bright',
  tomorrowNightEighties: 'Tomorrow-Night-Eighties',
  tomorrowNight: 'Tomorrow-Night',
  tomorrow: 'Tomorrow',
  twilight: 'Twilight',
  upstreamSunburst: 'Upstream Sunburst',
  vibrantInk: 'Vibrant Ink',
  xcodeDefault: 'Xcode_default',
  zenburnesque: 'Zenburnesque',
  iplastic: 'iPlastic',
  idlefingers: 'idleFingers',
  krtheme: 'krTheme',
  monoindustrial: 'monoindustrial',
}

const defineTheme = (theme: string) => {
  console.log(theme)
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
