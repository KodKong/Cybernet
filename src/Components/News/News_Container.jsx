import React from 'react'
import { connect } from 'react-redux'
import News from './News'

let mapStateToProps = (state) => {
    return {
        dataNews: state.newsPage
    }
}
const News_Container = connect(mapStateToProps)(News); 

export default News_Container; 