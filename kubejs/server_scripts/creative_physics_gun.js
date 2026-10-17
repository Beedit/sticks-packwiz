// expensive way to get a creative physics gun, but it is possible
// its SOOO useful so i think its needed
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('simulated:creative_physics_staff', 3),
    [
        'ABA',
        'BCB',
        'ABA'
    ],
    {
        'A': 'minecraft:netherite_ingot',
        'B': 'mekanism:pellet_antimatter',
        'C': 'minecraft:nether_star'
    }
  );
})
