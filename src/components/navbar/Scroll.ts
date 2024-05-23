import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  // Variable para almacenar el color de fondo
  const backgroundColor = writable('white');

  // Función que se ejecutará al hacer scroll
  const handleScroll = () => {
    if (window.scrollY > 50) {
      backgroundColor.set('lightblue');
    } else {
      backgroundColor.set('white');
    }
  };

  // Añadir evento de escucha al montar el componente
  onMount(() => {
    window.addEventListener('scroll', handleScroll);

    // Remover evento de escucha cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });