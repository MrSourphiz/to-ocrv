import React from 'react';
import './postlist.css';

function PostList() {
    return (
        <ul className = "postlist">
            <li className = "postlist__item">Первая строка</li>
            <li className = "postlist__item">Вторая строка</li>
            <li className = "postlist__item">Третья строка</li>
            <li className = "postlist__item">Четвертая строка</li>
            <li className = "postlist__item">Пятая строка</li>
        </ul>
    )
}

export default PostList;