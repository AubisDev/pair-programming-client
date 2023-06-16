export type User = {
  username: string
  userID: string
  role: Role
}

export enum Role {
  roomCreator = 'room creator',
  invited = 'user invited',
  moderator = 'moderator',
  NA = 'Not assigned',
}
