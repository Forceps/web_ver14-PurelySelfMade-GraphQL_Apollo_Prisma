import { useState, useRef, useEffect } from "react";
import { NOrU } from "../etc/type_convert";

export default (
  targetElement: HTMLElement = document.body,
  reverse = false
): useInfiniteScrollReturn => {
  const [List, setList] = useState([0, 1]);
  const OnlyOnce = useRef(true);
  const Finish = useRef(false);

  const TE_arg_exist = targetElement !== document.body && !NOrU(targetElement);
  const LoadMore = () => {
    if (!Finish.current) {
      const getDocumentHeight = () => {
        if (TE_arg_exist) {
          return Math.max(
            targetElement.scrollHeight,
            targetElement.offsetHeight,
            targetElement.clientHeight
          );
        } else {
          return Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
          );
        }
      };
      const getScrollTop = () => {
        let y_coordinate = 0;
        if (TE_arg_exist) {
          y_coordinate = targetElement.scrollTop;
        } else {
          if (!NOrU(window.pageYOffset)) {
            y_coordinate = window.pageYOffset;
          } else {
            y_coordinate = (
              document.documentElement ||
              document.body.parentNode ||
              document.body
            ).scrollTop;
          }
        }
        return y_coordinate;
      };
      const TriggerJudgment = () => {
        if (reverse) {
          return getScrollTop() < 50;
        } else {
          return getScrollTop() + window.innerHeight > getDocumentHeight() - 50;
        }
      };
      console.log(getScrollTop());
      if (TriggerJudgment()) {
        if (OnlyOnce.current) {
          setList((a) => {
            const newA = a.concat(a[a.length - 1] + 1);
            return newA;
          });
          OnlyOnce.current = false;
        }
      } else {
        OnlyOnce.current = true;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", LoadMore);
    return () => {
      window.removeEventListener("scroll", LoadMore);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { List, Finish };
};

export interface useInfiniteScrollReturn {
  List: number[];
  Finish: React.MutableRefObject<boolean>;
}
