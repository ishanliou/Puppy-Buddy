import React, { Component } from 'react'
import axios from 'axios'

class SubBreed extends Component {

    state = {
        subbreedList: []
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
    render() {
        return(
        <div>Sub-Breed: {this.state.subbreedList.map( (i) => (
            <li>{i}</li>
        ))}</div>
        )
    }
}

export default SubBreed