export const createGarageSettingBlock = () => `
  <div class="setting-block">
    <div class="switch-buttons-block">
      <button class="switch-buttons switch-buttons__garage">To garage</button>
      <button class="switch-buttons switch-buttons__winners">To winners</button>
    </div>

    <div class="create-car-block">
    <form class="create-new-car">
      <label class="car-name-label">
        <input id="add-name" class="car-name-input" type="text" required>
      </label>
      <label class="car-color-label">
        <input id="add-color" class="car-color-input" type="color" required>
      </label>
      <button type="submit" id="create-car" class="create-car__button">Create</button>
    </form>
    </div>

    <div class="update-car-block">
      <form class="upadte-car">
        <label class="car-name-label">
          <input id="update-name" class="car-name-input" type="text" required>
        </label>
        <label class="car-color-label">
          <input id="update-color" class="car-color-input" type="color" required>
        </label>
        <button id="update-car" class="update-car__button">Update</button>
      </form>
    </div>

    <div class="race-button-block">
      <button id="race" class="race-button-block__button">Race</button>
      <button id="back" class="race-button-block__button">Reset</button>
      <button id="generate-random-cars" class="race-button-block__button">Generate cars</button>
    </div>
  </div>
`;

export const createCarsSection = async (carsCount: number, page: number) => `
  <div class="cars-headers">
    <h2>Garage (<span id="cars-count"> ${carsCount} </span>) </h2>
    <h3>Page #<span id="page-number"> ${page} </span> </h3>
  </div>
  `;

