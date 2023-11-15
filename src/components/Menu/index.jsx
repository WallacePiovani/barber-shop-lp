import {Link} from "react-scroll"

const Menu = () => {
  return (
    <header>
        <ul className="h-full lg:flex flex-row justify-center items-center gap-12 font-openSans delay-300  ">
            <li><Link 
                to = "home"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-100}  
                className=" text-marrom text-xl cursor-pointer hover:text-branco decoration-2  duration-300 cursor- lg:text-lg">Inicio
                </Link></li>
                <li><Link 
                to = "about-us"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-100}   
                className=" text-marrom text-xl cursor-pointer hover:text-branco decoration-2 duration-300 cursor- lg:text-lg">Sobre Nos
                </Link></li>
                <li><Link 
                to="our-services"
                spy={true}
                smooth={true}
                duration={1000} 
                offset={-100}
                className=" text-marrom text-xl cursor-pointer hover:text-branco decoration-2 duration-300 cursor- lg:text-lg">Serviços
                </Link></li>
                <li><Link
                to="barbers"
                spy={true}
                smooth={true}
                duration={1000} 
                offset={-100}
                className=" text-marrom text-xl cursor-pointer hover:text-branco decoration-2 duration-300 cursor- lg:text-lg">Barbeiros</Link></li>
                <li><Link
                to="products"
                spy={true}
                smooth={true}
                duration={1000} 
                offset={-100}
                className=" text-marrom text-xl cursor-pointer hover:text-branco decoration-2 duration-300 cursor- lg:text-lg">Produtos</Link></li>
        </ul>
    </header>
  )
}

export default Menu