import { Cursor } from './core/cursor/Cursor'
import { Map } from './core/map/Map'
import { Screen } from './screen/Screen'

const map = new Map({
  size: [4, 3],
  element: {
    styles: {
      gap: '8px'
    }
  }
})

Screen.renderMap(map)

const cursor = new Cursor(map)

map.renderCursor(cursor)
