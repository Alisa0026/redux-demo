/*
 * action 类型
 */

export const INCREASE = 'INCREASE';

/*
 * 其它的常量
 */



/*
 * action 创建函数
 */

export function increase() {
    return { type: INCREASE }
}