document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    
    const emailInput = document.querySelector("input[type='email']");
    const submitButton = document.querySelector(".btn-primary");
    const emailFormGroup = emailInput.closest(".input-group");

    emailInput.addEventListener("input", function () {
        if (validateEmail(emailInput.value.trim())) {
            emailInput.classList.remove("is-invalid");
            emailInput.classList.add("is-valid");
        } else {
            emailInput.classList.remove("is-valid");
            emailInput.classList.add("is-invalid");
        }
    });

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        const emailValue = emailInput.value.trim();

        if (!validateEmail(emailValue)) {
            emailInput.classList.add("is-invalid");
            showToast("❌ Please enter a valid email address.", "danger");
            return;
        }

        submitButton.disabled = true;
        submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Submitting...';

        setTimeout(() => {
            showToast("✅ Thank you for signing up!", "success");
            emailInput.value = ""; 
            emailInput.classList.remove("is-valid");
            submitButton.disabled = false;
            submitButton.innerHTML = "Sign UP";
        }, 1500);
    });

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Dynamic Toast Notification
    function showToast(message, type) {
        const toastContainer = document.getElementById("toast-container");
        if (!toastContainer) return;

        const toast = document.createElement("div");
        toast.className = `toast align-items-center text-white bg-${type} border-0 show`;
        toast.setAttribute("role", "alert");
        toast.setAttribute("aria-live", "assertive");
        toast.setAttribute("aria-atomic", "true");
        toast.innerHTML = `
            <div class="d-flex">
                <div class="toast-body">${message}</div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        `;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.classList.remove("show");
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    }
    window.addEventListener("scroll", function() {
        let navbar = document.getElementById("navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("fixed-navbar");
        } else {
            navbar.classList.remove("fixed-navbar");
        }
    });
    window.addEventListener("scroll", function() {
        let navbar = document.getElementById("navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("fixed-navbar");
        } else {
            navbar.classList.remove("fixed-navbar");
        }
    });
});

