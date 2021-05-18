<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<script src="../js/game.js"></script>
<script type="text/javascript" src="../json/highscores.Json"></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<style>
canvas {
    border:1px solid #d3d3d3;
    background-image: url('../images/gameBackground.jfif');
    height: 60%;
    width: 90%;
}

body{
  background-color: black;
}

.moveButton
{
  background-color: lawngreen;
  display: none;
}

a{
  color: lawngreen;
}

a.hover 
{
  background-color: lawngreen;
  color: black;
}

.startButton
 {
     color: lawngreen;
     width: 30%;
 }

 footer
 {
   position: sticky;
   left: 0;
   bottom: 0;
   width: 100%;
   text-align: center;
 }

 table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  color: lawngreen;
}

td, th {
  border: 1px solid lawngreen;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: lawngreen;
  color: black;
}

.leftStick
{
  position: absolute;
  left: auto;
  float: left;
}

hr.divider
{
  border: 2px dashed lawngreen;
}
</style>
</head>
<body onload="checkForCookie()">
<h2 style="color: lawngreen;" class="container d-flex justify-content-center">Use the Arrow keys or buttons to play!</h2><br /><br />
<br>
<div id="gamePrep" class="container d-flex justify-content-center">
  <h3 style="color: lawngreen;">Your ship is being attacked in the bermuda triangle by a giant <bold>KRAKEN</bold>! Use arrow keys or the on screen buttons to avoid the tentacles and 
    save everyone on board your ship. But remeber you only get once chance per day to try to save your crew and your own skin. Do you have what it takes, <a onclick="startGame();">CLICK HERE TO FIND OUT!</a></h3>
</div>
<div class="container d-flex justify-content-center">
  <h3  id="playedToday" style="display: none; color: lawngreen;">Thank you for playing come back again tomarrow to try for a better reward!</h3>
</div>
<div class="container d-flex justify-content-center">
  <h3 id="discountRecived" style="color: lawngreen;"></h3>
</div>

<div id="gameTable" class="container d-flex justify-content-center">
  <table>
    <tr>
      <th>Score</th>
      <th>Discount</th>
    </tr>
    <tr>
      <td>&lt; 500</td>
      <td>0 percent</td>
    </tr>
    <tr>
      <td>500-1000</td>
      <td>3 percent</td>
    </tr>
    <tr>
      <td>1000-1500</td>
      <td>5 percent</td>
    </tr>
    <tr>
      <td>1500-2500</td>
      <td>10 percent</td>
    </tr>
    <tr>
      <td>2500-4000</td>
      <td>15 percent</td>
    </tr>
    <tr>
      <td>4000+</td>
      <td>25 percent</td>
    </tr>
  </table>
</div>
<?php
  $dbc = mysqli_connect('softdev.mstclab.com', 'bsmith', 'Boderman1234', 'bsmith');
  $getScores = "SELECT score, initials FROM acefrontierscores ORDER BY score desc limit 10";

  $highscorelist = mysqli_query($dbc, $getScores);

  echo '<div id="highScores" class="leftStick">
  <h2 style="color: lawngreen; display: block;">HighScores<h2>
    <hr class="divider"> 
    <table>';

  while ($row = mysqli_fetch_array($highscorelist)) { 
    echo '<tr><td>'. $row['initials'].'</td><td>'.$row['score'].'</td></tr>';
  }

  echo '</table></div>';
?>
<div class="container d-flex justify-content-center" id="gameContainer">
</div>

<div class="container d-flex justify-content-center" >
    <form style="display: none; margin-left: 10px; padding-right: 20px; padding-left: 20px; background-color: rgba(0, 192, 16, 0.6); width: 50%;" id="scoreForm" enctype="multipart/form-data" method="post" action="game.php">
        <label style="color: black;" for="initials">Initials:</label>
        <input class="form-control" type="text" id="name" name="name" maxlength="3"><br>
        <label style="color: black;" for="score">Score:</label>
        <input class="form-control" type="text" id="scoreValue" name="score" readonly><br>
        <div style="text-align: right;">
        <input style="margin:5px; width: 100px; color: black; background-color: lawngreen;" type="submit" value="Submit" name="submit">
        </div>
        <div>
        <p style="font-weight:bolder; color: black; text-align: center;">Thanks for playing come back tomorrow for another chance.</p>
        <h3 style="color: red;" id="discountDisplay"></h3>
        </div>
        </form>
</div>

<div class="container d-flex justify-content-center">
  <button id="upButton" class="moveButton" onmousedown="moveup()" onmouseup="clearmove()" ontouchstart="moveup()">UP</button><br><br>
</div>

<br>

<div  class="container d-flex justify-content-center">
  <button id="leftButton" class="moveButton" onmousedown="moveleft()" onmouseup="clearmove()" ontouchstart="moveleft()">LEFT</button>
  <button id="rightButton" class="moveButton" onmousedown="moveright()" onmouseup="clearmove()" ontouchstart="moveright()">RIGHT</button>
</div>

<br>

<div class="container d-flex justify-content-center">
  <button id="downButton" class="moveButton" onmousedown="movedown()" onmouseup="clearmove()" ontouchstart="movedown()">DOWN</button>
</div>

<footer><h2 class="container d-flex justify-content-center"><a href="../index.html">Back to Site</a></h2></footer>

<?php
  if(isset($_POST['submit']))
  {
    $score = $_POST['score'];
    $initials = $_POST['name'];

    if(!empty($score) && !empty($initials))
    {

      $query = "INSERT INTO acefrontierscores (initials, score) VALUES ('$initials', '$score')";

      mysqli_query($dbc, $query);
    }
  }
?>

</body>
</html>
