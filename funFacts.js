// Run once the page is loaded and ready
$( () => {
    // Add click events to each fun fact
    $("dl#funFacts dt").click( e => {
        // Animate the h1 heading
        $("section > h1").css({
            fontSize: 0,
            opacity: 0
        }) 
        .animate({
            fontSize: "2.3em",
            opaccity: 1
        })   

        // Reveal the facts when the page opens up
        $("d1#funFacts")
        .hide()
        .effect("clip", {
            mode: "show",
            direction: "horizontal"
        }, 600);

        // Alternate between hiding and showing the answer
        let question = $(e.target);
        let answer = $(question.next());
        $(question).toggleClass("hiddenAnswer");

        if ($(question).hasClass("hiddenAnswer")) {
            $(answer).slideUp(600);
        } else {
            $(answer).slideDown(600);
        }
    })
})