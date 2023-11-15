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
            <div className="flex flex-col gap-2 mt-6">
                <h3 className="text-center text-branco text-3xl font-bold">Profissionais com anos de experiencia!</h3>
                <p className="text-center text-branco2 text-sm px-7 md:px-32 lg:px-40  2xl:px-96">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas repudiandae officia ullam accusamus voluptate! Fugiat iusto, totam reprehenderit repellendus assumenda perspiciatis harum. Totam tempora cum ipsa quod, numquam harum temporibus.</p>
                <p className="text-center text-branco2 text-sm px-7 md:px-32 lg:px-40  2xl:px-96">Ea eligendi quibusdam neque quos labore, maiores iure sit amet!</p>
            </div>
            <div className="mx-2 grid grid-row-3 gap-3.5 justify-center self-center sm:grid-cols-3 lg:px-7 xl:px-16 xl:w-fit xl:gap-20 ">
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