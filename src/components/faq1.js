import React from 'react'

import PropTypes from 'prop-types'

import './faq1.css'

const FAQ1 = (props) => {
  return (
    <div className="faq1-faq7 thq-section-padding">
      <div className="faq1-max-width thq-section-max-width">
        <div className="thq-flex-column">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <p className="faq1-text1 thq-body-large">{props.content1}</p>
        </div>
        <div className="thq-flex-column faq1-list">
          <div className="faq1-list-item1">
            <p className="faq1-faq1-question thq-body-large">
              {props.faq1Question}
            </p>
            <span className="thq-body-small">{props.faq1Answer}</span>
          </div>
          <div className="faq1-list-item2">
            <p className="faq1-faq2-question thq-body-large">
              {props.faq2Question}
            </p>
            <span className="thq-body-small">{props.faq2Answer}</span>
          </div>
          <div className="faq1-list-item3">
            <p className="faq1-faq3-question thq-body-large">
              {props.faq3Question}
            </p>
            <span className="thq-body-small">{props.faq3Answer}</span>
          </div>
          <div className="faq1-list-item4">
            <p className="faq1-faq4-question thq-body-large">
              {props.faq4Question}
            </p>
            <span className="thq-body-small">{props.faq4Answer}</span>
          </div>
          <div className="faq1-list-item5">
            <p className="faq1-faq5-question thq-body-large">
              {props.faq5Question}
            </p>
            <span className="thq-body-small">{props.faq5Answer}</span>
          </div>
        </div>
        <div className="thq-flex-column">
          <div className="faq1-content1">
            <h2 className="thq-heading-2">{props.heading2}</h2>
            <p className="faq1-text3 thq-body-large">{props.content2}</p>
          </div>
          <div className="faq1-container">
            <button className="thq-button-outline faq1-button">
              <span className="thq-body-small">{props.action1}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

FAQ1.defaultProps = {
  action1: 'Contact',
  heading2: 'Still have a question?',
  faq3Answer:
    'Yes, we have parking facilities available for both cars and bikes. Please arrive early to secure a spot.',
  faq1Question: 'What are the ticket prices for matches?',
  faq2Answer:
    'Outside food and drinks are not allowed inside the stadium. However, we have a variety of food and beverage options available for purchase.',
  faq5Question: 'Are there any discounts available for group bookings?',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  faq4Answer:
    'Yes, we have a range of merchandise available for purchase at our official store and online shop.',
  faq1Answer:
    'Ticket prices vary depending on the match and seat category. Please visit our Tickets page for more information.',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  faq5Answer:
    'Yes, we offer special discounts for group bookings of 10 or more people. Contact our ticketing office for more details.',
  heading1: 'FAQs',
  faq2Question: 'Can I bring my own food and drinks to the stadium?',
  faq4Question: 'Do you offer merchandise for sale?',
  faq3Question: 'Is there parking available at the stadium?',
}

FAQ1.propTypes = {
  action1: PropTypes.string,
  heading2: PropTypes.string,
  faq3Answer: PropTypes.string,
  faq1Question: PropTypes.string,
  faq2Answer: PropTypes.string,
  faq5Question: PropTypes.string,
  content1: PropTypes.string,
  faq4Answer: PropTypes.string,
  faq1Answer: PropTypes.string,
  content2: PropTypes.string,
  faq5Answer: PropTypes.string,
  heading1: PropTypes.string,
  faq2Question: PropTypes.string,
  faq4Question: PropTypes.string,
  faq3Question: PropTypes.string,
}

export default FAQ1
