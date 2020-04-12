import React, {Component} from 'react';
import {connect} from 'react-redux';

import './postList.css';

import BackButton from '../../components/Popups/BackButton';
import Loader from '../../components/Loader/Loader';
import ErrorHandler from '../../components/ErrorHandler/ErrorHandler';

import {getSfData} from '../../Redux/actions/getDataSf';
import {getGhData} from '../../Redux/actions/getDataGh';
import {MapData} from '../../fragments/MapData';

class PostList extends Component {
    componentDidMount() {
        if (this.props.location.pathname === '/sf') {
            this.props.getSfDataAction('https://api.stackexchange.com/2.2/questions?order=asc&sort=week&site=stackoverflow&filter=!9Z(-wwK4f')
        } else if (this.props.location.pathname === '/gh') {
            this.props.getGhDataAction('https://github-trending-api.now.sh/repositories?language=&since=weekly')
        }
    };

    renderList = (dataSf, dataGh, errorSf, errorGh) => {
        switch (true) {
            case (this.props.location.pathname === '/sf' && errorSf.isError):
                return <ErrorHandler error={errorSf}/>
            case (this.props.location.pathname === '/sf' && !errorSf.isError):
                return MapData(dataSf, this.props.location.pathname)
            case (this.props.location.pathname === '/gh' && errorGh.isError):
                return <ErrorHandler error={errorGh}/>
            case (this.props.location.pathname === '/gh' && !errorGh.isError):
                return MapData(dataGh, this.props.location.pathname)
            default:
                break
        } 
    };

    render () {
        const {dataSf, dataGh, loading, errorSf, errorGh} = this.props
        console.log(this.props)
        return (
            <section>
                {loading  ?  <Loader /> : 
                    <div className = "container">
                        <BackButton path={this.props.path} />
                        {this.renderList(dataSf, dataGh, errorSf, errorGh)}
                    </div>
                }
            </section>
        )
    }
};

const mapStateToProps = state => {
    return {
        dataSf: state.dataSf,
        dataGh: state.dataGh,
        loading: state.loading,
        errorSf: state.errorSf,
        errorGh: state.errorGh
    }
};
  
const mapDispatchToProps = dispatch => {
    return {
      getSfDataAction: (URL) => dispatch(getSfData(URL)),
      getGhDataAction: (URL) => dispatch(getGhData(URL))
    }
};
  

export default connect(mapStateToProps, mapDispatchToProps)(PostList);