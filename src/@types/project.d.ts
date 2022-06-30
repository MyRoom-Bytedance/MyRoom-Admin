import { AntTreeNodeSelectedEvent } from "antd/lib/tree";

type Project = {
  id: number;
  name: string;
  global?: any;
  components?: any;
  createdAt?: Date;
  content?: any;
};
