import React from 'react'
import logo from '../../src/logo.svg'

const Footer = () => {
  return(
    <div className="footer">
       

    <div className="gds-flex gds-flex--justify-start gds-layout__container">
      <div className="decorate decorate--all gds-flex__item gds-flex__item--grow-0 -m-r-3 -m-t-1 -m-l-3">
        <img src={logo} style={{width:"36px"}} alt="logo"/>          
      </div>
      <div className="decorate decorate--all gds-flex__item gds-flex__item--grow-0 -m-r-2 -p-t-1">
        <img src={`fb_logo.svg`} style={{width:"30px"}}/>
      </div>
      <div className="decorate decorate--all gds-flex__item gds-flex__item--grow-0">
        <img src={`IG_logo.png`} style={{width:"40px"}}/>
      </div>
      <div className="decorate decorate--all gds-flex__item gds-flex__item--grow-0 -m-r-1">
        <img src={`Twitter_logo.svg`} style={{width:"36px"}}/>
      </div>
      <div class="decorate decorate--all gds-flex__item gds-flex__item--grow-0 -m-t-2"><span class="gds-badge gds-badge--empty"></span></div>
      <div class="decorate decorate--all gds-flex__item gds-flex__item--grow-0 -m-t-2"><span class="gds-badge gds-badge--empty gds-badge--success"></span></div>
      <div class="decorate decorate--all gds-flex__item gds-flex__item--grow-0 -m-t-2"><span class="gds-badge gds-badge--empty gds-badge--warning"></span></div>
      <div class="decorate decorate--all gds-flex__item gds-flex__item--grow-0 -m-t-2"><span class="gds-badge gds-badge--empty gds-badge--danger"></span></div>
      <div class="decorate decorate--all gds-flex__item gds-flex__item--grow-0 -m-t-2"><span class="gds-badge gds-badge--empty gds-badge--info"></span></div>

    </div>


<div class="gds-flex gds-flex--justify-end">
</div>


</div>
    
  )
}
export default Footer