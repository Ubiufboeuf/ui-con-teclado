import type { TestBoxConfig } from '../../types/TestBox'
import { Box } from './Box'

export class TestBox extends Box {
  constructor (config: TestBoxConfig) {
    super(config)
  }
}
