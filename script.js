// Inicialização dos Gráficos
document.addEventListener('DOMContentLoaded', () => {
    initCharts();
    handleScrollReveal();
});

function initCharts() {
    const ctxRadar = document.getElementById('radarChart').getContext('2d');
    const ctxLine = document.getElementById('lineChart').getContext('2d');

    // Estilo Global dos Gráficos
    Chart.defaults.color = '#888';
    Chart.defaults.font.family = 'JetBrains Mono';

    new Chart(ctxRadar, {
        type: 'radar',
        data: {
            labels: ['Eng. Dados', 'Backend', 'Sistemas', 'DevOps', 'Frontend'],
            datasets: [{
                label: 'Score Técnico',
                data: [95, 90, 85, 80, 70],
                borderColor: '#00f2ff',
                backgroundColor: 'rgba(0, 242, 255, 0.1)',
                borderWidth: 2
            }]
        },
        options: {
            scales: { r: { grid: { color: '#222' }, angleLines: { color: '#222' }, ticks: { display: false } } },
            plugins: { legend: { display: false } }
        }
    });

    new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
            datasets: [{
                data: [20, 25, 45, 30, 22, 18],
                borderColor: '#00f2ff',
                tension: 0.4,
                pointRadius: 0
            }]
        },
        options: {
            scales: { x: { display: false }, y: { grid: { color: '#111' } } },
            plugins: { legend: { display: false } }
        }
    });
}

// Lógica de Revelação ao Rolar (Scroll Reveal)
function handleScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => observer.observe(reveal));
}

// Efeito de Typing no terminal
const terminal = document.querySelector('.terminal');
let text = terminal.innerHTML;
terminal.innerHTML = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        terminal.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 5);
    }
}
setTimeout(typeWriter, 500);
