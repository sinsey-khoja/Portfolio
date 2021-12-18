const menuToggle = document.querySelector('.toggle');
      const showcase = document.querySelector('.showcase');
      const navMenu = document.querySelector('.nav__menu')

      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        showcase.classList.toggle('active');
        navMenu.classList.toggle('active');
      })