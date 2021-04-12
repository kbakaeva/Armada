import React from 'react'
import './about.css'

export default function About() {
    return (
        <div>
        <div className='page'>
            <img className = 'mainpicture' src='images/толпа.png'/>
        </div>
        <div className='page'>
            <h2>О компании</h2>
            <p className='aboutcompany'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor <br/>
            rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim <br/>
            lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa</p>
        </div>
        <div className='page'>
            <h2>Чем мы занимаемся?</h2>
        </div>
        <div className="cards">
        <div className="card">
            <img src="images/1.png" alt=""/>
            <h3>Конструкция <br/> под ключ</h3>
            </div>

            <div className="card">
                <img src="images/2.png" alt=""/>
                <h3>Вывески, <br/> объемные буквы</h3>
            </div>

            <div className="card">
                <img src="images/3.png" alt=""/>
                <h3>Визитки, буклеты <br/>полиграфия</h3>
            </div>

            <div className="card">
                <img src="images/4.png" alt=""/>
                <h3>Банеры, самоклейка, <br/>
                    монтажная установка </h3>
            </div>
        </div>
        <div className='page'>
            
            <img className='bgpicture' src='images/field.png'/>
            <h2 className='ourhistiry'>Наша история</h2>
            <div className='years'>
                <div className='year'>
                    <img className='circle' src='images/Ellipse 1.png'/>
                    <h4>2015</h4>
                    <p className='history'>Lorem ipsum dolor sit <br/>
                    amet, consectetur <br/>
                    adipiscing elit ut aliquam, <br/>
                    purus sit</p>
                </div>
                <div className='year'>
                    <img className='circle' src='images/Ellipse 1.png'/>
                    <h4>2016</h4>
                    <p className='history'>Lorem ipsum dolor sit <br/>
                    amet, consectetur <br/>
                    adipiscing elit ut aliquam, <br/>
                    purus sit</p>
                </div>
                <div className='year'>
                    <img className='circle' src='images/Ellipse 1.png'/>
                    <h4>2017</h4>
                    <p className='history'>Lorem ipsum dolor sit <br/>
                    amet, consectetur <br/>
                    adipiscing elit ut aliquam, <br/>
                    purus sit</p>
                </div>
                <div className='year'>
                    <img className='circle' src='images/Ellipse 1.png'/>
                    <h4>2018</h4>
                    <p className='history'>Lorem ipsum dolor sit <br/>
                    amet, consectetur <br/>
                    adipiscing elit ut aliquam, <br/>
                    purus sit</p>
                </div>
                <div className='year'>
                    <img className='circle' src='images/Ellipse 1.png'/>
                    <h4>2019</h4>
                    <p className='history'>Lorem ipsum dolor sit <br/>
                    amet, consectetur <br/>
                    adipiscing elit ut aliquam, <br/>
                    purus sit</p>
                </div>
                <div className='year'>
                    <img className='circle' src='images/Ellipse 1.png'/>
                    <h4>2020</h4>
                    <p className='history'>Lorem ipsum dolor sit <br/>
                    amet, consectetur <br/>
                    adipiscing elit ut aliquam, <br/>
                    purus sit</p>
                </div>
            </div>
        </div>

        <div className='page'>
            <h2 className='prosperities'>Наши преимущества</h2>
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
            <h2>Наши клиенты</h2>
            <div className='clients'>
                <img className="" src="images/Group.png" alt=""/>
                <img className="" src="images/Group.png" alt=""/>
                <img className="" src="images/Group.png" alt=""/>
                <img className="" src="images/Group.png" alt=""/>
                <img className="" src="images/Group.png" alt=""/>
                <img className="" src="images/Group.png" alt=""/>
            </div>
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
