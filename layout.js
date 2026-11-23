(function () {
  const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const isActive = (page) => (current === page ? "active" : "");

  const headerHtml = `
  <header class="misj-header" id="misjHeader">
    <div class="container header-inner">
      <a href="index.html" class="misj-brand" aria-label="Mafatih Islamic School">
        <img src="assets/logo-mafatih.png" alt="Logo Mafatih Islamic School" class="misj-logo-img" />
        <div class="brand-text">
          <strong>Mafatih Islamic School</strong>
          <span>Shaping Future Leaders with Islamic Values</span>
        </div>
      </a>

      <nav class="misj-nav" aria-label="Navigasi Utama">
        <a href="index.html" class="nav-link ${isActive("index.html")}">Home</a>
        <a href="parents.html" class="nav-link ${isActive("parents.html")}">For Parents</a>
        <a href="yayasan.html" class="nav-link ${isActive("yayasan.html")}">The Foundation</a>
        <a href="donation.html" class="nav-link ${isActive("donation.html")}">Donation</a>

        <div class="nav-dropdown">
          <a href="akreditasi.html" class="nav-link nav-drop-trigger">The School <span aria-hidden="true">▾</span></a>
          <div class="dropdown-menu">
            <a href="akreditasi.html">Accreditation</a>
            <a href="teachers.html">Teacher &amp; Staff Profiles</a>
            <a href="kurikulum.html">Curriculum</a>
            <a href="academic-year.html">Academic Year</a>
            <div class="dropdown-sub">
              <a href="buku-impor.html">Books <span class="sub-arrow">▸</span></a>
              <div class="dropdown-submenu">
                <a href="buku-impor.html">Imported Books</a>
                <a href="buku-mafatih.html">Mafatih Books</a>
              </div>
            </div>
            <a href="registration.html">Registration (Full-day School)</a>
            <a href="beasiswa.html">Financial Aid</a>
            <a href="bulletins.html">School Bulletins</a>
          </div>
        </div>

        <a href="karya-kami.html" class="nav-link ${isActive("karya-kami.html")}">Karya Kami</a>
        <a href="career.html" class="nav-link ${isActive("career.html")}">Career</a>
        <a href="contact.html" class="nav-link ${isActive("contact.html")}">Contact Us</a>
      </nav>

      <button type="button" class="mobile-toggle" id="mobileToggle" aria-label="Menu">☰</button>
    </div>

    <div class="mobile-drawer" id="mobileDrawer">
      <a href="index.html">Home</a>
      <a href="parents.html">For Parents</a>
      <a href="yayasan.html">The Foundation</a>
      <a href="donation.html">Donation</a>
      <div class="mobile-sub-group">
        <strong>The School</strong>
        <a href="akreditasi.html">• Accreditation</a>
        <a href="teachers.html">• Teacher &amp; Staff Profiles</a>
        <a href="kurikulum.html">• Curriculum</a>
        <a href="academic-year.html">• Academic Year</a>
        <a href="buku-impor.html">• Books: Imported Books</a>
        <a href="buku-mafatih.html">• Books: Mafatih Books</a>
        <a href="registration.html">• Registration (Full-day School)</a>
        <a href="beasiswa.html">• Financial Aid</a>
        <a href="bulletins.html">• School Bulletins</a>
      </div>
      <a href="karya-kami.html">Karya Kami</a>
      <a href="career.html">Career</a>
      <a href="contact.html">Contact Us</a>
    </div>
  </header>`;

  const footerHtml = `
  <footer class="misj-footer">
    <div class="container footer-grid">
      <div>
        <div class="misj-brand light">
          <div class="footer-logo-badge">
            <img src="assets/logo-mafatih.png" alt="Logo Mafatih Islamic School" class="misj-logo-img" />
          </div>
          <div class="brand-text">
            <strong>Mafatih Islamic School</strong>
            <span>School of Tahfizh, Science and Leadership</span>
          </div>
        </div>
      </div>

      <div class="footer-col">
        <h4>Menu Utama</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="parents.html">For Parents</a></li>
          <li><a href="yayasan.html">The Foundation</a></li>
          <li><a href="donation.html">Donation</a></li>
          <li><a href="karya-kami.html">Karya Kami</a></li>
          <li><a href="career.html">Career</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>The School</h4>
        <ul>
          <li><a href="akreditasi.html">Accreditation</a></li>
          <li><a href="teachers.html">Teacher &amp; Staff Profiles</a></li>
          <li><a href="kurikulum.html">Curriculum</a></li>
          <li><a href="academic-year.html">Academic Year</a></li>
          <li><a href="buku-impor.html">Imported Books</a></li>
          <li><a href="buku-mafatih.html">Mafatih Books</a></li>
          <li><a href="registration.html">Registration (Full-day School)</a></li>
          <li><a href="beasiswa.html">Financial Aid</a></li>
          <li><a href="bulletins.html">School Bulletins</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Contact Us</h4>
        <ul>
          <li>Jln. Kalibata Tengah Raya No. 3a, RT 01 RW 03, Kalibata, Pancoran, Jakarta Selatan 12740</li>
          <li><a href="https://wa.me/6285117762664" target="_blank" rel="noopener noreferrer">WhatsApp Sekolah: 085117762664</a></li>
          <li><a href="mailto:admin@mafatihislamicschool.sch.id">E-mail: admin@mafatihislamicschool.sch.id</a></li>
          <li>
            <a href="https://www.instagram.com/mafatihislamicschool/" target="_blank" rel="noopener noreferrer">Instagram</a> ·
            <a href="https://www.youtube.com/channel/UC7V78YkiaCRUO4ugJRPNH3A" target="_blank" rel="noopener noreferrer">YouTube</a> ·
            <a href="https://www.facebook.com/mafatihkalibata/" target="_blank" rel="noopener noreferrer">Facebook</a> ·
            <a href="https://twitter.com/mafatih_is" target="_blank" rel="noopener noreferrer">Twitter/X</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="container footer-bottom">
      <span>© Mafatih Islamic School · Yayasan Generasi Aman Sentosa.</span>
      <span>Redesign by <a href="https://dev.hikami.my.id" target="_blank" rel="noopener noreferrer" class="hikami-credit">HIKAMI-DEV | ひかみ</a></span>
    </div>
  </footer>`;

  const hSlot = document.getElementById("site-header");
  const fSlot = document.getElementById("site-footer");
  if (hSlot) hSlot.outerHTML = headerHtml;
  if (fSlot) fSlot.outerHTML = footerHtml;

  const mobileToggle = document.getElementById("mobileToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");
  mobileToggle?.addEventListener("click", () => mobileDrawer.classList.toggle("open"));

  // Interactive 3D Tilt & Specular Sheen
  const tiltTargets = document.querySelectorAll(".adm-card, .teacher-card, .news-card, .founder-card, .target-item");
  tiltTargets.forEach((card) => {
    card.classList.add("tilt-card");
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rx = ((y / rect.height) - 0.5) * -5;
      const ry = ((x / rect.width) - 0.5) * 5;
      card.style.setProperty("--mx", `${x}px`);
      card.style.setProperty("--my", `${y}px`);
      card.style.transform = `translateY(-6px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
})();
