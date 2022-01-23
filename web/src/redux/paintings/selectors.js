export const getAllPaintings = (state) => state.paintings.paintings;
export const isGetPaintingsLoading = (state) => state.paintings.meta.isGetPaintingsLoading;
export const isGetPaintingsLoaded = (state) => state.paintings.meta.isGetPaintingsLoaded;
export const getPaintingsError = (state) => state.paintings.meta.getPaintingsError;
