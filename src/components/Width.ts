// src/stores/windowStore.ts
import { writable } from 'svelte/store';

function createWindowStore() {
  // Use default value if window is undefined (e.g., during SSR)
  const { subscribe, set } = writable<number>(typeof window !== 'undefined' ? window.innerWidth : 0);

  // Update function to be used only in the browser
  const updateWidth = () => set(window.innerWidth);

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', updateWidth);
  }

  return {
    subscribe,
    destroy: () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', updateWidth);
      }
    }
  };
}

export const windowWidth = createWindowStore();
