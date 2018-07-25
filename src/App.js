import React, { Component } from 'react'
import NavBar from './component/NavBar'
import Intro from './component/Intro'
import Cards from './component/Cards'
import ShowEachBreedPhotos from './component/ShowEachBreedPhotos'
import ShowSubBreedPhotos from './component/ShowSubBreedPhotos'
import Footer from './component/Footer'

import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import './App.css'

class App extends Component {
  state ={
    breedList: [],
    breedThumbs: [],
    currentBreed: []
  }

  componentDidMount() {
    // console.log('path', window.location.pathname)
    // console.log('compinent did mount')
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
    this.state.breedList.map((breedphoto) => (
      axios.get(`https://dog.ceo/api/breed/${breedphoto}/images`)
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
        <Switch>
          <Route path="/breed/:id/:sub" render={(r) => {
            console.log('Sub-route id: ', r.match.params.sub)
            console.log('hiHI' , r.match.params.id)
            return(
              <ShowSubBreedPhotos showSubBreed={r.match.params.sub}
                                  getSelectedBreed={r.match.params.id}/>
            )
          }}/>
          <Route path="/breed/:id" render={(route)=> {
            //console.log('route', route)
            console.log('route id: ', route.match.params.id)
            console.log('history' , route.history.location.pathname)
            return (
                <ShowEachBreedPhotos showBreed={route.match.params.id} 
                                     currentBreed={route.history.location.pathname}/>                
            )}}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App
