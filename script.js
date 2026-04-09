window.onload = function() {
    const ctx = document.getElementById('salaryChart');
    
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Data Analyst Jr', 'Data Scientist Pl', 'ML Engineer Sr', 'Data Architect'],
                datasets: [{
                    label: 'Salário Médio (BRL)',
                    data: [5800, 9500, 14200, 16500],
                    backgroundColor: ['#D6CFC7', '#A6A6A6', '#4A4A4A', '#1A1A1A'],
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });
        console.log("Gráfico carregado com sucesso!");
    } else {
        console.error("Erro: O elemento 'salaryChart' não foi encontrado.");
    }
};
