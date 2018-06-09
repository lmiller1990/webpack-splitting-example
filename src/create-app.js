import Vue from "vue"

export default function createApp() {
  const el = document.createElement("div")

  el.setAttribute("id", "app")

  document.body.appendChild(el)

  new Vue({
    el: "#app",
    render: h => h("div", "Hello world")
  })
}
