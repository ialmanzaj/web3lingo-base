import type { NextPage } from "next";
import Link from "next/link";
import courses from "../utils/courses";
import { CourseHeader } from "../components/LanguageHeader";
import _bgSnow from "../../public/bg-snow.svg";
import type { StaticImageData } from "next/image";

const bgSnow = _bgSnow as StaticImageData;

const Dashboard: NextPage = () => {
  return (
    <main
      className="flex min-h-screen flex-col items-center bg-[#000] text-white"
      style={{ backgroundImage: `url(${bgSnow.src})` }}
    >
      <CourseHeader />
      <div className="container flex grow flex-col items-center  gap-20 px-4 py-16">

        <section className="container my-auto mx-auto sm:px-4 pt-10  text-white">
          <div className="flex flex-wrap lg:h-full content-center justify-center">
            {courses.map((theme) => (
              <div
                key={theme.name}
                style={{
                  backgroundImage: "url(https://static.moonpay.com/media/home/easy-to-use-bg.jpg)"
                }}
                className="md:max-w-sm rounded-lg overflow-hidden shadow-xl mx-4 mb-4 py-4">
                {/* <div className="bg-cover h-64">
                    <img
                    className="h-full w-full"
                    src="https://ravii-dev.s3.eu-west-2.amazonaws.com/photos/strumble_head.jpg"
                    alt="Strumble head lighthouse overlooking the sea"
                    />
                    </div> */}
                <div className="px-6 py-4">
                  <div className="font-bold text-2xl mb-2">
                    {theme.name}
                  </div>
                  <p className="text-base md:h-40 pt-2 ">
                    Strumble Head is a rocky headland in the community of Pencaer in
                    Pembrokeshire, Wales, within the Pembrokeshire Coast National Park. It
                    marks the southern limit of Cardigan Bay.
                  </p>
                </div>
                <div className="px-6 mt-2 py-5">
                  <Link
                    href={theme.href}
                    className="w-full rounded-2xl border-b-4 border-indigo-700 bg-indigo-600 px-10 py-3 text-center font-bold uppercase transition hover:border-indigo-600 hover:bg-indigo-500 md:min-w-[320px]"
                  >
                    Empezar
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
};

export default Dashboard;
