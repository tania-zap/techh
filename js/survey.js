const form = document.getElementById("survey-form");
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
        const response = await fetch("https://techh-taniazap.wuaze.com/form-handler.php", { 
            method: "POST",
            body: formData,
        });

        const result = await response.json();
        document.getElementById("response-message").innerText = 
            response.ok ? `Дякуємо! Відповідь збережена: ${result.timestamp}` 
                        : `Помилка: ${result.error}`;
    } catch (error) {
        document.getElementById("response-message").innerText = "Виникла помилка при надсиланні форми.";
    }
});
