(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["72142"],
  {
    251485: function (e, t, l) {
      "use strict";
      e.exports = l.p + "e9661fbf5e8e3a2e1ac9.svg";
    },
    51417: function (e, t, l) {
      "use strict";
      e.exports = l.p + "67df55ef8866e6ecbd8d.svg";
    },
    996177: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return S;
          },
        }),
        l("222007"),
        l("808653");
      var n = l("37983"),
        a = l("884691"),
        s = l("414456"),
        r = l.n(s),
        d = l("446674"),
        i = l("77078"),
        o = l("913144"),
        u = l("429224"),
        h = l("679653"),
        c = l("419830"),
        g = l("42203"),
        m = l("923959"),
        f = l("305961"),
        p = l("957255"),
        O = l("27618"),
        L = l("18494"),
        M = l("697218"),
        x = l("476263"),
        C = l("476765"),
        _ = l("733160"),
        N = l("599110"),
        b = l("299039"),
        F = l("49111"),
        j = l("782340"),
        I = l("691788");
      class A extends a.PureComponent {
        componentDidMount() {
          N.default.track(F.AnalyticEvents.OPEN_MODAL, {
            type: "Follow Channel Modal",
            num_guild_permissions: Object.keys(this.props.guilds).length,
            location: "Chat Input Blocker - Follow Channel",
          });
        }
        getDefaultChannelId(e) {
          let t = e.find(e => {
              let { channel: t } = e;
              return (
                "general" === (0, h.computeChannelName)(t, M.default, O.default)
              );
            }),
            l = null != t ? t : e[0];
          return null != l ? l.channel.id : null;
        }
        renderFooter() {
          let {
              selectedGuildId: e,
              selectedChannelId: t,
              submitting: l,
            } = this.state,
            { onClose: s } = this.props;
          return (0, n.jsxs)(a.Fragment, {
            children: [
              (0, n.jsx)(i.Button, {
                submitting: l,
                onClick: this.handleFollow,
                disabled: null == e || null == t,
                children: j.default.Messages.FOLLOW,
              }),
              (0, n.jsx)(i.Button, {
                look: i.Button.Looks.LINK,
                color: i.Button.Colors.PRIMARY,
                onClick: s,
                children: j.default.Messages.CANCEL,
              }),
            ],
          });
        }
        renderForm() {
          let { guilds: e } = this.props,
            {
              channels: t,
              selectedGuildId: l,
              selectedChannelId: s,
              errorMessage: r,
            } = this.state,
            d = b.default.keys(e).map(t => {
              let { guild: l } = e[t];
              return { value: t, label: l.toString(), guild: l };
            }),
            o = t.map(e => {
              let { channel: t, category: l } = e;
              return {
                value: t.id,
                label: (0, h.computeChannelName)(t, M.default, O.default),
                channel: t,
                category: l,
              };
            }),
            u = 0 === d.length,
            g = u
              ? j.default.Messages.FOLLOW_MODAL_HINT_NO_PERMS
              : j.default.Messages.FOLLOW_MODAL_HINT;
          return (0, n.jsxs)(a.Fragment, {
            children: [
              (0, n.jsx)(i.FormItem, {
                className: I.bottomMargin,
                title: j.default.Messages.FORM_LABEL_SEND_TO,
                children: (0, n.jsx)(i.SearchableSelect, {
                  value: l,
                  options: d,
                  isDisabled: u,
                  onChange: this.handleGuildSelect,
                  renderOptionPrefix: e =>
                    (function (e) {
                      if (null == e) return null;
                      let { guild: t } = e;
                      return (0, n.jsx)(x.default, {
                        guild: t,
                        size: x.default.Sizes.MINI,
                      });
                    })(e),
                }),
              }),
              (0, n.jsx)(i.FormItem, {
                className: I.bottomMargin,
                title: j.default.Messages.FORM_LABEL_SELECT_CHANNEL,
                children: (0, n.jsx)(i.SearchableSelect, {
                  value: s,
                  options: o,
                  isDisabled: 0 === o.length,
                  onChange: this.handleChannelSelect,
                  renderOptionPrefix: e =>
                    (function (e) {
                      if (null == e) return null;
                      let { channel: t } = e,
                        l = (0, c.getChannelIconComponent)(t);
                      return (
                        null != l &&
                        (0, n.jsx)(l, {
                          width: 16,
                          height: 16,
                          className: I.icon,
                        })
                      );
                    })(e),
                }),
              }),
              (0, n.jsx)(i.Text, {
                variant: "text-sm/normal",
                color: u || null != r ? "text-danger" : "text-muted",
                className: I.bottomMargin,
                children: null != r ? r : g,
              }),
            ],
          });
        }
        renderBody() {
          let {
            channel: { nsfw: e },
          } = this.props;
          return (0, n.jsxs)("div", {
            className: I.body,
            children: [
              (0, n.jsx)(i.Heading, {
                variant: "heading-lg/semibold",
                id: this.state.headerId,
                children: j.default.Messages.FOLLOW_MODAL_TITLE,
              }),
              (0, n.jsx)(i.Text, {
                color: "text-muted",
                className: r(I.topMargin, { [I.formMargin]: !e }),
                variant: "text-sm/normal",
                children: j.default.Messages.FOLLOW_MODAL_BODY,
              }),
              e
                ? (0, n.jsx)(i.Text, {
                    className: r(I.formMargin, I.topMargin),
                    color: "text-danger",
                    variant: "text-sm/normal",
                    children: j.default.Messages.FOLLOW_MODAL_WARNING,
                  })
                : null,
            ],
          });
        }
        renderHeader() {
          var e;
          let {
              guildToFollow: t,
              channelNameToFollow: l,
              channel: a,
            } = this.props,
            s =
              null !== (e = (0, c.getChannelIconComponent)(a)) && void 0 !== e
                ? e
                : _.default;
          return (0, n.jsxs)(i.ModalHeader, {
            className: I.header,
            children: [
              (0, n.jsx)(x.default, { guild: t, size: x.default.Sizes.LARGE }),
              (0, n.jsx)("div", {
                className: I.channelContainer,
                children: (0, n.jsxs)("div", {
                  className: I.channel,
                  children: [
                    (0, n.jsx)(s, {
                      width: 20,
                      height: 20,
                      className: I.channelIcon,
                    }),
                    (0, n.jsx)(i.Text, {
                      variant: "text-md/medium",
                      className: I.channelName,
                      children: l,
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        render() {
          let { transitionState: e } = this.props;
          return (0, n.jsxs)(i.ModalRoot, {
            transitionState: e,
            "aria-labelledby": this.state.headerId,
            children: [
              this.renderHeader(),
              (0, n.jsxs)(i.ModalContent, {
                className: I.content,
                children: [this.renderBody(), this.renderForm()],
              }),
              (0, n.jsx)(i.ModalFooter, { children: this.renderFooter() }),
            ],
          });
        }
        constructor(e) {
          super(e),
            (this.handleGuildSelect = e => {
              let { guilds: t } = this.props,
                { selectedGuildId: l } = this.state,
                n = t[e].channels,
                a = this.getDefaultChannelId(n);
              l !== e &&
                this.setState({
                  selectedGuildId: e,
                  selectedChannelId: a,
                  channels: n,
                });
            }),
            (this.handleChannelSelect = e => {
              this.setState({ selectedChannelId: e });
            }),
            (this.handleFollow = () => {
              let { channel: e, onClose: t } = this.props,
                { selectedChannelId: a, selectedGuildId: s } = this.state;
              null != a &&
                (this.setState({ submitting: !0 }),
                u.default
                  .createChannelFollower(a, e.id)
                  .then(() => {
                    o.default.dispatch({
                      type: "CHANNEL_FOLLOWER_CREATED",
                      channelId: a,
                      guildId: s,
                    }),
                      t(),
                      (0, i.openModalLazy)(async () => {
                        let { default: e } = await l
                          .el("330230")
                          .then(l.bind(l, "330230"));
                        return t => (0, n.jsx)(e, { ...t });
                      });
                  })
                  .catch(e => {
                    e.body.code === F.AbortCodes.TOO_MANY_WEBHOOKS
                      ? this.setState({
                          errorMessage:
                            j.default.Messages.FOLLOW_MODAL_TOO_MANY_WEBHOOKS,
                          submitting: !1,
                        })
                      : this.setState({
                          errorMessage: j.default.Messages.FOLLOW_MODAL_FAIL,
                          submitting: !1,
                        });
                  }));
            });
          let { guilds: t, lastChannelFollowingDestination: a } = e,
            { guildId: s, channelId: r } = a;
          this.state = {
            selectedGuildId: s,
            selectedChannelId: r,
            channels: null != s && null != t[s] ? t[s].channels : [],
            errorMessage: null,
            submitting: !1,
            headerId: (0, C.uid)("modal"),
          };
        }
      }
      var S = d.default.connectStores(
        [f.default, g.default, m.default, p.default, L.default],
        e => {
          let { channel: t } = e,
            l = f.default.getGuild(t.guild_id),
            n = Object.values(f.default.getGuilds()),
            a = n.reduce((e, t) => {
              let l = m.default.getChannels(t.id),
                n = l.SELECTABLE.map(e => e.channel)
                  .filter(
                    e =>
                      e.type === F.ChannelTypes.GUILD_TEXT &&
                      p.default.can(F.Permissions.MANAGE_WEBHOOKS, e)
                  )
                  .map(e => {
                    let t = g.default.getChannel(e.parent_id);
                    return { channel: e, category: null != t ? t.name : null };
                  });
              return n.length > 0 && (e[t.id] = { guild: t, channels: n }), e;
            }, {}),
            s = L.default.getLastChannelFollowingDestination();
          return {
            guildToFollow: l,
            channelNameToFollow: t.name,
            guilds: a,
            lastChannelFollowingDestination: null != s ? s : {},
          };
        },
        { forwardRef: !0 }
      )(A);
    },
  },
]);
//# sourceMappingURL=8cb97eee79863f4fc184.js.map
