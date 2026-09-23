feather.replace();

const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburgerMenu = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Data Modul Training K-Pop
const kpopCourses = [
  {
    title: "K-Choreo & Body Isolation",
    category: "Dance",
    description: "Kuasai teknik isolasi tubuh, ritme tajam, dan koreografi idol K-Pop populer.",
    mentor: "Lia Kim Masterclass",
    price: "Free Access",
    image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=600&q=80",
    slug: "k-choreo"
  },
  {
    title: "Vocal Stability & High Notes",
    category: "Vokal",
    description: "Latihan kontrol bernyanyi stabil saat menari, pernapasan diafragma, dan nada tinggi.",
    mentor: "Kim Sung-eun",
    price: "Free Access",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80",
    slug: "vocal-stability"
  },
  {
    title: "Stage Presence & Killing Part",
    category: "Visual & Stage",
    description: "Pelajari cara menguasai kamera panggung, ekspresi wajah, dan aura pemikat idol.",
    mentor: "Bae Yoon-jung",
    price: "Free Access",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    slug: "stage-presence"
  },
  {
    title: "K-Pop Rap Flow & Rhythm",
    category: "Rap",
    description: "Teknik artikulasi cepat, rima lirik K-Pop, serta pembentukan karakter suara unik.",
    mentor: "Zico Style Coach",
    price: "Free Access",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    slug: "rap-flow"
  }
];

function displayCourses(courses) {
  const courseList = document.querySelector("#course-list");
  if (!courseList) return;

  courseList.innerHTML = "";

  courses.forEach((course) => {
    courseList.innerHTML += `
    <div class="menu-card">
        <img src="${course.image}" alt="${course.title}">
        <div class="menu-card-content">
            <span>${course.category}</span>
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <small>Mentor: ${course.mentor}</small>
            <strong>${course.price}</strong>
            <a href="#contact">Daftar Audisi</a>
        </div>
    </div>
    `;
  });
}

// Render data modul K-Pop
displayCourses(kpopCourses);