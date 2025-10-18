export type Size = {
  width: number
  height: number
}

export type Point = {
  x: number
  y: number  
}

export type CSSUnit = `${number}px` | `${number}%` | `${number}vh` | `${number}vw`

export type Styles = {
  gap: CSSUnit
  position: { x: CSSUnit, y: CSSUnit }
  rounded: CSSUnit
  size: { width: CSSUnit, height: CSSUnit }
  padding: CSSUnit
}

export type KeyboardKey = ' '
  | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '0'
  | 'q' | 'w' | 'e' | 'r' | 't' | 'y' | 'u' | 'i' | 'o' | 'p'
  | 'a' | 's' | 'd' | 'f' | 'g' | 'h' | 'j' | 'k' | 'l' | 'ñ'
  | 'z' | 'x' | 'c' | 'v' | 'b' | 'n' | 'm' | ',' | '.' | '-'
