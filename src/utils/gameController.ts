import { Hilo } from "@/Hilo.js";

import { computed } from 'vue'
import store from '../store'

const canvasStatus = computed(() => store.state.canvasStatus);


let hilo: any;
let canvasElement: HTMLElement | null;
let canvasElementSmall: HTMLElement | null;

export function setElements(element: HTMLElement | null, elment_small: HTMLElement | null) {
  canvasElement = element;
  canvasElementSmall = elment_small;
}

export function startCanvas() {
  if (canvasElement && canvasElementSmall) {
    hilo = Hilo(canvasElement, canvasElementSmall);
    hilo.map();
  }
}


export function bet(bettype: string) {
  hilo.setGameStatus(bettype);
  hilo.commonAction(bettype, "vue");
}

export function setType(bettype: string) {
  hilo.setGameStatus(bettype);
}

export function changeFlag() {
  store.commit('changeFlag');

  h5_opacityRedraw(false);
}

export function resizeCanvas(str: string) {
  if (canvasElement && canvasElementSmall && hilo) {
    hilo.redrawObjects(canvasElement, canvasElementSmall, str);
  }
}

export function h5_opacityRedraw(isOpacity: boolean) {
  if (canvasElement && hilo) {
    hilo.h5_betbtnSetOpacity(isOpacity);
  }
}