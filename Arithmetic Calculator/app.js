$(document).ready(function () {
    let operator = "+"; // Initialize operator to a default value

    $("#num1").on('input', function () {
        const num1 = parseFloat($(this).val());
        if (!isNaN(num1)) {
            $("#result").css({
                "color": "#FFC300",
                "font-weight": "bold"
            });
            $("#result").text("Subtotal= " + num1);
        }
    });

    $(".operator-btn").click(function () {
        operator = $(this).data("operator");
        // Hide the second number input when operator is not selected
        if (operator === "+" || operator === "-" || operator === "*" || operator === "/") {
            $("#num2").hide();
        }
        // Show the second number input when operator is selected
        if (operator === "+" || operator === "-" || operator === "*" || operator === "/") {
            $("#num2").show();
        }
    });

    $("#calculateBtn").click(function () {
        const num1 = parseFloat($("#num1").val());
        const num2 = parseFloat($("#num2").val());

        if (isNaN(num1) || (isNaN(num2) && ($("#num2").css("display") !== "none"))) {
            $("#result").text("Please enter valid numbers.");
            return;
        }

        let total = 0;

        switch (operator) {
            case "+":
                total = num1 + num2;
                break;
            case "-":
                total = num1 - num2;
                break;
            case "*":
                total = num1 * num2;
                break;
            case "/":
                if (num2 === 0) {
                    $("#result").text("Division by zero is not allowed.");
                    return;
                }
                total = num1 / num2;
                break;
            default:
                $("#result").text("Invalid operator.");
                return;
        }
        $("#result").css({
            "color": "#C70039",
            "font-weight": "bold"
        });

        $("#result").text("Grand Total= " + total);

        // Reset operator and hide the second number input
        operator = "+";
        $("#num2").hide();
    });
});