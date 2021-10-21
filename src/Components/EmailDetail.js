import React from "react";

class EmailDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sender: '',
            recipient: '',
            subject: '',
            message: ''
        }
    }

    render() {
        const formData = this.props.isComposing ? this.state : this.props.email;
        return this.getEmailDetailForm(formData)
    }

    getEmailDetailForm(formData) {
        return (
            <div className='emailDetail'>
                <label>Sender</label>
                <input placeholder='Sender' type='text' value={formData.sender}/>
                <label>Recipient</label>
                <input placeholder='Recipient' type='text' value={formData.recipient}/>
                <label>Subject</label>
                <input placeholder='Subject' type='text' value={formData.subject}/>
                <label>Message</label>
                <textarea  placeholder='Your email body here...' rows="20" cols="1" value={formData.message}/>
            </div>


        );
    }
}

export default EmailDetail

