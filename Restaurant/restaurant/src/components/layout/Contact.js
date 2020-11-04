import React,{ Fragment, useState} from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../actions/contact';
import PropTypes from 'prop-types';

const Contact = ({ addContact }) => {
    const [formData,setFormData] = useState({
        name : '',
        email : '',
        contact : ''
    })
    const { name,email,contact} = formData;
    const onChange = (e) => setFormData({ ...formData,[e.target.name] : e.target.value })
    const onSubmit = (e) => {
        e.preventDefault();
        addContact(formData);
        setFormData({ ...formData,name:'',email:'',contact:''})
    }
    return (
        <Fragment>
            <form onSubmit={(e) => onSubmit(e)}>
                <h1 className="text-center">Contact us</h1>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => onChange(e)} name="name"/>
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => onChange(e)} name="email"/>
                </div>
                <div className="form-group">
                    <label>Why do you want to contact us ?</label>
                    <textarea name="contact" rows="3" value={contact} onChange={(e) => onChange(e)} className="form-control"></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        </Fragment>
    )
}

Contact.propTypes = {
    addContact : PropTypes.func.isRequired
}
export default connect(null,{ addContact })(Contact);
