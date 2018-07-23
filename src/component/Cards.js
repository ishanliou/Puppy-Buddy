import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Cards extends Component {
    render() {
        const breedList= this.props.breedList
        const breedThumbs = this.props.breedThumbs.sort()
        console.log("breedList",breedList)
        console.log(breedThumbs)
        return(
            <div>
                <div className="gds-flex-grid__container">
                    <div className="gds-flex-grid__row">
                        {breedList.map((breedname, id) => (
                            <div id={id} key={id} className="gds-flex-grid__item gds-flex-grid__item--desktop-4 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 -m-b-3">
                                <div className="gds-card gds-flex-grid__item--full-height">
                                    <div className="gds-card__block -p-a-3">
                                        <h4 className="gds-card__title">{breedname}</h4>
                                        <Link to={`/breed/${breedname}`}>
                                            <img className="card-thumbnail" src={breedThumbs[id]} />
                                        </Link>
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

export default Cards