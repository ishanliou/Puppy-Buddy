import React, { Component } from 'react' 
import axios from 'axios'

class ShowSubBreedPhotos extends Component {

  state = {
    selectedBreedPhotoList: []
  }

  componentDidMount() {
    console.log('get selected breed photolist')
    
    axios.get(`https://dog.ceo/api/breed/${this.props.getSelectedBreed}/images`)
        .then(res => {
            // console.log("get selected breed photolist",res.data.message)
            this.setState({
              selectedBreedPhotoList: res.data.message
            })
        })
}

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

    render() {
      const { selectedBreedPhotoList } = this.state
      const  selectedSubBreed  =`${this.props.getSelectedBreed}-${this.props.showSubBreed}`
      const filtered = selectedBreedPhotoList.filter(e =>
        e.includes(selectedSubBreed))
      console.log('filtered', filtered)
      // console.log('showSubBreed', showSubBreed)
      // console.log('selectedBreedPhotoList', selectedBreedPhotoList)
        return(  
            <div>
              <div className="show-breed-name gds-layout__container">
                <h1 className="show-breed-header gds-text--header-lg -m-b-3">
                  {this.capitalizeFirstLetter(this.props.getSelectedBreed)} 
                </h1>
              </div>
              <div>
                <h4 className="gds-text--body-md -m-b-6"> 
                  Sub-breed: {this.props.showSubBreed}
                </h4>
              </div>
              <div className="-z-0">
                    <div className="gds-flex-grid__container gds-layout__container">
                        <div className="gds-flex-grid__row">
                            {filtered.length > 0 ? filtered.map((photo, index) => (
                                <div className="gds-flex-grid__item gds-flex-grid__item--desktop-4 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 -m-b-3" key={index}>
                                    <div className="gds-card-no-bottom gds-card gds-flex-grid__item--full-height">
                                        <div className="gds-card__img-container">
                                            <img className="gds-card__img" src={photo}  alt={this.props.showSubBreed}/>
                                            <div className="gds-card__img-helper"></div>
                                        </div>
                                    </div>
                                </div>   
                            )): <div className="gds-loading">
                                  <div className="gds-loading__dot"></div>
                                </div>
                            }                                
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowSubBreedPhotos