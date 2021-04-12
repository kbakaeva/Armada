import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <div className='last'>
    <div>
        <p className='tag'>О компании</p>
        <p className='sometext'>Lorem ipsum dolor sit amet,<br/> 
        consectetur adipiscing elit ut aliquam, <br/>
        purus sit amet luctus venenatis, lectus <br/>
        magna fringilla urna, porttitor rhoncus <br/>
        dolor purus non enim</p>
    </div>
    <div>
        <p className="tag">Информация</p>
        <p className="sometext">Услуги</p>
        <p className="sometext">О нас</p>
        <p className="sometext">Контакты</p>
        <p className="sometext">Портфолио</p>
        <p className="sometext">Производство</p>
    </div>
    <div>
        <p className="tag">Контактная информация</p>
        <p className="sometext">Бишкек, ул. Калык Акиева 66, <br/>
            ТЦ Весна, 3 этаж, офис №37
        </p>
        <p className="sometext">+996 (0553) 577-575</p>
        <p className="sometext">Email@gmail.com</p>
    </div>
    <div>
        <p className="tag">Мы в социальных сетях</p>
        <p className="sometext">Instagram</p>
        <p className="sometext">Facebook</p>
    </div>
        </div>
    )
}