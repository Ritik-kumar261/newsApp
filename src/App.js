
import './App.css';

import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pageSize = 15;
  apiKey=process.env.REACT_APP_NEWS_API
  state ={
    progress: 0
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navbar/>
        <LoadingBar
        height={4}
        color='#f11946'
        progress={this.state.progress}
        
        />
        <Routes>
          <Route exact path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" title="Mytitle" description="" pageSize={this.pageSize} category="general"/>}/>
          <Route exact path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="buisness" title="Mytitle" description="" pageSize={this.pageSize} category="business"/>}/>
          <Route exact path='/general' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" title="Mytitle" description="" pageSize={this.pageSize} category="general"/>}/>
          <Route exact path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" title="Mytitle" description="" pageSize={this.pageSize} category="health"/>}/>
          <Route exact path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" title="Mytitle" description="" pageSize={this.pageSize} category="science"/>}/>
          <Route exact path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" title="Mytitle" description="" pageSize={this.pageSize} category="sports"/>}/>
          <Route exact path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology"  title="Mytitle" description="" pageSize={this.pageSize} category="technology"/>}/>
          <Route exact path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment"  title="Mytitle" description="" pageSize={this.pageSize} category="entertainment"/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    )
  }
}
