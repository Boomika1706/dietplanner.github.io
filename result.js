window.addEventListener('load', function() {
    // Retrieve diet plan from localStorage
    const dietPlan = localStorage.getItem('dietPlan');

    // Display the diet plan
    document.getElementById('dietPlan').textContent = dietPlan;

    // Handle back button click
    document.getElementById('backButton').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});
