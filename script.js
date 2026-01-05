
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


const Language = {
    
    // Programming languages
    PYTHON:   SkillLevel[3],
    JAVA:     SkillLevel[2],
    RUST:     SkillLevel[4],
    ASSEMBLY: SkillLevel[5],
    JS:       SkillLevel[4],
    HTML:     SkillLevel[4],

    // Languages
    FINNISH: SkillLevel[1],
    ENGLISH: SkillLevel[3],
    SWEDISH: SkillLevel[4],
    ARABIC:  SkillLevel[5]
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
    DATASTRUCTURES: [
        {name: "Algorithms and Datastructures", level: SkillLevel[3]}
    ]
};




function show_skills(category) {

    // Get and clear the container
    const container = document.getElementById("skill_container");
    container.innerHTML = "";

    // Get the skills of the category
    const category_list = Skills[category];

    // Remove button selection
    const allSkillButtons = document.querySelectorAll("#skill_button .skill_button");
    allSkillButtons.forEach(button => button.classList.remove("selected"))

    // Add button selection
    const clickedButton = document.getElementById(category.toLowerCase() + "_button");
    if (clickedButton) {
        clickedButton.classList.add("selected")
    }

    // The category datastructures shows directly the skill level
    if (category == "DATASTRUCTURES") {
        category_list.forEach(skill => {

            // Show the skill level
            show_skill_level(skill)
        })
    }

    // Other categories
    else {

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
}


function show_skill_level(skill) {
    const output = document.getElementById("skill_level");
    output.innerHTML = `
        <div class="skill_level">
            <h3>${skill.name}</h3>
            <p>Level: <strong>${skill.level}</strong></p>
        </div>
    `;

}

document.getElementById("skill_levele").output.innerHTML = "";





// -----------------
//  Contact section
// -----------------

document.querySelectorAll('.contact_item img').forEach(img => {
    const originalSrc = img.src;
    const hoverSrc = originalSrc.replace(".png", "_hover.png");

    img.addEventListener('mouseenter', () => {
        img.src = hoverSrc;
    });

    img.addEventListener('mouseleave', () => {
        img.src = originalSrc;
    });
});
