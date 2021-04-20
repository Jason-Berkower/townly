import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Layout from "../components/Layout";

export default function Auth() {
  return (
    <div>
      <Layout>
        <div id="sign-in">
          <SignIn />
        </div>
        <div id="separator" />
        <div id="sign-up">
          <SignUp />
        </div>
      </Layout>
    </div>
  );
}
