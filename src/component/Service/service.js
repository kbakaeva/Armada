import React from 'react'
import './service.css'

export default function Service() {
    return (
        <div>
            <div className='page'>
            <h2>Наши услуги</h2>
        <div class="boxes">
            <div class="upside">
                <div class="square">
                    <div class="line">
                <div class="lil_box">
                <img class="box_pic" src='images/squareman.png' alt=""/>
                <p class="box_name">Монтажная установка</p>
                </div>

                <div class="lil_box">
                <img class="box_pic" src="images/squarefield.png" alt=""/>
                <p class="box_name">Буклеты</p>
                </div>
                    </div>
                    
                    <div class="line">
                <div class="lil_box">
                <img class="box_pic" src="images/squareman.png" alt=""/>
                <p class="box_name">Самоклейка</p>
                </div>
                
                <div class="lil_box">
                <img class="box_pic" src="images/squarefield.png" alt=""/>
                <p class="box_name">Визитки</p>
                </div>
                    </div>
                </div>

                <div class="square">
                    <div class="lil_box">
                    <img class="box_pic" id="cow" src="images/cow.png" alt=""/>
                    <p class="box_name">Банеры</p>
                    </div>
                </div>
            </div>

            <div class="downside">
                <div class="lil_box">
                <img class="box_pic" id="man" src="images/man.png" alt=""/>
                <p class="box_name" >Вывески</p>
                </div>

                <div class="lil_box">
                <img src="images/squarefield.png" alt=""/>
                <p class="box_name">Листовки</p>
                </div>
            </div>
        </div>
            </div>

            <div className='page'>
            <h2>Наши преимущества</h2>
            <div class="cards">

            <div class="card">
                <img src="images/icon.png" alt=""/>
                <p class="description">Оперативность</p>
            </div>

            <div class="card">
                <img src="images/icon1.png" alt=""/>
                <p class="description">Высококвалифицированные<br/>
                    специалисты</p>
            </div>

            <div class="card">
                <img src="images/icon2.png" alt=""/>
                <p class="description">Современное оборудование</p>
            </div>

            <div class="card">
                <img src="images/icon3.png" alt=""/>
                <p class="description">Широкий спектр услуг</p>
            </div>
        </div>
            </div>

            <div className='page'>
            <h4>Оставьте бесплатную заявку</h4>
        <h5>и менеджер по работе с клиентами свяжется с вами и проконсультирует</h5>
        <div className='form'>
                <div class="container">
                <input type="text" value="Ваше имя"/>
                </div>
                
            <div class="container">
                <input type="tel" value="Ваш телефон"/></div>

            <button class="portfolio">Отправить</button>
        </div>
            </div>
        </div>
    )
}