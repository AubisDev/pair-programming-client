import {randomID} from '@/app/utils'

export const setMessageInitialState = (username: string) => {
  return {
    text: '',
    time: '',
    username: username.length !== 0 ? username : `User-${randomID()}`,
  }
}
