import { FullUser } from "./domain"

export const mockedUserOtavio: FullUser = {
  id: 1,
  name: "Otavio Bonassi",
  avatarUrl:
    "https://media.licdn.com/dms/image/C4D03AQGxokePfWxYIQ/profile-displayphoto-shrink_400_400/0/1573264276645?e=1699488000&v=beta&t=qTYmwIBOHyS8VwTqzqGk6WURCjMqB18wGop5Q2mzNEM",
  currentRole: "Software Engineer",
  currentCompany: "Chatterbox",
  experiences: [
    {
      name: "Chatterbox",
      startDate: "11-01-2021",
      description: "Some description",
    },
    {
      name: "Gupy",
      startDate: "09-01-2021",
      endDate: "05-01-2023",
      description: "Some description 2",
    },
  ],
}

export const mockedUserJohn: FullUser = {
  id: 2,
  name: "Jon O'Bryan",
  avatarUrl:
    "https://media.licdn.com/dms/image/C4E03AQGfwGABJl-RIw/profile-displayphoto-shrink_100_100/0/1517711728211?e=1699488000&v=beta&t=oeb5VSGQCHJEN_SU9LSPOaN0S6Dp8DW438S-AqWBKq0",
  currentRole: "CEO",
  currentCompany: "Atlas",
  experiences: [
    {
      name: "Atlas",
      startDate: "11-01-2021",
      description: "Lalalalalla",
    },
    {
      name: "Another Company",
      startDate: "09-01-2021",
      endDate: "05-01-2023",
      description: "Tadaaaaaa",
    },
  ],
}
