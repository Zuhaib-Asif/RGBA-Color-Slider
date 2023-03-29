function colorChange() {
  let red = document.getElementById("red").value;
  let green = document.getElementById("green").value;
  let blue = document.getElementById("blue").value;
  let transparent = document.getElementById("transparent").value;
  transparent = transparent / 100;
  let output = document.getElementById("output-color-value");
  let colorValue =
    "rgba" + "(" + red + "," + green + "," + blue + "," + transparent + ")";
  document.body.style.backgroundColor = colorValue;
  output.innerHTML = colorValue;
}
colorChange();
