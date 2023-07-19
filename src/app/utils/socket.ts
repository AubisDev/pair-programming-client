import {Socket, io} from 'socket.io-client'
import {DefaultEventsMap} from 'socket.io/dist/typed-events'

export const socket: Socket<DefaultEventsMap, DefaultEventsMap> = io(
  'https://programming-rooms-server-pahbjiz2k-aubisdev.vercel.app',
)
