function req2() {
    setInterval(req, 2000);
}

function req() {
    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = JSON.parse(r.responseText);

            var x = new XMLHttpRequest();
            x.onreadystatechange = function() {
                if (x.readyState == 4) {
                    var ar = JSON.parse(x.responseText)["livescore"];
                    var c = x.responseText;
                    // alert(c);

                    //title

                    var title = ar["title"];



                    // var team1 = (ar["title"].split("vs"))["0"];
                    // var team2 = (((ar["title"].split("vs"))["1"]).split(","))["0"];


                    // marks1

                    var corrent = ar["current"];
                    document.getElementById("team1").innerHTML = (corrent.split("-"))["0"];
                    document.getElementById("m1").innerHTML = (corrent.split("-"))["1"];

                    //marks2

                    var mark2 = text["oc"];
                    document.getElementById("team2").innerHTML = (mark2.split("-"))["0"];
                    document.getElementById("m2").innerHTML = (mark2.split("-"))["1"];
                    //batsman1

                    var batsman1 = ar["batsman"];
                    var batsman1run = ar["batsmanrun"];
                    var batsman1balls = ar["ballsfaced"];

                    document.getElementById("b1").innerHTML = batsman1;
                    document.getElementById("b1r").innerHTML = batsman1run;
                    document.getElementById("b1b").innerHTML = batsman1balls;

                    //batsman1_marks

                    var batsman1fours = ar["fours"];
                    var batsman1sixs = ar["sixes"];
                    var batsman1sr = ar["sr"];

                    document.getElementById("b14").innerHTML = batsman1fours;
                    document.getElementById("b16").innerHTML = batsman1sixs;
                    document.getElementById("b1sr").innerHTML = batsman1sr;


                    //batsman2

                    var batsman2 = ar["batsmantwo"];
                    var batsman2run = ar["batsmantworun"];
                    var batsman2balls = ar["batsmantwoballsfaced"];

                    document.getElementById("b2").innerHTML = batsman2;
                    document.getElementById("b2r").innerHTML = batsman2run;
                    document.getElementById("b2b").innerHTML = batsman2balls;

                    //batsman2_marks

                    var batsman2fours = ar["batsmantwofours"];
                    var batsman2sixs = ar["batsmantwosixes"];
                    var batsman2sr = ar["batsmantwosr"];


                    document.getElementById("b24").innerHTML = batsman2fours;
                    document.getElementById("b26").innerHTML = batsman2sixs;
                    document.getElementById("b2sr").innerHTML = batsman2sr;

                    //bowler1

                    var bowler1 = ar["bowler"];
                    var bowler1over = ar["bowlerover"];
                    var bowler1runs = ar["bowlerruns"];
                    var bowler1wickets = ar["bowlerwickets"];
                    var bowler1maiden = ar["bowlermaiden"];
                    var bowler1eco = (bowler1runs / bowler1over).toFixed(2);

                    document.getElementById("bo1").innerHTML = bowler1;
                    document.getElementById("bo1o").innerHTML = bowler1over;
                    document.getElementById("bo1r").innerHTML = bowler1runs;
                    document.getElementById("bo1w").innerHTML = bowler1wickets;
                    document.getElementById("bo1m").innerHTML = bowler1maiden;
                    document.getElementById("bo1ec").innerHTML = bowler1eco;


                    //bowler2

                    var bowler2 = ar["bowlertwo"];
                    var bowler2over = ar["bowletworover"];
                    var bowler2runs = ar["bowlertworuns"];
                    var bowler2wickets = ar["bowlertwowickets"];
                    var bowler2maiden = ar["bowlertwomaiden"];
                    var bowler2eco = (bowler2runs / bowler2over);

                    //partnership

                    var partnership = ar["partnership"];
                    document.getElementById("partnership").innerHTML = "partnership : " + partnership;

                    //resent

                    var resentballs = ar["recentballs"];
                    document.getElementById("res").innerHTML = "Recent : " + resentballs;
                    //runrate

                    var runrate = ar["runrate"];
                    document.getElementById("runrate").innerHTML = runrate;
                    //update

                    var update = ar["update"];

                    document.getElementById("update").innerHTML = update;




                }
            };
            var url = "https://cricket-api.vercel.app/cri.php?url=https://www.cricbuzz.com/live-cricket-scores/" + text['mid'];
            x.open("GET", url, true)
            x.send();












        }
    };








    r.open("GET", "getmatchid.php", true);
    r.send();
}

function mid() {
    var mid = document.getElementById("mid").value;
    var f = new FormData();
    f.append("mid", mid);
    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText;
            alert(text);
            window.location = "admin.php";
        }

    };
    r.open("POST", "insert_match_id.php", true);
    r.send(f);
}

function mark() {
    var mark = document.getElementById("mark").value;
    var f = new FormData();
    f.append("mark", mark);
    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText;
            alert(text);
            window.location = "admin.php";
        }
    };
    r.open("POST", "update_op_score.php", true);
    r.send(f);
}