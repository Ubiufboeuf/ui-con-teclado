import type { Cursor } from '../cursor/Cursor'

export function handleResizeWindow (cursor: Cursor) {
  return function () {
    const { box } = cursor
    if (box)
      cursor.setCursorStyles(box)
  }
}
