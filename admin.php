<body >
    <?php
    require "database.php";
    $match_id=database::s("SELECT * FROM `match_id`");
    $mi=$match_id->fetch_assoc();
    
    $ar["mid"]=$mi["match_id"];
    $ar["oc"]=$mi["op_team"];
    
    
    ?>
    <input type="text" id="mid" value="<?php echo$mi["match_id"]?>" ><button onclick="mid();">Matchid</button>
    <input type="text" id="mark" value="<?php echo$mi["op_team"]?>"><button onclick="mark();">marks</button>
    <script src="script.js"></script>
</body>