export interface User {
  id: number
  avatarUrl: string
  name: string
  currentRole: string
  currentCompany: string
}

const orEmptyString = <T>(value: T): T | string => value ?? ""

export const buildUsers = (usersList: User[]): User[] => {
  return usersList?.map((user) => ({
    id: user.id || 0,
    avatarUrl: orEmptyString(user.avatarUrl),
    name: orEmptyString(user.name),
    currentRole: orEmptyString(user.currentRole),
    currentCompany: orEmptyString(user.currentCompany),
  }))
}
