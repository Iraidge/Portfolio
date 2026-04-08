let current = 0;
let target = 0;
const ease = 0.08; // скорость догонки — меньше = медленнее

function lerp(start, end, factor) {
  return start + (end - start) * factor;
}

function update() {
  target = window.scrollY;
  current = lerp(current, target, ease);

  document.body.style.transform = `translateY(${-(current)}px)`;
  requestAnimationFrame(update);
}

// Фиксируем body и даём странице знать реальную высоту
document.body.style.position = 'fixed';
document.body.style.width = '100%';
document.body.style.top = '0';

const scrollHeight = document.body.scrollHeight;
document.documentElement.style.height = scrollHeight + 'px';

update();
console.log("JS подключен");