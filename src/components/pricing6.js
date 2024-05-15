import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './pricing6.css'

const Pricing6 = (props) => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <div className="pricing6-pricing23 thq-section-padding">
      <div className="pricing6-max-width thq-section-max-width">
        <div className="pricing6-section-title">
          <span className="pricing6-text thq-body-small">{props.content1}</span>
          <div className="pricing6-content">
            <h2 className="pricing6-text01 thq-heading-2">{props.heading1}</h2>
            <p className="pricing6-text02 thq-body-large">{props.content2}</p>
          </div>
        </div>
        <div className="pricing6-tabs">
          {isMonthly && (
            <button
              onClick={() => setIsMonthly(true)}
              className="pricing6-button thq-button-filled"
            >
              <span className="thq-body-small">Monthly</span>
            </button>
          )}
          {!isMonthly && (
            <button
              onClick={() => setIsMonthly(true)}
              className="pricing6-button01 thq-button-outline"
            >
              <span className="thq-body-small">Monthly</span>
            </button>
          )}
          {isMonthly && (
            <button
              onClick={() => setIsMonthly(false)}
              className="pricing6-button02 thq-button-outline"
            >
              <span className="thq-body-small">Yearly</span>
            </button>
          )}
          {!isMonthly && (
            <button
              onClick={() => setIsMonthly(false)}
              className="pricing6-button03 thq-button-filled"
            >
              <span className="thq-body-small">Yearly</span>
            </button>
          )}
        </div>
        {!isMonthly && (
          <div className="pricing6-container">
            <div className="pricing6-column thq-card">
              <div className="pricing6-price">
                <div className="pricing6-price01">
                  <span className="pricing6-text07 thq-body-large">
                    {props.plan1}
                  </span>
                  <h3 className="pricing6-text08 thq-heading-3">
                    {props.plan1Price}
                  </h3>
                  <span className="thq-body-large">{props.plan1Yearly}</span>
                </div>
                <div className="pricing6-list">
                  <div className="pricing6-list-item">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature1}
                    </span>
                  </div>
                  <div className="pricing6-list-item01">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature2}
                    </span>
                  </div>
                  <div className="pricing6-list-item02">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature3}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing6-button04 thq-button-outline">
                <span className="thq-body-small">{props.plan1Action}</span>
              </button>
            </div>
            <div className="pricing6-column1 thq-card">
              <div className="pricing6-price02">
                <div className="pricing6-price03">
                  <span className="pricing6-text14 thq-body-large">
                    {props.plan2}
                  </span>
                  <h3 className="pricing6-text15 thq-heading-3">
                    {props.plan2Price}
                  </h3>
                  <span className="thq-body-large">{props.plan2Yearly}</span>
                </div>
                <div className="pricing6-list1">
                  <div className="pricing6-list-item03">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature1}
                    </span>
                  </div>
                  <div className="pricing6-list-item04">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature2}
                    </span>
                  </div>
                  <div className="pricing6-list-item05">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature3}
                    </span>
                  </div>
                  <div className="pricing6-list-item06">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature4}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing6-button05 thq-button-filled">
                <span className="thq-body-small">{props.plan2Action}</span>
              </button>
            </div>
            <div className="pricing6-column2 thq-card">
              <div className="pricing6-price04">
                <div className="pricing6-price05">
                  <span className="pricing6-text22 thq-body-large">
                    {props.plan3}
                  </span>
                  <h3 className="pricing6-text23 thq-heading-3">
                    {props.plan3Price}
                  </h3>
                  <span className="thq-body-large">{props.plan3Yearly}</span>
                </div>
                <div className="pricing6-list2">
                  <div className="pricing6-list-item07">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature1}
                    </span>
                  </div>
                  <div className="pricing6-list-item08">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature2}
                    </span>
                  </div>
                  <div className="pricing6-list-item09">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature3}
                    </span>
                  </div>
                  <div className="pricing6-list-item10">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature4}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing6-button06 thq-button-filled">
                <span className="thq-body-small">{props.plan3Action}</span>
              </button>
            </div>
          </div>
        )}
        {isMonthly && (
          <div className="pricing6-container1">
            <div className="pricing6-column3 thq-card">
              <div className="pricing6-price06">
                <div className="pricing6-price07">
                  <p className="pricing6-text30 thq-body-large">
                    {props.plan11}
                  </p>
                  <h3 className="pricing6-text31 thq-heading-3">
                    {props.plan1Price1}
                  </h3>
                  <p className="thq-body-large">{props.plan1Yearly1}</p>
                </div>
                <div className="pricing6-list3">
                  <div className="pricing6-list-item11">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature11}
                    </span>
                  </div>
                  <div className="pricing6-list-item12">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature21}
                    </span>
                  </div>
                  <div className="pricing6-list-item13">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature31}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing6-button07 thq-button-outline">
                <span className="thq-body-small">{props.plan1Action1}</span>
              </button>
            </div>
            <div className="pricing6-column4 thq-card">
              <div className="pricing6-price08">
                <div className="pricing6-price09">
                  <p className="pricing6-text37 thq-body-large">
                    {props.plan21}
                  </p>
                  <h3 className="pricing6-text38 thq-heading-3">
                    {props.plan2Price1}
                  </h3>
                  <p className="thq-body-large">{props.plan2Yearly1}</p>
                </div>
                <div className="pricing6-list4">
                  <div className="pricing6-list-item14">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature11}
                    </span>
                  </div>
                  <div className="pricing6-list-item15">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature21}
                    </span>
                  </div>
                  <div className="pricing6-list-item16">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature31}
                    </span>
                  </div>
                  <div className="pricing6-list-item17">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature41}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing6-button08 thq-button-filled">
                <span className="thq-body-small">{props.plan2Action1}</span>
              </button>
            </div>
            <div className="pricing6-column5 thq-card">
              <div className="pricing6-price10">
                <div className="pricing6-price11">
                  <p className="pricing6-text45 thq-body-large">
                    {props.plan31}
                  </p>
                  <h3 className="pricing6-text46 thq-heading-3">
                    {props.plan3Price1}
                  </h3>
                  <p className="thq-body-large">{props.plan3Yearly1}</p>
                </div>
                <div className="pricing6-list5">
                  <div className="pricing6-list-item18">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature11}
                    </span>
                  </div>
                  <div className="pricing6-list-item19">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature21}
                    </span>
                  </div>
                  <div className="pricing6-list-item20">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature31}
                    </span>
                  </div>
                  <div className="pricing6-list-item21">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature41}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing6-button09 thq-button-filled">
                <span className="thq-body-small">{props.plan3Action1}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

