import { useState } from 'react'
import './App.css'
import HomePage from '../pages/HomePage'
import About from '../pages/About'
import CotactUs from '../pages/CotactUs'
import Media from '../pages/Media'
import QuestionsAnswers from '../pages/QuestionsAnswers'
import ThenkYou from '../pages/ThenkYou'
import ZooSearch from '../pages/ZooSearch'
import { Route, Routes, BrowserRouter } from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='' element={<HomePage />} />
          <Route path='/About' element={<About />} />
          <Route path='/CotactUs' element={<CotactUs />} />
          <Route path='/Media' element={<Media />} />
          <Route path='/QuestionsAnswers' element={<QuestionsAnswers />} />
          <Route path='/ThenkYou' element={<ThenkYou />} />
          <Route path='/ZooSearch' element={<ZooSearch />} />


        </Routes>
      </BrowserRouter>

    </div>


  )
}

export default App
