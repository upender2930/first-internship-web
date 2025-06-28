// Example dynamic project data
const projects = [
  {
    title: "Weather App",
    description: "A simple weather app using OpenWeatherMap API.",
    link: "#",
  },
  {
    title: "Student Management System",
    description: "A Java console app to manage student records.",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "This very website, built with HTML, CSS, and JS!",
    link: "#",
  },
];

function renderProjects(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = projects
    .map(
      (p) => `
        <div class="project-card">
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <a href="${p.link}" target="_blank">View Project</a>
        </div>
      `
    )
    .join("");
}

// Render featured projects on homepage
renderProjects("featured-projects");
// Render all projects on projects page
renderProjects("project-list");

// Contact form (demo only)
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      document.getElementById("form-status").textContent =
        "Thank you! This is a demo contact form.";
      form.reset();
    });
  }
});
