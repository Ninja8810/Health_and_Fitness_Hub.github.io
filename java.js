// Retrieve the activity count from localStorage (default to 0 if not set)
let activityCount = localStorage.getItem('activityCount') ? parseInt(localStorage.getItem('activityCount')) : 0;

// Get references to elements
const progressBar = document.getElementById('progress-bar');
const activityCountText = document.getElementById('activity-count');
const incrementButton = document.getElementById('increment-progress');

// Function to update the progress bar and activity count display
function updateProgress() {
  const totalActivities = 10;  // You can adjust this to the target number of activities
  const progressPercent = (activityCount / totalActivities) * 100;

  // Update the progress bar width based on the progress percent
  progressBar.style.width = progressPercent + '%';
  activityCountText.textContent = `Activities Completed: ${activityCount}`;

  // Store the current activity count in localStorage
  localStorage.setItem('activityCount', activityCount);
}

// Increment the activity count and update progress when the button is clicked
incrementButton.addEventListener('click', () => {
  if (activityCount < 10) {  // Prevent count from going over total activities
    activityCount++;
    updateProgress();  // Update the progress bar and count
  }
});

// Initial update on page load (in case of a reload or first visit)
updateProgress();
