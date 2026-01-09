
// ----------------
//  Scroll padding
// ----------------

// Sets the padding value
const header = document.querySelector("header");
function setScrollPadding() {
    const headerHeight = header.offsetHeight;
    document.documentElement.style.setProperty(
        '--header-height',
        `calc(${headerHeight}px + 10px)`
    );
}

// Change the padding value
window.addEventListener("load", setScrollPadding);
window.addEventListener("resize", setScrollPadding);



// ---------------
//  Skill section
// ---------------


const SkillLevel = {
    1: "Fluent",
    2: "Advanced",
    3: "Proficient",
    4: "Fundamentals",
    5: "Basics"
};

const Skills = {
    PROGRAMMING_LANGUAGES: [
        {name: "Python", level: SkillLevel[3]},
        {name: "Java", level: SkillLevel[2]},
        {name: "Rust", level: SkillLevel[4]},
        {name: "Assembly (Y86-64)", level: SkillLevel[5]},
        {name: "JavaScript", level: SkillLevel[4]},
        {name: "HTML", level: SkillLevel[4]}
    ],
    LANGUAGES: [
        {name: "Finnish", level: SkillLevel[1]},
        {name: "English", level: SkillLevel[3]},
        {name: "Swedish", level: SkillLevel[4]},
        {name: "Arabic", level: SkillLevel[5]}
    ],
    FRAMEWORKS: [
        {name: "PostgreSQL", level: SkillLevel[4]},
        {name: "SQLite", level: SkillLevel[3]},
        {name: "FastAPI", level: SkillLevel[3]}
    ],
    OTHERS: [
        {name: "Algorithms and Data Structures", level: SkillLevel[3]},
        {name: "Linux", level: SkillLevel[4]},
        {name: "Git", level: SkillLevel[3]}
    ]
};



// Shows the skill button and highlights the skill category button
function show_skills(category) {

    // Get and clear the container
    const container = document.getElementById("skill_container");
    container.innerHTML = "";

    // Get the skills of the category
    const category_list = Skills[category];

    // Remove button selection
    document.querySelectorAll(".skill_button")
        .forEach(button => button.classList.remove("selected"));

    // Add button selection
    document.getElementById(category.toLowerCase() + "_button")
        .classList.add("selected");

    // Create and show the skill section
    category_list.forEach(skill => {

        // Create a button
        const button = document.createElement("button");
        button.className = "skill_item";
        button.textContent = skill.name;
        button.onmouseover = () => show_skill_level(skill);

        // Show the button
        container.appendChild(button);

    });
}


// Shows the skill level
function show_skill_level(skill) {
    const output = document.getElementById("skill_level");
    const levelIndex = Object.values(SkillLevel).indexOf(skill.level) + 1;

    output.innerHTML = `
        <div class="skill_level">
            <div class="skill_level_header">
                <h3>${skill.name}</h3>
                <span class="skill_badge">${skill.level}</span>
            </div>

            <img src="meters/meter_${levelIndex}.png" alt="${skill.level}" class="skill_meter">
        </div>
    `;

}



// -----------------
//  Contact section
// -----------------

// Handles the icon changing for the hovering event
document.querySelectorAll('.contact_item').forEach(item => {
    const image = item.querySelector("img");
    const originalSrc = image.src;
    const hoverSrc = originalSrc.replace(".png", "_hover.png");

    item.addEventListener('mouseenter', () => {
        image.src = hoverSrc;
    });

    item.addEventListener('mouseleave', () => {
        image.src = originalSrc;
    });
});
