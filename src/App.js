import React, { Component } from 'react'
import NavBar from './component/NavBar'
import Intro from './component/Intro'
import axios from 'axios'
import './App.css'

class App extends Component {
  state ={
    breedList: []
  }

  componentDidMount() {
    axios.get(`https://dog.ceo/api/breeds/list/all`)
    .then(res => {
      console.log('all breed', res.data.message)
      this.setState({
        breedList: Object.keys(res.data.message) // get all breeds list
      })
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar breedList={this.state.breedList}/>
        <Intro />
      </div>
    );
  }
}

export default App
