import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

const setTime = () =>
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

const saveTime = () => {
  player
    .getCurrentTime()
    .then(num =>
      localStorage.setItem('videoplayer-current-time', num.toString())
    );
};

setTime();

player.on('timeupdate', throttle(saveTime, 1000));
