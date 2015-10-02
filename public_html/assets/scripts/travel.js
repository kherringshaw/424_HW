//overall app logic and loader...
function travelNotes() {
  "use strict";

  //manage input field and new note output
  function createNote() {
    console.log("test");
    //object for wrapper html for note
    var $note = $("<p>");
    //define input field
    var $note_text = $(".note-input input");
    //conditional check for input field
    var $btn = $("<delete><button>delete</button>")
    if ($note_text.val() !== "") {
    //set content for note
    $note.html($note_text.val());
    //hide new note to setup fadeIn...
    $note.hide();
    //append note text to note-output
    $(".note-output").append($note);
    //$(".note-output").append($btn);
    //fadeIn hidden new note
    $note.fadeIn("slow");
    $note_text.val("");
    }
  }
  
  //manage delete field
  function deleteNote() {
    //object for wrapper html for note
    var $note = $("<p>");
    //define output field
    var $note_text = $(".note-output note");
    //conditional check for input field
    if ($note_text.val() !== "") {
        //console.log("work");
         $("p").prev().hide(500);
    }
  }
  
  //manage delete fields
  function deleteNoteAll() {
    //console.log("test0");
    //object for wrapper html for note
    var $note = $("<p>");
    //define output field
    var $note_text = $(".note-output note");
    //conditional check for input field
    if ($note_text.val() !== "") {
        //console.log("test1");
        $(".note-output ").empty(1000);
    }
  }

  //handle user event for `add` button click
  $(".note-input button").on("click", function(e) {
    createNote();
  });
  
    //handle user event for `delete` button click
  $(".note-input delete_btn").on("click", function(e) {
      //console.log("delete");
    deleteNoteAll();
  });
  
   $(".note-input delete").on("click", function(e) {
      //console.log("delete2");
      //$(".note-output note").prev().hide();
    deleteNote();
  });
  
  
  //handle user event for keyboard press
  $(".note-input input").on("keypress", function(e){
    //check code for keyboard press
    if (e.keyCode === 13) {
      createNote();
    }
  });

};

$(document).ready(travelNotes);
