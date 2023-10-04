import HorizontalLine from "../HorizontalLine"

const OurServices = () => {
  return (
    <section className="bg-branco2 mb-16 text-center flex flex-col justify-center items-center gap-7 pb-8">
        <div className="flex flex-row justify-center items-center gap-2.5">
            <HorizontalLine />
                <h2 className="font-openSans text-preto font-bold text-2xl">Serviços</h2>
            <HorizontalLine/>
        </div>
        <div className="flex flex-col gap-3" >
            <img src="src/assets/beardservice.jpg" className="w-screen h-96" />
            <div className="flex flex-col gap-3 px-6 text-left text-sm ml-3">
                <h3 className="font-openSans text-2xl font-bold">Barba Masculina</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ratione molestiae iure nostrum natus ad laborum corrupti officia facere? Ut voluptatibus nulla ex commodi. Officia vero accusantium aut numquam architecto.</p>
                <p><strong className="font-bold font-openSans uppercase">Tempo</strong> - 1 Hora</p>
                <p><strong className="font-bold font-openSans uppercase">Preço</strong> - R$70</p>
                <a href="#" className="mt-5 ml-0 bg-marrom p-5 border border-solid border-marrom px-16 py-4 font-openSans text-preto text-lg mr-auto text-center">Agendar</a>

            </div>
        </div>
    </section>
  )
}

export default OurServices