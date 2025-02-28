<!DOCTYPE html>
<html>
<head>
    <title>Add Two Numbers</title>
</head>
<body>
    <h2>Add Two Numbers</h2>
    <form method="get" action="">
        <input type="number" name="num1" placeholder="Enter first number" required />
        <input type="number" name="num2" placeholder="Enter second number" required />
        <button type="submit">Add</button>
    </form>

    <?php
    if (isset($_GET['num1']) && isset($_GET['num2'])) {
        $num1 = intval($_GET['num1']);
        $num2 = intval($_GET['num2']);
        $sum = $num1 + 
