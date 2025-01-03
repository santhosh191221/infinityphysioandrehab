// // Slideshow functionality
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     const slides = document.querySelectorAll(".slide");
//     slides.forEach((slide, index) => {
//         slide.style.display = "none";
//     });
//     slideIndex = (slideIndex + 1) % slides.length;
//     slides[slideIndex].style.display = "block";
//     setTimeout(showSlides, 4000);
// }

// // Dynamic content loading
// document.querySelectorAll(".nav-bar a").forEach(link => {
//     link.addEventListener("click", (event) => {
//         event.preventDefault();
//         const section = event.target.dataset.section;
//         loadContent(section);
//     });
// });

// function loadContent(section) {
//     const content = {
//         "about-us": `<h2>About Us</h2><p>Our team of expert physiotherapists is dedicated to helping you achieve optimal health and wellness.</p>`,
//         "vision": `<h2>Vision</h2><p>Our vision is to create a healthier, more active community by providing exceptional physiotherapy services.</p>`,
//         "appointment": `
//             <section id="appointment-section">
//                 <h2>Book an Appointment</h2>
//                 <form id="appointment-form">
//                     <label for="name">Name:</label>
//                     <input type="text" id="name" name="name" required>

//                     <label for="email">Email Address:</label>
//                     <input type="email" id="email" name="email" required>

//                     <label for="phone">Phone Number:</label>
//                     <input type="tel" id="phone" name="phone" required>

//                     <label for="message">Write Your Messages (about condition and inquiries):</label>
//                     <textarea id="message" name="message" rows="5" required></textarea>

//                     <button type="submit">Book an Appointment</button>
//                 </form>
//                 <p id="form-status"></p>
//             </section>
//         `,
//         "our-works": `<h2>Our Works</h2><p>Explore our success stories and the impact we’ve made on our patients’ lives.</p>`,
//         "reviews": `<h2>Reviews</h2><p>See what our satisfied patients have to say about their experience with us.</p>`
//     };
//     document.getElementById("content").innerHTML = content[section];
//     if (section === "appointment") {
//         document.getElementById("appointment-form").addEventListener("submit", handleFormSubmit);
//     }
// }

// function handleFormSubmit(event) {
//     event.preventDefault();
//     const form = event.target;
//     const formData = new FormData(form);
//     const data = Object.fromEntries(formData.entries());

//     // Simulate sending an email
//     console.log("Sending email with the following data:", data);

//     // Update form status
//     document.getElementById("form-status").textContent = "Your appointment request has been sent!";
// }





// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide, index) => {
        slide.style.display = "none";
    });
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = "block";
    setTimeout(showSlides, 4000);
}

// Dynamic content loading
document.querySelectorAll(".nav-bar a").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const section = event.target.dataset.section;
        loadContent(section);
    });
});

function loadContent(section) {
    const content = {
        "about-us": `<h2>About Us</h2><p>Our team of expert physiotherapists is dedicated to helping you achieve optimal health and wellness.</p>`,
        "vision": `<h2>Vision</h2><p>Our vision is to create a healthier, more active community by providing exceptional physiotherapy services.</p>`,
        "appointment": `
            <section id="appointment-section">
                <h2>Book an Appointment</h2>
                <form id="appointment-form">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>

                    <label for="email">Email Address:</label>
                    <input type="email" id="email" name="email" required>

                    <label for="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" required>

                    <label for="message">Write Your Messages (about condition and inquiries):</label>
                    <textarea id="message" name="message" rows="5" required></textarea>

                    <button type="submit">Book an Appointment</button>
                </form>
                <p id="form-status"></p>
            </section>
        `,
        "our-works": `<h2>Our Works</h2><p>Explore our success stories and the impact we’ve made on our patients’ lives.</p>`,
        "reviews": `<h2>Reviews</h2><p>See what our satisfied patients have to say about their experience with us.</p>`
    };
    document.getElementById("content").innerHTML = content[section];
    if (section === "appointment") {
        document.getElementById("appointment-form").addEventListener("submit", handleFormSubmit);
    }
}

// Handle appointment form submission
function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Option 1: Pre-Filled WhatsApp Message
    const usePreFilledMessage = true; // Change to false to use webhook
    if (usePreFilledMessage) {
        // Redirect to WhatsApp with pre-filled message
        const message = `Hello ${data.name},%0A%0AThank you for booking an appointment! We have received your details and will contact you shortly.%0A%0AYour Message:%0A${encodeURIComponent(data.message)}`;
        const phoneNumber = data.phone.replace(/[^\d]/g, ''); // Remove non-numeric characters
        window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
    } else {
        // Option 2: Make.com Webhook Integration
        fetch('https://hook.integromat.com/your-webhook-url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: data.name,
                phone: data.phone,
                message: data.message,
            }),
        })
            .then((response) => {
                if (response.ok) {
                    document.getElementById("form-status").textContent = "Your appointment request has been sent! You will receive a WhatsApp confirmation.";
                } else {
                    document.getElementById("form-status").textContent = "Failed to send WhatsApp confirmation.";
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                document.getElementById("form-status").textContent = "Failed to send WhatsApp confirmation.";
            });
    }
}
