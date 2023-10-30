import Card from "../Card"
import HorizontalLine from "../HorizontalLine"

const Barbers = () => {

    const barbers = [
        {name: 'Rodrigo Santana', photo: '/static/img/barber1.jpg', experience: '3 Anos', price: 'R$45', altImage:'Foto do barbeiro Rodrigo Santana' },
        {name: 'Pedro Ricardo', photo:'/static/img/barber2.jpg', experience: '7 Anos', price: 'R$45', altImage:'Foto do Barbeiro Pedro Ricardo'},
        {name: 'Thiago Souza', photo:'/static/img/barber3.jpg', experience: '4 Anos', price: 'R$45', altImage:'Foto do barbeiro Thiago Souza'}
    ]

  return (
    <>
        <section id="barbers" className="flex flex-col gap-5 mb-14 md:mb-24">
            <div className="flex flex-row justify-center items-center gap-2.5">
                <HorizontalLine />
                    <h2 className="font-openSans text-branco font-bold text-2xl">Barbeiros</h2>
                <HorizontalLine />
            </div>
            <div className="mx-2 grid grid-row-3 gap-3.5 justify-center sm:grid-cols-3 lg:px-7">
                    {barbers.map((barber, index) =>(
                        <Card 
                            key={index}
                            name={barber.name}
                            photo={barber.photo}
                            experience ={barber.experience} 
                            price={barber.price}
                            altImage={barber.altImage}
                        />
                    ))}   
            </div>
        </section>
    </>
  )
}

export default Barbers