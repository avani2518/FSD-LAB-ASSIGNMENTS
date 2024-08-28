<!DOCTYPE html>
<html>
<head>
    <title>Stylish Calculator</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        body {
            background: linear-gradient(135deg, #83a4d4, #b6fbff);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .calculator {
            background: linear-gradient(145deg, #bbdefb, #90caf9);
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
            max-width: 500px;  /* Increased width */
            width: 100%;
            text-align: center;
        }
        .calculator h1 {
            font-size: 28px;
            color: #1565c0;
            margin-bottom: 25px;
            font-weight: bold;
        }
        .form-group label {
            font-weight: bold;
            color: #0d47a1;
        }
        .form-control {
            border-radius: 10px;
            padding: 10px;
            font-size: 16px;
            margin-bottom: 20px;
            border: 2px solid #64b5f6;
            transition: border-color 0.3s ease;
            width: 100%; /* Make the input boxes full width */
        }
        .form-control:focus {
            border-color: #1565c0;
        }
        .btn-group-justified .btn {
            flex: 1;
            margin-right: 5px;
            border-radius: 0;  /* Removed border-radius for rectangular buttons */
            font-size: 16px;
            transition: background-color 0.3s ease, transform 0.2s;
            box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
        }
        .btn-group-justified .btn:hover {
            background-color: #42a5f5;
            color: white;
            transform: translateY(-3px);
        }
        .btn-danger {
            border-radius: 0;  /* Removed border-radius for rectangular button */
            font-size: 16px;
            transition: background-color 0.3s ease, transform 0.2s;
            box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
        }
        .btn-danger:hover {
            background-color: #ef5350;
            color: white;
            transform: translateY(-3px);
        }
        .form-group:last-of-type input {
            border: none;
            background-color: #e3f2fd;
            font-size: 18px;
            text-align: center;
            color: #0d47a1;
            font-weight: bold;
            border-radius: 10px;
            width: 100%; /* Ensure the result box is full width */
        }
        hr {
            border-top: 2px solid #64b5f6;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="calculator">
        <h1>Calculator</h1>
        <hr>
        <div class="form-group">
            <label for="fname">Num 1:</label>
            <input type="text" class="form-control" id="fname" name="fname">
        </div>
        <div class="form-group">
            <label for="sname">Num 2:</label>
            <input type="text" class="form-control" id="sname" name="sname">
        </div>
        <div class="btn-group btn-group-justified mb-3" role="group">
            <button class="btn btn-primary" onclick="performOperation('add')"><i class="fas fa-plus"></i> Add</button>
            <button class="btn btn-primary" onclick="performOperation('subtract')"><i class="fas fa-minus"></i> Subtract</button>
            <button class="btn btn-primary" onclick="performOperation('multiply')"><i class="fas fa-times"></i> Multiply</button>
            <button class="btn btn-primary" onclick="performOperation('divide')"><i class="fas fa-divide"></i> Divide</button>
        </div>
        <div>
            <button class="btn btn-danger" onclick="performOperation('clear')"><i class="fas fa-trash"></i> Clear</button>
        </div>
        <br><hr>
        <div class="form-group">
            <input type="text" class="form-control" id="rs" name="result" readonly placeholder="Result">
        </div>
    </div>

    <script type="text/javascript">
        function performOperation(operation) 
        {
            if (operation === 'clear') {
                clearFields();
                return;
            }

            var num1 = parseFloat(document.getElementById("fname").value);
            var num2 = parseFloat(document.getElementById("sname").value);
            var result;

            if (isNaN(num1) || isNaN(num2)) 
            {
                result = "Please enter valid numbers!";
            } 
            else 
            {
                switch (operation) 
                {
                    case 'add':
                        result = num1 + num2;
                        break;
                    case 'subtract':
                        result = num1 - num2;
                        break;
                    case 'multiply':
                        result = num1 * num2;
                        break;
                    case 'divide':
                        if (num2 !== 0) 
                        {
                            result = num1 / num2;
                        } 
                        else 
                        {
                            result = "Cannot divide by zero!";
                        }
                        break;
                    default:
                        result = "Unknown operation";
                        break;
                }
            }

            document.getElementById("rs").value = result;
        }

        function clearFields() {
            document.getElementById("fname").value = "";
            document.getElementById("sname").value = "";
            document.getElementById("rs").value = "";
        }
    </script>
</body>
</html>
