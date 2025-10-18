import type { Point, Styles } from '@/env'

export type BoxType = 'core' | 'test-box'
export type BoxContent_Test = string
export type BoxContent_Game = string
export type BoxContent = BoxContent_Test | BoxContent_Game

export type BoxConfig = {
  $parent: HTMLElement | null
  position: Point
  content?: BoxContent
}

export type BoxElement = {
  styles: Partial<Styles>
}
