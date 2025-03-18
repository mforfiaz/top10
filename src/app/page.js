import { redirect } from "next/navigation";

export default function Home() {
  return (
    hi
  );
}


export default function RootPage() {
  redirect("/home");
}