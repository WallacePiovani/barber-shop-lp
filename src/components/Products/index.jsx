import HorizontalLine from "../HorizontalLine"
import ProductCard from "../ProductCard"

const Products = () => {

    const products = [
        {name: 'QOD - Shampoo Old Black Whisky', productType: 'Shampoo', image: '/static/img/shampoo.png', altImage: 'Imagem de shampoo da marca QOD'},
        {name:'QOD - Beard Balm Classic' , productType:'Balm', image:'/static/img/balm.png', altImage:'Imagem do Balm da marca QOD'},
        {name:'QOD - Loção Spice Whisky' , productType:'Pós-barba', image:'/static/img/posbarba.png', altImage:'Imagem do Pós-barba da QOD'},
        {name:'QOD - Pomada Capilar Killer' , productType:'Pomada', image:'/static/img/pomada.png', altImage:'Imagem da Pomada da marca QOD'}

    ]
  return (
    <section id="products" className="mb-28">
        <div className="flex flex-row justify-center items-center gap-2.5 mb-7">
            <HorizontalLine />
            <h3 className="font-openSans font-bold text-branco text-2xl">Produtos</h3>
            <HorizontalLine />
        </div>
        <div className="flex flex-col gap-5 mx-7 mb-8 text-center">
            <h2 className="text-branco2 font-openSans font-bold text-3xl">Trabalhamos apenas com produtos de qualidade!</h2>
            <p className="text-sm text-branco2 font-openSans 2xl:px-72">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, odit? Facere voluptas aliquam, recusandae fuga est provident amet, optio odio alias numquam accusamus vitae voluptates maiores animi similique placeat blanditiis.</p>
            <p className="text-xs font-openSans text-branco2 2xl:px-72">*Veja abaixo alguns dos produtos que utilizamos</p>
        </div>
        <div className="grid grid-rows-4 gap-4 mx-8 sm:grid-cols-2 sm:grid-rows-2 lg:px-24 xl:px-44 2xl:px-96">
            {products.map((product,index) => (
                <ProductCard 
                    key={index}
                    name={product.name}
                    productType={product.productType}
                    image={product.image}
                    altImage={product.altImage}
                />
            ))}
            
        </div>       
    </section>
  )
}

export default Products