import React from 'react'
import './home.css'

export default function Home() {
    return (
        <div className = 'mainPart'>
  <div className='page'>
      <img className='main' src='images/ФОН.png'/>
      <div className='bg'></div>
      <div className='content'>
        <div className="leftside">
            <h1>Наружная  реклама <br/>в Бишкеке </h1>
            <div className="spin"></div>
            <p>Произдводство наружной рекламы <br/>и создание проектов под ключ</p>
            <button className="lid">Оставить заявку</button>
        </div>

        <div className="rightside">
            <img className="icon" src="images/Vector.png" alt=""/>
            <img className="icon" src="images/instagram-sketched.png" alt=""/>
            <img className="icon" src="images/facebook (2) 1.png" alt=""/>
        </div>
      </div>
  </div>
  <div className='page'>
    <h2>Наши услуги</h2>
    <div className="cards">
        <div className="card">
            <img src="images/1.png" alt=""/>
            <h3>Конструкция <br/> под ключ</h3>
            <p className="description">Хотите узнать подробность, <br/>
                    телефон для связи:</p>
            <p className="tel">+996 (0553) 577-575</p>
            </div>

            <div className="card">
                <img src="images/2.png" alt=""/>
                <h3>Вывески, <br/> объемные буквы</h3>
                <p className="description">Хотите узнать подробность, <br/>
                    телефон для связи:</p>
                <p className="tel">+996 (0553) 577-575</p>
            </div>

            <div className="card">
                <img src="images/3.png" alt=""/>
                <h3>Визитки, буклеты <br/>полиграфия</h3>
                <p className="description">Хотите узнать подробность, <br/>
                    телефон для связи:</p>
                <p className="tel">+996 (0553) 577-575</p>
            </div>

            <div className="card">
                <img src="images/4.png" alt=""/>
                <h3>Банеры, самоклейка, <br/>
                    монтажная установка </h3>
                <p className="description">Хотите узнать подробность, <br/>
                    телефон для связи:</p>
                <p className="tel">+996 (0553) 577-575</p>
            </div>
        </div>
  </div>
  <div className='page'>
    <h2>Наши работы</h2>
    <div className='blocks'>
        <div className="block">
            <div className="blockpic">
                <img className="" src="images/Rectangle 78.png" alt=""/>
                <div className="bg1"></div>
            </div>
            <p className="blocksname">Работа на Манаса <br/>Работа на Манаса</p>
        </div>
        
        <div className="block">
            <div className="blockpic">
                    <img className="" src="images/Rectangle 79.png" alt=""/>
                    <div className="bg1"></div>
                </div>
                <p className="blocksname">Работа на Манаса</p>
        </div>

        <div className="block">
            <div className="blockpic">
                <img className="" src="images/Rectangle 80.png" alt=""/>
                <div className="bg1"></div>
            </div>
            <p className="blocksname">Работа на Манаса</p>
        </div>

        <div className="block">
            <div className="blockpic">
                <img className="" src="images/Rectangle 81.png" alt=""/>
                <div className="bg1"></div>
            </div>
            <p className="blocksname">Работа на Манаса</p>
        </div>

        <div className="block">
            <div className="blockpic">
                <img className="" src="images/Rectangle 82.png" alt=""/>
                <div className="bg1"></div>
            </div>
            <p className="blocksname">Работа на Манаса</p>
        </div>

        <div className="block">
            <div className="blockpic">
                <img className="" src="images/Rectangle 83.png" alt=""/>
                <div className="bg1"></div>
            </div>
            <p className="blocksname">Работа на Манаса</p>
        </div>
    </div>
    <div className="port"><button className="portfolio">Все работы</button></div>
  </div>

  <div className='page'>
    <h2>Производство</h2>
    <div className="blocks">
        <img className="" src="images/Rectangle 84.png" alt=""/>
        <img className="" src="images/Rectangle 85.png" alt=""/>
        <img className="" src="images/Rectangle 86.png" alt=""/>           
    </div>
  </div>

  <div className='page'>
    <h2>Наш прайс</h2>
    <div className='photoes'>
        <div className="photo">
                <img className="photo" src="images/Rectangle 119.png" alt=""/>
                <p className="info">Фасадная вывеска (подсветка <br/>внутреняя, железный короб, флекс)</p>
                <p className="price">1990 сом</p>
        </div>

        <div className="photo">
                <img className="photo" src="images/Rectangle 114.png" alt=""/>
                <p className="info">Фасадная вывеска (подсветка <br/>внутреняя, железный короб, флекс)</p>
                <p className="price">1990 сом</p>
        </div>

        <div className="photo">
                <img className="photo" src="images/Rectangle 115.png" alt=""/>
                <p className="info">Фасадная вывеска (подсветка <br/>внутреняя, железный короб, флекс)</p>
                <p className="price">1990 сом</p>
        </div>

        <div className="photo">
                <img className="photo" src="images/Rectangle 117.png" alt=""/>
                <p className="info">Фасадная вывеска (подсветка <br/>внутреняя, железный короб, флекс)</p>
                <p className="price">1990 сом</p>
        </div>

        <div className="photo">
                <img className="photo" src="images/Rectangle 119.png" alt=""/>
                <p className="info">Фасадная вывеска (подсветка <br/>внутреняя, железный короб, флекс)</p>
                <p className="price">1990 сом</p>
        </div>

        <div className="photo">
                <img className="photo" src="images/Rectangle 114.png" alt=""/>
                <p className="info">Фасадная вывеска (подсветка <br/>внутреняя, железный короб, флекс)</p>
                <p className="price">1990 сом</p>
        </div>

        <div className="photo">
                <img className="photo" src="images/Rectangle 115.png" alt=""/>
                <p className="info">Фасадная вывеска (подсветка <br/>внутреняя, железный короб, флекс)</p>
                <p className="price">1990 сом</p>
        </div>

        <div className="photo">
                <img className="photo" src="images/Rectangle 117.png" alt=""/>
                <p className="info">Фасадная вывеска (подсветка <br/>внутреняя, железный короб, флекс)</p>
                <p className="price">1990 сом</p>
        </div>
    </div>
    <div className="port"><button className="portfolio">Скачать прайс</button></div>
  </div>

  <div className='page'>
    <h2>Наши клиенты</h2>
    <div className='clients'>
        <img className="" src="images/Group.png" alt=""/>
        <img className="" src="images/Group.png" alt=""/>
        <img className="" src="images/Group.png" alt=""/>
        <img className="" src="images/Group.png" alt=""/>
        <img className="" src="images/Group.png" alt=""/>
        <img className="" src="images/Group.png" alt=""/>
    </div>
  </div>

  <div className='page'>
    <h2>Наша команда</h2>
    <div className='blocks'>
        <div className="block">
                <img className="photo" src="images/Rectangle 122.png" alt=""/>
                <p className="person">Юля</p>
                <p className="position">Соучредитель</p>
            </div>

            <div className="block">
                <img className="photo" src="images/Rectangle 120.png" alt=""/>
                <p className="person">Анна</p>
                <p className="position">Дизайнер</p>
            </div>

            <div className="block">
                <img className="photo" src="images/Rectangle 121.png" alt=""/>
                <p className="person">Андрей</p>
                <p className="position">Соучредитель</p>
            </div>
        </div>
  </div>

  <div className='page'>
    <h4>Оставьте бесплатную заявку</h4>
    <h5>и менеджер по работе с клиентами свяжется с вами и проконсультирует</h5>
        <div className="form">
            <div className="container">
                <input type="text" value="Ваше имя"/></div>
            <div className="container">
                <input type="tel" value="Ваш телефон"/></div>

            <button className="portfolio">Отправить</button>
  </div>
  </div>
  </div>
    )
}  