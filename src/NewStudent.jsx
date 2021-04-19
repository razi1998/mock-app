import React, { Component } from 'react'

class NewStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            student: this.props.student,
            formError: ""
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        {
            this.setState({
                ...this.state,
                student: {
                    ...this.state.student,
                    [name]: value
                },
                formError:""
            })
        }
    }

    handleSubmit = () => {
        console.log(this.state.student)
        const { id, FirstName, LastName, age, clas, percent} = this.state.student;
        if (id && FirstName && LastName && age && clas && percent) {
            this.setState({
                ...this.state,
                formError: ""
            })
            this.props.student(this.state.student)
        } else {
            this.setState({
                ...this.state,
                formError: "Please fill all the fields"
            })
        }
    }


    render() {
        return (
            <div className="form-container">
                <form className="container" >
                    <div className="mb-3">
                        <label htmlfor="id" className="form-label">Registration Id</label>
                        <input type="text" className="form-control" name="id" placeholder="Enter your Registration ID" value={this?.state?.student?.id} onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlfor="FirstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" name="FirstName" placeholder="Enter your First Name" value={this?.state?.student?.FirstName} onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlfor="LastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" name="LastName" placeholder="Enter your Last Name" value={this?.state?.student?.LastName} onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">

                        <label htmlfor="age" className="form-label">Age</label>
                        <input type="text" className="form-control" name="age" placeholder="Enter your Age" value={this?.state?.student?.age} onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlfor="class" className="form-label">Class</label>
                        <input type="text" className="form-control" name="clas" placeholder="Enter your Class" value={this?.state?.student?.clas} onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlfor="class" className="form-label">Percentage</label>
                        <input type="text" className="form-control" name="percent" placeholder="Enter your Percentage" value={this?.state?.student?.percent} onChange={this.handleChange} />
                    </div>
                    <div className="form-text-valid">{this.state.formError}</div>
                    <br/>
                    <button type="button" onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default NewStudent;