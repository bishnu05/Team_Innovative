export const Btn = (props) => {
  return (
    <div>
      {props.status === 0 ? (
        <button className="" onClick={props.start}>
          Start
        </button>
      ) : (
        ""
      )}

      {props.status === 1 ? (
        <div>
          <button className="" onClick={props.stop}>
            Stop
          </button>
          <button className="" onClick={props.reset}>
            Reset
          </button>
        </div>
      ) : (
        ""
      )}

      {props.status === 2 ? (
        <div>
          <button className="" onClick={props.resume}>
            Resume
          </button>
          <button className="" onClick={props.reset}>
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
