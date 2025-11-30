// This is your "Database"
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
    // You can easily add more here later!
];

// This is the "Engine" that builds the HTML
const container = document.getElementById('course-container');

courses.forEach(course => {
    const card = `
        <div class="course-card">
            <h3>${course.title}</h3>
            <span class="platform-tag">${course.platform}</span>
            <p>Status: ${course.status}</p>
            <a href="${course.link}" target="_blank">
                <button>Go to Course</button>
            </a>
        </div>
    `;
    container.innerHTML += card;
});
