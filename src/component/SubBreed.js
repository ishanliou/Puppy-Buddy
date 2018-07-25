import React, { Component } from 'react'
import axios from 'axios'

class SubBreed extends Component {

    state = {
        subbreedList: [],
        showSubBreedPhotos: []
    }

    componentWillReceiveProps(nextProps) {
        console.log('component will Receive subBreed' , nextProps)
        if (nextProps !== this.props.subbreed) {
            axios.get(`https://dog.ceo/api/breed/${nextProps.subbreed}/list`)
            .then(res => {
                console.log("SubBreed",res.data.message)
                this.setState({
                    subbreedList: res.data.message
                })
            })
        }      
    } 

    filterSubBreed(e){
      console.log('clicled', e.target.dataset.value)
      
    }

    render() {
        return(
        <div className="gds-layout__container -m-b-6">
          <div> 
            {this.state.subbreedList.map( (subbreed , index) => (
              <button type="button" className="gds-button -m-r-3 -m-b-3 gds-button--md gds-button--default gds-button--block-md -m-r-1 -m-b-1" data-feedback="Default clicked"
               key={index} onClick={this.filterSubBreed.bind(this)} data-value={subbreed}>
              {subbreed}
              </button>
            ))}
          </div>
        </div>
        )
    }
}

export default SubBreed