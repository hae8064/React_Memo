import React, { useState } from 'react';

const Header = ({handleToggleDarkMode, handleToggleName}) => {
    return(
        <div className='header'>
            <h1>메모장</h1>
            <button 
            onClick={() => handleToggleName()} 
            className='save'>
                {handleToggleDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </div>
    );
}

export default Header;