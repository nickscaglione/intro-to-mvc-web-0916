var Store = []

$("#submitter").click(function(event) {
  event.preventDefault();
  var name = document.getElementById('teacher_name').value
  var hometown = document.getElementById('teacher_hometown').value
  new Teacher(name, hometown)
  $("ul").append(`<li> name: ${name} hometown: ${hometown} </li>`);
  document.getElementById('teacher_name').value = ""
  document.getElementById('teacher_hometown').value = ""
  document.getElementById('teacher_name').focus()

});


class Teacher {
  constructor(name, hometown) {
    this.name = name,
    this.hometown = hometown
    Store = [...Store, this]
  }
}
