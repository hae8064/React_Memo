import React, {useState} from "react";
import {useNavigate, Link} from "react-router-dom";

function MemoCreate(){
    const test2 = "hi bong";

    const [inputs, setInputs] = useState({
        title: "",
        textValue: ""
        });
    
        const {title, textValue} = inputs;
    
        //저장 버튼
        const onSave = (inputs) => {
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
            <Link to={"/list"} state={{title: {inputs}}}><button onClick={onSave}>저장</button></Link>
            <button onClick={onReset}>초기화</button>
        </div>
        
    )
}

export default MemoCreate;