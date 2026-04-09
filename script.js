window.onload = function() {
    const canvas = document.getElementById('salaryChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Gradiente moderno para as barras
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, '#1A1A1A');
    gradient.addColorStop(1, '#666666');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Analista Jr', 'Cientista Pl', 'ML Engineer', 'Arquiteto de Dados'],
            datasets: [{
                label: 'Salário Médio (BRL)',
                data: [5800, 9500, 14200, 16500],
                backgroundColor: gradient,
                borderRadius: 12,
                barThickness: 50,
                maxBarThickness: 60
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#1A1A1A',
                    padding: 15,
                    titleFont: { family: 'Plus Jakarta Sans', size: 14, weight: '800' },
                    bodyFont: { family: 'Inter', size: 13 },
                    cornerRadius: 8,
                    displayColors: false
                }
            },
            scales: {
                y: { 
                    beginAtZero: true, 
                    grid: { color: '#F0F0F0' },
                    border: { display: false },
                    ticks: { font: { family: 'Inter', size: 12 } }
                },
                x: { 
                    grid: { display: false },
                    ticks: { font: { family: 'Plus Jakarta Sans', weight: '700', size: 12 } }
                }
            }
        }
    });
};
