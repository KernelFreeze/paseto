import { KeyObject } from 'node:crypto'
import { isKeyObject } from 'node:util/types'

let utilIsKeyObject = isKeyObject

if (!isKeyObject) {
  utilIsKeyObject = (obj) => obj != null && obj instanceof KeyObject
}

export default utilIsKeyObject
