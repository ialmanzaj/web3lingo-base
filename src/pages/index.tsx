import { type NextPage } from "next";
import React, { useState, FormEvent, useRef } from "react";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";
import type { StaticImageData } from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Image from "next/image";

import _gamified from "../../public/game.png";
import _nft from "../../public/nft.png";
import _goal from "../../public/goal.png";
import _puzzle from "../../public/puzzle.png";
import _logosDefi from "../../public/defi-logos.svg";
import { Footer } from "@/components/Footer";

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
                      {success || error ? (
                        <section className="relative w-full">
                          <div className="shadow-outline-gray animate-fade-bottom  flex items-start space-x-2 rounded-[9px] bg-purple-200 px-6 py-4 ">
                            <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-purple-600 bg-purple-500">
                              🥳
                            </div>
                            <div className="text-xs sm:text-sm">
                              {success ? (
                                <p>
                                  ¡Felicidades! Estamos muy contentos de tenerte
                                  aquí, Ya te hemos agregado a nuestra lista
                                  de espera. Te avisaremos cuando esté listo
                                  para probarlo.
                                </p>
                              ) : (
                                <p>
                                  No hemos podido añadirle a la lista de espera
                                  Vuelva a intentarlo o escríbanos a
                                  isaac@web3lingo.com. Gracias por su
                                  comprensión
                                </p>
                              )}
                            </div>
                          </div>
                        </section>
                      ) : (
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
                                Unirme
                              </button>
                            </div>
                          </div>
                        </form>
                      )}

                      <div className="relative py-3"></div>
                    </div>
                  </div>
                </div>
                <div className="m-auto max-w-screen-sm space-y-4 px-4 sm:max-w-full">
                  <div className="grid gap-4  md:grid-cols-2">
                    <Card className="max-w-full">
                      <CardHeader>
                        <Image
                          src="/guiado.png"
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }} // optional
                          alt=""
                        />
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
                        <Image
                          src="/game.png"
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }} // optional
                          alt="dssd"
                        />
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
                  <div className="grid gap-4 sm:grid md:grid-cols-3">
                    <Card className="max-w-full">
                      <CardHeader className="relative">
                        <Image
                          width={0}
                          height={0}
                          sizes="80vw"
                          style={{ width: "90%", height: "auto" }} // optional
                          src="/puzzle.png"
                          alt=""
                        />
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
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }} // optional
                          src="/goal.png"
                          alt=""
                        />
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
                        <Image
                          src="/nft.png"
                          width={0}
                          height={0}
                          sizes="90vw"
                          style={{ width: "80%", height: "auto" }} // optional
                          alt=""
                        />
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
        <Footer />
      </>
    </>
  );
};

export default Home;
