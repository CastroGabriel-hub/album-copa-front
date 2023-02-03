import './Card.css';

function Card({ position, name, club, age, caps }) {
    return (
        <div className="card">
            <h3>{ name }</h3>
            <p>{ position }</p>
        </div>
    )
}

export default Card;