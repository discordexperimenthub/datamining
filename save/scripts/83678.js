(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["83678"],
  {
    897176: function (e, t, n) {
      "use strict";
      e.exports = n.p + "11d9a2fd2ce69fbcfb9a.svg";
    },
    376180: function (e, t, n) {
      "use strict";
      e.exports = n.p + "382dcedd5055b971ad53.svg";
    },
    524939: function (e, t, n) {
      "use strict";
      e.exports = n.p + "c86d1e3ed620d49e41d6.svg";
    },
    757e3: function (e, t, n) {
      "use strict";
      e.exports = n.p + "e49c372705a84e02772c.svg";
    },
    958347: function (e, t, n) {
      "use strict";
      e.exports = n.p + "0ca26e39ac9d9e0b26ff.svg";
    },
    172522: function (e, t, n) {
      "use strict";
      e.exports = n.p + "71c5a5f763fc47181bbd.svg";
    },
    356451: function (e, t, n) {
      "use strict";
      e.exports = n.p + "c4cf1bcd505f7cc22300.svg";
    },
    852743: function (e, t, n) {
      "use strict";
      e.exports = n.p + "bfba1f104721c7575159.svg";
    },
    862888: function (e, t, n) {
      "use strict";
      e.exports = n.p + "1b60cdb56c8c081495ac.svg";
    },
    228055: function (e, t, n) {
      "use strict";
      e.exports = n.p + "c4f5ae4d8c171de59f01.svg";
    },
    238032: function (e, t, n) {
      "use strict";
      e.exports = n.p + "141bfc7aec238edeeb60.svg";
    },
    243826: function (e, t, n) {
      "use strict";
      e.exports = n.p + "c5eb15a73957da1bb6e9.svg";
    },
    215036: function (e, t, n) {
      "use strict";
      e.exports = n.p + "00bc91145392d3941bf7.svg";
    },
    505873: function (e, t, n) {
      "use strict";
      e.exports = n.p + "0160dd25b3ba785c6008.svg";
    },
    561537: function (e, t, n) {
      "use strict";
      e.exports = n.p + "0a3a4d76bddeb746b3ae.png";
    },
    145680: function (e, t, n) {
      "use strict";
      e.exports = n.p + "5b1b278764be59a15315.png";
    },
    984467: function (e, t, n) {
      "use strict";
      e.exports = n.p + "113468fc290deb0a4e2e.svg";
    },
    178725: function (e, t, n) {
      "use strict";
      e.exports = n.p + "9aefe3a72cc823ee54cd.svg";
    },
    849938: function (e, t, n) {
      "use strict";
      e.exports = n.p + "bf7113d05392359606b7.svg";
    },
    222223: function (e, t, n) {
      "use strict";
      e.exports = n.p + "e2c8daaf545d35a761cc.svg";
    },
    181104: function (e, t, n) {
      "use strict";
      e.exports = n.p + "84de06846a24f54d6aba.svg";
    },
    581752: function (e, t, n) {
      "use strict";
      e.exports = n.p + "5d0ecd3e2fd985b1bc06.jpg";
    },
    911005: function (e, t, n) {
      "use strict";
      e.exports = n.p + "2b9987c65e76770df02a.jpg";
    },
    18054: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          init: function () {
            return d;
          },
          close: function () {
            return c;
          },
          setSection: function () {
            return f;
          },
          updateChannel: function () {
            return h;
          },
          saveChannel: function () {
            return C;
          },
          deleteChannel: function () {
            return p;
          },
          default: function () {
            return E;
          },
        }),
        n("702976");
      var a = n("872717"),
        s = n("913144"),
        l = n("81732");
      n("21121"), n("693051");
      var i = n("263024");
      n("492114");
      var r = n("42203"),
        o = n("54239"),
        u = n("49111");
      function d(e, t, n) {
        s.default.dispatch({
          type: "CHANNEL_SETTINGS_INIT",
          channelId: e,
          location: t,
          subsection: n,
        });
      }
      function c() {
        s.default.dispatch({ type: "CHANNEL_SETTINGS_CLOSE" });
      }
      function f(e) {
        s.default.dispatch({
          type: "CHANNEL_SETTINGS_SET_SECTION",
          section: e,
        });
      }
      function h(e) {
        let {
          name: t,
          type: n,
          topic: a,
          bitrate: l,
          userLimit: i,
          nsfw: r,
          flags: o,
          rateLimitPerUser: u,
          defaultThreadRateLimitPerUser: d,
          defaultAutoArchiveDuration: c,
          template: f,
          defaultReactionEmoji: h,
          rtcRegion: C,
          videoQualityMode: p,
          autoArchiveDuration: E,
          locked: m,
          invitable: g,
          availableTags: S,
          defaultSortOrder: _,
          defaultForumLayout: T,
          iconEmoji: A,
          themeColor: M,
        } = e;
        s.default.dispatch({
          type: "CHANNEL_SETTINGS_UPDATE",
          name: t,
          channelType: n,
          topic: a,
          bitrate: l,
          userLimit: i,
          nsfw: r,
          flags: o,
          rateLimitPerUser: u,
          defaultThreadRateLimitPerUser: d,
          defaultAutoArchiveDuration: c,
          template: f,
          defaultReactionEmoji: h,
          rtcRegion: C,
          videoQualityMode: p,
          autoArchiveDuration: E,
          locked: m,
          invitable: g,
          availableTags: S,
          defaultSortOrder: _,
          defaultForumLayout: T,
          iconEmoji: A,
          themeColor: M,
        });
      }
      async function C(e, t) {
        let {
            name: n,
            type: o,
            position: d,
            topic: c,
            bitrate: f,
            userLimit: h,
            nsfw: C,
            flags: p,
            permissionOverwrites: E,
            rateLimitPerUser: m,
            defaultThreadRateLimitPerUser: g,
            defaultAutoArchiveDuration: S,
            template: _,
            defaultReactionEmoji: T,
            rtcRegion: A,
            videoQualityMode: M,
            autoArchiveDuration: I,
            locked: N,
            invitable: v,
            availableTags: L,
            defaultSortOrder: R,
            defaultForumLayout: x,
            iconEmoji: y,
            themeColor: O,
          } = t,
          D = r.default.getChannel(e);
        return (
          s.default.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT" }),
          await i.default.unarchiveThreadIfNecessary(e),
          a.default
            .patch({
              url: u.Endpoints.CHANNEL(e),
              body: {
                name: n,
                type: o,
                position: d,
                topic: c,
                bitrate: f,
                user_limit: h,
                nsfw: C,
                flags: p,
                permission_overwrites: E,
                rate_limit_per_user: m,
                default_thread_rate_limit_per_user: g,
                default_auto_archive_duration: S,
                template: _,
                rtc_region: A,
                video_quality_mode: M,
                auto_archive_duration: I,
                locked: N,
                invitable: v,
                default_reaction_emoji:
                  null != T
                    ? {
                        emoji_id: null == T ? void 0 : T.emojiId,
                        emoji_name: null == T ? void 0 : T.emojiName,
                      }
                    : null === T
                      ? null
                      : void 0,
                available_tags:
                  null == L
                    ? void 0
                    : L.map(e => ({
                        id: e.id,
                        name: e.name,
                        emoji_id: e.emojiId,
                        emoji_name: e.emojiName,
                        moderated: e.moderated,
                      })),
                default_sort_order: R,
                default_forum_layout: x,
                icon_emoji:
                  null != y
                    ? { id: y.id, name: y.name }
                    : null === y
                      ? null
                      : void 0,
                theme_color: O,
              },
              oldFormErrors: !0,
            })
            .then(
              t => {
                s.default.dispatch({
                  type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS",
                  channelId: e,
                });
                let n = null == D ? void 0 : D.getGuildId();
                return (
                  null != n &&
                    !(null == D ? void 0 : D.isThread()) &&
                    l.default.checkGuildTemplateDirty(n),
                  t
                );
              },
              e => (
                s.default.dispatch({
                  type: "CHANNEL_SETTINGS_SUBMIT_FAILURE",
                  errors: e.body,
                }),
                e
              )
            )
        );
      }
      function p(e) {
        let t = r.default.getChannel(e);
        a.default
          .delete({ url: u.Endpoints.CHANNEL(e), oldFormErrors: !0 })
          .then(() => {
            let e = null == t ? void 0 : t.getGuildId();
            null != e &&
              !(null == t ? void 0 : t.isThread()) &&
              l.default.checkGuildTemplateDirty(e),
              c();
          });
      }
      var E = {
        init: d,
        open: function (e, t, n) {
          d(e, t, n), (0, o.pushLayer)(u.Layers.CHANNEL_SETTINGS);
        },
        close: c,
        setSection: f,
        selectPermissionOverwrite: function (e) {
          s.default.dispatch({
            type: "CHANNEL_SETTINGS_OVERWRITE_SELECT",
            overwriteId: e,
          });
        },
        updateChannel: h,
        saveChannel: C,
        deleteChannel: p,
        updateVoiceChannelStatus: function (e, t) {
          return a.default.put({
            url: u.Endpoints.UPDATE_VOICE_CHANNEL_STATUS(e),
            body: { status: t },
          });
        },
      };
    },
    715315: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var a = n("872717"),
        s = n("913144"),
        l = n("49111"),
        i = {
          show(e, t) {
            s.default.wait(() =>
              s.default.dispatch({
                type: "TUTORIAL_INDICATOR_SHOW",
                tutorialId: e,
                renderData: t,
              })
            );
          },
          hide(e) {
            s.default.wait(() =>
              s.default.dispatch({
                type: "TUTORIAL_INDICATOR_HIDE",
                tutorialId: e,
              })
            );
          },
          dismiss(e) {
            s.default.wait(() =>
              s.default.dispatch({
                type: "TUTORIAL_INDICATOR_DISMISS",
                tutorialId: e,
              })
            ),
              a.default.put({
                url: l.Endpoints.TUTORIAL_INDICATOR(e),
                oldFormErrors: !0,
              });
          },
          suppressAll() {
            s.default.dispatch({ type: "TUTORIAL_INDICATOR_SUPPRESS_ALL" }),
              a.default.post({
                url: l.Endpoints.TUTORIAL_INDICATORS_SUPPRESS,
                oldFormErrors: !0,
              });
          },
        };
    },
    413427: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        }),
        n("222007");
      var a,
        s = n("37983"),
        l = n("884691"),
        i = n("414456"),
        r = n.n(i),
        o = n("49111"),
        u = n("117778");
      function d() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t = arguments.length > 1 ? arguments[1] : void 0,
          n = arguments.length > 2 ? arguments[2] : void 0,
          a = "" !== e ? e : null != n.value && "" !== n.value ? n.value : "";
        return (
          (null == t.minLen || !(a.length < t.minLen)) &&
          (null == t.maxLen || !(a.length > t.maxLen)) &&
          !0
        );
      }
      a = class extends l.Component {
        componentDidUpdate(e, t) {
          if (t.focused !== this.state.focused && this.state.focused) {
            var n;
            null === (n = this.inputRef.current) || void 0 === n || n.focus();
          }
          null !== this.props.value &&
            this.props.value !== e.value &&
            this.props.value !== this.state.value &&
            d(this.props.value, this.props, this.state) &&
            this.setState({ value: this.props.value });
        }
        render() {
          let e;
          let {
              className: t,
              name: n,
              autoComplete: a,
              maxLen: l,
            } = this.props,
            i = { position: "absolute", left: 0, width: "100%", opacity: 1 };
          return (
            this.state.focused
              ? (e = { visibility: "hidden", pointerEvents: "none" })
              : (i.opacity = 0),
            (0, s.jsx)("div", {
              className: r(u.outer, t),
              children: (0, s.jsxs)("div", {
                className: u.container,
                children: [
                  (0, s.jsx)("input", {
                    type: "text",
                    className: u.input,
                    ref: this.inputRef,
                    style: i,
                    value: this.state.value,
                    name: n,
                    maxLength: l,
                    autoComplete: a,
                    onKeyPress: this.handleKeyPress,
                    onChange: this.handleChange,
                    onFocus: this.handleFocus,
                    onBlur: this.handleBlur,
                  }),
                  (0, s.jsx)("div", {
                    className: u.input,
                    style: e,
                    children: this.state.value,
                  }),
                ],
              }),
            })
          );
        }
        constructor(...e) {
          super(...e),
            (this.inputRef = l.createRef()),
            (this.state = {
              focused: !1,
              lastGoodValue: this.props.value,
              value: this.props.value,
            }),
            (this.handleChange = e => {
              let { onChange: t } = this.props;
              this.setState({ value: e.currentTarget.value }),
                null == t || t(e);
            }),
            (this.handleFocus = e => {
              let { onFocus: t } = this.props;
              this.setState({
                focused: !0,
                lastGoodValue: e.currentTarget.value,
              }),
                null == t || t(e);
            }),
            (this.handleBlur = e => {
              if (d("", this.props, this.state)) {
                this.setState({ focused: !1 });
                let { onBlur: t } = this.props;
                null == t || t(e);
              } else
                this.setState({ focused: !1, value: this.state.lastGoodValue });
            }),
            (this.handleKeyPress = e => {
              if (e.which === o.KeyboardKeys.ENTER) {
                var t;
                null === (t = this.inputRef.current) ||
                  void 0 === t ||
                  t.blur();
              }
            });
        }
      };
    },
    811475: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          activityInviteKey: function () {
            return N;
          },
          default: function () {
            return L;
          },
        }),
        n("222007");
      var a = n("37983"),
        s = n("884691"),
        l = n("627445"),
        i = n.n(l),
        r = n("446674"),
        o = n("77078"),
        u = n("819689"),
        d = n("803816"),
        c = n("767993"),
        f = n("716241"),
        h = n("651057"),
        C = n("299285"),
        p = n("850391"),
        E = n("149022"),
        m = n("681060"),
        g = n("884351"),
        S = n("671071"),
        _ = n("401848"),
        T = n("718422"),
        A = n("49111"),
        M = n("782340"),
        I = n("49077");
      let N = "ActivityInvite";
      class v extends s.PureComponent {
        componentDidMount() {
          this.fetchApplication();
        }
        componentDidUpdate(e) {
          let { activity: t } = this.props;
          t.application_id !== e.activity.application_id &&
            this.fetchApplication();
        }
        fetchApplication() {
          let { activity: e, application: t } = this.props;
          null != e.application_id &&
            null == t &&
            h.default.fetchApplication(e.application_id);
        }
        renderTitle() {
          let { activity: e } = this.props;
          switch (e.type) {
            case A.ActivityTypes.LISTENING:
              return M.default.Messages.INVITE_EMBED_LISTENING_INVITE;
            case A.ActivityTypes.PLAYING:
            case A.ActivityTypes.STREAMING:
            default:
              return M.default.Messages.INVITE_EMBED_GAME_INVITE;
          }
        }
        render() {
          let {
              textValue: e,
              richValue: t,
              textFocused: n,
              contentWarningProps: s,
            } = this.state,
            {
              activity: l,
              analyticsLocations: r,
              channel: u,
              activityActionType: f,
              cooldown: h,
              application: C,
              transitionState: E,
              onClose: g,
            } = this.props,
            S = h > 0,
            _ = S
              ? M.default.Messages.CHANNEL_SLOWMODE_COOLDOWN.format({
                  seconds: Math.round((h + 1e3) / 1e3),
                })
              : null;
          return (0, a.jsxs)(o.ModalRoot, {
            size: o.ModalSize.SMALL,
            transitionState: E,
            "aria-label": this.renderTitle(),
            children: [
              (0, a.jsx)(o.ModalHeader, {
                separator: !1,
                children: (0, a.jsx)(o.Heading, {
                  variant: "heading-lg/semibold",
                  children: this.renderTitle(),
                }),
              }),
              (0, a.jsxs)(o.ModalContent, {
                children: [
                  (0, a.jsx)("div", {
                    className: I.subHeader,
                    children: M.default.Messages.MESSAGE_PREVIEW,
                  }),
                  (0, a.jsx)(d.default, {
                    activityActionType: f,
                    activity: l,
                    className: I.preview,
                    application: C,
                    partyId: null != l.party ? l.party.id : null,
                    isPreview: !0,
                    analyticsLocations: r,
                  }),
                  (0, a.jsx)("div", {
                    className: I.subHeader,
                    children: M.default.Messages.ADD_A_COMMENT_OPTIONAL,
                  }),
                  (0, a.jsx)(o.Popout, {
                    position: "top",
                    onRequestClose: () => {
                      var e;
                      null == s ||
                        null === (e = s.onCancel) ||
                        void 0 === e ||
                        e.call(s),
                        this.setState({ contentWarningProps: null });
                    },
                    shouldShow: null != s,
                    renderPopout: e => {
                      let { closePopout: t } = e;
                      return (
                        i(
                          null != s,
                          "ActivityInvite.render - renderPopout: contentWarningProps cannot be null"
                        ),
                        (0, a.jsx)(c.default, { onClose: t, ...s })
                      );
                    },
                    children: () =>
                      (0, a.jsx)(m.default, {
                        className: I.textArea,
                        textValue: e,
                        richValue: t,
                        focused: n,
                        channel: u,
                        onChange: this.handleTextChange,
                        onSubmit: this.handleShare,
                        type: p.ChatInputTypes.FORM,
                        parentModalKey: N,
                        disableThemedBackground: !0,
                      }),
                  }),
                ],
              }),
              (0, a.jsxs)(o.ModalFooter, {
                children: [
                  (0, a.jsx)(o.Tooltip, {
                    text: _,
                    children: e =>
                      (0, a.jsx)("div", {
                        ...e,
                        children: (0, a.jsx)(o.Button, {
                          disabled: S,
                          onClick: this.handleShare,
                          children: M.default.Messages.INVITE_EMBED_SEND_INVITE,
                        }),
                      }),
                  }),
                  (0, a.jsx)(o.Button, {
                    look: o.Button.Looks.LINK,
                    color: o.Button.Colors.PRIMARY,
                    onClick: g,
                    children: M.default.Messages.CANCEL,
                  }),
                ],
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = {
              ...(0, E.createEmptyState)(),
              textFocused: !0,
              contentWarningProps: null,
            }),
            (this.trackInvite = e => {
              if (null != e && e.ok) {
                let {
                    activity: t,
                    channel: n,
                    activityActionType: a,
                  } = this.props,
                  s = "";
                switch (a) {
                  case A.ActivityActionTypes.JOIN:
                    s = "Invite to Join";
                    break;
                  case A.ActivityActionTypes.LISTEN:
                    s = "Invite to Listen";
                    break;
                  case A.ActivityActionTypes.WATCH:
                    s = "Invite to Watch";
                }
                return (
                  f.default.trackWithMetadata(A.AnalyticEvents.INVITE_SENT, {
                    location: "Channel Text Area - ".concat(s),
                    invite_type:
                      t.type === A.ActivityTypes.LISTENING
                        ? A.LoggingInviteTypes.SPOTIFY
                        : A.LoggingInviteTypes.APPLICATION,
                    application_id: t.application_id,
                    guild_id: n.getGuildId(),
                    channel_id: n.id,
                    message_id: null != e ? e.body.id : null,
                  }),
                  Promise.resolve()
                );
              }
            }),
            (this.handleTextChange = (e, t, n) => {
              this.setState({ textValue: t, richValue: n });
            }),
            (this.handleShare = () => {
              let {
                  channel: e,
                  activity: t,
                  activityActionType: n,
                  cooldown: a,
                  onClose: s,
                } = this.props,
                { textValue: l, contentWarningProps: i } = this.state;
              if (a > 0)
                return Promise.resolve({ shouldClear: !1, shouldRefocus: !0 });
              let r = g.default.parse(e, l),
                o = { activity: t, type: n };
              return null != i
                ? (this.setState({ contentWarningProps: null }),
                  u.default
                    .sendMessage(e.id, r, !0, { activityAction: o })
                    .then(e => this.trackInvite(e)),
                  s(),
                  Promise.resolve({ shouldClear: !0, shouldRefocus: !0 }))
                : (0, T.applyChatRestrictions)({
                    openWarningPopout: e =>
                      this.setState({ contentWarningProps: e }),
                    type: p.ChatInputTypes.FORM,
                    content: l,
                    channel: e,
                  }).then(t => {
                    let { valid: n } = t;
                    return n
                      ? (u.default
                          .sendMessage(e.id, r, !0, { activityAction: o })
                          .then(e => this.trackInvite(e)),
                        s(),
                        { shouldClear: !1, shouldRefocus: !1 })
                      : { shouldClear: !1, shouldRefocus: !1 };
                  });
            });
        }
      }
      var L = r.default.connectStores([_.default, C.default], e => {
        let { channel: t, activity: n } = e;
        return {
          cooldown: _.default.getSlowmodeCooldownGuess(t.id),
          application:
            null != n.application_id
              ? C.default.getApplication(n.application_id)
              : S.SpotifyApplication,
        };
      })(v);
    },
    779454: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        }),
        n("222007");
      var a = n("37983"),
        s = n("884691"),
        l = n("414456"),
        i = n.n(l),
        r = n("77078"),
        o = n("145131"),
        u = n("79571");
      class d extends s.PureComponent {
        render() {
          let e;
          let {
            renderFooter: t,
            selectable: n,
            renderHeader: s,
            className: l,
            onClose: d,
            children: c,
          } = this.props;
          return (
            null != t &&
              (e = (0, a.jsx)(r.ModalFooter, {
                direction: o.default.Direction.HORIZONTAL,
                children: t(),
              })),
            (0, a.jsx)(r.Modal, {
              onCloseRequest: d,
              renderModal: t => {
                let { onClose: f, ...h } = t;
                return (0, a.jsxs)(r.ModalRoot, {
                  className: u.modal,
                  ...h,
                  children: [
                    (0, a.jsxs)(r.ModalHeader, {
                      align: o.default.Justify.BETWEEN,
                      separator: !1,
                      children: [
                        s(),
                        (0, a.jsx)(o.default.Child, {
                          grow: 0,
                          children: (0, a.jsx)(r.ModalCloseButton, {
                            onClick: () => {
                              null != d && d(), f();
                            },
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsx)(r.ModalContent, {
                      className: i(l, u.content, { selectable: n }),
                      scrollerRef: this.scrollerRef,
                      onScroll: this.handleScroll,
                      children: c,
                    }),
                    e,
                  ],
                });
              },
            })
          );
        }
        constructor(...e) {
          super(...e),
            (this.scrollerRef = s.createRef()),
            (this.handleScroll = () => {
              let { current: e } = this.scrollerRef;
              if (null != e) {
                var t, n;
                null === (t = (n = this.props).onScroll) ||
                  void 0 === t ||
                  t.call(n, e);
              }
            });
        }
      }
      d.defaultProps = { selectable: !1 };
      var c = d;
    },
    767993: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        }),
        n("222007");
      var a = n("37983"),
        s = n("884691"),
        l = n("669491"),
        i = n("819855"),
        r = n("77078"),
        o = n("716241"),
        u = n("161778"),
        d = n("925877"),
        c = n("599110"),
        f = n("49111"),
        h = n("782340"),
        C = n("609793"),
        p = n("919163");
      function E(e) {
        let {
          onClose: t,
          onConfirm: E,
          onCancel: m,
          channel: g,
          analyticsType: S,
          popoutText: _,
          animation: T,
        } = e;
        s.useEffect(() => {
          c.default.track(f.AnalyticEvents.OPEN_POPOUT, {
            type: S,
            ...(0, o.collectChannelAnalyticsMetadata)(g),
          });
        }, [S, g]);
        let A = s.useCallback(() => {
            null == E || E(), t();
          }, [E, t]),
          M = s.useCallback(() => {
            null == m || m(), t();
          }, [m, t]),
          I = s.useRef(null);
        return (
          s.useEffect(() => {
            let e;
            let t = u.default.theme,
              a = !1;
            return (
              null != T &&
                (async () => {
                  let [{ default: s }, l] = await Promise.all([
                    n.el("865981").then(n.t.bind(n, "865981", 23)),
                    (0, i.isThemeDark)(t) ? T.dark() : T.light(),
                  ]);
                  !a &&
                    (e = s.loadAnimation({
                      container: I.current,
                      renderer: "svg",
                      loop: !0,
                      autoplay: !0,
                      animationData: l,
                    }));
                })(),
              () => {
                (a = !0), null != e && (e.destroy(), (e = void 0));
              }
            );
          }, [T]),
          (0, a.jsx)(r.Dialog, {
            "aria-labelledby": "content-warning-popout-label",
            children: (0, a.jsxs)("form", {
              className: C.contentWarningPopout,
              onSubmit: A,
              children: [
                (0, a.jsxs)("div", {
                  className: C.body,
                  children: [
                    null != T &&
                      (0, a.jsx)("div", { className: C.animation, ref: I }),
                    (0, a.jsxs)("div", {
                      className: C.content,
                      children: [
                        (0, a.jsx)("div", {
                          className: C.header,
                          children: h.default.Messages.SELF_XSS_HEADER,
                        }),
                        (0, a.jsx)(r.Text, {
                          id: "content-warning-popout-label",
                          className: p.markup,
                          variant: "text-sm/normal",
                          children: _.body,
                        }),
                        (0, a.jsxs)("div", {
                          className: C.buttonWrapper,
                          children: [
                            (0, a.jsxs)("div", {
                              className: C.buttonContainer,
                              children: [
                                (0, a.jsx)(r.Button, {
                                  className: C.button,
                                  color: r.Button.Colors.PRIMARY,
                                  onClick: M,
                                  children: h.default.Messages.EDIT_MESSAGE,
                                }),
                                (0, a.jsx)(r.Text, {
                                  variant: "text-xs/normal",
                                  className: C.buttonHint,
                                  children:
                                    h.default.Messages.EVERYONE_POPOUT_ESC.format(),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: C.buttonContainer,
                              children: [
                                (0, a.jsx)(r.Button, {
                                  className: C.button,
                                  onClick: A,
                                  type: "submit",
                                  autoFocus: !0,
                                  children:
                                    h.default.Messages.EVERYONE_POPOUT_SEND_NOW,
                                }),
                                (0, a.jsx)(r.Text, {
                                  variant: "text-xs/normal",
                                  className: C.buttonHint,
                                  children:
                                    h.default.Messages.EVERYONE_POPOUT_ENTER.format(),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                null != _.footer && "" !== _.footer
                  ? (0, a.jsxs)("div", {
                      className: C.footer,
                      children: [
                        (0, a.jsx)(d.default, {
                          color: l.default.unsafe_rawColors.PRIMARY_400.css,
                          className: C.icon,
                        }),
                        (0, a.jsx)(r.Text, {
                          variant: "text-sm/normal",
                          children: _.footer,
                        }),
                      ],
                    })
                  : null,
              ],
            }),
          })
        );
      }
    },
    264732: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        }),
        n("222007");
      var a = n("37983"),
        s = n("884691"),
        l = n("446674"),
        i = n("383018"),
        r = n("679653"),
        o = n("474643"),
        u = n("247013"),
        d = n("88093"),
        c = n("778588"),
        f = n("957255"),
        h = n("27618"),
        C = n("697218"),
        p = n("659500"),
        E = n("412861"),
        m = n("160864"),
        g = n("527382"),
        S = n("49111"),
        _ = n("782340"),
        T = function (e) {
          let { className: t, style: n, channel: T, draftType: A } = e,
            [M, I] = s.useState(!0),
            N = (0, l.useStateFromStores)([c.default], () =>
              c.default.hasLayers()
            ),
            v = (0, l.useStateFromStores)(
              [f.default],
              () => null != T && f.default.can(S.Permissions.ATTACH_FILES, T),
              [T]
            ),
            L = (0, l.useStateFromStores)([i.default], () =>
              i.default.getActiveCommand(T.id)
            ),
            R = null != L,
            x = T.getGuildId(),
            y = A === o.DraftType.FirstThreadMessage,
            O = (0, l.useStateFromStores)([C.default], () => {
              var e;
              return (
                !0 ==
                !(null === (e = C.default.getCurrentUser()) || void 0 === e
                  ? void 0
                  : e.nsfwAllowed)
              );
            }),
            D = (0, l.useStateFromStores)([u.default], () =>
              u.default.didAgree(x)
            ),
            P = D && !O,
            j = s.useMemo(
              () =>
                !N &&
                ((T.isPrivate() && !T.isManaged()) ||
                  (null != x &&
                    (!T.isNSFW() || P) &&
                    v &&
                    d.default.canChatInGuild(x))),
              [v, P, T, x, N]
            ),
            b = y
              ? S.ChannelTypesSets.GUILD_THREADS_ONLY.has(T.type)
                ? _.default.Messages.UPLOAD_TO_NEW_POST
                : _.default.Messages.UPLOAD_TO_NEW_THREAD
              : M
                ? _.default.Messages.UPLOAD_TO.format({
                    destination: (0, r.computeChannelName)(
                      T,
                      C.default,
                      h.default,
                      !0
                    ),
                  })
                : _.default.Messages.UPLOAD_AREA_TITLE_NO_CONFIRMATION;
          return R || !j
            ? null
            : (0, a.jsx)(m.default, {
                className: t,
                style: n,
                title: b,
                description: y
                  ? _.default.Messages.UPLOAD_AREA_NEW_THREAD_HELP
                  : _.default.Messages.UPLOAD_AREA_HELP,
                icons: g.DEFAULT_FILE_UPLOAD_ICONS,
                onDrop: e => {
                  if (R) return !1;
                  j &&
                    null != T &&
                    ((0, E.promptToUpload)(e, T, A, {
                      requireConfirm: M,
                      showLargeMessageDialog: !1,
                    }),
                    p.ComponentDispatch.dispatchToLastSubscribed(
                      S.ComponentActions.TEXTAREA_FOCUS
                    ));
                },
                onDragClear: () => I(!0),
                onDragOver: e => {
                  if (R) return !1;
                  !y && e.shiftKey === M && I(!e.shiftKey);
                },
              });
        };
    },
    945863: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("347854");
      n.es(a, t);
    },
    346855: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("515478");
      n.es(a, t);
    },
    828049: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("102885");
      n.es(a, t);
    },
    587864: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("53531");
      n.es(a, t);
    },
    586938: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("800914");
      n.es(a, t);
    },
    685888: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var a = n("679653"),
        s = n("49111"),
        l = n("782340");
      function i(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = (0, a.default)(e, !0),
          i = (0, a.default)(e, !1);
        if (null == e || null == n)
          return { placeholder: "", accessibilityLabel: "" };
        if (t)
          return {
            placeholder: l.default.Messages.READ_ONLY_CHANNEL,
            accessibilityLabel: l.default.Messages.READ_ONLY_CHANNEL,
          };
        if (e.isForumPost())
          return {
            placeholder:
              l.default.Messages.FORUM_POST_TEXTAREA_PLACEHOLDER.format({
                channel: n,
              }),
            accessibilityLabel:
              l.default.Messages.TEXTAREA_FORUM_POST_A11Y_LABEL.format({
                channel: i,
              }),
          };
        if (s.ChannelTypesSets.THREADS.has(e.type))
          return {
            placeholder: l.default.Messages.TEXTAREA_PLACEHOLDER.format({
              channel: n,
            }),
            accessibilityLabel:
              l.default.Messages.TEXTAREA_THREAD_A11Y_LABEL.format({
                channel: i,
              }),
          };
        if (e.type === s.ChannelTypes.DM)
          return {
            placeholder: l.default.Messages.DM_TEXTAREA_PLACEHOLDER.format({
              channel: n,
            }),
            accessibilityLabel:
              l.default.Messages.TEXTAREA_TEXT_DM_A11Y_LABEL.format({
                channel: i,
              }),
          };
        return {
          placeholder: l.default.Messages.TEXTAREA_PLACEHOLDER.format({
            channel: n,
          }),
          accessibilityLabel:
            l.default.Messages.TEXTAREA_TEXT_CHANNEL_A11Y_LABEL.format({
              channel: i,
            }),
        };
      }
    },
    176347: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return eP;
          },
        }),
        n("222007");
      var a = n("37983"),
        s = n("884691"),
        l = n("627445"),
        i = n.n(l),
        r = n("394846"),
        o = n("298386"),
        u = n("446674"),
        d = n("77078"),
        c = n("295426"),
        f = n("819689"),
        h = n("352674"),
        C = n("81594"),
        p = n("783480"),
        E = n("125667"),
        m = n("901582"),
        g = n("767993"),
        S = n("180748"),
        _ = n("206230"),
        T = n("716241"),
        A = n("507217"),
        M = n("118200"),
        I = n("240249"),
        N = n("524768"),
        v = n("389153"),
        L = n("916565"),
        R = n("850391"),
        x = n("149022"),
        y = n("159492"),
        O = n("998415"),
        D = n("228800"),
        P = n("681060"),
        j = n("939563"),
        b = n("538282"),
        H = n("956967"),
        F = n("952104"),
        U = n("509"),
        k = n("406043"),
        G = n("68895"),
        B = n("934288"),
        w = n("87635"),
        V = n("734570"),
        W = n("884351"),
        Z = n("818950"),
        z = n("28007"),
        K = n("880731"),
        Y = n("943551"),
        q = n("667137"),
        X = n("445499"),
        J = n("319939"),
        Q = n("529805"),
        $ = n("685841"),
        ee = n("467094"),
        et = n("12896"),
        en = n("271938"),
        ea = n("982108"),
        es = n("474643"),
        el = n("836417"),
        ei = n("26989"),
        er = n("377253"),
        eo = n("957255"),
        eu = n("18494"),
        ed = n("585722"),
        ec = n("697218"),
        ef = n("659186"),
        eh = n("599110"),
        eC = n("378765"),
        ep = n("659500"),
        eE = n("299039"),
        em = n("718422"),
        eg = n("563680"),
        eS = n("412861"),
        e_ = n("834021"),
        eT = n("685888"),
        eA = n("710216"),
        eM = n("348652"),
        eI = n("306588"),
        eN = n("49111"),
        ev = n("782340"),
        eL = n("250455");
      function eR(e) {
        e.preventDefault();
      }
      let ex = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
      function ey(e) {
        let { isSidebar: t, ...n } = e;
        return t
          ? (0, a.jsx)("section", { ...n, role: "complementary" })
          : (0, a.jsx)("main", { ...n });
      }
      class eO extends s.PureComponent {
        componentDidMount() {
          es.default.addChangeListener(this.draftDidChange);
        }
        componentWillUnmount() {
          es.default.removeChangeListener(this.draftDidChange);
        }
        componentDidUpdate(e, t) {
          let { channel: n } = this.props,
            { textValue: a } = this.state;
          if (e.channel.id !== n.id) {
            this.draftDidChange(this.props);
            return;
          }
          if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = es.default.getDraft(n.id, es.DraftType.ChannelMessage);
            e !== a && this.setState((0, x.createState)(e));
          }
          t.textValue.length < eN.MAX_MESSAGE_LENGTH &&
            a.length >= eN.MAX_MESSAGE_LENGTH &&
            eh.default.track(
              eN.AnalyticEvents.MESSAGE_LENGTH_LIMIT_REACHED,
              {}
            );
        }
        handleEditLastMessage(e) {
          let { channel: t } = this.props;
          f.default.startEditMessage(t.id, e.id, e.content),
            T.default.trackWithMetadata(
              eN.AnalyticEvents.MESSAGE_EDIT_UP_ARROW
            );
        }
        handleRecallLastCommand(e) {
          if (null == e.interactionData) return;
          let { channel: t } = this.props,
            { commandKey: n, interactionOptions: a } = (0,
            v.extractInteractionDataProps)(e.interactionData),
            { command: s, application: l } = I.getCachedCommand(t, n);
          if (null != s) {
            var i, r;
            let e =
              null != l
                ? {
                    type: N.ApplicationCommandSectionType.APPLICATION,
                    id: l.id,
                    icon:
                      null !==
                        (r =
                          null == l
                            ? void 0
                            : null === (i = l.bot) || void 0 === i
                              ? void 0
                              : i.username) && void 0 !== r
                        ? r
                        : l.icon,
                    name: l.name,
                    application: l,
                  }
                : null;
            A.setActiveCommand({
              channelId: t.id,
              command: s,
              section: e,
              location: N.ApplicationCommandTriggerLocations.RECALL,
              initialValues: (0, M.getInitialValuesFromInteractionOptions)(
                s,
                null != a ? a : []
              ),
            });
          }
        }
        render() {
          let {
              channel: e,
              focused: t,
              onResize: n,
              onBlur: s,
              onFocus: l,
              highlighted: r,
              pendingReply: o,
              chatInputType: u,
              placeholder: c,
              accessibilityLabel: f,
              shakeIntensity: h,
              poggermodeEnabled: C,
            } = this.props,
            { contentWarningProps: p } = this.state,
            E = (0, a.jsx)(P.default, {
              textValue: this.state.textValue,
              richValue: this.state.richValue,
              focused: t,
              className: eL.channelTextArea,
              channel: e,
              placeholder: c,
              accessibilityLabel: f,
              pendingReply: o,
              type: u,
              onChange: this.handleTextareaChange,
              onSubmit: this.handleSendMessage,
              onResize: n,
              onFocus: l,
              onBlur: s,
              onKeyDown: this.handleKeyDown,
              renderAttachButton: this.renderAttachButton,
              renderAppLauncherButton: this.renderAppLauncherButton,
              renderApplicationCommandIcon: this.renderApplicationCommandIcon,
              promptToUpload: eS.promptToUpload,
              highlighted: r,
              setEditorRef: e => (this.editorRef = e),
            });
          return (0, a.jsx)(d.Popout, {
            position: "top",
            onRequestClose: () => {
              var e;
              null == p ||
                null === (e = p.onCancel) ||
                void 0 === e ||
                e.call(p),
                this.setState({ contentWarningProps: null });
            },
            shouldShow: null != p,
            renderPopout: e => {
              let { closePopout: t } = e;
              return (
                i(
                  null != p,
                  "ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null"
                ),
                (0, a.jsx)(g.default, { onClose: t, ...p })
              );
            },
            children: () =>
              C
                ? (0, a.jsx)(d.Shaker, {
                    isShaking: h > 0,
                    intensity: h,
                    children: E,
                  })
                : E,
          });
        }
        constructor(...e) {
          var t;
          super(...e),
            (t = this),
            (this.isFirstChange = !0),
            (this.editorRef = null),
            (this.state = {
              ...(0, x.createState)(
                es.default.getDraft(
                  this.props.channel.id,
                  es.DraftType.ChannelMessage
                )
              ),
              contentWarningProps: null,
            }),
            (this.draftDidChange = function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : t.props,
                { textValue: n } = t.state,
                a = es.default.getDraft(
                  e.channel.id,
                  es.DraftType.ChannelMessage
                );
              n !== a &&
                ("" === a || "" === n) &&
                t.setState((0, x.createState)(a), () => {
                  if (n !== a) {
                    let { onFocus: e } = t.props;
                    null == e || e();
                  }
                });
            }),
            (this.handleKeyDown = e => {
              let {
                  keyboardModeEnabled: t,
                  onKeyDown: n,
                  channel: a,
                } = this.props,
                s = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey,
                l = 0 !== this.state.textValue.length;
              switch (e.which) {
                case eN.KeyboardKeys.DELETE:
                case eN.KeyboardKeys.BACKSPACE:
                  this.handleIncrementCombo("", 1);
                  return;
                case eN.KeyboardKeys.ARROW_UP:
                  if (s || l) return;
                  if ((e.preventDefault(), t))
                    ed.default.getUploadCount(
                      a.id,
                      es.DraftType.ChannelMessage
                    ) > 0
                      ? ep.ComponentDispatch.dispatchToLastSubscribed(
                          eN.ComponentActions.FOCUS_ATTACHMENT_AREA
                        )
                      : ep.ComponentDispatch.dispatchToLastSubscribed(
                          eN.ComponentActions.FOCUS_MESSAGES,
                          { atEnd: !0 }
                        );
                  else {
                    let { channel: e } = this.props,
                      t = er.default.getLastCommandMessage(e.id),
                      n = er.default.getLastEditableMessage(e.id);
                    null != t && null != n
                      ? eE.default.compare(n.id, t.id) > 0
                        ? this.handleEditLastMessage(n)
                        : this.handleRecallLastCommand(t)
                      : null != t
                        ? this.handleRecallLastCommand(t)
                        : null != n && this.handleEditLastMessage(n);
                  }
                  return;
                case eN.KeyboardKeys.ESCAPE:
                  if (s || e.target !== e.currentTarget) return;
                  if ((e.preventDefault(), t)) {
                    (0, S.disableKeyboardMode)();
                    return;
                  }
                  if (
                    ed.default.getUploadCount(
                      a.id,
                      es.DraftType.ChannelMessage
                    ) > 0
                  ) {
                    C.default.clearAll(a.id, es.DraftType.ChannelMessage);
                    return;
                  }
              }
              null == n || n(e, l);
            }),
            (this.handleIncrementCombo = (e, t) => {
              var n;
              if (!this.props.poggermodeEnabled) return;
              let a = this.props.channel.id,
                s = en.default.getId(),
                l = Y.default.getUserCombo(s, a),
                i =
                  (null !== (n = null == l ? void 0 : l.value) && void 0 !== n
                    ? n
                    : 0) + 1;
              (0, z.updateCombo)({
                channelId: a,
                userId: s,
                value: null != e ? e.length : i,
                multiplier: t,
              });
            }),
            (this.handleTextareaChange = (e, t, n) => {
              let {
                keyboardModeEnabled: a,
                channel: { id: s },
              } = this.props;
              c.default.changeDraft(s, t, es.DraftType.ChannelMessage);
              let l = "" !== t && n !== this.state.richValue,
                i =
                  l &&
                  !ex.test(t) &&
                  !t.startsWith("/") &&
                  (!this.isFirstChange || t !== this.state.textValue);
              (this.isFirstChange = !1),
                i &&
                  this.state.textValue.length < t.length &&
                  this.handleIncrementCombo(),
                i
                  ? h.default.startTyping(s)
                  : "" === t && h.default.stopTyping(s),
                l && a && (0, S.disableKeyboardMode)(),
                this.setState({ textValue: t, richValue: n });
            }),
            (this.handleSendMessage = async e => {
              let {
                value: t,
                uploads: n,
                stickers: a,
                command: s,
                commandOptionValues: l,
                isGif: i,
              } = e;
              if (
                0 === (t = t.trim()).length &&
                (null == a || 0 === a.length) &&
                (null == n || 0 === n.length)
              )
                return Promise.resolve({ shouldClear: !1, shouldRefocus: !0 });
              let {
                  guild: r,
                  channel: o,
                  pendingReply: u,
                  chatInputType: d,
                } = this.props,
                c = !1;
              if (null != s) {
                if (
                  s.inputType ===
                  N.ApplicationCommandInputType.BUILT_IN_INTEGRATION
                )
                  return (
                    ep.ComponentDispatch.dispatch(
                      eN.ComponentActions.SHAKE_APP,
                      { duration: 200, intensity: 2 }
                    ),
                    Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                  );
                let e = await (0, L.default)({
                  command: s,
                  optionValues: null != l ? l : {},
                  context: { guild: r, channel: o },
                });
                if (s.inputType !== N.ApplicationCommandInputType.BUILT_IN_TEXT)
                  return Promise.resolve({
                    shouldClear: !0,
                    shouldRefocus: !0,
                  });
                null != e &&
                  ((t = null != e.content && "" !== e.content ? e.content : t),
                  (c = !0 === e.tts));
              }
              return (0, em.applyChatRestrictions)({
                openWarningPopout: e =>
                  this.setState({ contentWarningProps: e }),
                type: this.props.chatInputType,
                content: t,
                stickers: a,
                uploads: n,
                channel: o,
              }).then(e => {
                let { valid: s, failureReason: l } = e;
                if (!s)
                  return l === eN.MessageRestrictionTypes.SLOWMODE_COOLDOWN
                    ? (ep.ComponentDispatch.dispatch(
                        eN.ComponentActions.SHAKE_APP,
                        { duration: 200, intensity: 2 }
                      ),
                      ep.ComponentDispatch.dispatch(
                        eN.ComponentActions.EMPHASIZE_SLOWMODE_COOLDOWN
                      ),
                      { shouldClear: !1, shouldRefocus: !0 })
                    : { shouldClear: !1, shouldRefocus: !1 };
                let h = (0, V.handleLegacyCommands)(t, {
                  channel: o,
                  isEdit: !1,
                });
                null != h &&
                  (null != h.content && (t = h.content),
                  null != h.tts && (c = h.tts));
                let E = W.default.parse(o, t);
                E.tts = E.tts || c;
                let m = f.default.getSendMessageOptionsForReply(u);
                if (i)
                  return (
                    f.default.sendMessage(o.id, E, void 0, m),
                    (0, Q.deletePendingReply)(o.id),
                    { shouldClear: !1, shouldRefocus: !0 }
                  );
                if (null != n && n.length > 0) {
                  let e = (0, e_.getWebUploadFiles)(n);
                  if (
                    (0, e_.filesExceedUploadLimits)(
                      e,
                      null == r ? void 0 : r.id
                    )
                  )
                    return (
                      (0, eS.showUploadFileSizeExceededError)(o, e),
                      { shouldClear: !1, shouldRefocus: !1 }
                    );
                  p.default.uploadFiles({
                    channelId: o.id,
                    uploads: n,
                    draftType: es.DraftType.ChannelMessage,
                    parsedMessage: E,
                    options: { ...m, stickerIds: a },
                  }),
                    C.default.clearAll(o.id, es.DraftType.ChannelMessage);
                } else
                  null != a && a.length > 0
                    ? "" !== t
                      ? f.default.sendMessage(o.id, E, void 0, {
                          ...m,
                          stickerIds: a,
                        })
                      : f.default.sendStickers(o.id, a, t, m, E.tts)
                    : f.default.sendMessage(o.id, E, void 0, m);
                return (
                  this.setState((0, x.createEmptyState)()),
                  (0, Q.deletePendingReply)(o.id),
                  (0, ee.clearStickerPreview)(o.id, d.drafts.type),
                  { shouldClear: !0, shouldRefocus: !0 }
                );
              });
            }),
            (this.handleSetValue = e => {
              var t, n;
              let a =
                null === (t = this.editorRef) || void 0 === t
                  ? void 0
                  : t.getSlateEditor();
              null != a &&
                (j.SlateTransforms.select(a, []),
                a.insertText(e),
                null === (n = this.editorRef) || void 0 === n || n.focus());
            }),
            (this.renderAttachButton = (e, t) =>
              (0, a.jsx)(D.default, {
                className: t,
                channel: this.props.channel,
                draftType: es.DraftType.ChannelMessage,
                editorTextContent: this.state.textValue,
                setValue: this.handleSetValue,
                canOnlyUseTextCommands: e,
              })),
            (this.renderAppLauncherButton = () => (0, a.jsx)(y.default, {})),
            (this.renderApplicationCommandIcon = (e, t, n) =>
              (0, a.jsx)(O.default, {
                className: n,
                command: e,
                section: t,
                channel: this.props.channel,
              }));
        }
      }
      class eD extends s.PureComponent {
        static getDerivedStateFromProps(e, t) {
          let { channel: n } = e,
            { currentChannelId: a } = t;
          return n.id !== a
            ? {
                textAreaFocused:
                  null != n &&
                  !r.isMobile &&
                  eo.default.can(eN.Permissions.SEND_MESSAGES, n),
                currentChannelId: n.id,
              }
            : null;
        }
        componentDidMount() {
          ep.ComponentDispatch.subscribe(
            eN.ComponentActions.FOCUS_CHANNEL_TEXT_AREA,
            this.handleRequestFocus
          );
        }
        componentDidUpdate(e) {
          (this.props.isEditing !== e.isEditing ||
            this.props.hasModalOpen !== e.hasModalOpen) &&
            (this.props.isEditing || this.props.hasModalOpen
              ? this.handleInputBlur()
              : this.handleInputFocus());
        }
        componentWillUnmount() {
          ep.ComponentDispatch.unsubscribe(
            eN.ComponentActions.FOCUS_CHANNEL_TEXT_AREA,
            this.handleRequestFocus
          );
        }
        render() {
          var e;
          let t;
          let {
              channel: n,
              guild: s,
              keyboardModeEnabled: l,
              hasModalOpen: i,
              pendingReply: r,
              chatInputType: u,
              placeholder: c,
              accessibilityLabel: f,
              showQuarantinedUserBanner: h,
              filterAfterTimestamp: C,
              communicationDisabledUntil: p,
              shakeIntensity: g,
              poggermodeEnabled: S,
              isSelectedResourceChannel: _,
              showAutomodUserProfileChatBlocker: T,
            } = this.props,
            { textAreaFocused: A, textAreaHighlighted: M } = this.state,
            I = u === R.ChatInputTypes.SIDEBAR;
          t =
            I && n.type === eN.ChannelTypes.GUILD_VOICE
              ? ev.default.Messages.TEXT_IN_VOICE_A11Y_LABEL
              : I && n.type === eN.ChannelTypes.GUILD_STAGE_VOICE
                ? ev.default.Messages.TEXT_IN_STAGE_A11Y_LABEL
                : o.ChannelTypesSets.THREADS.has(n.type)
                  ? ev.default.Messages.THREAD_A11Y_LABEL
                  : ev.default.Messages.CHANNEL_A11Y_LABEL;
          let N = (0, a.jsx)(et.default, {
            tutorialId: "writing-messages",
            position: "left",
            offsetX: 75,
            children: (0, a.jsx)(eO, {
              focused: A,
              highlighted: M,
              channel: n,
              guild: s,
              keyboardModeEnabled: l,
              onFocus: this.handleInputFocus,
              onBlur: this.handleInputBlur,
              onKeyDown: this.handleInputKeyDown,
              hasModalOpen: i,
              pendingReply: r,
              chatInputType: u,
              placeholder: c,
              accessibilityLabel: f,
              shakeIntensity: g,
              poggermodeEnabled: S,
            }),
          });
          return (0, a.jsx)(
            m.default,
            {
              page: this.getAnalyticsPage(),
              children: (0, a.jsx)(ef.ChatLayerProvider, {
                children: (0, a.jsxs)(eC.ComponentDispatchGroupProvider, {
                  ref: this.dispatchGroupRef,
                  children: [
                    (0, a.jsx)(eC.ComponentAction, {
                      event: eN.ComponentActions.TEXTAREA_FOCUS,
                      handler: this.handleInputFocus,
                    }),
                    (0, a.jsx)(eC.ComponentAction, {
                      event: eN.ComponentActions.TEXTAREA_BLUR,
                      handler: this.handleInputBlur,
                    }),
                    (0, a.jsx)(eC.ComponentAction, {
                      event: eN.ComponentActions.OPEN_EXPRESSION_PICKER,
                      handler: this.handleOpenExpressionPicker,
                    }),
                    (0, a.jsxs)(ey, {
                      isSidebar: I,
                      className: eL.chatContent,
                      "aria-label": t.format({ channelName: n.name }),
                      onMouseDown: this.handleChatInteract,
                      onKeyDown: this.handleKeyDown,
                      onFocus: this.handleChatInteract,
                      children: [
                        (0, a.jsx)(eA.default, {
                          channel: n,
                          guild: s,
                          narrow: I,
                        }),
                        (0, a.jsxs)(d.HeadingLevel, {
                          component: (0, a.jsx)(d.HiddenVisually, {
                            children: (0, a.jsx)(d.H, {
                              children:
                                ev.default.Messages.CHANNEL_CHAT_HEADING.format(
                                  { channelName: n.name }
                                ),
                            }),
                          }),
                          children: [
                            (0, a.jsx)(Z.default, {
                              channel: n,
                              forceCozy: _,
                              filterAfterTimestamp: C,
                              showingQuarantineBanner: h,
                            }),
                            null == n.guild_id || I
                              ? null
                              : (0, a.jsx)(w.default, {
                                  guildId: n.guild_id,
                                  channel: n,
                                }),
                            _
                              ? null
                              : null !==
                                    (e = this.renderMessageBanner({
                                      channel: n,
                                      showQuarantinedUserBanner: h,
                                      guild: s,
                                      communicationDisabledUntil: p,
                                      showAutomodUserProfileChatBlocker: T,
                                    })) && void 0 !== e
                                ? e
                                : (0, a.jsxs)("form", {
                                    ref: this.inputFormRef,
                                    onSubmit: eR,
                                    className: eL.form,
                                    children: [
                                      S &&
                                        (0, a.jsx)(q.default, {
                                          channelId: n.id,
                                        }),
                                      n.isPrivate()
                                        ? (0, a.jsx)(eM.default, {
                                            channel: n,
                                            children: N,
                                          })
                                        : (0, a.jsx)(eI.default, {
                                            channel: n,
                                            children: N,
                                          }),
                                      (0, a.jsx)(E.default, {
                                        channel: n,
                                        poggermodeEnabled: S,
                                      }),
                                    ],
                                  }),
                            (0, a.jsx)(ef.ChatLayerContainer, {}),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            },
            "messages-".concat(n.id)
          );
        }
        constructor(...e) {
          super(...e),
            (this.inputFormRef = s.createRef()),
            (this.state = {
              textAreaFocused: !1,
              textAreaHighlighted: !1,
              currentChannelId: this.props.channel.id,
            }),
            (this.dispatchGroupRef = s.createRef()),
            (this.handleRequestFocus = e => {
              e.channelId === this.props.channel.id &&
                this.setState({ textAreaFocused: !0 });
            }),
            (this.getAnalyticsPage = () => {
              let { channel: e } = this.props;
              if (null == e) return null;
              switch (e.type) {
                case eN.ChannelTypes.GUILD_ANNOUNCEMENT:
                case eN.ChannelTypes.GUILD_TEXT:
                case eN.ChannelTypes.GUILD_FORUM:
                case eN.ChannelTypes.GUILD_MEDIA:
                  return m.default.Pages.GUILD_CHANNEL;
                case eN.ChannelTypes.GROUP_DM:
                case eN.ChannelTypes.DM:
                  return m.default.Pages.DM_CHANNEL;
                default:
                  return null;
              }
            }),
            (this.handleInputFocus = e => {
              var t;
              null === (t = this.dispatchGroupRef.current) ||
                void 0 === t ||
                t.bumpDispatchPriority(),
                !(0, eg.isFullScreen)() &&
                  ((null == e ? void 0 : e.highlight) != null
                    ? this.setState({
                        textAreaFocused: !0,
                        textAreaHighlighted: null == e ? void 0 : e.highlight,
                      })
                    : this.setState({ textAreaFocused: !0 }));
            }),
            (this.handleInputBlur = () => {
              (document.hasFocus() || this.props.hasModalOpen) &&
                this.setState({ textAreaFocused: !1, textAreaHighlighted: !1 });
            }),
            (this.handleInputKeyDown = (e, t) => {
              this.state.textAreaHighlighted &&
                this.setState({ textAreaHighlighted: !1 }),
                !t && this._handleMoveToPane(e);
            }),
            (this.handleKeyDown = e => {
              var t;
              (null === (t = this.inputFormRef.current) ||
                void 0 === t ||
                !t.contains(e.target)) &&
                this._handleMoveToPane(e);
            }),
            (this._handleMoveToPane = e => {
              let {
                keyboardModeEnabled: t,
                chatInputType: n,
                channel: a,
              } = this.props;
              if (t)
                switch (e.which) {
                  case eN.KeyboardKeys.ARROW_LEFT:
                    n === R.ChatInputTypes.SIDEBAR &&
                      ep.ComponentDispatch.dispatch(
                        eN.ComponentActions.FOCUS_CHANNEL_TEXT_AREA,
                        { channelId: eu.default.getChannelId() }
                      );
                    return;
                  case eN.KeyboardKeys.ARROW_RIGHT:
                    n === R.ChatInputTypes.NORMAL &&
                      ep.ComponentDispatch.dispatch(
                        eN.ComponentActions.FOCUS_CHANNEL_TEXT_AREA,
                        {
                          channelId: ea.default.getCurrentSidebarChannelId(
                            a.id
                          ),
                        }
                      );
                }
            }),
            (this.handleOpenExpressionPicker = e => {
              let { activeView: t } = e;
              (0, b.openExpressionPicker)(t, this.props.chatInputType);
            }),
            (this.handleChatInteract = () => {
              var e;
              null === (e = this.dispatchGroupRef.current) ||
                void 0 === e ||
                e.bumpDispatchPriority();
            }),
            (this.renderMessageBanner = e => {
              let {
                channel: t,
                showQuarantinedUserBanner: n,
                guild: s,
                communicationDisabledUntil: l,
                showAutomodUserProfileChatBlocker: i,
              } = e;
              return t.type === eN.ChannelTypes.DM && n
                ? (0, a.jsx)(J.default, {})
                : null != l &&
                    (0, U.isCommunicationDisabled)(l) &&
                    null != s &&
                    !eo.default.can(eN.Permissions.ADMINISTRATOR, s)
                  ? (0, a.jsx)(G.CommunicationDisabledBanner, {
                      guild: s,
                      disabledUntil: l,
                    })
                  : i
                    ? (0, a.jsx)(
                        F.AutomodUserProfileQuarantineChatInputNotice,
                        { guild: s }
                      )
                    : null;
            });
        }
      }
      var eP = s.memo(function (e) {
        let {
            channel: t,
            guild: n,
            chatInputType: s,
            filterAfterTimestamp: l,
          } = e,
          { placeholder: i, accessibilityLabel: r } = (0, eT.default)(t),
          o = (0, J.useShouldBlockDMInputForQuarantinedUser)(
            ec.default.getCurrentUser(),
            t
          ),
          [c] = (0, k.useCurrentUserCommunicationDisabled)(
            null == n ? void 0 : n.id
          ),
          f = (0, H.useCurrentUserHasAutomodQuarantinedProfile)(
            null == n ? void 0 : n.id
          ),
          h = (0, u.useStateFromStores)([ec.default], () =>
            ec.default.getCurrentUser()
          ),
          C = (0, u.useStateFromStores)([ei.default], () => {
            var e, t, a;
            return (
              null != h &&
              null !==
                (a =
                  null ===
                    (e = ei.default.getMember(
                      null !== (t = null == n ? void 0 : n.id) && void 0 !== t
                        ? t
                        : eN.EMPTY_STRING_SNOWFLAKE_ID,
                      null == h ? void 0 : h.id
                    )) || void 0 === e
                    ? void 0
                    : e.isPending) &&
              void 0 !== a &&
              a
            );
          }),
          p = (0, u.useStateFromStores)([K.default], () =>
            K.default.isEnabled()
          ),
          E = (0, X.default)(t.id),
          m = (0, B.default)(t.id);
        return (0, a.jsx)(eD, {
          channel: t,
          isEditing:
            null !=
            (0, u.useStateFromStores)([el.default], () =>
              el.default.getEditingMessageId(t.id)
            ),
          hasModalOpen: (0, d.useModalsStore)(d.hasAnyModalOpenSelector),
          guild: n,
          keyboardModeEnabled: (0, u.useStateFromStores)(
            [_.default],
            () => _.default.keyboardModeEnabled
          ),
          pendingReply: (0, u.useStateFromStores)([$.default], () =>
            $.default.getPendingReply(t.id)
          ),
          chatInputType: s,
          placeholder: i,
          accessibilityLabel: r,
          filterAfterTimestamp: l,
          showQuarantinedUserBanner: o,
          communicationDisabledUntil: c,
          shakeIntensity: E,
          poggermodeEnabled: p,
          isSelectedResourceChannel: m,
          showAutomodUserProfileChatBlocker: f && !C,
        });
      });
    },
    710216: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var a = n("37983"),
        s = n("884691"),
        l = n("921450"),
        i = n("66945"),
        r = n("247982"),
        o = n("396856"),
        u = n("549077"),
        d = n("809168"),
        c = n("321933"),
        f = s.memo(function (e) {
          let { channel: t, narrow: n } = e,
            s = (0, o.default)(t),
            f = (0, l.default)(),
            { canRenderNotice: h, recordNoticeRender: C } = (0, i.default)(t);
          return t.isArchivedLockedThread()
            ? (0, a.jsx)(d.ArchivedLockedThreadNotice, {
                channel: t,
                narrow: n,
              })
            : t.isLockedThread()
              ? (0, a.jsx)(d.LockedThreadNotice, { channel: t, narrow: n })
              : s && f.includes(c.ChatOverlays.OPT_IN_CHANNEL)
                ? (0, a.jsx)(u.default, { channel: t, narrow: n })
                : h
                  ? (0, a.jsx)(r.default, { channel: t, onChannelChange: C })
                  : null;
        });
    },
    665182: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ChatSidebarType: function () {
            return a;
          },
          default: function () {
            return m;
          },
        }),
        n("222007");
      var a,
        s,
        l = n("37983"),
        i = n("884691"),
        r = n("414456"),
        o = n.n(r),
        u = n("917351"),
        d = n("669491"),
        c = n("452804"),
        f = n("594203"),
        h = n("168973"),
        C = n("332374"),
        p = n("758534");
      ((s = a || (a = {}))[(s.PostSidebar = 0)] = "PostSidebar"),
        (s[(s.ThreadSidebar = 1)] = "ThreadSidebar"),
        (s[(s.CallChatSidebar = 2)] = "CallChatSidebar"),
        (s[(s.MessageRequestSidebar = 3)] = "MessageRequestSidebar"),
        (s[(s.HomeSidebar = 4)] = "HomeSidebar");
      function E(e) {
        let { resizableNode: t, onResize: n, onResizeEnd: a, maxWidth: s } = e,
          i = (0, f.default)({
            minDimension: C.MIN_CHAT_SIDEBAR_WIDTH,
            maxDimension: s,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: a,
            orientation: f.ResizeOrientation.HORIZONTAL_LEFT,
          });
        return (0, l.jsx)("div", { onMouseDown: i, className: p.resizeHandle });
      }
      function m(e) {
        let {
            sidebarType: t,
            maxWidth: n,
            onWidthChange: a,
            children: s,
            floatingLayer: r,
          } = e,
          f = i.useRef(null),
          m = (function (e) {
            switch (e) {
              case 0:
                return "postSidebarWidth";
              case 1:
                return "threadSidebarWidth";
              case 2:
                return "callChatSidebarWidth";
              case 3:
                return "messageRequestSidebarWidth";
              case 4:
                return "homeSidebarWidth";
            }
          })(t),
          [g, S] = i.useState(h.default[m]),
          _ = i.useCallback(
            e => {
              c.default.updatedUnsyncedSettings({ [m]: e });
            },
            [m]
          ),
          T = (0, C.shouldChannelChatFloat)({ maxWidth: n }),
          A = (0, u.clamp)(g, C.MIN_CHAT_SIDEBAR_WIDTH, n),
          M = T ? A : A + d.default.modules.chat.RESIZE_HANDLE_WIDTH;
        i.useEffect(() => {
          null == a || a(A, T);
        }, [A, a, T]);
        let I = (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)("div", {
              className: o(p.chatTarget, {
                [p.floating]: T,
                [p.notFloating]: !T,
              }),
              style: { width: M },
            }),
            !T &&
              (0, l.jsx)(E, {
                maxWidth: n,
                resizableNode: f,
                onResize: S,
                onResizeEnd: _,
              }),
            (0, l.jsx)("div", {
              ref: f,
              className: o(p.container, { [p.floating]: T }),
              style: { width: A },
              children: s,
            }),
          ],
        });
        if (T) {
          let e = null != r ? r : i.Fragment;
          return (0, l.jsx)(e, {
            children: (0, l.jsx)("div", {
              className: p.chatLayerWrapper,
              children: I,
            }),
          });
        }
        return (0, l.jsx)(l.Fragment, { children: I });
      }
    },
    361528: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var a = n("37983"),
        s = n("884691"),
        l = n("394846"),
        i = n("446674"),
        r = n("77078"),
        o = n("982108"),
        u = n("91551"),
        d = n("491605"),
        c = n("139388"),
        f = s.memo(function (e) {
          let {
              message: t,
              subtitle: n,
              countdown: f,
              buttonText: h,
              buttonColor: C,
              buttonSubmitting: p,
              onButtonClick: E,
              imageSrc: m,
              animationSrc: g,
              secondaryButtonText: S,
              onSecondaryButtonClick: _,
              children: T,
              useReducedMotion: A = !1,
            } = e,
            M = (0, i.useStateFromStores)(
              [o.default],
              () => o.default.getState().isMembersOpen
            );
          if (l.isMobile && M) return null;
          if (null == t)
            return (0, a.jsx)(a.Fragment, { children: s.Children.only(T) });
          let I = null;
          return (
            null != m
              ? (I = (0, a.jsx)("img", { alt: "", src: m, className: c.image }))
              : null != g &&
                (I = (0, a.jsx)(d.default, {
                  importData: g,
                  shouldAnimate: !A,
                  className: c.animation,
                })),
            (0, a.jsxs)("div", {
              className: c.wrapper,
              children: [
                (0, a.jsxs)("div", {
                  className: c.content,
                  children: [
                    I,
                    (0, a.jsxs)("div", {
                      className: c.text,
                      children: [
                        (0, a.jsx)(r.Heading, {
                          variant: "heading-md/semibold",
                          className: c.title,
                          children: t,
                        }),
                        null != n &&
                          (0, a.jsx)(r.Text, {
                            color: "text-muted",
                            variant: "text-xs/normal",
                            children: n,
                          }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: c.buttonContainer,
                  children: [
                    null != S &&
                      (0, a.jsx)(r.Button, {
                        className: c.button,
                        size: r.Button.Sizes.SMALL,
                        onClick: _,
                        look: r.Button.Looks.LINK,
                        color: r.Button.Colors.PRIMARY,
                        submitting: p,
                        children: S,
                      }),
                    null != h &&
                      (0, a.jsx)(r.Button, {
                        className: c.button,
                        size: r.Button.Sizes.SMALL,
                        onClick: E,
                        submitting: p,
                        color: null != C ? C : r.Button.Colors.PRIMARY,
                        children: h,
                      }),
                  ],
                }),
                null != f &&
                  (0, a.jsx)(u.default, {
                    className: c.countdown,
                    deadline: f,
                  }),
              ],
            })
          );
        });
    },
    348652: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("446674"),
        l = n("736964"),
        i = n("27618"),
        r = n("701909"),
        o = n("361528"),
        u = n("49111"),
        d = n("782340");
      function c(e) {
        let { channel: t, children: c } = e,
          f = (0, s.useStateFromStores)([i.default], () =>
            i.default.isBlocked(t.getRecipientId())
          ),
          h = t.isSystemDM(),
          C = f && !h && !t.isMultiUserDM(),
          p = {};
        return (
          h
            ? ((p.message = d.default.Messages.SYSTEM_DM_CHANNEL_DESCRIPTION),
              (p.subtitle =
                d.default.Messages.SYSTEM_DM_CHANNEL_DESCRIPTION_SUBTEXT),
              (p.buttonText = d.default.Messages.LEARN_MORE),
              (p.onButtonClick = () =>
                open(r.default.getArticleURL(u.HelpdeskArticles.SYSTEM_DMS))),
              (p.imageSrc = n("172522")))
            : C &&
              ((p.message = d.default.Messages.DM_VERIFICATION_TEXT_BLOCKED),
              (p.buttonText = d.default.Messages.UNBLOCK),
              (p.onButtonClick = () => {
                l.default.unblockUser(t.getRecipientId());
              })),
          (0, a.jsx)(o.default, { ...p, children: c })
        );
      }
    },
    306588: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return G;
          },
        }),
        n("222007");
      var a = n("37983"),
        s = n("884691"),
        l = n("627445"),
        i = n.n(l),
        r = n("446674"),
        o = n("77078"),
        u = n("437822"),
        d = n("429224"),
        c = n("851387"),
        f = n("206230"),
        h = n("774146"),
        C = n("549103"),
        p = n("591023"),
        E = n("233322"),
        m = n("567054"),
        g = n("982527"),
        S = n("388166"),
        _ = n("631360"),
        T = n("267567"),
        A = n("88187"),
        M = n("13066"),
        I = n("878720"),
        N = n("393414"),
        v = n("161778"),
        L = n("935692"),
        R = n("26989"),
        x = n("305961"),
        y = n("88093"),
        O = n("957255"),
        D = n("697218"),
        P = n("991170"),
        j = n("361528"),
        b = n("49111"),
        H = n("482931"),
        F = n("782340"),
        U = n("297310");
      class k extends s.PureComponent {
        componentDidMount() {
          let {
            isFollowable: e,
            channelFollowingUsersSeen: t,
            channel: n,
          } = this.props;
          e && null == t && d.default.fetchChannelFollowerStats(n.id);
        }
        componentDidUpdate(e) {
          let {
            shouldShowLurkerModeSuccessPopout: t,
            guild: n,
            showMemberVerificationModal: a,
          } = this.props;
          !a &&
            !e.shouldShowLurkerModeSuccessPopout &&
            t &&
            null != n &&
            this.setState({ shouldShowLurkerModeSuccessPopout: !0 });
        }
        render() {
          let {
              isFollowable: e,
              isLurking: t,
              notClaimed: l,
              notPhoneVerified: i,
              notEmailVerified: r,
              newMember: u,
              memberDeadline: d,
              newAccount: c,
              accountDeadline: f,
              theme: h,
              children: C,
              canSendMessages: p,
              channelFollowingUsersSeen: E,
              showLurkerModeUpsellPopout: g,
              showMemberVerificationModal: S,
              useReducedMotion: _,
              isStaff: T,
              guildJoinRequest: A,
            } = this.props,
            {
              shouldShowLurkerModeUpsellPopout: M,
              shouldShowLurkerModeSuccessPopout: I,
            } = this.state,
            N = { theme: h, useReducedMotion: _ };
          if (e && !p)
            (N.message = F.default.Messages.FOLLOW_NEWS_CHAT_INPUT_MESSAGE),
              null != E &&
                E >= 1e3 &&
                (N.subtitle =
                  F.default.Messages.FOLLOW_NEWS_CHAT_INPUT_SUBTITLE.format({
                    count: (1e3 * Math.floor(E / 1e3)).toLocaleString(),
                  })),
              (N.buttonText = F.default.Messages.FOLLOW),
              (N.onButtonClick = this.handleFollowAnnouncement),
              (N.imageSrc = n("757000")),
              t &&
                ((N.onSecondaryButtonClick = this.handleJoinServer),
                (N.secondaryButtonText =
                  F.default.Messages.LURKER_MODE_CHAT_INPUT_BUTTON));
          else if (l)
            (N.message =
              F.default.Messages.GUILD_VERIFICATION_TEXT_NOT_CLAIMED),
              (N.buttonText = F.default.Messages.CLAIM_ACCOUNT),
              (N.onButtonClick = S
                ? this.handleShowMemberVerification
                : this.handleClaimAccount),
              (N.imageSrc = n("524939"));
          else if (S)
            switch (null == A ? void 0 : A.applicationStatus) {
              case m.GuildJoinRequestApplicationStatuses.SUBMITTED:
                (N.message =
                  F.default.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_TITLE),
                  (N.subtitle =
                    F.default.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_SUBTITLE),
                  (N.buttonText =
                    F.default.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION),
                  (N.onButtonClick = this.handleCancelApplication),
                  (N.imageSrc = n("897176"));
                break;
              case m.GuildJoinRequestApplicationStatuses.REJECTED:
                (N.message =
                  F.default.Messages.MEMBER_VERIFICATION_REJECTED_TITLE),
                  (N.buttonText =
                    F.default.Messages.MEMBER_VERIFICATION_LEARN_MORE),
                  (N.onButtonClick = this.handleViewApplicationRejection),
                  (N.imageSrc = n("376180"));
                break;
              default:
                (N.message =
                  F.default.Messages.MEMBER_VERIFICATION_CHAT_BLOCKER_TEXT),
                  (N.buttonText =
                    F.default.Messages.MEMBER_VERIFICATION_NOTICE_CTA),
                  (N.buttonColor = o.ButtonColors.BRAND),
                  (N.onButtonClick = this.handleShowMemberVerification);
                N.animationSrc = () =>
                  n
                    .el("170206")
                    .then(n.t.bind(n, "170206", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
            }
          else
            i && !T
              ? ((N.message =
                  F.default.Messages.GUILD_VERIFICATION_TEXT_NOT_PHONE_VERIFIED),
                (N.buttonText = F.default.Messages.VERIFY_PHONE),
                (N.onButtonClick = this.handleVerifyPhone),
                (N.imageSrc = n("958347")))
              : r
                ? ((N.message =
                    F.default.Messages.GUILD_VERIFICATION_TEXT_NOT_VERIFIED),
                  (N.buttonText = F.default.Messages.RESEND_VERIFICATION_EMAIL),
                  (N.onButtonClick = this.handleResendVerification),
                  (N.imageSrc = n("524939")))
                : u
                  ? ((N.message =
                      F.default.Messages.GUILD_VERIFICATION_TEXT_MEMBER_AGE.format(
                        { min: b.VerificationCriteria.MEMBER_AGE }
                      )),
                    (N.countdown = d))
                  : c &&
                    ((N.message =
                      F.default.Messages.GUILD_VERIFICATION_TEXT_ACCOUNT_AGE.format(
                        { min: b.VerificationCriteria.ACCOUNT_AGE }
                      )),
                    (N.countdown = f));
          return (0, a.jsx)(o.Popout, {
            position: "top",
            align: "left",
            shouldShow: I,
            onRequestClose: () =>
              this.setState({ shouldShowLurkerModeSuccessPopout: !1 }),
            renderPopout: this.renderSuccessPopout,
            children: e =>
              (0, a.jsx)(j.default, {
                ...N,
                children: (0, a.jsxs)(s.Fragment, {
                  children: [
                    this.renderMemberVerificationSuccessModal(),
                    g
                      ? (0, a.jsx)(o.Popout, {
                          renderPopout: this.renderLurkerModeUpsellPopout,
                          shouldShow: M,
                          position: "top",
                          children: e =>
                            (0, a.jsx)(o.Clickable, {
                              ...e,
                              className: U.clickableChannelTextArea,
                              onClick: this.handleTextAreaClick,
                              children: C,
                            }),
                        })
                      : C,
                  ],
                }),
              }),
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = {
              submitting: !1,
              shouldShowLurkerModeUpsellPopout: !1,
              shouldShowLurkerModeSuccessPopout: !1,
            }),
            (this.renderSuccessPopout = e => {
              let { closePopout: t } = e,
                { guild: n } = this.props;
              return (
                i(null != n, "This guildID cannot be null"),
                (0, a.jsx)(A.default, { onClose: t, guild: n })
              );
            }),
            (this.handleCancelApplication = () => {
              let { guild: e } = this.props;
              null != e &&
                (0, o.openModal)(t =>
                  (0, a.jsx)(o.ConfirmModal, {
                    header: F.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
                    confirmText: F.default.Messages.CONFIRM,
                    cancelText: F.default.Messages.CANCEL,
                    onConfirm: () => C.default.removeGuildJoinRequest(e.id),
                    confirmButtonColor: o.Button.Colors.BRAND,
                    ...t,
                    children: (0, a.jsx)(o.Text, {
                      variant: "text-md/normal",
                      children:
                        F.default.Messages
                          .MEMBER_VERIFICATION_CANCEL_APPLICATION_SUBTITLE,
                    }),
                  })
                );
            }),
            (this.handleViewApplicationRejection = () => {
              let { guild: e } = this.props;
              null != e &&
                (0, o.openModalLazy)(async () => {
                  let { default: t } = await n
                    .el("388435")
                    .then(n.bind(n, "388435"));
                  return n => (0, a.jsx)(t, { guildId: e.id, ...n });
                });
            }),
            (this.handleShowMemberVerification = () => {
              let { guild: e } = this.props;
              null != e && (0, E.openMemberVerificationModal)(e.id);
            }),
            (this.handleClaimAccount = () => {
              h.openClaimAccountModal();
            }),
            (this.handleVerifyPhone = () => {
              (0, o.openModalLazy)(
                async () => {
                  let { default: e } = await n
                    .el("601745")
                    .then(n.bind(n, "601745"));
                  return t =>
                    (0, a.jsx)(e, {
                      reason: I.ChangePhoneReason.GUILD_PHONE_REQUIRED,
                      ...t,
                    });
                },
                { modalKey: H.PHONE_VERIFICATION_MODAL_KEY }
              );
            }),
            (this.handleResendVerification = () => {
              var e;
              u.default.verifyResend();
              let t =
                null === (e = D.default.getCurrentUser()) || void 0 === e
                  ? void 0
                  : e.email;
              null != t &&
                (0, o.openModal)(e =>
                  (0, a.jsx)(o.ConfirmModal, {
                    ...e,
                    header: F.default.Messages.VERIFICATION_EMAIL_TITLE,
                    confirmText: F.default.Messages.OKAY,
                    confirmButtonColor: o.Button.Colors.BRAND,
                    children: (0, a.jsx)(o.Text, {
                      variant: "text-md/normal",
                      children:
                        F.default.Messages.VERIFICATION_EMAIL_BODY.format({
                          email: t,
                        }),
                    }),
                  })
                );
            }),
            (this.handleTextAreaClick = () => {
              let { showLurkerModeUpsellPopout: e } = this.props;
              this.setState({ shouldShowLurkerModeUpsellPopout: e });
            }),
            (this.handleJoinServer = async () => {
              this.setState({ submitting: !0 });
              let e = this.props.channel.getGuildId();
              try {
                await c.default.joinGuild(e, {
                  source: b.JoinGuildSources.CHAT_INPUT_BLOCKER,
                });
              } catch {
                this.setState({ submitting: !1 });
              }
            }),
            (this.handleGoBack = () => {
              this.setState({ submitting: !0 });
              let e = (0, N.getHistory)();
              e.goBack();
            }),
            (this.handleFollowAnnouncement = () => {
              let { channel: e } = this.props;
              (0, o.openModalLazy)(async () => {
                let { default: t } = await n
                  .el("996177")
                  .then(n.bind(n, "996177"));
                return n => (0, a.jsx)(t, { channel: e, ...n });
              });
            }),
            (this.closeLurkerModeUpsellPopout = () => {
              this.setState({ shouldShowLurkerModeUpsellPopout: !1 });
            }),
            (this.renderLurkerModeUpsellPopout = () => {
              let { guild: e } = this.props;
              return (
                i(
                  null != e,
                  "GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined"
                ),
                (0, a.jsx)(M.default, {
                  type: M.LurkerModeUpsellPopoutTypes.CHAT,
                  guild: e,
                  closePopout: this.closeLurkerModeUpsellPopout,
                })
              );
            }),
            (this.renderMemberVerificationSuccessModal = () => {
              let { guild: e, guildJoinRequest: t } = this.props,
                n =
                  (null == t ? void 0 : t.applicationStatus) ===
                  m.GuildJoinRequestApplicationStatuses.APPROVED;
              if (null == e || null == t || !n || (0, p.isApprovedAndAcked)(t))
                return null;
              let s = () => C.default.ackUserGuildJoinRequest(e.id, t.id);
              return (0, a.jsx)(o.Modal, {
                renderModal: t =>
                  (0, a.jsx)(S.default, {
                    ...t,
                    onAccept: s,
                    guildName: e.name,
                  }),
                onCloseRequest: s,
              });
            });
        }
      }
      function G(e) {
        var t, n;
        let { channel: s, children: l } = e,
          i = s.getGuildId(),
          o = (0, r.useStateFromStores)([x.default], () =>
            x.default.getGuild(i)
          ),
          u = (0, r.useStateFromStores)([y.default], () =>
            y.default.getCheck(i)
          ),
          d =
            s.type === b.ChannelTypes.GUILD_ANNOUNCEMENT &&
            null != o &&
            o.hasFeature(b.GuildFeatures.NEWS),
          c = (0, r.useStateFromStores)([L.default], () =>
            d ? L.default.getFollowerStatsForChannel(s.id) : null
          ),
          h = (0, r.useStateFromStores)([T.default], () =>
            T.default.isLurking(i)
          ),
          C = (0, r.useStateFromStores)([D.default], () =>
            D.default.getCurrentUser()
          ),
          p =
            null !== (t = null == C ? void 0 : C.isStaff()) &&
            void 0 !== t &&
            t,
          E = (0, r.useStateFromStores)([R.default], () => {
            var e, t;
            return (
              null != C &&
              null !==
                (t =
                  null === (e = R.default.getMember(i, C.id)) || void 0 === e
                    ? void 0
                    : e.isPending) &&
              void 0 !== t &&
              t
            );
          }),
          S = !!(null == o ? void 0 : o.hasVerificationGate()),
          A = (E || u.notClaimed) && S,
          M = (0, r.useStateFromStores)([_.default], () =>
            _.default.shouldShowPopout(i)
          ),
          I = (0, r.useStateFromStores)([O.default], () =>
            O.default.can(b.Permissions.SEND_MESSAGES, s)
          ),
          N = (0, r.useStateFromStores)([g.default], () =>
            g.default.getRequest(i)
          ),
          j = {
            ...u,
            guild: o,
            isLurking: h,
            isFollowable: d,
            shouldShowLurkerModeSuccessPopout: M,
            showLurkerModeUpsellPopout:
              h &&
              null != o &&
              P.default.canEveryoneRole(b.Permissions.SEND_MESSAGES, s),
            theme: v.default.theme,
            canSendMessages: I,
            channelFollowingUsersSeen: null != c ? c.usersSeenEver : null,
            hasVerificationGate: S,
            showMemberVerificationModal: A,
            guildJoinRequestStatus:
              null !== (n = null == N ? void 0 : N.applicationStatus) &&
              void 0 !== n
                ? n
                : m.GuildJoinRequestApplicationStatuses.STARTED,
            guildJoinRequest: N,
            useReducedMotion: f.default.useReducedMotion,
            isStaff: p,
          };
        return (0, a.jsx)(k, { ...j, channel: s, children: l });
      }
    },
    619335: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return y;
          },
        });
      var a = n("274870"),
        s = n("116320"),
        l = n("617559"),
        i = n("213523"),
        r = n("593195"),
        o = n("361777"),
        u = n("497757"),
        d = n("774223"),
        c = n("991497"),
        f = n("393621"),
        h = n("905999"),
        C = n("660074"),
        p = n("990745"),
        E = n("190986"),
        m = n("721618"),
        g = n("733160"),
        S = n("990864"),
        _ = n("274652"),
        T = n("922744"),
        A = n("155207"),
        M = n("745183"),
        I = n("368121"),
        N = n("944633"),
        v = n("228427"),
        L = n("959097"),
        R = n("656038"),
        x = n("49111");
      function y(e, t) {
        switch (e.type) {
          case x.ChannelTypes.DM:
            return s.default;
          case x.ChannelTypes.GROUP_DM:
            let n = (0, a.getIsBroadcastingGDM)(e.id);
            return n ? d.default : A.default;
          case x.ChannelTypes.GUILD_ANNOUNCEMENT:
            if (e.isNSFW()) return _.default;
            if ((0, R.default)(e)) return S.default;
            else return g.default;
          case x.ChannelTypes.GUILD_TEXT:
            if (e.id === (null == t ? void 0 : t.rulesChannelId))
              return i.default;
            if (e.isNSFW()) return u.default;
            else if ((0, R.default)(e)) return o.default;
            else return r.default;
          case x.ChannelTypes.GUILD_FORUM:
            let y = e.isMediaChannel();
            if (e.isNSFW()) return y ? m.default : h.default;
            if ((0, R.default)(e)) return y ? E.default : f.default;
            else return y ? p.default : c.default;
          case x.ChannelTypes.GUILD_MEDIA:
            if (e.isNSFW()) return m.default;
            if ((0, R.default)(e)) return E.default;
            else return p.default;
          case x.ChannelTypes.GUILD_STAGE_VOICE:
            return v.default;
          case x.ChannelTypes.GUILD_VOICE:
            if ((0, R.default)(e)) return N.default;
            return I.default;
          case x.ChannelTypes.ANNOUNCEMENT_THREAD:
          case x.ChannelTypes.PUBLIC_THREAD:
            if (e.isNSFW()) return T.default;
            if (e.isForumPost()) return C.default;
            else return L.default;
          case x.ChannelTypes.PRIVATE_THREAD:
            if (e.isNSFW()) return T.default;
            return M.default;
          case x.ChannelTypes.GUILD_DIRECTORY:
            return l.default;
          default:
            return null;
        }
      }
    },
    159492: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        });
      var a = n("37983"),
        s = n("884691"),
        l = n("414456"),
        i = n.n(l),
        r = n("446674"),
        o = n("77078"),
        u = n("292655"),
        d = n("82372"),
        c = n("426969"),
        f = n("13030"),
        h = n("731859"),
        C = s.memo(function () {
          let e = (0, r.useStateFromStores)([c.default], () =>
              c.default.shouldShowPopup()
            ),
            t = s.useCallback(() => {
              e ? d.dismissAppLauncherPopup() : d.showAppLauncherPopup();
            }, [e]);
          return (0, a.jsx)(o.Tooltip, {
            text: "Use an App",
            children: e =>
              (0, a.jsx)("div", {
                ...e,
                className: i(f.CHAT_INPUT_BUTTON_CLASSNAME, h.buttonContainer),
                children: (0, a.jsx)(u.default, {
                  onClick: t,
                  tabIndex: 0,
                  focusProps: {
                    offset: { top: 4, bottom: 4, left: -4, right: -4 },
                  },
                }),
              }),
          });
        });
    },
    998415: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n("37983"),
        s = n("884691"),
        l = n("414456"),
        i = n.n(l),
        r = n("77078"),
        o = n("355263"),
        u = n("422920"),
        d = s.memo(function (e) {
          var t;
          let { className: n, channel: s, section: l } = e,
            d = null != l ? (0, o.getIconComponent)(l) : null;
          return (0, a.jsx)("div", {
            className: i(n, u.wrapper),
            children: (0, a.jsx)("div", {
              className: u.icon,
              children:
                null != d
                  ? (0, a.jsx)(r.Tooltip, {
                      text:
                        null !== (t = null == l ? void 0 : l.name) &&
                        void 0 !== t
                          ? t
                          : "",
                      position: "top",
                      children: e =>
                        (0, a.jsx)(d, {
                          ...e,
                          channel: s,
                          section: l,
                          width: 24,
                          height: 24,
                        }),
                    })
                  : null,
            }),
          });
        });
    },
    228800: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return G;
          },
        }),
        n("222007"),
        n("70102");
      var a = n("37983"),
        s = n("884691"),
        l = n("414456"),
        i = n.n(l),
        r = n("446674"),
        o = n("31745"),
        u = n("77078"),
        d = n("371642"),
        c = n("84339"),
        f = n("244201"),
        h = n("427953"),
        C = n("871388"),
        p = n("389153"),
        E = n("56947"),
        m = n("386045"),
        g = n("734217"),
        S = n("139321"),
        _ = n("562228"),
        T = n("140596"),
        A = n("300322"),
        M = n("845579"),
        I = n("982108"),
        N = n("778588"),
        v = n("957255"),
        L = n("101125"),
        R = n("351825"),
        x = n("738602"),
        y = n("430025"),
        O = n("659500"),
        D = n("773336"),
        P = n("412861"),
        j = n("79254"),
        b = n("64096"),
        H = n("49111"),
        F = n("80028"),
        U = n("782340"),
        k = n("465597"),
        G = s.memo(function (e) {
          var t, l, G;
          let B,
            {
              className: w,
              channel: V,
              draftType: W,
              editorTextContent: Z,
              setValue: z,
              canOnlyUseTextCommands: K,
            } = e,
            Y = (0, f.useAppContext)(),
            q = s.useRef(null),
            X = (0, r.useStateFromStores)([L.default], () =>
              L.default.getActivities()
            ),
            J = (0, r.useStateFromStores)(
              [m.default],
              () => m.default.getSettings().clipsEnabled
            ),
            Q = (0, r.useStateFromStores)([m.default], () =>
              m.default.getLastClipsSession()
            ),
            $ = (0, r.useStateFromStoresArray)([m.default], () =>
              m.default.getNewClipIds()
            ),
            ee = (0, r.useStateFromStores)(
              [I.default],
              () => null == I.default.getCurrentSidebarChannelId(V.id)
            ),
            { showClipsHeaderEntrypoint: et } = E.ClipsExperiment.useExperiment(
              { location: "ChannelAttachButton" },
              { autoTrackExposure: !1 }
            ),
            en = (0, r.useStateFromStores)([S.HotspotStore], () =>
              S.HotspotStore.hasHotspot(
                S.HotspotLocations.CLIPS_CHANNEL_ATTACH_REMINDER
              )
            ),
            ea = (0, u.useModalsStore)(e =>
              (0, u.hasModalOpenSelector)(e, F.CLIPS_GALLERY_MODAL_KEY)
            ),
            es = (0, r.useStateFromStores)([N.default], () =>
              N.default.hasLayers()
            ),
            el = (0, r.useStateFromStores)([m.default], () =>
              m.default.hasClips()
            ),
            [ei, er] = s.useState(null),
            eo = (0, E.useEnableClips)() && (J || el),
            eu = V.isPrivate(),
            ed = (0, r.useStateFromStores)(
              [v.default],
              () =>
                eu ||
                (v.default.can(H.Permissions.ATTACH_FILES, V) &&
                  v.default.can(H.Permissions.SEND_MESSAGES, V))
            ),
            ec = (0, c.default)(Q);
          (null == ec ? void 0 : ec.newClipIds.length) !==
            (null == Q ? void 0 : Q.newClipIds.length) &&
            (null !== (t = null == Q ? void 0 : Q.newClipIds.length) &&
            void 0 !== t
              ? t
              : 0) > 0 &&
            null == ei &&
            en &&
            ee &&
            !ea &&
            !et &&
            !es &&
            er("recentClips");
          let ef = (e, t, n) => {
            null != t && "ETOOLARGE" === t.code
              ? (0, P.showUploadFileSizeExceededError)(V, [])
              : (0, P.promptToUpload)(e, V, W, {
                  requireConfirm: !0,
                  showLargeMessageDialog: n,
                }),
              O.ComponentDispatch.dispatchToLastSubscribed(
                H.ComponentActions.TEXTAREA_FOCUS
              );
          };
          function eh() {
            (0, u.openModalLazy)(
              async () => {
                let { default: e } = await n
                  .el("167573")
                  .then(n.bind(n, "167573"));
                return t => (0, a.jsx)(e, { ...t, channelId: V.id });
              },
              { modalKey: F.CLIPS_GALLERY_MODAL_KEY }
            ),
              er(null);
          }
          s.useEffect(() => {
            let e = () => {
              var e;
              return null === (e = q.current) || void 0 === e
                ? void 0
                : e.activateUploadDialogue();
            };
            return (
              O.ComponentDispatch.subscribe(H.ComponentActions.UPLOAD_FILE, e),
              () => {
                O.ComponentDispatch.unsubscribe(
                  H.ComponentActions.UPLOAD_FILE,
                  e
                );
              }
            );
          });
          let eC = (0, A.useCanStartPublicThread)(V),
            ep = (0, A.useCanStartPrivateThread)(V),
            eE =
              !M.UseLegacyChatInput.useSetting() &&
              !(0, D.isAndroidWeb)() &&
              null != window.ResizeObserver,
            em = (0, r.useStateFromStores)([v.default, T.default], () =>
              (0, p.canUseApplicationCommands)(v.default, T.default, K, V)
            ),
            eg = (0, _.useCanPostPollsInChannel)(null != V ? V : void 0),
            eS = (0, u.useRedesignIconContext)().enabled,
            e_ = (0, h.useActivitiesInTextButtonVisibility)(
              V.id,
              "ChannelAttachButton"
            ),
            eT =
              null !== (l = null == $ ? void 0 : $.length) && void 0 !== l
                ? l
                : 0,
            eA = (0, b.default)({
              canAttachFiles: ed,
              canStartThreads: eC || ep,
              useSlate: eE,
              hasClips: eo,
              canUseApplicationCommands: em,
              channel: V,
              activities: X,
              newClipsCount: eT,
              canPostPolls: eg,
              canLaunchActivities:
                null !== (G = null == e_ ? void 0 : e_.showInOmniButtonMenu) &&
                void 0 !== G &&
                G,
              appContext: Y,
            });
          if (0 === eA.length) return null;
          let eM = X.some(e => (0, C.default)(e, H.ActivityFlags.SYNC)),
            eI =
              X.some(
                e =>
                  (0, C.default)(e, H.ActivityFlags.JOIN) &&
                  !(0, C.default)(e, H.ActivityFlags.EMBEDDED)
              ) || eM;
          B = eS
            ? (0, a.jsx)(o.CirclePlusIcon, {
                className: k.attachButtonIcon,
                colorClass: k.attachButtonPlus,
              })
            : eI
              ? (0, a.jsx)(y.default, {
                  className: k.attachButtonIcon,
                  foreground: k.attachButtonPlay,
                  background: k.attachButtonPlus,
                  width: 24,
                  height: 24,
                })
              : eT > 0
                ? (0, a.jsx)(x.default, {
                    className: k.attachButtonIcon,
                    foreground: k.attachButtonClip,
                    background: k.attachButtonPlus,
                    width: 24,
                    height: 24,
                  })
                : (0, a.jsx)(R.default, {
                    className: k.attachButtonIcon,
                    foreground: k.attachButtonPlus,
                    width: 24,
                    height: 24,
                  });
          let eN = (0, a.jsx)(u.Popout, {
            shouldShow: null != ei,
            animation: u.Popout.Animation.NONE,
            align: "recentClips" === ei ? "center" : "left",
            position: "top",
            positionKey: null != ei ? ei : "null",
            onRequestOpen: () => er("attachMenu"),
            onRequestClose: () => {
              !(0, u.hasAnyModalOpen)() && er(null);
            },
            renderPopout: e => {
              switch (ei) {
                case "recentClips":
                  return (0, a.jsx)(g.default, {
                    ...e,
                    onOpenClips: eh,
                    lastClipsSession: Q,
                  });
                case "attachMenu":
                  return (0, a.jsx)(j.default, {
                    ...e,
                    onClose: () => er(null),
                    options: eA,
                    channel: V,
                    onFileUpload: () => {
                      var e;
                      return null === (e = q.current) || void 0 === e
                        ? void 0
                        : e.activateUploadDialogue();
                    },
                    draftType: W,
                    editorTextContent: Z,
                    setValue: z,
                    openClips: eh,
                  });
                default:
                  throw Error("Invalid popout type provided");
              }
            },
            children: e =>
              (0, a.jsx)(u.Button, {
                look: u.Button.Looks.BLANK,
                size: u.Button.Sizes.NONE,
                className: i(k.attachButton, w),
                innerClassName: k.attachButtonInner,
                "aria-label": U.default.Messages.CHAT_ATTACH_UPLOAD_OR_INVITE,
                onDoubleClick: ed
                  ? () => {
                      var e;
                      return null === (e = q.current) || void 0 === e
                        ? void 0
                        : e.activateUploadDialogue();
                    }
                  : void 0,
                ...e,
                children: B,
              }),
          });
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("div", {
                className: k.uploadInput,
                children: (0, a.jsx)(d.default, {
                  ref: q,
                  onChange: e => {
                    ef(e.currentTarget.files, e.currentTarget.err),
                      (e.currentTarget.value = "");
                  },
                  multiple: V.rateLimitPerUser <= 0,
                  tabIndex: -1,
                  "aria-hidden": !0,
                }),
              }),
              (0, a.jsx)("div", { className: k.attachWrapper, children: eN }),
            ],
          });
        });
    },
    79254: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return L;
          },
        });
      var a = n("37983"),
        s = n("884691"),
        l = n("171210"),
        i = n("77078"),
        r = n("811475"),
        o = n("550766"),
        u = n("478272"),
        d = n("685665"),
        c = n("716849"),
        f = n("552917"),
        h = n("967241"),
        C = n("956089"),
        p = n("599110"),
        E = n("659500"),
        m = n("254490"),
        g = n("412861"),
        S = n("149022"),
        _ = n("64096"),
        T = n("49111"),
        A = n("491096"),
        M = n("782340"),
        I = n("245150");
      function N(e, t, s, l) {
        (0, i.openModalLazy)(
          async () => {
            let { default: i } = await n.el("811475").then(n.bind(n, "811475"));
            return n =>
              (0, a.jsx)(i, {
                ...n,
                activity: e,
                channel: t,
                activityActionType: s,
                analyticsLocations: l,
              });
          },
          { modalKey: r.activityInviteKey }
        );
      }
      let v = /(.*)```(\w+)\n(.*)```(.*)/s;
      function L(e) {
        let {
          channel: t,
          options: r,
          onFileUpload: L,
          onClose: R,
          onSelect: x,
          draftType: y,
          editorTextContent: O,
          setValue: D,
          openClips: P,
        } = e;
        (0, c.useMaybeFetchPremiumLikelihood)(f.default);
        let { analyticsLocations: j } = (0, d.default)();
        s.useEffect(() => {
          p.default.track(T.AnalyticEvents.OPEN_POPOUT, {
            type: "Send Attachment",
            channel_id: t.id,
            guild_id: t.guild_id,
          });
        }, [t.guild_id, t.id]);
        function b() {
          (0, h.openThreadSidebarForCreating)(t, void 0, "Plus Button");
        }
        function H() {
          p.default.track(
            T.AnalyticEvents.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED
          ),
            D("/", (0, S.toRichValue)("/"));
        }
        function F() {
          P();
        }
        function U() {
          (0, i.openModalLazy)(
            async () => {
              let { default: e } = await n
                .el("487757")
                .then(n.bind(n, "487757"));
              return n => (0, a.jsx)(e, { ...n, channel: t });
            },
            { modalKey: A.POLL_CREATION_MODAL_KEY }
          );
        }
        function k() {
          p.default.track(
            T.AnalyticEvents.CHANNEL_ATTACH_MENU_START_ACTIVITY_CLICKED,
            { channel_type: t.type, channel_id: t.id, guild_id: t.guild_id }
          ),
            (0, u.default)({
              channel: t,
              guildId: t.guild_id,
              locationObject: {
                page: t.isPrivate()
                  ? T.AnalyticsPages.DM_CHANNEL
                  : T.AnalyticsPages.GUILD_CHANNEL,
                section: T.AnalyticsSections.CHANNEL_TEXT_AREA,
                object: T.AnalyticsObjects.CONTEXT_MENU_ITEM,
                objectType: T.AnalyticsObjectTypes.ACTIVITY,
              },
              openInPopout: !1,
              enableSelectedTextChannelInvite: !0,
              analyticsLocations: j,
            }),
            (0, o.fetchShelf)({ guildId: t.guild_id });
        }
        function G() {
          let e = O,
            n = "txt",
            a = "",
            s = O.match(v);
          null != s && ((a = s[1]), (n = s[2]), (e = s[3]), (a += s[4])),
            (0, g.promptToUpload)(
              [
                (0, m.makeFile)(
                  new Blob([e], { type: "text/plain" }),
                  "message.".concat(n)
                ),
              ],
              t,
              y
            ),
            E.ComponentDispatch.dispatchToLastSubscribed(
              T.ComponentActions.CLEAR_TEXT
            ),
            "" !== a &&
              E.ComponentDispatch.dispatchToLastSubscribed(
                T.ComponentActions.INSERT_TEXT,
                { plainText: a }
              );
        }
        return (0, a.jsx)(i.Menu, {
          onSelect: x,
          navId: "channel-attach",
          onClose: R,
          "aria-label": M.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
          className: I.menu,
          children: r.map(function (e) {
            var n;
            let s = (0, a.jsxs)("div", {
              className: I.optionLabel,
              children: [
                (0, a.jsx)(e.icon, { className: I.optionIcon }),
                (0, a.jsx)("div", {
                  className: I.optionName,
                  children: e.display,
                }),
                null != e.badgeVal &&
                  e.badgeVal > 0 &&
                  (0, a.jsx)(C.NumberBadge, {
                    className: I.badge,
                    color:
                      null !== (n = e.badgeColor) && void 0 !== n
                        ? n
                        : l.default.STATUS_DANGER,
                    count: e.badgeVal,
                  }),
              ],
            });
            switch (e.type) {
              case _.AttachmentTypes.UPLOAD_A_FILE:
                return (0, a.jsx)(
                  i.MenuItem,
                  { id: "upload-file", label: s, action: L },
                  "upload-file"
                );
              case _.AttachmentTypes.UPLOAD_TEXT_AS_FILE:
                if ("" === O) return null;
                return (0, a.jsx)(
                  i.MenuItem,
                  { id: "upload-text-as-file", label: s, action: G },
                  "upload-text-as-file"
                );
              case _.AttachmentTypes.CLIPS:
                return (0, a.jsx)(
                  i.MenuItem,
                  { id: "clips", label: s, action: F },
                  "clips"
                );
              case _.AttachmentTypes.POLL:
                return (0, a.jsx)(
                  i.MenuItem,
                  { id: "poll", label: s, action: U },
                  "poll"
                );
              case _.AttachmentTypes.INVITE_TO_PLAY_GAME:
                return (0, a.jsx)(
                  i.MenuItem,
                  {
                    id: "play",
                    label: s,
                    action: () => {
                      var n;
                      return (
                        (n = e.activity),
                        void (p.default.track(T.AnalyticEvents.OPEN_MODAL, {
                          type: "Send Join Invite",
                          application_id: n.application_id,
                          location: T.AnalyticsSections.CHANNEL_TEXT_AREA,
                        }),
                        N(n, t, T.ActivityActionTypes.JOIN, j))
                      );
                    },
                  },
                  "play"
                );
              case _.AttachmentTypes.INVITE_TO_LISTEN:
                return (0, a.jsx)(
                  i.MenuItem,
                  {
                    id: "listen",
                    label: s,
                    action: () => {
                      var n;
                      return (
                        (n = e.activity),
                        void (p.default.track(T.AnalyticEvents.OPEN_MODAL, {
                          type: "Send Listen Invite",
                          location: T.AnalyticsSections.CHANNEL_TEXT_AREA,
                        }),
                        N(n, t, T.ActivityActionTypes.LISTEN, j))
                      );
                    },
                  },
                  "listen"
                );
              case _.AttachmentTypes.INVITE_TO_WATCH:
                return (0, a.jsx)(
                  i.MenuItem,
                  {
                    id: "watch",
                    label: s,
                    action: () => {
                      var n;
                      return (
                        (n = e.activity),
                        void (p.default.track(T.AnalyticEvents.OPEN_MODAL, {
                          type: "Send Watch Invite",
                          location: T.AnalyticsSections.CHANNEL_TEXT_AREA,
                        }),
                        N(n, t, T.ActivityActionTypes.WATCH, j))
                      );
                    },
                  },
                  "watch"
                );
              case _.AttachmentTypes.CREATE_THREAD:
                return (0, a.jsx)(
                  i.MenuItem,
                  { id: "THREAD", label: s, action: b },
                  "THREAD"
                );
              case _.AttachmentTypes.SLASH_COMMAND:
                return (0, a.jsx)(
                  i.MenuItem,
                  { id: "SLASH_COMMAND", label: s, action: H },
                  "SLASH_COMMAND"
                );
              case _.AttachmentTypes.ACTIVITY:
                return (0, a.jsx)(
                  i.MenuItem,
                  { id: "activity", label: s, action: k },
                  "activity"
                );
              default:
                return null;
            }
          }),
        });
      }
    },
    64096: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          AttachmentTypes: function () {
            return a;
          },
          default: function () {
            return A;
          },
        }),
        n("424973");
      var a,
        s,
        l = n("871388"),
        i = n("679653"),
        r = n("20606"),
        o = n("27618"),
        u = n("697218"),
        d = n("64791"),
        c = n("522049"),
        f = n("462579"),
        h = n("407535"),
        C = n("824326"),
        p = n("616225"),
        E = n("777987"),
        m = n("82636"),
        g = n("12724"),
        S = n("654276"),
        _ = n("49111"),
        T = n("782340");
      function A(e) {
        let {
            canAttachFiles: t,
            canStartThreads: n,
            useSlate: a,
            canUseApplicationCommands: s,
            hasClips: A,
            channel: M,
            activities: I,
            newClipsCount: N,
            canPostPolls: v,
            canLaunchActivities: L,
            appContext: R,
          } = e,
          x = [];
        return (
          t &&
            (x.push({
              type: "UPLOAD_A_FILE",
              icon: h.default,
              display: T.default.Messages.CHAT_ATTACH_UPLOAD_A_FILE,
            }),
            x.push({
              type: "UPLOAD_TEXT_AS_FILE",
              icon: g.default,
              display: T.default.Messages.CHAT_ATTACH_UPLOAD_TEXT_AS_FILE,
            })),
          A &&
            t &&
            R !== _.AppContext.POPOUT &&
            x.push({
              type: "CLIPS",
              icon: c.default,
              display: T.default.Messages.CLIPS_SHARE_A_CLIP,
              badgeVal: N,
              badgeColor: r.default.BG_BRAND,
            }),
          n &&
            x.push({
              type: "CREATE_THREAD",
              icon: S.default,
              display: T.default.Messages.CREATE_THREAD,
            }),
          v &&
            x.push({
              type: "POLL",
              icon: E.default,
              display: T.default.Messages.CREATE_POLL,
            }),
          a &&
            s &&
            x.push({
              type: "SLASH_COMMAND",
              icon: d.default,
              display: T.default.Messages.CHAT_ATTACH_USE_SLASH_COMMAND,
            }),
          L &&
            x.push({
              type: "ACTIVITY",
              icon: m.default,
              display:
                T.default.Messages.EMBEDDED_ACTIVITIES_START_ACTIVITY_LABEL,
            }),
          I.forEach(e => {
            !(0, l.default)(e, _.ActivityFlags.EMBEDDED) &&
              (e.type === _.ActivityTypes.PLAYING &&
                (0, l.default)(e, _.ActivityFlags.JOIN) &&
                x.push({
                  type: "INVITE_TO_GAME",
                  icon: C.default,
                  display:
                    T.default.Messages.CHAT_ATTACH_INVITE_TO_PLAY_GAME.format({
                      channel: (0, i.computeChannelName)(
                        M,
                        u.default,
                        o.default,
                        !0
                      ),
                      game: null != e ? e.name : "",
                    }),
                  activity: e,
                }),
              e.type === _.ActivityTypes.LISTENING &&
                (0, l.default)(e, _.ActivityFlags.SYNC) &&
                x.push({
                  type: "INVITE_TO_LISTEN",
                  icon: p.default,
                  display:
                    T.default.Messages.CHAT_ATTACH_INVITE_TO_LISTEN.format({
                      channel: (0, i.computeChannelName)(
                        M,
                        u.default,
                        o.default,
                        !0
                      ),
                      name: null != e ? e.name : "",
                    }),
                  activity: e,
                }),
              e.type === _.ActivityTypes.WATCHING &&
                (0, l.default)(e, _.ActivityFlags.SYNC) &&
                x.push({
                  type: "INVITE_TO_WATCH",
                  icon: f.default,
                  display:
                    T.default.Messages.CHAT_ATTACH_INVITE_TO_WATCH.format({
                      channel: (0, i.computeChannelName)(
                        M,
                        u.default,
                        o.default,
                        !0
                      ),
                      name: null != e ? e.name : "",
                    }),
                  activity: e,
                }));
          }),
          x
        );
      }
      ((s = a || (a = {})).UPLOAD_A_FILE = "UPLOAD_A_FILE"),
        (s.UPLOAD_TEXT_AS_FILE = "UPLOAD_TEXT_AS_FILE"),
        (s.INVITE_TO_PLAY_GAME = "INVITE_TO_GAME"),
        (s.INVITE_TO_LISTEN = "INVITE_TO_LISTEN"),
        (s.INVITE_TO_WATCH = "INVITE_TO_WATCH"),
        (s.CREATE_THREAD = "CREATE_THREAD"),
        (s.SLASH_COMMAND = "SLASH_COMMAND"),
        (s.CLIPS = "CLIPS"),
        (s.POLL = "POLL"),
        (s.ACTIVITY = "ACTIVITY");
    },
    734217: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var a = n("37983"),
        s = n("884691"),
        l = n("759843"),
        i = n("77078"),
        r = n("428958"),
        o = n("139321"),
        u = n("803725"),
        d = n("714319"),
        c = n("782340"),
        f = n("48231");
      function h(e) {
        let { onOpenClips: t, lastClipsSession: n, closePopout: h } = e;
        return (s.useEffect(
          () => () => {
            (0, u.clearClipsSession)();
          },
          []
        ),
        (0, r.default)({
          type: l.ImpressionTypes.VIEW,
          name: l.ImpressionNames.HOTSPOT,
          properties: {
            hotspot_location: o.HotspotLocations.CLIPS_CHANNEL_ATTACH_REMINDER,
          },
        }),
        null == n)
          ? (0, a.jsx)(a.Fragment, {})
          : (0, a.jsxs)("div", {
              className: f.recentClipsPopout,
              children: [
                (0, a.jsx)("div", {
                  className: f.thumbnailStackContainer,
                  children: (0, a.jsx)(d.default, {}),
                }),
                (0, a.jsx)(i.Heading, {
                  className: f.header,
                  color: "header-primary",
                  variant: "heading-md/extrabold",
                  children: c.default.Messages.CLIPS_YOU_HAVE_NEW_CLIPS.format({
                    count: n.newClipIds.length,
                  }),
                }),
                (0, a.jsx)(i.Text, {
                  color: "text-normal",
                  className: f.content,
                  variant: "text-sm/medium",
                  children:
                    c.default.Messages.CLIPS_SESSION_ENDED_TOOLTIP_BODY.format({
                      applicationName: n.applicationName,
                    }),
                }),
                (0, a.jsxs)("div", {
                  className: f.buttonsContainer,
                  children: [
                    (0, a.jsx)(i.Button, {
                      color: i.Button.Colors.PRIMARY,
                      look: i.Button.Looks.LINK,
                      onClick: function () {
                        (0, o.hideHotspot)(
                          o.HotspotLocations.CLIPS_CHANNEL_ATTACH_REMINDER
                        ),
                          h();
                      },
                      children:
                        c.default.Messages
                          .CLIPS_SESSION_ENDED_TOOLTIP_SECONDARY_CTA,
                    }),
                    (0, a.jsx)(i.Button, {
                      color: i.Button.Colors.BRAND,
                      onClick: t,
                      children:
                        c.default.Messages
                          .CLIPS_SESSION_ENDED_TOOLTIP_PRIMARY_CTA,
                    }),
                  ],
                }),
              ],
            });
      }
    },
    938244: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("77078"),
        l = n("145131"),
        i = n("36916");
      function r(e) {
        let { icon: t, onClick: n, label: r } = e;
        return (0, a.jsx)(s.Button, {
          look: s.Button.Looks.BLANK,
          size: s.Button.Sizes.MIN,
          className: i.button,
          onClick: n,
          children: (0, a.jsxs)(l.default, {
            align: l.default.Align.CENTER,
            children: [
              (0, a.jsx)("div", { className: i.buttonIcon, children: t }),
              (0, a.jsx)(s.Text, {
                variant: "text-md/normal",
                color: "none",
                children: r,
              }),
            ],
          }),
        });
      }
    },
    19846: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return y;
          },
        });
      var a = n("37983"),
        s = n("884691"),
        l = n("394846"),
        i = n("446674"),
        r = n("77078"),
        o = n("736964"),
        u = n("486503"),
        d = n("7643"),
        c = n("785770"),
        f = n("28424"),
        h = n("208021"),
        C = n("713135"),
        p = n("401642"),
        E = n("982108"),
        m = n("27618"),
        g = n("697218"),
        S = n("587974"),
        _ = n("315102"),
        T = n("841397"),
        A = n("49111"),
        M = n("680894"),
        I = n("590456"),
        N = n("782340"),
        v = n("817302");
      let L = e => {
          let { userId: t } = e,
            n = (0, i.useStateFromStores)(
              [C.default],
              () => C.default.getMutualGuilds(t),
              [t]
            ),
            l = s.useMemo(
              () =>
                null != n
                  ? n
                      .slice(0, 3)
                      .map((e, t) => {
                        let { guild: s } = e,
                          l =
                            null != s
                              ? _.default.getGuildIconURL({
                                  id: s.id,
                                  icon: s.icon,
                                  size: 24,
                                })
                              : null;
                        if (null == l) return null;
                        let i = t === (n.length > 3 ? 3 : n.length) - 1,
                          r = (0, a.jsx)(
                            "img",
                            { src: l, alt: "", className: v.avatar },
                            t
                          );
                        return i
                          ? r
                          : (0, a.jsx)(
                              S.default,
                              {
                                className: v.avatarMask,
                                mask: S.default.Masks.VOICE_USER_SUMMARY_ITEM,
                                width: 24,
                                height: 24,
                                children: r,
                              },
                              t
                            );
                      })
                      .filter(e => null != e)
                  : [],
              [n]
            );
          return null == n || 0 === n.length
            ? (0, a.jsx)(r.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                children: N.default.Messages.NO_MUTUAL_GUILDS,
              })
            : (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)("div", {
                    className: v.avatarContainer,
                    children: l,
                  }),
                  (0, a.jsx)(r.Clickable, {
                    onClick: () => {
                      (0, p.openUserProfileModal)({
                        userId: t,
                        section: I.UserProfileSections.MUTUAL_GUILDS,
                        analyticsLocation: {
                          section: A.AnalyticsSections.DIRECT_MESSAGE,
                        },
                      });
                    },
                    children: (0, a.jsx)(r.Text, {
                      className: v.mutualGuilds,
                      variant: "text-sm/normal",
                      children:
                        N.default.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
                          count: n.length,
                        }),
                    }),
                  }),
                ],
              });
        },
        R = e => {
          var t;
          let { relationshipType: n, userId: s, showingBanner: l } = e,
            i =
              null === (t = g.default.getUser(s)) || void 0 === t
                ? void 0
                : t.bot,
            u = () => {
              o.default.addRelationship({
                userId: s,
                context: { location: A.AnalyticsPages.DM_CHANNEL },
              });
            },
            d = (0, a.jsx)(r.Button, {
              className: v.action,
              size: r.Button.Sizes.TINY,
              color: r.Button.Colors.PRIMARY,
              onClick: () => {
                o.default.addRelationship({
                  userId: s,
                  context: { location: A.AnalyticsPages.DM_CHANNEL },
                  type: A.RelationshipTypes.BLOCKED,
                });
              },
              children: N.default.Messages.BLOCK,
            });
          switch (n) {
            case A.RelationshipTypes.NONE:
              return (0, a.jsxs)(a.Fragment, {
                children: [
                  !i &&
                    !l &&
                    (0, a.jsx)(r.Button, {
                      className: v.action,
                      size: r.Button.Sizes.TINY,
                      onClick: u,
                      children: N.default.Messages.ADD_FRIEND,
                    }),
                  d,
                ],
              });
            case A.RelationshipTypes.FRIEND:
              return (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(r.Button, {
                    className: v.action,
                    size: r.Button.Sizes.TINY,
                    onClick: () => {
                      o.default.removeFriend(s, {
                        location: A.AnalyticsPages.DM_CHANNEL,
                      });
                    },
                    color: r.Button.Colors.PRIMARY,
                    children: N.default.Messages.REMOVE_FRIEND,
                  }),
                  d,
                ],
              });
            case A.RelationshipTypes.BLOCKED:
              return (0, a.jsx)(r.Button, {
                className: v.action,
                size: r.Button.Sizes.TINY,
                onClick: () => {
                  o.default.unblockUser(s, {
                    location: A.AnalyticsPages.DM_CHANNEL,
                  });
                },
                color: r.Button.Colors.PRIMARY,
                children: N.default.Messages.UNBLOCK,
              });
            case A.RelationshipTypes.PENDING_INCOMING:
              return (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(r.Text, {
                    className: v.action,
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    children: N.default.Messages.FRIEND_REQUEST_RECEIVED,
                  }),
                  (0, a.jsx)(r.Button, {
                    className: v.action,
                    size: r.Button.Sizes.TINY,
                    onClick: u,
                    children: N.default.Messages.FRIEND_REQUEST_ACCEPT,
                  }),
                  (0, a.jsx)(r.Button, {
                    className: v.action,
                    size: r.Button.Sizes.TINY,
                    color: r.Button.Colors.PRIMARY,
                    onClick: () => {
                      o.default.cancelFriendRequest(s, {
                        location: A.AnalyticsPages.DM_CHANNEL,
                      });
                    },
                    children: N.default.Messages.FRIEND_REQUEST_IGNORE,
                  }),
                  d,
                ],
              });
            case A.RelationshipTypes.PENDING_OUTGOING:
              return (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(r.Button, {
                    className: v.action,
                    size: r.Button.Sizes.TINY,
                    disabled: !0,
                    children: N.default.Messages.ADD_FRIEND_BUTTON_AFTER,
                  }),
                  d,
                ],
              });
            default:
              return null;
          }
        },
        x = e => {
          let { channelId: t, otherUserId: n } = e,
            l = s.useCallback(() => {
              (0, r.showToast)(
                (0, r.createToast)(
                  N.default.Messages
                    .MESSAGE_REQUESTS_SPAM_REQUEST_ERROR_ALERT_TITLE,
                  r.ToastType.FAILURE
                )
              );
            }, []),
            i = s.useCallback(() => {
              h.default.closeChannelSidebar(E.MESSAGE_REQUESTS_BASE_CHANNEL_ID);
            }, []),
            o = s.useCallback(() => {
              h.default.closeChannelSidebar(E.MESSAGE_REQUESTS_BASE_CHANNEL_ID);
            }, []),
            {
              acceptMessageRequest: u,
              rejectMessageRequest: c,
              isAcceptLoading: f,
              isRejectLoading: C,
              isOptimisticAccepted: p,
              isOptimisticRejected: m,
            } = (0, d.useMessageRequestActions)({
              user: g.default.getUser(n),
              onError: l,
              onAcceptSuccess: o,
              onRejectSuccess: i,
            }),
            S = f || C || p || m;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(r.Button, {
                className: v.action,
                size: r.Button.Sizes.TINY,
                onClick: () => u(t),
                disabled: S,
                submitting: f,
                children: N.default.Messages.MESSAGE_REQUEST_ACCEPT,
              }),
              (0, a.jsx)(r.Button, {
                className: v.action,
                size: r.Button.Sizes.TINY,
                onClick: () => c(t),
                color: r.Button.Colors.PRIMARY,
                disabled: S,
                submitting: C,
                children: N.default.Messages.MESSAGE_REQUEST_IGNORE,
              }),
            ],
          });
        };
      var y = e => {
        let { userId: t, channel: n, showingBanner: s } = e,
          { channelId: r } = (0, c.useMessageRequestSidebarState)(),
          o = (0, i.useStateFromStores)(
            [u.default],
            () => null != r && u.default.isSpam(r),
            [r]
          ),
          d = (0, i.useStateFromStores)(
            [m.default],
            () => m.default.getRelationshipType(t),
            [t]
          ),
          h = n.id === r;
        return t === M.CLYDE_AI_USER_ID
          ? null
          : o || h
            ? (0, a.jsxs)("div", {
                className: v.mobileContainer,
                children: [
                  (0, a.jsx)("div", {
                    className: v.mobileMutualGuilds,
                    children: (0, a.jsx)(L, { userId: t }),
                  }),
                  (0, a.jsxs)("div", {
                    className: v.mobileButtons,
                    children: [
                      (0, a.jsx)(x, { channelId: n.id, otherUserId: t }),
                      (0, a.jsx)(f.default, { channel: n }),
                    ],
                  }),
                ],
              })
            : !0 === l.isMobile || h
              ? (0, a.jsxs)("div", {
                  className: v.mobileContainer,
                  children: [
                    (0, a.jsx)("div", {
                      className: v.mobileMutualGuilds,
                      children: (0, a.jsx)(L, { userId: t }),
                    }),
                    (0, a.jsxs)("div", {
                      className: v.mobileButtons,
                      children: [
                        (0, a.jsx)(R, {
                          relationshipType: d,
                          userId: t,
                          showingBanner: s,
                        }),
                        !s &&
                          (0, a.jsx)(T.default, {
                            otherUserId: t,
                            channel: n,
                            navigateAwayOnReportSuccess: !1,
                          }),
                      ],
                    }),
                  ],
                })
              : (0, a.jsxs)("div", {
                  className: v.container,
                  children: [
                    (0, a.jsx)(L, { userId: t }),
                    (0, a.jsx)("div", { className: v.divider }),
                    (0, a.jsx)(R, {
                      relationshipType: d,
                      userId: t,
                      showingBanner: s,
                    }),
                    !s && (0, a.jsx)(T.default, { otherUserId: t, channel: n }),
                  ],
                });
      };
    },
    172554: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
          EmptyMessageIcon: function () {
            return h;
          },
          EmptyMessageHeader: function () {
            return C;
          },
          EmptyMessageBody: function () {
            return p;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("414456"),
        l = n.n(s),
        i = n("733154"),
        r = n("504218"),
        o = n("198778"),
        u = n("77078"),
        d = n("154864"),
        c = n("49111"),
        f = n("684950");
      function h(e) {
        let { locked: t = !1, channelType: n } = e,
          s = (0, u.useRedesignIconContext)().enabled,
          d =
            n === c.ChannelTypes.GUILD_VOICE ||
            n === c.ChannelTypes.GUILD_STAGE_VOICE;
        if (!s)
          return (0, a.jsx)("div", {
            className: l(f.emptyChannelIcon, f.emptyChannelIconSvg, {
              [f.locked]: t,
              [f.voiceChat]: d,
            }),
          });
        {
          let e = d ? i.ChatIcon : t ? o.TextLockIcon : r.TextIcon;
          return (0, a.jsx)("div", {
            className: l(f.emptyChannelIcon, f.emptyChannelIconComponent),
            children: (0, a.jsx)(e, {
              color: u.tokens.colors.WHITE,
              width: 42,
              height: 42,
            }),
          });
        }
      }
      function C(e) {
        let { children: t, className: n } = e;
        return (0, a.jsx)(u.Heading, {
          "aria-hidden": "true",
          className: l(n, f.header),
          variant: "heading-xxl/extrabold",
          children: t,
        });
      }
      function p(e) {
        let { children: t } = e;
        return (0, a.jsx)(u.Text, {
          variant: "text-md/normal",
          color: "none",
          className: f.description,
          children: t,
        });
      }
      var E = function (e) {
        let { className: t, channelId: n, children: s, ...i } = e;
        return (0, a.jsx)("div", {
          className: l(t, f.container),
          id: (0, d.getMessageDOMId)(n, n),
          ...i,
          children: s,
        });
      };
    },
    34695: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return D;
          },
        });
      var a = n("37983"),
        s = n("884691"),
        l = n("446674"),
        i = n("77078"),
        r = n("913144"),
        o = n("679653"),
        u = n("454273"),
        d = n("934288"),
        c = n("262973"),
        f = n("713135"),
        h = n("506885"),
        C = n("233069"),
        p = n("923959"),
        E = n("957255"),
        m = n("697218"),
        g = n("158998"),
        S = n("19846"),
        _ = n("172554"),
        T = n("172643"),
        A = n("710357"),
        M = n("931922"),
        I = n("582724"),
        N = n("834744"),
        v = n("372912"),
        L = n("952999"),
        R = n("49111"),
        x = n("782340"),
        y = n("890957");
      function O(e) {
        let { canManageRoles: t, channel: n } = e,
          s = t && (0, u.isPrivateGuildChannel)(n),
          i = (0, l.useStateFromStores)(
            [p.default],
            () =>
              null != n.guild_id &&
              n === p.default.getDefaultChannel(n.guild_id),
            [n]
          ),
          r = (0, d.default)(n.id);
        if (r) return null;
        if (n.isForumPost()) return (0, a.jsx)(T.default, { channel: n });
        if (C.THREAD_CHANNEL_TYPES.has(n.type))
          return (0, a.jsx)(v.default, { channel: n });
        else if (i) return (0, a.jsx)(L.default, { channel: n });
        else if (s) return (0, a.jsx)(M.default, { channel: n });
        return (0, a.jsx)(N.default, { channel: n });
      }
      function D(e) {
        var t;
        let { channel: n, showingBanner: u } = e,
          d = (0, o.default)(n),
          { type: C } = n,
          p = (0, l.useStateFromStores)([m.default], () =>
            n.isPrivate() ? m.default.getUser(n.getRecipientId()) : null
          ),
          T = g.default.useUserTag(p),
          { canManageRoles: M, canReadMessageHistory: N } = (0,
          l.useStateFromStoresObject)([E.default], () => ({
            canManageRoles: E.default.can(R.Permissions.MANAGE_ROLES, n),
            canReadMessageHistory: E.default.can(
              R.Permissions.READ_MESSAGE_HISTORY,
              n
            ),
          })),
          v = (0, l.useStateFromStores)(
            [f.default],
            () =>
              C === R.ChannelTypes.DM
                ? f.default.getMutualGuilds(n.getRecipientId())
                : null,
            [n, C]
          ),
          { systemDMRedesignEnabled: L } = c.default.useExperiment(
            { location: "bf1a4f_1" },
            {
              autoTrackExposure:
                null !== (t = n.isSystemDM()) && void 0 !== t && t,
            }
          );
        if (
          (s.useEffect(() => {
            C === R.ChannelTypes.DM &&
              null == v &&
              null != p &&
              r.default.wait(() =>
                (0, h.default)(n.getRecipientId(), p.getAvatarURL(null, 80), {
                  withMutualGuilds: !0,
                })
              );
          }, [v, C, n, p]),
          n.isSystemDM())
        )
          return L
            ? (0, a.jsx)(I.default, { channel: n })
            : (0, a.jsx)(A.default, {
                channel: n,
                children: x.default.Messages.SYSTEM_DM_EMPTY_MESSAGE,
              });
        if (C === R.ChannelTypes.DM)
          return (0, a.jsxs)(A.default, {
            channel: n,
            user: p,
            children: [
              null != p &&
                (0, a.jsx)(i.Heading, {
                  variant: "heading-xl/medium",
                  className: y.marginBottom20,
                  children: T,
                }),
              x.default.Messages.BEGINNING_DM.format({ username: d }),
              (0, a.jsx)(S.default, {
                userId: n.getRecipientId(),
                channel: n,
                showingBanner: u,
              }),
            ],
          });
        if (n.isMultiUserDM())
          return n.isManaged()
            ? (0, a.jsxs)(_.default, {
                channelId: n.id,
                children: [
                  (0, a.jsx)(_.EmptyMessageHeader, {
                    children:
                      x.default.Messages.BEGINNING_CHANNEL_WELCOME.format({
                        channelName: d,
                      }),
                  }),
                  (0, a.jsx)(_.EmptyMessageBody, {
                    children: x.default.Messages.BEGINNING_GROUP_DM_MANAGED,
                  }),
                ],
              })
            : (0, a.jsx)(A.default, {
                channel: n,
                children: x.default.Messages.BEGINNING_GROUP_DM.format({
                  name: d,
                }),
              });
        return N
          ? (0, a.jsx)(O, { channel: n, canManageRoles: M })
          : (0, a.jsx)(_.default, {
              channelId: n.id,
              children: (0, a.jsx)(_.EmptyMessageBody, {
                children:
                  x.default.Messages.BEGINNING_CHANNEL_NO_HISTORY.format({
                    channelName: d,
                  }),
              }),
            });
      }
    },
    172643: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        }),
        n("222007");
      var a = n("37983");
      n("884691");
      var s = n("446674"),
        l = n("77078"),
        i = n("619335"),
        r = n("680986"),
        o = n("430475"),
        u = n("121308"),
        d = n("660074"),
        c = n("172554"),
        f = n("782340"),
        h = n("275791");
      function C(e) {
        var t;
        let { channel: n } = e,
          C = (0, r.useAppliedTags)(n),
          { firstMessage: p } = (0, s.useStateFromStoresObject)(
            [o.default],
            () => o.default.getMessage(n.id)
          ),
          E = new Set((0, r.useVisibleAppliedForumTags)(n, C)),
          m = null !== (t = (0, i.default)(n)) && void 0 !== t ? t : d.default;
        return (0, a.jsxs)(c.default, {
          channelId: n.id,
          className: h.container,
          children: [
            (0, a.jsx)("div", {
              className: h.iconWrapper,
              children: (0, a.jsx)(m, { className: h.icon, strokeWidth: 1.75 }),
            }),
            (0, a.jsx)(c.EmptyMessageHeader, {
              className: h.header,
              children: n.name,
            }),
            null == p &&
              (0, a.jsx)(l.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                children: f.default.Messages.REPLY_QUOTE_MESSAGE_DELETED,
              }),
            (0, a.jsx)(u.default, { appliedTags: E }),
          ],
        });
      }
    },
    710357: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("446674"),
        l = n("77078"),
        i = n("206230"),
        r = n("843962"),
        o = n("679653"),
        u = n("106435"),
        d = n("172554");
      function c(e) {
        var t;
        let { channel: n, children: c, user: f } = e,
          h = (0, s.useStateFromStores)(
            [i.default],
            () => i.default.useReducedMotion
          ),
          C = null !== (t = (0, o.default)(n)) && void 0 !== t ? t : "",
          {
            avatarDecorationSrc: p,
            eventHandlers: E,
            isAnimating: m,
          } = (0, u.default)({
            user: f,
            size: l.AvatarSizes.SIZE_80,
            animateOnHover: !0,
          });
        return (0, a.jsxs)(d.default, {
          channelId: n.id,
          ...E,
          children: [
            (0, a.jsx)(l.Avatar, {
              "aria-label": C,
              size: l.AvatarSizes.SIZE_80,
              src: (0, r.getChannelIconURL)(n, 80, !h && m),
              avatarDecoration: p,
            }),
            (0, a.jsx)(d.EmptyMessageHeader, { children: C }),
            (0, a.jsx)(d.EmptyMessageBody, { children: c }),
          ],
        });
      }
    },
    841397: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("77078"),
        l = n("450911"),
        i = n("377114"),
        r = n("61505"),
        o = n("949067"),
        u = n("782340");
      function d(e) {
        let {
            otherUserId: t,
            channel: n,
            buttonSize: d = s.ButtonSizes.TINY,
            className: c,
            buttonText: f,
            navigateAwayOnReportSuccess: h = !0,
            onReportClick: C,
            onReportSubmit: p,
            onMouseEnter: E,
            onMouseLeave: m,
          } = e,
          g = (0, r.useIsRelationshipTypeSpamReportable)(t),
          S = (0, o.useLongestChannelMessageBeforeReply)(n.id, t);
        if (!g || null == S) return null;
        let _ = () => {
          null == p || p(), l.default.closePrivateChannel(n.id, h);
        };
        return (0, a.jsx)(s.Button, {
          className: c,
          size: d,
          color: s.Button.Colors.RED,
          disabled: null == S,
          onClick: () => {
            null == C || C(), (0, i.showReportModalForFirstDM)(S, _);
          },
          onMouseEnter: E,
          onMouseLeave: m,
          children: null != f ? f : u.default.Messages.REPORT_SPAM,
        });
      }
    },
    931922: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return b;
          },
        }),
        n("222007");
      var a = n("37983"),
        s = n("884691"),
        l = n("414456"),
        i = n.n(l),
        r = n("917351"),
        o = n.n(r),
        u = n("316693"),
        d = n("509043"),
        c = n("446674"),
        f = n("77078"),
        h = n("18054"),
        C = n("798609"),
        p = n("679653"),
        E = n("454273"),
        m = n("462430"),
        g = n("592407"),
        S = n("367376"),
        _ = n("305961"),
        T = n("957255"),
        A = n("697218"),
        M = n("987772"),
        I = n("155207"),
        N = n("917686"),
        v = n("317134"),
        L = n("991170"),
        R = n("158998"),
        x = n("938244"),
        y = n("172554"),
        O = n("730859"),
        D = n("49111"),
        P = n("782340"),
        j = n("948746");
      function b(e) {
        let { channel: t } = e,
          [n, l] = s.useState(!1),
          r = (0, p.default)(t, !0),
          b = (0, c.useStateFromStores)([_.default], () =>
            _.default.getGuild(t.guild_id)
          ),
          H = (0, c.useStateFromStores)([A.default], () =>
            A.default.getUser(null == b ? void 0 : b.ownerId)
          ),
          F = s.useMemo(
            () =>
              null != b
                ? o(b.roles)
                    .sortBy(e => -e.position)
                    .filter(e => !(0, E.isEveryoneRoleId)(b.id, e.id))
                    .value()
                : [],
            [b]
          ),
          U = s.useMemo(
            () =>
              o(F)
                .filter(e => {
                  if (null == b) return !1;
                  let n = L.default.computePermissionsForRoles({
                    forceRoles: { [e.id]: e },
                    context: t,
                  });
                  return (
                    u.default.has(n, D.Permissions.ADMINISTRATOR) ||
                    u.default.has(n, D.Permissions.VIEW_CHANNEL)
                  );
                })
                .value(),
            [t, b, F]
          ),
          k = (0, c.useStateFromStoresArray)(
            [A.default],
            () => {
              let e = {};
              for (let n of (null != H && (e[H.id] = H),
              Object.values(t.permissionOverwrites))) {
                if (
                  n.type !== C.PermissionOverwriteType.MEMBER ||
                  null != e[n.id]
                )
                  continue;
                let t = A.default.getUser(n.id);
                null != t && (e[t.id] = t);
              }
              return o(e)
                .filter(e => {
                  var n;
                  let a = L.default.can({
                      permission: D.Permissions.ADMINISTRATOR,
                      user: e,
                      context: t,
                    }),
                    s =
                      null !== (n = t.permissionOverwrites[e.id]) &&
                      void 0 !== n
                        ? n
                        : L.default.NONE,
                    l = u.default.has(s.allow, D.Permissions.VIEW_CHANNEL);
                  return a || l;
                })
                .value();
            },
            [t, H]
          ),
          G =
            T.default.can(D.Permissions.MANAGE_CHANNELS, t) ||
            T.default.can(D.Permissions.MANAGE_ROLES, t);
        function B() {
          h.default.open(t.id);
        }
        let w = s.useCallback(() => l(!1), []);
        return (0, a.jsxs)(y.default, {
          channelId: t.id,
          children: [
            (0, a.jsx)(y.EmptyMessageIcon, { locked: !0, channelType: t.type }),
            (0, a.jsx)(y.EmptyMessageHeader, {
              children: P.default.Messages.BEGINNING_CHANNEL_WELCOME.format({
                channelName: r,
              }),
            }),
            (0, a.jsx)(y.EmptyMessageBody, {
              children:
                P.default.Messages.BEGINNING_ROLE_REQUIRED_CHANNEL_DESCRIPTION.format(
                  {
                    channelName: r,
                    topicHook: () =>
                      S.default.parseTopic(t.topic, !0, { channelId: t.id }),
                  }
                ),
            }),
            G
              ? (0, a.jsxs)("div", {
                  className: j.channelSettingButtons,
                  children: [
                    (0, a.jsx)(x.default, {
                      label:
                        P.default.Messages
                          .CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE,
                      onClick: () => l(!0),
                      icon: (0, a.jsx)(I.default, { width: 16, height: 16 }),
                    }),
                    (0, a.jsx)(x.default, {
                      label: P.default.Messages.EDIT_CHANNEL,
                      onClick: B,
                      icon: (0, a.jsx)(M.default, { width: 16, height: 16 }),
                    }),
                  ],
                })
              : null,
            (0, a.jsxs)("div", {
              className: j.members,
              children: [
                (function () {
                  if (1 !== k.length || U.length > 0)
                    return (0, a.jsx)(O.default, {
                      guildId: t.guild_id,
                      className: j.avatars,
                      maxUsers: 5,
                      users: k,
                    });
                  let e = k[0],
                    n = R.default.getName(e);
                  return (0, a.jsxs)("div", {
                    className: j.avatars,
                    children: [
                      (0, a.jsx)(f.Avatar, {
                        src: e.getAvatarURL(t.guild_id, 24),
                        "aria-label": n,
                        size: f.AvatarSizes.SIZE_24,
                      }),
                      (0, a.jsx)(f.Text, {
                        tag: "span",
                        className: j.singleUserName,
                        variant: "text-md/normal",
                        children: n,
                      }),
                      "\xa0",
                      (0, a.jsx)(f.Text, {
                        tag: "span",
                        variant: "text-md/normal",
                        color: "text-muted",
                        children:
                          P.default.Messages.ROLE_REQUIRED_SINGLE_USER_MESSAGE,
                      }),
                    ],
                  });
                })(),
                U.map((e, n) => {
                  var s, l;
                  let r =
                      null !== (l = e.colorString) && void 0 !== l
                        ? l
                        : (0, d.int2hex)(D.DEFAULT_ROLE_COLOR),
                    o =
                      (null === (s = e.tags) || void 0 === s
                        ? void 0
                        : s.guild_connections) !== void 0;
                  return G
                    ? (0, a.jsx)(
                        N.default,
                        {
                          className: i(j.role, {
                            [j.last]: n === U.length - 1,
                          }),
                          roleName: e.name,
                          roleColor: r,
                          disabled: !G,
                          verified: o,
                          onClick: () => {
                            g.default.open(
                              t.guild_id,
                              D.GuildSettingsSections.MEMBERS
                            ),
                              g.default.selectRole(e.id);
                          },
                        },
                        e.id
                      )
                    : (0, a.jsx)(
                        v.default,
                        {
                          className: i(j.role, {
                            [j.last]: n === U.length - 1,
                          }),
                          roleName: e.name,
                          roleColor: r,
                          verified: o,
                        },
                        e.id
                      );
                }),
              ],
            }),
            n
              ? (0, a.jsx)(f.Modal, {
                  renderModal: e =>
                    (0, a.jsx)(m.default, {
                      ...e,
                      onClose: () => (w(), e.onClose()),
                      channelId: t.id,
                    }),
                  onCloseRequest: () => l(!1),
                })
              : null,
          ],
        });
      }
    },
    582724: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("77078"),
        l = n("843962"),
        i = n("679653"),
        r = n("154864"),
        o = n("931138"),
        u = n("486952"),
        d = n("172554"),
        c = n("782340"),
        f = n("426699"),
        h = n("561537");
      let C = () =>
        (0, a.jsx)("svg", {
          width: "46",
          height: "34",
          viewBox: "0 0 46 34",
          className: f.chatBubbleLip,
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, a.jsx)("path", {
            d: "M0 33.4637C16.1697 28.954 21.1764 9.59155 19.2146 0L45.681 0.000148089C45.681 0.000148089 44.681 9.14498 40.1914 18.3023C34.4077 30.0996 6.2893 33.1232 0 33.4637Z",
          }),
        });
      function p(e) {
        var t;
        let { channel: n } = e,
          p = null !== (t = (0, i.default)(n)) && void 0 !== t ? t : "";
        return (0, a.jsxs)("div", {
          id: (0, r.getMessageDOMId)(n.id, n.id),
          className: f.headerContainer,
          children: [
            (0, a.jsx)("img", { src: h, className: f.wumpusImage, alt: "" }),
            (0, a.jsxs)("div", {
              className: f.chatBubbleContainer,
              children: [
                (0, a.jsx)(C, {}),
                (0, a.jsxs)("div", {
                  className: f.chatBubble,
                  children: [
                    (0, a.jsx)(s.Avatar, {
                      "aria-label": p,
                      size: s.AvatarSizes.SIZE_80,
                      src: (0, l.getChannelIconURL)(n, 80, !1),
                    }),
                    (0, a.jsxs)(d.EmptyMessageHeader, {
                      className: f.emptyMessageHeader,
                      children: [
                        p,
                        (0, a.jsx)(o.default, {
                          className: f.flowerStar,
                          size: 24,
                          children: (0, a.jsx)(u.default, {
                            className: f.verified,
                            width: 24,
                            height: 24,
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsx)(d.EmptyMessageBody, {
                      children: c.default.Messages.SYSTEM_DM_EMPTY_MESSAGE,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    834744: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("446674"),
        l = n("18054"),
        i = n("679653"),
        r = n("367376"),
        o = n("233069"),
        u = n("957255"),
        d = n("987772"),
        c = n("938244"),
        f = n("172554"),
        h = n("49111"),
        C = n("782340"),
        p = n("26445");
      function E(e) {
        let { channel: t } = e,
          n = (0, i.default)(t, !0),
          E = (0, s.useStateFromStores)(
            [u.default],
            () =>
              u.default.can(h.Permissions.MANAGE_CHANNELS, t) &&
              o.EDITABLE_CHANNEL_TYPES.has(t.type)
          );
        return (0, a.jsxs)(f.default, {
          channelId: t.id,
          children: [
            (0, a.jsx)(f.EmptyMessageIcon, { channelType: t.type }),
            (0, a.jsx)(f.EmptyMessageHeader, {
              children: C.default.Messages.BEGINNING_CHANNEL_WELCOME.format({
                channelName: n,
              }),
            }),
            (0, a.jsx)(f.EmptyMessageBody, {
              children: C.default.Messages.BEGINNING_CHANNEL_DESCRIPTION.format(
                {
                  channelName: n,
                  topicHook: () =>
                    r.default.parseTopic(t.topic, !0, { channelId: t.id }),
                }
              ),
            }),
            E
              ? (0, a.jsx)("div", {
                  className: p.buttonContainer,
                  children: (0, a.jsx)(c.default, {
                    label: C.default.Messages.EDIT_CHANNEL,
                    onClick: () => {
                      l.default.open(t.id);
                    },
                    icon: (0, a.jsx)(d.default, { width: 16, height: 16 }),
                  }),
                })
              : null,
          ],
        });
      }
    },
    372912: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return A;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("414456"),
        l = n.n(s),
        i = n("446674"),
        r = n("77078"),
        o = n("272030"),
        u = n("619335"),
        d = n("506885"),
        c = n("981601"),
        f = n("26989"),
        h = n("697218"),
        C = n("959097"),
        p = n("158998"),
        E = n("172554"),
        m = n("49111"),
        g = n("782340"),
        S = n("247703");
      function _(e) {
        var t, s;
        let { userId: u, channel: C } = e,
          E = (0, i.useStateFromStores)([h.default], () =>
            h.default.getUser(u)
          ),
          m = (0, i.useStateFromStores)([f.default], () =>
            null != u ? f.default.getMember(C.guild_id, u) : null
          );
        function g(e) {
          if (null == E) return null;
          (0, o.openContextMenuLazy)(e, async () => {
            let { default: e } = await n.el("721429").then(n.bind(n, "721429"));
            return t =>
              (0, a.jsx)(e, { ...t, user: E, guildId: C.guild_id, channel: C });
          });
        }
        let _ =
            null !==
              (s =
                null !== (t = null == m ? void 0 : m.nick) && void 0 !== t
                  ? t
                  : p.default.getName(E)) && void 0 !== s
              ? s
              : "???",
          T = null == m ? void 0 : m.colorString;
        return null == E
          ? (0, a.jsx)("span", {
              className: l(S.threadCreatorName, S.unknownCreatorName),
              children: _,
            })
          : (0, a.jsx)(r.Popout, {
              preload: () =>
                (0, d.default)(E.id, E.getAvatarURL(C.guild_id, 80), {
                  guildId: C.guild_id,
                  channelId: C.id,
                }),
              renderPopout: e =>
                (0, a.jsx)(c.default, {
                  userId: E.id,
                  guildId: C.guild_id,
                  channelId: C.id,
                  ...e,
                }),
              position: "right",
              children: e =>
                (0, a.jsx)(r.Clickable, {
                  ...e,
                  tag: "span",
                  className: S.threadCreatorName,
                  onContextMenu: g,
                  children: (0, a.jsx)(r.NameWithRole, {
                    name: _,
                    color: null != T ? T : void 0,
                  }),
                }),
            });
      }
      function T(e) {
        let { channel: t } = e,
          { threadMetadata: n } = t;
        return null == n
          ? (0, a.jsx)("div", { style: { marginTop: -8 } })
          : (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(r.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: (0, a.jsx)("div", {
                    className: S.subtitle,
                    children: g.default.Messages.THREAD_STARTED_BY.format({
                      usernameHook: (e, n) =>
                        (0, a.jsx)(_, { userId: t.ownerId, channel: t }, n),
                    }),
                  }),
                }),
                t.type === m.ChannelTypes.PRIVATE_THREAD
                  ? (0, a.jsx)(r.Text, {
                      variant: "text-md/normal",
                      color: "header-secondary",
                      children:
                        g.default.Messages
                          .EMPTY_MESSAGE_PRIVATE_THREAD_INSTRUCTIONS,
                    })
                  : null,
              ],
            });
      }
      function A(e) {
        var t;
        let { channel: n } = e,
          s = null !== (t = (0, u.default)(n)) && void 0 !== t ? t : C.default;
        return (0, a.jsxs)(E.default, {
          channelId: n.id,
          children: [
            (0, a.jsx)("div", {
              className: S.iconWrapper,
              children: (0, a.jsx)(s, { className: S.icon }),
            }),
            (0, a.jsx)(E.EmptyMessageHeader, { children: n.name }),
            (0, a.jsx)(T, { channel: n }),
          ],
        });
      }
    },
    952999: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          WelcomeMessageCTA: function () {
            return D;
          },
          default: function () {
            return P;
          },
        }),
        n("222007"),
        n("424973");
      var a = n("37983"),
        s = n("884691"),
        l = n("414456"),
        i = n.n(l),
        r = n("775560"),
        o = n("458960"),
        u = n("446674"),
        d = n("151426"),
        c = n("77078"),
        f = n("634634"),
        h = n("716241"),
        C = n("299285"),
        p = n("983444"),
        E = n("592407"),
        m = n("970700"),
        g = n("271938"),
        S = n("305961"),
        _ = n("697218"),
        T = n("461380"),
        A = n("36694"),
        M = n("659500"),
        I = n("701909"),
        N = n("773336"),
        v = n("299039"),
        L = n("172554"),
        R = n("49111"),
        x = n("188631"),
        y = n("782340"),
        O = n("658561");
      function D(e) {
        let {
            className: t,
            iconUrl: n,
            icon: l,
            header: r,
            completed: o,
            onClick: u,
          } = e,
          [d, h] = s.useState(!1),
          C = (0, f.default)(o);
        return (
          s.useEffect(() => {
            null != C && o !== C && (h(!0), setTimeout(() => h(!1), 1e3));
          }, [o, C]),
          (0, a.jsxs)(c.Clickable, {
            className: i(t, O.card, { [O.completed]: o }),
            onClick: u,
            children: [
              null != l
                ? l
                : (0, a.jsx)("div", {
                    className: O.icon,
                    style: { backgroundImage: "url('".concat(n, "')") },
                  }),
              (0, a.jsx)(c.Text, {
                color: "header-primary",
                className: i(O.cardTextContainer, O.cardHeader),
                variant: "text-sm/normal",
                children: r,
              }),
              o
                ? (0, a.jsx)(A.default, {
                    className: i(O.checkmark, { [O.animate]: d }),
                  })
                : (0, a.jsx)(T.default, {
                    className: O.arrow,
                    direction: T.default.Directions.RIGHT,
                  }),
            ],
          })
        );
      }
      function P(e) {
        let { channel: t } = e,
          l = (0, u.useStateFromStores)(
            [S.default],
            () => (null != t ? S.default.getGuild(t.getGuildId()) : null),
            [t]
          ),
          f =
            null != l &&
            v.default.extractTimestamp(l.id) <
              Date.now() - R.WELCOME_OLD_GUILD_AGE_THRESHOLD,
          T = (0, u.useStateFromStores)(
            [g.default],
            () => (null == l ? void 0 : l.ownerId) === g.default.getId(),
            [l]
          ),
          {
            canInvite: A,
            canManageGuild: P,
            canMessage: j,
          } = (0, p.usePermissions)(t, l),
          b = (0, u.useStateFromStores)([_.default], () => {
            var e, t;
            return (
              (null === (e = _.default.getCurrentUser()) || void 0 === e
                ? void 0
                : e.desktop) === !0 ||
              (null === (t = _.default.getCurrentUser()) || void 0 === t
                ? void 0
                : t.mobile) === !0
            );
          }),
          {
            guildPopulated: H,
            guildMessaged: F,
            guildPersonalized: U,
          } = (0, p.useCompletedStates)(l),
          {
            handleInvite: k,
            handleMessage: G,
            handlePersonalize: B,
            handleDownload: w,
            handleAddApplication: V,
          } = (function (e) {
            let t = s.useCallback(() => {
                h.default.trackWithMetadata(
                  R.AnalyticEvents.SERVER_SETUP_CTA_CLICKED,
                  {
                    setup_type: x.AnalyticsSetupTypes.CHANNEL_WELCOME,
                    action: x.AnalyticsActions.INVITE,
                  }
                ),
                  null != e &&
                    (0, c.openModalLazy)(async () => {
                      let { default: t } = await n
                        .el("310688")
                        .then(n.bind(n, "310688"));
                      return n =>
                        (0, a.jsx)(t, {
                          ...n,
                          guild: e,
                          source: R.InstantInviteSources.CHANNEL_WELCOME,
                          analyticsLocation: {
                            section: R.AnalyticsSections.CHANNEL_WELCOME_CTA,
                          },
                        });
                    });
              }, [e]),
              l = s.useCallback(() => {
                h.default.trackWithMetadata(
                  R.AnalyticEvents.SERVER_SETUP_CTA_CLICKED,
                  {
                    setup_type: x.AnalyticsSetupTypes.CHANNEL_WELCOME,
                    action: x.AnalyticsActions.SEND_MESSAGE,
                  }
                ),
                  M.ComponentDispatch.dispatch(
                    R.ComponentActions.TEXTAREA_FOCUS,
                    { highlight: !0, channelId: R.EMPTY_STRING_SNOWFLAKE_ID }
                  );
              }, []),
              i = s.useCallback(() => {
                h.default.trackWithMetadata(
                  R.AnalyticEvents.SERVER_SETUP_CTA_CLICKED,
                  {
                    setup_type: x.AnalyticsSetupTypes.CHANNEL_WELCOME,
                    action: x.AnalyticsActions.PERSONALIZE_SERVER,
                  }
                ),
                  null != e &&
                    E.default.open(e.id, R.GuildSettingsSections.OVERVIEW, {
                      section: R.AnalyticsSections.CHANNEL_WELCOME_CTA,
                    });
              }, [e]),
              r = s.useCallback(() => {
                h.default.trackWithMetadata(
                  R.AnalyticEvents.SERVER_SETUP_CTA_CLICKED,
                  {
                    setup_type: x.AnalyticsSetupTypes.CHANNEL_WELCOME,
                    action: x.AnalyticsActions.DOWNLOAD,
                  }
                ),
                  (0, c.openModalLazy)(async () => {
                    let { default: e } = await n
                      .el("649486")
                      .then(n.bind(n, "649486"));
                    return t =>
                      (0, a.jsx)(e, {
                        source: R.AnalyticsSections.CHANNEL_WELCOME_CTA,
                        ...t,
                      });
                  });
              }, []),
              o = s.useCallback(() => {
                null != e &&
                  (h.default.trackWithMetadata(
                    R.AnalyticEvents.SERVER_SETUP_CTA_CLICKED,
                    {
                      setup_type: x.AnalyticsSetupTypes.CHANNEL_WELCOME,
                      action: x.AnalyticsActions.ADD_APP,
                    }
                  ),
                  (0, c.openModalLazy)(async () => {
                    let { default: t } = await n
                      .el("881892")
                      .then(n.bind(n, "881892"));
                    return n => {
                      var s;
                      return (0, a.jsx)(t, {
                        guildId: null !== (s = e.id) && void 0 !== s ? s : "",
                        ...n,
                        analyticsType:
                          d.DismissibleContent
                            .APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL,
                      });
                    };
                  }));
              }, [e]);
            return {
              handleInvite: t,
              handleMessage: l,
              handlePersonalize: i,
              handleDownload: r,
              handleAddApplication: o,
            };
          })(l),
          W = !(b || H || F || U),
          { titleAnimatedStyle: Z, opacities: z } = (function (e) {
            let t = (0, r.useLazyValue)(() => new o.default.Value(0)),
              n = (0, r.useLazyValue)(() => new o.default.Value(0)),
              a = [];
            a.push((0, r.useLazyValue)(() => new o.default.Value(0))),
              a.push((0, r.useLazyValue)(() => new o.default.Value(0))),
              a.push((0, r.useLazyValue)(() => new o.default.Value(0))),
              a.push((0, r.useLazyValue)(() => new o.default.Value(0))),
              s.useEffect(() => {
                o.default
                  .stagger(300, [
                    o.default.parallel([
                      o.default.timing(n, { toValue: 1, duration: 450 }),
                      o.default.timing(t, { toValue: 1, duration: 450 }),
                    ]),
                    o.default.stagger(100, [
                      o.default.timing(a[0], { toValue: 1, duration: 300 }),
                      o.default.timing(a[1], { toValue: 1, duration: 300 }),
                      o.default.timing(a[2], { toValue: 1, duration: 300 }),
                      o.default.timing(a[3], { toValue: 1, duration: 300 }),
                    ]),
                  ])
                  .start();
              }, [n, t, a]);
            let l = e
              ? {
                  transform: [
                    {
                      translateY: t.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["-20px", "0px"],
                      }),
                    },
                  ],
                  opacity: n,
                }
              : {};
            return { titleAnimatedStyle: l, opacities: a };
          })(W),
          K = (0, u.useStateFromStores)([C.default], () =>
            C.default.getGuildApplicationIds(null == l ? void 0 : l.id)
          ),
          Y = K.length > 0;
        if (
          (s.useEffect(() => {
            var e;
            (0, m.fetchGuildIntegrationsApplications)(
              null !== (e = null == l ? void 0 : l.id) && void 0 !== e
                ? e
                : R.EMPTY_STRING_SNOWFLAKE_ID
            );
          }, [l]),
          null == l)
        )
          return null;
        let q = [];
        !f &&
          (A &&
            q.push(
              (0, a.jsx)(
                o.default.div,
                {
                  className: O.cardWrapper,
                  style: W ? { opacity: z[q.length] } : {},
                  children: (0, a.jsx)(D, {
                    iconUrl: n("243826"),
                    header: y.default.Messages.WELCOME_CTA_INVITE_TITLE,
                    completed: H,
                    onClick: k,
                  }),
                },
                "invite"
              )
            ),
          P &&
            q.push(
              (0, a.jsx)(
                o.default.div,
                {
                  className: O.cardWrapper,
                  style: W ? { opacity: z[q.length] } : {},
                  children: (0, a.jsx)(D, {
                    iconUrl: n("215036"),
                    header: y.default.Messages.WELCOME_CTA_PERSONALIZE_TITLE,
                    completed: U,
                    onClick: B,
                  }),
                },
                "customize"
              )
            ),
          j &&
            q.push(
              (0, a.jsx)(
                o.default.div,
                {
                  className: O.cardWrapper,
                  style: W ? { opacity: z[q.length] } : {},
                  children: (0, a.jsx)(D, {
                    iconUrl: n("505873"),
                    header: y.default.Messages.WELCOME_CTA_MESSAGE_TITLE,
                    completed: F,
                    onClick: G,
                  }),
                },
                "message"
              )
            ),
          (0, N.isWeb)() &&
            q.push(
              (0, a.jsx)(
                o.default.div,
                {
                  className: O.cardWrapper,
                  style: W ? { opacity: z[q.length] } : {},
                  children: (0, a.jsx)(D, {
                    iconUrl: n("238032"),
                    header: y.default.Messages.WELCOME_CTA_DOWNLOAD_TITLE,
                    completed: b,
                    onClick: w,
                  }),
                },
                "download"
              )
            ),
          q.push(
            (0, a.jsx)(
              o.default.div,
              {
                className: O.cardWrapper,
                style: W ? { opacity: z[q.length] } : {},
                children: (0, a.jsx)(D, {
                  iconUrl: n("356451"),
                  header:
                    y.default.Messages.WELCOME_CTA_APPS_RECOMMENDATION_TITLE,
                  completed: Y,
                  onClick: V,
                }),
              },
              "addapp"
            )
          ));
        let X = T
          ? y.default.Messages.WELCOME_CTA_SUBTITLE_OWNER
          : y.default.Messages.WELCOME_CTA_SUBTITLE_MEMBER;
        f && (X = y.default.Messages.WELCOME_CTA_SUBTITLE_EXISTING_SERVER);
        let J = "".concat(
          I.default.getArticleURL(R.HelpdeskArticles.GUILD_GETTING_STARTED),
          "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm"
        );
        return (0, a.jsx)(L.default, {
          channelId: t.id,
          children: (0, a.jsx)("div", {
            className: O.container,
            children: (0, a.jsxs)("div", {
              className: O.inner,
              children: [
                (0, a.jsxs)(o.default.div, {
                  style: Z,
                  children: [
                    (0, a.jsx)(c.Heading, {
                      className: O.titleName,
                      variant: "heading-xxl/semibold",
                      children: y.default.Messages.WELCOME_CTA_TITLE.format({
                        guildName: l.name,
                      }),
                    }),
                    (0, a.jsxs)(c.Text, {
                      color: "header-secondary",
                      className: i({
                        [O.subtitle]: !0,
                        [O.noChildren]: 0 === q.length,
                      }),
                      variant: "text-sm/normal",
                      children: [
                        X,
                        " ",
                        q.length > 0
                          ? y.default.Messages.WELCOME_CTA_SUBTITLE_ACTION_WITH_GUIDE.format(
                              { guideURL: J }
                            )
                          : null,
                      ],
                    }),
                  ],
                }),
                q,
              ],
            }),
          }),
        });
      }
    },
    121308: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        }),
        n("222007");
      var a = n("37983");
      n("884691");
      var s = n("90625"),
        l = n("499882");
      function i(e) {
        let { appliedTags: t, setAppliedTags: n } = e,
          i =
            null != n
              ? e => {
                  t.has(e) && (t.delete(e), n(new Set(t)));
                }
              : void 0;
        return (0, a.jsx)("div", {
          className: l.tags,
          children: Array.from(t).map(e =>
            (0, a.jsx)(
              s.default,
              {
                tag: e,
                onRemove: i,
                size:
                  null == i ? s.default.Sizes.SMALL : s.default.Sizes.MEDIUM,
              },
              e.id
            )
          ),
        });
      }
    },
    554393: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return b;
          },
        }),
        n("222007");
      var a = n("37983"),
        s = n("884691"),
        l = n("414456"),
        i = n.n(l),
        r = n("281071"),
        o = n("446674"),
        u = n("77078"),
        d = n("731898"),
        c = n("612039"),
        f = n("275318"),
        h = n("762147"),
        C = n("875978"),
        p = n("359132"),
        E = n("836943"),
        m = n("92981"),
        g = n("592707"),
        S = n("350134"),
        _ = n("755624"),
        T = n("263024"),
        A = n("42203"),
        M = n("660279"),
        I = n("36694"),
        N = n("83900"),
        v = n("404008"),
        L = n("680986"),
        R = n("612278"),
        x = n("867965"),
        y = n("688169"),
        O = n("49111"),
        D = n("782340"),
        P = n("425833"),
        j = n("159441");
      function b(e) {
        let {
            postId: t,
            isFirstMessage: n,
            isLastItem: l = !1,
            parentChannelId: b,
          } = e,
          { ref: H, width: F } = (0, d.default)(),
          [U, k] = s.useState(3),
          [G, B] = s.useState(!n),
          [w, V] = (0, c.default)(!1, 2e3),
          W = (0, o.useStateFromStores)(
            [A.default],
            () => A.default.getChannel(t),
            [t]
          ),
          { firstMessage: Z } = (0, R.useFirstForumPostMessage)(W),
          z = (0, o.useStateFromStores)([_.default], () =>
            _.default.hasJoined(t)
          ),
          {
            disableReactionUpdates: K,
            disableReactionCreates: Y,
            isLurking: q,
            isGuest: X,
            isPendingMember: J,
          } = (0, p.default)(W),
          Q = (0, y.useForumActivityExperiment)(
            null == W ? void 0 : W.guild_id
          ),
          $ = (0, o.useStateFromStores)([A.default], () =>
            A.default.getChannel(b)
          ),
          ee = (0, L.useDefaultReactionEmoji)($),
          et = (0, o.useStateFromStores)(
            [f.default],
            () => f.default.shouldDisplayPrompt(t) && !0 === n,
            [t, n]
          ),
          en = s.useCallback(
            e => {
              let t = e[0];
              if (null != t && n) {
                let e = t.intersectionRect,
                  n = t.boundingClientRect,
                  a = (e.bottom - e.top) / (n.bottom - n.top);
                B(a < 1);
              }
            },
            [n]
          );
        s.useLayoutEffect(() => {
          let e = H.current;
          if (null == e || !n) return;
          let t = new IntersectionObserver(en, { threshold: 1 });
          return (
            t.observe(e),
            () => {
              t.disconnect();
            }
          );
        });
        let [ea, es] = s.useState(!0);
        if (
          (s.useEffect(() => {
            if (null != F) k(Math.floor((F - 280) / 58)), es(!1);
          }, [F]),
          null == W || null == Z)
        )
          return null;
        let el = Z.reactions.length > 0,
          ei = () => {
            z
              ? T.default.leaveThread(W, "Forum Toolbar")
              : T.default.joinThread(W, "Forum Toolbar");
          },
          er = () => {
            (0, x.trackForumPostLinkCopied)({
              postId: W.id,
              location: { section: O.AnalyticsSections.CHANNEL_HEADER },
            }),
              (0, r.copy)((0, v.getChannelLinkToCopy)(W, $)),
              V(!0);
          },
          eo = z ? I.default : M.default;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("div", {
              className: i(P.container, { [P.header]: G }),
              ref: H,
              children: [
                (0, a.jsxs)("div", {
                  className: i(P.reactButtons, { [P.loading]: ea }),
                  children: [
                    !el &&
                      !Y &&
                      null != ee &&
                      (0, a.jsx)("div", {
                        className: j.reactions,
                        children: (0, a.jsx)(S.Reaction, {
                          message: Z,
                          readOnly: !1,
                          useChatFontScaling: !1,
                          isLurking: q,
                          isGuest: X,
                          isPendingMember: J,
                          emoji: ee,
                          type: C.ReactionTypes.NORMAL,
                          hideCount: !0,
                          count: 0,
                          me: !1,
                          burst_count: 0,
                          me_burst: !1,
                        }),
                      }),
                    (0, a.jsx)(g.default, {
                      message: Z,
                      channel: W,
                      disableReactionCreates: !Q || Y,
                      disableReactionUpdates: K,
                      isLurking: q,
                      isGuest: X,
                      isPendingMember: J,
                      maxReactions: U,
                      className: P.reactions,
                      useChatFontScaling: !1,
                      isForumToolbar: !0,
                      forceHideReactionCreates: !0,
                    }),
                    !Y &&
                      (0, a.jsx)(E.ButtonAddReaction, {
                        type: C.ReactionTypes.NORMAL,
                        message: Z,
                        channel: W,
                        useChatFontScaling: !1,
                        className: P.addReactButton,
                        isForumToolbar: !0,
                        children: !el && D.default.Messages.FORUM_REACT_TO_POST,
                      }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: P.buttons,
                  children: [
                    (0, a.jsx)(u.Tooltip, {
                      text: D.default.Messages.FORUM_FOLLOW_TOOLTIP,
                      children: e =>
                        (0, a.jsxs)(u.Button, {
                          ...e,
                          look: u.Button.Looks.BLANK,
                          size: u.Button.Sizes.SMALL,
                          onClick: ei,
                          className: P.button,
                          innerClassName: i(P.buttonInner, { [P.active]: z }),
                          children: [
                            (0, a.jsx)(eo, { width: 16, height: 16 }),
                            z
                              ? D.default.Messages.FORUM_FOLLOWING_POST
                              : D.default.Messages.FOLLOW,
                          ],
                        }),
                    }),
                    (0, a.jsx)(u.Tooltip, {
                      text: D.default.Messages.COPY_LINK,
                      children: e =>
                        (0, a.jsxs)(u.Button, {
                          ...e,
                          look: u.Button.Looks.BLANK,
                          size: u.Button.Sizes.SMALL,
                          onClick: er,
                          className: P.button,
                          innerClassName: P.buttonInner,
                          children: [
                            w
                              ? (0, a.jsx)(I.default, { width: 16, height: 16 })
                              : (0, a.jsx)(N.default, {
                                  width: 16,
                                  height: 16,
                                }),
                            w ? D.default.Messages.COPIED : null,
                          ],
                        }),
                    }),
                  ],
                }),
              ],
            }),
            et && (0, a.jsx)(h.default, { threadId: t }),
            (0, a.jsx)(m.default, { channel: W, isLastItem: l }),
          ],
        });
      }
    },
    260526: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          removeAutomodMessageNotice: function () {
            return s;
          },
        });
      var a = n("913144");
      function s(e) {
        a.default.dispatch({
          type: "REMOVE_AUTOMOD_MESSAGE_NOTICE",
          messageId: e,
        });
      }
    },
    952104: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          AutomodUserProfileQuarantineChatInputNotice: function () {
            return h;
          },
        }),
        n("222007");
      var a = n("37983");
      n("884691");
      var s = n("77078"),
        l = n("812204"),
        i = n("685665"),
        r = n("594864"),
        o = n("533930"),
        u = n("956967"),
        d = n("49111"),
        c = n("782340"),
        f = n("743221");
      function h(e) {
        var t, n;
        let { guild: h } = e,
          { analyticsLocations: C } = (0, i.default)(
            l.default.AUTOMOD_PROFILE_QUARANTINE_ALERT
          ),
          [p, E] = (0, u.useOpenFixQuarantinedProfileModal)({
            guildId:
              null !== (t = null == h ? void 0 : h.id) && void 0 !== t
                ? t
                : d.EMPTY_STRING_SNOWFLAKE_ID,
            analyticsLocations: C,
            openWithoutBackstack: !0,
          }),
          m = E
            ? c.default.Messages.GUILD_AUTOMOD_PROFILE_INVALID_DESCRIPTION
            : c.default.Messages
                .GUILD_AUTOMOD_PROFILE_INVALID_NO_PERMS_DESCRIPTION,
          g = E
            ? c.default.Messages.GUILD_AUTOMOD_UPDATE_PROFILE_CTA
            : c.default.Messages.GUILD_AUTOMOD_UPDATE_ACCOUNT_USERNAME_CTA;
        return (0, a.jsx)("div", {
          children: (0, a.jsx)(r.MessageNoticeBanner, {
            bannerIcon: (0, a.jsx)(o.default, {
              className: f.bannerIcon,
              width: 32,
              height: 32,
            }),
            bannerHeader:
              c.default.Messages.GUILD_AUTOMOD_PROFILE_INVALID_MODAL_TITLE_MOBILE.format(
                {
                  guildName:
                    null !== (n = null == h ? void 0 : h.name) && void 0 !== n
                      ? n
                      : "",
                }
              ),
            bannerSubtext: m,
            containerStyles: f.bannerContainer,
            headerStyles: f.bannerHeader,
            children: (0, a.jsx)(s.Button, {
              onClick: () => {
                p();
              },
              size: s.Button.Sizes.SMALL,
              children: g,
            }),
          }),
        });
      }
    },
    637695: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useCommunicationDisabledCountdownCleanup: function () {
            return i;
          },
        });
      var a = n("884691"),
        s = n("174727"),
        l = n("658536");
      function i(e) {
        let {
            communicationDisabledUntil: t,
            userId: n,
            guildId: i,
          } = null != e ? e : {},
          r = (0, s.default)(null != t ? Date.parse(t) : Date.now()),
          o = r.seconds,
          u = (0, a.useRef)(null);
        return (
          (0, a.useEffect)(() => {
            if (null == e || null == i || null == n) {
              clearTimeout(u.current);
              return;
            }
            return (
              o <= 0 &&
                null == u.current &&
                (u.current = setTimeout(() => {
                  l.default.clearGuildMemberTimeout(i, n);
                }, 1e3)),
              () => {
                null != u.current &&
                  (clearTimeout(u.current), (u.current = null));
              }
            );
          }, [i, n, o, t, e]),
          r
        );
      }
    },
    68895: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CommunicationDisabledBanner: function () {
            return m;
          },
        }),
        n("222007");
      var a = n("37983");
      n("884691");
      var s = n("446674"),
        l = n("77078"),
        i = n("594864"),
        r = n("271938"),
        o = n("26989"),
        u = n("91551"),
        d = n("491401"),
        c = n("637695"),
        f = n("564568"),
        h = n("919398"),
        C = n("903639"),
        p = n("782340"),
        E = n("660953");
      function m(e) {
        let { guild: t, disabledUntil: n } = e,
          [m, g] = (0, f.useCommunicationDisabledNoticeStore)(t.id),
          S = (0, s.useStateFromStores)(
            [o.default, r.default],
            () => o.default.getMember(t.id, r.default.getId()),
            [t.id]
          );
        return (
          (0, c.useCommunicationDisabledCountdownCleanup)(S),
          (0, a.jsxs)("div", {
            children: [
              m
                ? (0, a.jsx)(h.default, {
                    onClose: () => g(t.id),
                    guildName: t.name,
                  })
                : null,
              (0, a.jsx)(i.MessageNoticeBanner, {
                bannerIcon: (0, a.jsx)(d.default, { className: E.bannerIcon }),
                bannerHeader:
                  p.default.Messages.GUILD_COMMUNICATION_DISABLED_NOTICE_HEADER,
                bannerSubtext:
                  p.default.Messages.GUILD_COMMUNICATION_DISABLED_CHAT_NOTICE_DESCRIPTION.format(
                    { link: C.GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK }
                  ),
                containerStyles: E.bannerContainer,
                headerStyles: E.bannerHeader,
                children: (0, a.jsx)(l.Text, {
                  variant: "text-sm/semibold",
                  children: (0, a.jsx)(u.default, {
                    deadline: new Date(n),
                    showUnits: !0,
                    stopAtOneSec: !0,
                  }),
                }),
              }),
            ],
          })
        );
      }
    },
    919398: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("77078"),
        l = n("491401"),
        i = n("782340"),
        r = n("354030");
      function o(e) {
        let { onClose: t, guildName: n } = e;
        return (0, a.jsxs)("div", {
          className: r.container,
          children: [
            (0, a.jsx)("div", {
              className: r.iconContainer,
              children: (0, a.jsx)(l.default, {
                className: r.icon,
                width: 20,
                height: 20,
              }),
            }),
            (0, a.jsxs)("div", {
              className: r.header,
              children: [
                (0, a.jsx)(s.Heading, {
                  variant: "heading-md/semibold",
                  className: r.headerText,
                  children:
                    i.default.Messages
                      .GUILD_COMMUNICATION_DISABLED_POPOUT_HEADER,
                }),
                (0, a.jsx)(s.Text, {
                  variant: "text-sm/normal",
                  children:
                    i.default.Messages.GUILD_COMMUNICATION_DISABLED_POPOUT_SUBHEADER.format(
                      { guildName: n }
                    ),
                }),
                (0, a.jsx)(s.Button, {
                  onClick: t,
                  className: r.button,
                  children: i.default.Messages.OKAY,
                }),
              ],
            }),
          ],
        });
      }
    },
    388166: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("77078"),
        l = n("491605"),
        i = n("476765"),
        r = n("782340"),
        o = n("680238");
      let u = () =>
        n
          .el("672332")
          .then(n.t.bind(n, "672332", 19))
          .then(e => {
            let { default: t } = e;
            return t;
          });
      var d = e => {
        let t = (0, i.useUID)();
        return (0, a.jsxs)(s.ModalRoot, {
          ...e,
          transitionState: e.transitionState,
          "aria-labelledby": t,
          children: [
            (0, a.jsx)("div", {
              className: o.animationContainer,
              children: (0, a.jsx)(l.default, {
                importData: u,
                className: o.animationMiddle,
              }),
            }),
            (0, a.jsx)(s.ModalContent, {
              children: (0, a.jsxs)("div", {
                className: o.container,
                children: [
                  (0, a.jsx)(s.Heading, {
                    variant: "heading-xl/semibold",
                    className: o.header,
                    id: t,
                    children:
                      r.default.Messages.MEMBER_VERIFICATION_APPROVED_APPLICATION_MODAL_TITLE.format(
                        { guildName: e.guildName }
                      ),
                  }),
                  (0, a.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children:
                      r.default.Messages
                        .MEMBER_VERIFICATION_APPROVED_APPLICATION_MODAL_DESC,
                  }),
                  (0, a.jsx)(s.Button, {
                    className: o.button,
                    onClick: () => {
                      e.onAccept(), e.onClose();
                    },
                    children:
                      r.default.Messages
                        .MEMBER_VERIFICATION_APPROVED_APPLICATION_MODAL_CONFIRM,
                  }),
                ],
              }),
            }),
          ],
        });
      };
    },
    86415: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n("446674"),
        s = n("913144"),
        l = n("42203"),
        i = n("724210");
      let r = {},
        o = {};
      class u extends a.default.PersistedStore {
        initialize(e) {
          var t;
          r =
            null !==
              (t = null == e ? void 0 : e.selectedResourceChannelIdByGuildId) &&
            void 0 !== t
              ? t
              : {};
        }
        getState() {
          return { selectedResourceChannelIdByGuildId: r };
        }
        getSelectedResourceChannelId(e) {
          return null == e ? null : r[e];
        }
        getHomeNavigationChannelId(e) {
          var t;
          return null == e
            ? null
            : null !== (t = r[e]) && void 0 !== t
              ? t
              : o[e];
        }
      }
      (u.displayName = "GuildOnboardingHomeNavigationStore"),
        (u.persistKey = "GuildOnboardingHomeNavigationStore");
      var d = new u(s.default, {
        CHANNEL_SELECT: function (e) {
          let { channelId: t, guildId: n } = e;
          if (null == n || t === i.StaticChannelRoute.GUILD_HOME) return;
          let a = l.default.getChannel(t),
            s = r[n],
            u = o[n];
          !(
            (null == a ? void 0 : a.isThread()) &&
            (null == a ? void 0 : a.parent_id) != null &&
            [u, s].includes(null == a ? void 0 : a.parent_id)
          ) && (t !== s && delete r[n], t !== u && delete o[n]);
        },
        SELECT_HOME_RESOURCE_CHANNEL: function (e) {
          let { channelId: t, guildId: n } = e;
          null == t ? delete o[n] : (r[n] = t), delete o[n];
        },
        SELECT_NEW_MEMBER_ACTION_CHANNEL: function (e) {
          let { channelId: t, guildId: n } = e;
          delete r[n], (o[n] = t);
        },
      });
    },
    726274: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useMemberActionsForChannel: function () {
            return d;
          },
          useNextMemberAction: function () {
            return c;
          },
          useAllActionsCompleted: function () {
            return f;
          },
        }),
        n("702976");
      var a = n("65597"),
        s = n("26989"),
        l = n("568734"),
        i = n("698882"),
        r = n("675305"),
        o = n("363176"),
        u = n("657944");
      function d(e, t) {
        var n;
        let s = (0, o.default)(e),
          l = (0, a.default)(
            [i.default],
            () => i.default.getNewMemberActions(e),
            [e]
          ),
          u = (0, a.default)([r.default], () =>
            r.default.getCompletedActions(e)
          );
        if (!s) return {};
        let d =
            null !==
              (n =
                null == l ? void 0 : l.findIndex(e => e.channelId === t.id)) &&
            void 0 !== n
              ? n
              : 0,
          c = d >= 0 && null != l ? l[d] : null,
          f = null != c && (null == u ? void 0 : u[c.channelId]) === !0;
        return { channelAction: c, completed: f };
      }
      function c(e, t) {
        let n = (0, a.default)([i.default], () =>
            i.default.getNewMemberActions(e)
          ),
          s = (0, a.default)([r.default], () =>
            r.default.getCompletedActions(e)
          ),
          l =
            null == n
              ? void 0
              : n.find(
                  e =>
                    (null == s ? void 0 : s[e.channelId]) !== !0 &&
                    e.channelId !== t
                );
        return l;
      }
      function f(e) {
        var t;
        let n = (0, a.default)([s.default], () => s.default.getSelfMember(e));
        return (0, l.hasFlag)(
          null !== (t = null == n ? void 0 : n.flags) && void 0 !== t ? t : 0,
          u.GuildMemberFlags.COMPLETED_HOME_ACTIONS
        );
      }
    },
    934288: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        }),
        n("702976");
      var a = n("65597"),
        s = n("42203"),
        l = n("568734"),
        i = n("86415"),
        r = n("290886"),
        o = n("49111"),
        u = n("724210");
      function d(e) {
        var t;
        let n = (0, a.default)([s.default], () => s.default.getChannel(e)),
          d =
            null != n &&
            (0, l.hasFlag)(n.flags, u.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL),
          c = (0, a.default)([i.default], () =>
            i.default.getSelectedResourceChannelId(
              null == n ? void 0 : n.guild_id
            )
          ),
          f = (0, r.useCanSeeOnboardingHome)(
            null !== (t = null == n ? void 0 : n.guild_id) && void 0 !== t
              ? t
              : o.EMPTY_STRING_SNOWFLAKE_ID
          );
        return null != n && f && d && c === n.id;
      }
    },
    87635: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return R;
          },
        }),
        n("222007");
      var a = n("37983"),
        s = n("884691"),
        l = n("414456"),
        i = n.n(l),
        r = n("458960"),
        o = n("65597"),
        u = n("77078"),
        d = n("206230"),
        c = n("679653"),
        f = n("419830"),
        h = n("42203"),
        C = n("26989"),
        p = n("538137"),
        E = n("593195"),
        m = n("578706"),
        g = n("347895"),
        S = n("129092"),
        _ = n("726274"),
        T = n("290886"),
        A = n("205454"),
        M = n("782340"),
        I = n("490259");
      function N(e) {
        let { action: t } = e,
          n = (0, o.default)([h.default], () =>
            h.default.getChannel(t.channelId)
          ),
          s = (0, c.default)(n, !0);
        return null == n
          ? (0, a.jsx)(u.Text, {
              variant: "text-xxs/normal",
              color: "header-secondary",
              children: M.default.Messages.IN_CHANNEL.format({
                channelName: M.default.Messages.UNKNOWN_CHANNEL_PLACEHOLDER,
              }),
            })
          : (0, a.jsx)(u.Text, {
              variant: "text-xxs/normal",
              color: "header-secondary",
              children: M.default.Messages.IN_CHANNEL.format({
                channelName: s,
              }),
            });
      }
      function v(e) {
        var t;
        let { channelId: n, emojiId: s, emojiName: l } = e,
          i = (0, o.default)([h.default], () => h.default.getChannel(n));
        if (null == i) return null;
        let r =
          null !== (t = (0, f.getChannelIconComponent)(i)) && void 0 !== t
            ? t
            : E.default;
        return (0, a.jsx)(A.default, {
          emojiId: s,
          emojiName: l,
          size: A.CTAEmojiSize.MEDIUM,
          defaultComponent: (0, a.jsx)(r, { className: I.channelIcon }),
        });
      }
      function L(e) {
        var t, n, l, c;
        let { guildId: f, channel: h, className: C } = e,
          { channelAction: E, completed: T } = (0,
          _.useMemberActionsForChannel)(f, h),
          A = (0, _.useNextMemberAction)(f, null == E ? void 0 : E.channelId),
          L = (0, o.default)([d.default], () => d.default.useReducedMotion),
          R =
            (null == E ? void 0 : E.actionType) === S.NewMemberActionTypes.VIEW,
          x = (0, u.useToken)(u.tokens.colors.WHITE),
          [y, O] = s.useState(!1),
          [D] = s.useState(new r.default.Value(0)),
          [P] = s.useState(new r.default.Value(0));
        s.useEffect(() => {
          T
            ? r.default
                .timing(D, {
                  toValue: 0,
                  duration: L ? 1 : 350,
                  easing: r.default.Easing.quad,
                  delay: R ? 0 : 500,
                })
                .start(() => O(!0))
            : r.default
                .timing(D, {
                  toValue: 1,
                  duration: L ? 1 : 350,
                  easing: r.default.Easing.quad,
                  delay: 400,
                })
                .start();
        }, [T, D, R, L]),
          s.useEffect(() => {
            T &&
              y &&
              r.default
                .timing(P, {
                  toValue: 1,
                  duration: L ? 0 : 350,
                  easing: r.default.Easing.quad,
                  delay: 400,
                })
                .start();
          }, [T, P, y, L]);
        let j = s.useCallback(() => {
          null != A && (0, g.selectNewMemberActionChannel)(f, A.channelId);
        }, [f, A]);
        return null == E || (R && !y)
          ? null
          : (0, a.jsx)("div", {
              className: i(I.container, C),
              children:
                y && null != A
                  ? (0, a.jsx)(r.default.div, {
                      style: {
                        marginBottom: P.interpolate({
                          inputRange: [0, 1],
                          outputRange: [-60, 0],
                        }),
                      },
                      children: (0, a.jsxs)(u.Clickable, {
                        className: i(I.banner, I.clickable),
                        onClick: j,
                        children: [
                          (0, a.jsx)(v, {
                            channelId: A.channelId,
                            emojiId:
                              null === (t = A.emoji) || void 0 === t
                                ? void 0
                                : t.id,
                            emojiName:
                              null == A
                                ? void 0
                                : null === (n = A.emoji) || void 0 === n
                                  ? void 0
                                  : n.name,
                          }),
                          (0, a.jsxs)("div", {
                            className: I.text,
                            children: [
                              (0, a.jsx)(u.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children:
                                  M.default.Messages.MEMBER_ACTIONS_NEXT_STEP.format(
                                    { step: A.title }
                                  ),
                              }),
                              (0, a.jsx)(N, { action: A }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className: I.iconCircle,
                            children: (0, a.jsx)(p.default, {
                              width: 16,
                              height: 16,
                              color: x.hex(),
                              className: I.nextIcon,
                            }),
                          }),
                        ],
                      }),
                    })
                  : (0, a.jsxs)(r.default.div, {
                      className: I.banner,
                      style: {
                        marginBottom: D.interpolate({
                          inputRange: [0, 1],
                          outputRange: [-60, 0],
                        }),
                      },
                      children: [
                        (0, a.jsx)(v, {
                          channelId: E.channelId,
                          emojiId:
                            null === (l = E.emoji) || void 0 === l
                              ? void 0
                              : l.id,
                          emojiName:
                            null == E
                              ? void 0
                              : null === (c = E.emoji) || void 0 === c
                                ? void 0
                                : c.name,
                        }),
                        (0, a.jsxs)("div", {
                          className: I.text,
                          children: [
                            (0, a.jsx)(u.Text, {
                              variant: "text-md/semibold",
                              color: "header-primary",
                              children: E.title,
                            }),
                            (0, a.jsx)(u.Text, {
                              variant: "text-xxs/normal",
                              color: "text-muted",
                              children: M.default.Messages.MEMBER_ACTION_CHAT,
                            }),
                          ],
                        }),
                        T
                          ? (0, a.jsx)(m.default, {
                              className: I.completed,
                              backgroundColor: x.hex(),
                              width: 20,
                              height: 20,
                            })
                          : null,
                      ],
                    }),
            });
      }
      function R(e) {
        let { guildId: t, channel: n, className: s } = e,
          l = (0, T.useCanSeeOnboardingHome)(t),
          i = (0, o.default)([C.default], () => {
            var e;
            return (
              (null === (e = C.default.getSelfMember(t)) || void 0 === e
                ? void 0
                : e.isPending) === !0
            );
          }),
          r = (0, _.useAllActionsCompleted)(t);
        return r || i || !l
          ? null
          : (0, a.jsx)(L, { guildId: t, channel: n, className: s });
      }
    },
    188631: function (e, t, n) {
      "use strict";
      var a, s, l, i, r, o;
      n.r(t),
        n.d(t, {
          Steps: function () {
            return a;
          },
          AnalyticsActions: function () {
            return s;
          },
          AnalyticsSetupTypes: function () {
            return l;
          },
        }),
        ((i = a || (a = {})).INVITE = "member_joined"),
        (i.CHANNEL = "create_channel"),
        (i.AVATAR = "avatar"),
        (i.MESSAGE = "send_message"),
        (i.COMPLETED = "completed"),
        (i.DISMISSED = "dismissed"),
        ((r = s || (s = {})).PERSONALIZE_SERVER = "Personalize Server"),
        (r.INVITE = "Invite Friends"),
        (r.CREATE_CHANNEL = "Create Channel"),
        (r.SEND_MESSAGE = "Send Message"),
        (r.DOWNLOAD = "Download"),
        (r.ADD_APP = "Add App"),
        (r.DISMISS_GUILD_PROGRESS = "Dismiss Guild Progress"),
        (r.DISCORD_OVERVIEW_VIDEO = "Discord Overview Video"),
        (r.JOIN_GUILD = "Join Guild"),
        (r.CONTACT_SYNC = "Sync Contacts"),
        (r.DISMISS = "Dismiss"),
        ((o = l || (l = {})).CHANNEL_WELCOME = "Channel Welcome CTA"),
        (o.GUILD_PROGRESS = "Guild Progress"),
        (o.HUB_PROGRESS = "Hub Progress");
    },
    983444: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          usePermissions: function () {
            return S;
          },
          useCompletedStates: function () {
            return _;
          },
        }),
        n("222007");
      var a = n("884691"),
        s = n("917351"),
        l = n.n(s),
        i = n("446674"),
        r = n("242757"),
        o = n("913491"),
        u = n("271938"),
        d = n("42203"),
        c = n("923959"),
        f = n("525065"),
        h = n("305961"),
        C = n("778588"),
        p = n("377253"),
        E = n("957255"),
        m = n("299039"),
        g = n("49111");
      function S(e, t) {
        return (0, i.useStateFromStoresObject)(
          [E.default],
          () => ({
            canInvite: (0, r.canViewInviteModal)(E.default, t, e),
            canManageGuild:
              null != t && E.default.can(g.Permissions.MANAGE_GUILD, t),
            canMessage:
              null != e && E.default.can(g.Permissions.SEND_MESSAGES, e),
            canCreateChannel:
              null != t && E.default.can(g.Permissions.MANAGE_CHANNELS, t),
          }),
          [t, e]
        );
      }
      function _(e) {
        var t;
        return {
          guildPopulated: (function (e) {
            let t = (0, i.useStateFromStores)([d.default], () =>
                d.default.getChannel(null == e ? void 0 : e.systemChannelId)
              ),
              n = (0, i.useStateFromStoresArray)([p.default], () =>
                null != t ? p.default.getMessages(t.id).toArray() : []
              );
            return (0, i.useStateFromStores)(
              [f.default],
              () => {
                var t;
                let a =
                    null !==
                      (t = f.default.getMemberCount(
                        null == e ? void 0 : e.id
                      )) && void 0 !== t
                      ? t
                      : 0,
                  s = n.some(e => e.type === g.MessageTypes.USER_JOIN);
                return a > 1 || s;
              },
              [e, n]
            );
          })(e),
          guildMessaged: (function (e) {
            let t = (0, i.useStateFromStores)([d.default], () =>
                null != e
                  ? d.default.getMutableBasicGuildChannelsForGuild(e.id)
                  : null
              ),
              n = a.useMemo(() => (null == t ? [] : l.values(t)), [t]);
            return (function (e) {
              let t = (0, i.useStateFromStores)([u.default], () =>
                u.default.getId()
              );
              return (0, i.useStateFromStores)([p.default], () =>
                l.some(e, e => {
                  let n = p.default.getMessages(e.id).toArray();
                  return l.some(
                    n,
                    e => e.author.id === t && !(0, o.default)(e)
                  );
                })
              );
            })(n);
          })(e),
          guildPersonalized: (function (e) {
            let t = (0, i.useStateFromStores)([C.default], () =>
                C.default.hasLayers()
              ),
              n = (0, i.useStateFromStores)([h.default], () =>
                h.default.getGuild(null == e ? void 0 : e.id)
              );
            return (null == n ? void 0 : n.icon) != null && !t;
          })(e),
          guildChannelCreated:
            ((t = e),
            (0, i.useStateFromStores)(
              [c.default],
              () => {
                let e = c.default.getChannels(null == t ? void 0 : t.id),
                  n = e[c.GUILD_VOCAL_CHANNELS_KEY];
                function a(e) {
                  return (
                    null != t &&
                    m.default.extractTimestamp(e.channel.id) -
                      m.default.extractTimestamp(t.id) >
                      500
                  );
                }
                return (
                  e[(0, c.GUILD_SELECTABLE_CHANNELS_KEY)].some(a) || n.some(a)
                );
              },
              [t]
            )),
        };
      }
    },
    718490: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
        }),
        n("222007");
      var a = n("37983"),
        s = n("884691"),
        l = n("917351"),
        i = n.n(l),
        r = n("446674"),
        o = n("77078"),
        u = n("906932"),
        d = n("401642"),
        c = n("26989"),
        f = n("305961"),
        h = n("697218"),
        C = n("98292"),
        p = n("351825"),
        E = n("956089"),
        m = n("664336"),
        g = n("811305"),
        S = n("117362"),
        _ = n("449008"),
        T = n("49111"),
        A = n("590456"),
        M = n("782340"),
        I = n("724539");
      class N {
        updateData(e, t) {
          (this.userId = e), (this.user = t);
        }
        getNicknameGuildPairs() {
          return this.generateNicknameGuildPairs(this.user);
        }
        renderNicknamePairs() {
          return this.getNicknameGuildPairs().map((e, t) => {
            let [n, l] = e,
              i = (0, a.jsx)(o.Clickable, {
                tag: "span",
                onClick: this.handleClick,
                children: n,
              });
            return (
              l.length > 0 &&
                (i = (0, a.jsx)(o.TooltipContainer, {
                  className: I.tooltip,
                  text: l.join(", "),
                  position: "bottom",
                  children: i,
                })),
              (0, a.jsxs)(
                s.Fragment,
                { children: [0 !== t ? ", " : null, i] },
                t
              )
            );
          });
        }
        constructor(e, t) {
          (this.generateNicknameGuildPairs = (0, S.cachedFunction)(e => {
            var t;
            let n = i(
              c.default.getNicknameGuildsMapping(
                null !== (t = null == e ? void 0 : e.id) && void 0 !== t
                  ? t
                  : this.userId
              )
            )
              .toPairs()
              .map(e => {
                let [t, n] = e;
                return [
                  t,
                  n
                    .map(e => {
                      var t;
                      return null === (t = f.default.getGuild(e)) ||
                        void 0 === t
                        ? void 0
                        : t.name;
                    })
                    .filter(_.isNotNullish),
                ];
              })
              .value();
            return n;
          })),
            (this.renderMoreAvatars = () =>
              (0, a.jsx)(
                o.TooltipContainer,
                {
                  text: M.default.Messages.AKA_MORE_AVATARS_OVERFLOW,
                  position: "bottom",
                  children: (0, a.jsx)(o.Clickable, {
                    className: I.moreAvatars,
                    onClick: this.handleClick,
                    children: (0, a.jsx)(p.default, { className: I.plusIcon }),
                  }),
                },
                "more-avatars"
              )),
            (this.handleClick = () => {
              (0, d.openUserProfileModal)({
                userId: this.userId,
                section: A.UserProfileSections.MUTUAL_GUILDS,
                analyticsLocation: {
                  section: T.AnalyticsSections.CHANNEL_HEADER,
                },
              });
            }),
            (this.userId = e),
            (this.user = t);
        }
      }
      function v(e) {
        let { channel: t } = e,
          n = t.getRecipientId(),
          l = (0, u.useAvatarsWithGuilds)(n),
          i = Array(l.length).fill(null),
          d = (function (e) {
            let t = (0, r.useStateFromStores)(
                [h.default],
                () => h.default.getUser(e),
                [e]
              ),
              [n] = s.useState(() => new N(e, null != t ? t : void 0));
            return n.updateData(e, null != t ? t : void 0), n;
          })(n);
        return 0 === d.getNicknameGuildPairs().length && 0 === l.length
          ? (0, a.jsx)("div", { className: I.spacer })
          : (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(m.Divider, {}),
                (0, a.jsx)(E.TextBadge, {
                  text: M.default.Messages.AKA,
                  disableColor: !0,
                  className: I.akaBadge,
                }),
                l.length > 0
                  ? (0, a.jsx)(g.default, {
                      size: 16,
                      users: i,
                      showUserPopout: !1,
                      renderUser: (e, t, n) => {
                        var s;
                        let i = d.user,
                          r = l[n];
                        return null == r || null == i
                          ? null
                          : (0, a.jsx)(
                              o.TooltipContainer,
                              {
                                text:
                                  null === (s = f.default.getGuild(r)) ||
                                  void 0 === s
                                    ? void 0
                                    : s.name,
                                position: "bottom",
                                children: (0, a.jsx)("img", {
                                  alt: "",
                                  className: I.avatar,
                                  onClick: d.handleClick,
                                  src: i.getAvatarURL(r, 16),
                                  "aria-hidden": !0,
                                }),
                              },
                              r[1]
                            );
                      },
                      renderMoreUsers: d.renderMoreAvatars,
                      guildId: void 0,
                      max: 3,
                      className: I.avatars,
                    })
                  : null,
                d.getNicknameGuildPairs().length > 0
                  ? (0, a.jsx)(C.default, {
                      position: "bottom",
                      className: I.nicknames,
                      children: d.renderNicknamePairs(),
                    })
                  : null,
              ],
            });
      }
    },
    960454: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("450911"),
        l = n("413427"),
        i = n("274870"),
        r = n("679653"),
        o = n("49111"),
        u = n("684414"),
        d = e => {
          let { channel: t } = e,
            n = (0, r.default)(t),
            d = (0, i.useIsBroadcastingGDM)(t.id);
          return (0, a.jsx)("div", {
            className: u.container,
            onDoubleClick: e => e.stopPropagation(),
            children: d
              ? (0, a.jsx)("div", { className: u.channelName, children: n })
              : (0, a.jsx)(l.default, {
                  minLen: 1,
                  maxLen: o.MAX_CHANNEL_NAME_LENGTH,
                  className: u.channelName,
                  name: "channel_name",
                  autoComplete: "off",
                  value: null != n ? n : "",
                  onBlur: e => {
                    n !== e.currentTarget.value &&
                      s.default.setName(t.id, e.currentTarget.value);
                  },
                }),
          });
        };
    },
    740961: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        }),
        n("222007");
      var a = n("37983"),
        s = n("884691"),
        l = n("414456"),
        i = n.n(l),
        r = n("118810"),
        o = n("77078"),
        u = n("272030"),
        d = n("779454"),
        c = n("679653"),
        f = n("367376"),
        h = n("539938"),
        C = n("49111"),
        p = n("782340"),
        E = n("628631");
      function m(e) {
        let { channel: t, onClose: n, transitionState: s } = e,
          l = (0, c.default)(t, !0);
        return (0, a.jsx)(o.ModalRoot, {
          transitionState: s,
          "aria-label": p.default.Messages.FORM_LABEL_CHANNEL_TOPIC,
          children: (0, a.jsx)(o.ModalContent, {
            children: (0, a.jsx)(d.default, {
              selectable: !0,
              onClose: n,
              renderHeader: () =>
                (0, a.jsx)(o.Heading, {
                  variant: "heading-lg/semibold",
                  children: l,
                }),
              children: (0, a.jsx)(o.Text, {
                selectable: !0,
                variant: "text-md/normal",
                className: E.content,
                children: f.default.parseTopic(t.topic, !0, {
                  channelId: t.id,
                }),
              }),
            }),
          }),
        });
      }
      function g(e) {
        return (
          e.matches("a") ||
          "highlight" === e.className ||
          e.className.includes("mention")
        );
      }
      class S extends s.Component {
        render() {
          let { channel: e } = this.props;
          return e.isMultiUserDM() || null == e.topic || 0 === e.topic.length
            ? null
            : (0, a.jsxs)(s.Fragment, {
                children: [
                  (0, a.jsx)(h.default.Divider, {}),
                  (0, a.jsxs)("div", {
                    className: i(E.topic, E.expandable),
                    onMouseDown: this.onMouseDown,
                    onMouseMove: this.onMouseMove,
                    onMouseUp: this.onMouseUp,
                    onContextMenu: this.handleContextMenu,
                    onClick: this.handleClick,
                    children: [
                      (0, a.jsx)(o.Clickable, {
                        onClick: this.handleClick,
                        "aria-label": p.default.Messages.OPEN_CHANNEL_TOPIC,
                        className: E.topicClickTarget,
                      }),
                      f.default.parseTopic(e.topic, !0, {
                        channelId: e.id,
                        allowLinks: !0,
                      }),
                    ],
                  }),
                ],
              });
        }
        constructor(...e) {
          super(...e),
            (this._mouseDown = !1),
            (this._mouseUp = !1),
            (this.handleOpenTopic = e => {
              let t = e.target;
              if ((0, r.isElement)(t)) {
                if (g(t)) return;
                let e = t.parentNode;
                if ((0, r.isElement)(e) && g(e)) return;
              }
              (0, o.openModal)(e => (0, a.jsx)(m, { ...e, ...this.props }));
            }),
            (this.onMouseDown = () => {
              this._mouseDown = !0;
            }),
            (this.onMouseMove = () => {
              this._mouseDown && (this._mouseDown = !1);
            }),
            (this.onMouseUp = e => {
              this._mouseDown &&
                e.button !== C.MouseButtons.SECONDARY &&
                this.handleOpenTopic(e),
                (this._mouseUp = !0),
                (this._mouseDown = !1);
            }),
            (this.handleContextMenu = e => {
              let { channel: t, guild: s } = this.props;
              (0, u.openContextMenuLazy)(e, async () => {
                let { default: e } = await n
                  .el("229233")
                  .then(n.bind(n, "229233"));
                return n =>
                  (0, a.jsx)(e, {
                    ...n,
                    channel: t,
                    guild: s,
                    includeTopic: !0,
                  });
              });
            }),
            (this.handleClick = e => {
              if (this._mouseUp) {
                this._mouseUp = !1;
                return;
              }
              this.handleOpenTopic(e);
            });
        }
      }
      var _ = S;
    },
    540853: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("65597"),
        l = n("77078"),
        i = n("824563"),
        r = n("27618"),
        o = n("697218"),
        u = n("158998"),
        d = n("539938"),
        c = n("782340"),
        f = n("250455");
      function h(e) {
        let t = e.channel.getRecipientId(),
          n = e.channel.isSystemDM(),
          h = (0, s.default)([o.default], () => o.default.getUser(t)),
          C = (0, s.default)([i.default], () => i.default.getStatus(t)),
          p = (0, s.default)([i.default], () => i.default.isMobileOnline(t)),
          E = (0, s.default)([r.default], () => r.default.getNickname(t)),
          m = u.default.useUserTag(h);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(l.HiddenVisually, {
              children: c.default.Messages.DIRECT_MESSAGE,
            }),
            null != h &&
              !n &&
              (0, a.jsx)("div", {
                children: (0, a.jsx)(l.Avatar, {
                  status: C,
                  isMobile: p,
                  className: f.avatar,
                  size: l.AvatarSizes.SIZE_24,
                  "aria-label": u.default.getName(h),
                  src: h.getAvatarURL(void 0, 24),
                }),
              }),
            (0, a.jsx)(d.default.Title, {
              level: e.level,
              onClick: e.handleClick,
              onContextMenu: e.handleContextMenu,
              className: null != e.handleClick ? f.cursorPointer : null,
              children: (0, a.jsx)(l.TooltipContainer, {
                text: m,
                position: "bottom",
                children: null != E ? E : u.default.getName(h),
              }),
            }),
          ],
        });
      }
    },
    557809: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          renderTitle: function () {
            return L;
          },
          renderTopic: function () {
            return x;
          },
          HeaderGuildBreadcrumb: function () {
            return O;
          },
        });
      var a = n("37983"),
        s = n("884691"),
        l = n("414456"),
        i = n.n(l),
        r = n("446674"),
        o = n("77078"),
        u = n("843962"),
        d = n("679653"),
        c = n("619335"),
        f = n("393414"),
        h = n("506885"),
        C = n("27618"),
        p = n("162771"),
        E = n("697218"),
        m = n("79798"),
        g = n("476263"),
        S = n("718490"),
        _ = n("960454"),
        T = n("740961"),
        A = n("539938"),
        M = n("540853"),
        I = n("49111"),
        N = n("782340"),
        v = n("250455");
      function L(e) {
        let {
            channel: t,
            channelName: n,
            parentChannel: l,
            guild: r,
            inSidebar: f = !1,
            handleClick: h,
            handleContextMenu: p,
            handleParentClick: m,
            handleParentContextMenu: g,
            renderFollowButton: S,
          } = e,
          T = (0, c.default)(t, r),
          { prefix: L, level: R } = (function (e, t) {
            var n, a;
            switch (e) {
              case I.ChannelTypes.DM:
                return { prefix: N.default.Messages.DIRECT_MESSAGE, level: 1 };
              case I.ChannelTypes.GROUP_DM:
                return { prefix: N.default.Messages.GROUP_DM, level: 1 };
              case I.ChannelTypes.GUILD_DIRECTORY:
                return {
                  prefix:
                    null !== (n = null == t ? void 0 : t.name) && void 0 !== n
                      ? n
                      : "",
                  level: 1,
                };
              case I.ChannelTypes.GUILD_ANNOUNCEMENT:
              case I.ChannelTypes.GUILD_TEXT:
              case I.ChannelTypes.GUILD_FORUM:
              case I.ChannelTypes.GUILD_MEDIA:
              case I.ChannelTypes.GUILD_STAGE_VOICE:
              case I.ChannelTypes.GUILD_VOICE:
                return {
                  prefix:
                    null !== (a = null == t ? void 0 : t.name) && void 0 !== a
                      ? a
                      : "",
                  level: 1,
                };
              case I.ChannelTypes.ANNOUNCEMENT_THREAD:
              case I.ChannelTypes.PUBLIC_THREAD:
              case I.ChannelTypes.PRIVATE_THREAD:
                return { prefix: N.default.Messages.THREAD, level: 2 };
              default:
                return { prefix: null, level: 1 };
            }
          })(t.type, r),
          x = (0, a.jsxs)(a.Fragment, {
            children: [
              null != L
                ? (0, a.jsxs)(o.HiddenVisually, { children: [L, ":"] })
                : null,
              " ",
              n,
            ],
          });
        switch (t.type) {
          case I.ChannelTypes.DM:
            return (0, a.jsx)(M.default, {
              level: R,
              channel: t,
              handleClick: h,
              handleContextMenu: p,
            });
          case I.ChannelTypes.GROUP_DM:
            if (t.isManaged()) return x;
            return (0, a.jsxs)(s.Fragment, {
              children: [
                (0, a.jsx)(o.HiddenVisually, {
                  children: N.default.Messages.GROUP_DM,
                }),
                (0, a.jsx)("div", {
                  children: (0, a.jsx)(o.Avatar, {
                    "aria-hidden": !0,
                    className: v.avatar,
                    size: o.AvatarSizes.SIZE_24,
                    src: (0, u.getChannelIconURL)(t, 80, !1),
                  }),
                }),
                (0, a.jsx)(_.default, { channel: t }, "channel-".concat(t.id)),
              ],
            });
          case I.ChannelTypes.GUILD_ANNOUNCEMENT:
          case I.ChannelTypes.GUILD_TEXT:
          case I.ChannelTypes.GUILD_FORUM:
          case I.ChannelTypes.GUILD_MEDIA:
            return (0, a.jsxs)(s.Fragment, {
              children: [
                y(
                  T,
                  t.type === I.ChannelTypes.GUILD_ANNOUNCEMENT
                    ? N.default.Messages.NEWS_CHANNEL
                    : N.default.Messages.TEXT_CHANNEL
                ),
                (0, a.jsx)(A.default.Title, {
                  level: R,
                  onContextMenu: p,
                  onClick: h,
                  children: x,
                }),
                null != S ? S() : null,
              ],
            });
          case I.ChannelTypes.GUILD_VOICE:
            return (0, a.jsxs)(s.Fragment, {
              children: [
                y(T, N.default.Messages.VOICE_CHANNEL),
                (0, a.jsx)(A.default.Title, {
                  level: R,
                  onContextMenu: p,
                  onClick: h,
                  children: x,
                }),
              ],
            });
          case I.ChannelTypes.GUILD_STAGE_VOICE:
            return (0, a.jsxs)(s.Fragment, {
              children: [
                y(T, N.default.Messages.STAGE_CHANNEL),
                (0, a.jsx)(A.default.Title, {
                  level: R,
                  onContextMenu: p,
                  onClick: h,
                  children: x,
                }),
              ],
            });
          case I.ChannelTypes.ANNOUNCEMENT_THREAD:
          case I.ChannelTypes.PUBLIC_THREAD:
          case I.ChannelTypes.PRIVATE_THREAD:
            let O = null;
            if (!f && null != l) {
              let e = (0, c.default)(l, r);
              O = (0, a.jsxs)(s.Fragment, {
                children: [
                  y(e, N.default.Messages.TEXT_CHANNEL),
                  (0, a.jsx)(A.default.Title, {
                    level: R,
                    onContextMenu: g,
                    onClick: m,
                    className: i(v.parentChannelName, v.cursorPointer),
                    children: (0, d.computeChannelName)(
                      l,
                      E.default,
                      C.default
                    ),
                  }),
                  (0, a.jsx)(A.default.Caret, {}),
                ],
              });
            }
            let D =
              (null == l ? void 0 : l.type) != null &&
              I.ChannelTypesSets.GUILD_THREADS_ONLY.has(l.type);
            return (0, a.jsxs)(s.Fragment, {
              children: [
                O,
                y(D ? null : T, N.default.Messages.THREAD),
                (0, a.jsx)(A.default.Title, {
                  level: R,
                  onContextMenu: p,
                  onClick: h,
                  className: i({ [v.cursorPointer]: f, [v.forumPostTitle]: D }),
                  children: x,
                }),
              ],
            });
          case I.ChannelTypes.GUILD_DIRECTORY:
            let P = (null == r ? void 0 : r.hasFeature(I.GuildFeatures.HUB))
              ? N.default.Messages.HUB_DIRECTORY_CHANNEL_TITLE.format({
                  guildName: n,
                })
              : n;
            return (0, a.jsxs)(s.Fragment, {
              children: [
                null !== T
                  ? (0, a.jsx)(A.default.Icon, {
                      iconClassName: v.icon,
                      icon: T,
                      "aria-hidden": !0,
                    })
                  : null,
                (0, a.jsxs)(A.default.Title, {
                  level: R,
                  onContextMenu: p,
                  onClick: h,
                  children: [
                    null != L
                      ? (0, a.jsxs)(o.HiddenVisually, { children: [L, ":"] })
                      : null,
                    " ",
                    P,
                  ],
                }),
              ],
            });
          default:
            return null;
        }
      }
      let R = e => {
        let { channel: t } = e,
          n = (0, r.useStateFromStores)([E.default], () =>
            E.default.getCurrentUser()
          ),
          l = (0, r.useStateFromStores)([E.default], () =>
            E.default.getUser(t.getRecipientId())
          );
        return (s.useEffect(() => {
          (null == n ? void 0 : n.isStaff()) &&
            (0, h.default)(l.id, l.getAvatarURL(void 0, 80), {
              dispatchWait: !0,
              withMutualGuilds: !0,
              withMutualFriendsCount: !0,
            });
        }, [n, l]),
        t.isDM() &&
          (null == n ? void 0 : n.isStaff()) &&
          (null == l ? void 0 : l.isStaff()))
          ? (0, a.jsx)(m.default, { type: m.default.Types.STAFF_ONLY_DM })
          : null;
      };
      function x(e, t) {
        switch (e.type) {
          case I.ChannelTypes.DM:
            return (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(R, { channel: e }),
                (0, a.jsx)(S.default, { channel: e }, e.id),
              ],
            });
          case I.ChannelTypes.GUILD_ANNOUNCEMENT:
          case I.ChannelTypes.GUILD_TEXT:
          case I.ChannelTypes.GUILD_VOICE:
          case I.ChannelTypes.GUILD_STAGE_VOICE:
          case I.ChannelTypes.GROUP_DM:
            return null != t
              ? (0, a.jsx)(T.default, { channel: e, guild: t }, e.id)
              : null;
          default:
            return null;
        }
      }
      function y(e, t) {
        return (0, a.jsxs)(a.Fragment, {
          children: [
            null !== e &&
              (0, a.jsx)(A.default.Icon, {
                iconClassName: v.icon,
                icon: e,
                "aria-hidden": !0,
              }),
            (0, a.jsx)(o.HiddenVisually, { children: t }),
          ],
        });
      }
      function O(e) {
        let { guild: t, channel: n, caretPosition: s = "left" } = e,
          l = (0, r.useStateFromStores)([p.default], () =>
            p.default.getGuildId()
          );
        return l !== I.FAVORITES || null == t
          ? null
          : (0, a.jsxs)("div", {
              className: v.guildBreadcrumbContainer,
              children: [
                "left" === s &&
                  (0, a.jsx)(A.default.Caret, { direction: "left" }),
                (0, a.jsx)(g.default, {
                  guild: t,
                  size: g.default.Sizes.SMALLER,
                  className: v.guildBreadcrumbIcon,
                  active: !0,
                }),
                (0, a.jsx)(A.default.Title, {
                  onClick: () => {
                    (0, f.transitionToGuild)(t.id, n.id);
                  },
                  className: i(v.parentChannelName, v.cursorPointer),
                  children: t.name,
                }),
                "right" === s &&
                  (0, a.jsx)(A.default.Caret, { direction: "right" }),
              ],
            });
      }
    },
    242757: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          canViewInviteModal: function () {
            return s;
          },
        });
      var a = n("49111");
      function s(e, t, n, s) {
        let l = null != n ? n : t,
          i = null != l && e.can(a.Permissions.CREATE_INSTANT_INVITE, l);
        return (
          i ||
          (null != t && null != t.vanityURLCode) ||
          (null == s ? void 0 : s.invite_code) != null
        );
      }
    },
    631360: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n("446674"),
        s = n("913144"),
        l = n("267567");
      let i = null,
        r = null;
      function o() {
        let e = l.default.mostRecentLurkedGuildId();
        null != e
          ? ((i = e), (r = null))
          : (null != i ? (r = i) : (r = null), (i = null));
      }
      class u extends a.default.Store {
        initialize() {
          this.syncWith([l.default], o);
        }
        shouldShowPopout(e) {
          return r === e;
        }
      }
      u.displayName = "LurkerModePopoutStore";
      var d = new u(s.default);
    },
    88187: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("77078"),
        l = n("782340"),
        i = n("194627"),
        r = e => {
          let { guild: t, onClose: r } = e;
          return (0, a.jsxs)("div", {
            className: i.container,
            children: [
              (0, a.jsx)("img", {
                alt: "",
                className: i.image,
                src: n("984467"),
              }),
              (0, a.jsxs)("div", {
                className: i.content,
                children: [
                  (0, a.jsx)(s.Heading, {
                    variant: "heading-md/semibold",
                    children:
                      l.default.Messages.LURKER_MODE_POPOUT_SUCCESS_HEADER.format(
                        { guild: t.name }
                      ),
                  }),
                  (0, a.jsx)(s.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    children:
                      l.default.Messages.LURKER_MODE_POPOUT_SUCCESS_BODY,
                  }),
                  (0, a.jsx)("div", {
                    className: i.buttonContainer,
                    children: (0, a.jsx)(s.Button, {
                      onClick: r,
                      children:
                        l.default.Messages.LURKER_MODE_POPOUT_SUCCESS_BUTTON,
                    }),
                  }),
                ],
              }),
            ],
          });
        };
    },
    275318: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        }),
        n("222007");
      var a = n("35092"),
        s = n("913144"),
        l = n("203288"),
        i = n("271938"),
        r = n("42203"),
        o = n("299039"),
        u = n("911162");
      let d = new Set();
      class c extends a.default.Store {
        shouldDisplayPrompt(e) {
          return d.has(e);
        }
      }
      c.displayName = "MediaPostSharePromptStore";
      var f = new c(s.default, {
        CONNECTION_OPEN: function () {
          d = new Set();
        },
        MESSAGE_CREATE: function (e) {
          var t;
          if (e.isPushNotification) return;
          let n = e.message;
          if (
            i.default.getId() !==
              (null === (t = n.author) || void 0 === t ? void 0 : t.id) ||
            !(0, u.isFirstMessageIdInMediaPost)(n.id, n.channel_id)
          )
            return;
          let a = r.default.getChannel(n.channel_id);
          if (null == a || null == a.parent_id) return;
          let s = l.default.isChannelGated(a.guild_id, a.parent_id);
          s && d.add(o.default.castMessageIdAsChannelId(e.message.id));
        },
        DISMISS_MEDIA_POST_SHARE_PROMPT: function (e) {
          let { threadId: t } = e;
          d.delete(t);
        },
        LOGOUT: function (e) {
          d.clear();
        },
      });
    },
    911162: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          isFirstMessageIdInMediaPost: function () {
            return l;
          },
        }),
        n("65597");
      var a = n("42203"),
        s = n("299039");
      function l(e, t) {
        if (e !== s.default.castChannelIdAsMessageId(t)) return !1;
        let n = a.default.getChannel(t);
        if (null == n || !n.isForumPost()) return !1;
        let l = a.default.getChannel(n.parent_id);
        return (null == l ? void 0 : l.isMediaChannel()) === !0;
      }
    },
    762147: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var a = n("37983"),
        s = n("884691"),
        l = n("281071"),
        i = n("65597"),
        r = n("77078"),
        o = n("716241"),
        u = n("42203"),
        d = n("191814"),
        c = n("945330"),
        f = n("83900"),
        h = n("404008"),
        C = n("701909"),
        p = n("639440"),
        E = n("673844"),
        m = n("49111"),
        g = n("782340"),
        S = n("618509");
      function _(e) {
        let { threadId: t } = e,
          n = (0, i.default)([u.default], () => u.default.getChannel(t)),
          _ = (0, i.default)([u.default], () =>
            u.default.getChannel(null == n ? void 0 : n.parent_id)
          ),
          T = s.useCallback(() => {
            null != n &&
              null != _ &&
              ((0, o.trackWithMetadata)(
                m.AnalyticEvents.MEDIA_POST_SHARE_PROMPT_CLICKED,
                { media_post_id: n.id }
              ),
              (0, l.copy)((0, h.getChannelLinkToCopy)(n, _)));
          }, [n, _]);
        return (0, a.jsxs)("div", {
          className: S.sharePromptContainer,
          children: [
            (0, a.jsx)(E.default, {}),
            (0, a.jsxs)("div", {
              className: S.sharePromptContent,
              children: [
                (0, a.jsx)(r.Text, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: g.default.Messages.MEDIA_POST_SHARE_PROMPT_TITLE,
                }),
                (0, a.jsx)(r.Text, {
                  variant: "text-sm/medium",
                  color: "text-normal",
                  children:
                    g.default.Messages.MEDIA_POST_SHARE_PROMPT_SUBTITLE.format({
                      helpArticleUrl: C.default.getCreatorSupportArticleURL(
                        m.HelpdeskArticles.MEDIA_CHANNEL
                      ),
                    }),
                }),
                (0, a.jsx)(d.default, { size: 4 }),
                (0, a.jsxs)(r.Button, {
                  className: S.sharePromptCta,
                  innerClassName: S.ctaContent,
                  onClick: T,
                  children: [
                    (0, a.jsx)(f.default, { height: "16px", width: "16px" }),
                    (0, a.jsx)(r.Text, {
                      variant: "text-sm/medium",
                      color: "always-white",
                      children: g.default.Messages.MEDIA_POST_SHARE_PROMPT_CTA,
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)(r.Clickable, {
              className: S.closeButton,
              onClick: () => {
                (0, p.dismissMediaPostSharePrompt)(t);
              },
              "aria-label": g.default.Messages.REMOVE_MESSAGE_ATTACHMENT,
              children: (0, a.jsx)(c.default, {
                height: "15px",
                width: "15px",
              }),
            }),
          ],
        });
      }
    },
    673844: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("75196");
      function l(e) {
        let { width: t = 45, height: n = 46, ...l } = e;
        return (0, a.jsxs)("svg", {
          ...(0, s.default)(l),
          width: t,
          height: n,
          viewBox: "0 0 49 50",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, a.jsx)("path", {
              d: "M29.424 22.375L30.9908 17.9974C31.6183 16.242 32.8917 14.792 34.5514 13.943L46.105 8.03515C47.7328 7.19988 49.3851 9.15697 48.2694 10.6141C47.1536 12.0713 45.1905 13.7662 42.0689 15.0465L45.5563 15.0222C46.9464 15.01 47.4829 16.8268 46.3123 17.5767C44.3247 18.8632 41.3372 19.924 37.4962 18.8144L38.9229 20.1557C39.6728 20.863 39.1119 22.1128 38.0815 22.0397C36.6183 21.9238 34.8746 21.4909 33.6857 20.2106C33.6857 20.2106 32.8992 22.375 30.8201 23.5639C30.0397 24.0089 29.1252 23.2224 29.424 22.375Z",
              fill: "white",
            }),
            (0, a.jsx)("path", {
              d: "M19.5767 46.8513C20.112 45.2515 18.84 43.3838 16.7357 42.6798C14.6314 41.9757 12.4916 42.7018 11.9563 44.3016C11.421 45.9014 12.6929 47.769 14.7973 48.4731C16.9016 49.1772 19.0414 48.4511 19.5767 46.8513Z",
              fill: "#66B9FF",
            }),
            (0, a.jsx)("path", {
              d: "M25.2658 39.551C25.0403 40.2339 24.4915 40.7521 23.7172 41.0996C23.9001 41.6423 23.9184 42.1788 23.7477 42.6848C23.577 43.1909 23.1685 43.6847 22.6198 44.0261C22.7379 44.4329 22.7336 44.8655 22.6076 45.2699C21.9918 47.0929 18.791 47.666 15.456 46.5441C12.121 45.4223 9.90783 43.0384 10.5175 41.2155C10.6648 40.8046 10.9325 40.4476 11.2857 40.1912C11.0662 39.6059 11.0236 39.0206 11.2065 38.478C11.3894 37.9354 11.7186 37.5574 12.1881 37.2342C11.7796 36.4904 11.6576 35.7405 11.8832 35.0637C12.56 33.0457 16.1083 32.4116 19.803 33.6493C23.4978 34.8869 25.9426 37.533 25.2658 39.551Z",
              fill: "#89D6FF",
            }),
            (0, a.jsx)("path", {
              d: "M9.76155 19.8454C11.6089 14.3277 19.0166 11.8341 26.2963 14.279C33.5759 16.7238 37.984 23.1743 36.1366 28.692C34.9294 32.2891 31.3628 34.5998 27.0096 35.0998C26.5376 35.1499 26.0849 35.3144 25.6908 35.5789C25.2966 35.8435 24.9729 36.2001 24.7477 36.6179L23.9855 38.0506C23.1686 39.3737 20.6079 39.7517 17.9557 38.8615C15.1146 37.9104 13.2368 35.868 13.694 34.2584L13.9318 33.0207C14.0215 32.5411 13.9898 32.0467 13.8397 31.5824C13.6895 31.1181 13.4257 30.6988 13.0722 30.3625C9.97494 27.3506 8.56657 23.406 9.76155 19.8454Z",
              fill: "#FFEFA3",
            }),
            (0, a.jsx)("path", {
              d: "M21.0407 42.2577C19.8335 42.2577 18.5166 42.0321 17.2119 41.5932C15.1755 40.9164 13.4013 39.7763 12.3344 38.4716C12.2837 38.4193 12.2444 38.3572 12.2191 38.289C12.1938 38.2207 12.1829 38.148 12.1872 38.0754C12.1915 38.0027 12.2109 37.9318 12.2441 37.8671C12.2773 37.8023 12.3236 37.7452 12.3801 37.6993C12.4366 37.6535 12.502 37.6199 12.5722 37.6006C12.6423 37.5814 12.7158 37.577 12.7877 37.5877C12.8597 37.5984 12.9287 37.624 12.9902 37.6628C13.0518 37.7016 13.1046 37.7528 13.1453 37.8131C14.0903 38.9654 15.6938 39.9836 17.5411 40.6055C19.2848 41.1908 21.0895 41.3615 22.504 41.0749C22.5736 41.0547 22.6467 41.0491 22.7186 41.0586C22.7905 41.068 22.8597 41.0923 22.9217 41.1298C22.9838 41.1674 23.0374 41.2174 23.0791 41.2767C23.1208 41.336 23.1498 41.4033 23.1642 41.4744C23.1786 41.5455 23.1781 41.6188 23.1627 41.6897C23.1473 41.7605 23.1174 41.8275 23.0748 41.8862C23.0322 41.9449 22.9779 41.9941 22.9154 42.0308C22.8528 42.0675 22.7833 42.0908 22.7113 42.0992C22.1613 42.2092 21.6015 42.2623 21.0407 42.2577V42.2577ZM20.8761 45.0745C21.0147 45.062 21.1429 44.9956 21.233 44.8896C21.3231 44.7835 21.3679 44.6463 21.3577 44.5075C21.3453 44.3693 21.2787 44.2417 21.1725 44.1526C21.0662 44.0635 20.9289 44.0201 20.7907 44.0319C19.5043 44.1416 17.9862 43.9283 16.5229 43.4344C14.9377 42.904 13.5233 42.0931 12.5478 41.1481C12.4458 41.0675 12.3175 41.0276 12.1878 41.0362C12.058 41.0448 11.9361 41.1014 11.8457 41.1948C11.7553 41.2882 11.7029 41.4119 11.6985 41.5419C11.6942 41.6718 11.7383 41.7987 11.8222 41.898C12.9075 42.9528 14.4622 43.849 16.1876 44.4282C17.5228 44.8733 18.858 45.105 20.0957 45.105C20.364 45.105 20.62 45.0928 20.8761 45.0745V45.0745Z",
              fill: "#3F96EF",
            }),
            (0, a.jsx)("path", {
              d: "M11.6396 20.8698C13.2065 16.1813 19.4924 14.0657 25.6746 16.1386C31.8568 18.2116 35.5942 23.6865 34.0212 28.375C32.9969 31.4296 29.9729 33.3867 26.2782 33.8074C25.8773 33.851 25.493 33.9914 25.1584 34.2166C24.8238 34.4418 24.549 34.7449 24.3577 35.0999L23.7114 36.3193C23.0163 37.4411 20.8459 37.7642 18.59 37.0082C16.1817 36.1973 14.5844 34.4658 14.9746 33.1001L15.1819 32.0454C15.2562 31.6382 15.2283 31.2189 15.1006 30.8252C14.9729 30.4314 14.7494 30.0756 14.4502 29.7895C11.8164 27.2349 10.6275 23.8877 11.6396 20.8698Z",
              fill: "url(#paint0_linear_859_60333)",
            }),
            (0, a.jsx)("path", {
              d: "M18.8521 39.1186C19.1939 39.1973 19.54 39.2563 19.8886 39.2954C21.5042 33.412 23.2053 28.7905 24.7234 26.0652C28.1254 27.1627 29.3875 26.6993 29.8387 26.1018C30.2898 25.5043 30.1374 24.6691 29.3875 23.5838C28.6376 22.4986 27.9121 22.151 27.0341 22.3096C26.1562 22.4681 25.2111 23.2851 24.2539 24.8032C23.3483 24.4754 22.4627 24.0947 21.6018 23.6631C21.7908 21.6572 21.553 20.3098 20.9007 19.5965C20.5105 19.1697 19.7666 18.749 18.468 19.1575C17.1694 19.566 16.9316 20.2305 16.9255 20.7183C16.9072 21.9072 18.5351 23.1997 20.48 24.2545C19.9617 28.0589 18.1571 33.6985 16.4377 38.2041C16.7412 38.3718 17.0547 38.5205 17.3767 38.6492C18.0412 36.8933 18.9801 34.3021 19.8032 31.6073C20.6263 28.9125 21.1994 26.5896 21.4677 24.7605C22.2298 25.1263 22.998 25.4495 23.7174 25.7177C22.9187 27.1688 22.0895 29.0954 21.2421 31.4549C20.6507 33.0949 19.7971 35.6556 18.8521 39.1186ZM27.217 23.3399C27.3816 23.3095 27.8694 23.2241 28.5278 24.1752C29.0766 24.9739 29.0887 25.3641 29.0095 25.4677C28.8022 25.7421 27.6133 25.8579 25.2782 25.1446C25.9854 24.0655 26.6439 23.4375 27.217 23.3399ZM20.6019 23.1204C18.9862 22.1876 17.962 21.2548 17.9681 20.7366C17.9742 20.4439 18.5412 20.2366 18.785 20.1574C19.0013 20.0837 19.2273 20.0426 19.4557 20.0354C19.8825 20.0354 20.0593 20.2244 20.1263 20.3037C20.5653 20.7793 20.6995 21.7791 20.6019 23.1204Z",
              fill: "#FFC31A",
            }),
            (0, a.jsx)("path", {
              d: "M32.5883 3.43255C32.9256 3.21613 33.2127 2.93007 33.4304 2.59358C33.648 2.25708 33.7912 1.87793 33.8503 1.48156L34.0515 0.115857C34.0573 0.0830328 34.0746 0.0533456 34.1003 0.0321176C34.126 0.0108896 34.1584 -0.000490999 34.1918 1.62532e-05C34.2244 -0.000288277 34.256 0.0113057 34.2807 0.032628C34.3054 0.0539503 34.3215 0.0835394 34.3259 0.115857L34.5271 1.48156C34.5862 1.87793 34.7294 2.25708 34.9471 2.59358C35.1647 2.93007 35.4519 3.21613 35.7892 3.43255L35.966 3.54839C35.9867 3.55964 36.004 3.57641 36.0158 3.59685C36.0277 3.6173 36.0336 3.64062 36.033 3.66423C36.0336 3.68785 36.0277 3.71117 36.0158 3.73162C36.004 3.75206 35.9867 3.76883 35.966 3.78007L35.7892 3.90201C35.4524 4.11903 35.1657 4.40525 34.9481 4.74163C34.7305 5.07802 34.587 5.45688 34.5271 5.85301L34.3259 7.21871C34.3216 7.25162 34.3057 7.28194 34.2812 7.30426C34.2566 7.32659 34.2249 7.33948 34.1918 7.34065V7.34065C34.1579 7.33971 34.1254 7.32703 34.0998 7.30479C34.0742 7.28256 34.0572 7.25213 34.0515 7.21871L33.8503 5.85301C33.7905 5.45688 33.647 5.07802 33.4294 4.74163C33.2118 4.40525 32.9251 4.11903 32.5883 3.90201L32.4115 3.78617C32.3918 3.77413 32.3758 3.75702 32.3651 3.73663C32.3543 3.71624 32.3493 3.69334 32.3505 3.67033V3.67033C32.3493 3.64732 32.3543 3.62442 32.3651 3.60403C32.3758 3.58364 32.3918 3.56653 32.4115 3.55449L32.5883 3.43255Z",
              fill: "#55EF84",
            }),
            (0, a.jsx)("path", {
              d: "M39.3804 39.3185C39.7181 39.1011 40.0054 38.8141 40.2231 38.4765C40.4408 38.139 40.5837 37.7588 40.6424 37.3614L40.8497 35.9957C40.8541 35.9634 40.8702 35.9338 40.8949 35.9125C40.9196 35.8912 40.9512 35.8796 40.9838 35.8799V35.8799C41.0165 35.8796 41.0481 35.8912 41.0728 35.9125C41.0974 35.9338 41.1135 35.9634 41.118 35.9957L41.3253 37.3614C41.3851 37.7584 41.5285 38.1382 41.7461 38.4755C41.9636 38.8129 42.2504 39.1003 42.5873 39.3185L42.7641 39.4283C42.7826 39.4415 42.7977 39.4589 42.8083 39.479C42.8189 39.4991 42.8246 39.5214 42.8251 39.5441V39.5563C42.8246 39.5782 42.8189 39.5996 42.8082 39.6187C42.7976 39.6379 42.7825 39.6541 42.7641 39.666L42.5873 39.7819C42.2498 39.9996 41.9627 40.2867 41.7451 40.6242C41.5274 40.9617 41.3843 41.3418 41.3253 41.739L41.118 43.0986C41.1137 43.1315 41.0978 43.1618 41.0733 43.1841C41.0487 43.2065 41.017 43.2194 40.9838 43.2205V43.2205C40.9507 43.2194 40.919 43.2065 40.8944 43.1841C40.8699 43.1618 40.854 43.1315 40.8497 43.0986L40.6424 41.739C40.5845 41.3414 40.4419 40.9609 40.2241 40.6233C40.0064 40.2856 39.7186 39.9987 39.3804 39.7819L39.2035 39.666C39.1852 39.6541 39.1701 39.6379 39.1594 39.6187C39.1488 39.5996 39.143 39.5782 39.1426 39.5563V39.5441C39.143 39.5214 39.1488 39.4991 39.1594 39.479C39.17 39.4589 39.1851 39.4415 39.2035 39.4283L39.3804 39.3185Z",
              fill: "#FF78B5",
            }),
            (0, a.jsx)("path", {
              d: "M26.5035 8.52263C26.7308 8.37742 26.9245 8.18538 27.0717 7.95934C27.2189 7.73329 27.3162 7.47844 27.3571 7.2118L27.4912 6.29118C27.4953 6.2696 27.5065 6.25004 27.5231 6.23565C27.5397 6.22127 27.5607 6.21291 27.5826 6.21192V6.21192C27.6049 6.21172 27.6265 6.21966 27.6433 6.23426C27.6602 6.24885 27.6711 6.26909 27.6741 6.29118L27.8143 7.2118C27.8541 7.47805 27.9503 7.73273 28.0964 7.95879C28.2426 8.18486 28.4353 8.37709 28.6618 8.52263L28.7776 8.60189C28.7914 8.60981 28.8027 8.62143 28.8103 8.63544C28.8178 8.64944 28.8213 8.66527 28.8203 8.68115C28.8208 8.69613 28.8171 8.71096 28.8096 8.72391C28.802 8.73686 28.7909 8.7474 28.7776 8.75431L28.6618 8.83357C28.4353 8.97911 28.2426 9.17135 28.0964 9.39741C27.9503 9.62348 27.8541 9.87815 27.8143 10.1444L27.6741 11.065C27.6711 11.0871 27.6602 11.1074 27.6433 11.1219C27.6265 11.1365 27.6049 11.1445 27.5826 11.1443V11.1443C27.5607 11.1433 27.5397 11.1349 27.5231 11.1206C27.5065 11.1062 27.4953 11.0866 27.4912 11.065L27.3571 10.1444C27.3162 9.87776 27.2189 9.62291 27.0717 9.39686C26.9245 9.17082 26.7308 8.97878 26.5035 8.83357L26.3876 8.75431C26.3752 8.74646 26.3648 8.73571 26.3573 8.72297C26.3499 8.71023 26.3457 8.69588 26.345 8.68115V8.68115C26.3452 8.66548 26.3492 8.6501 26.3566 8.6363C26.364 8.62251 26.3747 8.6107 26.3876 8.60189L26.5035 8.52263Z",
              fill: "#89D6FF",
            }),
            (0, a.jsx)("path", {
              d: "M0.524839 29.6125C0.752168 29.4673 0.945898 29.2752 1.09309 29.0492C1.24028 28.8231 1.33755 28.5683 1.3784 28.3016L1.51253 27.381C1.51663 27.3594 1.52789 27.3399 1.54448 27.3255C1.56108 27.3111 1.58204 27.3027 1.60399 27.3018V27.3018C1.62627 27.3016 1.64786 27.3095 1.6647 27.3241C1.68154 27.3387 1.69247 27.3589 1.69544 27.381L1.83567 28.3016C1.87543 28.5679 1.9716 28.8226 2.11776 29.0486C2.26391 29.2747 2.45667 29.4669 2.68313 29.6125L2.79897 29.6917C2.81276 29.6997 2.82407 29.7113 2.83161 29.7253C2.83915 29.7393 2.84263 29.7551 2.84165 29.771V29.771C2.84218 29.786 2.83846 29.8008 2.8309 29.8138C2.82335 29.8267 2.81228 29.8372 2.79897 29.8442L2.68313 29.9295C2.45667 30.0751 2.26391 30.2673 2.11776 30.4934C1.9716 30.7194 1.87543 30.9741 1.83567 31.2403L1.69544 32.161C1.69247 32.1831 1.68154 32.2033 1.6647 32.2179C1.64786 32.2325 1.62627 32.2404 1.60399 32.2402C1.58204 32.2392 1.56108 32.2309 1.54448 32.2165C1.52789 32.2021 1.51663 32.1825 1.51253 32.161L1.3784 31.2403C1.33755 30.9737 1.24028 30.7189 1.09309 30.4928C0.945898 30.2668 0.752168 30.0747 0.524839 29.9295L0.408999 29.8503C0.396513 29.8424 0.386111 29.8317 0.378679 29.8189C0.371248 29.8062 0.367008 29.7918 0.366321 29.7771V29.7771C0.365528 29.7604 0.369036 29.7438 0.37651 29.7288C0.383983 29.7139 0.39517 29.7011 0.408999 29.6917L0.524839 29.6125Z",
              fill: "#3541D6",
            }),
            (0, a.jsx)("path", {
              d: "M14.5781 21.0834L14.8647 16.6449C14.9792 14.8659 14.41 13.1103 13.2734 11.7369L5.37186 2.17094C4.25003 0.823536 2.06735 1.91488 2.49413 3.6159C2.92091 5.31693 3.99396 7.55448 6.2559 9.8591L3.20137 8.51778C1.98809 7.98126 0.829688 9.37135 1.57351 10.4749C2.83556 12.3527 5.05482 14.4135 8.84707 14.8951L7.08508 15.5353C6.15835 15.8706 6.17664 17.1814 7.10946 17.5046C8.43858 17.9618 10.1335 18.2423 11.6638 17.5655C11.6638 17.5655 11.5297 19.7604 12.9076 21.5956C13.4258 22.2845 14.5233 21.9431 14.5781 21.0834Z",
              fill: "white",
            }),
            (0, a.jsx)("path", {
              d: "M32.7407 25.4545C32.9236 27.1067 32.9663 28.3992 33.6369 28.3261C34.3076 28.2529 35.3441 26.8384 35.1611 25.1862C34.9782 23.5339 33.643 22.2658 32.9724 22.339C32.3017 22.4121 32.5578 23.8022 32.7407 25.4545Z",
              fill: "white",
            }),
            (0, a.jsx)("defs", {
              children: (0, a.jsxs)("linearGradient", {
                id: "paint0_linear_859_60333",
                x1: "34.2419",
                y1: "5.70262",
                x2: "5.61649",
                y2: "53.1558",
                gradientUnits: "userSpaceOnUse",
                children: [
                  (0, a.jsx)("stop", {
                    offset: "0.14",
                    "stop-color": "#FFE45C",
                  }),
                  (0, a.jsx)("stop", {
                    offset: "0.83",
                    "stop-color": "#FFC31A",
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    16108: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          acceptMessageRequest: function () {
            return o;
          },
          clearMessageRequestState: function () {
            return u;
          },
          markAsMessageRequest: function () {
            return d;
          },
          rejectMessageRequest: function () {
            return c;
          },
          rejectMessageRequestBatch: function () {
            return f;
          },
          fetchUserCountryCode: function () {
            return h;
          },
        });
      var a = n("872717"),
        s = n("913144"),
        l = n("437822"),
        i = n("773163"),
        r = n("49111");
      async function o(e) {
        await a.default.put({
          url: r.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
          body: { consent_status: i.MessageRequestConsentStatusTypes.ACCEPTED },
        }),
          s.default.dispatch({
            type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
            channelId: e,
          });
      }
      function u(e) {
        return a.default.put({
          url: r.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
          body: {
            consent_status: i.MessageRequestConsentStatusTypes.UNSPECIFIED,
          },
        });
      }
      function d(e) {
        return a.default.put({
          url: r.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
          body: { consent_status: i.MessageRequestConsentStatusTypes.PENDING },
        });
      }
      function c(e) {
        return a.default.delete({
          url: r.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
        });
      }
      function f(e) {
        return a.default.put({
          url: r.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
          body: { channel_ids: e },
        });
      }
      function h() {
        l.default.getLocationMetadata();
      }
    },
    973199: function (e, t, n) {
      "use strict";
      var a, s, l, i;
      n.r(t),
        n.d(t, {
          MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL: function () {
            return r;
          },
          MessageRequestAnalyticsAction: function () {
            return a;
          },
          LIST_ROW_HEIGHT: function () {
            return o;
          },
          LIST_SECTION_HEIGHT: function () {
            return u;
          },
          BATCH_REJECT_LIMIT: function () {
            return d;
          },
          MessageRequestSections: function () {
            return s;
          },
        });
      let r = "Message Request Accept Confirmation";
      ((l = a || (a = {}))[(l.ACCEPT = 0)] = "ACCEPT"),
        (l[(l.REJECT = 1)] = "REJECT"),
        (l[(l.ACCEPT_CONFIRMATION_PROMPT = 2)] = "ACCEPT_CONFIRMATION_PROMPT"),
        (l[(l.DISMISS_CONFIRMATION_PROMPT = 3)] =
          "DISMISS_CONFIRMATION_PROMPT"),
        (l[(l.ACCEPT_HAM_CONFIRMATION_PROMPT = 4)] =
          "ACCEPT_HAM_CONFIRMATION_PROMPT"),
        (l[(l.DISMISS_HAM_CONFIRMATION_PROMPT = 5)] =
          "DISMISS_HAM_CONFIRMATION_PROMPT");
      let o = 73,
        u = 26,
        d = 100;
      ((i = s || (s = {})).REQUESTS = "REQUESTS"), (i.SPAM = "SPAM");
    },
    997011: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          openAcceptMessageRequestConfirmModal: function () {
            return o;
          },
          onMarkAsNotSpamConfirmationModal: function () {
            return u;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("77078"),
        l = n("599110"),
        i = n("973199"),
        r = n("49111");
      function o(e) {
        let { channelId: t, onConfirm: o, onCancel: u } = e;
        l.default.track(r.AnalyticEvents.OPEN_MODAL, {
          type: i.MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL,
          channel_id: t,
        }),
          (0, s.openModalLazy)(async () => {
            let { default: e } = await n.el("950535").then(n.bind(n, "950535"));
            return t => (0, a.jsx)(e, { onConfirm: o, onDismiss: u, ...t });
          });
      }
      function u(e) {
        let { onConfirm: t, onCancel: l } = e;
        (0, s.openModalLazy)(async () => {
          let { default: e } = await n.el("909971").then(n.bind(n, "909971"));
          return n => (0, a.jsx)(e, { onConfirm: t, onDismiss: l, ...n });
        });
      }
    },
    83722: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        }),
        n("222007");
      var a = n("446674"),
        s = n("913144"),
        l = n("692038"),
        i = n("697218"),
        r = n("288518"),
        o = n("486503");
      let u = {},
        d = new Set();
      function c(e) {
        return r.default.isMessageRequest(e) || o.default.isSpam(e);
      }
      function f(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!c(e) || (null != t && e !== (null == t ? void 0 : t.channel_id)))
          return;
        let a = null == t ? null : (0, l.createMessageRecord)(t);
        u[e] = { loaded: !0, error: n, message: a };
      }
      class h extends a.default.Store {
        initialize() {
          this.waitFor(r.default, o.default, i.default);
        }
        shouldLoadMessageRequestPreview(e) {
          return !d.has(e);
        }
        getMessageRequestPreview(e) {
          return (
            !(e in u) && (u[e] = { loaded: !1, error: !1, message: null }), u[e]
          );
        }
      }
      h.displayName = "MessageRequestPreviewStore";
      var C = new h(s.default, {
        CONNECTION_OPEN: function () {
          (u = {}), d.clear();
        },
        CHANNEL_CREATE: function (e) {
          let { channel: t } = e;
          c(t.id) && d.add(t.id);
        },
        CHANNEL_UPDATES: function (e) {
          let { channels: t } = e;
          for (let e of t) !c(e.id) && (d.delete(e.id), delete u[e.id]);
        },
        CHANNEL_DELETE: function (e) {
          let { channel: t } = e;
          d.delete(t.id), delete u[t.id];
        },
        MESSAGE_CREATE: function (e) {
          if (e.isPushNotification) return !1;
          f(e.message.channel_id, e.message);
        },
        MESSAGE_UPDATE: function (e) {
          let t = e.message.channel_id;
          if (null == t) return !1;
          let n = u[t];
          if (null == n || null == n.message) return !1;
          u[t] = {
            ...n,
            message: (0, l.updateMessageRecord)(n.message, e.message),
          };
        },
        MESSAGE_DELETE: function (e) {
          if (!c(e.channelId)) return !1;
          u[e.channelId] = { loaded: !0, error: !1, message: null };
        },
        LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: function (e) {
          let { requestedChannelIds: t, supplementalData: n } = e,
            a = new Set([...t]);
          for (let e of (n.forEach(e => {
            f(e.channel_id, e.message_preview), a.delete(e.channel_id);
          }),
          Array.from(a)))
            f(e, null);
        },
        LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR: function (e) {
          let { requestedChannelIds: t } = e;
          t.forEach(e => {
            f(e, null, !0);
          });
        },
      });
    },
    773163: function (e, t, n) {
      "use strict";
      var a, s;
      n.r(t),
        n.d(t, {
          MessageRequestConsentStatusTypes: function () {
            return a;
          },
        }),
        ((s = a || (a = {}))[(s.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (s[(s.PENDING = 1)] = "PENDING"),
        (s[(s.ACCEPTED = 2)] = "ACCEPTED"),
        (s[(s.REJECTED = 3)] = "REJECTED");
    },
    674015: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useIsMessageRequest: function () {
            return l;
          },
        });
      var a = n("446674"),
        s = n("288518");
      function l(e) {
        return (0, a.useStateFromStores)(
          [s.default],
          () => s.default.isMessageRequest(e),
          [e]
        );
      }
    },
    228430: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useIsSpamMessageRequest: function () {
            return l;
          },
        });
      var a = n("446674"),
        s = n("486503");
      function l(e) {
        return (0, a.useStateFromStores)(
          [s.default],
          () => s.default.isSpam(e),
          [e]
        );
      }
    },
    916650: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        }),
        n("222007");
      var a = n("884691"),
        s = n("446674"),
        l = n("697218"),
        i = n("16108"),
        r = n("288518");
      let o = new Set(["GB"]);
      function u() {
        let e = (0, s.useStateFromStores)([r.default], () =>
            r.default.getUserCountryCode()
          ),
          t =
            !1 ===
            (0, s.useStateFromStores)([l.default], () => {
              var e;
              return null === (e = l.default.getCurrentUser()) || void 0 === e
                ? void 0
                : e.nsfwAllowed;
            });
        return (
          a.useEffect(() => {
            null == e && (0, i.fetchUserCountryCode)();
          }, [e]),
          (!!(null != e && o.has(e.alpha2)) && !!t) || !1
        );
      }
    },
    7643: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useMessageRequestActions: function () {
            return m;
          },
        }),
        n("222007");
      var a = n("884691"),
        s = n("767590"),
        l = n.n(s),
        i = n("448993"),
        r = n("377114"),
        o = n("713135"),
        u = n("506885"),
        d = n("845579"),
        c = n("599110"),
        f = n("16108"),
        h = n("997011"),
        C = n("541881"),
        p = n("973199"),
        E = n("49111");
      function m(e) {
        let { user: t, onAcceptSuccess: n, onRejectSuccess: s, onError: m } = e,
          g = (0, C.default)(),
          [S, _] = a.useState(!1),
          [T, A] = a.useState(!1),
          [M, I] = a.useState(!1),
          [N, v] = a.useState(!1),
          [L, R] = a.useState(!1),
          x = S || T || M,
          y = a.useCallback(
            async e => {
              if (!x) {
                _(!0);
                try {
                  await (0, f.acceptMessageRequest)(e), v(!0), null == n || n();
                } catch (t) {
                  let e = new i.APIError(t);
                  null == m || m(e);
                } finally {
                  _(!1);
                }
              }
            },
            [x, n, m]
          ),
          O = a.useCallback(
            async e => {
              if (!x) {
                A(!0);
                try {
                  await (0, f.rejectMessageRequest)(e), R(!0), null == s || s();
                } catch (t) {
                  let e = new i.APIError(t);
                  null == m || m(e);
                } finally {
                  A(!1);
                }
              }
            },
            [x, s, m]
          ),
          D = a.useCallback(
            async e => {
              if (x) return;
              A(!0);
              let t = l(e, p.BATCH_REJECT_LIMIT);
              try {
                for (let e of t) await (0, f.rejectMessageRequestBatch)(e);
                R(!0), null == s || s();
              } catch (t) {
                let e = new i.APIError(t);
                null == m || m(e);
              } finally {
                A(!1);
              }
            },
            [x, s, m]
          ),
          P = a.useCallback(
            async e => {
              if (x) return;
              if (null != t && null == o.default.getMutualGuilds(t.id)) {
                I(!0);
                try {
                  await (0, u.default)(t.id, t.getAvatarURL(void 0, 80), {
                    withMutualGuilds: !0,
                    withMutualFriendsCount: !0,
                  });
                } catch (e) {
                } finally {
                  I(!1);
                }
              }
              let n = async () => {
                var n;
                let a =
                  null != t
                    ? null === (n = o.default.getMutualGuilds(t.id)) ||
                      void 0 === n
                      ? void 0
                      : n.map(e => e.guild.id)
                    : [];
                c.default.track(E.AnalyticEvents.MESSAGE_REQUEST_ACTION, {
                  action:
                    p.MessageRequestAnalyticsAction.ACCEPT_CONFIRMATION_PROMPT,
                  channel_id: e,
                  mutual_guild_ids: null != a ? a : [],
                  other_user_id: null == t ? void 0 : t.id,
                }),
                  await y(e);
              };
              (0, h.openAcceptMessageRequestConfirmModal)({
                channelId: e,
                onConfirm: n,
                onCancel: () => {
                  var n;
                  let a =
                    null != t
                      ? null === (n = o.default.getMutualGuilds(t.id)) ||
                        void 0 === n
                        ? void 0
                        : n.map(e => e.guild.id)
                      : [];
                  c.default.track(E.AnalyticEvents.MESSAGE_REQUEST_ACTION, {
                    action:
                      p.MessageRequestAnalyticsAction
                        .DISMISS_CONFIRMATION_PROMPT,
                    channel_id: e,
                    mutual_guild_ids: null != a ? a : [],
                    other_user_id: null == t ? void 0 : t.id,
                  });
                },
              });
            },
            [y, x, t]
          ),
          j = a.useCallback(
            (e, t, n) => {
              let a = (a, s) => {
                  s && d.NonSpamRetrainingOptIn.updateSetting(a),
                    a && null != t && (0, r.submitHamReportForFirstDM)(t),
                    y(e.id),
                    c.default.track(E.AnalyticEvents.MESSAGE_REQUEST_ACTION, {
                      action:
                        p.MessageRequestAnalyticsAction
                          .ACCEPT_HAM_CONFIRMATION_PROMPT,
                      channel_id: e.id,
                      is_dont_show_again_checked: s,
                      non_spam_retraining_opt_in: a,
                    }),
                    null != n && n();
                },
                s = d.NonSpamRetrainingOptIn.getSetting();
              null == s
                ? (0, h.onMarkAsNotSpamConfirmationModal)({
                    channel: e,
                    onConfirm: a,
                    onCancel: () => {
                      c.default.track(E.AnalyticEvents.MESSAGE_REQUEST_ACTION, {
                        action:
                          p.MessageRequestAnalyticsAction
                            .DISMISS_HAM_CONFIRMATION_PROMPT,
                        channel_id: e.id,
                      });
                    },
                  })
                : a(s);
            },
            [y]
          );
        return {
          acceptMessageRequest: g ? P : y,
          rejectMessageRequest: O,
          rejectAll: D,
          markAsNotSpam: j,
          isAcceptLoading: S,
          isRejectLoading: T,
          isUserProfileLoading: M,
          isOptimisticAccepted: N,
          isOptimisticRejected: L,
        };
      }
    },
    389495: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useMessageRequestPreview: function () {
            return C;
          },
        }),
        n("222007");
      var a = n("917351"),
        s = n.n(a),
        l = n("446674"),
        i = n("872717"),
        r = n("913144"),
        o = n("377253"),
        u = n("660478"),
        d = n("83722"),
        c = n("49111");
      let f = new Set(),
        h = null;
      function C(e) {
        let { id: t } = e,
          {
            loaded: n,
            message: a,
            error: s,
          } = (0, l.useStateFromStoresObject)(
            [d.default, o.default, u.default],
            () => {
              let e = u.default.lastMessageId(t),
                n = d.default.getMessageRequestPreview(t);
              if (null == n.message && null != e) {
                let n = o.default.getMessage(t, e);
                if (null != n) return { loaded: !0, error: !1, message: n };
              }
              return n;
            },
            [t]
          ),
          i = (0, l.useStateFromStores)(
            [d.default],
            () => d.default.shouldLoadMessageRequestPreview(t),
            [t]
          );
        return (
          !n &&
            null == a &&
            i &&
            (function (e) {
              f.add(e), null == h && (h = setTimeout(p, 0));
            })(t),
          { loaded: n, error: s, message: a }
        );
      }
      async function p() {
        try {
          for (; !s.isEmpty(f); ) await E();
        } finally {
          h = null;
        }
      }
      async function E() {
        let e = Array.from(f).slice(0, 25);
        try {
          let t = await i.default.get({
            url: c.Endpoints.MESSAGE_REQUESTS_SUPPLEMENTAL_DATA,
            query: { channel_ids: e },
          });
          r.default.dispatch({
            type: "LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS",
            requestedChannelIds: e,
            supplementalData: t.body,
          });
        } catch (t) {
          r.default.dispatch({
            type: "LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR",
            requestedChannelIds: e,
          });
        } finally {
          for (let t of e) f.delete(t);
        }
      }
    },
    785770: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useMessageRequestSidebarState: function () {
            return i;
          },
        });
      var a = n("446674"),
        s = n("582713"),
        l = n("982108");
      function i() {
        let e = (0, a.useStateFromStores)([l.default], () =>
            l.default.getSidebarState(l.MESSAGE_REQUESTS_BASE_CHANNEL_ID)
          ),
          t =
            (null == e ? void 0 : e.type) === s.SidebarType.VIEW_MESSAGE_REQUEST
              ? e
              : null,
          n = null == t ? void 0 : t.channelId,
          i =
            (null == t ? void 0 : t.details) != null &&
            t.details.type === s.SidebarOpenDetailsType.MESSAGE_REQUEST &&
            t.details.hasSingleMessageRequest;
        return { channelId: n, hasSingleMessageRequest: i };
      }
    },
    541881: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var a = n("916650");
      function s() {
        let e = (0, a.default)();
        return e;
      }
    },
    28424: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("77078"),
        l = n("450911"),
        i = n("377114"),
        r = n("949067"),
        o = n("389495"),
        u = n("782340");
      function d(e) {
        let {
            channel: t,
            buttonSize: n = s.ButtonSizes.TINY,
            className: d,
            onReportClick: c,
            onReportSubmit: f,
            onMouseEnter: h,
            onMouseLeave: C,
          } = e,
          { error: p, loaded: E } = (0, o.useMessageRequestPreview)(t),
          m = t.isDM() ? t.getRecipientId() : null,
          g = (0, r.useLongestChannelMessageBeforeReply)(t.id, m);
        if (null == g && (E || p)) return null;
        let S = () => {
          null == f || f(), l.default.closePrivateChannel(t.id);
        };
        return (0, a.jsx)(s.Button, {
          className: d,
          size: n,
          color: s.Button.Colors.RED,
          disabled: null == g,
          onClick: e => {
            e.stopPropagation(),
              null == c || c(),
              null != g && (0, i.showReportModalForFirstDM)(g, S);
          },
          onMouseEnter: h,
          onMouseLeave: C,
          children: u.default.Messages.REPORT,
        });
      }
    },
    321933: function (e, t, n) {
      "use strict";
      var a, s;
      n.r(t),
        n.d(t, {
          ChatOverlays: function () {
            return a;
          },
        }),
        ((s = a || (a = {})).NEW_MESSAGES = "new_messages"),
        (s.OPT_IN_CHANNEL = "opt_in_channel"),
        (s.SUMMARIES = "summaries");
    },
    734570: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          handleLegacyCommands: function () {
            return m;
          },
        }),
        n("222007"),
        n("781738");
      var a = n("404828"),
        s = n.n(a),
        l = n("223468"),
        i = n("819689"),
        r = n("716241"),
        o = n("385976"),
        u = n("166257"),
        d = n("432173"),
        c = n("845579"),
        f = n("377253"),
        h = n("49111");
      let C = /\\([*?+/])/g,
        p = {
          tts: { action: () => ({ tts: c.EnableTTSCommand.getSetting() }) },
          me: { action: e => ({ content: "_".concat(e, "_") }) },
          tableflip: {
            action: e => ({
              content: "".concat(e, " (╯\xb0□\xb0)╯︵ ┻━┻").trim(),
            }),
          },
          unflip: {
            action: e => ({
              content: "".concat(e, " ┬─┬ノ( \xba _ \xbaノ)").trim(),
            }),
          },
          shrug: {
            action: e => ({
              content: "".concat(e, " \xaf\\_(ツ)_/\xaf").trim(),
            }),
          },
          nick: {
            action(e, t) {
              let { channel: n } = t;
              if (null != n.guild_id)
                return (
                  l.default.changeNickname(n.guild_id, n.id, h.ME, e),
                  { content: "" }
                );
            },
          },
          reaction: {
            match: s.anyScopeRegex(/^\+:(.+?): *$/),
            action(e, t) {
              let { isEdit: n, channel: a } = t;
              if (n || !f.default.hasPresent(a.id)) return;
              let s = f.default.getMessages(a.id).last();
              if (null == s || null == s.id) return;
              let l = o.default
                .getDisambiguatedEmojiContext(a.guild_id)
                .getByName(e.trim().slice(2, -1));
              if (null != l)
                return (
                  (0, u.addReaction)(a.id, s.id, (0, d.toReactionEmoji)(l)),
                  { content: "" }
                );
            },
          },
          searchReplace: {
            match: s.anyScopeRegex(/^s\/((?:.+?)[^\\]|.)\/(.*)/),
            action(e, t) {
              var n;
              let { isEdit: a, channel: s } = t;
              if (a) return;
              let l = f.default.getLastEditableMessage(s.id);
              if (null == l || null == l.id) return { content: "" };
              let [, r, o] = Array.from(
                null !== (n = e.match(this.match.regex)) && void 0 !== n
                  ? n
                  : []
              );
              (r = r.replace(C, (e, t) => t)), (o = o.replace(C, (e, t) => t));
              let u = l.content.replace(r, o);
              return (
                (null == u || "" === u) && 0 === l.attachments.length
                  ? i.default.deleteMessage(s.id, l.id)
                  : e !== l.content &&
                    i.default.editMessage(s.id, l.id, { content: u }),
                { content: "" }
              );
            },
          },
          spoiler: {
            action: e => ({
              content: (0, h.MARKDOWN_SPOILER_WRAPPER)(e).trim(),
            }),
          },
        };
      function E(e, t, n, a) {
        return (
          r.default.trackWithMetadata(h.AnalyticEvents.SLASH_COMMAND_USED, {
            command: e,
          }),
          t.action(n, a)
        );
      }
      function m(e, t) {
        for (let a in p) {
          let s = p[a];
          if (null != s.match) {
            var n;
            if (
              null === (n = s.match.regex) || void 0 === n ? void 0 : n.test(e)
            )
              return E(a, s, e, t);
            continue;
          }
          if (c.UseLegacyChatInput.getSetting() && "/" === e[0]) {
            let n = e.split(" "),
              l = n[0].slice(1);
            if (a === l && null != s.action)
              return E(a, s, n.slice(1).join(" "), t);
          }
        }
      }
      Object.setPrototypeOf(p, null);
    },
    51714: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        }),
        n("424973"),
        n("222007");
      var a = n("637612"),
        s = n("336696"),
        l = n("888400"),
        i = n("299039"),
        r = n("459776"),
        o = n("654017"),
        u = n("49111");
      function d(e) {
        let t,
          n,
          d,
          {
            channel: c,
            messages: f,
            oldestUnreadMessageId: h,
            treatSpam: C,
            summaries: p,
            selectedSummary: E,
          } = e,
          m = [],
          g = !1,
          S = null != h ? i.default.extractTimestamp(h) : null,
          _ = null;
        return (
          f.forEach(e => {
            var s, T, A, M, I, N, v, L;
            if (null != p && p.length > 0) {
              let t = i.default.extractTimestamp(e.id);
              for (
                let e = 0;
                (s = e < (null == p ? void 0 : p.length)), s;
                e++
              ) {
                if (null == p[e]) continue;
                let n = i.default.extractTimestamp(p[e].startId),
                  a = i.default.extractTimestamp(p[e].endId);
                if (t >= n && t <= a) {
                  if (_ === p[e].id) break;
                  m.push({
                    type: u.ChannelStreamTypes.DIVIDER,
                    content: p[e].topic,
                    contentKey: p[e].id,
                  }),
                    (_ = p[e].id);
                  break;
                }
              }
            }
            let R = (0, l.dateFormat)(e.timestamp, "LL");
            R !== t &&
              null == _ &&
              (m.push({
                type: u.ChannelStreamTypes.DIVIDER,
                content: R,
                contentKey: R,
              }),
              (t = R));
            let x = m[m.length - 1],
              y = null,
              O = (0, o.isSpam)(e);
            g = g || O;
            let D = (function (e, t, n) {
              if (a.MessageTypesSets.NON_COLLAPSIBLE.has(t.type));
              else if (t.blocked)
                return u.ChannelStreamTypes.MESSAGE_GROUP_BLOCKED;
              else if ((0, o.isSpamSupported)(e) && n)
                return u.ChannelStreamTypes.MESSAGE_GROUP_SPAMMER;
              return null;
            })(c, e, O && C);
            if (null !== D) {
              let t, n;
              [y, x] =
                ((T = m),
                (A = e),
                (M = D),
                (n = I = x),
                null == I || I.type !== M
                  ? ((t = { type: M, content: [], key: A.id }), T.push(t))
                  : (n = (t = I).content[t.content.length - 1]),
                [t, n]);
            }
            if (h === e.id && null != S) {
              if (null != x && x.type === u.ChannelStreamTypes.DIVIDER)
                (x.unreadId = e.id), (S = null);
              else if (null !== y) {
                (N = y),
                  (v = c),
                  (L = e).isFirstMessageInForumPost(v) ||
                    N.content.push({
                      type: u.ChannelStreamTypes.DIVIDER,
                      unreadId: L.id,
                    }),
                  (N.hasUnread = !0),
                  (S = null);
              } else
                !e.isFirstMessageInForumPost(c) &&
                  m.push({
                    type: u.ChannelStreamTypes.DIVIDER,
                    unreadId: e.id,
                  }),
                  (S = null);
            } else
              null != S &&
                i.default.extractTimestamp(e.id) > S &&
                (!e.isFirstMessageInForumPost(c) &&
                  m.push({
                    type: u.ChannelStreamTypes.DIVIDER,
                    unreadId: e.id,
                  }),
                (S = null));
            let P =
              (null == x ? void 0 : x.type) === u.ChannelStreamTypes.MESSAGE
                ? d
                : x;
            (0, r.isNewGroupItem)(c, P, e) && (n = e.id);
            let j = {
              type:
                e.type === u.MessageTypes.THREAD_STARTER_MESSAGE
                  ? u.ChannelStreamTypes.THREAD_STARTER_MESSAGE
                  : u.ChannelStreamTypes.MESSAGE,
              content: e,
              groupId: n,
            };
            n === e.id && (d = j);
            let { jumpSequenceId: b, jumpFlash: H, jumpTargetId: F } = f;
            H && e.id === F && null != b && (j.flashKey = b),
              f.jumpTargetId === e.id && (j.jumpTarget = !0),
              null != E &&
                e.id === E.startId &&
                E.count > 1 &&
                m.push({
                  type: u.ChannelStreamTypes.DIVIDER,
                  content: E.topic,
                  contentKey: E.startId,
                  isSummaryDivider: !0,
                }),
              null !== y
                ? (y.content.push(j), j.jumpTarget && (y.hasJumpTarget = !0))
                : m.push(j),
              e.isFirstMessageInForumPost(c) &&
                m.push({ type: u.ChannelStreamTypes.FORUM_POST_ACTION_BAR }),
              null != E &&
                e.id === E.endId &&
                E.count > 1 &&
                m.push({
                  type: u.ChannelStreamTypes.DIVIDER,
                  contentKey: E.endId,
                  isSummaryDivider: !0,
                });
          }),
          g &&
            (0, o.isSpamSupported)(c) &&
            s.default.trackExposure({ location: "416cc9_1" }),
          m
        );
      }
    },
    154864: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          MESSAGE_ID_PREFIX: function () {
            return a;
          },
          getMessageDOMId: function () {
            return s;
          },
        });
      let a = "chat-messages";
      function s(e, t) {
        return "".concat(a, "-").concat(e, "-").concat(t);
      }
    },
    921450: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var a = n("65597"),
        s = n("191225"),
        l = n("420444"),
        i = n("42203"),
        r = n("321933"),
        o = n("272505");
      let u = "no_text_activity",
        d = {
          [u]: [
            r.ChatOverlays.NEW_MESSAGES,
            r.ChatOverlays.OPT_IN_CHANNEL,
            r.ChatOverlays.SUMMARIES,
          ],
          [o.ActivityPanelModes.DISCONNECTED]: [
            r.ChatOverlays.NEW_MESSAGES,
            r.ChatOverlays.OPT_IN_CHANNEL,
            r.ChatOverlays.SUMMARIES,
          ],
          [o.ActivityPanelModes.LAUNCHING_WITH_ORIENTATION_CHANGE]: [
            r.ChatOverlays.NEW_MESSAGES,
            r.ChatOverlays.OPT_IN_CHANNEL,
            r.ChatOverlays.SUMMARIES,
          ],
          [o.ActivityPanelModes.PANEL]: [],
          [o.ActivityPanelModes.PIP]: [
            r.ChatOverlays.NEW_MESSAGES,
            r.ChatOverlays.OPT_IN_CHANNEL,
            r.ChatOverlays.SUMMARIES,
          ],
        };
      function c() {
        let e = (0, a.default)([s.default], () =>
            s.default.getCurrentEmbeddedActivity()
          ),
          t = (0, a.default)([s.default], () =>
            s.default.getActivityPanelMode()
          );
        return void 0 === e ||
          (0, l.default)(null == e ? void 0 : e.channelId, i.default)
          ? d[u]
          : d[t];
      }
    },
    61505: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useIsRelationshipTypeSpamReportable: function () {
            return i;
          },
        });
      var a = n("446674"),
        s = n("27618"),
        l = n("49111");
      function i(e) {
        let t = (0, a.useStateFromStores)(
          [s.default],
          () => s.default.getRelationshipType(e),
          [e]
        );
        return (
          t === l.RelationshipTypes.NONE ||
          t === l.RelationshipTypes.BLOCKED ||
          t === l.RelationshipTypes.PENDING_INCOMING
        );
      }
    },
    949067: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useLongestChannelMessageBeforeReply: function () {
            return l;
          },
        }),
        n("222007");
      var a = n("446674"),
        s = n("377253");
      function l(e, t) {
        return (0, a.useStateFromStores)(
          [s.default],
          () => {
            if (null == t) return;
            let n = s.default.getMessages(e),
              a = n.findOldest(e => e.author.id === t);
            if (null == a) return;
            let l = n.toArray();
            for (let e of l) {
              if (e.author.id !== t) break;
              e.content.length > (null == a ? void 0 : a.content.length) &&
                (a = e);
            }
            return a;
          },
          [e, t]
        );
      }
    },
    366757: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useShowConvoStarterInDM: function () {
            return u;
          },
        });
      var a = n("446674"),
        s = n("288518"),
        l = n("933152"),
        i = n("377253"),
        r = n("27618"),
        o = n("49111");
      function u(e) {
        let t =
            e.isDM() && !e.isSystemDM() && !e.rawRecipients.some(e => e.bot),
          n = t ? e.getRecipientId() : null,
          u = (0, l.useStrangerDangerWarning)(e.id, "dm_convo_starter");
        return (0, a.useStateFromStores)(
          [i.default, s.default, r.default],
          () => {
            if (
              null != u ||
              !t ||
              s.default.isMessageRequest(e.id) ||
              (null != n &&
                r.default.getRelationshipType(n) ===
                  o.RelationshipTypes.BLOCKED)
            )
              return !1;
            let a = i.default.getMessages(e.id),
              l =
                a.ready && !a.hasMoreBefore && !a.hasMoreAfter && a.length < 25;
            return l && !i.default.hasCurrentUserSentMessage(e.id);
          },
          [u, t, e.id, n]
        );
      }
    },
    738352: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        }),
        n("222007");
      var a = n("37983"),
        s = n("884691"),
        l = n("907002"),
        i = n("77078");
      function r(e) {
        let { children: t, className: n, flashKey: r } = e,
          o = (0, i.useToken)(
            i.tokens.colors.BACKGROUND_MESSAGE_HIGHLIGHT
          ).spring({ opacity: 1 }),
          u = (0, i.useToken)(
            i.tokens.colors.BACKGROUND_MESSAGE_HIGHLIGHT
          ).spring({ opacity: 0 }),
          [d, c] = (0, l.useSpring)(() => ({
            immediate: !0,
            from: { backgroundColor: o },
          }));
        return (
          s.useEffect(() => {
            c({ reset: !0, immediate: !0, to: { backgroundColor: o } }),
              c({ delay: 1e3, immediate: !1, to: { backgroundColor: u } });
          }, [r, c]),
          (0, a.jsx)(l.animated.div, { style: d, className: n, children: t })
        );
      }
    },
    556118: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getElementFromMessage: function () {
            return K;
          },
          ThreadStarterChatMessage: function () {
            return Y;
          },
          default: function () {
            return X;
          },
        }),
        n("702976");
      var a = n("37983"),
        s = n("884691"),
        l = n("414456"),
        i = n.n(l),
        r = n("627445"),
        o = n.n(r),
        u = n("974667"),
        d = n("446674"),
        c = n("77078"),
        f = n("206230"),
        h = n("619259"),
        C = n("405645"),
        p = n("634807"),
        E = n("685841"),
        m = n("256572"),
        g = n("393414"),
        S = n("845579"),
        _ = n("42203"),
        T = n("836417"),
        A = n("780571"),
        M = n("568734"),
        I = n("299039"),
        N = n("154864"),
        v = n("913491"),
        L = n("574073"),
        R = n("738352"),
        x = n("865343"),
        y = n("380986"),
        O = n("85470"),
        D = n("969706"),
        P = n("39331"),
        j = n("68480"),
        b = n("115859"),
        H = n("922177"),
        F = n("789790"),
        U = n("227984"),
        k = n("82080"),
        G = n("535993"),
        B = n("144553"),
        w = n("862451"),
        V = n("894488"),
        W = n("49111"),
        Z = n("782340"),
        z = n("5762");
      function K(e, t, n) {
        return e.getElementById((0, N.getMessageDOMId)(t, n));
      }
      function Y(e) {
        var t;
        let {
          id: n,
          message: s,
          message: { messageReference: l },
          compact: r = !1,
          className: c,
        } = e;
        o(
          s.type === W.MessageTypes.THREAD_STARTER_MESSAGE,
          "Message must be a thread starter message"
        );
        let { ...f } = (0, u.useListItem)(
            null !== (t = e.id) && void 0 !== t ? t : ""
          ),
          h = (0, d.useStateFromStores)([m.default], () =>
            m.default.getMessageByReference(l)
          ),
          { popouts: C, setPopout: p } = (0, D.default)(
            s.id,
            V.DEFAULT_POPOUTS
          ),
          E = (0, L.default)(s),
          g = (0, x.getMessageAriaLabelledBy)(s),
          S = (0, x.getMessageAriaDescribedBy)(s);
        return s.type === W.MessageTypes.THREAD_STARTER_MESSAGE &&
          null != h &&
          h.state === m.ReferencedMessageState.LOADED
          ? (0, a.jsx)(q, { ...e, message: h.message, groupId: h.message.id })
          : (0, a.jsx)(A.default, {
              ...f,
              id: n,
              compact: r,
              className: i(c, {
                [z.message]: !0,
                [z.cozyMessage]: !r,
                [z.systemMessage]: !0,
                [z.groupStart]: !0,
              }),
              childrenHeader: (0, U.default)({
                messageProps: e,
                setPopout: p,
                messagePopouts: C,
                replyReference: l,
                author: E,
              }),
              childrenSystemMessage: (0, w.default)(e),
              childrenMessageContent: null,
              "aria-labelledby": g,
              "aria-describedby": S,
              hasThread: !1,
            });
      }
      function q(e) {
        var t, n;
        let {
            id: l,
            message: r,
            message: { id: o, channel_id: h },
            channel: { guild_id: E },
            compact: _ = !1,
            className: T,
            groupId: I,
          } = e,
          N = r.type === W.MessageTypes.REPLY ? r.messageReference : void 0,
          { onFocus: R, ...j } = (0, u.useListItem)(
            null !== (t = e.id) && void 0 !== t ? t : ""
          ),
          {
            isFocused: H,
            handleFocus: F,
            handleBlur: G,
          } = (0, y.useFocusInside)(R),
          {
            popouts: K,
            selected: Y,
            setPopout: q,
          } = (0, D.default)(r.id, V.DEFAULT_POPOUTS),
          X = S.InlineEmbedMedia.useSetting(),
          J = S.RenderEmbeds.useSetting(),
          Q = (0, d.useStateFromStores)([m.default], () =>
            m.default.getMessageByReference(N)
          ),
          $ = (0, p.isMessageNewerThanImprovedMarkdownEpoch)(
            (null !== (n = r.editedTimestamp) && void 0 !== n
              ? n
              : r.timestamp
            ).valueOf()
          ),
          {
            handleMouseEnter: ee,
            handleMouseLeave: et,
            isHovered: en,
          } = (0, y.useHoveredMessage)(I, r.author.id, Y),
          ea = (0, d.useStateFromStores)(
            [f.default],
            () => f.default.keyboardModeEnabled
          ),
          es = Y || (ea && H),
          el = es || en,
          { content: ei, hasSpoilerEmbeds: er } = (0, P.default)(r, {
            hideSimpleEmbedContent: X && J,
            isInteracting: el,
            formatInline: !1,
            allowList: $,
            allowHeading: $,
            allowLinks: !0,
            previewLinkTarget: !0,
          }),
          eo = (0, O.default)(o, h, ea),
          eu = (0, L.default)(r),
          ed = (0, x.getMessageAriaLabelledBy)(r, I),
          ec = (0, x.getMessageAriaDescribedBy)(r),
          ef = (0, k.default)(e, ei, !1),
          eh = s.useCallback(
            () => (0, g.transitionToGuild)(E, h, o),
            [E, h, o]
          ),
          eC = (0, C.useRoleIcon)({ guildId: E, roleId: eu.iconRoleId });
        return (0, a.jsxs)("div", {
          className: z.quotedChatMessage,
          children: [
            (0, a.jsx)(c.Clickable, {
              className: z.jump,
              onClick: eh,
              "aria-label": Z.default.Messages.JUMP,
              children: Z.default.Messages.JUMP,
            }),
            (0, a.jsx)(A.default, {
              ...j,
              id: l,
              compact: _,
              className: i(T, {
                [z.message]: !0,
                [z.cozyMessage]: !_,
                [z.mentioned]: r.mentioned && !(0, v.default)(r),
                [z.ephemeral]: (0, M.hasFlag)(
                  r.flags,
                  W.MessageFlags.EPHEMERAL
                ),
                [z.systemMessage]: (0, v.default)(r),
                [z.groupStart]: r.id === I || r.type === W.MessageTypes.REPLY,
                [z.selected]: es,
              }),
              zalgo: !0,
              onKeyDown: eo,
              onFocus: F,
              onBlur: G,
              childrenRepliedMessage: (0, B.default)(e, q, K, N, Q),
              childrenHeader: (0, U.default)({
                messageProps: e,
                setPopout: q,
                messagePopouts: K,
                replyReference: N,
                author: eu,
                repliedMessage: Q,
                roleIcon: eC,
              }),
              childrenAccessories: (0, b.default)({
                channelMessageProps: e,
                hasSpoilerEmbeds: er,
                isInteracting: el,
                renderThreadAccessory: !1,
                renderComponentAccessory: !1,
                renderSuppressEmbeds: !1,
              }),
              childrenSystemMessage: (0, w.default)(e),
              childrenMessageContent: ef,
              onMouseMove: ee,
              onMouseLeave: et,
              "aria-labelledby": ed,
              "aria-describedby": ec,
              hasThread: !1,
            }),
          ],
        });
      }
      var X = s.memo(function (e) {
        var t, n;
        let l;
        let {
          id: r,
          message: g,
          message: { id: N },
          channel: K,
          channel: { id: Y },
          compact: q = !1,
          className: X,
          flashKey: J,
          groupId: Q,
          renderContentOnly: $,
        } = e;
        o(
          g.type !== W.MessageTypes.THREAD_STARTER_MESSAGE,
          "Message must not be a thread starter message"
        );
        let ee = W.MessageTypesWithLazyLoadedReferences.has(g.type)
            ? g.messageReference
            : void 0,
          { onFocus: et, ...en } = (0, u.useListItem)(
            null !== (t = e.id) && void 0 !== t ? t : ""
          ),
          ea = S.InlineEmbedMedia.useSetting(),
          es = S.RenderEmbeds.useSetting(),
          el = (0, d.useStateFromStores)([m.default], () =>
            m.default.getMessageByReference(ee)
          ),
          {
            popouts: ei,
            selected: er,
            setPopout: eo,
          } = (0, D.default)(g.id, V.DEFAULT_POPOUTS),
          eu = (0, y.useContextMenuMessage)(g, K, eo),
          ed = (0, y.useClickMessage)(g, K),
          {
            handleMouseEnter: ec,
            handleMouseLeave: ef,
            hasHovered: eh,
            isHovered: eC,
          } = (0, y.useHoveredMessage)(Q, g.author.id, er),
          {
            isFocused: ep,
            hasFocused: eE,
            handleFocus: em,
            handleBlur: eg,
          } = (0, y.useFocusInside)(et),
          eS = (0, d.useStateFromStores)(
            [T.default],
            () => T.default.isEditing(Y, N),
            [Y, N]
          ),
          e_ = (0, d.useStateFromStores)(
            [f.default],
            () => f.default.keyboardModeEnabled
          ),
          eT = er || eS || (e_ && ep),
          eA = eT || eC,
          eM = (0, d.useStateFromStores)(
            [_.default],
            () =>
              g.hasFlag(W.MessageFlags.HAS_THREAD) &&
              _.default.getChannel(I.default.castMessageIdAsChannelId(g.id))
          ),
          eI = g.isFirstMessageInForumPost(K),
          eN = (0, p.isMessageNewerThanImprovedMarkdownEpoch)(
            (null !== (n = g.editedTimestamp) && void 0 !== n
              ? n
              : g.timestamp
            ).valueOf()
          ),
          { content: ev, hasSpoilerEmbeds: eL } = (0, P.default)(g, {
            hideSimpleEmbedContent: ea && es,
            isInteracting: eA,
            formatInline: !1,
            allowList: eI || eN,
            allowHeading: eI || eN,
            allowLinks: !0,
            previewLinkTarget: !0,
          }),
          eR = (0, O.default)(N, Y, e_),
          ex = (0, L.default)(g),
          ey = (0, d.useStateFromStores)([E.default], () =>
            E.default.getPendingReply(Y)
          ),
          eO = (function (e) {
            let t = s.useRef(e);
            return (
              s.useEffect(() => void (t.current = null != e ? e : t.current)),
              null != e ? e : t.current
            );
          })(J),
          eD = (0, C.useRoleIcon)({
            guildId: K.guild_id,
            roleId: ex.iconRoleId,
          }),
          eP = (0, x.getMessageAriaLabelledBy)(g, Q),
          ej = (0, x.getMessageAriaDescribedBy)(g),
          eb = (0, d.useStateFromStores)(
            [h.default],
            () => h.default.getMessage(N),
            [N]
          ),
          eH = (0, j.default)({ message: g, channel: K }),
          eF = null != eb;
        l =
          g.type === W.MessageTypes.CUSTOM_GIFT
            ? ""
            : !eS && eF
              ? (0, H.default)(e, ev)
              : (0, k.default)(e, ev, eS);
        let eU = g.id === Q,
          ek = (0, a.jsx)(c.FocusRing, {
            offset: { left: 4, right: 4 },
            children: (0, a.jsx)("li", {
              id: r,
              className: z.messageListItem,
              "aria-setsize": -1,
              children: (0, a.jsx)(A.default, {
                ...en,
                "aria-setsize": -1,
                "aria-roledescription":
                  Z.default.Messages.MESSAGE_A11Y_ROLE_DESCRIPTION,
                "aria-labelledby": eP,
                "aria-describedby": ej,
                onFocus: em,
                onBlur: eg,
                onContextMenu: eu,
                onKeyDown: eR,
                onClick: ed,
                compact: q,
                contentOnly: $,
                className: i(X, {
                  [z.message]: !0,
                  [z.cozyMessage]: !q,
                  [z.mentioned]: g.mentioned && !(0, v.default)(g),
                  [z.ephemeral]: (0, M.hasFlag)(
                    g.flags,
                    W.MessageFlags.EPHEMERAL
                  ),
                  [z.systemMessage]: (0, v.default)(g),
                  [z.groupStart]: !$ && (eU || g.type === W.MessageTypes.REPLY),
                  [z.selected]: eT,
                  [z.replying]: (null == ey ? void 0 : ey.message.id) === g.id,
                  [z.interactionSending]:
                    g.isCommandType() && g.state === W.MessageStates.SENDING,
                  [z.automodMessage]: eF,
                }),
                zalgo: !eS,
                childrenRepliedMessage: $
                  ? void 0
                  : (0, B.default)(e, eo, ei, ee, el),
                childrenExecutedCommand: (0, G.default)(e, eo, ei),
                childrenHeader: $
                  ? void 0
                  : (0, U.default)({
                      messageProps: e,
                      setPopout: eo,
                      messagePopouts: ei,
                      replyReference: ee,
                      author: ex,
                      repliedMessage: el,
                      roleIcon: eD,
                    }),
                childrenAccessories: (0, b.default)({
                  channelMessageProps: e,
                  hasSpoilerEmbeds: eL,
                  handleContextMenu: eu,
                  isInteracting: eA,
                  isAutomodBlockedMessage: eF,
                }),
                childrenButtons:
                  eh || eE
                    ? (0, F.default)({
                        buttonProps: e,
                        setPopout: eo,
                        messagePopouts: ei,
                        isFocused: eC || ep,
                      })
                    : void 0,
                childrenSystemMessage: (0, w.default)(e),
                childrenMessageContent: l,
                onMouseMove: ec,
                onMouseLeave: ef,
                hasThread:
                  !$ && g.hasFlag(W.MessageFlags.HAS_THREAD) && null != eM,
                isSystemMessage: (0, v.default)(g),
                hasReply: g.type === W.MessageTypes.REPLY,
                messageRef: eH,
              }),
            }),
          });
        return null != eO
          ? (0, a.jsx)(
              R.default,
              {
                flashKey: eO,
                className: i({
                  [z.backgroundFlash]: !0,
                  [z.groupStart]: !q && g.id === Q,
                }),
                children: ek,
              },
              "bg-flash-".concat(r)
            )
          : ek;
      });
    },
    342009: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return g;
          },
        }),
        n("222007");
      var a = n("37983"),
        s = n("884691"),
        l = n("414456"),
        i = n.n(l),
        r = n("77078"),
        o = n("945330"),
        u = n("780571"),
        d = n("304198"),
        c = n("556118"),
        f = n("97810"),
        h = n("49111"),
        C = n("782340"),
        p = n("864604"),
        E = n("5762");
      function m(e) {
        let {
          expanded: t,
          onClick: n,
          count: s,
          compact: l,
          collapsedReason: i,
        } = e;
        return (0, a.jsx)(u.default, {
          compact: l,
          role: "group",
          childrenMessageContent: (0, a.jsx)(d.default, {
            compact: l,
            className: p.blockedSystemMessage,
            iconNode: (0, a.jsx)(o.default, { className: p.blockedIcon }),
            children: (0, a.jsxs)("div", {
              className: p.blockedMessageText,
              children: [
                i.format({ count: s }),
                " —",
                " ",
                (0, a.jsx)(r.Clickable, {
                  tag: "span",
                  onClick: n,
                  className: p.blockedAction,
                  children: t
                    ? C.default.Messages.BLOCKED_MESSAGES_HIDE.format({
                        count: s,
                      })
                    : C.default.Messages.BLOCKED_MESSAGES_SHOW.format({
                        count: s,
                      }),
                }),
              ],
            }),
          }),
        });
      }
      var g = s.memo(function (e) {
        var t;
        let {
            messages: n,
            channel: l,
            compact: r = !1,
            unreadId: o,
            collapsedReason: u,
          } = e,
          { hasJumpTarget: d = !1 } = n,
          [C, g] = s.useState(d),
          S = s.useCallback(() => g(e => !e), []),
          _ = n.hasUnread ? n.content.length - 1 : n.content.length;
        return (0, a.jsxs)("div", {
          className: i({ [E.groupStart]: !0, [p.expanded]: C }),
          children: [
            n.hasUnread &&
            (!C ||
              (null === (t = n.content[0]) || void 0 === t
                ? void 0
                : t.type) === h.ChannelStreamTypes.DIVIDER)
              ? (0, a.jsx)(f.default, { isUnread: !0, id: o }, "divider")
              : null,
            (0, a.jsx)(
              m,
              {
                count: _,
                compact: r,
                expanded: C,
                onClick: S,
                collapsedReason: u,
              },
              "collapsed-message-item"
            ),
            C
              ? n.content.map((e, t) => {
                  if (e.type === h.ChannelStreamTypes.DIVIDER && t > 0) {
                    var s, i;
                    let e =
                      null !==
                        (i =
                          null === (s = n.content[t + 1]) || void 0 === s
                            ? void 0
                            : s.isGroupStart) &&
                      void 0 !== i &&
                      i;
                    return (0, a.jsx)(
                      f.default,
                      { isUnread: !0, isBeforeGroup: e, id: o },
                      "divider"
                    );
                  }
                  if (
                    e.type === h.ChannelStreamTypes.MESSAGE ||
                    e.type === h.ChannelStreamTypes.THREAD_STARTER_MESSAGE
                  ) {
                    let t =
                      e.type === h.ChannelStreamTypes.THREAD_STARTER_MESSAGE
                        ? c.ThreadStarterChatMessage
                        : c.default;
                    return (0, a.jsx)(
                      t,
                      {
                        className: p.blocked,
                        compact: r,
                        channel: l,
                        message: e.content,
                        groupId: e.groupId,
                        flashKey: e.flashKey,
                        isLastItem: !1,
                        renderContentOnly: !1,
                      },
                      e.content.id
                    );
                  }
                })
              : null,
          ],
        });
      });
    },
    97810: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n("37983"),
        s = n("884691"),
        l = n("414456"),
        i = n.n(l),
        r = n("898260"),
        o = n("5762");
      let u = s.forwardRef(function (e, t) {
        let { className: n, isBeforeGroup: s = !1, ...l } = e,
          { children: u } = l;
        return (0, a.jsx)(r.default, {
          ...l,
          ref: t,
          role: "separator",
          "aria-label": "string" == typeof u ? u : void 0,
          className: i(n, {
            [o.divider]: !0,
            [o.hasContent]: null != u,
            [o.beforeGroup]: s,
          }),
        });
      });
      var d = s.memo(u);
    },
    92981: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var a = n("37983"),
        s = n("884691"),
        l = n("446674"),
        i = n("77078"),
        r = n("206230"),
        o = n("300322"),
        u = n("271938"),
        d = n("957255"),
        c = n("491605"),
        f = n("49111"),
        h = n("782340"),
        C = n("875159");
      let p = () =>
        n
          .el("170206")
          .then(n.t.bind(n, "170206", 19))
          .then(e => {
            let { default: t } = e;
            return t;
          });
      var E = s.memo(function (e) {
        let { channel: t, isLastItem: n } = e,
          s = (0, l.useStateFromStores)(
            [r.default],
            () => r.default.useReducedMotion
          ),
          E = (0, l.useStateFromStores)([d.default], () =>
            d.default.can(f.Permissions.SEND_MESSAGES_IN_THREADS, t)
          ),
          m = (0, o.useIsNonModInLockedThread)(t),
          g = (0, l.useStateFromStores)([u.default], () => u.default.getId());
        return n
          ? E && !m && t.ownerId !== g
            ? (0, a.jsxs)("div", {
                className: C.box,
                children: [
                  (0, a.jsx)(c.default, {
                    importData: p,
                    shouldAnimate: !s,
                    className: C.animation,
                  }),
                  (0, a.jsxs)("div", {
                    className: C.textContainer,
                    children: [
                      (0, a.jsx)(i.Heading, {
                        variant: "heading-md/semibold",
                        children:
                          h.default.Messages
                            .FORUM_START_THE_CONVERSATION_HEADER,
                      }),
                      (0, a.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children:
                          h.default.Messages
                            .FORUM_START_THE_CONVERSATION_DESCRIPTION,
                      }),
                    ],
                  }),
                ],
              })
            : null
          : (0, a.jsx)("div", { className: C.divider });
      });
    },
    594864: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          MessageNoticeBanner: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("414456"),
        l = n.n(s),
        i = n("549984");
      function r(e) {
        let {
          bannerIcon: t,
          bannerHeader: n,
          bannerSubtext: s,
          containerStyles: r,
          headerStyles: o,
          children: u,
        } = e;
        return (0, a.jsxs)("div", {
          className: i.spamBanner,
          children: [
            (0, a.jsxs)("div", {
              className: l(i.bannerTextContainer, r),
              children: [
                "string" == typeof t
                  ? (0, a.jsx)("img", {
                      src: t,
                      alt: "",
                      className: i.bannerIcon,
                    })
                  : t,
                (0, a.jsxs)("div", {
                  className: i.bannerText,
                  children: [
                    (0, a.jsx)("div", {
                      className: l(i.bannerHeader, o),
                      children: n,
                    }),
                    (0, a.jsx)("div", {
                      className: i.bannerSubtext,
                      children: s,
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)("div", { className: i.actionButtons, children: u }),
          ],
        });
      }
    },
    88243: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          generateAttachmentSpec: function () {
            return d;
          },
          generateMessageSpecs: function () {
            return c;
          },
          default: function () {
            return f;
          },
        }),
        n("70102"),
        n("424973"),
        n("222007");
      var a = n("37983"),
        s = n("884691"),
        l = n("917351"),
        i = n.n(l),
        r = n("67602"),
        o = n("49111"),
        u = n("407499");
      function d() {
        return { width: i.random(140, 400), height: i.random(100, 320) };
      }
      function c(e) {
        let {
          compact: t,
          messageGroups: n,
          groupRange: a,
          attachments: s,
          fontSize: l,
          groupSpacing: u,
        } = e;
        if (s > n)
          throw Error(
            "generateMessageSpecs: too many attachments relative to messageGroups: "
              .concat(n, ", ")
              .concat(s)
          );
        let c = l / o.Accessibility.FONT_SIZE_DEFAULT,
          f = t ? r.HEIGHT_COMPACT_MESSAGE_START : r.HEIGHT_COZY_MESSAGE_START,
          h = t ? r.HEIGHT_COMPACT_MESSAGE : r.HEIGHT_COZY_MESSAGE,
          C = 0,
          p = Array(n)
            .fill(null)
            .map(() => {
              let e = i.random(1, a);
              return (C += u * c + f * c + (e - 1) * h * c), e;
            }),
          E = p.map((e, t) => t),
          m = [];
        for (; m.length < s; ) {
          let e = d();
          m.push([E.splice(i.random(0, E.length - 1), 1)[0], e]),
            (C += e.height + r.HEIGHT_ATTACHMEMT_PADDING * c);
        }
        return {
          messages: p,
          attachmentSpecs: m,
          totalHeight: C,
          groupSpacing: u,
        };
      }
      function f(e) {
        let {
          compact: t,
          messages: n,
          attachmentSpecs: l,
          totalHeight: i,
          groupSpacing: o,
        } = e;
        return s.useMemo(() => {
          let e = Array(n.length).fill(void 0);
          for (let [t, n] of l) e[t] = n;
          return (0, a.jsx)("div", {
            className: u.wrapper,
            style: { height: i },
            children: n.map((n, s) =>
              (0, a.jsx)(
                r.default,
                {
                  groupSpacing: o,
                  compact: t,
                  messages: n,
                  attachmentSpecs: e[s],
                },
                s
              )
            ),
          });
        }, [t, n, l, i, o]);
      }
    },
    753089: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return M;
          },
        }),
        n("222007");
      var a = n("37983"),
        s = n("884691"),
        l = n("917351"),
        i = n.n(l),
        r = n("446674"),
        o = n("77078"),
        u = n("819689"),
        d = n("467094"),
        c = n("364685"),
        f = n("41170"),
        h = n("271938"),
        C = n("377253"),
        p = n("697218"),
        E = n("599110"),
        m = n("158998"),
        g = n("913491"),
        S = n("49111"),
        _ = n("782340"),
        T = n("508477");
      let A = "749054660769218631";
      function M(e) {
        var t;
        let { channel: n } = e,
          [l, M] = s.useState("");
        s.useEffect(() => {
          (0, d.fetchStickerPack)("847199849233514549", !0);
        }, []);
        let I = (0, r.useStateFromStores)(
            [C.default, h.default],
            () =>
              !!i(C.default.getMessages(n.id).toArray())
                .reverse()
                .find(
                  e =>
                    e.author.id !== h.default.getId() &&
                    e.state === S.MessageStates.SENT &&
                    !(0, g.default)(e)
                )
          ),
          N = (0, r.useStateFromStores)([p.default], () =>
            p.default.getUser(n.isPrivate() ? n.getRecipientId() : null)
          ),
          v =
            null !== (t = m.default.useName(N)) && void 0 !== t
              ? t
              : _.default.Messages.WAVE_DEFAULT_RECIPIENT,
          L = (0, r.useStateFromStores)([c.default], () =>
            c.default.getStickerById(A)
          ),
          R = s.useCallback(async () => {
            if (null == l || "" === l)
              try {
                await u.default.sendGreetMessage(n.id, A),
                  E.default.track(S.AnalyticEvents.DM_EMPTY_ACTION, {
                    channel_id: n.id,
                    channel_type: n.type,
                    source: "Wave",
                    type: "Send wave",
                  });
              } catch (e) {
                !e.ok && 429 === e.status && M(_.default.Messages.RATE_LIMITED);
              }
          }, [n.id, n.type, l]),
          x = _.default.Messages.WAVE_TO.format({ username: v }),
          y =
            null != l && "" !== l
              ? (0, a.jsx)(o.Text, {
                  className: T.error,
                  color: "text-danger",
                  variant: "text-sm/normal",
                  children: l,
                })
              : null;
        return I
          ? (0, a.jsxs)("div", {
              className: T.containerCompact,
              children: [
                (0, a.jsxs)(o.Clickable, {
                  className:
                    null != l && "" !== l
                      ? T.compactButtonDisabled
                      : T.compactButton,
                  "aria-label": _.default.Messages.SEND_WAVE,
                  onClick: R,
                  children: [
                    (0, a.jsx)(f.default, { sticker: L, size: 24 }),
                    (0, a.jsx)(o.Text, {
                      className: T.text,
                      variant: "text-md/medium",
                      children: x,
                    }),
                  ],
                }),
                y,
              ],
            })
          : (0, a.jsxs)("div", {
              className: T.containerExpanded,
              children: [
                (0, a.jsx)(f.default, { sticker: L, size: 160 }),
                (0, a.jsx)(o.Button, {
                  className: T.button,
                  onClick: R,
                  disabled: !!l,
                  children: x,
                }),
                y,
              ],
            });
      }
    },
    823674: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return ed;
          },
        });
      var a = n("37983"),
        s = n("884691"),
        l = n("414456"),
        i = n.n(l),
        r = n("483366"),
        o = n.n(r),
        u = n("446674"),
        d = n("77078"),
        c = n("206230"),
        f = n("619259"),
        h = n("752598"),
        C = n("267567"),
        p = n("979268"),
        E = n("520899"),
        m = n("166257"),
        g = n("432173"),
        S = n("219013"),
        _ = n("625149"),
        T = n("300322"),
        A = n("845579"),
        M = n("271938"),
        I = n("836417"),
        N = n("26989"),
        v = n("305961"),
        L = n("88093"),
        R = n("957255"),
        x = n("886074"),
        y = n("36562"),
        O = n("662255"),
        D = n("85175"),
        P = n("83900"),
        j = n("993477"),
        b = n("733160"),
        H = n("100300"),
        F = n("433487"),
        U = n("987772"),
        k = n("566998"),
        G = n("516358"),
        B = n("550515"),
        w = n("959097"),
        V = n("228220"),
        W = n("149279"),
        Z = n("599110"),
        z = n("306160"),
        K = n("870190"),
        Y = n("61400"),
        q = n("327054"),
        X = n("583022"),
        J = n("363396"),
        Q = n("891405"),
        $ = n("261649"),
        ee = n("739034"),
        et = n("49111"),
        en = n("782340"),
        ea = n("398226");
      function es(e) {
        e.stopPropagation();
      }
      function el(e) {
        let {
          message: t,
          channel: n,
          canReport: a,
          onClose: s,
          updatePosition: l,
        } = e;
        return (0, $.useMessageMenu)({
          message: t,
          channel: n,
          textSelection: "",
          favoriteableType: null,
          favoriteableId: null,
          favoriteableName: null,
          itemHref: void 0,
          itemSrc: void 0,
          itemSafeSrc: void 0,
          itemTextContent: void 0,
          canReport: a,
          onHeightUpdate: l,
          onClose: s,
          navId: "message-actions",
          ariaLabel: en.default.Messages.MESSAGE_UTILITIES_A11Y_LABEL,
        });
      }
      function ei(e) {
        let {
          label: t,
          ariaLabel: n,
          tooltipText: s,
          tooltipColor: l,
          icon: i,
          iconProps: r,
          channel: o,
          message: u,
          onClick: c,
          key: f,
          disabled: h,
          dangerous: C,
          separator: p,
          sparkle: E,
          ...m
        } = e;
        return (0, a.jsx)(
          d.Tooltip,
          {
            text: null != s ? s : t,
            color: null != l ? l : d.TooltipColors.PRIMARY,
            "aria-label": t,
            hideOnClick: !0,
            tooltipClassName: ea.tooltip,
            children: e => {
              let { onMouseEnter: s, onMouseLeave: l, onClick: d } = e;
              return (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsxs)(W.Button, {
                    onMouseEnter: s,
                    onMouseLeave: l,
                    onClick: e => {
                      null == d || d(), c(o, u, e);
                    },
                    "aria-label": null != n ? n : t,
                    disabled: h,
                    dangerous: C,
                    ...m,
                    children: [
                      (0, a.jsx)(i, { className: ea.icon, ...r }),
                      E && (0, a.jsx)(x.default, {}),
                    ],
                  }),
                  p && (0, a.jsx)(W.Separator, {}),
                ],
              });
            },
          },
          f
        );
      }
      function er(e) {
        let {
            channel: t,
            message: n,
            canCopy: l,
            canPin: i,
            canDelete: r,
            canReport: o,
            canEdit: f,
            canPublish: h,
            canReact: m,
            canConfigureJoin: g,
            canReply: S,
            canStartThread: I,
            canViewThread: x,
            isExpanded: B,
            showMoreUtilities: W,
            showEmojiPicker: $,
            showMessageRemindersActions: ea,
            isMessageReminder: es,
            setPopout: er,
            hasDeveloperMode: eo,
            isGuildInviteReminder: ed,
            isFocused: ec,
          } = (function (e) {
            let {
                channel: t,
                message: n,
                showEmojiPicker: a,
                showEmojiBurstPicker: s,
                showMoreUtilities: l,
                setPopout: i,
                isFocused: r,
              } = e,
              { author: o } = n,
              d = (0, u.useStateFromStores)(
                [v.default],
                () => v.default.getGuild(t.guild_id),
                [t.guild_id]
              ),
              f = (0, u.useStateFromStores)([M.default], () =>
                M.default.getId()
              ),
              h = (0, T.useIsActiveChannelOrUnarchivableThread)(t),
              m = (0, T.useIsNonModInLockedThread)(t),
              g = A.RenderReactions.useSetting(),
              S = A.DeveloperMode.useSetting(),
              I = (0, u.useStateFromStores)(
                [L.default],
                () =>
                  null == t.guild_id || L.default.canChatInGuild(t.guild_id),
                [t]
              ),
              { canManageMessages: x, canAddNewReactions: y } = (0,
              u.useStateFromStoresObject)(
                [R.default],
                () => ({
                  canAddNewReactions:
                    I && R.default.can(et.Permissions.ADD_REACTIONS, t),
                  canManageMessages: R.default.can(
                    et.Permissions.MANAGE_MESSAGES,
                    t
                  ),
                }),
                [t, I]
              ),
              O = (0, _.useCanReplyToMessage)(t, n),
              D = (0, T.useCanStartPublicThread)(t, n),
              P = (0, T.useCanViewThreadForMessage)(n),
              j = (0, u.useStateFromStores)(
                [C.default],
                () => null != t.guild_id && C.default.isLurking(t.guild_id),
                [t]
              ),
              b = (0, u.useStateFromStores)(
                [N.default],
                () =>
                  null != t.guild_id &&
                  N.default.isCurrentUserGuest(t.guild_id),
                [t]
              ),
              H = o.id === f,
              F =
                (x || n.canDeleteOwnMessage(f)) &&
                h &&
                !et.MessageTypesSets.UNDELETABLE.has(n.type);
            n.type === et.MessageTypes.AUTO_MODERATION_ACTION && (F = F && x);
            let U = (0, K.canReportMessage)(n),
              k = (0, q.default)(n, t, x),
              G = !t.isSystemDM() && (0, Y.default)(n, f) && h && !m,
              { disableReactionCreates: B } = (0, X.default)({
                channel: t,
                canChat: I,
                renderReactions: g,
                canAddNewReactions: y,
                isLurking: j,
                isGuest: b,
                isActiveChannelOrUnarchivableThread: h,
              }),
              w =
                t.type === et.ChannelTypes.GUILD_ANNOUNCEMENT &&
                null != d &&
                d.hasFeature(et.GuildFeatures.NEWS) &&
                (H || x) &&
                n.type === et.MessageTypes.DEFAULT,
              V = t.getGuildId(),
              W =
                null != V &&
                (n.type === et.MessageTypes.USER_JOIN ||
                  n.type === et.MessageTypes.GUILD_INVITE_REMINDER) &&
                R.default.canWithPartialContext(et.Permissions.MANAGE_GUILD, {
                  guildId: V,
                }),
              { showReminders: Z } = p.default.useExperiment(
                { location: "9bfedc_1" },
                { autoTrackExposure: !1 }
              ),
              J = (0, u.useStateFromStores)(
                [E.default],
                () =>
                  null !=
                  E.default
                    .getMessageReminders()
                    .find(e => e.messageId === n.id)
              ),
              Q = (0, ee.default)(),
              $ = (0, u.useStateFromStores)(
                [c.default],
                () => c.default.keyboardModeEnabled
              );
            return {
              channel: t,
              message: n,
              canPin: k,
              canEdit: G,
              canDelete: F,
              canReport: U,
              canReply: O,
              canStartThread: D,
              canViewThread: P,
              canCopy: z.SUPPORTS_COPY,
              hasDeveloperMode: S,
              canReact: !B && g,
              canPublish: w,
              canConfigureJoin: W,
              isExpanded: Q && !$ && !a && !s && !l,
              showEmojiPicker: a,
              showEmojiBurstPicker: s,
              showMoreUtilities: l,
              showMessageRemindersActions: Z,
              isMessageReminder: J,
              setPopout: i,
              isFocused: r,
              isGuildInviteReminder:
                n.type === et.MessageTypes.GUILD_INVITE_REMINDER,
            };
          })(e),
          ef = s.useCallback(() => {
            !W &&
              Z.default.track(
                et.AnalyticEvents.MESSAGE_POPOUT_MENU_OPENED_DESKTOP,
                { message_id: n.id, channel: n.channel_id }
              ),
              er({ moreUtilities: !W });
          }, [W, er, n]),
          eh = s.useCallback(() => {
            er({ emojiPicker: !$ });
          }, [$, er]),
          eC = (0, T.useIsActiveChannelOrUnarchivableThread)(t),
          ep = n.hasFlag(et.MessageFlags.CROSSPOSTED);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            B
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    l && eo
                      ? ei({
                          key: "copy-id",
                          channel: t,
                          message: n,
                          label: en.default.Messages.COPY_ID_MESSAGE,
                          icon: O.default,
                          onClick: J.copyId,
                        })
                      : null,
                    l && !ed
                      ? ei({
                          key: "copy-link",
                          channel: t,
                          message: n,
                          label: en.default.Messages.COPY_LINK,
                          icon: P.default,
                          onClick: J.copyLink,
                        })
                      : null,
                    g
                      ? ei({
                          key: "configure",
                          channel: t,
                          message: n,
                          label: en.default.Messages.CONFIGURE,
                          icon: D.default,
                          onClick: J.configureJoin,
                        })
                      : null,
                    ea
                      ? ei({
                          key: "mark-reminder",
                          channel: t,
                          message: n,
                          label: es
                            ? en.default.Messages.MESSAGE_REMINDERS_MARK_AS_DONE
                            : en.default.Messages
                                .MESSAGE_REMINDERS_MARK_AS_TODO,
                          icon: es ? y.default : H.default,
                          onClick: es
                            ? J.markMessageRemindersAsComplete
                            : J.markMessageAsReminder,
                        })
                      : null,
                    eC
                      ? ei({
                          key: "mark-unread",
                          channel: t,
                          message: n,
                          label: en.default.Messages.MARK_UNREAD,
                          icon: j.default,
                          onClick: J.markMessageUnread,
                        })
                      : null,
                    i
                      ? ei({
                          key: "pin",
                          channel: t,
                          message: n,
                          label: n.pinned
                            ? en.default.Messages.UNPIN_MESSAGE
                            : en.default.Messages.PIN_MESSAGE,
                          icon: k.default,
                          onClick: J.pinMessage,
                        })
                      : null,
                    S && f
                      ? ei({
                          key: "reply-self",
                          channel: t,
                          message: n,
                          label: en.default.Messages.MESSAGE_ACTION_REPLY,
                          icon: G.default,
                          onClick: J.replyToMessage,
                        })
                      : null,
                  ],
                })
              : null,
            m && !ed
              ? (0, a.jsx)(Q.default, {
                  channel: t,
                  message: n,
                  togglePopout: eh,
                  renderEmojiPicker: eu,
                  shouldShow: $,
                  isFocused: ec,
                })
              : null,
            S && !f
              ? ei({
                  key: "reply-other",
                  channel: t,
                  message: n,
                  label: en.default.Messages.MESSAGE_ACTION_REPLY,
                  icon: G.default,
                  onClick: J.replyToMessage,
                })
              : null,
            f
              ? ei({
                  key: "edit",
                  channel: t,
                  message: n,
                  label: en.default.Messages.EDIT,
                  icon: U.default,
                  onClick: J.editMessage,
                })
              : null,
            I
              ? ei({
                  key: "thread",
                  channel: t,
                  message: n,
                  label: en.default.Messages.CREATE_THREAD,
                  icon: w.default,
                  onClick: J.createThread,
                })
              : null,
            !I && x
              ? ei({
                  key: "view-thread",
                  channel: t,
                  message: n,
                  label: en.default.Messages.VIEW_THREAD,
                  icon: w.default,
                  onClick: J.goToThread,
                })
              : null,
            h
              ? ei({
                  key: "publish",
                  channel: t,
                  message: n,
                  label: ep
                    ? en.default.Messages.NEWS_CHANNEL_PUBLISHED
                    : en.default.Messages.NEWS_CHANNEL_PUBLISH,
                  icon: b.default,
                  onClick: J.publishMessage,
                  disabled: ep,
                })
              : null,
            r && (ed || B)
              ? ei({
                  key: "delete",
                  channel: t,
                  message: n,
                  label: en.default.Messages.DELETE,
                  icon: V.default,
                  onClick: J.deleteMessage,
                  dangerous: !0,
                  separator: !B,
                })
              : null,
            B && r
              ? null
              : (0, a.jsx)(d.Popout, {
                  renderPopout: e => {
                    let { updatePosition: s, closePopout: l } = e;
                    return (0, a.jsx)(el, {
                      channel: t,
                      message: n,
                      canReport: o,
                      onClose: l,
                      updatePosition: s,
                    });
                  },
                  shouldShow: W,
                  onRequestClose: ef,
                  position: "left",
                  align: "top",
                  animation: d.Popout.Animation.NONE,
                  children: (e, a) => {
                    let { onClick: s, ...l } = e,
                      { isShown: i } = a;
                    return ei({
                      key: "more",
                      label: en.default.Messages.MORE,
                      icon: F.default,
                      channel: t,
                      message: n,
                      selected: i,
                      onClick: ef,
                      ...l,
                    });
                  },
                }),
          ],
        });
      }
      function eo(e) {
        let { channel: t, message: n } = e,
          s = (0, u.useStateFromStores)(
            [f.default],
            () => null != f.default.getMessage(n.id),
            [n.id]
          ),
          l =
            null == n.interaction ||
            (null != n.interactionData &&
              (0, h.canRetryInteractionData)(n.interactionData));
        return (0, a.jsxs)(a.Fragment, {
          children: [
            !s &&
              l &&
              ei({
                key: "retry",
                label: en.default.Messages.RETRY,
                icon: B.default,
                channel: t,
                message: n,
                onClick: J.retrySendMessage,
              }),
            ei({
              key: "delete-usent",
              label: en.default.Messages.DELETE,
              icon: V.default,
              channel: t,
              message: n,
              onClick: J.deleteMessage,
            }),
          ],
        });
      }
      function eu(e, t, n) {
        let s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          l = {
            openPopoutType: "message_reaction_emoji_picker",
            ...(s && {
              openPopoutType: "message_super_reaction_emoji_picker",
              page:
                null != e.getGuildId()
                  ? et.AnalyticsPages.GUILD_CHANNEL
                  : et.AnalyticsPages.DM_CHANNEL,
              section: (0, g.getBurstAnalyticsSection)(e),
              object: et.AnalyticsObjects.EMOJI_REACTION_PICKER_POPOUT,
            }),
          };
        return (0, a.jsx)(S.ReactionPicker, {
          channel: e,
          closePopout: n,
          onSelectEmoji: (a, s, l) => {
            !(function (e, t, n) {
              let a =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
              null != e &&
                (0, m.addReaction)(
                  t.id,
                  n.id,
                  (0, g.toReactionEmoji)(e),
                  void 0,
                  { burst: a }
                );
            })(a, e, t, l),
              s && (l ? o(n, 150)() : n());
          },
          analyticsOverride: l,
          messageId: t.id,
        });
      }
      var ed = s.memo(function (e) {
        let { channel: t, message: n, isHeader: s } = e,
          l = (0, u.useStateFromStores)(
            [I.default],
            () => I.default.isEditing(t.id, n.id),
            [t.id, n.id]
          ),
          r = (function (e) {
            let { channel: t, message: n } = e;
            return n.state === et.MessageStates.SEND_FAILED
              ? (0, a.jsx)(eo, { channel: t, message: n })
              : null;
          })(e),
          o = (function (e) {
            let { message: t } = e;
            return t.state !== et.MessageStates.SEND_FAILED
              ? (0, a.jsx)(er, { ...e })
              : null;
          })(e);
        return l || (null == r && null == o)
          ? null
          : (0, a.jsx)("div", {
              className: i(e.className, {
                [ea.container]: !0,
                [ea.isHeader]: s,
              }),
              onClick: es,
              onContextMenu: es,
              role: "group",
              "aria-label": en.default.Messages.MESSAGE_UTILITIES_A11Y_LABEL,
              children: (0, a.jsxs)(W.default, {
                className: e.innerClassName,
                children: [r, o],
              }),
            });
      });
    },
    818950: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return U;
          },
        }),
        n("222007");
      var a = n("37983"),
        s = n("884691"),
        l = n("414456"),
        i = n.n(l),
        r = n("974667"),
        o = n("446674"),
        u = n("77078"),
        d = n("819689"),
        c = n("734575"),
        f = n("206230"),
        h = n("890503"),
        C = n("336696"),
        p = n("38654"),
        E = n("347738"),
        m = n("845579"),
        g = n("271938"),
        S = n("836417"),
        _ = n("88093"),
        T = n("377253"),
        A = n("957255"),
        M = n("660478"),
        I = n("462495"),
        N = n("697218"),
        v = n("505684"),
        L = n("378765"),
        R = n("70845"),
        x = n("51714"),
        y = n("88243"),
        O = n("31511"),
        D = n("120379"),
        P = n("221068"),
        j = n("49111"),
        b = n("782340"),
        H = n("430759");
      let F = s.memo(
        function (e) {
          var t, n;
          let {
              className: l,
              messageGroupSpacing: c,
              scrollerClassName: h,
              channel: C,
              messages: E,
              unreadCount: m,
              showNewMessagesBar: g,
              messageDisplayCompact: S,
              channelStream: _,
              uploads: T,
              hasUnreads: M,
              editingMessageId: I,
              fontSize: N,
              keyboardModeEnabled: v,
              filterAfterTimestamp: R,
              showingQuarantineBanner: x,
            } = e,
            [F, U] = s.useState(!1),
            k = s.useMemo(
              () =>
                S
                  ? (0, y.generateMessageSpecs)({
                      compact: !0,
                      messageGroups: 30,
                      groupRange: 4,
                      attachments: 8,
                      fontSize: N,
                      groupSpacing: c,
                    })
                  : (0, y.generateMessageSpecs)({
                      compact: !1,
                      messageGroups: 26,
                      groupRange: 4,
                      attachments: 8,
                      fontSize: N,
                      groupSpacing: c,
                    }),
              [S, N, c]
            ),
            G = (0, D.default)({
              messages: E,
              channel: C,
              compact: S,
              hasUnreads: M,
              focusId: I,
              placeholderHeight: k.totalHeight,
              canLoadMore: null == R,
              handleScrollToBottom: s.useCallback(() => U(!0), [U]),
              handleScrollFromBottom: s.useCallback(() => U(!1), [U]),
            }),
            B = (0, O.default)({
              scrollerRef: G.ref,
              isEditing: null != I,
              keyboardModeEnabled: v,
              hasMoreAfter: E.hasMoreAfter,
            });
          let w =
              ((n = C),
              (0, o.useStateFromStores)([p.default], () => {
                let e = A.default.can(j.Permissions.READ_MESSAGE_HISTORY, n);
                return e
                  ? null
                  : p.default.getViewingRolesTimestamp(n.getGuildId());
              })),
            {
              channelStreamMarkup: V,
              newMessagesBar: W,
              jumpToPresentBar: Z,
              forumPostActionBar: z,
              safetyWarningBanner: K,
            } = (0, P.default)({
              channel: C,
              messages: E,
              unreadCount: m,
              showNewMessagesBar: g,
              messageDisplayCompact: S,
              channelStream: _,
              uploads: T,
              loadMore: G.loadMore,
              scrollManager: G,
              specs: k,
              filterAfterTimestamp: null != R ? R : w,
              showingQuarantineBanner: x,
              isAtBottom: F,
              jumpToPresent: () => {
                if (E.hasPresent()) {
                  var e;
                  null === (e = G.ref.current) ||
                    void 0 === e ||
                    e.scrollToBottom({ animate: !f.default.useReducedMotion });
                } else
                  d.default.jumpToPresent(C.id, j.MAX_MESSAGES_PER_CHANNEL);
              },
            });
          !(function (e) {
            let t = s.useCallback(() => {
                var t;
                return null === (t = e.current) || void 0 === t
                  ? void 0
                  : t.scrollToBottom();
              }, [e]),
              n = s.useCallback(() => {
                var t;
                return null === (t = e.current) || void 0 === t
                  ? void 0
                  : t.scrollPageUp({ animate: !f.default.useReducedMotion });
              }, [e]),
              a = s.useCallback(() => {
                var t;
                return null === (t = e.current) || void 0 === t
                  ? void 0
                  : t.scrollPageDown({ animate: !f.default.useReducedMotion });
              }, [e]);
            (0, L.useComponentAction)({
              event: j.ComponentActions.SCROLLTO_PRESENT,
              handler: t,
            }),
              (0, L.useComponentAction)({
                event: j.ComponentActions.SCROLL_PAGE_UP,
                handler: n,
              }),
              (0, L.useComponentAction)({
                event: j.ComponentActions.SCROLL_PAGE_DOWN,
                handler: a,
              });
          })(G.ref);
          let Y = (0, u.useFocusJumpSection)(),
            { ref: q, ...X } = (0, r.getContainerPropsFromNavigator)(B),
            J = s.useCallback(e => {
              var t;
              (G.ref.current = e),
                (q.current =
                  null !== (t = null == e ? void 0 : e.getScrollerNode()) &&
                  void 0 !== t
                    ? t
                    : null);
            }, []);
          return (0, a.jsx)(r.ListNavigatorProvider, {
            navigator: B,
            children: (0, a.jsxs)("div", {
              className: i(H.messagesWrapper, l, "group-spacing-".concat(c)),
              children: [
                null != K ? K : W,
                (0, a.jsxs)(u.PinToBottomScrollerAuto, {
                  ref: J,
                  customTheme: !0,
                  className: i(h, H.scroller),
                  contentClassName: H.scrollerContent,
                  onResize: G.handleResize,
                  onScroll: G.handleScroll,
                  onMouseDown: G.handleMouseDown,
                  onMouseUp: G.handleMouseUp,
                  ...Y,
                  tabIndex: -1,
                  role: "group",
                  children: [
                    z,
                    (0, a.jsxs)("ol", {
                      className: H.scrollerInner,
                      "aria-label":
                        b.default.Messages.CHANNEL_MESSAGES_A11Y_LABEL.format({
                          channelName: C.name,
                        }),
                      ...X,
                      children: [
                        (0, a.jsx)("span", {
                          className: H.navigationDescription,
                          id: "messagesNavigationDescription",
                          "aria-hidden": !0,
                          children:
                            b.default.Messages
                              .CHANNEL_MESSAGES_A11Y_DESCRIPTION,
                        }),
                        V,
                        (0, a.jsx)("div", {
                          className: i({
                            [H.scrollerSpacer]: !x,
                            [H.empty]: 0 === E.length && !E.loadingMore,
                            [H.emptyForum]:
                              1 === E.length &&
                              !E.loadingMore &&
                              C.isForumPost() &&
                              (null === (t = E.first()) || void 0 === t
                                ? void 0
                                : t.isFirstMessageInForumPost(C)),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                Z,
              ],
            }),
          });
        },
        (e, t) =>
          null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden
      );
      var U = s.memo(function (e) {
        let {
            channel: t,
            showingQuarantineBanner: n,
            forceCompact: l = !1,
            forceCozy: i = !1,
            ...r
          } = e,
          {
            canManageMessages: u,
            permissionVersion: d,
            canChat: p,
          } = (function (e) {
            let t = e.getGuildId(),
              n = (0, o.useStateFromStores)(
                [_.default],
                () => null == t || _.default.canChatInGuild(t),
                [t]
              ),
              { canManageMessages: a, permissionVersion: s } = (0,
              o.useStateFromStoresObject)(
                [A.default],
                () => ({
                  canManageMessages: A.default.can(
                    j.Permissions.MANAGE_MESSAGES,
                    e
                  ),
                  permissionVersion:
                    null != t ? A.default.getGuildVersion(t) : null,
                }),
                [e, t]
              );
            return { canChat: n, permissionVersion: s, canManageMessages: a };
          })(t),
          {
            messageGroupSpacing: L,
            fontSize: y,
            messageDisplayCompact: O,
            renderSpoilers: D,
            keyboardModeEnabled: P,
          } = (function () {
            let e = m.MessageDisplayCompact.useSetting(),
              t = m.RenderSpoilers.useSetting(),
              {
                messageGroupSpacing: n,
                fontSize: a,
                keyboardModeEnabled: s,
              } = (0, o.useStateFromStoresObject)([f.default], () => {
                let {
                  messageGroupSpacing: e,
                  fontSize: t,
                  keyboardModeEnabled: n,
                } = f.default;
                return {
                  messageGroupSpacing: e,
                  fontSize: t,
                  keyboardModeEnabled: n,
                };
              });
            return {
              messageGroupSpacing: n,
              messageDisplayCompact: e,
              renderSpoilers: t,
              fontSize: a,
              keyboardModeEnabled: s,
            };
          })(),
          {
            messages: b,
            channelStream: H,
            oldestUnreadMessageId: U,
            editingMessageId: k,
          } = (function (e) {
            var t, n;
            let a = (0, o.useStateFromStores)(
                [T.default],
                () => T.default.getMessages(e.id),
                [e.id]
              ),
              l = (0, o.useStateFromStores)(
                [M.default],
                () => {
                  var t;
                  return null !==
                    (t = M.default.getOldestUnreadMessageId(e.id)) &&
                    void 0 !== t
                    ? t
                    : null;
                },
                [e.id]
              ),
              { enabled: i } = C.default.useExperiment(
                { location: "41de6d_1" },
                { autoTrackExposure: !1 }
              ),
              r =
                null !==
                  (n =
                    null === (t = N.default.getUser(g.default.getId())) ||
                    void 0 === t
                      ? void 0
                      : t.hasFlag(j.UserFlags.SPAMMER)) &&
                void 0 !== n &&
                n,
              u = (0, c.useChannelSummariesExperiment)(e),
              d = (0, h.default)("use_topic_dividers_in_chat"),
              f = (0, o.useStateFromStoresArray)(
                [E.default],
                () => {
                  var t;
                  return u &&
                    d &&
                    null !== (t = E.default.summaries(e.id)) &&
                    void 0 !== t
                    ? t
                    : [];
                },
                [u, e.id, d]
              ),
              p = (0, o.useStateFromStores)(
                [E.default],
                () => (u ? E.default.selectedSummary(e.id) : null),
                [u, e.id]
              ),
              m = s.useMemo(
                () =>
                  (0, x.default)({
                    channel: e,
                    messages: a,
                    oldestUnreadMessageId: l,
                    treatSpam: i && !r,
                    summaries: f,
                    selectedSummary: p,
                  }),
                [a, e, l, i, f, p]
              ),
              _ = (0, o.useStateFromStores)([S.default], () => {
                var t;
                return null === (t = S.default.getEditingMessage(e.id)) ||
                  void 0 === t
                  ? void 0
                  : t.id;
              });
            return {
              messages: a,
              channelStream: m,
              oldestUnreadMessageId: l,
              editingMessageId: _,
            };
          })(t);
        return (0, a.jsx)(v.ObscuredDisplayContext.Provider, {
          value: (0, R.default)(D, u),
          children: (0, a.jsx)(F, {
            ...r,
            messageGroupSpacing: L,
            showNewMessagesBar: !0,
            channel: t,
            messageDisplayCompact: !i && (l || O),
            messages: b,
            channelStream: H,
            permissionVersion: d,
            uploads: (0, o.useStateFromStores)(
              [I.default],
              () => I.default.getFiles(t.id),
              [t]
            ),
            unreadCount: (0, o.useStateFromStores)(
              [M.default],
              () => M.default.getUnreadCount(t.id),
              [t]
            ),
            hasUnreads: null != U,
            canChat: p,
            editingMessageId: k,
            fontSize: y,
            keyboardModeEnabled: P,
            showingQuarantineBanner: n,
          }),
        });
      });
    },
    891405: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("394846"),
        l = n("77078"),
        i = n("558986"),
        r = n("79945"),
        o = n("149279"),
        u = n("958706"),
        d = n("782340"),
        c = n("197161");
      function f(e) {
        let {
          channel: t,
          message: n,
          togglePopout: f,
          renderEmojiPicker: h,
          shouldShow: C,
        } = e;
        return (0, a.jsx)(l.Popout, {
          renderPopout: e => {
            let { closePopout: a } = e;
            return h(t, n, a, !1);
          },
          shouldShow: C,
          onRequestClose: f,
          position: s.isMobile ? "top" : "left",
          align: s.isMobile ? "center" : "top",
          children: (e, t) => {
            let { onClick: n, ...s } = e,
              { isShown: h } = t;
            return (0, a.jsx)(
              l.Tooltip,
              {
                disableTooltipPointerEvents: !1,
                text: d.default.Messages.ADD_REACTION,
                color: l.TooltipColors.PRIMARY,
                "aria-label": d.default.Messages.ADD_REACTION,
                hideOnClick: !0,
                tooltipClassName: c.tooltip,
                children: e => {
                  let { onMouseEnter: t, onMouseLeave: n, onClick: l } = e;
                  return (0, a.jsx)(o.Button, {
                    onMouseEnter: () => {
                      null == t || t(),
                        (0, i.initiateEmojiInteraction)(
                          u.EmojiInteractionPoint.MessageContextMenuMouseEntered
                        );
                    },
                    onMouseLeave: n,
                    onClick: () => {
                      f(), null == l || l();
                    },
                    "aria-label": d.default.Messages.ADD_REACTION,
                    selected: h,
                    ...s,
                    children: (0, a.jsx)(r.default, { className: c.icon }),
                  });
                },
              },
              "add-reaction"
            );
          },
        });
      }
    },
    777484: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var a = n("118810");
      function s(e, t) {
        let n = e.offsetTop,
          s = e.offsetParent;
        for (; null != s; ) {
          var l;
          if (s === t || !(0, a.isElement)(s, HTMLElement)) break;
          (n += null !== (l = s.offsetTop) && void 0 !== l ? l : 0),
            (s = s.offsetParent);
        }
        return n;
      }
    },
    31511: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n("884691"),
        s = n("974667"),
        l = n("378765"),
        i = n("659500"),
        r = n("154864"),
        o = n("894488"),
        u = n("49111");
      function d(e) {
        let { scrollerRef: t, ...n } = e,
          d = a.useCallback(() => {
            let e = t.current;
            return null == e
              ? Promise.resolve()
              : new Promise(t => {
                  e.scrollToBottom({
                    callback: () => requestAnimationFrame(t),
                  });
                });
          }, []),
          c = a.useCallback(() => {
            let e = t.current;
            return null == e
              ? Promise.resolve()
              : new Promise(t => {
                  e.scrollToTop({ callback: () => requestAnimationFrame(t) });
                });
          }, []),
          f = a.useCallback(
            e => {
              var a, s, l;
              if (!n.keyboardModeEnabled) return;
              let i =
                  null === (s = t.current) || void 0 === s
                    ? void 0
                    : null === (a = s.getScrollerNode()) || void 0 === a
                      ? void 0
                      : a.ownerDocument,
                r = null == i ? void 0 : i.querySelector(e);
              null != r &&
                (null === (l = t.current) ||
                  void 0 === l ||
                  l.scrollIntoViewNode({
                    node: r,
                    padding: 4 * o.MESSAGE_PADDING,
                    callback: () => (null == r ? void 0 : r.focus()),
                  }));
            },
            [n.keyboardModeEnabled]
          ),
          h = a.useCallback(() => {
            !n.hasMoreAfter &&
              i.ComponentDispatch.dispatchToLastSubscribed(
                u.ComponentActions.TEXTAREA_FOCUS
              );
          }, [n.hasMoreAfter]),
          C = (0, s.default)({
            id: r.MESSAGE_ID_PREFIX,
            preserveFocusPosition: !1,
            setFocus: f,
            isEnabled: n.keyboardModeEnabled && !n.isEditing,
            scrollToStart: c,
            scrollToEnd: d,
            onNavigateNextAtEnd: h,
          }),
          p = a.useCallback(
            e => {
              let { atEnd: t = !1 } = e;
              t ? C.focusLastVisibleItem() : C.focusFirstVisibleItem();
            },
            [C]
          );
        return (
          (0, l.useComponentAction)({
            event: u.ComponentActions.FOCUS_MESSAGES,
            handler: p,
          }),
          C
        );
      }
    },
    210062: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var a = n("884691"),
        s = n("65597"),
        l = n("913144"),
        i = n("206230"),
        r = n("166257"),
        o = n("845579"),
        u = n("15935"),
        d = n("875978");
      function c() {
        let e = o.AnimateEmoji.useSetting(),
          t = (0, s.default)([i.default], () => i.default.useReducedMotion);
        a.useEffect(() => {
          function n(n) {
            let {
              messageId: a,
              channelId: s,
              emoji: l,
              optimistic: i,
              reactionType: o,
            } = n;
            !i &&
              o === d.ReactionTypes.BURST &&
              e &&
              !t &&
              (0, r.playBurstReaction)({
                channelId: s,
                messageId: a,
                emoji: l,
                key: u.BurstReactionEffectSource.EXTERNAL,
              });
          }
          return (
            l.default.subscribe("MESSAGE_REACTION_ADD", n),
            () => {
              l.default.unsubscribe("MESSAGE_REACTION_ADD", n);
            }
          );
        }, [e, t]);
      }
    },
    85470: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return L;
          },
        });
      var a = n("884691"),
        s = n("819689"),
        l = n("267567"),
        i = n("625149"),
        r = n("300322"),
        o = n("967241"),
        u = n("845579"),
        d = n("271938"),
        c = n("42203"),
        f = n("836417"),
        h = n("26989"),
        C = n("88093"),
        p = n("377253"),
        E = n("957255"),
        m = n("306160"),
        g = n("659500"),
        S = n("773336"),
        _ = n("299039"),
        T = n("61400"),
        A = n("913491"),
        M = n("583022"),
        I = n("363396"),
        N = n("49111");
      function v(e) {
        return E.default.can(N.Permissions.MANAGE_MESSAGES, e);
      }
      var L = function (e, t, n) {
        let L = a.useRef(n);
        return (
          (L.current = n),
          a.useCallback(
            n => {
              var a, R, x, y, O;
              if (!L.current || n.target !== n.currentTarget) return;
              let D = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
                P = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
                j = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
                b = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
                H = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
                F = p.default.getMessage(t, e),
                U = c.default.getChannel(t);
              if (null == F || null == U) return;
              let k = d.default.getId();
              switch (n.key.toLowerCase()) {
                case "backspace":
                  D &&
                    (v(U) || F.canDeleteOwnMessage(k)) &&
                    (n.preventDefault(), (0, I.deleteMessage)(U, F, n));
                  break;
                case "c":
                  ((0, S.isMac)() ? b : j) &&
                    m.SUPPORTS_COPY &&
                    (n.preventDefault(), (0, m.copy)(F.content));
                  break;
                case "e":
                  if (D) {
                    if (
                      ((a = k),
                      (R = U),
                      (x = F),
                      !R.isSystemDM() && (0, T.default)(x, a))
                    )
                      n.preventDefault(), (0, I.editMessage)(U, F);
                  }
                  break;
                case "p":
                  if (D || H) {
                    if (
                      ((y = U),
                      (O = F),
                      !y.isSystemDM() &&
                        !(0, A.default)(O) &&
                        (v(y) || y.isPrivate()))
                    )
                      n.preventDefault(), (0, I.pinMessage)(U, F, n);
                  }
                  break;
                case "+":
                  (D || H) &&
                    (function (e) {
                      let t =
                          null == e.guild_id ||
                          C.default.canChatInGuild(e.guild_id),
                        n = u.RenderReactions.getSetting(),
                        { disableReactionCreates: a } = (0, M.default)({
                          channel: e,
                          canChat: t,
                          renderReactions: n,
                          canAddNewReactions:
                            t && E.default.can(N.Permissions.ADD_REACTIONS, e),
                          isLurking:
                            null != e.guild_id &&
                            l.default.isLurking(e.guild_id),
                          isGuest:
                            null != e.guild_id &&
                            h.default.isCurrentUserGuest(e.guild_id),
                          isActiveChannelOrUnarchivableThread: (0,
                          r.getIsActiveChannelOrUnarchivableThread)(e),
                        });
                      return !a && n;
                    })(U) &&
                    (n.preventDefault(),
                    g.ComponentDispatch.dispatchKeyed(
                      N.ComponentActionsKeyed.TOGGLE_REACTION_POPOUT,
                      F.id,
                      { emojiPicker: !0 }
                    ));
                  break;
                case "r":
                  (D || H) &&
                    (0, i.canReplyToMessage)(U, F) &&
                    (n.preventDefault(), (0, I.replyToMessage)(U, F, n));
                  break;
                case "t":
                  if (D && (0, r.computeCanStartPublicThread)(U, F))
                    n.preventDefault(),
                      (0, o.openThreadSidebarForCreating)(
                        U,
                        F,
                        "Message Shortcut"
                      );
                  else if (F.hasFlag(N.MessageFlags.HAS_THREAD)) {
                    let e = c.default.getChannel(
                      _.default.castMessageIdAsChannelId(F.id)
                    );
                    null != e &&
                      (D || H) &&
                      (n.preventDefault(),
                      (0, o.openThreadSidebarForViewing)(e, H));
                  }
                  break;
                case "enter":
                  P && (n.preventDefault(), (0, I.markMessageUnread)(U, F));
                  break;
                case "escape":
                  f.default.isEditing(U.id, F.id)
                    ? s.default.endEditMessage(U.id)
                    : g.ComponentDispatch.dispatch(
                        N.ComponentActions.TEXTAREA_FOCUS
                      );
              }
            },
            [e, t]
          )
        );
      };
    },
    120379: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return M;
          },
        }),
        n("222007"),
        n("424973");
      var a = n("884691"),
        s = n("917351"),
        l = n.n(s),
        i = n("118810"),
        r = n("406189"),
        o = n("819689"),
        u = n("267363"),
        d = n("244201"),
        c = n("206230"),
        f = n("393414"),
        h = n("793237"),
        C = n("162805"),
        p = n("299039"),
        E = n("556118"),
        m = n("777484"),
        g = n("894488"),
        S = n("49111");
      function _(e) {
        var t, n;
        if (null == e.jumpTargetId || !e.ready) return null;
        let { jumpTargetId: a, jumpTargetOffset: s } = e;
        if (
          e.has(a) ||
          (!e.hasMoreBefore &&
            a === p.default.castChannelIdAsMessageId(e.channelId))
        ) {
          if (0 === s) return a;
          let n = e.getByIndex(e.indexOf(a) + s);
          return null !== (t = null == n ? void 0 : n.id) && void 0 !== t
            ? t
            : a;
        }
        let l = [
            a,
            ...e.map(e => {
              let { id: t } = e;
              return t;
            }),
          ].sort(p.default.compare),
          i = l.indexOf(a),
          r =
            null !== (n = l[i + (Math.abs(s) > 0 ? s : 1)]) && void 0 !== n
              ? n
              : l[i - 1];
        return null != r ? r : null;
      }
      let T = { scrollTop: 0, scrollHeight: 0, offsetHeight: 0 };
      class A {
        isReady() {
          return this.props.messages.ready;
        }
        isLoading() {
          return this.loading || this.props.messages.loadingMore;
        }
        isPinned() {
          return this.pinned;
        }
        isJumping() {
          return this.jumping;
        }
        isDragging() {
          return this.dragging;
        }
        isInitialized() {
          return void 0 === this.initialScrollTop;
        }
        isScrollLoadingDisabled() {
          return (
            this.isLoading() ||
            !this.isInitialized() ||
            this.isJumping() ||
            this.isDragging() ||
            !this.props.canLoadMore
          );
        }
        isActivelyScrolling() {
          return this.scrollCounter >= 5;
        }
        getDocument() {
          var e, t;
          return null === (t = this.ref.current) || void 0 === t
            ? void 0
            : null === (e = t.getScrollerNode()) || void 0 === e
              ? void 0
              : e.ownerDocument;
        }
        getElementFromMessageId(e) {
          let t = this.getDocument(),
            {
              channel: { id: n },
            } = this.props;
          return null == t ? null : (0, E.getElementFromMessage)(t, n, e);
        }
        isScrolledToBottom() {
          let {
            scrollTop: e,
            scrollHeight: t,
            offsetHeight: n,
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : this.getScrollerState();
          return (
            e >= t - n - g.MESSAGE_PADDING && !this.props.messages.hasMoreAfter
          );
        }
        mergePropsAndUpdate(e) {
          this.mergePropsAndUpdate_(e),
            this.props.messages.ready && this.enableAutomaticAck();
        }
        mergePropsAndUpdate_(e) {
          let t = this.props.messages,
            n = this.props.focusId;
          this.props = { ...e };
          let { offsetHeight: a, scrollHeight: s } = this.getScrollerState(),
            l = this.isHeightChange(a, s);
          if (
            ((this.offsetHeightCache = a),
            (this.scrollHeightCache = s),
            (this.loading = e.messages.loadingMore),
            this.isInitialized() || this.isReady())
          ) {
            if (!this.isInitialized()) {
              this.restoreScroll();
              return;
            }
          } else {
            null == e.messages.jumpTargetId &&
              this.scrollTo(Number.MAX_SAFE_INTEGER);
            return;
          }
          if (null != e.messages.jumpTargetId) {
            if (this.isLoading()) return;
            let n = _(e.messages);
            if (
              null == n ||
              this.isJumping() ||
              e.messages.jumpSequenceId === t.jumpSequenceId
            ) {
              if (this.isJumping()) {
                null != n ? this.scrollToMessage(n, !0) : (this.jumping = !1);
                return;
              }
            } else {
              let a;
              let s = t.first();
              null != s &&
                e.messages.last() !== t.last() &&
                e.messages.first() !== t.first() &&
                (a = p.default.extractTimestamp(s.id)),
                this.scrollToMessage(n, !0, a);
              return;
            }
          }
          if (
            e.messages.jumpedToPresent &&
            t.jumpSequenceId !== e.messages.jumpSequenceId
          ) {
            (this.jumping = !0), this.scrollTo(0), this.setScrollToBottom(!0);
            return;
          }
          let i = e.messages.last(),
            r = t.last();
          if (
            null != i &&
            i.state === S.MessageStates.SENDING &&
            (null == r ? void 0 : r.id) !== i.id
          ) {
            this.setScrollToBottom();
            return;
          }
          let { focusId: o } = this.props;
          if (null != o && n !== o) {
            let e = this.getElementFromMessageId(o);
            if (null != e) {
              var u;
              null === (u = this.ref.current) ||
                void 0 === u ||
                u.scrollIntoViewNode({
                  node: e,
                  padding: g.MESSAGE_PADDING,
                  callback: this.handleScroll,
                });
              return;
            }
          }
          l && this.fixScrollPosition(a, s);
        }
        getAnchorData(e, t, n) {
          var a;
          let s = this.getElementFromMessageId(e),
            l =
              null === (a = this.ref.current) || void 0 === a
                ? void 0
                : a.getScrollerNode();
          if (!(0, i.isElement)(s) || null == l) return null;
          let { offsetHeight: r } = s,
            o = (0, m.default)(s, l),
            u = o - t;
          return (
            null != n && (u = Math.max(-r, Math.min(n, u))),
            {
              id: e,
              offsetFromTop: u,
              offsetTop: o,
              offsetHeight: r,
              clamped: null != u,
            }
          );
        }
        cleanAutomaticAnchor() {
          this.setAutomaticAnchor(null);
        }
        newMessageBarBuffer() {
          return this.props.channel.isForumPost()
            ? g.NEW_MESSAGE_BAR_BUFFER_LARGE
            : g.NEW_MESSAGE_BAR_BUFFER;
        }
        findAnchor() {
          let { messages: e, hasUnreads: t, channel: n } = this.props,
            a = this.getScrollerState(),
            { scrollTop: s } = a,
            l =
              t && s >= this.newMessageBarBuffer()
                ? this.newMessageBarBuffer()
                : 0,
            i = null,
            r = t => {
              var a;
              return -1 === t
                ? p.default.castChannelIdAsMessageId(n.id)
                : null === (a = e._array[t]) || void 0 === a
                  ? void 0
                  : a.id;
            },
            o = -1,
            u = !1;
          for (;;) {
            let t = r(o);
            if (null == t) break;
            let n = this.getAnchorData(t, s);
            if (
              ((this._bottomAnchor = n),
              u && null != n && n.offsetTop > s + l + a.offsetHeight)
            )
              break;
            if (u) {
              o++;
              continue;
            }
            null != n &&
              (n.offsetTop >= s + l || o === e.length - 1) &&
              ((i = n), (u = !0)),
              o++;
          }
          return i;
        }
        findFetchAnchor(e) {
          let { messages: t } = this.props,
            { scrollTop: n } = this.getScrollerState(),
            a = e ? -1 : 1,
            s = null,
            l = t._array.length - 1;
          for (let i = e ? l : 0; null != t._array[i]; i += a) {
            let e = t._array[i],
              a = this.getAnchorData(e.id, n);
            if (null != a) {
              s = a;
              break;
            }
          }
          return s;
        }
        getAnchorFixData() {
          let e = [
            this.focusAnchor,
            this.isLoading() ? null : this.messageFetchAnchor,
            this.automaticAnchor,
          ];
          for (let t of e) {
            if (null == t) continue;
            let e = this.getElementFromMessageId(t.id);
            if (!(0, i.isElement)(e)) continue;
            let n =
              t === this.messageFetchAnchor
                ? t.offsetHeight - e.offsetHeight
                : 0;
            return {
              node: e,
              fixedScrollTop: e.offsetTop - (t.offsetFromTop + n),
            };
          }
          return null;
        }
        fixAnchorScrollPosition() {
          let e = this.getAnchorFixData();
          if (null == e) {
            this.handleScroll();
            return;
          }
          let { node: t, fixedScrollTop: n } = e;
          if (null != this.focusAnchor) {
            var a;
            this.isPinned()
              ? this.scrollTo(Number.MAX_SAFE_INTEGER, !1, this.handleScroll)
              : this.mergeTo(n, this.handleScroll),
              null === (a = this.ref.current) ||
                void 0 === a ||
                a.scrollIntoViewNode({
                  node: t,
                  padding: g.MESSAGE_PADDING,
                  callback: this.handleScroll,
                });
          } else this.mergeTo(n, this.handleScroll);
          this.isActivelyScrolling()
            ? this.setAutomaticAnchor(null)
            : this.setAutomaticAnchor(this.findAnchor()),
            !this.isLoading() && (this.messageFetchAnchor = null);
        }
        hasAnchor() {
          return (
            null != this.focusAnchor ||
            null != this.messageFetchAnchor ||
            null != this.automaticAnchor
          );
        }
        updateFocusAnchor(e, t, n) {
          let a = (this.focusAnchor =
            null != e ? this.getAnchorData(e, t) : null);
          null != a &&
            (a.offsetFromTop >= n || t > a.offsetTop + a.offsetHeight) &&
            (this.focusAnchor = null);
        }
        handleFocusAnchorScroll(e, t) {
          var n;
          this.updateFocusAnchor(
            null === (n = this.focusAnchor) || void 0 === n ? void 0 : n.id,
            e,
            t
          );
        }
        updateFetchAnchor(e, t, n) {
          var a;
          let s =
            null === (a = this.ref.current) || void 0 === a
              ? void 0
              : a.getScrollerNode();
          null != this.messageFetchAnchor &&
            null != s &&
            (this.messageFetchAnchor = this.getAnchorData(
              this.messageFetchAnchor.id,
              e,
              this.isInPlaceholderRegion({
                scrollTop: e,
                offsetHeight: t,
                scrollHeight: n,
              }) > 0
                ? t
                : void 0
            ));
        }
        updateAutomaticAnchor(e) {
          var t;
          let n =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            a =
              null === (t = this.ref.current) || void 0 === t
                ? void 0
                : t.getScrollerNode();
          if (null == this.automaticAnchor || null == a) return;
          let s = this.getAnchorData(this.automaticAnchor.id, e);
          n &&
            null != s &&
            null != this.automaticAnchor &&
            (s.offsetFromTop = this.automaticAnchor.offsetFromTop),
            this.setAutomaticAnchor(s);
        }
        setAutomaticAnchor(e) {
          var t, n;
          (this.automaticAnchor = e),
            null === (t = this._automaticAnchorCallbacks) ||
              void 0 === t ||
              t.forEach(e => e(this.automaticAnchor, this._bottomAnchor)),
            this.updateVisibleMessagesDebounced(
              null == e ? void 0 : e.id,
              null === (n = this._bottomAnchor) || void 0 === n ? void 0 : n.id
            );
        }
        getScrollerState() {
          var e, t;
          return null !==
            (t =
              null === (e = this.ref.current) || void 0 === e
                ? void 0
                : e.getScrollerState()) && void 0 !== t
            ? t
            : T;
        }
        isHeightChange(e, t) {
          return e !== this.offsetHeightCache || t !== this.scrollHeightCache;
        }
        isInPlaceholderRegion(e) {
          let { scrollTop: t, offsetHeight: n, scrollHeight: a } = e,
            { messages: s, placeholderHeight: l } = this.props;
          return s.hasMoreBefore && t < l && a > n
            ? 1
            : s.hasMoreAfter && t >= a - n - l
              ? 2
              : 0;
        }
        isInScrollTriggerLoadingRegion(e) {
          let { scrollTop: t, offsetHeight: n, scrollHeight: a } = e,
            { messages: s } = this.props;
          return s.hasMoreBefore &&
            t <= this.getOffsetToTriggerLoading("top", e) &&
            a > n
            ? 1
            : s.hasMoreAfter && t >= this.getOffsetToTriggerLoading("bottom", e)
              ? 2
              : 0;
        }
        handleScrollSpeed(e) {
          if (this.isJumping() || this.isDragging() || !this.props.canLoadMore)
            return;
          let { scrollTop: t, offsetHeight: n, scrollHeight: a } = e,
            {
              prevScrollTop: s,
              props: { placeholderHeight: l },
            } = this;
          if (((this.prevScrollTop = t), null == s)) return;
          let i = this.isInPlaceholderRegion(e),
            r = t - s;
          0 !== i &&
            (1 === i && t + r <= 0
              ? (this.mergeTo(l - n), (this.prevScrollTop = l - n))
              : 2 === i &&
                t + r >= a - n &&
                (this.mergeTo(a - l), (this.prevScrollTop = a - l)));
        }
        enableAutomaticAck() {
          this.isInitialized() &&
            !this.acking &&
            ((this.acking = !0),
            this.updateStoreDimensions(() => {
              (0, u.enableAutomaticAck)(
                this.props.channel.id,
                this.props.windowId
              );
            }));
        }
        fixScrollPosition(e, t) {
          (this.offsetHeightCache = e),
            (this.scrollHeightCache = t),
            this.fixJumpTarget(),
            this.isPinned() &&
            null == this.messageFetchAnchor &&
            null == this.focusAnchor
              ? this.scrollTo(Number.MAX_SAFE_INTEGER, !1, this.handleScroll)
              : this.fixAnchorScrollPosition();
        }
        fixJumpTarget() {
          if (!this.isJumping()) return;
          let { messages: e, hasUnreads: t } = this.props;
          if (null != e.jumpTargetId) {
            let n = _(e);
            if (null == n) return;
            let a = this.getElementFromMessageId(n);
            (0, i.isElement)(a)
              ? this.scrollTo(
                  this.getOffsetOrientationFromNode(
                    a,
                    "middle",
                    t ? this.newMessageBarBuffer() : g.MESSAGE_PADDING
                  ),
                  !0
                )
              : this.scrollToNewMessages(!0, "middle");
          } else this.scrollTo(Number.MAX_SAFE_INTEGER, !0);
        }
        scrollToNewMessages() {
          var e;
          let t =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "top",
            a = arguments.length > 2 ? arguments[2] : void 0,
            s =
              null === (e = this.getDocument()) || void 0 === e
                ? void 0
                : e.getElementById(g.NEW_MESSAGE_BAR_ID),
            l = () => {
              (this.jumping = !1),
                this.setAutomaticAnchor(this.findAnchor()),
                null != a && a(),
                this.handleScroll();
            };
          (this.pinned = !1),
            (this.jumping = t),
            null != s
              ? this.scrollTo(
                  this.getOffsetOrientationFromNode(
                    s,
                    n,
                    this.newMessageBarBuffer()
                  ),
                  t,
                  l
                )
              : this.scrollTo(this.getOffsetToPreventLoading("top"), t, l);
        }
        getOffsetOrientationFromNode(e, t) {
          var n;
          let a =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            s =
              null === (n = this.ref.current) || void 0 === n
                ? void 0
                : n.getScrollerNode();
          if (null == s) return 0;
          let l = this.getScrollerState(),
            i = (0, m.default)(e, s);
          return "middle" === t
            ? Math.min(
                i - 0.5 * l.offsetHeight + 0.5 * e.offsetHeight + -8,
                i - a
              )
            : i - a;
        }
        restoreScroll() {
          if (this.isInitialized()) return;
          let { initialScrollTop: e } = this;
          this.initialScrollTop = void 0;
          let t = _(this.props.messages);
          null != t
            ? this.scrollToMessage(t, !1)
            : this.props.hasUnreads &&
                this.props.channel.type !== S.ChannelTypes.GUILD_VOICE &&
                this.props.channel.type !== S.ChannelTypes.GUILD_STAGE_VOICE
              ? this.scrollToNewMessages()
              : null != e
                ? this.scrollTo(
                    e + this.props.placeholderHeight,
                    !1,
                    this.handleScroll
                  )
                : this.setScrollToBottom();
        }
        scrollTo(e) {
          var t;
          let n =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            a = arguments.length > 2 ? arguments[2] : void 0;
          null === (t = this.ref.current) ||
            void 0 === t ||
            t.scrollTo({
              to: e,
              animate: !c.default.useReducedMotion && n,
              callback: a,
            }),
            this.isPinned()
              ? this.updateStoreDimensions()
              : this.updateStoreDimensionsDebounced();
        }
        mergeTo(e, t) {
          var n;
          null === (n = this.ref.current) ||
            void 0 === n ||
            n.mergeTo({ to: e, callback: t }),
            this.isPinned()
              ? this.updateStoreDimensions()
              : this.updateStoreDimensionsDebounced();
        }
        setScrollToBottom() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { messages: t, channel: n } = this.props;
          if (t.hasMoreAfter) {
            var a, s;
            (a = n),
              o.default.jumpToPresent(a.id, S.MAX_MESSAGES_PER_CHANNEL),
              (0, f.transitionToGuild)(
                null !== (s = a.getGuildId()) && void 0 !== s ? s : S.ME,
                a.id
              );
          } else
            this.scrollTo(Number.MAX_SAFE_INTEGER, e, () => {
              (this.jumping = !1), this.handleScroll();
            });
        }
        updateStoreDimensions(e) {
          if (this.isJumping() || !this.isInitialized()) return;
          let { channel: t } = this.props;
          if (this.isPinned()) r.default.clearChannelDimensions(t.id, e);
          else {
            let { placeholderHeight: n } = this.props,
              {
                scrollTop: a,
                scrollHeight: s,
                offsetHeight: l,
              } = this.getScrollerState();
            r.default.updateChannelDimensions(t.id, a - n, s - n, l, e);
          }
        }
        scrollIntoViewRect() {}
        scrollPageUp() {
          var e;
          let t =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          null === (e = this.ref.current) ||
            void 0 === e ||
            e.scrollPageUp({ animate: t });
        }
        scrollPageDown() {
          var e;
          let t =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          null === (e = this.ref.current) ||
            void 0 === e ||
            e.scrollPageDown({ animate: t });
        }
        scrollToMessage(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
          if (null == this.ref.current) return;
          if (e === this.props.channel.id) {
            this.scrollTo(0);
            return;
          }
          let a = this.getElementFromMessageId(e);
          if (
            !this.isJumping() &&
            t &&
            null != n &&
            !c.default.useReducedMotion
          ) {
            let t = p.default.extractTimestamp(e);
            t > n ? this.scrollTo(0) : this.scrollTo(Number.MAX_SAFE_INTEGER);
          }
          (this.pinned = !1), (this.jumping = !0);
          let s = () => {
            (this.jumping = !1),
              (0, i.isElement)(a) &&
                c.default.keyboardModeEnabled &&
                a.focus({ preventScroll: !0 }),
              (this.scrollCounter = 0),
              this.handleScroll(),
              this._scrollCompleteCallbacks.forEach(e => e());
          };
          (0, i.isElement)(a)
            ? this.scrollTo(
                this.getOffsetOrientationFromNode(
                  a,
                  "middle",
                  this.props.hasUnreads
                    ? this.newMessageBarBuffer()
                    : g.MESSAGE_PADDING
                ),
                t,
                s
              )
            : this.scrollToNewMessages(t, "middle", s);
        }
        getOffsetToTriggerLoading(e, t) {
          let { scrollHeight: n, offsetHeight: a } = t,
            { messages: s, hasUnreads: l, placeholderHeight: i } = this.props;
          if ("top" === e)
            return s.hasMoreBefore
              ? l
                ? i - g.PLACEHOLDER_BUFFER - 2
                : i + 500
              : 0;
          return s.hasMoreAfter ? n - a - i - 500 : n - a;
        }
        getOffsetToPreventLoading(e) {
          let { messages: t } = this.props,
            n = 0;
          return (
            "top" === e && t.hasMoreBefore
              ? (n = 2)
              : "bottom" === e && t.hasMoreAfter && (n = -2),
            this.getOffsetToTriggerLoading(e, this.getScrollerState()) + n
          );
        }
        getSnapshotBeforeUpdate(e) {
          if (this.hasAnchor() || null != e) {
            let {
              scrollTop: t,
              offsetHeight: n,
              scrollHeight: a,
            } = this.getScrollerState();
            this.updateFocusAnchor(e, t, n),
              this.updateFetchAnchor(t, n, a),
              this.updateAutomaticAnchor(t);
          }
        }
        addAutomaticAnchorCallback(e) {
          let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          this._automaticAnchorCallbacks.push(e),
            (this._automaticAnchorCallbacks = l.uniq(
              this._automaticAnchorCallbacks
            )),
            !0 === t && this.setAutomaticAnchor(this.findAnchor());
        }
        removeAutomaticAnchorCallback(e) {
          this._automaticAnchorCallbacks = l.without(
            this._automaticAnchorCallbacks,
            e
          );
        }
        addScrollCompleteCallback(e) {
          this._scrollCompleteCallbacks.push(e),
            (this._scrollCompleteCallbacks = l.uniq(
              this._scrollCompleteCallbacks
            ));
        }
        removeScrollCompleteCallback(e) {
          this._scrollCompleteCallbacks = l.without(
            this._scrollCompleteCallbacks,
            e
          );
        }
        cleanup() {
          (this.acking = !1),
            this.updateStoreDimensionsDebounced.cancel(),
            this._automaticAnchorCallbacks.forEach(e =>
              this.removeAutomaticAnchorCallback(e)
            ),
            (0, u.disableAutomaticAck)(
              this.props.channel.id,
              this.props.windowId
            );
        }
        constructor(e) {
          var t,
            n = this;
          (this.ref = a.createRef()),
            (this.automaticAnchor = null),
            (this.messageFetchAnchor = null),
            (this.focusAnchor = null),
            (this.jumping = !1),
            (this.dragging = !1),
            (this.isAtBottom = !1),
            (this.prevScrollTop = null),
            (this.anchorTimeout = null),
            (this.initialScrollTop = null),
            (this.acking = !1),
            (this.scrollCounter = 0),
            (this.offsetHeightCache = 0),
            (this.scrollHeightCache = 0),
            (this.scrollTopCache = -1),
            (this._bottomAnchor = null),
            (this._automaticAnchorCallbacks = []),
            (this._scrollCompleteCallbacks = []),
            (this.updateVisibleMessagesDebounced = l.debounce(
              h.updateVisibleMessages,
              300
            )),
            (this.handleScroll = e => {
              var t;
              if (!this.isInitialized()) return;
              let n = this.getScrollerState(),
                a = this.isScrolledToBottom(n);
              if (
                (a !== this.isAtBottom &&
                  (a
                    ? ((this.isAtBottom = !0),
                      this.props.handleScrollToBottom())
                    : ((this.isAtBottom = !1),
                      this.props.handleScrollFromBottom())),
                n.offsetHeight !== this.offsetHeightCache ||
                  n.scrollHeight !== this.scrollHeightCache)
              )
                (this.scrollCounter = 0),
                  clearTimeout(this.anchorTimeout),
                  !this.isPinned() &&
                    (null == this.automaticAnchor
                      ? this.setAutomaticAnchor(this.findAnchor())
                      : this.updateAutomaticAnchor(n.scrollTop, !0)),
                  clearTimeout(this.anchorTimeout),
                  this.fixScrollPosition(n.offsetHeight, n.scrollHeight),
                  (this.scrollTopCache = n.scrollTop);
              else {
                if (
                  null != e &&
                  e.target !==
                    (null === (t = this.ref.current) || void 0 === t
                      ? void 0
                      : t.getScrollerNode())
                )
                  return;
                this.scrollTopCache !== n.scrollTop &&
                  ((this.pinned = a),
                  (this.scrollCounter = Math.min(this.scrollCounter + 1, 5)),
                  this.pinned
                    ? this.cleanAutomaticAnchor()
                    : null != this.automaticAnchor
                      ? this.updateAutomaticAnchor(n.scrollTop, !0)
                      : this.setAutomaticAnchor(this.findAnchor()),
                  (this.scrollTopCache = n.scrollTop),
                  clearTimeout(this.anchorTimeout),
                  (this.anchorTimeout = setTimeout(() => {
                    (this.scrollCounter = 0),
                      (this.anchorTimeout = null),
                      (this.prevScrollTop = null);
                    let { scrollHeight: e, offsetHeight: t } =
                      this.getScrollerState();
                    this.isHeightChange(t, e)
                      ? this.handleScroll()
                      : (this.cleanAutomaticAnchor(),
                        !this.isPinned() &&
                          this.setAutomaticAnchor(this.findAnchor()));
                  }, 35)));
              }
              if (
                (this.handleFocusAnchorScroll(n.scrollTop, n.offsetHeight),
                this.updateStoreDimensionsDebounced(),
                this.isScrollLoadingDisabled())
              )
                return (
                  !this.props.canLoadMore && this.enableAutomaticAck(),
                  this.handleScrollSpeed(n)
                );
              let s = this.isInScrollTriggerLoadingRegion(n);
              1 === s
                ? this.loadMore()
                : 2 === s
                  ? this.loadMore(!0)
                  : this.enableAutomaticAck(),
                this.handleScrollSpeed(n);
            }),
            (this.handleResize = (e, t) => {
              let { offsetHeightCache: n, scrollHeightCache: a } = this;
              "container" === t
                ? (n = e.contentRect.height)
                : "content" === t && (a = e.contentRect.height),
                this.isHeightChange(n, a) && this.fixScrollPosition(n, a);
            }),
            (this.handleMouseDown = e => {
              e.target === e.currentTarget && (this.dragging = !0);
            }),
            (this.handleMouseUp = () => {
              (this.dragging = !1), this.handleScroll();
            }),
            (this.loadMore = function () {
              let e,
                t,
                a =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                { messages: s } = n.props;
              if (a) {
                let e = s.last();
                null != e && (t = e.id);
              } else {
                let t = s.first();
                null != t && (e = t.id);
              }
              (n.messageFetchAnchor = n.findFetchAnchor(a)),
                (n.loading = !0),
                o.default.fetchMessages({
                  channelId: n.props.channel.id,
                  before: e,
                  after: t,
                  limit: S.MAX_MESSAGES_PER_CHANNEL,
                  truncate: !0,
                });
            }),
            (this.updateStoreDimensionsDebounced = l.debounce(
              this.updateStoreDimensions,
              200
            )),
            (this.props = e),
            (this.loading = e.messages.loadingMore);
          let s = C.default.getChannelDimensions(e.channel.id);
          null != e.messages.jumpTargetId
            ? (this.pinned = !1)
            : ((this.initialScrollTop =
                null !== (t = null == s ? void 0 : s.scrollTop) && void 0 !== t
                  ? t
                  : null),
              (this.pinned = null == s));
        }
      }
      function M(e) {
        let {
            messages: t,
            channel: n,
            compact: s,
            hasUnreads: l,
            focusId: i,
            placeholderHeight: r,
            canLoadMore: o = !0,
            handleScrollToBottom: u,
            handleScrollFromBottom: c,
          } = e,
          { windowId: f } = a.useContext(d.default),
          [h] = a.useState(
            () =>
              new A({
                messages: t,
                channel: n,
                compact: s,
                hasUnreads: l,
                focusId: i,
                placeholderHeight: r,
                canLoadMore: o,
                windowId: f,
                handleScrollToBottom: u,
                handleScrollFromBottom: c,
              })
          );
        return (
          h.getSnapshotBeforeUpdate(i),
          a.useLayoutEffect(() =>
            h.mergePropsAndUpdate({
              messages: t,
              channel: n,
              compact: s,
              hasUnreads: l,
              focusId: i,
              placeholderHeight: r,
              canLoadMore: o,
              windowId: f,
              handleScrollToBottom: u,
              handleScrollFromBottom: c,
            })
          ),
          a.useLayoutEffect(() => () => h.cleanup(), [h]),
          h
        );
      }
    },
    221068: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return $;
          },
        }),
        n("424973"),
        n("222007"),
        n("843762");
      var a = n("37983"),
        s = n("884691"),
        l = n("446674"),
        i = n("819689"),
        r = n("783480"),
        o = n("734575"),
        u = n("206230"),
        d = n("716241"),
        c = n("34695"),
        f = n("554393"),
        h = n("120027"),
        C = n("934288"),
        p = n("144491"),
        E = n("764828"),
        m = n("898436"),
        g = n("894295"),
        S = n("933152"),
        _ = n("820899"),
        T = n("347738"),
        A = n("339670"),
        M = n("21763"),
        I = n("719926"),
        N = n("957255"),
        v = n("660478"),
        L = n("18494"),
        R = n("697218"),
        x = n("410889"),
        y = n("888400"),
        O = n("718517"),
        D = n("299039"),
        P = n("154864"),
        j = n("383667"),
        b = n("459776"),
        H = n("921450"),
        F = n("366757"),
        U = n("699473"),
        k = n("556118"),
        G = n("342009"),
        B = n("97810"),
        w = n("933629"),
        V = n("88243"),
        W = n("753089"),
        Z = n("210062"),
        z = n("321933"),
        K = n("894488"),
        Y = n("49111"),
        q = n("324252"),
        X = n("782340");
      function J(e) {
        return (
          null != e &&
          e.type === Y.ChannelStreamTypes.MESSAGE &&
          e.content.id === e.groupId
        );
      }
      let Q = s.memo(function (e) {
        let { file: t, channel: n, user: s, isGroupStart: l } = e;
        return (0, a.jsx)(U.default, {
          isGroupStart: l,
          channel: n,
          message: new I.default({
            id: t.id,
            key: "pending-upload-".concat(t.id),
            type: Y.MessageTypes.DEFAULT,
            author: s,
            channel_id: n.id,
            customRenderedContent: {
              hasSpoilerEmbeds: !1,
              content: (0, a.jsx)(x.AttachmentUpload, {
                filename: t.name,
                progress: null != t.progress ? t.progress : 0,
                size: t.currentSize,
                onCancelUpload: () => {
                  r.default.cancel(t);
                },
              }),
            },
          }),
        });
      });
      function $(e) {
        var t;
        let n,
          s,
          r,
          {
            channel: x,
            messages: U,
            unreadCount: $,
            showNewMessagesBar: ee,
            messageDisplayCompact: et,
            channelStream: en,
            uploads: ea,
            scrollManager: es,
            specs: el,
            filterAfterTimestamp: ei,
            showingQuarantineBanner: er,
          } = e,
          eo = R.default.getCurrentUser(),
          eu = () => es.isInitialized() || U.ready,
          ed = (0, F.useShowConvoStarterInDM)(x),
          ec =
            U.length > 0 &&
            (null === (t = U.first()) || void 0 === t
              ? void 0
              : t.isFirstMessageInForumPost(x)),
          ef = (0, o.useChannelSummariesExperiment)(x),
          eh = (0, l.useStateFromStores)([T.default], () =>
            T.default.shouldShowTopicsBar()
          ),
          eC = (0, S.useStrangerDangerWarning)(x.id, q.LOCATION_CONTEXT_WEB),
          ep = (0, m.useInappropriateConversationBannerForChannel)(
            x.id,
            q.LOCATION_CONTEXT_WEB
          ),
          eE = (0, H.default)(),
          em = null != eC ? eC : ep;
        x.isDM() &&
          null != em &&
          (n =
            em.type === E.SafetyWarningTypes.STRANGER_DANGER
              ? (0, a.jsx)(_.StrangerDangerWarningBanner, {
                  channelId: x.id,
                  warningId: em.id,
                  senderId: x.getRecipientId(),
                })
              : (0, a.jsx)(g.InappropriateConversationWarningBanner, {
                  channelId: x.id,
                  warningId: em.id,
                  senderId: x.getRecipientId(),
                }));
        let eg =
            x.isForumPost() && !ec
              ? (0, a.jsx)(f.default, { postId: x.id })
              : null,
          eS = (0, C.default)(x.id);
        (0, Z.default)();
        let e_ = null,
          eT = [],
          eA = en.map((e, t) => {
            if (e.type === Y.ChannelStreamTypes.DIVIDER) {
              var n, s;
              let l = null != e.unreadId;
              return null != ei
                ? null
                : e.isSummaryDivider
                  ? (0, a.jsx)(M.default, {
                      index: t,
                      item: e,
                      channel: x,
                      isBeforeGroup: null == e.content && J(en[t + 1]),
                    })
                  : (0, a.jsx)(
                      B.default,
                      {
                        isUnread: l,
                        isBeforeGroup: null == e.content && J(en[t + 1]),
                        id: l ? K.NEW_MESSAGE_BAR_ID : void 0,
                        children: e.content,
                      },
                      "divider-".concat(
                        null !==
                          (s =
                            null !== (n = e.contentKey) && void 0 !== n
                              ? n
                              : e.unreadId) && void 0 !== s
                          ? s
                          : t
                      )
                    );
            }
            if (e.type === Y.ChannelStreamTypes.FORUM_POST_ACTION_BAR)
              return (0, a.jsx)(
                f.default,
                {
                  parentChannelId: x.parent_id,
                  postId: x.id,
                  isLastItem: t + 1 === en.length,
                  isFirstMessage: !0,
                },
                "forum-post-action-bar-".concat(x.id)
              );
            if (
              e.type === Y.ChannelStreamTypes.MESSAGE_GROUP_BLOCKED ||
              e.type === Y.ChannelStreamTypes.MESSAGE_GROUP_SPAMMER
            ) {
              let t;
              return (
                (t =
                  e.type === Y.ChannelStreamTypes.MESSAGE_GROUP_BLOCKED
                    ? X.default.Messages.BLOCKED_MESSAGE_COUNT
                    : X.default.Messages.HIDDEN_SPAM_MESSAGE_COUNT),
                (0, a.jsx)(
                  G.default,
                  {
                    unreadId: K.NEW_MESSAGE_BAR_ID,
                    messages: e,
                    channel: x,
                    compact: et,
                    collapsedReason: t,
                  },
                  e.key
                )
              );
            }
            if (
              null != ei &&
              ei > e.content.timestamp.getTime() * O.default.Millis.SECOND
            )
              return;
            let l = N.default.can(Y.Permissions.CREATE_INSTANT_INVITE, x);
            if ((0, j.default)(e.content, l)) return;
            e.type === Y.ChannelStreamTypes.MESSAGE && null == e_ && (e_ = e);
            let i =
                e.groupId === (null == e_ ? void 0 : e_.groupId)
                  ? e_.content.id
                  : e.groupId,
              r =
                e.type === Y.ChannelStreamTypes.THREAD_STARTER_MESSAGE
                  ? k.ThreadStarterChatMessage
                  : k.default;
            return (0, a.jsx)(
              r,
              {
                compact: et,
                channel: x,
                message: e.content,
                groupId: i,
                flashKey: e.flashKey,
                id: (0, P.getMessageDOMId)(x.id, e.content.id),
                isLastItem: t >= en.length - 1,
                renderContentOnly: eS,
              },
              e.content.id
            );
          });
        eT.push(...eA);
        let eM = en[en.length - 1];
        if (
          (null != eo &&
            ea.forEach((e, t) => {
              let n =
                0 === t &&
                (0, b.isNewGroupItem)(
                  x,
                  eM,
                  new I.default({ type: Y.MessageTypes.DEFAULT, author: eo })
                );
              eT.push(
                (0, a.jsx)(
                  Q,
                  { file: e, channel: x, user: eo, isGroupStart: n },
                  "upload-".concat(e.id)
                )
              );
            }),
          U.hasMoreBefore && null == ei)
        ) {
          U.length > 0 &&
            eT.unshift(
              (0, a.jsx)(
                "div",
                { style: { height: K.PLACEHOLDER_BUFFER, flex: "0 0 auto" } },
                "buffer"
              )
            );
          let { useReducedMotion: e } = u.default;
          ((e && eu()) || !e) &&
            eT.unshift(
              (0, a.jsx)(V.default, { compact: et, ...el }, "has-more")
            );
        }
        if (
          ((!U.hasMoreBefore || null != ei) &&
            eT.unshift(
              (0, a.jsx)(
                c.default,
                { channel: x, showingBanner: er },
                "empty-message"
              )
            ),
          U.hasMoreAfter &&
            eT.push(
              (0, a.jsx)(V.default, { compact: et, ...el }, "has-more-after")
            ),
          !er && ed && eu() && eT.push((0, a.jsx)(W.default, { channel: x })),
          $ > 0 && ee && eu())
        ) {
          let e, t;
          let n = v.default.getOldestUnreadTimestamp(x.id),
            l = 0 !== n ? n : D.default.extractTimestamp(x.id),
            i = (0, y.isSameDay)(new Date(), new Date(l));
          if (
            (v.default.isEstimated(x.id)
              ? ((e = i
                  ? X.default.Messages.NEW_MESSAGES_ESTIMATED
                  : X.default.Messages.NEW_MESSAGES_ESTIMATED_WITH_DATE),
                (t = X.default.Messages.NEW_MESSAGES_ESTIMATED_SUMMARIES))
              : ((e = i
                  ? X.default.Messages.NEW_MESSAGES
                  : X.default.Messages.NEW_MESSAGES_WITH_DATE),
                (t = X.default.Messages.NEW_MESSAGES_SUMMARIES)),
            ef &&
              (0, o.channelEligibleForSummaries)(x) &&
              eE.includes(z.ChatOverlays.SUMMARIES))
          ) {
            let n = v.default.ackMessageId(x.id),
              i = (0, A.getUnreadTopicsCount)(
                x.id,
                v.default.getOldestUnreadMessageId(x.id)
              );
            if (
              ((0, d.trackWithMetadata)(
                Y.AnalyticEvents.SUMMARIES_UNREAD_BAR_VIEWED,
                {
                  num_unread_summaries: i,
                  num_unread_messages: $,
                  last_ack_message_id: n,
                  summaries_enabled_by_user: eh,
                  summaries_enabled_for_channel: (0, o.canSeeChannelSummaries)(
                    x
                  ),
                }
              ),
              (0, o.canSeeChannelSummaries)(x))
            ) {
              let n = eh
                ? t.format({ count: $ })
                : e.format({ count: $, timestamp: l });
              if (eh) {
                let e =
                  i > 0
                    ? (0, a.jsxs)("div", {
                        style: {
                          display: "flex",
                          textTransform: "none",
                          alignItems: "center",
                          position: "absolute",
                          left: "40%",
                        },
                        children: [
                          t.format({ count: $ }),
                          (0, a.jsx)(h.default, {
                            style: { paddingLeft: 8, paddingRight: 8 },
                            height: 4,
                            width: 4,
                          }),
                          X.default.Messages.NEW_SUMMARIES.format({ count: i }),
                        ],
                      })
                    : (0, a.jsx)("div", {
                        style: {
                          display: "flex",
                          textTransform: "none",
                          alignItems: "center",
                          position: "absolute",
                          left: "45%",
                        },
                        children: n,
                      });
                s = (0, a.jsx)(w.NewTopicsBar, {
                  scrollManager: es,
                  content: e,
                  channel: x,
                });
              } else {
                let e = (0, a.jsx)("div", {
                  style: {
                    display: "flex",
                    textTransform: "none",
                    alignItems: "center",
                  },
                  children:
                    i > 0
                      ? (0, a.jsxs)(a.Fragment, {
                          children: [
                            t.format({ count: $ }),
                            (0, a.jsx)(h.default, {
                              style: { paddingLeft: 8, paddingRight: 8 },
                              height: 4,
                              width: 4,
                            }),
                            X.default.Messages.NEW_SUMMARIES.format({
                              count: i,
                            }),
                          ],
                        })
                      : (0, a.jsx)(a.Fragment, { children: n }),
                });
                s = (0, a.jsx)(w.NewMessagesBar, {
                  content: e,
                  channelId: x.id,
                });
              }
            }
          } else
            eE.includes(z.ChatOverlays.NEW_MESSAGES) &&
              (s = (0, a.jsx)(w.NewMessagesBar, {
                content: e.format({ count: $, timestamp: l }),
                channelId: x.id,
              }));
        }
        if (
          (null == s &&
            (0, o.canSeeChannelSummaries)(x) &&
            eh &&
            eE.includes(z.ChatOverlays.SUMMARIES) &&
            (s = (0, a.jsx)(w.TopicsPill, { channel: x, scrollManager: es })),
          U.error)
        )
          r = (0, a.jsx)(w.ErrorLoadingBar, {
            loading: U.loadingMore,
            onClick: () => {
              var e;
              return (
                (e = x.id),
                void i.default.fetchMessages({
                  channelId: e,
                  limit: Y.MAX_MESSAGES_PER_CHANNEL,
                  truncate: !0,
                })
              );
            },
          });
        else if (U.hasMoreAfter && eu()) {
          let { jumpReturnTargetId: e } = U;
          r =
            U.loadingMore && U.jumpedToPresent
              ? (0, a.jsx)(w.JumpToPresentBar, {})
              : null != e
                ? (0, a.jsx)(w.JumpToPresentBar, {
                    type: w.JumpBarType.REPLY,
                    onClick: () => {
                      var t, n;
                      return (
                        (t = x),
                        (n = e),
                        void i.default.jumpToMessage({
                          channelId: t.id,
                          messageId: n,
                          flash: !0,
                        })
                      );
                    },
                  })
                : (0, a.jsx)(w.JumpToPresentBar, {
                    onClick: () =>
                      (function (e) {
                        i.default.jumpToPresent(
                          e.id,
                          Y.MAX_MESSAGES_PER_CHANNEL
                        );
                        let t = L.default.getChannelId();
                        e.id === t && (0, p.transitionToChannel)(e.id);
                      })(x),
                  });
        }
        return {
          channelStreamMarkup: eT,
          newMessagesBar: s,
          jumpToPresentBar: r,
          forumPostActionBar: eg,
          safetyWarningBanner: n,
        };
      }
    },
    922177: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("324898");
      function l(e, t) {
        let { message: n, compact: l } = e;
        return (0, a.jsx)(s.default, { message: n, content: t, compact: l });
      }
    },
    789790: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        }),
        n("702976");
      var a = n("37983");
      n("884691");
      var s = n("568734"),
        l = n("913491"),
        i = n("823674"),
        r = n("49111"),
        o = n("5762");
      function u(e) {
        let {
            setPopout: t,
            messagePopouts: {
              emojiPicker: n,
              emojiBurstPicker: u,
              moreUtilities: d,
            },
            isFocused: c,
            buttonProps: {
              message: f,
              channel: h,
              groupId: C,
              compact: p = !1,
            },
          } = e,
          E = f.state === r.MessageStates.SENDING,
          m = f.id === C,
          g = (0, s.hasFlag)(f.flags, r.MessageFlags.EPHEMERAL),
          S = f.state === r.MessageStates.SEND_FAILED;
        return E || (g && !S)
          ? null
          : (0, a.jsx)(i.default, {
              className: o.buttons,
              innerClassName: o.buttonsInner,
              isHeader: !p && m && !(0, l.default)(f),
              channel: h,
              message: f,
              setPopout: t,
              showEmojiPicker: n,
              showEmojiBurstPicker: u,
              showMoreUtilities: d,
              isFocused: c,
            });
      }
    },
    227984: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        });
      var a = n("37983"),
        s = n("884691"),
        l = n("93332"),
        i = n("587904"),
        r = n("913491"),
        o = n("865343"),
        u = n("909917"),
        d = n("380986"),
        c = n("49111");
      let f = s.memo(function (e) {
          let {
              message: t,
              channel: n,
              compact: i = !1,
              groupId: r,
              isGroupStart: o,
              usernameProfile: f,
              avatarProfile: h,
              setPopout: C,
              author: p,
              repliedMessage: E,
              roleIcon: m,
            } = e,
            g = (0, d.useContextMenuUser)(t.author.id, n.id),
            S = (0, d.useClickMessageAuthorUsername)(t, n, f, C),
            _ = (0, d.useClickMessageAuthorAvatar)(h, C),
            T = s.useCallback(
              () =>
                C({
                  usernameProfile: !1,
                  avatarProfile: !1,
                  referencedUsernameProfile: !1,
                }),
              [C]
            );
          return (0, a.jsx)(l.default, {
            guildId: n.guild_id,
            message: t,
            channel: n,
            repliedMessage: E,
            author: p,
            compact: i,
            subscribeToGroupId: r,
            showTimestampOnHover: !o && i && t.type !== c.MessageTypes.REPLY,
            renderPopout: u.default,
            showAvatarPopout: h,
            showUsernamePopout: f,
            onClickAvatar: _,
            onClickUsername: S,
            onContextMenu: g,
            onPopoutRequestClose: T,
            roleIcon: m,
          });
        }),
        h = s.memo(i.default);
      function C(e) {
        let {
            messageProps: t,
            setPopout: n,
            messagePopouts: s,
            replyReference: l,
            author: i,
            repliedMessage: u,
            roleIcon: d,
          } = e,
          { message: c, compact: C, channel: p, groupId: E } = t,
          { usernameProfile: m, avatarProfile: g } = s;
        if ((0, r.default)(c)) return null;
        let S = c.id === E;
        return S || C || null != l
          ? (0, a.jsx)(f, {
              message: c,
              channel: p,
              compact: C,
              subscribeToGroupId: E,
              isGroupStart: S,
              groupId: E,
              setPopout: n,
              usernameProfile: m,
              avatarProfile: g,
              author: i,
              repliedMessage: u,
              roleIcon: d,
            })
          : (0, a.jsx)(h, {
              compact: !0,
              timestamp: c.timestamp,
              isInline: !1,
              id: (0, o.getMessageTimestampId)(c),
              isVisibleOnlyOnHover: !0,
              cozyAlt: !0,
            });
      }
    },
    82080: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
        }),
        n("702976"),
        n("222007");
      var a = n("37983"),
        s = n("884691"),
        l = n("446674"),
        i = n("819689"),
        r = n("249561"),
        o = n("850391"),
        u = n("681060"),
        d = n("271938"),
        c = n("836417"),
        f = n("305961"),
        h = n("957255"),
        C = n("497880"),
        p = n("851220"),
        E = n("659500"),
        m = n("568734"),
        g = n("718422"),
        S = n("49111"),
        _ = n("5762");
      function T(e) {
        let { value: t, channel: n } = e;
        return (0, g.applyChatRestrictions)({
          type: o.ChatInputTypes.EDIT,
          content: t,
          channel: n,
          restrictMentions: !1,
          respectCooldown: !1,
        });
      }
      function A(e) {
        let { channel: t, message: n } = e,
          { id: o } = t,
          { id: u } = n,
          C = t.getGuildId(),
          E = (0, l.useStateFromStores)(
            [f.default],
            () => f.default.getGuild(C),
            [C]
          ),
          g = t.type === S.ChannelTypes.GUILD_ANNOUNCEMENT,
          A = null != E && E.hasFeature(S.GuildFeatures.NEWS),
          I = g && A,
          {
            editingMessage: N,
            editingTextValue: v,
            editingRichValue: L,
          } = (0, l.useStateFromStoresObject)(
            [c.default],
            () => ({
              editingMessage: c.default.getEditingMessage(o),
              editingTextValue: c.default.getEditingTextValue(o),
              editingRichValue: c.default.getEditingRichValue(o),
            }),
            [o]
          ),
          R = (0, l.useStateFromStores)([d.default], () => d.default.getId()),
          x = s.useCallback(
            (e, n, a) => {
              let { content: s } = a,
                l = h.default.can(S.Permissions.MANAGE_MESSAGES, t),
                o = null != N && null != N.author ? N.author.id : null,
                u = I && (o === R || l);
              return (
                u &&
                null != N &&
                (0, m.hasFlag)(N.flags, S.MessageFlags.CROSSPOSTED)
                  ? r.default.confirmEdit(e, n, s)
                  : i.default.editMessage(e, n, { content: s }),
                Promise.resolve()
              );
            },
            [N, I, R, t]
          ),
          y = s.useCallback(
            e =>
              (0, s.createElement)(M, {
                ...e,
                className: _.channelTextArea,
                key: u,
              }),
            [u]
          );
        return null != v && null != L
          ? (0, a.jsx)(p.default, {
              ref: void 0,
              channel: t,
              message: n,
              textValue: v,
              richValue: L,
              onCancel: i.default.endEditMessage,
              onChange: i.default.updateEditMessage,
              onConfirmDelete: r.default.confirmDelete,
              saveMessage: x,
              validateEdit: T,
              children: y,
            })
          : null;
      }
      function M(e) {
        let {
            textValue: t,
            richValue: n,
            message: l,
            channel: i,
            onChange: r,
            onSubmit: d,
            onKeyDown: c,
          } = e,
          [f, h] = s.useState(!0),
          C = s.useCallback(() => h(!0), []),
          p = s.useCallback(() => h(!1), []);
        return (
          s.useEffect(
            () => (
              E.ComponentDispatch.subscribe(
                S.ComponentActions.TEXTAREA_FOCUS,
                C
              ),
              E.ComponentDispatch.subscribe(
                S.ComponentActions.TEXTAREA_BLUR,
                p
              ),
              () => {
                E.ComponentDispatch.unsubscribe(
                  S.ComponentActions.TEXTAREA_FOCUS,
                  C
                ),
                  E.ComponentDispatch.unsubscribe(
                    S.ComponentActions.TEXTAREA_BLUR,
                    p
                  );
              }
            ),
            [C, p]
          ),
          (0, a.jsx)(
            u.default,
            {
              className: _.channelTextArea,
              textValue: t,
              richValue: n,
              channel: i,
              type: o.ChatInputTypes.EDIT,
              onChange: r,
              onSubmit: e => {
                let { value: t } = e;
                return d(t);
              },
              onKeyDown: c,
              focused: f,
              onFocus: C,
              onBlur: p,
            },
            l.id
          )
        );
      }
      function I(e, t, n) {
        let { message: s, channel: l } = e;
        return n
          ? (0, a.jsx)(A, { channel: l, message: s })
          : (0, a.jsx)(C.default, { message: s, content: t });
      }
    },
    535993: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n("37983"),
        s = n("884691"),
        l = n("446674"),
        i = n("27618"),
        r = n("341716"),
        o = n("380986");
      let u = s.memo(function (e) {
        var t;
        let {
            message: n,
            channel: u,
            compact: d = !1,
            interactionUsernameProfile: c,
            interactionAvatarProfile: f,
            interactionData: h,
            setPopout: C,
          } = e,
          p = (0, l.useStateFromStores)(
            [i.default],
            () =>
              null != n.interaction &&
              i.default.isBlocked(n.interaction.user.id),
            [n.interaction]
          ),
          E = (0, o.useContextMenuUser)(
            null === (t = n.interaction) || void 0 === t ? void 0 : t.user.id,
            u.id
          ),
          m = (0, o.useClickInteractionUserUsername)(n.interaction, u, c, C),
          g = (0, o.useClickInteractionUserAvatar)(f, C),
          S = (0, o.useClickInteractionCommandName)(h, C),
          _ = s.useCallback(
            () =>
              C({
                interactionUsernameProfile: !1,
                interactionAvatarProfile: !1,
                interactionData: !1,
              }),
            [C]
          );
        return (0, a.jsx)(r.default, {
          message: n,
          channel: u,
          compact: d,
          isInteractionUserBlocked: p,
          showAvatarPopout: f,
          showUsernamePopout: c,
          showDataPopout: h,
          onClickAvatar: g,
          onClickUsername: m,
          onClickCommand: S,
          onUserContextMenu: E,
          onPopoutRequestClose: _,
        });
      });
      function d(e, t, n) {
        let { message: s, channel: l, compact: i } = e,
          {
            interactionUsernameProfile: r,
            interactionAvatarProfile: o,
            interactionData: d,
          } = n;
        return null != s.interaction && "" !== s.interaction.displayName
          ? (0, a.jsx)(u, {
              message: s,
              channel: l,
              compact: i,
              setPopout: t,
              interactionUsernameProfile: r,
              interactionAvatarProfile: o,
              interactionData: d,
            })
          : null;
      }
    },
    144553: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return A;
          },
        });
      var a = n("37983"),
        s = n("884691"),
        l = n("446674"),
        i = n("933805"),
        r = n("843257"),
        o = n("634807"),
        u = n("846564"),
        d = n("950576"),
        c = n("256572"),
        f = n("27618"),
        h = n("93427"),
        C = n("700097"),
        p = n("95045"),
        E = n("574073"),
        m = n("909917"),
        g = n("380986"),
        S = n("49111"),
        _ = n("782340");
      let T = s.memo(function (e) {
        var t;
        let {
            baseMessage: n,
            referencedMessage: T,
            channel: A,
            compact: M = !1,
            referencedUsernameProfile: I,
            referencedAvatarProfile: N,
            setPopout: v,
          } = e,
          L = T.state === c.ReferencedMessageState.LOADED ? T.message : void 0,
          R = (0, E.useNullableMessageAuthor)(L),
          x = (0, o.isMessageNewerThanImprovedMarkdownEpoch)(
            (null !== (t = n.editedTimestamp) && void 0 !== t
              ? t
              : n.timestamp
            ).valueOf()
          ),
          y = s.useMemo(() => {
            if (null == L) return null;
            if (L.type === S.MessageTypes.USER_JOIN)
              return (0, i.astToString)(
                C.default
                  .getSystemMessageUserJoin(L.id)
                  .astFormat({
                    username: null != R ? R.nick : L.author.username,
                    usernameHook: e => e,
                  })
              );
            if (L.type === S.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE)
              return (0, i.astToString)(
                (0,
                r.getRoleSubscriptionPurchaseSystemMessageAstFormattedContent)({
                  username: null != R ? R.nick : L.author.username,
                  guildId: null == A ? void 0 : A.guild_id,
                  roleSubscriptionData: L.roleSubscriptionData,
                })
              );
            if (
              L.type === S.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION
            )
              return (0, i.astToString)(
                (0, u.getApplicationSubscriptionSystemMessageASTContent)({
                  application: null == L ? void 0 : L.application,
                  username: null == R ? void 0 : R.nick,
                })
              );
            else if (
              L.type === S.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_ADDED
            )
              return (0, i.astToString)(
                (0, d.getPrivateChannelIntegrationAddedSystemMessageASTContent)(
                  {
                    application: null == L ? void 0 : L.application,
                    username: null == R ? void 0 : R.nick,
                  }
                )
              );
            else if (
              L.type === S.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_REMOVED
            )
              return (0, i.astToString)(
                (0,
                d.getPrivateChannelIntegrationRemovedSystemMessageASTContent)({
                  application: null == L ? void 0 : L.application,
                  username: null == R ? void 0 : R.nick,
                })
              );
            else if (L.type === S.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT)
              return "" !== L.content
                ? L.content
                : _.default.Messages.DEADCHAT_PROMPT_1;
            if (null != L.content && "" !== L.content) {
              let e = L.isFirstMessageInForumPost(A)
                ? {
                    formatInline: !0,
                    noStyleAndInteraction: !0,
                    allowHeading: !0,
                    allowList: !0,
                    allowLinks: !0,
                  }
                : {
                    formatInline: !0,
                    allowHeading: x,
                    allowList: x,
                    allowLinks: !0,
                  };
              return (0, p.default)(L, e).content;
            }
            return null;
          }, [L, R, A, x]),
          O = (0, l.useStateFromStores)(
            [f.default],
            () => null != L && f.default.isBlocked(L.author.id),
            [L]
          ),
          D = (0, g.useContextMenuUser)(null == L ? void 0 : L.author.id, A.id),
          P = (0, g.useClickReply)(n, L, O),
          j = (0, g.useClickReferencedMessageAuthorUsername)(L, A, I, v),
          b = (0, g.useClickReferencedMessageAuthorAvatar)(N, v),
          H = s.useCallback(
            () =>
              v({ referencedUsernameProfile: !1, referencedAvatarProfile: !1 }),
            [v]
          ),
          F = (0, E.useNullableMessageAuthor)(n);
        return (0, a.jsx)(h.default, {
          repliedAuthor: R,
          baseMessage: n,
          channel: A,
          baseAuthor: F,
          referencedMessage: T,
          content: y,
          compact: M,
          isReplyAuthorBlocked: O,
          showAvatarPopout: N,
          showUsernamePopout: I,
          renderPopout: m.default,
          onClickAvatar: b,
          onClickUsername: j,
          onClickReply: P,
          onContextMenu: D,
          onPopoutRequestClose: H,
        });
      });
      function A(e, t, n, s, l) {
        let { message: i, channel: r, compact: o } = e,
          { referencedUsernameProfile: u, referencedAvatarProfile: d } = n,
          c =
            i.type === S.MessageTypes.REPLY &&
            null != s &&
            (0, a.jsx)(T, {
              baseMessage: i,
              replyReference: s,
              referencedMessage: l,
              channel: r,
              compact: o,
              setPopout: t,
              referencedUsernameProfile: u,
              referencedAvatarProfile: d,
            });
        return (0, a.jsx)(a.Fragment, { children: c });
      }
    },
    458079: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          recordChannelVisit: function () {
            return s;
          },
          recordBannerRender: function () {
            return l;
          },
        });
      var a = n("913144");
      function s(e, t) {
        a.default.dispatch({
          guildId: e,
          channelId: t,
          type: "UNREAD_SETTING_NOTICE_CHANNEL_VISIT",
        });
      }
      function l(e, t) {
        a.default.dispatch({
          guildId: e,
          channelId: t,
          type: "UNREAD_SETTING_NOTICE_RENDERED",
        });
      }
    },
    921314: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var a = n("759843"),
        s = n("428958");
      function l(e) {
        return (
          (0, s.default)(
            {
              type: a.ImpressionTypes.VIEW,
              name: a.ImpressionNames.NOTIFICATION_SETTING_UNREAD_NUDGE,
            },
            void 0,
            [e.id]
          ),
          null
        );
      }
    },
    862731: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        }),
        n("843762");
      var a = n("693566"),
        s = n.n(a),
        l = n("446674"),
        i = n("913144");
      let r = { channelVisits: new s({ max: 1e3 }), bannerRenders: [] };
      function o(e, t) {
        return e + t;
      }
      class u extends l.default.PersistedStore {
        initialize(e) {
          null != e &&
            (Array.isArray(e.bannerRenders) &&
              (r.bannerRenders = e.bannerRenders),
            null != e.channelVisitsDump &&
              r.channelVisits.load(e.channelVisitsDump));
        }
        getState() {
          return {
            bannerRenders: r.bannerRenders,
            channelVisitsDump: r.channelVisits.dump(),
          };
        }
        getNumberOfRenders() {
          var e, t;
          return null !==
            (t =
              null === (e = r.bannerRenders) || void 0 === e
                ? void 0
                : e.length) && void 0 !== t
            ? t
            : 0;
        }
        getNumberOfRendersSince(e) {
          var t;
          let n = null !== (t = r.bannerRenders) && void 0 !== t ? t : [];
          return n.filter(t => t >= Date.now() - 1e3 * e).length;
        }
        getNumberOfChannelVisitsSince(e, t, n) {
          var a;
          let s =
            null !== (a = r.channelVisits.get(e + t)) && void 0 !== a ? a : [];
          return s.filter(e => e >= Date.now() - 1e3 * n).length;
        }
      }
      (u.displayName = "UnreadSettingNoticeStore"),
        (u.persistKey = "UnreadSettingNoticeStore");
      var d = new u(i.default, {
        UNREAD_SETTING_NOTICE_RENDERED: function () {
          r.bannerRenders.length > 100 && r.bannerRenders.pop(),
            r.bannerRenders.unshift(Date.now());
        },
        UNREAD_SETTING_NOTICE_CHANNEL_VISIT: function (e) {
          var t;
          let { guildId: n, channelId: a } = e,
            s = n + a,
            l = null !== (t = r.channelVisits.get(s)) && void 0 !== t ? t : [];
          l.length > 100 && l.pop(),
            l.unshift(Date.now()),
            r.channelVisits.set(s, l);
        },
      });
    },
    652416: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var a = n("519705"),
        s = n("282109"),
        l = n("34676"),
        i = n("277796"),
        r = n("49111");
      function o(e, t, n) {
        a.default.updateChannelOverrideSettings(
          e,
          t,
          {
            flags: (0, i.withChannelUnreadFlags)(
              s.default.getChannelIdFlags(e, t),
              n
            ),
          },
          l.NotificationLabel.unreads(n),
          { object: r.AnalyticsObjects.NOTIFICATION_SETTING_UNREAD_NOTICE }
        );
      }
    },
    66945: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var a = n("884691"),
        s = n("446674"),
        l = n("233069"),
        i = n("282109"),
        r = n("47495"),
        o = n("458079"),
        u = n("862731"),
        d = n("133335");
      let c = Object.freeze({
        NOTICE_RENDER: { MAX: 1, PER_SECONDS: 600 },
        CHANNEL_VISTS: { MIN: 2, PER_SECONDS: 86400 },
      });
      function f(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = (0, r.useShouldUseNewNotificationSystem)("useShouldRenderBanner"),
          f = (0, s.useStateFromStores)(
            [u.default, i.default],
            () => {
              let { guild_id: t, id: n } = e;
              if (!l.CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING.has(e.type)) return !1;
              let a = i.default.resolveUnreadSetting(e),
                s = i.default.getChannelUnreadSetting(t, n),
                r = u.default.getNumberOfRendersSince(
                  c.NOTICE_RENDER.PER_SECONDS
                ),
                o = u.default.getNumberOfChannelVisitsSince(
                  t,
                  n,
                  c.CHANNEL_VISTS.PER_SECONDS
                );
              return (
                s === d.UnreadSetting.UNSET &&
                a !== d.UnreadSetting.ALL_MESSAGES &&
                r <= c.NOTICE_RENDER.MAX &&
                o >= c.CHANNEL_VISTS.MIN
              );
            },
            [e]
          );
        return (
          a.useEffect(() => {
            t && f && (0, o.recordBannerRender)(e.guild_id, e.id);
          }, [t, f, e.guild_id, e.id]),
          a.useEffect(() => {
            l.CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING.has(e.type) &&
              (0, o.recordChannelVisit)(e.guild_id, e.id);
          }, [e.guild_id, e.id, e.type]),
          {
            canRenderNotice: f && n,
            recordNoticeRender: () =>
              (0, o.recordBannerRender)(e.guild_id, e.id),
          }
        );
      }
    },
    247982: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var a = n("37983"),
        s = n("884691"),
        l = n("77078"),
        i = n("36694"),
        r = n("945330"),
        o = n("921314"),
        u = n("652416"),
        d = n("397336"),
        c = n("782340"),
        f = n("416034");
      function h(e) {
        return (
          s.useEffect(() => e.onChannelChange(), [e.channel.id]),
          (0, a.jsxs)("div", {
            className: f.notice,
            children: [
              (0, a.jsx)(o.default, { id: e.channel.id }),
              (0, a.jsx)("div", {
                className: f.info,
                children: (0, a.jsx)(l.Text, {
                  variant: "text-sm/medium",
                  children:
                    c.default.Messages.UNREAD_NOTIFICATION_SETTING_NOTICE,
                }),
              }),
              (0, a.jsxs)("div", {
                className: f.buttons,
                children: [
                  (0, a.jsxs)(l.Button, {
                    size: l.Button.Sizes.TINY,
                    look: l.Button.Looks.FILLED,
                    color: l.Button.Colors.PRIMARY,
                    className: f.button,
                    innerClassName: f.buttonInner,
                    onClick: () =>
                      (0, u.default)(
                        e.channel.guild_id,
                        e.channel.id,
                        d.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES
                      ),
                    children: [
                      (0, a.jsx)(i.default, {
                        height: 16,
                        width: 16,
                        style: { marginRight: 4 },
                      }),
                      c.default.Messages.YES_TEXT,
                    ],
                  }),
                  (0, a.jsx)(l.Button, {
                    style: { marginLeft: 8 },
                    size: l.Button.Sizes.TINY,
                    look: l.Button.Looks.FILLED,
                    color: l.Button.Colors.PRIMARY,
                    className: f.button,
                    innerClassName: f.buttonInner,
                    onClick: () =>
                      (0, u.default)(
                        e.channel.guild_id,
                        e.channel.id,
                        d.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS
                      ),
                    children: (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(r.default, {
                          height: 16,
                          width: 16,
                          style: { marginRight: 4 },
                        }),
                        c.default.Messages.NO_TEXT,
                      ],
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    396856: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var a = n("446674"),
        s = n("290886"),
        l = n("282109"),
        i = n("512395"),
        r = n("49111"),
        o = n("724210");
      function u(e) {
        var t;
        let n = (0, i.useOptInEnabledForGuild)(
            (null == e ? void 0 : e.getGuildId()) != null
              ? e.guild_id
              : r.NULL_STRING_GUILD_ID
          ),
          u = (0, a.useStateFromStores)(
            [l.default],
            () => null != e && l.default.isChannelRecordOrParentOptedIn(e)
          ),
          d = (0, s.useCanSeeOnboardingHome)(
            null !== (t = null == e ? void 0 : e.guild_id) && void 0 !== t
              ? t
              : r.NULL_STRING_GUILD_ID
          );
        if (null == e) return !1;
        let c = d && e.hasFlag(o.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL);
        return n && !c && !u && !e.isThread();
      }
    },
    549077: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var a = n("37983"),
        s = n("884691"),
        l = n("414456"),
        i = n.n(l),
        r = n("77078"),
        o = n("716241"),
        u = n("689476"),
        d = n("599110"),
        c = n("629220"),
        f = n("49111"),
        h = n("782340"),
        C = n("657233");
      function p(e) {
        let { channel: t, narrow: n } = e;
        return (
          s.useEffect(() => {
            d.default.track(f.AnalyticEvents.CHANNEL_BANNER_VIEWED, {
              ...(0, o.collectGuildAnalyticsMetadata)(t.getGuildId()),
              ...(0, o.collectChannelAnalyticsMetadata)(t),
              banner_type: "channel_opt_in",
            });
          }, [t]),
          (0, a.jsxs)("div", {
            className: i(C.chatHeaderBar, { [C.narrow]: n }),
            children: [
              (0, a.jsx)(r.Text, {
                className: C.chatHeaderBarText,
                variant: "text-sm/normal",
                color: "text-normal",
                children: h.default.Messages.OPT_IN_CHANNEL_NOTICE,
              }),
              (0, a.jsxs)(r.Button, {
                size: r.Button.Sizes.TINY,
                className: C.chatHeaderBarButton,
                innerClassName: C.chatHeaderBarButtonInner,
                color: r.Button.Colors.BRAND,
                onClick: () => {
                  d.default.track(f.AnalyticEvents.CHANNEL_BANNER_CTA_CLICKED, {
                    ...(0, o.collectGuildAnalyticsMetadata)(t.getGuildId()),
                    ...(0, o.collectChannelAnalyticsMetadata)(t),
                    banner_type: "channel_opt_in",
                    cta_type: "add channel",
                  }),
                    (0, c.setOptInChannel)(t.guild_id, t.id, !0, {
                      section: f.AnalyticsSections.CHANNEL,
                    });
                },
                children: [
                  (0, a.jsx)(u.default, { width: 14, height: 14 }),
                  h.default.Messages.OPT_IN_CHANNEL_NOTICE_CTA,
                ],
              }),
            ],
          })
        );
      }
    },
    878720: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ChangePhoneReason: function () {
            return s;
          },
          default: function () {
            return f;
          },
        });
      var a,
        s,
        l = n("759843"),
        i = n("872717"),
        r = n("913144"),
        o = n("271938"),
        u = n("840707"),
        d = n("482931"),
        c = n("49111");
      ((a = s || (s = {})).USER_ACTION_REQUIRED = "user_action_required"),
        (a.USER_SETTINGS_UPDATE = "user_settings_update"),
        (a.GUILD_PHONE_REQUIRED = "guild_phone_required"),
        (a.MFA_PHONE_UPDATE = "mfa_phone_update"),
        (a.CONTACT_SYNC = "contact_sync");
      var f = {
        setCountryCode(e) {
          r.default.dispatch({
            type: "PHONE_SET_COUNTRY_CODE",
            countryCode: e,
          });
        },
        removePhone: (e, t) =>
          i.default.delete({
            url: c.Endpoints.PHONE,
            body: { password: e, change_phone_reason: t },
            oldFormErrors: !0,
          }),
        resendCode(e) {
          let t = {},
            n = o.default.getFingerprint();
          return (
            null != n && "" !== n && (t["X-Fingerprint"] = n),
            i.default.post({
              url: c.Endpoints.RESEND_PHONE,
              headers: t,
              body: { phone: e },
            })
          );
        },
        beginAddPhone: (e, t) =>
          i.default.post({
            url: c.Endpoints.PHONE,
            body: { phone: e, change_phone_reason: t },
          }),
        addPhone: (e, t, n) =>
          i.default.post({
            url: c.Endpoints.PHONE,
            body: { phone_token: e, password: t, change_phone_reason: n },
            oldFormErrors: !0,
          }),
        addPhoneWithoutPassword: e =>
          i.default.post({
            url: c.Endpoints.PHONE_VERIFY_NO_PASSWORD,
            body: { code: e },
          }),
        beginReverifyPhone: (e, t) =>
          i.default.post({
            url: c.Endpoints.PHONE_REVERIFY,
            body: { phone: e, change_phone_reason: t },
          }),
        reverifyPhone: (e, t, n) =>
          i.default.post({
            url: c.Endpoints.PHONE_REVERIFY,
            body: { phone_token: e, password: t, change_phone_reason: n },
            oldFormErrors: !0,
          }),
        validatePhoneForSupport: e =>
          i.default.post({
            url: c.Endpoints.VERIFY_PHONE_FOR_TICKET,
            body: { token: e },
            oldFormErrors: !0,
          }),
        async verifyPhone(e, t) {
          let n =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2],
            a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            s = {},
            i = o.default.getFingerprint();
          null != i && "" !== i && (s["X-Fingerprint"] = i),
            a && (s.authorization = "");
          let f = await u.default.post({
            url: c.Endpoints.VERIFY_PHONE,
            headers: s,
            body: { phone: e, code: t },
            oldFormErrors: !0,
            trackedActionData: {
              event: l.NetworkActionNames.USER_VERIFY_PHONE,
            },
          });
          return (
            n &&
              r.default.dispatch({
                type: "MODAL_POP",
                key: d.PHONE_VERIFICATION_MODAL_KEY,
              }),
            f.body
          );
        },
      };
    },
    482931: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PHONE_VERIFICATION_MODAL_KEY: function () {
            return a;
          },
          PHONE_VERIFICATION_CODE_NUM_DIGITS: function () {
            return s;
          },
        });
      let a = "PHONE_VERIFICATION_MODAL_KEY",
        s = 6;
    },
    667137: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
          },
        }),
        n("222007"),
        n("860677");
      var a = n("37983"),
        s = n("884691"),
        l = n("414456"),
        i = n.n(l),
        r = n("907002"),
        o = n("446674"),
        u = n("77078"),
        d = n("731898"),
        c = n("206230"),
        f = n("449918"),
        h = n("271938"),
        C = n("191542"),
        p = n("451166"),
        E = n("28007"),
        m = n("880731"),
        g = n("943551"),
        S = n("119035"),
        _ = n("65626"),
        T = n("782340"),
        A = n("365715");
      let M = s.memo(function (e) {
          let { channelId: t, width: n } = e,
            l = (0, o.useStateFromStores)(
              [c.default],
              () => c.default.useReducedMotion
            ),
            i = (0, o.useStateFromStores)(
              [g.default],
              () => g.default.getMostRecentMessageCombo(t),
              [t]
            ),
            [d, f] = s.useState(!1);
          s.useEffect(() => {
            if (null == i ? void 0 : i.displayed) return;
            f(!1),
              setImmediate(() => {
                let e = null != i ? (0, S.getComboScore)(i.combo) : 0;
                f(e > 0);
              });
            let e = setTimeout(() => {
              f(!1), null != i && (0, E.clearMessageCombo)(i);
            }, 2e3);
            return () => clearTimeout(e);
          }, [i]);
          let h = (0, r.useSpring)({
            opacity: d ? 1 : 0,
            translateY: d ? "0" : null != i ? "100%" : "200%",
            pointerEvents: "none",
            width: n,
            config: l ? r.config.stiff : r.config.slow,
          });
          return (0, a.jsx)(a.Fragment, {
            children:
              null != i &&
              (0, a.jsx)(r.animated.div, {
                className: A.messageComboScore,
                style: h,
                children: (0, a.jsx)(u.Text, {
                  className: A.comboScore,
                  variant: "text-sm/bold",
                  children: (0, S.getComboScore)(i.combo),
                }),
              }),
          });
        }),
        I = s.memo(function (e) {
          let { value: t, multiplier: n } = e,
            {
              color: l,
              square: r,
              flair: o,
            } = s.useMemo(() => (0, S.getComboStyles)(n), [n]),
            d = (0, f.getColor)(l);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(u.Text, {
                className: A.comboValue,
                variant: "text-sm/bold",
                children: t,
              }),
              (0, a.jsxs)("div", {
                className: A.comboNameplate,
                style: { color: d },
                children: [
                  (0, a.jsx)(u.Text, {
                    className: A.comboMultiplier,
                    style: { color: d },
                    variant: "text-sm/bold",
                    children: T.default.Messages.POGGERMODE_COMBO.format({
                      multiplier: n,
                    }),
                  }),
                  r &&
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)("div", {
                          className: i(A.comboSquare, A.left),
                          style: { backgroundColor: d },
                        }),
                        (0, a.jsx)("div", {
                          className: i(A.comboSquare, A.right),
                          style: { backgroundColor: d },
                        }),
                      ],
                    }),
                  o &&
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)("div", {
                          className: i(A.confettiIcon, A.left),
                          children: (0, a.jsx)(p.default, {
                            width: 24,
                            height: 24,
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className: i(A.confettiIcon, A.right),
                          children: (0, a.jsx)(p.default, {
                            width: 24,
                            height: 24,
                          }),
                        }),
                      ],
                    }),
                  1 === n &&
                    (0, a.jsx)(u.Text, {
                      className: A.tip,
                      variant: "text-sm/bold",
                      children: T.default.Messages.POGGERMODE_COMBO_TIP,
                    }),
                ],
              }),
            ],
          });
        });
      var N = s.memo(function (e) {
        let { channelId: t } = e,
          n = (0, o.useStateFromStores)([h.default], () => h.default.getId()),
          l = (0, o.useStateFromStores)(
            [C.default],
            () => C.default.isTyping(t, n),
            [t, n]
          ),
          i = (0, o.useStateFromStores)([m.default], () =>
            m.default.isEnabled()
          ),
          u = (0, o.useStateFromStores)(
            [g.default],
            () => g.default.isComboing(n, t),
            [t, n]
          ),
          { ref: f, width: p = 0 } = (0, d.default)(),
          E = (0, o.useStateFromStores)(
            [c.default],
            () => c.default.useReducedMotion
          ),
          [S, T] = s.useState(!1),
          N = (0, _.default)(t),
          v = i && u && l;
        s.useEffect(() => {
          v && T(!0);
          let e = setTimeout(() => T(v), 1e3);
          return () => clearTimeout(e);
        }, [v]);
        let L = (0, r.useSpring)({
            opacity: S ? 1 : 0,
            transform: S ? "translateY(0)" : "translateY(100%)",
            pointerEvents: "none",
            config: r.config.stiff,
            immediate: E,
          }),
          R = s.useMemo(
            () => (null != N ? N : { value: 0, multiplier: 1 }),
            [N]
          ),
          x = s.useRef(R);
        s.useEffect(() => {
          (R.multiplier > 1 || R.value > 0) && (x.current = R);
        }, [R]);
        let { multiplier: y, value: O } = s.useMemo(
          () => ({
            value: v ? R.value : x.current.value,
            multiplier: v ? R.multiplier : x.current.multiplier,
          }),
          [v, R, x]
        );
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(M, { channelId: t, width: p }),
            (0, a.jsx)(r.animated.div, {
              ref: f,
              className: A.combo,
              style: L,
              children: (0, a.jsx)(I, { value: O, multiplier: y }),
            }),
          ],
        });
      });
    },
    445499: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n("446674"),
        s = n("271938"),
        l = n("191542"),
        i = n("880731"),
        r = n("943551"),
        o = n("300586"),
        u = n("39141");
      function d(e) {
        let t = (0, o.default)(u.ShakeLocation.CHAT_INPUT),
          n = (0, a.useStateFromStores)([i.default], () =>
            i.default.isEnabled({ shakeLocation: u.ShakeLocation.CHAT_INPUT })
          );
        return (0, a.useStateFromStores)(
          [l.default, r.default, s.default],
          () =>
            n && l.default.isTyping(e, s.default.getId())
              ? r.default.getUserComboShakeIntensity(s.default.getId(), e, t)
              : 0
        );
      }
    },
    300586: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var a = n("446674"),
        s = n("471671"),
        l = n("880731");
      function i(e) {
        let t = (0, a.useStateFromStores)([s.default], () =>
          s.default.isFocused()
        );
        return (0, a.useStateFromStores)([l.default], () =>
          l.default.isEnabled({ shakeLocation: e }) && t
            ? l.default.shakeIntensity
            : 0
        );
      }
    },
    293322: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("446674"),
        s = n("366757"),
        l = n("377253"),
        i = n("49111"),
        r = (e, t) => {
          let n = (0, s.useShowConvoStarterInDM)(t),
            r = (0, a.useStateFromStores)(
              [l.default],
              () => l.default.getMessages(t.id).length > 0,
              [t]
            );
          return null != e && e.hasFlag(i.UserFlags.QUARANTINED) && n && !r;
        };
    },
    319939: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useShouldBlockDMInputForQuarantinedUser: function () {
            return l.default;
          },
          default: function () {
            return u;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("594864"),
        l = n("293322"),
        i = n("586269"),
        r = n("782340");
      let o = n("648529");
      var u = () =>
        (0, a.jsx)(s.MessageNoticeBanner, {
          bannerIcon: o,
          bannerHeader: r.default.Messages.LIMITED_ACCESS_INFO_MODAL_HEADING,
          bannerSubtext:
            r.default.Messages.LIMITED_ACCESS_DM_BAR_SUBTEXT.format({
              appealLink: i.QUARANTINE_APPEAL_LINK,
            }),
        });
    },
    324252: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          LOCATION_CONTEXT_WEB: function () {
            return s;
          },
          CRISIS_TEXT_LINE_URL: function () {
            return l;
          },
          NOFILTR_URL: function () {
            return i;
          },
          MODAL_LOCATION_CONTEXT_WEB: function () {
            return r;
          },
          SAFETY_TOOLS_MODAL_KEY: function () {
            return o;
          },
          getStrangerDangerSafetyTips: function () {
            return u;
          },
          getInappropriateConversationsSafetyTips: function () {
            return d;
          },
        });
      var a = n("782340");
      let s = "SAFETY_WARNING_BANNER_WEB",
        l = "https://www.crisistextline.org/",
        i = "https://nofiltr.org/resources-hub/",
        r = "InappropriateConversationModal-web",
        o = "PRIVATE_DM_SAFETY_TOOLS_MODAL",
        u = () => [
          a.default.Messages.STRANGER_DANGER_TIPS_1,
          a.default.Messages.STRANGER_DANGER_TIPS_2,
          a.default.Messages.STRANGER_DANGER_TIPS_3,
        ],
        d = () => [
          a.default.Messages.INAPPROPRIATE_CONVERSATION_TIPS_1,
          a.default.Messages.INAPPROPRIATE_CONVERSATION_TIPS_2,
          a.default.Messages.INAPPROPRIATE_CONVERSATION_TIPS_3,
        ];
    },
    499799: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useStaffTeenSafetyAssistAgeBypass: function () {
            return l;
          },
        });
      var a = n("862205");
      let s = (0, a.createExperiment)({
        kind: "user",
        id: "2023-10_staff_teen_safety_assist_age_bypass",
        label: "Staff Teen Safety Assist Age Bypass",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label:
              "Enable staff teen safety assist age bypass (your account will behave as a teen user)",
            config: { enabled: !0 },
          },
        ],
      });
      function l(e) {
        return s.useExperiment({ location: e }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    533855: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useChannelSafetyWarning: function () {
            return r;
          },
        });
      var a = n("884691"),
        s = n("446674"),
        l = n("764828"),
        i = n("13427");
      function r(e, t, n) {
        let r = (0, s.useStateFromStores)(
            [l.default],
            () => l.default.getChannelSafetyWarnings(e),
            [e]
          ),
          o = r.filter(e => e.type === t);
        return (
          a.useEffect(() => {
            t === l.SafetyWarningTypes.STRANGER_DANGER &&
              o.length > 0 &&
              i.StrangerDangerTeensExperiment.trackExposure({ location: n });
          }, [t, o.length, n]),
          o.find(e => null == e.dismiss_timestamp)
        );
      }
    },
    908041: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useUserIsTeen: function () {
            return i;
          },
        });
      var a = n("446674"),
        s = n("697218"),
        l = n("499799");
      function i(e) {
        let t = (0, a.useStateFromStores)([s.default], () => {
            var e;
            return null === (e = s.default.getCurrentUser()) || void 0 === e
              ? void 0
              : e.nsfwAllowed;
          }),
          n = (0, l.useStaffTeenSafetyAssistAgeBypass)(e);
        return !1 === t || n;
      }
    },
    898436: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useInappropriateConversationBannerForChannel: function () {
            return r;
          },
        });
      var a = n("764828"),
        s = n("533855"),
        l = n("761771"),
        i = n("888203");
      function r(e, t) {
        let n = (0, l.useIsEligibleForInappropriateConversationWarning)({
            location: t,
          }),
          r = (0, i.useInappropriateConversationWarningsForChannel)(e),
          o = (0, s.useChannelSafetyWarning)(
            e,
            a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2,
            t
          );
        if (!!n && 0 !== r.length) {
          if (
            !r.some(
              e =>
                e.type ===
                  a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 ||
                (e.type ===
                  a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2 &&
                  null != e.dismiss_timestamp)
            )
          )
            return o;
        }
      }
    },
    888203: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useInappropriateConversationWarningsForChannel: function () {
            return l;
          },
        });
      var a = n("446674"),
        s = n("764828");
      function l(e) {
        let t = (0, a.useStateFromStores)(
          [s.default],
          () => s.default.getChannelSafetyWarnings(e),
          [e]
        );
        return t.filter(
          e =>
            e.type === s.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 ||
            e.type === s.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2
        );
      }
    },
    894295: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          InappropriateConversationWarningBanner: function () {
            return E;
          },
        }),
        n("222007");
      var a = n("37983"),
        s = n("884691"),
        l = n("432710"),
        i = n("446674"),
        r = n("77078"),
        o = n("155084"),
        u = n("27618"),
        d = n("277734"),
        c = n("764828"),
        f = n("217736"),
        h = n("133829"),
        C = n("324252"),
        p = n("782340");
      function E(e) {
        let { channelId: t, warningId: E, senderId: m } = e,
          g = s.useCallback(() => {
            (0, d.dismissChannelSafetyWarnings)(t, [E]);
          }, [t, E]),
          S = (0, i.useStateFromStores)([u.default], () =>
            u.default.isBlocked(m)
          ),
          _ = s.useMemo(
            () => ({
              channelId: t,
              warningId: E,
              senderId: m,
              warningType:
                c.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2,
            }),
            [t, E, m]
          );
        s.useEffect(() => {
          (0, f.trackNamedViewEvent)({
            ..._,
            viewName: f.ViewNameTypes.SAFETY_WARNING_BANNER,
          }),
            o.default.increment({ name: l.MetricEvents.SAFETY_WARNING_VIEW });
        }, [_]);
        let T = s.useCallback(
            e => {
              (0, f.trackCtaEvent)({ ..._, cta: e });
            },
            [_]
          ),
          A = s.useCallback(() => {
            (0, r.openModalLazy)(
              async () => {
                let { default: e } = await n
                  .el("161297")
                  .then(n.bind(n, "161297"));
                return n => {
                  let { transitionState: s, onClose: l } = n;
                  return (0, a.jsx)(e, {
                    otherUserId: m,
                    channelId: t,
                    warningId: E,
                    warningType:
                      c.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2,
                    transitionState: s,
                    onClose: l,
                  });
                };
              },
              { modalKey: C.SAFETY_TOOLS_MODAL_KEY }
            ),
              T(f.CtaEventTypes.USER_BANNER_OPEN_SAFETY_TOOLS);
          }, [t, m, E, T]),
          M = s.useCallback(() => {
            g(), T(f.CtaEventTypes.USER_BANNER_BLOCK_CONFIRM);
          }, [g, T]),
          I = s.useCallback(() => {
            g(), T(f.CtaEventTypes.USER_BANNER_BLOCK_AND_REPORT_CONFIRM);
          }, [g, T]),
          N = s.useCallback(() => {
            (0, r.openModalLazy)(async () => {
              let { default: e } = await n
                .el("811578")
                .then(n.bind(n, "811578"));
              return n => {
                let { transitionState: s, onClose: l } = n;
                return (0, a.jsx)(e, {
                  transitionState: s,
                  onBlock: M,
                  onBlockAndReport: I,
                  onCancel: () => {
                    null == l || l(),
                      T(f.CtaEventTypes.USER_BANNER_BLOCK_CANCEL);
                  },
                  onClose: l,
                  userId: m,
                  channelId: t,
                });
              };
            });
          }, [M, I, m, t, T]);
        return (0, a.jsx)(h.SafetyWarningBanner, {
          channelId: t,
          warningId: E,
          senderId: m,
          warningType: c.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2,
          header: p.default.Messages.INAPPROPRIATE_CONVERSATION_BANNER_HEADER,
          description:
            p.default.Messages.INAPPROPRIATE_CONVERSATION_BANNER_DESCRIPTION,
          onDismiss: g,
          buttons: [
            {
              text: p.default.Messages
                .INAPPROPRIATE_CONVERSATION_BANNER_OPEN_SAFETY_TOOLS_BUTTON,
              color: r.Button.Colors.BRAND,
              onclick: A,
            },
            ...(S
              ? []
              : [
                  {
                    text: p.default.Messages
                      .INAPPROPRIATE_CONVERSATION_BANNER_BLOCK_BUTTON,
                    color: r.Button.Colors.PRIMARY,
                    onclick: N,
                  },
                ]),
          ],
        });
      }
    },
    133829: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SafetyWarningBanner: function () {
            return h;
          },
        });
      var a = n("37983"),
        s = n("884691"),
        l = n("432710"),
        i = n("77078"),
        r = n("155084"),
        o = n("945330"),
        u = n("217736"),
        d = n("782340"),
        c = n("860657"),
        f = n("145680");
      function h(e) {
        let {
          channelId: t,
          warningId: n,
          senderId: h,
          warningType: C,
          header: p,
          description: E,
          onDismiss: m,
          buttons: g,
        } = e;
        s.useEffect(() => {
          r.default.increment({ name: l.MetricEvents.SAFETY_WARNING_VIEW });
        }, []);
        let S = s.useCallback(() => {
          null == m || m(),
            (0, u.trackCtaEvent)({
              channelId: t,
              warningId: n,
              senderId: h,
              warningType: C,
              cta: u.CtaEventTypes.USER_BANNER_DISMISS,
            });
        }, [m, t, n, h, C]);
        return (0, a.jsxs)("div", {
          className: c.strangerDangerBanner,
          children: [
            (0, a.jsxs)("div", {
              className: c.shieldAndHeading,
              children: [
                (0, a.jsx)("img", {
                  className: c.safetyShieldIcon,
                  src: f,
                  alt: "",
                }),
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)(i.Heading, {
                      variant: "heading-md/semibold",
                      color: "text-primary",
                      children: p,
                    }),
                    (0, a.jsx)(i.Text, {
                      variant: "text-sm/normal",
                      color: "text-primary",
                      children: E,
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: c.buttons,
              children:
                null == g
                  ? void 0
                  : g.map((e, t) =>
                      (0, a.jsx)(
                        i.Button,
                        {
                          size: i.Button.Sizes.SMALL,
                          color: e.color,
                          "aria-label": e.text,
                          onClick: e.onclick,
                          className: c.ctaButton,
                          children: e.text,
                        },
                        t
                      )
                    ),
            }),
            (0, a.jsx)(i.Clickable, {
              className: c.closeButton,
              onClick: S,
              role: "button",
              "aria-label": d.default.Messages.DISMISS,
              children: (0, a.jsx)(o.default, {
                width: 24,
                height: 24,
                className: c.closeButton,
              }),
            }),
          ],
        });
      }
    },
    13427: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          StrangerDangerTeensExperiment: function () {
            return s;
          },
          useIsEligibleForStrangerDangerTeens: function () {
            return l;
          },
        });
      var a = n("862205");
      let s = (0, a.createExperiment)({
        kind: "user",
        id: "2023-08_self_mod_stranger_danger_teens",
        label: "Stranger Danger Teens",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable stranger danger for teens",
            config: { enabled: !0 },
          },
        ],
      });
      function l(e) {
        return s.useExperiment({ location: e }, { autoTrackExposure: !1 })
          .enabled;
      }
    },
    933152: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useStrangerDangerWarning: function () {
            return d;
          },
        });
      var a = n("674015"),
        s = n("228430"),
        l = n("764828"),
        i = n("533855"),
        r = n("908041"),
        o = n("888203"),
        u = n("13427");
      function d(e, t) {
        let n = (0, s.useIsSpamMessageRequest)(e),
          d = (0, a.useIsMessageRequest)(e),
          c = (0, i.useChannelSafetyWarning)(
            e,
            l.SafetyWarningTypes.STRANGER_DANGER,
            t
          ),
          f = (0, r.useUserIsTeen)(t),
          h = (0, u.useIsEligibleForStrangerDangerTeens)(t),
          C =
            (0, o.useInappropriateConversationWarningsForChannel)(e).length > 0;
        if (h && f && !n && !d && !C) return c;
      }
    },
    820899: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          StrangerDangerWarningBanner: function () {
            return E;
          },
        });
      var a = n("37983"),
        s = n("884691"),
        l = n("432710"),
        i = n("77078"),
        r = n("736964"),
        o = n("155084"),
        u = n("277734"),
        d = n("764828"),
        c = n("217736"),
        f = n("133829"),
        h = n("324252"),
        C = n("49111"),
        p = n("782340");
      function E(e) {
        let { channelId: t, warningId: E, senderId: m } = e,
          g = s.useCallback(() => {
            (0, u.dismissChannelSafetyWarnings)(t, [E]);
          }, [t, E]),
          S = s.useCallback(
            e => () => {
              r.default.addRelationship({
                userId: m,
                context: { location: h.LOCATION_CONTEXT_WEB },
                type: C.RelationshipTypes.BLOCKED,
              }),
                g(),
                (0, i.showToast)(
                  (0, i.createToast)(
                    p.default.Messages.STRANGER_DANGER_BLOCK_CONFIRM,
                    i.ToastType.SUCCESS
                  )
                ),
                (0, c.trackCtaEvent)({
                  channelId: t,
                  warningId: E,
                  senderId: m,
                  warningType: d.SafetyWarningTypes.STRANGER_DANGER,
                  cta: e,
                });
            },
            [g, t, E, m]
          );
        s.useEffect(() => {
          (0, c.trackViewedEvent)(C.AnalyticEvents.SAFETY_WARNING_VIEWED, {
            channelId: t,
            warningId: E,
            senderId: m,
            warningType: d.SafetyWarningTypes.STRANGER_DANGER,
          }),
            o.default.increment({ name: l.MetricEvents.SAFETY_WARNING_VIEW });
        }, [t, E, m]);
        let _ = () => {
            (0, i.openModalLazy)(async () => {
              let { default: e } = await n
                .el("664639")
                .then(n.bind(n, "664639"));
              return n => {
                let { transitionState: s, onClose: l } = n;
                return (0, a.jsx)(e, {
                  transitionState: s,
                  onClose: l,
                  channelId: t,
                  warningId: E,
                  senderId: m,
                  handleBlock: () => {
                    T(
                      c.CtaEventTypes.USER_MODAL_BLOCK_CONFIRM,
                      c.CtaEventTypes.USER_MODAL_BLOCK_CANCEL,
                      _
                    );
                  },
                });
              };
            });
          },
          T = (e, s, l) => {
            (0, i.openModalLazy)(async () => {
              let { default: i } = await n
                .el("968710")
                .then(n.bind(n, "968710"));
              return n =>
                (0, a.jsx)(i, {
                  ...n,
                  userId: m,
                  confirmBlock: S(e),
                  onCancel: () => {
                    null == l || l(),
                      (0, c.trackCtaEvent)({
                        channelId: t,
                        warningId: E,
                        senderId: m,
                        warningType: d.SafetyWarningTypes.STRANGER_DANGER,
                        cta: s,
                      });
                  },
                });
            });
          };
        return (0, a.jsx)(f.SafetyWarningBanner, {
          channelId: t,
          warningId: E,
          senderId: m,
          warningType: d.SafetyWarningTypes.STRANGER_DANGER,
          header: p.default.Messages.STRANGER_DANGER_BANNER_HEADER,
          description: p.default.Messages.STRANGER_DANGER_BANNER_DESCRIPTION,
          onDismiss: g,
          buttons: [
            {
              text: p.default.Messages.STRANGER_DANGER_BANNER_MORE_TIPS,
              color: i.Button.Colors.BRAND,
              onclick: () => {
                _(),
                  (0, c.trackCtaEvent)({
                    channelId: t,
                    warningId: E,
                    senderId: m,
                    warningType: d.SafetyWarningTypes.STRANGER_DANGER,
                    cta: c.CtaEventTypes.OPEN_MORE_TIPS,
                  });
              },
            },
            {
              text: p.default.Messages.STRANGER_DANGER_BANNER_BLOCK,
              color: i.Button.Colors.RED,
              onclick: () =>
                T(
                  c.CtaEventTypes.USER_BANNER_BLOCK_CONFIRM,
                  c.CtaEventTypes.USER_BANNER_BLOCK_CANCEL
                ),
            },
          ],
        });
      }
    },
    339670: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getUnreadTopicsCount: function () {
            return l;
          },
        }),
        n("222007");
      var a = n("299039"),
        s = n("347738");
      function l(e, t) {
        var n;
        let l = null !== (n = s.default.summaries(e)) && void 0 !== n ? n : [],
          i = 0;
        for (let e of l) a.default.compare(e.endId, t) > 0 && (i += 1);
        return i;
      }
    },
    21763: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("414456"),
        l = n.n(s),
        i = n("907002"),
        r = n("65597"),
        o = n("77078"),
        u = n("97810"),
        d = n("909004"),
        c = n("251144"),
        f = n("20662"),
        h = n("347738"),
        C = n("118094"),
        p = n("200521"),
        E = n("894488"),
        m = n("782340"),
        g = n("141342");
      function S(e) {
        let { summary: t, channel: n } = e,
          s = (0, r.default)([h.default], () => h.default.summaryFeedback(t)),
          l = (e, a) => {
            e.stopPropagation(),
              (0, C.default)({ summary: t, channel: n, rating: a });
          },
          u = (0, i.useTransition)(null == s, {
            enter: { from: { opacity: 0 }, to: { opacity: 1 } },
            leave: { opacity: 0 },
            config: { mass: 1, tension: 500, friction: 18, clamp: !0 },
          });
        return (0, a.jsx)(a.Fragment, {
          children: u((e, t) =>
            t
              ? (0, a.jsx)("div", {
                  className: g.summaryFeedbackWrapper,
                  children: (0, a.jsxs)(i.animated.div, {
                    style: e,
                    className: g.summaryFeedback,
                    children: [
                      (0, a.jsx)(o.Text, {
                        variant: "text-xs/medium",
                        color: "interactive-normal",
                        children: m.default.Messages.SUMMARY_FEEDBACK,
                      }),
                      (0, a.jsx)(o.Clickable, {
                        onClick: e => l(e, p.FeedbackRating.GOOD),
                        children: (0, a.jsx)(f.default, {
                          className: g.thumbIcon,
                          width: 12,
                          height: 12,
                        }),
                      }),
                      (0, a.jsx)(o.Clickable, {
                        onClick: e => l(e, p.FeedbackRating.BAD),
                        children: (0, a.jsx)(c.default, {
                          className: g.thumbIcon,
                          width: 12,
                          height: 12,
                        }),
                      }),
                    ],
                  }),
                })
              : null
          ),
        });
      }
      function _(e) {
        var t, n;
        let s,
          { item: i, channel: o, index: c } = e,
          f = (0, r.default)([h.default], () =>
            h.default.selectedSummary(o.id)
          );
        if (null == f) return null;
        let C = null != i.unreadId,
          p = null != i.content;
        return (
          (s = p
            ? (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(d.default, {
                    className: g.summaryStartIcon,
                    width: 16,
                    height: 16,
                  }),
                  i.content,
                ],
              })
            : (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(S, { summary: f, channel: o }),
                  (0, a.jsx)(d.default, {
                    className: g.summaryEndIcon,
                    width: 16,
                    height: 16,
                  }),
                ],
              })),
          (0, a.jsx)(
            u.default,
            {
              className: l(
                g.summaryDivider,
                p ? g.summaryDividerStart : g.summaryDividerEnd
              ),
              contentClassName: p ? g.summaryStartContent : g.summaryEndContent,
              isUnread: C,
              id: C ? E.NEW_MESSAGE_BAR_ID : void 0,
              children: s,
            },
            "divider-".concat(
              null !==
                (n =
                  null !== (t = i.contentKey) && void 0 !== t
                    ? t
                    : i.unreadId) && void 0 !== n
                ? n
                : c
            )
          )
        );
      }
    },
    262973: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
          systemDMRedesignEnabled: function () {
            return i;
          },
        });
      var a = n("862205");
      let s = (0, a.createExperiment)({
        kind: "user",
        id: "2022-07_system_dm_safety_onboarding",
        label: "System DM Safety Onboarding",
        defaultConfig: { systemDMRedesignEnabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Enabled, v1 copy",
            config: { systemDMRedesignEnabled: !0 },
          },
          {
            id: 2,
            label: "Enabled, v2 copy",
            config: { systemDMRedesignEnabled: !0 },
          },
        ],
      });
      var l = s;
      function i() {
        return s.getCurrentConfig(
          { location: "0a5674_1" },
          { autoTrackExposure: !1 }
        ).systemDMRedesignEnabled;
      }
    },
    809168: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ArchivedLockedThreadNotice: function () {
            return p;
          },
          LockedThreadNotice: function () {
            return E;
          },
        });
      var a = n("37983"),
        s = n("884691"),
        l = n("414456"),
        i = n.n(l),
        r = n("77078"),
        o = n("716241"),
        u = n("599110"),
        d = n("263024"),
        c = n("300322"),
        f = n("49111"),
        h = n("782340"),
        C = n("151897");
      function p(e) {
        let { channel: t, narrow: n } = e,
          l = (0, c.useCanUnarchiveThread)(t);
        return (
          s.useEffect(() => {
            u.default.track(f.AnalyticEvents.CHANNEL_BANNER_VIEWED, {
              ...(0, o.collectGuildAnalyticsMetadata)(t.getGuildId()),
              ...(0, o.collectChannelAnalyticsMetadata)(t),
              banner_type: "thread",
            });
          }, [t]),
          (0, a.jsxs)("div", {
            className: i(C.chatHeaderBar, { [C.narrow]: n }),
            children: [
              (0, a.jsx)(r.Text, {
                className: C.chatHeaderBarText,
                variant: "text-sm/normal",
                color: "header-secondary",
                children: t.isForumPost()
                  ? h.default.Messages.FORUM_POST_HEADER_NOTICE_LOCKED
                  : h.default.Messages.THREAD_HEADER_NOTICE_LOCKED,
              }),
              l
                ? (0, a.jsx)(r.Button, {
                    size: n ? r.Button.Sizes.SMALL : r.Button.Sizes.TINY,
                    className: C.chatHeaderBarButton,
                    color: r.Button.Colors.PRIMARY,
                    onClick: () => {
                      u.default.track(
                        f.AnalyticEvents.CHANNEL_BANNER_CTA_CLICKED,
                        {
                          ...(0, o.collectGuildAnalyticsMetadata)(
                            t.getGuildId()
                          ),
                          ...(0, o.collectChannelAnalyticsMetadata)(t),
                          banner_type: "thread",
                          cta_type: "unarchive",
                        }
                      ),
                        d.default.unarchiveThread(t, !1);
                    },
                    children: h.default.Messages.UNARCHIVE,
                  })
                : null,
            ],
          })
        );
      }
      function E(e) {
        let { channel: t, narrow: n } = e,
          l = (0, c.useIsThreadModerator)(t);
        return (
          s.useEffect(() => {
            u.default.track(f.AnalyticEvents.CHANNEL_BANNER_VIEWED, {
              ...(0, o.collectGuildAnalyticsMetadata)(t.getGuildId()),
              ...(0, o.collectChannelAnalyticsMetadata)(t),
              banner_type: "thread",
            });
          }, [t]),
          (0, a.jsxs)("div", {
            className: i(C.chatHeaderBar, { [C.narrow]: n }),
            children: [
              (0, a.jsx)(r.Text, {
                className: C.chatHeaderBarText,
                variant: "text-sm/normal",
                color: "header-secondary",
                children: t.isForumPost()
                  ? h.default.Messages.FORUM_POST_HEADER_NOTICE_ACTIVE_LOCKED
                  : h.default.Messages.THREAD_HEADER_NOTICE_ACTIVE_LOCKED,
              }),
              l
                ? (0, a.jsx)(r.Button, {
                    size: n ? r.Button.Sizes.SMALL : r.Button.Sizes.TINY,
                    className: C.chatHeaderBarButton,
                    color: r.Button.Colors.PRIMARY,
                    onClick: () => {
                      u.default.track(
                        f.AnalyticEvents.CHANNEL_BANNER_CTA_CLICKED,
                        {
                          ...(0, o.collectGuildAnalyticsMetadata)(
                            t.getGuildId()
                          ),
                          ...(0, o.collectChannelAnalyticsMetadata)(t),
                          banner_type: "thread",
                          cta_type: "unlock",
                        }
                      ),
                        d.default.unlockThread(t);
                    },
                    children: h.default.Messages.UNLOCK,
                  })
                : null,
            ],
          })
        );
      }
    },
    714307: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("398926"),
        l = n("581752"),
        i = n("911005");
      function r() {
        return (0, a.jsx)("div", {
          className: s.container,
          children: (0, a.jsxs)("svg", {
            width: "224",
            height: "148",
            viewBox: "0 0 224 148",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, a.jsx)("path", {
                d: "M0.5 33.5H223.5V140C223.5 144.142 220.142 147.5 216 147.5H8C3.85786 147.5 0.5 144.142 0.5 140V33.5Z",
                fill: "#F2F3F4",
                stroke: "#E3E5E8",
              }),
              (0, a.jsx)("circle", {
                cx: "28",
                cy: "120",
                r: "16",
                fill: "url(#tutorial-media-channels-image1)",
              }),
              (0, a.jsx)("path", {
                d: "M62.104 116L61.468 107.72H59.488L57.4 113.96L55.3 107.72H53.284L52.648 116H54.076L54.496 109.892L56.584 116.024H58L60.076 109.892L60.52 116H62.104ZM65.7704 111.08C66.4664 111.08 66.8264 111.584 66.9224 112.484H64.6064C64.7144 111.548 65.1944 111.08 65.7704 111.08ZM68.3144 115.412L68.1464 114.284C67.5104 114.728 66.8984 115.004 66.1544 115.004C65.2664 115.004 64.6544 114.512 64.5944 113.384H68.3144C68.3144 113.3 68.3264 113.156 68.3264 113.036C68.3264 111.392 67.5464 110.084 65.8064 110.084C64.2944 110.084 63.1664 111.224 63.1664 113.108C63.1664 115.196 64.3784 116.12 65.9984 116.12C66.9344 116.12 67.6904 115.844 68.3144 115.412ZM72.6338 112.088C72.6338 112.724 72.2498 113.192 71.6138 113.192C70.9898 113.192 70.6058 112.736 70.6058 112.136C70.6058 111.5 70.9778 111.008 71.6138 111.008C72.2258 111.008 72.6338 111.476 72.6338 112.088ZM74.6858 116.24C74.6858 115.352 73.9418 114.98 72.7538 114.812L72.0098 114.74C71.1098 114.608 70.9298 114.56 70.9298 114.368C70.9298 114.272 71.0258 114.164 71.1698 114.056C71.3138 114.08 71.4698 114.092 71.6378 114.092C72.8858 114.092 73.9538 113.348 73.9538 112.1C73.9538 111.836 73.9058 111.572 73.7978 111.344L74.8538 111.272L74.6618 110.12L73.2458 110.624C72.8258 110.276 72.2738 110.084 71.6018 110.084C70.3058 110.084 69.2738 110.864 69.2738 112.136C69.2738 112.904 69.6818 113.504 70.3658 113.828C69.8858 114.116 69.6338 114.428 69.6338 114.752C69.6338 114.98 69.7418 115.196 69.9698 115.376C69.2498 115.784 68.8778 116.204 68.8778 116.744C68.8778 117.704 70.0658 118.184 71.6378 118.184C73.3178 118.184 74.6858 117.488 74.6858 116.24ZM71.7338 117.332C70.6418 117.332 70.1258 117.02 70.1258 116.588C70.1258 116.288 70.3178 116.012 70.7378 115.712C71.0258 115.772 71.2058 115.808 71.6018 115.856L72.3818 115.952C73.1018 116.06 73.3538 116.24 73.3538 116.552C73.3538 116.984 72.7658 117.332 71.7338 117.332ZM78.8219 114.404C78.4259 114.788 77.9579 115.028 77.4659 115.028C77.0219 115.028 76.7579 114.776 76.7579 114.356C76.7579 113.804 77.1539 113.312 78.8219 113.108V114.404ZM80.2619 116V112.028C80.2619 110.636 79.5179 110.084 78.0179 110.084C77.0939 110.084 76.3859 110.288 75.7139 110.552L75.8939 111.704C76.5179 111.428 77.1539 111.236 77.8259 111.236C78.4619 111.236 78.8219 111.476 78.8219 112.1V112.268C76.4819 112.496 75.3299 113.108 75.3299 114.512C75.3299 115.52 75.9899 116.12 76.9739 116.12C77.8379 116.12 78.4379 115.736 78.9059 115.244L79.0259 116H80.2619ZM86.633 116V111.824C86.633 110.744 86.057 110.084 84.977 110.084C84.197 110.084 83.585 110.504 83.045 111.02L82.913 110.204H81.689V116H83.129V112.088C83.549 111.644 84.005 111.356 84.449 111.356C84.977 111.356 85.193 111.704 85.193 112.208V116H86.633Z",
                fill: "#060607",
              }),
              (0, a.jsx)("path", {
                d: "M62.02 132L61.372 123.72H59.992L57.412 130.512L54.832 123.72H53.44L52.78 132H53.836L54.34 125.316L56.932 132.036H57.832L60.424 125.316L60.94 132H62.02ZM65.8287 126.996C66.6567 126.996 67.0647 127.524 67.1967 128.448H64.4367C64.6047 127.476 65.1687 126.996 65.8287 126.996ZM68.2647 131.352L68.1087 130.392C67.4847 130.884 66.8847 131.208 66.0567 131.208C65.0607 131.208 64.4367 130.584 64.3887 129.252H68.2767V129.024C68.2767 127.44 67.5087 126.156 65.8407 126.156C64.4007 126.156 63.3207 127.284 63.3207 129.12C63.3207 131.22 64.4847 132.12 65.9727 132.12C66.9207 132.12 67.6527 131.832 68.2647 131.352ZM71.073 123.72H69.789L70.077 129.54L70.773 129.384L71.073 123.72ZM71.025 132V130.572H69.825V132H71.025ZM84.7192 132L84.0712 123.72H82.6912L80.1112 130.512L77.5312 123.72H76.1392L75.4792 132H76.5352L77.0392 125.316L79.6312 132.036H80.5312L83.1232 125.316L83.6392 132H84.7192ZM89.6079 130.428C89.1279 130.92 88.5279 131.232 87.9039 131.232C87.3639 131.232 87.0519 130.932 87.0519 130.464C87.0519 129.876 87.4959 129.3 89.6079 129.096V130.428ZM90.6759 132V127.992C90.6759 126.72 90.0039 126.156 88.6119 126.156C87.7239 126.156 87.0759 126.36 86.3919 126.636L86.5359 127.56C87.1599 127.284 87.8199 127.068 88.5159 127.068C89.1759 127.068 89.6079 127.32 89.6079 128.04V128.28C87.2199 128.532 85.9959 129.096 85.9959 130.524C85.9959 131.496 86.6439 132.12 87.6759 132.12C88.6119 132.12 89.2359 131.7 89.6919 131.232L89.8119 132H90.6759ZM92.6347 134.184C93.4747 134.184 94.0987 133.872 94.5667 132.6L96.9067 126.276H95.7907L94.2907 130.728L92.7547 126.192L91.6747 126.36L93.7627 132.024L93.6187 132.408C93.3907 133.02 93.0667 133.248 92.5867 133.248C92.4187 133.248 92.2027 133.212 92.0227 133.164L92.1787 134.136C92.2867 134.16 92.4067 134.184 92.6347 134.184ZM103.068 128.976C103.068 127.068 102.048 126.156 100.812 126.156C100.032 126.156 99.4795 126.552 99.0955 126.948V123.336L98.0275 123.504V131.712C98.7835 131.94 99.3955 132.072 100.26 132.072C101.916 132.072 103.068 131.064 103.068 128.976ZM101.988 129.024C101.988 130.5 101.364 131.16 100.248 131.16C99.7195 131.16 99.4555 131.1 99.0955 130.968V128.04C99.5275 127.5 100.056 127.104 100.656 127.104C101.424 127.104 101.988 127.776 101.988 129.024ZM106.61 126.996C107.438 126.996 107.846 127.524 107.978 128.448H105.218C105.386 127.476 105.95 126.996 106.61 126.996ZM109.046 131.352L108.89 130.392C108.266 130.884 107.666 131.208 106.838 131.208C105.842 131.208 105.218 130.584 105.17 129.252H109.058V129.024C109.058 127.44 108.29 126.156 106.622 126.156C105.182 126.156 104.102 127.284 104.102 129.12C104.102 131.22 105.266 132.12 106.754 132.12C107.702 132.12 108.434 131.832 109.046 131.352ZM117.779 129.768C117.779 128.52 117.227 127.968 115.619 127.236C114.359 126.66 114.047 126.36 114.047 125.724C114.047 125.112 114.467 124.608 115.415 124.608C116.075 124.608 116.699 124.872 117.155 125.22L117.335 124.092C116.855 123.816 116.255 123.624 115.451 123.624C113.951 123.624 112.931 124.476 112.931 125.808C112.931 126.996 113.519 127.512 115.079 128.22C116.327 128.784 116.663 129.096 116.663 129.852C116.663 130.656 116.051 131.112 115.187 131.112C114.359 131.112 113.579 130.776 113.015 130.404L112.847 131.556C113.459 131.88 114.263 132.096 115.163 132.096C116.711 132.096 117.779 131.196 117.779 129.768ZM122.456 130.428C121.976 130.92 121.376 131.232 120.752 131.232C120.212 131.232 119.9 130.932 119.9 130.464C119.9 129.876 120.344 129.3 122.456 129.096V130.428ZM123.524 132V127.992C123.524 126.72 122.852 126.156 121.46 126.156C120.572 126.156 119.924 126.36 119.24 126.636L119.384 127.56C120.008 127.284 120.668 127.068 121.364 127.068C122.024 127.068 122.456 127.32 122.456 128.04V128.28C120.068 128.532 118.844 129.096 118.844 130.524C118.844 131.496 119.492 132.12 120.524 132.12C121.46 132.12 122.084 131.7 122.54 131.232L122.66 132H123.524ZM127.928 132.024L127.784 131.112C127.652 131.136 127.484 131.148 127.292 131.148C126.692 131.148 126.5 130.86 126.5 130.392V127.176H127.88L127.736 126.276H126.5V124.212L125.456 124.368V126.276H124.592V127.176H125.456V130.584C125.456 131.736 126.116 132.096 127.124 132.096C127.496 132.096 127.748 132.06 127.928 132.024ZM129.199 126.276V130.44C129.199 131.472 129.763 132.12 130.855 132.12C131.659 132.12 132.343 131.676 132.883 131.172L133.015 132H133.867V126.276H132.799V130.236C132.283 130.788 131.707 131.16 131.143 131.16C130.519 131.16 130.267 130.764 130.267 130.176V126.276H129.199ZM138.755 127.176L138.587 126.156C137.651 126.204 136.991 126.792 136.583 127.44L136.403 126.276H135.551V132H136.619V128.616C137.003 127.86 137.807 127.224 138.755 127.176ZM140.397 129.252C140.397 127.836 141.045 127.104 141.945 127.104C142.557 127.104 142.905 127.2 143.349 127.428V130.164C142.893 130.776 142.389 131.172 141.729 131.172C140.961 131.172 140.397 130.512 140.397 129.252ZM139.317 129.3C139.317 131.22 140.337 132.12 141.573 132.12C142.413 132.12 143.001 131.688 143.433 131.172L143.565 132H144.417V123.336L143.349 123.504V126.456C142.989 126.312 142.473 126.204 141.909 126.204C140.517 126.204 139.317 127.212 139.317 129.3ZM149.362 130.428C148.882 130.92 148.282 131.232 147.658 131.232C147.118 131.232 146.806 130.932 146.806 130.464C146.806 129.876 147.25 129.3 149.362 129.096V130.428ZM150.43 132V127.992C150.43 126.72 149.758 126.156 148.366 126.156C147.478 126.156 146.83 126.36 146.146 126.636L146.29 127.56C146.914 127.284 147.574 127.068 148.27 127.068C148.93 127.068 149.362 127.32 149.362 128.04V128.28C146.974 128.532 145.75 129.096 145.75 130.524C145.75 131.496 146.398 132.12 147.43 132.12C148.366 132.12 148.99 131.7 149.446 131.232L149.566 132H150.43ZM152.389 134.184C153.229 134.184 153.853 133.872 154.321 132.6L156.661 126.276H155.545L154.045 130.728L152.509 126.192L151.429 126.36L153.517 132.024L153.373 132.408C153.145 133.02 152.821 133.248 152.341 133.248C152.173 133.248 151.957 133.212 151.777 133.164L151.933 134.136C152.041 134.16 152.161 134.184 152.389 134.184ZM159.19 129.54L159.886 129.384L159.994 128.196C161.422 127.548 162.286 126.984 162.286 125.688C162.286 124.38 161.29 123.564 159.826 123.564C158.842 123.564 157.99 123.912 157.258 124.452L157.414 125.556C158.086 125.004 158.83 124.584 159.766 124.584C160.57 124.584 161.158 125.004 161.158 125.736C161.158 126.504 160.654 126.888 159.526 127.356L159.034 127.56L159.19 129.54ZM158.938 132H160.138V130.572H158.938V132Z",
                fill: "#2E3338",
              }),
              (0, a.jsx)("path", {
                d: "M0.5 8C0.5 3.85786 3.85786 0.5 8 0.5H216C220.142 0.5 223.5 3.85786 223.5 8V33.5H0.5V8Z",
                fill: "#F2F3F4",
                stroke: "#E3E5E8",
              }),
              (0, a.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12.5641 23.75C12.253 23.75 12.0174 23.4689 12.0718 23.1626L12.5 20.75H10.0951C9.78449 20.75 9.54905 20.4698 9.60259 20.1638L9.69009 19.6638C9.73196 19.4246 9.93972 19.25 10.1826 19.25H12.7625L13.5575 14.75H11.1526C10.842 14.75 10.6065 14.4698 10.6601 14.1638L10.7476 13.6638C10.7895 13.4246 10.9972 13.25 11.2401 13.25H13.82L14.2793 10.6626C14.3216 10.4239 14.5291 10.25 14.7716 10.25H15.2559C15.567 10.25 15.8026 10.5311 15.7482 10.8374L15.32 13.25H19.82L20.2793 10.6626C20.3216 10.4239 20.5291 10.25 20.7716 10.25H21.2559C21.567 10.25 21.8026 10.5311 21.7482 10.8374L21.32 13.25H23.7249C24.0355 13.25 24.271 13.5302 24.2174 13.8362L24.1299 14.3362C24.0881 14.5754 23.8803 14.75 23.6374 14.75H21.0575L20.2625 19.25H22.6674C22.978 19.25 23.2135 19.5302 23.1599 19.8362L23.0724 20.3362C23.0306 20.5754 22.8228 20.75 22.5799 20.75H20L19.5407 23.3374C19.4984 23.5761 19.2909 23.75 19.0484 23.75H18.5641C18.253 23.75 18.0174 23.4689 18.0718 23.1626L18.5 20.75H14L13.5407 23.3374C13.4984 23.5761 13.2909 23.75 13.0484 23.75H12.5641ZM15.0578 14.75L14.2628 19.25H18.7628L19.5578 14.75H15.0578Z",
                fill: "#4F5660",
              }),
              (0, a.jsx)("path", {
                d: "M41.014 22V17.128C41.014 15.868 40.384 15.098 39.11 15.098C38.2 15.098 37.458 15.588 36.856 16.19C36.604 15.532 36.086 15.098 35.12 15.098C34.21 15.098 33.524 15.588 32.894 16.19L32.74 15.238H31.312V22H32.992V17.422C33.482 16.918 33.972 16.582 34.49 16.582C35.106 16.582 35.33 16.988 35.33 17.576V22H37.01V17.422C37.5 16.918 37.99 16.582 38.508 16.582C39.124 16.582 39.334 16.988 39.334 17.576V22H41.014ZM46.3967 20.138C45.9347 20.586 45.3887 20.866 44.8147 20.866C44.2967 20.866 43.9887 20.572 43.9887 20.082C43.9887 19.438 44.4507 18.864 46.3967 18.626V20.138ZM48.0767 22V17.366C48.0767 15.742 47.2087 15.098 45.4587 15.098C44.3807 15.098 43.5547 15.336 42.7707 15.644L42.9807 16.988C43.7087 16.666 44.4507 16.442 45.2347 16.442C45.9767 16.442 46.3967 16.722 46.3967 17.45V17.646C43.6667 17.912 42.3227 18.626 42.3227 20.264C42.3227 21.44 43.0927 22.14 44.2407 22.14C45.2487 22.14 45.9487 21.692 46.4947 21.118L46.6347 22H48.0767ZM53.8857 22.098L55.6777 21.832L53.0317 18.29L55.5237 15.238H53.6197L51.4217 18.038V11.892L49.7417 12.158V22H51.4217V18.64L53.8857 22.098ZM59.1699 16.26C59.9819 16.26 60.4019 16.848 60.5139 17.898H57.8119C57.9379 16.806 58.4979 16.26 59.1699 16.26ZM62.1379 21.314L61.9419 19.998C61.1999 20.516 60.4859 20.838 59.6179 20.838C58.5819 20.838 57.8679 20.264 57.7979 18.948H62.1379C62.1379 18.85 62.1519 18.682 62.1519 18.542C62.1519 16.624 61.2419 15.098 59.2119 15.098C57.4479 15.098 56.1319 16.428 56.1319 18.626C56.1319 21.062 57.5459 22.14 59.4359 22.14C60.5279 22.14 61.4099 21.818 62.1379 21.314ZM66.9533 18.78V17.156H63.3133V18.78H66.9533ZM72.9665 18.528C72.9665 20.012 72.3085 20.726 71.4405 20.726C70.8665 20.726 70.5445 20.628 70.1385 20.432V17.534C70.5865 16.96 71.0625 16.582 71.6645 16.582C72.4205 16.582 72.9665 17.226 72.9665 18.528ZM74.6605 18.43C74.6605 16.162 73.5265 15.098 72.1125 15.098C71.1745 15.098 70.5165 15.616 70.0405 16.162L69.8865 15.238H68.4585V24.604L70.1385 24.352V21.804C70.5445 21.958 71.0625 22.07 71.7065 22.07C73.2605 22.07 74.6605 20.95 74.6605 18.43ZM77.7827 22V11.892L76.1027 12.158V22H77.7827ZM83.2561 20.138C82.7941 20.586 82.2481 20.866 81.6741 20.866C81.1561 20.866 80.8481 20.572 80.8481 20.082C80.8481 19.438 81.3101 18.864 83.2561 18.626V20.138ZM84.9361 22V17.366C84.9361 15.742 84.0681 15.098 82.3181 15.098C81.2401 15.098 80.4141 15.336 79.6301 15.644L79.8401 16.988C80.5681 16.666 81.3101 16.442 82.0941 16.442C82.8361 16.442 83.2561 16.722 83.2561 17.45V17.646C80.5261 17.912 79.1821 18.626 79.1821 20.264C79.1821 21.44 79.9521 22.14 81.1001 22.14C82.1081 22.14 82.8081 21.692 83.3541 21.118L83.4941 22H84.9361ZM92.3691 22V17.128C92.3691 15.868 91.6971 15.098 90.4371 15.098C89.5271 15.098 88.8131 15.588 88.1831 16.19L88.0291 15.238H86.6011V22H88.2811V17.436C88.7711 16.918 89.3031 16.582 89.8211 16.582C90.4371 16.582 90.6891 16.988 90.6891 17.576V22H92.3691ZM99.0642 20.012C99.0642 18.738 98.3782 18.262 96.6282 17.814C95.6202 17.548 95.3682 17.338 95.3682 16.974C95.3682 16.61 95.6762 16.358 96.3062 16.358C96.9782 16.358 97.7762 16.596 98.4482 16.974L98.6722 15.574C98.0002 15.28 97.1882 15.098 96.3062 15.098C94.7382 15.098 93.8142 15.924 93.8142 17.1C93.8142 18.332 94.5002 18.808 96.1382 19.228C97.2162 19.494 97.5102 19.69 97.5102 20.166C97.5102 20.614 97.1182 20.88 96.3902 20.88C95.5502 20.88 94.6542 20.558 93.9262 20.082L93.7022 21.482C94.3462 21.832 95.3542 22.14 96.3342 22.14C98.1122 22.14 99.0642 21.342 99.0642 20.012Z",
                fill: "#060607",
              }),
              (0, a.jsx)("circle", {
                cx: "28",
                cy: "62",
                r: "16",
                fill: "url(#tutorial-media-channels-image2)",
              }),
              (0, a.jsx)("path", {
                d: "M59.572 60V51.72H58.096V57.144L54.376 51.72H52.876V60H54.352V54.3L58.252 60H59.572ZM63.4852 55.08C64.1812 55.08 64.5412 55.584 64.6372 56.484H62.3212C62.4292 55.548 62.9092 55.08 63.4852 55.08ZM66.0292 59.412L65.8612 58.284C65.2252 58.728 64.6132 59.004 63.8692 59.004C62.9812 59.004 62.3692 58.512 62.3092 57.384H66.0292C66.0292 57.3 66.0412 57.156 66.0412 57.036C66.0412 55.392 65.2612 54.084 63.5212 54.084C62.0092 54.084 60.8812 55.224 60.8812 57.108C60.8812 59.196 62.0932 60.12 63.7132 60.12C64.6492 60.12 65.4052 59.844 66.0292 59.412ZM68.7047 60V51.336L67.2647 51.564V60H68.7047ZM71.7281 60V51.336L70.2881 51.564V60H71.7281ZM73.8635 62.184C74.9075 62.184 75.5795 61.764 76.0715 60.372L78.2915 54.204H76.8395L75.5435 58.284L74.2235 54.12L72.7235 54.312L74.8235 59.988L74.7755 60.156C74.5835 60.78 74.1995 60.996 73.7195 60.996C73.4675 60.996 73.2635 60.96 73.0835 60.912L73.2755 62.124C73.4075 62.16 73.5515 62.184 73.8635 62.184Z",
                fill: "#060607",
              }),
              (0, a.jsx)("path", {
                d: "M58.792 76.084L59.908 75.844L56.716 67.684H55.588L52.348 76H53.524L54.448 73.516H57.82L58.792 76.084ZM56.128 69.004L57.448 72.52H54.82L56.128 69.004ZM65.7697 76V71.836C65.7697 70.804 65.1937 70.156 64.1137 70.156C63.2977 70.156 62.6257 70.612 62.0857 71.104L61.9537 70.276H61.1017V76H62.1697V72.04C62.6857 71.488 63.2617 71.116 63.8257 71.116C64.4497 71.116 64.7017 71.512 64.7017 72.1V76H65.7697ZM67.7558 78.184C68.5958 78.184 69.2198 77.872 69.6878 76.6L72.0278 70.276H70.9118L69.4118 74.728L67.8758 70.192L66.7958 70.36L68.8838 76.024L68.7398 76.408C68.5118 77.02 68.1878 77.248 67.7078 77.248C67.5398 77.248 67.3238 77.212 67.1438 77.164L67.2998 78.136C67.4078 78.16 67.5278 78.184 67.7558 78.184ZM77.9291 73.144C77.9291 71.26 76.8011 70.156 75.2651 70.156C73.7411 70.156 72.6371 71.26 72.6371 73.144C72.6371 75.028 73.7411 76.12 75.2651 76.12C76.8011 76.12 77.9291 75.028 77.9291 73.144ZM76.8491 73.144C76.8491 74.344 76.3211 75.232 75.2651 75.232C74.2571 75.232 73.7171 74.32 73.7171 73.144C73.7171 71.944 74.2331 71.044 75.2651 71.044C76.2971 71.044 76.8491 71.968 76.8491 73.144ZM83.9572 76V71.836C83.9572 70.804 83.3812 70.156 82.3012 70.156C81.4852 70.156 80.8132 70.612 80.2732 71.104L80.1412 70.276H79.2892V76H80.3572V72.04C80.8732 71.488 81.4492 71.116 82.0132 71.116C82.6372 71.116 82.8892 71.512 82.8892 72.1V76H83.9572ZM87.8013 70.996C88.6293 70.996 89.0373 71.524 89.1693 72.448H86.4093C86.5773 71.476 87.1413 70.996 87.8013 70.996ZM90.2373 75.352L90.0813 74.392C89.4573 74.884 88.8573 75.208 88.0293 75.208C87.0333 75.208 86.4093 74.584 86.3613 73.252H90.2493V73.024C90.2493 71.44 89.4813 70.156 87.8133 70.156C86.3733 70.156 85.2933 71.284 85.2933 73.12C85.2933 75.22 86.4573 76.12 87.9453 76.12C88.8933 76.12 89.6253 75.832 90.2373 75.352ZM101.73 70.276H100.662L99.4503 74.512L98.1903 70.276H97.2903L96.0303 74.512L94.7823 70.192L93.7383 70.36L95.5743 76.024H96.4623L97.7223 71.704L98.9943 76.024H99.8943L101.73 70.276ZM106.014 74.428C105.534 74.92 104.934 75.232 104.31 75.232C103.77 75.232 103.458 74.932 103.458 74.464C103.458 73.876 103.902 73.3 106.014 73.096V74.428ZM107.082 76V71.992C107.082 70.72 106.41 70.156 105.018 70.156C104.13 70.156 103.482 70.36 102.798 70.636L102.942 71.56C103.566 71.284 104.226 71.068 104.922 71.068C105.582 71.068 106.014 71.32 106.014 72.04V72.28C103.626 72.532 102.402 73.096 102.402 74.524C102.402 75.496 103.05 76.12 104.082 76.12C105.018 76.12 105.642 75.7 106.098 75.232L106.218 76H107.082ZM113.406 76V71.836C113.406 70.804 112.83 70.156 111.75 70.156C110.934 70.156 110.262 70.612 109.722 71.104L109.59 70.276H108.738V76H109.806V72.04C110.322 71.488 110.898 71.116 111.462 71.116C112.086 71.116 112.338 71.512 112.338 72.1V76H113.406ZM117.815 76.024L117.671 75.112C117.539 75.136 117.371 75.148 117.179 75.148C116.579 75.148 116.387 74.86 116.387 74.392V71.176H117.767L117.623 70.276H116.387V68.212L115.343 68.368V70.276H114.479V71.176H115.343V74.584C115.343 75.736 116.003 76.096 117.011 76.096C117.383 76.096 117.635 76.06 117.815 76.024ZM124.494 76.024L124.35 75.112C124.218 75.136 124.05 75.148 123.858 75.148C123.258 75.148 123.066 74.86 123.066 74.392V71.176H124.446L124.302 70.276H123.066V68.212L122.022 68.368V70.276H121.158V71.176H122.022V74.584C122.022 75.736 122.682 76.096 123.69 76.096C124.062 76.096 124.314 76.06 124.494 76.024ZM130.71 73.144C130.71 71.26 129.582 70.156 128.046 70.156C126.522 70.156 125.418 71.26 125.418 73.144C125.418 75.028 126.522 76.12 128.046 76.12C129.582 76.12 130.71 75.028 130.71 73.144ZM129.63 73.144C129.63 74.344 129.102 75.232 128.046 75.232C127.038 75.232 126.498 74.32 126.498 73.144C126.498 71.944 127.014 71.044 128.046 71.044C129.078 71.044 129.63 71.968 129.63 73.144ZM139.375 76V71.836C139.375 70.804 138.799 70.156 137.719 70.156C136.903 70.156 136.243 70.612 135.775 71.032V67.336L134.707 67.504V76H135.775V72.04C136.291 71.488 136.867 71.116 137.431 71.116C138.055 71.116 138.307 71.512 138.307 72.1V76H139.375ZM144.299 74.428C143.819 74.92 143.219 75.232 142.595 75.232C142.055 75.232 141.743 74.932 141.743 74.464C141.743 73.876 142.187 73.3 144.299 73.096V74.428ZM145.367 76V71.992C145.367 70.72 144.695 70.156 143.303 70.156C142.415 70.156 141.767 70.36 141.083 70.636L141.227 71.56C141.851 71.284 142.511 71.068 143.207 71.068C143.867 71.068 144.299 71.32 144.299 72.04V72.28C141.911 72.532 140.687 73.096 140.687 74.524C140.687 75.496 141.335 76.12 142.367 76.12C143.303 76.12 143.927 75.7 144.383 75.232L144.503 76H145.367ZM151.692 76V71.836C151.692 70.804 151.116 70.156 150.036 70.156C149.22 70.156 148.548 70.612 148.008 71.104L147.876 70.276H147.024V76H148.092V72.04C148.608 71.488 149.184 71.116 149.748 71.116C150.372 71.116 150.624 71.512 150.624 72.1V76H151.692ZM156.484 72.136C156.484 72.82 156.028 73.36 155.296 73.36C154.588 73.36 154.132 72.844 154.132 72.184C154.132 71.488 154.576 70.936 155.296 70.936C156.004 70.936 156.484 71.452 156.484 72.136ZM158.188 76.42C158.188 75.532 157.432 75.148 156.22 74.932L155.812 74.86C154.804 74.68 154.6 74.632 154.6 74.428C154.6 74.32 154.72 74.188 154.888 74.08C155.032 74.104 155.176 74.116 155.32 74.116C156.484 74.116 157.516 73.372 157.516 72.148C157.516 71.824 157.444 71.524 157.288 71.26L158.38 71.152L158.224 70.192L156.772 70.636C156.376 70.324 155.872 70.156 155.296 70.156C154.132 70.156 153.1 70.912 153.1 72.148C153.1 72.928 153.532 73.528 154.168 73.852C153.784 74.08 153.568 74.356 153.568 74.632C153.568 74.848 153.676 75.052 153.928 75.232C153.124 75.664 152.716 76.12 152.716 76.708C152.716 77.716 153.904 78.184 155.392 78.184C156.88 78.184 158.188 77.62 158.188 76.42ZM155.44 77.416C154.324 77.416 153.736 77.08 153.736 76.624C153.736 76.228 154.036 75.892 154.708 75.556C154.936 75.604 155.104 75.64 155.416 75.7L156.1 75.82C156.916 75.964 157.18 76.204 157.18 76.552C157.18 77.032 156.556 77.416 155.44 77.416ZM167.003 73.144C167.003 71.26 165.875 70.156 164.339 70.156C162.815 70.156 161.711 71.26 161.711 73.144C161.711 75.028 162.815 76.12 164.339 76.12C165.875 76.12 167.003 75.028 167.003 73.144ZM165.923 73.144C165.923 74.344 165.395 75.232 164.339 75.232C163.331 75.232 162.791 74.32 162.791 73.144C162.791 71.944 163.307 71.044 164.339 71.044C165.371 71.044 165.923 71.968 165.923 73.144ZM168.339 70.276V74.44C168.339 75.472 168.903 76.12 169.995 76.12C170.799 76.12 171.483 75.676 172.023 75.172L172.155 76H173.007V70.276H171.939V74.236C171.423 74.788 170.847 75.16 170.283 75.16C169.659 75.16 169.407 74.764 169.407 74.176V70.276H168.339ZM177.44 76.024L177.296 75.112C177.164 75.136 176.996 75.148 176.804 75.148C176.204 75.148 176.012 74.86 176.012 74.392V71.176H177.392L177.248 70.276H176.012V68.212L174.968 68.368V70.276H174.104V71.176H174.968V74.584C174.968 75.736 175.628 76.096 176.636 76.096C177.008 76.096 177.26 76.06 177.44 76.024ZM184.119 76.024L183.975 75.112C183.843 75.136 183.675 75.148 183.483 75.148C182.883 75.148 182.691 74.86 182.691 74.392V71.176H184.071L183.927 70.276H182.691V68.212L181.647 68.368V70.276H180.783V71.176H181.647V74.584C181.647 75.736 182.307 76.096 183.315 76.096C183.687 76.096 183.939 76.06 184.119 76.024ZM190.082 76V71.836C190.082 70.804 189.506 70.156 188.426 70.156C187.61 70.156 186.95 70.612 186.482 71.032V67.336L185.414 67.504V76H186.482V72.04C186.998 71.488 187.574 71.116 188.138 71.116C188.762 71.116 189.014 71.512 189.014 72.1V76H190.082ZM193.038 68.452C193.038 68.08 192.738 67.768 192.366 67.768C191.994 67.768 191.682 68.08 191.682 68.452C191.682 68.824 191.994 69.124 192.366 69.124C192.738 69.124 193.038 68.824 193.038 68.452ZM192.894 76V70.276H191.826V76H192.894ZM198.656 74.404C198.656 73.312 198.02 72.904 196.604 72.544C195.704 72.316 195.416 72.1 195.416 71.716C195.416 71.308 195.752 71.056 196.4 71.056C197 71.056 197.636 71.26 198.14 71.548L198.308 70.54C197.768 70.3 197.132 70.156 196.424 70.156C195.176 70.156 194.408 70.828 194.408 71.74C194.408 72.76 194.948 73.168 196.292 73.504C197.324 73.756 197.648 73.948 197.648 74.476C197.648 74.956 197.216 75.232 196.484 75.232C195.704 75.232 195.008 74.944 194.468 74.572L194.312 75.58C194.804 75.856 195.644 76.12 196.4 76.12C197.876 76.12 198.656 75.448 198.656 74.404ZM60.328 86.276H59.26L58.048 90.512L56.788 86.276H55.888L54.628 90.512L53.38 86.192L52.336 86.36L54.172 92.024H55.06L56.32 87.704L57.592 92.024H58.492L60.328 86.276ZM63.5318 86.996C64.3598 86.996 64.7678 87.524 64.8998 88.448H62.1398C62.3078 87.476 62.8718 86.996 63.5318 86.996ZM65.9678 91.352L65.8118 90.392C65.1878 90.884 64.5878 91.208 63.7598 91.208C62.7638 91.208 62.1398 90.584 62.0918 89.252H65.9798V89.024C65.9798 87.44 65.2118 86.156 63.5438 86.156C62.1038 86.156 61.0238 87.284 61.0238 89.12C61.0238 91.22 62.1878 92.12 63.6758 92.12C64.6238 92.12 65.3558 91.832 65.9678 91.352ZM69.5201 86.996C70.3481 86.996 70.7561 87.524 70.8881 88.448H68.1281C68.2961 87.476 68.8601 86.996 69.5201 86.996ZM71.9561 91.352L71.8001 90.392C71.1761 90.884 70.5761 91.208 69.7481 91.208C68.7521 91.208 68.1281 90.584 68.0801 89.252H71.9681V89.024C71.9681 87.44 71.2001 86.156 69.5321 86.156C68.0921 86.156 67.0121 87.284 67.0121 89.12C67.0121 91.22 68.1761 92.12 69.6641 92.12C70.6121 92.12 71.3441 91.832 71.9561 91.352ZM76.9364 92.084L78.1004 91.904L75.4844 88.808L77.8964 86.276H76.6124L74.3924 88.676V83.336L73.3244 83.504V92H74.3924V89L76.9364 92.084ZM81.1099 86.996C81.9379 86.996 82.3459 87.524 82.4779 88.448H79.7179C79.8859 87.476 80.4499 86.996 81.1099 86.996ZM83.5459 91.352L83.3899 90.392C82.7659 90.884 82.1659 91.208 81.3379 91.208C80.3419 91.208 79.7179 90.584 79.6699 89.252H83.5579V89.024C83.5579 87.44 82.7899 86.156 81.1219 86.156C79.6819 86.156 78.6019 87.284 78.6019 89.12C78.6019 91.22 79.7659 92.12 81.2539 92.12C82.2019 92.12 82.9339 91.832 83.5459 91.352ZM89.5822 92V87.836C89.5822 86.804 89.0062 86.156 87.9262 86.156C87.1102 86.156 86.4382 86.612 85.8982 87.104L85.7662 86.276H84.9142V92H85.9822V88.04C86.4982 87.488 87.0742 87.116 87.6382 87.116C88.2622 87.116 88.5142 87.512 88.5142 88.1V92H89.5822ZM91.9983 89.252C91.9983 87.836 92.6463 87.104 93.5463 87.104C94.1583 87.104 94.5063 87.2 94.9503 87.428V90.164C94.4943 90.776 93.9903 91.172 93.3303 91.172C92.5623 91.172 91.9983 90.512 91.9983 89.252ZM90.9183 89.3C90.9183 91.22 91.9383 92.12 93.1743 92.12C94.0143 92.12 94.6023 91.688 95.0343 91.172L95.1663 92H96.0183V83.336L94.9503 83.504V86.456C94.5903 86.312 94.0743 86.204 93.5103 86.204C92.1183 86.204 90.9183 87.212 90.9183 89.3ZM99.3194 89.54L100.015 89.384L100.123 88.196C101.551 87.548 102.415 86.984 102.415 85.688C102.415 84.38 101.419 83.564 99.9554 83.564C98.9714 83.564 98.1194 83.912 97.3874 84.452L97.5434 85.556C98.2154 85.004 98.9594 84.584 99.8954 84.584C100.699 84.584 101.287 85.004 101.287 85.736C101.287 86.504 100.783 86.888 99.6554 87.356L99.1634 87.56L99.3194 89.54ZM99.0674 92H100.267V90.572H99.0674V92Z",
                fill: "#2E3338",
              }),
              (0, a.jsxs)("defs", {
                children: [
                  (0, a.jsx)("pattern", {
                    id: "tutorial-media-channels-image1",
                    x: "0",
                    y: "0",
                    patternUnits: "objectBoundingBox",
                    height: "1",
                    width: "1",
                    children: (0, a.jsx)("image", {
                      x: "0",
                      y: "0",
                      height: "32",
                      width: "32",
                      href: l,
                    }),
                  }),
                  (0, a.jsx)("pattern", {
                    id: "tutorial-media-channels-image2",
                    x: "0",
                    y: "0",
                    patternUnits: "objectBoundingBox",
                    height: "1",
                    width: "1",
                    children: (0, a.jsx)("image", {
                      x: "0",
                      y: "0",
                      height: "32",
                      width: "32",
                      href: i,
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    894383: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("348956"),
        l = n("581752"),
        i = n("911005");
      function r() {
        return (0, a.jsx)("div", {
          className: s.container,
          children: (0, a.jsxs)("svg", {
            width: "248",
            height: "67",
            viewBox: "0 0 248 67",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, a.jsx)("path", {
                d: "M1.91937 22.0819L0.353585 25.3514C0.282937 25.5093 0.265227 25.6857 0.303076 25.8544C0.311999 25.943 0.339002 26.0288 0.382429 26.1067C0.425856 26.1845 0.484791 26.2527 0.555622 26.3071C0.607907 26.38 0.675826 26.4403 0.754452 26.4838C0.833079 26.5273 0.920441 26.5529 1.0102 26.5586C1.19659 26.5915 1.38843 26.5741 1.5658 26.5083L4.74788 24.949L5.15196 24.8484L5.55603 24.949L8.73811 26.5083H9.29371L9.74829 26.2568C9.85659 26.1275 9.92655 25.9707 9.95033 25.8041C9.98818 25.6354 9.97046 25.459 9.89982 25.3011L8.33403 22.0315C8.2926 21.919 8.27539 21.799 8.28352 21.6794C8.27533 21.5434 8.29245 21.4069 8.33403 21.277L9.89982 18.1081C9.94425 18.0329 9.97177 17.949 9.98049 17.8621C9.98921 17.7753 9.97892 17.6876 9.95033 17.6051C9.93611 17.4208 9.86561 17.2453 9.74829 17.1021C9.60449 16.9853 9.42824 16.9151 9.2432 16.9009C9.16036 16.8724 9.07231 16.8622 8.98511 16.8709C8.89791 16.8796 8.81364 16.907 8.73811 16.9512L5.50552 18.5105L5.10145 18.6111L4.69737 18.5105L1.5153 16.9512C1.43095 16.9057 1.3382 16.8778 1.24269 16.8692C1.14717 16.8605 1.05089 16.8713 0.959695 16.9009C0.792331 16.9246 0.634911 16.9943 0.505112 17.1021C0.372179 17.2408 0.284186 17.416 0.252566 17.6051C0.236844 17.779 0.271925 17.9537 0.353585 18.1081L1.86886 21.3273C1.94921 21.4454 1.98499 21.5879 1.96988 21.7297C1.98577 21.7888 1.98948 21.8504 1.9808 21.9109C1.97212 21.9715 1.95122 22.0296 1.91937 22.0819Z",
                fill: "#AEC7FF",
              }),
              (0, a.jsx)("path", {
                d: "M205.949 47.6259C218.112 47.6259 227.971 37.8071 227.971 25.695C227.971 13.5829 218.112 3.76405 205.949 3.76405C193.787 3.76405 183.927 13.5829 183.927 25.695C183.927 37.8071 193.787 47.6259 205.949 47.6259Z",
                fill: "url(#tutorial-media-voice-channels-image2)",
              }),
              (0, a.jsx)("path", {
                d: "M206.106 47.5713C218.256 47.5713 228.106 37.7216 228.106 25.5713C228.106 13.4211 218.256 3.57133 206.106 3.57133C193.956 3.57133 184.106 13.4211 184.106 25.5713C184.106 37.7216 193.956 47.5713 206.106 47.5713Z",
                stroke: "#3ba55c",
                strokeWidth: "3",
              }),
              (0, a.jsx)("path", {
                d: "M43.8822 66.4461C56.0446 66.4461 65.9042 56.6273 65.9042 44.5152C65.9042 32.4031 56.0446 22.5843 43.8822 22.5843C31.7198 22.5843 21.8602 32.4031 21.8602 44.5152C21.8602 56.6273 31.7198 66.4461 43.8822 66.4461Z",
                fill: "url(#tutorial-media-voice-channels-image1)",
              }),
              (0, a.jsx)("path", {
                d: "M43.6684 66.0315C55.8187 66.0315 65.6684 56.1818 65.6684 44.0315C65.6684 31.8813 55.8187 22.0315 43.6684 22.0315C31.5181 22.0315 21.6684 31.8813 21.6684 44.0315C21.6684 56.1818 31.5181 66.0315 43.6684 66.0315Z",
                stroke: "#3ba55c",
                strokeWidth: "3",
              }),
              (0, a.jsx)("path", {
                d: "M138.597 43.8116C134.96 31.857 134.96 19.0973 138.597 7.14265",
                stroke: "#FF6E5C",
                strokeWidth: "5",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
              }),
              (0, a.jsx)("path", {
                d: "M111.562 25.5955C115.2 37.5501 115.2 50.3098 111.562 62.2644",
                stroke: "#FFED00",
                strokeWidth: "5",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
              }),
              (0, a.jsx)("path", {
                d: "M159.71 37.6246C158.509 33.6948 157.896 29.6101 157.892 25.5023C157.9 21.3782 158.513 17.2775 159.71 13.3296",
                stroke: "#FF6E5C",
                strokeWidth: "5",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
              }),
              (0, a.jsx)("path", {
                d: "M149.154 10.2613C146.124 20.198 146.124 30.8065 149.154 40.7433",
                stroke: "#FF6E5C",
                strokeWidth: "5",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
              }),
              (0, a.jsx)("path", {
                d: "M170.266 16.4482C169.347 19.3785 168.887 22.4324 168.903 25.5023C168.887 28.5721 169.347 31.626 170.266 34.5563",
                stroke: "#FF6E5C",
                strokeWidth: "5",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
              }),
              (0, a.jsx)("path", {
                d: "M90.0579 56.1351C91.2957 52.1951 91.9258 48.0908 91.9267 43.9625C91.9301 39.8503 91.2999 35.7619 90.0579 31.8401",
                stroke: "#FFED00",
                strokeWidth: "5",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
              }),
              (0, a.jsx)("path", {
                d: "M100.614 28.6068C103.644 38.5435 103.644 49.152 100.614 59.0887",
                stroke: "#FFED00",
                strokeWidth: "5",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
              }),
              (0, a.jsx)("path", {
                d: "M79.5015 34.9084C81.3857 40.7986 81.3857 47.1263 79.5015 53.0165",
                stroke: "#FFED00",
                strokeWidth: "5",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
              }),
              (0, a.jsx)("path", {
                d: "M182.237 57.1914L184.257 56.4872C184.354 56.4431 184.436 56.3722 184.494 56.2831C184.551 56.1939 184.582 56.0902 184.582 55.9842C184.582 55.8783 184.551 55.7746 184.494 55.6854C184.436 55.5962 184.354 55.5254 184.257 55.4812L182.237 54.777C182.16 54.7552 182.088 54.7169 182.027 54.6648C181.966 54.6127 181.917 54.548 181.884 54.4752L181.176 52.4632C181.143 52.3626 181.079 52.275 180.993 52.2128C180.907 52.1507 180.803 52.1173 180.697 52.1173C180.59 52.1173 180.487 52.1507 180.4 52.2128C180.314 52.275 180.25 52.3626 180.217 52.4632L179.51 54.4752C179.476 54.548 179.427 54.6127 179.366 54.6648C179.305 54.7169 179.233 54.7552 179.156 54.777L177.186 55.4812C177.052 55.4812 176.924 55.5342 176.829 55.6286C176.734 55.7229 176.681 55.8508 176.681 55.9842C176.681 56.1176 176.734 56.2456 176.829 56.3399C176.924 56.4343 177.052 56.4872 177.186 56.4872L179.156 57.1914C179.233 57.2133 179.305 57.2516 179.366 57.3037C179.427 57.3558 179.476 57.4205 179.51 57.4933L180.217 59.5053C180.25 59.6059 180.314 59.6935 180.4 59.7556C180.487 59.8178 180.59 59.8512 180.697 59.8512C180.803 59.8512 180.907 59.8178 180.993 59.7556C181.079 59.6935 181.143 59.6059 181.176 59.5053L181.884 57.4933C181.917 57.4205 181.966 57.3558 182.027 57.3037C182.088 57.2516 182.16 57.2133 182.237 57.1914Z",
                fill: "#EC7DF7",
              }),
              (0, a.jsx)("path", {
                d: "M242.696 1.35812C242.696 0.746955 242.199 0.251511 241.585 0.251511C240.972 0.251511 240.474 0.746955 240.474 1.35812V2.4949C240.474 3.10607 240.972 3.60151 241.585 3.60151C242.199 3.60151 242.696 3.10607 242.696 2.4949V1.35812Z",
                fill: "#7196FF",
              }),
              (0, a.jsx)("path", {
                d: "M242.696 10.2613C242.696 9.65011 242.199 9.15466 241.585 9.15466C240.972 9.15466 240.474 9.65011 240.474 10.2613V11.3981C240.474 12.0092 240.972 12.5047 241.585 12.5047C242.199 12.5047 242.696 12.0092 242.696 11.3981V10.2613Z",
                fill: "#7196FF",
              }),
              (0, a.jsx)("path", {
                d: "M246.636 7.49476C247.25 7.49476 247.747 6.99933 247.747 6.38817C247.747 5.77701 247.25 5.28156 246.636 5.28156H245.495C244.881 5.28156 244.384 5.77701 244.384 6.38817C244.384 6.99933 244.881 7.49476 245.495 7.49476H246.636Z",
                fill: "#7196FF",
              }),
              (0, a.jsx)("path", {
                d: "M237.696 7.49477C238.31 7.49477 238.807 6.99931 238.807 6.38815C238.807 5.77699 238.31 5.28154 237.696 5.28154H236.555C235.941 5.28154 235.443 5.77699 235.443 6.38815C235.443 6.99931 235.941 7.49477 236.555 7.49477H237.696Z",
                fill: "#7196FF",
              }),
              (0, a.jsx)("path", {
                d: "M25.2929 2.23526C24.8786 1.82274 24.207 1.82274 23.7928 2.23526C23.3786 2.64777 23.3786 3.31659 23.7928 3.7291L24.5535 4.48669C24.9678 4.8992 25.6394 4.8992 26.0536 4.48669C26.4678 4.07418 26.4678 3.40536 26.0536 2.99285L25.2929 2.23526Z",
                fill: "#F7D036",
              }),
              (0, a.jsx)("path", {
                d: "M31.3539 8.25656C30.9397 7.84404 30.2681 7.84404 29.8538 8.25656C29.4396 8.66907 29.4396 9.33789 29.8538 9.7504L30.6146 10.508C31.0288 10.9205 31.7004 10.9205 32.1146 10.508C32.5289 10.0955 32.5289 9.42666 32.1146 9.01415L31.3539 8.25656Z",
                fill: "#F7D036",
              }),
              (0, a.jsx)("path", {
                d: "M32.109 3.71739C32.5233 3.30488 32.5233 2.63606 32.109 2.22354C31.6948 1.81103 31.0232 1.81103 30.609 2.22355L29.8482 2.98114C29.434 3.39365 29.434 4.06247 29.8482 4.47498C30.2625 4.88749 30.9341 4.88749 31.3483 4.47498L32.109 3.71739Z",
                fill: "#F7D036",
              }),
              (0, a.jsx)("path", {
                d: "M26.0985 9.73869C26.5128 9.32618 26.5128 8.65736 26.0985 8.24485C25.6843 7.83233 25.0127 7.83233 24.5985 8.24485L23.8378 9.00244C23.4235 9.41495 23.4235 10.0838 23.8378 10.4963C24.252 10.9088 24.9236 10.9088 25.3378 10.4963L26.0985 9.73869Z",
                fill: "#F7D036",
              }),
              (0, a.jsxs)("defs", {
                children: [
                  (0, a.jsx)("pattern", {
                    id: "tutorial-media-voice-channels-image1",
                    x: "0",
                    y: "0",
                    patternUnits: "objectBoundingBox",
                    height: "1",
                    width: "1",
                    children: (0, a.jsx)("image", {
                      x: "0",
                      y: "0",
                      height: "44",
                      width: "44",
                      href: l,
                    }),
                  }),
                  (0, a.jsx)("pattern", {
                    id: "tutorial-media-voice-channels-image2",
                    x: "0",
                    y: "0",
                    patternUnits: "objectBoundingBox",
                    height: "1",
                    width: "1",
                    children: (0, a.jsx)("image", {
                      x: "0",
                      y: "0",
                      height: "44",
                      width: "44",
                      href: i,
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    556684: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("16470"),
        l = n("446674"),
        i = n("77078"),
        r = n("843962"),
        o = n("393027"),
        u = n("42203"),
        d = n("305961"),
        c = n("697218"),
        f = n("476263"),
        h = n("315102"),
        C = n("941298");
      function p() {
        let { guildId: e, channelId: t } = (0, o.default)(e => {
            let { guildId: t, channelId: n } = e;
            return { guildId: t, channelId: n };
          }, s.default),
          n = (0, l.useStateFromStores)([d.default], () =>
            d.default.getGuild(e)
          ),
          p = (0, l.useStateFromStores)([u.default], () =>
            null == n ? u.default.getChannel(t) : null
          ),
          E = (0, l.useStateFromStores)([c.default], () =>
            c.default.getCurrentUser()
          ),
          m = null != p ? (0, r.getChannelIconURL)(p) : null,
          g = null != E ? E.getAvatarURL(e, 80) : h.DEFAULT_AVATARS[0],
          S = (0, a.jsx)(i.Avatar, {
            src: g,
            "aria-hidden": !0,
            size: i.AvatarSizes.SIZE_80,
            className: C.avatarSizeOverride,
          }),
          _ = null;
        return (
          (_ =
            null != n
              ? (0, a.jsx)(f.default, { guild: n })
              : null != m
                ? (0, a.jsx)(i.Avatar, {
                    "aria-hidden": !0,
                    src: m,
                    size: i.AvatarSizes.SIZE_80,
                    className: C.avatarSizeOverride,
                  })
                : S),
          (0, a.jsxs)("div", {
            className: C.container,
            children: [
              (0, a.jsx)("div", { className: C.personAvatar, children: S }),
              (0, a.jsx)("div", { className: C.guildAvatar, children: _ }),
              (0, a.jsx)("svg", {
                className: C.illustration,
                xmlns: "http://www.w3.org/2000/svg",
                width: "156",
                height: "70",
                viewBox: "0 0 123 55",
                children: (0, a.jsxs)("g", {
                  fill: "none",
                  fillRule: "evenodd",
                  children: [
                    (0, a.jsx)("path", {
                      fill: "#D3D6ED",
                      d: "M7.6003,3.7337 C7.6003,3.1817 7.1533,2.7337 6.6003,2.7337 C5.7663,2.7337 5.0903,2.0577 5.0903,1.2237 C5.0903,0.6717 4.6423,0.2237 4.0903,0.2237 C3.5383,0.2237 3.0903,0.6717 3.0903,1.2237 C3.0903,2.0577 2.4133,2.7337 1.5803,2.7337 C1.0283,2.7337 0.5803,3.1817 0.5803,3.7337 C0.5803,4.2857 1.0283,4.7337 1.5803,4.7337 C2.4133,4.7337 3.0903,5.4097 3.0903,6.2437 C3.0903,6.7967 3.5383,7.2437 4.0903,7.2437 C4.6423,7.2437 5.0903,6.7967 5.0903,6.2437 C5.0903,5.4097 5.7663,4.7337 6.6003,4.7337 C7.1533,4.7337 7.6003,4.2857 7.6003,3.7337",
                    }),
                    (0, a.jsx)("path", {
                      fill: "#ACB0FF",
                      d: "M96.6157,5.4263 C96.6157,4.8743 96.1687,4.4263 95.6157,4.4263 C95.0627,4.4263 94.6157,4.8743 94.6157,5.4263 C94.6157,6.2603 93.9397,6.9363 93.1057,6.9363 C92.5537,6.9363 92.1057,7.3843 92.1057,7.9363 C92.1057,8.4883 92.5537,8.9363 93.1057,8.9363 C93.9397,8.9363 94.6157,9.6123 94.6157,10.4463 C94.6157,10.9983 95.0627,11.4463 95.6157,11.4463 C96.1687,11.4463 96.6157,10.9983 96.6157,10.4463 C96.6157,9.6123 97.2917,8.9363 98.1257,8.9363 C98.6787,8.9363 99.1257,8.4883 99.1257,7.9363 C99.1257,7.3843 98.6787,6.9363 98.1257,6.9363 C97.2917,6.9363 96.6157,6.2603 96.6157,5.4263 Z",
                    }),
                    (0, a.jsx)("path", {
                      fill: "#FFF",
                      d: "M120.7351 14.0452L119.5511 15.2282C119.1611 15.6182 119.1611 16.2512 119.5511 16.6422 119.7471 16.8372 120.0031 16.9352 120.2581 16.9352 120.5141 16.9352 120.7701 16.8372 120.9651 16.6422L122.1491 15.4592C122.5401 15.0682 122.5401 14.4362 122.1491 14.0452 121.7581 13.6542 121.1261 13.6542 120.7351 14.0452zM113.635 21.1452C113.245 21.5352 113.245 22.1682 113.635 22.5592 113.831 22.7542 114.087 22.8522 114.342 22.8522 114.598 22.8522 114.855 22.7542 115.049 22.5592L116.233 21.3752C116.624 20.9842 116.624 20.3522 116.233 19.9612 115.842 19.5702 115.209 19.5702 114.819 19.9612L113.635 21.1452zM120.9655 19.9612C120.5745 19.5702 119.9425 19.5702 119.5515 19.9612 119.1605 20.3522 119.1605 20.9842 119.5515 21.3752L120.7355 22.5592C120.9305 22.7542 121.1865 22.8522 121.4425 22.8522 121.6975 22.8522 121.9535 22.7542 122.1495 22.5592 122.5395 22.1682 122.5395 21.5352 122.1495 21.1452L120.9655 19.9612zM115.0491 14.0449C114.6591 13.6549 114.0251 13.6549 113.6351 14.0449 113.2451 14.4359 113.2451 15.0689 113.6351 15.4589L114.8191 16.6419C115.0141 16.8369 115.2701 16.9349 115.5261 16.9349 115.7821 16.9349 116.0381 16.8369 116.2331 16.6419 116.6241 16.2509 116.6241 15.6189 116.2331 15.2279L115.0491 14.0449z",
                    }),
                    (0, a.jsx)("rect", {
                      width: "40",
                      height: "25",
                      x: "68",
                      y: "22",
                      fill: "#999CF4",
                      fillRule: "nonzero",
                      rx: "3",
                    }),
                    (0, a.jsx)("path", {
                      fill: "#999CF4",
                      fillRule: "nonzero",
                      d: "M90,46 L90,53.8100983 C90,54.362383 90.4477153,54.8100983 91,54.8100983 C91.2501917,54.8100983 91.4912948,54.7163131 91.6757246,54.5472524 L101,46 L90,46 Z",
                      transform: "matrix(-1 0 0 1 191 0)",
                    }),
                    (0, a.jsxs)("g", {
                      fill: "#FFF",
                      fillRule: "nonzero",
                      opacity: ".902",
                      transform: "translate(78 32)",
                      children: [
                        (0, a.jsx)("circle", {
                          cx: "2.5",
                          cy: "2.5",
                          r: "2.5",
                        }),
                        (0, a.jsx)("circle", {
                          cx: "10.5",
                          cy: "2.5",
                          r: "2.5",
                        }),
                        (0, a.jsx)("circle", {
                          cx: "18.5",
                          cy: "2.5",
                          r: "2.5",
                        }),
                      ],
                    }),
                    (0, a.jsx)("rect", {
                      width: "40",
                      height: "25",
                      x: "13",
                      y: "9",
                      fill: "#5865f2",
                      fillRule: "nonzero",
                      rx: "3",
                    }),
                    (0, a.jsx)("path", {
                      fill: "#5865f2",
                      fillRule: "nonzero",
                      d: "M20,33 L20,40.8100983 C20,41.362383 20.4477153,41.8100983 21,41.8100983 C21.2501917,41.8100983 21.4912948,41.7163131 21.6757246,41.5472524 L31,33 L20,33 Z",
                    }),
                    (0, a.jsxs)("g", {
                      fill: "#FFF",
                      fillRule: "nonzero",
                      opacity: ".902",
                      transform: "translate(23 19)",
                      children: [
                        (0, a.jsx)("circle", {
                          cx: "2.5",
                          cy: "2.5",
                          r: "2.5",
                        }),
                        (0, a.jsx)("circle", {
                          cx: "10.5",
                          cy: "2.5",
                          r: "2.5",
                        }),
                        (0, a.jsx)("circle", {
                          cx: "18.5",
                          cy: "2.5",
                          r: "2.5",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
    },
    12896: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var a = n("37983"),
        s = n("884691"),
        l = n("817736"),
        i = n("118810"),
        r = n("446674"),
        o = n("715315"),
        u = n("471671"),
        d = n("53889"),
        c = n("612246");
      class f extends s.Component {
        componentDidMount() {
          let { visible: e, inlineSpecs: t } = this.props;
          null == t && this.show(e);
        }
        componentWillUnmount() {
          let { inlineSpecs: e } = this.props;
          null == e && this.show(!1);
        }
        componentDidUpdate(e) {
          let {
            position: t,
            offsetX: n,
            offsetY: a,
            tutorialId: s,
            visible: l,
            windowSize: i,
          } = e;
          s !== this.props.tutorialId
            ? o.default.hide(s)
            : (l !== this.props.visible ||
                t !== this.props.position ||
                n !== this.props.offsetX ||
                a !== this.props.offsetY ||
                i !== this.props.windowSize) &&
              this.show(this.props.visible);
        }
        show(e) {
          let {
            tutorialId: t,
            position: n,
            offsetX: a,
            offsetY: s,
            visible: r,
            inlineSpecs: u,
            autoInvert: d,
          } = this.props;
          if (e && null == u) {
            let e = (0, l.findDOMNode)(this);
            if (!(0, i.isElement)(e)) return;
            let {
              top: r,
              left: u,
              right: c,
              bottom: f,
            } = e.getBoundingClientRect();
            o.default.show(t, {
              position: n,
              targetWidth: c - u,
              targetHeight: f - r,
              autoInvert: d,
              origin: { x: u, y: r },
              offset: { x: a, y: s },
            });
          } else r && o.default.hide(t);
        }
        render() {
          let {
              inlineSpecs: e,
              tutorialId: t,
              children: n,
              visible: l,
              windowFocused: i,
              position: r,
              autoInvert: o,
            } = this.props,
            u = c.default.getData()[t];
          return null != e && null != u
            ? (0, a.jsxs)(a.Fragment, {
                children: [
                  n,
                  l &&
                    (0, a.jsx)(d.TutorialIndicator, {
                      autoInvert: o,
                      position: r,
                      tutorialId: t,
                      tutorialDefinition: u,
                      focused: i,
                      ...e,
                    }),
                ],
              })
            : s.Children.only(n);
        }
      }
      function h(e) {
        let { tutorialId: t } = e,
          n = (0, r.useStateFromStores)(
            [c.default],
            () => c.default.shouldShow(t),
            [t]
          ),
          s = (0, r.useStateFromStores)([u.default], () =>
            u.default.isFocused()
          ),
          l = (0, r.useStateFromStores)(
            [u.default],
            () => u.default.windowSize(),
            []
          );
        return (0, a.jsx)(f, {
          ...e,
          visible: n,
          windowFocused: s,
          windowSize: l,
        });
      }
      f.defaultProps = {
        position: "top",
        offsetX: 0,
        offsetY: 0,
        autoInvert: !0,
      };
    },
    53889: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          TutorialIndicator: function () {
            return T;
          },
          default: function () {
            return A;
          },
        }),
        n("222007");
      var a = n("37983"),
        s = n("884691"),
        l = n("414456"),
        i = n.n(l),
        r = n("627445"),
        o = n.n(r),
        u = n("817736"),
        d = n("118810"),
        c = n("446674"),
        f = n("77078"),
        h = n("715315"),
        C = n("778588"),
        p = n("471671"),
        E = n("808072"),
        m = n("807061"),
        g = n("826431"),
        S = n("612246"),
        _ = n("587335");
      class T extends s.PureComponent {
        componentDidMount() {
          this.updateCache();
        }
        componentDidUpdate(e) {
          let {
            tutorialId: t,
            origin: { x: n, y: a },
            targetWidth: s,
            targetHeight: l,
            position: i,
            offset: r,
          } = e;
          (this.props.tutorialId !== t ||
            this.props.origin.x !== n ||
            this.props.origin.y !== a ||
            this.props.targetWidth !== s ||
            this.props.targetHeight !== l ||
            this.props.position !== i ||
            this.props.offset.x !== r.x ||
            this.props.offset.y !== r.y) &&
            this.updateCache();
        }
        updateCache() {
          var e, t;
          let n = (0, u.findDOMNode)(this);
          if (null == n || !(0, d.isElement)(n, HTMLElement)) return;
          let { offsetWidth: a, offsetHeight: s } = n,
            l = {
              offsetX: (this.props.targetWidth - a) / 2,
              offsetY: (this.props.targetHeight - s) / 2,
            },
            i = this.props.position;
          switch (i) {
            case "left":
              l.offsetX = -a;
              break;
            case "right":
              l.offsetX = this.props.targetWidth;
              break;
            case "bottom":
              l.offsetY = this.props.targetHeight;
              break;
            default:
              l.offsetY = -s;
          }
          (l.offsetX +=
            null !== (e = this.props.offset.x) && void 0 !== e ? e : 0),
            (l.offsetY +=
              null !== (t = this.props.offset.y) && void 0 !== t ? t : 0),
            this.setState(l);
        }
        handleSkipTips() {
          h.default.suppressAll();
        }
        getTutorialPopoutText() {
          let { tutorialId: e } = this.props;
          return (0, g.getTutorialPopoutText)(e);
        }
        render() {
          let {
              tutorialId: e,
              autoInvert: t,
              focused: n,
              origin: s,
            } = this.props,
            l = (0, m.getTutorialPopoutAttributes)(e);
          if (null == l) return null;
          let {
              media: r,
              textAlign: o,
              isLongText: u,
              highPriority: d,
              spacing: c,
              arrowAlignment: h = E.ArrowAlignments.TOP,
              popoutPosition: C,
            } = l,
            { offsetX: p, offsetY: g } = this.state,
            S = {
              left: null != p ? s.x + p : void 0,
              top: null != g ? s.y + g : void 0,
            },
            T = e => {
              let t = n && !e;
              return !0 !== d
                ? null
                : (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("div", {
                        className: i(_.top, {
                          [_.animating]: t,
                          [_.notAnimating]: !t,
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: i(_.bottom, {
                          [_.animating]: t,
                          [_.notAnimating]: !t,
                        }),
                      }),
                    ],
                  });
            },
            A = e => {
              let t = n && !e;
              return {
                [_.animating]: t,
                [_.notAnimating]: !t,
                [_.highPriority]: d,
              };
            },
            M = this.getTutorialPopoutText();
          return (0, a.jsx)(E.default, {
            position: C,
            renderMedia: r,
            textAlign: o,
            spacing: c,
            isLongText: u,
            uniqueId: e,
            autoInvert: t,
            arrowAlignment: h,
            onSkipAll: this.handleSkipTips,
            onComplete: this.handleDismiss,
            ...M,
            children: (e, t) => {
              let { isShown: n } = t;
              return (0, a.jsx)(f.Clickable, {
                ...e,
                className: _.indicator,
                style: S,
                children: (0, a.jsxs)("div", {
                  className: i(_.animationContainer, A(n)),
                  children: [
                    T(n),
                    (0, a.jsx)("div", { className: i(_.innerCircle, A(n)) }),
                    (0, a.jsx)("div", { className: i(_.outerCircle, A(n)) }),
                  ],
                }),
              });
            },
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = { offsetX: null, offsetY: null }),
            (this.handleDismiss = () => {
              h.default.dismiss(this.props.tutorialId);
            });
        }
      }
      var A = function () {
        let {
          indicators: e,
          tutorialData: t,
          windowFocused: n,
          shouldShowAny: s,
        } = (0, c.useStateFromStoresObject)(
          [S.default, p.default, C.default],
          () => ({
            indicators: S.default.getIndicators(),
            tutorialData: S.default.getData(),
            shouldShowAny:
              S.default.shouldShowAnyIndicators() && !C.default.hasLayers(),
            windowFocused: p.default.isFocused(),
          })
        );
        return s
          ? (0, a.jsx)(a.Fragment, {
              children: Object.entries(e).map(e => {
                let [s, l] = e,
                  i = t[s];
                return (
                  o(null != i, "Missing tutorial definition for ".concat(s)),
                  (0, a.jsx)(
                    T,
                    { tutorialId: s, tutorialDefinition: i, focused: n, ...l },
                    s
                  )
                );
              }),
            })
          : null;
      };
    },
    807061: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getTutorialPopoutAttributes: function () {
            return u;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("808072"),
        l = n("714307"),
        i = n("894383"),
        r = n("556684");
      let o = Object.freeze({
          "voice-conversations": {
            popoutPosition: "right",
            highPriority: !0,
            textAlign: s.TextAlignments.CENTER,
            media: () => (0, a.jsx)(i.default, {}),
          },
          "writing-messages": {
            popoutPosition: "top",
            highPriority: !0,
            textAlign: s.TextAlignments.CENTER,
            spacing: 10,
            media: () => (0, a.jsx)(r.default, {}),
          },
          "direct-messages": { popoutPosition: "right" },
          "create-first-server": { popoutPosition: "right", highPriority: !0 },
          "organize-by-topic": {
            popoutPosition: "right",
            textAlign: s.TextAlignments.CENTER,
            spacing: 8,
            media: () => (0, a.jsx)(l.default, {}),
          },
          "instant-invite": {
            popoutPosition: "right",
            spacing: 24,
            highPriority: !0,
          },
          "whos-online": { spacing: 16, popoutPosition: "left" },
          "server-settings": { popoutPosition: "bottom", spacing: 10 },
          "friends-list": { spacing: 8, popoutPosition: "right" },
          "create-more-servers": { spacing: 8, popoutPosition: "right" },
        }),
        u = e => (e in o ? o[e] : null);
    },
    826431: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getTutorialPopoutText: function () {
            return f;
          },
        }),
        n("781738");
      var a = n("37983");
      n("884691");
      var s = n("446674"),
        l = n("305961"),
        i = n("162771"),
        r = n("76539"),
        o = n("782340"),
        u = n("349997");
      let d = () =>
          (0, a.jsx)(a.Fragment, {
            children: o.default.Messages.TIP_INSTANT_INVITE_BODY3.format({
              shareIcon: o.default.Messages.INSTANT_INVITE,
              shareIconHook: () =>
                (0, a.jsx)(r.default, { className: u.icon }, "icon"),
            }),
          }),
        c = () => {
          let e = (0, s.useStateFromStores)(
              [l.default, i.default],
              () => l.default.getGuild(i.default.getGuildId()),
              []
            ),
            t = null == e ? void 0 : e.name;
          return (0, a.jsx)(a.Fragment, {
            children: o.default.Messages.TIP_WRITING_MESSAGES_BODY3.format({
              serverName: t,
            }),
          });
        },
        f = e => {
          var t, n;
          let s = {
              VOICE_CONVERSATIONS: {
                title: (0, a.jsx)("div", {
                  className: u.voiceChannelsTitle,
                  children: o.default.Messages.NUF_VOICE_CHANNELS_TITLE,
                }),
                body: o.default.Messages.NUF_VOICE_CHANNELS_DESCRIPTION,
              },
              WRITING_MESSAGES: {
                title: (0, a.jsx)("div", {
                  className: u.writingMessagesTitle,
                  children: o.default.Messages.TIP_WRITING_MESSAGES_TITLE3,
                }),
                body: (0, a.jsx)(c, {}),
              },
              ORGANIZE_BY_TOPIC: {
                title: (0, a.jsx)("div", {
                  className: u.channelsTitle,
                  children: o.default.Messages.NUF_CHANNELS_TITLE,
                }),
                body: o.default.Messages.NUF_CHANNELS_DESCRIPTION,
              },
              WHOS_ONLINE: {
                title: o.default.Messages.TIP_WHOS_ONLINE_TITLE3,
                body: o.default.Messages.TIP_WHOS_ONLINE_BODY3.format(),
              },
              INSTANT_INVITE: {
                title: o.default.Messages.TIP_INSTANT_INVITE_TITLE3,
                body: (0, a.jsx)(d, {}),
              },
              SERVER_SETTINGS: {
                title: o.default.Messages.TIP_SERVER_SETTINGS_TITLE3,
                body: o.default.Messages.TIP_SERVER_SETTINGS_BODY3.format(),
              },
              DIRECT_MESSAGES: {
                title: o.default.Messages.TIP_DIRECT_MESSAGES_TITLE3,
                body: o.default.Messages.TIP_DIRECT_MESSAGES_BODY3.format(),
              },
              CREATE_MORE_SERVERS: {
                title: o.default.Messages.TIP_CREATE_MORE_SERVERS_TITLE3,
                body: o.default.Messages.TIP_CREATE_MORE_SERVERS_BODY3.format(),
              },
              CREATE_FIRST_SERVER: {
                title: o.default.Messages.TIP_CREATE_FIRST_SERVER_TITLE3,
                body: o.default.Messages.TIP_CREATE_FIRST_SERVER_BODY3.format(),
              },
              FRIENDS_LIST: {
                title: o.default.Messages.TIP_FRIENDS_LIST_TITLE3,
                body: o.default.Messages.TIP_FRIENDS_LIST_BODY3.format(),
              },
            },
            l = e.replace(/-/g, "_").toUpperCase(),
            i = null !== (t = s[l]) && void 0 !== t ? t : {};
          return {
            title: i.title,
            body: i.body,
            isLongText: null !== (n = i.isLongText) && void 0 !== n && n,
          };
        };
    },
    612246: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        }),
        n("222007");
      var a = n("394846"),
        s = n("446674"),
        l = n("913144"),
        i = n("619443"),
        r = n("624309"),
        o = n("492397");
      let u = {},
        d = {},
        c = !0,
        f = {},
        h = !1;
      function C() {
        return r.default;
      }
      function p() {
        if (((f = {}), c)) return;
        let e = r.default;
        for (let [t, n] of Object.entries(e)) {
          let e = !1 !== u[t];
          if (((f[t] = e), e && null != n.prerequisites))
            for (let e of n.prerequisites) {
              let n = !1 === u[e];
              !n && (f[t] = !1);
            }
        }
      }
      class E extends s.default.Store {
        initialize() {
          p(),
            this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type),
            this.waitFor(i.default);
        }
        shouldShow(e) {
          var t;
          return (
            !(
              !h ||
              c ||
              o.CONFERENCE_MODE_ENABLED ||
              ((t = e),
              a.isMobile &&
                ["writing-messages", "organize-by-topic"].includes(t))
            ) &&
            (f[e] || !1)
          );
        }
        shouldShowAnyIndicators() {
          return !c;
        }
        getIndicators() {
          return d;
        }
        getData() {
          return r.default;
        }
        getDefinition(e) {
          let t = this.getData();
          return null != t ? t[e] : null;
        }
      }
      E.displayName = "TutorialIndicatorStore";
      var m = new E(l.default, {
        CONNECTION_OPEN: function (e) {
          let { tutorial: t } = e;
          (h = !0),
            (c = !0),
            (u = {}),
            null != t &&
              ((c = t.indicators_suppressed),
              t.indicators_confirmed.forEach(e => (u[e] = !1))),
            p();
        },
        CONNECTION_CLOSED: function () {
          h = !1;
        },
        TUTORIAL_INDICATOR_DISMISS: function (e) {
          (u = { ...u, [e.tutorialId]: !1 }),
            (d = { ...d }),
            delete d[e.tutorialId],
            p();
        },
        TUTORIAL_INDICATOR_SHOW: function (e) {
          d = { ...d, [e.tutorialId]: e.renderData };
        },
        TUTORIAL_INDICATOR_HIDE: function (e) {
          (d = { ...d }), delete d[e.tutorialId];
        },
        TUTORIAL_INDICATOR_SUPPRESS_ALL: function () {
          c = !0;
        },
      });
    },
    624309: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var a = Object.freeze({
        "voice-conversations": { popoutOffset: { x: 45, y: 0 } },
        "writing-messages": {
          prerequisites: ["voice-conversations"],
          popoutOffset: { x: -36, y: 0 },
        },
        "direct-messages": { popoutOffset: { x: 50, y: 0 } },
        "create-first-server": { popoutOffset: { x: 45, y: 0 } },
        "organize-by-topic": { popoutOffset: { x: 50, y: 0 } },
        "instant-invite": {
          prerequisites: ["organize-by-topic"],
          popoutOffset: { x: -10, y: 0 },
        },
        "whos-online": {
          prerequisites: ["instant-invite"],
          popoutOffset: { x: -50, y: 0 },
        },
        "server-settings": {
          prerequisites: ["instant-invite"],
          popoutOffset: { y: 32, x: 0 },
        },
        "friends-list": {
          prerequisites: ["instant-invite"],
          popoutOffset: { x: 45, y: 0 },
        },
        "create-more-servers": {
          prerequisites: ["server-settings"],
          popoutOffset: { x: 45, y: 0 },
        },
      });
    },
    935692: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var a,
        s,
        l = n("446674"),
        i = n("913144");
      ((a = s || (s = {})).FAILED = "failed"), (a.SUCCEEDED = "succeeded");
      let r = {};
      class o extends l.default.Store {
        getFollowerStatsForChannel(e) {
          return r[e];
        }
      }
      o.displayName = "ChannelFollowerStatsStore";
      var u = new o(i.default, {
        CONNECTION_OPEN: function () {
          r = {};
        },
        CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS: function (e) {
          let { channelId: t, stats: n } = e;
          (n = null != n ? n : {}),
            (r[t] = {
              loadingStatus: "succeeded",
              lastFetched: Date.now(),
              channelsFollowing: n.channels_following,
              guildMembers: n.guild_members,
              guildsFollowing: n.guilds_following,
              usersSeenEver: n.users_seen_ever,
              subscribersGainedSinceLastPost:
                n.subscribers_gained_since_last_post,
              subscribersLostSinceLastPost: n.subscribers_lost_since_last_post,
            });
        },
        CHANNEL_FOLLOWER_STATS_FETCH_FAILURE: function (e) {
          let { channelId: t } = e;
          r[t] = {
            loadingStatus: "failed",
            lastFetched: Date.now(),
            channelsFollowing: 0,
            guildMembers: 0,
            guildsFollowing: 0,
            usersSeenEver: 0,
            subscribersGainedSinceLastPost: 0,
            subscribersLostSinceLastPost: 0,
          };
        },
      });
    },
    492114: function (e, t, n) {
      "use strict";
      let a, s, l, i, r, o;
      n.r(t),
        n.d(t, {
          default: function () {
            return H;
          },
        }),
        n("808653"),
        n("702976"),
        n("222007");
      var u = n("917351"),
        d = n.n(u),
        c = n("866227"),
        f = n.n(c),
        h = n("446674"),
        C = n("872717"),
        p = n("913144"),
        E = n("233069"),
        m = n("813006"),
        g = n("517763"),
        S = n("766274"),
        _ = n("42203"),
        T = n("49111");
      let A = T.FormStates.CLOSED,
        M = {},
        I = {},
        N = !1,
        v = !1,
        L = null,
        R = [
          "name",
          "type",
          "topic_",
          "bitrate_",
          "userLimit_",
          "nsfw_",
          "flags_",
          "rateLimitPerUser_",
          "defaultThreadRateLimitPerUser",
          "defaultAutoArchiveDuration",
          "template",
          "defaultReactionEmoji",
          "rtcRegion",
          "videoQualityMode",
          "threadMetadata",
          "banner",
          "availableTags",
          "defaultSortOrder",
          "defaultForumLayout",
          "iconEmoji",
          "themeColor",
        ];
      function x(e) {
        let t = _.default.getChannel(e.channelId);
        if (null == t) return O();
        (A = T.FormStates.OPEN),
          (i = l = t),
          (L = "location" in e && null != e.location ? e.location : null),
          (s = "subsection" in e ? e.subsection : null),
          null != i && (i = i.set("nsfw", i.isNSFW())),
          (r = _.default.getChannel(i.parent_id)),
          (o = i.getGuildId()),
          (M = {}),
          y({
            type: "CHANNEL_SETTINGS_SET_SECTION",
            section: null != a ? a : T.ChannelSettingsSections.OVERVIEW,
            subsection: s,
          });
      }
      function y(e) {
        (a = e.section),
          (s = e.subsection),
          null != i &&
            a === T.ChannelSettingsSections.INSTANT_INVITES &&
            ((N = !0),
            C.default
              .get({
                url: T.Endpoints.INSTANT_INVITES(i.id),
                oldFormErrors: !0,
              })
              .then(
                e => {
                  (N = !1),
                    p.default.dispatch({
                      type: "CHANNEL_SETTINGS_LOADED_INVITES",
                      invites: e.body,
                    });
                },
                () => (N = !1)
              ));
      }
      function O() {
        (v = !1),
          (A = T.FormStates.CLOSED),
          (a = null),
          (i = l = null),
          (r = null),
          (I = {});
      }
      let D = d.debounce(() => {
        if (null == i || null == l) return !1;
        let e = i.toJS(),
          t = l.toJS(),
          n = R.every(n => e[n] === t[n]);
        n && i !== l && ((i = l), b.emitChange());
      }, 500);
      function P(e) {
        return new g.default({
          code: e.code,
          temporary: e.temporary,
          revoked: e.revoked,
          inviter: null != e.inviter ? new S.default(e.inviter) : null,
          channel: (0, E.createChannelRecordFromInvite)(e.channel),
          guild: null != e.guild ? new m.default(e.guild) : null,
          uses: e.uses,
          maxUses: e.max_uses,
          maxAge: e.max_age,
          createdAt: f(e.created_at),
          type: e.type,
        });
      }
      class j extends h.default.Store {
        initialize() {
          this.waitFor(_.default);
        }
        hasChanges() {
          return i !== l;
        }
        isOpen() {
          return v;
        }
        getSection() {
          return a;
        }
        getInvites() {
          return { invites: I, loading: N };
        }
        showNotice() {
          return this.hasChanges();
        }
        getChannel() {
          return i;
        }
        getFormState() {
          return A;
        }
        getCategory() {
          return r;
        }
        getProps() {
          return {
            submitting: A === T.FormStates.SUBMITTING,
            errors: M,
            channel: i,
            section: a,
            subsection: s,
            invites: I,
            selectedOverwriteId: o,
            hasChanges: this.hasChanges(),
            analyticsLocation: L,
          };
        }
      }
      j.displayName = "ChannelSettingsStore";
      let b = new j(p.default, {
        CHANNEL_SETTINGS_INIT: x,
        CHANNEL_SETTINGS_OPEN: function (e) {
          (v = !0), x(e);
        },
        CHANNEL_SETTINGS_SUBMIT: function () {
          (A = T.FormStates.SUBMITTING), (M = {});
        },
        CHANNEL_SETTINGS_SUBMIT_SUCCESS: function () {
          (l = i), (A = T.FormStates.OPEN);
        },
        CHANNEL_SETTINGS_SUBMIT_FAILURE: function (e) {
          var t;
          (A = T.FormStates.OPEN),
            (M = Object.keys(
              null !== (t = e.errors) && void 0 !== t ? t : {}
            ).reduce((t, n) => {
              let a = e.errors[n];
              return (0, u.isArray)(a) ? (t[n] = a.join("\n")) : (t[n] = a), t;
            }, {}));
        },
        CHANNEL_SETTINGS_CLOSE: O,
        CHANNEL_SETTINGS_OVERWRITE_SELECT: function (e) {
          let { overwriteId: t } = e;
          o = t;
        },
        CHANNEL_SETTINGS_UPDATE: function (e) {
          let {
            name: t,
            channelType: n,
            topic: a,
            bitrate: s,
            userLimit: l,
            nsfw: r,
            flags: o,
            rateLimitPerUser: u,
            defaultThreadRateLimitPerUser: d,
            autoArchiveDuration: c,
            locked: f,
            invitable: h,
            defaultAutoArchiveDuration: C,
            template: p,
            defaultReactionEmoji: E,
            rtcRegion: m,
            videoQualityMode: g,
            availableTags: S,
            defaultSortOrder: _,
            defaultForumLayout: T,
            iconEmoji: A,
            themeColor: M,
          } = e;
          if (null == i) return !1;
          null != t && (i = i.set("name", t)),
            null != a && (i = i.set("topic", a)),
            null != s && (i = i.set("bitrate", s)),
            null != l && (i = i.set("userLimit", l)),
            null != r && (i = i.set("nsfw", r)),
            null != o && (i = i.set("flags", o)),
            null != u && (i = i.set("rateLimitPerUser", u)),
            null != d && (i = i.set("defaultThreadRateLimitPerUser", d)),
            null != c &&
              (i = i.set("threadMetadata", {
                ...i.threadMetadata,
                autoArchiveDuration: c,
              })),
            null != f &&
              (i = i.set("threadMetadata", { ...i.threadMetadata, locked: f })),
            null != h &&
              (i = i.set("threadMetadata", {
                ...i.threadMetadata,
                invitable: h,
              })),
            null != C && (i = i.set("defaultAutoArchiveDuration", C)),
            null != p && (i = i.set("template", p)),
            null != n && (i = i.set("type", n)),
            void 0 !== m && (i = i.set("rtcRegion", m)),
            null != g && (i = i.set("videoQualityMode", g)),
            void 0 !== E && (i = i.set("defaultReactionEmoji", E)),
            null != S && (i = i.set("availableTags", S)),
            null != _ && (i = i.set("defaultSortOrder", _)),
            null != T && (i = i.set("defaultForumLayout", T)),
            void 0 !== A && (i = i.set("iconEmoji", A)),
            null != M && (i = i.set("themeColor", M)),
            D();
        },
        CHANNEL_SETTINGS_SET_SECTION: y,
        CHANNEL_SETTINGS_LOADED_INVITES: function (e) {
          (I = {}),
            e.invites.forEach(e => {
              I[e.code] = P(e);
            });
        },
        CHANNEL_UPDATES: function (e) {
          let { channels: t } = e;
          if (null == i) return !1;
          let n = !1;
          for (let e of t)
            (function (e) {
              if (null == l || l.id !== e) return !1;
              if (l === i) {
                let t = _.default.getChannel(e);
                if (null == t) return !1;
                (i = l = t), (r = _.default.getChannel(i.parent_id));
              } else {
                let t = _.default.getChannel(e);
                if (null == t) return !1;
                (l = t),
                  null != i &&
                    ((i = i.set(
                      "permissionOverwrites",
                      l.permissionOverwrites
                    )),
                    (r = _.default.getChannel(i.parent_id)));
              }
              return !0;
            })(e.id) &&
              null != i &&
              (null != o &&
                null == i.permissionOverwrites[o] &&
                (o = i.getGuildId()),
              (n = !0));
          return n;
        },
        CHANNEL_DELETE: function (e) {
          let {
            channel: { id: t },
          } = e;
          if (null == i || i.id !== t) return !1;
          A = T.FormStates.CLOSED;
        },
        INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
          (I = { ...I }), delete I[e.code];
        },
        INSTANT_INVITE_CREATE_SUCCESS: function (e) {
          I = { ...I, [e.invite.code]: P(e.invite) };
        },
      });
      var H = b;
    },
    808072: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          TextAlignments: function () {
            return s;
          },
          ArrowAlignments: function () {
            return l;
          },
          default: function () {
            return i;
          },
        }),
        n("222007");
      var a,
        s,
        l,
        i,
        r,
        o,
        u = n("37983"),
        d = n("884691"),
        c = n("414456"),
        f = n.n(c),
        h = n("819855"),
        C = n("77078"),
        p = n("599110"),
        E = n("439932"),
        m = n("145131"),
        g = n("49111"),
        S = n("782340"),
        _ = n("778548");
      ((r = s || (s = {})).CENTER = "center"),
        (r.LEFT = "left"),
        ((o = l || (l = {})).TOP = "top"),
        (o.MIDDLE = "middle");
      class T extends d.PureComponent {
        componentDidMount() {
          let { uniqueId: e } = this.props;
          p.default.track(g.AnalyticEvents.SHOW_TUTORIAL, { tutorial: e });
        }
        componentWillUnmount() {
          p.default.track(g.AnalyticEvents.CLOSE_TUTORIAL, {
            tutorial: this.props.uniqueId,
            acknowledged: this.state.confirmed,
          });
        }
        render() {
          let {
              renderMedia: e,
              textAlign: t,
              isLongText: n,
              title: a,
              body: s,
              className: l,
              forceTheme: i,
              onClickSkipAll: r,
            } = this.props,
            o = "left" === t || n,
            d = "center" === t || !o;
          return (0, u.jsxs)(C.Dialog, {
            className: f(_.popoutRoot, l),
            children: [
              null != e &&
                (0, u.jsx)(m.default, {
                  className: _.mediaContainer,
                  justify: o
                    ? m.default.Justify.START
                    : m.default.Justify.CENTER,
                  children: e(),
                }),
              (0, u.jsx)(C.H, {
                className: f({ [_.titleCenter]: d, [_.titleLeft]: o }),
                children: a,
              }),
              (0, u.jsx)("string" == typeof s ? "p" : "div", {
                className: f({ [_.bodyCenter]: d, [_.bodyLeft]: o }),
                children: s,
              }),
              (0, u.jsxs)(m.default, {
                className: _.buttonContainer,
                justify: o
                  ? m.default.Justify.BETWEEN
                  : m.default.Justify.CENTER,
                children: [
                  (0, u.jsx)(C.Button, {
                    size: C.ButtonSizes.SMALL,
                    onClick: this.handleDismiss,
                    children: S.default.Messages.TUTORIAL_CLOSE,
                  }),
                  (0, u.jsx)(C.Button, {
                    size: C.ButtonSizes.SMALL,
                    look: C.Button.Looks.BLANK,
                    onClick: r,
                    color: (0, h.isThemeLight)(i)
                      ? C.Button.Colors.PRIMARY
                      : C.Button.Colors.WHITE,
                    className: o
                      ? _.buttonSkipLeftAlign
                      : _.buttonSkipCenterAlign,
                    children: S.default.Messages.SKIP_ALL_TIPS,
                  }),
                ],
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = { confirmed: !1 }),
            (this.handleDismiss = () => {
              let { onClickComplete: e } = this.props;
              this.setState({ confirmed: !0 }, () =>
                null == e ? void 0 : e()
              );
            });
        }
      }
      ((a = class extends d.PureComponent {
        render() {
          let {
              renderMedia: e,
              textAlign: t,
              onComplete: n,
              onSkipAll: a,
              isLongText: s,
              title: l,
              body: i,
              children: r,
              spacing: o,
              forceTheme: d,
              ...c
            } = this.props,
            f =
              "top" === c.position || "bottom" === c.position
                ? "center"
                : "top";
          return (0, u.jsx)(C.Popout, {
            ...c,
            align: f,
            spacing: null != o ? o : 0,
            renderPopout: this.renderPopoutContent,
            nudgeAlignIntoViewport: !0,
            children: r,
          });
        }
        constructor(...e) {
          super(...e),
            (this.onClickComplete = e => {
              e(), this.props.onComplete();
            }),
            (this.onClickSkipAll = e => {
              let { onSkipAll: t, uniqueId: n } = this.props;
              e(),
                t(),
                p.default.track(g.AnalyticEvents.DISMISS_ALL_TUTORIALS, {
                  tutorial: n,
                });
            }),
            (this.renderPopoutContent = e => {
              let { closePopout: t, position: n } = e,
                {
                  forceTheme: a,
                  isLongText: s,
                  arrowAlignment: l,
                  renderMedia: i,
                } = this.props,
                r = null != i;
              return (0, u.jsx)(T, {
                ...this.props,
                className: f(
                  {
                    [_.bottom]: "bottom" === n,
                    [_.contentNarrowNoMedia]: !s && !r,
                    [_.contentNarrowWithMedia]: !s && r,
                    [_.contentWideNoMedia]: s && !r,
                    [_.contentWideWithMedia]: s && r,
                    [_.right]: "right" === n,
                    [_.top]: "top" === n,
                    [_.left]: "left" === n,
                    [_.arrowAlignmentTop]: "top" === l,
                    [_.arrowAlignmentMiddle]: "middle" === l,
                    "force-theme": null != a,
                  },
                  (0, E.getThemeClass)(a)
                ),
                onClickComplete: () => this.onClickComplete(t),
                onClickSkipAll: () => this.onClickSkipAll(t),
              });
            });
        }
      }).TextAlignments = s),
        (a.defaultProps = { textAlign: "left" }),
        (i = a);
    },
    533930: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("469563"),
        l = n("646074"),
        i = n("75196"),
        r = (0, s.replaceIcon)(
          function (e) {
            let {
              color: t = "currentColor",
              height: n = 24,
              width: s = 24,
              ...l
            } = e;
            return (0, a.jsxs)("svg", {
              ...(0, i.default)(l),
              width: s,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, a.jsx)("path", {
                  d: "M4.25947 16.5917C3.14082 14.7059 2.74905 12.4766 3.15775 10.3224C3.56644 8.16824 4.74748 6.23734 6.47909 4.89231C8.2107 3.54728 10.3738 2.88064 12.5621 3.01758C14.7504 3.15452 16.8135 4.08562 18.3639 5.63603C19.9144 7.18644 20.8455 9.24952 20.9824 11.4379C21.1194 13.6262 20.4527 15.7893 19.1077 17.5209C17.7627 19.2525 15.8318 20.4335 13.6776 20.8422C11.5234 21.2509 9.29412 20.8592 7.40833 19.7405L7.40835 19.7405L4.29862 20.6289C4.16996 20.6657 4.03381 20.6674 3.90428 20.6338C3.77475 20.6003 3.65655 20.5327 3.56194 20.4381C3.46732 20.3434 3.39973 20.2252 3.36616 20.0957C3.3326 19.9662 3.33429 19.83 3.37105 19.7014L4.25954 16.5916L4.25947 16.5917Z",
                  stroke: t,
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                }),
                (0, a.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M8.30605 8.30602C7.89802 8.71404 7.89802 9.37558 8.30605 9.78361L10.5224 12L8.30606 14.2164C7.89803 14.6244 7.89803 15.2859 8.30606 15.694C8.71409 16.102 9.37563 16.102 9.78365 15.694L12 13.4776L14.2164 15.694C14.6244 16.102 15.286 16.102 15.694 15.694C16.102 15.2859 16.102 14.6244 15.694 14.2164L13.4776 12L15.694 9.78361C16.102 9.37558 16.102 8.71404 15.694 8.30602C15.286 7.89799 14.6244 7.89799 14.2164 8.30602L12 10.5224L9.78364 8.30602C9.37562 7.89799 8.71408 7.89799 8.30605 8.30602Z",
                  fill: t,
                }),
              ],
            });
          },
          l.ChatXIcon,
          void 0,
          { size: 24 }
        );
    },
    451166: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("75196");
      function l(e) {
        let { width: t = 20, height: n = 20, className: l, ...i } = e;
        return (0, a.jsx)("svg", {
          width: t,
          height: n,
          className: l,
          ...(0, s.default)(i),
          viewBox: "0 0 20 20",
          children: (0, a.jsxs)("g", {
            clipPath: "url(#clip0_198_5469)",
            children: [
              (0, a.jsx)("path", {
                "aria-hidden": !0,
                d: "M19.15 17C19.41 17.11 19.6 17 19.51 16.73L18.89 15.15L18.28 13.56C18.23 13.4421 18.1442 13.3429 18.0348 13.2765C17.9253 13.2101 17.7977 13.1798 17.67 13.19L13.67 14.28C13.4 14.36 13.56 14.79 13.92 14.93L19.15 17Z",
                fill: "#FF73FA",
              }),
              (0, a.jsx)("path", {
                "aria-hidden": !0,
                d: "M9.80009 14L7.08009 8.67001L0.440092 18C0.351927 18.1221 0.299095 18.2662 0.287392 18.4163C0.275688 18.5665 0.305566 18.7169 0.373746 18.8512C0.441926 18.9855 0.545775 19.0985 0.673902 19.1776C0.802029 19.2568 0.949484 19.2991 1.10009 19.3H12.5201L9.80009 14Z",
                fill: "#8086FF",
              }),
              (0, a.jsx)("path", {
                "aria-hidden": !0,
                d: "M12.27 19C11.57 19 9.92997 17.31 8.52997 14.57C7.86795 13.3426 7.37674 12.0304 7.06997 10.67C6.83997 9.54999 6.99997 8.99999 7.19997 8.89999H7.32997C8.03997 8.89999 9.66997 10.59 11.07 13.32C12.68 16.46 12.93 18.76 12.4 19.03C12.3549 19.0306 12.3103 19.0203 12.27 19Z",
                fill: "#05124A",
              }),
              (0, a.jsx)("path", {
                "aria-hidden": !0,
                d: "M7.33009 9.14999C7.86009 9.14999 9.42009 10.67 10.8301 13.43C12.4501 16.57 12.5201 18.55 12.2701 18.77C11.7401 18.77 10.1801 17.25 8.77009 14.49C7.15009 11.35 7.08009 9.35999 7.32009 9.14999H7.33009ZM7.32009 8.60999C7.233 8.60831 7.14693 8.62897 7.07009 8.66999C6.23009 9.08999 6.78009 11.81 8.28009 14.74C9.65009 17.4 11.3401 19.31 12.2801 19.31C12.3672 19.3117 12.4532 19.291 12.5301 19.25C13.3701 18.82 12.8301 16.11 11.3201 13.18C9.96009 10.52 8.26009 8.60999 7.32009 8.60999Z",
                fill: "#373BE1",
              }),
              (0, a.jsx)("path", {
                "aria-hidden": !0,
                d: "M3.53991 17.22C3.16017 16.4754 2.85534 15.6949 2.62991 14.89L1.40991 16.6C1.5797 17.0776 1.77669 17.545 1.99991 18C2.21943 18.4301 2.46316 18.8475 2.72991 19.25H4.84991C4.34607 18.6191 3.90718 17.939 3.53991 17.22Z",
                fill: "#373BE1",
              }),
              (0, a.jsx)("path", {
                "aria-hidden": !0,
                d: "M6.83003 19.25H9.23003C8.09101 18.2623 7.1538 17.0636 6.47003 15.72C5.75671 14.3452 5.32173 12.8432 5.19003 11.3L3.78003 13.3C4.05054 14.4137 4.46044 15.4889 5.00003 16.5C5.49463 17.4884 6.10927 18.4121 6.83003 19.25Z",
                fill: "#373BE1",
              }),
              (0, a.jsx)("path", {
                "aria-hidden": !0,
                d: "M12.2699 18.77C11.7199 18.7 10.2699 17.3 8.7899 14.49C7.2499 11.49 7.1199 9.57 7.3199 9.19L6.9999 8.69C6.2199 9.19 6.7699 11.86 8.2499 14.74C9.5699 17.31 11.2499 19.19 12.1399 19.3C12.2557 19.3201 12.3748 19.3026 12.4799 19.25L12.2699 18.77Z",
                fill: "#373BE1",
              }),
              (0, a.jsx)("path", {
                "aria-hidden": !0,
                d: "M15.5901 9.23L14.6201 8C14.5734 7.94051 14.5118 7.89439 14.4416 7.8663C14.3713 7.8382 14.2949 7.82913 14.2201 7.84L10.8601 8.28C10.786 8.29082 10.7158 8.32037 10.6563 8.36587C10.5968 8.41137 10.5499 8.47131 10.5201 8.54L9.22008 11.68C9.18969 11.7486 9.1792 11.8243 9.18981 11.8986C9.20042 11.9729 9.2317 12.0427 9.28008 12.1L10.2801 13.37C10.3268 13.4295 10.3884 13.4756 10.4586 13.5037C10.5288 13.5318 10.6052 13.5409 10.6801 13.53L14.0001 13.05C14.0742 13.0392 14.1443 13.0096 14.2038 12.9641C14.2633 12.9186 14.3102 12.8587 14.3401 12.79L15.6401 9.65C15.6718 9.58232 15.684 9.50709 15.6751 9.43285C15.6663 9.35862 15.6368 9.28834 15.5901 9.23Z",
                fill: "#FFD836",
              }),
              (0, a.jsx)("path", {
                "aria-hidden": !0,
                d: "M12.6801 10.21L11.4101 9.74001C11.3617 9.72337 11.3182 9.69501 11.2834 9.65748C11.2487 9.61994 11.2238 9.57439 11.2109 9.52489C11.198 9.47539 11.1976 9.42347 11.2097 9.37376C11.2217 9.32405 11.2459 9.27811 11.2801 9.24001L14.7201 5.24001C14.7617 5.1903 14.8178 5.15488 14.8806 5.13873C14.9434 5.12259 15.0096 5.12653 15.0701 5.15001L16.3401 5.61001C16.3871 5.62978 16.4288 5.66018 16.4621 5.69881C16.4954 5.73745 16.5193 5.78327 16.5319 5.83268C16.5445 5.8821 16.5454 5.93376 16.5347 5.98361C16.524 6.03346 16.5019 6.08015 16.4701 6.12001L13.0301 10.12C12.9884 10.1697 12.9323 10.2051 12.8695 10.2213C12.8067 10.2374 12.7405 10.2335 12.6801 10.21Z",
                fill: "#AEC7FF",
              }),
              (0, a.jsx)("path", {
                "aria-hidden": !0,
                d: "M11.61 17.25L11.35 16.33C11.3396 16.2949 11.3383 16.2577 11.346 16.2219C11.3537 16.1861 11.3702 16.1527 11.394 16.1249C11.4179 16.0971 11.4483 16.0757 11.4825 16.0626C11.5167 16.0495 11.5536 16.0452 11.59 16.05L15.31 16.37C15.3545 16.373 15.397 16.3901 15.4311 16.4189C15.4653 16.4477 15.4894 16.4866 15.5 16.53L15.76 17.45C15.7697 17.4856 15.7707 17.523 15.763 17.5591C15.7552 17.5952 15.7388 17.6289 15.7153 17.6574C15.6918 17.6858 15.6617 17.7082 15.6277 17.7225C15.5937 17.7369 15.5568 17.7429 15.52 17.74L11.8 17.42C11.7546 17.4149 11.7119 17.3958 11.6778 17.3653C11.6438 17.3349 11.6201 17.2946 11.61 17.25Z",
                fill: "#AEC7FF",
              }),
              (0, a.jsx)("path", {
                "aria-hidden": !0,
                d: "M10.51 4.87L9.51004 4.8C9.47171 4.79882 9.43428 4.78808 9.40117 4.76875C9.36805 4.74942 9.34029 4.72212 9.32041 4.68932C9.30054 4.65653 9.28918 4.61928 9.28737 4.58098C9.28555 4.54268 9.29335 4.50453 9.31004 4.47L10.93 0.900003C10.9491 0.856352 10.9819 0.820078 11.0234 0.796634C11.0648 0.773191 11.1128 0.763846 11.16 0.770003L12.16 0.840003C12.1984 0.841182 12.2358 0.851926 12.2689 0.871256C12.302 0.890587 12.3298 0.917891 12.3497 0.950685C12.3695 0.98348 12.3809 1.02072 12.3827 1.05903C12.3845 1.09733 12.3767 1.13548 12.36 1.17L10.74 4.73C10.7213 4.77455 10.689 4.81205 10.6477 4.83718C10.6064 4.86231 10.5582 4.87379 10.51 4.87Z",
                fill: "#FF73FA",
              }),
              (0, a.jsx)("path", {
                "aria-hidden": !0,
                d: "M9.11995 3.16L9.38995 3.89C9.40593 3.92181 9.43011 3.94877 9.46 3.96811C9.48988 3.98744 9.52439 3.99846 9.55995 4H10.3699C10.5599 4 10.6099 4.26 10.4499 4.41L9.76995 5.07C9.71086 5.13269 9.67549 5.21403 9.66995 5.3V6.13C9.66965 6.17649 9.6589 6.22232 9.63849 6.2641C9.61808 6.30587 9.58854 6.34252 9.55204 6.37133C9.51555 6.40013 9.47305 6.42037 9.42768 6.43052C9.38231 6.44068 9.33524 6.4405 9.28995 6.43L8.59995 6.1C8.56441 6.08159 8.52497 6.07198 8.48495 6.07198C8.44492 6.07198 8.40549 6.08159 8.36995 6.1L7.57995 6.57C7.38995 6.69 7.20995 6.57 7.26995 6.35L7.51995 5.49C7.53745 5.45777 7.54662 5.42168 7.54662 5.385C7.54662 5.34833 7.53745 5.31223 7.51995 5.28L6.99995 4.81C6.86995 4.68 6.99995 4.42 7.18995 4.37L7.99995 4.17C8.04629 4.1582 8.08971 4.13702 8.12755 4.10779C8.16539 4.07855 8.19684 4.04187 8.21995 4L8.68995 3.2C8.79995 3 9.05995 3 9.11995 3.16Z",
                fill: "#A5F7DE",
              }),
            ],
          }),
        });
      }
    },
    407535: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("469563"),
        l = n("346855"),
        i = n("75196"),
        r = (0, s.replaceIcon)(
          function (e) {
            let { width: t = 24, height: n = 24, ...s } = e;
            return (0, a.jsx)("svg", {
              ...(0, i.default)(s),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
            });
          },
          l.FileUpIcon,
          void 0,
          { size: 24 }
        );
    },
    824326: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("469563"),
        l = n("945863"),
        i = n("75196"),
        r = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: n = 16,
              color: s = "currentColor",
              foreground: l,
              ...r
            } = e;
            return (0, a.jsx)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, a.jsx)("path", {
                className: l,
                fill: s,
                d: "M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z",
              }),
            });
          },
          l.DpadIcon,
          void 0,
          { size: 16 }
        );
    },
    925877: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("469563"),
        l = n("225389"),
        i = n("75196"),
        r = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: n = 16,
              color: s = "currentColor",
              foreground: l,
              ...r
            } = e;
            return (0, a.jsx)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, a.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                  (0, a.jsx)("rect", { width: "24", height: "24" }),
                  (0, a.jsx)("path", {
                    fill: s,
                    className: l,
                    d: "M9,7 L11,7 L11,5 L9,5 L9,7 Z M10,18 C5.59,18 2,14.41 2,10 C2,5.59 5.59,2 10,2 C14.41,2 18,5.59 18,10 C18,14.41 14.41,18 10,18 L10,18 Z M10,4.4408921e-16 C4.4771525,-1.77635684e-15 4.4408921e-16,4.4771525 0,10 C-1.33226763e-15,12.6521649 1.0535684,15.195704 2.92893219,17.0710678 C4.80429597,18.9464316 7.3478351,20 10,20 C12.6521649,20 15.195704,18.9464316 17.0710678,17.0710678 C18.9464316,15.195704 20,12.6521649 20,10 C20,7.3478351 18.9464316,4.80429597 17.0710678,2.92893219 C15.195704,1.0535684 12.6521649,2.22044605e-16 10,0 L10,4.4408921e-16 Z M9,15 L11,15 L11,9 L9,9 L9,15 L9,15 Z",
                    transform: "translate(2 2)",
                  }),
                ],
              }),
            });
          },
          l.CircleInformationIcon,
          void 0,
          { size: 16 }
        );
    },
    922744: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("469563"),
        l = n("782926"),
        i = n("75196"),
        r = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: s = "currentColor",
              foreground: l,
              ...r
            } = e;
            return (0, a.jsxs)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, a.jsx)("path", {
                  className: l,
                  fill: s,
                  d: "M14.4 7C14.5326 7 14.64 7.10745 14.64 7.24V8.76C14.64 8.89255 14.5326 9 14.4 9H9.41045L8.35045 15H10.56V17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H14.4Z",
                }),
                (0, a.jsx)("path", {
                  className: l,
                  fill: s,
                  d: "M12.48 13.92C12.48 13.3898 12.9098 12.96 13.44 12.96H22.56C23.0902 12.96 23.52 13.3898 23.52 13.92V20.2213C23.52 20.7515 23.0902 21.1813 22.56 21.1813H18.1294C17.8917 21.1813 17.6623 21.2695 17.4859 21.4289L15.0409 23.6378C14.8866 23.7773 14.64 23.6677 14.64 23.4597V21.4213C14.64 21.2887 14.5326 21.1813 14.4 21.1813H13.44C12.9098 21.1813 12.48 20.7515 12.48 20.2213V13.92Z",
                }),
                (0, a.jsx)("path", {
                  className: l,
                  fill: s,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M22.8093 8.55658L20.4681 3.80208C20.1036 3.06176 19.0536 3.05954 18.686 3.79833L16.3201 8.55283C15.9893 9.21773 16.4705 10 17.2103 10L21.9173 10C22.6553 10 23.1365 9.22122 22.8093 8.55658ZM20.0785 5.00004H19.0832L19.0833 7.50004H20.0785V5.00004ZM19.5808 9.00004C19.3061 9.00004 19.0832 8.77593 19.0832 8.49891C19.0832 8.22228 19.3061 7.99777 19.5808 7.99777C19.8555 7.99777 20.0785 8.22228 20.0785 8.49891C20.0785 8.77593 19.8555 9.00004 19.5808 9.00004Z",
                }),
              ],
            });
          },
          l.ThreadIcon,
          void 0,
          { size: 24 }
        );
    },
    76539: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("469563"),
        l = n("715072"),
        i = n("75196"),
        r = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: s = "currentColor",
              foreground: l,
              ...r
            } = e;
            return 16 === t || 16 === n
              ? (0, a.jsxs)("svg", {
                  ...(0, i.default)(r),
                  width: t,
                  height: n,
                  viewBox: "0 0 16 16",
                  children: [
                    (0, a.jsx)("path", {
                      className: l,
                      fill: s,
                      d: "M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z",
                    }),
                    (0, a.jsx)("path", {
                      className: l,
                      fill: s,
                      d: "M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z",
                    }),
                    (0, a.jsx)("path", {
                      className: l,
                      fill: s,
                      d: "M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z",
                    }),
                  ],
                })
              : (0, a.jsx)("svg", {
                  ...(0, i.default)(r),
                  width: t,
                  height: n,
                  viewBox: "0 0 24 24",
                  children: (0, a.jsx)("path", {
                    className: l,
                    fill: s,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 3H24V5H21V8H19V5H16V3H19V0H21V3ZM10 12C12.205 12 14 10.205 14 8C14 5.795 12.205 4 10 4C7.795 4 6 5.795 6 8C6 10.205 7.795 12 10 12ZM10 13C5.289 13 2 15.467 2 19V20H18V19C18 15.467 14.711 13 10 13Z",
                  }),
                });
          },
          l.UserPlusIcon,
          void 0,
          { size: 24 }
        );
    },
    738602: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983"),
        s = n("884691"),
        l = n("748820"),
        i = n("75196");
      function r(e) {
        let {
            width: t = 16,
            height: n = 16,
            color: r = "currentColor",
            foreground: o,
            background: u,
            ...d
          } = e,
          c = s.useRef((0, l.v4)());
        return (0, a.jsxs)("svg", {
          ...(0, i.default)(d),
          width: t,
          height: n,
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, a.jsxs)("g", {
              "clip-path": "url(".concat(c.current, ")"),
              children: [
                (0, a.jsx)("path", {
                  className: u,
                  fill: r,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M2 11.001C2 6.03838 6.0374 2.00098 11 2.00098C15.9626 2.00098 20 6.03838 20 11.001L19.9998 11.0656C19.6455 11.0286 19.2787 11.0545 18.9141 11.152L16 11.9309V10H12V6H10V10H6V12H10V16H12V12H15.7414L14.8983 12.2253C13.2976 12.6532 12.3468 14.2976 12.7747 15.8983L13.25 17.6767V19.7163C12.5306 19.9021 11.7766 20.001 11 20.001C6.0374 20.001 2 15.9636 2 11.001Z",
                }),
                (0, a.jsx)("path", {
                  className: o,
                  fill: r,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M23.9427 15.2691L23.387 13.1944C23.1569 12.335 22.274 11.825 21.415 12.0553L15.1938 13.723C14.3349 13.9533 13.8251 14.8366 14.0553 15.696L14.5014 17.3618L14.4968 18.4357L14.4968 21.3891C14.4968 22.2788 15.2177 23 16.107 23L22.5477 23C23.4369 23 24.1578 22.2788 24.1578 21.3891V18.1673H16.107L16.1362 17.3618L23.9427 15.2691ZM19.5725 15.3288L18.0491 15.7372L18.0212 14.0769L19.5446 13.6685L19.5725 15.3288ZM20.6413 15.0423L22.628 14.5097L22.3502 13.4723C22.2735 13.1859 21.9792 13.0159 21.6928 13.0926L20.6134 13.382L20.6413 15.0423ZM16.9524 14.3634L16.9803 16.0237L15.37 16.4554L15.0921 15.418C15.0154 15.1316 15.1853 14.8371 15.4716 14.7604L16.9524 14.3634Z",
                }),
              ],
            }),
            (0, a.jsx)("defs", {
              children: (0, a.jsx)("clipPath", {
                id: c.current,
                children: (0, a.jsx)("rect", {
                  width: "24",
                  height: "24",
                  fill: "white",
                }),
              }),
            }),
          ],
        });
      }
    },
    430025: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("75196");
      function l(e) {
        let {
          width: t = 16,
          height: n = 16,
          color: l = "currentColor",
          foreground: i,
          background: r,
          ...o
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, s.default)(o),
          width: t,
          height: n,
          viewBox: "0 0 24 24",
          children: (0, a.jsxs)("g", {
            fill: "none",
            fillRule: "evenodd",
            children: [
              (0, a.jsx)("path", {
                className: r,
                fill: l,
                fillRule: "nonzero",
                d: "M22.031 12.665c-.923-.4338-1.9384-.665-2.9778-.665-.695 0-1.3663.1013-2 .29V11h-4V7h-2v4h-4v2h4v4h1.29c-.1887.6337-.29 1.305-.29 2 0 1.0394.2312 2.055.665 2.978-.2207.0146-.4424.022-.665.022-2.6522 0-5.1957-1.0536-7.071-2.929C3.1067 17.1958 2.053 14.6523 2.053 12c0-5.5228 4.4772-10 10-10 2.6522 0 5.1957 1.0536 7.071 2.929 1.8754 1.8753 2.929 4.4188 2.929 7.071 0 .2225-.0074.4443-.022.665zM15.4457 13c-.9793.59-1.8023 1.413-2.3924 2.3924V13h2.3924z",
              }),
              (0, a.jsx)("path", {
                className: i,
                fill: l,
                d: "M19.0532 14c1.326 0 2.598.5268 3.5355 1.4645.9377.9376 1.4645 2.2094 1.4645 3.5355 0 1.326-.5268 2.598-1.4645 3.5355C21.651 23.4732 20.3793 24 19.0532 24c-1.326 0-2.5978-.5268-3.5355-1.4645C14.58 21.598 14.0532 20.326 14.0532 19c0-2.7614 2.2386-5 5-5zm-1 7l3-2-3-2v4z",
              }),
            ],
          }),
        });
      }
    },
    777987: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("469563"),
        l = n("167115"),
        i = n("75196"),
        r = (0, s.replaceIcon)(
          function (e) {
            let { width: t = 24, height: n = 24, ...s } = e;
            return (0, a.jsx)("svg", {
              ...(0, i.default)(s),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
            });
          },
          l.PollsIcon,
          void 0,
          { size: 24 }
        );
    },
    745183: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("469563"),
        l = n("587864"),
        i = n("75196"),
        r = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: s = "currentColor",
              foreground: l,
              ...r
            } = e;
            return (0, a.jsxs)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, a.jsx)("path", {
                  className: l,
                  fill: s,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M22.545 4.91992V3.91992C22.545 2.79992 21.57 1.91992 20.52 1.91992C19.47 1.91992 18.52 2.79992 18.52 3.91992V4.91992H17.76C17.6275 4.91992 17.52 5.02737 17.52 5.15992V9.67992C17.52 9.81247 17.6275 9.91992 17.76 9.91992H23.28C23.4126 9.91992 23.52 9.81247 23.52 9.67992V5.15992C23.52 5.02737 23.4126 4.91992 23.28 4.91992H22.545ZM21.52 4.91992H19.52V3.91992C19.52 3.34849 19.9867 2.91992 20.52 2.91992C21.0533 2.91992 21.52 3.34849 21.52 3.91992V4.91992Z",
                }),
                (0, a.jsx)("path", {
                  className: l,
                  fill: s,
                  d: "M15.44 6.99992C15.5725 6.99992 15.68 7.10737 15.68 7.23992V8.75992C15.68 8.89247 15.5725 8.99992 15.44 8.99992H9.41045L8.35045 14.9999H10.56V16.9999H8.00001L7.36325 20.5873C7.32088 20.826 7.11337 20.9999 6.87094 20.9999H5.88657C5.57547 20.9999 5.3399 20.7189 5.39427 20.4125L6.00001 16.9999H2.59511C2.28449 16.9999 2.04905 16.7197 2.10259 16.4137L2.27759 15.4137C2.31946 15.1745 2.52722 14.9999 2.77011 14.9999H6.35001L7.41001 8.99992H4.00511C3.69449 8.99992 3.45905 8.71969 3.51259 8.41373L3.68759 7.41373C3.72946 7.17448 3.93722 6.99992 4.18011 6.99992H7.76001L8.39677 3.41254C8.43914 3.17384 8.64664 2.99992 8.88907 2.99992H9.87344C10.1845 2.99992 10.4201 3.28099 10.3657 3.58731L9.76001 6.99992H15.44Z",
                }),
                (0, a.jsx)("path", {
                  className: l,
                  fill: s,
                  d: "M13.44 12.9599C12.9098 12.9599 12.48 13.3897 12.48 13.9199V20.2212C12.48 20.7514 12.9098 21.1812 13.44 21.1812H14.4C14.5326 21.1812 14.64 21.2886 14.64 21.4212V23.4597C14.64 23.6677 14.8866 23.7772 15.0409 23.6377L17.4859 21.4289C17.6623 21.2694 17.8917 21.1812 18.1294 21.1812H22.56C23.0902 21.1812 23.52 20.7514 23.52 20.2212V13.9199C23.52 13.3897 23.0902 12.9599 22.56 12.9599H13.44Z",
                }),
              ],
            });
          },
          l.ThreadLockIcon,
          void 0,
          { size: 24 }
        );
    },
    550515: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("469563"),
        l = n("828049"),
        i = n("75196"),
        r = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: s = "currentColor",
              foreground: l,
              ...r
            } = e;
            return (0, a.jsx)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, a.jsx)("path", {
                fill: s,
                className: l,
                d: "M12 2C6.485 2 2 6.485 2 12H5.33333C5.33333 8.32333 8.32333 5.33333 12 5.33333C15.6767 5.33333 18.6667 8.32333 18.6667 12C18.6667 15.6767 15.6767 18.6667 12 18.6667C10.2033 18.6667 8.55833 17.9333 7.315 16.6867L10.3333 13.6667H2V22L4.935 19.065C6.79833 20.94 9.30167 22 12 22C17.515 22 22 17.515 22 12C22 6.48667 17.515 2 12 2Z",
              }),
            });
          },
          l.RetryIcon,
          void 0,
          { size: 24 }
        );
    },
    12724: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("469563"),
        l = n("346855"),
        i = n("75196"),
        r = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 22,
              color: s = "currentColor",
              foreground: l,
              ...r
            } = e;
            return (0, a.jsxs)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 22",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, a.jsx)("path", {
                  className: l,
                  d: "M18.7004 11.0733V4.20411L14.4456 0H3.8556C3.36366 0.000630619 2.89205 0.193989 2.5442 0.537669C2.19635 0.881349 2.00064 1.3473 2 1.83333V18.3333C2.00056 18.8194 2.19625 19.2854 2.54412 19.6291C2.89199 19.9728 3.36364 20.1661 3.8556 20.1667H13.7669C13.3284 19.2602 13.112 18.2644 13.1355 17.26C13.159 16.2555 13.4215 15.2707 13.902 14.3851C14.3824 13.4996 15.0672 12.7384 15.9008 12.163C16.7345 11.5876 17.6936 11.2143 18.7004 11.0733V11.0733ZM10.3502 13.75H4.7834V11.9167H10.3502V13.75ZM13.1336 10.0833H4.7834V8.25H13.1336V10.0833ZM13.1336 0.916667L17.7726 5.5H13.1336V0.916667Z",
                  fill: s,
                }),
                (0, a.jsx)("path", {
                  className: l,
                  d: "M19.6303 13.3696L15.2632 17.6844L16.5751 18.9805L18.7025 16.8786V22H20.5581V16.8786L22.6856 18.9805L23.9975 17.6844L19.6303 13.3696Z",
                  fill: s,
                }),
              ],
            });
          },
          l.FileUpIcon,
          void 0,
          { size: 24 }
        );
    },
    654276: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("469563"),
        l = n("586938"),
        i = n("75196"),
        r = (0, s.replaceIcon)(
          function (e) {
            let { width: t = 24, height: n = 24, ...s } = e;
            return (0, a.jsx)("svg", {
              ...(0, i.default)(s),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
            });
          },
          l.ThreadPlusIcon,
          void 0,
          { size: 24 }
        );
    },
    324898: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
        });
      var a = n("37983"),
        s = n("884691"),
        l = n("414456"),
        i = n.n(l),
        r = n("717837"),
        o = n.n(r),
        u = n("446674"),
        d = n("77078"),
        c = n("819689"),
        f = n("260526"),
        h = n("619259"),
        C = n("865343"),
        p = n("148337"),
        E = n("701909"),
        m = n("124297"),
        g = n("497880"),
        S = n("587904"),
        _ = n("49111"),
        T = n("782340"),
        A = n("328692"),
        M = n("919163"),
        I = n("356296");
      let N = s.memo(function (e) {
        let { message: t, notice: n, compact: s = !1, onDismiss: l } = e;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("div", {
              className: i(A.blockedNoticeContainer, { [A.compact]: s }),
              children: [
                (0, a.jsx)("div", {
                  className: A.blockedNoticeIcon,
                  children: (0, a.jsx)(p.default, {
                    className: A.shieldIcon,
                    width: 16,
                    height: 16,
                  }),
                }),
                (0, a.jsx)("div", {
                  className: A.blockedNotice,
                  children: (0, a.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    color: "interactive-normal",
                    children: n,
                  }),
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: i(A.ephemeralAccessories, { [A.compact]: s }),
              children: (0, a.jsx)(m.default, {
                message: t,
                onDeleteMessage: l,
                children: (0, a.jsx)(d.Text, {
                  variant: "text-xs/normal",
                  color: "interactive-normal",
                  tag: "span",
                  className: A.learnMore,
                  children:
                    T.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_LEARN_MORE.format(
                      {
                        helpUrl: E.default.getArticleURL(
                          _.HelpdeskArticles.GUILD_AUTOMOD_BLOCKED_MESSAGE
                        ),
                      }
                    ),
                }),
              }),
            }),
          ],
        });
      });
      var v = s.memo(function (e) {
        var t, n;
        let {
            className: l,
            compact: r,
            message: d,
            children: p,
            content: E,
            onUpdate: m,
          } = e,
          _ =
            null === (t = d.editedTimestamp) || void 0 === t
              ? void 0
              : t.toString(),
          v = s.useRef(!1),
          L = (0, u.useStateFromStores)(
            [h.default],
            () => h.default.getMessage(d.id),
            [d.id]
          ),
          R = s.useCallback(() => {
            (null == L ? void 0 : L.isBlockedEdit)
              ? (0, f.removeAutomodMessageNotice)(d.id)
              : c.default.deleteMessage(d.channel_id, d.id, !0);
          }, [d, L]);
        return (
          s.useLayoutEffect(() => {
            v.current ? null != m && m() : (v.current = !0);
          }, [m, d.content, E, _, p]),
          (0, a.jsxs)("div", {
            id: (0, C.getMessageContentId)(d),
            className: i(l, M.markup, {
              [I.messageContent]: !0,
              [I.markupRtl]: "rtl" === o(d.content),
              [A.blockedEdit]: null == L ? void 0 : L.isBlockedEdit,
              [A.blockedSend]: !(null == L ? void 0 : L.isBlockedEdit),
            }),
            children: [
              null != p ? p : (0, g.getContent)(d, E),
              (null == L ? void 0 : L.isBlockedEdit) &&
                null != d.timestamp &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    " ",
                    (0, a.jsx)(S.default, {
                      timestamp: d.timestamp,
                      isEdited: !0,
                      isInline: !1,
                      children: (0, a.jsxs)("span", {
                        className: I.edited,
                        children: [
                          "(",
                          T.default.Messages
                            .GUILD_AUTOMOD_BLOCKED_MESSAGE_EDIT_POSTFIX,
                          ")",
                        ],
                      }),
                    }),
                  ],
                }),
              (0, a.jsx)(N, {
                notice:
                  null !== (n = null == L ? void 0 : L.errorMessage) &&
                  void 0 !== n
                    ? n
                    : T.default.Messages
                        .GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE,
                message: d,
                compact: r,
                onDismiss: R,
              }),
            ],
          })
        );
      }, g.memoizeMessageProps);
    },
    851220: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        }),
        n("222007");
      var a,
        s = n("37983"),
        l = n("884691"),
        i = n("734570"),
        r = n("884351"),
        o = n("49111"),
        u = n("782340"),
        d = n("960637");
      function c(e) {
        e.stopPropagation();
      }
      a = class extends l.PureComponent {
        render() {
          let {
            className: e,
            textValue: t,
            richValue: n,
            message: a,
            channel: l,
            onCancel: i,
            children: r,
          } = this.props;
          return (0, s.jsxs)("div", {
            className: e,
            ref: this.node,
            onContextMenu: c,
            children: [
              r({
                textValue: t,
                richValue: n,
                message: a,
                channel: l,
                onChange: this.onChange,
                onSubmit: this.onSubmit,
                onKeyDown: this.onKeyDown,
              }),
              (0, s.jsx)("div", {
                className: d.operations,
                children: u.default.Messages.EDIT_TEXTAREA_HELP.format({
                  onCancel: () => i(l.id),
                  onSave: this.onClickSave,
                }),
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this.node = l.createRef()),
            (this.onClickSave = () => {
              let { textValue: e } = this.props;
              this.onSubmit(e);
            }),
            (this.onSubmit = e => {
              let {
                message: t,
                channel: n,
                onConfirmDelete: a,
                onCancel: s,
                saveMessage: l,
                validateEdit: o,
              } = this.props;
              return 0 === e.length
                ? (a(n, t),
                  s(n.id),
                  Promise.resolve({ shouldClear: !1, shouldRefocus: !1 }))
                : o({ value: e, channel: n }).then(t => {
                    let { valid: a } = t;
                    if (!a)
                      return Promise.resolve({
                        shouldClear: !1,
                        shouldRefocus: !1,
                      });
                    let o = (0, i.handleLegacyCommands)(e, {
                      channel: n,
                      isEdit: !0,
                    });
                    (null == o ? void 0 : o.content) != null && (e = o.content);
                    let u = r.default.parse(this.props.channel, e);
                    return (
                      u.content !== this.props.message.content &&
                        l(this.props.channel.id, this.props.message.id, u),
                      s(n.id),
                      Promise.resolve({ shouldClear: !0, shouldRefocus: !0 })
                    );
                  });
            }),
            (this.onChange = (e, t, n) => {
              let { channel: a, onChange: s } = this.props;
              s(a.id, t, n);
            }),
            (this.onKeyDown = e => {
              if (e.keyCode === o.KeyboardKeys.ESCAPE && !e.shiftKey) {
                let { channel: t, onCancel: n } = this.props;
                e.preventDefault(), e.stopPropagation(), n(t.id);
              }
            });
        }
      };
    },
    67602: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ContentBlob: function () {
            return f;
          },
          HEIGHT_COZY_MESSAGE_START: function () {
            return C;
          },
          HEIGHT_COZY_MESSAGE: function () {
            return p;
          },
          HEIGHT_COMPACT_MESSAGE_START: function () {
            return E;
          },
          HEIGHT_COMPACT_MESSAGE: function () {
            return m;
          },
          HEIGHT_ATTACHMEMT_PADDING: function () {
            return g;
          },
          default: function () {
            return S;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("414456"),
        l = n.n(s),
        i = n("917351"),
        r = n.n(i),
        o = n("77078"),
        u = n("137480");
      function d(e) {
        return "".concat(e / 16, "rem");
      }
      function c() {
        return (0, a.jsx)("div", {
          className: u.avatar,
          style: { opacity: 0.08 },
        });
      }
      function f(e) {
        let { width: t, opacity: n, className: s } = e;
        return (0, a.jsx)("div", {
          className: l(s, { [u.blob]: !0 }),
          style: { width: d(t), opacity: null != n ? n : r.random(0.02, 0.08) },
        });
      }
      function h(e) {
        let t,
          {
            groupStart: n = !1,
            compact: s = !1,
            attachmentSpecs: i,
            usernameWidth: d,
            usernameOpacity: h,
            className: C,
            style: p,
          } = e,
          E = s ? 50 : r.random(40, 50);
        return (
          !s && n
            ? (t = (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(c, {}),
                  (0, a.jsx)(o.H, {
                    className: u.header,
                    children: (0, a.jsx)(f, {
                      width: d,
                      opacity: h,
                      className: u.username,
                    }),
                  }),
                ],
              }))
            : s &&
              (t = (0, a.jsxs)(a.Fragment, {
                children: [
                  s &&
                    (0, a.jsx)(f, {
                      width: E,
                      className: l({
                        [u.compactTimestamp]: !0,
                        [u.hidden]: !n,
                      }),
                    }),
                  (0, a.jsx)(o.H, {
                    className: u.header,
                    children: (0, a.jsx)(f, { width: d, opacity: h }),
                  }),
                ],
              })),
          (0, a.jsxs)("div", {
            "aria-hidden": !0,
            className: l(C, { [u.wrapper]: !0, [u.compact]: s, [u.cozy]: !s }),
            style: p,
            children: [
              (0, a.jsxs)("div", {
                className: u.contents,
                children: [
                  t,
                  (0, a.jsx)("div", {
                    className: u.content,
                    children: Array(r.random(3, 8))
                      .fill(null)
                      .map(() => r.random(30, 80))
                      .map((e, t) =>
                        (0, a.jsx)(f, { width: e, opacity: 0.06 }, t)
                      ),
                  }),
                ],
              }),
              null != i &&
                (0, a.jsx)("div", {
                  className: u.attachmentContainer,
                  children: (0, a.jsx)("div", {
                    className: u.attachment,
                    style: { opacity: 0.03, ...i },
                  }),
                }),
            ],
          })
        );
      }
      let C = 44,
        p = 22,
        E = 26,
        m = 26,
        g = 6;
      function S(e) {
        let {
            messages: t,
            groupSpacing: n = 0,
            compact: s = !1,
            attachmentSpecs: l,
            className: i,
          } = e,
          o = null != l ? (l.last ? t - 1 : r.random(0, t - 1)) : -1,
          u = r.random(80, 120),
          c = r.random(0.1, 0.2);
        return (0, a.jsx)(a.Fragment, {
          children: Array(t)
            .fill(null)
            .map((e, t) =>
              (0, a.jsx)(
                h,
                {
                  compact: s,
                  className: i,
                  usernameWidth: u,
                  usernameOpacity: c,
                  groupStart: 0 === t,
                  attachmentSpecs: t === o ? l : void 0,
                  style: 0 === t ? { marginTop: d(n) } : void 0,
                },
                t
              )
            ),
        });
      }
    },
    917686: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("414456"),
        l = n.n(s),
        i = n("77078"),
        r = n("945330"),
        o = n("317134"),
        u = n("419142");
      function d(e) {
        let {
          className: t,
          roleColor: n,
          roleName: s,
          hasRemoveIcon: d = !1,
          onClick: c,
          disabled: f = !1,
          verified: h = !1,
        } = e;
        return (0, a.jsx)(i.Button, {
          className: l(t, u.button),
          look: i.Button.Looks.BLANK,
          size: i.Button.Sizes.NONE,
          onClick: c,
          disabled: f,
          children: (0, a.jsx)(o.default, {
            className: u.role,
            roleColor: n,
            roleName: s,
            verified: h,
            children:
              d &&
              (0, a.jsx)(r.default, {
                height: 6,
                width: 6,
                className: u.removeRole,
                foreground: u.removeRoleIcon,
              }),
          }),
        });
      }
    },
    317134: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("414456"),
        l = n.n(s),
        i = n("339023"),
        r = n("863132");
      function o(e) {
        let t,
          {
            className: n,
            children: s,
            verified: o,
            roleColor: u,
            roleName: d,
          } = e;
        return (
          (t = o
            ? (0, a.jsx)(i.default, {
                size: 12,
                color: u,
                className: r.linkedRoleColor,
              })
            : (0, a.jsx)("div", {
                className: r.roleColor,
                style: { backgroundColor: u },
              })),
          (0, a.jsxs)("div", { className: l(n, r.role), children: [t, d, s] })
        );
      }
    },
    332374: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          MIN_CHAT_SIDEBAR_WIDTH: function () {
            return a;
          },
          shouldChannelChatFloat: function () {
            return s;
          },
        });
      let a = 450,
        s = e => {
          let { maxWidth: t } = e;
          return t <= a;
        };
    },
    412861: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          showUploadFileSizeExceededError: function () {
            return _;
          },
          promptToUpload: function () {
            return T;
          },
        }),
        n("424973"),
        n("222007"),
        n("70102");
      var a = n("255397"),
        s = n("81594"),
        l = n("783480"),
        i = n("336522"),
        r = n("966724"),
        o = n("716241"),
        u = n("191145"),
        d = n("585722"),
        c = n("697218"),
        f = n("599110"),
        h = n("254490"),
        C = n("719923"),
        p = n("834021"),
        E = n("49111"),
        m = n("894488"),
        g = n("646718"),
        S = n("782340");
      function _(e, t) {
        let n = c.default.getCurrentUser(),
          a = e.getGuildId(),
          s = h.maxFileSize(a),
          l = [],
          r = 0,
          u = 0,
          d = 0,
          f = [];
        for (let e of t)
          (d += 1),
            (r += e.size),
            l.push(e.size),
            e.size > u && (u = e.size),
            null != e.type ? f.push(e.type) : f.push("unknown");
        if (u > s) {
          (0, o.trackWithMetadata)(E.AnalyticEvents.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: a,
            user_individual_file_size_limit: s,
            pre_compression_file_sizes: l,
            pre_compression_aggregate_file_size: r,
            num_attachments: d,
            error_type: m.FileUploadErrorTypes.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: f,
          }),
            (0, i.openUploadError)({
              title: S.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
              help: (0, p.getErrorHelp)(n, a),
              showPremiumUpsell: !(0, C.isPremiumExactly)(
                n,
                g.PremiumTypes.TIER_2
              ),
              fileSize: u,
            });
          return;
        }
        (0, i.openUploadError)({
          title: S.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
          help: S.default.Messages.UPLOAD_AREA_REQUEST_LIMIT_HELP.format({
            maxSize: h.sizeString(h.getMaxRequestSize()),
          }),
        });
      }
      function T(e, t, n) {
        let {
          filesMetadata: o,
          requireConfirm: c = !0,
          showLargeMessageDialog: h = !1,
          isThumbnail: C = !1,
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (e.length < 1) return;
        if (null != o && o.length !== e.length)
          throw Error("Unexpected mismatch between files and file metadata");
        let m = t.getGuildId();
        if ((0, p.filesExceedUploadLimits)(e, m)) {
          _(t, e);
          return;
        }
        if (d.default.getUploadCount(t.id, n) + e.length > E.MAX_UPLOAD_COUNT) {
          (0, i.openUploadError)({
            title: S.default.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
            help: S.default.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
              limit: E.MAX_UPLOAD_COUNT,
            }),
          }),
            f.default.track(E.AnalyticEvents.UPLOAD_FILE_LIMIT_ERROR, {
              existing_count: d.default.getUploadCount(t.id, n),
              new_count: e.length,
            });
          return;
        }
        if (
          ((t.type === E.ChannelTypes.GUILD_VOICE ||
            t.type === E.ChannelTypes.GUILD_STAGE_VOICE) &&
            !u.default.getChatOpen(t.id) &&
            a.default.updateChatOpen(t.id, !0),
          c)
        ) {
          let a = Array.from(e).map((e, t) => ({
            file: e,
            platform: r.UploadPlatform.WEB,
            isThumbnail: C,
            ...(null == o ? void 0 : o[t]),
          }));
          s.default.addFiles({
            files: a,
            channelId: t.id,
            showLargeMessageDialog: h,
            draftType: n,
          });
        } else
          l.default.instantBatchUpload({
            channelId: t.id,
            files: e,
            draftType: n,
            isThumbnail: C,
            filesMetadata: o,
          });
      }
    },
    834021: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getErrorHelp: function () {
            return o;
          },
          filesExceedUploadLimits: function () {
            return u;
          },
          getWebUploadFiles: function () {
            return d;
          },
        }),
        n("808653"),
        n("424973");
      var a = n("966724"),
        s = n("254490"),
        l = n("719923"),
        i = n("646718"),
        r = n("782340");
      function o(e, t) {
        let n = s.sizeString(s.maxFileSize(t));
        return l.default.isPremium(e, i.PremiumTypes.TIER_2)
          ? r.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({ maxSize: n })
          : l.default.isPremium(e, i.PremiumTypes.TIER_1)
            ? r.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP_PREMIUM_TIER_1.format(
                { maxSize: n }
              )
            : r.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                maxSize: n,
              });
      }
      function u(e, t) {
        return s.anyFileTooLarge(e, t) || s.uploadSumTooLarge(e);
      }
      function d(e) {
        return e.reduce(
          (e, t) => (
            t.item.platform === a.UploadPlatform.WEB && e.push(t.item.file), e
          ),
          []
        );
      }
    },
    347854: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          DpadIcon: function () {
            return i;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("669491"),
        l = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, l.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            d: "M14.41 8.09A2 2 0 0 0 15 6.67V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2.67a2 2 0 0 0 .59 1.42l1.7 1.7a1 1 0 0 0 1.42 0l1.7-1.7ZM8.1 9.59A2 2 0 0 0 6.67 9H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h2.67a2 2 0 0 0 1.42-.59l1.7-1.7a1 1 0 0 0 0-1.42L8.1 9.6Zm1.5 6.32A2 2 0 0 0 9 17.33V20c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-2.67a2 2 0 0 0-.59-1.42l-1.7-1.7a1 1 0 0 0-1.42 0l-1.7 1.7ZM17.33 9a2 2 0 0 0-1.42.59l-1.7 1.7a1 1 0 0 0 0 1.42l1.7 1.7a2 2 0 0 0 1.42.59H20a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2.67Z",
            className: r,
          }),
        });
      };
    },
    515478: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          FileUpIcon: function () {
            return i;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("669491"),
        l = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, l.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, a.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M13.82 21.7c.17.05.14.3-.04.3H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h7.5c.28 0 .5.22.5.5V5a5 5 0 0 0 5 5h2.5c.28 0 .5.22.5.5v2.3a.4.4 0 0 1-.68.27l-.2-.2a3 3 0 0 0-4.24 0l-4 4a3 3 0 0 0 0 4.25c.3.3.6.46.94.58Z",
              className: r,
            }),
            (0, a.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M21.66 8c.03 0 .05-.03.04-.06a3 3 0 0 0-.58-.82l-4.24-4.24a3 3 0 0 0-.82-.58.04.04 0 0 0-.06.04V5a3 3 0 0 0 3 3h2.66ZM18.3 14.3a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L20 17.42V23a1 1 0 1 1-2 0v-5.59l-2.3 2.3a1 1 0 0 1-1.4-1.42l4-4Z",
              className: r,
            }),
          ],
        });
      };
    },
    102885: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          RetryIcon: function () {
            return i;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("669491"),
        l = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, l.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            d: "M4 12a8 8 0 0 1 14.93-4H15a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v3a9.98 9.98 0 0 0-18 6 10 10 0 0 0 16.29 7.78 1 1 0 0 0-1.26-1.56A8 8 0 0 1 4 12Z",
            className: r,
          }),
        });
      };
    },
    53531: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ThreadLockIcon: function () {
            return i;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("669491"),
        l = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, l.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, a.jsx)("path", {
              d: "M12 2.81a1 1 0 0 1 0-1.41l.36-.36a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8ZM12 21.2a1 1 0 0 1 0 1.41l-.35.35a1 1 0 0 1-1.41 0l-9.2-9.19a1 1 0 0 1 0-1.41l.7-.7a1 1 0 0 1 1.3-.12l9.54 6.72A1 1 0 0 1 13 19v.15a1 1 0 0 1-.35.69l-1 1 .35.36ZM14.66 16.32c.1-.39.26-.75.45-1.09l-8.2-5.47a1 1 0 1 0-1.12 1.66l8.13 5.42a3 3 0 0 1 .74-.52ZM16.43 13.8c.62-.43 1.36-.7 2.15-.78a1 1 0 0 0-.37-.43L9.73 6.93a1 1 0 0 0-1.11 1.66l7.81 5.21Z",
              fill: "string" == typeof i ? i : i.css,
              className: r,
            }),
            (0, a.jsx)("path", {
              fillRule: "evenodd",
              d: "M16 18h.5v-.5a2.5 2.5 0 0 1 5 0v.5h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Zm4-.5v.5h-2v-.5a1 1 0 1 1 2 0Z",
              clipRule: "evenodd",
              fill: "string" == typeof i ? i : i.css,
              className: r,
            }),
          ],
        });
      };
    },
    800914: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ThreadPlusIcon: function () {
            return i;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("669491"),
        l = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, l.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 1-1ZM12 19c0-.22.03-.44.08-.66a.56.56 0 0 0-.21-.58l-8.84-6.22a1 1 0 0 0-1.3.13l-.69.69a1 1 0 0 0 0 1.41l9.2 9.2a1 1 0 0 0 1.4 0l.36-.36a1 1 0 0 0 0-1.41l-.35-.36.37-.37a.56.56 0 0 0 .12-.56A3 3 0 0 1 12 19ZM15 16h.16c.33 0 .56-.32.3-.53a.98.98 0 0 0-.07-.06L6.9 9.76a1 1 0 1 0-1.1 1.66l7.3 4.88c.17.1.39.1.56.02.4-.2.86-.32 1.34-.32ZM15.82 13.39c.25.17.6.07.77-.17.12-.17.26-.32.42-.46.29-.26.32-.76 0-.98L9.73 6.93a1 1 0 0 0-1.11 1.66l7.2 4.8ZM12 2.81a1 1 0 0 1 0-1.41l.36-.36a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8Z",
            fill: "string" == typeof i ? i : i.css,
            className: r,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=13954eb7ab6db4f3e551.js.map
