import './Card.css';

function Card({ position, name, club, age, caps }) {
    return (
        <div className="container">
            <div className="row">
                <div className="card">
                    <h3>{name}</h3>
                    <div className="dados">
                        <p>Position: {position}</p>
                        <p>Club: {club}</p>
                        <p>Age: {age}</p>
                        <p>Matches: {caps}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;