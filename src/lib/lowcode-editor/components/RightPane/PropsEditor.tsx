import React from 'react';
import { COMPONENT_TYPE } from '../../const/ComponentData';
import { Button } from 'antd';
import './style.css';
import UploadImg from 'components/UploadImg';

type EditorProps = {
  projectData: Project;
  setProjectData: Function;
  rightPaneElementId: number;
  rightPaneElementType: COMPONENT_TYPE | null;
};

export function PropsEditor({
  projectData,
  setProjectData,
  rightPaneElementId,
  rightPaneElementType,
}: EditorProps) {

  const getItemById = (id: number) => {
    return projectData.components.find((item) => item.id === id);
  };

  const changeElementData = (id: number, key: string, newData: any) => {
    const element = getItemById(id);
    if (element) {
      element.props[key] = newData;
      setProjectData({
        ...projectData,
        components: projectData.components
      });
    }
  }

  if (rightPaneElementType === COMPONENT_TYPE.Text || rightPaneElementType === COMPONENT_TYPE.Text_Droped) {
    const elementData = getItemById(rightPaneElementId).props;
    if (!elementData) {
      return <div>属性编辑区</div>;
    }
    const inputDomObject: Array<HTMLInputElement> = [];
    return (
      <div key={rightPaneElementId}>
        <h3>文字元素</h3>
        <br />
        <div className="flex-row-space-between text-config-item">
          <div>文字内容:</div>
          <input
            defaultValue={elementData.innerText}
            ref={(element) => {
              inputDomObject[0] = element!;
            }}
            type="text"
          ></input>
        </div>
        <div className="flex-row-space-between text-config-item">
          <div>文字颜色:</div>
          <input
            defaultValue={elementData.color}
            ref={(element) => {
              inputDomObject[1] = element!;
            }}
            type="text"
          ></input>
        </div>
        <div className="flex-row-space-between text-config-item">
          <div>文字大小:</div>
          <input
            defaultValue={elementData.fontSize}
            ref={(element) => {
              inputDomObject[2] = element!;
            }}
            type="text"
          ></input>
        </div>
        <div className="flex-row-space-between text-config-item">
          <div>宽度:</div>
          <input
            defaultValue={elementData.width}
            ref={(element) => {
              inputDomObject[3] = element!;
            }}
            type="text"
          ></input>
        </div>
        <div className="flex-row-space-between text-config-item">
          <div>高度:</div>
          <input
            defaultValue={elementData.height}
            ref={(element) => {
              inputDomObject[4] = element!;
            }}
            type="text"
          ></input>
        </div>
        <div className="flex-row-space-between text-config-item">
          <div>上方距离:</div>
          <input
            defaultValue={elementData.top}
            ref={(element) => {
              inputDomObject[5] = element!;
            }}
            type="text"
          ></input>
        </div>
        <div className="flex-row-space-between text-config-item">
          <div>左侧距离:</div>
          <input
            defaultValue={elementData.left}
            ref={(element) => {
              inputDomObject[6] = element!;
            }}
            type="text"
          ></input>
        </div>
        <div className="flex-row-space-between text-config-item">
          <div>层叠（越大越靠上）:</div>
          <input
            defaultValue={elementData.zIndex}
            ref={(element) => {
              inputDomObject[7] = element!;
            }}
            type="text"
          ></input>
        </div>
        <br />
        <Button
          type="primary"
          onClick={() => {
            changeElementData(rightPaneElementId, 'innerText', inputDomObject[0].value);
            changeElementData(rightPaneElementId, 'color', inputDomObject[1].value);
            changeElementData(rightPaneElementId, 'fontSize', inputDomObject[2].value);
            changeElementData(rightPaneElementId, 'width', inputDomObject[3].value);
            changeElementData(rightPaneElementId, 'height', inputDomObject[4].value);
            changeElementData(rightPaneElementId, 'top', inputDomObject[5].value);
            changeElementData(rightPaneElementId, 'left', inputDomObject[6].value);
            changeElementData(rightPaneElementId, 'zIndex', inputDomObject[7].value);
          }}
        >
          确定
        </Button>
      </div>
    );
  } else if (rightPaneElementType === COMPONENT_TYPE.Image || rightPaneElementType === COMPONENT_TYPE.Image_Droped) {
    const elementData = getItemById(rightPaneElementId).props;
    if (!elementData) {
      return <div>属性编辑区</div>;
    }
    const inputDomObject: Array<HTMLInputElement> = [];
    return (
      <div key={rightPaneElementId}>
        <h3>图片元素</h3>
        <br />
        <div className="flex-row-space-between text-config-item">
          <div>宽度:</div>
          <input
            defaultValue={elementData.width}
            ref={(element) => {
              inputDomObject[0] = element!;
            }}
            type="text"
          ></input>
        </div>
        <div className="flex-row-space-between text-config-item">
          <div>高度:</div>
          <input
            defaultValue={elementData.height}
            ref={(element) => {
              inputDomObject[1] = element!;
            }}
            type="text"
          ></input>
        </div>
        <div className="flex-row-space-between text-config-item">
          <div>上方距离:</div>
          <input
            defaultValue={elementData.top}
            ref={(element) => {
              inputDomObject[2] = element!;
            }}
            type="text"
          ></input>
        </div>
        <div className="flex-row-space-between text-config-item">
          <div>左侧距离:</div>
          <input
            defaultValue={elementData.left}
            ref={(element) => {
              inputDomObject[3] = element!;
            }}
            type="text"
          ></input>
        </div>
        <div className="flex-row-space-between text-config-item">
          <div>图片地址:</div>
          <input
            defaultValue={elementData.src}
            ref={(element) => {
              inputDomObject[4] = element!;
            }}
            type="text"
          ></input>
        </div>
        <UploadImg uploadHeadImg={ (image) => inputDomObject[4].value = image } />
        <div className="flex-row-space-between text-config-item">
          <div>层叠（越大越靠上）:</div>
          <input
            defaultValue={elementData.zIndex}
            ref={(element) => {
              inputDomObject[5] = element!;
            }}
            type="text"
          ></input>
        </div>
        <br />
        <Button
          type="primary"
          onClick={() => {
            changeElementData(rightPaneElementId, 'width', inputDomObject[0].value);
            changeElementData(rightPaneElementId, 'height', inputDomObject[1].value);
            changeElementData(rightPaneElementId, 'top', inputDomObject[2].value);
            changeElementData(rightPaneElementId, 'left', inputDomObject[3].value);
            changeElementData(rightPaneElementId, 'src', inputDomObject[4].value);
            changeElementData(rightPaneElementId, 'zIndex', inputDomObject[5].value);
          }}
        >
          确定
        </Button>
      </div>
    );
  } else if (rightPaneElementType === COMPONENT_TYPE.HouseCard || rightPaneElementType === COMPONENT_TYPE.HouseCard_Droped) {
    const elementData = getItemById(rightPaneElementId).props;
    if (!elementData) {
      return <div>属性编辑区</div>;
    }
    const inputDomObject: Array<HTMLInputElement> = [];
    return (
      <div key={rightPaneElementId}>
        <h3>房源卡片</h3>
        <br />
        <div className="flex-row-space-between text-config-item">
          <div>宽度:</div>
          <input
            defaultValue={elementData.width}
            ref={(element) => {
              inputDomObject[0] = element!;
            }}
            type="text"
          ></input>
        </div>
        <div className="flex-row-space-between text-config-item">
          <div>高度:</div>
          <input
            defaultValue={elementData.height}
            ref={(element) => {
              inputDomObject[1] = element!;
            }}
            type="text"
          ></input>
        </div>
        <div className="flex-row-space-between text-config-item">
          <div>上方距离:</div>
          <input
            defaultValue={elementData.top}
            ref={(element) => {
              inputDomObject[2] = element!;
            }}
            type="text"
          ></input>
        </div>
        <div className="flex-row-space-between text-config-item">
          <div>左侧距离:</div>
          <input
            defaultValue={elementData.left}
            ref={(element) => {
              inputDomObject[3] = element!;
            }}
            type="text"
          ></input>
        </div>
        <div className="flex-row-space-between text-config-item">
          <div>房源id:</div>
          <input
            defaultValue={elementData.src}
            ref={(element) => {
              inputDomObject[4] = element!;
            }}
            type="text"
          ></input>
        </div>
        <div className="flex-row-space-between text-config-item">
          <div>层叠（越大越靠上）:</div>
          <input
            defaultValue={elementData.zIndex}
            ref={(element) => {
              inputDomObject[5] = element!;
            }}
            type="text"
          ></input>
        </div>
        <br />
        <Button
          type="primary"
          onClick={() => {
            changeElementData(rightPaneElementId, 'width', inputDomObject[0].value);
            changeElementData(rightPaneElementId, 'height', inputDomObject[1].value);
            changeElementData(rightPaneElementId, 'top', inputDomObject[2].value);
            changeElementData(rightPaneElementId, 'left', inputDomObject[3].value);
            changeElementData(rightPaneElementId, 'homeId', inputDomObject[4].value);
            changeElementData(rightPaneElementId, 'zIndex', inputDomObject[5].value);
          }}
        >
          确定
        </Button>
      </div>
    );
  } else if (rightPaneElementType === COMPONENT_TYPE.Background) {
    let inputDomObject: HTMLInputElement;
    return (
      <>
        <h3>背景</h3>
        <br />
        <div className="flex-row-space-between text-config-item">
          <div>背景颜色:</div>
          <input
            defaultValue={projectData.global.backgroundColor}
            ref={(element) => {
              inputDomObject = element!;
            }}
            type="text"
          ></input>
        </div>
        <br />
        <Button
          type="primary"
          onClick={() => {
            setProjectData({
              ...projectData,
              global: {
                ...projectData.global,
                backgroundColor: inputDomObject.value,
              },
            });
          }}
        >
          确定
        </Button>
      </>
    )
  } else {
    return <div> 属性编辑区 </div>;
  }
};
