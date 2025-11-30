document.getElementById("calculate").addEventListener("click", function () { 
    let totalPower = 0;

    // Знаходимо всі блоки з приладами
    const devices = document.querySelectorAll(".device");

    devices.forEach(device => {
        const power = Number(device.getAttribute("power")); // потужність приладу
        const quantity = Number(device.querySelector("select").value); // кількість

        totalPower += power * quantity;
    });

    // Виводимо результат
    document.getElementById("result").innerText =
        "Загальна потужність: " + totalPower + " Вт";

    window.calculatedPower = totalPower;
});

document.getElementById("recommend").addEventListener("click", function () {
    let power = window.calculatedPower || 0;

    // Перехід на сторінку рекомендацій з передачею значення
    window.location.href = "HTML2сторінка_курсова9клас.html?power=" + power ;
});

if(result){
    result.items.forEach(html => {
        container.innerHTML += html; // вставляємо готову карточку
    });
} else {
    container.innerHTML = "<p class='no-systems'>Підходящих систем не знайдено.</p>"
};

// ======= Ось новий блок для кнопок "Докладніше" =======
document.querySelectorAll(".Knipka").forEach(button => {
    button.addEventListener("click", () => {
        const card = button.closest(".system-card");
        const info = card.querySelector(".full-info");
        if(info) info.classList.toggle("hidden"); // показуємо/ховаємо блок
    });
});
