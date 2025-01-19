const button1 = document.getElementById("btn1")
const button2 = document.getElementById("btn2")
button1.addEventListener("click", function(event){
    alert("Оу, спасибо!")
});
button2.addEventListener("click", function(event) {
    alert("Спасибо за положительный выбор!")
})
let heartImages = [
  'heart1.png',
  'heart2.png',
  'heart3.png'
];
  function createHeart(x, y) {
      const heart = document.createElement('img');
      heart.classList.add('heart');
  
      const randomImage = heartImages[Math.floor(Math.random() * heartImages.length)];
      heart.src = randomImage;
  
      const size = Math.random() * 20;
      heart.style.width = `${size}px`;
      heart.style.height = 'auto';
  
      heart.style.position = 'absolute'; // Убедитесь, что позиция абсолютная
      heart.style.left = `${x - size / 2}px`;
      heart.style.top = `${y - size / 2}px`;
  
      const rotation = Math.random() * 360;
      heart.style.transform = `rotate(${rotation}deg)`;
  
      document.body.appendChild(heart);
  
      setTimeout(() => {
          heart.style.transition = 'opacity 1s, transform 1s';
          heart.style.opacity = '0';
          heart.style.transform += ' translateY(-20px) scale(0.5)';
  
          heart.addEventListener('transitionend', () => heart.remove());
      }, 10);
  }
  document.addEventListener('mousemove', function (event) {
      // Проверяем, наведен ли курсор на элемент <li>
      const target = event.target;
      if (target.tagName.toLowerCase() === 'button') {
          return; // Не создаём лепестки над элементами <li>
      }
  
      createHeart(event.pageX, event.pageY);
  });

