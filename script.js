$(document).ready(function() {

    //variable declarations
    var firstNumber = '';
    var operator = '';
    var secondNumber = '';
    var answer = '';


    //onclick event if number is clicked
    $('.number').on('click', function(event){

        //if operator has not been selected, append clicked button's value to first number
        //if operator has been selected, append clicked button's value to second number
        //if answer has been found, don't allow more numbers to be pressed until clear button is clicked
        if (operator === ''){
            event.preventDefault();
            firstNumber = firstNumber + $(this).val();
            $('#first-number').text(firstNumber);
        } else if (answer === '') {
            event.preventDefault();
            secondNumber = secondNumber + $(this).val();
            $('#second-number').text(secondNumber);
        } else {
            return;
        }
       
    }); //end .number onclick event
    

    //onclick event if operator is clicked
    $('.operator').on('click', function(event){

        //set operator variable equal to value of operator button that was clicked
        event.preventDefault();
        operator = $(this).val();
        $('#operator').text(operator);

        //if operator is '^', replace with '**' for exponent calculation
        if (operator === '^'){
            operator = '**';
        }

    }); //end .operator onclick event


    //onclick event if equal button is clicked
    $('#button-equal').on('click', function(event){

        //if secondNumber is empty, return from function
        //if secondNumber is not empty, convert first and second numbers to integers and calculate the answer of the equation
        if (secondNumber === ''){
            return;
        }else {
            firstNumber = parseInt(firstNumber);
            secondNumber = parseInt(secondNumber);
            answer = eval(firstNumber + operator + secondNumber);
            $("#result").text(answer);
        }

    }); //end #button-equal onclick event


    //onclick event if clear button is clicked
    $('#button-clear').on('click', function(event){

        //empty the calculator results card
        //clear all variables to prepare for next equation
        $('#first-number, #second-number, #operator, #result').empty();
        firstNumber = '';
        secondNumber = '';
        operator = '';
        answer = '';

    }); //end #button-clear onclick event

}); //end document.ready function