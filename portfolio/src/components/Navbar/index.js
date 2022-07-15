import { Link } from 'react-router-dom'
import './index.scss'
import LogoJ from '../../assets/images/J.png'
import LogoName from '../../assets/images/Joseph Baitz.png'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoJ} alt="logo" />
            <img className="sub-logo" src={LogoName} alt="Joseph Baitz" />
        </Link>
    </div>
)


export default Sidebar