import React from 'react'
import './contacts.css'


export default function Contacts() {
    return (
        <div className='sides'>
           <div>
           <h2>Контакты</h2>
           <div className='side'>
               <div>
                <img className='contactsicon' src='images/Clock.png'/>
               </div>
               <div>
                <h3>Режим работы</h3>
                <p className='contact'>c 10:00 до 20:00</p>
                <p className='contact'>Сб, Вс - выходной.</p>
               </div>
           </div>
           <div className='side'>
               <div>
                <img className='contactsicon' src='images/Phone.png'/>
               </div>
               <div>
                <h3>Телефон</h3>
                <p className='contact'>+996 (0553) 577-575, +996 (0773) 577-575</p>
               </div>
           </div>
           <div className='side'>
               <div>
                <img className='contactsicon' src='images/Location1.png'/>
               </div>
               <div>
                <h3>Адрес</h3>
                <p className='contact'>Lorem ipsum dolor sit amet, consectetur <br/>
                adipiscing elit ut aliquam</p>
               </div>
           </div>

           </div> 
            <div>
                <img className='map' src='images/Map.png'/>
            </div>
        </div>
    )
}
