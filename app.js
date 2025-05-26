const menu = document.querySelector('#mobile-menu')
const menulinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menulinks.classList.toggle('active');
});
 
  /*window.addEventListener('load', () => {
  setTimeout(() => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, 3000); // opóźnienie 3 sekundy
});*/

/*document.addEventListener('DOMContentLoaded', function () {
  const scrollBtn = document.getElementById('scrollBtn');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const homeSection = document.getElementById('home');
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});*/

document.addEventListener('DOMContentLoaded', function () {
  const introSection = document.getElementById('intro');
  const homeSection = document.getElementById('home');

  if (introSection && homeSection) {
    introSection.addEventListener('click', function () {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
});