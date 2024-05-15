import React from 'react'

import PropTypes from 'prop-types'

import './logos11.css'

const Logos11 = (props) => {
  return (
    <div className="logos11-container thq-section-padding">
      <div className="logos11-max-width thq-section-max-width">
        <h2 className="logos11-text thq-heading-2">{props.heading1}</h2>
        <div className="thq-grid-6">
          <img
            alt={props.logo1Alt}
            src={props.logo1Src}
            className="logos11-logo1 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo2Alt}
            src={props.logo2Src}
            className="logos11-logo2 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo3Alt}
            src={props.logo3Src}
            className="logos11-logo3 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo4Alt}
            src={props.logo4Src}
            className="logos11-logo4 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo5Alt}
            src={props.logo5Src}
            className="logos11-logo5 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo6Alt}
            src={props.logo6Src}
            className="logos11-logo6 thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

Logos11.defaultProps = {
  logo2Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/2cf31efa-183b-4247-920e-60025ea69bfe?org_if_sml=1&q=80&force_format=original',
  logo2Alt: 'Youth Team Logo',
  logo1Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/838a2368-6357-4526-a3f3-57fee519d8ec?org_if_sml=1&q=80&force_format=original',
  logo5Alt: 'Sponsor Logo 2',
  logo3Alt: "Women's Team Logo",
  logo1Alt: 'Main Club Logo',
  logo4Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/c78f8e14-cf7b-4e8b-821c-3d6b89ed8db4?org_if_sml=1&q=80&force_format=original',
  logo6Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/07f56a12-c428-4896-8819-194d1fef39f2?org_if_sml=1&q=80&force_format=original',
  heading1:
    "Trusted by the world's best companies social proof to build credibility",
  logo3Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/49215785-2559-40a7-be66-9dd3bdf5eb7a?org_if_sml=1&q=80&force_format=original',
  logo6Alt: 'Sponsor Logo 3',
  logo5Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/97476fa7-08ff-463d-99d2-c4ceb6ae9222?org_if_sml=1&q=80&force_format=original',
  logo4Alt: 'Sponsor Logo 1',
}

Logos11.propTypes = {
  logo2Src: PropTypes.string,
  logo2Alt: PropTypes.string,
  logo1Src: PropTypes.string,
  logo5Alt: PropTypes.string,
  logo3Alt: PropTypes.string,
  logo1Alt: PropTypes.string,
  logo4Src: PropTypes.string,
  logo6Src: PropTypes.string,
  heading1: PropTypes.string,
  logo3Src: PropTypes.string,
  logo6Alt: PropTypes.string,
  logo5Src: PropTypes.string,
  logo4Alt: PropTypes.string,
}

export default Logos11
