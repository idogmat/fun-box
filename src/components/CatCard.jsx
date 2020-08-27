import React from 'react'
import f from './FeedBlock.module.css'
import cat from "../assets/Photo.png";
class CatCard extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            disableCard:false,
            hoverOnCard:false
        }
    }

    decrement = () => {
        if(this.props.onStore!==0) {
            console.log('ok')
            this.props.minCounter(this.props.id - 1)
            this.forceUpdate()
        }else{
            this.state.disableCard=true
            this.forceUpdate()
        }
    }
    hoverEnter=()=>{
        this.state.hoverOnCard=true
    }
    hoverLeave=()=>{
        this.state.hoverOnCard=false
    }
    render() {
        return (<div>
            <div className={!this.state.disableCard ? f.catCardContainer : f.catCardContainerDisable}
                 onMouseLeave={this.hoverLeave}
                 onMouseEnter={this.hoverEnter}
                 onClick={!this.state.disableCard ? this.decrement : ''}>
                <div className={!this.state.disableCard ? f.catCard : f.catCardDisable} style={{backgroundImage: `url(${cat})`}}>
                    <div className={f.cardInfo}>
                        <span>Сказочное заморское явство</span>
                        <p className={f.cardTitle}>Нямушка</p>
                        <p className={f.withItem}>{this.props.service}</p>
                        <p className={f.cardGift}>{this.props.portion} порций <br/>{this.props.gift} в подарок</p>
                    </div>
                    <div className={f.sizeBlock}>
                        <div className={!this.state.disableCard ? f.cardSize : f.cardSizeDisable}>
                            <span className={f.valueSize}>{this.props.size}</span>
                            <span className={f.size}>КГ</span>
                        </div>
                    </div>
                </div>
            </div>
            <p className={f.lowSection}>{this.props.lowMsgDef} <span>купи.</span></p>
            <p className={f.lowSection}>Остаток: {this.props.onStore}</p>
        </div>)
    }
}
export default CatCard;
