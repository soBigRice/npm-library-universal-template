/*
 * @Author: MrRice
 * @Date: 2024-06-02 17:50:40
 * @LastEditors: MrRice 1246333567@qq.com
 * @LastEditTime: 2024-06-05 15:47:25
 * @FilePath: /npm-library-universal-template/src/main.ts
 * @Description: 小舟从此逝,江海寄余生
 *
 * Copyright (c) 2024 by $ 米大饭, All Rights Reserved.
 */

/**
 * Description placeholder
 *
 * @export
 * @class HelloLib
 * @typedef {HelloLib}
 * @constructor {HTMLElement} container
 * @example
 * new HelloLib(document.querySelector('#app')).init()
 * @description 这是一个测试用的demo案例
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

  /**
   * Description placeholder
   *
   * @hide
   * @public
   * @static
   * @returns {string}
   */
  public static sayHello(): string {
    return 'Hello from lib';
  }
}
