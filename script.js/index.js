const loadLessons=()=>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLesson(json.data));
};

const loadLevelWord =(id)=> {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
    .then((res)=>res.json())
    .then((json)=>displayLevelWords(json.data));
};

const displayLevelWords = (words) =>{
    // console.log(words);

    const wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML="";

    for (const word of words) {
        // console.log(word);
        const card = document.createElement("div");

        card.innerHTML=`
        <p>Shihab</p>
        `

        wordContainer.append(card);
    }
}


const displayLesson = (lessons) => {
    // console.log(lesson);

    //1. get the container & empty

    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";

    //2. get into ever lesson

    for (const lesson of lessons) {
        //21. create element
        const btnDiv = document.createElement("div");
        console.log(lesson);
        btnDiv.innerHTML = `
        <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i> Lesson -${lesson.level_no}</button>
        `;


        //22. append into container

        levelContainer.append(btnDiv);
        
    } 

};

loadLessons();

console.log('test code');