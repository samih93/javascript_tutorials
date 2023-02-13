function render() {
  var semesters = ["sem1", "sem2", "sem3"];
  var res = "";

  semesters.forEach(function(e) {
    res += `<option value=${e}>${e}</option>`;
  });

  document.querySelector("#s1").innerHTML = res;
}
render();

var semesterSelected = "";
var matiereSelected = "";
// onchange matier
function selectsemester(element) {
  //////////////////////////// first method

  //selected value
  semesterSelected = element.value;

  // var semester1Matiere = ["java", "html"];
  // var semester2Matiere = ["c++", "css"];
  // var semester3Matiere = ["php", "jqeury"];

  // var res = "";
  // switch (element.value) {
  //   case "sem1":
  //     semester1Matiere.forEach(function(e) {
  //       res += `<option value=${e}>${e}</option>`;
  //     });
  //     break;
  //   case "sem2":
  //     semester2Matiere.forEach(function(e) {
  //       res += `<option value=${e}>${e}</option>`;
  //     });
  //     break;
  //   case "sem3":
  //     semester3Matiere.forEach(function(e) {
  //       res += `<option value=${e}>${e}</option>`;
  //     });
  //     break;
  //   default:
  //     break;
  // }

  // document.querySelector("#s2").innerHTML = res;

  //////////////////////////// second method

  var semcour = {
    sem1: ["java", "html"],
    sem2: ["c++", "css"],
    sem3: ["php", "jquery"]
  };

  // get current array by key
  var options = semcour[element.value];
  var res = "";
  options.forEach(function(e) {
    res += `<option value=${e}>${e}</option>`;
  });
  document.querySelector("#s2").innerHTML = res;
}

function selectmatier(element) {
  matiereSelected = element.value;
}

function result() {
  alert(`You chose:\n  
        -Sem: ${semesterSelected}\n
        -Course: ${matiereSelected} `);
}
