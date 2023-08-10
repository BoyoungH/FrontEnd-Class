const toggleButton = document.getElementById('toggleButton');
  const content = document.getElementById('content');

  toggleButton.addEventListener('click', () => {
    if (content.style.display === 'none') {
      content.style.display = 'block'; // 버튼을 클릭하면 내용이 보이도록 변경
    } else {
      content.style.display = 'none'; // 버튼을 다시 클릭하면 내용을 숨김
    }
  });