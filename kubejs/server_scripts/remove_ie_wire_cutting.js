// removes immersive engineering wire from create cutting recipe :)
ServerEvents.recipes(event => {
  event.remove({ id: /^create:cutting\/compat\/immersiveengineering\/wire_/ })
})
