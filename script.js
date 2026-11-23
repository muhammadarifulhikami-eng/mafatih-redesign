const MISJ_WA = "6285117762664";

const modal = document.getElementById("misjModal");
const modalKicker = document.getElementById("modalKicker");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");

function openPpdbModal() {
  modalKicker.textContent = "PPDB 2027/2028 · MAFATIH ISLAMIC SCHOOL";
  modalTitle.textContent = "Formulir Pendaftaran & Konsultasi";
  modalBody.innerHTML = `
    <p style="font-size:13px;color:#524c70;margin:0 0 12px;">
      Tersedia 3 jalur pendaftaran: <strong>Reguler, Subsidi, dan Donatur</strong> (Kuota maks. 24 siswa/kelas 1).<br />
      Biaya pendaftaran &amp; asesmen psikolog: <strong>Rp450.000</strong> ke <strong>BSI 5773012280</strong> a.n. <strong>Generasi Aman Sentosa</strong>.
    </p>
    <form class="ppdb-form" id="ppdbForm">
      <input type="text" id="pName" placeholder="Nama Lengkap Anak" required />
      <input type="text" id="pOrtu" placeholder="Nama Orang Tua / Wali" required />
      <select id="pLevel">
        <option value="Elementary Level (Full-Day School)">Elementary Level (Full-Day School)</option>
        <option value="Elementary Level (Online School)">Elementary Level (Online School)</option>
        <option value="Secondary Level (Online School)">Secondary Level (Online School)</option>
      </select>
      <select id="pTier">
        <option value="Reguler">Jalur Reguler (DP UP Rp4.000.000)</option>
        <option value="Subsidi">Jalur Subsidi / Financial Aid (DP UP Rp2.000.000)</option>
        <option value="Donatur">Jalur Donatur</option>
      </select>
      <button type="submit" class="btn-purple-sm" style="width:100%;padding:12px;">Kirim via WhatsApp Resmi MISJ →</button>
    </form>
  `;
  document.getElementById("ppdbForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("pName").value.trim();
    const ortu = document.getElementById("pOrtu").value.trim();
    const level = document.getElementById("pLevel").value;
    const tier = document.getElementById("pTier").value;
    const msg = `Assalamu'alaikum Admin Mafatih Islamic School,%0A%0ASaya ingin mendaftar PPDB 2027/2028:%0ANama Anak: ${encodeURIComponent(name)}%0ANama Ortu: ${encodeURIComponent(ortu)}%0AJenjang: ${encodeURIComponent(level)}%0AJalur: ${encodeURIComponent(tier)}`;
    window.open(`https://wa.me/${MISJ_WA}?text=${msg}`, "_blank", "noopener");
  });
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

["openPpdbHero", "openPpdbReg"].forEach((id) => {
  document.getElementById(id)?.addEventListener("click", openPpdbModal);
});

document.getElementById("orderBookBtn")?.addEventListener("click", () => {
  window.open(
    `https://wa.me/${MISJ_WA}?text=${encodeURIComponent("Assalamu'alaikum Admin Mafatih Islamic School, saya ingin memesan Buku Terbitan Mafatih.")}`,
    "_blank",
    "noopener"
  );
});

// Toggle 14 Teacher Profiles
const toggleTeachersBtn = document.getElementById("toggleAllTeachersBtn");
let teachersExpanded = false;
toggleTeachersBtn?.addEventListener("click", () => {
  teachersExpanded = !teachersExpanded;
  document.querySelectorAll(".extra-teacher").forEach((el) => {
    el.classList.toggle("hidden", !teachersExpanded);
  });
  toggleTeachersBtn.textContent = teachersExpanded ? "Tutup Sebagian ↑" : "Lihat Semua 14 Profil ↓";
});

// Filter Books
function filterBooks(cat) {
  document.querySelectorAll(".book-tab").forEach((t) => {
    t.classList.toggle("active", t.getAttribute("data-book") === cat);
  });
  document.querySelectorAll(".book-card").forEach((card) => {
    const c = card.getAttribute("data-book-cat");
    card.classList.toggle("hidden", cat !== "all" && c !== cat);
  });
}

document.querySelectorAll(".book-tab").forEach((tab) => {
  tab.addEventListener("click", () => filterBooks(tab.getAttribute("data-book")));
});
document.querySelectorAll("[data-book-tab]").forEach((link) => {
  link.addEventListener("click", () => filterBooks(link.getAttribute("data-book-tab")));
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
