import EmailItem from "./EmailItem";

function EmailList({emails, searchPhrase, selectEmail}){
 return (
     emails
         .filter((email)=> email.subject.toLowerCase().includes(searchPhrase.toLowerCase()))
         .map(email => <EmailItem selectEmail={selectEmail} key={email.id} email={email}/>)

 )
}

export default EmailList