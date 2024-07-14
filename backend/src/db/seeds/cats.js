/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("cats").truncate();
  await knex("cats").insert([
    {
      id: 1,
      name: "Charlie",
      breed: "Exotic Shorthair",
      temperment: "Sweet",
      age: 4,
      photo:
        "https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/cats/Charlie-zQSpg2FpJIPdeX8M6MjtDtfjYFXVvT.jpg",
    },
    {
      id: 2,
      name: "Lola",
      breed: "Russian Blue",
      temperment: "Shy",
      age: 2,
      photo:
        "https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/cats/Lola-bN7GlP4R8PZouBr5xGE09JUsqAuD4W.jpg",
    },
    {
      id: 3,
      name: "Nina",
      breed: "Scottish Fold",
      temperment: "Sleepy",
      age: 4,
      photo:
        "https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/cats/Nina-W3b6AuWqPM8H5gztSzsvUKYZIpiYaw.jpg",
    },
    {
      id: 4,
      name: "Louis",
      breed: "American Shorthair",
      temperment: "Energetic",
      age: 1,
      photo:
        "https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/cats/Louis-gCaRiKDdrUicdaqd5qJfaoy0MIERXZ.jpg",
    },
    {
      id: 5,
      name: "Archibald",
      breed: "Persian",
      temperment: "Lazy",
      age: 5,
      photo:
        "https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/cats/Archibald-jjLA7ykD8xLyhfFDAcgoB13RsLRYbP.jpg",
    },
    {
      id: 6,
      name: "Blue",
      breed: "Cornish Rex",
      temperment: "Sweet",
      age: 6,
      photo:
        "https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/cats/Blue-V6L0aCD7dIWJOhYPFHbcc6PQjiT1JZ.png",
    },
    {
      id: 7,
      name: "Socks",
      breed: "Manx",
      temperment: "Energetic",
      age: 2,
      photo:
        "https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/cats/Socks-cnbs3SGIQSUFqzcNa1YWrRRkca1tdj.jpg",
    },
  ]);
};
