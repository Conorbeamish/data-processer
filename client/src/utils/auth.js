
import {setTokenHeader } from "./apiCall";

export function logout(){
  localStorage.clear()
  setTokenHeader(false);
}