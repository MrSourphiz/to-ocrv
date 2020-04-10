import React, { Component } from 'react'
import { connect } from 'react-redux'

import './postlist.css'

import BackButton from '../Popups/BackButton'
import Loader from '../Loader/Loader'

import {getSfData} from '../../Redux/actions/getDataSf'
import {getGhData} from '../../Redux/actions/getDataGh'
import {MapData} from '../../containers/MapData'

class PostList extends Component {
    componentDidMount() {
        if (this.props.location.pathname === '/sf') {
            this.props.getSfDataAction('https://api.stackexchange.com/2.2/questions?order=asc&sort=week&site=stackoverflow&filter=!9Z(-wwK4f')
        } else if (this.props.location.pathname === '/gh') {
            this.props.getGhDataAction('https://github-trending-api.now.sh/repositories?language=&since=weekly')
        }
    }

    renderList = (dataSf, dataGh) => {
        if (this.props.location.pathname === '/sf') {
            return MapData(dataSf, this.props.location.pathname)
        } else {
            return MapData(dataGh, this.props.location.pathname)
        }
    }

    render () {
        const {dataSf, dataGh, loading} = this.props
        return (
            <section>
                {loading 
                    ?  <Loader /> 
                    :  <div className = "container">
                            <BackButton path={this.props.path} />
                            {this.renderList(dataSf, dataGh)}
                        </div>
                }
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        dataSf: state.dataSf,
        dataGh: state.dataGh,
        loading: state.loading
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
      getSfDataAction: (URL) => dispatch(getSfData(URL)),
      getGhDataAction: (URL) => dispatch(getGhData(URL))
    }
}
  

export default connect(mapStateToProps, mapDispatchToProps)(PostList);