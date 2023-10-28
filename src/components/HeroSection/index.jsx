
const HeroSection = () => {
    return (
        <section id = "home"className="flex flex-col px-7 mt-10 gap-2 mb-14 font-openSans sm:flex sm:flex-row-reverse sm:px-4 md:mb-24">
            <div className="flex justify-center  md:h-128 md:w-200">
                <img src={"/static/img/herosectionbanner.jpg"} alt="Imagem barbeiro terminando corte" className=""/>
            </div>
            <div className="flex flex-col gap-4 md:justify-center ">
                <h1 className="text-5xl text-branco text-center ">Cortes clássicos e únicos para o seu estilo</h1>
                <p className="text-branco2 text-sm mt-4 text-center">Na barbearia BS, nossa missão é oferecer a você mais do que um corte de cabelo. Uma experiência de estilo, relaxamento e confiança com nossos barbeiros talentosos, produtos de qualidade e atendimento excepcional.</p>
                <p className="text-branco2 text-sm text-center">Estamos comprometidos em transformar a sua aparência e fazer você se sentir no seu melhor.</p>    
                <a href="#" className="bg-preto p-5 border border-solid border-marrom w-3/5 font-openSans text-branco2 text-sm ml-auto mr-auto text-center sm:w-4/5 md:w-3/6">Agende Conosco</a>
                <p className="text-branco2 text-xs text-center">*Entre em contato e descubra o que nos torna únicos.</p>
            </div>
        </section>
    )
}

export default HeroSection