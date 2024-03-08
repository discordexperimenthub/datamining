(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["3045"],
  {
    75651: function (e, l, n) {
      "use strict";
      e.exports =
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 66 38' width='66' height='38'%3E%3Crect x='0' y='0' width='66' height='38' style='fill: rgb(0, 0, 0); stroke: rgb(0, 0, 0);'%3E%3C/rect%3E%3C/svg%3E";
    },
    753235: function (e, l, n) {
      "use strict";
      e.exports =
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='6.122 5.864 259 50' width='259' height='50'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M 68.122 11.864 L 192.122 11.864 C 193.779 11.864 195.122 13.207 195.122 14.864 L 195.122 28.864 C 195.122 30.521 193.779 31.864 192.122 31.864 L 68.122 31.864 C 66.465 31.864 65.122 30.521 65.122 28.864 L 65.122 14.864 C 65.122 13.207 66.465 11.864 68.122 11.864 Z M 68.122 35.864 L 262.122 35.864 C 263.779 35.864 265.122 37.207 265.122 38.864 L 265.122 48.864 C 265.122 50.521 263.779 51.864 262.122 51.864 L 68.122 51.864 C 66.465 51.864 65.122 50.521 65.122 48.864 L 65.122 38.864 C 65.122 37.207 66.465 35.864 68.122 35.864 Z M 25.352 5.864 L 36.892 5.864 C 43.579 5.864 46.004 6.56 48.448 7.867 C 50.893 9.175 52.811 11.093 54.118 13.537 C 55.428 15.984 56.122 18.407 56.122 25.094 L 56.122 36.634 C 56.122 43.321 55.426 45.746 54.119 48.19 C 52.811 50.635 50.893 52.553 48.449 53.86 C 46.002 55.17 43.579 55.864 36.892 55.864 L 25.352 55.864 C 18.665 55.864 16.24 55.168 13.796 53.861 C 11.351 52.553 9.433 50.635 8.126 48.191 C 6.816 45.744 6.122 43.321 6.122 36.634 L 6.122 25.094 C 6.122 18.407 6.818 15.982 8.125 13.538 C 9.432 11.094 11.352 9.174 13.795 7.868 C 16.242 6.558 18.665 5.864 25.352 5.864 Z'%3E%3C/path%3E%3C/svg%3E";
    },
    882550: function (e, l, n) {
      "use strict";
      n.r(l),
        n.d(l, {
          default: function () {
            return u;
          },
        });
      var t = n("884691"),
        s = n("446674"),
        a = n("851387"),
        i = n("697218");
      function u(e) {
        let l = (0, s.useStateFromStores)(
          [i.default],
          () => i.default.getUser(null == e ? void 0 : e.creator_id),
          [e]
        );
        return (
          t.useEffect(() => {
            null == l &&
              (null == e ? void 0 : e.creator_id) != null &&
              a.default.requestMembersById(e.guild_id, e.creator_id);
          }, [e, l]),
          l
        );
      }
    },
    914169: function (e, l, n) {
      "use strict";
      n.r(l),
        n.d(l, {
          createEventLocationClickHandler: function () {
            return b;
          },
          default: function () {
            return z;
          },
        });
      var t = n("37983"),
        s = n("884691"),
        a = n("414456"),
        i = n.n(a),
        u = n("446674"),
        o = n("77078"),
        r = n("970728"),
        d = n("987317"),
        c = n("716214"),
        m = n("813006"),
        v = n("42203"),
        p = n("305961"),
        E = n("580357"),
        N = n("174622"),
        h = n("660279"),
        C = n("36694"),
        g = n("374021"),
        f = n("398604"),
        I = n("1339"),
        x = n("882550"),
        S = n("189443"),
        j = n("822516"),
        L = n("93550"),
        R = n("255050"),
        T = n("400271"),
        _ = n("931874"),
        B = n("936965"),
        D = n("745049"),
        k = n("782340"),
        y = n("673843");
      let G = (e, l) => n => {
          n.stopPropagation(),
            d.default.selectVoiceChannel(e.channel_id, !1),
            null == l || l(n);
        },
        A = (e, l) => n => {
          let t = v.default.getChannel(e.channel_id);
          null != t &&
            (n.stopPropagation(), (0, c.connectAndOpen)(t), null == l || l(n));
        },
        b = (e, l) => {
          switch (null == e ? void 0 : e.entity_type) {
            case D.GuildScheduledEventEntityTypes.STAGE_INSTANCE:
              return A(e, l);
            case D.GuildScheduledEventEntityTypes.VOICE:
              return G(e, l);
          }
          return () => {};
        },
        M = (e, l) =>
          l &&
          [
            D.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
            D.GuildScheduledEventEntityTypes.VOICE,
          ].includes(null == e ? void 0 : e.entity_type),
        w = s.memo(function (e) {
          var l;
          let { guild: n, guildScheduledEvent: a, channel: i, isMember: d } = e,
            c = (0, u.useStateFromStores)(
              [p.default],
              () => {
                var e;
                return null == n
                  ? null
                  : null !== (e = p.default.getGuild(n.id)) && void 0 !== e
                    ? e
                    : new m.default(n);
              },
              [n]
            ),
            v = (0, _.getLocationDataForEvent)(a, i),
            h = s.useCallback(
              e => {
                d &&
                  null != a &&
                  (e.stopPropagation(),
                  (0, r.transitionToGuildFromEventInvite)(a));
              },
              [d, a]
            ),
            C = s.useCallback(
              e => {
                b(a)(e);
              },
              [a]
            );
          if (null == c) return null;
          let g = null == v ? void 0 : v.IconComponent,
            f = (0, t.jsxs)(t.Fragment, {
              children: [
                null != g &&
                  (0, t.jsx)(g, {
                    width: 16,
                    height: 16,
                    className: y.channelIcon,
                  }),
                (0, t.jsx)(o.Text, {
                  className: y.channelDescription,
                  variant: "text-xs/normal",
                  children: (0, I.guildEventDetailsParser)(
                    null !== (l = null == v ? void 0 : v.locationName) &&
                      void 0 !== l
                      ? l
                      : "",
                    !0
                  ),
                }),
              ],
            });
          return (0, t.jsxs)("div", {
            className: y.inviteDetailsContainer,
            children: [
              (0, t.jsx)(N.default.Icon, { guild: c, onClick: h }),
              (0, t.jsxs)("div", {
                className: y.verticalContainer,
                children: [
                  (0, t.jsxs)("div", {
                    className: y.guildChannelInfoContainer,
                    children: [
                      (0, t.jsx)(E.default, {
                        guild: c,
                        tooltipPosition: "top",
                        tooltipColor: o.Tooltip.Colors.PRIMARY,
                        size: 16,
                        className: y.guildBadge,
                      }),
                      (0, t.jsx)(o.Clickable, {
                        className: y.guildNameClickable,
                        onClick: h,
                        children: (0, t.jsx)(o.Heading, {
                          className: d ? y.guildNameLinkable : y.guildName,
                          variant: "text-sm/medium",
                          children: c.name,
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: y.channelInfoContainer,
                    children: M(a, d)
                      ? (0, t.jsx)(o.Clickable, {
                          className: y.channelLocationLink,
                          onClick: C,
                          children: f,
                        })
                      : f,
                  }),
                ],
              }),
            ],
          });
        }),
        P = s.memo(function (e) {
          let {
              guildId: l,
              guildScheduledEventId: n,
              recurrenceId: s,
              isActive: a,
              isEnded: i,
              isMember: r,
              isExternal: d,
              onAcceptInstantInvite: c,
              onTransitionToInviteChannel: m,
            } = e,
            v = (0, u.useStateFromStores)(
              [f.default],
              () => f.default.isInterestedInEventRecurrence(n, s),
              [n, s]
            ),
            p = e => {
              e.stopPropagation(), r ? a && m() : c();
            };
          return r
            ? a
              ? (0, t.jsx)(o.Button, {
                  className: y.button,
                  size: o.Button.Sizes.SMALL,
                  onClick: e => {
                    !d && p(e);
                  },
                  color: d
                    ? o.Button.Colors.TRANSPARENT
                    : o.Button.Colors.GREEN,
                  children: d
                    ? k.default.Messages.GUILD_SCHEDULED_EVENT_VIEW_DETAIL
                    : k.default.Messages.JOIN_GUILD,
                })
              : i
                ? (0, t.jsx)(o.Button, {
                    className: y.button,
                    size: o.Button.Sizes.SMALL,
                    disabled: !0,
                    color: o.Button.Colors.PRIMARY,
                    look: o.Button.Looks.OUTLINED,
                    children: k.default.Messages.GUILD_EVENT_INVITE_COMPLETED,
                  })
                : (0, t.jsxs)(o.Button, {
                    className: y.button,
                    innerClassName: y.innerButton,
                    size: o.Button.Sizes.SMALL,
                    color: o.Button.Colors.PRIMARY,
                    look: v ? o.Button.Looks.OUTLINED : o.Button.Looks.FILLED,
                    onClick: e => {
                      e.stopPropagation(), (0, B.default)(n, s, l);
                    },
                    children: [
                      v
                        ? (0, t.jsx)(C.default, {
                            width: 16,
                            height: 16,
                            className: y.buttonIcon,
                          })
                        : (0, t.jsx)(h.default, {
                            width: 16,
                            height: 16,
                            className: y.buttonIcon,
                          }),
                      k.default.Messages.INDICATE_RSVP,
                    ],
                  })
            : (0, t.jsx)(o.Button, {
                className: y.button,
                size: o.Button.Sizes.SMALL,
                onClick: p,
                color: o.Button.Colors.GREEN,
                children: k.default.Messages.JOIN_GUILD,
              });
        }),
        U = s.memo(function (e) {
          var l;
          let {
              guildScheduledEvent: n,
              guild: a,
              channel: u,
              isMember: r,
              recurrenceId: d,
              onAcceptInstantInvite: c,
              onTransitionToInviteChannel: m,
            } = e,
            v =
              null != d
                ? d
                : null != n
                  ? (0, j.getNextRecurrenceIdInEvent)(n)
                  : null,
            p =
              (null == n ? void 0 : n.recurrence_rule) == null ||
              null == v ||
              (0, j.isValidRecurrence)(
                (0, S.recurrenceRuleFromServer)(
                  null == n ? void 0 : n.recurrence_rule
                ),
                v
              ),
            E = (0, x.default)(n),
            h = s.useCallback(() => {
              r &&
                null != n &&
                (0, g.openGuildEventDetails)({
                  eventId: n.id,
                  recurrenceId: v,
                });
            }, [r, n, v]);
          if (null == n || !p) return null;
          let C = (0, f.isGuildScheduledEventActive)(n),
            I = (0, f.isGuildEventEnded)(n),
            _ = n.entity_type === D.GuildScheduledEventEntityTypes.EXTERNAL;
          return (0, t.jsx)(N.default, {
            className: i({ [y.clickable]: r }),
            children: (0, t.jsxs)(o.Clickable, {
              onClick: h,
              children: [
                null != n.image &&
                  (0, t.jsx)(R.default, {
                    source: (0, L.default)(n),
                    className: y.banner,
                  }),
                (0, t.jsx)(T.default, {
                  name: n.name,
                  description:
                    null !== (l = n.description) && void 0 !== l ? l : void 0,
                  descriptionClassName: y.eventDescription,
                  guildId: n.guild_id,
                  creator: E,
                  guildEventId: n.id,
                  eventPreview: n,
                  recurrenceId: v,
                }),
                (0, t.jsxs)("div", {
                  className: y.footerContainer,
                  children: [
                    (0, t.jsx)(w, {
                      guild: a,
                      channel: u,
                      guildScheduledEvent: n,
                      isMember: r,
                    }),
                    (0, t.jsx)(P, {
                      isActive: C,
                      isEnded: I,
                      isMember: r,
                      guildId: n.guild_id,
                      guildScheduledEventId: n.id,
                      recurrenceId: v,
                      onAcceptInstantInvite: c,
                      onTransitionToInviteChannel: m,
                      isExternal: _,
                    }),
                  ],
                }),
              ],
            }),
          });
        });
      var z = U;
    },
    931874: function (e, l, n) {
      "use strict";
      n.r(l),
        n.d(l, {
          getLocationDataForEvent: function () {
            return i;
          },
        });
      var t = n("419830"),
        s = n("718550"),
        a = n("841363");
      function i(e, l) {
        let n, i;
        if (null == e) return null;
        let u = (0, a.getLocationFromEvent)(e);
        if (null != u) (n = s.default), (i = u);
        else {
          if (null == l) return null;
          (n = (0, t.getSimpleChannelIconComponent)(l.type)), (i = l.name);
        }
        return { IconComponent: n, locationName: i };
      }
    },
    936965: function (e, l, n) {
      "use strict";
      n.r(l),
        n.d(l, {
          default: function () {
            return m;
          },
        }),
        n("222007");
      var t = n("37983"),
        s = n("884691"),
        a = n("77078"),
        i = n("322224"),
        u = n("832588"),
        o = n("745049"),
        r = n("782340"),
        d = n("505326");
      function c(e) {
        let { event: l, recurrenceId: n, guildId: c, onRsvp: m, ...v } = e,
          [p, E] = s.useState(u.ResponseOptions.SERIES),
          N = (0, u.getExistingRsvp)(l.id, null),
          h =
            (null == N ? void 0 : N.response) ===
            o.GuildScheduledEventUserResponses.INTERESTED,
          C = h
            ? o.GuildScheduledEventUserResponses.UNINTERESTED
            : o.GuildScheduledEventUserResponses.INTERESTED,
          g =
            C === o.GuildScheduledEventUserResponses.INTERESTED
              ? r.default.Messages
                  .GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_INTERESTED
              : r.default.Messages
                  .GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_UNINTERESTED;
        return (0, t.jsx)(a.ConfirmModal, {
          ...v,
          header: g,
          confirmText: r.default.Messages.OK,
          cancelText: r.default.Messages.CANCEL,
          onConfirm: () => {
            p === u.ResponseOptions.SERIES
              ? i.default.updateRsvp(l.id, null, c, C)
              : i.default.updateRsvp(l.id, n, c, C),
              null == m || m(),
              v.onClose();
          },
          confirmButtonColor: a.Button.Colors.BRAND,
          children: (0, t.jsx)(a.RadioGroup, {
            className: d.responseOptions,
            value: p,
            options: (0, u.getResponseOptions)(),
            onChange: e => E(e.value),
          }),
        });
      }
      function m(e, l, n, s) {
        (0, u.handleRsvp)({
          eventId: e,
          recurrenceId: l,
          guildId: n,
          updateRsvp: (l, t, s, a) => i.default.updateRsvp(e, t, n, a),
          openRsvpPicker: (e, l) => {
            (0, a.openModalLazy)(() =>
              Promise.resolve(a =>
                (0, t.jsx)(c, {
                  ...a,
                  event: e,
                  recurrenceId: l,
                  guildId: n,
                  onRsvp: s,
                })
              )
            );
          },
          onRsvp: s,
        });
      }
    },
    174622: function (e, l, n) {
      "use strict";
      n.r(l),
        n.d(l, {
          default: function () {
            return k;
          },
        }),
        n("424973"),
        n("222007");
      var t = n("37983"),
        s = n("884691"),
        a = n("414456"),
        i = n.n(a),
        u = n("77078"),
        o = n("843962"),
        r = n("679653"),
        d = n("419830"),
        c = n("407063"),
        m = n("845579"),
        v = n("315102"),
        p = n("474293"),
        E = n("145131"),
        N = n("953109"),
        h = n("476263"),
        C = n("782340"),
        g = n("519166");
      let f = e => {
          let { text: l, extra: n } = e;
          return (0, t.jsxs)(u.FormTitle, {
            className: g.header,
            children: [l, n],
          });
        },
        I = e => {
          let { resolving: l, children: n } = e;
          return (0, t.jsx)("div", {
            className: g.content,
            children: l
              ? (0, t.jsxs)("div", {
                  className: g.resolvingWrapper,
                  children: [
                    (0, t.jsx)("div", {
                      className: g.resolving,
                      children: (0, t.jsx)("div", {
                        className: g.resolvingBackground,
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: g.resolvingFakeButton,
                      children: (0, t.jsx)("div", {
                        className: g.resolvingBackground,
                      }),
                    }),
                  ],
                })
              : n,
          });
        },
        x = e => {
          var l;
          let {
              application: n,
              guild: s,
              channel: a,
              onClick: d,
              expired: c = !1,
              user: v,
              className: E,
            } = e,
            C = null !== (l = (0, r.default)(a)) && void 0 !== l ? l : "",
            f = m.GifAutoPlay.useSetting();
          if (c) return (0, t.jsx)("div", { className: g.guildIconExpired });
          let I = null == s || null != s.icon,
            x = i(
              (0, p.getClass)(
                g,
                "guildIcon",
                I ? "Image" : "",
                null != d ? "Joined" : ""
              ),
              E
            );
          if (null != n)
            return (0, t.jsx)(N.default, {
              game: n,
              onClick: d,
              size: g.applicationIcon,
              className: x,
            });
          if (null != s)
            return (0, t.jsx)(h.default, {
              onClick: d,
              active: !0,
              guild: s,
              className: x,
              animate: f,
            });
          if (null != a)
            return (0, t.jsx)(u.Avatar, {
              onClick: d,
              src: (0, o.getChannelIconURL)(a),
              size: u.AvatarSizes.SIZE_56,
              className: x,
              "aria-label": C,
            });
          else if (null != v)
            return (0, t.jsx)(u.Avatar, {
              onClick: d,
              src: v.getAvatarURL(null, 56),
              size: u.AvatarSizes.SIZE_56,
              className: x,
              "aria-label": C,
            });
          return null;
        },
        S = e => {
          let { title: l, onClick: n, expired: s, children: a } = e,
            i = (0, t.jsx)(u.Heading, {
              variant: "heading-md/semibold",
              className: (0, p.getClass)(
                g,
                "inviteDestination",
                s ? "Expired" : null != n ? "Joined" : ""
              ),
              children: l,
            });
          return (0, t.jsxs)(E.default, {
            className: g.guildInfo,
            direction: E.default.Direction.VERTICAL,
            justify: E.default.Justify.CENTER,
            children: [
              null == n
                ? i
                : (0, t.jsx)(u.Clickable, { onClick: n, children: i }),
              (0, t.jsx)(u.Text, {
                tag: "strong",
                className: g.guildDetail,
                variant: "text-sm/normal",
                children: a,
              }),
            ],
          });
        },
        j = e => {
          let { membersOnline: l, members: n } = e,
            s = [];
          return (
            null != l &&
              l > 0 &&
              s.push(
                (0, t.jsxs)(
                  "div",
                  {
                    className: g.statusWrapper,
                    children: [
                      (0, t.jsx)("i", { className: g.statusOnline }),
                      (0, t.jsx)("span", {
                        className: g.count,
                        children:
                          C.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format(
                            { membersOnline: l }
                          ),
                      }),
                    ],
                  },
                  "onlineCount"
                )
              ),
            null != n &&
              s.push(
                (0, t.jsxs)(
                  "div",
                  {
                    className: g.statusWrapper,
                    children: [
                      (0, t.jsx)("i", { className: g.statusOffline }),
                      (0, t.jsx)("span", {
                        className: g.count,
                        children:
                          C.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format(
                            { count: n }
                          ),
                      }),
                    ],
                  },
                  "memberCount"
                )
              ),
            (0, t.jsx)("div", { className: g.statusCounts, children: s })
          );
        },
        L = e => {
          let { channel: l, guild: n } = e,
            s = (0, d.getChannelIconComponent)(l, n);
          return null == l || null == s
            ? null
            : (0, t.jsxs)("div", {
                className: g.channel,
                children: [
                  (0, t.jsx)(s, {
                    className: g.channelIcon,
                    width: 20,
                    height: 20,
                  }),
                  (0, t.jsx)("span", {
                    className: g.channelName,
                    children: l.name,
                  }),
                ],
              });
        },
        R = e => {
          let {
            children: l,
            onClick: n,
            className: s,
            isDisabled: a,
            ...o
          } = e;
          return (0, t.jsx)(u.Button, {
            ...o,
            disabled: a,
            onClick: n,
            size: g.buttonSize,
            className: i(g.button, s),
            children: l,
          });
        };
      (R.Colors = u.Button.Colors),
        (R.Looks = u.Button.Looks),
        (R.defaultProps = { className: null, isDisabled: !1 });
      let T = e => {
          let { children: l, className: n, containerRef: s } = e;
          return (0, t.jsx)("div", {
            ref: s,
            className: i(g.wrapper, n),
            children: l,
          });
        },
        _ = e => {
          let { guild: l } = e,
            [n, a] = s.useState(!1),
            u = v.default.getGuildSplashURL({
              id: l.id,
              splash: l.splash,
              size: 400 * (0, c.getDevicePixelRatio)(),
            });
          return null == u
            ? null
            : (0, t.jsx)("div", {
                className: g.inviteSplash,
                children: (0, t.jsx)("img", {
                  src: u,
                  alt: "",
                  className: i(g.inviteSplashImage, {
                    [g.inviteSplashImageLoaded]: n,
                  }),
                  onLoad: () => a(!0),
                }),
              });
        },
        B = e => {
          let { guild: l } = e;
          return (0, t.jsx)("div", {
            className: g.guildNameWrapper,
            children: (0, t.jsx)("span", {
              className: g.guildName,
              children: l.name,
            }),
          });
        },
        D = e => {
          let { guildTemplate: l } = e;
          return (0, t.jsx)("div", {
            className: g.guildNameWrapper,
            children: (0, t.jsx)("span", {
              className: g.guildName,
              children: l.serializedSourceGuild.name,
            }),
          });
        };
      (T.Header = f),
        (T.Body = I),
        (T.Icon = x),
        (T.Info = S),
        (T.Data = j),
        (T.Channel = L),
        (T.Button = R),
        (T.GuildSplash = _),
        (T.GuildName = B),
        (T.GuildTemplateName = D),
        (f.displayName = "InviteButton.Header"),
        (I.displayName = "InviteButton.Body"),
        (x.displayName = "InviteButton.Icon"),
        (S.displayName = "InviteButton.Info"),
        (j.displayName = "InviteButton.Data"),
        (L.displayName = "InviteButton.Channel"),
        (R.displayName = "InviteButton.Button"),
        (_.displayName = "InviteButton.GuildSplash"),
        (B.displayName = "InviteButton.GuildName"),
        (D.displayName = "InviteButton.GuildTemplateName");
      var k = T;
    },
  },
]);
//# sourceMappingURL=9b3387a00ce58e9fe487.js.map
