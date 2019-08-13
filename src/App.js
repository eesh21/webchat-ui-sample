import React from 'react';
import * as FlexWebChat from "@twilio/flex-webchat-ui";


class App extends React.Component {

  constructor(props) {
    super(props);

    const { configuration } = props;
    FlexWebChat.Manager.create(configuration)
      .then(manager => (
        FlexWebChat.Actions.on("afterStartEngagement", (payload) => {
              const { question } = payload.formData;
              if (!question) return;

              const { channelSid } = manager.store.getState().flex.session;
              manager.chatClient.getChannelBySid(channelSid)
                  .then(channel => {
                      channel.sendMessage(question);
                  }); // eslint-disable-next-line
          }),
        this.setState({ manager })))
      .catch(error => this.setState({ error }));
  }

  render() {
    const { manager, error } = this.state;
    if (manager) {
      return (
        <FlexWebChat.ContextProvider manager={manager}>
          <FlexWebChat.RootContainer />
        </FlexWebChat.ContextProvider>
      );
    }

    if (error) {
      console.error("Failed to initialize Flex Web Chat", error);
    }

    return null;
  }
  state = {};
}


export default App;
