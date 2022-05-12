
import React from 'react';

// global styles
import './globalCss/App.css';


// import Container Components from the index file inside the main container folder 
import {Blog, Features, Footer, Header, Possibility, WhatGpt3} from './containers'

// import Main Components from Components Folder
import {Cta, Navbar, Brand} from './components'



// the app component
const App = () => {
  return (
   <div className="app">
     <div className="gradient__bg">
       <Navbar />
       <Header />
     </div>

     <Brand />
     <WhatGpt3 />
     <Features />
     <Possibility />
     <Cta />
     <Blog />
     <Footer />

   </div>
  )
}

export default App
