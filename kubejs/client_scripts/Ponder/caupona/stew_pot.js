Ponder.registry(e => {
    e.create('caupona:stew_pot')
        .scene(
            'caupona:stew_pot',
            '煮沸',
            'stew_pot',
            (scene, utils) => {
                scene.showBasePlate()
                scene.idle(20)
                scene.world.showSection([1, 1, 1], Direction.down)
                scene.idle(5)
                scene.world.showSection([1, 2, 1], Direction.down)
                scene.idle(5)
                scene.overlay.showLine('red', {}, [1, 1, 1], 20)
                scene.idle(10)
                scene.addKeyframe()
                scene.overlay.showOutline('blue', {}, [1, 1, 1], 15)
                scene.text(15, '§b向内部添加燃料', [1, 2, 1])
            }
        )
})