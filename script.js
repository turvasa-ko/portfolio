
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
    PROGRAMMING_LANGUAGE: [
        {name: "Python", level: SkillLevel[3]},
        {name: "Java", level: SkillLevel[2]},
        {name: "Rust", level: SkillLevel[4]},
        {name: "Assembly (Y86-64)", level: SkillLevel[5]},
        {name: "JavaScript", level: SkillLevel[4]},
        {name: "HTML", level: SkillLevel[4]}
    ],
    LANGUAGE: [
        {name: "Finnish", level: SkillLevel[1]},
        {name: "English", level: SkillLevel[3]},
        {name: "Swedish", level: SkillLevel[4]},
        {name: "Arabics", level: SkillLevel[5]}
    ],
    FRAMEWORK: [
        {name: "PostregSQL", level: SkillLevel[4]},
        {name: "SQLite", level: SkillLevel[3]},
        {name: "FastAPI", level: SkillLevel[3]}
    ],
    DATASTRUCTURES: [
        {name: "Algorithms and Datastructures", level: SkillLevel[3]}
    ]
};




async function show_skills(category) {

    // Get and clear the container
    const container = document.getElementById("skills-container");
    container.innerHTML = "";

    // Get the skills of the category
    const category_list = Skills[category];

    // The category datastructures shows directly the skill level
    if (category = "DATASTRUCTURES") {
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
            button.onclick = () => show_skill_level(skill);

            // Show the button
            container.appendChild(button);

        });
    }
}


async function show_skill_level(skill) {
    const output = document.getElementById("skill_level");
    output.innerHTML = `
        <div class="skill_level_box">
            <h3>$(skill.name)</h3>
            <p>Level: <strong>$(skill.level)</strong></p>
        </div>
    `;

}
