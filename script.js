// DASHBOARD
const mainCtx = document.getElementById('mainChart').getContext('2d');

new Chart(mainCtx, {
  type: 'bar',
  data: {
    labels: ['Data Analyst', 'Data Scientist', 'Software Engineer', 'ML Engineer'],
    datasets: [{
      label: 'Salário Médio (USD)',
      data: [70000, 95000, 110000, 120000],
      borderWidth: 1
    }]
  }
});

// SIMULADOR
const careerCtx = document.getElementById('careerChart').getContext('2d');

let careerData = [
  [30000, 40000, 55000, 70000],
  [40000, 60000, 80000, 95000],
  [50000, 70000, 90000, 110000],
  [60000, 80000, 100000, 120000]
];

let careerChart = new Chart(careerCtx, {
  type: 'line',
  data: {
    labels: ['Junior', 'Pleno', 'Senior', 'Especialista'],
    datasets: [{
      label: 'Salário',
      data: careerData[0],
      borderWidth: 2
    }]
  }
});

document.getElementById("careerSelect").addEventListener("change", function () {
  careerChart.data.datasets[0].data = careerData[this.value];
  careerChart.update();
});

// ANALISADOR
function analisarPerfil() {
  let checks = document.querySelectorAll('input[type="checkbox"]:checked');
  let valores = Array.from(checks).map(c => c.value);

  let resultado = "";

  if (valores.includes("data") && valores.includes("code")) {
    resultado = "Perfil: Data Scientist / ML Engineer";
  } else if (valores.includes("data")) {
    resultado = "Perfil: Data Analyst";
  } else if (valores.includes("code")) {
    resultado = "Perfil: Software Engineer";
  } else {
    resultado = "Explore mais áreas!";
  }

  document.getElementById("resultadoPerfil").innerText = resultado;
}
