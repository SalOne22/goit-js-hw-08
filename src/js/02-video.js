import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayerEl = document.getElementById('vimeo-player');
const player = new Player(vimeoPlayerEl);

player.on('timeupdate', throttle(onPlayerTimeUpdate, 1000));
window.addEventListener('DOMContentLoaded', updateTimeFromStorage);

const TIME_STORAGE_KEY = 'videoplayer-current-time';

function onPlayerTimeUpdate(time) {
  localStorage.setItem(TIME_STORAGE_KEY, time.seconds);
}

function updateTimeFromStorage() {
  const seconds = Number(localStorage.getItem(TIME_STORAGE_KEY));
  player.setCurrentTime(seconds);
}
