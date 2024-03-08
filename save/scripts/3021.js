(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["3021"],
  {
    234997: function (e, t, l) {
      "use strict";
      e.exports = l.p + "870ce21aeffa60252eb0.svg";
    },
    917798: function (e, t, l) {
      "use strict";
      l.r(t);
      var n = l("142233");
      l.es(n, t);
    },
    843624: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          VOICE_CHANNEL_STATUS_MODAL_KEY: function () {
            return m;
          },
          default: function () {
            return _;
          },
        }),
        l("222007"),
        l("781738");
      var n = l("37983"),
        a = l("884691"),
        s = l("65597"),
        u = l("77078"),
        r = l("18054"),
        o = l("207273"),
        i = l("850391"),
        d = l("149022"),
        c = l("681060"),
        f = l("945956"),
        C = l("145131"),
        h = l("599110"),
        S = l("49111"),
        T = l("782340"),
        N = l("658812");
      let m = "VoiceChannelStatusModal";
      function _(e) {
        let { channel: t, transitionState: l, onClose: _ } = e,
          A = (0, s.default)([o.default], () => o.default.getChannelStatus(t)),
          L = (0, s.default)([f.default], () => f.default.getMediaSessionId()),
          [g, I] = a.useState(null != A ? A : ""),
          [O, p] = a.useState(!1),
          [M, E] = a.useState(null);
        a.useEffect(() => {
          h.default.track(S.AnalyticEvents.OPEN_MODAL, {
            type: "Voice Channel Topic Modal",
            guild_id: t.guild_id,
          });
        }, [t.guild_id]);
        let v = async e => {
            g === A && _(), null == e || e.preventDefault(), E(null), p(!0);
            let l = g.length,
              n = g.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length;
            await r.default.updateVoiceChannelStatus(t.id, g).then(
              e => {
                204 === e.status
                  ? (h.default.track(S.AnalyticEvents.VOICE_CHANNEL_TOPIC_SET, {
                      guild_id: t.guild_id,
                      channel_id: t.id,
                      media_session_id: L,
                      raw_length: l,
                      text_length: n,
                    }),
                    _())
                  : E(e.body.message);
              },
              e => {
                E(e.body.message);
              }
            ),
              p(!1);
          },
          [x, V] = a.useState((0, d.toRichValue)(g));
        return (0, n.jsx)("form", {
          onSubmit: v,
          className: N.form,
          children: (0, n.jsxs)(u.ModalRoot, {
            transitionState: l,
            size: u.ModalSize.SMALL,
            children: [
              (0, n.jsxs)(u.ModalContent, {
                children: [
                  (0, n.jsxs)(u.ModalHeader, {
                    direction: C.default.Direction.VERTICAL,
                    className: N.modalHeader,
                    separator: !1,
                    children: [
                      (0, n.jsx)(u.ModalCloseButton, {
                        className: N.closeButton,
                        onClick: _,
                      }),
                      (0, n.jsx)("div", { className: N.headerImage }),
                      (0, n.jsx)(u.FormTitle, {
                        tag: "h1",
                        className: N.title,
                        children:
                          T.default.Messages.VOICE_CHANNEL_STATUS_MODAL_TITLE,
                      }),
                      (0, n.jsx)(u.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children:
                          T.default.Messages
                            .VOICE_CHANNEL_STATUS_MODAL_SUBTITLE,
                      }),
                    ],
                  }),
                  (0, n.jsxs)(u.FormSection, {
                    className: N.inputSection,
                    title: T.default.Messages.VOICE_CHANNEL_STATUS,
                    children: [
                      (0, n.jsx)(c.default, {
                        innerClassName: N.textArea,
                        textValue: g,
                        richValue: x,
                        placeholder:
                          T.default.Messages.VOICE_CHANNEL_STATUS_MODAL_PREFILL_CHANNEL.format(
                            { channelName: t.name }
                          ),
                        focused: !0,
                        channel: t,
                        onChange: (e, t, l) => {
                          I(t), V(l);
                        },
                        onSubmit: () => (
                          v(),
                          Promise.resolve({
                            shouldClear: !1,
                            shouldRefocus: !0,
                          })
                        ),
                        type: i.ChatInputTypes.VOICE_CHANNEL_STATUS,
                        canMentionRoles: !1,
                        canMentionChannels: !1,
                        allowNewLines: !1,
                        parentModalKey: m,
                        maxCharacterCount: 500,
                        showRemainingCharsAfterCount: 250,
                        emojiPickerCloseOnModalOuterClick: !0,
                      }),
                      null != M
                        ? (0, n.jsx)(u.FormErrorBlock, {
                            className: N.error,
                            children: M,
                          })
                        : null,
                    ],
                  }),
                ],
              }),
              (0, n.jsxs)(u.ModalFooter, {
                justify: C.default.Justify.BETWEEN,
                direction: C.default.Direction.HORIZONTAL,
                children: [
                  (0, n.jsx)(u.Button, {
                    color: u.Button.Colors.PRIMARY,
                    onClick: _,
                    children: T.default.Messages.CANCEL,
                  }),
                  (0, n.jsx)(u.Button, {
                    onClick: v,
                    submitting: O,
                    className: N.button,
                    disabled: g.length > 500,
                    children:
                      T.default.Messages.VOICE_CHANNEL_STATUS_MODAL_SET_STATUS,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    20209: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var n = l("446674"),
        a = l("162771"),
        s = l("49111");
      function u() {
        let e = (0, n.useStateFromStores)([a.default], () =>
          a.default.getGuildId()
        );
        return e === s.FAVORITES;
      }
    },
    889486: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          handoffRemote: function () {
            return d;
          },
        });
      var n = l("627445"),
        a = l.n(n),
        s = l("629109"),
        u = l("987317"),
        r = l("42887"),
        o = l("700507"),
        i = l("780338");
      function d(e, t) {
        var l;
        let n = null !== (l = e.sessionId) && void 0 !== l ? l : "";
        (0, o.remoteDisconnect)(n), (0, o.disconnectRemote)();
        let d = null != t ? t : e.channelId;
        a(null != d, "attempted to transfer to unknown channel"),
          e.selfMute !== r.default.isSelfMute() && s.default.toggleSelfMute(),
          e.selfDeaf !== r.default.isSelfDeaf() && s.default.toggleSelfDeaf(),
          (0, i.default)(d, "discord_client", n),
          u.default.selectVoiceChannel(d, !1);
      }
    },
    261552: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return r;
          },
        });
      var n = l("446674"),
        a = l("271938"),
        s = l("800762"),
        u = l("76393");
      function r() {
        let e = (0, n.useStateFromStores)([a.default], () => a.default.getId()),
          t = (0, n.useStateFromStores)([u.default], () =>
            u.default.getRemoteSessionId()
          );
        return (0, n.useStateFromStores)([s.default], () => {
          var l;
          return null !== (l = s.default.getVoiceStateForSession(e, t)) &&
            void 0 !== l
            ? l
            : void 0;
        });
      }
    },
    742898: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return r;
          },
        });
      var n = l("446674"),
        a = l("47319"),
        s = l("449008"),
        u = l("49111");
      function r() {
        return (0, n.useStateFromStoresArray)([a.default], () =>
          [
            a.default.getAccount(null, u.PlatformTypes.XBOX),
            a.default.getAccount(null, u.PlatformTypes.PLAYSTATION),
            a.default.getAccount(null, u.PlatformTypes.PLAYSTATION_STAGING),
          ].filter(s.isNotNullish)
        );
      }
    },
    424024: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return r;
          },
        });
      var n = l("303800"),
        a = l("998564"),
        s = l("420145"),
        u = l("171644");
      function r(e) {
        return null != e
          ? e === u.GameConsoleTypes.XBOX
            ? s.default
            : a.default
          : n.default;
      }
    },
    379304: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return T;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("65597"),
        s = l("77078"),
        u = l("926994"),
        r = l("495194"),
        o = l("945956"),
        i = l("800762"),
        d = l("889486"),
        c = l("261552"),
        f = l("742898"),
        C = l("424024"),
        h = l("49111"),
        S = l("782340");
      function T(e) {
        let t = (0, a.default)(
            [o.default],
            () => o.default.getChannelId() === e.id
          ),
          T = (0, c.default)(),
          N = (null == T ? void 0 : T.channelId) === e.id,
          m = (0, r.useIsVoiceChannelLocked)(e) && !e.isPrivate(),
          _ = (0, r.default)(e),
          A = (0, a.default)([i.default], () => i.default.isInChannel(e.id)),
          L = (!A && _) || m,
          g = (0, f.default)();
        if (!N && 0 === g.length) return null;
        let I = t => {
          if (!t.twoWayLink || t.revoked) {
            (0, u.default)(t.type, "Console Transfer Item");
            return;
          }
          t.type === h.PlatformTypes.XBOX
            ? (0, s.openModalLazy)(async () => {
                let { default: t } = await l
                  .el("613895")
                  .then(l.bind(l, "613895"));
                return l => (0, n.jsx)(t, { ...l, channel: e });
              })
            : (t.type === h.PlatformTypes.PLAYSTATION ||
                t.type === h.PlatformTypes.PLAYSTATION_STAGING) &&
              (0, s.openModalLazy)(async () => {
                let { default: a } = await l
                  .el("962512")
                  .then(l.bind(l, "962512"));
                return l =>
                  (0, n.jsx)(a, { ...l, platform: t.type, channel: e });
              });
        };
        return (0, n.jsx)(n.Fragment, {
          children: N
            ? (0, n.jsx)(s.MenuItem, {
                label: S.default.Messages.TRANSFER_VOICE_TO_DEVICE,
                id: "handoff",
                action: () => {
                  (0, d.handoffRemote)(T);
                },
                icon: (0, C.default)(void 0),
                disabled: L,
              })
            : g.map(e =>
                (0, n.jsx)(
                  s.MenuItem,
                  {
                    id: "transfer-".concat(e.type, "-").concat(e.id),
                    label: (function (e, t) {
                      if (e === h.PlatformTypes.XBOX)
                        return t
                          ? S.default.Messages.TRANSFER_VOICE_TO_XBOX
                          : S.default.Messages.JOIN_ON_XBOX;
                      if (e === h.PlatformTypes.PLAYSTATION)
                        return t
                          ? S.default.Messages
                              .CONSOLE_PLAYSTATION_TRANSFER_VOICE
                          : S.default.Messages.CONSOLE_PLAYSTATION_JOIN_VOICE;
                      if (e === h.PlatformTypes.PLAYSTATION_STAGING)
                        return t
                          ? S.default.Messages
                              .CONSOLE_PLAYSTATION_STAGING_TRANSFER_VOICE
                          : S.default.Messages
                              .CONSOLE_PLAYSTATION_STAGING_JOIN_VOICE;
                    })(e.type, t),
                    action: () => I(e),
                    icon: (0, C.default)(e.type),
                    disabled: L,
                  },
                  e.id
                )
              ),
        });
      }
    },
    495194: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          useIsVoiceChannelLocked: function () {
            return i;
          },
          default: function () {
            return d;
          },
        });
      var n = l("446674"),
        a = l("305961"),
        s = l("957255"),
        u = l("800762"),
        r = l("404008"),
        o = l("843455");
      function i(e) {
        return (0, n.useStateFromStores)(
          [s.default],
          () => null == e || !s.default.can(o.Permissions.CONNECT, e),
          [e]
        );
      }
      function d(e) {
        return (0, n.useStateFromStores)([u.default, a.default], () =>
          (0, r.isChannelFull)(e, u.default, a.default)
        );
      }
    },
    303800: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return i;
          },
        }),
        l("222007");
      var n = l("37983"),
        a = l("884691"),
        s = l("748820"),
        u = l("469563"),
        r = l("917798"),
        o = l("75196"),
        i = (0, u.replaceIcon)(
          function (e) {
            let {
                width: t = 16,
                height: l = 16,
                color: u = "currentColor",
                foreground: r,
                ...i
              } = e,
              [d] = a.useState(() => (0, s.v4)());
            return (0, n.jsxs)("svg", {
              ...(0, o.default)(i),
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              children: [
                (0, n.jsx)("g", {
                  clipPath: "url(".concat(d, ")"),
                  children: (0, n.jsx)("path", {
                    className: r,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4.83075 2H13.2444C14.817 2 16.0751 3.13475 15.9965 4.55319V11H14.5025V4.69504H3.57264V18.8085H6V22H4.83075C3.25811 22 2 20.8652 2 19.4468V4.55319C2 3.13475 3.25811 2 4.83075 2Z",
                    fill: u,
                  }),
                }),
                (0, n.jsx)("path", {
                  d: "M10.5646 13H19.4354C20.5365 13 21.4507 13.7808 21.5303 14.7893L21.9965 20.6997C22.0492 21.3677 21.5021 21.9485 20.7746 21.9968C20.7429 21.9989 20.7111 22 20.6792 22C19.8442 22 19.1157 21.4795 18.9105 20.7363L18.5495 19.4286H11.4504L11.0894 20.7363C10.8842 21.4795 10.1557 22 9.3207 22C8.5913 22 8 21.4571 8 20.7873C8 20.7581 8.00115 20.7289 8.00345 20.6997L8.46966 14.7893C8.5492 13.7808 9.46342 13 10.5646 13Z",
                  className: r,
                  fill: u,
                }),
                (0, n.jsx)("defs", {
                  children: (0, n.jsx)("clipPath", {
                    id: d,
                    children: (0, n.jsx)("rect", {
                      width: "14",
                      height: "21",
                      fill: u,
                      transform: "translate(2 2)",
                    }),
                  }),
                }),
              ],
            });
          },
          r.MobilePhoneControllerIcon,
          void 0,
          { size: 16 }
        );
    },
    998564: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return s;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("75196");
      function s(e) {
        let {
          width: t = 18,
          height: l = 18,
          color: s = "currentColor",
          foreground: u,
          ...r
        } = e;
        return (0, n.jsx)("svg", {
          ...(0, a.default)(r),
          width: t,
          height: l,
          viewBox: "0 0 18 18",
          children: (0, n.jsx)("path", {
            className: u,
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M17.7516 12.8667C17.4035 13.3058 16.5507 13.6191 16.5507 13.6191L10.2065 15.8979V14.2173L14.8754 12.5538C15.4052 12.364 15.4866 12.0956 15.0559 11.9547C14.6261 11.8135 13.8477 11.854 13.3175 12.0446L10.2065 13.1403V11.3962L10.3858 11.3355C10.3858 11.3355 11.2848 11.0173 12.5488 10.8773C13.8129 10.738 15.3607 10.8963 16.5758 11.3569C17.9451 11.7896 18.0993 12.4275 17.7516 12.8667ZM10.8104 10.005V5.70728C10.8104 5.20255 10.7173 4.73788 10.2437 4.60633C9.88107 4.49017 9.65602 4.82693 9.65602 5.33126V16.0938L6.75349 15.1726V2.34009C7.9876 2.56918 9.78554 3.11075 10.7521 3.43658C13.2102 4.2805 14.0436 5.33085 14.0436 7.69748C14.0436 10.0042 12.6197 10.8785 10.8104 10.005ZM1.42767 14.0417C0.0219393 13.6458 -0.212012 12.8209 0.428722 12.3457C1.02089 11.907 2.02793 11.5767 2.02793 11.5767L6.18966 10.0969V11.7839L3.19485 12.8557C2.66583 13.0456 2.58447 13.3143 3.01432 13.4552C3.44458 13.596 4.22334 13.556 4.75317 13.3657L6.18966 12.8444V14.3537C6.09859 14.3699 5.997 14.3861 5.90309 14.4019C4.4662 14.6367 2.9358 14.5387 1.42767 14.0417Z",
            fill: s,
          }),
        });
      }
    },
    420145: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return s;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("75196");
      function s(e) {
        let {
          width: t = 16,
          height: l = 16,
          color: s = "currentColor",
          foreground: u,
          ...r
        } = e;
        return (0, n.jsx)("svg", {
          ...(0, a.default)(r),
          width: t,
          height: l,
          viewBox: "0 0 60 60",
          children: (0, n.jsx)("g", {
            fill: "none",
            fillRule: "evenodd",
            children: (0, n.jsx)("path", {
              className: u,
              fill: s,
              d: "M8.95185131,8.62650012 L8.92775494,8.65059649 C3.20486729,14.2891468 -0.0119979765,21.9758886 5.02080018e-05,29.9999795 C-0.0119979765,36.56624 2.14462705,42.9517778 6.13257613,48.1686417 C6.16872068,48.2168345 6.24100979,48.252979 6.28920253,48.2168345 C6.33739527,48.1806899 6.34944345,48.120449 6.32534708,48.0602081 C4.03619202,40.9879237 15.722931,23.8433572 21.7711196,16.6626392 C21.795216,16.6385428 21.8193124,16.6144465 21.8193124,16.5783019 C21.8193124,16.5421573 21.795216,16.5060128 21.7590715,16.4819164 C11.6024519,6.37348961 8.8795622,8.68674104 8.92775494,8.65059649 M51.048208,8.62650012 L51.0723044,8.65059649 C56.795192,14.2770987 60.0000091,21.9758886 59.9879609,29.9999795 C60.0000091,36.56624 57.8433841,42.9517778 53.855435,48.1686417 C53.8192905,48.2168345 53.7470014,48.252979 53.6988086,48.2168345 C53.6506159,48.1806899 53.6506159,48.120449 53.6626641,48.0602081 C55.9518191,40.9879237 44.2650801,23.831309 38.2289397,16.650591 C38.2048433,16.6264946 38.180747,16.6023983 38.180747,16.5662537 C38.180747,16.518061 38.2048433,16.4939646 38.2409879,16.4698682 C48.4096556,6.36144143 51.0964008,8.68674104 51.0602562,8.65059649 M30.0000297,0 C36.0482183,0 41.0361667,1.66264946 45.626525,4.38553917 C45.6867659,4.40963554 45.6988141,4.48192464 45.6747177,4.53011738 C45.6506214,4.57831012 45.5903804,4.5903583 45.5301395,4.57831012 C39.7229146,3.32529893 30.8915953,8.33734369 30.0602706,8.84336744 C30.0361742,8.85541562 30.024126,8.86746381 30.0000297,8.86746381 C29.9759333,8.86746381 29.9518369,8.85541562 29.9397887,8.84336744 C27.7229228,7.56625988 19.5663019,3.28915437 14.4217271,4.61445467 C14.3614862,4.62650286 14.3012452,4.61445467 14.2771489,4.56626193 C14.2530525,4.50602101 14.2771489,4.44578009 14.3253416,4.42168372 C18.9156999,1.66264946 23.9638892,0 30.0000297,0 M30.0000297,24.0602245 C30.0361742,24.0602245 30.0723188,24.0843209 30.0964151,24.1084172 C39.0723126,30.9397379 54.4337479,47.8071962 49.7470041,52.5782773 L49.7590523,52.5662291 L49.7590523,52.5782773 L49.7470041,52.5782773 C44.2771283,57.3734547 37.2650849,60.0120071 30.0000297,59.9999589 C22.7349744,60.0120071 15.7108828,57.3734547 10.2530552,52.5782773 L10.2410071,52.5662291 L10.2530552,52.5782773 C5.56631146,47.8071962 20.9277467,30.9276897 29.9036442,24.1084172 C29.9156924,24.0843209 29.9638851,24.0602245 30.0000297,24.0602245",
            }),
          }),
        });
      }
    },
    142233: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          MobilePhoneControllerIcon: function () {
            return u;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("669491"),
        s = l("82169");
      let u = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: u = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, n.jsxs)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, n.jsx)("path", {
              fill: "string" == typeof u ? u : u.css,
              d: "M5 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h1.18c.3 0 .54.26.5.56l-.37 2.94c-.07.6-.01 1.18.16 1.7.11.38-.14.8-.52.8H8a3 3 0 0 1-3-3V4Z",
              className: r,
            }),
            (0, n.jsx)("path", {
              fill: "string" == typeof u ? u : u.css,
              d: "M14.02 15c-1.15 0-2.13.86-2.27 2l-.46 3.7a2.05 2.05 0 0 0 4.04.65l.17-.85h3l.17.85a2.05 2.05 0 0 0 4.04-.65l-.46-3.7a2.29 2.29 0 0 0-2.27-2h-5.96Z",
              className: r,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=e7968eb66f45d791f800.js.map
