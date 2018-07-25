import React, { Component } from 'react' 
// import SubBreed from './SubBreed'

class ShowSubBreedPhotos extends Component {

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

    render() {
        return(
            <div>
              sub
              {this.props.showSubBreed}
              {/* <div className="show-breed-name gds-layout__container">
                    <h1 className="show-breed-header gds-text--header-lg -m-b-3">
                        {this.capitalizeFirstLetter(this.props.showBreed)}
                    </h1>
                </div> */}
                
            </div>
        )
    }
}

export default ShowSubBreedPhotos