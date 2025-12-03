
const SkillLevel = {
    1: "Fluent",
    2: "Proficient",
    3: "Fundamentals",
    4: "Basics"
};


const Language = {
    
    // Programming languages
    PYTHON:   SkillLevel[2],
    JAVA:     SkillLevel[1],
    RUST:     SkillLevel[3],
    ASSEMBLY: SkillLevel[4],
    JS:       SkillLevel[3],
    HTML:     SkillLevel[3],

    // Languages
    FINNISH: SkillLevel[1],
    ENGLISH: SkillLevel[2],
    SWEDISH: SkillLevel[3],
    ARABIC:  SkillLevel[4]
};


const Skills = {
    PROGRAMMING_LANGUAGE: [
        Language.PYTHON,
        Language.JAVA,
        Language.RUST,
        Language.ASSEMBLY,
        Language.JS,
        Language.HTML
    ],
    LANGUAGE: [
        Language.FINNISH,
        Language.ENGLISH,
        Language.SWEDISH,
        Language.ARABIC
    ],
    FRAMEWORK: [
        "postgresql",
        "sqlite",
        "fastapi"
    ]
};




async function show_skills(skills_name) {
    let skills = Skills[skills_name];

    for (let skill in skills) {
        // Display skill button
    }
}


async function show_skill_level(skill_name) {
    let skill_level = SkillLevel[skill_name]

    // Display skill level
}
