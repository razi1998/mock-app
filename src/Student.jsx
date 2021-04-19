import React from 'react'

function Student(props) {
    const { student } = props;

    return (
        <div>
            <div className="top-text" >
                <h1>Student Details</h1>
            </div>
            {(student?.id) ? <div className="center-text">
                <h3>ID: {student?.id}</h3>
                <h3>Name: {student?.FirstName} {student?.LastName}</h3>
                <h3>Age: {student?.age}</h3>
                <h3>Class: {student?.clas}</h3>
                <h3>Percent: {student?.percent}</h3>
            </div> : <div>No details Available, Please select a student to view the details</div>}
        </div>
    )
}

export default Student
