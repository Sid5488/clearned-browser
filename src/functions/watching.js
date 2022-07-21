window.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('input');

  input.addEventListener('keydown', (event) => {
    const { key } = event;
    
    if(key === 'Enter') {
      localStorage.setItem('url', JSON.stringify(input.value));
      window.open(`htpp://${input.value}`);
    }
  });
});