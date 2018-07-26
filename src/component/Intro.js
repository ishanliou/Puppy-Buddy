import React from 'react'

const Intro = () => {
  return (
    <div id="intro" className="gds-layout__container">
      <div className="intro-img gds-image -m-b-2">
          <img src={`puppybuddy.png`} alt='intro'style={{width:"300px", heigh:"auto"}} />
      </div>
      <div>
        <p className="gds-text--body-md gds-layout__column--md-6 gds-layout__column--xs-offset-3">
          <span className="gds-text--bold">Puppy Buddy</span> is a photo collection of 86 dog breeds
          that you can browse on the website. Also, if there is any sub breeds, you can filter the photos by sub breed. 
        </p> 
      </div>
    </div>

  )
}
export default Intro