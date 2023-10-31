import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function page() {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }
  return <div>this is a protected route page</div>;
}
