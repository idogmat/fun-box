import React from 'react'
import f from './FeedBlock.module.css'
import cat from "../assets/Photo.png";
class CatCard extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            disableCard:false,
            clickOnCard:false

        }
    }

    decrement = () => {
        if(this.props.onStore!==0) {
            console.log(this.state.clickOnCard & this.state.disableCard)
            this.props.minCounter(this.props.id - 1)
            this.forceUpdate()
        }else{
            this.setState({disableCard: true})
            this.forceUpdate()
        }
    }
    mouseEnter=()=>{
        if(this.props.onStore !== 0) {
            this.setState({clickOnCard: true})
            this.forceUpdate()
        } else if(this.props.onStore === 1){
            this.setState({clickOnCard: true})
            this.setState({disableCard: true})
            this.forceUpdate()
        }
    }
    mouseLeave=()=>{
        if(this.props.onStore !==0 ) {
            this.setState({clickOnCard: false})
            this.forceUpdate()
        }
    }
    render() {
        return (<div className={this.state.clickOnCard ? f.selected : f.default}>
            <div className={!this.state.disableCard ? f.catCardContainer : f.catCardContainerDisable
            }
                 onMouseUp={this.mouseLeave}
                 onMouseDown={this.mouseEnter}
                 onClick={!this.state.disableCard ? this.decrement : ''}>
                <div className={!this.state.disableCard ? f.catCard : f.catCardDisable} style={{backgroundImage: `url(${cat})`}}>
                    <div className={f.cardInfo}>
                        {this.state.clickOnCard ? <span className={f.question}>Котэ не одобряет?</span> : <span>Сказочное заморское явство</span>}
                        <p className={f.cardTitle}>Нямушка</p>
                        <p className={f.withItem}>{this.props.service}</p>
                        <p className={f.cardGift}>{this.props.portion}<br/>{this.props.gift}</p>
                    </div>
                    <div className={f.sizeBlock}>
                        <div className={!this.state.disableCard ? f.cardSize : f.cardSizeDisable}>
                            <span className={f.valueSize}>{this.props.size}</span>
                            <span className={f.size}>КГ</span>
                        </div>
                    </div>
                </div>
            </div>
            {this.state.clickOnCard & !this.state.disableCard ?
                <p className={f.lowSection}>{this.props.lowMsgSelected} </p> :
                <p className={!this.state.clickOnCard & !this.state.disableCard ? f.lowSection : f.lowSectionDisable}>
                    {!this.state.clickOnCard & !this.state.disableCard ? this.props.lowMsgDef : this.props.lowMsgDisable}
                <span className={!this.state.clickOnCard & !this.state.disableCard ? f.spanBuy : f.spanBuyOff}> купи.</span></p>}
            <p className={f.lowSection}>Остаток: {this.props.onStore}</p>
        </div>)
    }
}
export default CatCard;
