import React, {Component} from 'react'

export class Chat extends Component {

    componentDidMount() {
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"2733eff3c762b8ebdc1b74bf1f4030b27","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
    }

    render() {
        return(
            <div className="App">
      <header className="App-header">
        <img src="CHATBOT.jpg-removebg-preview.png"/>
        <p>
        A chatbot is a software agent that dialogues with a user.
        </p>
        <h3>
          CHATBOT
        </h3>
      </header>
    </div>
        )
    }
}

export default Chat