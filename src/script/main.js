const sectionWrapper = document.getElementById("article-wrapper");

for (let i = 0; i < 10; i++) {
  const article = document.createElement('article');
  article.className = "outline";
  sectionWrapper.appendChild(article)
}
