const loadLessons=()=>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLesson(json.data));
};

const removeActive =()=>{
    const lessonButtons = document.querySelectorAll(".lesson-btn");
    lessonButtons.forEach(btn=>btn.classList.remove("active"));

}

const loadLevelWord =(id)=> {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
    .then((res)=>res.json())
    .then((json)=>
    {
        removeActive();
        const btnClick = document.getElementById(`lesson-btn-${id}`);
        // console.log(btnClick);
        btnClick.classList.add("active");
        displayLevelWords(json.data);
    });
};

const displayLevelWords = (words) =>{
    // console.log(words);

    const wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML= "" ;

    if(words.length == 0)
    {
        wordContainer.innerHTML= `
        <img class="mx-auto col-span-full" src="./assets/alert-error.png" alt="">
        <div class="text-center col-span-full rounded-xl py-10 space-y-6 ">
        <p class="text-xl font-medium text-gray-500 font-bangla">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
        <h2 class="text-4xl  font-bangla">নেক্সট Lesson এ যান</h2>
        </div>
        ` ;
        return;
    }

    for (const word of words) {
        // console.log(word);
        const card = document.createElement("div");

        card.innerHTML=`
        <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
        <h2 class="font-bold text-xl">${word.word ? word.word : "শব্দ পাওয়া যায়নি"}</h2>
        <p class="font-semibold">Meaning /Pronunciation</p>

        <div class="font-bangla text-2xl font-medium">"${word.meaning ? word.meaning : "অর্থ পাওয়া যায়নি"} / ${word.pronunciation ? word.pronunciation: "Pronunciation পাওয়া যায়নি"}"</div>
        <div class="flex justify-between items-center">
        <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
        <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
        </div>
        </div>
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
        <button id="lesson-btn-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary lesson-btn"><i class="fa-solid fa-book-open"></i> Lesson -${lesson.level_no}</button>
        `;


        //22. append into container

        levelContainer.append(btnDiv);
        
    } 

};

loadLessons();

console.log('test code');