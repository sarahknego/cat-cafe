/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('rooms').del()
  await knex('rooms').insert([
    {id: 1, name: 'Outer Space', capacity: 15, description: 'Step into a whimsical cosmos where celestial wonders adorn the walls, offering an out-of-this-world oasis.', photo: 'https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/rooms/Outer-Space-9rBr1t08vBERx4Rd8S3cvWX8rq3kMw.jpg'},
    {id: 2, name: 'Pirate Ship', capacity: 10, description: 'Step into a whimsical world of swashbuckling adventure and maritime charm in our pirate-themed room.', photo: 'https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/rooms/Pirate-Ship-1hpxvv7OWSgq1SGW2gQ3Fqs7t8TsKI.jpg'},
    {id: 3, name: 'Boba Heaven', capacity: 12, description: 'Step into a cozy oasis of tapioca bliss with our boba-themed room, where you can sip on delightful concoctions surrounded by whimsical decor and plush seating.', photo: 'https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/rooms/Boba-Heaven-jucMRNdSqTbGkwdV8I1S0aRe8jKREB.jpg'},
    {id: 4, name: 'High Fantasy', capacity: 10, description: 'Step into a realm of enchantment and wonder in our high fantasy themed room, where knights and dragons adorn the walls, and magical creatures lurk in every corner.', photo: 'https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/rooms/High-Fantasy-jo3FNYiMsvr9cdMN8k5X3f8rFAcUQ1.jpg'},
    {id: 5, name: 'Witches Lair', capacity: 13, description: 'Step into a mystical realm with our enchanting witch-themed room, adorned with spellbinding décor and cozy corners.', photo: 'https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/rooms/Witches-Lair-Kp9eEN5VF6Pre3CxBcrCHTEvFE1M4a.jpg'}
  ]);
};
