VANTA.NET({
    el: "body",
    mouseControls: true,
    touchControls: true,
    color: 0xeb3684,
    backgroundColor: 0x17062b
});
const navbar = document.getElementById('navbar');
const marker = document.getElementById('marker');

function moveMarker(el) {
    marker.style.backgroundColor = '#5e5085';
    marker.style.left = el.offsetLeft + 'px';
    marker.style.width = el.offsetWidth + 'px';
}

window.addEventListener('DOMContentLoaded', () => {
    const active = document.querySelector('#navbar a.active');
    if (active) moveMarker(active);
});

navbar.addEventListener('mouseleave', () => {
    marker.style.backgroundColor = 'transparent';
});