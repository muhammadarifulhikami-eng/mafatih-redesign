const MISJ_WA = "6285117762664";

const modal = document.getElementById("misjModal");
const modalKicker = document.getElementById("modalKicker");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");

function openPpdbModal() {
  modalKicker.textContent = "PPDB 2027/2028 · MAFATIH ISLAMIC SCHOOL";
  modalTitle.textContent = "Formulir Pendaftaran & Konsultasi";
  modalBody.innerHTML = `
    <p style="font-size:13.5px;color:#524c70;margin:0 0 12px;">Tersedia 3 skema pendaftaran: Regular, Subsidized (Financial Aid), dan Donor.</p>
    <form class="ppdb-form" id="ppdbForm">
      <input type="text" id="pName" placeholder="Nama Lengkap Calon Siswa" required />
      <select id="pLevel">
        <option value="Elementary Level (Full-Day School)">Elementary Level (Full-Day School)</option>
        <option value="Elementary Level (Online School)">Elementary Level (Online School)</option>
        <option value="Secondary Level (Online School)">Secondary Level (Online School)</option>
      </select>
      <select id="pTier">
        <option value="Regular">Jalur Regular</option>
        <option value="Subsidized (Financial Aid)">Jalur Subsidized (Financial Aid)</option>
        <option value="Donor">Jalur Donor</option>
      </select>
      <button type="submit" class="btn-purple-nav" style="width:100%;">Kirim via WhatsApp Resmi MISJ →</button>
    </form>
  `;
  document.getElementById("ppdbForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("pName").value.trim();
    const level = document.getElementById("pLevel").value;
    const tier = document.getElementById("pTier").value;
    const msg = `Assalamu'alaikum Admin Mafatih Islamic School,%0A%0ASaya ingin informasi PPDB 2027/2028:%0ANama Siswa: ${encodeURIComponent(name)}%0AJenjang: ${encodeURIComponent(level)}%0ASkema: ${encodeURIComponent(tier)}`;
    window.open(`https://wa.me/${MISJ_WA}?text=${msg}`, "_blank", "noopener");
  });
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

["openPpdbNav", "openPpdbHero"].forEach((id) => {
  document.getElementById(id)?.addEventListener("click", openPpdbModal);
});

document.querySelectorAll(".prog-card").forEach((card) => {
  card.addEventListener("click", openPpdbModal);
});

const newsContent = {
  tahsin: {
    kicker: "BERITA MISJ · 16–17 OKTOBER 2026",
    title: "Keseruan Fun Tahsin Camp di Mafatih Islamic School Jakarta",
    body: "Mafatih Islamic School Jakarta (MISJ) menyelenggarakan Fun Tahsin Camp untuk membiasakan siswa mencintai, membaca, dan memperbaiki tahsin Al-Qur'an dalam suasana yang hangat dan menyenangkan."
  },
  brin: {
    kicker: "KEGIATAN SAINS",
    title: "Pengalaman Study Tour Edukatif ke Animalium BRIN",
    body: "Belajar sains terasa jauh lebih hidup ketika siswa dapat mengamati langsung keanekaragaman fauna dan berdiskusi bersama para peneliti di Animalium BRIN."
  },
  mading: {
    kicker: "KARYA SISWA & AKADEMIK",
    title: "Mading Pekan Ini & Pelaksanaan PTS Semester Ganjil",
    body: "Karya tulis, ilustrasi, dan kreativitas siswa ditampilkan setiap pekan pada Mading Sekolah sebagai bagian dari budaya literasi Mafatih Islamic School Kalibata."
  }
};

document.querySelectorAll(".news-card").forEach((card) => {
  card.addEventListener("click", () => {
    const n = newsContent[card.getAttribute("data-news")];
    if (!n) return;
    modalKicker.textContent = n.kicker;
    modalTitle.textContent = n.title;
    modalBody.innerHTML = `<p style="font-size:14px;color:#524c70;">${n.body}</p>`;
    modal.classList.add("open");
  });
});

document.getElementById("modalClose")?.addEventListener("click", closeModal);
modal?.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

const mobileToggle = document.getElementById("mobileToggle");
const mobileDrawer = document.getElementById("mobileDrawer");
mobileToggle?.addEventListener("click", () => mobileDrawer.classList.toggle("open"));
mobileDrawer?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => mobileDrawer.classList.remove("open"));
});
