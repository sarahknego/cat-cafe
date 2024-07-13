async function loader() {
    const response = await fetch("https://cat-cafe-010s.onrender.com/cats");
    const cats = await response.json();
    const res = await fetch("https://cat-cafe-010s.onrender.com/drinks");
    const drinks = await res.json();
    return {cats, drinks};
};

async function catsLoader() {
    const response = await fetch("https://cat-cafe-010s.onrender.com/cats");
    const cats = await response.json();
    return cats;
};

async function drinksLoader() {
    const res = await fetch("https://cat-cafe-010s.onrender.com/drinks");
    const drinks = await res.json();
    return drinks;
};

async function roomsLoader() {
    const resp = await fetch("https://cat-cafe-010s.onrender.com/rooms");
    const rooms = await resp.json();
    return rooms;
};

async function reservationsLoader() {
    const response = await fetch("https://cat-cafe-010s.onrender.com/reservations");
    const reservations = await response.json();
    return reservations;
};

async function getResourceLoader(request) {
    const url = `https://cat-cafe-010s.onrender.com/${request.params.item || "reservations"}/${request.params.id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

module.exports = {
    appLoader: loader,
    catsLoader: catsLoader,
    drinksLoader: drinksLoader,
    roomsLoader: roomsLoader,
    reservationsLoader: reservationsLoader,
    getResourceLoader: getResourceLoader
};