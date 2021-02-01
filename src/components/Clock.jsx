import React, { useState } from 'react';
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

const mapStateToProps = (state) => ({
  minutes: state.clock.minutes,
  seconds: state.clock.seconds,
})

const Clock = ({ minutes, seconds }) => {
  const timer = minutes * 60 + seconds;
  const [remainSecond, setRemainSecond] = useState(timer);
  const [start, setStart] = React.useState(false);
  const [over, setOver] = React.useState(false);
  const startTime = Date.now()
  let interval = undefined;

  const handleCountDown = () => {
      setStart(!start)
      if (!start) {
        interval = setInterval(() => {
          if (remainSecond > 0) {
            const pastSeconds = parseInt((Date.now() - startTime) / 1000)
            const remain = (timer - pastSeconds)
            setRemainSecond(remain < 0 ? 0 : remain);
          } else {
            handleStop();
            clearInterval(interval);
          }
        }, 1000);
      }
      else {
        clearInterval(interval);
        console.log(interval)
      }
  };

  const handleStop = () => {
    setStart(true)
    setRemainSecond(timer);
    clearInterval(interval);
  };

  const handleTodo = () => {
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography>
          {/* {todo} */}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          {new Date(remainSecond * 1000).toISOString().substr(14, 5)}
        </Typography>
      </Grid>
      <Grid item xs={4}>
      </Grid>
      <Grid item xs={4}>
        <IconButton onClick={handleCountDown}>
          {start ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
      </Grid>
      <Grid item xs={4}>
      </Grid>
    </Grid>
  );
};

export default connect(
  mapStateToProps
)(Clock);
