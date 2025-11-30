// 1. The Data
const courses = [
    {
        title: "Quilting for Beginners",
        platform: "Craftsy",
        status: "Not Started",
        link: "https://www.craftsy.com"
    },
    {
        title: "Digital Illustration 101",
        platform: "Domestika",
        status: "In Progress",
        link: "https://www.domestika.org"
    },
    {
        title: "Advanced Woodworking",
        platform: "Domestika",
        status: "Completed",
        link: "https://www.domestika.org"
    }
];

// 2. The Engine
const container = document.getElementById('course-container');
const searchInput = document.getElementById('search-input');

// Function to display specific courses
function displayCourses(courseList) {
    container.innerHTML = ''; // Clear the container first
    
    courseList.forEach(course => {
        const card = `
            <div class="course-card">
                <div class="course-info">
                    <h3>${course.title}</h3>
                    <span class="platform-tag">${course.platform}</span>
                    <p style="margin-top: 5px; color: #888; font-size: 0.9em;">Status: ${course.status}</p>
                </div>
                <a href="${course.link}" target="_blank">
                    <button>Go to Course</button>
                </a>
            </div>
        `;
        container.innerHTML += card;
    });
}

// 3. The Listener (Search Logic)
searchInput.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    
    const filteredCourses = courses.filter(course => {
        return course.title.toLowerCase().includes(searchString) || 
               course.platform.toLowerCase().includes(searchString);
    });
    
    displayCourses(filteredCourses);
});

// Initial load
displayCourses(courses);
