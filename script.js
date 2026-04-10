window.onload = function() {
    const canvas = document.getElementById('salaryChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Gradiente para as barras
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, '#2B2B2B');
    gradient.addColorStop(1, '#6A6A6A');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Analista Jr', 'Cientista Pl', 'ML Engineer', 'Arquiteto'],
            datasets: [{
                label: 'Salário Médio (BRL)',
                data: [5800, 9500, 14200, 16500],
                backgroundColor: gradient,
                borderRadius: 8,
                barThickness: 45
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: { beginAtZero: true, grid: { color: '#F0F0F0' }, border: {display: false} },
                x: { grid: { display: false } }
            }
        }
    });
};
