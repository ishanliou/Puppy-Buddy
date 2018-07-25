import React, { Component } from 'react' 
import axios from 'axios'
// import SubBreed from './SubBreed'

class ShowSubBreedPhotos extends Component {

  state = {
    selectedBreedPhotoList: []
  }

  componentDidMount() {
    console.log('get selected breed photolist')
    
    axios.get(`https://dog.ceo/api/breed/${this.props.getSelectedBreed}/images`)
        .then(res => {
            console.log("get selected breed photolist",res.data.message)
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
      const  showSubBreed  =`${this.props.getSelectedBreed}-${this.props.showSubBreed}`
      let filtered 
      selectedBreedPhotoList.filter(e => {
        e.includes(showSubBreed)})
      console.log('filtered', filtered)
      console.log('showSubBreed', showSubBreed)
      console.log('selectedBreedPhotoList', selectedBreedPhotoList)
        return(
          
            <div>
              sub:
              {showSubBreed}

              photo: 
              
           
              
            </div>
        )
    }
}

export default ShowSubBreedPhotos