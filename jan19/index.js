var reviews = [
    {
       id: 1,
       name: "Susant Pradhan",
       job: "Salesforce Developer",
       img: "https://images.pexels.com/photos/6945/sunset-summer-golden-hour-paul-filitchkin.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
       text: "A Software Developer serves as a member of the software development team.",
    },
    {
       id: 2,
       name: "Ashwasana Mishra",
       job: "Python Developer",
       img: "https://images.pexels.com/photos/760115/pexels-photo-760115.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
       text: "They seek to facilitate the proper design and implementation of software. From detailed computer coding to innovative design,",
    },
    {
       id: 3,
       name: "Sarita Gochhayat",
       job: "HR",
       img: "https://images.pexels.com/photos/2340166/pexels-photo-2340166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
       text: "A Software Developer is an asset when creating a seamless software experience for customers.",
    },
    {
       id: 4,
       name: "Nandakisor Palei",
       job: "MERN Developer",
       img: "https://images.pexels.com/photos/2981630/pexels-photo-2981630.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
       text: "They seek to facilitate the proper design and implementation of software. From detailed computer coding to innovative design,",
    },
    {
       id: 5,
       name: "Lucky",
       job: "Lecture",
       img: "https://images.pexels.com/photos/4300115/pexels-photo-4300115.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
       text: "A Software Developer serves as a member of the software development team.",
    },
 ];
 
 
 var imgElement = document.getElementById('image');
 var author = document.getElementById('author');
 var job = document.getElementById('job');
 var info = document.getElementById('info');
 var prevBtn = document.querySelector("#prev-btn");
 var nextBtn = document.querySelector("#next-btn");
 var randomBtn = document.querySelector(".random-btn");
 
 var currentIndex = 0;
 prevBtn.addEventListener("click", prevClick);
 
 
 function prevClick() {
    if(currentIndex === 0 ) {
       currentIndex = reviews.length - 1;
    } else {
       currentIndex --;
    }
    updateUserDetails();
 }
 
 
 
 nextBtn.addEventListener("click", nextClick);
 
 
 function nextClick() {
    if(currentIndex === reviews.length - 1) {
       currentIndex = 0;
    } else {
       currentIndex ++;
    }
    updateUserDetails();
 }
 function updateUserDetails() {
    imgElement.src = reviews[currentIndex].img;
    author.innerText = reviews[currentIndex].name;
    job.innerText = reviews[currentIndex].job;
    info.innerText = reviews[currentIndex].text;
 }
 randomBtn.addEventListener("click", randomaize);
 
 function randomaize() {
    currentIndex = Math.floor(Math.random() * reviews.length);
    updateUserDetails();
  }
 
 