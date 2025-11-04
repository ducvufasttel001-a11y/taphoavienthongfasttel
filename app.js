/* === PHẦN 1: CÀI ĐẶT LINKS === */
const LINKS = {
  sheet: "https://docs.google.com/spreadsheets/d/1NPNFTqpw1GAW3TIowdys5T0WVfcVs-GmrxZVw0W8f_M/edit?usp=sharing",
  bom:   "#" 
};
document.getElementById('btnSheet').href = LINKS.sheet;


/* === PHẦN 2: CHỨC NĂNG COPY SĐT (TOAST) === */
(function(){
  const callBtn = document.querySelector('.btn.call');
  const toast = document.getElementById('toast');
  
  if(callBtn && navigator.clipboard && toast){
    callBtn.addEventListener('click', function() {
      const phone = this.getAttribute('data-copy') || '0977101915';
      try { navigator.clipboard.writeText(phone); } catch(e) {}
      
      toast.textContent = 'Đã copy số: ' + phone;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 1800);
    });
  }
})();

/* === THÊM SỰ KIỆN CLICK "ĐANG CẬP NHẬT" CHO NÚT BOM === */
(function(){
  const bomBtn = document.getElementById('btnBom');
  const toast = document.getElementById('toast');
  
  if (bomBtn && toast) {
    bomBtn.addEventListener('click', function(e) {
      e.preventDefault(); 
      toast.textContent = 'Đang cập nhật...'; 
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 1800);
    });
  }
})();


/* === PHẦN 3: DỮ LIỆU THƯ VIỆN ẢNH (GALLERY) === */
const GALLERIES = {
  'patch-cord': { 
    title:'Patch cords & Pigtail', 
    desc:'LC/SC/FC/ST/MPO/MTP · simplex/duplex · UPC/APC · 0.9/2.0/3.0 mm · Uniboot/Breakout · 0.5–30 m.', 
    imgs:['images/Patch-cords/patch-cord-1.webp','images/Patch-cords/patch-cord-2.webp','images/Patch-cords/patch-cord-3.webp','images/Patch-cords/patch-cord-4.webp','images/Patch-cords/patch-cord-5.webp','images/Patch-cords/Pigtail-1.webp','images/Patch-cords/Pigtail-2.webp','images/Patch-cords/Pigtail-3.webp','images/Patch-cords/Pigtail-4.webp','images/Patch-cords/Pigtail-5.webp']
  },
  'adapter': { 
    title:'Adapter', 
    desc:'LC/SC/FC/ST · simplex/duplex · APC/UPC · housing/clip tiêu chuẩn.', 
    imgs:['images/Adapter/Adapter-1.webp','images/Adapter/Adapter-2.webp','images/Adapter/Adapter-3.webp','images/Adapter/Adapter-4.webp','images/Adapter/Adapter-5.webp','images/Adapter/Adapter-6.webp','images/Adapter/Adapter-7.webp','images/Adapter/Adapter-8.webp','images/Adapter/Adapter-9.webp','images/Adapter/Adapter-10.webp']
  },
  'cap-quang': { 
    title:'Cáp quang', 
    desc:'1FO–288FO · F8 ADSS/Drop/Indoor/Outdoor · Loose-tube/Tight-buffer · Armored STA/SWA.', 
    imgs:['images/Capquang/capquang-1.webp','images/Capquang/capquang-2.webp','images/Capquang/capquang-3.webp','images/Capquang/capquang-4.webp','images/Capquang/capquang-5.webp','images/Capquang/capquang-6.webp','images/Capquang/capquang-7.webp','images/Capquang/capquang-8.webp','images/Capquang/capquang-9.webp','images/Capquang/capquang-10.webp']
  },
  'odf': { 
    title:'ODF / Wall-box / LIU', 
    desc:'12/24/48/96F · 1U/2U/4U · slide-out/khay kéo · cassette/LIU · loaded/unloaded · SC/LC.', 
    imgs:['images/ODF/odf-1.webp','images/ODF/odf-2.webp','images/ODF/odf-3.webp','images/ODF/odf-4.webp','images/ODF/odf-5.webp','images/ODF/odf-6.webp','images/ODF/odf-7.webp','images/ODF/odf-8.webp','images/ODF/odf-9.webp','images/ODF/odf-10.webp']
  },
  'tu-rack': { 
    title:'Tủ rack & PDU', 
    desc:'Treo 6/9/12/15U · Đứng 27/32/42U · quạt/khay trượt · quản lý cáp · PDU 6–10 cổng.', 
    imgs:['images/Turack/rack-1.webp','images/Turack/rack-2.webp','images/Turack/rack-3.webp','images/Turack/rack-4.webp','images/Turack/rack-5.webp','images/Turack/rack-6.webp','images/Turack/rack-7.webp','images/Turack/rack-8.webp','images/Turack/rack-9.webp']
  },
  'wifi-poe': { 
    title:'Wi‑Fi 7 / 6 & PoE', 
    desc:'Wi‑Fi 7 (802.11be): MLO, 320 MHz, 4K‑QAM · Wi‑Fi 6/6E · PoE 802.3af/at/bt · VLAN, QoS.', 
    imgs:['images/wifi7/wifi7-1.webp','images/wifi7/wifi7-2.webp','images/wifi7/wifi7-3.webp','images/wifi7/wifi7-4.webp','images/wifi7/wifi7-5.webp','images/wifi7/wifi7-6.webp','images/wifi7/wifi7-7.webp','images/wifi7/wifi7-8.webp','images/wifi7/wifi7-9.webp','images/wifi7/wifi7-10.webp']
  },
  'feeder': { 
    title:'Feeder', 
    desc:'1/2″ · 7/8″ · jumper · phụ kiện chống nước, đầu nối DIN/N‑type.', 
    imgs:['images/Feeder/feeder-1.webp','images/Feeder/feeder-2.webp','images/Feeder/feeder-3.webp','images/Feeder/feeder-4.webp','images/Feeder/feeder-5.webp','images/Feeder/feeder-6.webp','images/Feeder/feeder-7.webp','images/Feeder/feeder-9.webp']
  },
  'repeater': { 
    title:'Kích sóng (Repeater)', 
    desc:'3G/4G/5G · anten ngoài trời + dây feeder.', 
    imgs:['images/Repeater/repeater-1.webp','images/Repeater/repeater-2.webp','images/Repeater/repeater-3.webp','images/Repeater/repeater-4.webp','images/Repeater/repeater-5.webp','images/Repeater/repeater-7.webp','images/Repeater/repeater-8.webp','images/Repeater/repeater-9.webp']
  }
};


