import { BASE_URL } from "../config";

export const Teacher = {
  all() {
    return fetch(`${BASE_URL}/teachers`, {
      credentials: "include"
    }).then(res => res.json());
  },
  async one(id) {
    const res = await fetch(`${BASE_URL}/teachers/${id}`, {
      credentials: "include"
    });
    const teacher = await res.json();
    return teacher;
  },
  create(params) {
    return fetch(`${BASE_URL}/teachers`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },
  update(id, params) {
    return fetch(`${BASE_URL}/teachers/${id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },
  delete(id) {
    return fetch(`${BASE_URL}/teachers/${id}`, {
      method: "DELETE",
      credentials: "include"
    }).then(res => res.json());
  }
};
