import { Link } from "react-scroll"

const Footer = () => {
  return (
    <footer>
        <section className="flex flex-col gap-4 mb-2">
            <div className="flex flex-row justify-evenly items-center gap-4">
                <a className="font-openSans font-bold text-5xl border border-marrom text-marrom p-6 mx-2">BS</a>
                <div>
                    <h3 className="font-openSans text-xs text-branco2">Contatos</h3>
                    <p  className="font-openSans text-xs text-branco2">34, Lorem - SP</p>
                    <p  className="font-openSans text-xs text-branco2">contato@bs.com</p>
                    <p  className="font-openSans text-xs text-branco2">(11)2222-2222</p>
                </div>
            </div>
            <hr className="mx-7 bg-branco2 "></hr>
            <div className="flex flex-col justify-center items-center">
                <ul className="flex flex-row gap-4">
                    <li><Link
                        to = "home"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        offset={-100}
                        className="font-openSans text-xs text-branco2 cursor-pointer hover:text-branco duration-200">Inicio
                    </Link></li>
                    <li><Link
                        to = "about-us"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        offset={-100}
                        className="font-openSans text-xs text-branco2 cursor-pointer hover:text-branco duration-200">Sobre Nos
                    </Link></li>
                    <li><Link
                        to="our-services"
                        spy={true}
                        smooth={true}
                        duration={1000} 
                        offset={-100}
                        className="font-openSans text-xs text-branco2 cursor-pointer hover:text-branco duration-200">Serviços
                    </Link></li>
                    <li><Link 
                        to="barbers"
                        spy={true}
                        smooth={true}
                        duration={1000} 
                        offset={-100}
                        className="font-openSans text-xs text-branco2 cursor-pointer hover:text-branco duration-200">Barbeiros
                    </Link></li>
                    <li><Link
                        to="products"
                        spy={true}
                        smooth={true}
                        duration={1000} 
                        offset={-100}
                        className="font-openSans text-xs text-branco2 cursor-pointer hover:text-branco duration-200">Produtos
                    </Link></li>
                </ul>
                <p className="font-openSans text-xs text-branco2 mt-8 opacity-40">Feito por:  Wallace Piovani</p>
            </div>
        </section>
    </footer>
  )
}

export default Footer