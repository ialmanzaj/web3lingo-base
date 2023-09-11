import { type NextPage } from "next";
import { TopBar } from "../components/TopBar";
import { BottomBar } from "../components/BottomBar";
import { RightBar } from "../components/RightBar";
import { LoginScreen, useLoginScreen } from "../components/LoginScreen";

import { Sidebar } from "@/components/sidebar";
import { Journey } from "@/components/Journey";

const Learn: NextPage = () => {
  const { loginScreenState, setLoginScreenState } = useLoginScreen();

  return (
    <>
      <TopBar />
      <div className="row flex w-screen gap-4">
        <Sidebar />
        <div className="flex w-full gap-2">
          <Journey />
          <RightBar />
        </div>
      </div>

      <div className="pt-[90px]"></div>

      <BottomBar selectedTab="Aprender" />
      <LoginScreen
        loginScreenState={loginScreenState}
        setLoginScreenState={setLoginScreenState}
      />
    </>
  );
};

export default Learn;
