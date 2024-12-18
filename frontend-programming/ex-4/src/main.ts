const loadComponent = async () => {
  const { default: MyComponent } = await import("./components/LazyComponent");
  const componentInstance = new MyComponent();
  document.body.appendChild(componentInstance.render());
};
loadComponent();
