function EmailItem({email, selectEmail}){
    return (
        <button onClick={()=> selectEmail(email)} className='emailItem'>
            <div>{email.sender}</div>
            <div>{email.subject}</div>
        </button>

    )
}
export default EmailItem

// {
//     "sender": "katie@galvanize.com",
//     "recipient": "jane@galvanize.com" ,
//     "subject": "Standup meeting",
//     "message": "Mr. and Mrs. Dursley, of number four, Privet Drive, were
//     proud to say that they were perfectly normal, thank you very much.",
//     "date": "2020-08-23T18:25:43.511Z",
//     "id": 1
// }