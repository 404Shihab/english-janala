const loadLessons=()=>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLesson(json.data));
};

const displayLesson = (lessons) => {
    // console.log(lesson);

    //1. get the container & empty

    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";

    //2. get into ever lesson

    for (const lesson of lessons) {
        //3. create element
        const btnDiv = document.createElement("div");
        console.log(lesson);
        btnDiv.innerHTML = `
        <button class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i> Lesson -${lesson.level_no}</button>
        `;


        //4. append into container

        levelContainer.append(btnDiv);
        
    } 

};

loadLessons();

console.log('test code');