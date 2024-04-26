// Функция для отображения/скрытия чата
function toggleChat() {
    var chatBox = document.getElementById("chatBox");
    chatBox.style.display = chatBox.style.display === "none" ? "block" : "none";
}

// Обработчик события отправки формы чата
document.getElementById("chatForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var message = document.getElementById("message").value;
    
    // Отправка сообщения на сервер для обработки и отправки на почту
    // Например, с помощью fetch API или XMLHttpRequest
    
    // После успешной отправки, можно очистить поле ввода
    document.getElementById("message").value = "";
});

// Функция для отображения/скрытия окна регистрации
function toggleRegistration() {
    var registrationBox = document.getElementById("registrationBox");
    registrationBox.style.display = registrationBox.style.display === "none" ? "block" : "none";
}

// Обработчик события регистрации пользователя
function registerUser(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Отправка данных формы на сервер для сохранения в базе данных
    // Например, с помощью fetch API или XMLHttpRequest

    // После успешной регистрации, можно очистить поля ввода
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}

// JavaScript для простого слайдера изображений
let slider = document.querySelector('.gallery-slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; // множитель для более быстрой прокрутки
    slider.scrollLeft = scrollLeft - walk;
});

// Заглушка для данных песен по альбомам
const songsByAlbum = {
    album1: ["Песня 1 из Альбома 1", "Песня 2 из Альбома 1", "Песня 3 из Альбома 1"],
    album2: ["Песня 1 из Альбома 2", "Песня 2 из Альбома 2", "Песня 3 из Альбома 2"],
    // Добавьте больше альбомов и песен здесь
};

// Заглушка для самой часто прослушиваемой песни
const mostPlayedSong = "Mary On The Cross";

// Функция для обновления списка песен по выбранному альбому
function updateSongsList(album) {
    const songs = songsByAlbum[album];
    const songsList = document.getElementById("songsList");
    songsList.innerHTML = "";
    songs.forEach(song => {
        const listItem = document.createElement("p");
        listItem.textContent = song;
        songsList.appendChild(listItem);
    });
}

// Обновление самой часто прослушиваемой песни
document.getElementById("mostPlayedSong").textContent = mostPlayedSong;

// Обработчик события выбора альбома в выпадающем списке
document.getElementById("albumSelect").addEventListener("change", function() {
    const selectedAlbum = this.value;
    const albumInfo = document.getElementById("albumInfo");
    const albumCover = document.getElementById("albumCover");
    const songsList = document.getElementById("songsList");
    
    // Скрытие информации об альбоме, если выбран пункт "Выберите альбом"
    if (!selectedAlbum) {
        albumInfo.classList.add("hidden");
        return;
    }
    
    // Отображение информации об альбоме
    albumInfo.classList.remove("hidden");
    
    // Установка обложки альбома
    // Установка обложки альбома
    albumCover.src = selectedAlbum + "Opus.jpg";
    albumCover.src = selectedAlbum + "Infestissumam.jpg";
    albumCover.src = selectedAlbum + "Ghost.jpg";
    albumCover.src = selectedAlbum + "Meliora.jpg";
    albumCover.src = selectedAlbum + "Prequelle.jpg";
    albumCover.src = selectedAlbum + "Impera.jpg"; // Предполагается, что у вас есть изображение с именем "album1.jpg", "album2.jpg" и т. д.
    
    // Получение списка песен для выбранного альбома
    const songs = songsByAlbum[selectedAlbum];
    
    // Очистка списка песен
    songsList.innerHTML = "";
    
    // Добавление песен в список
    songs.forEach(song => {
        const listItem = document.createElement("li");
        listItem.textContent = song;
        songsList.appendChild(listItem);
    });
});

