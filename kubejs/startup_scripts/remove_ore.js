// priority: 0

WorldgenEvents.remove(event => {
    event.removeOres(props => {
      props.blocks = [
        'immersiveengineering:ore_lead',
        'immersiveengineering:deepslate_ore_lead',
        'immersiveengineering:ore_uranium',
        'immersiveengineering:deepslate_ore_uranium'

    ]
    })
})