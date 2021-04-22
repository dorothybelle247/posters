import React, {useEffect} from 'react'
import './App.css';

import { useDispatch } from 'react-redux'

import {getPosts} from './redux/actions/posts';
import Post from './Posts/Post/Post.js';
import Navbar from './components/Navbar.js'
import Forms from './Form/Form.js';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getPosts());
  }, [dispatch])

  return(
    <div>
    <Navbar />
    <Forms></Forms>
      <h1>
        hello world
      </h1>
      <Post/>
      <Post/>
      <Post/>
     
    
    </div>
  )
}

export default App;
