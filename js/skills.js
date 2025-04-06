function animateProgressBars() {
  
    const progressBars = document.querySelectorAll('.progress');
    const counters = document.querySelectorAll('.counter');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const percentage = bar.dataset.skill;
          bar.style.width = `${percentage}%`;
        }
      });
    }, { threshold: 0.4 });

    progressBars.forEach(bar => observer.observe(bar));

    // Animate counters
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText.replace('%', '');
        const increment = Math.ceil(target / 50);
  
        if (current < target) {
          counter.innerText = `${current + increment}%`;
          setTimeout(updateCount, 30);
        } else {
          counter.innerText = `${target}%`;
        }
      };
  
      const counterObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            updateCount();
            counterObserver.disconnect();
          }
        });
      }, { threshold: 0.6 });
  
      counterObserver.observe(counter);
    });
  }
  
  document.addEventListener('DOMContentLoaded', animateProgressBars);
  