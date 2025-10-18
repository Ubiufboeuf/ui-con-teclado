import type { Cursor } from '../cursor/Cursor'

export function isValidKeyForControllerAction (
  keyboardKey: string,
  actions: Cursor['controller']['actions']
): keyboardKey is keyof typeof actions {
  return Boolean(actions[keyboardKey as keyof typeof actions])
}
