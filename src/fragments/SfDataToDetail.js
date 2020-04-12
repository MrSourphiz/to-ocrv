import React from 'react';

export const SfDataToDetail = (array, index) => {
    const owner = array[index].owner.display_name
    const title = array[index].title
    const description = array[index].body_markdown
    const descision = array[index].is_answered
    const tags = array[index].tags.join(', ')
    const link = array[index].link

    const checkDescision = (descision) => {
        if (descision) {
            return 'Решение: есть'
        } else {
            return 'Решение: нету'
        }
    };

    return (
        <div className = "postlist">
            <div className="detail__header">
                <h2 className='detail__owner'>Автор: {owner}</h2>
                <div className='detail__properties'>
                    <p>{checkDescision(descision)}</p>
                    <p>Тэги: {tags}</p>
                </div>     
            </div>
            <h3 className='detail__title'>Название: {title}</h3>
            <p className='detail__description'>Описание: {description}</p>        
            <a className='button__open' href={link} target='_blank' rel='noopener noreferrer'>Открыть тему на Stackoverflow</a>
        </div>
    )
};