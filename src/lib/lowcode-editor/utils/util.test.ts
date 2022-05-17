/*
 * @Author: cos
 * @Date: 2022-05-17 02:50:16
 * @LastEditTime: 2022-05-17 03:40:13
 * @LastEditors: cos
 * @Description: 测试工具函数
 * @FilePath: \MyRoom-Admin\src\lib\lowcode-editor\tests\util.test.ts
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
    let ins = getInstanceFromSchema(`{
    "id": "text-1",
    "type": "Text",
    "name": "标题",
    "position": {
        "top": 10,
        "left": 10,
        "width": 100,
        "height": 50
    },
    "props": [
        {
            "label": "文字内容",
            "type": "body",
            "value": "我是一个标题"
        },
        {
            "label": "文字颜色",
            "type": "color",
            "value": "#000",
            "isCSSProps": true
        }
    ]
}`);
    console.log('ins', ins);
    expect(ins).toEqual({
        id: 'text-1',
        type: 'Text',
        name: '标题',
        position: {
            top: 10,
            left: 10,
            width: 100,
            height: 50,
        },
        styles: {
            color: '#000',
        },
        body: '我是一个标题',
    });
});
