const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated-in');
        }
    });
});

document.querySelectorAll('.animated').forEach(function (r) {
    observer.observe(r);
});