// document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
//         event.preventDefault();

//         // Get form values
//           const name = (document.getElementById('name') as HTMLInputElement);    
//         const email = (document.getElementById('email') as HTMLInputElement);
//         const phone = (document.getElementById('phone') as HTMLInputElement);
//         const education = (document.getElementById('education') as HTMLTextAreaElement);
//         const experience = (document.getElementById('experience') as HTMLTextAreaElement);
//         const skills = (document.getElementById('skills') as HTMLTextAreaElement);

//         // Create resume output
//         const resumeOutput = `
//             <h2>Resume</h2>
//             <p><strong>Name:</strong> ${name}</p>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Phone Number:</strong> ${phone}</p>
//             <h2>Education</h2>
//             <p>${education}</p>
//             <h2>Experience</h2>
//             <p>${experience}</p>
//             <h2>Skills</h2>
//             <p>${skills}</p>
//         `;

//         const resumeOutputElement = document.getElementById('resumeOutput');
//         if (resumeOutputElement) {
//             resumeOutputElement.innerHTML = resumeOutput;
//         } else {
//             console.error('The resume output element is missing');
//         }
//     });


// // Ensure the function is called when the document is ready
// document.addEventListener('DOMContentLoaded', generateResume);

// ////////////////////////////////////////////Complete Dynamic Resume////////////////////////////////////







// Define the generateResume function
function generateResume() {
    document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const profilePicture = document.getElementById('profilePicture') as HTMLInputElement;
        const name = (document.getElementById('name') as HTMLInputElement).value;    
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

        // Get the profile picture file
        const profilePictureFile = profilePicture.files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

        // Create resume output
        const resumeOutput = `
            <h2>Resume</h2>
            ${profilePictureURL ? `<img src="${profilePictureURL}" alt="profile Picture" class="profilePicture">` : ""}
            <p><strong>First Name:</strong> ${name}</p>
            <p><strong>Second Name:</strong> ${name}</p> <!-- Consider using a separate second name field -->

            <p><strong>Email Address:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>
            <h2>Education</h2>
            <p>${education}</p>
            <h2>Experience</h2>
            <p>${experience}</p>
            <h2>Skills</h2>
            <p>${skills}</p>
        `;

        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error('The resume output element is missing');
        }
    });
}

// Now the event listener can call this function
document.addEventListener('DOMContentLoaded', generateResume);






