import React, { Component } from 'react'
import NavBar from './component/NavBar'
import Intro from './component/Intro'
import Cards from './component/Cards'
import ShowEachBreedPhotos from './component/ShowEachBreedPhotos'

import { Route } from 'react-router-dom'
import axios from 'axios'
import './App.css'

class App extends Component {
  state ={
    breedList: [],
    breedThumbs: [],
    breedPhotos: [],
    updateBreed: []
  }

  componentDidMount() {

    console.log('path', window.location.pathname)

    console.log('compinent did mount')
    axios.get(`https://dog.ceo/api/breeds/list/all`)
    .then(res => {
      // console.log('all breed', res.data.message)
      this.setState({
        breedList: Object.keys(res.data.message) // get all breeds list
      })
      if( window.location.pathname === '/'){
        this.getBreedThumb()
      }
      
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
          //console.log('route', route)
          console.log('route id: ', route.match.params.id)
          return (
            <ShowEachBreedPhotos 
              showBreed={route.match.params.id}
              breedPhotos={this.state.breedPhotos}
            //getPhotos= {this.getPhotos}
            />
          )
        }}/>
      </div>
    );
  }
}

export default App
