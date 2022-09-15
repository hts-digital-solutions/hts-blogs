import Image from "next/image";
import { useEffect, useState } from "react";
import { getMeta } from "../utils/helper_functions";

export default function NextImage({ src, alt = "unknown" }) {
  const [meta, setMeta] = useState({ width: 0, height: 0 });
  useEffect(() => {
    getMeta(src, (width, height) => {
      setMeta({ width, height });
    });
  }, [src, meta]);
  return <Image src={src} alt={alt} width={meta.width} height={meta.height} />;
}
