const DEV_ENV_DATA = {
    API_BASE_URL: import.meta.env.VITE_API_BASE_URL_DEV,
    PRODUCT_IMAGES_FOLDER: 'products_dev'
}
const PROD_ENV_DATA = {
    API_BASE_URL: import.meta.env.VITE_API_BASE_URL_PROD,
    PRODUCT_IMAGES_FOLDER: 'products_live'
}

export const APP_ENV_CONFIG = import.meta.env.MODE === 'development' ? DEV_ENV_DATA : PROD_ENV_DATA