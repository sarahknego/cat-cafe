/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('reservations').truncate()
  await knex('reservations').insert([
    {start_time: '2024-04-13 10:30:00', length_hours: 2, num_of_people: 8, cat_id: 4, room_id: 1, drink_id: 4, name: 'Benjamin Smith', email: 'benjamin.smith@example.com', phone_number: '(555) 123-4567'},
    {start_time: '2024-04-15 14:00:00', length_hours: 1, num_of_people: 5, cat_id: 2, room_id: 4, drink_id: 1, name: 'Emily Thompson', email: 'emily.thompson@example.com', phone_number: '(555) 987-6543'},
    {start_time: '2024-04-16 12:00:00', length_hours: 3, num_of_people: 7, cat_id: 6, room_id: 5, drink_id: 5, name: 'Daniel Rodriguez', email: 'daniel.rodriguez@example.com', phone_number: '(555) 876-5432'},
    {start_time: '2024-04-18 15:30:00', length_hours: 1, num_of_people: 9, cat_id: 5, room_id: 2, drink_id: 8, name: 'Sophia Johnson', email: 'sophia.johnson@example.comd', phone_number: '(555) 234-5678'}
  ]);
  console.log("reservations seeded successfully!!!!")
 knex("reservations").select("*").then((res) => console.log(res))
};
