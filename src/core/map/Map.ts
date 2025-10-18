import type { Point, Size } from '@/env'
import type { Cursor } from '../cursor/Cursor'
import type { MapConfig, MapElement } from '@/types/Map'
import { type Box } from '../box/Box'
import { TestBox } from '../box/TextBox'

export class Map {
  size: Size = { width: 4, height: 4 }
  structure: (Box | TestBox)[][] = []
  $map: HTMLElement | null = null
  element: MapElement = {
    styles: {
      gap: '8px'
    }
  }
  
  constructor (config: MapConfig) {
    if (config.size) {
      const [width, height] = config.size
      this.size.width = width
      this.size.height = height
    }

    let $map = document.querySelector('#map') as HTMLElement

    if (!($map instanceof HTMLElement)) {
      $map = document.createElement('div')
      $map.id = 'map'
    }

    this.$map = $map

    this.setMapStyles()

    this.createBoxes()
    this.renderBoxes()
  }

  private createBoxes () {
    const { size: { height, width } } = this

    const structure: (Box | TestBox)[][] = []    

    for (let y = 0; y < height; y++) {
      const row: (Box | TestBox)[] = []

      for (let x = 0; x < width; x++) {
        const box = new TestBox({ $parent: null, position: { x, y }, type: 'test-box', content: `x:${x} y:${y}` })
        row.push(box)
      }
      
      structure.push(row)
    }

    this.structure = structure
  }

  private renderBoxes () {
    const { structure, $map } = this

    for (const row of structure) {
      const $row = Map.createRowElement(this)

      for (const box of row) {
        const { $box } = box
        if (box instanceof TestBox) {
          $box.textContent = box.content ?? null
        }
        $row.append($box)
      }

      $map?.append($row)
    }
  }

  private setMapStyles () {
    const { $map, element: { styles } } = this
    if (!$map || !styles) return

    const map_styles_gap = Map.getMapStyles('gap', this) || '0px'

    let rowGap = '0px'
    
    if (Array.isArray(map_styles_gap))
      [rowGap] = map_styles_gap
    else if (typeof map_styles_gap === 'string')
      rowGap = map_styles_gap

    $map.style.rowGap = rowGap
  }

  static createRowElement (map: Map) {
    const row = document.createElement('div') as HTMLElement
    row.classList.add('row')

    const map_styles_gap = this.getMapStyles('gap', map) || '0px'

    let columnGap = '0px'

    if (Array.isArray(map_styles_gap))
      [, columnGap] = map_styles_gap
    else if (typeof map_styles_gap === 'string')
      columnGap = map_styles_gap

    row.style.columnGap = columnGap

    return row
  }

  static getMapStyles (mapStyle: string, map: Map) {
    const styles = map.element.styles
    if (!styles) return

    const style = styles[mapStyle as keyof typeof styles]
    return style
  }

  findBox (position: Point) {
    const { $map, structure } = this
    if (!$map) return

    const box = structure[position.y][position.x]
    // const $box = $map.children[position.y].children[position.x]
    // const 
    // return box
    return box
  }

  renderCursor (cursor: Cursor) {
    const { $map } = this
    const { $cursor } = cursor

    console.log($map, $cursor)

    if (!$map || !$cursor) return

    $map.prepend($cursor)
  }
}
