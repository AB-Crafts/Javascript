let password = prompt("Enter your password:");
let strength = 0;

if (password.length >= 8) strength++;
if (/[A-Z]/.test(password)) strength++;
if (/[a-z]/.test(password)) strength++;
if (/[0-9]/.test(password)) strength++;

if (strength <= 2) {
  console.log("Weak password 😕");
} else if (strength === 3 || strength === 4) {
  console.log("Medium password 🙂");
} else {
  console.log("Strong password 💪");
}
