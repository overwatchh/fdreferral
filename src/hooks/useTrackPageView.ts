import { useEffect } from "react";
import { analytics, logEvent } from "../firebaseConfig";

const useTrackPageView = () => {
  useEffect(() => {
    logEvent(analytics, "page_view", { page: "home" });
  }, []);
};

export default useTrackPageView;
