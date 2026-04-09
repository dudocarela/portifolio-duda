// 1. Inicialização do Gráfico
const ctx = document.getElementById('salaryChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Data Analyst', 'Data Scientist', 'ML Engineer', 'Data Engineer'],
        datasets: [{
            label: 'Salário Médio (R$)',
            data: [5500, 9200, 12500, 10500],
            backgroundColor: ['#D6CFC7', '#BFAFA4', '#2B2B2B', '#8C857E'],
            borderRadius: 12,
            borderSkipped: false,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: { beginAtZero: true, grid: { display: false } },
            x: { grid: { display: false } }
        }
    }
});

// 2. Animação de Revelação (Scroll)
const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', reveal);

// 3. Scroll Suave para Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});