import React from 'react'
import { Link} from 'react-router-dom'
import './header.css'



export default function Header() {
    return (
        <div>
        <div className='up'>
            <div className='text'>Наша сила в вашем успехе!</div>
            <div className='support'>Нужна помощь? Свяжитесь с нашим экспретом
            <span>+996 (553) 993 342</span></div>
        </div>
        <div className='down'>
        <img className='logo' src='images/армада 2.png'/>
        <div className='menu'>      
            <ul>
                <li>
                <Link to='/service'>Услуги</Link>
                </li>
                <li>
                <Link to='/about'>О нас</Link>
                </li>
                <li>
                <Link to='/contacts'>Контакты</Link>
                </li>
                <li>
                <Link to='/portfolio'>Портфолио</Link>
                </li>
                <li>
                <Link to='/production'>Производство</Link>
                </li>
            </ul>
            <button>Скачать прайс</button>
        </div>
        </div> 
        </div>     
    )
}
