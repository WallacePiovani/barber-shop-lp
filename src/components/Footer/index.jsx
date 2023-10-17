import { Link } from "react-scroll"

const Footer = () => {
  return (
    <footer>
        <section className="flex flex-col gap-4 mb-8">
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
            <div className="flex justify-center item-center">
                <ul className="flex flex-row gap-4">
                    <li><Link
                        to = "home"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        offset={-100}
                        className="font-openSans text-xs text-branco2">Inicio
                    </Link></li>
                    <li><Link
                        to = "about-us"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        offset={-100}
                        className="font-openSans text-xs text-branco2">Sobre Nos
                    </Link></li>
                    <li><Link
                        to="our-services"
                        spy={true}
                        smooth={true}
                        duration={1000} 
                        offset={-100}
                        className="font-openSans text-xs text-branco2">Serviços
                    </Link></li>
                    <li><Link 
                        to="barbers"
                        spy={true}
                        smooth={true}
                        duration={1000} 
                        offset={-100}
                        className="font-openSans text-xs text-branco2">Barbeiros
                    </Link></li>
                    <li><Link
                        to="products"
                        spy={true}
                        smooth={true}
                        duration={1000} 
                        offset={-100}
                        className="font-openSans text-xs text-branco2">Produtos
                    </Link></li>
                </ul>
            </div>
        </section>
    </footer>
  )
}

export default Footer