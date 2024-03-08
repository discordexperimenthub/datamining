(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54387"],
  {
    243288: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("446674"),
        u = n("77078"),
        d = n("255397"),
        o = n("191145"),
        r = n("782340");
      function s(e) {
        let t = (0, l.useStateFromStores)([o.default], () =>
          o.default.getVoiceParticipantsHidden(e)
        );
        return (0, a.jsx)(u.MenuCheckboxItem, {
          id: "no-video-hide",
          label: r.default.Messages.STREAM_SHOW_NON_VIDEO,
          checked: !t,
          action: () => d.default.toggleVoiceParticipantsHidden(e, !t),
        });
      }
    },
    172844: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return w;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("446674"),
        u = n("77078"),
        d = n("629109"),
        o = n("272030"),
        r = n("987317"),
        s = n("990766"),
        i = n("901582"),
        c = n("243288"),
        f = n("769928"),
        S = n("976074"),
        M = n("386045"),
        g = n("18346"),
        m = n("803725"),
        p = n("76393"),
        E = n("103979"),
        C = n("816106"),
        h = n("373469"),
        I = n("271938"),
        T = n("42203"),
        x = n("42887"),
        A = n("697218"),
        v = n("374014"),
        _ = n("49111"),
        b = n("353927"),
        U = n("782340");
      function V(e) {
        return (0, l.useStateFromStores)([h.default], () => {
          let t = h.default.getActiveStreamForApplicationStream(e);
          return (
            null != t && (0, v.encodeStreamKey)(t) === (0, v.encodeStreamKey)(e)
          );
        });
      }
      function w(e) {
        let {
            stream: t,
            analyticsContext: n,
            appContext: h,
            exitFullscreen: w,
            onSelect: O,
          } = e,
          j = (function (e) {
            let t = V(e),
              n = (0, g.default)(x.default),
              d = M.default.getSettings().clipsEnabled,
              o = e.ownerId === I.default.getId(),
              { enableViewerClipping: r, ignoreSenderPreference: s } =
                E.default.useExperiment(
                  { location: "StreamContextMenu" },
                  { autoTrackExposure: !1 }
                ),
              i = (0, l.useStateFromStores)([M.default], () =>
                M.default.getIsAtMaxSaveClipOperations()
              ),
              c =
                (0, l.useStateFromStores)([M.default], () =>
                  M.default.isViewerClippingAllowedForUser(e.ownerId)
                ) || s;
            return n && r && t
              ? (0, a.jsx)(u.MenuItem, {
                  id: "clip-stream",
                  disabled: !d || !(o || c) || i,
                  label: U.default.Messages.CLIPS_SAVE,
                  action: () =>
                    o
                      ? (0, m.saveClip)()
                      : (0, m.saveClip)((0, v.encodeStreamKey)(e)),
                })
              : null;
          })(t),
          R = V(t),
          F = (function (e) {
            let t = V(e),
              n = (0, C.default)(e.ownerId, b.MediaEngineContextTypes.STREAM);
            return t ? n : null;
          })(t),
          L = (function (e) {
            let t;
            let n = (0, l.useStateFromStores)(
                [p.default],
                () => null != p.default.getRemoteSessionId()
              ),
              d = (0, l.useStateFromStores)(
                [T.default],
                () => T.default.getChannel(e.channelId),
                [e.channelId]
              ),
              o = V(e),
              i = A.default.getCurrentUser(),
              c = null != i && e.ownerId === i.id;
            return ((t = c
              ? U.default.Messages.STOP_STREAMING
              : o
                ? U.default.Messages.STOP_WATCHING
                : U.default.Messages.WATCH_STREAM),
            n || (!c && o && (null == d ? void 0 : d.isGuildStageVoice())))
              ? null
              : (0, a.jsx)(u.MenuItem, {
                  id: "watch",
                  label: t,
                  action: o
                    ? function () {
                        (0, s.stopStream)((0, v.encodeStreamKey)(e));
                      }
                    : function () {
                        r.default.selectVoiceChannel(e.channelId),
                          (0, s.watchStream)(e);
                      },
                });
          })(t),
          y = (function (e) {
            let t = V(e),
              n = (0, l.useStateFromStores)([x.default], () =>
                x.default.isLocalMute(
                  e.ownerId,
                  b.MediaEngineContextTypes.STREAM
                )
              ),
              o = A.default.getCurrentUser(),
              r = null != o && e.ownerId === o.id;
            return !t || r
              ? null
              : (0, a.jsx)(u.MenuCheckboxItem, {
                  id: "mute",
                  label: U.default.Messages.SOUND_MUTE,
                  action: function () {
                    d.default.toggleLocalMute(
                      e.ownerId,
                      b.MediaEngineContextTypes.STREAM
                    );
                  },
                  checked: n,
                });
          })(t),
          k = (0, S.default)(t, h, w),
          N = (0, f.default)(t.channelId, t.ownerId),
          G = (0, c.default)(t.channelId),
          P = (0, l.useStateFromStores)(
            [T.default],
            () => T.default.getChannel(t.channelId),
            [t.channelId]
          );
        return (0, a.jsx)(i.default, {
          context: n,
          object: _.AnalyticsObjects.CONTEXT_MENU,
          children: (0, a.jsxs)(u.Menu, {
            navId: "stream-context",
            onClose: o.closeContextMenu,
            "aria-label": U.default.Messages.STREAM_ACTIONS_MENU_LABEL,
            onSelect: O,
            children: [
              (0, a.jsxs)(u.MenuGroup, { children: [L, j, y] }),
              (0, a.jsx)(u.MenuGroup, { children: F }),
              (0, a.jsxs)(u.MenuGroup, {
                children: [
                  (null == P ? void 0 : P.isGuildStageVoice()) ? null : G,
                  N,
                  R && k,
                ],
              }),
            ],
          }),
        });
      }
    },
    816106: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("446674"),
        u = n("77078"),
        d = n("629109"),
        o = n("42887"),
        r = n("697218"),
        s = n("829536"),
        i = n("773336"),
        c = n("353927"),
        f = n("782340");
      function S(e) {
        var t;
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : c.MediaEngineContextTypes.DEFAULT,
          S = (0, l.useStateFromStores)(
            [o.default],
            () => o.default.getLocalVolume(e, n),
            [e, n]
          ),
          M =
            e ===
            (null === (t = r.default.getCurrentUser()) || void 0 === t
              ? void 0
              : t.id),
          g = n === c.MediaEngineContextTypes.STREAM;
        return M
          ? null
          : (0, a.jsx)(u.MenuControlItem, {
              id: "user-volume",
              label: g
                ? f.default.Messages.STREAM_VOLUME
                : f.default.Messages.USER_VOLUME,
              control: (t, l) =>
                (0, a.jsx)(u.MenuSliderControl, {
                  ...t,
                  ref: l,
                  value: (0, s.amplitudeToPerceptual)(S),
                  maxValue: i.isPlatformEmbedded ? 200 : 100,
                  onChange: t =>
                    d.default.setLocalVolume(
                      e,
                      (0, s.perceptualToAmplitude)(t),
                      n
                    ),
                  "aria-label": g
                    ? f.default.Messages.STREAM_VOLUME
                    : f.default.Messages.USER_VOLUME,
                }),
            });
      }
    },
  },
]);
//# sourceMappingURL=ed3fc320d1bc532adef0.js.map
