
function Validation(){
    let input, message
    input = document.getElementById("input_box").value
    message = document.getElementById("message_box")
    try {
        if (input == "") {
            throw"The input is empty"
        }
        else if (isNaN(input)) {
            throw "The entered phrase is not a number"
        }
        else if (input.length >= 10) {
            "The length of the entered value is longer than usual"
        }
        else if (input.length <= 3) {
            "The length of the entered value is shorter than usual"
        }
        else if (Number(input)) {
            message.innerText = "This is a valid input"
        }
    }
    catch (log_message) {
        message.innerText = log_message
    }
}
