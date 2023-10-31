import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export default async function Home() {
  // const session = await getServerSession(options);
  return (
    // <div>{session ? <h1>{session.user as any}</h1> : <h1>no pass</h1>}</div>
    <div>Home</div>
  );
}
