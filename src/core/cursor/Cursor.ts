import type { Point, Styles } from '../../env'
import { Screen } from '../../screen/Screen'
import type { CursorController, CursorElement } from '../../types/Cursor'
import type { Box } from '../box/Box'
import type { Map } from '../map/Map'

export class Cursor {
  $cursor: HTMLElement | null = null
  map: Map | null = null
  box: Box | null = null
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

  moveUp = (map: Map) => {
    const { position } = this
    position.y--
    
    const newBox = map.findBox(position, this)
    if (!newBox) {
      position.y++
      return
    }
    
    this.setCursorStyles(newBox)
  }

  moveLeft = (map: Map) => {
    const { position } = this
    position.x--
    
    const newBox = map.findBox(position, this)
    if (!newBox) {
      position.x++
      return
    }
    
    this.setCursorStyles(newBox)
  }

  moveDown = (map: Map) => {
    const { position } = this
    position.y++
    
    const newBox = map.findBox(position, this)
    if (!newBox) {
      position.y--
      return
    }
    
    this.setCursorStyles(newBox)
  }

  moveRight = (map: Map) => {
    const { position } = this
    position.x++
    
    const newBox = map.findBox(position, this)
    if (!newBox) {
      position.x--
      return
    }
    
    this.setCursorStyles(newBox)
  }
  
  controller: CursorController = {
    validKeys: ['w', 'a', 's', 'd'],
    actions: {
      w: this.moveUp,
      a: this.moveLeft,
      s: this.moveDown,
      d: this.moveRight
    }
  }

  constructor (map: Map) {
    let $cursor = document.querySelector('#cursor') as HTMLElement

    if (!($cursor instanceof HTMLElement)) {
      $cursor = document.createElement('div')
      $cursor.id = 'cursor'
    }

    this.$cursor = $cursor
    this.map = map
    
    const box = map.findBox(this.position, this)
    if (box)
      this.setCursorStyles(box)
  }

  setCursorStyles (box: Box) {    
    const { $box, element: { styles: boxStyles } } = box
    const { $screen } = Screen
    if (!$box || !boxStyles || !$screen) return

    // const { width, height, x, y } = boxStyles
    const boxRect = $box.getBoundingClientRect()

    const height = boxStyles?.size?.height || `${boxRect.height}px`
    const width = boxStyles?.size?.width || `${boxRect.width}px`
    const x: number = boxRect.left
    const y: number = boxRect.top

    this.element.styles.position = { x: `${x}px`, y: `${y}px` }
    this.element.styles.size = { width, height }
    this.element.styles.rounded = boxStyles.rounded
    
    const { $cursor, element: { styles } } = this

    if (!$cursor || !styles) return

    $cursor.style.width = styles.size?.width || $cursor.style.width
    $cursor.style.height = styles.size?.height || $cursor.style.height
    $cursor.style.left = styles.position?.x || $cursor.style.left
    $cursor.style.top = styles.position?.y || $cursor.style.top
    $cursor.style.borderRadius = styles.rounded || $cursor.style.borderRadius
  }
}
