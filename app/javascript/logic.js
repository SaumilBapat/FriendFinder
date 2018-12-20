$( document ).ready(function() {
    createQuestions();
    $('#submitButton').on('click', submit);
});

function createQuestions() {
  for (var i = 0; i < questions.length; i++) {
    var question = $('<div>').attr('id', 'question' + i);
    question.append($('<h4>').html('Question ' + (i + 1)));
    question.append($('<p>').html(questions[i]));
    var options = createOptions();
    options.attr('id', 'answer' + i);
    question.append(options);
    question.append($('<br>'));
    question.append($('<br>'));
    $( "#questions" ).append(question);
  }
}

function createOptions() {
  var select = $('<select>');
  for (var i = 0; i<options.length; i++) {
    select.append($('<option>').val(options[i]).text(options[i]));
  }
  return select;
}

var options = [
  "1 - Nope",
  "2 - Rarely",
  "3 - Sometimes",
  "4 - Frequently",
  "5 - Always!"
];

var questions = [
  "I am a very friendly person",
  "I love new experiences",
  "I love challenging myself",
  "I am health focused",
  "I am very driven"
]

function submit() {
  event.preventDefault();
  let userData = {answers: []};
  var answers = [];
  for (var i = 0; i < questions.length; i++) {
    var answer = '#answer' + i;
    answer = $(answer).val();
    userData.answers.push(answer);
  }
  $.post("/api/friends",
  {
    name: "Donald Duck",
    city: "Duckburg"
  },
  function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
  });
  // $.post("/api/friends", userData, function(data) {
  //   alert(data);
  // });
}
