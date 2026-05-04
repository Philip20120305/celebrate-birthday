document.addEventListener('DOMContentLoaded', function() {
    const cake = document.getElementById('cake');
    const song = document.getElementById('song');
    const fireworksContainer = document.getElementById('fireworks-container');
    const balloonsContainer = document.getElementById('balloons-container');

    const messages = [
        "万事如意",
        "福如东海",
        "恭喜发财",
        "吉星高照",
        "年年有余",
        "步步高升",
        "五福临门",
        "四季平安",
        "龙马精神",
        "心想事成",
        "花开富贵",
        "岁岁平安",
        "一帆风顺",
        "金玉满堂"
    ];

    cake.addEventListener('click', function() {
        // 播放生日快乐歌曲
        song.play();

        // 创建连续的烟花效果
        for (let i = 0; i < 20; i++) {
            setTimeout(createFireworks, i * 500);
        }

        // 创建气球效果
        for (let i = 0; i < 20; i++) {
            setTimeout(createBalloon, i * 300);
        }
    });

    function createFireworks() {
        const fireworks = document.createElement('div');
        fireworks.classList.add('firework');
        fireworks.style.position = 'absolute';
        fireworks.style.width = '100px';
        fireworks.style.height = '100px';
        fireworks.style.backgroundColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.8)`;
        fireworks.style.borderRadius = '50%';
        fireworks.style.animation = 'explode 1s forwards';
        fireworksContainer.appendChild(fireworks);

        // 设置烟花位置
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        fireworks.style.left = `${x}px`;
        fireworks.style.top = `${y}px`;

        // 移除烟花元素
        setTimeout(() => {
            fireworksContainer.removeChild(fireworks);
        }, 1000);
    }

    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.backgroundColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.8)`;

        const message = document.createElement('div');
        message.classList.add('balloon-message');
        const randomIndex = Math.floor(Math.random() * messages.length);
        message.textContent = messages[randomIndex];

        balloon.appendChild(message);
        balloonsContainer.appendChild(balloon);

        // 设置气球位置
        const x = Math.random() * window.innerWidth;
        balloon.style.left = `${x}px`;

        // 移除气球元素
        setTimeout(() => {
            balloonsContainer.removeChild(balloon);
        }, 5000);
    }
});