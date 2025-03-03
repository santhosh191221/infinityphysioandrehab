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
        "vision": `<h2>Vision</h2><p>           Our vision at Infinity Physio and Rehab is to be a trusted leader in physiotherapy and rehabilitation, empowering individuals to achieve pain-free movement and optimal health. Through personalized care, innovation, and unwavering support, we aim to redefine recovery and set new standards in physiotherapy care.<br>
        We are committed to empowering our patients to achieve maximum mobility, independence, and overall health through compassionate, professional, and evidence-based practices. By fostering a culture of excellence, innovation, and continuous improvement, we aim to set new standards in physiotherapy care.<br>
        Guided by our core values of unwavering support, expert guidance, and patient satisfaction, we strive to expand our reach, build a strong reputation, and establish Infinity Physio and Rehab as a premier brand in the field of rehabilitation
</p>`,
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
        "our-works": `
            <h2>Our Expert Services Include</h2>
            <div class="service-list">
                <div class="service-item">
                    <h3>Geriatric Physiotherapy & Fall Prevention</h3>
                    <p>Our geriatric care program is designed to help older adults maintain their independence and mobility. We focus on fall prevention, balance training, and exercises to improve strength and flexibility.</p>
                    <a href="#">Learn more</a>
                </div>
                <div class="service-item">
                    <h3>Chronic Pain Management</h3>
                    <p>We use a multidisciplinary approach to manage chronic pain, including physical therapy, medication management, and lifestyle modification. Our goal is to help patients manage their pain and improve their quality of life.</p>
                    <a href="#">Learn more</a>
                </div>
                <div class="service-item">
                    <h3>Post-Surgical Rehabilitation</h3>
                    <p>Our post-surgical rehabilitation program is designed to help patients recover from surgery as quickly and safely as possible. We create personalized rehabilitation plans that address the patient's specific needs and goals.</p>
                    <a href="#">Learn more</a>
                </div>
                <div class="service-item">
                    <h3>Sports Injury Recovery</h3>
                    <p>We offer comprehensive treatment and rehabilitation for athletic injuries, including acute and chronic conditions. Our goal is to help athletes return to their sport quickly and safely.</p>
                    <a href="#">Learn more</a>
                </div>
                <div class="service-item">
                    <h3>Neurological Rehabilitation</h3>
                    <p>Our neurological rehabilitation program is designed to help patients with neurological conditions such as stroke, spinal cord injury, and Parkinson's disease. We focus on improving functional abilities and promoting independence.</p>
                    <a href="#">Learn more</a>
                </div>
                <div class="service-item">
                    <h3>Pediatric Physiotherapy</h3>
                    <p>We provide developmental and rehabilitative services for children with conditions such as cerebral palsy, developmental delay, and congenital anomalies. Our goal is to help children reach their full potential.</p>
                    <a href="#">Learn more</a>
                </div>
                <div class="service-item">
                    <h3>Women's Health Physiotherapy</h3>
                    <p>Our women's health program addresses a range of concerns, including prenatal and postnatal care, pelvic floor dysfunction, and osteoporosis management. We provide personalized care and education to help women manage their health.</p>
                    <a href="#">Learn more</a>
                </div>
                <div class="service-item">
                    <h3>Fitness & Wellness Programs</h3>
                    <p>We offer proactive programs to promote healthy lifestyles, injury prevention, and optimal physical function. Our goal is to help individuals achieve their health and wellness goals.</p>
                    <a href="#">Learn more</a>
                </div>
                <div class="service-item">
                    <h3>Ergonomic Solutions & Postural Correction</h3>
                    <p>We provide workplace assessments and interventions to prevent injury, improve productivity, and enhance overall well-being. Our goal is to help individuals work safely and efficiently.</p>
                    <a href="#">Learn more</a>
                </div>
                <div class="service-item">
                    <h3>Headache & Migraine Management</h3>
                    <p>We use a multimodal approach to manage headaches and migraines, including manual therapy, exercise, and lifestyle modification. Our goal is to help patients reduce their symptoms and improve their quality of life.</p>
                    <a href="#">Learn more</a>
                </div>
            </div>
        `,
        "reviews": `<h2>Reviews</h2><p>See what our satisfied patients have to say about their experience with us.</p>`,
        "why-choose-us": `
            <h2>Why Choose Us?</h2>
            <ul>
                <li><strong>Expertise in Geriatric Care:</strong> Our team includes physiotherapists with specialized training in geriatric care, ensuring that each treatment plan is customized to meet the unique needs of seniors.</li>
                <li><strong>Holistic Approach:</strong> We prioritize not only physical rehabilitation but also mental and emotional well-being, incorporating education, guidance, and support for both patients and their families.</li>
                <li><strong>Tailored Treatment Plans:</strong> Each program is designed to address the specific health concerns, physical limitations, and goals of the individual, ensuring a personalized and effective approach to care.</li>
                <li><strong>Home-Based and Online Options:</strong> We understand the challenges of mobility, so we offer convenient home visits and virtual consultations to ensure that care is accessible and effective.</li>
                <li><strong>Proven Results:</strong> With a track record of helping seniors regain and maintain independence, our services are grounded in evidence-based practices and have shown significant improvement in patient outcomes.</li>
                <li><strong>Continuous Support:</strong> We provide ongoing assessments and progress tracking to ensure that our patients continue to make progress and adjust to their evolving needs as they age.</li>
                <li><strong>Multidisciplinary Collaboration:</strong> Our team works closely with other healthcare providers, including doctors, occupational therapists, and nurses, to ensure a coordinated approach to care.</li>
                <li><strong>Education and Empowerment:</strong> We believe in educating our patients and their families on how to maintain mobility, prevent injuries, and adopt healthy lifestyle changes for long-term well-being.</li>
            </ul>
            <p>By focusing on each patient’s individual needs and goals, our geriatric physiotherapy program ensures that older adults can lead healthier, more active, and independent lives. Let us help you or your loved ones navigate the aging process with confidence, mobility, and comfort.</p>
        `
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


document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("introVideo").style.display = "none";
    }, 5000);
});
