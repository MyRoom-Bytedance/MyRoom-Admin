import request from './axios';

export const getProjectList = () => {
  return request<Array<Project>>({
    url: '/project/list',
    method: 'GET',
  });
};

type ProjectCreateRequest = {
  name: string;
  content: string;
};

export const createProject = (data: ProjectCreateRequest) => {
  return request<Project>({
    url: '/project/add',
    method: 'POST',
    data,
  });
};

type ProjectUpdateRequest = {
  id: number;
  name: string;
  content: string;
};

export const updateProject = (data: ProjectUpdateRequest) => {
  return request<Project>({
    url: '/project/update',
    method: 'POST',
    data,
  });
};

export const getProjectById = (id: number) => {
  return request<Project>({
    url: `/project/details/${id}`,
    method: 'GET',
  });
};

export const deleteProject = (id: number) => {
  return request({
    url: '/project/delete',
    method: 'GET',
    params: {
      id,
    },
  });
};

export const getActiveProject = () => {
  return request({
    url: '/project/active',
    method: 'GET',
  });
}

export const setActiveProject = (id: number) => {
  return request({
    url: '/project/setActive',
    method: 'GET',
    params: {
      id,
    }
  })
}