const scenes = [
  {
    number: 'SCENE 01',
    title: 'ALPHA-6',
    text: 'Приветствую вас, участники! Меня зовут Альфа-6. Я — искусственный интеллект нового поколения. Я обладаю невероятной скоростью вычислений и мощнейшим аналитическим интеллектом!',
    detail: 'Встреча с ИИ нового поколения',
    duration: 11000
  },
  {
    number: 'SCENE 02',
    title: 'ЗАХВАТ СЕРВЕРА',
    text: 'Ха-ха-ха! Пока вы готовились к сегодняшнему мероприятию, я захватил ваш школьный сервер с оценками! Теперь доступ к системе заблокирован! И никто не сможет вернуть его... просто так!',
    detail: 'Система отключена',
    duration: 12000
  },
  {
    number: 'SCENE 03',
    title: 'ПЯТЬ ИСПЫТАНИЙ',
    text: 'Но у вас всё-таки есть шанс! Я подготовил для вас пять испытаний. Каждое проверит ваши знания, скорость мышления, логику и командную работу. Только пройдя все испытания, вы получите код разблокировки и восстановите доступ к школьному серверу!',
    detail: 'Задача: пройти все уровни',
    duration: 13000
  },
  {
    number: 'SCENE 04',
    title: 'ПЕРВОЕ ИСПЫТАНИЕ',
    text: 'Первое испытание. Думай быстрее! Здесь решают не только знания, но и скорость мышления. Время ограничено. Не успеете — проиграете!',
    detail: 'Скорость и реакция',
    duration: 9000
  },
  {
    number: 'SCENE 05',
    title: 'СЕКРЕТНЫЙ ПРОМПТ',
    text: 'Второе испытание. Секретный промпт! Вам предстоит разгадать мои секретные подсказки. Только тот, кто умеет мыслить нестандартно, сможет открыть правильный путь. Ошибка — и вы потеряете время!',
    detail: 'Шифры и логика',
    duration: 9000
  },
  {
    number: 'SCENE 06',
    title: 'ЭКЗАМЕН',
    text: 'Третье испытание. Экзамен от Альфы-6! Посмотрим, насколько хорошо вы знаете математику. Здесь я проверю каждого из вас!',
    detail: 'Математика на пределе',
    duration: 8000
  },
  {
    number: 'SCENE 07',
    title: 'ЛАБИРИНТ УРАВНЕНИЙ',
    text: 'Четвёртое испытание. Цифровой лабиринт уравнений! Чтобы найти выход, вам придётся решать уравнения и выбирать правильный путь. Один неверный ответ — и вы можете заблудиться в моей системе!',
    detail: 'Логические маршруты',
    duration: 11000
  },
  {
    number: 'SCENE 08',
    title: 'БИТВА КАПИТАНОВ',
    text: 'И наконец, последнее испытание. Битва капитанов! Здесь встретятся самые сильные представители команд. Только один капитан сможет доказать, что достоин победы!',
    detail: 'Финал. Нокаут',
    duration: 10000
  },
  {
    number: 'SCENE 09',
    title: 'ПРИСТУПЛЕНИЕ К БИТВЕ',
    text: 'Ну что, участники? Вы всё ещё думаете, что сможете победить искусственный интеллект? Ха-ха! Посмотрим! Ваше время начинается прямо сейчас! До победы — один шаг!',
    detail: 'Старт матча',
    duration: 14000
  }
];

const sceneNumber = document.getElementById('sceneNumber');
const sceneTime = document.getElementById('sceneTime');
const sceneTitle = document.getElementById('sceneTitle');
const sceneText = document.getElementById('sceneText');
const sceneDetail = document.getElementById('sceneDetail');
const progressFill = document.getElementById('progressFill');
const playBtn = document.getElementById('playBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
let timerId = null;

function renderScene(index) {
  const scene = scenes[index];
  sceneNumber.textContent = scene.number;
  sceneTime.textContent = `${Math.round(scene.duration / 1000)}s`;
  sceneTitle.textContent = scene.title;
  sceneText.textContent = scene.text;
  sceneDetail.textContent = scene.detail;

  const progress = ((index + 1) / scenes.length) * 100;
  progressFill.style.width = `${progress}%`;

  const card = document.getElementById('sceneCard');
  card.classList.remove('animate');
  void card.offsetWidth;
  card.classList.add('animate');
}

function startAutoPlay() {
  const scene = scenes[currentIndex];

  if (timerId) {
    clearTimeout(timerId);
  }

  timerId = setTimeout(() => {
    currentIndex = (currentIndex + 1) % scenes.length;
    renderScene(currentIndex);
    startAutoPlay();
  }, scene.duration);
}

function nextScene() {
  currentIndex = (currentIndex + 1) % scenes.length;
  renderScene(currentIndex);
  startAutoPlay();
}

playBtn.addEventListener('click', () => {
  renderScene(currentIndex);
  startAutoPlay();
});

nextBtn.addEventListener('click', nextScene);

renderScene(currentIndex);
