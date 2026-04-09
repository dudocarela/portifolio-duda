// Aguarda o carregamento completo da página
window.onload = function() {
    const canvas = document.getElementById('salaryChart');
    
    // Se o canvas não existir, encerra para não dar erro
    if (!canvas) {
        console.error("Erro: O elemento 'salaryChart' não foi encontrado.");
        return;
    }

    const ctx = canvas.getContext('2d');
    
    // Configuração do Gráfico de Barras
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Analista Júnior', 'Cientista Pleno', 'Eng. Machine Learning', 'Arquiteto de Dados'],
            datasets: [{
                label: 'Salário Médio Mensal (BRL)',
                data: [5800, 9500, 14200, 16500],
                backgroundColor: ['#D6CFC7', '#8A8A8A', '#4A4A4A', '#1A1A1A'],
                borderRadius: 4,
                barThickness: 'flex', // Ajusta automaticamente a largura
                maxBarThickness: 50
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // OBRIGATÓRIO PARA RESPEITAR A ALTURA DO CSS
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
                    ticks: { 
                        font: { family: 'Inter', size: 12 },
                        callback: function(value) {
                            return 'R$ ' + value.toLocaleString('pt-BR');
                        }
                    }
                },
                x: { 
                    grid: { display: false },
                    ticks: { font: { family: 'Poppins', weight: '600', size: 12 } }
                }
            }
        }
    });
};
