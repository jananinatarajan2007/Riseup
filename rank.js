// ======================================
// Rise Up AI Video Ranking
// Part 3A-1
// ======================================

console.log("Rise Up AI Ranking Loaded");

// ==============================
// Dashboard Elements
// ==============================

const totalVideosCard =
document.querySelectorAll(".dashboard-card h3")[0];

const topAthleteCard =
document.querySelectorAll(".dashboard-card h3")[1];

const averageScoreCard =
document.querySelectorAll(".dashboard-card h3")[2];

const qualifiedCard =
document.querySelectorAll(".dashboard-card h3")[3];

// ==============================
// AI Analysis Elements
// ==============================

const overallScore =
document.querySelector(".overall-score h1");

const formScore =
document.querySelectorAll(".metric h2")[0];

const powerScore =
document.querySelectorAll(".metric h2")[1];

const controlScore =
document.querySelectorAll(".metric h2")[2];

const coachTip =
document.querySelector(".coach-tip p");

// ==============================
// Containers
// ==============================

const leaderboardBody =
document.getElementById("leaderboardBody");

const videoGrid =
document.getElementById("videoGrid");

const recentUpload =
document.getElementById("recentUpload");

// ==============================
// Search & Filters
// ==============================

const searchBox =
document.getElementById("searchBox");

const sportFilter =
document.getElementById("sportFilter");

const scoreFilter =
document.getElementById("scoreFilter");

// ==============================
// Upload Form
// ==============================

const uploadForm =
document.getElementById("uploadForm");

// ==============================
// Dummy Database
// ==============================

let athletes = [

{

name:"Rahul Kumar",

sport:"Basketball",

overall:9.6,

form:9.7,

power:9.5,

control:9.6,

status:"Qualified"

},

{

name:"Ananya S",

sport:"Tennis",

overall:9.4,

form:9.2,

power:9.5,

control:9.4,

status:"Qualified"

},

{

name:"Arjun Raj",

sport:"Football",

overall:9.1,

form:9.0,

power:9.2,

control:9.1,

status:"Qualified"

}

];

// ==============================
// Random Score Generator
// ==============================

function randomScore(){

return Number(

(Math.random()*2+8)

.toFixed(1)

);

}

// ==============================
// Coach Tip Generator
// ==============================

function getCoachTip(form,power,control){

if(form<8.5){

return "Improve your body posture and movement technique.";

}

if(power<8.5){

return "Increase leg drive to generate more explosive power.";

}

if(control<8.5){

return "Focus on landing balance and body stability.";

}

return "Excellent performance! Keep training consistently.";

}

// ==============================
// Render Leaderboard
// ==============================

function renderLeaderboard(){

leaderboardBody.innerHTML="";

athletes.sort((a,b)=>b.overall-a.overall);

athletes.forEach(function(player,index){

leaderboardBody.innerHTML+=`

<tr>

<td>${index+1}</td>

<td>${player.name}</td>

<td>${player.sport}</td>

<td>${player.overall}</td>

<td>${player.form}</td>

<td>${player.power}</td>

<td>${player.control}</td>

<td>${player.status}</td>

</tr>

`;

});

}

renderLeaderboard();
// ======================================
// Part 3A-2
// Upload Form + AI Analysis
// ======================================

uploadForm.addEventListener("submit", function(e){

    e.preventDefault();

    const athleteName =
    uploadForm.querySelectorAll("input")[0].value;

    const sport =
    uploadForm.querySelectorAll("select")[1].value;

    // Generate AI Scores

    const form = randomScore();
    const power = randomScore();
    const control = randomScore();

    const overall = Number(
        ((form + power + control) / 3).toFixed(1)
    );

    // Update Analysis Card

    overallScore.innerHTML = overall + " / 10";

    formScore.innerHTML = form;

    powerScore.innerHTML = power;

    controlScore.innerHTML = control;

    coachTip.innerHTML =
    getCoachTip(form,power,control);

    // Decide Status

    let status;

    if(overall >= 9){

        status = "Elite";

    }

    else if(overall >= 8){

        status = "Qualified";

    }

    else{

        status = "Needs Practice";

    }

    // Add Athlete

    athletes.push({

        name: athleteName,

        sport: sport,

        overall: overall,

        form: form,

        power: power,

        control: control,

        status: status

    });

    renderLeaderboard();

    updateDashboard();

    createVideoCard(

        athleteName,

        sport,

        overall

    );

    createRecentUpload(

        athleteName,

        sport

    );

    uploadForm.reset();

});

