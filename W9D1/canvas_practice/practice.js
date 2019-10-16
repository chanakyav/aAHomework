document.addEventListener("DOMContentLoaded", function(){

    // Phase 1
    const canvas = document.getElementById("mycanvas");
    canvas.width = canvas.height = 500;
    const ctx = canvas.getContext("2d");

    // Phase 2
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 500, 500);

    // Phase 3
    ctx.beginPath();
    ctx.arc(100, 100, 20, 0, 2 * Math.PI, true);
    ctx.styleStroke = "green";
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = "blue";
    ctx.fill();

});
