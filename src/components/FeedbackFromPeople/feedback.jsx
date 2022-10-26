import React from 'react';



class FeedBackPeople extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
  
    }
    
    buttnonGood = () => {
        this.setState(prevState => {
            return {
                good: prevState.good + 1
            };
        });
    };
    buttnonNeutral = () => {
        this.setState(prevState => {
            return {
                neutral: prevState.neutral + 1
            };
        });
    };
    buttnonBad = () => {
        this.setState(prevState => {
            return {
                bad: prevState.bad + 1
            };
        });
    };

    countTotalFeedbackPeople = () => {
        const { good, neutral, bad } = this.state;
        if (!good) {
            return 0;
        }
        const total = good + neutral + bad;
        const feedback = (good * 100) / total;
        return Math.round(feedback);
    };
    
       
    
    countTotalFeedbackPeople = ({ good, neutral, bad }) => {
        return (
            <div>
                <p>Statistics</p>
                <p>Good:{good}</p>
                <p>Neutral:{neutral}</p>
                <p>Bed:{bad}</p>
                <p>Total:{() => { }}</p>
            </div>)
 
    };
    

    render() {
        return (
            <div>
                <p>Please leave feedback</p>

                <button type='button' onClick={this.buttnonGood}>Good</button>
                <button type='button' onClick={this.buttnonNeutral}>Neutral</button>
                <button type='button' onClick={this.buttnonBad}>Bed</button>
            </div>
        );
        
    };
}


export default FeedBackPeople;