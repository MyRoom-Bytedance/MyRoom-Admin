import React, { useEffect } from "react";
import { materialList, TEXT_PROPS, IMAGE_PROPS, HOUSE_PROPS, COMPONENT_TYPE } from 'lib/lowcode-editor/const/ComponentData';
const materials = [...materialList.common, ...materialList.layout, ...materialList.house];

export default function GenernateProject({ data }: { data: Project }) {
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "relative",
        backgroundColor: data.global?.backgroundColor || "#fff",
      }}
    >
      {data.components.map((component) => {
        if (component.type === COMPONENT_TYPE.Text || component.type === COMPONENT_TYPE.Text_Droped) {
          const style = component.props;
          return (
            <span
              key={component.id}
              style={{
                ...style,
                position: "absolute",
              }}
            >
              {component.props.innerText}
            </span>
          );
        } else if (component.type === COMPONENT_TYPE.Image || component.type === COMPONENT_TYPE.Image_Droped) {
          const style = component.props;
          return (
            <img
              key={component.id}
              src={component.props.src}
              style={{
                ...style,
                position: "absolute",
              }}
            />
          );
        } else if (component.type === COMPONENT_TYPE.HouseCard || component.type === COMPONENT_TYPE.HouseCard_Droped) {
          return <HomeCard key={component.id} props={component.props} />;
        } else {
          return <></>;
        }
      })}
    </div>
  );
}

function HomeCard({ props }: { props: any }) {
  // console.log("home", props);
  return (
    props.homeId === null ? (<div style={{ top: props.top, left: props.left, }} >请指定房源id</div>) : (
      <div
        style={{
          position: "absolute",
          top: props.top,
          left: props.left,
          width: props.width,
          height: props.height,
        }}
      >
        qwq
      </div>
    )
  );
}
