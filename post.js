// ===============================
// Rise Up - Post Page
// script.js
// ===============================

// Wrap EVERYTHING in window.onload to ensure the HTML loads first
window.onload = function () {

    console.log("Rise Up Post Page Loaded");

    // ===============================
    // Media Card Click
    // ===============================
    const mediaCards = document.querySelectorAll(".media-card");

    mediaCards.forEach(function(card){
        card.addEventListener("click", function(){
            alert("Media upload feature will be added in the backend.");
        });
    });

    // ===============================
    // Category Selection
    // ===============================
    const categories = document.querySelectorAll(".category");

    categories.forEach(function(button){
        button.addEventListener("click", function(){
            categories.forEach(function(btn){
                btn.style.border = "none";
            });
            this.style.border = "3px solid white";
        });
    });

    // ===============================
    // Post Button
    // ===============================
    const postButton = document.querySelector(".post-btn");

    if (postButton) { // Safety check to prevent errors
        postButton.addEventListener("click", function(){
            const postTextarea = document.querySelector(".post-text");
            
            if (!postTextarea) return; // Safety check for textarea

            const postText = postTextarea.value;

            if(postText.trim() === ""){
                alert("Please enter your post.");
                return;
            }

            alert("Post Published Successfully!");

            // Clear values safely
            postTextarea.value = "";
            
            const inputBox = document.querySelector(".input-box");
            if (inputBox) {
                inputBox.value = "";
            }
        });
    }

    // ===============================
    // Auto Character Counter
    // ===============================
    const textarea = document.querySelector(".post-text");

    if (textarea) { // Safety check
        textarea.addEventListener("input", function(){
            if(this.value.length > 500){
                this.value = this.value.substring(0, 500);
            }
        });
    }

};