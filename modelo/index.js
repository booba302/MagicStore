let cards = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

fetch(
  "https://api.scryfall.com/cards/search?include_extras=true&include_variations=true&order=set&q=e%3Aone"
)
  .then((response) => response.json())
  .then((json) => {
    nextPage = json.next_page;

    filteredCards = json.data.filter((card) =>
      card.type_line.includes("Legendary")
    );
    filteredCards.forEach((e) => {
      cards.push({
        id: e.id,
        name: e.name,
        img: e.image_uris.png,
        description: e.oracle_text,
        color: e.colors[0],
        price: e.prices.usd,
        amount: getRandomInt(101),
      });
    });

    return fetch(nextPage);
  })
  .then((response) => response.json())
  .then((json) => {
    filteredCards = json.data.filter((card) =>
      card.type_line.includes("Legendary")
    );
    filteredCards.forEach((e) => {
      e.colors.length === 0 ? e.colors.push("C") : e.colors;
      e.colors.length > 1 ? (e.colors = ["M"]) : e.colors;

      cards.push({
        id: e.id,
        name: e.name,
        img: e.image_uris.png,
        description: e.oracle_text,
        color: e.colors[0],
        price: e.prices.usd,
        amount: getRandomInt(101),
      });
    });
  });

console.log(cards);
