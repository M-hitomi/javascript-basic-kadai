const outputBtn = document.getElementById('btn');
const targetText = document.getElementById('text');
outputBtn.addEventListener('click', () => {
  targetText.textContent = 'ボタンをクリックしました';
});
