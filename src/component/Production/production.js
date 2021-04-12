import React from 'react'
import './main.css'

export default function Production() {
    return (
        <div>
        <h2>Производство</h2>
        <div className="blocks">
        <img className="" src="images/d.png" alt=""/>
        <img className="" src="images/f.png" alt=""/>
        <img className="lemon" src="images/h.png" alt=""/>           
        </div>
        <h2>Оборудование</h2>
        <p className='aboutcompany'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor <br/> 
        rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis <br/> 
        enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor <br/> 
        condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, <br/> 
        consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus</p>
        <div className="proizvodstvo3">
        <h5>Печатает около 100 страниц в минуту</h5>
      </div>
        </div>
    )
}
