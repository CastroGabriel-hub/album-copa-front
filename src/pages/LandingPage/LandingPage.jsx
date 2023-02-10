import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import DefaultPage from '../../layout/DefaultPage/DefaultPage';
import playerImg from '../../assets/player.png';
import './LandingPage.css';

function LandingPage() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8082/')
            .then(res => {
                setPlayers(res.data);
            });
    }, [])

    return (
        <DefaultPage>
            <div className='cards-holder'>
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

export default LandingPage;