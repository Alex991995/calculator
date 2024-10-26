const containerTheme = document.querySelector('.theme');

export function changeTheme() {
  const theme = containerTheme.getAttribute('data-theme');
  if (theme) {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    containerTheme.setAttribute('data-theme', newTheme);
  }
}
