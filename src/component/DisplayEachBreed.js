import React, { Component} from 'react'

class DisplayEachBreed extends Component {
    render() {
        return(
            <div>
                Show:{this.props.showBreed}
            </div>
        )
    }
}

export default DisplayEachBreed