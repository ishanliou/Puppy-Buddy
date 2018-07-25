import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class SubBreedList extends Component {

    state = {
        subbreedList: [],
        showSubBreedPhotos: []
    }

    componentWillReceiveProps(nextProps) {
        // console.log('component will Receive selectedBreed' , nextProps)
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

    render() {
        return(
        <div className="gds-layout__container -m-b-6">
          <div> 
            {this.state.subbreedList.map( (subbreed , index) => (
							<Link to={`${this.props.currentBreed}/${subbreed}`} key={index}>
                <button type="button" 
                        className="gds-button -m-r-3 -m-b-3 gds-button--md 
                                   gds-button--default gds-button--block-md -m-r-1 -m-b-1"
                >
                  {subbreed}
                </button>
							</Link>
            ))}
          </div>
        </div>
        )
    }
}

export default SubBreedList