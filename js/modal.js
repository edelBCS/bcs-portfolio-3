var projects = [
    {
        projectNo: 1,
        title: "Pokemon Stay",
        photo: "./img/pokestay.jpg",
        description: "This was a group project where we realized that we all had one thing in common, we all like and/or played Pokemon GO at somepoint in our lives. So we decided to take this love of Pokemon and create a Pokemon GO like game that would allow those with physical disabilities to play even if they are not able to physically move around the world.",
        appLink: "https://ucsd-teamwork-projects.github.io/Pokemon-Stay/",
        githubLink: "https://github.com/ucsd-teamwork-projects/Pokemon-Stay/"
    },
    {
        projectNo: 2,
        title: "COMMUNAL",
        photo: "./img/communal.png",
        description: "Communal is a ReactJS app that allows people to host Socials, allowing them to find people with similar interests.  For Example, Do you like work working?, host a wood working social. Other users are then randomly presented with Socials that they can choose to attend.  Think of it like Tinder for group activites.",
        appLink: "https://communal-app.herokuapp.com",
        githubLink: "https://github.com/ucsd-teamwork-projects/Communal-App"
    },
    {
        projectNo: 3,
        title: "Check Yo Pill",
        photo: "./img/checkyopill.jpg",
        description: "A NodeJS, Express, MySQL application that allows users to add medications to thier account. Then our system, utilizing the RxNORM and RxInteraction API's from the U.S. National Insitute of Health, cross checks for any negative interactions between your medications in real time.",
        appLink: "https://checkyopill.herokuapp.com",
        githubLink: "https://github.com/ucsd-teamwork-projects/groupProj2"
    },
    {
        projectNo: 4,
        title: "Rock Paper Scissors (Lizard Spock!?!)",
        photo: "./img/rps.jpg",
        description: "This is a twist on the old Ro Sham Beaux classic with a bit of influence from The Big Bang Theory. This game features online multiplayer capability and chat via the use of the Google Firebase realtime database. So go ahead and send the link to a friend and have some fun.",
        appLink: "https://edelbcs.github.io/Online-Multiplayer-RPS/",
        githubLink: "https://github.com/edelBCS/Online-Multiplayer-RPS"
    },
    {
        projectNo: 5,
        title: "MTG News Scraper",
        photo: "./img/mtg.jpg",
        description: "The MTG News Scaper utilizes the cheerio NodeJS package to scrape the MTG Goldfish website for all current stories and articles.  It then redisplays them in a simple, easy to read, format.  It also introduces a Likes and Comment system for people to rank articles.",
        appLink: "https://edel-news-scraper.herokuapp.com",
        githubLink: "https://github.com/edelBCS/news-scrapper"
    },
    {
        projectNo: 6,
        title: "Zombie Word Guess",
        photo: "./img/zombie.jpg",
        description: "This simple word guess game was my inital foray into jQuery. When the game is launched you can start typing any letters to try to guess the word and escape from the zombie horde. Your score and remaining guesses are the tracked on the left. Try it out and see if you can avoid being zombie dinner!",
        appLink: "https://edelbcs.github.io/Word-Guess-Game/",
        githubLink: "https://github.com/edelBCS/Word-Guess-Game"
    }
];

$(".projectLink").on("click", function () {
    var projectID = $(this).attr("data-projId");

    $(".modal-body").empty();
    projects.forEach(project => {
        if (project.projectNo == projectID) {
            $(".modal-title").text(project.title);
            $(".modal-body").append(
                $("<img>").attr("src", project.photo).addClass("img-fluid rounded mb-3")
            );
            $(".modal-body").append(
                $("<p>").text(project.description)
            );
            $("#modal-git-btn").attr("href", project.githubLink);
            $("#modal-app-btn").attr("href", project.appLink);
        }
    });
});