import './App.css';
import Post from './Posts/Post/Post.js';
import Form from './Form/Form.js';
import Navbar from './components/Navbar.js'

const App = () => {
  return(
    <div>
    <Navbar>
      <h1>
        hello world
      </h1>
      <Post/>
      <Form />
      </Navbar>
    </div>
  )
}

export default App;
