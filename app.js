// 1. The Data
const courses = [
    {
        "title": "The Essentials of Sketching Architecture",
        "instructor": "Stephanie Bower",
        "platform": "Craftsy",
        "status": "Not Started",
        "link": "https://www.craftsy.com/class/the-essentials-of-sketching-architecture",
	"lessons" = [
    {
        "number": 1,
        "title": "Class Preview (1:28)",
        "link": "https://www.craftsy.com/class/the-essentials-of-sketching-architecture#description"
    },
    {
        "number": 2,
        "title": "How We See Buildings (21:37)",
        "link": "https://www.craftsy.com/class/the-essentials-of-sketching-architecture#description"
    },
    {
        "number": 3,
        "title": "Architectural Elements (25:37)",
        "link": "https://www.craftsy.com/class/the-essentials-of-sketching-architecture#description"
    },
    {
        "number": 4,
        "title": "Building Materials (28:21)",
        "link": "https://www.craftsy.com/class/the-essentials-of-sketching-architecture#description"
    },
    {
        "number": 5,
        "title": "Sloping Surfaces (19:28)",
        "link": "https://www.craftsy.com/class/the-essentials-of-sketching-architecture#description"
    },
    {
        "number": 6,
        "title": "Tips & Techniques (18:13)",
        "link": "https://www.craftsy.com/class/the-essentials-of-sketching-architecture#description"
    },
    {
        "number": 7,
        "title": "Sketching Buildings on Location (22:27)",
        "link": "https://www.craftsy.com/class/the-essentials-of-sketching-architecture#description"
    }
]
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

// 2. The Engine
const container = document.getElementById('course-container');
const searchInput = document.getElementById('search-input');

function displayCourses(courseList) {
    container.innerHTML = ''; 
    
    courseList.forEach((course, index) => {
        // Create a unique ID for each dropdown
        const detailsId = `details-${index}`;
        const instructor = course.instructor ? course.instructor : "";
        
        // Generate HTML for lessons (if they exist)
        let lessonsHtml = '<p style="padding: 10px; color: #666;">No lesson details added yet.</p>';
        
        if (course.lessons && course.lessons.length > 0) {
            lessonsHtml = '<ul style="list-style: none; padding: 0; margin: 0;">';
            course.lessons.forEach(lesson => {
                lessonsHtml += `
                    <li style="padding: 8px 10px; border-bottom: 1px solid #333; font-size: 0.9em;">
                        <a href="${lesson.link}" target="_blank" style="color: #aaa; text-decoration: none; display: flex; justify-content: space-between;">
                            <span>${lesson.number}. ${lesson.title}</span>
                            <span>▶</span>
                        </a>
                    </li>
                `;
            });
            lessonsHtml += '</ul>';
        }

        const card = `
            <div class="course-card" style="display: block;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div class="course-info">
                        <h3>${course.title}</h3>
                        <p style="color: #bbb; font-size: 0.9em; margin-bottom: 5px;">${instructor}</p>
                        <span class="platform-tag">${course.platform}</span>
                    </div>
                    <div>
                        <button onclick="document.getElementById('${detailsId}').style.display = document.getElementById('${detailsId}').style.display === 'none' ? 'block' : 'none'" style="margin-right: 5px;">
                            Chapters
                        </button>
                        <a href="${course.link}" target="_blank">
                            <button>Open</button>
                        </a>
                    </div>
                </div>
                
                <div id="${detailsId}" style="display: none; margin-top: 15px; background: #1f1f1f; border-radius: 4px; border: 1px solid #333;">
                    ${lessonsHtml}
                </div>
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

// Start the engine
displayCourses(courses);
