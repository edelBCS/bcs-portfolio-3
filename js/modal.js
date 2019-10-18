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
        title: "Check Yo Pill",
        photo: "./img/checkyopill.jpg",
        description: "A NodeJS, Express, MySQL application that allows users to add medications to thier account, then our system, utilizing the RxNORM and RxInteraction API's from the U.S. National Insitute of Health, to cross check any negative interactions between medications in real time.",
        appLink: "https://checkyopill.herokuapp.com",
        githubLink: "https://github.com/ucsd-teamwork-projects/groupProj2"
    },
    {
        projectNo: 3,
        title: "Rock Paper Scissors (Lizard Spock!?!)",
        photo: "./img/rps.jpg",
        description: "This is a twist on the old Ro Sham Beaux classic with a bit of influence from The Big Bang Theory. This game features online multiplayer capability and chat via the use of the Google Firebase realtime database. So go ahead and send the link to a friend and have some fun.",
        appLink: "https://edelbcs.github.io/Online-Multiplayer-RPS/",
        githubLink: "https://github.com/edelBCS/Online-Multiplayer-RPS"
    },
    {
        projectNo: 4,
        title: "Star Wars: Saber Duals",
        photo: "./img/starwarsduel.jpg",
        description: "This was a simple turn based fighting game that was the precursor to Pokemon Stay. You start by choosing your champion and your opponent. You can choose from three abilities Fight, Dodge, or Defend. As you defeat opponents, your champion becomes stronger. Keep fighting until all the opponents are defeated, or you are.",
        appLink: "https://edelbcs.github.io/StarWars-Fight_Game/",
        githubLink: "https://github.com/edelBCS/StarWars-Fight_Game"
    }
]

$(".projectLink").on("click", function(){
    var projectID = $(this).attr("data-projId");

    $(".modal-body").empty();
    projects.forEach(project => {
        if(project.projectNo == projectID){
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