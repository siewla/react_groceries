import React, { Component } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import FooterPage from './components/FooterPage'


export class App extends Component {
  constructor (props){
    super(props)
    this.state ={
    }
  }
  render() {
    return (
      <div>
        <Header />
        <Content />
        <FooterPage />
      </div>
    )
  }
}

export default App


