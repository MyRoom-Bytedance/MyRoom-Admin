/*
 * @Author: cos
 * @Date: 2022-05-17 02:50:16
 * @LastEditTime: 2022-05-26 00:10:49
 * @LastEditors: cos
 * @Description: 测试工具函数
 * @FilePath: \MyRoom-Admin\src\lib\lowcode-editor\utils\util.test.ts
 */
import { parseJSON } from '../utils';
import { getInstanceFromSchema } from '../utils/schemaUtil';
test('parseJSON', () => {
    let obj = parseJSON('{"a":1,"b":"2"}');
    expect(obj).toEqual({ a: 1, b: '2' });
    console.log(obj);
    expect(parseJSON('dawdawwa')).toBeNull();
});
test('getInstanceFromSchema', () => {
    let ins1 = getInstanceFromSchema(`{
    "id": "text-1",
    "type": "Text",
    "name": "标题",
    "position": {
        "top": 10,
        "left": 10,
        "width": 100,
        "height": 50
    },
    "props": {
        "innerText": "我是一个标题",
        "color": "#000"
    }
}`);
    console.log('ins1:', ins1);
    expect(ins1).toEqual({
        id: 'text-1',
        type: 'Text',
        styles: {
            position: 'absolute',
            top: 10,
            left: 10,
            width: 100,
            height: 50,
            color: '#000',
        },
        body: '我是一个标题',
        htmlProps: {},
    });

    let ins2 = getInstanceFromSchema(`{
        "id": "image-1",
        "type": "Image",
        "name": "广告图片",
        "positionType": "fixed",
        "position": {
            "top": 10,
            "left": 10,
            "width": 100,
            "height": 50
        },
        "props": {
            "src": "https://fastly.jsdelivr.net/gh/yusixian/imgBed/img/tx.jpg"
        }
    }`);
    console.log('ins2:', ins2);
    expect(ins2).toEqual({
        id: 'image-1',
        type: 'Image',
        styles: {
            position: 'fixed',
            top: 10,
            left: 10,
            width: 100,
            height: 50,
        },
        body: null,
        htmlProps: { src: 'https://fastly.jsdelivr.net/gh/yusixian/imgBed/img/tx.jpg' },
    });
});
