function ChatMessages({
    messagesLoading,
    messages,
   }) {
    return (
      <div className="chat-messages">
        {messagesLoading ? (
            <li>
              <span className="message">Loading messages....</span>
            </li>
          ) : messages.length ? (
            messages.map((c) => {
              return (
                <div
                   className="message"
                >
                  <span className="user-id">{c.user}</span>
                  <span className="message">{c.body}</span>
                  <span className="message">{c.time}</span>
                </div>
              );
            })
          ) : (
            <li>
              <span className="channel-name">No channels available</span>
            </li>
          )}
        </div>
    );
   }
   
   export default ChatMessages;