// ======================================
// Dashboard Update
// ======================================

function updateDashboard(){

    totalVideosCard.innerHTML =
    athletes.length;

    let total = 0;

    let qualified = 0;

    athletes.forEach(function(player){

        total += player.overall;

        if(player.status !== "Needs Practice"){

            qualified++;

        }

    });

    averageScoreCard.innerHTML =
    (total / athletes.length).toFixed(1);

    qualifiedCard.innerHTML =
    qualified;

    athletes.sort(function(a,b){

        return b.overall-a.overall;

    });

    topAthleteCard.innerHTML =
    athletes[0].name;

}

updateDashboard();
// ======================================
// Part 3B-1
// Video Cards & Recent Uploads
// ======================================

// Create Video Card

function createVideoCard(name, sport, score){

    const card = document.createElement("div");

    card.className = "video-card";

    card.innerHTML = `

        <img src="images/video1.jpg" alt="Video">

        <h3>${name}</h3>

        <p>${sport} Performance</p>

        <div class="score">

            ⭐ AI Score : ${score}

        </div>

        <button class="watch-btn">

            Watch Video

        </button>

    `;

    videoGrid.prepend(card);

}

// ======================================
// Recent Upload
// ======================================

function createRecentUpload(name,sport){

    const item = document.createElement("div");

    item.className = "upload-item";

    item.innerHTML = `

        <img src="images/video1.jpg" alt="Video">

        <div>

            <h3>${sport} Performance</h3>

            <p>Uploaded by ${name}</p>

        </div>

        <button>

            View

        </button>

    `;

    recentUpload.prepend(item);

}

// ======================================
// Load Existing Players
// ======================================

athletes.forEach(function(player){

    createVideoCard(

        player.name,

        player.sport,

        player.overall

    );

    createRecentUpload(

        player.name,

        player.sport

    );

});
// ======================================
// Part 3B-2
// Search, Filters & Interactions
// ======================================

// ==============================
// Search Athlete
// ==============================

searchBox.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    const rows = leaderboardBody.querySelectorAll("tr");

    rows.forEach(function (row) {

        const athlete = row.children[1].textContent.toLowerCase();

        if (athlete.includes(value)) {

            row.style.display = "";

        } else {

            row.style.display = "none";

        }

    });

});

// ==============================
// Sport Filter
// ==============================

sportFilter.addEventListener("change", function () {

    const selectedSport = this.value;

    const rows = leaderboardBody.querySelectorAll("tr");

    rows.forEach(function (row) {

        const sport = row.children[2].textContent;

        if (
            selectedSport === "All Sports" ||
            sport === selectedSport
        ) {

            row.style.display = "";

        } else {

            row.style.display = "none";

        }

    });

});

// ==============================
// Score Filter
// ==============================

scoreFilter.addEventListener("change", function () {

    const selected = this.value;

    const rows = leaderboardBody.querySelectorAll("tr");

    rows.forEach(function (row) {

        const score = parseFloat(row.children[3].textContent);

        if (selected === "All Scores") {

            row.style.display = "";

        }

        else if (selected === "9+" && score >= 9) {

            row.style.display = "";

        }

        else if (selected === "8+" && score >= 8) {

            row.style.display = "";

        }

        else if (selected === "7+" && score >= 7) {

            row.style.display = "";

        }

        else {

            row.style.display = "none";

        }

    });

});

// ==============================
// Watch Button
// ==============================

document.addEventListener("click", function (event) {

    if (event.target.classList.contains("watch-btn")) {

        alert("🎥 Video Player Coming Soon!");

    }

});

// ==============================
// View Button
// ==============================

document.addEventListener("click", function (event) {

    if (event.target.textContent.trim() === "View") {

        alert("Opening uploaded performance...");

    }

});

// ==============================
// Profile
// ==============================

const profile = document.querySelector(".profile");

profile.addEventListener("click", function () {

    alert("Profile page coming soon!");

});

// ==============================
// Sidebar Active Menu
// ==============================

const menuItems = document.querySelectorAll(".sidebar li");

menuItems.forEach(function (item) {

    item.addEventListener("click", function () {

        menuItems.forEach(function (menu) {

            menu.classList.remove("active");

        });

        this.classList.add("active");

    });

});

// ==============================
// Welcome Message
// ==============================

window.addEventListener("load", function () {

    console.log("Rise Up AI Ranking Ready!");

});