import type { Point } from '@/env'
import type { BoxConfig, BoxElement } from '@/types/Box'

export class Box {
  $box: HTMLElement = document.createElement('div')
  $parent: HTMLElement | null = null
  element: BoxElement = {
    styles: {
      gap: '0px',
      position: { x: '48px', y: '48px' },
      rounded: '8px',
      size: { height: '48px', width: '48px' }
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

    const { styles } = this.element
    if (styles) {      
      $box.style.height = styles.size?.height || $box.style.height
      $box.style.width = styles.size?.width || $box.style.width
      $box.style.borderRadius = styles.rounded || $box.style.borderRadius
    }
  }
}
