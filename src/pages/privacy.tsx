import { type NextPage } from "next";
import Link from "next/link";
import React, { useState } from "react";
import _bgSnow from "../../public/bg-snow.svg";

import _logosDefi from "../../public/defi-logos.svg";
import { Footer } from "@/components/Footer";
import { TopBar } from "@/components/TopBarBasic";

const Privacy: NextPage = () => {
  return (
    <main>
      <TopBar />
      <div className="m-auto max-w-screen-sm gap-4 py-4">
        <p className="py-6 text-2xl font-bold">Política de Privacidad</p>
        <br></br>
        <br></br>
        <p>Fecha de entrada en vigencia: 1 de agosto de 2023</p>
        <br></br>
        <p>
          Esta Política de Privacidad describe cómo Web3lingo
          (&quot;nosotros,&quot; &quot;nos,&quot; o &quot;nuestro&quot;)
          recopila, utiliza y comparte información personal cuando usted utiliza
          nuestro sitio web, productos o servicios (colectivamente, los
          &quot;Servicios&quot;). Al acceder o utilizar nuestros Servicios,
          usted acepta las prácticas descritas en esta Política de Privacidad.
        </p>
        <br></br>
        <ol>
          <li className="font-bold">Información que Recopilamos:</li>
          <br></br>
        </ol>
        <p>Podemos recopilar los siguientes tipos de información personal:</p>
        <p>
          Información que Usted Proporciona: Cuando utiliza nuestros Servicios,
          puede proporcionarnos información como su nombre, dirección de correo
          electrónico, dirección postal, número de teléfono y otros datos de
          contacto.
        </p>
        <p>
          Información Recopilada de Forma Automática: Podemos recopilar
          automáticamente cierta información cuando utiliza nuestros Servicios,
          incluyendo su dirección IP, tipo de dispositivo, sistema operativo,
          tipo de navegador y comportamiento de navegación.
        </p>
        <br></br>
        <p>
          Cookies y Tecnologías Similares: Podemos utilizar cookies y
          tecnologías de seguimiento similares para recopilar información sobre
          su uso de nuestros Servicios. Puede gestionar sus preferencias de
          cookies a través de la configuración de su navegador.
        </p>
        <br></br>
        <ol>
          <li className="font-bold">Cómo Utilizamos su Información</li>
          <br></br>
        </ol>
        <p>
          Podemos utilizar su información personal para los siguientes fines:
        </p>
        <p>
          Para proporcionar y mantener nuestros Servicios. Para responder a sus
          consultas y solicitudes. Para enviarle actualizaciones, boletines
          informativos y comunicaciones de marketing. Para mejorar nuestros
          Servicios y desarrollar nuevas características. Para detectar y
          prevenir el fraude y el acceso no autorizado.
        </p>
        <br></br>
        <ol>
          <li className="font-bold">Compartir Información</li>
        </ol>
        <p>Podemos compartir su información personal con:</p>
        <p>
          Proveedores de servicios que nos ayudan a operar nuestros Servicios.
          Autoridades legales u otros terceros según lo requiera la ley.
          Afiliados y socios con quienes colaboramos.
        </p>
        <br></br>
        <ol>
          <li className="font-bold">Sus Opciones</li>
        </ol>
        <p>Usted puede controlar cómo utilizamos su información personal:</p>
        <p>
          Ajustando sus preferencias de cookies. Dándose de baja de las
          comunicaciones de marketing. Poniéndose en contacto con nosotros para
          solicitar acceso, corrección o eliminación de su información personal.
        </p>
        <br></br>
        <ol>
          <li className="font-bold">Seguridad</li>
        </ol>
        <p>
          Tomamos medidas razonables para proteger su información personal
          contra el acceso o divulgación no autorizados.
        </p>
        <br></br>
        <ol>
          <li className="font-bold">Privacidad de los Niños</li>
        </ol>
        <p>
          Nuestros Servicios no están destinados a niños menores de 13 años. No
          recopilamos intencionadamente información personal de niños.
        </p>
        <br></br>
        <ol>
          <li className="font-bold">Cambios en esta Política de Privacidad</li>
        </ol>
        <p>
          Podemos actualizar esta Política de Privacidad periódicamente. La
          fecha de la última revisión se indicará en la parte superior de esta
          página.
        </p>
        <br></br>
        <ol>
          <li className="font-bold">Contáctenos</li>
        </ol>
        <p>
          Si tiene preguntas o inquietudes sobre esta Política de Privacidad,
          por favor contáctenos en:
        </p>
        <p>hello@web3lingo.com</p>
        <br></br>
      </div>
      <Footer />
    </main>
  );
};

export default Privacy;
