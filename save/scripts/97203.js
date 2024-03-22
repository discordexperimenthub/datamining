(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["97203"],
  {
    295544: function (e, t, a) {
      "use strict";
      e.exports = a.p + "e866c0682a80de08f451.svg";
    },
    195272: function (e, t, a) {
      "use strict";
      e.exports = a.p + "e69c6ba7f0551970b560.svg";
    },
    907572: function (e, t, a) {
      "use strict";
      a.r(t);
      var l = a("437816");
      a.es(l, t);
    },
    304983: function (e, t, a) {
      "use strict";
      a.r(t);
      var l = a("541742");
      a.es(l, t);
    },
    758946: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          createAudioMP4FromVideoMP4: function () {
            return r;
          },
        }),
        a("222007"),
        a("424973");
      var l = a("469520"),
        n = a.n(l);
      async function r(e) {
        let t = n.createFile(),
          a = n.createFile(),
          l = {};
        (e.fileStart = 0),
          (t.onReady = e => {
            for (let n of (a.init({
              duration: e.duration,
              timescale: e.timescale,
            }),
            e.audioTracks))
              (l[n.id] = n),
                t.setExtractionOptions(n.id, null, { nbSamples: 1 / 0 }),
                a.addTrack({
                  id: n.id,
                  timescale: n.timescale,
                  hdlr: "soun",
                  type: "mp4a",
                  duration: n.duration,
                  layer: n.layer,
                  channel_count: n.audio.channel_count,
                  samplerate: n.audio.sample_rate,
                  samplesize: n.audio.sample_size,
                  name: n.name,
                });
            t.start();
          });
        let r = new Promise(e => {
          t.onSamples = (n, r, i) => {
            for (let e of i) a.addSample(n, e.data, e);
            t.releaseUsedSamples(n, i.length), delete l[n];
            let s = a.getTrackById(n),
              u = t.getTrackById(n);
            if (null != u.edts) {
              let e = u.edts.elst;
              s.add("edts").boxes.push(e);
            }
            0 === Object.keys(l).length && e();
          };
        });
        return t.appendBuffer(e), t.flush(), await r, a.getBuffer();
      }
    },
    712652: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return c;
          },
        });
      var l = a("37983"),
        n = a("884691"),
        r = a("77078"),
        i = a("5431"),
        s = a("464135"),
        u = a("28388"),
        o = a("141210"),
        d = a("204839");
      function c(e) {
        let {
            isLoading: t,
            onDoneLoading: a,
            videoURL: c,
            audioURL: f,
            transitionState: m,
          } = e,
          {
            videoPlayerRef: v,
            cropData: p,
            applicationAudioEnabled: h,
            voiceAudioEnabled: x,
          } = (0, o.useEditModalContext)(),
          C = n.useCallback(() => {
            var e;
            null === (e = v.current) || void 0 === e || e.seek(p.start), a();
          }, [a, p.start]);
        return (
          n.useEffect(() => {
            function e(e) {
              var t, a;
              if (
                (null === (t = document.activeElement) || void 0 === t
                  ? void 0
                  : t.tagName) === "INPUT"
              )
                return;
              let l = v.current;
              if (null == l) return;
              let n =
                null === (a = v.current) || void 0 === a
                  ? void 0
                  : a.videoElement;
              if (null == n) return;
              let r = (0, u.default)(n.duration, e.shiftKey),
                i = !1;
              switch (e.key) {
                case " ":
                  (i = !0), n.paused ? l.play() : l.pause();
                  break;
                case "ArrowLeft":
                  (i = !0), l.seek(Math.max(n.currentTime - r, p.start));
                  break;
                case "ArrowRight":
                  (i = !0), l.seek(Math.min(n.currentTime + r, p.end));
              }
              i && (e.stopPropagation(), e.preventDefault());
            }
            return (
              document.addEventListener("keydown", e),
              () => document.removeEventListener("keydown", e)
            );
          }, [p.start, p.end, v]),
          (0, l.jsxs)("div", {
            className: d.editorPane,
            children: [
              (0, l.jsx)("div", {
                className: d.videoSizer,
                children: (0, l.jsx)(i.default, {
                  applicationAudioEnabled: h,
                  voiceAudioEnabled: x,
                  ref: v,
                  audioSrc: f,
                  src: c,
                  isLoading: t,
                  onDoneLoading: C,
                  startTime: p.start,
                  endTime: p.end,
                }),
              }),
              !t &&
              m &&
              [
                r.ModalTransitionState.ENTERED,
                r.ModalTransitionState.HIDDEN,
              ].includes(m)
                ? (0, l.jsx)(s.default, { sourceURL: c })
                : null,
            ],
          })
        );
      }
    },
    643290: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return m;
          },
        }),
        a("222007");
      var l = a("37983"),
        n = a("884691"),
        r = a("446674"),
        i = a("77078"),
        s = a("442939"),
        u = a("915639"),
        o = a("953109"),
        d = a("299039"),
        c = a("782340"),
        f = a("16194");
      function m(e) {
        var t, a;
        let { clip: m } = e,
          [v] = (0, s.default)([
            null !== (t = m.applicationId) && void 0 !== t ? t : "",
          ]),
          p = (0, r.useStateFromStores)([u.default], () => u.default.locale),
          h = n.useMemo(
            () => new Date(d.default.extractTimestamp(m.id)),
            [m.id]
          );
        return (0, l.jsxs)("div", {
          className: f.root,
          children: [
            (0, l.jsxs)("div", {
              className: f.nameSection,
              children: [
                (0, l.jsx)(o.default, { game: v }),
                (0, l.jsx)(i.Text, {
                  className: f.name,
                  variant: "text-md/medium",
                  color: "interactive-active",
                  children:
                    null !== (a = null == v ? void 0 : v.name) && void 0 !== a
                      ? a
                      : m.applicationName,
                }),
              ],
            }),
            (0, l.jsxs)("div", {
              className: f.timeContainer,
              children: [
                (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)(i.FormTitle, {
                      className: f.timeTitle,
                      children: c.default.Messages.CLIPS_EDIT_DATE_TITLE,
                    }),
                    (0, l.jsx)(i.Text, {
                      variant: "text-sm/normal",
                      color: "interactive-active",
                      children: h.toLocaleDateString(p, {
                        year: "2-digit",
                        month: "2-digit",
                        day: "2-digit",
                      }),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)(i.FormTitle, {
                      className: f.timeTitle,
                      children: c.default.Messages.CLIPS_EDIT_TIME_TITLE,
                    }),
                    (0, l.jsx)(i.Text, {
                      variant: "text-sm/normal",
                      color: "interactive-active",
                      children: h.toLocaleTimeString(p, {
                        hour: "numeric",
                        minute: "numeric",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    488673: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return _;
          },
        }),
        a("222007");
      var l = a("37983"),
        n = a("884691"),
        r = a("414456"),
        i = a.n(r),
        s = a("551042"),
        u = a("77078"),
        o = a("272030"),
        d = a("49671"),
        c = a("817963"),
        f = a("42203"),
        m = a("305961"),
        v = a("957255"),
        p = a("697218"),
        h = a("433487"),
        x = a("299039"),
        C = a("803725"),
        g = a("142485"),
        E = a("643290"),
        N = a("431734"),
        L = a("141210"),
        I = a("80028"),
        M = a("846325"),
        j = a("782340"),
        T = a("309799"),
        S = a("446825").Buffer;
      function _(e) {
        let {
            clip: t,
            channelId: r,
            clipName: _,
            onSetClipName: b,
            onClose: w,
          } = e,
          {
            videoPlayerRef: R,
            cropData: A,
            voiceAudioEnabled: y,
            setVoiceAudioEnabled: k,
            applicationAudioEnabled: D,
            setApplicationAudioEnabled: P,
          } = (0, L.useEditModalContext)(),
          [O, F] = n.useState(null),
          { onShareClick: B } = (0, g.default)({
            channelId: r,
            setExporting: e => F(null != e ? "share" : null),
          });
        async function U() {
          var e;
          let n = f.default.getChannel(r);
          F("export"), null === (e = R.current) || void 0 === e || e.pause();
          try {
            let e = await (0, C.exportClip)(t, {
              ...A,
              applicationAudio: D,
              voiceAudio: y,
            });
            (0, u.openModalLazy)(async () => {
              let { default: r } = await a
                  .el("823749")
                  .then(a.bind(a, "823749")),
                i =
                  (null == n ? void 0 : n.guild_id) != null
                    ? m.default.getGuild(n.guild_id)
                    : null,
                s =
                  null != i &&
                  (0, c.getManageResourcePermissions)(i, v.default, p.default)
                    .canCreateExpressions,
                u =
                  null == _ || "" === _
                    ? (0, I.CLIP_NAME_TEMPLATE)(
                        x.default.extractTimestamp(t.id)
                      )
                    : _,
                o = u.slice(0, M.MAX_LENGTH_SOUND_NAME);
              return t =>
                (0, l.jsx)(r, {
                  ...t,
                  showGuildPicker: !0,
                  guildId: s ? (null == n ? void 0 : n.guild_id) : void 0,
                  sourceFile: {
                    file: new File([e], "".concat(u, ".mp4"), {
                      type: "video/mp4",
                    }),
                    name: o,
                  },
                });
            });
          } catch (e) {
          } finally {
            F(null);
          }
        }
        async function H() {
          var e;
          F("export"), null === (e = R.current) || void 0 === e || e.pause();
          try {
            let e = await (0, C.exportClip)(t, {
                ...A,
                applicationAudio: D,
                voiceAudio: y,
              }),
              a = await e.arrayBuffer();
            await d.default.fileManager.saveWithDialog(
              S.from(a),
              (0, I.CLIPS_EXPORT_FILENAME)(t.id)
            );
          } catch (e) {
          } finally {
            F(null);
          }
        }
        function z() {
          var e;
          null === (e = R.current) || void 0 === e || e.pause(),
            (0, u.openModalLazy)(async () => {
              let { default: e } = await a
                .el("386092")
                .then(a.bind(a, "386092"));
              return a =>
                (0, l.jsx)(e, {
                  clip: t,
                  ...a,
                  onClose: async () => {
                    await a.onClose();
                  },
                  onAfterDelete: async () => {
                    await a.onClose(), w();
                  },
                });
            });
        }
        return (0, l.jsxs)("div", {
          className: T.clipForm,
          children: [
            (0, l.jsxs)("div", {
              className: i(T.clipFormSection, T.editSection),
              children: [
                (0, l.jsx)(u.FormItem, {
                  className: T.clipFormItem,
                  title: j.default.Messages.CLIPS_EDIT_TITLE,
                  children: (0, l.jsx)(u.TextInput, {
                    onChange: e => {
                      "" === e ? b(void 0) : b(e);
                    },
                    value: _,
                    minLength: I.CLIP_NAME_MIN_CHAR_LENGTH,
                    maxLength: I.CLIP_NAME_MAX_CHAR_LENGTH,
                    placeholder: j.default.Messages.CLIPS_UNTITLED,
                  }),
                }),
                (0, l.jsxs)("div", {
                  className: T.clipFormSwitches,
                  children: [
                    (0, l.jsx)(u.FormSwitch, {
                      onChange: P,
                      value: D,
                      hideBorder: !0,
                      children: j.default.Messages.CLIPS_EDIT_GAME_AUDIO,
                    }),
                    (0, l.jsx)(u.FormSwitch, {
                      onChange: k,
                      value: y,
                      hideBorder: !0,
                      children:
                        j.default.Messages.CLIPS_EDIT_VOICE_CHANNEL_AUDIO,
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsxs)("div", {
              className: i(T.clipFormSection, T.metadataSection),
              children: [
                (0, l.jsx)(E.default, { clip: t }),
                (0, l.jsx)(N.default, { className: T.userList, clip: t }),
              ],
            }),
            (0, l.jsxs)("div", {
              className: T.clipFormFooter,
              children: [
                (0, l.jsx)(u.Button, {
                  submitting: "share" === O,
                  disabled: null != O && "share" !== O,
                  color: u.Button.Colors.BRAND,
                  wrapperClassName: T.clipFormFooterButton,
                  onClick: () =>
                    B({
                      clip: { ...t, name: _ },
                      cropData: A,
                      applicationAudioEnabled: D,
                      voiceAudioEnabled: y,
                      onShareComplete: () => {
                        s.closeModal(I.CLIPS_EDIT_MODAL_KEY),
                          s.closeModal(I.CLIPS_GALLERY_MODAL_KEY);
                      },
                    }),
                  children: j.default.Messages.CLIPS_EDIT_SHARE_CLIP,
                }),
                (0, l.jsx)(u.Button, {
                  size: u.Button.Sizes.ICON,
                  className: T.clipFormFooterButton,
                  disabled: null != O,
                  wrapperClassName: i(T.clipFormFooterButton, {
                    [T.submittingWrapperFix]: null != O,
                  }),
                  color: u.Button.Colors.PRIMARY,
                  onClick: w,
                  children: j.default.Messages.SAVE_CHANGES,
                }),
                (0, l.jsx)(u.Button, {
                  "aria-label": j.default.Messages.MORE_OPTIONS,
                  size: u.Button.Sizes.ICON,
                  wrapperClassName: i(T.clipFormFooterButton, {
                    [T.submittingWrapperFix]: null != O,
                  }),
                  submitting: "export" === O,
                  disabled: null != O && "export" !== O,
                  color: u.Button.Colors.PRIMARY,
                  onClick: function (e) {
                    (0, o.openContextMenuLazy)(e, async () => {
                      let { default: e } = await a
                        .el("87102")
                        .then(a.bind(a, "87102"));
                      return t =>
                        (0, l.jsx)(e, {
                          ...t,
                          onExportToSoundboard: U,
                          onExportToFile: H,
                          onDelete: z,
                          channelId: r,
                        });
                    });
                  },
                  children: (0, l.jsx)(h.default, {}),
                }),
              ],
            }),
          ],
        });
      }
    },
    473070: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return E;
          },
        }),
        a("222007"),
        a("511434"),
        a("313619"),
        a("654714"),
        a("287168"),
        a("956660");
      var l = a("37983"),
        n = a("884691"),
        r = a("759843"),
        i = a("77078"),
        s = a("477566"),
        u = a("49671"),
        o = a("812204"),
        d = a("685665"),
        c = a("803725"),
        f = a("758946"),
        m = a("430481"),
        v = a("135284"),
        p = a("712652"),
        h = a("488673"),
        x = a("141210"),
        C = a("782340"),
        g = a("204839");
      function E(e) {
        var t, a, E, N, L, I, M, j;
        let { clip: T, channelId: S, transitionState: _, onClose: b } = e,
          [w, R] = n.useState(!0),
          [A, y] = n.useState(null),
          [k, D] = n.useState(null),
          { AnalyticsLocationProvider: P } = (0, d.default)(
            o.default.CLIPS_EDITOR
          );
        n.useEffect(() => {
          (async function e() {
            let e;
            try {
              e = await u.default.clips.loadClip(T.filepath);
            } catch {
              b(),
                s.default.show({
                  title: C.default.Messages.CLIPS_LOAD_ERROR_TITLE,
                  body: C.default.Messages.CLIPS_LOAD_ERROR_BODY,
                });
              return;
            }
            let t = e.data.buffer,
              a = await (0, f.createAudioMP4FromVideoMP4)(t),
              l = URL.createObjectURL(new Blob([a], { type: "audio/mp4" })),
              n = URL.createObjectURL(
                new Blob([e.data], { type: "video/mp4" })
              );
            D(l), y(n);
          })();
        }, [T.filepath, b]),
          n.useEffect(
            () => () => {
              null != A && URL.revokeObjectURL(A);
            },
            [A]
          ),
          n.useEffect(
            () => () => {
              null != k && URL.revokeObjectURL(k);
            },
            [k]
          );
        let [O, F] = n.useState(
            null ===
              (L =
                null === (t = T.editMetadata) || void 0 === t
                  ? void 0
                  : t.voiceAudio) ||
              void 0 === L ||
              L
          ),
          [B, U] = n.useState(
            null ===
              (I =
                null === (a = T.editMetadata) || void 0 === a
                  ? void 0
                  : a.applicationAudio) ||
              void 0 === I ||
              I
          ),
          [H, z] = n.useState({
            start:
              null !==
                (M =
                  null === (E = T.editMetadata) || void 0 === E
                    ? void 0
                    : E.start) && void 0 !== M
                ? M
                : 0,
            end:
              null !==
                (j =
                  null === (N = T.editMetadata) || void 0 === N
                    ? void 0
                    : N.end) && void 0 !== j
                ? j
                : 0,
          }),
          [Z, V] = n.useState(T.name),
          G = n.useRef({
            name: Z,
            editMetadata: {
              start: H.start,
              end: H.end,
              voiceAudio: O,
              applicationAudio: B,
            },
          });
        G.current = {
          name: Z,
          editMetadata: {
            start: H.start,
            end: H.end,
            voiceAudio: O,
            applicationAudio: B,
          },
        };
        let K = (0, v.useClipProtocolURL)(T);
        n.useEffect(() => {
          async function e() {
            let e = {};
            null != K &&
              (e = {
                thumbnail: await (0, m.createThumbnailFromVideo)(
                  K,
                  G.current.editMetadata.start
                ),
              }),
              (0, c.updateClipMetadata)(T.id, { ...G.current, ...e });
          }
          return () => {
            e();
          };
        }, [T.id, K]);
        let Y = n.useRef(null),
          W = n.useMemo(
            () => ({
              videoPlayerRef: Y,
              applicationAudioEnabled: B,
              setApplicationAudioEnabled: U,
              voiceAudioEnabled: O,
              setVoiceAudioEnabled: F,
              cropData: H,
              setCropData: z,
            }),
            [B, O, H]
          );
        return (0, l.jsx)(i.ModalRoot, {
          impression: { impressionName: r.ImpressionNames.CLIP_EDITOR_VIEWED },
          size: i.ModalSize.DYNAMIC,
          className: g.modalRoot,
          transitionState: _,
          children: (0, l.jsx)(P, {
            children: (0, l.jsx)(i.ModalContent, {
              className: g.modalContent,
              children: (0, l.jsx)(x.EditModalContext.Provider, {
                value: W,
                children:
                  null == A || null == k
                    ? (0, l.jsx)("div", {
                        className: g.spinnerContainer,
                        children: (0, l.jsx)(i.Spinner, {}),
                      })
                    : (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(p.default, {
                            videoURL: A,
                            isLoading: w,
                            onDoneLoading: () => R(!1),
                            audioURL: k,
                            transitionState: _,
                          }),
                          !w &&
                            (0, l.jsx)(h.default, {
                              channelId: S,
                              onSetClipName: V,
                              clipName: Z,
                              clip: T,
                              onClose: b,
                            }),
                        ],
                      }),
              }),
            }),
          }),
        });
      }
    },
    5431: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return d;
          },
        }),
        a("222007"),
        a("424973");
      var l = a("37983"),
        n = a("884691"),
        r = a("917351"),
        i = a("31695"),
        s = a("58608"),
        u = a("204839");
      function o(e) {
        let { setRef: t, audioTrackLabel: a, src: r, muted: i } = e,
          s = n.useCallback(
            e => {
              t(e, a);
            },
            [t, a]
          ),
          o = n.useCallback(
            e => {
              Object.values(e.currentTarget.audioTracks).forEach(e => {
                e.enabled = a === e.label;
              });
            },
            [a]
          );
        return (0, l.jsx)("audio", {
          id: "ClipsPlayerAudioTrack:".concat(a),
          className: u.hidden,
          ref: s,
          src: r,
          muted: i,
          preload: "auto",
          onLoadedMetadata: o,
        });
      }
      var d = n.forwardRef(function (e, t) {
        let {
            src: a,
            audioSrc: d,
            applicationAudioEnabled: c,
            voiceAudioEnabled: f,
            isLoading: m,
            onDoneLoading: v,
            startTime: p = 0,
            endTime: h,
          } = e,
          x = n.useRef({}),
          [C, g] = n.useState([]),
          E = n.useRef(!1),
          N = n.useCallback(() => {
            let e = x.current.main;
            if (null == e) return;
            let t = (0, r.round)(e.currentTime, 3),
              a = (0, r.round)(p, 3),
              l = null != h ? (0, r.round)(h, 3) : (0, r.round)(e.duration, 3);
            if (t >= l || t < a) {
              for (let e of Object.values(x.current))
                null != e && (e.currentTime = p);
              return !0;
            }
          }, [p, h]);
        (0, i.default)(() => {
          if (E.current) {
            let e = N();
            e && L();
          }
        });
        let L = n.useCallback(() => {
            for (let e of ((E.current = !0), N(), Object.values(x.current)))
              null != e && e.play();
          }, [N]),
          I = n.useCallback(() => {
            for (let e of Object.values(x.current)) null != e && e.pause();
          }, []),
          M = n.useCallback(e => {
            var t;
            for (let a of ((null === (t = x.current.main) || void 0 === t
              ? void 0
              : t.paused) && (E.current = !1),
            Object.values(x.current)))
              null != a && (a.currentTime = e);
          }, []),
          j = n.useCallback(() => {
            var e;
            (null === (e = x.current.main) || void 0 === e ? void 0 : e.paused)
              ? L()
              : I();
          }, [L, I]),
          T = n.useCallback(e => {
            x.current.main = e;
          }, []),
          S = n.useCallback(e => {
            let t = [];
            for (let a of Object.values(e.currentTarget.audioTracks))
              a.label.includes(":application")
                ? (a.enabled = !0)
                : a.label.includes(":voice")
                  ? ((a.enabled = !1), !t.includes(a.label) && t.push(a.label))
                  : (a.enabled = !1);
            g(t);
          }, []),
          _ = n.useCallback((e, t) => {
            x.current[t] = e;
          }, []);
        return (n.useImperativeHandle(t, () => ({
          play: L,
          seek: M,
          pause: I,
          videoElement: x.current.main,
        })),
        null == a)
          ? null
          : (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(s.default, {
                  onClick: j,
                  className: m ? u.hidden : u.displayVideo,
                  ref: T,
                  src: a,
                  muted: !0,
                  onLoadedData: v,
                  preload: "auto",
                }),
                (0, l.jsx)("audio", {
                  id: "ClipsPlayerAudioTrack:application",
                  src: d,
                  muted: !c,
                  preload: "auto",
                  className: u.hidden,
                  ref: e => _(e, "application"),
                  onLoadedMetadata: S,
                }),
                C.map(e =>
                  (0, l.jsx)(
                    o,
                    { audioTrackLabel: e, setRef: _, src: d, muted: !f },
                    e
                  )
                ),
              ],
            });
      });
    },
    464135: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return L;
          },
        }),
        a("222007");
      var l = a("37983"),
        n = a("884691"),
        r = a("414456"),
        i = a.n(r),
        s = a("917351"),
        u = a("65597"),
        o = a("718776"),
        d = a("77078"),
        c = a("731898"),
        f = a("31695"),
        m = a("471671"),
        v = a("830837"),
        p = a("132755"),
        h = a("58608"),
        x = a("28388"),
        C = a("141210"),
        g = a("80028"),
        E = a("782340"),
        N = a("504835"),
        L = function (e) {
          var t, a, r, L, j, T;
          let { sourceURL: S } = e,
            {
              videoPlayerRef: _,
              cropData: b,
              setCropData: w,
            } = (0, C.useEditModalContext)(),
            [R, A] = n.useState(
              ((T = !(null === (a = _.current) || void 0 === a
                ? void 0
                : null === (t = a.videoElement) || void 0 === t
                  ? void 0
                  : t.paused)),
              T)
            ),
            y = n.useRef(null),
            [k, D] = n.useState(null),
            [P, O] = n.useState(),
            F = n.useRef(null),
            B = n.useRef(null),
            [U, H] = n.useState(0),
            [z, Z] = n.useState(!1),
            [V, G] = n.useState(null);
          (0, f.default)(() => {
            var e;
            let t =
              null === (e = _.current) || void 0 === e
                ? void 0
                : e.videoElement;
            null != t && U !== t.currentTime && H(t.currentTime);
          });
          let K = n.useMemo(() => b.end - b.start, [b]);
          n.useEffect(() => {
            var e;
            let t =
                null === (e = _.current) || void 0 === e
                  ? void 0
                  : e.videoElement,
              a = F.current,
              l = B.current;
            if (null == t || null == a || null == l) return;
            let n = (0, s.debounce)(A, g.CLIP_PLAYING_DEBOUNCE_MS),
              r = () => {
                D(null), Z(!1), n.cancel(), n(!0);
              },
              i = () => {
                n.cancel(), n(!1);
              };
            return (
              t.addEventListener("play", r),
              t.addEventListener("pause", i),
              () => {
                t.removeEventListener("play", r),
                  t.removeEventListener("pause", i);
              }
            );
          }, [_]);
          let { ref: Y, width: W = 0, height: X = 0 } = (0, c.default)(),
            q = (0, u.useStateFromStores)([m.default], () =>
              m.default.windowSize()
            );
          n.useMemo(() => {
            let e = Y.current;
            null != e && G(e.getBoundingClientRect());
          }, [q.width, q.height, W]);
          let J = n.useRef(null),
            Q = n.useRef({}),
            $ = n.useCallback(
              e => {
                var t;
                let a = (0, s.clamp)(e, 0, b.end - g.MIN_CLIP_DURATION_SECONDS);
                w({ ...b, start: a }),
                  null === (t = _.current) || void 0 === t || t.seek(a);
              },
              [b, w, _]
            ),
            ee = n.useCallback(
              e => {
                var t, a;
                let l =
                  null === (t = _.current) || void 0 === t
                    ? void 0
                    : t.videoElement;
                if (null == l) return;
                let n = (0, s.clamp)(
                  e,
                  b.start + g.MIN_CLIP_DURATION_SECONDS,
                  l.duration
                );
                w({ ...b, end: n }),
                  null === (a = _.current) || void 0 === a || a.seek(n);
              },
              [b, w, _]
            ),
            et = n.useCallback(
              (e, t) => {
                var a, l;
                if (null == P) return;
                if (null == V) return null;
                let n = (0, s.clamp)(e, V.left, V.right),
                  r = ((n - V.left) / V.width) * P,
                  i = (0, s.clamp)(r, 0, P),
                  u = k;
                if (
                  (null == u &&
                    t &&
                    ((u =
                      i <= b.start ? "start" : i >= b.end ? "end" : "playhead"),
                    null === (a = _.current) || void 0 === a || a.pause(),
                    D(u),
                    Z(R)),
                  "start" === u)
                )
                  $(i);
                else if ("end" === u) ee(i);
                else if ("playhead" === u) {
                  let e = (0, s.clamp)(i, b.start, b.end);
                  null === (l = _.current) || void 0 === l || l.seek(e);
                }
              },
              [P, V, k, b.start, b.end, _, R, $, ee]
            ),
            ea = n.useCallback(
              e => {
                var t;
                let a =
                  null === (t = _.current) || void 0 === t
                    ? void 0
                    : t.videoElement;
                if (null == a) return;
                let l = (0, x.default)(a.duration, e.shiftKey),
                  n = !1;
                switch (e.key) {
                  case "ArrowLeft":
                    (n = !0), $(b.start - l);
                    break;
                  case "ArrowRight":
                    (n = !0), $(b.start + l);
                }
                n && (e.stopPropagation(), e.preventDefault());
              },
              [_, $, b.start]
            ),
            el = n.useCallback(
              e => {
                var t;
                let a =
                  null === (t = _.current) || void 0 === t
                    ? void 0
                    : t.videoElement;
                if (null == a) return;
                let l = (0, x.default)(a.duration, e.shiftKey),
                  n = !1;
                switch (e.key) {
                  case "ArrowLeft":
                    (n = !0), ee(b.end - l);
                    break;
                  case "ArrowRight":
                    (n = !0), ee(b.end + l);
                }
                n && (e.stopPropagation(), e.preventDefault());
              },
              [_, ee, b.end]
            ),
            en = n.useCallback(
              e => {
                et(e.clientX, !0);
              },
              [et]
            ),
            er = n.useCallback(
              e => {
                et(e.clientX, !1);
              },
              [et]
            ),
            ei = n.useCallback(() => {
              if (z) {
                var e;
                null === (e = _.current) || void 0 === e || e.play();
              }
              Z(!1), D(null);
            }, [_, z]);
          n.useEffect(
            () => (
              document.addEventListener("mousemove", er),
              document.addEventListener("mouseup", ei),
              () => {
                document.removeEventListener("mousemove", er),
                  document.removeEventListener("mouseup", ei);
              }
            ),
            [er, ei]
          ),
            n.useEffect(() => {
              (async function e() {
                var e;
                let t = Y.current,
                  a = y.current;
                if (null == t || null == a || null == P) return;
                (t.height = X), (t.width = W);
                let l = t.getContext("2d");
                if (null == l) return;
                (l.fillStyle = "#000"), l.fillRect(0, 0, W, X);
                let n = a.videoWidth / a.videoHeight,
                  r = Math.ceil(X * n),
                  i = Math.ceil(W / r),
                  s = J.current;
                if (null == s) return;
                (s.width = r), (s.height = X);
                let u =
                  null == s
                    ? void 0
                    : s.getContext("2d", { willReadFrequently: !0 });
                if (null == u) return;
                let o = Q.current;
                if (
                  (null === (e = o[i]) || void 0 === e ? void 0 : e.length) ===
                  i
                ) {
                  for (let e = 0; e < i; e++) l.putImageData(o[i][e], r * e, 0);
                  return;
                }
                for (let e = 0; e < i; e++)
                  await new Promise(t => {
                    (a.onseeked = () => {
                      l.drawImage(a, r * e, 0, r, X),
                        u.drawImage(a, 0, 0, r, X);
                      let n = u.getImageData(0, 0, r, X);
                      null == o[i] && (o[i] = []), (o[i][e] = n), t();
                    }),
                      (a.currentTime = (r / W) * P * e);
                  });
              })();
            }, [W, X, Y, P, J]);
          let es = U - b.start,
            eu =
              null === (r = _.current) || void 0 === r
                ? void 0
                : r.videoElement;
          return (0, l.jsx)("div", {
            className: N.centeringWrapper,
            children: (0, l.jsxs)("div", {
              className: N.timelineContainer,
              children: [
                (0, l.jsx)("div", {
                  className: N.playPauseButtonWrapper,
                  children: (0, l.jsx)(d.Clickable, {
                    tabIndex: 0,
                    onClick: () => {
                      var e, t;
                      return R
                        ? null === (e = _.current) || void 0 === e
                          ? void 0
                          : e.pause()
                        : null === (t = _.current) || void 0 === t
                          ? void 0
                          : t.play();
                    },
                    className: N.playPauseButton,
                    children: R
                      ? (0, l.jsx)(v.default, {
                          width: 24,
                          height: 24,
                          className: N.playPauseIcon,
                        })
                      : (0, l.jsx)(p.default, {
                          width: 24,
                          height: 24,
                          className: N.playPauseIcon,
                        }),
                  }),
                }),
                (0, l.jsxs)("div", {
                  className: i(N.timeline, { [N.timelineDragging]: null != k }),
                  onMouseDown: en,
                  children: [
                    (0, l.jsx)("canvas", { className: N.hiddenCanvas, ref: J }),
                    (0, l.jsx)("canvas", {
                      className: N.timelineBackground,
                      ref: Y,
                    }),
                    (0, l.jsx)(o.FocusRing, {
                      children: (0, l.jsx)("div", {
                        tabIndex: 0,
                        ref: F,
                        className: N.playhead,
                        style: {
                          left:
                            null != eu
                              ? "".concat(
                                  (eu.currentTime / eu.duration) * 100,
                                  "%"
                                )
                              : 0,
                        },
                      }),
                    }),
                    (0, l.jsx)(h.default, {
                      preload: "auto",
                      onLoadedMetadata: function () {
                        let e = y.current;
                        if (null != e) {
                          if (
                            (O(e.duration),
                            0 === b.start &&
                              (0 === b.end || b.end === e.duration))
                          ) {
                            var t;
                            null === (t = _.current) ||
                              void 0 === t ||
                              t.seek(e.duration / 2),
                              H(e.duration / 2);
                          }
                          0 === b.end && w(t => ({ ...t, end: e.duration }));
                        }
                      },
                      className: N.timelineVideo,
                      ref: y,
                      src: S,
                      muted: !0,
                    }),
                    (0, l.jsxs)("div", {
                      className: N.dragBox,
                      style: {
                        left:
                          null != P ? "".concat((b.start / P) * 100, "%") : "0",
                        right:
                          null != P
                            ? "".concat(((P - b.end) / P) * 100, "%")
                            : "0",
                      },
                      children: [
                        (0, l.jsx)("div", {
                          className: N.timePillContainer,
                          children: (0, l.jsx)("div", {
                            ref: B,
                            className: N.timePillBackground,
                            children: (0, l.jsxs)(d.Text, {
                              variant: "text-sm/normal",
                              className: N.timePillText,
                              color: "always-white",
                              children: [
                                I(es),
                                (0, l.jsx)("span", {
                                  className: N.slashCharacter,
                                  children: " / ",
                                }),
                                I(K),
                              ],
                            }),
                          }),
                        }),
                        (0, l.jsx)(o.FocusRing, {
                          children: (0, l.jsx)("button", {
                            className: i(N.dragHandleLeft, {
                              [N.dragging]: "start" === k,
                            }),
                            onMouseDown: en,
                            onKeyDown: ea,
                            role: "slider",
                            tabIndex: 0,
                            "aria-valuemin": 0,
                            "aria-valuenow": b.start,
                            "aria-valuetext": M(b.start),
                            "aria-valuemax":
                              b.end - g.MIN_CLIP_DURATION_SECONDS,
                            "aria-label": E.default.Messages.CLIPS_CROP_START,
                            children: (0, l.jsx)("div", {
                              className: N.cropLeftArrow,
                            }),
                          }),
                        }),
                        (0, l.jsx)(o.FocusRing, {
                          children: (0, l.jsx)("button", {
                            className: i(N.dragHandleRight, {
                              [N.dragging]: "end" === k,
                            }),
                            onMouseDown: en,
                            onKeyDown: el,
                            role: "slider",
                            tabIndex: 0,
                            "aria-valuemin":
                              b.start + g.MIN_CLIP_DURATION_SECONDS,
                            "aria-valuenow": b.end,
                            "aria-valuetext": M(b.end),
                            "aria-valuemax":
                              null === (j = _.current) || void 0 === j
                                ? void 0
                                : null === (L = j.videoElement) || void 0 === L
                                  ? void 0
                                  : L.duration,
                            "aria-label": E.default.Messages.CLIPS_CROP_END,
                            children: (0, l.jsx)("div", {
                              className: N.cropRightArrow,
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      function I(e) {
        ((e = Math.round(100 * e) / 100) < 0 || 0.01 > Math.abs(e)) && (e = 0);
        let t = Math.floor(e / 60),
          a = Math.floor(e % 60),
          l = Math.floor((e % 1) * 100);
        return (
          (t = t < 10 ? "0" + t : t),
          (a = a < 10 ? "0" + a : a),
          (l = l < 10 ? "0" + l : l),
          "".concat(t, ":").concat(a, ".").concat(l)
        );
      }
      function M(e) {
        let t = E.default.Messages.DURATION_MINUTES.format({
            minutes: Math.floor(e / 60),
          }),
          a = E.default.Messages.DURATION_SECONDS.format({ seconds: e % 60 });
        return "".concat(t, " ").concat(a);
      }
    },
    431734: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return x;
          },
        });
      var l = a("37983"),
        n = a("884691"),
        r = a("414456"),
        i = a.n(r),
        s = a("446674"),
        u = a("77078"),
        o = a("308289"),
        d = a("697218"),
        c = a("564875"),
        f = a("449008"),
        m = a("387111"),
        v = a("782340"),
        p = a("655357");
      function h(e) {
        let { user: t } = e,
          a = m.default.useName(null, null, t);
        return (0, l.jsxs)("div", {
          className: p.userItem,
          children: [
            (0, l.jsx)(o.default, { user: t }),
            (0, l.jsx)(u.Text, {
              color: "header-primary",
              variant: "text-sm/medium",
              children: a,
            }),
          ],
        });
      }
      function x(e) {
        let { clip: t, className: a } = e,
          r = (0, s.useStateFromStoresArray)([d.default], () =>
            t.users.map(d.default.getUser).filter(f.isNotNullish)
          ),
          o = n.useCallback(
            e => {
              let { row: t } = e,
                a = r[t];
              return null == a ? null : (0, l.jsx)(h, { user: a }, t);
            },
            [r]
          );
        return (0, l.jsxs)("div", {
          className: i(a, p.root),
          children: [
            (0, l.jsx)("div", {
              className: p.header,
              children: (0, l.jsxs)(u.FormTitle, {
                className: p.title,
                children: [
                  v.default.Messages.CLIPS_EDIT_USER_LIST_TITLE,
                  (0, l.jsxs)("div", {
                    className: p.userCountPill,
                    children: [
                      (0, l.jsx)(u.Text, {
                        color: "text-normal",
                        variant: "text-xs/medium",
                        children: r.length,
                      }),
                      (0, l.jsx)(c.default, { className: p.userCountIcon }),
                    ],
                  }),
                ],
              }),
            }),
            (0, l.jsx)(u.List, {
              className: p.userList,
              sectionHeight: 0,
              rowHeight: 40,
              sections: [r.length],
              renderRow: o,
            }),
          ],
        });
      }
    },
    28388: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return n;
          },
        });
      var l = a("80028");
      function n(e, t) {
        let a = e / l.SEEK_DENOMINATOR;
        return t && (a /= l.SEEK_SHIFT_MODIFIER), a;
      }
    },
    141210: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          EditModalContext: function () {
            return n;
          },
          useEditModalContext: function () {
            return r;
          },
        });
      var l = a("884691");
      let n = l.createContext({
        videoPlayerRef: { current: null },
        applicationAudioEnabled: !0,
        setApplicationAudioEnabled: () => {},
        voiceAudioEnabled: !0,
        setVoiceAudioEnabled: () => {},
        cropData: { start: 0, end: 0 },
        setCropData: () => {},
      });
      function r() {
        return l.useContext(n);
      }
    },
    433487: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return s;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("469563"),
        r = a("304983"),
        i = a("75196"),
        s = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: a = 24,
              color: n = "currentColor",
              foreground: r,
              ...s
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, i.default)(s),
              width: t,
              height: a,
              viewBox: "0 0 24 24",
              children: (0, l.jsx)("path", {
                fill: n,
                className: r,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z",
              }),
            });
          },
          r.MoreHorizontalIcon,
          void 0,
          { size: 24 }
        );
    },
    564875: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return s;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("469563"),
        r = a("907572"),
        i = a("75196"),
        s = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: a = 16,
              color: n = "currentColor",
              foreground: r,
              ...s
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, i.default)(s),
              width: t,
              height: a,
              viewBox: "0 0 24 24",
              children: (0, l.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                  (0, l.jsx)("path", {
                    fill: n,
                    className: r,
                    fillRule: "nonzero",
                    d: "M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z",
                    transform: "translate(2 4)",
                  }),
                  (0, l.jsx)("path", {
                    d: "M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z",
                  }),
                ],
              }),
            });
          },
          r.FriendsIcon,
          void 0,
          { size: 16 }
        );
    },
    437816: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          FriendsIcon: function () {
            return i;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("669491"),
        r = a("82169");
      let i = e => {
        let {
          width: t = 24,
          height: a = 24,
          color: i = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...u
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, r.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: a,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M13 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
              className: s,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M3 5v-.75C3 3.56 3.56 3 4.25 3s1.24.56 1.33 1.25C6.12 8.65 9.46 12 13 12h1a8 8 0 0 1 8 8 2 2 0 0 1-2 2 .21.21 0 0 1-.2-.15 7.65 7.65 0 0 0-1.32-2.3c-.15-.2-.42-.06-.39.17l.25 2c.02.15-.1.28-.25.28H9a2 2 0 0 1-2-2v-2.22c0-1.57-.67-3.05-1.53-4.37A15.85 15.85 0 0 1 3 5Z",
              className: s,
            }),
          ],
        });
      };
    },
    541742: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          MoreHorizontalIcon: function () {
            return i;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("669491"),
        r = a("82169");
      let i = e => {
        let {
          width: t = 24,
          height: a = 24,
          color: i = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...u
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, r.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: a,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            fillRule: "evenodd",
            d: "M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
            clipRule: "evenodd",
            className: s,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=8d9b2e37087edc922984.js.map
