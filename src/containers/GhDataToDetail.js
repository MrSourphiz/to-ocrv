import React from 'react'
import { ReactComponent as Star } from '../images/star.svg'

export const GhDataToDetail = (array, index) => {
    const owner = array[index].author
    const title = array[index].name
    const description = array[index].description
    const language = array[index].language
    const stars = array[index].stars
    const link = array[index].url

    const checkLanguage = (language) => {
        if (language === '') {
            return 'Яыкз: не указан'
        } else {
            return 'Язык: ' + language
        }
    }

    return (
        <div className = "postlist">
            <div className="detail__header">
                <h2 className='detail__owner'>Автор: {owner}</h2>
                <div className='detail__properties'>
                    <p>{checkLanguage(language)}</p>
                    <p><Star /> {stars}</p>
                </div>     
            </div>
            <h3 className='detail__title'>Название: {title}</h3>
            <p className='detail__description'>Описание: {description}</p>        
            <a className='button__open' href={link} target='_blank' rel='noopener noreferrer'>Открыть репозиторий на GitHub</a>
        </div>
    );
  };