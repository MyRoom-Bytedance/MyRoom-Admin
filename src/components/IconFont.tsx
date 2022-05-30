/*
 * @Author: cos
 * @Date: 2022-05-11 20:30:46
 * @LastEditTime: 2022-05-30 21:53:45
 * @LastEditors: cos
 * @Description: IconFont 项目图标 加入新图标记得要去色之后再更新代码，粘贴到scriptUrl中
 * @FilePath: \MyRoom-Admin\src\components\IconFont.tsx
 */
import { createFromIconfontCN } from '@ant-design/icons';

// https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=3394019
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_3394019_9qrb8b8xa2v.js',
});
export default IconFont;

// use Like
// <IconFont type="icon-image" />
// <IconFont type="icon-default" />
// <IconFont type="icon-text" style={{fontSize: 40, color: 'gray'}} />
