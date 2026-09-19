import { useEffect, useState } from "react";

const CLAVE_LOCALSTORAGE = "pokemon-favoritos";

export function useFavoritos() {
  const [favoritos, setFavoritos] = useState<string[]>(() => {
    const guardados = localStorage.getItem(CLAVE_LOCALSTORAGE);
    return guardados ? JSON.parse(guardados) : [];
  });

  useEffect(() => {
    localStorage.setItem(CLAVE_LOCALSTORAGE, JSON.stringify(favoritos));
  }, [favoritos]);

  function esFavorito(nombre: string) {
    return favoritos.includes(nombre);
  }

  function alternarFavorito(nombre: string) {
    setFavoritos((actuales) =>
      actuales.includes(nombre)
        ? actuales.filter((n) => n !== nombre)
        : [...actuales, nombre]
    );
  }

  return { favoritos, esFavorito, alternarFavorito };
}