import './App.css';
const News = (props) => {

    return (
      <div>
        <div>
            <h1>{(props.name) ? <span>{props.name}</span>:'default'}</h1>
        </div>
        <div className="box">
          <pre>{props.text}</pre>
          <p>{props.extra}</p>
        </div>
        <div className="square">
          <h1>{props.header}</h1>
        </div>
      </div>
    )
  }
export  {News};  