import React from 'react'

function Hero() {
  return (
    <section className="">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-2xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-[2.5rem] text-zinc-700">
        All your games in one place.
        <strong className="font-extrabold text-primary sm:block dance"> Is one Click Away </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed text-zinc-700">
        Start Exploring the best games in the world. We have a wide range of games
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary/80 focus:outline-none focus:ring active:bg-primary/95 sm:w-auto"
          href="#"
        >
          Play Now
        </a>

        <a
          className="block w-full rounded px-12 py-3 text-sm font-medium bg-white text-primary shadow hover:text-primary/80 focus:outline-none focus:ring active:text-primary/9active:bg-primary/95 sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero