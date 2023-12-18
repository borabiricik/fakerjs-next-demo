import Image from "next/image"

const users = [
  {
    userId: 1,
    username: "John Doe",
    email: "john@doe.com",
    avatar: "https://randomuser.me/api/portraits/men/93.jpg",
  },
  {
    userId: 2,
    username: "Jane Doe",
    email: "jane@doe.com",
    avatar: "https://randomuser.me/api/portraits/women/24.jpg",
  },
  {
    userId: 3,
    username: "John Smith",
    email: "john@smith.com",
    avatar: "https://randomuser.me/api/portraits/men/94.jpg",
  },
  {
    userId: 4,
    username: "Jane Smith",
    email: "jane@smith.com",
    avatar: "https://randomuser.me/api/portraits/women/26.jpg",
  },
  {
    userId: 5,
    username: "Bora biricik",
    email: "bora@biricik.dev",
    avatar: "https://randomuser.me/api/portraits/men/95.jpg",
  },
  {
    userId: 6,
    username: "Ahmet Veli",
    email: "ahmet@veli.com",
    avatar: "https://randomuser.me/api/portraits/men/95.jpg",
  },
]

export default function Home() {
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
