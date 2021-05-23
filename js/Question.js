class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.reset = createButton("Reset")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(400, 0);

    this.question.html("Question:- A small girl was playing with a book and tore out pages 7, 8, 100, 101, 222 and 223. How many pages were torn out?" );
    this.question.position(30, 80);
    this.option1.html("A: 7 " );
    this.option1.position(150, 100);
    this.option2.html("B: 3" );
    this.option2.position(150, 120);
    this.option3.html("C: 6 " );
    this.option3.position(150, 140);
    this.option4.html("D: 4" );
    this.option4.position(150, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);
    this.reset.position(970 ,30);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });

    this.reset.mousePressed(()=>{
      contestant.updateCount(0);
      quiz.update(0);
    });
  }
}
