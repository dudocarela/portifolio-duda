window.onload = function() {
    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            y: { beginAtZero: true, grid: { color: '#F0F0F0' }, border: {display: false} },
            x: { grid: { display: false } }
        }
    };

    const setupGradient = (ctx) => {
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, '#2B2B2B');
        gradient.addColorStop(1, '#6A6A6A');
        return gradient;
    };

    // 1. Gráfico de Salários (O seu original)
    const ctxSalary = document.getElementById('salaryChart').getContext('2d');
    new Chart(ctxSalary, {
        type: 'bar',
        data: {
            labels: ['Analista Jr', 'Cientista Pl', 'ML Engineer', 'Arquiteto'],
            datasets: [{
                data: [5800, 9500, 14200, 16500],
                backgroundColor: setupGradient(ctxSalary),
                borderRadius: 8,
                barThickness: 45
            }]
        },
        options: commonOptions
    });

    // 2. Gráfico IBGE (Distribuição)
    const ctxIbge = document.getElementById('ibgeChart').getContext('2d');
    new Chart(ctxIbge, {
        type: 'doughnut',
        data: {
            labels: ['Sudeste', 'Sul', 'Nordeste', 'Centro-Oeste', 'Norte'],
            datasets: [{
                data: [42, 14, 27, 8, 9],
                backgroundColor: ['#2B2B2B', '#4A4A4A', '#6A6A6A', '#8A8A8A', '#AAAAAA'],
                borderWidth: 0
            }]
        },
        options: { ...commonOptions, scales: {} } // Remove scales para doughnut
    });

    // 3. Gráfico de Performance (Latência)
    const ctxPerf = document.getElementById('performanceChart').getContext('2d');
    new Chart(ctxPerf, {
        type: 'line',
        data: {
            labels: ['10:00', '12:00', '14:00', '16:00', '18:00'],
            datasets: [{
                data: [45, 42, 80, 38, 35],
                borderColor: '#2B2B2B',
                fill: false,
                tension: 0.4
            }]
        },
        options: commonOptions
    });
};
