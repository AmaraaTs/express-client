import Image from "next/image";
import { Inter } from "next/font/google";
import UserList from "../components/user-list";

const inter = Inter({ subsets: ["latin"] });

const myStyle = {
  header: {
    backgroundImage:
      "url('https://wallpapercat.com/w/full/7/4/e/68017-3840x2160-desktop-4k-dota-2-background-photo.jpg')",
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  content: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
};

export default function Home() {
  return (
    <div style={myStyle.header}>
      <div style={myStyle.content}>
        <main className="max-w-5xl m-auto">
          <h1 className="text-4xl text-center py-20 font-bold">
            PLAYER LISTT..
          </h1>
          <UserList />
        </main>
      </div>
    </div>
  );
}
