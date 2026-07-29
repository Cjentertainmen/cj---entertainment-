

// Publish news
function publishNews() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const video = document.getElementById("video").value;
  const image = document.getElementById("image").value;

  if (title === "" || description === "") {
    document.getElementById("message").innerHTML =
      "❌ Please fill in all required fields.";
    return;
  }

  const news = {
title,
description,
video,
image
};

  localStorage.setItem("latestNews", JSON.stringify(news));

  document.getElementById("message").innerHTML =
    "✅ News published successfully!";
}