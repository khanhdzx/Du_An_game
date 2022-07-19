let canvas = document.getElementById('gamezone');
let context = canvas.getContext('2d');
let scoreshow = document.getElementById('score');
let birding = new Image();
let hinhnenchinh = new Image();
let ongtren = new Image();
let ongduoi = new Image();
let audio = new Audio('score_sfx.ogg')
let amthanhbay = new Audio('flap_sfx.ogg')
let amthanhchet = new Audio('hit_sfx.ogg')
let meme = new Audio ('meme.mp4')
// let mema = new Audio('vipme.mp4')

birding.src = 'images/bird.png';
hinhnenchinh.src = 'images/nenchinh.png';
ongtren.src = 'images/ongtren.png';
ongduoi.src = 'images/ongduoi.png';

let score = 0;
let khoangcachhaiong = 140;
let khoangcachdenongduoi;
let bird = {
    x: 0,
    y: 0 ,
}
let ong = [];
ong[0] = {
    x: canvas.width,
    y: 0
}
// mema.play(1)

function run() {
    context.drawImage(hinhnenchinh, 0, 0);
    context.drawImage(birding, bird.x, bird.y);
    console.log('ong.leng === ', ong.length)
    for (let i = 0; i < ong.length; i++) {
        // console.log('i ====== ', i)
        khoangcachdenongduoi = ongtren.height + khoangcachhaiong;
        context.drawImage(ongtren, ong[i].x, ong[i].y)
        context.drawImage(ongduoi, ong[i].x, ong[i].y + khoangcachdenongduoi);
        ong[i].x -= 5;

        if (ong[i].x === canvas.width / 2) {
            ong.push({
                x: canvas.width,
                y: Math.floor(Math.random() * ongtren.height) - ongtren.height,
            })

        }
        if (ong[i].x === 0) {
            ong.splice(0, 1,);
            audio.play()
            score++;
        }
        // if(ong[i].x==bird.x)

        // console.log('ong.x ------------------------------', ong[i].x)
        // console.log('bird.x ========', bird.x)
        //
        // }
        if (bird.y + birding.height == canvas.height ||
            bird.x + birding.width >= ong[i].x && ong[i].x <= ong[i].x + ongtren.width
             && (bird.y <= ong[i].y + ongtren.height ||
                bird.y + birding.height >= ong[i].y + khoangcachdenongduoi)
        ) {
             amthanhchet.play()
            // meme.play()
             return;
        }
    }
    scoreshow.innerHTML = "Điểm :" + score;
     // audio.play()
    bird.y += 3;
    requestAnimationFrame(run)


}

run()
document.addEventListener("keydown", function (e) {
    if (e.keyCode == 32) {
        bird.y -= 50

    }amthanhbay.play()
})