Pricing6.defaultProps = {
  plan1Action1: 'Get started',
  heading1: 'Pricing plan',
  plan3Feature1: 'All Super Fan features',
  plan1Feature1: 'Access to match highlights',
  plan1Feature2: '10% discount on merchandise',
  plan3Feature21: 'Extra feature',
  plan3Feature31: 'Custom feature',
  plan2Feature41: 'Feature text goes here',
  plan3Action1: 'Email Us',
  plan2Feature11: 'Feature text goes here',
  plan2Feature1: 'All Basic Fan features',
  plan1Action: 'Buy Now',
  plan2Feature3: '20% discount on merchandise',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  plan2Feature4: 'Access to live match streaming',
  plan2Feature21: 'Feature text goes here',
  plan1Price: '$10',
  plan2: 'Super Fan',
  plan3Feature11: 'Feature text goes here',
  plan3Feature4: 'Personalized signed merchandise',
  plan1Yearly: '$100/year',
  plan3Feature3: '30% discount on merchandise',
  plan3Price: '$30',
  plan2Yearly: '$200/year',
  plan2Feature2: 'Match tickets priority booking',
  plan3Feature2: 'VIP match tickets and stadium tour',
  plan1Feature3: 'Exclusive fan content',
  plan1Feature21: 'Feature text goes here',
  plan1Feature11: 'Feature text goes here',
  plan3Action: 'Buy Now',
  plan3Yearly: '$300/year',
  plan3: 'Ultimate Fan',
  plan2Feature31: 'Feature text goes here',
  plan2Yearly1: 'or $29/month',
  plan1Feature31: 'Feature text goes here',
  plan2Action: 'Buy Now',
  plan3Feature41: 'Premium feature',
  plan11: 'Basic plan',
  plan1: 'Basic Fan',
  plan1Yearly1: 'or $20/month',
  plan3Price1: 'Contact Us',
  plan3Yearly1: '(080) - 800-800',
  plan31: 'Enterprise plan',
  plan2Price1: '$299/year',
  plan2Action1: 'Get started',
  plan2Price: '$20',
  plan1Price1: '$200/year',
  plan21: 'Business plan',
  content1: 'Choose the perfect plan for you',
}

Pricing6.propTypes = {
  plan1Action1: PropTypes.string,
  heading1: PropTypes.string,
  plan3Feature1: PropTypes.string,
  plan1Feature1: PropTypes.string,
  plan1Feature2: PropTypes.string,
  plan3Feature21: PropTypes.string,
  plan3Feature31: PropTypes.string,
  plan2Feature41: PropTypes.string,
  plan3Action1: PropTypes.string,
  plan2Feature11: PropTypes.string,
  plan2Feature1: PropTypes.string,
  plan1Action: PropTypes.string,
  plan2Feature3: PropTypes.string,
  content2: PropTypes.string,
  plan2Feature4: PropTypes.string,
  plan2Feature21: PropTypes.string,
  plan1Price: PropTypes.string,
  plan2: PropTypes.string,
  plan3Feature11: PropTypes.string,
  plan3Feature4: PropTypes.string,
  plan1Yearly: PropTypes.string,
  plan3Feature3: PropTypes.string,
  plan3Price: PropTypes.string,
  plan2Yearly: PropTypes.string,
  plan2Feature2: PropTypes.string,
  plan3Feature2: PropTypes.string,
  plan1Feature3: PropTypes.string,
  plan1Feature21: PropTypes.string,
  plan1Feature11: PropTypes.string,
  plan3Action: PropTypes.string,
  plan3Yearly: PropTypes.string,
  plan3: PropTypes.string,
  plan2Feature31: PropTypes.string,
  plan2Yearly1: PropTypes.string,
  plan1Feature31: PropTypes.string,
  plan2Action: PropTypes.string,
  plan3Feature41: PropTypes.string,
  plan11: PropTypes.string,
  plan1: PropTypes.string,
  plan1Yearly1: PropTypes.string,
  plan3Price1: PropTypes.string,
  plan3Yearly1: PropTypes.string,
  plan31: PropTypes.string,
  plan2Price1: PropTypes.string,
  plan2Action1: PropTypes.string,
  plan2Price: PropTypes.string,
  plan1Price1: PropTypes.string,
  plan21: PropTypes.string,
  content1: PropTypes.string,
}

export default Pricing6
