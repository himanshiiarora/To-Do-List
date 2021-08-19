document.getElementById("add_note").onclick = function () {
  document.getElementById("container").innerHTML += `
      <div class="box">
           <p id="info">
           ${document.getElementById("dates").value} --
           [Priority : ${document.getElementById("priority").value}]
           <input class="ch-box" type="checkbox">
           ${document.getElementById("input_task").value}
          </p>
          <button class="delete_note">
            <i class="fas fa-trash"></i>
          </button>
      </div>
      `;
  document.getElementById("input_task").value = ""; //For resetting after pressing add button.
  let deletion = document.getElementsByClassName("delete_note");
  for (let i = 0; i < deletion.length; i++) {
    deletion[i].onclick = function () {
      this.parentNode.remove();
    }
  }
}

//For deleting the default note.
//  function def() {
//   let delete_note = document.getElementById("dele");
//   let note = document.getElementById("note");
//   if (note.style.display != "none") {
//     note.style.display = "none";
//   } else {
//     note.style.display = "inline-block";
//   }
// }