function updateClock() {
  const now = new Date();

  // 時間取得
  const h = now.getHours();
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');

  // 日付取得
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const date = String(now.getDate()).padStart(2, '0');
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const day = weekdays[now.getDay()];

  // 時刻と日付を表示
  document.getElementById('clock').textContent = `${String(h).padStart(2, '0')}:${m}:${s}`;
  document.getElementById('date').textContent = `${year}/${month}/${date} (${day})`;

  // 時間帯によってテーマ切り替え
  const body = document.body;
  body.className = ''; // 一度リセット

  if (h >= 5 && h < 11) {
    body.classList.add('morning');
  } else if (h >= 11 && h < 16) {
    body.classList.add('day');
  } else if (h >= 16 && h < 19) {
    body.classList.add('evening');
  } else {
    body.classList.add('night');
  }
}

updateClock();
setInterval(updateClock, 1000);