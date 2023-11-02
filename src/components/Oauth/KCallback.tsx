import { useEffect } from "react";

export default function KCallback() {
  useEffect(() => {
    console.log("kakao callback");
  }, []);

  return null;
}
