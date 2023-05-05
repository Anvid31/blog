
// Declaramos constantes 
const submitButton = document.getElementById("button");
const commentInput = document.getElementById("input");
const commentsContainer = document.getElementById("comments-container");


// Creamos el submit y la muestra de los comentarios
submitButton.addEventListener("click", function() {
  const comment = commentInput.value;
  const commentElement = document.createElement("div");
  commentElement.innerHTML = comment;
  commentsContainer.appendChild(commentElement);
  commentInput.value = "";
});