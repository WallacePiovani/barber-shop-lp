
const HeroSection = () => {
    return (
        <section className="flex flex-col px-7 mt-10 gap-3 mb-20 font-openSans">
            <div className="bg-[url('src/assets/herosectionbanner.jpg')] bg-no-repeat bg-center bg-cover h-96 rounded-lg">
                
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="text-5xl text-branco ">Não apenas um corte, uma Transformação</h1>
                <p className="text-branco2 text-sm mt-4">Na barbearia BS, nossa missão é oferecer a você mais do que um corte de cabelo. Uma experiência de estilo, relaxamento e confiança com nossos barbeiros talentosos, produtos de qualidade e atendimento excepcional.</p>
                <p className="text-branco2 text-sm">Estamos comprometidos em transformar a sua aparência e fazer você se sentir no seu melhor.</p>
                <a href="#" className="bg-marrom rounded-md py-1.5 w-36 text-preto text-center">Agende Conosco</a>
                <p className="text-branco2 text-xs">*Entre em contato conosco e descubra o que nos torna únicos.</p>
            </div>
        </section>
    )
}

export default HeroSection