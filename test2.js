if (document.body.classList.contains("post")) {
  document
    .querySelector(".tags")
    .before(
      Object.assign(
        document.createElement("div"), {
        className: "cusdis_thread",
        innerHTML: `<div id="cusdis_thread"
  data-host="https://cusdis.com"
  data-app-id="8961ad6a-3148-4202-83dd-044b74514916"
  data-page-id="{{ PAGE_ID }}"
  data-page-url="{{ PAGE_URL }}"
  data-page-title="{{ PAGE_TITLE }}"
></div>
<script async defer src="https://cusdis.com/js/cusdis.es.js"></script>
<script defer>window.CUSDIS_LOCALE = {powered_by: " ",}</script>`
              }
            }).join(" or ")
          }.`
      })
    );
}
