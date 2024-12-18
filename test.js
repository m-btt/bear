if (document.querySelector("body").classList.contains("post")) {

  async function fetchInteractions(headerTitle) {
      const interactions = document.createElement("div");
      interactions.innerHTML = `<h3>${headerTitle ?? "Interactions"}</h3>`;

      for (const child of data.children) {
        const interaction = document.createElement("div");

        interaction.innerHTML = `
      <div id="cusdis_thread"
      data-host="https://cusdis.com"
      data-app-id="8961ad6a-3148-4202-83dd-044b74514916"
     data-page-id="{{ PAGE_ID }}"
     data-page-url="{{ PAGE_URL }}"
     data-page-title="{{ PAGE_TITLE }}"
      ></div>
    <p>
              <blockquote>${setContent(child)}</blockquote>
          `;

        interactions.appendChild(interaction);
      }
    }
  
  fetchInteractions(document.currentScript.getAttribute("data-interactions"));
}
document.querySelector("body").classList.contains("post")
