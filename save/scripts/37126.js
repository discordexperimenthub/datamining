(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37126"],
  {
    403130: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return a;
          },
        }),
        r("222007");
      var n = r("37983"),
        u = r("884691"),
        d = r("190445");
      let s = window.GLOBAL_ENV.PUBLIC_PATH;
      s.endsWith("/") && (s = s.substring(0, s.length - 1)),
        (d.OGVLoader.base = s);
      var a = u.forwardRef(function (e, t) {
        let {
            className: r,
            src: s,
            playing: a,
            preload: f = "",
            onEnded: i,
            onLoadedMetadata: l,
            onError: o,
            muted: c,
            volume: v,
          } = e,
          E = u.useRef(null),
          [p] = u.useState(() => {
            let e = new d.OGVPlayer();
            return (e.preload = f), (e.controls = !1), e;
          });
        return (
          u.useImperativeHandle(t, () => p, [p]),
          u.useEffect(() => {
            let e = E.current;
            if (null != p && null != e)
              return (
                e.appendChild(p),
                () => {
                  e.removeChild(p);
                }
              );
          }, [p]),
          u.useEffect(() => {
            p.src = s;
          }, [p, s]),
          u.useEffect(() => {
            p.preload = f;
          }, [p, f]),
          u.useEffect(() => {
            void 0 !== a &&
              (a
                ? setTimeout(() => {
                    p.play();
                  }, 0)
                : setTimeout(() => {
                    p.pause();
                  }, 0));
          }, [s, p, a]),
          u.useEffect(() => {
            void 0 !== c && (p.muted = c);
          }, [p, c]),
          u.useEffect(() => {
            void 0 !== v && (p.volume = v);
          }, [p, v]),
          u.useEffect(() => {
            if (null != i)
              return (
                p.addEventListener("ended", i),
                () => {
                  p.removeEventListener("ended", i);
                }
              );
          }, [p, i]),
          u.useEffect(() => {
            if (null != l)
              return (
                p.addEventListener("loadedmetadata", l),
                () => {
                  p.removeEventListener("loadedmetadata", l);
                }
              );
          }, [p, l]),
          u.useEffect(() => {
            if (null != o)
              return (
                p.addEventListener("error", o),
                () => {
                  p.removeEventListener("error", o);
                }
              );
          }, [p, o]),
          (0, n.jsx)("div", { ref: E, className: r })
        );
      });
    },
  },
]);
//# sourceMappingURL=68e2c967e297e28bb4d1.js.map
