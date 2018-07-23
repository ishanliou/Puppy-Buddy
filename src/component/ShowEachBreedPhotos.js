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

    componentWillReceiveProps(nextProps) {
        console.log('component will Receive in show each breed photos' , nextProps)
        if (nextProps !== this.props.showBreed) {
            axios.get(`https://dog.ceo/api/breed/${nextProps.showBreed}/images`)
            .then(res => {
                console.log("Will Receive photos",res.data.message)
                this.setState({
                    photo_list: res.data.message
                })
            })
        }      
    }    

    render() {
        return(
            <div>
                <div>{this.props.showBreed}</div>
                <div className="gds-flex-grid__container">
                    <div className="gds-flex-grid__row">
                        {this.state.photo_list.map( (i, index) => (
                            <div className="gds-flex-grid__item gds-flex-grid__item--desktop-4 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 -m-b-3" key={index}>
                                <div className="gds-card gds-flex-grid__item--full-height">
                                    <div className="gds-card__img-container">
                                        <img className="gds-card__img" src={i}  alt={this.props.showBreed}/>
                                        <div className="gds-card__img-helper"></div>
                                    </div>
                                </div>
                            </div>   
                        ))}
                             
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowEachBreedPhotos