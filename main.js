'use strict';
(function() {


    //Data here comes from a spreadsheet. Must have both the Name column and a Value column.
    //Data is converted to JSON using Mr. Data Converter: https://shancarter.github.io/mr-data-converter/

    var data = [{
            "Question": "If the election were held tomorrow, who would you vote for?",
            "Name": "Missy Elliott",
            "Value": 31
        },
        {
            "Question": "If the election were held tomorrow, who would you vote for?",
            "Name": "Liz Lemon",
            "Value": 27
        },
        {
            "Question": "If the election were held tomorrow, who would you vote for?",
            "Name": "Obi-Wan Kenobi",
            "Value": 21
        },
        {
            "Question": "If the election were held tomorrow, who would you vote for?",
            "Name": "Keytar Bear",
            "Value": 14
        },
        {
            "Question": "Which topics are important to your voting decisions?",
            "Name": "Education",
            "Value": 83
        },
        {
            "Question": "Which topics are important to your voting decisions?",
            "Name": "Jobs",
            "Value": 78
        },
        {
            "Question": "Which topics are important to your voting decisions?",
            "Name": "Star Wars sequels",
            "Value": 44
        },
        {
            "Question": "Would you approve of a tax-funded water slide in Boston Common?",
            "Name": "Yes",
            "Value": 39
        },
        {
            "Question": "Would you approve of a tax-funded water slide in Boston Common?",
            "Name": "No",
            "Value": 50
        },
        {
            "Question": "Would you approve of a tax-funded water slide in Boston Common?",
            "Name": "Not sure",
            "Value": 11
        }
    ];


    // Use a suffix or prefix if you want to include units or any other character after the value, in this example, we use m for millions. But can be left just as var suffix=""
    var prefix = "";
    var suffix = "";
    var largest;
    var element = document.getElementById('main');
    var qNum = 1;
    var arrayValues = [];

    for (var i = 0; i < data.length; i++) {
        arrayValues.push(data[i].Value);
        var prev = Number(i - 1);
        if (i === 0 || data[i].Question !== data[prev].Question) {
            qNum = Number(qNum + 1);

            //Create the holder divs
            var holders = document.createElement('div');
            holders.setAttribute('class', 'holder');
            holders.setAttribute('id', 'question' + qNum);

            //Create the questions
            var questions = document.createElement('div');
            questions.setAttribute('class', 'question');

            var questionsText = document.createTextNode(data[i].Question);
            questions.appendChild(questionsText);

            holders.appendChild(questions);
            element.appendChild(holders);

        }
        data[i].QN = qNum;
    }

    largest = Math.max.apply(Math, arrayValues);

    for (var i in data) {

        var rows = document.createElement('div');
        rows.setAttribute('class', 'row');
        rows.setAttribute('id', 'r' + i);

        //Create Name div
        var Names = document.createElement('div');
        Names.setAttribute('class', 'Name');
        var NamesText = document.createTextNode(data[i].Name);
        Names.appendChild(NamesText);
        rows.appendChild(Names);

        //Create Value div
        var Value = document.createElement('div');
        Value.setAttribute('class', 'Value');
        Value.style.width = (data[i].Value * 58) / largest + '%';
        rows.appendChild(Value);

        //Create span and adding it to Value div
        var span = document.createElement('span');
        Value.appendChild(span);


        //Create ValueNumber
        var ValueNumber = document.createElement('div');
        ValueNumber.setAttribute('class', 'ValueNumber');

        //Create the ValueText
        var ValueNumberText = document.createTextNode(nWC(data[i].Value) + '' + suffix);
        ValueNumber.appendChild(ValueNumberText);
        rows.appendChild(ValueNumber);

        //Append all of this to the div
        document.querySelector('#question' + data[i].QN).appendChild(rows);
    }




    function nWC(x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }


})();