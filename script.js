```javascript
const themeBtn = document.getElementById("themeToggle");

let dark = true;

themeBtn.addEventListener("click", () => {

if(dark){

document.documentElement.style.setProperty("--bg","#f5f7fa");
document.documentElement.style.setProperty("--card","#ffffff");
document.documentElement.style.setProperty("--text","#111");
themeBtn.innerHTML="☀️";

}else{

document.documentElement.style.setProperty("--bg","#0b1120");
document.documentElement.style.setProperty("--card","#131c31");
document.documentElement.style.setProperty("--text","#fff");
themeBtn.innerHTML="🌙";

}

dark=!dark;

});

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";
}

});

});

document.querySelectorAll(".project-card,.skill-card,.timeline-item,.certificate-card").forEach(el => {

el.style.opacity="0";
el.style.transform="translateY(40px)";
el.style.transition="all .6s ease";

observer.observe(el);

});
```

# FILE: README.md

```md
# Portfolio Website

Portfolio modern dan responsive.

## Deploy ke Netlify

1. Upload project ke GitHub
2. Login Netlify
3. Add New Site
4. Import from GitHub
5. Pilih repository
6. Deploy

Tidak memerlukan build command.

Publish directory:
.

## Struktur

index.html
style.css
script.js
assets/

## Custom

- Ganti foto profile di assets/profile.jpg
- Tambah project screenshot
- Isi data diri pada index.html
- Tambahkan link sosial media
```
