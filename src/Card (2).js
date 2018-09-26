import React, { Component } from 'react';
import cn from 'classnames'
import './card.css'

class Card extends Component {
  constructor(props) {
    super(props)
    this.toggleCardView = this.toggleCardView.bind(this)

    this.state = {
      isFlipped: false,
      content: 'Click to flip'
    }
  }
  
  toggleCardView() {
    if (this.state.isFlipped) {
      this.setState({
        isFlipped: !this.state.isFlipped,
        content: 'Click to flip',
      })
    } else {
      this.setState({
        isFlipped: !this.state.isFlipped,
        content: 'Yo, what up?',
      })
    }
  }

  render() {

    return (

<div class="tile">
  <div  onClick={this.toggleCardView} className="card"    className={cn('card', this.state.isFlipped ? 'flipped' : 'back')}>
    
    <div className="card title-front">
    <div class="bg-tile">
            <i className="material-icons m_emote">account_box</i>
        </div>
        <div className="body">
            
        </div>
        <div className="card-footer text-muted m_desc">
        <p>5 Users</p>
            <p className="online">Online</p>

        </div>
    
    </div>
    <div className="back">
    
    <div class="card-body">
            <p>User online correspond to people connected on your network</p>
        </div>
    
    </div>
  </div>
</div>
    )
  }
}






export default Card;
