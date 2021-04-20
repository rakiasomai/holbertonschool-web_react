import React from "react";
import PropTypes, { bool, string } from 'prop-types';
/* import "./CourseList.css"; */
import { StyleSheet, css} from 'aphrodite';


const CourseListRow = ({isHeader, textFirstCell, textSecondCell}) => {
    if (isHeader === true && textSecondCell == null) {
        return (
            <tr className={css(styles.headerRowBG)}>
                <th colSpan={2}>
                {textFirstCell}
                </th>
            </tr>
        );
    }
    if (isHeader === true && textSecondCell != null) {
        return (
            <tr className={css(styles.rowBG)}>
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
            <tr className={css(styles.rowBG)}>
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

const styles = StyleSheet.create({
    rowBG: {
        backgroundColor: '#f5f5f5ab'
    },
    headerRowBG: {
        backgroundColor: '#deb5b545'
    }
});

export default CourseListRow;
