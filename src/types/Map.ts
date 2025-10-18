import type { Styles } from '../env'

export type MapConfig = {
  size?: [number, number]
  element?: Partial<MapElement>
}

export type MapElement = {
  styles: Partial<Styles>
}
