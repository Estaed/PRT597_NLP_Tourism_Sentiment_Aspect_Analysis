// Shared content of pipeline-dark.html and pipeline-light.html: one row per notebook stage.
// Every number is printed by the saved run of ABSA_Tourism_Reviews.ipynb.
const stages = [
  ["Collect", "TripAdvisor, Reddit and Google Maps, 6 NT sites", "9,532 reviews"],
  ["Clean", "Place names unified to 6 sites; junk text removed", "9,527 kept"],
  ["Find aspects", "Sentences matched to 10 aspects by keyword", "31,740 pairs"],
  ["Score", "Opinion words, VADER and DistilBERT side by side", "1,000 compared"],
  ["Combine", "Rule-based and VADER agree, or VADER decides", "31,740 labels"],
  ["Read by place", "What visitors talk about at each site, and how they feel", "6 sites"],
];
document.body.innerHTML =
  '<p class="eyebrow">One notebook, 13 steps</p>' +
  '<h1>How 9,532 reviews become aspect sentiment</h1>' +
  '<div class="rows">' + stages.map((s, i) =>
    `<div class="row" data-i="${i}"><span class="n">${i + 1}</span><span class="t">${s[0]}</span>` +
    `<span class="d">${s[1]}</span><span class="fig">${s[2]}</span></div>`).join('') + '</div>' +
  '<p class="source">Numbers from the saved notebook run, April 2026</p>';
// A promise: the GIF builder awaits it, so no frame is taken before the web fonts are in.
window.STEPS = Promise.all(['700 32px Archivo', '500 20px Manrope', '700 22px Manrope']
  .map(f => document.fonts.load(f))).then(() => stages.length);
window.step = (n) => document.querySelectorAll('.row').forEach(r => {
  const i = +r.dataset.i;
  r.classList.toggle('on', i === n);
  r.classList.toggle('done', i < n);
});
window.step(stages.length - 1);
