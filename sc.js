$(document).ready(function() {
    let chooseRandomColor = function(){
        let colorArray = ["lightsalmon","magenta","darkmagenta","deeppink"];
        return colorArray[Math.floor(Math.random() * 4)];
    }

    let fillTable = function(){
        let table = document.getElementById("tom");

        for (let i = 0; i < table.rows.length; i++) {
            for (let j = 0; j < table.rows.length; j++) {
                let row = table.rows[i];
                row.cells[j].style.backgroundColor = chooseRandomColor();
            }
        }
    }
    setInterval(fillTable,1000);



    let fillPlayBox = function(){
        $("#mainBox").css('background-color', chooseRandomColor())
        console.log($("#mainBox").css('background-color'));
    }
    setInterval(fillPlayBox,5000);




    let ScoreCount = $("td").click(function () {
        if($(this).css('backgroundColor')===$("#mainBox").css('background-color')){
            let count = $("#scoreNumber").text();
            let intCount = parseInt(count);
            intCount = intCount + 1;
            $("#scoreNumber").text(intCount);


        }
    });
    setInterval(ScoreCount,10);


});/**
 * Created by root on 2/4/18.
 */
