ServerEvents.recipes(event => {
    event.shaped(
        Item.of('neoperipheral:entity_radar', 1),
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            A: 'create:andesite_alloy',
            B: 'minecraft:compass',
            C: 'minecraft:glass_pane'
        }
    );

    event.shaped(
        Item.of('neoperipheral:socket', 1),
        [
            'AAA',
            'ABA',
            'CCC'
        ],
        {
            A: 'minecraft:glass',
            B: 'minecraft:diamond', 
            C: 'create:iron_sheet'
        }
    );

    event.shaped(
        Item.of('neoperipheral:radar_module', 1),
        [
            ' A ',
            ' A ',
            ' B '
        ],
        {
            A: 'create:brass_ingot',
            B: 'create:andesite_alloy'
        }
    )

    event.shapeless(
        Item.of('neoperipheral:nfc_card', 1),
        [
            'create:iron_sheet',
            'minecraft:paper'
        ]
    )

    event.shaped(
        Item.of('neoperipheral:nfc_reader', 1),
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            A: 'create:andesite_alloy',
            B: 'neoperipheral:nfc_card',
            C: 'minecraft:redstone'
        }
    )

    event.shaped(
        Item.of('neoperipheral:nfc_master', 1),
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            A: 'create:andesite_alloy',
            B: 'neoperipheral:nfc_card',
            C: 'minecraft:redstone_block',
        }
    )

    event.shaped(
        Item.of('neoperipheral:radar_block', 1),
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            A: 'create:andesite_alloy',
            B: 'neoperipheral:radar_module',
            C: 'minecraft:glass_pane'
        }
    )

   
});