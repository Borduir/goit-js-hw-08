import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

if (!localStorage.getItem('CurrentTime')) {
  player.setCurrentTime(0);
} else {
  localTime = localStorage.getItem('CurrentTime');
  player.setCurrentTime(localTime);
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
