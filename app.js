// 1. The Data (Paste your new CLEAN JSON here later)
const courses = [
    {
        "title": "The Essentials of Sketching Architecture",
        "instructor": "Stephanie Bower",
        "platform": "Craftsy",
        "status": "Not Started",
        "link": "https://www.craftsy.com/class/the-essentials-of-sketching-architecture",
        "lessons": []
    },
    {
        "title": "Essential Techniques for Sketching the Energy of Places",
        "instructor": "James Richards",
        "platform": "Craftsy",
        "status": "Not Started",
        "link": "https://www.craftsy.com/class/essential-techniques-for-sketching-the-energy-of-places",
        "lessons": []
    },
    {
        "title": "Sketching the City in Pen, Ink & Watercolor",
        "instructor": "Shari Blaukopf",
        "platform": "Craftsy",
        "status": "Not Started",
        "link": "https://www.craftsy.com/class/sketching-the-city-in-pen-ink-watercolor",
        "lessons": []
    },
    {
        "title": "Perspective for Sketchers",
        "instructor": "Stephanie Bower",
        "platform": "Craftsy",
        "status": "Not Started",
        "link": "https://www.craftsy.com/class/perspective-for-sketchers",
        "lessons": []
    },
    {
        "title": "Travel Sketching in Mixed Media",
        "instructor": "Marc Taro Holmes",
        "platform": "Craftsy",
        "status": "Not Started",
        "link": "https://www.craftsy.com/class/travel-sketching-in-mixed-media",
        "lessons": []
    },
    {
        "title": "Sketching Landscapes in Pen, Ink & Watercolor",
        "instructor": "Shari Blaukopf",
        "platform": "Craftsy",
        "status": "Not Started",
        "link": "https://www.craftsy.com/class/sketching-landscapes-in-pen-ink-watercolor",
        "lessons": []
    },
    {
        "title": "Sketching People in Motion",
        "instructor": "Marc Taro Holmes",
        "platform": "Craftsy",
        "status": "Not Started",
        "link": "https://www.craftsy.com/class/sketching-people-in-motion",
        "lessons": []
    }
];

const container = document.getElementById('course-container');
const searchInput = document.getElementById('search-input');

function displayCourses(courseList) {
    container.innerHTML = ''; 
    
    courseList.forEach(course => {
        // Handle missing instructor for old data
        const instructor = course.instructor ? course.instructor : "";
        
        const card = `
            <div class="course-card">
                <div class="course-info">
                    <h3>${course.title}</h3>
                    <p style="color: #bbb; font-size: 0.9em; margin-bottom: 5px;">${instructor}</p>
                    <span class="platform-tag">${course.platform}</span>
                    <p style="margin-top: 5px; color: #888; font-size: 0.8em;">Status: ${course.status}</p>
                </div>
                <a href="${course.link}" target="_blank">
                    <button>Go to Course</button>
                </a>
            </div>
        `;
        container.innerHTML += card;
    });
}

// ... keep the search listener code the same ...
// Start the engine
displayCourses(courses);
