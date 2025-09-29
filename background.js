let scene, camera, renderer, matrixCharacters = [];

function createTextSprite(text, color) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 256;
    canvas.height = 256;
    context.font = 'Bold 200px Arial';
    const nameChars = 'アディティヤシャルマ';
    const isNameChar = nameChars.includes(text);
    context.fillStyle = isNameChar ? '#ffffff' : color;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(text, 128, 128);
    const texture = new THREE.CanvasTexture(canvas);
    const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(4, 4, 1);
    sprite.isNameChar = isNameChar;
    return sprite;
}

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

    // Create Matrix characters
    const name = 'アディティヤシャルマ';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン' + name.repeat(10);
    const numColumns = 50;
    const charsPerColumn = 15;

    for (let i = 0; i < numColumns; i++) {
        const columnSpeed = Math.random() * 0.05 + 0.02;
        for (let j = 0; j < charsPerColumn; j++) {
            const char = characters[Math.floor(Math.random() * characters.length)];
            const sprite = createTextSprite(char, '#2196F3');
            sprite.position.set(
                (i - numColumns / 2) * 4,
                50 + j * 4,
                -20
            );
            scene.add(sprite);
            matrixCharacters.push({
                mesh: sprite,
                speed: columnSpeed,
                column: i,
                char: char
            });
        }
    }

    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    // Animate Matrix characters falling in columns
    matrixCharacters.forEach(char => {
        char.mesh.position.y -= char.speed;
        if (char.mesh.position.y < -50) {
            // Reset to top
            char.mesh.position.y = 50;
            // Change character
            const name = 'アディティヤシャルマ';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン' + name.repeat(10);
            const newChar = characters[Math.floor(Math.random() * characters.length)];
            if (newChar !== char.char) {
                char.char = newChar;
                const nameChars = 'アディティヤシャルマ';
                const isNameChar = nameChars.includes(newChar);
                const canvas = char.mesh.material.map.image;
                const context = canvas.getContext('2d');
                context.clearRect(0, 0, 256, 256);
                context.fillStyle = isNameChar ? '#ffffff' : (document.body.classList.contains('dark-mode') ? '#95ccff' : '#2196F3');
                context.fillText(newChar, 128, 128);
                char.mesh.material.map.needsUpdate = true;
                char.mesh.isNameChar = isNameChar;
            }
        }
    });

    renderer.render(scene, camera);
}

function updateParticleColor(isDarkMode) {
    const color = isDarkMode ? '#95ccff' : '#2196F3';
    // Update Matrix characters colors
    matrixCharacters.forEach(char => {
        const canvas = char.mesh.material.map.image;
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, 256, 256);
        context.fillStyle = color;
        context.fillText(char.char, 128, 128);
        char.mesh.material.map.needsUpdate = true;
        char.mesh.material.opacity = isDarkMode ? 0.4 : 0.8;
    });
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    updateParticleColor(isDarkMode);
}

init();
animate(); 