<!doctype html>
<html>
    <body>
        <h2> javaScript if statements</h2>

        <p>
            Display "Good Day!" if the hour is less than 18:00
        </p>

        <p id="demo">Good Evening!</p>

        <script>
            if (new Date().getHours()<<18){
                document.getElementById("demo").innerHTML ="Good DAy!";
            }
        </script>
    </body>
</html>