import type { KeyboardKey, Point, Styles } from '@/env'
import type { CursorElement } from '@/types/Cursor'
import type { Box } from '../box/Box'
import type { Map } from '../map/Map'

export class Cursor {
  $cursor: HTMLElement | null = null
  size: Point = { x: 1, y: 1 }
  position: Point = { x: 0, y: 0 }
  last_saved_position: Point = { x: 0, y: 0 }
  element: CursorElement = {
    styles: {
      position: { x: '0px', y: '0px' },
      rounded: '0px',
      size: { height: '40px', width: '40px' }
    }
  }
  styles?: Styles
  controller: {
    validKeys: KeyboardKey[]
    actions: Partial<Record<KeyboardKey, () => void>>
  } = {
    validKeys: ['w', 'a', 's', 'd'],
    actions: {
      w: () => {},
      a: () => {},
      s: () => {},
      d: () => {}
    }
  }

  constructor (map: Map) {
    let $cursor = document.querySelector('#cursor') as HTMLElement

    if (!($cursor instanceof HTMLElement)) {
      $cursor = document.createElement('div')
      $cursor.id = 'cursor'
    }

    this.$cursor = $cursor
    
    const box = map.findBox(this.position)
    if (box)
      this.setCursorStyles(box)
  }

  setCursorStyles (box: Box) {
    const { $box, element: { styles: boxStyles } } = box
    if (!$box || !boxStyles) return

    const { width, height, x, y } = $box.getBoundingClientRect()

    this.element.styles.position = { x: `${x}px`, y: `${y}px` }
    this.element.styles.size = { width: `${width}px`, height: `${height}px` }
    this.element.styles.rounded = boxStyles.rounded
    
    const { $cursor, element: { styles } } = this
    if (!$cursor || !styles) return
    
    $cursor.style.width = `${styles.size?.width}px`
    $cursor.style.height = `${styles.size?.height}px`
    $cursor.style.borderRadius = `${styles.rounded}px`
  }
}
