import * as api from '../../api/index';
import {FETCH_ALL} from '../../constants/actionTypes'


export const getPosts = () => async (dispatch) => {
    try {
      const { data } = await api.fetchPosts();
  
      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const createPost = (post) => async(dispatch) =>{
    try {
      const {data} = await api.createPost();
      dispatch({ type:'CREATE', payload: data})
    } catch (error) {
      console.log(error)
    }
  }