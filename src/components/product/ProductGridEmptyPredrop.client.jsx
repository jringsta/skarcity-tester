import {useEffect, useState} from 'react';

export function ProductGridEmptyPredrop() {
  const [timer, setTimer] = useState('00:00:00:00');
  const [email, setEmail] = useState('');

  const onChangeEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const submitHandler = () => {
    setEmail('');
  };

  const getTimeRemaining = () => {
    const drop_date = new Date('2022-12-15T18:00:00z');

    const total = Date.parse(drop_date) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const days = Math.floor((total / 1000 / 60 / 60 / 24) % 365);
    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = () => {
    let {total, days, hours, minutes, seconds} = getTimeRemaining();
    if (total >= 0) {
      setTimer(
        (days > 9 ? days : '0' + days) +
          ':' +
          (hours > 9 ? hours : '0' + hours) +
          ':' +
          (minutes > 9 ? minutes : '0' + minutes) +
          ':' +
          (seconds > 9 ? seconds : '0' + seconds),
      );
    }
  };

  useEffect(() => {
    const id = setInterval(() => {
      startTimer();
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="predrop-body-container-outer">
      <div className="predrop-body-container-inner">
        <div>
          <div className="predrop-small-bubble predrop-animation-monitor-1">
            <div className="predrop-text">10AM PST</div>
          </div>
          <div className="predrop-small-bubble predrop-animation-monitor-2">
            <div className="predrop-text">1PM EST</div>
          </div>
        </div>
        <div className="predrop-center-container">
          <div className="predrop-large-bubble">
            <>
              <div className="predrop-title-text" style={{marginTop: '1rem'}}>
                DEC. 15th
              </div>
              <div className="predrop-text predrop-timer">{timer}</div>
            </>
            <div className="predrop-button-container">
              <input
                className="general-input body-text"
                style={{textAlign: 'center', marginTop: '2rem'}}
                onChange={onChangeEmailHandler}
                value={email}
                type="text"
                placeholder="ENTER EMAIL"
              />
              <button
                style={{marginTop: '.5rem'}}
                className="predrop-button-text"
                onClick={submitHandler}
              >
                NOTIFY ME
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="predrop-small-bubble predrop-animation-monitor-3">
            <div className="predrop-text predrop-spacer">INSTA</div>
            <a
              href="https://www.instagram.com/skarcity.art/"
              className="about-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              @<span className="text-link">SKARCITY.ART</span>
            </a>
          </div>
          <div className="predrop-small-bubble predrop-animation-monitor-4">
            <div className="predrop-text">6PM UTC</div>
          </div>
        </div>
      </div>
    </div>
  );
}
