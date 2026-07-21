const display = document.getElementById("display");

function append(v) {
  display.value += v;
}

function clearDisplay() {
  display.value = "";
}

function getValue() {
  try {
    return eval(display.value || "0");
  } catch {
    display.value = "Error";
    return null;
  }
}

function calculate() {
  let val = getValue();
  if (val === null) return;
  display.value = val;
}

// ---------------- SCIENTIFIC ----------------

function sin() {
  let v = getValue();
  if (v === null) return;
  display.value = Math.sin(v * Math.PI / 180);
}

function cos() {
  let v = getValue();
  if (v === null) return;
  display.value = Math.cos(v * Math.PI / 180);
}

function tan() {
  let v = getValue();
  if (v === null) return;
  display.value = Math.tan(v * Math.PI / 180);
}

function sqrt() {
  let v = getValue();
  if (v === null) return;
  display.value = Math.sqrt(v);
}

function power() {
  display.value += "**";
}

function pi() {
  display.value += Math.PI;
}

function e() {
  display.value += Math.E;
}

function factorial() {
  let v = getValue();
  if (v === null) return;

  if (v < 0) {
    display.value = "Error";
    return;
  }

  let result = 1;
  for (let i = 1; i <= v; i++) {
    result *= i;
  }

  display.value = result;
}


function toggleScientific() {
  const panel = document.getElementById("scientificPanel");

  if (panel.classList.contains("hidden")) {
    panel.classList.remove("hidden");
  } else {
    panel.classList.add("hidden");
  }
}


document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    if (navigator.vibrate) navigator.vibrate(30);
  });
});
