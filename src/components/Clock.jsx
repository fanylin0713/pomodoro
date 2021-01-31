import React, { useState } from 'react';
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const mapStateToProps = (state) => ({
  minutes: state.clock.minutes,
  seconds: state.clock.seconds,
})

const Clock = ({ minutes, seconds }) => {
  const timer = minutes * 60 + seconds;
  const [remainSecond, setRemainSecond] = useState(0)
  const startTime = Date.now()

  const handleCountDown = () => {
    setInterval(() => {
      // 計算剩餘秒數
      const pastSeconds = parseInt((Date.now() - startTime) / 1000)
      const remain = (timer - pastSeconds)
      setRemainSecond(remain < 0 ? 0 : remain)
      console.log('[timer] count down: ', remain)

      // 檢查是否結束
      if (remain <= 0) {
        clearInterval(handleCountDown)
        console.log(`[timer] == stop count down ${timer}s  ==`)
        // onTimeUp() // 透過 prop 通知外部時間已到
      }
    }, 1000)
  }

  return (
    <>
      <Typography>
        {new Date(timer * 1000).toISOString().substr(14, 5)}
      </Typography>
      <Button onClick={handleCountDown}>go</Button>
      <Typography>
        {new Date(remainSecond * 1000).toISOString().substr(14, 5)}
      </Typography>
    </>
  );
};

export default connect(
  mapStateToProps
)(Clock);
