import React, { Component } from 'react'
import NavBar from './component/NavBar'
import Intro from './component/Intro'
import Cards from './component/Cards'
import DisplayEachBreed from './component/DisplayEachBreed'

import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import './App.css'

class App extends Component {
  state ={
    breedList: [],
    breedThumbs: []
  }

  componentDidMount() {
    axios.get(`https://dog.ceo/api/breeds/list/all`)
    .then(res => {
      // console.log('all breed', res.data.message)
      this.setState({
        breedList: Object.keys(res.data.message) // get all breeds list
      })
      this.getBreedThumb()
    })
  }

  getBreedThumb() {
    this.state.breedList.map((breedpoto) => (
      axios.get(`https://dog.ceo/api/breed/${breedpoto}/images`)
        .then(res => {
          this.setState({
            breedThumbs: [res.data.message[0], ...this.state.breedThumbs] //return an array and add to an array
          })
        })
    ))
  }

  render() {
    return (
      <div className="App">
        <NavBar breedList={this.state.breedList}/>
        <Route exact path="/" render={() =>{
          return(
            <div>
              <Intro />
              <Cards  breedList={this.state.breedList}
                      breedThumbs={this.state.breedThumbs}/>
            </div>
          )}} 
        />
        <Route path="/breed/:id" render={(route)=> {
          console.log('route', route)
          return (
            <DisplayEachBreed showBreed={route.match.params.id}/>
          )
        }}/>
      </div>
    );
  }
}

export default App
