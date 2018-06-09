// import createApp from "./create-app"
import firstGreeting from "./my-module-1"
import secondGreeting from "./my-module-2"
import thirdGreeting from "./my-module-3"

document.addEventListener("DOMContentLoaded", () => {
  // createApp()

  console.log("Loaded")
  firstGreeting()
  secondGreeting()
  thirdGreeting()
})
