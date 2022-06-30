/**
 * 工程JSON定义
 */
type Project = {
  id: number;
  name: string;
  global?: any;
  components: Component[];
  [key: string]: any;
};
