document.addEventListener("DOMContentLoaded", () => {
    // Mobile/Sidebar Drawer Hooks
    const openMenuBtn = document.querySelectorAll(".menu-trigger-btn");
    const closeMenuBtn = document.getElementById("close-sidebar-btn");
    const sidebarDrawer = document.getElementById("sidebar-drawer");
    const sidebarOverlay = document.getElementById("sidebar-overlay");

    // Briefing Modal Hooks (for pages where it acts as a popup)
    const openModalBtn = document.querySelectorAll(".modal-trigger-btn");
    const closeModalBtn = document.getElementById("close-modal-btn");
    const briefingModal = document.getElementById("briefing-modal");

    // Sidebar Operations
    openMenuBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            if (sidebarDrawer) sidebarDrawer.classList.remove("translate-x-full");
            if (sidebarOverlay) sidebarOverlay.classList.remove("hidden");
        });
    });

    const closeSidebar = () => {
        if (sidebarDrawer) sidebarDrawer.classList.add("translate-x-full");
        if (sidebarOverlay) sidebarOverlay.classList.add("hidden");
    };

    if (closeMenuBtn) closeMenuBtn.addEventListener("click", closeSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener("click", closeSidebar);

    // Modal Operations (Fallback for popups)
    openModalBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            if (briefingModal) {
                briefingModal.classList.remove("hidden");
                briefingModal.classList.add("flex");
            }
        });
    });

    const closeModal = () => {
        if (briefingModal) {
            briefingModal.classList.add("hidden");
            briefingModal.classList.remove("flex");
        }
    };

    if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
    if (briefingModal) {
        briefingModal.addEventListener("click", (e) => {
            if (e.target === briefingModal) closeModal();
        });
    }

    // GLOBAL ESCAPE KEY ENGINE
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            // Context Action 1: If on standalone consultation.html page, redirect to index.html
            if (window.location.pathname.includes("consultation.html")) {
                window.location.href = "index.html";
            }
            // Context Action 2: If a pop-up modal or sidebar drawer is open on any other page, close it
            closeSidebar();
            closeModal();
        }
    });
});

// Secure form submit handler
function handleBriefingSubmit(event) {
    event.preventDefault();
    alert("Your secure strategic briefing credentials have been submitted. Our manager will connect shortly.");
    window.location.href = "index.html";
}
