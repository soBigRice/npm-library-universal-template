import typescriptSVG from './typescript.svg';
export default class HelloLib {

  public container: HTMLElement | null;
  constructor(container: string | HTMLElement) {
    console.log('HelloLib created,HELLOWorld');
    this.container = typeof container === 'string' ? document.getElementById(container) : container;
    if (!this.container) {
      console.error('container not found');
      return
    }






    this.container.innerHTML = `
        <H1>Hello my lib</H1>
        <div class="logo">
        <img src="${typescriptSVG}" alt="typescript logo" class="svg" />
        <img src="/vite.svg" alt="vite" class="svg" />
        </div>
    `

  }

  public static sayHello(): string {
    return 'Hello from lib';
  }
}