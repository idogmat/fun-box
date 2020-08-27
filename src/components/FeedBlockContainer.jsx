import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import FeedBlock from "./FeedBlock";
import f from './FeedBlock.module.css'
import bg from '../assets/Pattern.png'
import {dispatchMinCounter} from "../store/feedReducer";
class FeedBlockContainer extends React.Component{
    render() {
        return (<div className={f.container} style={{backgroundImage: `url(${bg})`}}>
            <h3 className={f.title}>Ты сегодня покормил кота?</h3>
            <FeedBlock {...this.props} feeds={this.props.feedReducer} minCounter={this.props.minCounter}/>
        </div>)
    }
}
function mapStateToProps(state){
    return{
        feedReducer:state.feedReducer
    }
}
function mapDispatchToProps(dispatch){
    return{
        minCounter: elementId => {
            dispatch(dispatchMinCounter(elementId))
        }
    }
}


export default compose(
    connect(mapStateToProps,mapDispatchToProps)
)
(FeedBlockContainer);

