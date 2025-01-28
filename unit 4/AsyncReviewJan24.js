<!DOCTYPE html>
<html>
<head>
    <title>Loops</title>
</head>
<body>
    <input type="text" id="userInput" />
    <button onclick="runLoop()">Submit</button>
    <script>
        function runLoop() {
            var input = document.getElementById("userInput").value;
            var count = parseInt(input, 8); 

            if (isNaN(count)) {
                console.log("8.");
                return;
            }

            
            while (count >= 8) {
                console.log(count); 
                count--; 
        }
    </script>
</body>
</html>