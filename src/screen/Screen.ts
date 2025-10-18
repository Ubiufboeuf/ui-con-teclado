import type { Cursor } from '../core/cursor/Cursor'
import type { Map } from '../core/map/Map'
import type { CSSUnit, Styles } from '../env'

export class Screen {
  static $screen: HTMLElement | null = document.querySelector('#screen')
  static styles: Partial<Styles> = {
    padding: '8px'
  }
  
  static renderMap (map: Map) {
    const { $screen } = this
    const { $map } = map

    if ($screen && $map) {
      $screen?.append($map)
    }

    this.refreshScreenStyles()
  }

  static renderCursor (cursor: Cursor) {
    const { $cursor } = cursor
    if ($cursor)
      this.$screen?.prepend($cursor)

    this.refreshScreenStyles()
  }

  static refreshScreenStyles () {
    const { $screen, styles } = this
    if (!$screen || !styles) return

    $screen.style.padding = styles.padding || $screen.style.padding

    this.styles.padding = $screen.style.padding as CSSUnit
  }
}
