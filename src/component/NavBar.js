import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {

    state = {
        dropdown: []
    }

    componentDidMount() {
        this.setState({
            dropdown: false
        })
    }

    toggleDropDown(){
        if (this.state.dropdown === false){
            document.getElementById('breed-dropdown-btn').classList.add('gds-button-dropdown--active')
            this.setState({
                dropdown: true
            })
        } else {
            document.getElementById('breed-dropdown-btn').classList.remove('gds-button-dropdown--active')
            this.setState({
                dropdown: false
            })
        }
    }

    render() {
        const breedList = this.props.breedList
        return(
            <div className="nav-bar">
                <div id="logo">Puppy Buddy</div>
                <div id="breed-dropdown-btn" className="gds-button-dropdown " data-gds-dropdown onClick={this.toggleDropDown.bind(this)}>
                    <button type="button" className="gds-button-dropdown__button gds-button--primary" data-gds-dropdown-button>Select Breed</button>
                    <ul className="gds-button-dropdown__menu">
                        {breedList.map( (i) => (
                            <Link to={`/breed/${i}`} key={i}>
                                <li className="gds-button-dropdown__menu-item"  value={i}>{i}</li>
                            </Link>
                        ))}
                    </ul>
                   
                </div>
            </div>
        )

    }
}

export default NavBar