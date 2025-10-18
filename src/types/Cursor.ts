import type { Map } from '../core/map/Map'
import type { KeyboardKey, Styles } from '../env'

export type CursorElement = {
  styles: Partial<Styles>
  animations: Partial<Animations>
}

export type Animations = {
  tryMoveUp: () => void
  tryMoveLeft: () => void
  tryMoveDown: () => void
  tryMoveRight: () => void
}

export type CursorController = {
  validKeys: KeyboardKey[]
  actions: Partial<Record<KeyboardKey, (map: Map) => void>>
}
