document.cookie = "SameSite=None; Secure";

// For FAQ Toggle

// Select all FAQ elements
const faqs = document.querySelectorAll(".faq-body");

// Loop through each FAQ element to add click event listener
faqs.forEach((faq, index) => {
    const faqHead = faq.querySelector(".faq-head");
    const faqArrow = faqHead.querySelector("i");
    const faqAnswer = faq.querySelector(".faq-answer");

    // Add click event listener to each FAQ head
    faqHead.addEventListener("click", () => {
        // Toggle the arrow icon
        faqArrow.classList.toggle("rotate");
        
        // Toggle the display of the FAQ answer
        faqAnswer.classList.toggle("active");
        
        // Collapse other FAQs if currently expanded
        faqs.forEach((otherFaq, otherIndex) => {
            if (otherIndex !== index && otherFaq.querySelector(".faq-answer").classList.contains("active")) {
                otherFaq.querySelector(".faq-answer").classList.remove("active");
                otherFaq.querySelector("i").classList.remove("rotate");
            }
        });
    });
});
