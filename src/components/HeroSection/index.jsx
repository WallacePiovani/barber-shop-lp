
const HeroSection = () => {
    return (
        <section className="flex flex-col px-7 mt-10 gap-3 mb-16 font-openSans">
            <div className="bg-[url('./src/assets/herosectionbanner.jpg')] bg-no-repeat bg-center bg-cover h-96">
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-5xl text-branco text-center">Não apenas um corte, uma Transformação</h1>
                <p className="text-branco2 text-sm mt-4 text-center">Na barbearia BS, nossa missão é oferecer a você mais do que um corte de cabelo. Uma experiência de estilo, relaxamento e confiança com nossos barbeiros talentosos, produtos de qualidade e atendimento excepcional.</p>
                <p className="text-branco2 text-sm text-center">Estamos comprometidos em transformar a sua aparência e fazer você se sentir no seu melhor.</p>    
                <a href="#" className="bg-preto p-5 border border-solid border-marrom w-1/2 font-openSans text-branco2 text-sm ml-auto mr-auto text-center">Agende Conosco</a>
                <p className="text-branco2 text-xs text-center">*Entre em contato e descubra o que nos torna únicos.</p>
            </div>
        </section>
    )
}

export default HeroSection