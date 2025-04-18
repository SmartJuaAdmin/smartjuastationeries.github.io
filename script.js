/** @format */

// Show today's date
const dateElement = document.getElementById("current-date");
const today = new Date();
dateElement.innerText = today.toDateString();

// GitHub Profile Info
const GITHUB_USERNAME = "SmartJuaAdmin"; // 👉 replace with your username
fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("github-avatar").src = data.avatar_url;
    document.getElementById("github-username").innerText = data.login;
    document.getElementById("github-link").href = data.html_url;
  });
