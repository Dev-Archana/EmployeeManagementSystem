import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';

function PostUser() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        department: ""
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            // Api
            const response = await fetch('http://localhost:8080/api/employee', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Failed to post data');
            }
            alert('Data posted successfully');
        }
        catch (error) {
            console.error(error);
        }
    }
    return (
        <div className='center-form'>
            <h1>Post New Employee</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Employee Name</Form.Label>
                    <Form.Control
                        type="text"
                        name='name'
                        placeholder="Enter name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Employee Email</Form.Label>
                    <Form.Control
                        type="email"
                        name='email'
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPhone">
                    <Form.Label>Employee Phone Number</Form.Label>
                    <Form.Control
                        type="text"
                        name='phone'
                        placeholder="Enter Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicDepartment">
                    <Form.Label>Employee Department</Form.Label>
                    <Form.Control
                        type="text"
                        name='department'
                        placeholder="Enter Department"
                        value={formData.department}
                        onChange={handleInputChange}
                    /><br />
                </Form.Group>
                <Button variant='primary' type='submit' className='w-50'>
                    Post Data
                </Button>
            </Form>
        </div>
    )
}

export default PostUser
