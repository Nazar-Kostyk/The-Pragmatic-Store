import consumer from "./consumer"

consumer.subscriptions.create("ProductsChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    const storeElement = document.querySelector("main.store")
    if (storeElement) {
      storeElement.innerHTML = data['html']
      const ul = document.querySelectorAll('ul li h2')
      for (let i = 0; i <= ul.length - 1; i++) {
        if (ul[i].innerHTML == data['title']) {
          ul[i].parentElement.className = "line-item-highlight"
          break
        }
      }
    }
  }
});
