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
    var _a;
    (_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
        var _a;
        event.preventDefault();
        // Get form values
        var profilePicture = document.getElementById('profilePicture');
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        // Get the profile picture file
        var profilePictureFile = (_a = profilePicture.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        // Create resume output
        var resumeOutput = "\n            <h2>Resume</h2>\n            ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"profile Picture\" class=\"profilePicture\">") : "", "\n            <p><strong>First Name:</strong> ").concat(name, "</p>\n            <p><strong>Second Name:</strong> ").concat(name, "</p> <!-- Consider using a separate second name field -->\n\n            <p><strong>Email Address:</strong> ").concat(email, "</p>\n            <p><strong>Phone Number:</strong> ").concat(phone, "</p>\n            <h2>Education</h2>\n            <p>").concat(education, "</p>\n            <h2>Experience</h2>\n            <p>").concat(experience, "</p>\n            <h2>Skills</h2>\n            <p>").concat(skills, "</p>\n        ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output element is missing');
        }
    });
}
// Now the event listener can call this function
document.addEventListener('DOMContentLoaded', generateResume);
