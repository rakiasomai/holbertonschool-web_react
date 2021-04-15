import React from "react";
import PropTypes, { bool, string } from 'prop-types';
import "./CourseList.css";


const CourseListRow = ({isHeader, textFirstCell, textSecondCell}) => {
    if (isHeader === true && textSecondCell == null) {
        return (
            <tr>
                <th colSpan={2}>
                {textFirstCell}
                </th>
            </tr>
        );
    }
    if (isHeader === true && textSecondCell != null) {
        return (
            <tr>
                <th>
                    {textFirstCell}
                </th>
                <th>
                    {textSecondCell}
                </th>
            </tr>
        );
    }
    if (isHeader === false) {
        return (
            <tr>
                <td>
                    {textFirstCell}
                </td>
                <td>
                    {textSecondCell}
                </td>
            </tr>
        );
    }

};

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

};

CourseListRow.defaultProps = {
    isHeader: false, 
    textSecondCell: null,
};

export default CourseListRow;
