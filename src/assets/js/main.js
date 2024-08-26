window.addEventListener('scroll', function () {
    const navbar = document.getElementById('header');
    if (window.scrollY > 0) {
      navbar.style.transition = 'background-color 0.3s';
      navbar.style.backgroundColor = 'white';
      navbar.classList.add ('z-50');
    } else {
      navbar.style.transition = 'background-color 0.3s';
      navbar.style.backgroundColor = 'transparent';
      navbar.classList.remove ('z-50');
    }
  });
  
  function Menu(e) {
    let list = document.querySelector('ul');
        
    e.name === 'menu' ? (e.name = "close", list.classList.add('top=[80px]'),
      list.classList.add('opacity-100')) : (e.name = "menu", list.classList.remove('top[80px]'), list.classList.remove('opacity-100%'))
  
  };

// Hamburger Menu 
document.getElementById('hamburger').addEventListener('click', function() {
    const menu = document.getElementById('navbar-hamburger');
    const navMobile = document.getElementById('nav-mobile');
    if (menu.style.top === '65px') {
      menu.style.top = '-180%';
      navMobile.classList.remove('mobile:bg-white');
      hamburgerIcon.classList.remove('open');
  } else {
      menu.style.top = '65px';
      hamburgerIcon.classList.add('open');
      navMobile.classList.add('mobile:bg-white');
  }
  });
  // Hamburger menu end 
  
  const menuItems = document.querySelectorAll('.navbar-hamburger ul li');
  menuItems.forEach(item => {
      item.addEventListener('click', function() {
          menuItems.forEach(i => i.classList.remove('bg-blue'));
          this.classList.add('bg-');
      });
  });

  document.querySelectorAll('.dropdown').forEach(function (dropdown) {
    const icon = dropdown.querySelector('.icon');
    const content = dropdown.querySelector('.dropdown-content');

    dropdown.addEventListener('click', function () {
        if (content.classList.contains('hidden')) {
            content.classList.remove('fade-out');
            content.classList.remove('hidden');
            icon.classList.add('rotate-180');
        } else {
            content.classList.add('fade-out');
            icon.classList.remove('rotate-180');
            // Tunggu animasi fade-out selesai sebelum menyembunyikan elemen
            setTimeout(function () {
                content.classList.add('hidden');
                content.classList.remove('fade-out');
            }, 300); // Sesuaikan durasi timeout sesuai dengan durasi animasi
        }
    });

    document.addEventListener('click', function (event) {
        if (!dropdown.contains(event.target)) {
            if (!content.classList.contains('hidden')) {
                content.classList.add('fade-out');
                icon.classList.remove('rotate-180');
                setTimeout(function () {
                    content.classList.add('hidden');
                    content.classList.remove('fade-out');
                }, 300);
            }
        }
    });
});
