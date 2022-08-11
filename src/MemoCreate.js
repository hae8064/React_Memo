import React, {useState} from "react";
import {useNavigate, Link} from "react-router-dom";

function MemoCreate(){
    console.log("ㅎㅇㅎㅇ");
    const [inputs, setInputs] = useState({
      title: "",
      textValue: ""
    });
  
    const {title, textValue} = inputs;
  
    //저장 버튼
    const onSave = (inputs) => {
      //페이지 이동 후 메모 리스트에서 제목만 보이게 나열
      // <BrowserRouter>
        // <Routes>
        //   <Route path="./list" component={<List/>} value={title}/>
        // </Routes>
      // </BrowserRouter>
      
      // <BrowserRouter>
      //   <Routes>
      //     <Route path="/list" element={<List />}></Route>
      //   </Routes>
      // </BrowserRouter>
      // document.location.href("./list.js");
      console.log("페이지 이동");
    }
  
    //초기화 버튼
    const onReset = (e) => {
      setInputs({
        title:"",
        textValue:'',
      });
    };
    
    const onChange = (e) => {
      const {value, name} = e.target;
  
      setInputs({
        ...inputs,
        [name]:value
      });
      console.log(inputs);
    };
  
    return(
      <div>
          <div className = "title">
            <input name="title" value={title} onChange={onChange} placeholder="제목"/>
          </div>
  
        <div className= 'body'>
          <textarea name="textValue" cols="50" rows="10" placeholder='내용' onChange={onChange} value={textValue}></textarea>
        </div>
  
        <div className='last'>
  
        </div>
  
        <br/>
  
        {/* <Link to="/list" state={{title:"dsadsa"}}><button onClick={onSave}>저장</button></Link> */}
        <Link to={{pathname: "/list", state:{title:{title}}}}><button onClick={onSave}>저장</button></Link>
        <button onClick={onReset}>초기화</button>
      </div>
      
    )
  }

export default MemoCreate;