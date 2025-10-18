import type { Map } from '@/core/map/Map'

export class Screen {
  static $screen: HTMLElement | null = document.querySelector('#screen')
  
  static renderMap (map: Map) {
    const { $screen } = this
    const { $map } = map

    console.log({ $screen, $map })
    
    if ($screen && $map) {
      $screen?.append($map)
    }
  }
}
