import { Link } from 'react-router-dom';
import DefaultPage from '../../layout/DefaultPage/DefaultPage';
import brasil from '../../assets/brasil.jpg';
import argentina from '../../assets/argentina.jpg';
import franca from '../../assets/franca.jpg';
import all from '../../assets/all.jpg';
import './LandingPage.css';

function LandingPage() {
    return (
        <DefaultPage>
            <div className='content'>
                <div className="left">
                    <Link to='/brasil'>
                        <img src={brasil} alt="bandeira do Brasil" />
                    </Link>
                </div>
                <div className="right">
                    <Link to='/argentina'>
                        <img src={argentina} alt="bandeira da Argentina" />
                    </Link>
                    <Link to='/franca'>
                        <img src={franca} alt="bandeira da França" />
                    </Link>
                    <Link to='/todos'>
                        <img src={all} alt="todos os países" />
                    </Link>
                </div>
            </div>
        </DefaultPage>
    )
}

export default LandingPage;