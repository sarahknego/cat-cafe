/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('drinks').del()
  await knex('drinks').insert([
    {id: 1, name: 'Bubblegum Boba', description: 'A sweet and colorful beverage featuring chewy tapioca pearls, infused with the nostalgic flavor of bubblegum.', photo: 'https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/drinks/Bubblegum-Boba-dpP5ZoWWxZtjGZnJQEkdJ9edqr33Sn.png'},
    {id: 2, name: 'Rose Latte', description: 'A delicately flavored beverage that combines espresso and steamed milk with a hint of rose syrup, offering a floral and slightly sweet taste.', photo: 'https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/drinks/Rose-Latte-u7Dh3pgdfsvZU1B9tOv9MHiZZvsX5f.png'},
    {id: 3, name: 'Iced Chai Latte', description: 'A refreshing beverage made from spiced tea concentrate blended with milk and served over ice.', photo: 'https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/drinks/Iced-Chai-Latte-jzVIhmqr6dpdB8HkMjmh5V214KQoih.png'},
    {id: 4, name: 'Blended Galaxy Frappe', description: 'A vibrant, galaxy-themed frappuccino featuring layers of colorful, swirling flavors and topped with whipped cream and shimmering edible glitter.', photo: 'https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/drinks/Blended-Galaxy_Frappe-5dpDGDKK5xV6tinpmuGM3pKpvAIRgQ.png'},
    {id: 5, name: 'Espresso Shots', description: 'Rich and robust espresso shots, expertly brewed for a bold, concentrated coffee experience.', photo: 'https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/drinks/Espresso-Shots-DGrTlbhXAVyI0B07qzO5mCXBNCjgHo.png'},
    {id: 6, name: 'Unicorn Milkshake', description: 'A whimsical, rainbow-colored frozen treat, bursting with fantastical flavors and adorned with sparkling sprinkles and edibleglitter.', photo: 'https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/drinks/Unicorn-Milkshake-TrUzcJ0kqzlZQOp7HzyxVn7Po3dLUR.png'},
    {id: 7, name: 'Iced Pink Matcha Latte', description:'A refreshing beverage blending the vibrant green tea flavor of matcha with creamy milk and a delicate hint of sweetness, accented by the soft hue and subtle floral notes of natural pink ingredients like rose or pitaya.', photo: 'https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/drinks/Pink-Matcha-Latte-ip5fCq12iGYrVGCb43RJIH3dNMOeTS.png'},
    {id: 8, name: 'Pink Lemonade', description: 'A refreshing citrus beverage, typically featuring the tartness of lemons with a hint of sweetness and a rosy hue.', photo: 'https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/drinks/Pink-Lemonade-1ll07XcmJ0s6LP9whLs5bAUELQ5x0c.png'},
    {id: 9, name: 'Unicorn Smoothie', description: 'A whimsically colorful and magically delicious blend of vibrant fruits, adorned with sparkling edible decorations, creating a delightful and visually enchanting beverage.', photo: 'https://iau6gmaxxfuhltb1.public.blob.vercel-storage.com/drinks/Unicorn-Smoothie-RMiaZuv6atVTgTB6nyOTKq7so49nBB.png'}
  ]);
};
