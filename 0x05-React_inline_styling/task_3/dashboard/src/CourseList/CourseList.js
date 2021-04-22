import React from 'react';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';
import { StyleSheet, css} from 'aphrodite';

const CourseList = ({listCourses}) => {
    if (!listCourses) {
        return <div> No course availble yet </div>
    } else 
        return (
        <table className={css(styles.tab)}>
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody>
                {
                    listCourses.map(course => {
                        return (
                            <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false} />
                        )
                    })
                }
            </tbody>
        </table>    
    )
};

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
    listCourses: [],
};

const styles = StyleSheet.create({
    tab: {
        margin: '20px auto',
        width: '85%',
        border: '1px solid lightgrey'
    }
});

export default CourseList;