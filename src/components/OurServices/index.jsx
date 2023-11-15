import HorizontalLine from "../HorizontalLine"
import { FaArrowRight } from 'react-icons/fa';
import { useState } from "react";

const OurServices = () => {

    const [currentService, setCurrentService] = useState(0);
    const servicesData = [
        {
            image:'/static/img/beardservices.png',
            title:'Barba Masculina',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Maiores ratione molestiae iure nostrum natus ad laborum corrupti officia facere? Ut voluptatibus nulla ex commodi. Officia vero accusantium aut numquam architecto.',
            time: '1 Hora',
            price:'R$45',
        },
        {
            image:'/static/img/haircutservice.jpg',
            title:'Corte de Cabelo Masculino',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Maiores ratione molestiae iure nostrum natus ad laborum corrupti officia facere? Ut voluptatibus nulla ex commodi. Officia vero accusantium aut numquam architecto.',
            time: '1 Hora',
            price:'R$70',
        },
        {
            image:'/static/img/eyebrowsservice.png',
            title:'Estilizar sobrancelhas',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Maiores ratione molestiae iure nostrum natus ad laborum corrupti officia facere? Ut voluptatibus nulla ex commodi. Officia vero accusantium aut numquam architecto.',
            time: '1 Hora',
            price:'R$25',
        }
    ]

    const handleNextService = () => {
        setCurrentService((prevService) => (prevService + 1) % servicesData.length);
      };

  return (
    <section id ="our-services"className="mb-14 text-center flex flex-col justify-center items-center gap-7 md:mb-24">
        <div className="flex flex-row justify-center items-center gap-2.5 w-5/6">
            <HorizontalLine />
                <h2 className="font-openSans text-branco font-bold text-2xl">Serviços</h2>
            <HorizontalLine/>
        </div>
        <div className="flex flex-col gap-7 bg-branco2  sm:flex-row-reverse sm:gap-3 " >
            <img src={servicesData[currentService].image} className="w-screen h-96 sm:h-125 sm:w-96 md:w-2/4 2xl:w-3/4" alt={`Imagem mostrando ${servicesData[currentService].title}`}/>
            <div className="flex flex-col gap-4 pl-6 text-left text-sm ml-3 sm:justify-center lg:gap-5  ">
                <h3 className="font-openSans text-xl font-bold">{servicesData[currentService].title}</h3>
                <p className="font-openSans text-sm lg:pr-52 2xl:pr-80">{servicesData[currentService].description}</p>
                <p><strong className="font-bold font-openSans uppercase ">Tempo</strong> - {servicesData[currentService].time}</p>
                <p><strong className="font-bold font-openSans uppercase">Preço</strong> - {servicesData[currentService].price}</p>
                <a href="#" className="ml-0 bg-marrom p-5 border border-solid border-marrom px-16 py-4 font-openSans text-preto text-lg  mr-auto text-center mb-9 sm:mb-0">Agendar</a>
                <FaArrowRight onClick={handleNextService} className="cursor-pointer self-start " />
            </div>
        </div>
    </section>
  )
}

export default OurServices