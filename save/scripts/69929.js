(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["69929"],
  {
    424823: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("632874");
      n.es(a, t);
    },
    912758: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("899576");
      n.es(a, t);
    },
    252744: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        }),
        n("222007");
      var a = n("884691");
      function l(e) {
        let [t, n] = (0, a.useState)(!1),
          l = (0, a.useRef)(e.current);
        return (
          (0, a.useEffect)(() => {
            l.current = e.current;
          }, [e]),
          (0, a.useEffect)(() => {
            let e = l.current;
            if (null == e) return;
            let t = () => n(!0),
              a = () => n(!1);
            return (
              e.addEventListener("mouseenter", t),
              e.addEventListener("mouseleave", a),
              () => {
                e.removeEventListener("mouseenter", t),
                  e.removeEventListener("mouseleave", a);
              }
            );
          }, [l]),
          t
        );
      }
    },
    270161: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CREATE_GUILD_EVENT_CORE_PERMISSIONS: function () {
            return i;
          },
          CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function () {
            return r;
          },
          CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function () {
            return u;
          },
        });
      var a = n("316693"),
        l = n("923510"),
        s = n("49111");
      let i = s.Permissions.VIEW_CHANNEL,
        r = a.default.combine(i, s.Permissions.CONNECT),
        u = a.default.combine(i, l.MODERATE_STAGE_CHANNEL_PERMISSIONS);
    },
    817963: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useManageResourcePermissions: function () {
            return m;
          },
          getManageResourcePermissions: function () {
            return g;
          },
        }),
        n("222007");
      var a = n("884691"),
        l = n("316693"),
        s = n("446674"),
        i = n("813006");
      n("923959");
      var r = n("957255"),
        u = n("697218");
      n("991170");
      var o = n("270161"),
        d = n("843455");
      let c = {
          canCreateExpressions: !1,
          canCreateGuildEvent: !1,
          canManageAllExpressions: !1,
          canManageAllEvents: !1,
          canManageGuildExpression: () => !1,
          canManageGuildEvent: () => !1,
        },
        f = (e, t, n, a) => {
          if (null == e) return !1;
          if (n) return !0;
          if ("creator_id" in e) return a && null != t && e.creator_id === t.id;
          if ("userId" in e) return a && null != t && e.userId === t.id;
          if ("user" in e) {
            var l;
            return (
              a &&
              null != t &&
              (null === (l = e.user) || void 0 === l ? void 0 : l.id) === t.id
            );
          }
          return !1;
        },
        h = e => {
          if (null == e)
            return [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS];
          let t = o.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
          return (
            e.isGuildStageVoice()
              ? (t = o.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS)
              : e.isGuildVoice() &&
                (t = o.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS),
            [
              l.default.combine(t, d.Permissions.CREATE_EVENTS),
              l.default.combine(t, d.Permissions.MANAGE_EVENTS),
            ]
          );
        },
        m = e => {
          let [t, n] =
              e instanceof i.default
                ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS]
                : h(e),
            [l, o, m, g] = (0, s.useStateFromStoresArray)([r.default], () => [
              r.default.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e),
              r.default.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
              r.default.can(t, e),
              r.default.can(n, e),
            ]),
            E = (0, s.useStateFromStores)([u.default], () =>
              u.default.getCurrentUser()
            ),
            S = a.useCallback(e => f(e, E, o, l), [l, o, E]),
            v = a.useCallback(e => f(e, E, g, m), [g, m, E]);
          return null == e
            ? c
            : {
                canCreateExpressions: l,
                canCreateGuildEvent: m,
                canManageAllExpressions: o,
                canManageAllEvents: g,
                canManageGuildExpression: S,
                canManageGuildEvent: v,
              };
        },
        g = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : r.default,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : u.default,
            [a, l] =
              e instanceof i.default
                ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS]
                : h(e),
            s = t.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e),
            o = t.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
            m = t.can(a, e),
            g = t.can(l, e),
            E = n.getCurrentUser();
          return null == e
            ? c
            : {
                canCreateExpressions: s,
                canCreateGuildEvent: m,
                canManageAllExpressions: o,
                canManageAllEvents: g,
                canManageGuildExpression: e => f(e, E, o, s),
                canManageGuildEvent: e => f(e, E, g, m),
              };
        };
    },
    664113: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var a = n("37983"),
        l = n("884691"),
        s = n("77078"),
        i = n("460029"),
        r = n("129722"),
        u = n("723961"),
        o = n("782340"),
        d = n("340853"),
        c = l.memo(function (e) {
          let { sound: t, volume: n, disabled: l = !1, onChange: c } = e,
            { file: f } = (0, r.useAudioTrimmerStore)();
          return (0, a.jsx)(s.FormSection, {
            className: d.section,
            title: o.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_PREVIEW,
            children: (0, a.jsxs)("div", {
              className: d.fakeInput,
              children: [
                null != t &&
                  (0, a.jsx)(u.default, { sound: t, volume: n, disabled: l }),
                null == t &&
                  null != f &&
                  (0, a.jsx)(i.default, {
                    className: d.audioTrimmer,
                    volume: n,
                    disabled: l,
                    onChange: c,
                  }),
              ],
            }),
          });
        });
    },
    460029: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("77078"),
        u = n("132755"),
        o = n("78404"),
        d = n("718517"),
        c = n("812809"),
        f = n("129722"),
        h = n("278175"),
        m = n("859971"),
        g = n("846325"),
        E = n("687702");
      let S = 10 * d.default.Millis.SECOND,
        v = { startPositionMs: 0, endPositionMs: 2 * S, playheadPositionMs: 0 };
      var N = l.memo(function (e) {
        var t;
        let { className: n, volume: s, disabled: S = !1, onChange: N } = e,
          { audio: p } = (0, f.useAudioTrimmerStore)(),
          [_, A] = l.useState(!1),
          [O, D] = l.useState(v),
          { playheadPositionMs: C, endPositionMs: b, startPositionMs: x } = O,
          M = null != p,
          I = b - x,
          T = I > g.MAX_SOUND_LENGTH_SECONDS * d.default.Millis.SECOND;
        l.useEffect(() => {
          null != p &&
            D({
              playheadPositionMs: 0,
              endPositionMs: p.duration * d.default.Millis.SECOND,
              startPositionMs: 0,
            });
        }, [p]);
        let y = l.useCallback(
            e => {
              null != p && (p.pause(), null != e && (p.currentTime = e), A(!1));
            },
            [p]
          ),
          R = l.useCallback(() => {
            if (null != p) {
              if (_) {
                y();
                return;
              }
              C >= b
                ? (p.currentTime = (0, m.toSeconds)(x))
                : (p.currentTime = (0, m.toSeconds)(C)),
                (p.volume = (0, c.default)(s)),
                p.play(),
                A(!0);
            }
          }, [p, b, y, C, _, x, s]),
          L = l.useCallback(
            e => {
              D(e),
                null == N ||
                  N({ startMs: e.startPositionMs, endMs: e.endPositionMs });
            },
            [N]
          ),
          w = l.useCallback(
            e => {
              null != p && (p.currentTime = e);
            },
            [p]
          );
        return (0, a.jsxs)("div", {
          className: i(
            E.container,
            { [E.initialized]: M, [E.disabled]: !M || S },
            n
          ),
          children: [
            (0, a.jsxs)("div", {
              className: E.playButtonContainer,
              children: [
                (0, a.jsx)(r.Clickable, {
                  className: E.playButton,
                  onClick: M ? R : void 0,
                  children: _
                    ? (0, a.jsx)(o.default, { className: E.playButtonIcon })
                    : (0, a.jsx)(u.default, { className: E.playButtonIcon }),
                }),
                (0, a.jsx)("div", {
                  className: E.durationContainer,
                  children: (0, a.jsx)(r.Text, {
                    className: E.duration,
                    variant: "text-xs/normal",
                    color: T ? "text-warning" : "text-positive",
                    children:
                      ((t = I), "".concat((0, m.toSeconds)(t).toFixed(2), "s")),
                  }),
                }),
              ],
            }),
            (0, a.jsx)(h.default, {
              playing: _,
              onPlaybackChange: w,
              onPausePlayback: y,
              onChangePosition: L,
              disabled: S,
            }),
          ],
        });
      });
    },
    89050: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          defaultWaveformConfig: function () {
            return a;
          },
          getWaveformId: function () {
            return l;
          },
          getAudioFileId: function () {
            return s;
          },
          SUPPORTED_AUDIO_FILE_TYPES: function () {
            return i;
          },
        }),
        n("222007");
      let a = {
          waveformBlockWidth: 2,
          waveformBarWidth: 0.5,
          fineTuningDelay: 500,
          fineTuningScale: 10,
          loudnessThreshold: 0.3,
        },
        l = (e, t) => {
          let n = ""
            .concat(e[0], "-")
            .concat(e[e.length - 1], "-")
            .concat(e.byteLength);
          return "".concat(n, "-").concat(JSON.stringify(t));
        },
        s = e =>
          "".concat(e.name, "-").concat(e.size, "-").concat(e.lastModified),
        i = new Set([
          "audio/mpeg",
          "audio/mp3",
          "audio/wav",
          "audio/x-wav",
          "audio/ogg",
          "video/mp4",
        ]);
    },
    129722: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useAudioTrimmerStore: function () {
            return r;
          },
        });
      var a = n("308503"),
        l = n("16470"),
        s = n("859971");
      let i = (0, a.default)(e => ({
        audio: null,
        file: null,
        loading: !1,
        loadAudioFromFile: async t => {
          if ((e({ file: t, audio: null, loading: null != t }), null == t))
            return;
          let n = await (0, s.loadAudioFromFile)(t);
          null != n && e({ audio: n, loading: !1 });
        },
        maxVolume: 1,
        setMaxVolume: t => {
          e({ maxVolume: t });
        },
      }));
      function r() {
        return i(
          e => ({
            audio: e.audio,
            file: e.file,
            loading: e.loading,
            loadAudioFromFile: e.loadAudioFromFile,
            maxVolume: e.maxVolume,
            setMaxVolume: e.setMaxVolume,
          }),
          l.default
        );
      }
    },
    278175: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        }),
        n("222007");
      var a,
        l,
        s = n("37983"),
        i = n("884691"),
        r = n("414456"),
        u = n.n(r),
        o = n("461380"),
        d = n("718517"),
        c = n("129722"),
        f = n("859971"),
        h = n("184692"),
        m = n("89050"),
        g = n("936854");
      ((l = a || (a = {}))[(l.START = 0)] = "START"),
        (l[(l.PLAYHEAD = 1)] = "PLAYHEAD"),
        (l[(l.END = 2)] = "END");
      var E = i.memo(function (e) {
        let {
            playing: t,
            onPausePlayback: n,
            onPlaybackChange: a,
            onChangePosition: l,
            disabled: r = !1,
          } = e,
          E = { ...m.defaultWaveformConfig },
          { audio: S } = (0, c.useAudioTrimmerStore)(),
          v = null != S,
          N = i.useRef(null),
          p = i.useRef(null),
          _ = i.useRef(null),
          [A, O] = i.useState(0),
          [D, C] = i.useState(0),
          [b, x] = i.useState(0),
          [M, I] = i.useState(!1),
          [T, y] = i.useState(!1),
          [R, L] = i.useState(!1),
          [w, U] = i.useState(0),
          [P, j] = i.useState(-1),
          V = i.useMemo(() => w / E.fineTuningScale, [E.fineTuningScale, w]);
        i.useEffect(() => {
          if (null == S) return;
          let e = S.duration * d.default.Millis.SECOND;
          O(0), C(0), x(e), U(e);
        }, [S]);
        let F = i.useCallback(
            (e, t) => {
              if ((n(), 0 === e.button))
                switch (t) {
                  case 0:
                    I(!0);
                    break;
                  case 1:
                    y(!0);
                    break;
                  case 2:
                    L(!0);
                }
            },
            [n]
          ),
          B = i.useCallback(e => {
            switch (e) {
              case 0:
                I(!1);
                break;
              case 1:
                y(!1);
                break;
              case 2:
                L(!1);
            }
            j(-1);
          }, []),
          k = i.useCallback(
            e => {
              if (null == S || !M) return;
              let t = parseInt(e.target.value),
                n = t > b ? b : t;
              a((0, f.toSeconds)(n)), O(n), C(n);
            },
            [S, a, b, M]
          ),
          G = i.useCallback(
            e => {
              if (null == S || !T) return;
              let t = parseInt(e.target.value);
              t < A
                ? (a((0, f.toSeconds)(A)), C(A))
                : t > b
                  ? (a((0, f.toSeconds)(b)), C(b))
                  : (a((0, f.toSeconds)(t)), C(t));
            },
            [S, a, b, T, A]
          ),
          H = i.useCallback(
            e => {
              if (null == S || !R) return;
              let t = parseInt(e.target.value),
                n = t > A ? t : A;
              a((0, f.toSeconds)(A)), C(A), x(n);
            },
            [S, a, R, A]
          );
        return (
          i.useEffect(() => {
            null != l &&
              v &&
              l({
                startPositionMs: A,
                endPositionMs: b,
                playheadPositionMs: D,
              });
          }, [A, b, l, v, D]),
          i.useEffect(() => {
            let e;
            if (null != S)
              return (
                t &&
                  (e = setInterval(() => {
                    S.currentTime < (0, f.toSeconds)(b)
                      ? S.currentTime >= (0, f.toSeconds)(D) &&
                        C(S.currentTime * d.default.Millis.SECOND)
                      : (n((0, f.toSeconds)(A)), C(A));
                  }, 16)),
                () => {
                  clearInterval(e);
                }
              );
          }, [S, b, n, D, t, A]),
          i.useEffect(() => {
            if (E.fineTuningDelay <= 0) return;
            let e = setTimeout(() => {
              M && A == A && -1 === P
                ? j(A)
                : R && b == b && -1 === P
                  ? j(b)
                  : T && D == D && -1 === P && j(D);
            }, E.fineTuningDelay);
            return () => {
              clearTimeout(e);
            };
          }, [E.fineTuningDelay, R, b, P, T, D, M, A]),
          (0, s.jsxs)("div", {
            className: u(g.timeline, { [g.initialized]: v }),
            children: [
              (0, s.jsxs)("div", {
                className: g.rangeHandleContainer,
                children: [
                  (0, s.jsxs)("div", {
                    className: g.rangeHandleFrame,
                    children: [
                      (0, s.jsx)("input", {
                        ref: N,
                        className: u(g.rangeHandle, g.rangeHandleStart),
                        type: "range",
                        min: (0, f.getMinValue)(P, V, w),
                        max: (0, f.getMaxValue)(P, V, w),
                        value: A,
                        onChange: k,
                        onMouseDown: e => F(e, 0),
                        onMouseUp: () => B(0),
                        disabled: !v || r,
                      }),
                      (0, s.jsx)("input", {
                        ref: _,
                        className: u(g.rangeHandle, g.rangeHandleEnd),
                        type: "range",
                        min: (0, f.getMinValue)(P, V, w),
                        max: (0, f.getMaxValue)(P, V, w),
                        value: b,
                        onChange: H,
                        onMouseDown: e => F(e, 2),
                        onMouseUp: () => B(2),
                        disabled: !v || r,
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: g.handlePlayheadTrack,
                    children: (0, s.jsx)("input", {
                      ref: p,
                      className: u(g.rangeHandle, g.rangeHandlePlayhead),
                      type: "range",
                      min: (0, f.getMinValue)(P, V, w),
                      max: (0, f.getMaxValue)(P, V, w),
                      value: D,
                      onChange: G,
                      onMouseDown: e => F(e, 1),
                      onMouseUp: () => B(1),
                      disabled: !v || r,
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: g.handleContainer,
                children: [
                  (0, s.jsxs)("div", {
                    className: u(g.handleFrame, {
                      [g.startDragging]: M,
                      [g.endDragging]: R,
                    }),
                    style: {
                      left: "".concat(
                        (0, f.getStartHandleValue)(A, P, V, w),
                        "%"
                      ),
                      right: "".concat(
                        (0, f.getEndHandleValue)(b, P, V, w),
                        "%"
                      ),
                    },
                    children: [
                      (0, s.jsx)("div", {
                        className: u(g.handleIconFrame, g.handleIconFrameStart),
                        children: (0, s.jsx)("div", {
                          className: u(g.handleIconContainer, g.start),
                          children: (0, s.jsx)(o.default, {
                            direction: o.default.Directions.RIGHT,
                            className: g.handleIcon,
                            width: 16,
                            height: 16,
                          }),
                        }),
                      }),
                      (0, s.jsx)("div", {
                        className: u(g.handleIconFrame, g.handleIconFrameEnd),
                        children: (0, s.jsx)("div", {
                          className: u(g.handleIconContainer, g.end),
                          children: (0, s.jsx)(o.default, {
                            direction: o.default.Directions.LEFT,
                            className: g.handleIcon,
                            width: 16,
                            height: 16,
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: g.playheadTrack,
                    children: (0, s.jsx)("div", {
                      className: u(g.playhead, {
                        [g.dragging]: T || M || R || t,
                      }),
                      style: {
                        left: "".concat(
                          (0, f.getStartHandleValue)(D, P, V, w),
                          "%"
                        ),
                      },
                    }),
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: g.waveformContainer,
                children: (0, s.jsx)(h.default, {
                  fineTuning: P,
                  fineTuningResolution: V,
                  duration: w,
                }),
              }),
            ],
          })
        );
      });
    },
    859971: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getMinValue: function () {
            return s;
          },
          toSeconds: function () {
            return i;
          },
          getMaxValue: function () {
            return r;
          },
          getStartHandleValue: function () {
            return u;
          },
          getEndHandleValue: function () {
            return o;
          },
          loadAudioFromFile: function () {
            return d;
          },
          loadAudioFileFromUrl: function () {
            return c;
          },
        }),
        n("70102"),
        n("511434"),
        n("313619"),
        n("654714"),
        n("287168"),
        n("956660"),
        n("222007");
      var a = n("89050"),
        l = n("782340");
      let s = (e, t, n) => (-1 === e ? 0 : e - (t * e) / n);
      function i(e) {
        return e / 1e3;
      }
      let r = (e, t, n) => (-1 === e ? n : e + (t * (n - e)) / n),
        u = (e, t, n, a) => {
          let l = 0;
          return (l =
            t >= 0 && n > 0
              ? ((e - (t - (n * t) / a)) * 100) / n
              : (100 * e) / a).toFixed(4);
        },
        o = (e, t, n, a) => {
          let l = 0;
          return (l =
            t >= 0 && n > 0
              ? -((e - (t + (n * (a - t)) / a)) * 100) / n
              : (-100 * e) / a + 100).toFixed(4);
        };
      async function d(e) {
        var t;
        if (
          !(e.type.startsWith("audio") || e.type.startsWith("video")) ||
          !a.SUPPORTED_AUDIO_FILE_TYPES.has(e.type)
        )
          throw Error(
            l.default.Messages.SOUNDBOARD_ERROR_INVALID_FILE_TYPE.format({
              fileType: e.type,
            })
          );
        let n = URL.createObjectURL(e),
          s = new Audio(n);
        return (
          await ((t = s),
          new Promise(e => {
            let n = () => {
              e(), t.removeEventListener("canplaythrough", n);
            };
            t.addEventListener("canplaythrough", n), t.load();
          })),
          s
        );
      }
      async function c(e, t) {
        let n = await fetch(e),
          a = await n.blob();
        return new File([a], t, { type: "audio/mp3" });
      }
    },
    102432: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getDataUrlFromFile: function () {
            return c;
          },
          uploadFileReadPromise: function () {
            return f;
          },
          trimAndEncodeAudio: function () {
            return m;
          },
        }),
        n("70102"),
        n("424973"),
        n("370692"),
        n("477657"),
        n("811875"),
        n("90301"),
        n("652153"),
        n("28797"),
        n("817884"),
        n("597349"),
        n("667536"),
        n("690341"),
        n("311790");
      var a = n("627445"),
        l = n.n(a),
        s = n("804998"),
        i = n("718517"),
        r = n("305122"),
        u = n("108391");
      let o = new AudioContext({
        sampleRate: Math.min((0, s.getOrCreateAudioContext)().sampleRate, 48e3),
      });
      async function d(e) {
        let t = await e.arrayBuffer(),
          n = t instanceof ArrayBuffer;
        if (!n) throw Error("Unexpected file type");
        return o.decodeAudioData(t);
      }
      async function c(e) {
        var t;
        let n = await ((t = t => {
          t.readAsDataURL(e);
        }),
        new Promise((e, n) => {
          let a = new FileReader(),
            l = () => {
              a.removeEventListener("load", l),
                a.removeEventListener("error", n),
                e(a.result);
            };
          a.addEventListener("load", l), a.addEventListener("error", n), t(a);
        }));
        if ("string" != typeof n) throw Error("Unexpected file type");
        return n;
      }
      async function f(e) {
        let {
          readPromise: t,
          guildId: n,
          name: a,
          volume: l,
          emojiId: s,
          emojiName: i,
        } = e;
        return (0, r.uploadSound)({
          guildId: n,
          name: a,
          sound: await t,
          volume: l,
          emojiId: s,
          emojiName: i,
        });
      }
      async function h(e) {
        let t = [],
          n = (function (e) {
            let { numberOfChannels: t } = e,
              n = [];
            for (let a = 0; a < t; a++) n.push(e.getChannelData(a));
            return n;
          })(e),
          a = (function (e) {
            if (1 === e.length) return e[0];
            if (2 === e.length) {
              let t = e[0],
                n = e[1],
                a = [];
              for (let e = 0; e < t.length; e++) a.push(t[e]), a.push(n[e]);
              let l = new Float32Array(a.length);
              return l.set(a), l;
            }
            throw Error("Only handles up to 2 channels");
          })(n),
          s = new AudioData({
            format: "f32",
            sampleRate: e.sampleRate,
            numberOfFrames: e.length,
            numberOfChannels: e.numberOfChannels,
            timestamp: 1e6 * e.duration,
            data: a,
          }),
          i = new AudioEncoder({
            output: function (n) {
              l(null != n.duration, "Chunk duration must not be null");
              let a = (n.duration / 1e6) * e.sampleRate,
                s = new Uint8Array(n.byteLength);
              n.copyTo(s), t.push({ buffer: s, numSamples: a });
            },
            error: e => {
              throw Error("Audio encoding error: ".concat(e.message));
            },
          });
        i.configure({
          codec: "opus",
          sampleRate: e.sampleRate,
          numberOfChannels: e.numberOfChannels,
        }),
          i.encode(s),
          await i.flush();
        let r = (0, u.default)(t, {
          channelCount: e.numberOfChannels,
          inputSampleRate: e.sampleRate,
          outputGain: 0,
          channelMappingFamily: 0,
        });
        return new Blob([r], { type: "audio/ogg" });
      }
      async function m(e, t) {
        let n = await d(e),
          a = (function (e, t) {
            let { startMs: n, endMs: a } = t,
              { sampleRate: l, numberOfChannels: s, duration: r } = e,
              u = r * i.default.Millis.SECOND,
              d = Math.min(a, u);
            if (0 === n && d === u) return e;
            let c = Math.floor((n / u) * e.length),
              f = Math.floor((d / u) * e.length),
              h = o.createBuffer(s, f - c, l);
            for (let t = 0; t < s; t++) {
              let n = h.getChannelData(t),
                a = e.getChannelData(t),
                l = 0;
              for (let e = c; e <= f; e++) (n[l] = a[e]), l++;
            }
            return h;
          })(n, t),
          l = await h(a);
        return new File([l], "sound.ogg", { type: "audio/ogg" });
      }
    },
    184692: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983"),
        l = n("884691"),
        s = n("129722"),
        i = n("477633"),
        r = l.memo(function (e) {
          let { fineTuning: t, fineTuningResolution: n, duration: l } = e,
            { file: r, audio: u } = (0, s.useAudioTrimmerStore)();
          return (0, a.jsx)(i.default, {
            file: r,
            audio: u,
            waveformSettings: {
              fineTuning: t,
              fineTuningResolution: n,
              duration: l,
            },
          });
        });
    },
    477633: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("917351"),
        u = n("819855"),
        o = n("77078"),
        d = n("841098"),
        c = n("449918"),
        f = n("302185"),
        h = n("89050"),
        m = n("843455"),
        g = n("584150"),
        E = l.memo(function (e) {
          let { file: t, audio: n, className: s, waveformSettings: E } = e,
            [S, v] = l.useState({ width: 0, height: 0 }),
            N = l.useRef(null),
            p = l.useMemo(() => {
              var e;
              let t =
                null !== (e = null == n ? void 0 : n.duration) && void 0 !== e
                  ? e
                  : 1;
              return {
                fineTuning: -1,
                fineTuningResolution:
                  t / h.defaultWaveformConfig.fineTuningScale,
                duration: t,
                ...(null != E ? E : {}),
              };
            }, [n, E]),
            _ = (0, f.useAudioBufferData)(t),
            A = (0, f.useAudioWaveformData)(_, N.current, p),
            O = (0, d.default)(),
            D = (0, c.useColorValue)(
              (0, u.isThemeDark)(O) ? m.Color.PRIMARY_300 : m.Color.PRIMARY_700
            ),
            C = null == _ || null == A,
            b = 0 === S.width || 0 === S.height,
            x = (b || C) && null != t,
            M = l.useCallback(() => {
              null != N.current &&
                v({
                  width: N.current.offsetWidth,
                  height: N.current.offsetHeight,
                });
            }, []);
          return (
            l.useEffect(() => {
              if (null != N.current) {
                let e = new ResizeObserver((0, r.debounce)(M, 50));
                return (
                  e.observe(N.current),
                  () => {
                    e.disconnect();
                  }
                );
              }
            }, [M]),
            l.useEffect(() => {
              if (null == N.current) return;
              let e = N.current,
                t = e.getContext("2d");
              if (null == t) return;
              let { width: n, height: a } = e;
              if (
                0 !== S.width &&
                0 !== S.height &&
                null != A &&
                A.length > 0
              ) {
                let e = n / A.length,
                  l = -(e * (h.defaultWaveformConfig.waveformBarWidth - 1));
                t.clearRect(0, 0, n, a), (t.fillStyle = D.hex);
                for (let n = 0; n < A.length; n++) {
                  let s = A[n] * a,
                    i = n * e + l,
                    r = a / 2 - s / 2;
                  t.fillRect(i, r, e - l, s);
                }
              }
            }, [D, S, O, A]),
            (0, a.jsxs)("div", {
              className: i(g.container, s),
              children: [
                (0, a.jsx)("canvas", {
                  className: g.waveformCanvas,
                  ref: N,
                  width: 4 * S.width,
                  height: 4 * S.height,
                }),
                x &&
                  (0, a.jsx)("div", {
                    className: g.loading,
                    children: (0, a.jsx)(o.Spinner, {
                      type: o.SpinnerTypes.SPINNING_CIRCLE,
                    }),
                  }),
              ],
            })
          );
        });
    },
    302185: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useAudioBufferData: function () {
            return c;
          },
          useAudioWaveformData: function () {
            return h;
          },
        }),
        n("511434"),
        n("313619"),
        n("654714"),
        n("287168"),
        n("956660"),
        n("222007");
      var a = n("884691"),
        l = n("748820"),
        s = n("804998"),
        i = n("129722"),
        r = n("89050");
      let u = new Worker(new URL(n.p + n.u("21401"), n.b)),
        o = (0, s.getOrCreateAudioContext)();
      async function d(e) {
        let t = await e.arrayBuffer(),
          n = await o.decodeAudioData(t);
        return n.getChannelData(0);
      }
      function c(e) {
        let [t, n] = a.useState(null),
          [l, s] = a.useState(null);
        return (
          a.useEffect(() => {
            if (null == e) return;
            let t = (0, r.getAudioFileId)(e);
            t !== l && (s(t), n(null), d(e).then(n));
          }, [l, e]),
          t
        );
      }
      let f = { ...r.defaultWaveformConfig };
      function h(e, t, n) {
        let [s, o] = a.useState(null),
          [d, c] = a.useState(null),
          [h, m] = a.useState(1),
          { setMaxVolume: g } = (0, i.useAudioTrimmerStore)(),
          E = a.useCallback(
            (e, t) => {
              var a, s, i, r, o;
              c(null),
                ((a = e),
                (s = t.offsetWidth),
                (i = n),
                (r = f),
                (o = m),
                new Promise(e => {
                  let t = (0, l.v4)(),
                    n = a => {
                      let {
                        data: {
                          waveform: l,
                          id: s,
                          normalizedVolumeMultipler: i,
                        },
                      } = a;
                      t === s && (e(l), o(i)),
                        null == u || u.removeEventListener("message", n);
                    };
                  null == u || u.addEventListener("message", n),
                    null == u ||
                      u.postMessage({
                        id: t,
                        options: i,
                        config: r,
                        width: s,
                        rawBufferData: a,
                      });
                })).then(c);
            },
            [n]
          );
        return (
          a.useEffect(() => {
            if (null == e || null == t) return;
            let a = (0, r.getWaveformId)(e, n);
            s !== a && (o(a), E(e, t));
          }, [e, E, t, n, s]),
          a.useEffect(() => {
            g(h);
          }, [h, g]),
          d
        );
      }
    },
    723961: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return g;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        s = n("77078"),
        i = n("132755"),
        r = n("78404"),
        u = n("520497"),
        o = n("812809"),
        d = n("129722"),
        c = n("859971"),
        f = n("477633"),
        h = n("782340"),
        m = n("610078"),
        g = l.memo(function (e) {
          let { sound: t, volume: n, disabled: g } = e,
            [E, S] = l.useState(!1),
            v = l.useRef(null),
            {
              file: N,
              audio: p,
              loadAudioFromFile: _,
            } = (0, d.useAudioTrimmerStore)(),
            A = l.useMemo(() => (0, u.default)(t.soundId), [t]);
          return (
            l.useEffect(() => {
              null == v.current &&
                (v.current = (0, c.loadAudioFileFromUrl)(A, t.name).then(_));
            }, [A, _, t.name]),
            (0, a.jsxs)("div", {
              className: m.previewContainer,
              children: [
                (0, a.jsx)(s.Clickable, {
                  onClick: g
                    ? void 0
                    : function () {
                        null != p &&
                          (p.paused
                            ? ((p.volume = (0, o.default)(n)),
                              (p.currentTime = 0),
                              p.play(),
                              S(!0),
                              p.addEventListener("ended", () => S(!1), {
                                once: !0,
                              }))
                            : (p.pause(), S(!1)));
                      },
                  className: m.playButton,
                  "aria-label": E
                    ? h.default.Messages.STOP
                    : h.default.Messages.PLAY,
                  children: E
                    ? (0, a.jsx)(r.default, { className: m.playIcon })
                    : (0, a.jsx)(i.default, { className: m.playIcon }),
                }),
                (0, a.jsx)("div", {
                  className: m.waveformContainer,
                  children: (0, a.jsx)(f.default, {
                    className: m.waveform,
                    file: N,
                    audio: p,
                  }),
                }),
              ],
            })
          );
        });
    },
    108391: function (e, t, n) {
      "use strict";
      var a, l, s, i;
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        }),
        n("311790"),
        n("477657"),
        n("811875"),
        n("90301"),
        n("652153"),
        n("28797"),
        n("817884"),
        n("597349"),
        n("667536"),
        n("690341"),
        n("70102"),
        n("222007"),
        n("808653"),
        n("990131"),
        n("424973");
      ((s = a || (a = {}))[(s.NONE = 0)] = "NONE"),
        (s[(s.CONTINUATION = 1)] = "CONTINUATION"),
        (s[(s.BEGINNING_OF_STREAM = 2)] = "BEGINNING_OF_STREAM"),
        (s[(s.END_OF_STREAM = 4)] = "END_OF_STREAM");
      class r {
        appendBytes(e) {
          if (this._offset + e.length > this._buffer.length) {
            let t = this._offset + e.length,
              n = Math.pow(
                2,
                Math.ceil(Math.log2(Math.max(2 * this._buffer.length, t)))
              ),
              a = new Uint8Array(n);
            a.set(this._buffer.subarray(0, this._offset)), (this._buffer = a);
          }
          this._buffer.set(e, this._offset), (this._offset += e.length);
        }
        addPage(e) {
          if (e.segments.length > 255)
            throw Error(
              "Too many segments: "
                .concat(e.segments.length, " exceeds limit of ")
                .concat(255)
            );
          for (let [t, n] of e.segments.entries())
            if (n.length > 255)
              throw Error(
                "Segment at index "
                  .concat(t, " too large (length ")
                  .concat(n.length, " exceeds ")
                  .concat(255, ")")
              );
          let t = e.segments.reduce((e, t) => e + t.length, 0),
            n = 27 + e.segments.length + t;
          if (n > 65307)
            throw Error(
              "Page too large (size ".concat(n, " exceeds ").concat(65307, ")")
            );
          let a = this._offset,
            l = 0;
          switch (e.pageType) {
            case 1:
              l = 1;
              break;
            case 2:
              l = 2;
              break;
            case 4:
              l = 4;
          }
          this.appendBytes([
            79,
            103,
            103,
            83,
            0,
            l,
            255 & e.granulePosition,
            (e.granulePosition >> 8) & 255,
            (e.granulePosition >> 16) & 255,
            (e.granulePosition >> 24) & 255,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            255 & this._pageSequenceNumber,
            (this._pageSequenceNumber >> 8) & 255,
            (this._pageSequenceNumber >> 16) & 255,
            (this._pageSequenceNumber >> 24) & 255,
          ]);
          let s = this._offset;
          for (let t of (this.appendBytes([0, 0, 0, 0, e.segments.length]),
          this.appendBytes(e.segments.map(e => e.length)),
          e.segments))
            this.appendBytes(t);
          let i = (function (e) {
            return (
              e.reduce((e, t) => ((e << 8) >>> 0) ^ o[(e >>> 24) ^ t], 0) >>> 0
            );
          })(this._buffer.subarray(a, this._offset));
          this._buffer.set(
            [255 & i, (i >> 8) & 255, (i >> 16) & 255, (i >> 24) & 255],
            s
          ),
            this._pageSequenceNumber++;
        }
        finalize(e) {
          this.addPage({ pageType: 4, granulePosition: e, segments: [] });
          let t = this._buffer,
            n = this._offset;
          return (
            (this._buffer = new Uint8Array(4096)),
            (this._offset = 0),
            (this._pageSequenceNumber = 0),
            t.subarray(0, n)
          );
        }
        constructor() {
          (this._buffer = new Uint8Array(4096)),
            (this._pageSequenceNumber = 0),
            (this._offset = 0);
        }
      }
      function u(e, t) {
        let n = new Uint8Array([
            79,
            112,
            117,
            115,
            72,
            101,
            97,
            100,
            1,
            t.channelCount,
            0,
            0,
            255 & t.inputSampleRate,
            (t.inputSampleRate >> 8) & 255,
            (t.inputSampleRate >> 16) & 255,
            (t.inputSampleRate >> 24) & 255,
            255 & t.outputGain,
            (t.outputGain >> 8) & 255,
            t.channelMappingFamily,
          ]),
          a = new Uint8Array([
            79, 112, 117, 115, 84, 97, 103, 115, 0, 0, 0, 0, 0, 0, 0, 0,
          ]),
          l = new r();
        l.addPage({ pageType: 2, granulePosition: 0, segments: [n] });
        let s = 0;
        for (let t of (l.addPage({
          pageType: 0,
          granulePosition: s,
          segments: [a],
        }),
        e)) {
          let e = (function (e) {
            let t = Math.floor(e.length / 255),
              n = [];
            for (let a = 0; a <= t; a++) {
              let l = 0 === a ? 0 : 255 * a,
                s = a === t ? e.length : (a + 1) * 255;
              n.push(e.slice(l, s));
            }
            return n;
          })(t.buffer);
          (s += t.numSamples),
            l.addPage({ pageType: 0, granulePosition: s, segments: e });
        }
        return l.finalize(s);
      }
      (i = l || (l = {}))[(i.ZERO = 0)] = "ZERO";
      let o = (function () {
        let e = new Uint32Array(256);
        for (let t = 256; t > 0; t--) {
          let n = t << 24;
          for (let e = 8; e > 0; e--)
            n = 2147483648 & n ? 79764919 ^ (n << 1) : n << 1;
          e[t] = n;
        }
        return e;
      })();
    },
    823749: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return b;
          },
        }),
        n("222007"),
        n("70102");
      var a,
        l,
        s = n("37983"),
        i = n("884691"),
        r = n("414456"),
        u = n.n(r),
        o = n("627445"),
        d = n.n(o),
        c = n("77078"),
        f = n("599417"),
        h = n("208548"),
        m = n("104945"),
        g = n("599110"),
        E = n("305122"),
        S = n("664113"),
        v = n("129722"),
        N = n("102432"),
        p = n("876189"),
        _ = n("846325"),
        A = n("49111"),
        O = n("782340"),
        D = n("509252");
      ((l = a || (a = {})).READY = "ready"),
        (l.ENCODING_FAILED = "encoding-failed"),
        (l.ENCODING = "encoding"),
        (l.UPLOADING = "uploading");
      let C = [
        { name: "audio", extensions: ["mp3", "wav", "ogg", "x-wav", "mp4"] },
      ];
      function b(e) {
        var t, n, a, l;
        let {
            guildId: r,
            sourceFile: o,
            existingSound: b,
            onClose: x,
            transitionState: M,
            showGuildPicker: I = !1,
          } = e,
          [T, y] = i.useState(
            null !==
              (n =
                null !== (t = null == o ? void 0 : o.name) && void 0 !== t
                  ? t
                  : null == b
                    ? void 0
                    : b.name) && void 0 !== n
              ? n
              : ""
          ),
          [R, L] = i.useState(
            null !== (a = null == b ? void 0 : b.volume) && void 0 !== a ? a : 1
          ),
          [w, U] = i.useState(null == b ? void 0 : b.emojiId),
          [P, j] = i.useState(null == b ? void 0 : b.emojiName),
          {
            file: V,
            loadAudioFromFile: F,
            maxVolume: B,
            setMaxVolume: k,
          } = (0, v.useAudioTrimmerStore)(),
          [G, H] = i.useState(!1),
          [W, z] = i.useState(null),
          [Y, q] = i.useState(null),
          [X, Z] = i.useState("ready"),
          [J, K] = i.useState(r);
        async function Q(e) {
          try {
            await F(null != e ? e : null), Z("ready"), z(null);
          } catch (e) {
            $(e);
          }
        }
        function $(e) {
          if (e instanceof f.default) z(e);
          else if (e instanceof Error) {
            let t = { status: 500, body: { message: e.message } };
            z(new f.default(t));
          } else z(new f.default(e));
        }
        i.useEffect(() => {
          (null == o ? void 0 : o.file) != null && e(o.file);
          async function e(e) {
            try {
              await F(e), Z("ready"), z(null);
            } catch (e) {
              $(e);
            }
          }
        }, [null == o ? void 0 : o.file, F]);
        let ee = (function (e) {
            switch (e) {
              case "encoding":
                return O.default.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_ENCODING;
              case "encoding-failed":
                return O.default.Messages
                  .SOUNDBOARD_MODAL_AUDIO_STATE_ENCODING_FAILED;
              case "uploading":
                return O.default.Messages
                  .SOUNDBOARD_MODAL_AUDIO_STATE_UPLOADING;
            }
            return null;
          })(X),
          et = "uploading" === X || "encoding" === X,
          en = null != b,
          ea =
            T.length >= 2 &&
            (en || null != V) &&
            null != J &&
            (function (e) {
              if (null == e) return !0;
              let t = (e.endMs - e.startMs) / 1e3;
              return t > 0 && t <= _.MAX_SOUND_LENGTH_SECONDS;
            })(Y),
          el = i.useCallback(async (e, t) => {
            Z("encoding");
            try {
              let n = await (0, N.trimAndEncodeAudio)(e, t);
              return Z("ready"), n;
            } catch (e) {
              throw (Z("encoding-failed"), e);
            }
          }, []),
          es = i.useCallback(async () => {
            if (null == V) return;
            d(null != J, "Cannot submit soundboard sound with no guildId");
            let e = V;
            if (null != Y) {
              let t = await el(V, Y);
              if (null == t) return;
              e = t;
            }
            let t = (0, N.getDataUrlFromFile)(e);
            Z("uploading");
            try {
              await (0, N.uploadFileReadPromise)({
                readPromise: t,
                guildId: J,
                name: T,
                volume: R,
                emojiId: w,
                emojiName: P,
              }),
                Z("ready");
            } catch (e) {
              throw new f.default(e);
            }
          }, [V, J, T, el, Y, R, w, P]),
          ei = i.useCallback(async () => {
            d(null != J, "Cannot submit soundboard sound with no guildId"),
              H(!0),
              z(null);
            try {
              en
                ? await (0, E.updateSound)({
                    guildId: J,
                    soundId: b.soundId,
                    name: T,
                    volume: R,
                    emojiId: w,
                    emojiName: P,
                  })
                : await es(),
                x();
            } catch (e) {
              $(e);
            } finally {
              Z("ready"), H(!1), L(1), k(1);
            }
          }, [en, x, J, b, T, R, w, P, es, k]);
        i.useEffect(() => {
          F(null),
            g.default.track(A.AnalyticEvents.OPEN_MODAL, {
              type: "Soundboard Upload Sound",
              guild_id: J,
            });
        }, []),
          i.useEffect(() => {
            L(Math.min(R, B));
          }, [R, L, B]);
        let er = (0, s.jsx)(h.default, {
          guildId: J,
          emojiId: w,
          emojiName: P,
          setEmojiId: U,
          setEmojiName: j,
          error: null == W ? void 0 : W.getFirstFieldErrorMessage("emoji"),
          isRequiredField: !1,
        });
        return (0, s.jsxs)(c.ModalRoot, {
          transitionState: M,
          children: [
            (0, s.jsx)(c.ModalCloseButton, {
              onClick: x,
              className: D.modalClose,
            }),
            (0, s.jsx)(c.ModalHeader, {
              className: D.headerContainer,
              separator: !1,
              children: (0, s.jsx)(c.Heading, {
                className: D.header,
                variant: "heading-xl/extrabold",
                children: en
                  ? O.default.Messages.SOUNDBOARD_SOUND_UPDATE_MODAL_HEADER
                  : O.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_HEADER,
              }),
            }),
            (0, s.jsxs)(c.ModalContent, {
              className: D.content,
              children: [
                null != W &&
                  !W.hasFieldErrors() &&
                  (0, s.jsx)(c.FormErrorBlock, {
                    className: D.section,
                    children: W.message,
                  }),
                I
                  ? (0, s.jsx)(c.FormItem, {
                      required: !0,
                      className: D.section,
                      title:
                        O.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT,
                      children: (0, s.jsx)(p.default, {
                        value: J,
                        onChange: K,
                      }),
                    })
                  : null,
                (en || null != V) &&
                  (0, s.jsx)(S.default, {
                    sound: b,
                    volume: R,
                    disabled: et,
                    onChange: q,
                  }),
                en || null != o
                  ? null
                  : (0, s.jsx)(c.FormItem, {
                      required: !0,
                      error:
                        null == W
                          ? void 0
                          : W.getFirstFieldErrorMessage("sound"),
                      className: D.section,
                      title:
                        O.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_FILE,
                      children: (0, s.jsx)(m.default, {
                        filename:
                          null !== (l = null == V ? void 0 : V.name) &&
                          void 0 !== l
                            ? l
                            : "",
                        buttonText:
                          O.default.Messages
                            .SOUNDBOARD_SOUND_UPLOAD_MODAL_BROWSE,
                        placeholder:
                          O.default.Messages
                            .SOUNDBOARD_SOUND_UPLOAD_MODAL_INPUT_PLACEHOLDER,
                        onFileSelect: Q,
                        filters: C,
                      }),
                    }),
                (0, s.jsxs)("div", {
                  className: D.multiInput,
                  children: [
                    (0, s.jsx)(c.FormItem, {
                      required: !0,
                      error:
                        null == W
                          ? void 0
                          : W.getFirstFieldErrorMessage("name"),
                      className: u(D.section, D.halfInput),
                      title:
                        O.default.Messages
                          .SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,
                      children: (0, s.jsx)(c.TextInput, {
                        placeholder:
                          O.default.Messages
                            .SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,
                        value: T,
                        onChange: y,
                        maxLength: _.MAX_LENGTH_SOUND_NAME,
                      }),
                    }),
                    er,
                  ],
                }),
                (0, s.jsx)(c.FormItem, {
                  error:
                    null == W ? void 0 : W.getFirstFieldErrorMessage("volume"),
                  className: D.section,
                  title:
                    O.default.Messages
                      .SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_VOLUME,
                  children: (0, s.jsx)(c.Slider, {
                    initialValue: R,
                    onValueChange: e => L(e),
                    minValue: 0,
                    maxValue: B,
                  }),
                }),
              ],
            }),
            (0, s.jsxs)(c.ModalFooter, {
              children: [
                (0, s.jsx)(c.Button, {
                  disabled: !ea,
                  submitting: G,
                  size: c.Button.Sizes.SMALL,
                  onClick: ei,
                  children: en
                    ? O.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SAVE
                    : O.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_UPLOAD,
                }),
                (0, s.jsx)(c.Button, {
                  disabled: G,
                  onClick: x,
                  size: c.Button.Sizes.SMALL,
                  look: c.Button.Looks.LINK,
                  color: c.Button.Colors.PRIMARY,
                  children:
                    O.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_CANCEL,
                }),
                null != ee &&
                  (0, s.jsx)("div", {
                    className: D.soundStateHint,
                    children: (0, s.jsx)(c.Text, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: ee,
                    }),
                  }),
              ],
            }),
          ],
        });
      }
    },
    876189: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("446674"),
        u = n("77078"),
        o = n("817963"),
        d = n("305961"),
        c = n("957255"),
        f = n("677099"),
        h = n("697218"),
        m = n("476263"),
        g = n("368121"),
        E = n("427459"),
        S = n("299039"),
        v = n("305122"),
        N = n("235004"),
        p = n("846325"),
        _ = n("49111"),
        A = n("782340"),
        O = n("216445");
      function D(e) {
        let { availableSlots: t, className: n } = e;
        return (0, a.jsxs)(u.Text, {
          className: i(O.suffixNode, n),
          variant: "text-sm/medium",
          color: "text-primary",
          children: [
            (0, a.jsx)(g.default, { className: O.speakerIcon }),
            A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_AVAILABLE_COUNT.format(
              { slots: t }
            ),
          ],
        });
      }
      function C(e) {
        let { value: t, className: n, onChange: s } = e,
          g = (0, r.useStateFromStoresObject)(
            [f.default, c.default, h.default, d.default],
            () => {
              let e = {};
              for (let t of f.default.getFlattenedGuildIds()) {
                let n = d.default.getGuild(t);
                if (null == n) continue;
                let a = (0, o.getManageResourcePermissions)(
                  n,
                  c.default,
                  h.default
                );
                a.canCreateExpressions && (e[n.id] = n);
              }
              return e;
            }
          ),
          C = (0, r.useStateFromStoresObject)(
            [N.default],
            () => {
              let e = {};
              for (let [n, a] of S.default.entries(g)) {
                var t;
                let l = (0, E.getAvailableSoundboardSoundCount)(
                  null !== (t = N.default.getSoundsForGuild(n)) && void 0 !== t
                    ? t
                    : p.EMPTY_SOUND_LIST,
                  a.premiumTier
                );
                e[n] = l;
              }
              return e;
            },
            [g]
          );
        l.useEffect(() => {
          (0, v.maybeFetchSoundboardSounds)();
        }, []);
        let b = l.useMemo(
            () =>
              Object.values(g).map(e => {
                let { name: t, id: n } = e;
                return { label: t, value: n, disabled: C[n] <= 0 };
              }),
            [g, C]
          ),
          x = l.useCallback(
            e =>
              null == e || "" === e.value
                ? null
                : (0, a.jsx)(m.default, {
                    className: i(O.guildSelectOptionIcon, {
                      [O.disabledOption]: e.disabled,
                    }),
                    guild: g[e.value],
                    size: m.default.Sizes.SMOL,
                    active: !0,
                  }),
            [g]
          ),
          M = l.useCallback(
            e => {
              let t = null == e ? void 0 : e.value;
              return null == t || "" === t
                ? null
                : (0, a.jsx)(D, {
                    className: i({
                      [O.disabledOption]: null == e ? void 0 : e.disabled,
                    }),
                    availableSlots: C[t],
                  });
            },
            [C]
          ),
          I = l.useCallback(
            e =>
              (0, a.jsx)("div", {
                className: i({ [O.disabledOption]: e.disabled }),
                children: e.label,
              }),
            []
          ),
          T = l.useCallback(
            e => {
              !(C[e] <= 0) && s(e);
            },
            [C, s]
          ),
          y = (() => {
            let e = C[null != t ? t : _.EMPTY_STRING_SNOWFLAKE_ID];
            return null == e || e > 0 ? t : void 0;
          })();
        return (0, a.jsx)(u.SearchableSelect, {
          className: n,
          onChange: T,
          value: y,
          multi: !1,
          options: b,
          renderOptionPrefix: x,
          renderOptionSuffix: M,
          renderOptionLabel: I,
          placeholder:
            0 === b.length
              ? A.default.Messages
                  .SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_NONE_AVAILABLE
              : A.default.Messages
                  .SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_PLACEHOLDER,
        });
      }
    },
    181114: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ShineSizes: function () {
            return l;
          },
          Shine: function () {
            return E;
          },
          default: function () {
            return v;
          },
        });
      var a,
        l,
        s = n("37983"),
        i = n("884691"),
        r = n("414456"),
        u = n.n(r),
        o = n("458960"),
        d = n("77078"),
        c = n("252744"),
        f = n("145131"),
        h = n("61435");
      ((a = l || (l = {})).DEFAULT = "default"), (a.SMALL = "small");
      let m = { default: h.shineDefault, small: h.shineSmall },
        g = { default: h.shineInnerDefault, small: h.shineInnerSmall };
      class E extends i.PureComponent {
        render() {
          let { className: e, shineSize: t, shinePaused: n, ...a } = this.props;
          return (0, s.jsx)(o.default.div, {
            ...a,
            className: u(h.shineContainer, e, { [h.shinePaused]: n }),
            children: (0, s.jsx)(f.default, {
              align: f.default.Align.CENTER,
              justify: f.default.Justify.CENTER,
              className: m[t],
              children: (0, s.jsx)("div", { className: g[t] }),
            }),
          });
        }
      }
      E.defaultProps = { shineSize: "default" };
      let S = e => {
        let {
            children: t,
            className: n,
            disabled: a,
            submitting: l,
            pauseAnimation: r,
            shineSize: o = "default",
            shinePaused: f,
            buttonShineClassName: m,
            onlyShineOnHover: g,
            ...S
          } = e,
          v = i.createRef(),
          N = (0, c.default)(v),
          p = !a && !l && !0 !== r && (!g || N);
        return (0, s.jsxs)(d.Button, {
          buttonRef: v,
          ...S,
          className: u(h.shinyButton, n),
          disabled: a,
          submitting: l,
          children: [
            t,
            p
              ? (0, s.jsx)(E, {
                  shinePaused: f,
                  className: u(
                    h.buttonShine,
                    g ? h.onlyShineOnHover : void 0,
                    m
                  ),
                  shineSize: o,
                })
              : null,
          ],
        });
      };
      S.ShineSizes = l;
      var v = S;
    },
    461380: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return g;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("414456"),
        s = n.n(l),
        i = n("384737"),
        r = n("448052"),
        u = n("748802"),
        o = n("260792"),
        d = n("77078"),
        c = n("75196"),
        f = n("366842");
      let h = {
          UP: f.directionUp,
          RIGHT: f.directionRight,
          DOWN: f.directionDown,
          LEFT: f.directionLeft,
        },
        m = e => {
          let {
              direction: t = h.DOWN,
              width: n = 24,
              height: l = 24,
              color: m = "currentColor",
              transition: g = f.transition,
              className: E,
              foreground: S,
              expanded: v,
              ...N
            } = e,
            { enabled: p } = (0, d.useRedesignIconContext)(),
            _ = t;
          if ((!0 === v ? (_ = h.DOWN) : !1 === v && (_ = h.RIGHT), p)) {
            let e = {
              [h.UP]: o.ChevronSmallUpIcon,
              [h.DOWN]: i.ChevronSmallDownIcon,
              [h.LEFT]: r.ChevronSmallLeftIcon,
              [h.RIGHT]: u.ChevronSmallRightIcon,
            }[_];
            return (0, a.jsx)(e, {
              ...N,
              className: E,
              width: n,
              height: l,
              color: m,
              colorClass: S,
            });
          }
          return (0, a.jsx)("svg", {
            className: s(E, g, _),
            width: n,
            height: l,
            viewBox: "0 0 24 24",
            ...(0, c.default)(N),
            children: (0, a.jsx)("path", {
              className: S,
              fill: "none",
              stroke: m,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M7 10L12 15 17 10",
              "aria-hidden": !0,
            }),
          });
        };
      m.Directions = h;
      var g = m;
    },
    151185: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("469563"),
        s = n("424823"),
        i = n("75196"),
        r = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: l = "currentColor",
              foreground: s,
              ...r
            } = e;
            return (0, a.jsx)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, a.jsx)("path", {
                fill: l,
                className: s,
                d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z",
              }),
            });
          },
          s.PlusSmallIcon,
          void 0,
          { size: 24 }
        );
    },
    78404: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("469563"),
        s = n("912758"),
        i = n("75196"),
        r = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: n = 16,
              color: l = "currentColor",
              foreground: s,
              ...r
            } = e;
            return (0, a.jsx)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 16 16",
              children: (0, a.jsx)("path", {
                className: s,
                fill: l,
                d: "M12.6667 2.00195H3.33333C2.6 2.00195 2 2.60195 2 3.33529V12.6686C2 13.402 2.6 14.002 3.33333 14.002H12.6667C13.4 14.002 14 13.402 14 12.6686V3.33529C14 2.60195 13.4 2.00195 12.6667 2.00195Z",
              }),
            });
          },
          s.StopIcon,
          void 0,
          { size: 16 }
        );
    },
    632874: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PlusSmallIcon: function () {
            return i;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...u
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, s.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
            className: r,
          }),
        });
      };
    },
    899576: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          StopIcon: function () {
            return i;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...u
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, s.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("rect", {
            width: t,
            height: n,
            x: "3",
            y: "3",
            fill: "string" == typeof i ? i : i.css,
            rx: "3",
            className: r,
          }),
        });
      };
    },
    157590: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        }),
        n("222007");
      var a,
        l = n("817736"),
        s = n("118810");
      let i = { root: null, rootMargin: "0px", threshold: 0.5 };
      a = class {
        isVisible(e) {
          return null == this._observer || this._visibleComponents.has(e);
        }
        observe(e) {
          let t = this._observer;
          if (null == t) return;
          this.unobserve(e);
          let n = (0, l.findDOMNode)(e);
          (0, s.isElement)(n, HTMLElement) &&
            (this._nodes.set(n, e), this._components.set(e, n), t.observe(n));
        }
        unobserve(e) {
          let t = this._observer;
          if (null == t) return;
          let n = this._components.get(e);
          null != n &&
            (this._nodes.delete(n),
            this._components.delete(e),
            this._visibleComponents.delete(e),
            t.unobserve(n));
        }
        constructor(e = i) {
          (this._nodes = new WeakMap()),
            (this._components = new WeakMap()),
            (this._visibleComponents = new WeakSet()),
            (this._handleEntries = e => {
              e.forEach(e => {
                let t;
                if (null != e.isIntersecting) t = e.isIntersecting;
                else {
                  let { threshold: n } = this._options;
                  t =
                    null == n
                      ? e.intersectionRatio > 0
                      : Array.isArray(n)
                        ? n.some(t => e.intersectionRatio > t)
                        : e.intersectionRatio > n;
                }
                let n = this._nodes.get(e.target);
                if (null != n) {
                  let e = !1;
                  t
                    ? !this._visibleComponents.has(n) &&
                      (this._visibleComponents.add(n), (e = !0))
                    : this._visibleComponents.has(n) &&
                      (this._visibleComponents.delete(n), (e = !0)),
                    e && n.forceUpdate();
                }
              });
            }),
            (this._options = e),
            null != window.IntersectionObserver &&
              (this._observer = new window.IntersectionObserver(
                this._handleEntries,
                e
              ));
        }
      };
    },
    235855: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        }),
        n("222007"),
        n("70102");
      var a = n("884691"),
        l = n("748820"),
        s = n("157590");
      let i = (0, l.v4)(),
        r = new Map(),
        u = new Map();
      class o extends a.Component {
        componentDidMount() {
          if (this.props.active) {
            let e = this.getVisibilityObserver();
            e.observe(this),
              (this.isVisible = e.isVisible(this)),
              this.props.onChange(this.isVisible);
          }
        }
        componentDidUpdate(e) {
          let t = this.getVisibilityObserver(),
            n = t.isVisible(this);
          this.props.active && n !== this.isVisible && this.props.onChange(n),
            !e.active && this.props.active
              ? t.observe(this)
              : e.active && !this.props.active && t.unobserve(this),
            (this.isVisible = n);
        }
        componentWillUnmount() {
          this.getVisibilityObserver().unobserve(this);
        }
        getVisibilityObserverId() {
          let { rootMargin: e, threshold: t } = this.props;
          return "".concat(this.elementId, " ").concat(e, " ").concat(t);
        }
        getVisibilityObserver() {
          let e = this.getVisibilityObserverId(),
            t = u.get(e);
          if (!t)
            throw Error("Visibility sensor with id ".concat(e, " not found."));
          return t;
        }
        render() {
          return a.Children.only(this.props.children);
        }
        constructor(e) {
          super(e), (this.isVisible = !1);
          let { root: t, rootMargin: n, threshold: a } = e;
          t
            ? r.has(t)
              ? (this.elementId = r.get(t) || "")
              : r.set(t, (0, l.v4)())
            : (this.elementId = i);
          let o = this.getVisibilityObserverId();
          !u.has(o) &&
            u.set(o, new s.default({ root: t, rootMargin: n, threshold: a }));
        }
      }
      o.defaultProps = {
        active: !0,
        children: a.createElement("span"),
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0, Number.MIN_VALUE],
      };
      var d = o;
    },
    290381: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VisibilityObserver: function () {
            return a.default;
          },
          VisibilitySensor: function () {
            return l.default;
          },
        }),
        n("6268");
      var a = n("157590"),
        l = n("235855");
    },
  },
]);
//# sourceMappingURL=3b572d494abd9068fb75.js.map
