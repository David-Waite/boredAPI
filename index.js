document.getElementById("button").addEventListener("click", function () {
  fetch(`https://apis.scrimba.com/bored/api/activity`)
    .then((response) => response.json())
    .then(
      (data) =>
        (document.getElementById("suggestion").innerHTML = data.activity)
    );
});
