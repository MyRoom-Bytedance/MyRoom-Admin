import request from './axios';

type HomeListRequset = {
  offset: number;
  size: number;
};

export const getHomeList = (params: HomeListRequset) => {
  return request<Array<Home>>({
    url: '/home/list',
    method: 'GET',
    params,
  });
};

type HomeCreateRequest = {
  image?: string;
  listing_name?: string;
  pricing?: number;
  floor_plan_room?: number;
  floor_plan_hall?: number;
  squaremeter?: number;
  total_floor?: number;
  description?: string;
};

export const createHome = (data: HomeCreateRequest) => {
  return request<Home>({
    url: '/home/add',
    method: 'POST',
    data,
  });
};

type HomeUpdateRequest = {
  id: number;
  image?: string;
  listing_name?: string;
  pricing?: number;
  floor_plan_room?: number;
  floor_plan_hall?: number;
  squaremeter?: number;
  total_floor?: number;
  description?: string;
};

export const updateHome = (data: HomeUpdateRequest) => {
  return request<Home>({
    url: '/home/update',
    method: 'POST',
    data,
  });
};

export const deleteHome = (id: number) => {
  return request<Home>({
    url: '/home/delete',
    method: 'GET',
    params: {
      id,
    },
  });
};

export const getHomeById = (id: number) => {
  return request<Home>({
    url: '/home/details',
    method: 'GET',
    params: {
      id,
    },
  });
}
