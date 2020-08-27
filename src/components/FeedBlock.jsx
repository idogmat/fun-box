import React from 'react'
import f from './FeedBlock.module.css'
import CatCard from "./CatCard";
const FeedBlock =(props)=>{
    let feedElement = props.feeds.feeds
        .map(f=><CatCard id={f.id}
            key={f.id} service={f.service}
                         portion={f.portion} gift={f.gift}
                         onStore={f.onStore} size={f.size}
                         lowMsgDef={f.lowMsgDef} minCounter={props.minCounter}
                         lowMsgSelected={f.lowMsgSelected} lowMsgDisable={f.lowMsgDisable}
        />);

    return(<div className={f.feedBlock}>
        {feedElement}
{/*<CatCard {...props} key={props.feeds.feeds.id} feeds={props.feeds.feeds} minCounter={props.minCounter}/>*/}
{/*        <CatCard/>*/}
{/*        <CatCard/>*/}
{/*        <div key={props.feeds.feeds.id}>fsdfsdf{props.feeds.feeds[0].id}</div>*/}
        </div>)
}
export default FeedBlock;
