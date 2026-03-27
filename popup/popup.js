document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("toggle-btn");
    const btnImage = document.getElementById("toggle-btn-image");

    const btnImageSources = {
        off: "../assets/visuals/icons/main-button/off/vector-theme-1.svg",
        on: "../assets/visuals/icons/main-button/on/vector-theme-1.svg"
    };

    let isBlocking = false;

    btn.addEventListener("click", async () => {
        isBlocking = !isBlocking;

        // 🔁 Toggle UI
        if (isBlocking) {
            btnImage.src = btnImageSources.on;
            btnImage.alt = "on";

            //  GET CURRENT TAB URL
            let [tab] = await chrome.tabs.query({
                active: true,
                currentWindow: true
            });

            const url = tab.url;
            const domain = new URL(url).hostname;

            console.log("URL:", url);
            console.log("Website:", domain);

        } else {
            btnImage.src = btnImageSources.off;
            btnImage.alt = "off";
        }
    });
});
