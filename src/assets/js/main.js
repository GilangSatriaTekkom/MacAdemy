window.addEventListener('scroll', function () {
    const navbar = document.getElementById('header');
    if (window.scrollY > 0) {
      navbar.style.transition = 'background-color 0.3s';
      navbar.style.backgroundColor = 'white';
      navbar.style.width = '100%';
      navbar.style.left = '0';
      navbar.classList.add('fixed');
      navbar.classList.add('desktop:px-[80px]');
      navbar.classList.add('tablet:px-[16px]');
      navbar.classList.add('mobile:px-[25px]');
      navbar.classList.add ('z-50');
    } else {
      navbar.style.transition = 'background-color 0.3s';
      navbar.style.backgroundColor = 'transparent';
      navbar.style.width = '100%';
      navbar.style.left = '0';
      navbar.classList.remove('fixed');
      navbar.classList.remove('px-[80px]');
      navbar.classList.remove('tablet:px-[16px]');
      navbar.classList.remove('mobile:px-[25px]');
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
    if (menu.style.right === '0px') {
      menu.style.right = '-150%';
      navMobile.classList.remove('mobile:bg-white');
      hamburgerIcon.classList.remove('open');
  } else {
      menu.style.right = '0px';
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



  // Grid Canvas
  const canvas = document.getElementById('gridCanvas');
  const ctx = canvas.getContext('2d');
  const gridSize = 120; // Ukuran sel grid
  const meteorSize = 5; // Ukuran meteor
  const tailLength = 100; // Panjang ekor meteor
  const tailWidth = 6; // Lebar ekor meteor
  const numMeteors = 6; // Jumlah meteor
  const fadeDuration = 10000; // Durasi fading (10 detik)
  const resetDuration = 7000; // Durasi reset (7 detik)
  const lineSpacing = 80; // Jarak antara garis vertikal

  let meteors = [];
  let startTime = Date.now();
  const verticalLinePositions = []; // Posisi garis vertikal

  function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawGrid(); // Gambar grid setelah ukuran canvas diubah
  }

  function drawGrid() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = '#dbdbdb'; // Warna garis grid
      ctx.lineWidth = 1;

      // Menggambar garis vertikal
      verticalLinePositions.length = 0; // Kosongkan array posisi garis vertikal
      for (let x = 0; x <= canvas.width; x += lineSpacing) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
          verticalLinePositions.push(x); // Simpan posisi garis vertikal
      }

      // Menggambar garis horizontal
      for (let y = 0; y <= canvas.height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
      }
  }

  class Meteor {
    constructor(index) {
        this.size = meteorSize;
        this.tailLength = 50 + Math.random() * 50; // Panjang ekor bervariasi
        this.tailWidth = tailWidth;
        this.reset(index);
    }

    reset(index) {
        // Mengatur posisi garis vertikal untuk meteor
        const lineIndex = index % verticalLinePositions.length;
        this.x = verticalLinePositions[lineIndex];
        this.y = Math.random() * canvas.height; // Posisi y acak
        this.direction = index < 3 ? 'up' : 'down'; // 3 meteor ke atas, 3 meteor ke bawah
        this.speed = (Math.random() * 0.5) + 0.5; // Kecepatan meteor, disesuaikan
        this.startTime = Date.now(); // Waktu mulai animasi
        this.color = 'rgb(176, 58, 255)'; // Warna ekor meteor
    }

    update() {
        const elapsedTime = Date.now() - this.startTime;
        const progress = (elapsedTime % fadeDuration) / fadeDuration; // Perhitungan progres fading

        // Perhitungan fading
        const alpha = Math.sin(progress * Math.PI); // Fading effect (0 to 1)

        // Update posisi meteor
        if (this.direction === 'up') {
            this.y -= this.speed;
            if (this.y < 0) this.y = canvas.height; // Reset ke bawah
        } else {
            this.y += this.speed;
            if (this.y > canvas.height) this.y = 0; // Reset ke atas
        }

        return alpha;
    }

    draw(alpha) {
        
        // Gambar ekor meteor dengan gradasi
        const tailGradient = ctx.createLinearGradient(
            this.x, this.y - (this.direction === 'up' ? this.tailLength : -this.tailLength),
            this.x, this.y
        );
        tailGradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
        tailGradient.addColorStop(1, this.color);

      
        ctx.beginPath();
        ctx.moveTo(this.x, this.y - (this.direction === 'up' ? this.tailLength : -this.tailLength));
        ctx.lineTo(this.x, this.y);
        ctx.lineWidth = this.tailWidth;
        ctx.strokeStyle = tailGradient;
        ctx.stroke();

          // Tambahkan shadow untuk glow effect pada ekor
          ctx.shadowBlur = 15; // Atur intensitas blur untuk glow
          ctx.shadowColor = this.color; // Warna glow sesuai dengan warna ekor
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 0;
  

        // Gambar meteor dengan efek glow
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}


  function init() {
      meteors = [];
      for (let i = 0; i < numMeteors; i++) {
          meteors.push(new Meteor(i));
      }
  }

  function animate() {
      drawGrid(); // Gambar grid terlebih dahulu

      // Reset meteorit setelah 7 detik
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime > resetDuration) {
          init(); // Reset meteorit
          startTime = Date.now(); // Restart timer
      }

      meteors.forEach(meteor => {
          const alpha = meteor.update();
          meteor.draw(alpha);
      });

      requestAnimationFrame(animate);
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas(); // Gambar grid setelah ukuran canvas diubah
  init();
  animate();

  //Grid Canvas End