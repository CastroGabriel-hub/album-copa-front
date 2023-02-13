import { useState, useEffect } from 'react';
import axios from 'axios';
import DefaultPage from '../../layout/DefaultPage/DefaultPage';
import Card from '../../components/Card/Card';
import playerImg from '../../assets/player.png';
import './Todos.css';

function Todos() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8082/')
            .then(res => {
                setPlayers(res.data);
            });
    }, [])

    return (
        <DefaultPage>
            <div className="cards-holder">
                {players.map(player =>
                    <Card
                        name={player.Player}
                        position={player.Position}
                        club={player.Club}
                        age={player.Age}
                        img={playerImg}
                    />
                )}
            </div>
        </DefaultPage>
    )
}

export default Todos;