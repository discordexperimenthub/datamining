(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["55185"],
  {
    619596: function (e, i, s) {
      "use strict";
      let t;
      s.r(i),
        s.d(i, {
          default: function () {
            return n;
          },
        }),
        s("222007"),
        s("511434"),
        s("313619"),
        s("654714"),
        s("287168"),
        s("956660"),
        s("424973"),
        s("70102");
      var n,
        r = s("748820"),
        a = s("551750"),
        l = s("739942");
      let o = Math.min(4, Math.ceil(navigator.hardwareConcurrency / 2)),
        h = "undefined" != typeof OffscreenCanvas,
        d = [],
        I = new Map(),
        u = new Map(),
        c = (0, l.createQueuedAsyncInitializer)(async () => {
          for (let e = 0; e < o; e++) {
            let e = new Worker(new URL(s.p + s.u("91315"), s.b));
            d.push({ worker: e, numActive: 0 });
          }
        }),
        v = (0, l.createQueuedAsyncInitializer)(async () => {
          let e = await s.el("62981").then(s.bind(s, "62981"));
          t = e.default;
        });
      h ? c() : v(),
        (n = class {
          get workerIndex() {
            let e = I.get(this.canvasId);
            if (null == e) {
              let t = u.get(this.assetUrl);
              if (null != t) e = t;
              else {
                var i, s;
                let t =
                  null !==
                    (s =
                      null === (i = d[0]) || void 0 === i
                        ? void 0
                        : i.numActive) && void 0 !== s
                    ? s
                    : 0;
                for (let [i, s] of d.entries())
                  s.numActive <= t && ((t = s.numActive), (e = i));
                u.set(this.assetUrl, e);
              }
              I.set(this.canvasId, e), d[e].numActive++;
            }
            return e;
          }
          get worker() {
            let e = this.workerIndex;
            if (null == d[e])
              throw Error("No worker in pool at index ".concat(e));
            return d[e].worker;
          }
          async drop() {
            var e, i, s, t;
            if ((await this.initializationPromise, h)) {
              null === (e = this.worker) ||
                void 0 === e ||
                e.removeEventListener("message", this.handleMessage),
                null === (i = this.worker) ||
                  void 0 === i ||
                  i.removeEventListener("error", this.handleError),
                null === (s = this.worker) ||
                  void 0 === s ||
                  s.postMessage({
                    canvasId: this.canvasId,
                    type: a.MessageTypes.DROP,
                  });
              let t = I.get(this.canvasId);
              if (null == t)
                throw Error(
                  "No worker index assigned for asset ".concat(this.canvasId)
                );
              I.delete(this.canvasId), d[t].numActive--;
            } else null === (t = this.lottieView) || void 0 === t || t.drop();
            this.observer.disconnect();
          }
          setState(e, i) {
            var s, t;
            (this.shouldAnimate = e),
              this.isInitialized &&
                (h
                  ? null === (s = this.worker) ||
                    void 0 === s ||
                    s.postMessage({
                      canvasId: this.canvasId,
                      type: a.MessageTypes.STATE_CHANGE,
                      shouldAnimate: e,
                      nextFrame: i,
                    })
                  : null === (t = this.lottieView) ||
                    void 0 === t ||
                    t.setState(e, i));
          }
          constructor({
            canvas: e,
            animationId: i,
            assetUrl: s,
            assetData: n,
            onInitialDraw: l,
            onError: o,
          }) {
            (this.isVisible = !1),
              (this.isInitialized = !1),
              (this.shouldAnimate = !1),
              (this.handleVisibilityChange = e => {
                let i = e[e.length - 1].isIntersecting;
                if (i !== this.isVisible) {
                  var s, t;
                  if (((this.isVisible = i), !this.isInitialized)) return;
                  h
                    ? null === (s = this.worker) ||
                      void 0 === s ||
                      s.postMessage({
                        canvasId: this.canvasId,
                        type: a.MessageTypes.VISIBILITY_CHANGE,
                        isVisible: i,
                      })
                    : null === (t = this.lottieView) ||
                      void 0 === t ||
                      t.setVisibility(i);
                }
              }),
              (this.handleMessage = e => {
                var i, s;
                e.data.type === a.MessageTypes.FIRST_DRAW &&
                  (null === (i = this.onInitialDraw) ||
                    void 0 === i ||
                    i.call(this)),
                  e.data.type === a.MessageTypes.ERROR &&
                    (null === (s = this.onError) ||
                      void 0 === s ||
                      s.call(this));
              }),
              (this.handleError = e => {
                var i;
                null === (i = this.onError) || void 0 === i || i.call(this, e);
              }),
              (this.canvasId = (0, r.v4)()),
              (this.assetUrl = s),
              (this.assetData = n),
              (this.onInitialDraw = l),
              (this.onError = o),
              (this.observer = new IntersectionObserver(
                this.handleVisibilityChange
              )),
              this.observer.observe(e),
              h
                ? (this.initializationPromise = c().then(() => {
                    var t, r, l;
                    null === (t = this.worker) ||
                      void 0 === t ||
                      t.addEventListener("message", this.handleMessage),
                      null === (r = this.worker) ||
                        void 0 === r ||
                        r.addEventListener("error", this.handleError);
                    let o = e.transferControlToOffscreen();
                    null === (l = this.worker) ||
                      void 0 === l ||
                      l.postMessage(
                        {
                          type: a.MessageTypes.INITIALIZE,
                          animationId: i,
                          assetUrl: s,
                          assetData: n,
                          canvas: o,
                          canvasId: this.canvasId,
                          isVisible: this.isVisible,
                          shouldAnimate: this.shouldAnimate,
                        },
                        [o]
                      ),
                      (this.isInitialized = !0);
                  }))
                : (this.initializationPromise = v().then(() => {
                    (this.lottieView = new t({
                      canvas: e,
                      id: i,
                      assetUrl: s,
                      assetData: n,
                      isVisible: this.isVisible,
                      shouldAnimate: this.shouldAnimate,
                      onInitialDraw: l,
                      onError: o,
                    })),
                      (this.isInitialized = !0);
                  }));
          }
        });
    },
    551750: function (e, i, s) {
      "use strict";
      var t, n;
      s.r(i),
        s.d(i, {
          MessageTypes: function () {
            return t;
          },
        }),
        ((n = t || (t = {}))[(n.DROP = 0)] = "DROP"),
        (n[(n.INITIALIZE = 1)] = "INITIALIZE"),
        (n[(n.VISIBILITY_CHANGE = 2)] = "VISIBILITY_CHANGE"),
        (n[(n.STATE_CHANGE = 3)] = "STATE_CHANGE"),
        (n[(n.FIRST_DRAW = 4)] = "FIRST_DRAW"),
        (n[(n.ERROR = 5)] = "ERROR");
    },
    739942: function (e, i, s) {
      "use strict";
      var t, n;
      function r(e) {
        let i = 0,
          s = [];
        return async function () {
          if (2 !== i) {
            if (1 === i)
              return new Promise(e => {
                s.push(e);
              });
            for (i = 1, await e(), i = 2; s.length > 0; ) {
              var t;
              null === (t = s.shift()) || void 0 === t || t();
            }
          }
        };
      }
      s.r(i),
        s.d(i, {
          createQueuedAsyncInitializer: function () {
            return r;
          },
        }),
        s("424973"),
        ((n = t || (t = {}))[(n.UNINITIALIZED = 0)] = "UNINITIALIZED"),
        (n[(n.INITIALIZING = 1)] = "INITIALIZING"),
        (n[(n.READY = 2)] = "READY");
    },
  },
]);
//# sourceMappingURL=fd34d5e3b218a9446af1.js.map
