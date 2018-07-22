import React, { Component } from 'react'

class NavBar extends Component {
    render() {
        const breedList = this.props.breedList
        return(
            <div className="nav-bar">
                <div className="breed-list">
                    <select className="select-breed-list">
                        <option>Select one</option>
                        {breedList.map((li) => (
                        <option key={li} value={li}>{li}</option>
                        ))}
                    </select>
                </div>
            </div>
        )

    }
}

export default NavBar