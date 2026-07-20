import { buildSrc } from "@imagekit/javascript";
import { APP_ENV_CONFIG } from "@/configs/env.config";

export const getImgUrl = (
  prod_sku: string,
  prod_id: number,
  fileNum: string | number,
): string => {
  const folder = `/${APP_ENV_CONFIG.PRODUCT_IMAGES_FOLDER}/product_${prod_sku}_${prod_id}`;
  const imgName = `product_${prod_sku}_${prod_id}_${fileNum}`;
  const url = `${folder}/${imgName}`;
  const imgUrl = buildSrc({
    urlEndpoint: APP_ENV_CONFIG.IMGKIT_ENDPOINT,
    src: url,
    // transformation: [{ width: 300, height: 300 }]
  });
  return imgUrl;
};
