
<html>
<body>

<h2>JavaScript Arrays</h2>

<p>The Array.some() method checks if any of the elements in an array pass a test (provided as a function).</p>

<p id="demo"></p>

<script>
const ages = [3, 10, 18, 20];
document.getElementById("demo").innerHTML = ages.some(checkAdult);

function checkAdult(age) {
   console.log("const ages")
   
}
</script>

</body>
</html>
