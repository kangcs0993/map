import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk"

export default function useKakaoLoader() {
    useKakaoLoaderOrigin({
        appkey: "bf0d4080b5bc910a7bd4cd96f293eb38",
        libraries: ["clusterer", "drawing", "services"],
    })
}