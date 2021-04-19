import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import "./BodySectionWithMarginBottom.css";

class BodySectionWithMarginBottom extends React.Component {
    render () {
        return (
            <div className="bodySectionWithMargin">
                <BodySection {...this.props} />
            </div>
        );
    }
    
}

BodySection.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
};

BodySection.defaultProps = {
    title: "",
};

export default BodySectionWithMarginBottom;