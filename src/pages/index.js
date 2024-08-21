import Image from "next/image";
import { Inter } from "next/font/google";
import UserList from "../components/user-list";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="max-w-5xl m-auto">
      <h1 className="text-4xl text-center py-10">Player list</h1>
      <UserList />
    </main>
  );
}
