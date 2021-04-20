import React from 'react';
import './CourseList.css';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';

const CourseList = ({listCourses}) => {
    if (!listCourses) {
        return <div> No course availble yet </div>
    } else 
        return (
        <table id="CourseList">
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

export default CourseList;