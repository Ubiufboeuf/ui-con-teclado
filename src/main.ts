import { Cursor } from './core/cursor/Cursor'
import { handleKeyDown } from './core/handlers/keyDown'
import { handleResizeWindow } from './core/handlers/resizeWindow'
import { Map } from './core/map/Map'
import { Screen } from './screen/Screen'

const map = new Map({
  // size: [4, 3],
  structure: [
    ['x:🥐 y:99', 'x'],
    [''],
    [],
    ['2']
  ],
  element: {
    styles: {
      gap: '8px'
    }
  }
})

Screen.renderMap(map)

const cursor = new Cursor(map)

Screen.renderCursor(cursor)

window.addEventListener('keydown', handleKeyDown(cursor, map))
window.addEventListener('resize', handleResizeWindow(cursor))
