import Card from "../Card"
import HorizontalLine from "../HorizontalLine"

const Barbers = () => {

    const barbers = [
        {name: 'Rodrigo', photo: '/static/img/barber1.jpg'},
        {name: 'Pedro', photo:'/static/img/barber2.jpg'},
        {name: 'Thiago', photo:'/static/img/barber3.jpg'}
    ]

  return (
    <>
        <section className="flex flex-col gap-5 mb-5">
            <div className="flex flex-row justify-center items-center gap-2.5">
                <HorizontalLine />
                    <h2 className="font-openSans text-branco font-bold text-2xl">Barbeiros</h2>
                <HorizontalLine />
            </div>
            <div className=" mx-1 grid grid-row-3 gap-2">
                    {barbers.map((barber, index) =>(
                        <Card 
                            key={index}
                            name={barber.name}
                            photo={barber.photo} 
                        />
                    ))}   
            </div>
        </section>
    </>
  )
}

export default Barbers