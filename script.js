let homes;

fetch("./orlando_db.json")
    .then((response) => response.json()
        .then((data) => {
            homes = data;
            console.log(data);
            console.log(homes.guests[0].homes[0].price);
        })
    .catch((error) => console.error("Unable to fetch data:", error)));
    
// let flatten = magicalHomesData.flat(1);
// console.log(flatten);
// bedrooms.split(" | ", 1);
// let bedroom = magicalHomesData.guests.homes.b_b_g.split(' | ')
