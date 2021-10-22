import React from "react";
import axios from "axios";

class EmailDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState()
        //this.handleComposeInputChange = this.handleComposeInputChange.bind(this)
    }

    getInitialState() {
        return {
            sender: '',
            recipient: '',
            subject: '',
            message: '',
            serverResponse: ''
        };
    }

    render() {
        const formData = this.props.isComposing ? this.state : this.props.email;
        return this.getEmailDetailForm(formData);
    }

    getEmailDetailForm(formData) {
        return (
            <div className='emailDetail'>
                <label>Sender</label>
                <input id='sender' onChange={(e)=>{this.handleComposeInputChange(e)}} placeholder='Sender' type='text' value={formData.sender}/>
                <label>Recipient</label>
                <input id='recipient' onChange={(e)=>{this.handleComposeInputChange(e)}} placeholder='Recipient' type='text' value={formData.recipient}/>
                <label>Subject</label>
                <input id='subject' onChange={(e)=>{this.handleComposeInputChange(e)}} placeholder='Subject' type='text' value={formData.subject}/>
                <label>Message</label>
                <textarea  id='message' onChange={(e)=>{this.handleComposeInputChange(e)}} placeholder='Your email body here...' rows="20" cols="1" value={formData.message}/>
                <div></div><div align='middle'><button onClick={()=>{this.handleSubmitClicked()}}>SEND</button></div>
                <label id='userMessage' >{this.state.serverResponse}</label>
            </div>
        );
    }
    handleComposeInputChange(e){
        this.setState({

            [e.target.id]: e.target.value,

            // sender: e.target.sender,
            // recipient:e.target.recipient,
            // subject:e.target.subject,
            // message:e.target.message
        })
    }
    async handleSubmitClicked(){
        const {serverResponse,...emailData}=this.state;
        const postResponse = await axios.post('http://localhost:3001/send',emailData);
        this.setState(this.getInitialState(),()=>this.setState({serverResponse:postResponse.data.message}));

        // console.log(postResponse)
        // const sendEmailObj = {
        //     ...this.state
        // }
    }

}

export default EmailDetail

