document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('salaryChart');
    
    if (canvas) {
        const ctx = canvas.getContext('2d');
        
        // Estilização do Gráfico para ficar Profissional
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Data Analyst Jr', 'Data Scientist Pl', 'ML Engineer Sr', 'Data Architect'],
                datasets: [{
                    label: 'Salário Médio (BRL)',
                    data: [5800, 9500, 14200, 16500],
                    backgroundColor: [
                        '#D6CFC7', // Bege Escuro
                        '#A6A6A6', // Cinza Médio
                        '#4A4A4A', // Cinza Escuro
                        '#1A1A1A'  // Preto
                    ],
                    borderRadius: 6,
                    barThickness: 50
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: '#1A1A1A',
                        titleFont: { family: 'Poppins', size: 14 },
                        bodyFont: { family: 'Inter', size: 13 },
                        padding: 15,
                        displayColors: false
                    }
                },
                scales: {
                    y: { 
                        beginAtZero: true, 
                        grid: { color: '#F0F0F0' },
                        ticks: { font: { family: 'Inter' } }
                    },
                    x: { 
                        grid: { display: false },
                        ticks: { font: { family: 'Poppins', weight: '600' } }
                    }
                }
            }
        });
    }
});
