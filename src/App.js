import './App.css';
import {Component} from "react";
import axios from "axios";
import EmailList from "./Components/EmailList";
import SearchBar from "./Components/SearchBar";
import EmailDetail from "./Components/EmailDetail";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emails: [],
            isLoading: true,
            searchPhrase: '',
            selectedEmail: null,
            isComposing: false,

        }

    }

    async componentDidMount() {
        const emails = await axios.get('http://localhost:3001/emails');
        this.setState({
            isLoading: false,
            emails: emails.data
        })
    }


    render() {
        return (
            <div>
                <SearchBar searchPhrase={this.state.searchPhrase}
                           onChange={(input) => this.handleSearchOnChange(input)}
                           composeClick={() => this.handleComposeButtonClick()}

                />
                {this.state.isLoading ? <></> :
                    <EmailList emails={this.state.emails}
                               searchPhrase={this.state.searchPhrase}
                               selectEmail={(email) => this.handleSelectEmail(email)}

                    />}
                {this.state.selectedEmail || this.state.isComposing ?
                    <EmailDetail isComposing={this.state.isComposing}
                                 email={this.state.selectedEmail}/> : <></>}

            </div>
        );
    }

    handleSearchOnChange(input) {
        this.setState({searchPhrase: input});
    }

    handleSelectEmail(email) {
        this.setState({selectedEmail: email, isComposing:false});
    }

    handleComposeButtonClick() {
        this.setState({
            isComposing: true,
            selectedEmail: null
        });
    }

}


export default App;
