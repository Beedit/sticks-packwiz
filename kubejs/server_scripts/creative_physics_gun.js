// expensive way to get a creative physics gun, but it is possible
// its SOOO useful so i think its needed
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('simulated:creative_physics_staff', 1),
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: 'minecraft:netherite_ingot',
      B: 'mekanism:pellet_antimatter',
      C: 'minecraft:nether_star'
    }
  );

  event.shaped(
    Item.of('create:creative_blaze_cake', 1),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: 'mekanism:pellet_antimatter',
      B: 'create:blaze_cake'
    }
  )

  event.shaped(
    Item.of('create:creative_motor', 1),
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: 'minecraft:netherite_ingot',
      B: 'mekanism:pellet_antimatter',
      C: 'mekanism:ultimate_induction_cell'
    }
  )

});