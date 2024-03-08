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
            return i;
          },
        }),
        a("222007"),
        a("424973");
      var l = a("469520"),
        n = a.n(l);
      async function i(e) {
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
        let i = new Promise(e => {
          t.onSamples = (n, i, r) => {
            for (let e of r) a.addSample(n, e.data, e);
            t.releaseUsedSamples(n, r.length), delete l[n];
            let s = a.getTrackById(n),
              u = t.getTrackById(n);
            if (null != u.edts) {
              let e = u.edts.elst;
              s.add("edts").boxes.push(e);
            }
            0 === Object.keys(l).length && e();
          };
        });
        return t.appendBuffer(e), t.flush(), await i, a.getBuffer();
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
        i = a("446674"),
        r = a("77078"),
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
          p = (0, i.useStateFromStores)([u.default], () => u.default.locale),
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
                (0, l.jsx)(r.Text, {
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
                    (0, l.jsx)(r.FormTitle, {
                      className: f.timeTitle,
                      children: c.default.Messages.CLIPS_EDIT_DATE_TITLE,
                    }),
                    (0, l.jsx)(r.Text, {
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
                    (0, l.jsx)(r.FormTitle, {
                      className: f.timeTitle,
                      children: c.default.Messages.CLIPS_EDIT_TIME_TITLE,
                    }),
                    (0, l.jsx)(r.Text, {
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
            return S;
          },
        }),
        a("222007");
      var l = a("37983"),
        n = a("884691"),
        i = a("414456"),
        r = a.n(i),
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
        L = a("80028"),
        I = a("846325"),
        j = a("782340"),
        M = a("309799"),
        T = a("446825").Buffer;
      function S(e) {
        let {
            clip: t,
            cropData: i,
            channelId: S,
            clipName: _,
            voiceAudioEnabled: b,
            applicationAudioEnabled: w,
            onSetClipName: R,
            onChangeVoiceAudioEnabled: A,
            onChangeApplicationAudioEnabled: y,
            onPrompt: D,
            onClose: k,
          } = e,
          [P, O] = n.useState(null),
          { onShareClick: F } = (0, g.default)({
            channelId: S,
            setExporting: e => O(null != e ? "share" : null),
          });
        async function B() {
          let e = f.default.getChannel(S);
          O("export"), D(!0);
          try {
            let n = await (0, C.exportClip)(t, {
              ...i,
              applicationAudio: w,
              voiceAudio: b,
            });
            (0, u.openModalLazy)(async () => {
              let { default: i } = await a
                  .el("823749")
                  .then(a.bind(a, "823749")),
                r =
                  (null == e ? void 0 : e.guild_id) != null
                    ? m.default.getGuild(e.guild_id)
                    : null,
                s =
                  null != r &&
                  (0, c.getManageResourcePermissions)(r, v.default, p.default)
                    .canCreateExpressions,
                u =
                  null == _ || "" === _
                    ? (0, L.CLIP_NAME_TEMPLATE)(
                        x.default.extractTimestamp(t.id)
                      )
                    : _,
                o = u.slice(0, I.MAX_LENGTH_SOUND_NAME);
              return t =>
                (0, l.jsx)(i, {
                  ...t,
                  showGuildPicker: !0,
                  guildId: s ? (null == e ? void 0 : e.guild_id) : void 0,
                  sourceFile: {
                    file: new File([n], "".concat(u, ".mp4"), {
                      type: "video/mp4",
                    }),
                    name: o,
                  },
                });
            });
          } catch (e) {
          } finally {
            O(null), D(!1);
          }
        }
        async function U() {
          O("export"), D(!0);
          try {
            let e = await (0, C.exportClip)(t, {
                ...i,
                applicationAudio: w,
                voiceAudio: b,
              }),
              a = await e.arrayBuffer();
            await d.default.fileManager.saveWithDialog(
              T.from(a),
              (0, L.CLIPS_EXPORT_FILENAME)(t.id)
            );
          } catch (e) {
          } finally {
            O(null), D(!1);
          }
        }
        function H() {
          D(!0),
            (0, u.openModalLazy)(async () => {
              let { default: e } = await a
                .el("386092")
                .then(a.bind(a, "386092"));
              return a =>
                (0, l.jsx)(e, {
                  clip: t,
                  ...a,
                  onClose: async () => {
                    await a.onClose(), D(!1);
                  },
                  onAfterDelete: async () => {
                    await a.onClose(), k(), D(!1);
                  },
                });
            });
        }
        return (0, l.jsxs)("div", {
          className: M.clipForm,
          children: [
            (0, l.jsxs)("div", {
              className: r(M.clipFormSection, M.editSection),
              children: [
                (0, l.jsx)(u.FormItem, {
                  className: M.clipFormItem,
                  title: j.default.Messages.CLIPS_EDIT_TITLE,
                  children: (0, l.jsx)(u.TextInput, {
                    onChange: e => {
                      "" === e ? R(void 0) : R(e);
                    },
                    value: _,
                    minLength: L.CLIP_NAME_MIN_CHAR_LENGTH,
                    maxLength: L.CLIP_NAME_MAX_CHAR_LENGTH,
                    placeholder: j.default.Messages.CLIPS_UNTITLED,
                  }),
                }),
                (0, l.jsxs)("div", {
                  className: M.clipFormSwitches,
                  children: [
                    (0, l.jsx)(u.FormSwitch, {
                      onChange: y,
                      value: w,
                      hideBorder: !0,
                      children: j.default.Messages.CLIPS_EDIT_GAME_AUDIO,
                    }),
                    (0, l.jsx)(u.FormSwitch, {
                      onChange: A,
                      value: b,
                      hideBorder: !0,
                      children:
                        j.default.Messages.CLIPS_EDIT_VOICE_CHANNEL_AUDIO,
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsxs)("div", {
              className: r(M.clipFormSection, M.metadataSection),
              children: [
                (0, l.jsx)(E.default, { clip: t }),
                (0, l.jsx)(N.default, { className: M.userList, clip: t }),
              ],
            }),
            (0, l.jsxs)("div", {
              className: M.clipFormFooter,
              children: [
                (0, l.jsx)(u.Button, {
                  submitting: "share" === P,
                  disabled: null != P && "share" !== P,
                  color: u.Button.Colors.BRAND,
                  wrapperClassName: M.clipFormFooterButton,
                  onClick: () =>
                    F({
                      clip: { ...t, name: _ },
                      cropData: i,
                      applicationAudioEnabled: w,
                      voiceAudioEnabled: b,
                      onShareComplete: () => {
                        s.closeModal(L.CLIPS_EDIT_MODAL_KEY),
                          s.closeModal(L.CLIPS_GALLERY_MODAL_KEY);
                      },
                    }),
                  children: j.default.Messages.CLIPS_EDIT_SHARE_CLIP,
                }),
                (0, l.jsx)(u.Button, {
                  size: u.Button.Sizes.ICON,
                  className: M.clipFormFooterButton,
                  disabled: null != P,
                  wrapperClassName: r(M.clipFormFooterButton, {
                    [M.submittingWrapperFix]: null != P,
                  }),
                  color: u.Button.Colors.PRIMARY,
                  onClick: k,
                  children: j.default.Messages.SAVE_CHANGES,
                }),
                (0, l.jsx)(u.Button, {
                  "aria-label": j.default.Messages.MORE_OPTIONS,
                  size: u.Button.Sizes.ICON,
                  wrapperClassName: r(M.clipFormFooterButton, {
                    [M.submittingWrapperFix]: null != P,
                  }),
                  submitting: "export" === P,
                  disabled: null != P && "export" !== P,
                  color: u.Button.Colors.PRIMARY,
                  onClick: function (e) {
                    (0, o.openContextMenuLazy)(e, async () => {
                      let { default: e } = await a
                        .el("87102")
                        .then(a.bind(a, "87102"));
                      return t =>
                        (0, l.jsx)(e, {
                          ...t,
                          onExportToSoundboard: B,
                          onExportToFile: U,
                          onDelete: H,
                          channelId: S,
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
            return N;
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
        i = a("759843"),
        r = a("77078"),
        s = a("477566"),
        u = a("49671"),
        o = a("812204"),
        d = a("685665"),
        c = a("803725"),
        f = a("758946"),
        m = a("430481"),
        v = a("135284"),
        p = a("488673"),
        h = a("5431"),
        x = a("464135"),
        C = a("28388"),
        g = a("782340"),
        E = a("204839");
      function N(e) {
        var t, a, h, x, C, N, I, j;
        let { clip: M, channelId: T, transitionState: S, onClose: _ } = e,
          [b, w] = n.useState(!0),
          [R, A] = n.useState(!1),
          [y, D] = n.useState(null),
          [k, P] = n.useState(null),
          { AnalyticsLocationProvider: O } = (0, d.default)(
            o.default.CLIPS_EDITOR
          );
        n.useEffect(() => {
          (async function e() {
            let e;
            try {
              e = await u.default.clips.loadClip(M.filepath);
            } catch {
              _(),
                s.default.show({
                  title: g.default.Messages.CLIPS_LOAD_ERROR_TITLE,
                  body: g.default.Messages.CLIPS_LOAD_ERROR_BODY,
                });
              return;
            }
            let t = e.data.buffer,
              a = await (0, f.createAudioMP4FromVideoMP4)(t),
              l = URL.createObjectURL(new Blob([a], { type: "audio/mp4" })),
              n = URL.createObjectURL(
                new Blob([e.data], { type: "video/mp4" })
              );
            P(l), D(n);
          })();
        }, [M.filepath, _]),
          n.useEffect(
            () => () => {
              null != y && URL.revokeObjectURL(y);
            },
            [y]
          ),
          n.useEffect(
            () => () => {
              null != k && URL.revokeObjectURL(k);
            },
            [k]
          );
        let [F, B] = n.useState(
            null ===
              (C =
                null === (t = M.editMetadata) || void 0 === t
                  ? void 0
                  : t.voiceAudio) ||
              void 0 === C ||
              C
          ),
          [U, H] = n.useState(
            null ===
              (N =
                null === (a = M.editMetadata) || void 0 === a
                  ? void 0
                  : a.applicationAudio) ||
              void 0 === N ||
              N
          ),
          [z, Z] = n.useState({
            start:
              null !==
                (I =
                  null === (h = M.editMetadata) || void 0 === h
                    ? void 0
                    : h.start) && void 0 !== I
                ? I
                : 0,
            end:
              null !==
                (j =
                  null === (x = M.editMetadata) || void 0 === x
                    ? void 0
                    : x.end) && void 0 !== j
                ? j
                : 0,
          }),
          [V, G] = n.useState(M.name),
          K = n.useRef({
            name: V,
            editMetadata: {
              start: z.start,
              end: z.end,
              voiceAudio: F,
              applicationAudio: U,
            },
          });
        K.current = {
          name: V,
          editMetadata: {
            start: z.start,
            end: z.end,
            voiceAudio: F,
            applicationAudio: U,
          },
        };
        let Y = (0, v.useClipProtocolURL)(M);
        return (
          n.useEffect(() => {
            async function e() {
              let e = {};
              null != Y &&
                (e = {
                  thumbnail: await (0, m.createThumbnailFromVideo)(
                    Y,
                    K.current.editMetadata.start
                  ),
                }),
                (0, c.updateClipMetadata)(M.id, { ...K.current, ...e });
            }
            return () => {
              e();
            };
          }, [M.id, Y]),
          (0, l.jsx)(r.ModalRoot, {
            impression: {
              impressionName: i.ImpressionNames.CLIP_EDITOR_VIEWED,
            },
            size: r.ModalSize.DYNAMIC,
            className: E.modalRoot,
            transitionState: S,
            children: (0, l.jsx)(O, {
              children: (0, l.jsx)(r.ModalContent, {
                className: E.modalContent,
                children:
                  null == y || null == k
                    ? (0, l.jsx)("div", {
                        className: E.spinnerContainer,
                        children: (0, l.jsx)(r.Spinner, {}),
                      })
                    : (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(L, {
                            voiceAudioEnabled: F,
                            applicationAudioEnabled: U,
                            videoURL: y,
                            cropData: z,
                            onSetCropData: Z,
                            isLoading: b,
                            hasOpenPrompt: R,
                            onDoneLoading: () => w(!1),
                            audioURL: k,
                            transitionState: S,
                          }),
                          !b &&
                            (0, l.jsx)(p.default, {
                              voiceAudioEnabled: F,
                              channelId: T,
                              applicationAudioEnabled: U,
                              onChangeApplicationAudioEnabled: H,
                              onChangeVoiceAudioEnabled: B,
                              cropData: z,
                              onSetClipName: G,
                              clipName: V,
                              clip: M,
                              onPrompt: A,
                              onClose: _,
                            }),
                        ],
                      }),
              }),
            }),
          })
        );
      }
      function L(e) {
        let {
            cropData: t,
            onSetCropData: a,
            voiceAudioEnabled: i,
            applicationAudioEnabled: s,
            isLoading: u,
            hasOpenPrompt: o,
            onDoneLoading: d,
            videoURL: c,
            audioURL: f,
            transitionState: m,
          } = e,
          v = n.useRef(null),
          p = n.useCallback(() => {
            var e;
            null === (e = v.current) || void 0 === e || e.seek(t.start), d();
          }, [d, t.start]);
        return (
          n.useEffect(() => {
            var e, t, a;
            o &&
              !(null === (t = v.current) || void 0 === t
                ? void 0
                : null === (e = t.videoElement) || void 0 === e
                  ? void 0
                  : e.paused) &&
              (null === (a = v.current) || void 0 === a || a.pause());
          }, [o]),
          n.useEffect(() => {
            function e(e) {
              var a, l;
              if (
                (null === (a = document.activeElement) || void 0 === a
                  ? void 0
                  : a.tagName) === "INPUT"
              )
                return;
              let n = v.current;
              if (null == n) return;
              let i =
                null === (l = v.current) || void 0 === l
                  ? void 0
                  : l.videoElement;
              if (null == i) return;
              let r = (0, C.default)(i.duration, e.shiftKey),
                s = !1;
              switch (e.key) {
                case " ":
                  (s = !0), i.paused ? n.play() : n.pause();
                  break;
                case "ArrowLeft":
                  (s = !0), n.seek(Math.max(i.currentTime - r, t.start));
                  break;
                case "ArrowRight":
                  (s = !0), n.seek(Math.min(i.currentTime + r, t.end));
              }
              s && (e.stopPropagation(), e.preventDefault());
            }
            return (
              document.addEventListener("keydown", e),
              () => document.removeEventListener("keydown", e)
            );
          }, [t.start, t.end]),
          (0, l.jsxs)("div", {
            className: E.editorPane,
            children: [
              (0, l.jsx)("div", {
                className: E.videoSizer,
                children: (0, l.jsx)(h.default, {
                  applicationAudioEnabled: s,
                  voiceAudioEnabled: i,
                  ref: v,
                  audioSrc: f,
                  src: c,
                  isLoading: u,
                  onDoneLoading: p,
                  startTime: t.start,
                  endTime: t.end,
                }),
              }),
              !u &&
              m &&
              [
                r.ModalTransitionState.ENTERED,
                r.ModalTransitionState.HIDDEN,
              ].includes(m)
                ? (0, l.jsx)(x.default, {
                    videoPlayerRef: v,
                    cropData: t,
                    setCropData: a,
                    sourceURL: c,
                  })
                : null,
            ],
          })
        );
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
        i = a("917351"),
        r = a("31695"),
        s = a("58608"),
        u = a("204839");
      function o(e) {
        let { setRef: t, audioTrackLabel: a, src: i, muted: r } = e,
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
          src: i,
          muted: r,
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
            let t = (0, i.round)(e.currentTime, 3),
              a = (0, i.round)(p, 3),
              l = null != h ? (0, i.round)(h, 3) : (0, i.round)(e.duration, 3);
            if (t >= l || t < a) {
              for (let e of Object.values(x.current))
                null != e && (e.currentTime = p);
              return !0;
            }
          }, [p, h]);
        (0, r.default)(() => {
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
          j = n.useCallback(e => {
            var t;
            for (let a of ((null === (t = x.current.main) || void 0 === t
              ? void 0
              : t.paused) && (E.current = !1),
            Object.values(x.current)))
              null != a && (a.currentTime = e);
          }, []),
          M = n.useCallback(() => {
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
          seek: j,
          pause: I,
          videoElement: x.current.main,
        })),
        null == a)
          ? null
          : (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(s.default, {
                  onClick: M,
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
            return N;
          },
        }),
        a("222007");
      var l = a("37983"),
        n = a("884691"),
        i = a("414456"),
        r = a.n(i),
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
        C = a("80028"),
        g = a("782340"),
        E = a("504835"),
        N = function (e) {
          var t, a, i, N, j, M;
          let {
              sourceURL: T,
              cropData: S,
              videoPlayerRef: _,
              setCropData: b,
            } = e,
            [w, R] = n.useState(
              ((M = !(null === (a = _.current) || void 0 === a
                ? void 0
                : null === (t = a.videoElement) || void 0 === t
                  ? void 0
                  : t.paused)),
              M)
            ),
            A = n.useRef(null),
            [y, D] = n.useState(null),
            [k, P] = n.useState(),
            O = n.useRef(null),
            F = n.useRef(null),
            [B, U] = n.useState(0),
            [H, z] = n.useState(!1),
            [Z, V] = n.useState(null);
          (0, f.default)(() => {
            var e;
            let t =
              null === (e = _.current) || void 0 === e
                ? void 0
                : e.videoElement;
            null != t && B !== t.currentTime && U(t.currentTime);
          });
          let G = n.useMemo(() => S.end - S.start, [S]);
          n.useEffect(() => {
            var e;
            let t =
                null === (e = _.current) || void 0 === e
                  ? void 0
                  : e.videoElement,
              a = O.current,
              l = F.current;
            if (null == t || null == a || null == l) return;
            let n = (0, s.debounce)(R, C.CLIP_PLAYING_DEBOUNCE_MS),
              i = () => {
                D(null), z(!1), n.cancel(), n(!0);
              },
              r = () => {
                n.cancel(), n(!1);
              };
            return (
              t.addEventListener("play", i),
              t.addEventListener("pause", r),
              () => {
                t.removeEventListener("play", i),
                  t.removeEventListener("pause", r);
              }
            );
          }, [_]);
          let { ref: K, width: Y = 0, height: W = 0 } = (0, c.default)(),
            X = (0, u.default)([m.default], () => m.default.windowSize());
          n.useMemo(() => {
            let e = K.current;
            null != e && V(e.getBoundingClientRect());
          }, [X.width, X.height, Y]);
          let q = n.useRef(null),
            J = n.useRef({}),
            Q = n.useCallback(
              e => {
                var t;
                let a = (0, s.clamp)(e, 0, S.end - C.MIN_CLIP_DURATION_SECONDS);
                b({ ...S, start: a }),
                  null === (t = _.current) || void 0 === t || t.seek(a);
              },
              [S, b, _]
            ),
            $ = n.useCallback(
              e => {
                var t, a;
                let l =
                  null === (t = _.current) || void 0 === t
                    ? void 0
                    : t.videoElement;
                if (null == l) return;
                let n = (0, s.clamp)(
                  e,
                  S.start + C.MIN_CLIP_DURATION_SECONDS,
                  l.duration
                );
                b({ ...S, end: n }),
                  null === (a = _.current) || void 0 === a || a.seek(n);
              },
              [S, b, _]
            ),
            ee = n.useCallback(
              (e, t) => {
                var a, l;
                if (null == k) return;
                if (null == Z) return null;
                let n = (0, s.clamp)(e, Z.left, Z.right),
                  i = ((n - Z.left) / Z.width) * k,
                  r = (0, s.clamp)(i, 0, k),
                  u = y;
                if (
                  (null == u &&
                    t &&
                    ((u =
                      r <= S.start ? "start" : r >= S.end ? "end" : "playhead"),
                    null === (a = _.current) || void 0 === a || a.pause(),
                    D(u),
                    z(w)),
                  "start" === u)
                )
                  Q(r);
                else if ("end" === u) $(r);
                else if ("playhead" === u) {
                  let e = (0, s.clamp)(r, S.start, S.end);
                  null === (l = _.current) || void 0 === l || l.seek(e);
                }
              },
              [k, Z, y, S.start, S.end, _, w, Q, $]
            ),
            et = n.useCallback(
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
                    (n = !0), Q(S.start - l);
                    break;
                  case "ArrowRight":
                    (n = !0), Q(S.start + l);
                }
                n && (e.stopPropagation(), e.preventDefault());
              },
              [_, Q, S.start]
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
                    (n = !0), $(S.end - l);
                    break;
                  case "ArrowRight":
                    (n = !0), $(S.end + l);
                }
                n && (e.stopPropagation(), e.preventDefault());
              },
              [_, $, S.end]
            ),
            el = n.useCallback(
              e => {
                ee(e.clientX, !0);
              },
              [ee]
            ),
            en = n.useCallback(
              e => {
                ee(e.clientX, !1);
              },
              [ee]
            ),
            ei = n.useCallback(() => {
              if (H) {
                var e;
                null === (e = _.current) || void 0 === e || e.play();
              }
              z(!1), D(null);
            }, [_, H]);
          n.useEffect(
            () => (
              document.addEventListener("mousemove", en),
              document.addEventListener("mouseup", ei),
              () => {
                document.removeEventListener("mousemove", en),
                  document.removeEventListener("mouseup", ei);
              }
            ),
            [en, ei]
          ),
            n.useEffect(() => {
              (async function e() {
                var e;
                let t = K.current,
                  a = A.current;
                if (null == t || null == a || null == k) return;
                (t.height = W), (t.width = Y);
                let l = t.getContext("2d");
                if (null == l) return;
                (l.fillStyle = "#000"), l.fillRect(0, 0, Y, W);
                let n = a.videoWidth / a.videoHeight,
                  i = Math.ceil(W * n),
                  r = Math.ceil(Y / i),
                  s = q.current;
                if (null == s) return;
                (s.width = i), (s.height = W);
                let u =
                  null == s
                    ? void 0
                    : s.getContext("2d", { willReadFrequently: !0 });
                if (null == u) return;
                let o = J.current;
                if (
                  (null === (e = o[r]) || void 0 === e ? void 0 : e.length) ===
                  r
                ) {
                  for (let e = 0; e < r; e++) l.putImageData(o[r][e], i * e, 0);
                  return;
                }
                for (let e = 0; e < r; e++)
                  await new Promise(t => {
                    (a.onseeked = () => {
                      l.drawImage(a, i * e, 0, i, W),
                        u.drawImage(a, 0, 0, i, W);
                      let n = u.getImageData(0, 0, i, W);
                      null == o[r] && (o[r] = []), (o[r][e] = n), t();
                    }),
                      (a.currentTime = (i / Y) * k * e);
                  });
              })();
            }, [Y, W, K, k, q]);
          let er = B - S.start,
            es =
              null === (i = _.current) || void 0 === i
                ? void 0
                : i.videoElement;
          return (0, l.jsx)("div", {
            className: E.centeringWrapper,
            children: (0, l.jsxs)("div", {
              className: E.timelineContainer,
              children: [
                (0, l.jsx)("div", {
                  className: E.playPauseButtonWrapper,
                  children: (0, l.jsx)(d.Clickable, {
                    tabIndex: 0,
                    onClick: () => {
                      var e, t;
                      return w
                        ? null === (e = _.current) || void 0 === e
                          ? void 0
                          : e.pause()
                        : null === (t = _.current) || void 0 === t
                          ? void 0
                          : t.play();
                    },
                    className: E.playPauseButton,
                    children: w
                      ? (0, l.jsx)(v.default, {
                          width: 24,
                          height: 24,
                          className: E.playPauseIcon,
                        })
                      : (0, l.jsx)(p.default, {
                          width: 24,
                          height: 24,
                          className: E.playPauseIcon,
                        }),
                  }),
                }),
                (0, l.jsxs)("div", {
                  className: r(E.timeline, { [E.timelineDragging]: null != y }),
                  onMouseDown: el,
                  children: [
                    (0, l.jsx)("canvas", { className: E.hiddenCanvas, ref: q }),
                    (0, l.jsx)("canvas", {
                      className: E.timelineBackground,
                      ref: K,
                    }),
                    (0, l.jsx)(o.FocusRing, {
                      children: (0, l.jsx)("div", {
                        tabIndex: 0,
                        ref: O,
                        className: E.playhead,
                        style: {
                          left:
                            null != es
                              ? "".concat(
                                  (es.currentTime / es.duration) * 100,
                                  "%"
                                )
                              : 0,
                        },
                      }),
                    }),
                    (0, l.jsx)(h.default, {
                      preload: "auto",
                      onLoadedMetadata: function () {
                        let e = A.current;
                        if (null != e) {
                          if (
                            (P(e.duration),
                            0 === S.start &&
                              (0 === S.end || S.end === e.duration))
                          ) {
                            var t;
                            null === (t = _.current) ||
                              void 0 === t ||
                              t.seek(e.duration / 2),
                              U(e.duration / 2);
                          }
                          0 === S.end && b(t => ({ ...t, end: e.duration }));
                        }
                      },
                      className: E.timelineVideo,
                      ref: A,
                      src: T,
                      muted: !0,
                    }),
                    (0, l.jsxs)("div", {
                      className: E.dragBox,
                      style: {
                        left:
                          null != k ? "".concat((S.start / k) * 100, "%") : "0",
                        right:
                          null != k
                            ? "".concat(((k - S.end) / k) * 100, "%")
                            : "0",
                      },
                      children: [
                        (0, l.jsx)("div", {
                          className: E.timePillContainer,
                          children: (0, l.jsx)("div", {
                            ref: F,
                            className: E.timePillBackground,
                            children: (0, l.jsxs)(d.Text, {
                              variant: "text-sm/normal",
                              className: E.timePillText,
                              color: "always-white",
                              children: [
                                L(er),
                                (0, l.jsx)("span", {
                                  className: E.slashCharacter,
                                  children: " / ",
                                }),
                                L(G),
                              ],
                            }),
                          }),
                        }),
                        (0, l.jsx)(o.FocusRing, {
                          children: (0, l.jsx)("button", {
                            className: r(E.dragHandleLeft, {
                              [E.dragging]: "start" === y,
                            }),
                            onMouseDown: el,
                            onKeyDown: et,
                            role: "slider",
                            tabIndex: 0,
                            "aria-valuemin": 0,
                            "aria-valuenow": S.start,
                            "aria-valuetext": I(S.start),
                            "aria-valuemax":
                              S.end - C.MIN_CLIP_DURATION_SECONDS,
                            "aria-label": g.default.Messages.CLIPS_CROP_START,
                            children: (0, l.jsx)("div", {
                              className: E.cropLeftArrow,
                            }),
                          }),
                        }),
                        (0, l.jsx)(o.FocusRing, {
                          children: (0, l.jsx)("button", {
                            className: r(E.dragHandleRight, {
                              [E.dragging]: "end" === y,
                            }),
                            onMouseDown: el,
                            onKeyDown: ea,
                            role: "slider",
                            tabIndex: 0,
                            "aria-valuemin":
                              S.start + C.MIN_CLIP_DURATION_SECONDS,
                            "aria-valuenow": S.end,
                            "aria-valuetext": I(S.end),
                            "aria-valuemax":
                              null === (j = _.current) || void 0 === j
                                ? void 0
                                : null === (N = j.videoElement) || void 0 === N
                                  ? void 0
                                  : N.duration,
                            "aria-label": g.default.Messages.CLIPS_CROP_END,
                            children: (0, l.jsx)("div", {
                              className: E.cropRightArrow,
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
      function L(e) {
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
      function I(e) {
        let t = g.default.Messages.DURATION_MINUTES.format({
            minutes: Math.floor(e / 60),
          }),
          a = g.default.Messages.DURATION_SECONDS.format({ seconds: e % 60 });
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
        i = a("414456"),
        r = a.n(i),
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
          i = (0, s.useStateFromStoresArray)([d.default], () =>
            t.users.map(d.default.getUser).filter(f.isNotNullish)
          ),
          o = n.useCallback(
            e => {
              let { row: t } = e,
                a = i[t];
              return null == a ? null : (0, l.jsx)(h, { user: a }, t);
            },
            [i]
          );
        return (0, l.jsxs)("div", {
          className: r(a, p.root),
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
                        children: i.length,
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
              sections: [i.length],
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
        i = a("304983"),
        r = a("75196"),
        s = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: a = 24,
              color: n = "currentColor",
              foreground: i,
              ...s
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, r.default)(s),
              width: t,
              height: a,
              viewBox: "0 0 24 24",
              children: (0, l.jsx)("path", {
                fill: n,
                className: i,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z",
              }),
            });
          },
          i.MoreHorizontalIcon,
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
        i = a("907572"),
        r = a("75196"),
        s = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: a = 16,
              color: n = "currentColor",
              foreground: i,
              ...s
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, r.default)(s),
              width: t,
              height: a,
              viewBox: "0 0 24 24",
              children: (0, l.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                  (0, l.jsx)("path", {
                    fill: n,
                    className: i,
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
          i.FriendsIcon,
          void 0,
          { size: 16 }
        );
    },
    437816: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          FriendsIcon: function () {
            return r;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("669491"),
        i = a("82169");
      let r = e => {
        let {
          width: t = 24,
          height: a = 24,
          color: r = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...u
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, i.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: a,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M13 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
              className: s,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
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
            return r;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("669491"),
        i = a("82169");
      let r = e => {
        let {
          width: t = 24,
          height: a = 24,
          color: r = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...u
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, i.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: a,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
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
//# sourceMappingURL=2570b3d43b7a9e2b8883.js.map
