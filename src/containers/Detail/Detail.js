import React, {Component} from 'react';
import {connect} from 'react-redux';

import './detail.css';

import BackButton from '../../components/Popups/BackButton';

import {SfDataToDetail} from '../../fragments/SfDataToDetail';
import {GhDataToDetail} from '../../fragments/GhDataToDetail';

class Detail extends Component {

    renderDetail = (dataSf, dataGh, index) => {
        if (this.props.location.pathname === '/sf/detail') {
            return SfDataToDetail(dataSf, index)
        } else {
            return GhDataToDetail(dataGh, index)
        }
    };

    render () {
        const {dataSf, dataGh} = this.props
        const index = this.props.location.state.index

        return (
            <div className='detail'>
                <BackButton path={this.props.location.pathname}/>
                {this.renderDetail(dataSf, dataGh, index)}
            </div>
        )
    };
};

const mapStateToProps = state => {
    return {
        dataSf: state.dataSf,
        dataGh: state.dataGh
    }
};

export default connect(mapStateToProps)(Detail);