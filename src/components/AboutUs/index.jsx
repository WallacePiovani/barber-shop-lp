/* eslint-disable react/no-unescaped-entities */

import HorizontalLine from "../HorizontalLine";



const AboutUs = () => {

  return (
    <section id="about-us" className="bg-preto mb-16 text-center flex flex-col justify-center items-center gap-10 px-7">
      <div className="text-center flex flex-row justify-center items-center gap-2.5">
        <HorizontalLine />
          <h2 className="font-openSans text-branco font-bold text-xl">Sobre Nos</h2>
        <HorizontalLine />
      </div>
      <div className="flex flex-col gap-4  items-center justify-center">
        <div className="flex justify-center  ">
          <img src={"/static/img/aboutus.jpg"} className="sm:h-128" alt="Foto de um barbeiro preparando cabelo de cliente para corte"></img>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <h3 className="font-openSans text-branco font-bold text-3xl ">"Mantendo viva a tradição dos clássicos cortes de cabelo  masculinos"</h3>
          <p className="font-openSans text-branco2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer quis auctor elit sed vulputate mi. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum. Mollis aliquam ut porttitor leo.</p>
          <p className="font-openSans text-branco2 text-sm">Duis ut diam quam nulla porttitor massa. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Eget arcu dictum varius duis at consectetur lorem donec massa. Non blandit massa enim nec dui nunc. Faucibus et molestie ac feugiat. Morbi tincidunt ornare.</p>    
          <p className="font-openSans text-branco2 text-sm"> Gravida rutrum quisque non tellus orci ac auctor. Sed sed risus pretium quam vulputate dignissim. Pretium lectus quam id leo in. Tellus orci ac auctor augue mauris augue neque.</p>    
          <p className="font-openSans text-branco2 text-sm"> Fringilla phasellus faucibus scelerisque eleifend donec. Pellentesque nec nam aliquam sem et tortor consequat. Eget aliquet nibh praesent tristique magna sit amet purus gravida.</p>    
          <a href="#" className="bg-preto p-5 border border-solid border-marrom w-3/5 font-openSans text-branco2 text-sm text-center">Mais informações</a>
        </div>
      </div>

    </section>
  )
}

export default AboutUs