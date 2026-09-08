// ===========================
// Rise Up Dashboard
// script.js
// Part 5
// ===========================

window.onload = function () {
    console.log("Welcome to Rise Up Dashboard");

    // ===========================
    // Community Card Click
    // ===========================
    const communityCards = document.querySelectorAll(".community-card");
    communityCards.forEach(function(card){
        card.addEventListener("click", function(){
            alert("Opening " + this.innerText.trim() + " Community");
        });
    });

    // ===========================
    // Read More Button
    // ===========================
    const postButtons = document.querySelectorAll(".post-card button");
    postButtons.forEach(function(button){
        button.addEventListener("click", function(){
            alert("More details will be available soon.");
        });
    });

    // ===========================
    // Sidebar Menu Button
    // ===========================
    const menuButton = document.querySelector(".menu");
    if (menuButton) { // Safety check to prevent errors if the button is missing
        menuButton.addEventListener("click", function(){
            alert("Sidebar Menu Clicked");
        });
    }

    // ===========================
    // Profile Card Click
    // ===========================
    const profileCard = document.querySelector(".profile-card");
    if (profileCard) { // Safety check
        profileCard.addEventListener("click", function(){
            alert("Opening Athlete Profile");
        });
    }

    // ===========================
    // Trending Items
    // ===========================
    const trendingItems = document.querySelectorAll(".right-panel li");
    trendingItems.forEach(function(item){
        item.addEventListener("click", function(){
            alert(this.innerText.trim());
        });
    });
};