function showAlbumInfo() {
    var select = document.getElementById("albumSelect");
    var albumInfo = document.getElementById("albumInfo");
    var albumCover = document.getElementById("albumCover");
    var songsList = document.getElementById("songsList");

    // Получаем выбранный альбом
    var selectedAlbum = select.value;

    // Обновляем обложку альбома и список песен
    if (selectedAlbum === "album1") {
        albumCover.src = "Infestissumam.jpg";
        songsList.innerHTML = `
            <li><audio controls><source src="Ghuleh.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio></li>
            <li><audio controls><source src="body.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio></li>
            <li><audio controls><source src="idol.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio></li>
            <li><audio controls><source src="zero.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio></li>
            <li><audio controls><source src="haze.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio></li>
            <li><audio controls><source src="aspera.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio></li>
        `;
    } else if (selectedAlbum === "album2") {
        albumCover.src = "Ghost.jpg";
        songsList.innerHTML = `
            <li><audio controls><source src="Marionetka.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio></li>
            <li><audio controls><source src="ghosts.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio></li>
            <li><audio controls><source src="cru.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio></li>
            <li><audio controls><source src="night.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio></li>
            <li><audio controls><source src="haze.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio></li>
        `;
    } else if (selectedAlbum === "album3") {
        albumCover.src = "Meliora.jpg";
        songsList.innerHTML = `
            <li><audio controls><source src="Hammer.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio></li>
            <li><audio controls><source src="Cirice.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio></li>
            <li><audio controls><source src="Mummy.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio></li>
            <li><audio controls><source src="Deus.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio></li>
            <li><audio controls><source src="He-Is.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio></li>
            <li><audio controls><source src="Man.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio></li>
        `;
    } else if (selectedAlbum === "album4") {
        albumCover.src = "Prequelle.jpg";
        songsList.innerHTML = `
            <li><audio controls><source src="Miasma.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio></li>
            <li><audio controls><source src="Rats.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio></li>
            <li><audio controls><source src="faith.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio></li>
            <li><audio controls><source src="see.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio></li>
            <li><audio controls><source src="macabre.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio></li>
            <li><audio controls><source src="pro.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio></li>
            <li><audio controls><source src="hel.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio></li>
            <li><audio controls><source src="life.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio></li>
        `;
    } else if (selectedAlbum === "album5") {
        albumCover.src = "Impera.jpg";
        songsList.innerHTML = `
            <li><audio controls><source src="Darkness.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio></li>
            <li><audio controls><source src="Spillways.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio></li>
            <li><audio controls><source src="little.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio></li>
            <li><audio controls><source src="Moon.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio></li>
            <li><audio controls><source src="twe.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio></li>
            <li><audio controls><source src="respite.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio></li>
        `;
    }
    // Добавьте остальные альбомы и песни здесь
    else {
        // Если альбом не выбран, скрываем информацию об альбоме
        albumInfo.classList.add("hidden");
        return;
    }

    // Показываем информацию об альбоме
    albumInfo.classList.remove("hidden");
}

function filterConcerts() {
    // Получаем выбранный год
    var selectedYear = document.getElementById("year").value;
    
    // Можно использовать AJAX запрос, чтобы получить данные о концертах для выбранного года
    // В данном примере просто генерируем некоторые фиктивные данные
    var concertsData = {
        "2023": ["Brisbane, Australia", "Sydney, Australia", "Santiago, Chile", "Sao Paulo, Brazil", "Phoenix, Arizona, USA", "Tampa, Florida, USA"],
        "2022": ["Bangor, Maine, USA", "Dalut, Georgia, USA", "Corpus Christi, Texas, USA", "Austin, Texas, USA", "Budapest, Hungary", "Munich, Germany"],
        "2021": ["Stonkton-on-Tees, UK"],
        "2020": ["Mexico City, Mexico"],
        "2019": ["Toulouse, France", "Zurich, Switzerland", "Strasbourg, France", "Madrid, Spain", "Prague, Czech Republic", "Katowice, Poland"]
    };
    
    var concertList = document.getElementById("concertList");
    // Очищаем список концертов перед добавлением новых
    concertList.innerHTML = "";
    
    // Проверяем, есть ли данные о концертах для выбранного года
    if (concertsData[selectedYear]) {
        // Добавляем каждый концерт в список
        concertsData[selectedYear].forEach(function(concert) {
            var li = document.createElement("li");
            li.textContent = concert;
            concertList.appendChild(li);
        });
    } else {
        // Если данных о концертах для выбранного года нет, показываем сообщение
        var li = document.createElement("li");
        li.textContent = "Нет данных о концертах для выбранного года.";
        concertList.appendChild(li);
    }
}