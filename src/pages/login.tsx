import { type NextPage } from "next";
import _defi from "../../public/defi-logos.svg";

import { LoginScreen, useLoginScreen } from "../components/LoginScreen";


const Login: NextPage = () => {
  const { loginScreenState, setLoginScreenState } = useLoginScreen();
    console.log(loginScreenState)
  return (
    <>
      <LoginScreen
        loginScreenState={loginScreenState}
        setLoginScreenState={setLoginScreenState}
      />
    </>
  );
};

export default Login;
