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
                    <a href="#" class="learn-more" data-service="geriatric">Learn more</a>

                </div>
                <div class="service-item">
                    <h3>Chronic Pain Management</h3>
                    <p>We use a multidisciplinary approach to manage chronic pain, including physical therapy, medication management, and lifestyle modification. Our goal is to help patients manage their pain and improve their quality of life.</p>
                    <a href="#" class="learn-more" data-service="chronic-pain">Learn more</a>

                </div>
                <div class="service-item">
                    <h3>Post-Surgical Rehabilitation</h3>
                    <p>Our post-surgical rehabilitation program is designed to help patients recover from surgery as quickly and safely as possible. We create personalized rehabilitation plans that address the patient's specific needs and goals.</p>
                    <a href="#" class="learn-more" data-service="post-surgical">Learn more</a>
                </div>
                <div class="service-item">
                    <h3>Sports Injury Recovery</h3>
                    <p>We offer comprehensive treatment and rehabilitation for athletic injuries, including acute and chronic conditions. Our goal is to help athletes return to their sport quickly and safely.</p>
                    <a href="#" class="learn-more" data-service="sports-injury">Learn more</a>
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
                <div class="service-item">
                <h3>Osteoarthritis </h3>
                <p>A degenerative joint disease that causes cartilage breakdown, leading to joint pain, stiffness, swelling, and reduced mobility. It commonly affects weight-bearing joints such as the knees, hips, and spine in older adults.</p>
                <a href="#">Learn more</a>
                </div>
                <div class="service-item">
                <h3>Rheumatoid Arthritis</h3>
                <p>An autoimmune disease that causes chronic inflammation in the joints, leading to pain, swelling, stiffness, and reduced mobility. It commonly affects the hands, feet, and wrists and can progress to joint deformity.</p>
                <a href="#">Learn more</a>
                </div>
                <div class="service-item">
                <h3>Parkinson's Disease</h3>
                <p>A progressive neurological disorder that affects movement, balance, and coordination. Common symptoms include tremors, rigidity, bradykinesia, and postural instability, leading to mobility challenges and functional limitations.</p>
                <a href="#">Learn more</a>
                </div>
                <div class="service-item">
                <h3>Stroke Rehabilitation</h3>
                <p>Stroke occurs when blood flow to the brain is interrupted, causing loss of function in different parts of the body. Rehabilitation focuses on regaining mobility, strength, coordination, and independence through physiotherapy, speech therapy, and cognitive training.</p>
                <a href="#">Learn more</a>
                </div>
                <div class="service-item">
                <h3>Osteoporosis</h3>
                <p>A condition characterized by low bone density and increased risk of fractures, especially in the spine, hips, and wrists. Physiotherapy focuses on exercises to improve bone strength, balance, and posture to reduce fracture risk and maintain independence.</p>
                <a href="#">Learn more</a>
                </div>
                <div class="service-item">
                <h3>Balance Disorders</h3>
                <p>These disorders affect the inner ear and brain, leading to dizziness, vertigo, unsteadiness, and frequent falls. They can result from age-related degeneration, infections, or neurological conditions like stroke and Parkinson’s disease..</p>
                <a href="#">Learn more</a>
                </div>
                <div class="service-item">
                <h3> Falls Prevention</h3>
                <p>Falls are a leading cause of injuries in the elderly, often resulting from muscle weakness, balance impairments, vision issues, or environmental hazards. Preventive strategies include strength training, balance exercises, home modifications, and assistive devices.</p>
                <a href="#">Learn more</a>
                </div>
                <div class="service-item">
                <h3> Frailty Syndrome</h3>
                <p> A state of increased vulnerability due to reduced physiological reserves, leading to weakness, fatigue, slow mobility, and a higher risk of falls, infections, and hospitalizations. It is often associated with poor nutrition, inactivity, and chronic illnesses.</p>
                <a href="#">Learn more</a>
                </div>
                <div class="service-item">
                <h3> Depression & Anxiety in Older Adults</h3>
                <p>Mental health disorders that affect emotional well-being, leading to persistent sadness, social withdrawal, sleep disturbances, and cognitive decline. These conditions often arise due to chronic illnesses, loneliness, or life transitions.</p>
                <a href="#">Learn more</a>
                </div>
                <div class="service-item">
                <h3> Dementia Care</h3>
                <p>A progressive decline in cognitive function, memory, and reasoning that impairs daily activities and social interactions. Physiotherapy focuses on maintaining physical function, mobility, and independence in individuals with dementia.</p>
                <a href="#">Learn more</a>
                </div>
                <div class="service-item">
                <h3> Postural Hypotension</h3>
                <p>A condition characterized by a sudden drop in blood pressure when standing up, causing dizziness, fainting, and increased fall risk. It results from autonomic nervous system dysfunction, dehydration, or medication side effects.</p>
                <a href="#">Learn more</a>
                </div>
                <div class="service-item">
                <h3> Sarcopeina</h3>
                <p>Age-related loss of muscle mass, strength, and function that leads to weakness, fatigue, and reduced physical performance. It can result from inactivity, poor nutrition, hormonal changes, and chronic diseases.</p>
                <a href="#">Learn more</a>
                </div>
                <div class="service-item">
                <h3> Urinary Incontinence</h3>
                <p>Loss of bladder control that causes involuntary leakage of urine, affecting daily activities and quality of life. It can result from weak pelvic floor muscles, nerve damage, hormonal changes, or underlying medical conditions.</p>
                <a href="#">Learn more</a>
                </div>
            </div>
        `,
        "reviews": `<h2>Reviews</h2><p>See what our satisfied patients have to say about their experience with us.</p>`,
        "why-choose-us": `
            <h2>Why Choose Us?</h2>
            <div class="grid-container">
        <div class="service-item"><h3>Expertise in Geriatric Care</h3> <p>Our team includes physiotherapists with specialized training in geriatric care, ensuring that each treatment plan is customized to meet the unique needs of seniors.</div>
        <div class="service-item"><h3>Holistic Approach</h3> We prioritize not only physical rehabilitation but also mental and emotional well-being, incorporating education, guidance, and support for both patients and their families.</div>
        <div class="service-item"><h3>Tailored Treatment Plans</h3> Each program is designed to address the specific health concerns, physical limitations, and goals of the individual, ensuring a personalized and effective approach to care.</div>
        <div class="service-item"><h3>Home-Based and Online Options</h3> We understand the challenges of mobility, so we offer convenient home visits and virtual consultations to ensure that care is accessible and effective.</div>
        <div class="service-item"><h3>Proven Results</h3> With a track record of helping seniors regain and maintain independence, our services are grounded in evidence-based practices and have shown significant improvement in patient outcomes.</div>
        <div class="service-item"><h3>Continuous Support</h3> We provide ongoing assessments and progress tracking to ensure that our patients continue to make progress and adjust to their evolving needs as they age.</div>
        <div class="service-item"><h3>Multidisciplinary Collaboration</h3> Our team works closely with other healthcare providers, including doctors, occupational therapists, and nurses, to ensure a coordinated approach to care.</div>
        <div class="service-item"><h3>Education and Empowerment</h3> We believe in educating our patients and their families on how to maintain mobility, prevent injuries, and adopt healthy lifestyle changes for long-term well-being.</div>
        </div>
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



