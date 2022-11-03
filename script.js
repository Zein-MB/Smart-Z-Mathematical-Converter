res = document.getElementById("result");

function calc() {
  // 1 Degree = 0.017 Rad
  let x = document.querySelector("input").value,
    func = document.querySelector("select").value;
  degree = 0.017;
  if (func == "sin") {
    res.value = `${Math.sin(x * degree).toFixed(1)}`;
  } else if (func == "cos") {
    res.value = `${Math.cos(x * degree).toFixed(1)}`;
  } else if (func == "tan") {
    res.value = `${Math.tan(x * degree).toFixed(1)}`;
  }
}

document.forms[0].onsubmit = (e) => {
  e.preventDefault();
};

let copybtn = document.getElementById("copy");
copybtn.addEventListener("click", () => {
  if (res.value) {
    navigator.clipboard.writeText(res.value);
    copybtn.textContent = "Copied";
    setTimeout(() => {
      copybtn.textContent = "Copy";
    }, 3000);
  }
});
