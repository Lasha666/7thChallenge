function toggleCollapse(header) {
    var content = header.nextElementSibling;
    content.style.display = (content.style.display === 'block') ? 'none' : 'block';
  }

  document.addEventListener('DOMContentLoaded', function() {
      const thumbnails = document.querySelectorAll('.thumbnail');

      thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
          const mainImage = document.querySelector('.main-image');
          const selectedThumbnail = document.querySelector('.thumbnail.selected');

          if (selectedThumbnail) {
            selectedThumbnail.classList.remove('selected');
          }

          this.classList.add('selected');

          mainImage.src = this.src;
          mainImage.alt = this.alt;
        });
      });
    });

    document.addEventListener('DOMContentLoaded', function() {
        const plusIcon = document.getElementById('plus-icon');
        const minusIcon = document.getElementById('minus-icon');
        const counter = document.getElementById('counter');

        plusIcon.addEventListener('click', function() {
            let currentCount = parseInt(counter.textContent);
            counter.textContent = currentCount + 1;
        });

        minusIcon.addEventListener('click', function() {
            let currentCount = parseInt(counter.textContent);
            counter.textContent = currentCount - 1;
        });
    });

