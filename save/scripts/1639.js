(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["1639"],
  {
    620635: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return s;
          },
        });
      var r = a("37983");
      a("884691");
      var n = a("292508"),
        i = a("500664"),
        l = a("782340");
      function s(e) {
        let { windowKey: t } = e;
        return (0, r.jsx)(n.default, {
          withTitleBar: !0,
          windowKey: t,
          title: l.default.Messages.RTC_DEBUG_POPOUT_WINDOW_TITLE,
          children: (0, r.jsx)(i.default, {}),
        });
      }
    },
    500664: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return A;
          },
        }),
        a("424973"),
        a("881410"),
        a("843762"),
        a("222007");
      var r = a("37983"),
        n = a("884691"),
        i = a("917351"),
        l = a.n(i),
        s = a("446674"),
        o = a("77078"),
        d = a("673777"),
        u = a("800751"),
        c = a("534291"),
        m = a("161778"),
        f = a("42203"),
        p = a("26989"),
        h = a("945956"),
        g = a("661919"),
        C = a("697218"),
        S = a("145131"),
        v = a("158998"),
        y = a("701964"),
        R = a("831963"),
        D = a("129324"),
        E = a("48445"),
        T = a("990455"),
        F = a("252260"),
        x = a("49111"),
        N = a("353927"),
        b = a("782340"),
        j = a("573417");
      let P = (e, t, a) =>
          (0, r.jsx)(S.default, {
            align: S.default.Align.CENTER,
            children: (0, r.jsx)(S.default.Child, {
              children: (0, r.jsxs)(S.default, {
                align: S.default.Align.CENTER,
                children: [
                  (0, r.jsx)(o.Avatar, {
                    size: o.AvatarSizes.SIZE_24,
                    src: e.getAvatarURL(a, 24),
                    "aria-label": e.username,
                    className: j.avatar,
                  }),
                  (0, r.jsx)("span", {
                    className: j.username,
                    children: null != t ? t : v.default.getName(e),
                  }),
                ],
              }),
            }),
          }),
        I = e =>
          (0, r.jsx)(S.default, {
            align: S.default.Align.CENTER,
            children: (0, r.jsx)(S.default.Child, {
              children: (0, r.jsx)(S.default, {
                align: S.default.Align.CENTER,
                children: (0, r.jsx)("span", {
                  className: j.username,
                  children: e,
                }),
              }),
            }),
          });
      function B(e, t, a, r, n) {
        let i = [];
        if (null == t) return i;
        let {
          transport: s,
          rtp: { inbound: o, outbound: u },
          camera: m,
        } = t;
        return (
          i.push({
            section: c.SectionTypes.HEADER,
            label: b.default.Messages.RTC_DEBUG_CONTEXT.format({ context: e }),
          }),
          null != s &&
            i.push({
              section: (0, g.keySection)(e, x.RTCDebugSections.TRANSPORT, a),
              label: b.default.Messages.RTC_DEBUG_TRANSPORT,
              element: F.default,
              elementProps: { context: e, index: a },
            }),
          null != u &&
            i.push({
              section: (0, g.keySection)(e, x.RTCDebugSections.OUTBOUND, a),
              label: b.default.Messages.RTC_DEBUG_RTP_OUTBOUND,
              element: E.default,
              elementProps: { context: e, index: a },
            }),
          null != m &&
            i.push({
              section: (0, g.keySection)(e, x.RTCDebugSections.CAMERA, a),
              label: b.default.Messages.RTC_DEBUG_CAMERA,
              element: y.default,
              elementProps: { context: e, index: a, camera: m },
            }),
          null != o &&
            !l.isEmpty(o) &&
            (i.push({
              section: c.SectionTypes.HEADER,
              label: b.default.Messages.RTC_DEBUG_RTP_INBOUND,
            }),
            Object.keys(o).forEach(t => {
              let l = C.default.getUser(t),
                s = p.default.getNick(n, t),
                o = (0, g.keySection)(e, t, a);
              i.push({
                section: o,
                label: null != l ? P(l, s, n) : I(null != s ? s : t),
                ariaLabel: null != l ? l.tag : t,
                onClick: () => {
                  d.setSection(o);
                },
                element: D.default,
                elementProps: { context: e, index: a, videoStreams: r },
              });
            })),
          i
        );
      }
      function A() {
        var e, t;
        let { defaultStats: a, streamStats: i } = (0, s.useStateFromStores)(
            [g.default],
            () => ({
              defaultStats: g.default.getAllStats(
                N.MediaEngineContextTypes.DEFAULT
              ),
              streamStats: g.default.getAllStats(
                N.MediaEngineContextTypes.STREAM
              ),
            }),
            [],
            s.statesWillNeverBeEqual
          ),
          l = (0, s.useStateFromStores)([h.default, f.default], () =>
            f.default.getChannel(h.default.getChannelId())
          ),
          p =
            null === (e = a.concat(i).find(e => null != e.screenshare)) ||
            void 0 === e
              ? void 0
              : e.screenshare,
          C =
            null === (t = i.find(e => null != e.clips)) || void 0 === t
              ? void 0
              : t.clips,
          S = (0, s.useStateFromStores)([m.default], () => m.default.theme),
          v = (0, s.useStateFromStores)([m.default], () =>
            m.default.darkSidebar ? x.ThemeTypes.DARK : void 0
          ),
          y = (0, s.useStateFromStores)([g.default], () =>
            g.default.getSection()
          ),
          D = (0, s.useStateFromStores)([g.default], () =>
            g.default.getVideoStreams()
          ),
          E = (0, s.useStateFromStores)([h.default], () =>
            h.default.getState()
          ),
          F = (function (e) {
            let {
                defaultStats: t,
                streamStats: a,
                videoStreams: n,
                screenshare: i,
                clips: l,
                channel: s,
                connectionState: d,
              } = e,
              u = t.flatMap((e, t) =>
                B(
                  N.MediaEngineContextTypes.DEFAULT,
                  e,
                  t,
                  n,
                  null == s ? void 0 : s.getGuildId()
                )
              ),
              m = a.flatMap((e, t) =>
                B(
                  N.MediaEngineContextTypes.STREAM,
                  e,
                  t,
                  n,
                  null == s ? void 0 : s.getGuildId()
                )
              ),
              f = [],
              p = [],
              h = { section: c.SectionTypes.DIVIDER };
            null != i &&
              (f.push(h),
              f.push({
                section: x.RTCDebugSections.SCREENSHARE,
                label: b.default.Messages.RTC_DEBUG_SCREENSHARE,
                element: T.default,
                elementProps: { screenshare: i },
              })),
              null != l &&
                (p.push(h),
                p.push({
                  section: x.RTCDebugSections.CLIPS,
                  label: b.default.Messages.RTC_DEBUG_CLIPS,
                  element: R.default,
                  elementProps: { clips: l },
                })),
              m.length > 0 && m.unshift(h);
            let g =
                null != s
                  ? [
                      {
                        section: c.SectionTypes.CUSTOM,
                        label: "Channel Name",
                        element: () =>
                          (0, r.jsx)(o.Heading, {
                            className: j.channelName,
                            variant: "heading-lg/semibold",
                            children: s.name,
                          }),
                      },
                    ]
                  : [],
              C = [
                {
                  section: c.SectionTypes.CUSTOM,
                  label: "Connection State",
                  element: () =>
                    (0, r.jsx)(o.Heading, {
                      className: j.channelName,
                      variant: "heading-md/normal",
                      children:
                        d === x.RTCConnectionStates.RTC_CONNECTED
                          ? "Connected"
                          : "Disconnected",
                    }),
                },
              ];
            return [...g, ...C, ...u, ...m, ...f, ...p];
          })({
            defaultStats: a,
            streamStats: i,
            videoStreams: D,
            screenshare: p,
            clips: C,
            channel: l,
            connectionState: E,
          });
        return (
          n.useEffect(
            () => () => {
              d.close();
            },
            []
          ),
          (0, r.jsx)(u.default, {
            theme: S,
            sidebarTheme: v,
            section: y,
            onSetSection: d.setSection,
            sections: F,
          })
        );
      }
    },
    701964: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return u;
          },
        });
      var r = a("37983");
      a("884691");
      var n = a("917351"),
        i = a.n(n),
        l = a("77078"),
        s = a("245622"),
        o = a("266331"),
        d = a("782340");
      function u(e) {
        let { camera: t } = e;
        if (null == t)
          return (0, r.jsx)(l.Spinner, {
            type: l.Spinner.Type.SPINNING_CIRCLE,
          });
        let a = i.map(t, (e, t) => {
          if (!(o.hidden[t] || void 0 === e))
            return (0, r.jsx)(o.Item, { label: t, value: e }, t);
        });
        return (0, r.jsx)(l.FormSection, {
          tag: l.FormTitleTags.H2,
          title: d.default.Messages.RTC_DEBUG_CAMERA,
          children: (0, s.renderTwoColumns)(a),
        });
      }
    },
    831963: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return f;
          },
        }),
        a("424973"),
        a("222007");
      var r = a("37983");
      a("884691");
      var n = a("917351"),
        i = a.n(n),
        l = a("77078"),
        s = a("245622"),
        o = a("266331"),
        d = a("782340"),
        u = a("573417"),
        c = a("890957");
      let m = {
        userId: 1,
        dataType: 2,
        savedKB: 3,
        numFrames: 4,
        startTimestampMs: 5,
        endTimestampMs: 6,
        width: 7,
        height: 8,
        audioChannels: 9,
        sampleRate: 10,
      };
      function f(e) {
        let { clips: t } = e;
        if (null == t)
          return (0, r.jsx)(l.Spinner, {
            type: l.Spinner.Type.SPINNING_CIRCLE,
          });
        let a = i.map(t, (e, t) => {
          if (void 0 !== e && "buffers" !== t)
            return (0, r.jsx)(o.Item, { label: t, value: e }, t);
        });
        return (
          a.push(
            (0, r.jsx)(
              o.Item,
              {
                label: "Frames Per Second",
                value: t.recentEncodedFrames / (t.recentDurationMs / 1e3),
              },
              "framerate"
            )
          ),
          (0, r.jsxs)(l.FormSection, {
            tag: l.FormTitleTags.H2,
            title: d.default.Messages.RTC_DEBUG_CLIPS,
            children: [
              (0, s.renderTwoColumns)(a),
              (function (e) {
                if (null != e.buffers)
                  return e.buffers.map(e => {
                    let t = [];
                    for (let a of Object.keys(e).sort((e, t) => {
                      let a = m[e],
                        r = m[t];
                      if (a !== r)
                        return void 0 === a ? 1 : void 0 === r ? -1 : a - r;
                      return e > t ? 1 : -1;
                    })) {
                      let n = e[a];
                      null !== n &&
                        "key" !== a &&
                        t.push((0, r.jsx)(o.Item, { label: a, value: n }, a));
                    }
                    return (0, r.jsx)(
                      l.FormSection,
                      {
                        className: c.marginBottom40,
                        title: "Buffer: ".concat(e.key),
                        titleClassName: u.title,
                        children: (0, s.renderTwoColumns)(t),
                      },
                      "Buffer: ".concat(e.key)
                    );
                  });
              })(t),
            ],
          })
        );
      }
    },
    245622: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          renderTwoColumns: function () {
            return h;
          },
          renderStreams: function () {
            return C;
          },
        }),
        a("424973"),
        a("222007");
      var r = a("37983");
      a("884691");
      var n = a("414456"),
        i = a.n(n),
        l = a("77078"),
        s = a("103723"),
        o = a("42887"),
        d = a("661919"),
        u = a("145131"),
        c = a("512264"),
        m = a("266331"),
        f = a("573417"),
        p = a("890957");
      function h(e) {
        let t = [],
          a = 0;
        for (
          e.length % 2 != 0 &&
          e.push((0, r.jsx)(u.default, { basis: "50%", grow: 0 }, a++));
          e.length > 0;

        )
          t.push(
            (0, r.jsx)(
              u.default,
              { basis: "50%", grow: 0, children: e.splice(0, 2) },
              a++
            )
          );
        return t;
      }
      let g = { ssrc: 1, codec: 2 };
      function C(e, t, a, n) {
        return e.map(e => {
          let u = [];
          for (let t of Object.keys(e).sort((e, t) => {
            let a = g[e],
              r = g[t];
            if (a !== r) return void 0 === a ? 1 : void 0 === r ? -1 : a - r;
            return d.graphs[e] !== d.graphs[t]
              ? d.graphs[e]
                ? 1
                : -1
              : e > t
                ? 1
                : -1;
          })) {
            let n = e[t];
            !m.hidden[t] &&
              void 0 !== n &&
              u.push((0, r.jsx)(m.Item, { section: a, label: t, value: n }, t));
          }
          return (0, r.jsxs)(
            l.FormSection,
            {
              className: p.marginBottom40,
              title: e.type,
              titleClassName: f.sectionHeader,
              children: [
                "video" === e.type &&
                  null != t &&
                  null != a &&
                  null != n &&
                  (function (e, t, a, n) {
                    let l = n.get(t, a, e.ssrc);
                    return null != l
                      ? (0, r.jsx)("div", {
                          className: i(f.videoWrapper, p.marginBottom40),
                          children: (0, r.jsx)(c.default, {
                            streamId: l,
                            videoComponent: o.default.getMediaEngine().Video,
                            paused: !1,
                            videoSpinnerContext:
                              s.VideoSpinnerContext.REPLAY_VIDEO_STREAM,
                            userId: a,
                          }),
                        })
                      : null;
                  })(e, t, a, n),
                h(u),
              ],
            },
            "".concat(e.type, " + ").concat(e.ssrc)
          );
        });
      }
    },
    129324: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return h;
          },
        }),
        a("70102");
      var r = a("37983"),
        n = a("884691"),
        i = a("446674"),
        l = a("77078"),
        s = a("26989"),
        o = a("945956"),
        d = a("661919"),
        u = a("697218"),
        c = a("158998"),
        m = a("245622"),
        f = a("782340");
      class p extends n.PureComponent {
        render() {
          let {
            streams: e,
            userId: t,
            mediaEngineConnectionId: a,
            videoStreams: n,
          } = this.props;
          if (null == t || null == e || 0 === e.length)
            return (0, r.jsx)(l.Spinner, {
              type: l.Spinner.Type.SPINNING_CIRCLE,
            });
          let i = o.default.getGuildId(),
            d = u.default.getUser(t),
            p = s.default.getNick(i, t),
            h =
              null == d
                ? f.default.Messages.RTC_DEBUG_RTP_INBOUND
                : ""
                    .concat(f.default.Messages.RTC_DEBUG_RTP_INBOUND, " — ")
                    .concat(null != p ? p : c.default.getName(d));
          return (0, r.jsx)(l.FormSection, {
            tag: l.FormTitleTags.H2,
            title: h,
            children: (0, m.renderStreams)(e, a, t, n),
          });
        }
      }
      var h = i.default.connectStores([d.default], e => {
        let { context: t, index: a, videoStreams: r } = e,
          n = d.default.getAllStats(t)[a],
          { section: i } = (0, d.parseSection)(d.default.getSection());
        if (null == i) throw Error("Unrecognized section format");
        let l = null;
        if (null != n && null != n.rtp.inbound) {
          var s;
          l = null !== (s = n.rtp.inbound[i]) && void 0 !== s ? s : [];
        }
        return {
          mediaEngineConnectionId:
            null == n ? void 0 : n.mediaEngineConnectionId,
          userId: i,
          streams: l,
          videoStreams: r,
        };
      })(p);
    },
    601615: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return r;
          },
        });
      var r,
        n = a("37983"),
        i = a("884691"),
        l = a("414456"),
        s = a.n(l),
        o = a("669491"),
        d = a("77078"),
        u = a("145131"),
        c = a("315585"),
        m = a("573417");
      let f = ["firCount", "nackCount"];
      r = class extends i.PureComponent {
        renderValueIcon() {
          let { label: e } = this.props,
            t = f.includes(e);
          return t
            ? (0, n.jsx)(c.default, {
                color: o.default.unsafe_rawColors.YELLOW_300.css,
                className: m.valueIcon,
              })
            : null;
        }
        render() {
          let {
            children: e,
            className: t,
            valueRendered: a,
            section: r,
            label: i,
            renderGraph: l,
          } = this.props;
          return (0, n.jsxs)(u.default, {
            className: s(m.item, t),
            direction: u.default.Direction.VERTICAL,
            basis: "50%",
            children: [
              (0, n.jsxs)(u.default, {
                className: m.kvContainer,
                align: u.default.Align.START,
                children: [
                  (0, n.jsx)(u.default.Child, {
                    children: (0, n.jsx)(d.H, {
                      className: m.title,
                      children: e,
                    }),
                  }),
                  Array.isArray(a)
                    ? (0, n.jsx)(u.default.Child, { grow: 1, children: a })
                    : (0, n.jsxs)(u.default.Child, {
                        grow: 0,
                        shrink: 0,
                        children: [
                          this.renderValueIcon(),
                          (0, n.jsx)("span", {
                            className: m.itemValue,
                            title: a,
                            children: a,
                          }),
                        ],
                      }),
                ],
              }),
              null !== l &&
                (0, n.jsx)(
                  u.default.Child,
                  {
                    className: m.graph,
                    children: (0, n.jsx)(d.FormText, {
                      type: d.FormTextTypes.DESCRIPTION,
                      children: l,
                    }),
                  },
                  null != r ? "".concat(r, "-").concat(i) : i
                ),
              (0, n.jsx)(d.FormDivider, { className: m.divider }),
            ],
          });
        }
      };
    },
    266331: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          hidden: function () {
            return v;
          },
          Item: function () {
            return E;
          },
        }),
        a("222007"),
        a("424973"),
        a("106442"),
        a("175143");
      var r = a("37983"),
        n = a("884691"),
        i = a("477850"),
        l = a.n(i),
        s = a("661919"),
        o = a("222871"),
        d = a("601615");
      let u = {
        accelerateRate: "Accelerate Rate",
        audioDetected: "Audio Detected",
        audioLevel: "Audio Level",
        availableOutgoingBitrate: "Available Outgoing Bitrate",
        averageDecodeTime: "Average Decode Time",
        averageEncodeTime: "Average Encode Time",
        bandwidthLimitedResolution: "Bandwidth Limited Resolution",
        bitrate: "Bitrate",
        bitrateTarget: "Bitrate (Target)",
        bytesReceived: "Bytes Received",
        bytesSent: "Bytes Sent",
        capturedFramesCount: "Captured Frames per Second",
        capturedFramesDropped: "Captured Frames Dropped",
        capturedFramesMean: "Captured Frames Mean (ms)",
        capturedFramesStdev: "Captured Frames Standard Deviation (ms)",
        codec: "Codec",
        cpuLimitedResolution: "CPU Limited Resolution",
        currentDelay: "Current Delay",
        decoderImplementationName: "Decoder",
        decodingCNG: "Decoding CNG",
        decodingMutedOutput: "Decoding Muted Output",
        decodingNormal: "Decoding Normal",
        decodingPLC: "Decoding PLC",
        decodingPLCCNG: "Decoding PLC CNG",
        decryptionFailures: "Decryption Failures",
        delayEstimate: "Delay Estimate",
        encoderImplementationName: "Encoder",
        encoderQualityPsnr: "Encoder PSNR (dB)",
        encoderQualityVmaf: "Encoder VMAF",
        encodeUsage: "Encode Usage",
        expandRate: "Expand Rate",
        filter: "Filter",
        firCount: "FIR",
        fractionLost: "Packet Loss",
        frameRateDecode: "Frame Rate (Decode)",
        frameRateEncode: "Frame Rate (Encode)",
        frameRateInput: "Frame Rate (Input)",
        frameRateNetwork: "Frame Rate (Network)",
        frameRateRender: "Frame Rate (Render)",
        framesDecoded: "Frames Decoded",
        framesDecodeErrors: "Decoder Error Count",
        framesDropped: "Frames Dropped",
        framesDroppedCongestionWindow: "Frames Dropped by Congestion Window",
        framesDroppedEncoderQueue: "Frames Dropped by Encoder Queue",
        framesDroppedRateLimiter: "Frames Dropped by Bitrate Limiter",
        framesEncoded: "Frames Encoded",
        framesReceived: "Frames Received",
        framesSent: "Frames Sent",
        freezeCount: "Freeze Count",
        hostname: "Hostname",
        hybridCaptureMethodSwitches: "Hybrid Capture Method Switches",
        hybridDxgiFrames: "Hybrid DXGI Frames",
        hybridGdiFrames: "Hybrid GDI Frames",
        hybridGraphicsCaptureFrames: "Hybrid Graphics Capture Frames",
        hybridVideohookFrames: "Hybrid Videohook Frames",
        inboundBitrateEstimate: "Inbound Bitrate Estimate",
        jitter: "Jitter",
        jitterBuffer: "Jitter Buffer",
        jitterBufferPreferred: "Jitter Buffer (Preferred)",
        keyFrameInterval: "Key Frame Interval",
        keyFramesDecoded: "Key Frames Decoded",
        keyFramesEncoded: "Key Frames Encoded",
        localAddress: "Local Address",
        minPlayoutDelay: "Minimum Playout Delay",
        nackCount: "NACK",
        networkFramesDropped: "Frames Dropped By Network",
        opAccelerate: "Accelerated Frames",
        opCNG: "CNG Frames",
        opExpand: "Expand Frames",
        opMerge: "Merge Frames",
        opNormal: "Normal Frames",
        opPreemptiveExpand: "Preemptive Expand Frames",
        opSilence: "Silent Frames",
        outboundBitrateEstimate: "Outbound Bitrate Estimate",
        pacerDelay: "Pacer Delay",
        packetsLost: "Packets Lost",
        packetsReceived: "Packets Received",
        packetsSent: "Packets Sent",
        pauseCount: "Pause Count",
        ping: "Ping",
        pliCount: "PLI",
        preemptiveExpandRate: "Pre-emptive Expand Rate",
        qpSum: "QP Sum",
        quartzFrames: "Quartz Frames",
        receiverBitrateEstimate: "Receiver Bitrate Estimate (REMB)",
        relativePlayoutDelay: "Relative Playout Delay",
        relativeReceptionDelay: "Relative Reception Delay",
        renderDelay: "Render Delay",
        resolution: "Resolution",
        routingFailures: "Routing Failures",
        screenCaptureKitFrames: "ScreenCaptureKit frames",
        screenshareFrames: "WebRTC Frames",
        secondaryDecodedRate: "Secondary Decode Rate",
        secureFramesProtocolVersion: "SF Protocol",
        sinkWant: "Sink Quality Level (Remote)",
        sinkWantLocal: "Sink Quality Level (Local)",
        speechExpandRate: "Speech Expand Rate",
        ssrc: "SSRC",
        targetDelay: "Target Delay",
        totalFramesDuration: "Frames Duration (ms)",
        totalFreezesDuration: "Freezes Duration (ms)",
        totalPausesDuration: "Pauses Duration (ms)",
        videohookBackend: "Videohook Backend",
        videohookFrames: "Videohook Frames",
      };
      function c(e) {
        return "".concat((e / 1e3).toFixed(2), " Kbps");
      }
      function m(e) {
        return l.filesize(e);
      }
      function f(e) {
        return e;
      }
      function p(e) {
        return "".concat(e, " ms");
      }
      function h(e) {
        return "".concat(e.toFixed(0), "%");
      }
      function g(e) {
        return e ? "Yes" : "No";
      }
      function C(e) {
        return "".concat(Math.max(e, 0).toFixed(2), " dB");
      }
      function S(e) {
        let { last: t } = e;
        return "".concat(t, " ms");
      }
      let v = {
          audioJitterBuffer: !0,
          audioJitterDelay: !0,
          audioJitterTarget: !0,
          audioPlayoutUnderruns: !0,
          fractionLost: !0,
          framesCaptured: !0,
          framesRendered: !0,
          noiseCancellerProcessTime: !0,
          sinkWantAsInt: !0,
          sumOfSquaredFramesDurations: !0,
          timestamp: !0,
          type: !0,
          videoJitterBuffer: !0,
          videoJitterDelay: !0,
          videoJitterTarget: !0,
          voiceActivityDetectorProcessTime: !0,
        },
        y = {
          accelerateRate: h,
          audioDetected: g,
          audioLevel: C,
          availableOutgoingBitrate: c,
          averageDecodeTime: p,
          averageEncodeTime: p,
          bandwidthLimitedResolution: g,
          bitrate: c,
          bitrateTarget: c,
          bytesReceived: m,
          bytesSent: m,
          codec: function (e) {
            let { id: t, name: a } = e;
            return (
              (a = null != (a = "" === a ? "unknown" : a) ? a : "unknown"),
              ""
                .concat(a[0].toUpperCase())
                .concat(a.slice(1), " (")
                .concat(t, ")")
            );
          },
          cpuLimitedResolution: g,
          currentDelay: p,
          decoderImplementationName: f,
          delayEstimate: p,
          encoderImplementationName: f,
          encoderQualityPsnr: C,
          encoderQualityVmaf: e => "".concat(e.toFixed(2)),
          encodeUsage: h,
          expandRate: h,
          filter: f,
          fractionLost: h,
          inboundBitrateEstimate: c,
          jitter: p,
          jitterBuffer: p,
          jitterBufferPreferred: p,
          keyFrameInterval: p,
          minPlayoutDelay: p,
          outboundBitrateEstimate: c,
          pacerDelay: p,
          ping: p,
          preemptiveExpandRate: h,
          receiverBitrateEstimate: c,
          relativePlayoutDelay: S,
          relativeReceptionDelay: S,
          renderDelay: p,
          resolution: e => {
            let { width: t, height: a } = e;
            return "".concat(t, "x").concat(a);
          },
          secondaryDecodedRate: h,
          secureFramesProtocolVersion: function (e) {
            return e >= 100
              ? "MLS Test (".concat(e, ")")
              : e > 0
                ? "Static Key Test (".concat(e, ")")
                : "Disabled";
          },
          speechExpandRate: h,
          targetDelay: p,
          videohookBackend: function (e) {
            let t = [
              "N/A",
              "Direct3D 9",
              "Direct3D 10",
              "Direct3D 11",
              "Direct3D 12",
              "OpenGL",
              "Vulkan",
            ];
            return e < t.length ? t[e] : "Unknown";
          },
        },
        R = e => e,
        D = e => {
          let [t] = n.useState([]);
          return (
            t.push({ value: e.value, time: Date.now() }),
            t.length > 600 && t.shift(),
            (0, r.jsx)(o.default, {
              dataPoints: t,
              width: e.width,
              height: e.height,
            })
          );
        };
      function E(e) {
        var t, a, n, i;
        let { label: l, value: c, section: m } = e,
          f = null !== (a = y[l]) && void 0 !== a ? a : R;
        let p =
            s.graphs[l] &&
            (Array.isArray((i = c)) &&
            i.length > 0 &&
            "number" == typeof i[0].value
              ? (0, r.jsx)(o.default, {
                  dataPoints: i,
                  width: 300,
                  height: 100,
                })
              : "number" == typeof i
                ? (0, r.jsx)(D, { value: i, width: 300, height: 100 })
                : void 0),
          h = Array.isArray(c)
            ? null === (t = c.at(-1)) || void 0 === t
              ? void 0
              : t.value
            : c;
        return (0, r.jsx)(d.default, {
          label: l,
          valueRendered: f(h),
          section: m,
          renderGraph: p,
          children: null !== (n = u[l]) && void 0 !== n ? n : l,
        });
      }
    },
    48445: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return c;
          },
        });
      var r = a("37983"),
        n = a("884691"),
        i = a("446674"),
        l = a("77078"),
        s = a("661919"),
        o = a("245622"),
        d = a("782340");
      class u extends n.PureComponent {
        render() {
          let { outbound: e } = this.props;
          return null == e
            ? (0, r.jsx)(l.Spinner, { type: l.Spinner.Type.SPINNING_CIRCLE })
            : (0, r.jsx)(l.FormSection, {
                tag: l.FormTitleTags.H2,
                title: d.default.Messages.RTC_DEBUG_RTP_OUTBOUND,
                children: (0, o.renderStreams)(e),
              });
        }
      }
      var c = i.default.connectStores([s.default], e => {
        let { context: t, index: a } = e,
          r = s.default.getAllStats(t)[a];
        return { outbound: null != r ? r.rtp.outbound : null };
      })(u);
    },
    990455: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return m;
          },
        });
      var r = a("37983"),
        n = a("884691"),
        i = a("917351"),
        l = a.n(i),
        s = a("77078"),
        o = a("245622"),
        d = a("266331"),
        u = a("782340");
      class c extends n.PureComponent {
        render() {
          let { screenshare: e } = this.props;
          if (null == e)
            return (0, r.jsx)(s.Spinner, {
              type: s.Spinner.Type.SPINNING_CIRCLE,
            });
          let t = l.map(e, (e, t) => {
            if (!(d.hidden[t] || void 0 === e))
              return (0, r.jsx)(d.Item, { label: t, value: e }, t);
          });
          return (0, r.jsx)(s.FormSection, {
            tag: s.FormTitleTags.H2,
            title: u.default.Messages.RTC_DEBUG_SCREENSHARE,
            children: (0, o.renderTwoColumns)(t),
          });
        }
      }
      var m = c;
    },
    252260: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return x;
          },
        }),
        a("106442"),
        a("175143");
      var r = a("37983"),
        n = a("884691"),
        i = a("917351"),
        l = a.n(i),
        s = a("446674"),
        o = a("77078"),
        d = a("945956"),
        u = a("661919"),
        c = a("162771"),
        m = a("205817"),
        f = a("102985"),
        p = a("697218"),
        h = a("145131"),
        g = a("387111"),
        C = a("687609"),
        S = a("245622"),
        v = a("601615"),
        y = a("266331"),
        R = a("353927"),
        D = a("782340"),
        E = a("573417"),
        T = a("890957");
      class F extends n.PureComponent {
        render() {
          let {
            transport: e,
            mediaSessionId: t,
            hidePersonalInformation: a,
            hostname: n,
          } = this.props;
          if (null == e)
            return (0, r.jsx)(o.Spinner, {
              type: o.Spinner.Type.SPINNING_CIRCLE,
            });
          let i = { ...e, hostname: n },
            s = l.map(i, (e, t) => {
              if ("receiverReports" !== t && (!a || "localAddress" !== t))
                return (0, r.jsx)(y.Item, { label: t, value: e }, t);
            }),
            d = l.map(i.receiverReports, e => {
              let t = Array.isArray(e.bitrate)
                  ? null === (l = e.bitrate.at(-1)) || void 0 === l
                    ? void 0
                    : l.value
                  : e,
                a = (0, r.jsxs)(h.default, {
                  id: "bitrate-".concat(e.id),
                  justify: h.default.Justify.BETWEEN,
                  children: [
                    (0, r.jsx)("span", { children: "Bitrate:" }),
                    (0, r.jsxs)("span", {
                      children: [(t / 1e3).toFixed(2), " Kbps"],
                    }),
                  ],
                }),
                n = (0, r.jsxs)(h.default, {
                  id: "lost-".concat(e.id),
                  justify: h.default.Justify.BETWEEN,
                  children: [
                    (0, r.jsx)("span", { children: "Packet Loss:" }),
                    (0, r.jsxs)("span", {
                      children: [
                        ((100 * e.fractionLost) / 256).toFixed(0),
                        "%",
                      ],
                    }),
                  ],
                }),
                i = p.default.getUser(e.id);
              var l,
                s = g.default.getNickname(c.default.getGuildId(), void 0, i);
              return (
                null == s && (s = null != i ? i.username : e.id),
                (0, r.jsx)(
                  v.default,
                  { label: e.id, valueRendered: [a, n], children: s },
                  e.id
                )
              );
            });
          return (0, r.jsxs)(o.FormSection, {
            tag: o.FormTitleTags.H2,
            title:
              D.default.Messages.RTC_DEBUG_TRANSPORT +
              (null != t ? " - " + t : ""),
            className: E.allowSelection,
            children: [
              (0, S.renderTwoColumns)(s),
              0 === d.length
                ? null
                : (0, r.jsx)(o.FormDivider, { className: T.marginBottom20 }),
              (0, S.renderTwoColumns)(d),
            ],
          });
        }
      }
      var x = s.default.connectStores(
        [u.default, d.default, f.default, m.default],
        e => {
          let { context: t, index: a } = e,
            r = u.default.getAllStats(t)[a],
            n =
              t === R.MediaEngineContextTypes.STREAM
                ? m.default.getHostname(m.default.getActiveStreamKey())
                : d.default.getHostname();
          return {
            hidePersonalInformation: f.default.hidePersonalInformation,
            transport: null != r ? r.transport : null,
            mediaSessionId: d.default.getMediaSessionId(),
            hostname: C.default.getShortHostname(n),
          };
        }
      )(F);
    },
    315585: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return i;
          },
        });
      var r = a("37983");
      a("884691");
      var n = a("75196");
      function i(e) {
        let {
          width: t = 14,
          height: a = 14,
          color: i = "currentColor",
          foreground: l,
          ...s
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, n.default)(s),
          width: t,
          height: a,
          viewBox: "0 0 14 14",
          children: (0, r.jsx)("path", {
            className: l,
            fill: i,
            d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z",
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=323036d8f4480c92a605.js.map
