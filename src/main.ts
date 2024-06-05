/*
 * @Author: MrRice
 * @Date: 2024-06-02 17:50:40
 * @LastEditors: MrRice 1246333567@qq.com
 * @LastEditTime: 2024-06-05 11:29:53
 * @FilePath: /npm-library-universal-template/src/main.ts
 * @Description: 小舟从此逝,江海寄余生
 *
 * Copyright (c) 2024 by $ 米大饭, All Rights Reserved.
 */
export default class HelloLib {
  public container: HTMLElement | null;
  constructor(container: string | HTMLElement) {
    console.log('HelloLib created,HELLOWorld');
    this.container = typeof container === 'string' ? document.getElementById(container) : container;
    if (!this.container) {
      console.error('container not found');

      return;
    }

    this.container.innerHTML = 'Hello from lib';
  }

  public static sayHello(): string {
    return 'Hello from lib';
  }
}
