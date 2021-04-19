import React from 'react'
import { Link } from 'react-router-dom';

const ChildComponent = (props) => {
    const { students } = props;
    return (
        <div className="container">
            <table className="table table-hover ">
                <thead>
                    <tr>
                        <th scope="col">Registration Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">View</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map(student =>
                            <tr key={student.id}>
                                <td>{student?.id}</td>
                                <td>{student?.FirstName} {student?.LastName}</td>
                                <td >
                                    <Link to={`/student/${student?.id}`}>
                                        <button className="action">View Details</button>
                                    </Link>
                                    <Link to={`/edit/${student.id}`}>
                                        <button className="actions">Edit</button>
                                    </Link>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ChildComponent;
