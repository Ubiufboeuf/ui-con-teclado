import { Cursor } from './cursor'
import { Map } from './map'

const map = new Map({
  size: [4, 3],
  styles: {
    // gap: ['80px', '120px']
    gap: '8px'
  }
})

const cursor = new Cursor()

map.renderCursor(cursor)
