const profileCard = document.querySelector(".profile-card");
const rows = document.getElementsByTagName("tr");
const leaderBoard = document.querySelector(".leaderboard");

const profileData = {
  headshot: "images/profilePic.jpg",
  name: "Kishore Kumar",
  stream: "Computer Science and Engineering",
  institution: "SVU College of Engineering",
  email: "kishoreKumar123@gmail.com",
  skills: "HTML, CSS, JavaScript, React, MongoDB",
  experience: "SDE Intern at Amazon",
  bio: "Passionate Frontend Developer, loves learning new things",
  github: "",
  linkedin: "https://www.linkedin.com/in/musharaf-shaik-67803b283/",
};

function updateProfileCard() {
  profileCard.innerHTML = `
    <div class="container">
      <div>
        <img src="${profileData.headshot}" alt="Profile Picture" class="head-shot">
        <button class="chat-button"><strong>CHAT</strong></button>
      </div>
      <div class="profile-info">
        <button class="exitButton ">X</button>
        <h2 class="title">${profileData.name}</h2>
        <p class="institution"><strong>Institution:</strong> ${profileData.institution}</p>
        <p class="stream"><strong>Stream:</strong> ${profileData.stream}</p>
        <p class="skills"><strong>Skills:</strong> ${profileData.skills}</p>
        <p class="experience"><strong>Experience:</strong> ${profileData.experience}</p>
        <p class="email"><strong>Email:</strong> ${profileData.email}</p>
        <p class="bio"><strong>Bio:</strong> ${profileData.bio}</p>
        <div class="social-links">
          <a href="${profileData.github}" target="_blank" class="social-link">
            <i class="fab fa-github"></i>
          </a>
          <a href="${profileData.linkedin}" target="_blank" class="social-link">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>`;

  const exitButton = document.querySelector(".exitButton");
  exitButton.addEventListener("click", () => {
    profileCard.innerHTML = "";
    leaderBoard.classList.remove("blur");
    profileCard.style.display = "none";
  });
}

function search() {
  const searchText = document.querySelector("#search").value.toLowerCase();
  for (let i = 1; i < rows.length; i++) {
    const name = rows[i].children[1].children[1].innerText.toLowerCase();
    if (!name.includes(searchText)) {
      rows[i].style.display = "none";
    } else {
      rows[i].style.display = "";
    }
  }
}

for (let i = 1; i < rows.length; i++) {
  rows[i].addEventListener("click", displayProfile);
}

function displayProfile() {
  updateProfileCard();
  leaderBoard.classList.add("blur");
  profileCard.style.display = "block";
}
