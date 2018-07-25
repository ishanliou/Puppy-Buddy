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
        <div>
          <ul> 
            {this.state.subbreedList.map( (subbreed , index) => (
              <li key={index} onClick={this.filterSubBreed.bind(this)} data-value={subbreed}>
              {subbreed}
              </li>
            ))}
          </ul>
        </div>
        )
    }
}

export default SubBreed