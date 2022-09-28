import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

if (localStorage.length === 0) {
  player.setCurrentTime(0);
} else {
  player.setCurrentTime(localStorage.getItem('CurrentTime'));
}

player.on(
  'timeupdate',
  throttle(function () {
    player.getCurrentTime().then(function (seconds) {
      console.log(seconds);
      localStorage.setItem('CurrentTime', seconds);
    });
  }, 1000)
);
