let scene, camera, renderer, particles;

function init() {
    // Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#bg-canvas'),
        alpha: true
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 30;

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);

    for(let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 100;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.005,
        color: '#2196F3',
        transparent: true,
        opacity: 0.8
    });

    particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    particles.rotation.x += 0.0001;
    particles.rotation.y += 0.0002;
    renderer.render(scene, camera);
}

function updateParticleColor(isDarkMode) {
    if (particles) {
        particles.material.color.setStyle(isDarkMode ? '#95ccff' : '#2196F3');
        particles.material.opacity = isDarkMode ? 0.4 : 0.8;
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    updateParticleColor(isDarkMode);
}

init();
animate(); 