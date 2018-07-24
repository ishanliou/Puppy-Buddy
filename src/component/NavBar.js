import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../src/logo.svg'

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
        // if (this.state.dropdown === false){
        //     document.getElementById('breed-dropdown-btn').classList.add('gds-button-dropdown--active')
        //     this.setState({
        //         dropdown: true
        //     })
        // } else {
        //     document.getElementById('breed-dropdown-btn').classList.remove('gds-button-dropdown--active')
        //     this.setState({
        //         dropdown: false
        //     })
        // }
        this.setState({
          dropdown: !this.state.dropdown
        })
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        const breedList = this.props.breedList
        const { dropdown } = this.state
        return(
            <div className="nav-bar -z-1">
                <div className="nav-container gds-layout__container">
                    <div id="dog-logo">
                        <Link to="/">
                            <div id="dog-icon"><img src={logo} alt="logo"/></div>
                            <div id="dog-title">Puppy Buddy</div>
                        </Link>
                    </div>
                    <div
                      id="breed-dropdown-btn"
                      data-gds-dropdown onClick={this.toggleDropDown.bind(this)}
                      className={`gds-button-dropdown ${dropdown ? "gds-button-dropdown--active" : ""}`}
                    >
                        <button type="button" className="gds-button-dropdown__button gds-button--primary" data-gds-dropdown-button>Select Breed</button>
                        <ul className="gds-button-dropdown__menu">
                            {breedList.map( (breedList) => (
                                <Link to={`/breed/${breedList}`} key={breedList}>
                                    <li className="gds-button-dropdown__menu-item"  value={breedList}>{this.capitalizeFirstLetter(breedList)}</li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )

    }
}

export default NavBar