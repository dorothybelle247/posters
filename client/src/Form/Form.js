import React, { useState } from "react";
import "./styles.css";
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../redux/actions/posts";

const Forms = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: ""
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };
  const clear = () => {};
  return (
    <div>
    <form onSubmit={handleSubmit}>      
  <input name="name" type="text" class="feedback-input" placeholder="name" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/>   
  <input name="name" type="text" class="feedback-input" placeholder="title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>

  <textarea name="text" class="feedback-input" placeholder="Comment" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}></textarea>


  <input name="name" type="text" class="feedback-input" placeholder="tags" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })}/>

  <input type="submit" value="SUBMIT"/>
  
  <input type="submit" value="CANCEL" onSubmit={clear}/>
  
</form>
{/* <input>
      <div class="custom-file">
                <input type="file" class="custom-file-input" id="customFile" />
                <FileBase64
                  class="custom-file-label"
                  for="customFile"
                  multiple={true}
                  onDone={({ base64 }) =>
                    setPostData({ ...postData, selectedFile: base64 })
                  }
                >
                  Choose file
                </FileBase64>
                </div>
                </input> */}
              
 
  
</div>
  );
};

export default Forms;
