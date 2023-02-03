import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import DefaultPage from '../../layout/DefaultPage/DefaultPage';
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
            {players.map(player =>
                <Card
                    name={player.Player}
                    position={player.Position}
                />
            )}
        </DefaultPage>
    )
}

export default LandingPage;