
var myGamePiece;
var myObstacles = [];
var myScore;
var dateScoreCookie;
var currentDate = new Date();
var currentDay = currentDate.getDay();
var currentMonth = currentDate.getMonth() + 1;
var currentYear = currentDate.getFullYear();
var currentHr = currentDate.getHours();
var currentMin = currentDate.getMinutes();
var currentSec = currentDate.getSeconds();
if(currentDay < 31)
{
    if(currentDay < 28 && currentMonth === 2)
    {
       expireDay = 1;
    }
    else
    {
        expireDay = currentDay + 1;
    }
}
else
{
    expireDay = 1;
}

function startGame() {
    myGamePiece = new component(45, 30, "../images/ship.png", 10, 120, "image");
    myScore = new component("30px", "Consolas", "green", 280, 40, "text");
    myGameArea.start();

    document.getElementById("gameTable").remove();
    document.getElementById("gamePrep").remove();
    document.getElementById("upButton").style.display="block";
    document.getElementById("leftButton").style.display="block";
    document.getElementById("rightButton").style.display="block";
    document.getElementById("downButton").style.display="block";
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 500;
        this.canvas.height = 300;
        this.context = this.canvas.getContext("2d");
        document.getElementById("gameContainer").appendChild(this.canvas);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
        } else if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }

    
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for (i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i])) {
            myGameArea.stop();
            document.getElementById("gameContainer").remove();
            document.getElementById("upButton").remove();
            document.getElementById("leftButton").remove();
            document.getElementById("rightButton").remove();
            document.getElementById("downButton").remove();
            document.getElementById("scoreForm").style.display = "block";
            document.getElementById("scoreValue").value = myScore.text;
            var discountDisplay = document.getElementById('discountDisplay');
            var minutes = 1200;
            currentDate.setTime(currentDate.getTime() + (minutes * 60 * 1000));
            document.cookie = myScore.text +';' + "expires=" + currentDate.toUTCString() + ";";

            if(myScore.text < 500)
            {
                discountDisplay.textContent = "No discount please try again tomarrow.";
                discountDisplay.style.color = 'red';
            }
            else if(myScore.text > 500 && myScore.text < 1000)
            {
                discountDisplay.textContent = "Congratulations use code FLY3 FOR 3% off your next trip";
                discountDisplay.style.color = 'blue';
            }
            else if(myScore.text > 1000 && myScore.text < 1500)
            {
                discountDisplay.textContent = "Congratulations use code TRAVEL5 FOR 5% off your next trip";
                discountDisplay.style.color = 'purple';
            }
            else if(myScore.text > 1500 && myScore.text < 2500)
            {
                discountDisplay.textContent = "Congratulations use code CLIMBBIG10 FOR 10% off your next trip";
                discountDisplay.style.color = 'silver';
            }
            else if(myScore.text > 2500 && myScore.text < 4000)
            {
                discountDisplay.textContent = "Congratulations use code RIDE15 FOR 15% off your next trip";
                discountDisplay.style.color = 'gold';
            }
            else if(myScore.text > 4000)
            {
                discountDisplay.textContent = "Congratulations use code WINNER25 FOR 25% off your next trip";
                discountDisplay.style.color = 'whitesmoke';
            }

            checkForCookie();

            return;
        } 
    }
    myGameArea.clear();
    myGameArea.frameNo += 1;
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        x = myGameArea.canvas.width;
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        minGap = 50;
        maxGap = 200;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        myObstacles.push(new component(20, height, "../images/upsideDowntentacel.png", x, 0, "image"));
        myObstacles.push(new component(20, x - height - gap, "../images/tentacel.png", x, height + gap, "image"));
    }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].speedX = -1;
        myObstacles[i].newPos();
        myObstacles[i].update();
    }
    myScore.text= myGameArea.frameNo;
    myScore.update();
    myGamePiece.newPos();    
    myGamePiece.update();
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

function moveup() {
    myGamePiece.speedY = -1; 
}

function movedown() {
    myGamePiece.speedY = 1; 
}

function moveleft() {
    myGamePiece.speedX = -1; 
}

function moveright() {
    myGamePiece.speedX = 1; 
}

function clearmove() {
    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
}

document.onkeydown = checkKey;
document.onkeyup = clearmove;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38' || e.keyCode == '87') {
        // up arrow
        moveup();
    }
    else if (e.keyCode == '40' || e.keyCode == '83') {
        // down arrow
        movedown();
    }
    else if (e.keyCode == '37' || e.keyCode == '65') {
       // left arrow
       moveleft();
    }
    else if (e.keyCode == '39' || e.keyCode == '68') {
       // right arrow
       moveright();
    }
}


function checkForCookie()
{
    var cookieValue = document.cookie;
    var discountCode;

    if(cookieValue === null || cookieValue === '' || cookieValue === undefined || cookieValue === 0)
    {

    }
    else
    {
        if(cookieValue < 500)
            {
               discountCode = 'You did not recive a discount as your score was less then 500.';
            }
            else if(cookieValue > 500 && cookieValue < 1000)
            {
                discountCode = "Congratulations use code FLY3 FOR 3% off your next trip";
            }
            else if(cookieValue > 1000 && cookieValue < 1500)
            {
                discountCode = "Congratulations use code TRAVEL5 FOR 5% off your next trip";
            }
            else if(cookieValue > 1500 && cookieValue < 2500)
            {
                discountCode = "Congratulations use code CLIMBBIG10 FOR 10% off your next trip";
         
            }
            else if(cookieValue > 2500 && cookieValue < 4000)
            {
                discountCode = "Congratulations use code RIDE15 FOR 15% off your next trip";
            }
            else if(cookieValue > 4000)
            {
                discountCode = "Congratulations use code WINNER25 FOR 25% off your next trip";
            }

        document.getElementById('gamePrep').remove();
        document.getElementById('playedToday').style.display = 'block';
        document.getElementById('discountRecived').textContent = discountCode;
    }
}