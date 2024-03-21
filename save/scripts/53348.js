(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["53348"],
  {
    424823: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("632874");
      n.es(l, t);
    },
    912758: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("899576");
      n.es(l, t);
    },
    252744: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        }),
        n("222007");
      var l = n("884691");
      function a(e) {
        let [t, n] = (0, l.useState)(!1),
          a = (0, l.useRef)(e.current);
        return (
          (0, l.useEffect)(() => {
            a.current = e.current;
          }, [e]),
          (0, l.useEffect)(() => {
            let e = a.current;
            if (null == e) return;
            let t = () => n(!0),
              l = () => n(!1);
            return (
              e.addEventListener("mouseenter", t),
              e.addEventListener("mouseleave", l),
              () => {
                e.removeEventListener("mouseenter", t),
                  e.removeEventListener("mouseleave", l);
              }
            );
          }, [a]),
          t
        );
      }
    },
    270161: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CREATE_GUILD_EVENT_CORE_PERMISSIONS: function () {
            return s;
          },
          CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function () {
            return r;
          },
          CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function () {
            return u;
          },
        });
      var l = n("316693"),
        a = n("923510"),
        i = n("49111");
      let s = i.Permissions.VIEW_CHANNEL,
        r = l.combine(s, i.Permissions.CONNECT),
        u = l.combine(s, a.MODERATE_STAGE_CHANNEL_PERMISSIONS);
    },
    650484: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
          PaymentPortalBody: function () {
            return g;
          },
          PaymentPortalFooter: function () {
            return v;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        i = n("414456"),
        s = n.n(i),
        r = n("627445"),
        u = n.n(r),
        o = n("817736"),
        d = n.n(o),
        c = n("77078"),
        f = n("642906"),
        h = n("304006");
      function m(e) {
        var t, n, i, r, o, d;
        let {
            header: m,
            isLargeModal: g,
            stepProps: v,
          } = (function (e) {
            let { header: t, isLargeModal: n, ...l } = e;
            return { header: t, isLargeModal: n, stepProps: l };
          })(e),
          {
            step: S,
            stepConfigs: E,
            setBodyNode: p,
            setFooterNode: N,
            setModalOverlayNode: _,
            setReadySlideId: O,
          } = (0, f.usePaymentContext)(),
          A = E.find(e => e.key === S);
        a.useEffect(() => {
          _(null);
        }, [S, _]),
          u(null != A, "Unknown step for current payment flow.");
        let D =
            null !==
              (o =
                null == A
                  ? void 0
                  : null === (t = A.options) || void 0 === t
                    ? void 0
                    : t.hideSlider) &&
            void 0 !== o &&
            o,
          b =
            null == A
              ? void 0
              : null === (n = A.options) || void 0 === n
                ? void 0
                : n.bodyClassName,
          C =
            void 0 !== g && g
              ? h.sliderBodyLarge
              : null == A
                ? void 0
                : null === (i = A.options) || void 0 === i
                  ? void 0
                  : i.sliderBodyClassName;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            null ===
              (d =
                null == A
                  ? void 0
                  : null === (r = A.options) || void 0 === r
                    ? void 0
                    : r.renderHeader) ||
            void 0 === d ||
            d
              ? m
              : null,
            A.renderStep(v),
            null == S || D
              ? null
              : (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(c.ModalContent, {
                      className: s(h.body, b),
                      children: (0, l.jsx)(c.Slides, {
                        activeSlide: S,
                        centered: !1,
                        onSlideReady: e => O(e),
                        children: E.filter(e => null != e.key).map(e =>
                          (0, l.jsx)(
                            c.Slide,
                            {
                              id: e.key,
                              children: (0, l.jsx)("form", {
                                className: s(h.sliderBody, C),
                                ref: e => p(e),
                                onSubmit: e => e.preventDefault(),
                              }),
                            },
                            e.key
                          )
                        ),
                      }),
                    }),
                    (0, l.jsx)("div", { ref: e => N(e) }),
                    (0, l.jsx)("div", { ref: e => _(e) }),
                  ],
                }),
          ],
        });
      }
      function g(e) {
        let { children: t } = e,
          { bodyNode: n } = (0, f.usePaymentContext)();
        return null == n ? null : d.createPortal(t, n);
      }
      function v(e) {
        let { children: t } = e,
          { footerNode: n } = (0, f.usePaymentContext)();
        return null == n ? null : d.createPortal(t, n);
      }
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
      var l = n("884691"),
        a = n("316693"),
        i = n("446674"),
        s = n("813006");
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
        f = (e, t, n, l) => {
          if (null == e) return !1;
          if (n) return !0;
          if ("creator_id" in e) return l && null != t && e.creator_id === t.id;
          if ("userId" in e) return l && null != t && e.userId === t.id;
          if ("user" in e) {
            var a;
            return (
              l &&
              null != t &&
              (null === (a = e.user) || void 0 === a ? void 0 : a.id) === t.id
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
              a.combine(t, d.Permissions.CREATE_EVENTS),
              a.combine(t, d.Permissions.MANAGE_EVENTS),
            ]
          );
        },
        m = e => {
          let [t, n] =
              e instanceof s.default
                ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS]
                : h(e),
            [a, o, m, g] = (0, i.useStateFromStoresArray)([r.default], () => [
              r.default.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e),
              r.default.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
              r.default.can(t, e),
              r.default.can(n, e),
            ]),
            v = (0, i.useStateFromStores)([u.default], () =>
              u.default.getCurrentUser()
            ),
            S = l.useCallback(e => f(e, v, o, a), [a, o, v]),
            E = l.useCallback(e => f(e, v, g, m), [g, m, v]);
          return null == e
            ? c
            : {
                canCreateExpressions: a,
                canCreateGuildEvent: m,
                canManageAllExpressions: o,
                canManageAllEvents: g,
                canManageGuildExpression: S,
                canManageGuildEvent: E,
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
            [l, a] =
              e instanceof s.default
                ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS]
                : h(e),
            i = t.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e),
            o = t.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
            m = t.can(l, e),
            g = t.can(a, e),
            v = n.getCurrentUser();
          return null == e
            ? c
            : {
                canCreateExpressions: i,
                canCreateGuildEvent: m,
                canManageAllExpressions: o,
                canManageAllEvents: g,
                canManageGuildExpression: e => f(e, v, o, i),
                canManageGuildEvent: e => f(e, v, g, m),
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
      var l = n("37983"),
        a = n("884691"),
        i = n("77078"),
        s = n("460029"),
        r = n("129722"),
        u = n("723961"),
        o = n("782340"),
        d = n("340853"),
        c = a.memo(function (e) {
          let { sound: t, volume: n, disabled: a = !1, onChange: c } = e,
            { file: f } = (0, r.useAudioTrimmerStore)();
          return (0, l.jsx)(i.FormSection, {
            className: d.section,
            title: o.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_PREVIEW,
            children: (0, l.jsxs)("div", {
              className: d.fakeInput,
              children: [
                null != t &&
                  (0, l.jsx)(u.default, { sound: t, volume: n, disabled: a }),
                null == t &&
                  null != f &&
                  (0, l.jsx)(s.default, {
                    className: d.audioTrimmer,
                    volume: n,
                    disabled: a,
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
            return p;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        i = n("414456"),
        s = n.n(i),
        r = n("77078"),
        u = n("132755"),
        o = n("78404"),
        d = n("718517"),
        c = n("812809"),
        f = n("129722"),
        h = n("278175"),
        m = n("859971"),
        g = n("846325"),
        v = n("687702");
      let S = 10 * d.default.Millis.SECOND,
        E = { startPositionMs: 0, endPositionMs: 2 * S, playheadPositionMs: 0 };
      var p = a.memo(function (e) {
        var t;
        let { className: n, volume: i, disabled: S = !1, onChange: p } = e,
          { audio: N } = (0, f.useAudioTrimmerStore)(),
          [_, O] = a.useState(!1),
          [A, D] = a.useState(E),
          { playheadPositionMs: b, endPositionMs: C, startPositionMs: x } = A,
          M = null != N,
          I = C - x,
          y = I > g.MAX_SOUND_LENGTH_SECONDS * d.default.Millis.SECOND;
        a.useEffect(() => {
          null != N &&
            D({
              playheadPositionMs: 0,
              endPositionMs: N.duration * d.default.Millis.SECOND,
              startPositionMs: 0,
            });
        }, [N]);
        let T = a.useCallback(
            e => {
              null != N && (N.pause(), null != e && (N.currentTime = e), O(!1));
            },
            [N]
          ),
          R = a.useCallback(() => {
            if (null != N) {
              if (_) {
                T();
                return;
              }
              b >= C
                ? (N.currentTime = (0, m.toSeconds)(x))
                : (N.currentTime = (0, m.toSeconds)(b)),
                (N.volume = (0, c.default)(i)),
                N.play(),
                O(!0);
            }
          }, [N, C, T, b, _, x, i]),
          w = a.useCallback(
            e => {
              D(e),
                null == p ||
                  p({ startMs: e.startPositionMs, endMs: e.endPositionMs });
            },
            [p]
          ),
          L = a.useCallback(
            e => {
              null != N && (N.currentTime = e);
            },
            [N]
          );
        return (0, l.jsxs)("div", {
          className: s(
            v.container,
            { [v.initialized]: M, [v.disabled]: !M || S },
            n
          ),
          children: [
            (0, l.jsxs)("div", {
              className: v.playButtonContainer,
              children: [
                (0, l.jsx)(r.Clickable, {
                  className: v.playButton,
                  onClick: M ? R : void 0,
                  children: _
                    ? (0, l.jsx)(o.default, { className: v.playButtonIcon })
                    : (0, l.jsx)(u.default, { className: v.playButtonIcon }),
                }),
                (0, l.jsx)("div", {
                  className: v.durationContainer,
                  children: (0, l.jsx)(r.Text, {
                    className: v.duration,
                    variant: "text-xs/normal",
                    color: y ? "text-warning" : "text-positive",
                    children:
                      ((t = I), "".concat((0, m.toSeconds)(t).toFixed(2), "s")),
                  }),
                }),
              ],
            }),
            (0, l.jsx)(h.default, {
              playing: _,
              onPlaybackChange: L,
              onPausePlayback: T,
              onChangePosition: w,
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
            return l;
          },
          getWaveformId: function () {
            return a;
          },
          getAudioFileId: function () {
            return i;
          },
          SUPPORTED_AUDIO_FILE_TYPES: function () {
            return s;
          },
        }),
        n("222007");
      let l = {
          waveformBlockWidth: 2,
          waveformBarWidth: 0.5,
          fineTuningDelay: 500,
          fineTuningScale: 10,
          loudnessThreshold: 0.3,
        },
        a = (e, t) => {
          let n = ""
            .concat(e[0], "-")
            .concat(e[e.length - 1], "-")
            .concat(e.byteLength);
          return "".concat(n, "-").concat(JSON.stringify(t));
        },
        i = e =>
          "".concat(e.name, "-").concat(e.size, "-").concat(e.lastModified),
        s = new Set([
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
      var l = n("308503"),
        a = n("16470"),
        i = n("859971");
      let s = (0, l.default)(e => ({
        audio: null,
        file: null,
        loading: !1,
        loadAudioFromFile: async t => {
          if ((e({ file: t, audio: null, loading: null != t }), null == t))
            return;
          let n = await (0, i.loadAudioFromFile)(t);
          null != n && e({ audio: n, loading: !1 });
        },
        maxVolume: 1,
        setMaxVolume: t => {
          e({ maxVolume: t });
        },
      }));
      function r() {
        return s(
          e => ({
            audio: e.audio,
            file: e.file,
            loading: e.loading,
            loadAudioFromFile: e.loadAudioFromFile,
            maxVolume: e.maxVolume,
            setMaxVolume: e.setMaxVolume,
          }),
          a.default
        );
      }
    },
    278175: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
        }),
        n("222007");
      var l,
        a,
        i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        u = n.n(r),
        o = n("461380"),
        d = n("718517"),
        c = n("129722"),
        f = n("859971"),
        h = n("184692"),
        m = n("89050"),
        g = n("936854");
      ((a = l || (l = {}))[(a.START = 0)] = "START"),
        (a[(a.PLAYHEAD = 1)] = "PLAYHEAD"),
        (a[(a.END = 2)] = "END");
      var v = s.memo(function (e) {
        let {
            playing: t,
            onPausePlayback: n,
            onPlaybackChange: l,
            onChangePosition: a,
            disabled: r = !1,
          } = e,
          v = { ...m.defaultWaveformConfig },
          { audio: S } = (0, c.useAudioTrimmerStore)(),
          E = null != S,
          p = s.useRef(null),
          N = s.useRef(null),
          _ = s.useRef(null),
          [O, A] = s.useState(0),
          [D, b] = s.useState(0),
          [C, x] = s.useState(0),
          [M, I] = s.useState(!1),
          [y, T] = s.useState(!1),
          [R, w] = s.useState(!1),
          [L, P] = s.useState(0),
          [U, j] = s.useState(-1),
          F = s.useMemo(() => L / v.fineTuningScale, [v.fineTuningScale, L]);
        s.useEffect(() => {
          if (null == S) return;
          let e = S.duration * d.default.Millis.SECOND;
          A(0), b(0), x(e), P(e);
        }, [S]);
        let V = s.useCallback(
            (e, t) => {
              if ((n(), 0 === e.button))
                switch (t) {
                  case 0:
                    I(!0);
                    break;
                  case 1:
                    T(!0);
                    break;
                  case 2:
                    w(!0);
                }
            },
            [n]
          ),
          B = s.useCallback(e => {
            switch (e) {
              case 0:
                I(!1);
                break;
              case 1:
                T(!1);
                break;
              case 2:
                w(!1);
            }
            j(-1);
          }, []),
          k = s.useCallback(
            e => {
              if (null == S || !M) return;
              let t = parseInt(e.target.value),
                n = t > C ? C : t;
              l((0, f.toSeconds)(n)), A(n), b(n);
            },
            [S, l, C, M]
          ),
          G = s.useCallback(
            e => {
              if (null == S || !y) return;
              let t = parseInt(e.target.value);
              t < O
                ? (l((0, f.toSeconds)(O)), b(O))
                : t > C
                  ? (l((0, f.toSeconds)(C)), b(C))
                  : (l((0, f.toSeconds)(t)), b(t));
            },
            [S, l, C, y, O]
          ),
          H = s.useCallback(
            e => {
              if (null == S || !R) return;
              let t = parseInt(e.target.value),
                n = t > O ? t : O;
              l((0, f.toSeconds)(O)), b(O), x(n);
            },
            [S, l, R, O]
          );
        return (
          s.useEffect(() => {
            null != a &&
              E &&
              a({
                startPositionMs: O,
                endPositionMs: C,
                playheadPositionMs: D,
              });
          }, [O, C, a, E, D]),
          s.useEffect(() => {
            let e;
            if (null != S)
              return (
                t &&
                  (e = setInterval(() => {
                    S.currentTime < (0, f.toSeconds)(C)
                      ? S.currentTime >= (0, f.toSeconds)(D) &&
                        b(S.currentTime * d.default.Millis.SECOND)
                      : (n((0, f.toSeconds)(O)), b(O));
                  }, 16)),
                () => {
                  clearInterval(e);
                }
              );
          }, [S, C, n, D, t, O]),
          s.useEffect(() => {
            if (v.fineTuningDelay <= 0) return;
            let e = setTimeout(() => {
              M && O == O && -1 === U
                ? j(O)
                : R && C == C && -1 === U
                  ? j(C)
                  : y && D == D && -1 === U && j(D);
            }, v.fineTuningDelay);
            return () => {
              clearTimeout(e);
            };
          }, [v.fineTuningDelay, R, C, U, y, D, M, O]),
          (0, i.jsxs)("div", {
            className: u(g.timeline, { [g.initialized]: E }),
            children: [
              (0, i.jsxs)("div", {
                className: g.rangeHandleContainer,
                children: [
                  (0, i.jsxs)("div", {
                    className: g.rangeHandleFrame,
                    children: [
                      (0, i.jsx)("input", {
                        ref: p,
                        className: u(g.rangeHandle, g.rangeHandleStart),
                        type: "range",
                        min: (0, f.getMinValue)(U, F, L),
                        max: (0, f.getMaxValue)(U, F, L),
                        value: O,
                        onChange: k,
                        onMouseDown: e => V(e, 0),
                        onMouseUp: () => B(0),
                        disabled: !E || r,
                      }),
                      (0, i.jsx)("input", {
                        ref: _,
                        className: u(g.rangeHandle, g.rangeHandleEnd),
                        type: "range",
                        min: (0, f.getMinValue)(U, F, L),
                        max: (0, f.getMaxValue)(U, F, L),
                        value: C,
                        onChange: H,
                        onMouseDown: e => V(e, 2),
                        onMouseUp: () => B(2),
                        disabled: !E || r,
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: g.handlePlayheadTrack,
                    children: (0, i.jsx)("input", {
                      ref: N,
                      className: u(g.rangeHandle, g.rangeHandlePlayhead),
                      type: "range",
                      min: (0, f.getMinValue)(U, F, L),
                      max: (0, f.getMaxValue)(U, F, L),
                      value: D,
                      onChange: G,
                      onMouseDown: e => V(e, 1),
                      onMouseUp: () => B(1),
                      disabled: !E || r,
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: g.handleContainer,
                children: [
                  (0, i.jsxs)("div", {
                    className: u(g.handleFrame, {
                      [g.startDragging]: M,
                      [g.endDragging]: R,
                    }),
                    style: {
                      left: "".concat(
                        (0, f.getStartHandleValue)(O, U, F, L),
                        "%"
                      ),
                      right: "".concat(
                        (0, f.getEndHandleValue)(C, U, F, L),
                        "%"
                      ),
                    },
                    children: [
                      (0, i.jsx)("div", {
                        className: u(g.handleIconFrame, g.handleIconFrameStart),
                        children: (0, i.jsx)("div", {
                          className: u(g.handleIconContainer, g.start),
                          children: (0, i.jsx)(o.default, {
                            direction: o.default.Directions.RIGHT,
                            className: g.handleIcon,
                            width: 16,
                            height: 16,
                          }),
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: u(g.handleIconFrame, g.handleIconFrameEnd),
                        children: (0, i.jsx)("div", {
                          className: u(g.handleIconContainer, g.end),
                          children: (0, i.jsx)(o.default, {
                            direction: o.default.Directions.LEFT,
                            className: g.handleIcon,
                            width: 16,
                            height: 16,
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: g.playheadTrack,
                    children: (0, i.jsx)("div", {
                      className: u(g.playhead, {
                        [g.dragging]: y || M || R || t,
                      }),
                      style: {
                        left: "".concat(
                          (0, f.getStartHandleValue)(D, U, F, L),
                          "%"
                        ),
                      },
                    }),
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: g.waveformContainer,
                children: (0, i.jsx)(h.default, {
                  fineTuning: U,
                  fineTuningResolution: F,
                  duration: L,
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
            return i;
          },
          toSeconds: function () {
            return s;
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
      var l = n("89050"),
        a = n("782340");
      let i = (e, t, n) => (-1 === e ? 0 : e - (t * e) / n);
      function s(e) {
        return e / 1e3;
      }
      let r = (e, t, n) => (-1 === e ? n : e + (t * (n - e)) / n),
        u = (e, t, n, l) => {
          let a = 0;
          return (a =
            t >= 0 && n > 0
              ? ((e - (t - (n * t) / l)) * 100) / n
              : (100 * e) / l).toFixed(4);
        },
        o = (e, t, n, l) => {
          let a = 0;
          return (a =
            t >= 0 && n > 0
              ? -((e - (t + (n * (l - t)) / l)) * 100) / n
              : (-100 * e) / l + 100).toFixed(4);
        };
      async function d(e) {
        var t;
        if (
          !(e.type.startsWith("audio") || e.type.startsWith("video")) ||
          !l.SUPPORTED_AUDIO_FILE_TYPES.has(e.type)
        )
          throw Error(
            a.default.Messages.SOUNDBOARD_ERROR_INVALID_FILE_TYPE.format({
              fileType: e.type,
            })
          );
        let n = URL.createObjectURL(e),
          i = new Audio(n);
        return (
          await ((t = i),
          new Promise(e => {
            let n = () => {
              e(), t.removeEventListener("canplaythrough", n);
            };
            t.addEventListener("canplaythrough", n), t.load();
          })),
          i
        );
      }
      async function c(e, t) {
        let n = await fetch(e),
          l = await n.blob();
        return new File([l], t, { type: "audio/mp3" });
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
      var l = n("627445"),
        a = n.n(l),
        i = n("804998"),
        s = n("718517"),
        r = n("305122"),
        u = n("108391");
      let o = new AudioContext({
        sampleRate: Math.min((0, i.getOrCreateAudioContext)().sampleRate, 48e3),
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
          let l = new FileReader(),
            a = () => {
              l.removeEventListener("load", a),
                l.removeEventListener("error", n),
                e(l.result);
            };
          l.addEventListener("load", a), l.addEventListener("error", n), t(l);
        }));
        if ("string" != typeof n) throw Error("Unexpected file type");
        return n;
      }
      async function f(e) {
        let {
          readPromise: t,
          guildId: n,
          name: l,
          volume: a,
          emojiId: i,
          emojiName: s,
        } = e;
        return (0, r.uploadSound)({
          guildId: n,
          name: l,
          sound: await t,
          volume: a,
          emojiId: i,
          emojiName: s,
        });
      }
      async function h(e) {
        let t = [],
          n = (function (e) {
            let { numberOfChannels: t } = e,
              n = [];
            for (let l = 0; l < t; l++) n.push(e.getChannelData(l));
            return n;
          })(e),
          l = (function (e) {
            if (1 === e.length) return e[0];
            if (2 === e.length) {
              let t = e[0],
                n = e[1],
                l = [];
              for (let e = 0; e < t.length; e++) l.push(t[e]), l.push(n[e]);
              let a = new Float32Array(l.length);
              return a.set(l), a;
            }
            throw Error("Only handles up to 2 channels");
          })(n),
          i = new AudioData({
            format: "f32",
            sampleRate: e.sampleRate,
            numberOfFrames: e.length,
            numberOfChannels: e.numberOfChannels,
            timestamp: 1e6 * e.duration,
            data: l,
          }),
          s = new AudioEncoder({
            output: function (n) {
              a(null != n.duration, "Chunk duration must not be null");
              let l = (n.duration / 1e6) * e.sampleRate,
                i = new Uint8Array(n.byteLength);
              n.copyTo(i), t.push({ buffer: i, numSamples: l });
            },
            error: e => {
              throw Error("Audio encoding error: ".concat(e.message));
            },
          });
        s.configure({
          codec: "opus",
          sampleRate: e.sampleRate,
          numberOfChannels: e.numberOfChannels,
        }),
          s.encode(i),
          await s.flush();
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
          l = (function (e, t) {
            let { startMs: n, endMs: l } = t,
              { sampleRate: a, numberOfChannels: i, duration: r } = e,
              u = r * s.default.Millis.SECOND,
              d = Math.min(l, u);
            if (0 === n && d === u) return e;
            let c = Math.floor((n / u) * e.length),
              f = Math.floor((d / u) * e.length),
              h = o.createBuffer(i, f - c, a);
            for (let t = 0; t < i; t++) {
              let n = h.getChannelData(t),
                l = e.getChannelData(t),
                a = 0;
              for (let e = c; e <= f; e++) (n[a] = l[e]), a++;
            }
            return h;
          })(n, t),
          a = await h(l);
        return new File([a], "sound.ogg", { type: "audio/ogg" });
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
      var l = n("37983"),
        a = n("884691"),
        i = n("129722"),
        s = n("477633"),
        r = a.memo(function (e) {
          let { fineTuning: t, fineTuningResolution: n, duration: a } = e,
            { file: r, audio: u } = (0, i.useAudioTrimmerStore)();
          return (0, l.jsx)(s.default, {
            file: r,
            audio: u,
            waveformSettings: {
              fineTuning: t,
              fineTuningResolution: n,
              duration: a,
            },
          });
        });
    },
    477633: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        i = n("414456"),
        s = n.n(i),
        r = n("917351"),
        u = n("819855"),
        o = n("77078"),
        d = n("841098"),
        c = n("449918"),
        f = n("302185"),
        h = n("89050"),
        m = n("843455"),
        g = n("584150"),
        v = a.memo(function (e) {
          let { file: t, audio: n, className: i, waveformSettings: v } = e,
            [S, E] = a.useState({ width: 0, height: 0 }),
            p = a.useRef(null),
            N = a.useMemo(() => {
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
                ...(null != v ? v : {}),
              };
            }, [n, v]),
            _ = (0, f.useAudioBufferData)(t),
            O = (0, f.useAudioWaveformData)(_, p.current, N),
            A = (0, d.default)(),
            D = (0, c.useColorValue)(
              (0, u.isThemeDark)(A) ? m.Color.PRIMARY_300 : m.Color.PRIMARY_700
            ),
            b = null == _ || null == O,
            C = 0 === S.width || 0 === S.height,
            x = (C || b) && null != t,
            M = a.useCallback(() => {
              null != p.current &&
                E({
                  width: p.current.offsetWidth,
                  height: p.current.offsetHeight,
                });
            }, []);
          return (
            a.useEffect(() => {
              if (null != p.current) {
                let e = new ResizeObserver((0, r.debounce)(M, 50));
                return (
                  e.observe(p.current),
                  () => {
                    e.disconnect();
                  }
                );
              }
            }, [M]),
            a.useEffect(() => {
              if (null == p.current) return;
              let e = p.current,
                t = e.getContext("2d");
              if (null == t) return;
              let { width: n, height: l } = e;
              if (
                0 !== S.width &&
                0 !== S.height &&
                null != O &&
                O.length > 0
              ) {
                let e = n / O.length,
                  a = -(e * (h.defaultWaveformConfig.waveformBarWidth - 1));
                t.clearRect(0, 0, n, l), (t.fillStyle = D.hex);
                for (let n = 0; n < O.length; n++) {
                  let i = O[n] * l,
                    s = n * e + a,
                    r = l / 2 - i / 2;
                  t.fillRect(s, r, e - a, i);
                }
              }
            }, [D, S, A, O]),
            (0, l.jsxs)("div", {
              className: s(g.container, i),
              children: [
                (0, l.jsx)("canvas", {
                  className: g.waveformCanvas,
                  ref: p,
                  width: 4 * S.width,
                  height: 4 * S.height,
                }),
                x &&
                  (0, l.jsx)("div", {
                    className: g.loading,
                    children: (0, l.jsx)(o.Spinner, {
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
      var l = n("884691"),
        a = n("748820"),
        i = n("804998"),
        s = n("129722"),
        r = n("89050");
      let u = new Worker(new URL(n.p + n.u("21401"), n.b)),
        o = (0, i.getOrCreateAudioContext)();
      async function d(e) {
        let t = await e.arrayBuffer(),
          n = await o.decodeAudioData(t);
        return n.getChannelData(0);
      }
      function c(e) {
        let [t, n] = l.useState(null),
          [a, i] = l.useState(null);
        return (
          l.useEffect(() => {
            if (null == e) return;
            let t = (0, r.getAudioFileId)(e);
            t !== a && (i(t), n(null), d(e).then(n));
          }, [a, e]),
          t
        );
      }
      let f = { ...r.defaultWaveformConfig };
      function h(e, t, n) {
        let [i, o] = l.useState(null),
          [d, c] = l.useState(null),
          [h, m] = l.useState(1),
          { setMaxVolume: g } = (0, s.useAudioTrimmerStore)(),
          v = l.useCallback(
            (e, t) => {
              var l, i, s, r, o;
              c(null),
                ((l = e),
                (i = t.offsetWidth),
                (s = n),
                (r = f),
                (o = m),
                new Promise(e => {
                  let t = (0, a.v4)(),
                    n = l => {
                      let {
                        data: {
                          waveform: a,
                          id: i,
                          normalizedVolumeMultipler: s,
                        },
                      } = l;
                      t === i && (e(a), o(s)),
                        null == u || u.removeEventListener("message", n);
                    };
                  null == u || u.addEventListener("message", n),
                    null == u ||
                      u.postMessage({
                        id: t,
                        options: s,
                        config: r,
                        width: i,
                        rawBufferData: l,
                      });
                })).then(c);
            },
            [n]
          );
        return (
          l.useEffect(() => {
            if (null == e || null == t) return;
            let l = (0, r.getWaveformId)(e, n);
            i !== l && (o(l), v(e, t));
          }, [e, v, t, n, i]),
          l.useEffect(() => {
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
      var l = n("37983"),
        a = n("884691"),
        i = n("77078"),
        s = n("132755"),
        r = n("78404"),
        u = n("520497"),
        o = n("812809"),
        d = n("129722"),
        c = n("859971"),
        f = n("477633"),
        h = n("782340"),
        m = n("610078"),
        g = a.memo(function (e) {
          let { sound: t, volume: n, disabled: g } = e,
            [v, S] = a.useState(!1),
            E = a.useRef(null),
            {
              file: p,
              audio: N,
              loadAudioFromFile: _,
            } = (0, d.useAudioTrimmerStore)(),
            O = a.useMemo(() => (0, u.default)(t.soundId), [t]);
          return (
            a.useEffect(() => {
              null == E.current &&
                (E.current = (0, c.loadAudioFileFromUrl)(O, t.name).then(_));
            }, [O, _, t.name]),
            (0, l.jsxs)("div", {
              className: m.previewContainer,
              children: [
                (0, l.jsx)(i.Clickable, {
                  onClick: g
                    ? void 0
                    : function () {
                        null != N &&
                          (N.paused
                            ? ((N.volume = (0, o.default)(n)),
                              (N.currentTime = 0),
                              N.play(),
                              S(!0),
                              N.addEventListener("ended", () => S(!1), {
                                once: !0,
                              }))
                            : (N.pause(), S(!1)));
                      },
                  className: m.playButton,
                  "aria-label": v
                    ? h.default.Messages.STOP
                    : h.default.Messages.PLAY,
                  children: v
                    ? (0, l.jsx)(r.default, { className: m.playIcon })
                    : (0, l.jsx)(s.default, { className: m.playIcon }),
                }),
                (0, l.jsx)("div", {
                  className: m.waveformContainer,
                  children: (0, l.jsx)(f.default, {
                    className: m.waveform,
                    file: p,
                    audio: N,
                  }),
                }),
              ],
            })
          );
        });
    },
    108391: function (e, t, n) {
      "use strict";
      var l, a, i, s;
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
      ((i = l || (l = {}))[(i.NONE = 0)] = "NONE"),
        (i[(i.CONTINUATION = 1)] = "CONTINUATION"),
        (i[(i.BEGINNING_OF_STREAM = 2)] = "BEGINNING_OF_STREAM"),
        (i[(i.END_OF_STREAM = 4)] = "END_OF_STREAM");
      class r {
        appendBytes(e) {
          if (this._offset + e.length > this._buffer.length) {
            let t = this._offset + e.length,
              n = Math.pow(
                2,
                Math.ceil(Math.log2(Math.max(2 * this._buffer.length, t)))
              ),
              l = new Uint8Array(n);
            l.set(this._buffer.subarray(0, this._offset)), (this._buffer = l);
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
          let l = this._offset,
            a = 0;
          switch (e.pageType) {
            case 1:
              a = 1;
              break;
            case 2:
              a = 2;
              break;
            case 4:
              a = 4;
          }
          this.appendBytes([
            79,
            103,
            103,
            83,
            0,
            a,
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
          let i = this._offset;
          for (let t of (this.appendBytes([0, 0, 0, 0, e.segments.length]),
          this.appendBytes(e.segments.map(e => e.length)),
          e.segments))
            this.appendBytes(t);
          let s = (function (e) {
            return (
              e.reduce((e, t) => ((e << 8) >>> 0) ^ o[(e >>> 24) ^ t], 0) >>> 0
            );
          })(this._buffer.subarray(l, this._offset));
          this._buffer.set(
            [255 & s, (s >> 8) & 255, (s >> 16) & 255, (s >> 24) & 255],
            i
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
          l = new Uint8Array([
            79, 112, 117, 115, 84, 97, 103, 115, 0, 0, 0, 0, 0, 0, 0, 0,
          ]),
          a = new r();
        a.addPage({ pageType: 2, granulePosition: 0, segments: [n] });
        let i = 0;
        for (let t of (a.addPage({
          pageType: 0,
          granulePosition: i,
          segments: [l],
        }),
        e)) {
          let e = (function (e) {
            let t = Math.floor(e.length / 255),
              n = [];
            for (let l = 0; l <= t; l++) {
              let a = 0 === l ? 0 : 255 * l,
                i = l === t ? e.length : (l + 1) * 255;
              n.push(e.slice(a, i));
            }
            return n;
          })(t.buffer);
          (i += t.numSamples),
            a.addPage({ pageType: 0, granulePosition: i, segments: e });
        }
        return a.finalize(i);
      }
      (s = a || (a = {}))[(s.ZERO = 0)] = "ZERO";
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
            return C;
          },
        }),
        n("222007"),
        n("70102");
      var l,
        a,
        i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        u = n.n(r),
        o = n("627445"),
        d = n.n(o),
        c = n("77078"),
        f = n("599417"),
        h = n("208548"),
        m = n("104945"),
        g = n("599110"),
        v = n("305122"),
        S = n("664113"),
        E = n("129722"),
        p = n("102432"),
        N = n("876189"),
        _ = n("846325"),
        O = n("49111"),
        A = n("782340"),
        D = n("509252");
      ((a = l || (l = {})).READY = "ready"),
        (a.ENCODING_FAILED = "encoding-failed"),
        (a.ENCODING = "encoding"),
        (a.UPLOADING = "uploading");
      let b = [
        { name: "audio", extensions: ["mp3", "wav", "ogg", "x-wav", "mp4"] },
      ];
      function C(e) {
        var t, n, l, a;
        let {
            guildId: r,
            sourceFile: o,
            existingSound: C,
            onClose: x,
            transitionState: M,
            showGuildPicker: I = !1,
          } = e,
          [y, T] = s.useState(
            null !==
              (n =
                null !== (t = null == o ? void 0 : o.name) && void 0 !== t
                  ? t
                  : null == C
                    ? void 0
                    : C.name) && void 0 !== n
              ? n
              : ""
          ),
          [R, w] = s.useState(
            null !== (l = null == C ? void 0 : C.volume) && void 0 !== l ? l : 1
          ),
          [L, P] = s.useState(null == C ? void 0 : C.emojiId),
          [U, j] = s.useState(null == C ? void 0 : C.emojiName),
          {
            file: F,
            loadAudioFromFile: V,
            maxVolume: B,
            setMaxVolume: k,
          } = (0, E.useAudioTrimmerStore)(),
          [G, H] = s.useState(!1),
          [W, z] = s.useState(null),
          [Y, q] = s.useState(null),
          [X, Z] = s.useState("ready"),
          [J, K] = s.useState(r);
        async function Q(e) {
          try {
            await V(null != e ? e : null), Z("ready"), z(null);
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
        s.useEffect(() => {
          (null == o ? void 0 : o.file) != null && e(o.file);
          async function e(e) {
            try {
              await V(e), Z("ready"), z(null);
            } catch (e) {
              $(e);
            }
          }
        }, [null == o ? void 0 : o.file, V]);
        let ee = (function (e) {
            switch (e) {
              case "encoding":
                return A.default.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_ENCODING;
              case "encoding-failed":
                return A.default.Messages
                  .SOUNDBOARD_MODAL_AUDIO_STATE_ENCODING_FAILED;
              case "uploading":
                return A.default.Messages
                  .SOUNDBOARD_MODAL_AUDIO_STATE_UPLOADING;
            }
            return null;
          })(X),
          et = "uploading" === X || "encoding" === X,
          en = null != C,
          el =
            y.length >= 2 &&
            (en || null != F) &&
            null != J &&
            (function (e) {
              if (null == e) return !0;
              let t = (e.endMs - e.startMs) / 1e3;
              return t > 0 && t <= _.MAX_SOUND_LENGTH_SECONDS;
            })(Y),
          ea = s.useCallback(async (e, t) => {
            Z("encoding");
            try {
              let n = await (0, p.trimAndEncodeAudio)(e, t);
              return Z("ready"), n;
            } catch (e) {
              throw (Z("encoding-failed"), e);
            }
          }, []),
          ei = s.useCallback(async () => {
            if (null == F) return;
            d(null != J, "Cannot submit soundboard sound with no guildId");
            let e = F;
            if (null != Y) {
              let t = await ea(F, Y);
              if (null == t) return;
              e = t;
            }
            let t = (0, p.getDataUrlFromFile)(e);
            Z("uploading");
            try {
              await (0, p.uploadFileReadPromise)({
                readPromise: t,
                guildId: J,
                name: y,
                volume: R,
                emojiId: L,
                emojiName: U,
              }),
                Z("ready");
            } catch (e) {
              throw new f.default(e);
            }
          }, [F, J, y, ea, Y, R, L, U]),
          es = s.useCallback(async () => {
            d(null != J, "Cannot submit soundboard sound with no guildId"),
              H(!0),
              z(null);
            try {
              en
                ? await (0, v.updateSound)({
                    guildId: J,
                    soundId: C.soundId,
                    name: y,
                    volume: R,
                    emojiId: L,
                    emojiName: U,
                  })
                : await ei(),
                x();
            } catch (e) {
              $(e);
            } finally {
              Z("ready"), H(!1), w(1), k(1);
            }
          }, [en, x, J, C, y, R, L, U, ei, k]);
        s.useEffect(() => {
          V(null),
            g.default.track(O.AnalyticEvents.OPEN_MODAL, {
              type: "Soundboard Upload Sound",
              guild_id: J,
            });
        }, []),
          s.useEffect(() => {
            w(Math.min(R, B));
          }, [R, w, B]);
        let er = (0, i.jsx)(h.default, {
          guildId: J,
          emojiId: L,
          emojiName: U,
          setEmojiId: P,
          setEmojiName: j,
          error: null == W ? void 0 : W.getFirstFieldErrorMessage("emoji"),
          isRequiredField: !1,
        });
        return (0, i.jsxs)(c.ModalRoot, {
          transitionState: M,
          children: [
            (0, i.jsx)(c.ModalCloseButton, {
              onClick: x,
              className: D.modalClose,
            }),
            (0, i.jsx)(c.ModalHeader, {
              className: D.headerContainer,
              separator: !1,
              children: (0, i.jsx)(c.Heading, {
                className: D.header,
                variant: "heading-xl/extrabold",
                children: en
                  ? A.default.Messages.SOUNDBOARD_SOUND_UPDATE_MODAL_HEADER
                  : A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_HEADER,
              }),
            }),
            (0, i.jsxs)(c.ModalContent, {
              className: D.content,
              children: [
                null != W &&
                  !W.hasFieldErrors() &&
                  (0, i.jsx)(c.FormErrorBlock, {
                    className: D.section,
                    children: W.message,
                  }),
                I
                  ? (0, i.jsx)(c.FormItem, {
                      required: !0,
                      className: D.section,
                      title:
                        A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT,
                      children: (0, i.jsx)(N.default, {
                        value: J,
                        onChange: K,
                      }),
                    })
                  : null,
                (en || null != F) &&
                  (0, i.jsx)(S.default, {
                    sound: C,
                    volume: R,
                    disabled: et,
                    onChange: q,
                  }),
                en || null != o
                  ? null
                  : (0, i.jsx)(c.FormItem, {
                      required: !0,
                      error:
                        null == W
                          ? void 0
                          : W.getFirstFieldErrorMessage("sound"),
                      className: D.section,
                      title:
                        A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_FILE,
                      children: (0, i.jsx)(m.default, {
                        filename:
                          null !== (a = null == F ? void 0 : F.name) &&
                          void 0 !== a
                            ? a
                            : "",
                        buttonText:
                          A.default.Messages
                            .SOUNDBOARD_SOUND_UPLOAD_MODAL_BROWSE,
                        placeholder:
                          A.default.Messages
                            .SOUNDBOARD_SOUND_UPLOAD_MODAL_INPUT_PLACEHOLDER,
                        onFileSelect: Q,
                        filters: b,
                      }),
                    }),
                (0, i.jsxs)("div", {
                  className: D.multiInput,
                  children: [
                    (0, i.jsx)(c.FormItem, {
                      required: !0,
                      error:
                        null == W
                          ? void 0
                          : W.getFirstFieldErrorMessage("name"),
                      className: u(D.section, D.halfInput),
                      title:
                        A.default.Messages
                          .SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,
                      children: (0, i.jsx)(c.TextInput, {
                        placeholder:
                          A.default.Messages
                            .SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,
                        value: y,
                        onChange: T,
                        maxLength: _.MAX_LENGTH_SOUND_NAME,
                      }),
                    }),
                    er,
                  ],
                }),
                (0, i.jsx)(c.FormItem, {
                  error:
                    null == W ? void 0 : W.getFirstFieldErrorMessage("volume"),
                  className: D.section,
                  title:
                    A.default.Messages
                      .SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_VOLUME,
                  children: (0, i.jsx)(c.Slider, {
                    initialValue: R,
                    onValueChange: e => w(e),
                    minValue: 0,
                    maxValue: B,
                  }),
                }),
              ],
            }),
            (0, i.jsxs)(c.ModalFooter, {
              children: [
                (0, i.jsx)(c.Button, {
                  disabled: !el,
                  submitting: G,
                  size: c.Button.Sizes.SMALL,
                  onClick: es,
                  children: en
                    ? A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SAVE
                    : A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_UPLOAD,
                }),
                (0, i.jsx)(c.Button, {
                  disabled: G,
                  onClick: x,
                  size: c.Button.Sizes.SMALL,
                  look: c.Button.Looks.LINK,
                  color: c.Button.Colors.PRIMARY,
                  children:
                    A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_CANCEL,
                }),
                null != ee &&
                  (0, i.jsx)("div", {
                    className: D.soundStateHint,
                    children: (0, i.jsx)(c.Text, {
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
            return b;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        i = n("414456"),
        s = n.n(i),
        r = n("446674"),
        u = n("77078"),
        o = n("817963"),
        d = n("305961"),
        c = n("957255"),
        f = n("677099"),
        h = n("697218"),
        m = n("476263"),
        g = n("368121"),
        v = n("427459"),
        S = n("299039"),
        E = n("305122"),
        p = n("235004"),
        N = n("846325"),
        _ = n("49111"),
        O = n("782340"),
        A = n("216445");
      function D(e) {
        let { availableSlots: t, className: n } = e;
        return (0, l.jsxs)(u.Text, {
          className: s(A.suffixNode, n),
          variant: "text-sm/medium",
          color: "text-primary",
          children: [
            (0, l.jsx)(g.default, { className: A.speakerIcon }),
            O.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_AVAILABLE_COUNT.format(
              { slots: t }
            ),
          ],
        });
      }
      function b(e) {
        let { value: t, className: n, onChange: i } = e,
          g = (0, r.useStateFromStoresObject)(
            [f.default, c.default, h.default, d.default],
            () => {
              let e = {};
              for (let t of f.default.getFlattenedGuildIds()) {
                let n = d.default.getGuild(t);
                if (null == n) continue;
                let l = (0, o.getManageResourcePermissions)(
                  n,
                  c.default,
                  h.default
                );
                l.canCreateExpressions && (e[n.id] = n);
              }
              return e;
            }
          ),
          b = (0, r.useStateFromStoresObject)(
            [p.default],
            () => {
              let e = {};
              for (let [n, l] of S.default.entries(g)) {
                var t;
                let a = (0, v.getAvailableSoundboardSoundCount)(
                  null !== (t = p.default.getSoundsForGuild(n)) && void 0 !== t
                    ? t
                    : N.EMPTY_SOUND_LIST,
                  l.premiumTier
                );
                e[n] = a;
              }
              return e;
            },
            [g]
          );
        a.useEffect(() => {
          (0, E.maybeFetchSoundboardSounds)();
        }, []);
        let C = a.useMemo(
            () =>
              Object.values(g).map(e => {
                let { name: t, id: n } = e;
                return { label: t, value: n, disabled: b[n] <= 0 };
              }),
            [g, b]
          ),
          x = a.useCallback(
            e =>
              null == e || "" === e.value
                ? null
                : (0, l.jsx)(m.default, {
                    className: s(A.guildSelectOptionIcon, {
                      [A.disabledOption]: e.disabled,
                    }),
                    guild: g[e.value],
                    size: m.default.Sizes.SMOL,
                    active: !0,
                  }),
            [g]
          ),
          M = a.useCallback(
            e => {
              let t = null == e ? void 0 : e.value;
              return null == t || "" === t
                ? null
                : (0, l.jsx)(D, {
                    className: s({
                      [A.disabledOption]: null == e ? void 0 : e.disabled,
                    }),
                    availableSlots: b[t],
                  });
            },
            [b]
          ),
          I = a.useCallback(
            e =>
              (0, l.jsx)("div", {
                className: s({ [A.disabledOption]: e.disabled }),
                children: e.label,
              }),
            []
          ),
          y = a.useCallback(
            e => {
              !(b[e] <= 0) && i(e);
            },
            [b, i]
          ),
          T = (() => {
            let e = b[null != t ? t : _.EMPTY_STRING_SNOWFLAKE_ID];
            return null == e || e > 0 ? t : void 0;
          })();
        return (0, l.jsx)(u.SearchableSelect, {
          className: n,
          onChange: y,
          value: T,
          multi: !1,
          options: C,
          renderOptionPrefix: x,
          renderOptionSuffix: M,
          renderOptionLabel: I,
          placeholder:
            0 === C.length
              ? O.default.Messages
                  .SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_NONE_AVAILABLE
              : O.default.Messages
                  .SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_PLACEHOLDER,
        });
      }
    },
    181114: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ShineSizes: function () {
            return a;
          },
          Shine: function () {
            return v;
          },
          default: function () {
            return E;
          },
        });
      var l,
        a,
        i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        u = n.n(r),
        o = n("458960"),
        d = n("77078"),
        c = n("252744"),
        f = n("145131"),
        h = n("61435");
      ((l = a || (a = {})).DEFAULT = "default"), (l.SMALL = "small");
      let m = { default: h.shineDefault, small: h.shineSmall },
        g = { default: h.shineInnerDefault, small: h.shineInnerSmall };
      class v extends s.PureComponent {
        render() {
          let { className: e, shineSize: t, shinePaused: n, ...l } = this.props;
          return (0, i.jsx)(o.default.div, {
            ...l,
            className: u(h.shineContainer, e, { [h.shinePaused]: n }),
            children: (0, i.jsx)(f.default, {
              align: f.default.Align.CENTER,
              justify: f.default.Justify.CENTER,
              className: m[t],
              children: (0, i.jsx)("div", { className: g[t] }),
            }),
          });
        }
      }
      v.defaultProps = { shineSize: "default" };
      let S = e => {
        let {
            children: t,
            className: n,
            disabled: l,
            submitting: a,
            pauseAnimation: r,
            shineSize: o = "default",
            shinePaused: f,
            buttonShineClassName: m,
            onlyShineOnHover: g,
            ...S
          } = e,
          E = s.createRef(),
          p = (0, c.default)(E),
          N = !l && !a && !0 !== r && (!g || p);
        return (0, i.jsxs)(d.Button, {
          buttonRef: E,
          ...S,
          className: u(h.shinyButton, n),
          disabled: l,
          submitting: a,
          children: [
            t,
            N
              ? (0, i.jsx)(v, {
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
      S.ShineSizes = a;
      var E = S;
    },
    461380: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return g;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("414456"),
        i = n.n(a),
        s = n("384737"),
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
              height: a = 24,
              color: m = "currentColor",
              transition: g = f.transition,
              className: v,
              foreground: S,
              expanded: E,
              ...p
            } = e,
            { enabled: N } = (0, d.useRedesignIconContext)(),
            _ = t;
          if ((!0 === E ? (_ = h.DOWN) : !1 === E && (_ = h.RIGHT), N)) {
            let e = {
              [h.UP]: o.ChevronSmallUpIcon,
              [h.DOWN]: s.ChevronSmallDownIcon,
              [h.LEFT]: r.ChevronSmallLeftIcon,
              [h.RIGHT]: u.ChevronSmallRightIcon,
            }[_];
            return (0, l.jsx)(e, {
              ...p,
              className: v,
              width: n,
              height: a,
              color: m,
              colorClass: S,
            });
          }
          return (0, l.jsx)("svg", {
            className: i(v, g, _),
            width: n,
            height: a,
            viewBox: "0 0 24 24",
            ...(0, c.default)(p),
            children: (0, l.jsx)("path", {
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
      var l = n("37983");
      n("884691");
      var a = n("469563"),
        i = n("424823"),
        s = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              foreground: i,
              ...r
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, s.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, l.jsx)("path", {
                fill: a,
                className: i,
                d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z",
              }),
            });
          },
          i.PlusSmallIcon,
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
      var l = n("37983");
      n("884691");
      var a = n("469563"),
        i = n("912758"),
        s = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: n = 16,
              color: a = "currentColor",
              foreground: i,
              ...r
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, s.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 16 16",
              children: (0, l.jsx)("path", {
                className: i,
                fill: a,
                d: "M12.6667 2.00195H3.33333C2.6 2.00195 2 2.60195 2 3.33529V12.6686C2 13.402 2.6 14.002 3.33333 14.002H12.6667C13.4 14.002 14 13.402 14 12.6686V3.33529C14 2.60195 13.4 2.00195 12.6667 2.00195Z",
              }),
            });
          },
          i.StopIcon,
          void 0,
          { size: 16 }
        );
    },
    866190: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useIsWindowFocused: function () {
            return r;
          },
        });
      var l = n("884691"),
        a = n("446674"),
        i = n("244201"),
        s = n("471671");
      function r() {
        let { windowId: e } = l.useContext(i.default);
        return (0, a.useStateFromStores)(
          [s.default],
          () => s.default.isFocused(e),
          [e]
        );
      }
    },
    632874: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PlusSmallIcon: function () {
            return s;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        i = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...u
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, i.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
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
            return s;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        i = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...u
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, i.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("rect", {
            width: t,
            height: n,
            x: "3",
            y: "3",
            fill: "string" == typeof s ? s : s.css,
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
          VisibilityObserver: function () {
            return s;
          },
        }),
        n("222007");
      var l = n("817736"),
        a = n("118810");
      let i = { root: null, rootMargin: "0px", threshold: 0.5 };
      class s {
        isVisible(e) {
          return null == this._observer || this._visibleComponents.has(e);
        }
        observe(e) {
          let t = this._observer;
          if (null == t) return;
          this.unobserve(e);
          let n = (0, l.findDOMNode)(e);
          (0, a.isElement)(n, HTMLElement) &&
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
      }
    },
    235855: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VisibilitySensor: function () {
            return o;
          },
        }),
        n("222007"),
        n("70102");
      var l = n("884691"),
        a = n("748820"),
        i = n("157590");
      let s = (0, a.v4)(),
        r = new Map(),
        u = new Map();
      class o extends l.Component {
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
          return l.Children.only(this.props.children);
        }
        constructor(e) {
          super(e), (this.isVisible = !1);
          let { root: t, rootMargin: n, threshold: l } = e;
          t
            ? r.has(t)
              ? (this.elementId = r.get(t) || "")
              : r.set(t, (0, a.v4)())
            : (this.elementId = s);
          let o = this.getVisibilityObserverId();
          !u.has(o) &&
            u.set(
              o,
              new i.VisibilityObserver({ root: t, rootMargin: n, threshold: l })
            );
        }
      }
      o.defaultProps = {
        active: !0,
        children: l.createElement("span"),
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0, Number.MIN_VALUE],
      };
    },
    290381: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VisibilityObserver: function () {
            return l.VisibilityObserver;
          },
          VisibilitySensor: function () {
            return a.VisibilitySensor;
          },
        }),
        n("6268");
      var l = n("157590"),
        a = n("235855");
    },
  },
]);
//# sourceMappingURL=8d6561cbc397d73425a1.js.map
