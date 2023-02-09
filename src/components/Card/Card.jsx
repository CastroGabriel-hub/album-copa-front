import './Card.css';

function Card({ position, name, club, age, caps }) {
    return (
        <div className="card">
            <p className='position'>Posição: {position}</p>
            <p className='club'>Clube: {club}</p>
            <h3>{name}</h3>
            <p className='age'>Idade: {age}</p>
        </div>
    )
}

export default Card;