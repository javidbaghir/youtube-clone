import React, { useState } from 'react'
import "./home.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'

const Home = ({menu}) => {

  const [category, setCategory] = useState(0);
  return (
    <div>
      <Sidebar menu={menu} category={category} setCategory={setCategory} />
      <div className={`container ${menu ? 'large-container' : ''} `}>
        <Feed category={category}/>
      </div>
    </div>
  )
}

export default Home