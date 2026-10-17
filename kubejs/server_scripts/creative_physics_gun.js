// expensive way to get a creative physics gun, but it is possible
// its SOOO useful so i think its needed
ServerEvents.recipes(event => {
  event.shaped('simulated:creative_physics_staff')
    .pattern('ABA')
    .pattern('BCB')
    .pattern('ABA')
    .key('A', 'minecraft:netherite_ingot')
    .key('B', 'mekanism:pellet_antimatter')
    .key('C', 'minecraft:nether_star');
});