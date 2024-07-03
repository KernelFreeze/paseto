import { KeyObject } from 'node:crypto'
import { isKeyObject } from 'node:util/types'

if (!isKeyObject) {
  isKeyObject = (obj) => obj != null && obj instanceof KeyObject
}

export default isKeyObject
