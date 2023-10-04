/* eslint-disable react/no-unescaped-entities */

import HorizontalLine from "../HorizontalLine";



const AboutUs = () => {

  return (
    <section className="bg-preto mb-16 text-center flex flex-col justify-center items-center gap-10 px-7">
      <div className="text-center flex flex-row justify-center items-center gap-2">
        <HorizontalLine />
          <h2 className="font-openSans text-branco font-bold text-2xl">Sobre Nos</h2>
        <HorizontalLine />
        {/*<img src="/src/assets/aboutus.jpg" className=""></img>*/}
      </div>
      <div className="flex flex-col gap-4  items-center justify-center">
          <img src={"./src/assets/aboutus.jpg"} className=""></img>
          <h3 className="font-openSans text-branco2 font-bold text-3xl">"Mantendo viva a tradição dos clássicos cortes de cabelo  masculinos"</h3>
          <p className="font-openSans text-branco2 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, ut sequi rerum praesentium iure reiciendis suscipit at? Quod atque nihil, tempore accusantium, molestias neque amet voluptatum eveniet ducimus fugit eum?</p>
          <p className="font-openSans text-branco2 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis atque ipsa consequuntur, esse minus commodi ea quisquam!</p>      
          <a href="#" className="bg-preto p-5 border border-solid border-marrom w-1/2 font-openSans text-branco2 text-sm">Mais informações</a>
      </div>

    </section>
  )
}

export default AboutUs