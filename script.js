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
// function handleFormSubmit(event) {
//     event.preventDefault();
//     const form = event.target;
//     const formData = new FormData(form);
//     const data = Object.fromEntries(formData.entries());

//     // Option 1: Pre-Filled WhatsApp Message
//     const usePreFilledMessage = true; // Change to false to use webhook
//     if (usePreFilledMessage) {
//         // Redirect to WhatsApp with pre-filled message
//         const message = `Hello ${data.name},%0A%0AThank you for booking an appointment! We have received your details and will contact you shortly.%0A%0AYour Message:%0A${encodeURIComponent(data.message)}`;
//         const phoneNumber = data.phone.replace(/[^\d]/g, ''); // Remove non-numeric characters
//         window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
//     } else {
//         // Option 2: Make.com Webhook Integration
//         fetch('https://hook.integromat.com/your-webhook-url', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 name: data.name,
//                 phone: data.phone,
//                 message: data.message,
//             }),
//         })
//             .then((response) => {
//                 if (response.ok) {
//                     document.getElementById("form-status").textContent = "Your appointment request has been sent! You will receive a WhatsApp confirmation.";
//                 } else {
//                     document.getElementById("form-status").textContent = "Failed to send WhatsApp confirmation.";
//                 }
//             })
//             .catch((error) => {
//                 console.error('Error:', error);
//                 document.getElementById("form-status").textContent = "Failed to send WhatsApp confirmation.";
//             });
//     }
// }


// function handleFormSubmit(event) {
//     event.preventDefault();
//     const form = event.target;
//     const formData = new FormData(form);
//     const data = Object.fromEntries(formData.entries());
//     const statusElement = document.getElementById("form-status");

//     fetch("http://localhost:3000/send-email", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//     })
//         .then(response => response.json())
//         .then(result => {
//             if (result.success) {
//                 statusElement.textContent = "Appointment booked successfully! Notifications sent.";
//                 statusElement.style.color = "green";
//             } else {
//                 throw new Error(result.message || "Something went wrong.");
//             }
//         })
//         .catch(error => {
//             console.error("Error:", error);
//             statusElement.textContent = "Failed to book the appointment. Please try again.";
//             statusElement.style.color = "red";
//         });
// }








// function handleFormSubmit(event) {
//     event.preventDefault(); // Prevent default form submission behavior

//     const form = event.target;
//     const formData = new FormData(form);

//     // Map local form fields to Google Form input names
//     const data = {
//         "entry.1234567890": formData.get("name"), // Replace with the Google Form's actual input name
//         "entry.0987654321": formData.get("email"),
//         "entry.1122334455": formData.get("phone"),
//         "entry.6677889900": formData.get("message")
//     };

//     // Convert data to URL-encoded format for submission
//     const queryParams = new URLSearchParams(data);

//     // Google Form URL
//     const googleFormURL = "https://forms.gle/2anb5y4P1UBZK5jy8";

//     // Submit the form data to Google Form
//     fetch(googleFormURL, {
//         method: "POST",
//         body: queryParams,
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded"
//         }
//     })
//         .then(response => {
//             if (response.ok) {
//                 // Show success message
//                 document.getElementById("form-status").textContent = "Your appointment request has been successfully submitted!";
//                 document.getElementById("form-status").style.color = "green";
//             } else {
//                 throw new Error("Form submission failed");
//             }
//         })
//         .catch(error => {
//             console.error("Error:", error);
//             document.getElementById("form-status").textContent = "Failed to submit your request. Please try again.";
//             document.getElementById("form-status").style.color = "red";
//         });
// }




function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const form = event.target;
    const formData = new FormData(form);

    // Construct payload based on the provided structure
    const data = new URLSearchParams({
        "entry.2005620554": formData.get("name"), // Replace "name" with the HTML input's name attribute
        "entry.1045781291": formData.get("email"),
        "entry.1166974658": formData.get("phone"),
        "entry.1065046570": formData.get("message"),
        "emailAddress": "santhoshvaithi1234@gmail.com", // Adjust as needed
        "dlut": Date.now(), // Timestamp for the submission
        "fvv": "1",
        "partialResponse": "[null,null,\"-3710629951035604187\"]", // Static or dynamically generated
        "pageHistory": "0",
        "token": "u9O7NZQBAAA._gvEFOLQntjR-P4pbdXS0A.7vWgDK1UJdAUAxVDggSYmA", // Replace with actual token
        "fbzx": "-3710629951035604187", // Replace with actual value
        "submissionTimestamp": Date.now() // Timestamp for the form submission
    });

    // Submit the form via POST
    fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSeRqADdkSN9dyL-35OvxxNARSCoA_mkyIBfQovE_GVZx-zUXg/formResponse", { // Replace FORM_ID with your form's ID
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: data
    })
    .then(response => {
        if (response.ok) {
            document.getElementById("form-status").textContent = "Your appointment request has been successfully submitted!";
            document.getElementById("form-status").style.color = "green";
        } else {
            throw new Error("Form submission failed");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("form-status").textContent = "Failed to submit your request. Please try again.";
        document.getElementById("form-status").style.color = "red";
    });
}
