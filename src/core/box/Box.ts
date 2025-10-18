import type { Point } from '@/env'
import type { BoxConfig, BoxElement } from '@/types/Box'

export class Box {
  $box: HTMLElement = document.createElement('div')
  $parent: HTMLElement | null = null
  element: BoxElement = {
    styles: {
      gap: '0px',
      position: { x: '0px', y: '0px' },
      rounded: '0px',
      size: { height: '0px', width: '0px' }
    }
  }
  content?: string = ''
  position: Point = { x: 1, y: 1 }

  constructor (config: BoxConfig) {
    const { $box } = this
    $box.classList.add('box')

    this.$box = $box
    this.$parent = config.$parent
    this.position = config.position
    this.content = config.content
  }
}
