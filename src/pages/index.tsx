import { type NextPage } from "next";
import Link from "next/link";
import { GlobeSvg } from "../components/Svgs";
import React from "react";
import { LanguageHeader } from "../components/LanguageHeader";
import { useLoginScreen, LoginScreen } from "../components/LoginScreen";
import _bgSnow from "../../public/bg-snow.svg";
import type { StaticImageData } from "next/image";
import { LanguageCarousel } from "../components/LanguageCarousel";

const bgSnow = _bgSnow as StaticImageData;

const Home: NextPage = () => {
  const { loginScreenState, setLoginScreenState } = useLoginScreen();
  return (
    <main
      className="theme-dark flex min-h-screen flex-col items-center justify-center text-white"
      style={{ backgroundImage: `url(${bgSnow.src})` }}
    >
      <LanguageHeader />
      
      <div className="super-content-wrapper">
        <div className="notion-header">
          <div className="notion-header__cover has-cover">
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
              }}
            >
              <img
                alt="Cosmos"
                sizes="100vw"
                srcSet="https://cosmos.super.site/_next/image?url=https%3A%2F%2Fassets.super.so%2Fae866c24-7726-4f3c-aeb9-274d622b33a9%2Fimages%2F66712e46-8b40-4a78-b40a-2882831935f4%2Fcosmos-cover-1-min.png&w=640&q=80 640w, 	https://cosmos.super.site/_next/image?url=https%3A%2F%2Fassets.super.so%2Fae866c24-7726-4f3c-aeb9-274d622b33a9%2Fimages%2F66712e46-8b40-4a78-b40a-2882831935f4%2Fcosmos-cover-1-min.png&w=750&q=80 750w, 	https://cosmos.super.site/_next/image?url=https%3A%2F%2Fassets.super.so%2Fae866c24-7726-4f3c-aeb9-274d622b33a9%2Fimages%2F66712e46-8b40-4a78-b40a-2882831935f4%2Fcosmos-cover-1-min.png&w=828&q=80 828w, 	https://cosmos.super.site/_next/image?url=https%3A%2F%2Fassets.super.so%2Fae866c24-7726-4f3c-aeb9-274d622b33a9%2Fimages%2F66712e46-8b40-4a78-b40a-2882831935f4%2Fcosmos-cover-1-min.png&w=1080&q=80 1080w, 	https://cosmos.super.site/_next/image?url=https%3A%2F%2Fassets.super.so%2Fae866c24-7726-4f3c-aeb9-274d622b33a9%2Fimages%2F66712e46-8b40-4a78-b40a-2882831935f4%2Fcosmos-cover-1-min.png&w=1200&q=80 1200w, 	https://cosmos.super.site/_next/image?url=https%3A%2F%2Fassets.super.so%2Fae866c24-7726-4f3c-aeb9-274d622b33a9%2Fimages%2F66712e46-8b40-4a78-b40a-2882831935f4%2Fcosmos-cover-1-min.png&w=1920&q=80 1920w, 	https://cosmos.super.site/_next/image?url=https%3A%2F%2Fassets.super.so%2Fae866c24-7726-4f3c-aeb9-274d622b33a9%2Fimages%2F66712e46-8b40-4a78-b40a-2882831935f4%2Fcosmos-cover-1-min.png&w=2048&q=80 2048w,	https://cosmos.super.site/_next/image?url=https%3A%2F%2Fassets.super.so%2Fae866c24-7726-4f3c-aeb9-274d622b33a9%2Fimages%2F66712e46-8b40-4a78-b40a-2882831935f4%2Fcosmos-cover-1-min.png&w=3840&q=80 3840w"
                src="https://cosmos.super.site/_next/image?url=https%3A%2F%2Fassets.super.so%2Fae866c24-7726-4f3c-aeb9-274d622b33a9%2Fimages%2F66712e46-8b40-4a78-b40a-2882831935f4%2Fcosmos-cover-1-min.png&w=3840&q=80"
                decoding="async"
                data-nimg="fill"
                className="notion-header__cover-image"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  boxSizing: "border-box",
                  padding: 0,
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: 0,
                  height: 0,
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                  objectFit: "cover",
                  objectPosition: "center 0%"
                }}
              />
            </span>

          </div>
        </div>
        <div className="super-content max-width has-footer">
          <div className="footer-cover">
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
              }}
            >
              <img
                alt="Cosmos"
                sizes="100vw"
                srcSet="https://cosmos.super.site/_next/image?url=https%3A%2F%2Fassets.super.so%2Fae866c24-7726-4f3c-aeb9-274d622b33a9%2Fimages%2F66712e46-8b40-4a78-b40a-2882831935f4%2Fcosmos-cover-1-min.png&w=640&q=80 640w, https://cosmos.super.site/_next/image?url=https%3A%2F%2Fassets.super.so%2Fae866c24-7726-4f3c-aeb9-274d622b33a9%2Fimages%2F66712e46-8b40-4a78-b40a-2882831935f4%2Fcosmos-cover-1-min.png&w=750&q=80 750w, https://cosmos.super.site/_next/image?url=https%3A%2F%2Fassets.super.so%2Fae866c24-7726-4f3c-aeb9-274d622b33a9%2Fimages%2F66712e46-8b40-4a78-b40a-2882831935f4%2Fcosmos-cover-1-min.png&w=828&q=80 828w, https://cosmos.super.site/_next/image?url=https%3A%2F%2Fassets.super.so%2Fae866c24-7726-4f3c-aeb9-274d622b33a9%2Fimages%2F66712e46-8b40-4a78-b40a-2882831935f4%2Fcosmos-cover-1-min.png&w=1080&q=80 1080w, https://cosmos.super.site/_next/image?url=https%3A%2F%2Fassets.super.so%2Fae866c24-7726-4f3c-aeb9-274d622b33a9%2Fimages%2F66712e46-8b40-4a78-b40a-2882831935f4%2Fcosmos-cover-1-min.png&w=1200&q=80 1200w, https://cosmos.super.site/_next/image?url=https%3A%2F%2Fassets.super.so%2Fae866c24-7726-4f3c-aeb9-274d622b33a9%2Fimages%2F66712e46-8b40-4a78-b40a-2882831935f4%2Fcosmos-cover-1-min.png&w=1920&q=80 1920w, https://cosmos.super.site/_next/image?url=https%3A%2F%2Fassets.super.so%2Fae866c24-7726-4f3c-aeb9-274d622b33a9%2Fimages%2F66712e46-8b40-4a78-b40a-2882831935f4%2Fcosmos-cover-1-min.png&w=2048&q=80 2048w, https://cosmos.super.site/_next/image?url=https%3A%2F%2Fassets.super.so%2Fae866c24-7726-4f3c-aeb9-274d622b33a9%2Fimages%2F66712e46-8b40-4a78-b40a-2882831935f4%2Fcosmos-cover-1-min.png&w=3840&q=80 3840w"
                src="https://cosmos.super.site/_next/image?url=https%3A%2F%2Fassets.super.so%2Fae866c24-7726-4f3c-aeb9-274d622b33a9%2Fimages%2F66712e46-8b40-4a78-b40a-2882831935f4%2Fcosmos-cover-1-min.png&w=3840&q=80"
                decoding="async"
                data-nimg="fill"
                className="notion-header__cover-image"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  boxSizing: "border-box",
                  padding: 0,
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: 0,
                  height: 0,
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                  objectFit: "cover",
                  objectPosition: "center 0%"
                }}
              />
            </span>
          </div>
        </div>
      </div>


      <div className="flex w-full flex-col items-center justify-center gap-3 px-4 py-16 md:flex-row md:gap-36">
        <GlobeSvg className="h-fit w-7/12 md:w-[360px]" />
        <div>
          <p className="mb-6 max-w-[600px] text-center text-3xl font-bold md:mb-12">
            Aprende web3 y DeFi de manera facil y divertida
          </p>
          <div className="mx-auto mt-4 flex w-fit flex-col items-center gap-3">
            <Link
              href="/register"
              className="w-full rounded-2xl border-b-4 border-green-700 bg-green-600 px-10 py-3 text-center font-bold uppercase transition hover:border-green-600 hover:bg-green-500 md:min-w-[320px]"
            >
              Empezar ahora
            </Link>
            <button
              className="w-full rounded-2xl border-2 border-b-4  px-8 py-3 font-bold uppercase transition md:min-w-[320px]"
              onClick={() => setLoginScreenState("LOGIN")}
            >
              Ya tengo una cuenta
            </button>
          </div>
        </div>
      </div>



      <LoginScreen
        loginScreenState={loginScreenState}
        setLoginScreenState={setLoginScreenState}
      />
    </main>
  );
};

export default Home;
