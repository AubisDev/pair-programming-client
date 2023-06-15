export type User = {
  userName: string
  userID: string
  rol: Rol
}

export enum Rol {
  roomCreator = 'room creator',
  invited = 'user invited',
  moderator = 'moderator',
}
