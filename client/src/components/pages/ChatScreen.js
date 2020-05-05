import React, { Component } from "react";
import io from "socket.io-client";
import { v4 as uuid } from "uuid";

class ChatScreen extends Component {
  state = {
    messages: [],
    id: "",
    msg: "",
    sender: "",
    time: "",
  };

  socket;

  componentDidMount() {
    this.setState({ sender: this.props.match.params.username });

    this.socket = io("http://localhost:5000");
    this.socket.emit("username", this.props.match.params.username);

    this.socket.on("message", (data) => {
      this.setState({
        messages: [...this.state.messages, data],
      });

      document.querySelector(".msgs").scrollTop = document.querySelector(
        ".msgs"
      ).scrollHeight;
    });
  }

  onChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    const { messages, msg, sender, time } = this.state;

    const onSubmit = (e) => {
      e.preventDefault();
      this.socket.emit("chatMessage", {
        id: uuid(),
        msg,
        sender,
        time,
      });
      this.setState({ msg: "" });
      document.getElementById("msg").focus();
    };

    return (
      <div className="chatScreen">
        <div className="msgs">
          {messages.map((m) => (
            <p
              key={m.id}
              className={
                m.username === "Admin"
                  ? "admin"
                  : m.username === this.props.match.params.username
                  ? "me"
                  : "user"
              }
            >
              <span>
                {m.username} {m.time}{" "}
              </span>
              {m.msg}
            </p>
          ))}
        </div>
        <form className="sendMsg" onSubmit={onSubmit}>
          <input
            id="msg"
            type="text"
            name="msg"
            placeholder="Enter message"
            value={this.state.msg}
            onChange={this.onChange}
          />
          <button type="submit">
            <i className="fa fa-send"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default ChatScreen;
