import Image from "next/image"
import { faker } from "@faker-js/faker"

// {
//   userId: 1,
//   username: "John Doe",
//   email: "john@doe.com",
//   avatar: "https://randomuser.me/api/portraits/men/93.jpg",
// }

export default function Home() {
  const createUser = () => {
    return {
      userId: faker.string.uuid(),
      username: faker.person.fullName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
    }
  }
  const users = faker.helpers.multiple(createUser, { count: 10 })
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-900 space-y-10">
      {users.map((user) => (
        <div
          className="flex space-x-4 border border-white rounded-lg w-full items-center justify-center py-16"
          key={user.userId}
        >
          <Image
            src={user.avatar}
            alt={user.username}
            width={100}
            height={100}
            className="rounded-full"
          />
          <div className="text-gray-500">{user.username}</div>
          <div className="text-gray-500">{user.email}</div>
        </div>
      ))}
    </div>
  )
}
