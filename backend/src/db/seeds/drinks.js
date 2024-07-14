/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('drinks').del()
  await knex('drinks').insert([
    {id: 1, name: 'Bubblegum Boba', description: 'A sweet and colorful beverage featuring chewy tapioca pearls, infused with the nostalgic flavor of bubblegum.', photo: 'https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/drinks/Bubblegum-Boba-rxApWFxuDvv7Q0VZQigU1E88HhymmJ.jpg'},
    {id: 2, name: 'Rose Latte', description: 'A delicately flavored beverage that combines espresso and steamed milk with a hint of rose syrup, offering a floral and slightly sweet taste.', photo: 'https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/drinks/Rose-Latte-u7Dh3pgdfsvZU1B9tOv9MHiZZvsX5f.png'},
    {id: 3, name: 'Iced Chai Latte', description: 'A refreshing beverage made from spiced tea concentrate blended with milk and served over ice.', photo: 'https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/drinks/Iced-Chai-Latte-YwGcGxzM2Z0nVfcpwXXamSbdLQm55B.jpg'},
    {id: 4, name: 'Blended Galaxy Frappe', description: 'A vibrant, galaxy-themed frappuccino featuring layers of colorful, swirling flavors and topped with whipped cream and shimmering edible glitter.', photo: 'https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/drinks/Blended-Galaxy_Frappe-5dpDGDKK5xV6tinpmuGM3pKpvAIRgQ.png'},
    {id: 5, name: 'Espresso Shots', description: 'Rich and robust espresso shots, expertly brewed for a bold, concentrated coffee experience.', photo: 'https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/drinks/Espresso-Shots-DGbI858bAXtrrB55wZb8ktXBTCoGOJ.jpg'},
    {id: 6, name: 'Unicorn Milkshake', description: 'A whimsical, rainbow-colored frozen treat, bursting with fantastical flavors and adorned with sparkling sprinkles and edible glitter.', photo: 'https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/drinks/Unicorn-Milkshake-09mSk86I87JYC08ORzfe7rBc3YMhgi.jpg'},
    {id: 7, name: 'Iced Matcha Latte', description:'A refreshing beverage blending the vibrant green tea flavor of matcha with creamy milk and a delicate hint of sweetness.', photo: 'https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/drinks/Iced-Matcha-Latte-Kqv9fuzw5d7N1JFuhXtXKZrFLQxoYo.jpg'},
    {id: 8, name: 'Pink Lemonade', description: 'A refreshing citrus beverage, typically featuring the tartness of lemons with a hint of sweetness and a rosy hue.', photo: 'https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/drinks/Pink-Lemonade-1ll07XcmJ0s6LP9whLs5bAUELQ5x0c.png'},
    {id: 9, name: 'Unicorn Smoothie', description: 'A whimsically colorful and magically delicious blend of vibrant fruits, adorned with sparkling edible decorations, creating a delightful and visually enchanting beverage.', photo: 'https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/drinks/Unicorn-Smoothie-kv3gPCotdwtuLyKGFL4UtA9sROZ8sI.jpg'}
  ]);
};
