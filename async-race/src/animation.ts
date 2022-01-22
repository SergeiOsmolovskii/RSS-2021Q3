import { startEngine, stopEngine, drive } from "./api";
import { store } from "./components/store";
import { disableButton, activateButton } from "./secondaryFunctions";

const generateDistanse = () => {
  const road = document.querySelector('.road') as HTMLElement;
  return road.offsetWidth;
}

export const animation = (car: HTMLElement, animationTime: number, id: number) => {
  const carSize = car.clientWidth;
  const endPosition = generateDistanse() - carSize;
  let currentPosition = 0;
  let start = 0;
  const frameCount = animationTime / 1000 * 60;
  const pxPerFrame = (endPosition) / frameCount;
  const step = (timeStep: number) => {
    if (!start) start = timeStep;
    currentPosition = currentPosition += pxPerFrame;
    car.style.transform = `translateX(${currentPosition}px)`;
    store.animations[id] = requestAnimationFrame(step);
    if (currentPosition >= generateDistanse() - carSize) {
      window.cancelAnimationFrame(store.animations[id]);
      stopEngine(id);
    }
  }
  store.animations[id] = requestAnimationFrame(step);
}

export const startDriving = async (id: number) => {
  type SvgInHtml = HTMLElement & SVGSVGElement;
  const carBlock = document.getElementById(`${id}`) as HTMLElement;
  const car = carBlock.querySelector('svg') as SvgInHtml;
  disableButton(id, 'stop-car-');
  activateButton(id,'start-car-');
  const {velocity, distance} = await startEngine(id);
  const time = Math.round(distance / velocity);
  animation(car, time, id);
  await drive(Number(id));
}

export const stopDriving = async (id: number) => {
  await stopEngine(id);
  window.cancelAnimationFrame(store.animations[id]);
}

export const backCar = async (id: number) => {
  type SvgInHtml = HTMLElement & SVGSVGElement;
  const carBlock = document.getElementById(`${id}`) as HTMLElement;
  const car = carBlock.querySelector('svg') as SvgInHtml;
  car.style.transform = `translateX(${0}px)`;
  activateButton(id, 'stop-car-');
  disableButton(id,'start-car-');
}