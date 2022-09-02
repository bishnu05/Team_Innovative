import { useState } from "react";
import { Btn } from "./Btn";
import { Display } from "./Display";

export const StopWatch = () => {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  // Not started = 0
  // started = 1
  // stopped = 2

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m;

  const run = () => {
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0 });
  };

  const resume = () => start();

  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <Display time={time} />
          <Btn
            status={status}
            resume={resume}
            reset={reset}
            stop={stop}
            start={start}
          />
        </div>
      </div>
    </div>
  );
};
