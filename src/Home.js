import React from 'react';
import { Link } from 'react-router-dom';
import MemoCreate from "./App";
import List from "./list";

function Home(){
    return(
        <div className="home">
            <h1>메모장</h1>
            <Link to="/create"><button onClick={MemoCreate}>메모 만들기</button></Link>
            <Link to="list"><button onClick={List}>목록 보기</button></Link>
        </div>
    );
}

export default Home;