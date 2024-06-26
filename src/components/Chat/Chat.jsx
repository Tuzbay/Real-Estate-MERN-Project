import { useState } from 'react';
import './Chat.scss';
const Chat = () => {
  const [chat, setChat] = useState(null);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message" onClick={() => setChat(true)}>
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="message" onClick={() => setChat(true)}>
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="message" onClick={() => setChat(true)}>
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              John Doe
            </div>
            <div className="close" onClick={() => setChat(null)}>
              X
            </div>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Apartment is awesome. I want to rent this apartment.</p>
              <span>1 hour age</span>
            </div>
            <div className="chatMessage own">
              <p>Apartment is awesome. I want to rent this apartment.</p>
              <span>1 hour age</span>
            </div>
            <div className="chatMessage">
              <p>Apartment is awesome. I want to rent this apartment.</p>
              <span>1 hour age</span>
            </div>
            <div className="chatMessage own">
              <p>Apartment is awesome. I want to rent this apartment.</p>
              <span>1 hour age</span>
            </div>
            <div className="chatMessage">
              <p>Apartment is awesome. I want to rent this apartment.</p>
              <span>1 hour age</span>
            </div>
            <div className="chatMessage own">
              <p>Apartment is awesome. I want to rent this apartment.</p>
              <span>1 hour age</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
