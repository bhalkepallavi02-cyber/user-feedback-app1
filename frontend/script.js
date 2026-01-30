document.getElementById("feedbackForm").addEventListener("submit", function (e) {
    e.preventDefault(); // stop page refresh

    // Read form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Send data to backend API
    fetch("http://EC2-PUBLIC-IP:8080/api/feedback", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerText = "✅ Feedback submitted successfully!";
        document.getElementById("feedbackForm").reset();
    })
    .catch(error => {
        document.getElementById("result").innerText = "❌ Error submitting feedback";
    });
});
