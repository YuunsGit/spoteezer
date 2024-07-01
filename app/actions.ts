"use server";

export const getSearchResults = async (query: string, page: string) => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/search/playlist?q=${query}&limit=10&index=${parseInt(page) * 10}`,
  ).then((res) => res.json());
};

export const getTracklist = async (id: number) => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/playlist/${id}/tracks`,
  ).then((res) => res.json());
};
