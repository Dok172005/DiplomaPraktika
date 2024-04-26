<?php
// Параметры подключения к базе данных
$server = "localhost"; // Имя сервера (обычно localhost)
$username = "root"; // Имя пользователя базы данных
$password = ""; // Пароль пользователя базы данных
$database = "diploma"; // Имя базы данных

// Подключение к базе данных
$conn = new mysqli($server, $username, $password, $database);

// Проверка соединения
if ($conn->connect_error) {
    die("Ошибка подключения: " . $conn->connect_error);
}

// Пример выполнения запроса к базе данных
$sql = "SELECT * FROM Users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Вывод данных каждой строки
    while($row = $result->fetch_assoc()) {
        echo "UserID: " . $row["UserID"]. " - Username: " . $row["Username"]. " - Email: " . $row["Email"]. "<br>";
    }
} else {
    echo "0 результатов";
}

// Закрытие соединения
$conn->close();
?>
