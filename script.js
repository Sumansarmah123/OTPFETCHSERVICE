// script.js
document.getElementById("otpForm").addEventListener("submit", async function(event) {
    event.preventDefault();
  
    const sender = document.getElementById("sender").value;
    const receiver = document.getElementById("receiver").value;
    const startTime = document.getElementById("startTime").value;
    const endTime = document.getElementById("endTime").value;
  
    try {
      const otps = await fetchOTPs(sender, startTime, endTime);
      displayOTPs(otps);
      forwardOTPsToReceiver(otps, receiver);
    } catch (error) {
      console.error("Error fetching OTPs:", error);
      alert("An error occurred while fetching OTPs. Please try again later.");
    }
  });
  
  async function fetchOTPs(sender, startTime, endTime) {
    const response = await fetch("/fetch-otps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ sender, startTime, endTime })
    });
  
    if (!response.ok) {
      throw new Error("Failed to fetch OTPs");
    }
  
    return await response.json();
  }
  
  function displayOTPs(otps) {
    const otpDisplay = document.getElementById("otpDisplay");
    otpDisplay.innerHTML = "";
    
    otps.forEach(otp => {
      const otpElement = document.createElement("div");
      otpElement.textContent = otp;
      otpDisplay.appendChild(otpElement);
    });
  }
  
  async function forwardOTPsToReceiver(otps, receiver) {
    // Dummy implementation for demonstration
    console.log("Forwarding OTPs to receiver:", otps);
    console.log("Receiver:", receiver);
  
    // Make a POST request to backend to save OTPs for receiver (not implemented here)
  }
  