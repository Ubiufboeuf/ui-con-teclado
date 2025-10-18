import type { Map } from '../core/map/Map'
import type { KeyboardKey, Styles } from '../env'

export type CursorElement = {
  styles: Partial<Styles>
}

export type CursorController = {
  validKeys: KeyboardKey[]
  actions: Partial<Record<KeyboardKey, (map: Map) => void>>
}
