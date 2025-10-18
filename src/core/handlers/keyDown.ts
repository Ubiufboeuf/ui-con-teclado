import type { Cursor } from '../cursor/Cursor'
import { isValidKeyForControllerAction } from '../lib/validations'
import type { Map } from '../map/Map'

export function handleKeyDown (cursor: Cursor, map: Map) {
  return function event (event: KeyboardEvent) {
    const { altKey, ctrlKey, shiftKey, metaKey, key: keyboardKey } = event
    if (altKey || ctrlKey || shiftKey || metaKey) return
    
    const { actions } = cursor.controller
    if (isValidKeyForControllerAction(keyboardKey, actions)) {
      actions[keyboardKey]?.(map)
    }
  }
}
