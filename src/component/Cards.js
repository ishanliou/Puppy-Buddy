import React, { Component } from 'react'

class Cards extends Component {
    render() {
        const breedList= this.props.breedList
        console.log( breedList)
        return(
            <div>
                <div className="gds-flex-grid__container">
                    <div className="gds-flex-grid__row">
                        {breedList.map((breedname) => (
                            <div className="gds-flex-grid__item gds-flex-grid__item--desktop-4 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 -m-b-3">
                                <div className="gds-card gds-flex-grid__item--full-height">
                                    <div className="gds-card__block -p-a-3">
                                        <p>{breedname}</p>
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