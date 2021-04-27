const dc_heroes = [
    {
        hero_name: "Batman",
        hero_health: 75
    },
    {
        hero_name: "Nightwing",
        hero_health: 20
    },
    {
        hero_name: "Red Hood",
        hero_health: 18
    },
    {
        hero_name: "Robin",
        hero_health: 65
    },
    {
        hero_name: "Cat Woman",
        hero_health: 100
    },
];


const removeHero = (health) => {
    if (health < 25) {
        health = 0;
    }
    
    return health;
};


console.log(newList = dc_heroes.map(x => removeHero(x.hero_health)));
//console.log(newList = dc_heroes.filter(x => removeHero(x.hero_health)));
console.log(newList);