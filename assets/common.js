document.addEventListener('DOMContentLoaded', function() {
  // List of all courses for dropdown
  const coursesList = [
    { id: 'scratch', title: 'Scratch Programming' },
    { id: 'python', title: 'Python for Kids' },
    { id: 'web', title: 'Web Development' },
    { id: 'robotics', title: 'Robotics & Physical Computing' },
    { id: 'ai', title: 'Intro to AI & Machine Learning' },
    { id: 'game-dev', title: 'Game Development Basics' },
    { id: 'mobile', title: 'Intro to Mobile Apps' },
    { id: 'data', title: 'Data & Visualization' },
    { id: 'electronics', title: 'Basics of Electronics' },
    { id: 'minecraft-mods', title: 'Minecraft Modding' },
    { id: 'maker', title: 'Maker & 3D Printing' },
    { id: 'uiux', title: 'UI / UX Fundamentals' },
    { id: 'cybersec', title: 'Junior Cybersecurity' },
    { id: 'animation', title: 'Creative Animation' },
    { id: 'math-coding', title: 'Math with Code' }
  ];

  // Build courses dropdown HTML
  const coursesDropdown = `
    <div class="nav-dropdown">
      <button class="nav-dropdown-toggle">Courses <span class="dropdown-arrow">▼</span></button>
      <div class="nav-dropdown-menu">
        ${coursesList.map(c => `<a href="courses/${c.id}.html" class="nav-dropdown-item">${c.title}</a>`).join('')}
      </div>
    </div>
  `;

  // navbar HTML - updated links
  const navbar = `
    <header class="site-navbar" role="banner">
      <div class="nav-inner">
        <a class="brand" href="index.html">
          <span class="logo" aria-hidden="true">FT</span>
          <div>
            <div class="title">Future Teck</div>
            <div class="subtitle">Coding for curious kids</div>
          </div>
        </a>

        <button class="site-nav-toggle" id="navToggle" aria-label="Menu">
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0" width="20" height="2" rx="1" fill="#0f5fd8"/><rect y="6" width="20" height="2" rx="1" fill="#0f5fd8"/><rect y="12" width="20" height="2" rx="1" fill="#0f5fd8"/></svg>
        </button>

        <nav class="site-nav" id="siteNav" role="navigation" aria-label="Main navigation">
          ${coursesDropdown}
          <a href="about.html">About</a>
          <a href="contact.html">Contact</a>
        </nav>
      </div>
    </header>
  `;

  const footer = `
    <footer class="site-footer" id="footer" role="contentinfo">
      <div class="footer-inner">
        <div class="footer-section">
          <div class="footer-logo">
            <span class="footer-logo-icon">FT</span>
            <div>
              <h4 style="margin:0">Future Teck</h4>
              <p style="margin:4px 0 0 0;font-size:12px">Empowering young coders</p>
            </div>
          </div>
          <p>Building the next generation of creators with playful, hands-on programming education.</p>
        </div>

        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul style="list-style:none;padding:0;margin:0">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="index.html">Courses</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Contact</h4>
          <p><strong>Email:</strong><br><a href="mailto:info@futureteck.com">info@futureteck.com</a></p>
          <p><strong>Phone:</strong><br>+1 (555) 123-4567</p>
        </div>

        <div class="footer-section">
          <h4>Follow Us</h4>
          <div class="social-links">
            <a href="#" class="social-link">Instagram</a>
            <a href="#" class="social-link">Facebook</a>
            <a href="#" class="social-link">Twitter</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© <span id="site-year"></span> Future Teck — All rights reserved</p>
      </div>
    </footer>
  `;

  // Inject navbar at top and footer at bottom
  document.body.insertAdjacentHTML('afterbegin', navbar);
  document.body.insertAdjacentHTML('beforeend', footer);

  // Set year
  document.getElementById('site-year').textContent = new Date().getFullYear();

  // Dropdown toggle functionality
  const dropdownToggle = document.querySelector('.nav-dropdown-toggle');
  const dropdownMenu = document.querySelector('.nav-dropdown-menu');

  if(dropdownToggle) {
    dropdownToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdownMenu.classList.toggle('open');
    });

    // Close dropdown when clicking a course link
    document.querySelectorAll('.nav-dropdown-item').forEach(item => {
      item.addEventListener('click', () => {
        dropdownMenu.classList.remove('open');
      });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
      dropdownMenu.classList.remove('open');
    });
  }

  // Mobile toggle
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('siteNav');
  toggle && toggle.addEventListener('click', () => {
    if(nav.classList.contains('open')) nav.classList.remove('open');
    else nav.classList.add('open');
  });

  // Close nav when clicking a link (mobile)
  nav && nav.addEventListener('click', (e) => {
    if(e.target.tagName === 'A') nav.classList.remove('open');
  });
});
