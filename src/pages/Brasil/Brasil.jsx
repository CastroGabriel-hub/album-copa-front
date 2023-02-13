import { useState, useEffect } from 'react';
import axios from 'axios';
import DefaultPage from '../../layout/DefaultPage/DefaultPage';
import Card from '../../components/Card/Card';
import playerImg from '../../assets/player.png';
import './Brasil.css';

function Brasil() {
    const [brasileiros, setBrasileiros] = useState([]);
    const players = [];

    useEffect(() => {
        axios.get('http://localhost:8082/')
            .then(res => {
                setBrasileiros(res.data);
            });
    }, [])

    brasileiros.map(player => {
        if(player.id > 26 && player.id < 53){
            players.push(player);
        }
    });

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

export default Brasil;