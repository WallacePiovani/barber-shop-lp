import HorizontalLine from "../HorizontalLine"

const OurServices = () => {
  return (
    <section id ="our-services"className="mb-14 text-center flex flex-col justify-center items-center gap-7 md:mb-24">
        <div className="flex flex-row justify-center items-center gap-2.5 w-5/6">
            <HorizontalLine />
                <h2 className="font-openSans text-branco font-bold text-2xl">Serviços</h2>
            <HorizontalLine/>
        </div>
        <div className="flex flex-col gap-7 bg-branco2  sm:flex-row-reverse sm:gap-3 " >
            <img src={"/static/img/beardservice.jpg"} className="w-screen h-96 sm:h-125 sm:w-96 md:w-200" alt="Imagem mostrando corte de barba masculina"/>
            <div className="flex flex-col gap-4 pl-6 text-left text-sm ml-3 sm:justify-center lg:gap-5  ">
                <h3 className="font-openSans text-xl font-bold">Barba Masculina</h3>
                <p className="font-openSans text-sm lg:pr-52 2xl:pr-96">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores ratione molestiae iure nostrum natus ad laborum corrupti officia facere?
                Ut voluptatibus nulla ex commodi. Officia vero accusantium aut numquam architecto.</p>
                <p><strong className="font-bold font-openSans uppercase">Tempo</strong> - 1 Hora</p>
                <p><strong className="font-bold font-openSans uppercase">Preço</strong> - R$70</p>
                <a href="#" className="ml-0 bg-marrom p-5 border border-solid border-marrom px-16 py-4 font-openSans text-preto text-lg  mr-auto text-center mb-9 sm:mb-0">Agendar</a>

            </div>
        </div>
    </section>
  )
}

export default OurServices