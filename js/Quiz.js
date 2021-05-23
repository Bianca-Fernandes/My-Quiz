class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide();
    background("turquoise");
    fill("coral");
    textSize(30);
    text("Result of the Quiz", 400, 50);
    text("------------------------", 400,65);  
    Contestant.getPlayerInfo();

    if(allContestants !== undefined){
      var display_Answer = 230;
      fill("Blue");
      textSize(20);
      text("*NOTE: Contestant who answer correct are highlighted in white color!", 130, 230);
    }

    for(var plr in allContestants){
      var correctAns = "B";
      if(correctAns === allContestants[plr].answer)
        fill("tangerine");
      else
        fill("red");

        display_Answer+=30;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 250, display_Answer);
    }
  }
}