// Modal functionality
const modal = document.getElementById("serviceModal");
const modalContent = document.getElementById("modalContent");
const closeBtn = document.querySelector(".close");

// Service details data
const serviceDetails = {
    "geriatric": {
        title: "Geriatric Physiotherapy & Fall Prevention",
        content: `
            <h2>Geriatric Physiotherapy</h2>
            <h3>Introduction</h3>
            <p>Geriatric physiotherapy is a specialized branch of physiotherapy aimed at improving the health and well-being of older adults. This area of care focuses on enhancing mobility, strength, balance, and overall functionality, helping seniors to maintain independence and improve their quality of life. It addresses various age-related conditions, including arthritis, osteoporosis, post-stroke rehabilitation, balance disorders, and mobility issues. The core aim is to prevent complications associated with aging, reduce pain, and enable individuals to perform daily activities with greater ease and safety.</p>
            
            <h3>What It Highlights</h3>
            <p>Geriatric physiotherapy takes a holistic approach to treatment by assessing and addressing both physical and mental health challenges common in older adults. Treatment is tailored to individual needs, with a focus on functional recovery, pain management, fall prevention, and the improvement of daily living activities. The therapy often involves exercises designed to restore strength, flexibility, and endurance, enhancing the senior's ability to perform regular tasks, walk, climb stairs, and engage in physical activities.</p>
            
            <p>Key features include:</p>
            <ul>
                <li><strong>Fall Prevention:</strong> Physiotherapists utilize balance exercises, strength-building activities, and posture correction techniques to help reduce the risk of falls, which are a major cause of injury in older adults.</li>
                <li><strong>Pain Management:</strong> Techniques such as manual therapy, heat/cold therapy, and ultrasound treatments are employed to manage chronic pain caused by arthritis, musculoskeletal conditions, and other degenerative diseases.</li>
                <li><strong>Post-Stroke Rehabilitation:</strong> Focus on improving motor function, coordination, and mobility after a stroke, allowing patients to regain as much independence as possible.</li>
                <li><strong>Strength and Endurance Building:</strong> Tailored exercises help rebuild muscle strength and cardiovascular endurance, preventing frailty and enhancing overall stamina.</li>
                <li><strong>Posture Correction:</strong> Special attention is given to correcting posture imbalances, which can lead to discomfort, pain, and reduced mobility.</li>
            </ul>
            
            <h3>Core Benefits of Physiotherapy</h3>
            <ul>
                <li><strong>Improves Mobility:</strong> Physiotherapy helps older adults regain or maintain the ability to move freely, enhancing their independence and overall functionality.</li>
                <li><strong>Promotes Fall Prevention:</strong> A core focus of geriatric physiotherapy is to reduce fall risk by improving balance, muscle strength, and joint stability.</li>
                <li><strong>Reduces Pain and Discomfort:</strong> Specialized techniques aim to alleviate pain caused by age-related conditions like arthritis and osteoporosis, improving overall comfort.</li>
                <li><strong>Boosts Strength and Endurance:</strong> Strengthening exercises are designed to combat muscle weakness, enhancing physical stamina and making daily activities easier to perform.</li>
                <li><strong>Encourages Independence:</strong> By addressing mobility challenges, physiotherapy helps older adults maintain their independence and carry out daily activities without assistance.</li>
                <li><strong>Increases Confidence:</strong> Through a structured rehabilitation program, older adults gain confidence in their ability to perform physical activities, reducing anxiety and fear related to falling.</li>
            </ul>
            
            <h3>Impact of Physiotherapy</h3>
            <ul>
                <li><strong>Prevention of Falls:</strong> Physiotherapy programs reduce the risk of falls, which are a leading cause of injury and hospitalization for seniors, by focusing on balance and coordination.</li>
                <li><strong>Enhances Quality of Life:</strong> Reducing pain and improving mobility allows seniors to participate in social, recreational, and physical activities, leading to a better overall quality of life.</li>
                <li><strong>Slows Functional Decline:</strong> Physiotherapy plays a critical role in preventing the progressive loss of function often seen in aging, helping seniors to maintain their ability to perform essential tasks.</li>
                <li><strong>Supports Mental Health:</strong> Maintaining mobility and reducing discomfort can significantly improve mental well-being, reducing the feelings of isolation and depression that often accompany physical limitations.</li>
                <li><strong>Improves Post-Surgical Recovery:</strong> For seniors recovering from surgeries like hip or knee replacements, physiotherapy speeds up rehabilitation, promoting a faster and safer recovery process.</li>
            </ul>
            <h3>By focusing on each patient’s individual needs and goals, our geriatric physiotherapy program ensures that older adults can lead healthier, more active, and independent lives. Let us help you or your loved ones navigate the aging process with confidence, mobility, and comfort.</h3>
        `
    },
    // Add other services here following the same structure
    "chronic-pain": {
        title: "Chronic Pain Management",
        content: `
            <h2>Chronic Pain Management</h2>
            <h3>Introduction</h3>
            <p>Chronic pain can significantly affect an individual's quality of life, limiting their ability to perform daily activities, enjoy social interactions, or maintain a productive lifestyle. Our chronic pain management program provides a multidisciplinary approach to address long-term pain caused by conditions such as arthritis, fibromyalgia, back pain, nerve injuries, and musculoskeletal disorders. We focus on alleviating pain, restoring mobility, and improving overall function through a combination of physical therapy, massage, manual therapy, combination therapies, and lifestyle modifications. The goal is to manage pain effectively, improve functionality, and enable patients to lead fulfilling lives.</p>
            
            <h3>What It Highlights</h3>
            <p>Chronic pain management involves a comprehensive approach that targets the physical, emotional, and psychological aspects of pain. Our program highlights:</p>
            <ul>
                <li><strong>Pain Reduction:</strong> A variety of therapies are used to manage and reduce pain, including physical therapy, manual therapy, and massage techniques.</li>
                <li><strong>Functional Restoration:</strong> We focus on restoring physical function by improving strength, mobility, and endurance, allowing individuals to regain independence in daily activities.</li>
                <li><strong>Postural Education:</strong> Often, poor posture can aggravate chronic pain, particularly in the neck, back, and shoulders. Our team provides education on posture correction techniques to reduce strain.</li>
                <li><strong>Holistic Lifestyle Modifications:</strong> Chronic pain management extends beyond physical treatment. We integrate changes in lifestyle such as stress management, sleep improvement, nutrition, and gentle exercise to promote long-term pain relief and well-being.</li>
            </ul>
            
            <h3>Core Benefits of Physiotherapy</h3>
            <ul>
                <li><strong>Pain Reduction:</strong> Through the use of various therapeutic modalities, including manual therapy, heat and cold treatments, and electrotherapy, physiotherapy aims to reduce the intensity of chronic pain. Techniques like joint mobilization and myofascial release also help release muscle tension and promote blood flow to affected areas.</li>
                <li><strong>Improved Mobility and Function:</strong> Physiotherapists work with patients to restore flexibility, range of motion, and strength in painful areas. This includes improving joint mobility, reducing stiffness, and enhancing the overall functional capacity to complete everyday activities like walking, bending, or lifting.</li>
                <li><strong>Strengthening and Conditioning:</strong> Strengthening the muscles that support painful or weak areas can reduce pain and prevent future injuries. Physiotherapists will create a customized exercise program to target specific muscle groups, improve posture, and reduce strain on the body.</li>
                <li><strong>Reduced Dependence on Medication:</strong> Many individuals with chronic pain rely on prescription medication, which may have side effects or lead to long-term dependency. Physiotherapy provides drug-free treatment options that aim to alleviate pain, thus reducing the need for painkillers and other medications.</li>
                <li><strong>Holistic Approach:</strong> Pain management requires more than just physical treatment. Our approach incorporates relaxation techniques, mindfulness, and stress reduction strategies that address the mental and emotional challenges of living with chronic pain. Additionally, sleep hygiene and healthy eating habits are encouraged to promote overall wellness.</li>
            </ul>
            
            <h3>Impact of Physiotherapy</h3>
            <ul>
                <li><strong>Improved Quality of Life:</strong> Physiotherapy addresses the root causes of chronic pain and helps alleviate symptoms, allowing individuals to enjoy a better quality of life. By managing pain effectively, patients can regain their ability to perform daily tasks, enjoy hobbies, and participate in social activities.</li>
                <li><strong>Increased Independence:</strong> Chronic pain often leads to a loss of independence as it can limit mobility and make it difficult to perform even simple tasks. Our pain management techniques aim to reduce pain levels, restore function, and help patients regain their ability to carry out daily activities independently.</li>
                <li><strong>Fewer Complications:</strong> If left untreated, chronic pain can lead to additional complications such as muscle atrophy, joint stiffness, and depression. By addressing chronic pain early, physiotherapy helps prevent these secondary issues from developing.</li>
                <li><strong>Long-Term Pain Control:</strong> Physiotherapy not only provides immediate relief but also offers patients the tools and knowledge to manage their pain long-term. Patients learn techniques for controlling pain, maintaining good posture, strengthening vulnerable areas, and managing flare-ups when they occur. This long-term approach can lead to sustained relief and greater resilience.</li>
            </ul>
            
            <h3>Why Choose Us?</h3>
            <ul>
                <li><strong>Multidisciplinary Approach:</strong> Our chronic pain management program brings together the expertise of physiotherapists, massage therapists, and other specialists who work collaboratively to provide comprehensive care. This ensures that every aspect of your pain is addressed, from physical treatment to lifestyle changes.</li>
                <li><strong>Personalized Treatment Plans:</strong> Each patient's chronic pain is unique, which is why we create customized treatment plans tailored to the specific needs, goals, and conditions of the individual. Our team evaluates your symptoms, discusses your pain management goals, and designs a program that will best address your concerns.</li>
                <li><strong>Expert Physiotherapists:</strong> Our team consists of highly trained and experienced physiotherapists who specialize in the treatment of chronic pain conditions. We use the latest evidence-based practices and advanced treatment techniques to ensure the best outcomes for our patients.</li>
                <li><strong>Focus on Long-Term Solutions:</strong> We aim to provide lasting pain relief through education and empowerment. By teaching patients how to manage their symptoms and take control of their physical health, we ensure long-term benefits that extend beyond the duration of treatment.</li>
                <li><strong>Supportive Environment:</strong> We are committed to providing compassionate care in a supportive environment. We understand the impact that chronic pain can have on both the body and mind, and our team is here to offer emotional and psychological support throughout your treatment journey.</li>
            </ul>
        `
    },
    // Add other services here following the same structure
    "post-surgical": {
        title: "Post-Surgical Rehabilitation",
        content: `
            <h2>Post-Surgical Rehabilitation</h2>
            <h3>Introduction</h3>
            <p>Recovering from surgery requires careful management and rehabilitation to ensure a full recovery and minimize complications. Our Post-Surgical Rehabilitation program is designed to help patients recover as quickly, safely, and effectively as possible after surgery. Whether recovering from orthopedic, neurological, or soft tissue surgery, our team provides personalized rehabilitation plans tailored to the patient's specific needs and goals. The primary objective is to restore strength, mobility, and function, and to help patients return to their daily activities with reduced pain and improved quality of life.</p>
            
            <h3>What It Highlights</h3>
            <p>Post-surgical rehabilitation is a critical component in the recovery process. It focuses on:</p>
            <ul>
                <li><strong>Restoring Movement and Function:</strong> Physiotherapy helps restore movement, flexibility, and strength to the surgical site and surrounding areas, improving overall function.</li>
                <li><strong>Pain Management:</strong> We use various therapies to manage pain, minimize swelling, and promote healing, which can significantly improve the recovery experience.</li>
                <li><strong>Preventing Complications:</strong> After surgery, patients are at risk of complications such as muscle weakness, joint stiffness, and scar tissue formation. Our program aims to reduce these risks by promoting optimal healing and mobility.</li>
                <li><strong>Personalized Treatment Plans:</strong> Every surgery and recovery process is unique. Our rehabilitation plans are customized to address individual needs, whether it's a joint replacement, spinal surgery, or soft tissue repair.</li>
                <li><strong>Psychological Support:</strong> Surgery can be emotionally taxing. Our team provides mental and emotional support, helping patients regain confidence in their recovery.</li>
            </ul>
            
            <h3>Core Benefits of Physiotherapy</h3>
            <ul>
                <li><strong>Pain Relief:</strong> Through various treatments such as manual therapy, modalities like heat and cold therapy, and gentle stretching exercises, physiotherapists help manage pain and discomfort after surgery.</li>
                <li><strong>Restoration of Function:</strong> Post-surgical rehabilitation focuses on restoring movement and function in the area that was operated on. This includes regaining strength, flexibility, and range of motion to ensure that patients can return to their normal activities.</li>
                <li><strong>Strengthening:</strong> Physiotherapists design exercises that specifically target weakened muscles or joints to promote strength and stability. Strengthening exercises help prevent long-term complications, such as instability or muscle imbalances, and reduce the risk of re-injury.</li>
                <li><strong>Reducing Scar Tissue and Swelling:</strong> Techniques like massage and specific mobility exercises help prevent the formation of scar tissue, which can lead to stiffness and restricted movement. Reducing swelling in the affected area can also speed up the recovery process.</li>
                <li><strong>Balance and Posture Correction:</strong> Many surgeries, particularly those involving the spine, hips, or knees, may affect balance or posture. Our rehabilitation program helps correct posture, improving balance, and preventing falls or further injuries.</li>
            </ul>
            
            <h3>Impact of Physiotherapy</h3>
            <ul>
                <li><strong>Faster Recovery:</strong> A structured post-surgical rehabilitation plan can significantly speed up recovery time by reducing pain, inflammation, and stiffness. This allows patients to return to their normal life activities more quickly.</li>
                <li><strong>Prevention of Long-Term Complications:</strong> Without proper rehabilitation, patients may experience long-term problems, such as joint stiffness, muscle weakness, and poor mobility. Our program aims to prevent these complications through targeted exercises and therapies that promote healing and flexibility.</li>
                <li><strong>Enhanced Strength and Mobility:</strong> Physiotherapy helps restore strength to the muscles and joints, which are often weakened or immobilized after surgery. This leads to improved mobility and a reduction in the risk of re-injury.</li>
                <li><strong>Psychosocial Benefits:</strong> Surgery can be mentally challenging. Physiotherapy provides psychological support by encouraging patients through their recovery journey. As patients progress in their rehabilitation, their confidence improves, which boosts overall mental and emotional well-being.</li>
                <li><strong>Long-Term Independence:</strong> By improving physical function and strength, post-surgical rehabilitation enables patients to regain independence in their daily lives. Patients can return to work, sports, and personal activities with reduced pain and enhanced confidence.</li>
            </ul>
            
            <h3>Why Choose Us?</h3>
            <ul>
                <li><strong>Expert Rehabilitation Team:</strong> Our team consists of experienced physiotherapists who specialize in post-surgical recovery. They have in-depth knowledge of surgical procedures and rehabilitation techniques to provide the most effective care for patients.</li>
                <li><strong>Personalized Recovery Plans:</strong> Each patient's surgical recovery process is unique. We take the time to understand the surgery performed, the patient's overall health, and their recovery goals to create a personalized rehabilitation plan. This ensures that each patient receives the best care tailored to their individual needs.</li>
                <li><strong>Multidisciplinary Approach:</strong> Post-surgical rehabilitation may involve collaboration with other healthcare professionals, such as surgeons, occupational therapists, and pain management specialists. Our team works closely with these professionals to ensure a seamless recovery process.</li>
                <li><strong>Focus on Safe and Effective Rehabilitation:</strong> We prioritize safety and effectiveness in every aspect of rehabilitation. Our physiotherapists monitor progress closely and adjust treatment plans as needed to ensure that patients are recovering at a safe and appropriate pace.</li>
                <li><strong>Holistic Approach:</strong> We believe in treating the whole person. Alongside physical rehabilitation, we provide education and guidance on lifestyle modifications, ergonomics, and mental health support to enhance the recovery process and promote long-term well-being.</li>
                <li><strong>Compassionate Support:</strong> We understand that recovering from surgery can be a challenging time. Our compassionate team provides emotional support and encouragement throughout the rehabilitation process, helping patients stay motivated and confident in their recovery.</li>
            </ul>
        `
    },
    "sports-injury": {
        title: "Sports Injury Recovery",
        content: `
            <h2>Sports Injury Recovery</h2>
            <div class="sports-icons">
                <span class="sport-icon">🏃‍♂️</span>
                <span class="sport-icon">⚽</span>
                <span class="sport-icon">🏊‍♀️</span>
                <span class="sport-icon">🏀</span>
                <span class="sport-icon">🎾</span>
            </div>
            <h3>Introduction</h3>
            <p>Sports injuries can range from minor sprains to severe ligament tears, and recovery requires a tailored approach to ensure athletes return to their sport as quickly and safely as possible. Our Sports Injury Recovery program provides comprehensive treatment and rehabilitation for both acute injuries and chronic conditions, addressing each injury with an individualized plan. Whether you're a professional athlete or a weekend warrior, we are committed to helping you recover fully, optimize performance, and reduce the risk of future injuries.</p>
            
            <h3>What It Highlights</h3>
            <p>Sports injuries can affect any part of the body, and effective rehabilitation requires addressing both the physical injury and the athlete's long-term health goals. Our program focuses on:</p>
            <ul>
                <li><strong>Acute and Chronic Injury Treatment:</strong> We address a range of sports-related injuries, from acute injuries such as sprains, fractures, and strains to chronic conditions like tendinitis or overuse injuries.</li>
                <li><strong>Movement and Performance Restoration:</strong> The goal of rehabilitation is to restore the athlete's strength, mobility, and coordination to pre-injury levels, or even enhance performance.</li>
                <li><strong>Injury Prevention:</strong> In addition to rehabilitation, we also provide injury prevention strategies that help athletes avoid future injuries by strengthening weak areas and improving biomechanics.</li>
                <li><strong>Sport-Specific Rehabilitation:</strong> Our program is designed with each sport in mind, addressing the unique physical demands of different athletic activities.</li>
                <li><strong>Mental and Psychological Support:</strong> Recovery from a sports injury can be a mentally challenging process. Our team provides guidance and support to help athletes stay motivated and focused on their recovery goals.</li>
            </ul>
            
            <h3>Core Benefits of Physiotherapy</h3>
            <ul>
                <li><strong>Pain Relief and Inflammation Reduction:</strong> Physiotherapists use a variety of methods such as ice therapy, ultrasound, manual therapy, and dry needling to reduce pain, inflammation, and swelling in the injured area.</li>
                <li><strong>Restoration of Strength and Function:</strong> Through targeted exercises and strength-building regimens, physiotherapists help restore the strength, stability, and flexibility required for athletic performance, ensuring the injured area heals properly without compromising the body's functional capacity.</li>
                <li><strong>Mobility and Range of Motion:</strong> Rehabilitative techniques such as stretching, joint mobilizations, and soft tissue therapy are used to restore the full range of motion and prevent stiffness. This is particularly important after ligament, tendon, or joint injuries.</li>
                <li><strong>Biomechanical Assessments:</strong> By analyzing an athlete's movement patterns, physiotherapists can identify imbalances or weaknesses that may have contributed to the injury. This information is used to prevent re-injury by improving body mechanics and ensuring proper technique during sport.</li>
                <li><strong>Sport-Specific Rehabilitation:</strong> The rehabilitation program is customized based on the athlete's specific sport, taking into account the demands of the activity. For example, a runner's recovery may focus more on improving lower body strength and joint mobility, while a swimmer's rehab might target shoulder flexibility and endurance.</li>
            </ul>
            
            <h3>Impact of Physiotherapy</h3>
            <ul>
                <li><strong>Accelerated Recovery:</strong> With specialized physiotherapy techniques, athletes recover faster, reducing downtime and helping them return to their sport sooner without compromising their health or performance.</li>
                <li><strong>Prevention of Re-Injury:</strong> Physiotherapists focus on strengthening the injured area and addressing any underlying weaknesses or imbalances, reducing the risk of re-injury once the athlete returns to activity.</li>
                <li><strong>Improved Performance:</strong> Post-injury rehabilitation doesn't just focus on recovery—it also offers opportunities to improve performance. Through strengthening exercises, flexibility training, and technique refinement, athletes can perform better than before the injury.</li>
                <li><strong>Restored Confidence:</strong> Injuries can be mentally and emotionally taxing for athletes. Physiotherapy helps athletes regain their confidence by providing education and encouragement, allowing them to return to sport with greater confidence and a reduced fear of reinjury.</li>
                <li><strong>Holistic Recovery:</strong> The rehabilitation process addresses not only the physical recovery but also the mental and emotional aspects of injury recovery. Our team supports athletes in coping with the psychological challenges of returning to sport.</li>
            </ul>
            
            <h3>Why Choose Us?</h3>
            <ul>
                <li><strong>Experienced Physiotherapists:</strong> Our team includes highly trained physiotherapists who specialize in sports injuries and rehabilitation, offering expert care to athletes across all sports disciplines.</li>
                <li><strong>Personalized Rehabilitation Programs:</strong> Every injury is unique, and so is every athlete. Our physiotherapists develop individualized treatment plans that are specifically tailored to the athlete's injury, sport, and goals.</li>
                <li><strong>State-of-the-Art Facilities:</strong> We use the latest technologies and rehabilitation tools to enhance recovery and optimize treatment. Our clinics are equipped with advanced therapeutic equipment and tools designed for sports injury rehabilitation.</li>
                <li><strong>Injury Prevention Focus:</strong> In addition to helping athletes recover, we provide ongoing injury prevention strategies, including strength training, flexibility exercises, and education on proper warm-up and cool-down techniques.</li>
                <li><strong>Sport-Specific Expertise:</strong> Whether you are recovering from a football injury, a tennis elbow, a runner's knee, or a torn ACL, our physiotherapists are experienced in treating injuries related to specific sports and physical demands.</li>
                <li><strong>Comprehensive Care:</strong> Our approach is multidisciplinary, working alongside other healthcare providers, including sports doctors, surgeons, and nutritionists, to ensure the best outcomes for athletes. We ensure continuity of care and a coordinated approach for recovery.</li>
                <li><strong>Mental and Emotional Support:</strong> Recovering from a sports injury involves mental and emotional resilience. Our team provides a holistic approach that includes counseling, support, and motivation to help athletes stay mentally strong and focused throughout the recovery process.</li>
            </ul>
        `
    },
    // ... (keep other services) ...
};







































// Function to open modal with service details
function openModal(serviceId) {
    const service = serviceDetails[serviceId];
    if (service) {
        modalContent.innerHTML = `<h2>${service.title}</h2>${service.content}`;
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    }
}

// Close modal when clicking the X button
closeBtn.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Re-enable scrolling
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Re-enable scrolling
    }
}

// Update the "Our Works" section to use the modal
const ourWorksContent = `
    <h2>Our Expert Services Include</h2>
    <div class="service-list">
        <div class="service-item">
            <h3>Geriatric Physiotherapy & Fall Prevention</h3>
            <p>Our geriatric care program is designed to help older adults maintain their independence and mobility. We focus on fall prevention, balance training, and exercises to improve strength and flexibility.</p>
            <a href="#" class="learn-more" data-service="geriatric">Learn more</a>
        </div>
        <!-- Add other services with data-service attributes -->
    </div>
`;

// Then modify the loadContent function to include the ourWorksContent
// And add event listeners for the learn-more links
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('learn-more')) {
        e.preventDefault();
        const serviceId = e.target.getAttribute('data-service');
        openModal(serviceId);
    }
});




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
