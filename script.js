function share() {
  const quote = document.querySelector(".quote").innerText;
  const author = document.querySelector(".author").innerText;
  const message = `${quote} - ${author}`;

  const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

async function newquote() {
  const quoteText = document.querySelector(".quote");
  const authorText = document.querySelector(".author");

  const apiUrl = "https://api.api-ninjas.com/v1/quotes";
  const apiKey = "UH1FboABS+IG1X66JPayXg==Pz2phAueqJF2I9Oo";

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json(); // Convert response to JSON
    const quoteObj = data[0]; // Get the first quote

    quoteText.innerText = quoteObj.quote;
    authorText.innerText = quoteObj.author;
  } catch (error) {
    console.error("Fetch error:", error);
    quoteText.innerText = "Oops! Could not load quote.";
    authorText.innerText = "Error";
  }
}
