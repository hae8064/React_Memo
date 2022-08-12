import React, {useState, useEffect} from 'react';
import {useLocation, Link} from "react-router-dom";
import Home from './Home';

//메모장 저장한 제목을 리스트로 저장 후 출력
function List(props){
    const location = useLocation();

    //저장한 메모장 제목을 받아오기
    // const title = [];

    //props 값 title 내용 전달 받기 위한
    const [prev, setPrev] = useState("");
    const [title, setTitle] = useState([]);

    useEffect(() => {
        // setPrev(location.state.title.inputs.title);
        // setTitle(prevList => [...prevList, prev]);
        setTitle([title.concat(location.state.title.inputs.title)]);
        // setTitle([location.state.title.inputs.title, ...title]);
    },[]);

    console.log(prev);
    console.log(title);
    console.log(`제목은 : ${location.state.title.inputs.title}`);

    return(
        <div>
            <h1>메모 목록</h1>
            {/* 전달받은 값 : {title[0]} */}
            전달받은 값: {title.map((name, index) => {
                return <h2 key={index}>{name}</h2>
            })}

            <br/>
            <Link to="/"><button>Home</button></Link>
        </div>
    );
}

export default List;