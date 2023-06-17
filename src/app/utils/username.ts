import {v4 as uuidv4} from 'uuid'

export const randomID = () => {
  return uuidv4().replaceAll('-', '').slice(0, 6)
}
