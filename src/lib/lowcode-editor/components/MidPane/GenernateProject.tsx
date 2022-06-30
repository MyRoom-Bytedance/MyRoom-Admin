import React, { useEffect, useState } from "react";
import { COMPONENT_TYPE } from 'lib/lowcode-editor/const/ComponentData';
import { useDrag } from "react-dnd";
import { Card } from "antd";
import { getHomeById } from "service/home";

function Text({ component, setRightPanelElementId, setRightPaneElementType }: any) {
  const [, drag] = useDrag(() => ({
    type: COMPONENT_TYPE.Text_Droped,
    item: { id: component.id, isDroped: true },
  }));
  const style = component.props;
  return (
    <span
      ref={drag}
      key={component.id}
      style={{
        ...style,
        position: "absolute",
      }}
      onClick={() => {
        setRightPanelElementId(component.id);
        setRightPaneElementType(component.type);
      }}
    >
      {component.props.innerText}
    </span>
  );
}

function Image({ component, setRightPanelElementId, setRightPaneElementType }: any) {
  const [, drag] = useDrag(() => ({
    type: COMPONENT_TYPE.Text_Droped,
    item: { id: component.id, isDroped: true },
  }));
  const style = component.props;
  return (
    <img
      ref={drag}
      key={component.id}
      src={component.props.src}
      style={{
        ...style,
        position: "absolute",
      }}
      alt="图片加载失败"
      onClick={() => {
        setRightPanelElementId(component.id);
        setRightPaneElementType(component.type);
      }}
    />
  );
}

type Home = {
  id: number;
  image: string;
  listing_name: string;
  pricing: number;
  floor_plan_room: number;
  floor_plan_hall: number;
  squaremeter: number;
  total_floor: number;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

function HomeCardContent({ id }: { id: number }) {
  const [home, setHome] = useState<Home | null>(null);

  const getHome = async () => {
    const res = await getHomeById(id);
    setHome(res.data);
  }

  useEffect(() => {
    getHome();
    // eslint-disable-next-line
  }, [id]);

  return (
    home === null ? <div>加载中...</div> : (
      <div
        style={{
          width: '100%',
          padding: '0 10px',
          marginBottom: '10px',
        }}
      >
        <Card title={home.listing_name}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <img src={home.image} style={{ height: '100px' }} alt="暂无图片" />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
              }}
            >
              <span>售价： {home.pricing} 万元</span>
              <span>面积： {home.squaremeter} 平方米</span>
              <span>户型： {home.floor_plan_room} 室 {home.floor_plan_hall} 厅</span>
              <span>楼层： {home.total_floor} 层</span>
            </div>
            <div></div>
          </div>
        </Card>
      </div>
    )
  );

}


function HomeCard({
  props,
  setRightPanelElementId,
  setRightPaneElementType,
  id,
  type
}: {
  props: any,
  setRightPanelElementId: Function,
  setRightPaneElementType: Function,
  id: number,
  type: COMPONENT_TYPE
}) {
  // console.log("home", props);
  const [, drag] = useDrag(() => ({
    type: COMPONENT_TYPE.Text_Droped,
    item: { id, isDroped: true },
  }));
  return (
    props.homeId === null ? (
      <div
        ref={drag}
        style={{ position: "absolute", top: props.top, left: props.left, }} 
        onClick={() => {
          setRightPanelElementId(id);
          setRightPaneElementType(type);
        }}
      >请指定房源id</div>
    ) : (
      <div
        ref={drag}
        style={{
          position: "absolute",
          top: props.top,
          left: props.left,
          width: props.width,
          height: props.height,
        }}
      >
        <HomeCardContent id={props.homeId} />
      </div>
    )
  );
}

export default function GenernateProject({
  data,
  setRightPanelElementId,
  setRightPaneElementType
}: { 
  data: Project, 
  setRightPanelElementId: Function,
  setRightPaneElementType: Function
}) {
  // console.log("genernateProject", data);
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
          return <Text component={component} setRightPanelElementId={setRightPanelElementId} setRightPaneElementType={setRightPaneElementType} key={component.id} />;
        } else if (component.type === COMPONENT_TYPE.Image || component.type === COMPONENT_TYPE.Image_Droped) {
          return <Image component={component} setRightPanelElementId={setRightPanelElementId} setRightPaneElementType={setRightPaneElementType} key={component.id} />;
        } else if (component.type === COMPONENT_TYPE.HouseCard || component.type === COMPONENT_TYPE.HouseCard_Droped) {
          return (
            <HomeCard
              key={component.id}
              props={component.props}
              id={component.id}
              type={component.type}
              setRightPaneElementType={setRightPaneElementType}
              setRightPanelElementId={setRightPanelElementId}
            />
          );
        } else {
          return <></>;
        }
      })}
    </div>
  );
}