export const createCar = (color: string) => `
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="70px" height="20px" viewBox="0 0 70 20" version="1.1">
  <g id="surface1">
    <path style=" stroke:none;fill-rule:nonzero;fill:${color};fill-opacity:1;" d="M 26.578125 0.0390625 C 25.269531 0.136719 23.433594 0.425781 21.980469 0.765625 C 20.503906 1.109375 19.566406 1.390625 18.085938 1.953125 C 15.410156 2.960938 13.125 3.667969 11.785156 3.890625 C 11.425781 3.953125 10.304688 4.101562 9.296875 4.222656 C 6.695312 4.539062 5.605469 4.6875 4.269531 4.914062 C 1.503906 5.371094 -0.0820312 5.96875 0.0117188 6.523438 C 0.0234375 6.585938 0.5625 7.269531 1.214844 8.046875 L 2.394531 9.46875 L 2.148438 9.710938 C 1.433594 10.40625 0.871094 11.347656 0.644531 12.238281 C 0.523438 12.707031 0.523438 12.71875 0.617188 13.265625 C 0.847656 14.648438 1.472656 15.527344 2.691406 16.195312 C 3.269531 16.519531 3.789062 16.671875 4.375 16.703125 C 5.007812 16.738281 5.292969 16.671875 5.582031 16.410156 C 5.847656 16.171875 5.960938 15.824219 5.960938 15.273438 C 5.960938 13.589844 6.289062 11.789062 6.832031 10.464844 C 7.871094 7.949219 9.789062 6.308594 12.199219 5.886719 C 12.945312 5.761719 14.160156 5.804688 14.90625 5.996094 C 17.800781 6.722656 19.988281 9.089844 20.78125 12.347656 C 21.058594 13.492188 21.132812 14.140625 21.125 15.582031 L 21.125 16.886719 L 35.476562 16.886719 C 43.363281 16.886719 49.820312 16.875 49.820312 16.859375 C 49.820312 16.847656 49.769531 16.710938 49.710938 16.550781 C 49.535156 16.113281 49.234375 14.996094 49.132812 14.390625 C 49 13.628906 48.996094 12.246094 49.132812 11.632812 C 49.65625 9.183594 51.367188 7.460938 53.945312 6.796875 C 56.699219 6.089844 59.679688 6.78125 61.566406 8.570312 C 63.40625 10.3125 63.980469 12.84375 63.222656 15.839844 L 63.078125 16.421875 L 63.214844 16.535156 C 63.769531 16.988281 64.542969 16.996094 65.445312 16.535156 C 66.769531 15.871094 68.179688 14.277344 69.332031 12.144531 C 69.859375 11.171875 70.03125 10.757812 69.960938 10.640625 C 69.886719 10.515625 68.949219 9.691406 68.511719 9.363281 C 68.179688 9.113281 68.144531 9.074219 68.179688 8.929688 C 68.222656 8.691406 67.960938 8.195312 67.566406 7.808594 C 66.988281 7.21875 65.566406 6.59375 63.769531 6.140625 C 61.308594 5.511719 58.554688 5.234375 54.6875 5.234375 C 51.582031 5.242188 49.699219 5.367188 47.527344 5.722656 L 46.753906 5.851562 L 46.371094 5.613281 C 44.71875 4.589844 42.503906 3.480469 40.46875 2.660156 C 36.804688 1.171875 33.496094 0.3125 30.433594 0.0546875 C 29.835938 0.00390625 27.167969 -0.00390625 26.578125 0.0390625 Z M 31.035156 1.316406 C 33.742188 1.511719 35.75 2.078125 38.269531 3.355469 C 40.511719 4.496094 41.933594 5.449219 43.175781 6.648438 L 43.667969 7.121094 L 36.886719 7.121094 C 29.5625 7.128906 29.710938 7.132812 29.078125 6.835938 C 28.667969 6.644531 28.167969 6.25 27.835938 5.84375 C 27.558594 5.515625 27.492188 5.371094 26.730469 3.386719 C 26.289062 2.238281 25.921875 1.28125 25.921875 1.273438 C 25.921875 1.234375 30.390625 1.273438 31.035156 1.316406 Z M 24.203125 1.5625 C 24.363281 1.667969 25.0625 3.074219 25.320312 3.808594 C 25.597656 4.621094 25.867188 5.703125 25.867188 6.042969 C 25.867188 6.292969 25.839844 6.382812 25.734375 6.507812 C 25.609375 6.65625 25.582031 6.660156 25.117188 6.65625 C 24.769531 6.65625 24.542969 6.621094 24.304688 6.535156 C 23.929688 6.402344 20.503906 4.363281 20.191406 4.089844 C 19.855469 3.800781 19.6875 3.519531 19.6875 3.265625 C 19.6875 2.550781 20.589844 2.066406 22.777344 1.613281 C 23.691406 1.421875 23.976562 1.410156 24.203125 1.5625 Z M 24.203125 1.5625 "/>
    <path style=" stroke:none;fill-rule:nonzero;fill:${color};fill-opacity:1;" d="M 12.445312 7.785156 C 10.859375 8.039062 9.421875 8.898438 8.472656 10.160156 C 8.066406 10.695312 7.597656 11.644531 7.4375 12.253906 C 6.6875 15.132812 8 18.070312 10.636719 19.390625 C 11.597656 19.878906 12.402344 20.039062 13.628906 19.996094 C 14.296875 19.972656 14.570312 19.933594 14.980469 19.824219 C 18.242188 18.914062 20.15625 15.582031 19.300781 12.292969 C 18.851562 10.574219 17.675781 9.15625 16.050781 8.355469 C 15.191406 7.933594 14.5625 7.78125 13.5625 7.757812 C 13.125 7.746094 12.621094 7.757812 12.445312 7.785156 Z M 14.050781 11.15625 C 14.550781 11.289062 14.941406 11.511719 15.328125 11.902344 C 16.347656 12.921875 16.457031 14.429688 15.589844 15.570312 C 15.125 16.179688 14.480469 16.558594 13.703125 16.671875 C 12.355469 16.875 10.964844 15.898438 10.636719 14.523438 C 10.40625 13.542969 10.667969 12.640625 11.398438 11.925781 C 12.003906 11.320312 12.550781 11.085938 13.34375 11.078125 C 13.566406 11.074219 13.886719 11.113281 14.050781 11.15625 Z M 14.050781 11.15625 "/>
    <path style=" stroke:none;fill-rule:nonzero;fill:${color};fill-opacity:1;" d="M 55.644531 7.761719 C 54.828125 7.882812 53.953125 8.179688 53.320312 8.550781 C 49.902344 10.554688 49.234375 15.246094 51.957031 18.121094 C 52.675781 18.875 53.515625 19.40625 54.511719 19.730469 C 55.21875 19.96875 55.769531 20.03125 56.707031 19.996094 C 57.664062 19.960938 58.257812 19.8125 59.089844 19.414062 C 60.84375 18.570312 62.074219 16.941406 62.457031 14.96875 C 62.5625 14.429688 62.546875 13.21875 62.429688 12.664062 C 61.929688 10.28125 60.1875 8.46875 57.835938 7.890625 C 57.40625 7.78125 56.042969 7.703125 55.644531 7.761719 Z M 57.121094 11.15625 C 57.601562 11.28125 57.957031 11.496094 58.378906 11.925781 C 58.828125 12.367188 59.035156 12.757812 59.160156 13.382812 C 59.433594 14.714844 58.601562 16.109375 57.257812 16.5625 C 56.804688 16.714844 56.109375 16.726562 55.644531 16.589844 C 54.375 16.21875 53.507812 14.96875 53.609375 13.679688 C 53.675781 12.933594 53.964844 12.339844 54.519531 11.832031 C 55.074219 11.308594 55.640625 11.085938 56.382812 11.078125 C 56.613281 11.074219 56.941406 11.113281 57.121094 11.15625 Z M 57.121094 11.15625 "/>
  </g>
</svg>
`;

export const createCarBlock = async (name: string, color: string, id: number) => `
  <div class="cars-block" id="${id}">
    <div class="cars-block__info">
      <button class="car-select">Select</button>
      <button class="car-remove">Remove</button>
      <h4 class="car-name">${name}</h4>
    </div>
    <div class="car-controls">
      <button id="start-car-${id}" class="car-controls__start">A</button>
      <button id="stop-car-${id}" class="car-controls__back" disabled>B</button>
    </div>
    <div class="road">
      ${createCar(color)}
    </div>
  </div>
`;

export const createPagitation = (pageName: string, totalPages: number, currentPage: number) => `
  <div class="${pageName}-pagination" >
    <button class="pagination-button ${pageName}__prev" ${currentPage <= 1 || totalPages <= 1 ? 'disabled' : ''}>Prev</button>
    <button class="pagination-button ${pageName}__next" ${totalPages <= 1 || totalPages === currentPage ? 'disabled' : ''}>Next</button>
  </div>
`;