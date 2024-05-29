/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cats').del()
  await knex('cats').insert([
    {id: 1, name: 'Charlie', breed: 'Exotic Shorthair', temperment: 'Sweet', age: 4, photo:'https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/cats/Charlie-hJQLgw7GjPkormPeoIlT85RJt1Os3p.png'},
    {id: 2, name: 'Lola', breed: 'Russian Blue', temperment: 'Shy', age: 2, photo: 'https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/cats/Lola-t49a41LFcLNmxyRFMlT24yMmR3j2Af.png'},
    {id: 3, name: 'Nina', breed: 'Scottish Fold', temperment: 'Sleepy', age: 4, photo: 'https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/cats/Nina-kmTLTxN2egHyqE5MkMPBR6vCpB82fW.png'},
    {id: 4, name: 'Louis', breed: 'American Shorthair', temperment: 'Energetic', age: 1, photo: 'https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/cats/Louis-gPmJK5x1EQntaYEDtFPmaGqAQQMDpl.png'},
    {id: 5, name: 'Archibald', breed: 'Persian', temperment: 'Lazy', age: 5, photo: 'https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/cats/Archibald-TSQzA1trVFAtHVzTzgiZiNhu3rFh7B.png'},
    {id: 6, name: 'Blue', breed: 'Cornish Rex', temperment: 'Sweet', age: 6, photo: 'https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/cats/Blue-V6L0aCD7dIWJOhYPFHbcc6PQjiT1JZ.png'},
    {id: 7, name: 'Socks', breed: 'Manx', temperment: 'Energetic', age: 2, photo: 'https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/cats/Socks-nnoLIloAsveGKVqNoPwj3HWeBvUwld.png'}
  ]);
};
