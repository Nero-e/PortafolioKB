export default function AboutMe() {
  return (
    <section className="flex w-full h-screen overflow-hidden p-5 bg-seasalt">
      <div className="flex flex-col justify-center items-center w-full h-full px-20">
        <div className="flex flex-col justify-center w-full max-w-[1200px] mb-20 mx-auto">
          <h1 className="text-[75px] font-manusia tracking-tight text-night mb-[60px]">
            Acerca de Mi
          </h1>
          <p className="w-[85%] text-2xl font-satochi text-night">
            ¡Hola! Soy{" "}
            <span className="text-harvest-gold">desarrollador web.</span> Mi
            camino en la programación empezó en el 2018.
          </p>
        </div>
      </div>
    </section>
  );
}
