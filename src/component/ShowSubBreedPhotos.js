import React, { Component } from 'react' 
// import SubBreed from './SubBreed'

class ShowSubBreedPhotos extends Component {

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

    render() {
        return(
            <div>
              sub:
              {this.props.showSubBreed}
              
            </div>
        )
    }
}

export default ShowSubBreedPhotos