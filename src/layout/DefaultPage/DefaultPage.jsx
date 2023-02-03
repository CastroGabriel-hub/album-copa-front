import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './DefaultPage.css';

function DefaultPage({ children }) {
    return (
        <div className='pseudo-body'>
            <Header />
            {children}
            <Footer/>
        </div>
    )
}

export default DefaultPage;