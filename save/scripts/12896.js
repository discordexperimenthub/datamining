(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12896"],
  {
    630086: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var a = n("913144"),
        i = {
          setSection(e) {
            a.default.dispatch({ type: "FRIENDS_SET_SECTION", section: e });
          },
          setInitialSection(e) {
            a.default.dispatch({
              type: "FRIENDS_SET_INITIAL_SECTION",
              section: e,
            });
          },
        };
    },
    13136: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        }),
        n("686130"),
        n("781738");
      let a = /[<>:"/\\|?*\.]/g;
      var i = function (e) {
        return e.replaceAll(a, "").trim().replaceAll(" ", "_");
      };
    },
    881095: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var a = n("374014"),
        i = n("373469"),
        l = n("271938"),
        r = n("824563"),
        d = n("945956"),
        u = n("568307"),
        s = n("800762"),
        o = n("299039"),
        c = n("80028"),
        f = n("49111"),
        g = n("782340");
      function p(e) {
        let { sourceName: t, sourceApplicationId: n } = (function (e) {
            var t, n;
            if (null != e) {
              let { ownerId: t } = a.decodeStreamKey(e);
              if (t !== l.default.getId()) {
                let e = r.default
                  .getActivities(t)
                  .find(e => e.type === f.ActivityTypes.PLAYING);
                return {
                  sourceName: null == e ? void 0 : e.name,
                  sourceApplicationId: null == e ? void 0 : e.application_id,
                };
              }
            }
            let d = i.default.getStreamerActiveStreamMetadata(),
              s = null == d ? void 0 : d.pid,
              o =
                null != d
                  ? null != s
                    ? u.default.getGameForPID(s)
                    : null
                  : u.default.getVisibleGame();
            return {
              sourceName:
                null !== (t = null == d ? void 0 : d.sourceName) && void 0 !== t
                  ? t
                  : null == o
                    ? void 0
                    : o.name,
              sourceApplicationId:
                null !== (n = null == d ? void 0 : d.id) && void 0 !== n
                  ? n
                  : null == o
                    ? void 0
                    : o.id,
            };
          })(e),
          p = d.default.getChannelId(),
          _ = [l.default.getId()];
        return (
          null != p && (_ = Object.keys(s.default.getVoiceStatesForChannel(p))),
          {
            id: o.default.fromTimestamp(Date.now()),
            version: c.CURRENT_CLIP_METADATA_VERSION,
            applicationName:
              null != t ? t : g.default.Messages.CLIPS_UNKNOWN_SOURCE,
            applicationId: n,
            users: _,
            clipMethod: "manual",
            length: 0,
            thumbnail: "",
          }
        );
      }
    },
    997942: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          validateClipMetadata: function () {
            return r;
          },
        }),
        n("222007"),
        n("808653");
      var a = n("80028");
      let i = [
          e => {
            let t = {
              ...e,
              version: 1,
              applicationName: e.gameName,
              applicationId: void 0,
            };
            return delete t.gameName, t;
          },
          e => {
            let t = {
              ...e,
              version: 2,
              name: e.name.startsWith("Clip - ") ? void 0 : e.name,
            };
            return t;
          },
          e => {
            let t = { ...e, version: 3, name: "" === e.name ? void 0 : e.name };
            return t;
          },
        ],
        l = null;
      async function r(e) {
        var t;
        let r = (await n.el("990599").then(n.t.bind(n, "990599", 23))).default;
        let d =
          ((t = r),
          null != l
            ? l
            : (l = t
                .object({
                  id: t.string().required(),
                  version: t
                    .number()
                    .positive()
                    .integer()
                    .min(0)
                    .max(a.CURRENT_CLIP_METADATA_VERSION)
                    .optional(),
                  name: t
                    .string()
                    .when("version", {
                      is: t.number().less(3),
                      then: t.string().allow(""),
                    }),
                  gameName: t
                    .string()
                    .when("version", {
                      is: t.number().greater(0).required(),
                      then: t.forbidden(),
                      otherwise: t.required(),
                    }),
                  applicationName: t
                    .string()
                    .when("version", {
                      is: t.number().greater(0).required(),
                      then: t.required(),
                      otherwise: t.forbidden(),
                    }),
                  applicationId: t.string(),
                  users: t.array().items(t.string()).required(),
                  filepath: t.string().required(),
                  length: t.number().required(),
                  thumbnail: t.string().required().allow(""),
                  editMetadata: t
                    .object()
                    .keys({
                      start: t.number(),
                      end: t.number(),
                      applicationAudio: t.boolean(),
                      voiceAudio: t.boolean(),
                    }),
                  clipMethod: t.string().allow("auto", "manual").required(),
                })
                .required()));
        try {
          r.assert(e, d);
          return (
            null == e.version && (e.version = 0),
            i.slice(e.version).reduce((e, t) => t(e), e)
          );
        } catch (e) {
          return null;
        }
      }
    },
    803725: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          updateAllowVoiceRecording: function () {
            return b;
          },
          updateClipsEnabled: function () {
            return w;
          },
          updateDecoupledClipsEnabled: function () {
            return O;
          },
          updateRemindersEnabled: function () {
            return P;
          },
          updateClipsStorageLocation: function () {
            return U;
          },
          updateClipsQuality: function () {
            return G;
          },
          updateClipsLength: function () {
            return F;
          },
          updateViewerClipsEnabled: function () {
            return V;
          },
          saveClip: function () {
            return q;
          },
          dismissSaveClipAnimation: function () {
            return H;
          },
          updateClipMetadata: function () {
            return W;
          },
          clearClipsSession: function () {
            return B;
          },
          clearNewClipIds: function () {
            return K;
          },
          loadClipsDirectory: function () {
            return j;
          },
          deleteClip: function () {
            return J;
          },
          exportClip: function () {
            return z;
          },
          dismissClipsUserEducation: function () {
            return Y;
          },
        }),
        n("222007"),
        n("424973");
      var a = n("773364"),
        i = n("784063"),
        l = n("750028"),
        r = n("913144"),
        d = n("49671"),
        u = n("44642"),
        s = n("374014"),
        o = n("584687"),
        c = n("103979"),
        f = n("872173"),
        g = n("268491"),
        p = n("373469"),
        _ = n("271938"),
        m = n("42887"),
        E = n("568307"),
        h = n("205817"),
        S = n("555035"),
        v = n("599110"),
        I = n("773336"),
        y = n("709681"),
        C = n("386045"),
        A = n("13136"),
        T = n("881095"),
        D = n("997942"),
        N = n("310238"),
        M = n("430481"),
        R = n("80028"),
        L = n("49111");
      function b(e) {
        let { allowVoiceRecording: t } = e;
        f.PreloadedUserSettingsActionCreators.updateAsync(
          "clips",
          e => {
            e.allowVoiceRecording = l.BoolValue.create({ value: t });
          },
          f.UserSettingsDelay.INFREQUENT_USER_ACTION
        ),
          v.default.track(L.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
            allow_voice_recording: t,
          });
      }
      async function w(e) {
        let { clipsEnabled: t, guildId: n, trackAnalytics: a = !1 } = e;
        await r.default.dispatch({
          type: "CLIPS_SETTINGS_UPDATE",
          settings: {
            clipsEnabled: t,
            ...(!t && { decoupledClipsEnabled: !1 }),
          },
        }),
          a &&
            v.default.track(L.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
              clips_enabled: t,
              guild_id: n,
              ...(!t && { decoupled_clips_enabled: !1 }),
            });
      }
      function O(e) {
        let { enabled: t, trackAnalytics: n = !1 } = e;
        r.default.dispatch({
          type: "CLIPS_SETTINGS_UPDATE",
          settings: {
            ...(t && { clipsEnabled: !0 }),
            decoupledClipsEnabled: t,
          },
        }),
          n &&
            v.default.track(L.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
              ...(t && { clips_enabled: !0 }),
              decoupled_clips_enabled: t,
            });
      }
      function P(e) {
        r.default.dispatch({
          type: "CLIPS_SETTINGS_UPDATE",
          settings: { remindersEnabled: e },
        });
      }
      function U(e) {
        r.default.dispatch({
          type: "CLIPS_SETTINGS_UPDATE",
          settings: { storageLocation: e },
        });
      }
      function G(e) {
        r.default.dispatch({
          type: "CLIPS_SETTINGS_UPDATE",
          settings: { clipsQuality: e },
        });
      }
      function F(e) {
        r.default.dispatch({
          type: "CLIPS_SETTINGS_UPDATE",
          settings: { clipsLength: e },
        });
      }
      function V(e) {
        r.default.dispatch({
          type: "CLIPS_SETTINGS_UPDATE",
          settings: { viewerClipsEnabled: e },
        });
      }
      function x(e, t) {
        var n, a, i, l, r, d, s, o, c, f;
        let p = new Map();
        for (let e in t.framesEncodedByEncoder) {
          let a = t.framesEncodedByEncoder[e],
            i = (0, u.parseEncoder)(e),
            l = null !== (n = p.get(i)) && void 0 !== n ? n : 0;
          p.set(i, l + a);
        }
        return {
          ...e,
          frames_encoded_nvidia_cuda:
            null !== (a = p.get(u.Encoders.NVIDIA_CUDA)) && void 0 !== a
              ? a
              : 0,
          frames_encoded_nvidia_direct3d:
            null !== (i = p.get(u.Encoders.NVIDIA_DIRECT_3D)) && void 0 !== i
              ? i
              : 0,
          frames_encoded_openh264:
            null !== (l = p.get(u.Encoders.OPENH264)) && void 0 !== l ? l : 0,
          frames_encoded_videotoolbox:
            null !== (r = p.get(u.Encoders.VIDEOTOOLBOX)) && void 0 !== r
              ? r
              : 0,
          frames_encoded_amd_direct3d:
            null !== (d = p.get(u.Encoders.AMD_DIRECT_3D)) && void 0 !== d
              ? d
              : 0,
          frames_encoded_intel:
            null !== (s = p.get(u.Encoders.INTEL)) && void 0 !== s ? s : 0,
          frames_encoded_intel_direct3d:
            null !== (o = p.get(u.Encoders.INTEL_DIRECT_3D)) && void 0 !== o
              ? o
              : 0,
          frames_encoded_uncategorized:
            null !== (c = p.get(u.Encoders.UNCATEGORIZED)) && void 0 !== c
              ? c
              : 0,
          frames_encoded_unknown:
            null !== (f = p.get(u.Encoders.UNKNOWN)) && void 0 !== f ? f : 0,
          frames_submitted: t.framesSubmitted,
          frames_submitted_during_clip: t.framesSubmittedDuringClip,
          frames_encoded: t.framesEncoded,
          frames_encoded_during_clip: t.framesEncodedDuringClip,
          frames_dropped: t.framesDropped,
          frames_dropped_during_clip: t.framesDroppedDuringClip,
          clip_duration_setting: C.default.getSettings().clipsLength,
          clip_duration: t.clipDuration,
          clip_resolution_width: t.clipResolutionWidth,
          clip_resolution_height: t.clipResolutionHeight,
          min_fps: t.minFps,
          max_fps: t.maxFps,
          submitted_fps: t.submittedFps,
          target_fps: g.default.getState().fps,
          audio_track_count: t.audioTrackCount,
          saved_at: t.savedAt,
        };
      }
      async function k(e) {
        let t = C.default.getSettings(),
          n = t.storageLocation,
          a = (0, T.default)(e),
          i = ""
            .concat((0, A.default)(a.applicationName.substring(0, 20)), "_")
            .concat(a.id, ".mp4"),
          l = d.default.fileManager.join(n, i),
          u = m.default.getMediaEngine(),
          o = JSON.stringify(a),
          c = null != e ? (0, s.decodeStreamKey)(e).ownerId : void 0,
          f = (function (e) {
            var t;
            let n, a, i;
            if (null != e) {
              n = null != e ? h.default.getRTCConnection(e) : null;
              let t = (0, s.decodeStreamKey)(e);
              (a = t.guildId), (i = t.channelId);
            } else {
              let e = _.default.getId(),
                t = p.default.getActiveStreamForUser(e, null);
              (n =
                null != t
                  ? h.default.getRTCConnection((0, s.encodeStreamKey)(t))
                  : null),
                (a = null == t ? void 0 : t.guildId),
                (i = null == t ? void 0 : t.channelId);
            }
            let l =
              null == n
                ? void 0
                : null === (t = n.analyticsContext) || void 0 === t
                  ? void 0
                  : t.streamApplication;
            return {
              rtc_connection_id: null == n ? void 0 : n.getRTCConnectionId(),
              media_session_id: null == n ? void 0 : n.getMediaSessionId(),
              parent_media_session_id:
                null == n ? void 0 : n.parentMediaSessionId,
              guild_id: a,
              channel_id: i,
              application_id: null == l ? void 0 : l.id,
              application_name: null == l ? void 0 : l.name,
            };
          })(e);
        null != e &&
          r.default.dispatch({
            type: "CLIPS_SAVE_CLIP_PLACEHOLDER",
            clip: { ...a, filepath: l },
          });
        try {
          var g;
          let {
              duration: e,
              thumbnail: t,
              clipStats: n,
            } = await (null != c
              ? u.saveClipForUser(c, l, o)
              : u.saveClip(l, o)),
            i = x(f, n);
          (i.clip_save_time_ms = n.clipSaveTimeMs),
            (i.clip_size_bytes = n.clipSizeBytes),
            null != n.viewerDecodeFps &&
              ((i.decode_fps_during_clip = n.viewerDecodeFps),
              (i.encode_fps_during_clip = n.viewerEncodeFps),
              (i.target_fps = null)),
            v.default.track(L.AnalyticEvents.CLIP_SAVED, i);
          let r = await (null != d.default.clips.getClipProtocolURLFromPath
            ? (0, M.createThumbnailFromVideo)(
                d.default.clips.getClipProtocolURLFromPath(l),
                0
              )
            : (0, M.createImageFromUint8Array)(t));
          return (
            (a.thumbnail = r),
            (a.length = e),
            R.ClipsLogger.info(
              "Clip save succeeded with "
                .concat(e, "ms and thumbnail ")
                .concat(
                  null !== (g = null == r ? void 0 : r.length) && void 0 !== g
                    ? g
                    : 0,
                  " bytes thumbnail."
                )
            ),
            await u.updateClipMetadata(l, JSON.stringify(a)),
            { ...a, filepath: l }
          );
        } catch (n) {
          if (
            (null != e &&
              r.default.dispatch({
                type: "CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR",
                clipId: a.id,
              }),
            !("errorMessage" in n))
          )
            throw (v.default.track(L.AnalyticEvents.CLIP_SAVE_FAILURE, f), n);
          let t = x(f, n);
          throw (
            ((t.error_at = n.errorAt),
            (t.error_message = n.errorMessage),
            v.default.track(L.AnalyticEvents.CLIP_SAVE_FAILURE, t),
            n.errorMessage)
          );
        }
      }
      async function q(e) {
        var t;
        let { enableDecoupledGameClipping: n } = o.default.getCurrentConfig(
            { location: "8ac9d1_1" },
            { autoTrackExposure: !1 }
          ),
          { enableViewerClipping: l } = c.default.getCurrentConfig(
            { location: "SaveClip" },
            { autoTrackExposure: !1 }
          );
        if (C.default.getIsAtMaxSaveClipOperations()) return;
        let d =
            C.default.getSettings().clipsEnabled &&
            null != p.default.getCurrentUserActiveStream(),
          u =
            n &&
            C.default.getSettings().decoupledClipsEnabled &&
            (null === (t = E.default.getVisibleGame()) || void 0 === t
              ? void 0
              : t.windowHandle) != null &&
            m.default.hasClipsSource(),
          f =
            null != e && null != p.default.getActiveStreamForStreamKey(e) && l;
        if (!d && !u && !f) return;
        let g = p.default.getCurrentUserActiveStream(),
          h = null != g ? (0, s.encodeStreamKey)(g) : void 0,
          v = null != e ? e : h,
          I = (() => {
            let e = null != v ? (0, s.decodeStreamKey)(v).ownerId : void 0;
            return e === _.default.getId()
              ? R.ClipSaveTypes.STREAMER
              : null != e
                ? R.ClipSaveTypes.VIEWER
                : R.ClipSaveTypes.DECOUPLED;
          })(),
          A = await (async () => {
            if (null == v) return;
            let { ownerId: e, guildId: t } = (0, s.decodeStreamKey)(v),
              n = S.default.getStreamId(e, t, a.MediaEngineContextTypes.STREAM);
            if (null != n)
              try {
                let e = (0, i.getVoiceEngine)(),
                  t = await e.getNextVideoOutputFrame(n);
                return (0, M.createImageFromImageData)(t);
              } catch (e) {
                return;
              }
          })();
        r.default.dispatch({
          type: "CLIPS_SAVE_CLIP_START",
          clipType: I,
          streamKey: v,
          thumbnail: A,
        });
        let T = (0, y.playSound)("clip_save", 0.5),
          D = performance.now();
        try {
          let e = await k(v);
          r.default.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e });
        } catch (e) {
          R.ClipsLogger.error("Clip Failed to Save", e),
            null == T || T.stop(),
            (0, y.playSound)("clip_error", 0.5),
            r.default.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" });
        }
        R.ClipsLogger.info(
          ""
            .concat(
              C.default.getSettings().clipsLength / 1e3,
              "s clip save took "
            )
            .concat(Math.round(performance.now() - D), "ms")
        );
      }
      function H(e, t) {
        r.default.dispatch({
          type: "CLIPS_SAVE_ANIMATION_END",
          streamKey: e,
          timestamp: t,
        });
      }
      async function W(e, t) {
        let n = C.default.getClips().find(t => t.id === e);
        if (null == n) return;
        let a = { ...n, ...t },
          i = await (0, D.validateClipMetadata)(a);
        null != i &&
          (await m.default
            .getMediaEngine()
            .updateClipMetadata(a.filepath, JSON.stringify(a)),
          v.default.track(L.AnalyticEvents.CLIP_EDITED, { clip_id: a.id }),
          r.default.dispatch({ type: "CLIPS_UPDATE_METADATA", clip: a }));
      }
      function B() {
        r.default.dispatch({ type: "CLIPS_CLEAR_CLIPS_SESSION" });
      }
      function K() {
        r.default.dispatch({ type: "CLIPS_CLEAR_NEW_CLIP_IDS" });
      }
      async function j(e) {
        var t;
        if (
          !(0, I.isDesktop)() ||
          (null === (t = d.default.clips) || void 0 === t
            ? void 0
            : t.loadClipsDirectory) == null
        )
          return;
        let n = await d.default.clips.loadClipsDirectory(e),
          a = [];
        for (let e of n) {
          let t = await (0, D.validateClipMetadata)({
            ...e.metadata,
            filepath: e.filepath,
          });
          null != t && a.push(t);
        }
        r.default.dispatch({ type: "CLIPS_LOAD_DIRECTORY_SUCCESS", clips: a });
      }
      async function J(e) {
        var t;
        (0, I.isDesktop)() &&
          (null === (t = d.default.clips) || void 0 === t
            ? void 0
            : t.deleteClip) != null &&
          (await d.default.clips.deleteClip(e),
          r.default.dispatch({ type: "CLIPS_DELETE_CLIP", filepath: e }));
      }
      async function z(e, t) {
        let n = m.default.getMediaEngine(),
          a = await n.exportClip(e.filepath, t);
        return (0, N.default)(a);
      }
      function Y(e) {
        r.default.dispatch({
          type: "CLIPS_DISMISS_EDUCATION",
          educationType: e,
        });
      }
    },
    310238: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        }),
        n("222007"),
        n("311790"),
        n("477657"),
        n("811875"),
        n("90301"),
        n("652153"),
        n("28797"),
        n("817884"),
        n("597349"),
        n("667536"),
        n("690341");
      var a = n("627445"),
        i = n.n(a),
        l = n("469520"),
        r = n.n(l);
      async function d(e) {
        let t;
        let n = r.createFile(!1),
          a = new Promise(e => {
            n.onReady = e;
          }),
          l = await e.arrayBuffer();
        for (let e of ((l.fileStart = 0),
        n.appendBuffer(l),
        n.flush(),
        await a,
        i(
          null != n.boxes,
          "mp4boxInputFile.boxes should not be null after parsing"
        ),
        n.boxes))
          "uuid" === e.type && (t = e.start);
        let d = e.slice(0, t, e.type),
          u = e.slice(t + 4, t + 8 + 16, e.type);
        return new Blob([d, new Uint8Array([0, 0, 0, 24]), u], {
          type: e.type,
        });
      }
    },
    430481: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          createImageFromUint8Array: function () {
            return i;
          },
          createImageFromImageData: function () {
            return l;
          },
          createThumbnailFromVideo: function () {
            return r;
          },
        }),
        n("70102");
      var a = n("80028");
      async function i(e) {
        if (null == e) return "";
        let t = new Blob([e], { type: "image/jpeg" }),
          n = await new Promise(e => {
            let n = new FileReader();
            (n.onloadend = () => {
              e(n.result);
            }),
              n.readAsDataURL(t);
          });
        if ("string" != typeof n) throw Error("Image creation failed");
        return n;
      }
      function l(e) {
        let t = document.createElement("canvas");
        (t.width = e.width), (t.height = e.height);
        let n = t.getContext("2d");
        if (null == n) throw Error("Could not create canvas context");
        return (
          n.putImageData(new ImageData(e.data, e.width, e.height), 0, 0),
          t.toDataURL("image/jpeg", 0.9)
        );
      }
      async function r(e, t) {
        let n = document.createElement("video");
        (n.muted = !0),
          (n.src = e),
          (n.currentTime = t),
          await n.play(),
          n.pause();
        let i = a.CLIPS_THUMBNAIL_MAX_WIDTH / n.videoWidth,
          l = a.CLIPS_THUMBNAIL_MAX_HEIGHT / n.videoHeight,
          r = Math.min(i, l),
          d = n.videoWidth * r,
          u = n.videoHeight * r,
          s = document.createElement("canvas");
        (s.width = d), (s.height = u);
        let o = s.getContext("2d");
        if (null == o) throw Error("Could not create canvas context");
        return (
          o.drawImage(n, 0, 0, n.videoWidth, n.videoHeight, 0, 0, d, u),
          s.toDataURL("image/jpeg", 0.9)
        );
      }
    },
    370492: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          updateDevToolsSettings: function () {
            return l;
          },
          toggleDisplayDevTools: function () {
            return r;
          },
          clearAnalyticsLog: function () {
            return d;
          },
        });
      var a = n("913144"),
        i = n("584369");
      function l(e) {
        a.default.dispatch({ type: "DEV_TOOLS_SETTINGS_UPDATE", settings: e });
      }
      function r() {
        l({ displayTools: !i.default.displayTools });
      }
      function d() {
        a.default.dispatch({ type: "ANALYTICS_LOG_CLEAR" });
      }
    },
    584369: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          DEVTOOLS_SIDEBAR_MIN_WIDTH: function () {
            return r;
          },
          default: function () {
            return s;
          },
        });
      var a = n("446674"),
        i = n("913144"),
        l = n("368694");
      let r = 360,
        d = {
          sidebarWidth: r,
          lastOpenTabId: null,
          displayTools: !1,
          showDevWidget: !1,
          devWidgetPosition: { x: 0, y: 0 },
        };
      class u extends a.default.DeviceSettingsStore {
        initialize(e) {
          (d = null != e ? e : d),
            (i.default.actionLogger.persist = l.default.isDeveloper);
        }
        getUserAgnosticState() {
          return d;
        }
        get sidebarWidth() {
          return this.displayTools ? d.sidebarWidth : 0;
        }
        get lastOpenTabId() {
          var e;
          return null !== (e = d.lastOpenTabId) && void 0 !== e ? e : null;
        }
        get displayTools() {
          return l.default.isDeveloper && d.displayTools;
        }
        get showDevWidget() {
          return l.default.isDeveloper && d.showDevWidget;
        }
        get devWidgetPosition() {
          return d.devWidgetPosition;
        }
      }
      (u.displayName = "DevToolsSettingsStore"),
        (u.persistKey = "DevToolsSettingsStore");
      var s = new u(i.default, {
        DEV_TOOLS_SETTINGS_UPDATE: function (e) {
          l.default.isDeveloper && (d = { ...d, ...e.settings });
        },
      });
    },
    612278: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useFirstForumPostMessage: function () {
            return S;
          },
          useMostRecentForumMessage: function () {
            return v;
          },
          preloadForumThreads: function () {
            return y;
          },
        }),
        n("222007");
      var a = n("917351"),
        i = n.n(a),
        l = n("446674"),
        r = n("872717"),
        d = n("913144"),
        u = n("42203"),
        s = n("670902"),
        o = n("349778"),
        c = n("430475"),
        f = n("324261"),
        g = n("49111");
      class p {
        get(e) {
          return (
            !this._set.hasOwnProperty(e) &&
              (this._set[e] = this._defaultValueFunc()),
            this._set[e]
          );
        }
        delete(e) {
          delete this._set[e];
        }
        hasNext() {
          return !i.isEmpty(this._set);
        }
        next() {
          return Object.keys(this._set)[0];
        }
        constructor(e) {
          (this._set = {}), (this._defaultValueFunc = e);
        }
      }
      let _ = new (class e {
          request(e, t) {
            this.requested.get(e).add(t);
          }
          hasRequested(e, t) {
            return this.requested.get(e).has(t);
          }
          finishRequesting(e, t) {
            let n = this.requested.get(e);
            t.forEach(e => n.delete(e)), _.compact(e);
          }
          getRequested(e) {
            return this.requested.get(e);
          }
          getNextBatch(e, t) {
            return Array.from(this.requested.get(e)).slice(0, t);
          }
          hasNext() {
            return this.requested.hasNext();
          }
          next() {
            return this.requested.next();
          }
          compact(e) {
            0 === this.requested.get(e).size && this.requested.delete(e);
          }
          constructor() {
            this.requested = new p(() => new Set());
          }
        })(),
        m = null;
      function E(e, t) {
        let n = (0, o.isForumActivityExperimentEnabled)(e);
        if (n) {
          let { loaded: e, message: n } = f.default.getMessageState(t);
          return !e && null == n;
        }
        return !1;
      }
      function h(e, t) {
        return !e && null == t;
      }
      function S(e) {
        var t, n;
        let { loaded: a, firstMessage: i } = (0, l.useStateFromStoresObject)(
            [c.default],
            () => c.default.getMessage(e.id)
          ),
          r = (0, l.useStateFromStores)([u.default], () =>
            u.default.getChannel(e.parent_id)
          );
        if (null != r && ((t = a), (n = i), !t && null == n)) C(r, e.id);
        return { loaded: a, firstMessage: i };
      }
      function v(e, t) {
        let { loaded: n, message: a } = (0, l.useStateFromStoresObject)(
          [f.default],
          () => f.default.getMessageState(t.id)
        );
        return (
          null != e && E(t.guild_id, t.id) && C(e, t.id),
          { loaded: n, mostRecentMessage: a }
        );
      }
      function I(e, t) {
        let n = !1;
        t.forEach(t => {
          var a, i;
          let { loaded: l, firstMessage: r } = c.default.getMessage(t);
          if (((a = l), (i = r), (!a && null == i) || E(e.guild_id, t)))
            _.request(e.id, t), (n = !0);
        }),
          n && null == m && (m = setTimeout(A, 0));
      }
      function y(e) {
        I(e, (0, s.computeThreadIdsSnapshot)(e.id).slice(0, 10));
      }
      function C(e, t) {
        if (_.hasRequested(e.id, t)) return;
        let n = (0, s.computeThreadIdsSnapshot)(e.id),
          a = n.findIndex(e => e === t),
          i = n.slice(a, a + 5).filter(t => !_.hasRequested(e.id, t));
        I(e, i);
      }
      async function A() {
        try {
          for (; _.hasNext(); ) await T(_.next());
        } finally {
          m = null;
        }
      }
      async function T(e) {
        let t = _.getNextBatch(e, 10);
        try {
          var n;
          if (0 === t.length) return;
          let a =
            null === (n = u.default.getChannel(e)) || void 0 === n
              ? void 0
              : n.guild_id;
          if (null == a) return;
          let {
            body: { threads: i },
          } = await r.default.post({
            url: g.Endpoints.FORUM_POSTS(e),
            body: { thread_ids: t },
          });
          d.default.dispatch({
            type: "LOAD_FORUM_POSTS",
            guildId: a,
            threads: i,
          });
        } catch (e) {
        } finally {
          _.finishRequesting(e, t);
        }
      }
    },
    324261: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var a = n("446674"),
        i = n("913144"),
        l = n("692038"),
        r = n("42203"),
        d = n("697218"),
        u = n("449008"),
        s = n("299039");
      let o = {};
      function c(e) {
        var t;
        let n = r.default.getChannel(null == e ? void 0 : e.channel_id);
        if (null == n || !n.isForumPost()) return !1;
        let a = o[n.id];
        return (
          s.default.compare(
            null == e ? void 0 : e.id,
            null == a
              ? void 0
              : null === (t = a.message) || void 0 === t
                ? void 0
                : t.id
          ) > -1
        );
      }
      function f(e, t) {
        let n = null == t ? null : (0, l.createMessageRecord)(t);
        return (o[e] = { loaded: !0, message: n }), !0;
      }
      function g(e) {
        return o[e];
      }
      function p(e) {
        var t;
        return null === (t = o[e]) || void 0 === t ? void 0 : t.message;
      }
      function _(e) {
        let { threads: t, mostRecentMessages: n } = e;
        t.forEach(e => f(e.id, null)),
          null == n ||
            n.filter(u.isNotNullish).forEach(e => {
              f(e.channel_id, e);
            });
      }
      class m extends a.default.Store {
        initialize() {
          this.waitFor(r.default, d.default);
        }
        getMessageState(e) {
          return !(e in o) && (o[e] = { loaded: !1, message: null }), o[e];
        }
      }
      m.displayName = "ForumPostRecentMessageStore";
      var E = new m(i.default, {
        CONNECTION_OPEN: function () {
          o = {};
        },
        MESSAGE_CREATE: function (e) {
          if (e.isPushNotification || !c(e.message)) return !1;
          e.message.channel_id === e.message.id
            ? f(e.message.channel_id, null)
            : f(e.message.channel_id, e.message);
        },
        MESSAGE_UPDATE: function (e) {
          if (!c(e.message) || e.message.channel_id === e.message.id) return !1;
          !(function (e, t) {
            let n = (function (e) {
                return o[e];
              })(e),
              a = p(e);
            null != n &&
              null != a &&
              (o[e] = { ...n, message: (0, l.updateMessageRecord)(a, t) });
          })(e.message.channel_id, e.message);
        },
        MESSAGE_DELETE: function (e) {
          return (function (e, t) {
            let n = p(e);
            return (null == n ? void 0 : n.id) === t && (delete o[e], !0);
          })(e.channelId, e.id);
        },
        LOAD_FORUM_POSTS: function (e) {
          let { threads: t } = e;
          for (let e in t) f(e, t[e].most_recent_message);
        },
        LOAD_ARCHIVED_THREADS_SUCCESS: _,
        LOAD_THREADS_SUCCESS: _,
      });
    },
    542827: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return g;
          },
        }),
        n("881410"),
        n("222007"),
        n("424973");
      var a = n("917351"),
        i = n.n(a),
        l = n("267363"),
        r = n("863636"),
        d = n("401690"),
        u = n("923959"),
        s = n("660478"),
        o = n("599110"),
        c = n("49111"),
        f = n("133335");
      function g(e, t, n) {
        let a = i
          .flatMap(e, e => {
            let t = u.default.getSelectableChannelIds(e),
              n = u.default.getVocalChannelIds(e),
              a = [...t, ...n],
              i = d.default.getActiveJoinedThreadsForGuild(e);
            for (let e of t) {
              var l;
              let t = null !== (l = i[e]) && void 0 !== l ? l : {};
              for (let e in t) a.push(e);
            }
            return a;
          })
          .map(e => ({
            channelId: e,
            readStateType: f.ReadStateTypes.CHANNEL,
            messageId: s.default.lastMessageId(e),
          }));
        return (
          e.forEach(e => {
            a.push({
              channelId: e,
              readStateType: f.ReadStateTypes.GUILD_EVENT,
              messageId: s.default.lastMessageId(
                e,
                f.ReadStateTypes.GUILD_EVENT
              ),
            }),
              a.push({
                channelId: e,
                readStateType: f.ReadStateTypes.GUILD_ONBOARDING_QUESTION,
                messageId: r.default.ackIdForGuild(e),
              });
          }),
          o.default.track(c.AnalyticEvents.MARK_AS_READ, {
            source: t,
            type: "guild",
          }),
          (0, l.bulkAck)(a, n)
        );
      }
    },
    931318: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          addMessageReminders: function () {
            return p;
          },
          updateReminderDueAt: function () {
            return _;
          },
          toggleMessageReminders: function () {
            return m;
          },
          completeMessageReminders: function () {
            return E;
          },
          cleanupMessageReminders: function () {
            return h;
          },
          fetchAndUpdateSavedMessages: function () {
            return I;
          },
        });
      var a = n("872717"),
        i = n("913144"),
        l = n("679653"),
        r = n("42203"),
        d = n("305961"),
        u = n("27618"),
        s = n("697218"),
        o = n("599110"),
        c = n("520899"),
        f = n("988864"),
        g = n("49111");
      function p(e, t) {
        o.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
          skipped: !1,
          reason: "adding",
          rating: "".concat(c.default.getMessageReminders().length),
        }),
          v(
            [
              {
                messageId: e.id,
                channelId: e.channel_id,
                savedAt: new Date(),
                dueAt: t,
                ...(function (e) {
                  let t = r.default.getChannel(e.channel_id);
                  if (null == t) return null;
                  let n = d.default.getGuild(t.guild_id),
                    a = "",
                    i = (0, l.computeChannelName)(t, s.default, u.default, !0);
                  if (t.isPrivate()) a = i;
                  else if (t.isThread()) {
                    let e = r.default.getChannel(t.parent_id);
                    if (null == e) return null;
                    let n = (0, l.computeChannelName)(
                      e,
                      s.default,
                      u.default,
                      !0
                    );
                    a = "".concat(n, " > ").concat(i);
                  } else a = i;
                  let o = "".concat(
                    e.content.length > 0
                      ? e.content
                      : "".concat(e.attachments.length, " attachments")
                  );
                  return {
                    authorSummary: e.author.username,
                    authorId: e.author.id,
                    channelSummary: a,
                    messageSummary:
                      o.length > 200 ? "".concat(o.slice(0, 197), "...") : o,
                    guildId: null == n ? void 0 : n.id,
                  };
                })(e),
              },
            ],
            []
          );
      }
      function _(e, t) {
        o.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
          skipped: !1,
          reason: "updating_due_at",
          rating: "".concat(c.default.getMessageReminders().length),
        });
        let n = c.default.getMessageReminders(),
          a = n.find(t => t.messageId === e);
        null != a && v([{ ...a, savedAt: new Date(), dueAt: t }], [a]);
      }
      function m(e, t) {
        o.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
          skipped: t,
          reason: "updating within the list",
          rating: "".concat(c.default.getMessageReminders().length),
        }),
          i.default.dispatch({
            type: "MESSAGE_REMINDER_TOGGLE",
            messageId: e,
            complete: t,
          });
      }
      function E(e) {
        o.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
          skipped: !1,
          reason: "complete and clear immediately",
          rating: "".concat(c.default.getMessageReminders().length),
        });
        let t = c.default.getMessageReminders();
        v(
          [],
          t.filter(t => t.messageId === e)
        );
      }
      function h() {
        o.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
          skipped: !1,
          reason: "clearing",
          rating: "".concat(c.default.getMessageReminders().length),
        });
        let e = c.default.getMessageReminders();
        e.some(e => e.complete) &&
          v(
            [],
            e.filter(e => e.complete)
          );
      }
      function S(e) {
        o.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
          skipped: !1,
          reason: "updated_from_server",
          rating: "".concat(c.default.getMessageReminders().length),
        }),
          i.default.dispatch({ type: "SAVED_MESSAGES_UPDATE", messages: e });
      }
      function v(e, t) {
        (0 !== e.length || 0 !== t.length) &&
          a.default
            .post({
              url: g.Endpoints.SAVED_MESSAGES,
              body: {
                added: e.map(f.savedMessageToServer),
                removed: t.map(f.savedMessageToServer),
              },
            })
            .then(e => {
              S(e.body.saved_messages.map(f.savedMessageToClient));
            });
      }
      function I() {
        return c.default.recentlyFetched()
          ? Promise.resolve()
          : a.default.get({ url: g.Endpoints.SAVED_MESSAGES }).then(e => {
              let t = e.body.saved_messages,
                n = t.map(f.savedMessageToClient);
              S(n);
            });
      }
    },
    979268: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var a = n("862205");
      let i = (0, a.createExperiment)({
        kind: "user",
        id: "2022-08_message_todos_staff_only",
        label: "Message TODO list",
        defaultConfig: { showReminders: !1 },
        treatments: [
          {
            id: 1,
            label: "Show message TODOs CTA",
            config: { showReminders: !0 },
          },
        ],
      });
      var l = i;
    },
    520899: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        }),
        n("222007");
      var a = n("446674"),
        i = n("913144"),
        l = n("718517");
      let r = [],
        d = new Set(),
        u = 0;
      class s extends a.default.Store {
        initialize() {
          setInterval(() => {
            this.emitChange();
          }, 1 * l.default.Millis.MINUTE);
        }
        getMessageReminders() {
          return r;
        }
        isMessageReminder(e) {
          let t = r.find(t => t.messageId === e);
          return null != t && !t.complete;
        }
        getOverdueMessageReminderCount() {
          return r.filter(e => null == e.dueAt || new Date() > e.dueAt).length;
        }
        recentlyFetched() {
          return new Date().getTime() - u < 1 * l.default.Millis.MINUTE;
        }
        hasSentNotification(e) {
          return d.has(e);
        }
        getState() {
          return { messages: r };
        }
      }
      s.displayName = "MessageRemindersStore";
      var o = new s(i.default, {
        SAVED_MESSAGES_UPDATE: function (e) {
          let { messages: t } = e;
          (u = new Date().getTime()),
            (r = t.map(e => ({ ...e, complete: !1 }))),
            t.forEach(e => {
              null != e.dueAt && e.dueAt > new Date() && d.delete(e.messageId),
                null != e.dueAt && e.dueAt < new Date() && d.add(e.messageId);
            });
        },
        MESSAGE_REMINDER_TOGGLE: function (e) {
          let { messageId: t, complete: n } = e,
            a = r.findIndex(e => e.messageId === t);
          if (-1 === a) return !1;
          r[a] = { ...r[a], complete: n };
        },
        MESSAGE_REMINDER_NOTIFIED: function (e) {
          let { messageId: t } = e;
          d.add(t);
        },
      });
    },
    988864: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          savedMessageToServer: function () {
            return l;
          },
          savedMessageToClient: function () {
            return r;
          },
          savedMessageHasMetadata: function () {
            return d;
          },
          MESSAGE_REMINDER_DURATION_ITEMS: function () {
            return u;
          },
        });
      var a = n("718517"),
        i = n("782340");
      function l(e) {
        var t;
        return {
          channel_id: e.channelId,
          message_id: e.messageId,
          saved_at: e.savedAt.toISOString(),
          author_summary: e.authorSummary,
          channel_summary: e.channelSummary,
          message_summary: e.messageSummary,
          guild_id: e.guildId,
          author_id: e.authorId,
          notes: e.notes,
          due_at:
            null === (t = e.dueAt) || void 0 === t ? void 0 : t.toISOString(),
        };
      }
      function r(e) {
        return {
          channelId: e.channel_id,
          messageId: e.message_id,
          savedAt: new Date(e.saved_at),
          authorSummary: e.author_summary,
          channelSummary: e.channel_summary,
          messageSummary: e.message_summary,
          guildId: 0 === e.guild_id ? void 0 : e.guild_id,
          authorId: 0 === e.author_id ? void 0 : e.author_id,
          notes: e.notes,
          dueAt: null != e.due_at ? new Date(e.due_at) : void 0,
        };
      }
      function d(e) {
        return (
          null != e.authorSummary &&
          e.authorSummary.length > 0 &&
          null != e.channelSummary &&
          e.channelSummary.length > 0 &&
          null != e.messageSummary &&
          e.messageSummary.length > 0 &&
          null != e.authorId &&
          e.authorId.length > 0
        );
      }
      let u = [
        {
          duration: a.default.Millis.HOUR,
          getLabel: () => i.default.Messages.MESSAGE_REMINDERS_IN_ONE_HOUR,
        },
        {
          duration: 2 * a.default.Millis.HOUR,
          getLabel: () => i.default.Messages.MESSAGE_REMINDERS_IN_TWO_HOURS,
        },
        {
          duration: 4 * a.default.Millis.HOUR,
          getLabel: () => i.default.Messages.MESSAGE_REMINDERS_IN_FOUR_HOURS,
        },
        {
          duration: a.default.Millis.DAY,
          getLabel: () => i.default.Messages.MESSAGE_REMINDERS_IN_ONE_DAY,
        },
        {
          duration: a.default.Millis.WEEK,
          getLabel: () => i.default.Messages.MESSAGE_REMINDERS_IN_ONE_WEEK,
        },
      ];
    },
    721281: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useVoiceActivityNotificationSettingsExperiment: function () {
            return d;
          },
          hasVoiceChannelActivityNotifsEnabled: function () {
            return u;
          },
        });
      var a = n("862205"),
        i = n("49111");
      let l = (0, a.createExperiment)({
          kind: "user",
          id: "2023-11_voice_activity_notification_user",
          label: "Voice Activity Notifications for User",
          defaultConfig: { enabled: !1 },
          treatments: [
            {
              id: 1,
              label: "Voice Activity Notifications are enabled for user",
              config: { enabled: !0 },
            },
            {
              id: 2,
              label:
                "Control for AA test. Voice Activity Notifications are NOT enabled for user.",
              config: { enabled: !1 },
            },
          ],
        }),
        r = (0, a.createExperiment)({
          kind: "guild",
          id: "2023-11_voice_activity_notification_guild",
          label: "General Voice Channel Notifications for Guild",
          defaultConfig: { voiceChannelActivityNotifsEnabled: !1 },
          treatments: [
            {
              id: 2,
              label:
                "Deadchat notifs disabled, voice channel activity notifs enabled",
              config: { voiceChannelActivityNotifsEnabled: !0 },
            },
          ],
        });
      function d(e) {
        var t;
        let { voiceChannelActivityNotifsEnabled: n } = r.useExperiment(
            {
              location: "useVoiceActivityNotificationSettingsExperiment",
              guildId:
                null !== (t = null == e ? void 0 : e.getGuildId()) &&
                void 0 !== t
                  ? t
                  : i.EMPTY_STRING_GUILD_ID,
            },
            {
              disable:
                (null == e ? void 0 : e.type) !== i.ChannelTypes.GUILD_VOICE,
              autoTrackExposure: !1,
            }
          ),
          { enabled: a } = l.useExperiment(
            { location: "useVoiceActivityNotificationSettingsExperiment" },
            {
              disable:
                (null == e ? void 0 : e.type) !== i.ChannelTypes.GUILD_VOICE ||
                !n,
              autoTrackExposure: !0,
            }
          );
        return (
          (null == e ? void 0 : e.type) === i.ChannelTypes.GUILD_VOICE && n && a
        );
      }
      function u(e) {
        var t;
        let { voiceChannelActivityNotifsEnabled: n } = r.getCurrentConfig({
          guildId:
            null !== (t = null == e ? void 0 : e.getGuildId()) && void 0 !== t
              ? t
              : i.EMPTY_STRING_GUILD_ID,
          location: "hasVoiceChannelActivityNotifsEnabled",
        });
        return n;
      }
    },
  },
]);
//# sourceMappingURL=12896.bf496f52b1de95974d49.js.map
