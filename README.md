# poll-survey-chart
This is code that generates a bar chart from a data array.

## How to get the data ready
The data can come from a spreadsheet of any kind, whether it’s Excel or Google (or any other kind, though those are the only I know of). The three columns should be named Question, Name and Value. Note: As of now, it only charts POSITIVE numbers. Notice there are no dollar signs or percentages. Just raw numbers. There should be no commas in the numbers. 

Data is converted to JSON using Mr. Data Converter: https://shancarter.github.io/mr-data-converter/

Notice how the questions repeat in some of the rows. That’s become the name and values for that row go with that particular question. There are five rows that have “If the election were held…” because there are five answers. There are only three “Which topics” rows because there are three answers. You can have one row or 37, or however many you have.

## Tweaking and updating the files

The data array generated by Mr. Data Converter should then replace the data variable in the main.js file.

If you have a prefix (like a $) or a suffix (like million), designate those in main.js using two lines for the prefix and the suffix. Fill these out if you want the number to have anything before or after it. If you don’t, just delete the dollar sign and the m, but keep the quote marks in which those sit.

Update the hed, subtitle, source and credit info in index.html. The head is in the div with the class “graphichead,” the subtitle is in the div with the class “subtitle,” the source is in the p tag with the class “source,” and the credit is in the p tag with the class “credit.” You don’t need to have a head or subtitle, so you can delete those or just leave them blank.

## How the code works

The JavaScript cycles through the data in a for loop, creating div elements. These div elements become the bar chart, and the code determines how wide each bar should be depending on its value. If you need to update the numbers, you can just re-paste the data array with new numbers.