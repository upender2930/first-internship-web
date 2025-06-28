// Dynamic flower data with public image URLs
const flowers = [
  {
    name: "Rose",
    image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9zZXxlbnwwfHwwfHx8MA%3D%3D",
    description: "The rose is a symbol of love and beauty. It comes in many colors, each with its own meaning."
  },
  {
    name: "Sunflower",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQefcvbzCEKav0n_cvtRz6k_HhRZ9zQBkSrQg&s",
    description: "Sunflowers are known for their large, bright yellow petals and their ability to turn towards the sun."
  },
  {
    name: "Lily",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEms9i4f0wSfQiLjCbGZCw-D-IK1Yt00wznA&s",
    description: "Lilies symbolize purity and renewal. They are often used in celebrations and ceremonies."
  },
  {
    name: "Orchid",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAOzoMBPjp6BlnXVCBv85J5jN-e4O_8j_CsA&s",
    description: "Orchids are exotic flowers that represent luxury, beauty, and strength."
  },
  {
    name: "Tulip",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmq7AhMs_W_poyGoFueQlCOE4WT8ayIgkg9A&s",
    description: "Tulips are spring-blooming flowers that come in a rainbow of colors, symbolizing perfect love."
  },
  {
    name: "Marigold",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGeqkjSku85f2OenCdd0TpigGxSdy9fnboMg&s",
    description: "Marigolds are known for their bright orange and yellow hues, symbolizing warmth, creativity, and positivity."
  },
  {
    name: "Lotus",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZkIVbKp3cWeBRsD3iQnGVdv26cHnkCPmXjg&s",
    description: "The lotus is a symbol of purity, enlightenment, and rebirth, especially in Eastern cultures."
  }
];

function renderFlowers(containerSelector, count = flowers.length) {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  container.innerHTML = flowers.slice(0, count).map(flower => `
    <div class="flower-card">
      <img src="${flower.image}" alt="${flower.name}" />
      <h3>${flower.name}</h3>
      <p>${flower.description}</p>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", function() {
  renderFlowers('.flower-list', 5); // Show 5 on homepage
});
