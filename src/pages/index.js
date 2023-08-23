import Head from "next/head";
import { useSession } from "next-auth/react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/firebase/firebase.auth";
const HomePage = () => {
  const { data: session } = useSession();
  const [user] = useAuthState(auth)
  console.log(user?.email);
  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop: "10%" }}>Welcome To Next Auth Home Page</h1>
      <h1 style={{ textAlign: "center", color: "green" }}>Logged in User - {user?.email}</h1>
    </div>
  );
};

export default HomePage;
