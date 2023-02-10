import './Card.css';

function Card({ position, name, club, age, img }) {
    return (
        <div className="card">
            <p className='position'>Posição: {position}</p>
            <img src={img} alt="player image" />
            <p className='club'>Clube: {club}</p>
            <h3>{name}</h3>
            <p className='age'>Idade: {age}</p>
        </div>
    )
}

export default Card;