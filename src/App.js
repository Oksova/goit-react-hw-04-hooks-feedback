import { useState } from 'react';

import Container from './components/Container/Container';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notitfication';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = options => {
    switch (options) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };

  const total = countTotalFeedback();
  const totalPersentage = countPositiveFeedbackPercentage();

  return (
    <Container>
      <Section title="Please leave your feedback" className="FeedbackTitle">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics" className="FeedbackTitle">
        {countTotalFeedback() === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            className="Statistics"
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={totalPersentage}
          />
        )}
      </Section>
    </Container>
  );
}

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   feedbackButton = option => {
//     this.setState(state => ({
//       [option]: state[option] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     return Object.values(this.state).reduce((acc, option) => acc + option, 0);
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good * 100) / this.countTotalFeedback());
//   };

//   render() {
//     const total = this.countTotalFeedback();
//     const totalPersentage = this.countPositiveFeedbackPercentage();
//     return (
//       <Container>
//         <Section title="Please leave your feedback" className="FeedbackTitle">
//           <FeedbackOptions
//             options={['good', 'neutral', 'bad']}
//             onLeaveFeedback={this.feedbackButton}
//           />
//         </Section>

//         <Section title="Statistics" className="FeedbackTitle">
//           {this.countTotalFeedback() === 0 ? (
//             <Notification message="No feedback given" />
//           ) : (
//             <Statistics
//               className="Statistics"
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={total}
//               positivePercentage={totalPersentage}
//             />
//           )}
//         </Section>
//       </Container>
//     );
//   }
