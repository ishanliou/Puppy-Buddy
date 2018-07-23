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
                <div className="gds-flex-grid__container">
                    <div className="gds-flex-grid__row">
                        {this.state.photo_list.map( (i, index) => (
                            <div className="gds-flex-grid__item gds-flex-grid__item--desktop-4 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 -m-b-3">
                                <div className="gds-card gds-flex-grid__item--full-height">
                                    <div className="gds-card__img-container">
                                        <img className="gds-card__img" src={i} key={index}/>
                                        <div className="gds-card__img-helper"></div>
                                    </div>
                                </div>
                            </div>   
                        ))}
                             
                    </div>
                </div>
            

                {/* Photo: {this.state.photo_list.map( (i, id) =>
                    <img src={i} key={id}/>
                )} */}
            </div>
        )
    }
}

export default ShowEachBreedPhotos