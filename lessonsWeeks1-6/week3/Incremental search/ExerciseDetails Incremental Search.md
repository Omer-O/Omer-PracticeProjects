# Incremental Search

Incremental search has become standard on sites across the web.

[![img](https://github.com/spicedacademy/salt/raw/master/wk2_dy3_incremental_search/search.gif)](https://github.com/spicedacademy/salt/blob/master/wk2_dy3_incremental_search/search.gif)

Let's make an incremental search field that allows users to find one of the countries that exist on earth. A [list of countries](https://github.com/spicedacademy/salt/blob/master/wk2_dy3_incremental_search/countries.json) has been prepared for you.

- Every time the user types a visible character, if the current value of the input field is at the beginning of the names of any countries in the list, those country names should be displayed (limit it to four countries displayed at a time).
- If the current value of the input is not at the beginning of any of the country names, the string "No results" should be displayed in gray
- If a list of results is displayed and the user clicks outside of it and outside of the input field, the result list should disappear.
- Result lists should reappear when the user gives the input field focus
- If the user mouses over a result in the result list, that result should light up (give it a background color and different text color)
- If a result list is displayed and the user hits an up or down arrow key, the appropriate result should light up
- If the user clicks a result or hits the enter key while a result is lit up, the full country name of the appropriate result should appear in the input field and the result list should disappear!

*Do not use the HTML <select> or <datalist> tags to solve this challenge!*



Exercise STEPS:

1. input (text field)
    * get the current value of the text field
    * if the current value is an empty string, empty and/or hide the results element and do nothing else
    * loop through the countries and build a list of countries that start with the value
    * if matches array is empty, put the "no results" message into the results element
    * if matches array is not empty, loop through them, generate html for each, and put the html in the results element. Update the DOM just once with the full list of result elements

2. mouseover/mouseenter (individual result)
    * remove the highlight class from the result that has it if there is one
    * add the highlight class to the event target

3. mousedown (individual result)
    * take the text contained by the element with the highlight class (it's the event target) and set it as the value of the text field
    * empty and/or hide the results

4. keydown (text field)
    * if the down arrow is pressed
        * if no result element has the highlight class, add the highlight class to the first result
        * if a result other than the last one has the highlight class, remove the highlight class from the result that has it and add it to the next one
        * if the last result element has the highlight class, do nothing
    * if the up arrow is pressed
        * if no result element has the highlight class, add the highlight class to the last result
        * if a result other than the first one has the highlight class, remove the highlight class from the result that has it and add it to the previous one
        * if the first result element has the highlight class, do nothing
    * if the return key is pressed
        * take the text contained by the element with the highlight class and set it as the value of the text field
        * empty and/or hide the results
5. focus (text field)
    * do the same thing as the input
6. blur (text field)
    * empty and/or hide the results