// Aguarda o HTML carregar totalmente antes de rodar o gráfico
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('salaryChart');
    
    if (canvas) {
        const ctx = canvas.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Data Analyst', 'Data Scientist', 'ML Engineer'],
                datasets: [{
                    label: 'Salário Médio (R$)',
                    data: [5000, 9000, 12000],
                    backgroundColor: ['#D6CFC7', '#BFAFA4', '#2B2B2B'],
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    } else {
        console.error("Erro: O elemento salaryChart não foi encontrado no HTML.");
    }
});
