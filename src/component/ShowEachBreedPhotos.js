import React, { Component} from 'react'
import axios from 'axios'

class ShowEachBreedPhotos extends Component {

    state ={
        photo_list: []
    }

    componentDidMount() {
        console.log('component did mount in show each breed photos')
        const breedPhotosURL = `https://dog.ceo/api/breed/${this.props.showBreed}/images`
        axios.get(breedPhotosURL)
        .then(res => {
            console.log("photos",res.data.message)
            this.setState({
                photo_list: res.data.message
            })
        })
    }

    render() {
        
        return(
            <div>
                Show:{this.props.showBreed}
                Photo: {this.state.photo_list.map( (i, id) =>
                    <img src={i} key={id}/>
                )}
            </div>
        )
    }
}

export default ShowEachBreedPhotos