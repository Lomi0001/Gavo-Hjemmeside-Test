// main.js
(() => {
    // Year
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    // Mobile menu
    const btn = document.querySelector(".hamburger");
    const menu = document.getElementById("mobileMenu");
    if (btn && menu) {
        btn.addEventListener("click", () => {
            const isOpen = btn.getAttribute("aria-expanded") === "true";
            btn.setAttribute("aria-expanded", String(!isOpen));
            menu.hidden = isOpen;
        });

        // Close on click
        menu.querySelectorAll("a").forEach(a => {
            a.addEventListener("click", () => {
                btn.setAttribute("aria-expanded", "false");
                menu.hidden = true;
            });
        });
    }

    // FAQ accordion
    document.querySelectorAll(".faq__item").forEach((qBtn) => {
        qBtn.addEventListener("click", () => {
            const expanded = qBtn.getAttribute("aria-expanded") === "true";
            const answer = qBtn.nextElementSibling;

            // Close others for a clean feel
            document.querySelectorAll(".faq__item").forEach((b) => {
                b.setAttribute("aria-expanded", "false");
                const a = b.nextElementSibling;
                if (a && a.classList.contains("faq__a")) a.hidden = true;
                const icon = b.querySelector(".faq__icon");
                if (icon) icon.textContent = "+";
            });

            qBtn.setAttribute("aria-expanded", String(!expanded));
            if (answer && answer.classList.contains("faq__a")) {
                answer.hidden = expanded;
            }
            const icon = qBtn.querySelector(".faq__icon");
            if (icon) icon.textContent = expanded ? "+" : "–";
        });
    });

    // Contact form (placeholder)
    const form = document.getElementById("contactForm");
    const status = document.getElementById("status");
    if (form && status) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            status.textContent = "Tak. Din besked er registreret (kontaktformular kræver backend for faktisk afsendelse).";
            form.reset();
            setTimeout(() => (status.textContent = ""), 6000);
        });
    }
})();