/* === PHẦN 4: LOGIC MỞ/ĐÓNG MODAL (NÂNG CẤP LIGHTBOX) === */

// Lấy các phần tử DOM
const modal = document.getElementById('galleryModal');
const modalCard = modal.querySelector('.modal-card');
const grid = document.getElementById('galGrid');
const titleEl = document.getElementById('galTitle');
const descEl = document.getElementById('galDesc');
const closeBtn = modal.querySelector('.modal-close');

// Lấy các phần tử LIGHTBOX mới
const lightboxView = document.getElementById('lightboxView');
const lightboxImage = document.getElementById('lightboxImage');
const backBtn = document.querySelector('.lightbox-back');


// --- HÀM MỚI: Hiển thị ảnh to (Cấp 2) ---
function showLightbox(src) {
  lightboxImage.src = src; // Đặt ảnh to
  modalCard.classList.add('lightbox-active'); // Kích hoạt chế độ xem ảnh to
}

// --- HÀM MỚI: Ẩn ảnh to, quay lại lưới (Cấp 1) ---
function hideLightbox() {
  modalCard.classList.remove('lightbox-active'); // Tắt chế độ xem ảnh to
  lightboxImage.src = ''; // Xóa ảnh to để tiết kiệm bộ nhớ
}

// --- HÀM CŨ (ĐÃ SỬA): Mở cửa sổ thư viện (Cấp 1) ---
function openGallery(key) {
  const data = GALLERIES[key];
  if (!data || !data.imgs || data.imgs.length === 0) {
    console.log('No images for this category:', key);
    return;
  }
  
  titleEl.textContent = 'Ảnh sản phẩm – ' + data.title;
  descEl.textContent = data.desc || '';
  
  // 1. Tạo HTML cho lưới ảnh
  grid.innerHTML = (data.imgs || []).map((src, i) => 
    `<img loading="lazy" alt="${data.title} ${i + 1}" src="${src}">`
  ).join('');
  
  // 2. Thêm sự kiện click cho TỪNG ảnh thumbnail vừa tạo
  grid.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => {
      showLightbox(img.src); // Bấm vào ảnh nhỏ -> gọi hàm xem ảnh to
    });
  });
  
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  closeBtn.focus();
}

// --- HÀM CŨ (ĐÃ SỬA): Đóng toàn bộ cửa sổ ---
function closeGallery() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  
  // Quan trọng: Đảm bảo reset về Cấp 1 (lưới) khi đóng
  setTimeout(() => {
     hideLightbox();
  }, 200); // Chờ 0.2s cho hiệu ứng đóng hoàn tất
  
  if (cardToFocusOnClose) {
    cardToFocusOnClose.focus();
    cardToFocusOnClose = null;
  }
}

// Gán sự kiện cho các card sản phẩm
document.querySelectorAll('.product-card').forEach(card => {
  const key = card.getAttribute('data-cat');
  
  card.addEventListener('click', () => {
    cardToFocusOnClose = card; 
    openGallery(key);
  });
  
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); 
      cardToFocusOnClose = card; 
      openGallery(key);
    }
  });
});

// Gán sự kiện cho các nút đóng
closeBtn.addEventListener('click', closeGallery); // Nút [X]
modal.addEventListener('click', e => { // Bấm ra ngoài
  if (e.target === modal) closeGallery();
});
backBtn.addEventListener('click', hideLightbox); // Nút [< Quay lại]

// Đóng bằng phím Escape
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('open')) {
    if (modalCard.classList.contains('lightbox-active')) {
      hideLightbox();
    } else {
      closeGallery();
    }
  }
});