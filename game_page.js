function addUser()
{
    player1_name = document.getElementById("player_1").value
    player2_name =  document.getElementById("player_2").value

    localStorage.setItem("player1_name" , player1_name);
    localStorage.setItem("player2_name" , player1_name);

    window.location = "game_page.html";
}

function Send()
{
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    Answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + " x " + number2 + "</h4>";
    input_box = "<br> Answer: <input type = 'text' id='input_check_box'>";
    check_button = "<br> <br> <button class='btn btn-info'onclick='Check()'>Check</button>";
    row=input_box + question_number + check_button
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

question_turn="player1_name";
answer_turn="player2_name";

   function Check()
   {
     get_answer = document.getElementById("input_check_box").value;


        if(Answer == get_answer)
        {
          if(answer_turn == "player2_name")
          {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
          }
          else{
            player1_score = player1_score + 1 ;
            document.getElementById("player1_score").innerHTML = player1_score;
          }

        }
        if(question_turn == "player1_name")
        {
          question_turn = "player2_name";
          document.getElementById("player_question").innerHTML ="Question_turn " + player2_name;
        }
        else
        {
          question_turn = "player1_name";
          document.getElementById("player_question").innerHTML= "Question_turn " + player1_name;
        }
        if(answer_turn == "player1_name")
        {
          answer_turn = "player2_name";
          document.getElementById("player_answer").innerHTML= "Answer_turn : " + player2_name;
        }
        else{
          answer_turn = "player1_name";
          document.getElementById("player_answer").innerHTML= "Answer_turn : " + player1_name;
        }
        document.getElementById("output").innerHTML = "";

   }