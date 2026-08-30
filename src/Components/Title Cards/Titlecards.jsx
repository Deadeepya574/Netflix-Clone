import React, { useRef }from 'react'
import './titlecards.css'
import cards_data from '../../assets/cards/Cards_data'


const Titlecards = () => {
  const cardsref = useRef();

const handleWheel = (event)=>{
  event.preventDefault();
  cardsref.current.scrollLeft += event.deltaY;
}

useEffect(()=>{
  cardsref.current.addEventListerner('wheel',handleWheel);
},[])

  return (
    <div className='titlecards'>
      <h2>
        Popular on Netflix
      </h2>
        <div className="card-list" ref={cardsref}>
          {cards_data.map((card,index) => {
            return <div className="card" key={index}>
              <img src={card.image} alt=""/>
          <p>{card.name}</p>
            </div>
          })}
          
        </div>
    </div>
  )
}

export default Titlecards
