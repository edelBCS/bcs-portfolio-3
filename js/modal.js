var projects = [
    {
        projectNo: 1,
        title: "Pokemon Stay",
        description: "This was a group project where we realized that we all had one thing in common, we all like and/or played Pokemon GO at somepoint in our lives. So we decided to take this love of Pokemon and create a Pokemon GO like game that would allow those with physical disabilities to play even if they are not able to physically move around the world.",
        appLink: "",
        githubLink: ""
    },
    {
        projectNo: 2,
        title: "Check Yo Pill",
        description: "A NodeJS, Express, MySQL application that allows users to add medications to thier account, then our system, utilizing the RxNORM and RxInteraction API's from the U.S. National Insitute of Health, to cross check any negative interactions between medications in real time.",
        appLink: "https://checkyopill.herokuapp.com",
        githubLink: "https://github.com/ucsd-teamwork-projects/groupProj2"
    },
    {
        projectNo: 3,
        title: "Rock Paper Scissors (Lizard Spock!?!)",
        description: "This is a twist on the old Ro Sham Beaux classic with a bit of influence from The Big Bang Theory. This game features online multiplayer capability and chat via the use of the Google Firebase realtime database. So go ahead and send the link to a friend and have some fun.",
        appLink: "",
        githubLink: ""
    },
    {
        projectNo: 4,
        title: "Star Wars: Saber Duals",
        description: "This was a simple turn based fighting game that was the precursor to Pokemon Stay. You start by choosing your champion and your opponent. You can choose from three abilities Fight, Dodge, or Defend. As you defeat opponents, your champion becomes stronger. Keep fighting until all the opponents are defeated, or you are.",
        appLink: "",
        githubLink: ""
    }
]

$(".projectLink").on("click", function(){
    $(".modal-body").append($("<h2>").text(''))
});