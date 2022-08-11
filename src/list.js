import React, {useState, useEffect} from 'react';
import {useLocation} from "react-router-dom";

//메모장 저장한 제목을 리스트로 저장 후 출력
function List(props){
    console.log(props.title);
    return(
        <div>
            <h1>안녕하세요!</h1>
            전달받은 값 : {props.title}
        </div>
    );
}

export default List;