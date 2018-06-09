export default function greetingOne() {
  const el = document.createElement("div")
  
  el.innerText = "Hello from my module!"

  document.body.appendChild(el)
}
