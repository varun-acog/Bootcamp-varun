export default class MyComponent {
  render() {
    const element = document.createElement("div");
    element.textContent = "Lazy Loaded Component!";
    return element;
  }
}
