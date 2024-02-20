function calculateAge() {
  const dateofbirth = new Date(document.getElementById("dateofbirth").value);
  if (dateofbirth == "Invalid Date") {
    document.getElementById("result").innerText =
      "Please enter your date of birth.";
    document.getElementById("result").style.color = "red";
    return;
  }
  const now = new Date();

  const diff = now - dateofbirth;
  const ageDate = new Date(diff);

  const years = Math.abs(ageDate.getUTCFullYear() - 1970);

  document.getElementById("result").innerText = `You are ${years} years old.`;
  document.getElementById("result").style.color = "green";
  document.getElementById("result").style.fontWeight = "bold";
}
