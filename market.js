//dark/light mode
const toggleButton = document.getElementById('theme-toggle');
  
    toggleButton.addEventListener('click', () => {
      const body = document.body;
  
      // Toggle manually between light and dark mode
      if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
      } else if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
      } else {
        // No class set yet, determine system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        body.classList.add(prefersDark ? 'light-mode' : 'dark-mode');
      }
    });
    