import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section className="flex w-full h-full overflow-hidden p-5 bg-night text-seasalt-100 justify-center">
      <div className="flex flex-col w-[1400px] h-full p-16">
        <article className="flex flex-col p-14 shadow-sm border-custom bg-night">
          <header className="relative flex flex-row justify-between items-center w-[calc(100%_+_7rem)] px-14 pt-14 pb-16 -mt-14 mb-12 -left-[3.5rem] border-[#202020] border-b">
            <div className="flex flex-col space-y-8">
              <h2 className="text-3xl font-supreme font-black tracking-wider uppercase">
                ⚡Acerca de mí
              </h2>
              <p className="text-sm font-satochi tracking-widest uppercase text-seasalt-300">
                (¿Quién soy?)
              </p>
            </div>
            <div className="relative flex justify-center items-center w-36 h-20">
              <div className="absolute flex flex-col items-center justify-center w-40 aspect-square rounded-full overflow-hidden">
                <Image
                  src={"/images/perfilbyn.png"}
                  alt="Foto de Perfil"
                  className="relative"
                  width={500}
                  height={500}
                  style={{ objectFit: "contain" }}
                ></Image>
              </div>
            </div>
          </header>

          <div className="space-y-6">
            {/* Sección de Introducción */}
            <section>
              <h3 className="font-supreme font-black tracking-wider uppercase text-center">
                Intro
              </h3>
              <p className="font-satoshi tracking-wide text-[#8f9094]">
                ¡Hola! Mi nombre es Kevin Espitia, nací en Bogotá, Colombia y
                tengo 24 años. Soy desarrollador web especializado en frontend
                con experiencia en React, Next.js, TypeScript, JavaScript, SQL y
                frameworks como NestJS.
              </p>
            </section>

            {/* Sección de Motivación */}
            <section>
              <h3 className="font-supreme font-black tracking-wider uppercase">
                Lo que me motiva
              </h3>
              <p className="font-satoshi tracking-wide text-[#8f9094]">
                La programación es algo que me apasiona profundamente. No es
                solo una profesión, sino una forma de canalizar mi creatividad y
                curiosidad. Lo que más disfruto es cómo cada reto trae consigo
                una oportunidad para aprender algo nuevo.
                <br />
                <br />
                La sensación de satisfacción que obtengo al ver un proyecto
                terminado, especialmente cuando supera las expectativas, es lo
                que realmente impulsa mi constante búsqueda de mejorar y crecer
                en esta carrera.
              </p>
            </section>

            {/* Sección de Trayectoria Profesional */}
            <section>
              <h3 className="font-supreme font-black tracking-wider uppercase">
                Mi trayectoria profesional
              </h3>
              <p className="font-satoshi tracking-wide text-[#8f9094]">
                A lo largo de mi carrera, he desempeñado diversos roles como
                <span className="font-bold text-seasalt-200"> Analista BI</span>
                ,
                <span className="font-bold text-seasalt-200">
                  {" "}
                  Desarrollador de Software
                </span>{" "}
                y
                <span className="font-bold text-seasalt-200">
                  {" "}
                  Analista de Aplicaciones
                </span>
                , donde participé en la creación de herramientas que optimizaron
                la productividad y mejoraron el análisis de datos. Durante mi
                experiencia en
                <span className="font-bold text-seasalt-200">
                  {" "}
                  Oracle Apex,{" "}
                </span>
                desarrollé aplicaciones clave como una para la gestión del
                tiempo de los empleados y otra para el análisis de datos
                mediante dashboards.
                <br />
                <br />
                Actualmente, soy capaz de desarrollar interfaces de usuario
                interactivas y dinámicas con tecnologías como
                <span className="font-bold text-seasalt-200"> React</span> y
                <span className="font-bold text-seasalt-200"> Next.js</span> y
                utilizo
                <span className="font-bold text-seasalt-200">
                  {" "}
                  TypeScript
                </span>{" "}
                para construir soluciones robustas y escalables. Además, sigo
                aplicando mis habilidades en la gestión de bases de datos con
                <span className="font-bold text-seasalt-200"> SQL</span> y
                <span className="font-bold text-seasalt-200"> PL/SQL </span>
                mientras que en el backend continúo creando soluciones con
                <span className="font-bold text-seasalt-200"> NestJS, </span>
                manteniéndome alineado con principios sólidos de diseño y
                arquitectura de software. Esto me permite ofrecer un desarrollo
                completo y moderno, tanto en el frontend como en el backend.
                <br />
                <br />
                Me gusta enfrentar nuevos desafíos, siempre buscando la mejor
                manera de resolver problemas a través de un diseño eficiente y
                la aplicación de los principios{" "}
                <span className="font-bold text-seasalt-200">SOLID</span> para
                escribir código limpio y mantenible. Además, implemento
                metodologías ágiles como{" "}
                <span className="font-bold text-seasalt-200">Scrum</span> en la
                gestión de proyectos, asegurando un enfoque colaborativo y ágil.
                Esta combinación de habilidades me permite ofrecer soluciones
                completas, desde el frontend hasta el backend y la integración
                con bases de datos.
              </p>
            </section>

            {/* Sección de Tecnologías */}
            <section>
              <h3 className="font-supreme font-black tracking-wider uppercase">
                Tecnologías con las que trabajo
              </h3>
              <ul className="text-[#8f9094] list-disc list-inside font-satoshi tracking-wide space-y-1">
                <li>Frontend: Next.js, TypeScript.</li>
                <li>Backend: NestJS, Node.js.</li>
                <li>Bases de datos: PL/SQL, Oracle Apex.</li>
                <li>Herramientas de diseño: Figma, Spline.</li>
                <li>Business Intelligence: Power BI, QlikView, QlikSense.</li>
                <li>
                  <Link className="font-bold text-seasalt" href={"/techStack"}>
                    Más...
                  </Link>
                </li>
              </ul>
            </section>
            {/* Sección de Intereses */}
            <section>
              <h3 className="font-supreme font-black tracking-wider uppercase">
                Las cosas que disfruto
              </h3>
              <ul className="text-[#8f9094] list-disc list-inside font-satoshi tracking-wide space-y-1">
                <li>Música 🎸</li>
                <li>Libros 📔</li>
                <li>Playa 🏝️</li>
                <li>Pintura 🪄</li>
                <li>Conciertos 🎤</li>
                <li>Películas y series 🎫</li>
              </ul>
            </section>
          </div>
        </article>
      </div>
    </section>
  );
}
