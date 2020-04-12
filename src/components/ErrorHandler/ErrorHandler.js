import React, {Component} from 'react';
import './errorHandler.css';

class ErrorHandler extends Component {
    render () {
        const {error} = this.props
        return (
            <div className='error'>
                <h1>ЧТО-ТО ПОШЛО НЕ ТАК</h1>
                <p>Код ошибки: {error.code} - {error.text}</p>
            </div>
        )
    };
};

export default ErrorHandler;