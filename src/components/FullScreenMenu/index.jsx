import { Link } from "react-scroll"

// eslint-disable-next-line react/prop-types
const FullScreenMenu = ({closeMenu}) => {

  
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-preto z-30 bg-gradient-to-r opacity-95">
        <ul className="h-full flex flex-col justify-center items-center gap-20 font-openSans delay-300">
        <li><Link 
              to = "home"
              spy={true}
              smooth={true}
              duration={1000}
              offset={-100}
              onClick={ () =>{
                closeMenu()
              }}    
              className=" text-marrom text-xl hover:text-branco duration-300 cursor-pointer sm:text-2xl">Inicio
            </Link></li>
            <li><Link 
              to = "about-us"
              spy={true}
              smooth={true}
              duration={1000}
              offset={-100}
              onClick={ () =>{
                closeMenu()
              }}    
              className=" text-marrom text-xl hover:text-branco duration-300 cursor-pointer sm:text-2xl">Sobre Nos
            </Link></li>
            <li><Link 
              to="our-services"
              spy={true}
              smooth={true}
              duration={1000} 
              offset={-100}
              onClick={ () =>{
                closeMenu()
              }}  
              className=" text-marrom text-xl hover:text-branco duration-300 cursor-pointer sm:text-2xl">Serviços
            </Link></li>
            <li><Link
            to="barbers"
            spy={true}
            smooth={true}
            duration={1000} 
            offset={-100}
            onClick={ () =>{
              closeMenu()
            }}   
            className=" text-marrom text-xl hover:text-branco duration-300 cursor-pointer sm:text-2xl">Barbeiros</Link></li>
            <li><Link
            to="products"
            spy={true}
            smooth={true}
            duration={1000} 
            offset={-100}
            onClick={ () =>{
              closeMenu()
            }} 
            className=" text-marrom text-xl hover:text-branco duration-300 cursor-pointer sm:text-2xl">Produtos</Link></li>
        </ul>
    </div>
  )
}

export default FullScreenMenu