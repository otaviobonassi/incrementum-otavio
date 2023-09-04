import { User } from "../home/domain"

interface Experience {
  name: string
  startDate: string
  endDate?: string
  description: string
}

export interface FullUser extends User {
  experiences: Experience[]
}

const orEmptyString = <T>(value: T): T | string => value ?? ""

export const buildUser = (user: FullUser[]) => {
  return user?.map((u) => ({
    id: u.id || 0,
    avatarUrl: orEmptyString(u.avatarUrl),
    name: orEmptyString(u.name),
    currentRole: orEmptyString(u.currentRole),
    currentCompany: orEmptyString(u.currentCompany),
    experiences: u.experiences || [],
  }))
}
