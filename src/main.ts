export default class HelloLib {
  public container: HTMLElement | null;
  constructor(container: string | HTMLElement) {
    console.log("HelloLib created,HELLOWorld");
    this.container =
      typeof container === "string"
        ? document.getElementById(container)
        : container;
    if (!this.container) {
      console.error("container not found");
      return;
    }
    this.container.innerHTML = "Hello from lib";
  }

  public static sayHello(): string {
    return "Hello from lib";
  }
}
