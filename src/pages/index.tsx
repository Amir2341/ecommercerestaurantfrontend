import { Inter } from "next/font/google";
import HomePage from "./homepage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="Home">
      <HomePage />
    </div>
  );
}
