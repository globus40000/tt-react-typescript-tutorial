import { useRef } from "react";

export const Component = () => {
  // Passing `null` tells React to manage the ref - readonly for us.
  // const ref = useRef<string>(null);

  // Padding something (except `null`) or nothing tells React that
  // we will manage the ref by themselves.
  const ref = useRef<string>("");

  // Why is this not allowed?
  ref.current = "Hello";

  return null;
};
