import "../App.css";

const Message = (props) => {

  const dateString = new Date(props.timestamp).toLocaleTimeString('no-NO')

  return (
    <div className="message">
      <span className="from">{props.from}</span>
      <span className="text">{props.text}</span>
      <span className="timestamp">{dateString}</span>
    </div>
  );
};

export default Message;
