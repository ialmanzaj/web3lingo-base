import { type NextPage } from "next";
import React, { useState, FormEvent, useRef } from "react";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";
import type { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/toggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserNav } from "@/components/user-nav";

import _guided from "../../public/Guided.png";
import _gamified from "../../public/game.png";
import _nft from "../../public/nft.png";
import _goal from "../../public/goal.png";
import _puzzle from "../../public/puzzle.png";
import _logosDefi from "../../public/defi-logos.svg";

const Home: NextPage = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const url =
    "https://aprendiendodefi.us21.list-manage.com/subscribe/post?u=3ef26e10472c36d247a54389e&amp;id=a6db9a6c12&amp;f_id=00745de1f0";

  const { loading, error, success, message, handleSubmit } =
    useMailChimpForm(url);
  const { fields, handleFieldChange } = useFormFields({
    EMAIL: "",
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    handleSubmit(fields);
  };

  return (
    <>
      <>
        <div className="relative overflow-hidden">
          <div className="pb-14 pt-10 sm:pt-16 lg:overflow-hidden lg:pb-24 lg:pt-24">
            <div className="mx-auto max-w-5xl lg:px-8">
              <div className="flex flex-col gap-2">
                <div className="mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 lg:flex">
                  <div className="lg:py-18">
                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:mt-5 sm:text-5xl lg:mt-6 xl:text-6xl">
                      <span className="block text-purple-600">Web3lingo</span>
                      <span className="block text-black">
                        Una manera fácil y divertida de aprender sobre crypto
                      </span>
                    </h1>
                    <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                      Aprende desde cero web3 a tu propio ritmo con una
                      educación guiada, eficaz y divertida. <br></br>
                      <br></br>
                      <br></br>
                      Únete a la lista de espera para ser parte de la versión
                      beta y tendrás la oportunidad de ganar emocionantes
                      recompensas exclusivas.
                    </p>
                    <div className="mt-10 sm:mt-12">
                      {/* This is a working waitlist form. Create your access key from https://web3forms.com/s to setup.  */}
                      <form
                        onSubmit={onSubmit}
                        className="sm:mx-auto sm:max-w-xl lg:mx-0"
                        //action="https://aprendiendodefi.us21.list-manage.com/subscribe/post?u=3ef26e10472c36d247a54389e&amp;id=a6db9a6c12&amp;f_id=00745de1f0"
                      >
                        <div className="sm:flex">
                          {/* <input
                            type="hidden"
                            name="access_key"
                            defaultValue="YOUR_ACCESS_KEy_HERE"
                          />
                          <input
                            type="hidden"
                            name="subject"
                            defaultValue="New Waitlist"
                          /> */}
                          <div className="min-w-0 flex-1">
                            <label htmlFor="email" className="sr-only">
                              Email address
                            </label>
                            <input
                              onChange={handleFieldChange}
                              value={fields.EMAIL}
                              id="EMAIL"
                              autoFocus
                              required
                              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                              type="email"
                              placeholder="Introduce tu correo electrónico"
                              className="block w-full rounded-md border-0 bg-gray-200 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                              defaultValue=""
                              autoComplete="off"
                            />
                          </div>
                          <div className="mt-3 sm:ml-3 sm:mt-0">
                            <button
                              ref={buttonRef}
                              type="submit"
                              className="grow rounded-2xl border-b-4 border-purple-600 bg-purple-500 p-3 font-bold text-white duration-300 ease-out hover:bg-purple-600 sm:min-w-[150px] sm:max-w-fit sm:grow-0"
                            >
                              Join Waitlist
                            </button>
                          </div>
                        </div>
                      </form>
                      <div className="relative py-3">
                        {(success || error) && (
                          <div className="shadow-outline-gray animate-fade-bottom absolute flex items-start space-x-2 rounded-[9px] bg-purple-200 px-6 py-4 ">
                            <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-purple-600 bg-purple-500">
                              🥳
                            </div>
                            <div className="text-xs sm:text-sm">
                              {success ? (
                                <p>
                                  Congrats! We are excited to have you here,
                                  We&apos;ve added{" "}
                                  <span className="font-bold">
                                    {fields.EMAIL}
                                  </span>{" "}
                                  to our waitlist. We&apos;ll let you when ready
                                  start to try it out.
                                </p>
                              ) : (
                                <p>
                                  You are already added to our waitlist.
                                  We&apos;ll let you know when we launch!
                                </p>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 max-w-screen-sm	sm:max-w-full m-auto px-4">
                  <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <img src={_guided.src} className="max-w-fit	" />
                        <CardTitle>Lecciones breves y guiadas</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-s text-muted-foreground">
                          Las lecciones breves e interactivas hacen que los
                          conceptos resulten intuitivos, para que incluso las
                          ideas más complejas encajen a la perfección.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <img src={_gamified.src} className="max-w-fit" />
                        <CardTitle>
                          Experiencia gamificada, para hacerlo un hábito
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-s text-muted-foreground">
                          Con cada desafío superado y misión completada, ganarás
                          puntos. Sigue tu progreso, sube de nivel y comprueba
                          lo lejos que has llegado.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="grid gap-4 grid-cols-1s md:grid-cols-3">
                    <Card>
                      <CardHeader>
                        <img src={_puzzle.src} className="max-w-fit p-8" />
                        <CardTitle>Tareas</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-s text-muted-foreground">
                          Completa los quiz y tareas que ponen a prueba tu
                          conocimiento y amplían tus habilidades.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <img src={_goal.src} className="max-w-fit p-4" />
                        <CardTitle>Retos</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-s text-muted-foreground">
                          No solo tendras teoria sino que crearas proyectos
                          reales.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <img src={_nft.src} className="max-w-fit" />
                        <CardTitle>Certificados de cursos</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-s text-muted-foreground">
                          Completa un curso o una misión importante y ganarás un
                          NFT, una insignia digital de tu éxito.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="">
          <div className="mx-auto max-w-7xl overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
            <nav
              className="-mx-5 -my-2 flex flex-wrap justify-center"
              aria-label="Footer"
            >
              <div className="px-5 py-2">
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  About
                </a>
              </div>
              <div className="px-5 py-2">
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Press
                </a>
              </div>
              <div className="px-5 py-2">
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Privacy
                </a>
              </div>
            </nav>
            <div className="mt-8 flex justify-center space-x-6">
              <a
                href="https://twitter.com/web3templates"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://github.com/web3templates"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <p className="mt-8 text-center text-base text-gray-400">
              © 2022 AprendiendoDeFi. All rights reserved.
            </p>
          </div>
        </footer>
      </>
    </>
  );
};

export default Home;
