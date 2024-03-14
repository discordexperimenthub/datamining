(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["34475"],
  {
    509007: function (e, t, n) {
      e.exports = function (e, t, n, i) {
        var a = -1,
          l = null == e ? 0 : e.length;
        for (i && l && (n = e[++a]); ++a < l; ) n = t(n, e[a], a, e);
        return n;
      };
    },
    270281: function (e, t, n) {
      e.exports = function (e) {
        return e.split("");
      };
    },
    698555: function (e, t, n) {
      var i = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      e.exports = function (e) {
        return e.match(i) || [];
      };
    },
    300437: function (e, t, n) {
      e.exports = function (e) {
        return function (t) {
          return null == e ? void 0 : e[t];
        };
      };
    },
    389832: function (e, t, n) {
      var i = n("890022");
      e.exports = function (e, t, n) {
        var a = e.length;
        return (n = void 0 === n ? a : n), !t && n >= a ? e : i(e, t, n);
      };
    },
    568410: function (e, t, n) {
      var i = n("389832"),
        a = n("488605"),
        l = n("907193"),
        s = n("890305");
      e.exports = function (e) {
        return function (t) {
          var n = a((t = s(t))) ? l(t) : void 0,
            o = n ? n[0] : t.charAt(0),
            r = n ? i(n, 1).join("") : t.slice(1);
          return o[e]() + r;
        };
      };
    },
    864979: function (e, t, n) {
      n("781738");
      var i = n("509007"),
        a = n("109129"),
        l = n("787191"),
        s = RegExp("['’]", "g");
      e.exports = function (e) {
        return function (t) {
          return i(l(a(t).replace(s, "")), e, "");
        };
      };
    },
    954328: function (e, t, n) {
      var i = n("300437"),
        a = i({
          À: "A",
          Á: "A",
          Â: "A",
          Ã: "A",
          Ä: "A",
          Å: "A",
          à: "a",
          á: "a",
          â: "a",
          ã: "a",
          ä: "a",
          å: "a",
          Ç: "C",
          ç: "c",
          Ð: "D",
          ð: "d",
          È: "E",
          É: "E",
          Ê: "E",
          Ë: "E",
          è: "e",
          é: "e",
          ê: "e",
          ë: "e",
          Ì: "I",
          Í: "I",
          Î: "I",
          Ï: "I",
          ì: "i",
          í: "i",
          î: "i",
          ï: "i",
          Ñ: "N",
          ñ: "n",
          Ò: "O",
          Ó: "O",
          Ô: "O",
          Õ: "O",
          Ö: "O",
          Ø: "O",
          ò: "o",
          ó: "o",
          ô: "o",
          õ: "o",
          ö: "o",
          ø: "o",
          Ù: "U",
          Ú: "U",
          Û: "U",
          Ü: "U",
          ù: "u",
          ú: "u",
          û: "u",
          ü: "u",
          Ý: "Y",
          ý: "y",
          ÿ: "y",
          Æ: "Ae",
          æ: "ae",
          Þ: "Th",
          þ: "th",
          ß: "ss",
          Ā: "A",
          Ă: "A",
          Ą: "A",
          ā: "a",
          ă: "a",
          ą: "a",
          Ć: "C",
          Ĉ: "C",
          Ċ: "C",
          Č: "C",
          ć: "c",
          ĉ: "c",
          ċ: "c",
          č: "c",
          Ď: "D",
          Đ: "D",
          ď: "d",
          đ: "d",
          Ē: "E",
          Ĕ: "E",
          Ė: "E",
          Ę: "E",
          Ě: "E",
          ē: "e",
          ĕ: "e",
          ė: "e",
          ę: "e",
          ě: "e",
          Ĝ: "G",
          Ğ: "G",
          Ġ: "G",
          Ģ: "G",
          ĝ: "g",
          ğ: "g",
          ġ: "g",
          ģ: "g",
          Ĥ: "H",
          Ħ: "H",
          ĥ: "h",
          ħ: "h",
          Ĩ: "I",
          Ī: "I",
          Ĭ: "I",
          Į: "I",
          İ: "I",
          ĩ: "i",
          ī: "i",
          ĭ: "i",
          į: "i",
          ı: "i",
          Ĵ: "J",
          ĵ: "j",
          Ķ: "K",
          ķ: "k",
          ĸ: "k",
          Ĺ: "L",
          Ļ: "L",
          Ľ: "L",
          Ŀ: "L",
          Ł: "L",
          ĺ: "l",
          ļ: "l",
          ľ: "l",
          ŀ: "l",
          ł: "l",
          Ń: "N",
          Ņ: "N",
          Ň: "N",
          Ŋ: "N",
          ń: "n",
          ņ: "n",
          ň: "n",
          ŋ: "n",
          Ō: "O",
          Ŏ: "O",
          Ő: "O",
          ō: "o",
          ŏ: "o",
          ő: "o",
          Ŕ: "R",
          Ŗ: "R",
          Ř: "R",
          ŕ: "r",
          ŗ: "r",
          ř: "r",
          Ś: "S",
          Ŝ: "S",
          Ş: "S",
          Š: "S",
          ś: "s",
          ŝ: "s",
          ş: "s",
          š: "s",
          Ţ: "T",
          Ť: "T",
          Ŧ: "T",
          ţ: "t",
          ť: "t",
          ŧ: "t",
          Ũ: "U",
          Ū: "U",
          Ŭ: "U",
          Ů: "U",
          Ű: "U",
          Ų: "U",
          ũ: "u",
          ū: "u",
          ŭ: "u",
          ů: "u",
          ű: "u",
          ų: "u",
          Ŵ: "W",
          ŵ: "w",
          Ŷ: "Y",
          ŷ: "y",
          Ÿ: "Y",
          Ź: "Z",
          Ż: "Z",
          Ž: "Z",
          ź: "z",
          ż: "z",
          ž: "z",
          Ĳ: "IJ",
          ĳ: "ij",
          Œ: "Oe",
          œ: "oe",
          ŉ: "'n",
          ſ: "s",
        });
      e.exports = a;
    },
    488605: function (e, t, n) {
      var i = RegExp(
        "[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"
      );
      e.exports = function (e) {
        return i.test(e);
      };
    },
    899368: function (e, t, n) {
      var i =
        /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      e.exports = function (e) {
        return i.test(e);
      };
    },
    907193: function (e, t, n) {
      var i = n("270281"),
        a = n("488605"),
        l = n("152828");
      e.exports = function (e) {
        return a(e) ? l(e) : i(e);
      };
    },
    152828: function (e, t, n) {
      var i = "\ud800-\udfff",
        a = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
        l = "\ud83c[\udffb-\udfff]",
        s = "[^" + i + "]",
        o = "(?:\ud83c[\udde6-\uddff]){2}",
        r = "[\ud800-\udbff][\udc00-\udfff]",
        d = "(?:" + a + "|" + l + ")?",
        u = "[\\ufe0e\\ufe0f]?",
        c = "(?:\\u200d(?:" + [s, o, r].join("|") + ")" + u + d + ")*",
        f = RegExp(
          l +
            "(?=" +
            l +
            ")|" +
            ("(?:" + [s + a + "?", a, o, r, "[" + i + "]"].join("|") + ")") +
            (u + d + c),
          "g"
        );
      e.exports = function (e) {
        return e.match(f) || [];
      };
    },
    711615: function (e, t, n) {
      var i = "\ud800-\udfff",
        a = "\\u2700-\\u27bf",
        l = "a-z\\xdf-\\xf6\\xf8-\\xff",
        s = "A-Z\\xc0-\\xd6\\xd8-\\xde",
        o =
          "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
        r = "['’]",
        d = "[" + o + "]",
        u = "[" + l + "]",
        c = "[^" + i + o + "\\d+" + a + l + s + "]",
        f = "(?:\ud83c[\udde6-\uddff]){2}",
        h = "[\ud800-\udbff][\udc00-\udfff]",
        p = "[" + s + "]",
        E = "(?:" + u + "|" + c + ")",
        g = "(?:" + r + "(?:d|ll|m|re|s|t|ve))?",
        m = "(?:" + r + "(?:D|LL|M|RE|S|T|VE))?",
        S =
          "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\ud83c[\udffb-\udfff])?",
        v = "[\\ufe0e\\ufe0f]?",
        I =
          "(?:\\u200d(?:" +
          ["[^" + i + "]", f, h].join("|") +
          ")" +
          v +
          S +
          ")*",
        y = "(?:" + ["[" + a + "]", f, h].join("|") + ")" + (v + S + I),
        _ = RegExp(
          [
            p + "?" + u + "+" + g + "(?=" + [d, p, "$"].join("|") + ")",
            "(?:" +
              p +
              "|" +
              c +
              ")+" +
              m +
              "(?=" +
              [d, p + E, "$"].join("|") +
              ")",
            p + "?" + E + "+" + g,
            p + "+" + m,
            "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
            "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
            "\\d+",
            y,
          ].join("|"),
          "g"
        );
      e.exports = function (e) {
        return e.match(_) || [];
      };
    },
    208302: function (e, t, n) {
      var i = n("863398"),
        a = n("864979")(function (e, t, n) {
          return (t = t.toLowerCase()), e + (n ? i(t) : t);
        });
      e.exports = a;
    },
    863398: function (e, t, n) {
      var i = n("890305"),
        a = n("191986");
      e.exports = function (e) {
        return a(i(e).toLowerCase());
      };
    },
    109129: function (e, t, n) {
      n("781738");
      var i = n("954328"),
        a = n("890305"),
        l = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        s = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
      e.exports = function (e) {
        return (e = a(e)) && e.replace(l, i).replace(s, "");
      };
    },
    191986: function (e, t, n) {
      var i = n("568410")("toUpperCase");
      e.exports = i;
    },
    787191: function (e, t, n) {
      var i = n("698555"),
        a = n("899368"),
        l = n("890305"),
        s = n("711615");
      e.exports = function (e, t, n) {
        return ((e = l(e)), void 0 === (t = n ? void 0 : t))
          ? a(e)
            ? s(e)
            : i(e)
          : e.match(t) || [];
      };
    },
    142589: function (e, t, n) {
      "use strict";
      e.exports = n.p + "d01131fa55b9435bb356.svg";
    },
    484876: function (e, t, n) {
      "use strict";
      e.exports = n.p + "632bfacf52e640d0e889.svg";
    },
    719451: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          InviteResolvingHeader: function () {
            return N;
          },
          default: function () {
            return O;
          },
        }),
        n("70102");
      var i = n("37983"),
        a = n("884691"),
        l = n("446674"),
        s = n("77078"),
        o = n("770032"),
        r = n("653047"),
        d = n("233069"),
        u = n("813006"),
        c = n("766274"),
        f = n("697218"),
        h = n("953109"),
        p = n("580357"),
        E = n("124969"),
        g = n("587974"),
        m = n("158998"),
        S = n("49111"),
        v = n("238055"),
        I = n("91366"),
        y = n("782340"),
        _ = n("985551");
      let N = () =>
          (0, i.jsxs)(a.Fragment, {
            children: [
              (0, i.jsx)(E.Avatar, {
                src: null,
                size: s.AvatarSizes.DEPRECATED_SIZE_100,
                className: _.avatar,
              }),
              (0, i.jsx)(E.SubTitle, {
                children:
                  y.default.Messages
                    .INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN,
              }),
              (0, i.jsx)(E.Title, {
                className: _.inviteResolvingGuildName,
                children: y.default.Messages.LOADING,
              }),
            ],
          }),
        T = e => {
          let { guild: t, user: n, application: a, compact: l } = e;
          if (null != a)
            return (0, i.jsx)(h.default, {
              className: _.appIcon,
              game: a,
              size: _.appIconSize,
            });
          if (null != n)
            return (0, i.jsx)(E.Avatar, {
              src: null != n ? n.getAvatarURL(void 0, 80) : null,
              size: s.AvatarSizes.SIZE_80,
              className: l ? _.compactAvatar : _.avatar,
            });
          if (null != t)
            return (0, i.jsx)(g.default, {
              mask: g.default.Masks.SQUIRCLE,
              width: 64,
              height: 64,
              className: _.guildIcon,
              children: (0, i.jsx)(E.GuildIcon, {
                guild: t,
                size: E.GuildIcon.Sizes.LARGER,
                animate: !0,
              }),
            });
          else return null;
        };
      var O = e => {
        var t;
        let n,
          a,
          h,
          {
            invite: g,
            disableUser: N = !1,
            error: O,
            flatActivityCount: C = !1,
            isRegister: A = !1,
          } = e,
          { currentUser: x, multiAccounts: R } = (0,
          l.useStateFromStoresObject)([o.default, f.default], () => ({
            currentUser: f.default.getCurrentUser(),
            multiAccounts: o.default.getUsers(),
          }));
        if (null == g) return null;
        let M = null != g.guild ? new u.default(g.guild) : null,
          L =
            null != g.channel
              ? (0, d.createChannelRecordFromInvite)(g.channel)
              : null,
          D =
            null != g.target_application
              ? new r.default(g.target_application)
              : null,
          j = N || null == g.inviter ? null : new c.default(g.inviter),
          P =
            (null != g.approximate_member_count &&
              g.approximate_member_count > 100) ||
            (null != M && M.hasFeature(S.GuildFeatures.COMMUNITY)),
          b = !P && null != j,
          k = null,
          w = !1;
        if (null != M)
          (k =
            null == j
              ? y.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN
              : y.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
                  username: m.default.getFormattedName(j),
                })),
            g.target_type === I.InviteTargetTypes.STREAM &&
              null != g.target_user &&
              (k = y.default.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
                username: m.default.getFormattedName(g.target_user),
              })),
            g.target_type === I.InviteTargetTypes.EMBEDDED_APPLICATION &&
              null != g.target_application &&
              (k =
                null != j
                  ? y.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY_USERNAME.format(
                      { username: m.default.getFormattedName(j) }
                    )
                  : y.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY),
            b &&
              null == D &&
              (n = (0, i.jsx)(E.GuildIcon, {
                className: _.icon,
                guild: M,
                size: E.GuildIcon.Sizes.SMALL,
              })),
            (a = M.name),
            null != D &&
              ((a = D.name),
              (h = (0, i.jsxs)("div", {
                children: [
                  (0, i.jsx)(E.SubTitle, {
                    className: _.appIn,
                    children: y.default.Messages.EMBEDDED_ACTIVITIES_INVITE_IN,
                  }),
                  (0, i.jsxs)("div", {
                    className: _.guildContainer,
                    children: [
                      (0, i.jsx)(E.GuildIcon, {
                        guild: M,
                        size: E.GuildIcon.Sizes.SMALL,
                      }),
                      (0, i.jsx)(s.Text, {
                        tag: "span",
                        variant: "text-lg/normal",
                        color: "header-primary",
                        className: _.appGuildName,
                        children: M.name,
                      }),
                    ],
                  }),
                ],
              })));
        else if (null != L) {
          if (null == j) throw Error("no inviter in group DM invite");
          let e = m.default.getFormattedName(j);
          null != L.name && "" !== L.name
            ? ((k = y.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
                username: e,
              })),
              (a = L.name),
              null != L.icon &&
                (n = (0, i.jsx)(E.ChannelIcon, {
                  channel: L,
                  size: s.AvatarSizes.SIZE_32,
                })))
            : ((k =
                y.default.Messages
                  .INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM),
              (a = e));
        } else if (null != j) {
          let e = m.default.getFormattedName(j, !0);
          (a =
            y.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format(
              { username: e }
            )),
            (w = !0),
            (h =
              null != O
                ? null
                : (0, i.jsx)(E.SubTitle, {
                    className: _.directInviteSubTitle,
                    children: A
                      ? y.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION_REGISTER.format(
                          { username: e }
                        )
                      : y.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format(
                          { username: e }
                        ),
                  }));
        }
        return (0, i.jsxs)("div", {
          className: _.container,
          children: [
            (0, i.jsx)(T, {
              application: D,
              guild: M,
              user: b ? j : null,
              compact: w,
            }),
            null != O
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(E.SubTitle, {
                      children: y.default.Messages.INVITE_MODAL_ERROR_TITLE,
                    }),
                    (0, i.jsx)(E.Title, { children: O }),
                  ],
                })
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(E.SubTitle, { children: k }),
                    (0, i.jsxs)(E.Title, {
                      className: _.title,
                      children: [
                        null != M
                          ? (0, i.jsx)(p.default, {
                              guild: M,
                              className: _.guildBadge,
                              tooltipPosition: "left",
                            })
                          : null,
                        n,
                        a,
                      ],
                    }),
                  ],
                }),
            h,
            null != D ||
            w ||
            (null == g
              ? void 0
              : null === (t = g.guild) || void 0 === t
                ? void 0
                : t.id) === v.INVITE_ROUTING_HUB_GUILD_ID
              ? null
              : (0, i.jsx)(E.ActivityCount, {
                  className: _.activityCount,
                  online: g.approximate_presence_count,
                  total: g.approximate_member_count,
                  flat: C,
                }),
            R.length > 1 ? (0, i.jsx)(E.JoiningAs, { user: x }) : null,
          ],
        });
      };
    },
    634175: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var i = n("37983"),
        a = n("884691");
      class l extends a.PureComponent {
        render() {
          let {
            layout: e,
            layoutSize: t,
            className: n,
            renderWidget: a,
          } = this.props;
          return null != e
            ? (0, i.jsx)("div", {
                className: n,
                style: { width: t.width, height: t.height },
                children: e.widgets.map(e => a(e, t)),
              })
            : null;
        }
      }
      var s = l;
    },
    676665: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("170585");
      n.es(i, t);
    },
    436984: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("168535");
      n.es(i, t);
    },
    910340: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          makeAnalyticsTrackers: function () {
            return d;
          },
          getOverlayKeybind: function () {
            return u;
          },
        });
      var i = n("539405"),
        a = n("227602"),
        l = n("901165"),
        s = n("13798"),
        o = n("49111"),
        r = n("6791");
      function d(e, t) {
        return {
          trackView() {
            i.default.track(o.AnalyticEvents.NOTIFICATION_VIEWED, t),
              i.default.notificationEvent(
                e,
                r.OverlayNotificationAction.Viewed
              );
          },
          trackClick(n) {
            let a = l.default.isInstanceUILocked()
              ? o.AnalyticsLocations.LOCKED_OVERLAY
              : o.AnalyticsLocations.UNLOCKED_OVERLAY;
            i.default.track(o.AnalyticEvents.NOTIFICATION_CLICKED, {
              ...t,
              location: a,
              action_type: n,
            }),
              i.default.notificationEvent(
                e,
                r.OverlayNotificationAction.Clicked
              );
          },
        };
      }
      function u() {
        let e = a.default.getOverlayKeybind();
        return null != e
          ? (0, s.toString)(e.shortcut, !0).split(" + ")
          : ["???"];
      }
    },
    415635: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var i = n("823411"),
        a = n("539405"),
        l = n("415518"),
        s = n("189771"),
        o = n("910340"),
        r = n("6791"),
        d = n("782340");
      function u(e, t, n, u, c) {
        if (null == t.activity) return null;
        let f = t.activity.type,
          h = c.session_id;
        if (null == h) return null;
        let {
            icon: p,
            title: E,
            body: g,
          } = (0, s.makeTextChatNotification)(e, t, n),
          { trackView: m, trackClick: S } = (0, o.makeAnalyticsTrackers)(
            r.OverlayNotificationType.ActivityInvite,
            {
              notif_type: r.OverlayNotificationType.ActivityInvite,
              notif_user_id: n.id,
              message_id: t.id,
              message_type: t.type,
              guild_id: e.guild_id,
              channel_id: e.id,
              channel_type: e.type,
              activity_type: f,
              activity_name: c.name,
            }
          );
        return {
          colorScheme: l.default.ColorSchemes.PRIMARY,
          icon: p,
          title: E,
          body: g,
          hint: e =>
            (0, l.renderKeybindHint)(
              e,
              (0, o.getOverlayKeybind)(),
              d.default.Messages.OVERLAY_UNLOCK_TO_JOIN
            ),
          onNotificationShow: () => {
            m();
          },
          confirmText: d.default.Messages.JOIN,
          onConfirmClick: (l, s) => {
            i.default.join({
              userId: n.id,
              sessionId: h,
              applicationId: u.id,
              channelId: e.id,
              messageId: t.id,
            }),
              a.default.updateNotificationStatus(s),
              S("join");
          },
          onDismissClick: () => {
            S("dismiss");
          },
        };
      }
    },
    387129: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var i = n("415518"),
        a = n("315102"),
        l = n("910340"),
        s = n("49111"),
        o = n("6791"),
        r = n("782340");
      function d(e, t) {
        let n = e.username,
          d = r.default.Messages.USER_ACTIVITY_USER_JOIN.format({
            username: "",
          }),
          u = (0, a.getUserAvatarURL)(e),
          { trackView: c, trackClick: f } = (0, l.makeAnalyticsTrackers)(
            o.OverlayNotificationType.ActivityUserJoin,
            {
              notif_type: o.OverlayNotificationType.ActivityUserJoin,
              notif_user_id: e.id,
              activity_type: s.ActivityActionTypes.JOIN,
              activity_name: t.name,
            }
          );
        return {
          colorScheme: i.default.ColorSchemes.PRIMARY,
          icon: u,
          title: n,
          body: d,
          hint: e =>
            (0, i.renderSubtleHint)(
              e,
              r.default.Messages.USER_ACTIVITY_USER_JOIN_HINT
            ),
          onNotificationShow: () => {
            c();
          },
          onDismissClick: () => {
            f("dismiss");
          },
        };
      }
    },
    981253: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("77078"),
        l = n("539405"),
        s = n("415518"),
        o = n("910340"),
        r = n("49111"),
        d = n("6791"),
        u = n("782340"),
        c = n("415119");
      function f() {
        return (0, i.jsx)("div", {
          className: c.footer,
          children: (0, i.jsx)(a.Button, {
            color: a.Button.Colors.GREEN,
            size: a.Button.Sizes.SMALL,
            className: c.ctaButton,
            children: u.default.Messages.OVERLAY_NEWS_GO_LIVE_CTA,
          }),
        });
      }
      function h(e) {
        switch (e.type) {
          case d.OverlayNudgeTypes.GO_LIVE_VOICE: {
            let { game: t, voiceGuild: c } = e,
              { trackView: h, trackClick: p } = (0, o.makeAnalyticsTrackers)(
                d.OverlayNotificationType.GoLiveNudge,
                { notif_type: d.OverlayNotificationType.GoLiveNudge }
              );
            return {
              colorScheme: s.ColorSchemes.PRIMARY,
              icon: n("484876"),
              title: null,
              body: u.default.Messages.OVERLAY_NEWS_GO_LIVE_BODY.format({
                game: t.name,
                server: c.toString(),
              }),
              hint: () => (0, i.jsx)(f, {}),
              renderFooter: () => (0, i.jsx)(f, {}),
              onNotificationShow: () => {
                h();
              },
              onNotificationClick: (e, t) => {
                p("unlock"),
                  l.default.updateNotificationStatus(t),
                  l.default.setInstanceLocked(!1),
                  (0, a.openModalLazy)(async () => {
                    let { default: e } = await n
                      .el("451863")
                      .then(n.bind(n, "451863"));
                    return t =>
                      (0, i.jsx)(e, {
                        ...t,
                        selectSource: !1,
                        guildId: c.id,
                        analyticsLocation: r.AnalyticsLocations.OVERLAY_NUDGE,
                      });
                  });
              },
              onDismissClick: () => {
                p("dismiss");
              },
            };
          }
          case d.OverlayNudgeTypes.GO_LIVE_NON_VOICE: {
            let { game: t } = e,
              { trackView: c, trackClick: h } = (0, o.makeAnalyticsTrackers)(
                d.OverlayNotificationType.GoLiveNonVoiceNudge,
                { notif_type: d.OverlayNotificationType.GoLiveNonVoiceNudge }
              );
            return {
              colorScheme: s.ColorSchemes.PRIMARY,
              icon: n("484876"),
              title: null,
              body: u.default.Messages.OVERLAY_NEWS_GO_LIVE_BODY_NO_VOICE_CHANNEL.format(
                { game: t.name }
              ),
              hint: () => (0, i.jsx)(f, {}),
              renderFooter: () => (0, i.jsx)(f, {}),
              onNotificationShow: () => {
                c();
              },
              onNotificationClick: (e, t) => {
                h("unlock"),
                  l.default.updateNotificationStatus(t),
                  l.default.setInstanceLocked(!1),
                  (0, a.openModalLazy)(async () => {
                    let { default: e } = await n
                      .el("451863")
                      .then(n.bind(n, "451863"));
                    return t =>
                      (0, i.jsx)(e, {
                        ...t,
                        selectSource: !1,
                        selectGuild: !0,
                        analyticsLocation: r.AnalyticsLocations.OVERLAY_NUDGE,
                      });
                  });
              },
              onDismissClick: () => {
                h("dismiss");
              },
            };
          }
        }
      }
    },
    931237: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var i = n("561288"),
        a = n("539405"),
        l = n("843962"),
        s = n("679653"),
        o = n("27618"),
        r = n("697218"),
        d = n("415518"),
        u = n("910340"),
        c = n("49111"),
        f = n("6791"),
        h = n("782340");
      function p(e) {
        let t = (0, s.computeChannelName)(e, r.default, o.default),
          n = h.default.Messages.OVERLAY_NOTIFICATION_INCOMING_CALL,
          p = (0, l.getChannelIconURL)(e),
          { trackView: E, trackClick: g } = (0, u.makeAnalyticsTrackers)(
            f.OverlayNotificationType.IncomingCall,
            {
              notif_type: f.OverlayNotificationType.IncomingCall,
              notif_user_id: 1 === e.recipients.length ? e.recipients[0] : null,
              guild_id: e.guild_id,
              channel_id: e.id,
              channel_type: e.type,
            }
          );
        return {
          colorScheme: d.default.ColorSchemes.PRIMARY,
          icon: p,
          title: t,
          body: n,
          hint: e =>
            (0, d.renderKeybindHint)(
              e,
              (0, u.getOverlayKeybind)(),
              h.default.Messages.OVERLAY_UNLOCK_TO_ANSWER
            ),
          confirmText: h.default.Messages.JOIN_CALL,
          cancelText: h.default.Messages.DECLINE,
          onNotificationShow: () => {
            E();
          },
          onConfirmClick: () => {
            a.default.callPrivateChannel(e.id),
              g("join"),
              a.default.track(c.AnalyticEvents.VOICE_CHANNEL_SELECTED, {
                location: "Overlay Notificaiton",
                guild_id: null,
                channel_id: e.id,
                video_enabled: !1,
              });
          },
          onCancelClick: () => {
            i.default.stopRinging(e.id), g("decline");
          },
          onDismissClick: () => {
            g("dismiss");
          },
        };
      }
    },
    37359: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var i = n("260365"),
        a = n("539405"),
        l = n("267363"),
        s = n("901165"),
        o = n("415518"),
        r = n("910340"),
        d = n("49111"),
        u = n("6791"),
        c = n("782340");
      function f(e, t, n, f) {
        let h = t.username,
          p = c.default.Messages.USER_ACTIVITY_INVITE_REQUEST_REQUESTED.format({
            username: "",
            game: n.name,
          }),
          E = t.getAvatarURL(e.guild_id, 80),
          { trackView: g, trackClick: m } = (0, r.makeAnalyticsTrackers)(
            u.OverlayNotificationType.ActivityInvite,
            {
              notif_type: u.OverlayNotificationType.ActivityInvite,
              notif_user_id: t.id,
              activity_type: d.ActivityActionTypes.JOIN_REQUEST,
              activity_name: n.name,
            }
          );
        return {
          colorScheme: o.default.ColorSchemes.PRIMARY,
          icon: E,
          title: h,
          body: p,
          hint: e =>
            (0, o.renderKeybindHint)(
              e,
              (0, r.getOverlayKeybind)(),
              c.default.Messages.OVERLAY_UNLOCK_TO_ANSWER
            ),
          confirmText: c.default.Messages.USER_ACTIVITY_RESPOND_YEAH,
          cancelText: c.default.Messages.USER_ACTIVITY_RESPOND_NOPE,
          onNotificationShow: () => {
            g();
          },
          onConfirmClick: (t, n) => {
            i.default.sendActivityInvite({
              channelId: e.id,
              type: d.ActivityActionTypes.JOIN,
              activity: f,
              location: s.default.isInstanceUILocked()
                ? d.AnalyticsLocations.LOCKED_OVERLAY
                : d.AnalyticsLocations.UNLOCKED_OVERLAY,
            }),
              m("join"),
              a.default.updateNotificationStatus(n);
          },
          onCancelClick: (t, n) => {
            (0, l.ack)(e.id, !0, !0),
              a.default.updateNotificationStatus(n),
              m("decline");
          },
          onDismissClick: () => {
            m("dismiss");
          },
        };
      }
    },
    364864: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("539405"),
        l = n("393414"),
        s = n("189857"),
        o = n("901165"),
        r = n("415518"),
        d = n("189771"),
        u = n("709681"),
        c = n("910340"),
        f = n("49111"),
        h = n("6791"),
        p = n("782340");
      function E(e, t, n, E) {
        var g;
        let {
            icon: m,
            title: S,
            body: v,
          } = (0, d.makeTextChatNotification)(e, t, n),
          { trackView: I, trackClick: y } = (0, c.makeAnalyticsTrackers)(
            h.OverlayNotificationType.TextChat,
            {
              notif_type: h.OverlayNotificationType.TextChat,
              notif_user_id:
                null === (g = t.author) || void 0 === g ? void 0 : g.id,
              message_id: t.id,
              message_type: t.type,
              guild_id: e.guild_id,
              channel_id: e.id,
              channel_type: e.type,
            }
          );
        return {
          colorScheme: r.ColorSchemes.PRIMARY,
          icon: m,
          title: S,
          body: v,
          renderFooter: e =>
            e
              ? (0, i.jsx)("div", {
                  style: { textAlign: "center" },
                  children: p.default.Messages.OVERLAY_CLICK_TO_JUMP_TO_CHANNEL,
                })
              : null,
          maxBodyLines: 2,
          onNotificationShow: () => {
            E && (0, u.playSound)(s.MESSAGE_SOUND, s.MESSAGE_SOUND_VOLUME), I();
          },
          onNotificationClick: () => {
            (0, l.transitionTo)(f.Routes.CHANNEL(e.guild_id, e.id)),
              y("jump"),
              o.default.isInstanceUILocked() && a.default.setInstanceLocked(!1);
          },
          onDismissClick: () => {
            y("dismiss");
          },
        };
      }
    },
    523505: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("539405"),
        l = n("901165"),
        s = n("415518"),
        o = n("910340"),
        r = n("6791"),
        d = n("782340");
      let u = () => ({
          icon: n("307757"),
          title: d.default.Messages.OVERLAY_LAUNCH_TITLE,
          body: null,
          hint: c,
          colorScheme: s.ColorSchemes.PRIMARY,
          notifType: r.OverlayNotificationType.WelcomeNudge,
        }),
        c = e =>
          (0, s.renderKeybindHint)(
            e,
            (0, o.getOverlayKeybind)(),
            d.default.Messages.OVERLAY_LAUNCH_OPEN_TIP
          );
      function f(e) {
        let { type: t } = e,
          {
            icon: n,
            title: c,
            body: f,
            hint: h,
            colorScheme: p,
            notifType: E,
          } = (function (e, t) {
            if (t.type === r.OverlayNudgeTypes.NEWS) {
              var n, i, a, l, o, d, u, c;
              return {
                icon:
                  null !==
                    (o =
                      null === (n = t.news) || void 0 === n
                        ? void 0
                        : n.icon) && void 0 !== o
                    ? o
                    : e.icon,
                title:
                  null !==
                    (d =
                      null === (i = t.news) || void 0 === i
                        ? void 0
                        : i.title) && void 0 !== d
                    ? d
                    : e.title,
                body:
                  null !==
                    (u =
                      null === (a = t.news) || void 0 === a
                        ? void 0
                        : a.body) && void 0 !== u
                    ? u
                    : e.body,
                hint:
                  null !==
                    (c =
                      null === (l = t.news) || void 0 === l
                        ? void 0
                        : l.hint) && void 0 !== c
                    ? c
                    : e.hint,
                colorScheme:
                  null != t.news ? s.ColorSchemes.BRAND : e.colorScheme,
                notifType:
                  null != t.news
                    ? r.OverlayNotificationType.NewsNudge
                    : e.notifType,
              };
            }
            return e;
          })(u(), e),
          { trackView: g, trackClick: m } = (0, o.makeAnalyticsTrackers)(E, {
            notif_type: E,
          });
        return {
          colorScheme: p,
          icon: n,
          title: c,
          body: f,
          hint: h,
          renderFooter: () =>
            (0, i.jsx)("div", {
              style: { textAlign: "center", padding: 2 },
              children: d.default.Messages.OVERLAY_CLICK_TO_UNLOCK,
            }),
          onNotificationShow: () => {
            g();
          },
          onNotificationClick: (e, n) => {
            m("unlock"),
              t === r.OverlayNudgeTypes.NEWS &&
                a.default.updateNotificationStatus(n),
              l.default.isInstanceUILocked() && a.default.setInstanceLocked(!1);
          },
          onDismissClick: () => {
            m("dismiss");
          },
        };
      }
    },
    47271: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("77078"),
        l = n("539405"),
        s = n("990766"),
        o = n("910340"),
        r = n("415518"),
        d = n("774223"),
        u = n("162236"),
        c = n("6791"),
        f = n("782340");
      function h(e) {
        let { game: t } = e,
          { trackView: n, trackClick: h } = (0, o.makeAnalyticsTrackers)(
            c.OverlayNotificationType.StartBroadcastNotification,
            { notif_type: c.OverlayNotificationType.StartBroadcastNotification }
          );
        return {
          colorScheme: r.ColorSchemes.PRIMARY,
          title: null,
          body: f.default.Messages.START_BROADCAST_NOTIFICATION_BODY,
          icon: (0, i.jsx)(d.default, {}),
          renderFooter: () =>
            (0, i.jsx)(a.Button, {
              color: a.Button.Colors.GREEN,
              size: a.Button.Sizes.SMALL,
              fullWidth: !0,
              children: f.default.Messages.START_BROADCAST_NOTIFICATION_CTA,
            }),
          onNotificationShow: () => {
            n();
          },
          onNotificationClick: (e, n) => {
            h("unlock"),
              l.default.updateNotificationStatus(n),
              l.default.setInstanceLocked(!1),
              (0, u.openBroadcastingPrivacySettingsModal)(
                f.default.Messages.START_BROADCASTING,
                f.default.Messages.START_BROADCASTING_CTA,
                () => {
                  (0, s.createBroadcastChannelOrStartStream)({ pid: t.pid });
                }
              );
          },
          onDismissClick: () => {
            h("dismiss");
          },
        };
      }
    },
    969416: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          createClipsReminderNotification: function () {
            return h;
          },
          createClipsNotification: function () {
            return p;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("77078"),
        l = n("910340"),
        s = n("227602"),
        o = n("415518"),
        r = n("522049"),
        d = n("13798"),
        u = n("49111"),
        c = n("6791"),
        f = n("782340");
      function h() {
        let { trackView: e, trackClick: t } = (0, l.makeAnalyticsTrackers)(
            c.OverlayNotificationType.ClipsReminderNotification,
            { notif_type: c.OverlayNotificationType.ClipsReminderNotification }
          ),
          n = s.default.getKeybindForAction(u.GlobalKeybindActions.SAVE_CLIP);
        if (null == n) return null;
        let h = d.toString(n.shortcut, !0);
        return {
          colorScheme: o.ColorSchemes.PRIMARY,
          title: f.default.Messages.CLIPS_REMINDER_NOTIFICATION_TITLE.format({
            keybind: h,
            keybindHook: () =>
              (0, i.jsx)("span", {
                style: { display: "inline-block" },
                children: (0, i.jsx)(a.KeyCombo, { shortcut: h }),
              }),
          }),
          icon: (0, i.jsx)(r.default, {}),
          onNotificationShow: () => {
            e();
          },
          onDismissClick: () => {
            t("dismiss");
          },
        };
      }
      function p(e) {
        let { trackView: t, trackClick: n } = (0, l.makeAnalyticsTrackers)(
          c.OverlayNotificationType.ClipsNotification,
          { notif_type: c.OverlayNotificationType.ClipsNotification }
        );
        return {
          colorScheme: o.ColorSchemes.PRIMARY,
          title: e,
          icon: (0, i.jsx)(r.default, {}),
          onNotificationShow: () => {
            t();
          },
          onDismissClick: () => {
            n("dismiss");
          },
        };
      }
    },
    49040: function (e, t, n) {
      "use strict";
      function i(e) {
        var t;
        return null != e
          ? { id: e.id, name: null !== (t = e.name) && void 0 !== t ? t : "" }
          : null;
      }
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
    },
    238055: function (e, t, n) {
      "use strict";
      var i, a;
      n.r(t),
        n.d(t, {
          HubEmailConnectionSteps: function () {
            return i;
          },
          INVITE_ROUTING_HUB_GUILD_ID: function () {
            return l;
          },
        }),
        ((a = i || (i = {})).STUDENT_PROMPT = "STUDENT_PROMPT"),
        (a.VERIFY_EMAIL = "VERIFY_EMAIL"),
        (a.VERIFY_PIN = "VERIFY_PIN"),
        (a.SELECT_SCHOOL = "SELECT_SCHOOL"),
        (a.SELECT_SCHOOL_SEARCH = "SELECT_SCHOOL_SEARCH"),
        (a.SUBMIT_SCHOOL = "SUBMIT_SCHOOL"),
        (a.EMAIL_CONFIRMATION = "EMAIL_CONFIRMATION"),
        (a.EMAIL_WAITLIST = "EMAIL_WAITLIST");
      let l = "884924873015689226";
    },
    101698: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var i = n("6791");
      function a(e) {
        switch (e) {
          case i.OpacityBounds.BOTTOM:
            return i.OpacityBounds.BOTTOM;
          case i.OpacityBounds.LOWER:
            return i.OpacityBounds.LOWER;
          case i.OpacityBounds.UPPER:
            return i.OpacityBounds.UPPER;
          default:
            return i.OpacityBounds.TOP;
        }
      }
    },
    117026: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var i = n("6791");
      function a(e) {
        switch (e) {
          case i.OpacityBounds.BOTTOM:
            return i.BackgroundOpacityClasses.LOW;
          case i.OpacityBounds.LOWER:
            return i.BackgroundOpacityClasses.MEDIUM;
          case i.OpacityBounds.UPPER:
            return i.BackgroundOpacityClasses.HIGH;
          case i.OpacityBounds.TOP:
            return i.BackgroundOpacityClasses.FULL;
          default:
            return;
        }
      }
    },
    476427: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return y;
          },
        });
      var i = n("37983"),
        a = n("884691"),
        l = n("446674"),
        s = n("77078"),
        o = n("988738"),
        r = n("244201"),
        d = n("670984"),
        u = n("302537"),
        c = n("102999"),
        f = n("929479"),
        h = n("552067"),
        p = n("866681"),
        E = n("791106"),
        g = n("983782"),
        m = n("587974"),
        S = n("601415"),
        v = n("357506"),
        I = n("49111");
      n("551184"), n("762017"), l.default.initialize();
      var y = function () {
        return (
          a.useEffect(
            () => (
              f.default.initialize(),
              d.default.initialize(),
              p.default.init(),
              h.default.init(),
              () => {
                f.default.terminate(), d.default.terminate();
              }
            ),
            []
          ),
          (0, i.jsxs)(a.Fragment, {
            children: [
              (0, i.jsx)(u.default, {}),
              (0, i.jsx)(c.default, {
                children: (0, i.jsxs)(S.default, {
                  children: [
                    (0, i.jsx)(m.MaskLibrary, {}),
                    (0, i.jsx)(E.default, {}),
                    (0, i.jsx)(r.AppWindowContextProvider, {
                      appContext: I.AppContext.OVERLAY,
                      renderWindow: window,
                      children: (0, i.jsxs)(g.AppLayerProvider, {
                        children: [
                          (0, i.jsx)(v.default, {}),
                          (0, i.jsx)(s.Modals, {}),
                          (0, i.jsx)(o.default, {}),
                          (0, i.jsx)(g.AppLayerContainer, {}),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      };
    },
    878624: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var i = n("884691"),
        a = n("316693"),
        l = n("446674"),
        s = n("716241"),
        o = n("701916"),
        r = n("918105"),
        d = n("939398"),
        u = n("42203"),
        c = n("923959"),
        f = n("26989"),
        h = n("305961"),
        p = n("957255"),
        E = n("18494"),
        g = n("162771"),
        m = n("697218"),
        S = n("901165"),
        v = n("819068"),
        I = n("49111");
      class y extends i.Component {
        componentDidUpdate(e) {
          if (this.props.locked) return null;
          let {
            selectedGuild: t,
            selectedChannel: n,
            isMemberPending: i,
            hasPreviewEnabled: a,
            postableChannelCount: l,
          } = this.props;
          if (
            ((t !== e.selectedGuild || (i && !e.isMemberPending)) &&
              (0, d.trackWithOverlayMetadata)(I.AnalyticEvents.GUILD_VIEWED, {
                ...(i ? { is_pending: i, preview_enabled: a } : {}),
                postable_channels: l,
              }),
            null != n && n !== e.selectedChannel)
          ) {
            let e = (0, o.collectThreadMetadata)(u.default.getChannel(n), !0);
            (0, d.trackWithOverlayMetadata)(I.AnalyticEvents.CHANNEL_OPENED, {
              ...e,
              ...(0, s.getChannelOpenedMetadata)(n),
            }),
              (0, r.trackClickstream)(
                I.AnalyticEvents.CHANNEL_OPENED_CLICKSTREAM,
                { channelId: n }
              );
          }
        }
        render() {
          return null;
        }
      }
      var _ = l.default.connectStores(
        [
          g.default,
          E.default,
          h.default,
          m.default,
          S.default,
          c.default,
          p.default,
          f.default,
        ],
        () => {
          var e, t, n;
          let i = g.default.getGuildId(),
            l = E.default.getChannelId(i),
            s = h.default.getGuild(i),
            o = m.default.getCurrentUser(),
            r =
              null !==
                (t = c.default.getChannels(null == s ? void 0 : s.id)[
                  c.GUILD_SELECTABLE_CHANNELS_KEY
                ]) && void 0 !== t
                ? t
                : [],
            d =
              r.length > 0
                ? r.filter(e => {
                    let { channel: t } = e;
                    return p.default.can(
                      a.default.combine(
                        I.Permissions.SEND_MESSAGES,
                        I.Permissions.VIEW_CHANNEL
                      ),
                      t
                    );
                  }).length
                : 0,
            u =
              null != o &&
              null != i &&
              null !==
                (n =
                  null === (e = f.default.getMember(i, o.id)) || void 0 === e
                    ? void 0
                    : e.isPending) &&
              void 0 !== n &&
              n;
          return {
            selectedGuild: i,
            selectedChannel: l,
            locked: S.default.isUILocked((0, v.getPID)()),
            hasPreviewEnabled:
              null == s
                ? void 0
                : s.features.has(I.GuildFeatures.PREVIEW_ENABLED),
            isMemberPending: u,
            postableChannelCount: d,
          };
        }
      )(y);
    },
    483355: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        }),
        n("222007");
      var i,
        a,
        l = n("884691"),
        s = n("917351"),
        o = n.n(s),
        r = n("817736"),
        d = n("118810"),
        u = n("233736"),
        c = n("862337"),
        f = n("539405"),
        h = n("658530"),
        p = n("773336"),
        E = n("50885"),
        g = n("819068");
      let m = { x: 0, y: 0 },
        S = !1;
      function v(e) {
        let { clientX: t, clientY: n } = e;
        (S = !0), (m.x = t), (m.y = n);
      }
      let I = new Map();
      function y(e, t) {
        if (null == t)
          I.delete(e),
            0 === I.size &&
              (window.removeEventListener("mousemove", v), (S = !1));
        else {
          let n = I.get(e);
          if (null != n && (0, u.default)(n.zone, t.zone)) return;
          0 === I.size && window.addEventListener("mousemove", v), I.set(e, t);
        }
        if (p.isPlatformEmbedded) {
          if ((0, g.isOutOfProcess)())
            f.default.setClickZones(
              Array.from(I.values()).map(e => {
                let { zone: t } = e,
                  n = {
                    name: t.name,
                    left: t.left / window.innerWidth,
                    top: t.top / window.innerHeight,
                    right: t.right / window.innerWidth,
                    bottom: t.bottom / window.innerHeight,
                  };
                return n;
              })
            );
          else {
            let e = E.default.requireModule("discord_overlay2");
            e.broadcastCommand({
              message: "set_click_zones",
              zones: Array.from(I.values()).map(e => {
                let { zone: t } = e;
                return t;
              }),
            }),
              (function () {
                if (_) return;
                let e = E.default.requireModule("discord_overlay2");
                e.setClickZoneCallback((e, t, n) => {
                  let i = I.get(e);
                  null != i &&
                    (!S && ((m.x = t), (m.y = n)), i.instance.click());
                }),
                  (_ = !0);
              })();
          }
        }
      }
      let _ = !1;
      ((i = class extends l.PureComponent {
        componentDidMount() {
          this.props.observe ? this.observeZone() : this.updateZone();
        }
        componentWillUnmount() {
          this.interval.stop(), y(this.zone, null);
        }
        componentDidUpdate(e) {
          let { observe: t } = this.props;
          t !== e.observe && (t ? this.observeZone() : this.interval.stop());
        }
        render() {
          return l.Children.only(this.props.children);
        }
        observeZone() {
          this.updateZone(),
            this.interval.start(this.props.observeInterval, this.updateZone);
        }
        click() {
          let e = (0, h.createMouseEvent)("click", m.x, m.y);
          (0, h.dispatchEventToPoint)(e, m.x, m.y);
        }
        constructor(...e) {
          super(...e),
            (this.zone = o.uniqueId("ClickArea")),
            (this.interval = new c.Interval()),
            (this.updateZone = () => {
              let e = (0, r.findDOMNode)(this);
              if ((0, d.isElement)(e)) {
                let {
                  left: t,
                  top: n,
                  right: i,
                  bottom: a,
                } = e.getBoundingClientRect();
                y(this.zone, {
                  instance: this,
                  zone: {
                    name: this.zone,
                    left: Math.ceil(t),
                    top: Math.ceil(n),
                    right: Math.ceil(i),
                    bottom: Math.ceil(a),
                  },
                });
              }
            });
        }
      }).defaultProps = { observe: !0, observeInterval: 1e3 }),
        (a = i);
    },
    664980: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return w;
          },
        }),
        n("222007");
      var i = n("37983"),
        a = n("884691"),
        l = n("414456"),
        s = n.n(l),
        o = n("90915"),
        r = n("446674"),
        d = n("77078"),
        u = n("629109"),
        c = n("406189"),
        f = n("987317"),
        h = n("412026"),
        p = n("331306"),
        E = n("679653"),
        g = n("305961"),
        m = n("42887"),
        S = n("27618"),
        v = n("697218"),
        I = n("800762"),
        y = n("783419"),
        _ = n("145131"),
        N = n("293137"),
        T = n("272339"),
        O = n("200639"),
        C = n("849467"),
        A = n("97347"),
        x = n("560995"),
        R = n("962541"),
        M = n("762489"),
        L = n("49111"),
        D = n("782340"),
        j = n("233319"),
        P = n("194416");
      function b(e) {
        let { lobbyId: t } = e,
          n = (0, r.useStateFromStoresObject)([y.default], () => ({
            connectionState: y.default.getConnectionState(t),
            hostname: y.default.getHostname(t),
            averagePing: y.default.getAveragePing(t),
            lastPing: y.default.getLastPing(t),
            pings: y.default.getPings(),
            outboundLossRate: y.default.getOutboundLossRate(t),
          }));
        return (0, i.jsx)(p.default, { ...n });
      }
      class k extends a.PureComponent {
        handleDisconnect() {
          f.default.selectVoiceChannel(null);
        }
        renderLobby() {
          return (0, i.jsx)(M.default, {
            className: P.channel,
            children: D.default.Messages.LOBBY,
          });
        }
        renderChannelLink(e) {
          let { guild: t } = this.props,
            n = (0, E.computeChannelName)(e, v.default, S.default),
            a = null != t ? "".concat(n, " / ").concat(t.name) : n,
            l = null != t ? t.id : L.ME;
          return (0, i.jsx)(o.Link, {
            to: L.Routes.CHANNEL(l),
            onClick: t => {
              t.stopPropagation(), c.default.channelListScrollTo(l, e.id);
            },
            children: (0, i.jsx)(M.default, {
              className: P.channel,
              children: a,
            }),
          });
        }
        render() {
          let {
            className: e,
            contentClassName: t,
            pinned: n,
            lobbyId: a,
            channel: l,
            quality: o,
            lastPing: r,
            hasVideo: u,
            connectionState: c,
            deaf: f,
            mute: p,
          } = this.props;
          return null == l && null == a
            ? null
            : (0, i.jsx)(x.default.Bar, {
                className: s(e, j.controls, { [j.unpinned]: !n }),
                children: (0, i.jsxs)(x.default.Content, {
                  className: s(t, j.content),
                  dynamicSize: !0,
                  children: [
                    (0, i.jsx)("div", {
                      className: P.inner,
                      children: (0, i.jsx)(d.Popout, {
                        renderPopout: this.renderPopout,
                        position: "top",
                        children: e =>
                          (0, i.jsx)(d.Clickable, {
                            ...e,
                            children: (0, i.jsx)(h.default, {
                              statusTextClassName: P.statusWithPopout,
                              quality: o,
                              lastPing: r,
                              hasVideo: u,
                              state: c,
                              children:
                                null != l
                                  ? this.renderChannelLink(l)
                                  : this.renderLobby(),
                            }),
                          }),
                      }),
                    }),
                    (0, i.jsxs)(_.default, {
                      grow: 0,
                      children: [
                        (0, i.jsx)(R.default, {
                          tooltipText: p
                            ? D.default.Messages.UNMUTE
                            : D.default.Messages.MUTE,
                          icon: p ? A.default : C.default,
                          iconForeground: p ? j.strikethrough : null,
                          onClick: this.handleToggleSelfMute,
                        }),
                        (0, i.jsx)(R.default, {
                          tooltipText: f
                            ? D.default.Messages.UNDEAFEN
                            : D.default.Messages.DEAFEN,
                          icon: f ? O.default : T.default,
                          onClick: this.handleToggleSelfDeaf,
                          iconForeground: f ? j.strikethrough : null,
                        }),
                        null == a &&
                          (0, i.jsx)(R.default, {
                            tooltipText: D.default.Messages.DISCONNECT_SELF,
                            onClick: this.handleDisconnect,
                            icon: N.default,
                          }),
                      ],
                    }),
                  ],
                }),
              });
        }
        constructor(...e) {
          super(...e),
            (this.handleToggleSelfMute = () => {
              let { context: e } = this.props;
              u.default.toggleSelfMute({ context: e });
            }),
            (this.handleToggleSelfDeaf = () => {
              let { context: e } = this.props;
              u.default.toggleSelfDeaf({ context: e });
            }),
            (this.renderPopout = () => {
              let { lobbyId: e } = this.props;
              return (0, i.jsx)(b, { lobbyId: e });
            });
        }
      }
      function w(e) {
        let { context: t, lobbyId: n, channel: a, ...l } = e,
          s = (0, r.useStateFromStores)([g.default], () =>
            g.default.getGuild(null == a ? void 0 : a.getGuildId())
          ),
          o = (0, r.useStateFromStores)(
            [I.default],
            () => null != a && I.default.hasVideo(a.id)
          ),
          [d, u] = (0, r.useStateFromStoresArray)([m.default], () => [
            m.default.isSelfMute(t) || m.default.isSelfMutedTemporarily(t),
            m.default.isSelfDeaf(t),
          ]),
          [c, f, h] = (0, r.useStateFromStoresArray)([y.default], () => [
            y.default.getConnectionState(n),
            y.default.getLastPing(n),
            y.default.getQuality(n),
          ]);
        return (0, i.jsx)(k, {
          ...l,
          context: t,
          lobbyId: n,
          channel: a,
          guild: s,
          hasVideo: o,
          mute: d,
          deaf: u,
          connectionState: c,
          lastPing: f,
          quality: h,
        });
      }
    },
    601415: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return P;
          },
        }),
        n("222007"),
        n("860677");
      var i = n("37983"),
        a = n("884691"),
        l = n("414456"),
        s = n.n(l),
        o = n("917351"),
        r = n.n(o),
        d = n("88807"),
        u = n("558062"),
        c = n("432710"),
        f = n("77078"),
        h = n("539405"),
        p = n("121338"),
        E = n("155084"),
        g = n("393414"),
        m = n("415518"),
        S = n("720691"),
        v = n("560995"),
        I = n("718517"),
        y = n("286235"),
        _ = n("439932"),
        N = n("819068"),
        T = n("483355"),
        O = n("6791"),
        C = n("49111"),
        A = n("782340"),
        x = n("39105");
      let R = 10 * I.default.Millis.SECOND;
      function M() {
        let e = (0, N.getPID)(),
          t = (0, N.getRPCAuthToken)();
        (0, p.send)({
          type: C.OverlayEventTypes.DISPATCH,
          pid: e,
          token: t,
          payloads: [{ type: "OVERLAY_SET_INPUT_LOCKED", locked: !0, pid: e }],
        });
      }
      class L extends a.PureComponent {
        componentDidMount() {
          (this.notificationTimer = setTimeout(this.hideNotification, R)),
            h.default.track(C.AnalyticEvents.NOTIFICATION_VIEWED, {
              notif_type: O.OverlayNotificationType.OverlayCrashed,
            });
        }
        componentWillUnmount() {
          let { notificationTimer: e } = this;
          null != e && clearTimeout(e);
        }
        render() {
          let { info: e, error: t } = this.props,
            { showTrace: n } = this.state,
            { notificationTimer: a } = this;
          return null == a
            ? null
            : (0, i.jsx)(T.default, {
                observe: !1,
                children: (0, i.jsxs)(f.Clickable, {
                  className: s(
                    (0, _.getThemeClass)(C.ThemeTypes.DARK),
                    x.container
                  ),
                  onClick: e => e.stopPropagation(),
                  children: [
                    (0, i.jsx)(m.default, {
                      expand: !0,
                      colorScheme: m.ColorSchemes.DANGER,
                      icon: (0, i.jsx)(S.default, {
                        width: 40,
                        height: 40,
                        className: x.notificationIcon,
                      }),
                      title: A.default.Messages.OVERLAY_CRASHED_TITLE,
                      confirmText: A.default.Messages.OVERLAY_RELOAD,
                      onNotificationClick: this.handleNotificationClick,
                      onConfirmClick: this.handleReload,
                      onDismissClick: this.hideNotification,
                    }),
                    n && null != e
                      ? (0, i.jsxs)(v.default, {
                          className: x.stackTrace,
                          children: [
                            (0, i.jsx)(v.default.Bar, {
                              children: "Error Details",
                            }),
                            (0, i.jsx)(v.default.Content, {
                              className: x.stackTraceCode,
                              children: (0, i.jsx)("code", {
                                className: x.code,
                                children: (0, i.jsx)("pre", {
                                  children: t.stack,
                                }),
                              }),
                            }),
                          ],
                        })
                      : null,
                  ],
                }),
              });
        }
        constructor(...e) {
          super(...e),
            (this.state = { showTrace: !1, busy: !1 }),
            (this.hideNotification = () => {
              M();
              let { notificationTimer: e } = this;
              null != e && clearTimeout(e), (this.notificationTimer = null);
            }),
            (this.handleReload = e => {
              this.setState({ busy: !0 }),
                M(),
                h.default.track(
                  C.AnalyticEvents.NOTIFICATION_CLICKED,
                  {
                    notif_type: O.OverlayNotificationType.OverlayCrashed,
                    action_type: "reload",
                  },
                  !0
                ),
                e.stopPropagation(),
                setTimeout(() => location.reload(!0), 200);
            }),
            (this.handleNotificationClick = e => {
              e.stopPropagation();
              let { notificationTimer: t } = this;
              null != t && clearTimeout(t),
                e.shiftKey && this.setState({ showTrace: !0 });
            });
        }
      }
      let D = r.throttle(
        () => {
          E.default.increment(
            {
              name: c.MetricEvents.APP_CRASHED,
              tags: [
                "reason:".concat(d.AppCrashedReasons.UNHANDLED_JS_ERROR),
                "level:".concat(u.ErrorLevels.FATAL),
              ],
            },
            !0
          );
        },
        100,
        { trailing: !1 }
      );
      class j extends a.PureComponent {
        componentDidCatch(e, t) {
          let n = (0, g.getHistory)().location;
          this.setState({ error: e, info: t });
          let i = (0, N.getPID)(),
            a = (0, N.getRPCAuthToken)();
          (0, p.send)({
            type: C.OverlayEventTypes.DISPATCH,
            pid: (0, N.getPID)(),
            token: a,
            payloads: [
              { type: "OVERLAY_CRASHED", pid: i },
              { type: "OVERLAY_SET_INPUT_LOCKED", locked: !0, pid: i },
            ],
          }),
            setImmediate(() => window.addEventListener("click", M));
          let l = y.default.captureCrash(e, { extra: t });
          h.default.track(C.AnalyticEvents.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: l,
          }),
            D();
        }
        render() {
          let { children: e, className: t } = this.props,
            { error: n, info: a } = this.state;
          return null != n
            ? (0, i.jsx)(L, { error: n, info: a })
            : (0, i.jsx)("div", { className: t, children: e });
        }
        constructor(...e) {
          super(...e), (this.state = { error: null, info: null });
        }
      }
      var P = j;
    },
    233102: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
        }),
        n("222007");
      var i = n("37983"),
        a = n("884691"),
        l = n("414456"),
        s = n.n(l),
        o = n("446674"),
        r = n("696336"),
        d = n("162771"),
        u = n("959479"),
        c = n("560995"),
        f = n("246458"),
        h = n("637842"),
        p = n("890291"),
        E = n("758547"),
        g = n("782340"),
        m = n("369313");
      function S(e) {
        let { closePopout: t } = e;
        return (0, i.jsx)(h.default, { onClose: t });
      }
      class v extends a.PureComponent {
        render() {
          let { selectedGuildId: e, locked: t, contained: n } = this.props,
            a =
              null != e
                ? (0, i.jsx)(
                    f.default,
                    { guildId: e, onDragStart: this.onDragStart },
                    e
                  )
                : (0, i.jsx)(E.default, {
                    title: g.default.Messages.DIRECT_MESSAGES,
                    renderSettings: S,
                    onDragStart: this.onDragStart,
                    children: (0, i.jsx)(p.default, {}),
                  }),
            l = n ? "div" : c.default;
          return (0, i.jsxs)(l, {
            className: s(m.base, { [m.widget]: !n }),
            children: [
              (0, i.jsx)(r.default, {
                isOverlay: !0,
                disableAppDownload: !0,
                isVisible: !t,
              }),
              a,
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this.onDragStart = e => {
              let { dragStart: t } = this.props;
              t(u.Operations.MOVE, e.clientX, e.clientY);
            });
        }
      }
      v.defaultProps = { contained: !1 };
      var I = o.default.connectStores([d.default], () => ({
        selectedGuildId: d.default.getGuildId(),
      }))(v);
    },
    628480: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("560995"),
        l = n("233102"),
        s = n("440899"),
        o = n("983732");
      function r(e) {
        let { dragStart: t, dragging: n, pinned: r, locked: d } = e;
        return (0, i.jsxs)(a.default, {
          className: o.wrapper,
          children: [
            (0, i.jsx)(l.default, { contained: !0, dragStart: t, locked: d }),
            (0, i.jsx)(s.default, {
              dragStart: t,
              locked: d,
              pinned: r,
              dragging: n,
              contained: !0,
            }),
          ],
        });
      }
    },
    488777: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("414456"),
        l = n.n(a),
        s = n("446674"),
        o = n("696675"),
        r = n("780624"),
        d = n("77078"),
        u = n("227602"),
        c = n("849467"),
        f = n("97347"),
        h = n("13798"),
        p = n("49111"),
        E = n("589463");
      let g = {
        [p.GlobalKeybindActions.TOGGLE_MUTE]: {
          legacy: { slash: f.default, default: c.default },
          new: { slash: r.MicrophoneSlashIcon, default: o.MicrophoneIcon },
        },
      };
      function m(e) {
        let { value: t, action: n, shouldShow: a } = e,
          o = (0, s.useStateFromStores)([u.default], () =>
            u.default.getKeybindForAction(n, !1, !0)
          ),
          r = (0, d.useRedesignIconContext)().enabled;
        if (null == o || !a) return null;
        let c = h.toString(o.shortcut),
          f = r ? g[n].new : g[n].legacy,
          p = t ? f.slash : f.default;
        return (0, i.jsxs)("div", {
          className: E.keybindIndicator,
          children: [
            (0, i.jsx)(p, { className: E.keybindIcon, width: 16, height: 16 }),
            (0, i.jsx)(d.Text, {
              variant: "text-xxs/semibold",
              className: l(E.keybindIndicatorText),
              children: c,
            }),
          ],
        });
      }
    },
    827922: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useGetKeybindNotification: function () {
            return g;
          },
          default: function () {
            return m;
          },
        }),
        n("222007");
      var i = n("37983");
      n("884691");
      var a = n("151426"),
        l = n("77078"),
        s = n("539405"),
        o = n("910340"),
        r = n("235145"),
        d = n("415518"),
        u = n("849467"),
        c = n("999819"),
        f = n("6791"),
        h = n("994428"),
        p = n("782340"),
        E = n("372476");
      function g() {
        let [e, t] = (0, r.useGetDismissibleContent)([
            a.DismissibleContent.OVERLAY_KEYBIND_NOTIFICATION,
          ]),
          { showKeybindIndicators: n } = c.default.useExperiment(
            { location: "Overlay" },
            { autoTrackExposure: !1 }
          );
        return {
          showKeybindIndicators: null != e && n,
          dismissKeybindNotification: t,
        };
      }
      function m(e) {
        let { markAsDismissed: t } = e,
          { trackView: n, trackClick: a } = (0, o.makeAnalyticsTrackers)(
            f.OverlayNotificationType.KeybindIndicatorsNotification,
            {
              notif_type:
                f.OverlayNotificationType.KeybindIndicatorsNotification,
            }
          ),
          r = (0, i.jsxs)("div", {
            className: E.notificationBody,
            children: [
              (0, i.jsx)("div", {
                className: E.iconContainer,
                children: (0, i.jsx)(u.default, { height: 28, width: 28 }),
              }),
              (0, i.jsx)(l.Text, {
                variant: "text-sm/normal",
                children: p.default.Messages.KEYBIND_NOTIFICATION_DESCRIPTION,
              }),
            ],
          });
        return {
          icon: null,
          body: r,
          colorScheme: d.ColorSchemes.PRIMARY,
          onDismissClick: (e, n) => {
            a("dismiss"),
              t(h.ContentDismissActionType.DISMISS),
              s.default.updateNotificationStatus(n);
          },
          onNotificationShow: () => {
            t(h.ContentDismissActionType.AUTO_DISMISS), n();
          },
        };
      }
    },
    37207: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
        }),
        n("424973");
      var i = n("917351"),
        a = n.n(i),
        l = n("446674"),
        s = n("299285"),
        o = n("161454"),
        r = n("375202"),
        d = n("49040"),
        u = n("373469"),
        c = n("86878"),
        f = n("546463"),
        h = n("260320"),
        p = n("169602"),
        E = n("697218"),
        g = n("703370"),
        m = n("901165"),
        S = n("158998"),
        v = n("522019"),
        I = l.default.connectStores(
          [
            o.default,
            g.default,
            u.default,
            E.default,
            m.default,
            h.default,
            c.default,
            p.default,
            f.default,
            s.default,
          ],
          () => {
            var e, t;
            let n;
            let i = h.default
                .getLobbiesWithVoice()
                .find(e => null != c.default.getApplication(e.application_id)),
              l = [],
              v = "";
            if (null != i) {
              let e = c.default.getApplication(i.application_id);
              (null == e ? void 0 : e.name) != null && (v = e.name),
                (n = i.application_id),
                a.each(p.default.getVoiceStates(i.id), e => {
                  let t = E.default.getUser(e.userId);
                  null != t &&
                    l.push({
                      voiceState: e,
                      user: t,
                      nick: t.username,
                      comparator: S.default.getName(t),
                    });
                });
            }
            let I = (0, r.default)(o.default, g.default),
              y = u.default.getCurrentUserActiveStream(),
              _ = u.default.getStreamerActiveStreamMetadata();
            return {
              title: v,
              context: n,
              sortedVoiceStates: a.sortBy(l, e => {
                let { comparator: t } = e;
                return t;
              }),
              lobbyId: null != i ? i.id : void 0,
              displayUserMode: m.default.getDisplayUserMode(),
              displayNameMode: m.default.getDisplayNameMode(),
              avatarSizeMode: m.default.getAvatarSizeMode(),
              application:
                null != I
                  ? s.default.getApplication(
                      null !==
                        (t =
                          null === (e = f.default.getGameByGameData(I)) ||
                          void 0 === e
                            ? void 0
                            : e.id) && void 0 !== t
                        ? t
                        : ""
                    )
                  : null,
              streamApplication: (0, d.default)(I),
              stream: y,
              streamMetadata: _,
              hasStream: !1,
            };
          }
        )(v.VoiceWidget);
    },
    750549: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        }),
        n("222007");
      var i = n("37983"),
        a = n("884691"),
        l = n("458960"),
        s = n("539405"),
        o = n("415518"),
        r = n("483355"),
        d = n("49111"),
        u = n("850719");
      class Notification extends a.Component {
        componentWillAppear(e) {
          let { index: t } = this.props;
          e(), this.animateTo(t);
        }
        componentWillEnter(e) {
          let { index: t } = this.props;
          e(), this.animateTo(t);
        }
        componentWillLeave(e) {
          let { index: t } = this.props;
          this.animateTo(t, e);
        }
        componentDidUpdate(e) {
          let { index: t } = this.props;
          e.index !== t && this.animateTo(t);
        }
        animateTo(e, t) {
          let n, i, a, l;
          let { opacity: s, scale: o, translateX: r, translateY: d } = this;
          switch (e) {
            case 0:
              (i = 0), (a = 1), (l = 1);
              break;
            case 1:
              (i = 0.3), (a = 0.6), (l = 0.98);
              break;
            case 2:
              (i = 0.6), (a = 0.3), (l = 0.95);
              break;
            default:
              (i = 0.6), (a = 0), (l = 0.93);
          }
          null != t
            ? (0 === e ? (l = 1.1) : (i = 1.3), (a = 0), (n = t))
            : (n = this.handleAnimationEnd),
            r.setValue(1),
            d.setValue(i),
            o.setValue(l),
            s.setValue(a),
            n();
        }
        getStyle() {
          let e, t, n, i, a;
          let {
            opacity: l,
            scale: s,
            translateX: o,
            translateY: r,
            props: { position: u, zIndex: c },
          } = this;
          switch (u) {
            case d.OverlayNotificationPositions.TOP_LEFT:
            case d.OverlayNotificationPositions.BOTTOM_LEFT:
              (e = "-100%"), (t = 0);
              break;
            default:
              (n = 0), (e = "100%");
          }
          switch (u) {
            case d.OverlayNotificationPositions.BOTTOM_LEFT:
            case d.OverlayNotificationPositions.BOTTOM_RIGHT:
              i = 0;
              break;
            default:
              a = 0;
          }
          return {
            left: t,
            right: n,
            bottom: i,
            top: a,
            zIndex: c,
            opacity: l,
            transform: [
              {
                translateX: o.interpolate({
                  inputRange: [0, 1],
                  outputRange: [e, "0%"],
                }),
              },
              {
                translateY: r.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0px", "20px"],
                }),
              },
              { scale: s },
            ],
          };
        }
        render() {
          let {
              props: {
                locked: e,
                index: t,
                notification: {
                  props: {
                    onNotificationShow: n,
                    onDismissClick: a,
                    onNotificationClick: s,
                    onConfirmClick: d,
                    onCancelClick: c,
                    ...f
                  },
                },
              },
              state: { animatedIn: h },
            } = this,
            p = (0, i.jsx)(l.default.div, {
              className: u.animationContainer,
              style: this.getStyle(),
              children: (0, i.jsx)(o.default, {
                ...f,
                onNotificationShow:
                  h && 0 === t ? this.handleNotificationShow : null,
                onDismissClick: this.handleDismissClick,
                onNotificationClick:
                  null != s ? this.handleNotificationClick : null,
                onConfirmClick: null != d ? this.handleConfirmClick : null,
                onCancelClick: null != c ? this.handleCancelClick : null,
                expand: !e && 0 === t,
                disabled: 0 !== t,
              }),
            });
          return 0 === t
            ? (0, i.jsx)(r.default, { observeInterval: 200, children: p })
            : p;
        }
        constructor(...e) {
          super(...e),
            (this.translateX = new l.default.Value(0)),
            (this.translateY = new l.default.Value(0)),
            (this.scale = new l.default.Value(1)),
            (this.opacity = new l.default.Value(1)),
            (this.state = { animatedIn: !1 }),
            (this.handleNotificationShow = () => {
              let {
                id: e,
                props: { onNotificationShow: t },
              } = this.props.notification;
              t(e);
            }),
            (this.handleDismissClick = e => {
              let {
                id: t,
                props: { onDismissClick: n },
              } = this.props.notification;
              s.default.updateNotificationStatus(t), null != n && n(e, t);
            }),
            (this.handleNotificationClick = e => {
              let {
                id: t,
                props: { onNotificationClick: n },
              } = this.props.notification;
              null != n && n(e, t);
            }),
            (this.handleConfirmClick = e => {
              let {
                id: t,
                props: { onConfirmClick: n },
              } = this.props.notification;
              null != n && n(e, t);
            }),
            (this.handleCancelClick = e => {
              let {
                id: t,
                props: { onCancelClick: n },
              } = this.props.notification;
              null != n && n(e, t);
            }),
            (this.handleAnimationEnd = () => {
              let { animatedIn: e } = this.state;
              !e && this.setState({ animatedIn: !0 });
            });
        }
      }
      var c = Notification;
    },
    485415: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var i = n("37983"),
        a = n("884691"),
        l = n("414456"),
        s = n.n(l),
        o = n("446674"),
        r = n("266491"),
        d = n("786770"),
        u = n("901165"),
        c = n("750549"),
        f = n("49111"),
        h = n("72266");
      class p extends a.Component {
        render() {
          let {
            keybind: e,
            notifications: t,
            position: n,
            locked: a,
          } = this.props;
          if (n === f.OverlayNotificationPositions.DISABLED) return null;
          let l = -1;
          return (0, i.jsx)(r.default, {
            component: "div",
            className: s(h.container, h[n]),
            children: t.map(t =>
              a && t.status === f.OverlayNotificationStatus.TIMED_OUT
                ? null
                : ((l += 1),
                  (0, i.jsx)(
                    c.default,
                    {
                      index: l,
                      zIndex: 100 - l,
                      position: n,
                      notification: t,
                      keybind: e,
                      locked: a,
                    },
                    t.id
                  ))
            ),
          });
        }
      }
      var E = o.default.connectStores([d.default, u.default], () => ({
        notifications: d.default.getNotifications(),
        position: u.default.getNotificationPositionMode(),
      }))(p);
    },
    357506: function (e, t, n) {
      "use strict";
      let i;
      n.r(t),
        n.d(t, {
          default: function () {
            return ep;
          },
        }),
        n("424973");
      var a = n("37983"),
        l = n("884691"),
        s = n("414456"),
        o = n.n(s),
        r = n("499032"),
        d = n.n(r),
        u = n("483366"),
        c = n.n(u),
        f = n("969176"),
        h = n.n(f),
        p = n("446674"),
        E = n("77078"),
        g = n("404118"),
        m = n("272030"),
        S = n("539405"),
        v = n("304580"),
        I = n("175980"),
        y = n("485328"),
        _ = n("827792"),
        N = n("812204"),
        T = n("685665"),
        O = n("9759"),
        C = n("705565"),
        A = n("161454"),
        x = n("479788"),
        R = n("375202"),
        M = n("831773"),
        L = n("359477"),
        D = n("373469"),
        j = n("271938"),
        P = n("42203"),
        b = n("305961"),
        k = n("42887"),
        w = n("18494"),
        V = n("40597"),
        U = n("703370"),
        F = n("144747"),
        B = n("227602"),
        H = n("901165"),
        G = n("471671"),
        Y = n("145131");
      n("58608");
      var W = n("718517"),
        z = n("773336"),
        K = n("50885"),
        Z = n("13798"),
        X = n("819068"),
        J = n("999819"),
        q = n("878624"),
        Q = n("827922"),
        $ = n("485415"),
        ee = n("206496"),
        et = n("684325"),
        en = n("762243"),
        ei = n("265268"),
        ea = n("6791"),
        el = n("49111"),
        es = n("782340"),
        eo = n("939689");
      (p.default.PersistedStore.disableWrites = __OVERLAY__),
        p.default.initialize();
      let er = null;
      function ed(e) {
        e.preventDefault();
      }
      function eu(e) {
        (0, m.openContextMenuLazy)(e, async () => {
          let { default: e } = await n.el("562353").then(n.bind(n, "562353"));
          return t => (0, a.jsx)(e, { ...t });
        });
      }
      let ec = e => {
          let { keybind: t, onClick: n, isPreviewingInGame: i, locked: l } = e,
            s = l ? E.Clickable : "div";
          return (0, a.jsx)(s, {
            className: o(eo.overlayBackground, {
              [eo.overlayActive]: !l,
              [eo.overlayLocked]: l,
              [eo.previewMode]: !l && i,
            }),
            onMouseDown: e => {
              let { currentTarget: t, target: i, button: a } = e;
              a === el.MouseButtons.PRIMARY && t === i && n();
            },
            onContextMenu: eu,
            children: l
              ? null
              : (0, a.jsx)("div", {
                  className: eo.closeContainer,
                  children: (0, a.jsx)(v.default, {
                    variant: v.default.Variants.BOLD,
                    keybind: t,
                    closeAction: n,
                  }),
                }),
          });
        },
        ef = e => {
          let {
            keyCode: t,
            shiftKey: n,
            metaKey: i,
            altKey: a,
            ctrlKey: l,
          } = e;
          return { keyCode: t, shiftKey: n, metaKey: i, altKey: a, ctrlKey: l };
        };
      class eh extends l.Component {
        handleLock() {
          !(0, E.hasAnyModalOpen)() &&
            !F.default.isOpen() &&
            S.default.setLocked(!0, (0, X.getPID)());
        }
        handleDeactivate() {
          S.default.deactivateAllRegions();
        }
        componentDidMount() {
          S.default.startSession(),
            M.default.initialize(),
            _.default.initialize(),
            L.default.initialize();
        }
        componentDidUpdate(e) {
          let { initialized: t } = this.props;
          if (t) {
            if (t && !e.initialized) {
              this.initialSetup();
              return;
            }
            if (!e.locked && this.props.locked) {
              if (
                (window.addEventListener("contextmenu", ed, !1), null != er)
              ) {
                let e = Date.now() - er;
                S.default.track(el.AnalyticEvents.OVERLAY_LOCKED, {
                  unlocked_duration: e,
                }),
                  (er = null);
              }
              y.default.disable(),
                (this.activeKeyEventShapes = []),
                H.default.isPinned(el.OverlayWidgets.TEXT) &&
                  (y.default.setLayout(I.OVERLAY_LOCKED_LAYOUT),
                  y.default.enable());
            } else
              e.locked &&
                !this.props.locked &&
                (window.removeEventListener("contextmenu", ed, !1),
                null == er &&
                  ((er = Date.now()),
                  S.default.track(el.AnalyticEvents.OVERLAY_UNLOCKED)),
                y.default.disable(),
                (this.activeKeyEventShapes = []),
                y.default.setLayout(I.OVERLAY_LAYOUT),
                y.default.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes &&
              (this.lockEventShape = (0, Z.toBrowserEvents)(
                this.props.keybindKeyCodes
              ));
          }
        }
        initialSetup() {
          let {
            connectedToVoice: e,
            locked: t,
            canGoLive: n,
            isStreaming: i,
            voiceGuild: a,
            voiceChannelId: l,
            game: s,
            canStartBroadcast: o,
            canBroadcast: r,
            showKeybindNotification: d,
            dismissKeybindNotification: u,
          } = this.props;
          S.default.track(el.AnalyticEvents.OVERLAY_INITIALIZED, {
            voice_widget_connected: e,
            text_widget_connected: H.default.isPinned(el.OverlayWidgets.TEXT),
          }),
            J.default.trackExposure({ location: "Overlay" });
          let c = n && !i && null != s,
            f = e && null != a && null != l,
            h = { type: ea.OverlayNudgeTypes.WELCOME };
          if (
            (d
              ? (h = {
                  type: ea.OverlayNudgeTypes.KEYBIND_INDICATORS,
                  markAsDismissed: u,
                })
              : c && !e && o
                ? (O.default.trackExposure({
                    location: "overlay_notification",
                  }),
                  r && (h = { type: ea.OverlayNudgeTypes.BROADCAST, game: s }))
                : c && f
                  ? (h = {
                      type: ea.OverlayNudgeTypes.GO_LIVE_VOICE,
                      game: s,
                      voiceChannelId: l,
                      voiceGuild: a,
                    })
                  : c &&
                    (h = {
                      type: ea.OverlayNudgeTypes.GO_LIVE_NON_VOICE,
                      game: s,
                    }),
            S.default.overlayMounted(h),
            window.addEventListener("resize", this.handleWindowResize),
            t && window.addEventListener("contextmenu", ed, !1),
            z.isPlatformEmbedded)
          ) {
            let e = K.default.requireModule("discord_overlay2");
            void 0 !== e.setPerfInfoCallback &&
              (e.setPerfInfoCallback(e => {
                S.default.track(el.AnalyticEvents.OVERLAY_PERF_INFO, e);
              }),
              e.broadcastCommand({
                message: "set_perf_report_interval",
                interval: 15 * W.default.Millis.MINUTE,
              })),
              K.default.on("REQUEST_OPEN_EXTERNAL_URL", (e, t) => {
                H.default.getDisableExternalLinkAlert() ||
                t === V.default.getLastURL()
                  ? K.default.send("OPEN_EXTERNAL_URL", t)
                  : g.default.show({
                      title: es.default.Messages.OVERLAY_LINK_ALERT_TITLE,
                      body: es.default.Messages.OVERLAY_LINK_ALERT_BODY,
                      secondaryConfirmText:
                        es.default.Messages.OVERLAY_LINK_ALERT_SECONDARY,
                      confirmText: es.default.Messages.CONTINUE,
                      cancelText: es.default.Messages.CANCEL,
                      onConfirmSecondary: () => {
                        S.default.disableExternalLinkAlert(),
                          K.default.send("OPEN_EXTERNAL_URL", t);
                      },
                      onConfirm: () => K.default.send("OPEN_EXTERNAL_URL", t),
                    });
              });
          }
          window.addEventListener("keydown", this.onKeyDownGlobal, !0),
            window.addEventListener("keyup", this.onKeyUpGlobal, !0);
        }
        componentWillUnmount() {
          window.removeEventListener("resize", this.handleWindowResize),
            window.removeEventListener("keydown", this.onKeyDownGlobal, !0),
            window.removeEventListener("keyup", this.onKeyUpGlobal, !0),
            this.props.locked &&
              window.removeEventListener("contextmenu", ed, !1),
            M.default.terminate(),
            _.default.terminate(),
            L.default.terminate();
        }
        renderInvalidSizeMessage() {
          return (0, a.jsx)(Y.default, {
            justify: Y.default.Justify.CENTER,
            align: Y.default.Align.CENTER,
            className: eo.invalidContainer,
            children: (0, a.jsx)("div", {
              className: eo.inactiveContainer,
              children: es.default.Messages.OVERLAY_TOO_SMALL.format(
                X.OVERLAY_MIN_RESOLUTION
              ),
            }),
          });
        }
        render() {
          let {
              locked: e,
              keybind: t,
              incompatibleApp: n,
              initialized: l,
              isPreviewingInGame: s,
              activeRegions: r,
              windowSize: d,
              voiceGuild: u,
              voiceChannelId: c,
            } = this.props,
            { width: f, height: h } = d;
          if (0 === f || 0 === h || n || !l) return null;
          let p = e || s,
            E = j.default.getId();
          return (0, a.jsxs)("div", {
            className: eo.overlay,
            children: [
              (0, a.jsx)(et.default, {}),
              s &&
                (0, a.jsx)("header", {
                  className: eo.previewingInGameHeader,
                  children: es.default.Messages.OVERLAY_IN_GAME_PREVIEW_HEADER,
                }),
              i,
              (!e || r.has(el.OverlayActiveRegions.TEXT_WIDGET)) &&
                (0, a.jsx)(ec, {
                  locked: e,
                  keybind: t,
                  onClick: e ? this.handleDeactivate : this.handleLock,
                  isPreviewingInGame: s,
                }),
              (0, X.validResolution)(d)
                ? (0, a.jsx)(ee.default, {
                    className: o({
                      [eo.layoutLocked]: e,
                      [eo.layoutUnlocked]: !e,
                    }),
                  })
                : e
                  ? null
                  : this.renderInvalidSizeMessage(),
              (0, a.jsx)(ei.default, {}),
              null != u &&
                null != c &&
                (0, a.jsx)(en.default, {
                  streamerId: E,
                  guildId: u.id,
                  channelId: c,
                }),
              (0, a.jsx)($.default, { locked: p, keybind: t }),
              (0, a.jsx)(q.default, {}),
            ],
          });
        }
        constructor(e) {
          super(e),
            (this.handleWindowResize = () => {
              (0, X.isOutOfProcess)()
                ? this.forceUpdate()
                : c(() => {
                    this.forceUpdate();
                  }, 500);
            }),
            (this.activeKeyEventShapes = []),
            (this.lockEventShape = (0, Z.toBrowserEvents)(
              this.props.keybindKeyCodes
            )),
            (this.getActiveKeyEventIndex = e =>
              this.activeKeyEventShapes.findIndex(t => h(t, e))),
            (this.onKeyDownGlobal = e => {
              let t = ef(e),
                n = this.getActiveKeyEventIndex(t) > -1,
                i = [16, 17, 18, 91].includes(e.keyCode);
              !n && !i && this.activeKeyEventShapes.push(t);
              let a =
                this.activeKeyEventShapes.length ===
                  this.lockEventShape.length &&
                this.lockEventShape.every(e =>
                  this.activeKeyEventShapes.some(t => h(e, t))
                );
              a && (e.preventDefault(), e.stopPropagation());
              let { locked: l, activeRegions: s } = this.props;
              t.keyCode === d.codes.esc &&
                l &&
                s.has(el.OverlayActiveRegions.TEXT_WIDGET) &&
                S.default.deactivateAllRegions();
            }),
            (this.onKeyUpGlobal = e => {
              let t = ef(e),
                n = this.getActiveKeyEventIndex(t);
              n > -1 && this.activeKeyEventShapes.splice(n, 1);
            });
          let t = e.locked && H.default.isPinned(el.OverlayWidgets.TEXT);
          y.default.setLayout(t ? I.OVERLAY_LOCKED_LAYOUT : I.OVERLAY_LAYOUT),
            t && y.default.enable();
        }
      }
      function ep() {
        let {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: l,
          } = (0, p.useStateFromStoresObject)([H.default], () => ({
            locked: H.default.isUILocked((0, X.getPID)()),
            initialized: H.default.initialized,
            incompatibleApp: H.default.incompatibleApp,
            activeRegions: H.default.getActiveRegions(),
            isPreviewingInGame: H.default.isPreviewingInGame(),
          })),
          s = (0, p.useStateFromStores)([G.default], () =>
            G.default.windowSize()
          ),
          o = (0, p.useStateFromStores)([B.default], () =>
            B.default.getOverlayKeybind()
          ),
          r = (0, p.useStateFromStores)([w.default], () =>
            w.default.getVoiceChannelId()
          ),
          d = (0, p.useStateFromStores)([P.default], () =>
            P.default.getChannel(r)
          ),
          u = (0, p.useStateFromStores)([b.default], () =>
            null != d ? b.default.getGuild(d.guild_id) : null
          ),
          c = (0, p.useStateFromStores)([A.default, U.default], () =>
            (0, R.default)(A.default, U.default)
          ),
          f = (0, p.useStateFromStores)([k.default], () =>
            (0, x.default)(k.default)
          ),
          { canBroadcast: h } = O.default.useExperiment(
            { location: "overlay" },
            { autoTrackExposure: !1 }
          ),
          g = (0, C.default)() && null != c,
          m = (0, p.useStateFromStores)(
            [D.default],
            () => null != D.default.getCurrentUserActiveStream()
          ),
          { AnalyticsLocationProvider: S } = (0, T.default)(N.default.OVERLAY),
          { showKeybindIndicators: v, dismissKeybindNotification: I } = (0,
          Q.useGetKeybindNotification)();
        return (0, a.jsx)(S, {
          children: (0, a.jsx)(E.RedesignIconContextProvider, {
            children: (0, a.jsx)(eh, {
              locked: e,
              initialized: t,
              incompatibleApp: n,
              activeRegions: i,
              isPreviewingInGame: l,
              windowSize: s,
              keybind: null != o ? (0, Z.toString)(o.shortcut, !0) : "???",
              keybindKeyCodes: null != o ? o.shortcut : [],
              connectedToVoice: null != r,
              voiceChannelId: null != d ? d.id : null,
              voiceGuild: u,
              game: c,
              canGoLive: f,
              isStreaming: m,
              canBroadcast: h,
              canStartBroadcast: g,
              showKeybindNotification: v,
              dismissKeybindNotification: I,
            }),
          }),
        });
      }
    },
    206496: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        }),
        n("70102"),
        n("222007");
      var i = n("37983"),
        a = n("884691"),
        l = n("446674"),
        s = n("640583"),
        o = n("539405"),
        r = n("634175"),
        d = n("505507"),
        u = n("901165"),
        c = n("471671"),
        f = n("959479"),
        h = n("80687"),
        p = n("819068"),
        E = n("233102"),
        g = n("628480"),
        m = n("37207"),
        S = n("880584"),
        v = n("440899"),
        I = n("522019"),
        y = n("49111");
      let _ = {
        [y.OverlayWidgets.TEXT](e) {
          let { dragging: t, locked: n, pinned: a, dragStart: l } = e;
          return (0, i.jsx)(v.default, {
            dragStart: l,
            locked: n,
            pinned: a,
            dragging: t,
          });
        },
        [y.OverlayWidgets.GUILDS](e) {
          let { locked: t, dragStart: n } = e;
          return (0, i.jsx)(E.default, { dragStart: n, locked: t });
        },
        [y.OverlayWidgets.VOICE](e) {
          let {
            id: t,
            anchor: n,
            isPreviewingInGame: a,
            locked: l,
            pinned: s,
          } = e;
          return (0, i.jsx)(I.default, {
            anchor: n,
            id: t,
            locked: l,
            pinned: s,
            widget: y.OverlayWidgets.VOICE,
            isPreviewingInGame: a,
          });
        },
        [y.OverlayWidgets.GUILDS_TEXT](e) {
          let { dragging: t, locked: n, dragStart: a } = e;
          return (0, i.jsx)(g.default, {
            dragStart: a,
            dragging: t,
            locked: n,
            pinned: !1,
          });
        },
        [y.OverlayWidgets.LOBBY_VOICE](e) {
          let {
            id: t,
            anchor: n,
            isPreviewingInGame: a,
            locked: l,
            pinned: s,
          } = e;
          return (0, i.jsx)(m.default, {
            anchor: n,
            id: t,
            locked: l,
            pinned: s,
            widget: y.OverlayWidgets.LOBBY_VOICE,
            isPreviewingInGame: a,
          });
        },
      };
      class N extends a.PureComponent {
        componentDidUpdate(e) {
          this.props.locked &&
            !e.locked &&
            null != this.state.lastLayoutUpdate &&
            (o.default.track(
              y.AnalyticEvents.OVERLAY_LAYOUT_UPDATED,
              this.state.lastLayoutUpdate
            ),
            this.setState({ lastLayoutUpdate: null }));
        }
        renderWidget(e, t, n) {
          let {
              props: { locked: i, isPreviewingInGame: a },
              state: { dragging: l },
            } = this,
            s = _[e.type];
          if (null == s)
            throw Error("OverlayLayout: Widget does not exist in WidgetMap");
          return o =>
            s({
              id: e.id,
              locked: i,
              pinned: e.pinned,
              dragging: l,
              isPreviewingInGame: a,
              anchor: t,
              size: n,
              dragStart: o,
            });
        }
        render() {
          let {
            widget: e,
            widgetConfig: t,
            layoutSize: n,
            locked: a,
            isPreviewingInGame: l,
            isActiveRegion: s,
          } = this.props;
          if (null == e || null == t) return null;
          let { id: o, pinned: r, zIndex: d, size: u, anchor: c } = e,
            p = (0, h.getSizeFromLayoutSize)(u, n),
            E = (0, h.getAnchorCoordsFromLayoutSize)(c, n),
            { minSize: g, resizeX: m, resizeY: v, dragAnywhere: I } = t,
            y = (0, S.isWidgetContainerVisible)({
              locked: a,
              isPreviewingInGame: l,
              pinned: r,
            }),
            _ = { minX: 0, minY: 0, maxX: n.width, maxY: n.height };
          return (0, i.jsx)(f.default, {
            id: o,
            size: p,
            anchor: E,
            container: _,
            minSize: g,
            hidden: !y,
            resizeX: m,
            resizeY: v,
            style: { zIndex: d },
            dragAnywhere: I,
            active: !a || s,
            onUpdate: this.handleUpdate,
            onClick: this.handleFocus,
            onDragStart: this.handleDragStart,
            onDragEnd: this.handleDragEnd,
            children: this.renderWidget(e, E, p),
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = { lastLayoutUpdate: null, dragging: !1 }),
            (this.handleUpdate = (e, t, n, i, a) => {
              let {
                props: { layoutSize: l },
                state: { lastLayoutUpdate: o },
              } = this;
              if (!(0, p.validResolution)(l)) return;
              let r = (0, h.getAnchorPercentageFromLayoutSize)(n, l),
                u = (0, h.getSizePercentageFromSize)(i, l);
              (0, s.setTopWidget)(t), (0, s.setWidgetLayout)(t, r, u);
              let c = e === f.Operations.MOVE,
                E = (0, h.getFullCoordsFromAnchorCoords)(
                  n,
                  l.width,
                  l.height,
                  a.width,
                  a.height
                );
              this.setState({
                lastLayoutUpdate: {
                  was_resized: (null != o && o.was_resized) || !c,
                  was_dragged: (null != o && o.was_dragged) || c,
                  widget_type: d.default.getWidgetType(t),
                  window_width: l.width,
                  window_height: l.height,
                  widget_width: a.width,
                  widget_height: a.height,
                  widget_left: E.left,
                  widget_top: E.top,
                },
              });
            }),
            (this.handleFocus = e => {
              let { layoutSize: t } = this.props;
              (0, p.validResolution)(t) && (0, s.setTopWidget)(e);
            }),
            (this.handleDragStart = () => {
              let { widget: e } = this.props;
              null != e &&
                (e.pinned && o.default.setPreviewInGameMode(!0),
                this.setState({ dragging: !0 }));
            }),
            (this.handleDragEnd = () => {
              let { widget: e } = this.props;
              null != e &&
                (e.pinned && o.default.setPreviewInGameMode(!1),
                this.setState({ dragging: !1 }));
            });
        }
      }
      let T = l.default.connectStores([d.default, u.default], e => {
        let { widgetId: t } = e,
          n = d.default.getWidget(t),
          i = u.default.getActiveRegions();
        return {
          widget: n,
          widgetConfig: null != n ? d.default.getWidgetConfig(n.type) : null,
          locked: u.default.isInstanceUILocked(),
          isPreviewingInGame: u.default.isPreviewingInGame(),
          isActiveRegion:
            null != n &&
            n.type === y.OverlayWidgets.TEXT &&
            i.has(y.OverlayActiveRegions.TEXT_WIDGET),
        };
      })(N);
      function O(e, t) {
        return (0, i.jsx)(T, { widgetId: e, layoutSize: t }, e);
      }
      var C = l.default.connectStores([d.default, c.default], () => ({
        layout: d.default.getLayout(p.OVERLAY_LAYOUT_ID),
        layoutSize: c.default.windowSize(),
        renderWidget: O,
      }))(r.default);
    },
    880584: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          isWidgetContainerVisible: function () {
            return l;
          },
          dispatchOverlayWidgetIfChanged: function () {
            return s;
          },
          dispatchOverlayWidgetChanged: function () {
            return o;
          },
        });
      var i = n("913144"),
        a = n("703370");
      function l(e) {
        return (!e.isPreviewingInGame && !e.locked) || e.pinned;
      }
      function s(e, t, n) {
        (e.locked !== t.locked ||
          e.pinned !== t.pinned ||
          n(e) !== n(t) ||
          l(e) !== l(t)) &&
          o(t, n(t));
      }
      function o(e, t) {
        var n, s;
        let o = l(e),
          r = a.default.getGame();
        i.default.dispatch({
          type: "OVERLAY_WIDGET_CHANGED",
          gameName:
            null !== (n = null == r ? void 0 : r.name) && void 0 !== n
              ? n
              : null,
          gameId:
            null !== (s = null == r ? void 0 : r.id) && void 0 !== s ? s : null,
          widgetType: e.widget,
          visible: o && t,
          locked: e.locked,
          pinned: e.pinned,
        });
      }
    },
    684325: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var i = n("37983"),
        a = n("884691"),
        l = n("90915"),
        s = n("851387"),
        o = n("987317"),
        r = n("73749"),
        d = n("838857"),
        u = n("393414"),
        c = n("49111");
      class f extends a.Component {
        componentDidUpdate(e) {
          let { location: t } = this.props;
          t.pathname + t.search !== e.location.pathname + e.location.search &&
            this.checkGuildAndChannel();
        }
        checkGuildAndChannel() {
          let { match: e } = this.props;
          if (null == e) return;
          let {
            guildId: t,
            channelId: n,
            messageId: i,
          } = (function (e) {
            let { guildId: t, channelId: n, messageId: i } = e.params;
            return {
              guildId: null != t && "" !== t ? t : c.ME,
              channelId: n,
              messageId: i,
            };
          })(e);
          (0, d.isValidGuildId)(t) && (0, d.isValidChannelId)(n)
            ? (s.default.selectGuild(t),
              o.default.selectChannel({
                guildId: t,
                channelId: n,
                messageId: i,
              }))
            : (0, u.replaceWith)(c.Routes.ME);
        }
        render() {
          return null;
        }
      }
      var h = () =>
        (0, i.jsxs)(l.Switch, {
          children: [
            (0, i.jsx)(r.default, {
              path: c.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?"),
              component: f,
            }),
            (0, i.jsx)(r.default, { component: f }),
          ],
        });
    },
    762243: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var i = n("37983"),
        a = n("884691"),
        l = n("627445"),
        s = n.n(l),
        o = n("65597"),
        r = n("780166"),
        d = n("242260"),
        u = n("154891"),
        c = n("697218"),
        f = n("610189");
      function h(e) {
        let { streamerId: t, channelId: n } = e,
          l = a.useRef(null),
          r = (0, o.default)([c.default], () => c.default.getCurrentUser());
        return (
          s(null != r, "user cannot be null"),
          (0, u.default)(l, r, t, n),
          (0, i.jsx)("canvas", { className: f.canvas, ref: l })
        );
      }
      function p(e) {
        let { guildId: t, channelId: n, streamerId: a } = e,
          { isSharedCanvasEnabled: l } = r.default.useExperiment(
            { guildId: t, location: "f0d1b1_1" },
            { autoTrackExposure: !0 }
          ),
          s = (0, o.default)([d.default], () => d.default.visibleOverlayCanvas);
        return l && s
          ? (0, i.jsx)(h, { guildId: t, channelId: n, streamerId: a })
          : null;
      }
    },
    265268: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        }),
        n("222007");
      var i = n("37983");
      n("884691");
      var a = n("446674"),
        l = n("762993"),
        s = n("570413"),
        o = n("350501"),
        r = n("42203"),
        d = n("18494"),
        u = n("360782"),
        c = n("846325"),
        f = n("198043");
      function h() {
        let [e, t] = (0, a.useStateFromStoresArray)([l.default], () => [
            l.default.enabled,
            l.default.keepOpen,
          ]),
          n = (0, a.useStateFromStores)([d.default], () =>
            d.default.getVoiceChannelId()
          ),
          h = (0, a.useStateFromStores)(
            [r.default],
            () => r.default.getChannel(n),
            [n]
          ),
          p = null == h ? void 0 : h.getGuildId();
        return e && null != h
          ? (0, i.jsx)("div", {
              className: f.widget,
              children: (0, i.jsx)(o.default, {
                width: c.SoundboardWheelSize.width,
                height: c.SoundboardWheelSize.height,
                guildId: p,
                channel: h,
                keepOpen: t,
                onClose: function () {
                  let e = (0, u.default)();
                  null != e && (0, s.closeSoundboardInOverlay)(e);
                },
                analyticsSource: "overlay",
              }),
            })
          : null;
      }
    },
    440899: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return ea;
          },
        }),
        n("222007");
      var i = n("37983"),
        a = n("884691"),
        l = n("414456"),
        s = n.n(l),
        o = n("627445"),
        r = n.n(o),
        d = n("446674"),
        u = n("77078"),
        c = n("272030"),
        f = n("295426"),
        h = n("819689"),
        p = n("539405"),
        E = n("352674"),
        g = n("125667"),
        m = n("767993"),
        S = n("738073"),
        v = n("685888"),
        I = n("533466"),
        y = n("710216"),
        _ = n("348652"),
        N = n("306588"),
        T = n("850391"),
        O = n("149022"),
        C = n("228800"),
        A = n("681060"),
        x = n("884351"),
        R = n("818950"),
        M = n("529805"),
        L = n("685841"),
        D = n("42203"),
        j = n("474643"),
        P = n("247013"),
        b = n("305961"),
        k = n("377253"),
        w = n("18494"),
        V = n("162771"),
        U = n("697218"),
        F = n("227602"),
        B = n("901165"),
        H = n("959479"),
        G = n("62843"),
        Y = n("560995"),
        W = n("659500"),
        z = n("718422"),
        K = n("13798"),
        Z = n("117026"),
        X = n("880584"),
        J = n("839878"),
        q = n("6791"),
        Q = n("49111"),
        $ = n("782340"),
        ee = n("851525");
      let et = q.OpacityBounds.TOP;
      class en extends a.Component {
        componentDidUpdate(e) {
          e.channel.id !== this.props.channel.id &&
            this.draftDidChange(this.props),
            (this.props.channel !== e.channel ||
              (this.props.isTemporarilyActive && !e.isTemporarilyActive)) &&
              this.setState({ focused: !0 });
        }
        componentWillUnmount() {
          j.default.removeChangeListener(this.draftDidChange),
            W.ComponentDispatch.unsubscribe(
              Q.ComponentActions.TEXTAREA_FOCUS,
              this.focusInput
            ),
            W.ComponentDispatch.unsubscribe(
              Q.ComponentActions.TEXTAREA_BLUR,
              this.blurInput
            );
        }
        render() {
          let { channel: e, placeholder: t, ...n } = this.props,
            {
              focused: a,
              textValue: l,
              contentWarningProps: s,
              richValue: o,
            } = this.state,
            d = (0, i.jsx)(u.Popout, {
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
                  r(
                    null != s,
                    "ConnectedChannelTextArea.render - renderPopout: contentWarningProps cannot be null"
                  ),
                  (0, i.jsx)(m.default, { onClose: t, ...s })
                );
              },
              children: () =>
                (0, i.jsx)(A.default, {
                  ...n,
                  renderAttachButton: this.renderAttachButton,
                  channel: e,
                  type: T.ChatInputTypes.OVERLAY,
                  onFocus: () => this.setState({ focused: !0 }),
                  onBlur: () => this.setState({ focused: !1 }),
                  placeholder: t,
                  textValue: l,
                  richValue: o,
                  onSubmit: this.handleSendMessage,
                  onChange: this.handleTextareaChange,
                  onKeyDown: this.handleTextareaKeyDown,
                  focused: a,
                }),
            });
          return e.isPrivate()
            ? (0, i.jsx)(_.default, { channel: e, children: d }, e.id)
            : (0, i.jsx)(N.default, { channel: e, children: d }, e.id);
        }
        constructor(e) {
          var t;
          super(e),
            (t = this),
            (this.draftDidChange = function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : t.props,
                { textValue: n } = t.state,
                i = j.default.getDraft(
                  e.channel.id,
                  j.DraftType.ChannelMessage
                );
              n !== i && "" === i && t.setState((0, O.createState)(i));
            }),
            (this.handleTextareaKeyDown = e => {
              if (
                e.which === Q.KeyboardKeys.ARROW_UP &&
                !e.shiftKey &&
                !e.altKey &&
                !e.ctrlKey &&
                !e.metaKey &&
                0 === this.state.textValue.length
              ) {
                e.preventDefault();
                let { channel: t } = this.props,
                  n = k.default.getLastEditableMessage(t.id);
                null != n && h.default.startEditMessage(t.id, n.id, n.content);
              }
            }),
            (this.handleTextareaChange = (e, t, n) => {
              let {
                channel: { id: i },
              } = this.props;
              f.default.changeDraft(
                i,
                this.state.textValue,
                j.DraftType.ChannelMessage
              ),
                "" !== t ? E.default.startTyping(i) : E.default.stopTyping(i),
                this.setState({ textValue: t, richValue: n });
            }),
            (this.handleSendMessage = e => {
              let { value: t } = e,
                {
                  channel: n,
                  pendingReply: i,
                  isTemporarilyActive: a,
                } = this.props;
              return 0 === t.length
                ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                : (0, z.applyChatRestrictions)({
                    openWarningPopout: e =>
                      this.setState({ contentWarningProps: e }),
                    type: T.ChatInputTypes.OVERLAY,
                    content: t,
                    channel: n,
                  }).then(e => {
                    let { valid: l, failureReason: s } = e;
                    if (!l)
                      return s === Q.MessageRestrictionTypes.SLOWMODE_COOLDOWN
                        ? (W.ComponentDispatch.dispatch(
                            Q.ComponentActions.EMPHASIZE_SLOWMODE_COOLDOWN
                          ),
                          { shouldClear: !1, shouldRefocus: !0 })
                        : { shouldClear: !1, shouldRefocus: !1 };
                    let o = h.default.getSendMessageOptionsForReply(i);
                    return (h.default.sendMessage(
                      n.id,
                      x.default.parse(n, t),
                      !0,
                      o
                    ),
                    this.setState((0, O.createEmptyState)()),
                    (0, M.deletePendingReply)(n.id),
                    a)
                      ? (p.default.deactivateAllRegions(),
                        { shouldClear: !1, shouldRefocus: !1 })
                      : { shouldClear: !0, shouldRefocus: !0 };
                  });
            }),
            (this.focusInput = () => {
              this.setState({ focused: !0 });
            }),
            (this.blurInput = () => {
              this.setState({ focused: !1 });
            }),
            (this.renderAttachButton = (e, t) =>
              (0, i.jsx)(C.default, {
                className: t,
                channel: this.props.channel,
                draftType: j.DraftType.ChannelMessage,
                editorTextContent: this.state.textValue,
                setValue: e =>
                  this.handleTextareaChange(null, e, (0, O.toRichValue)(e)),
                canOnlyUseTextCommands: e,
              })),
            j.default.addChangeListener(this.draftDidChange);
          let n = j.default.getDraft(e.channel.id, j.DraftType.ChannelMessage);
          (this.state = {
            ...(0, O.createState)(n),
            focused: !1,
            contentWarningProps: null,
          }),
            W.ComponentDispatch.subscribe(
              Q.ComponentActions.TEXTAREA_FOCUS,
              this.focusInput
            ),
            W.ComponentDispatch.subscribe(
              Q.ComponentActions.TEXTAREA_BLUR,
              this.blurInput
            );
        }
      }
      class ei extends a.PureComponent {
        componentDidUpdate(e) {
          let { channel: t, activated: n } = this.props;
          (0, X.dispatchOverlayWidgetIfChanged)(
            e,
            this.props,
            this.shouldDisplay
          ),
            null != t &&
              n &&
              !e.activated &&
              p.default.track(Q.AnalyticEvents.OVERLAY_UNLOCKED, {
                channel_id: t.id,
                channel_type: t.type,
                guild_id: t.guild_id,
              });
        }
        componentDidMount() {
          (0, X.dispatchOverlayWidgetChanged)(this.props, this.shouldDisplay());
        }
        getOpacity() {
          let e;
          let {
            locked: t,
            activated: n,
            opacity: i,
            isPreviewingInGame: a,
          } = this.props;
          return (e =
            (t && !n) || a
              ? i / 100
              : n || !t
                ? Math.min(1, (i + 25) / 100)
                : Y.DEFAULT_OPACITY);
        }
        renderContent() {
          let e;
          let {
            channel: t,
            placeholder: n,
            nsfwAgree: l,
            guild: o,
            locked: r,
            activated: d,
            chatKeybind: u,
            pinned: c,
            isPreviewingInGame: f,
            dragging: h,
            pendingReply: p,
          } = this.props;
          if (null == t) return null;
          let E = r || f,
            m = !l && null != t && t.isNSFW(),
            v = !E || d;
          return (
            (e =
              m && null != o
                ? (0, i.jsx)(S.default, { guild: o })
                : (0, i.jsx)(
                    R.default,
                    {
                      channel: t,
                      className: ee.messages,
                      forceCompact: c,
                      showNewMessagesBar: !E,
                      scrollerClassName: c ? ee.scroller : void 0,
                      showingQuarantineBanner: !1,
                    },
                    t.id
                  )),
            (0, i.jsx)(G.MessagesInteractionContext.Provider, {
              value: {
                disableInteractions: c && r && !d,
                disableAnimations: c && E && !d,
              },
              children: (0, i.jsxs)(a.Fragment, {
                children: [
                  !r && !f && (0, i.jsx)(y.default, { channel: t, guild: o }),
                  (0, i.jsx)(Y.default.Background, {
                    opacityOverride: r || f ? null : et,
                    children: (0, i.jsx)("div", {
                      className: s(ee.messagesContainer, {
                        [ee.isDragging]: h,
                        [ee.disableHoverStates]: c && r && !d,
                      }),
                      children: e,
                    }),
                  }),
                  m
                    ? null
                    : (0, i.jsx)("div", {
                        children: v
                          ? (0, i.jsx)(Y.default.Background, {
                              opacityOverride: r || f ? null : et,
                              children: (0, i.jsxs)("div", {
                                className: ee.footerContent,
                                children: [
                                  (0, i.jsx)(en, {
                                    channel: t,
                                    placeholder: n,
                                    isTemporarilyActive: d,
                                    pendingReply: p,
                                  }),
                                  (0, i.jsx)("div", {
                                    className: ee.typingWrapper,
                                    children: (0, i.jsx)(g.default, {
                                      channel: t,
                                      className: ee.typing,
                                    }),
                                  }),
                                ],
                              }),
                            })
                          : (0, i.jsx)("div", {
                              className: ee.activateContainer,
                              children: (0, i.jsx)(Y.default.Background, {
                                opacityOverride: q.OpacityBounds.LOWER,
                                children: (0, i.jsx)("div", {
                                  className: s(
                                    ee.activateKeybind,
                                    ee.mediumBackgroundOpacity
                                  ),
                                  children:
                                    null != t.name && t.name.length > 0
                                      ? $.default.Messages.OVERLAY_CHANNEL_CHAT_HOTKEY.format(
                                          {
                                            keybind: u,
                                            channelName: t.isMultiUserDM()
                                              ? t.name
                                              : "#".concat(t.name),
                                          }
                                        )
                                      : $.default.Messages.OVERLAY_USER_CHAT_HOTKEY.format(
                                          { keybind: u }
                                        ),
                                }),
                              }),
                            }),
                      }),
                ],
              }),
            })
          );
        }
        renderWidgetWrapper(e) {
          let {
              locked: t,
              pinned: n,
              activated: a,
              isPreviewingInGame: l,
              opacity: o,
            } = this.props,
            r = Q.OverlayWidgetTypes.UNPINNED;
          a
            ? (r = Q.OverlayWidgetTypes.IN_GAME_ACTIVE)
            : (n && t) || l
              ? (r = Q.OverlayWidgetTypes.IN_GAME_TEXT)
              : n && (r = Q.OverlayWidgetTypes.PINNED);
          let d = (t && !a) || l,
            u = n && (d || a),
            c = n && a,
            f = n && d && !a,
            h = (0, Z.default)(o);
          return (0, i.jsx)(Y.default, {
            className: s(h, {
              [ee.widgetWrapper]: !n,
              [ee.widgetWrapperPinned]: n,
              [ee.locked]: f,
              [ee.inGame]: u,
              [ee.inGameActive]: c,
              [ee.pinned]: n,
              "overlay-unlocked": !t,
            }),
            type: r,
            opacity: o,
            children: e,
          });
        }
        renderContainedWrapper(e) {
          return (0, i.jsx)("div", { className: ee.contained, children: e });
        }
        shouldDisplay() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.props;
          return null != e.channel;
        }
        render() {
          let {
            locked: e,
            channel: t,
            pinned: n,
            isPreviewingInGame: l,
            contained: s,
          } = this.props;
          if (null == t || !this.shouldDisplay()) return null;
          let o = (0, i.jsxs)(a.Fragment, {
            children: [
              (0, i.jsx)(J.default, {
                draggableClassName: ee.draggableStartArea,
                className: ee.headerDefault,
                channel: t,
                locked: e,
                pinned: n,
                disableDragIndicator: s,
                isPreviewingInGame: l,
                handlePin: this.handlePin,
                onContextMenu: this.handleContextMenu,
                onMouseDown: this.moveDragStart,
              }),
              this.renderContent(),
              e || l
                ? null
                : (0, i.jsx)("div", {
                    className: ee.resizeIcon,
                    onMouseDown: this.resizeDragStart,
                  }),
            ],
          });
          return s
            ? this.renderContainedWrapper(o)
            : this.renderWidgetWrapper(o);
        }
        constructor(...e) {
          super(...e),
            (this.handlePin = () => {
              var e, t, n;
              let i = !this.props.pinned;
              p.default.track(Q.AnalyticEvents.OVERLAY_PIN_TOGGLED, {
                pinned: i,
                guild_id:
                  null === (e = this.props.channel) || void 0 === e
                    ? void 0
                    : e.guild_id,
                channel_id:
                  null === (t = this.props.channel) || void 0 === t
                    ? void 0
                    : t.id,
                channel_type:
                  null === (n = this.props.channel) || void 0 === n
                    ? void 0
                    : n.type,
                widget_type: Q.OverlayWidgets.TEXT,
              }),
                p.default.setPinChat(i);
            }),
            (this.handleContextMenu = e => {
              let { channel: t, user: a } = this.props;
              null != t &&
                null != a &&
                (0, c.openContextMenuLazy)(e, async () => {
                  let { default: e } = await n
                    .el("130074")
                    .then(n.bind(n, "130074"));
                  return n =>
                    (0, i.jsx)(e, {
                      ...n,
                      user: a,
                      channelSelected: !0,
                      channel: t,
                    });
                });
            }),
            (this.moveDragStart = e => {
              let { dragStart: t } = this.props;
              t(H.Operations.MOVE, e.clientX, e.clientY);
            }),
            (this.resizeDragStart = e => {
              let { dragStart: t } = this.props;
              t(H.Operations.RESIZE_SOUTH_EAST, e.clientX, e.clientY);
            });
        }
      }
      function ea(e) {
        let { contained: t = !1, ...n } = e,
          a = (0, d.useStateFromStores)([V.default], () =>
            V.default.getGuildId()
          ),
          l = (0, d.useStateFromStores)([w.default], () =>
            w.default.getChannelId(a)
          ),
          s = (0, d.useStateFromStores)([D.default], () =>
            D.default.getChannel(l)
          ),
          o = (0, d.useStateFromStores)([F.default], () =>
            F.default.getOverlayChatKeybind()
          ),
          r = null != o ? (0, K.toString)(o.shortcut, !0) : "]",
          [u, c, f] = (0, d.useStateFromStoresArray)([B.default], () => [
            B.default.getTextWidgetOpacity(),
            B.default.getActiveRegions(),
            !t && B.default.isPreviewingInGame(),
          ]),
          h = (0, d.useStateFromStores)([b.default], () =>
            b.default.getGuild(a)
          ),
          p = (0, d.useStateFromStores)(
            [P.default],
            () => null != a && P.default.didAgree(a)
          ),
          E = null != s && s.isPrivate() ? s.getRecipientId() : null,
          g = (0, d.useStateFromStores)([L.default], () =>
            null != l ? L.default.getPendingReply(l) : void 0
          ),
          m = (0, d.useStateFromStores)([U.default], () =>
            null != E ? U.default.getUser(E) : null
          ),
          { placeholder: S } = (0, v.default)(s);
        return null != s &&
          null != h &&
          Q.ChannelTypesSets.GUILD_THREADS_ONLY.has(s.type)
          ? (0, i.jsx)(I.default, {})
          : (0, i.jsx)(ei, {
              guild: h,
              channel: s,
              user: m,
              opacity: u,
              nsfwAgree: p,
              chatKeybind: r,
              activated: c.has(Q.OverlayActiveRegions.TEXT_WIDGET),
              isPreviewingInGame: f,
              pendingReply: g,
              contained: t,
              placeholder: S,
              widget: Q.OverlayWidgets.TEXT,
              ...n,
            });
      }
    },
    839878: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return D;
          },
        }),
        n("222007");
      var i = n("37983"),
        a = n("884691"),
        l = n("414456"),
        s = n.n(l),
        o = n("446674"),
        r = n("77078"),
        d = n("539405"),
        u = n("987317"),
        c = n("679653"),
        f = n("539938"),
        h = n("557809"),
        p = n("233069"),
        E = n("950104"),
        g = n("42203"),
        m = n("305961"),
        S = n("27618"),
        v = n("18494"),
        I = n("887657"),
        y = n("293137"),
        _ = n("945330"),
        N = n("673220"),
        T = n("960086"),
        O = n("519794"),
        C = n("393900"),
        A = n("560995"),
        x = n("423741"),
        R = n("782340"),
        M = n("871151");
      class L extends a.Component {
        componentDidUpdate() {
          this.props.locked &&
            this.state.showOpacitySlider &&
            this.setState({ showOpacitySlider: !1 });
        }
        renderCallButton() {
          let e, t;
          let {
            channel: n,
            channelHasActiveCall: a,
            userIsInChannelCall: l,
            isBlocked: s,
          } = this.props;
          if (!(0, p.isPrivate)(n.type)) return null;
          let o = I.default,
            d = !1;
          return (
            a
              ? l
                ? ((e = R.default.Messages.LEAVE_CALL), (o = y.default))
                : (e = R.default.Messages.JOIN_CALL)
              : s
                ? ((e = R.default.Messages.CALL_UNAVAILABLE_BLOCKED_USERS),
                  (t = r.Tooltip.Colors.RED),
                  (d = !0))
                : (e = R.default.Messages.START_VOICE_CALL),
            (0, i.jsx)(f.default.Icon, {
              icon: o,
              tooltip: e,
              onClick: this.handleClickCall,
              tooltipColor: t,
              disabled: d,
            })
          );
        }
        render() {
          let {
              className: e,
              draggableClassName: t,
              locked: n,
              channel: a,
              channelName: l,
              guild: o,
              onMouseDown: r,
              onContextMenu: d,
              isPreviewingInGame: u,
              disableDragIndicator: c,
            } = this.props,
            { showOpacitySlider: p } = this.state;
          return p && !n
            ? (0, i.jsxs)(A.default.Bar, {
                className: M.opacityHeader,
                children: [
                  (0, i.jsx)(x.default, {}),
                  (0, i.jsx)(f.default.Icon, {
                    icon: _.default,
                    onClick: this.handleCloseOpacitySettings,
                    tooltip: R.default.Messages.CLOSE,
                  }),
                ],
              })
            : (0, i.jsx)(A.default.Background, {
                opacityOverride: n || u ? null : 1,
                children: (0, i.jsx)("div", {
                  className: s(e, t, M.headerContainer),
                  onMouseDown: r,
                  onContextMenu: d,
                  children: (0, i.jsxs)(f.default, {
                    guildId: a.guild_id,
                    channelId: a.id,
                    toolbar: this.renderWidgetButtons(),
                    transparent: !0,
                    children: [
                      u || n || c
                        ? null
                        : (0, i.jsx)(N.default, {
                            className: s(M.dragIcon, t),
                            width: 20,
                            height: 20,
                          }),
                      (0, h.renderTitle)({ channel: a, channelName: l }),
                      n ? null : (0, h.renderTopic)(a, o),
                    ],
                  }),
                }),
              });
        }
        constructor(...e) {
          super(...e),
            (this.state = { showOpacitySlider: !1 }),
            (this.handleClickCall = e => {
              let {
                channel: t,
                userIsInChannelCall: n,
                channelHasActiveCall: i,
              } = this.props;
              if (i)
                n
                  ? u.default.selectVoiceChannel(null)
                  : d.default.callPrivateChannel(t.id, !1);
              else {
                let n = !i && !e.shiftKey;
                d.default.callPrivateChannel(t.id, n);
              }
            }),
            (this.handleOpenOpacitySettings = () => {
              let { pinned: e } = this.props;
              this.setState({ showOpacitySlider: !0 }),
                e && d.default.setPreviewInGameMode(!0);
            }),
            (this.handleCloseOpacitySettings = () => {
              let { pinned: e } = this.props;
              this.setState({ showOpacitySlider: !1 }),
                e && d.default.setPreviewInGameMode(!1);
            }),
            (this.handleMouseDown = e => {
              let { onMouseDown: t } = this.props;
              null != t && t(e);
            }),
            (this.renderWidgetButtons = () => {
              let { locked: e, handlePin: t, pinned: n } = this.props,
                l = n
                  ? R.default.Messages.OVERLAY_WIDGET_HIDE_IN_GAME
                  : R.default.Messages.OVERLAY_WIDGET_SHOW_IN_GAME;
              return e
                ? null
                : (0, i.jsxs)(a.Fragment, {
                    children: [
                      this.renderCallButton(),
                      n
                        ? (0, i.jsx)(f.default.Icon, {
                            icon: T.default,
                            tooltip:
                              R.default.Messages
                                .FORM_LABEL_OVERLAY_CHAT_OPACITY,
                            onClick: this.handleOpenOpacitySettings,
                          })
                        : null,
                      (0, i.jsx)(f.default.Icon, {
                        icon: n ? C.default : O.default,
                        tooltip: l,
                        selected: n,
                        onClick: t,
                      }),
                    ],
                  });
            });
        }
      }
      function D(e) {
        let { channel: t, ...n } = e,
          a = (0, o.useStateFromStores)([v.default, g.default], () => {
            let e = v.default.getVoiceChannelId();
            return g.default.getChannel(e);
          }),
          l = (0, o.useStateFromStores)([m.default], () =>
            m.default.getGuild(t.guild_id)
          ),
          s = (0, o.useStateFromStores)([E.default], () =>
            E.default.isCallActive(t.id)
          ),
          r = (0, c.default)(t),
          d = (0, o.useStateFromStores)(
            [S.default],
            () =>
              !!t.isDM() &&
              null != t.getRecipientId() &&
              S.default.isBlocked(t.getRecipientId())
          );
        return (0, i.jsx)(L, {
          channel: t,
          channelName: r,
          guild: l,
          channelHasActiveCall: s,
          userIsInChannelCall: null != a && a.id === t.id,
          isBlocked: d,
          ...n,
        });
      }
    },
    423741: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        }),
        n("222007");
      var i = n("37983"),
        a = n("884691"),
        l = n("446674"),
        s = n("77078"),
        o = n("539405"),
        r = n("901165"),
        d = n("476765"),
        u = n("101698"),
        c = n("6791"),
        f = n("49111"),
        h = n("782340"),
        p = n("46027");
      let E = Object.values(c.OpacityBounds).map(e => 100 * e),
        g = (0, d.uid)();
      class m extends a.PureComponent {
        handleUpdateBackgroundOpacity(e) {
          o.default.setTextWidgetOpacity((0, u.default)(e / 100)),
            o.default.track(f.AnalyticEvents.OVERLAY_SETTINGS_UPDATED, {
              text_opacity_slider: e,
            });
        }
        handlePreviewBackgroundOpacity(e) {
          o.default.setTextWidgetOpacity((0, u.default)(e / 100));
        }
        render() {
          return (0, i.jsxs)("div", {
            className: p.container,
            children: [
              (0, i.jsx)(s.FormTitle, {
                id: g,
                tag: s.FormTitleTags.H5,
                className: p.title,
                children: h.default.Messages.FORM_LABEL_OVERLAY_CHAT_OPACITY,
              }),
              (0, i.jsx)("div", {
                className: p.sliderContainer,
                children: (0, i.jsx)(s.Slider, {
                  mini: !0,
                  initialValue: this.initialValue,
                  defaultValue: this.initialValue,
                  minValue: E[0],
                  maxValue: E[E.length - 1],
                  handleSize: 10,
                  onValueChange: this.handleUpdateBackgroundOpacity,
                  asValueChanges: this.handlePreviewBackgroundOpacity,
                  markers: E,
                  onMarkerRender: f.NOOP,
                  equidistant: !0,
                  stickToMarkers: !0,
                  "aria-labelledby": g,
                }),
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e), (this.initialValue = 100 * this.props.opacity);
        }
      }
      var S = l.default.connectStores([r.default], () => ({
        opacity: r.default.getTextWidgetOpacity(),
      }))(m);
    },
    522019: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VoiceWidget: function () {
            return er;
          },
          default: function () {
            return ed;
          },
        }),
        n("222007");
      var i = n("37983"),
        a = n("884691"),
        l = n("414456"),
        s = n.n(l),
        o = n("446674"),
        r = n("669491"),
        d = n("769846"),
        u = n("77078"),
        c = n("272030"),
        f = n("640583"),
        h = n("539405"),
        p = n("990766"),
        E = n("899633"),
        g = n("442939"),
        m = n("679653"),
        S = n("161454"),
        v = n("374014"),
        I = n("560367"),
        y = n("293383"),
        _ = n("375202"),
        N = n("49040"),
        T = n("488464"),
        O = n("998716"),
        C = n("331759"),
        A = n("857398"),
        x = n("373469"),
        R = n("271938"),
        M = n("42203"),
        L = n("546463"),
        D = n("42887"),
        j = n("18494"),
        P = n("280168"),
        b = n("703370"),
        k = n("316133"),
        w = n("901165"),
        V = n("145131"),
        U = n("953109"),
        F = n("673220"),
        B = n("474571"),
        H = n("519794"),
        G = n("368121"),
        Y = n("985622"),
        W = n("393900"),
        z = n("258078"),
        K = n("560995"),
        Z = n("762489"),
        X = n("68148"),
        J = n("334572"),
        q = n("158998"),
        Q = n("819068"),
        $ = n("999819"),
        ee = n("664980"),
        et = n("488777"),
        en = n("880584"),
        ei = n("49111"),
        ea = n("353927"),
        el = n("782340"),
        es = n("724393");
      function eo(e) {
        let {
            flipped: t = !1,
            locked: n = !1,
            user: l,
            nick: r,
            displayNameMode: d,
            displayUserMode: u,
            size: c = ei.OverlayAvatarSizes.LARGE,
            onClick: f,
            onContextMenu: h,
            context: p,
            guildId: g,
            voiceState: m,
          } = e,
          { showKeybindIndicators: S } = $.default.useExperiment({
            location: "overlay_voice_widget",
          }),
          v = (0, o.useStateFromStores)(
            [w.default],
            () => w.default.showKeybindIndicators
          ),
          I = (0, o.useStateFromStores)([R.default], () => R.default.getId()),
          y = (0, o.useStateFromStores)([D.default], () =>
            D.default.isLocalMute(l.id)
          ),
          _ = (0, o.useStateFromStores)([x.default], () =>
            x.default.getCurrentUserActiveStream()
          ),
          N = (0, o.useStateFromStoresArray)([x.default], () =>
            null != _ ? x.default.getViewerIds(_) : []
          ),
          T = (0, E.default)({ userId: l.id, context: p }),
          O = (0, o.useStateFromStores)([P.default], () =>
            P.default.isPrioritySpeaker(l.id, p)
          ),
          C = (0, o.useStateFromStores)(
            [x.default],
            () => null != x.default.getStreamForUser(l.id, g)
          ),
          A = a.useMemo(
            () => null != _ && _.ownerId !== l.id && N.includes(l.id),
            [_, l.id, N]
          );
        if (u === ei.OverlayDisplayUsers.ONLY_WHILE_SPEAKING && n && !T)
          return null;
        let M = l.id === I,
          { mute: L, selfMute: j, suppress: b, deaf: k, selfDeaf: V } = m,
          U = S && v,
          F = j && (!M || !U);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(X.default, {
              guildId: g,
              onClick: n ? void 0 : e => (null == f ? void 0 : f(e, l)),
              onContextMenu: n ? void 0 : e => (null == h ? void 0 : h(e, l)),
              className: s(es.voiceUserWrapper, {
                [es.faded]: !T,
                [es.interactive]: !n,
              }),
              user: l,
              nick: r,
              speaking: !1,
              flipped: t,
              isStreaming: C,
              iconClassName: s(es.voiceIcon, { [es.locked]: n }),
              isWatching: A,
              size: c,
              priority: O,
              mute: L || F || y,
              localMute: y,
              serverMute: L || b,
              deaf: k || V,
              serverDeaf: k,
              userNameClassName: s(es.username, {
                [es.locked]: n,
                [es.hidden]:
                  n &&
                  (d === ei.OverlayDisplayNames.NEVER ||
                    (!T && d === ei.OverlayDisplayNames.ONLY_WHILE_SPEAKING)),
              }),
            }),
            M &&
              U &&
              (0, i.jsx)(et.default, {
                value: j,
                action: ei.GlobalKeybindActions.TOGGLE_MUTE,
                shouldShow: !L && !b,
              }),
          ],
        });
      }
      class er extends a.PureComponent {
        renderVoiceUsers() {
          let {
              context: e,
              sortedVoiceStates: t,
              displayNameMode: n,
              displayUserMode: a,
              locked: l,
              isPreviewingInGame: o,
              channel: r,
              anchor: u,
              avatarSizeMode: c,
            } = this.props,
            f = null != u.right,
            h = t.map(t => {
              var s;
              let { user: d, voiceState: u, member: h } = t;
              if (null == d || null == r || null == e) return null;
              let p = l || o;
              return (0, i.jsx)(
                eo,
                {
                  guildId: null == r ? void 0 : r.guild_id,
                  user: d,
                  nick:
                    null !== (s = null == h ? void 0 : h.nick) && void 0 !== s
                      ? s
                      : q.default.getName(d),
                  flipped: f,
                  voiceState: u,
                  displayNameMode: n,
                  displayUserMode: a,
                  size: c,
                  locked: p,
                  onContextMenu: this.handleUserContextMenu,
                  onClick: this.handleUserContextMenu,
                  context: e,
                },
                d.id
              );
            });
          return (0, i.jsx)(K.default.Body, {
            className: s({
              [d.default.VOICE_WIDGET_TOP_MARGIN]: l,
              [es.bottomMargin]: l,
            }),
            children: (0, i.jsx)(X.VoiceUserList, {
              className: es.voiceList,
              children: h,
            }),
          });
        }
        renderHeader() {
          let { pinned: e, title: t, isPreviewingInGame: n } = this.props;
          return (0, i.jsxs)(K.default.Bar, {
            className: s(es.draggableStartArea, { [es.preview]: n }),
            children: [
              (0, i.jsxs)(K.default.Content, {
                dynamicSize: !0,
                className: s(es.content, { [es.hidden]: n }),
                children: [
                  (0, i.jsx)(F.default, {
                    color: r.default.unsafe_rawColors.WHITE_500.css,
                    width: 20,
                    height: 20,
                    className: s(es.icon, es.faded, es.dragIcon),
                  }),
                  (0, i.jsx)(G.default, {
                    color: r.default.unsafe_rawColors.WHITE_500.css,
                    width: 20,
                    height: 20,
                    className: s(es.icon, es.faded, es.speakerIcon),
                  }),
                  (0, i.jsx)(z.default, {
                    color: r.default.unsafe_rawColors.PRIMARY_200.css,
                    className: es.title,
                    children: t,
                  }),
                ],
              }),
              n
                ? null
                : (0, i.jsx)(K.default.Icon, {
                    icon: B.default,
                    label: el.default.Messages.VOICE_SETTINGS,
                    onClick: this.handleOpenVoiceSettings,
                    tooltipPosition: "left",
                    size: 18,
                  }),
              n
                ? null
                : (0, i.jsx)(K.default.Icon, {
                    icon: e ? W.default : H.default,
                    label: e
                      ? el.default.Messages.OVERLAY_WIDGET_HIDE_IN_GAME
                      : el.default.Messages.OVERLAY_WIDGET_SHOW_IN_GAME,
                    onClick: this.handlePin,
                    tooltipPosition: "left",
                    size: 18,
                    isActive: e,
                  }),
            ],
          });
        }
        renderStreamerSettings() {
          var e;
          let {
            locked: t,
            pinned: n,
            isPreviewingInGame: a,
            channel: l,
            application: o,
            streamMetadata: r,
            streamApplication: d,
            stream: c,
          } = this.props;
          if (t || null == c || null == l) return null;
          let { sanitizedTitle: f, title: h } = (0, I.default)(r);
          return (0, i.jsx)(K.default.Bar, {
            className: s(es.streamerControls, {
              [es.hidden]: a,
              [es.unpinned]: !n,
            }),
            children: (0, i.jsxs)(K.default.Content, {
              className: es.streamerContent,
              dynamicSize: !0,
              children: [
                (0, i.jsxs)("div", {
                  className: es.streamerInner,
                  children: [
                    (null == d ? void 0 : d.id) != null &&
                    d.id === (null == o ? void 0 : o.id)
                      ? (0, i.jsx)(U.default, {
                          className: es.gameIcon,
                          game: o,
                        })
                      : (0, i.jsx)(y.default, { title: f }),
                    (0, i.jsxs)(V.default, {
                      direction: V.default.Direction.VERTICAL,
                      justify: V.default.Justify.BETWEEN,
                      className: es.streamerInfo,
                      children: [
                        (0, i.jsx)(u.Text, {
                          className: es.streaming,
                          variant: "text-sm/normal",
                          children: el.default.Messages.STATUS_STREAMING,
                        }),
                        (0, i.jsx)(Z.default, {
                          children:
                            null !== (e = null == d ? void 0 : d.name) &&
                            void 0 !== e
                              ? e
                              : h,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)(V.default, {
                  grow: 0,
                  children: [
                    (0, i.jsx)("div", {
                      className: es.streamerIconWrapper,
                      children: (0, i.jsx)(C.default, {
                        stream: c,
                        iconClassName: es.streamerIcon,
                        appContext: ei.AppContext.OVERLAY,
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: es.streamerIconWrapper,
                      children: (0, i.jsx)(A.default, {
                        stream: c,
                        appContext: ei.AppContext.OVERLAY,
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: es.streamerIconWrapper,
                      children: (0, i.jsx)(u.TooltipContainer, {
                        text: el.default.Messages.STOP_STREAMING,
                        children: (0, i.jsx)(u.Button, {
                          onClick: this.handleStopStream,
                          look: u.Button.Looks.BLANK,
                          size: u.Button.Sizes.NONE,
                          children: (0, i.jsx)(Y.default, {
                            className: es.streamerIcon,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        componentDidMount() {
          (0, en.dispatchOverlayWidgetChanged)(
            this.props,
            this.shouldDisplay()
          );
        }
        componentDidUpdate(e) {
          (0, en.dispatchOverlayWidgetIfChanged)(
            e,
            this.props,
            this.shouldDisplay
          );
        }
        shouldDisplay() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.props,
            {
              context: t,
              locked: n,
              pinned: i,
              sortedVoiceStates: a,
              channel: l,
            } = e;
          return 0 !== a.length && null != t && null != l && (!n || !!i) && !0;
        }
        render() {
          let {
            context: e,
            lobbyId: t,
            locked: n,
            pinned: a,
            isPreviewingInGame: l,
            channel: o,
          } = this.props;
          if (null == o || null == e || !this.shouldDisplay()) return null;
          let r = ei.OverlayWidgetTypes.UNPINNED;
          return (
            a && (r = ei.OverlayWidgetTypes.PINNED),
            l && (r = ei.OverlayWidgetTypes.IN_GAME_PREVIEW),
            n && (r = ei.OverlayWidgetTypes.IN_GAME),
            (0, i.jsxs)(K.default, {
              type: r,
              width: 280,
              children: [
                n ? null : this.renderHeader(),
                this.renderVoiceUsers(),
                this.renderStreamerSettings(),
                n
                  ? null
                  : (0, i.jsx)(ee.default, {
                      className: s({ [es.preview]: l }),
                      contentClassName: s({ [es.hidden]: l }),
                      channel: o,
                      lobbyId: t,
                      context: e,
                      pinned: a,
                    }),
              ],
            })
          );
        }
        constructor(...e) {
          super(...e),
            (this.handleUserContextMenu = (e, t) => {
              let { context: a } = this.props;
              (0, c.openContextMenuLazy)(e, async () => {
                let { default: e } = await n
                  .el("406784")
                  .then(n.bind(n, "406784"));
                return n =>
                  (0, i.jsx)(e, {
                    ...n,
                    user: t,
                    showMediaItems: !0,
                    mediaEngineContext: a,
                  });
              });
            }),
            (this.handleOpenVoiceSettings = () => {
              let { context: e, channel: t, title: a } = this.props;
              (0, u.openModalLazy)(async () => {
                let { default: l } = await n
                  .el("301450")
                  .then(n.bind(n, "301450"));
                return n =>
                  (0, i.jsx)(l, {
                    ...n,
                    mediaEngineContext: e,
                    title: null != t ? null : a,
                  });
              });
            }),
            (this.handlePin = () => {
              var e, t, n;
              let i = !this.props.pinned;
              h.default.track(ei.AnalyticEvents.OVERLAY_PIN_TOGGLED, {
                pinned: i,
                guild_id:
                  null === (e = this.props.channel) || void 0 === e
                    ? void 0
                    : e.guild_id,
                channel_id:
                  null === (t = this.props.channel) || void 0 === t
                    ? void 0
                    : t.id,
                channel_type:
                  null === (n = this.props.channel) || void 0 === n
                    ? void 0
                    : n.type,
                widget_type: ei.OverlayWidgets.VOICE,
              });
              let { id: a } = this.props;
              (0, f.togglePinned)(a);
            }),
            (this.handleStopStream = () => {
              let { stream: e } = this.props;
              null != e && p.stopStream((0, v.encodeStreamKey)(e));
            });
        }
      }
      er.defaultProps = { context: ea.MediaEngineContextTypes.DEFAULT };
      function ed(e) {
        var t;
        let n = (0, o.useStateFromStores)([j.default, M.default], () =>
            M.default.getChannel(j.default.getVoiceChannelId())
          ),
          l = (0, m.default)(n),
          s = (function (e) {
            let [t] = (0, o.useStateFromStores)(
                [k.default, T.default],
                () =>
                  null == e
                    ? [[], -1]
                    : e.isGuildStageVoice()
                      ? [
                          T.default.getMutableParticipants(
                            e.id,
                            O.StageChannelParticipantNamedIndex.SPEAKER
                          ),
                          T.default.getParticipantsVersion(e.id),
                        ]
                      : [
                          k.default.getVoiceStatesForChannel(e),
                          k.default.getVoiceStateVersion(e.getGuildId()),
                        ],
                [e],
                J.isVersionEqual
              ),
              n = (0, o.useStateFromStores)([R.default], () =>
                R.default.getId()
              ),
              { showKeybindIndicators: i } = $.default.useExperiment({
                location: "voice_widget",
              });
            return a.useMemo(() => {
              if (i) {
                let e = [...t];
                return e.sort((e, t) =>
                  e.user.id === n ? -1 : t.user.id === n ? 1 : 0
                );
              }
              return t;
            }, [t, n, i]);
          })(n),
          r = (0, o.useStateFromStores)([x.default], () =>
            x.default.getStreamerActiveStreamMetadata()
          ),
          d = (0, o.useStateFromStores)(
            [S.default, b.default, L.default],
            () => {
              var e;
              let t = (0, _.default)(S.default, b.default);
              return null != t
                ? null === (e = L.default.getGameByGameData(t)) || void 0 === e
                  ? void 0
                  : e.id
                : null;
            }
          ),
          u = (0, g.useGetOrFetchApplication)(d),
          c = (0, o.useStateFromStoresObject)(
            [S.default, b.default, x.default, w.default],
            () => {
              let e = (0, _.default)(S.default, b.default),
                t = x.default.getCurrentUserActiveStream();
              return {
                displayUserMode: w.default.getDisplayUserMode(),
                displayNameMode: w.default.getDisplayNameMode(),
                avatarSizeMode: w.default.getAvatarSizeMode(),
                streamApplication:
                  (null == r ? void 0 : r.pid) === (0, Q.getPID)()
                    ? (0, N.default)(e)
                    : null,
                stream: t,
              };
            }
          );
        return (0, i.jsx)(er, {
          ...c,
          application: u,
          ...e,
          sortedVoiceStates: s,
          channel: n,
          title: null != l ? l : "",
          streamMetadata: r,
          streamApplication:
            null !== (t = c.streamApplication) && void 0 !== t
              ? t
              : { id: null, name: null == r ? void 0 : r.sourceName },
        });
      }
    },
    246458: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return b;
          },
        }),
        n("222007");
      var i = n("37983"),
        a = n("884691"),
        l = n("907002"),
        s = n("446674"),
        o = n("77078"),
        r = n("575136"),
        d = n("534222"),
        u = n("120817"),
        c = n("637667"),
        f = n("934743"),
        h = n("393027"),
        p = n("870691"),
        E = n("816092"),
        g = n("162805"),
        m = n("245997"),
        S = n("923959"),
        v = n("952451"),
        I = n("305961"),
        y = n("957255"),
        _ = n("18494"),
        N = n("282109"),
        T = n("316133"),
        O = n("474571"),
        C = n("560995"),
        A = n("637842"),
        x = n("758547"),
        R = n("49111"),
        M = n("695838"),
        L = n("782340"),
        D = n("783866");
      let j = 54;
      class P extends a.PureComponent {
        static getDerivedStateFromProps(e) {
          let { guild: t } = e;
          return null == t || null == t.banner
            ? { renderBanner: !1, bannerVisible: !1 }
            : null;
        }
        componentDidMount() {
          let { guildId: e } = this.props,
            { scrollTop: t } = g.default.getGuildDimensions(e);
          this.setAnimatedValue(null != t ? t : 0);
        }
        componentDidUpdate(e) {
          let { guild: t, guildId: n } = this.props;
          if (e.guild !== t) {
            let { scrollTop: e } = g.default.getGuildDimensions(n);
            this.setAnimatedValue(null != e ? e : 0);
          }
        }
        renderSettings(e) {
          let { closePopout: t } = e;
          return (0, i.jsx)(A.default, { onClose: t });
        }
        setAnimatedValue(e) {
          let { guild: t } = this.props,
            n = null == t ? void 0 : t.hasCommunityInfoSubheader();
          null != t &&
            (null != t.banner || n) &&
            (null != t.banner
              ? this.setAnimatedValueForBanner(e)
              : this.setAnimatedValueForCommunityInfo(e));
        }
        setAnimatedValueForBanner(e) {
          let {
            renderBanner: t,
            communityInfoVisible: n,
            bannerVisible: i,
            controller: a,
          } = this.state;
          ((e >= j && i) || (e < j && !i)) && (i = !i),
            ((e >= 78 && !t) || (e < 78 && t)) && (t = !t),
            (n = i),
            (t !== this.state.renderBanner ||
              i !== this.state.bannerVisible ||
              n !== this.state.communityInfoVisible) &&
              this.setState({
                renderBanner: t,
                bannerVisible: i,
                communityInfoVisible: n,
              }),
            a
              .update({
                value: Math.min(1, Math.max(0, 1 - e / 78)),
                immediate: !0,
              })
              .start();
        }
        setAnimatedValueForCommunityInfo(e) {
          let { communityInfoVisible: t, controller: n } = this.state;
          ((e >= 20 && t) || (e < 20 && !t)) &&
            this.setState({ communityInfoVisible: !t }),
            n
              .update({
                value: Math.min(1, Math.max(0, 1 - e / 20)),
                immediate: !0,
              })
              .start();
        }
        render() {
          let { onDragStart: e, ...t } = this.props,
            { guild: n } = t,
            {
              controller: a,
              renderBanner: l,
              bannerVisible: s,
              communityInfoVisible: r,
            } = this.state,
            d =
              n.id === M.FAVORITES_RAW_GUILD_ID
                ? u.FavoritesChannelList
                : u.GuildChannelList;
          return (0, i.jsxs)(x.default, {
            header: (0, i.jsx)(c.default, {
              guild: n,
              controller: a,
              renderBanner: l,
              bannerVisible: s,
              className: D.guildHeader,
              headerClassName: D.guildHeaderInner,
              onMouseDown: e,
              disableBannerAnimation: !1,
              communityInfoVisible: r,
              children: (0, i.jsx)(o.Popout, {
                position: "right",
                renderPopout: this.renderSettings,
                children: e =>
                  (0, i.jsx)(C.default.Icon, {
                    icon: O.default,
                    label: L.default.Messages.SETTINGS,
                    ...e,
                  }),
              }),
            }),
            children: [
              (0, i.jsx)("div", {
                className: D.channelList,
                children: (0, i.jsx)(d, {
                  ...t,
                  guild: n,
                  disableManageChannels: !0,
                  onScroll:
                    null != n && null != n.banner ? this.handleScroll : null,
                }),
              }),
              (0, i.jsx)("section", {
                className: D.panels,
                "aria-label": L.default.Messages.ACCOUNT_A11Y_LABEL,
                children: (0, i.jsx)(f.default, { guildId: n.id }),
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = {
              controller: new l.Controller({ value: 1, immediate: !0 }),
              renderBanner: !1,
              bannerVisible: !1,
              communityInfoVisible: !1,
            }),
            (this.handleScroll = e => {
              let { scrollTop: t } = e;
              this.setAnimatedValue(t);
            });
        }
      }
      function b(e) {
        var t;
        let { guildId: n } = e,
          a = (0, s.useStateFromStores)([I.default], () =>
            I.default.getGuild(n)
          ),
          l = (0, s.useStateFromStores)([S.default], () =>
            S.default.getChannels(n)
          ),
          o = (0, s.useStateFromStores)([m.default], () =>
            m.default.getCategories(n)
          ),
          { mutedChannels: u, collapseMuted: c } = (0,
          s.useStateFromStoresObject)([N.default], () => ({
            mutedChannels: N.default.getMutedChannels(n),
            collapseMuted: N.default.isGuildCollapsed(n),
          })),
          f = (0, s.useStateFromStores)([T.default], () =>
            T.default.getVoiceStates(n)
          ),
          O = (0, s.useStateFromStores)([E.default], () =>
            E.default.getCollapsed()
          ),
          { scrollTo: C } = (0, s.useStateFromStores)([g.default], () =>
            g.default.getGuildDimensions(n)
          ),
          A = (0, h.default)(e => {
            let { channelId: t } = e;
            return t;
          }),
          x = (0, s.useStateFromStores)([_.default], () =>
            _.default.getVoiceChannelId()
          ),
          M = (0, s.useStateFromStores)([y.default], () =>
            y.default.getGuildVersion(n)
          ),
          L = (0, s.useStateFromStores)([p.default], () => p.default.version),
          D = (0, s.useStateFromStores)([v.default], () =>
            v.default.getGuildChangeSentinel(n)
          ),
          j = (0, r.useEmbeddedAppsByChannel)(null == a ? void 0 : a.id),
          b = (0, d.useActiveEventsByChannel)(null == a ? void 0 : a.id),
          k =
            null !==
              (t =
                null == a ? void 0 : a.hasFeature(R.GuildFeatures.COMMUNITY)) &&
            void 0 !== t &&
            t;
        return (0, i.jsx)(P, {
          guildId: n,
          guild: a,
          channels: l,
          categories: o,
          mutedChannels: u,
          scrollToChannel: C,
          selectedChannelId: A,
          selectedVoiceChannelId: x,
          voiceStates: f,
          collapsedChannels: O,
          collapseMuted: c,
          guildReadStateSentinel: D,
          permissionVersion: M,
          categoryCollapseVersion: L,
          embeddedAppsByChannel: j,
          activeEventsByChannel: b,
          showNewUnreadsBar: k,
          optInEnabled: !1,
        });
      }
    },
    637842: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return A;
          },
        }),
        n("222007");
      var i,
        a,
        l = n("37983"),
        s = n("884691"),
        o = n("446674"),
        r = n("77078"),
        d = n("539405"),
        u = n("368694"),
        c = n("227602"),
        f = n("901165"),
        h = n("145131"),
        p = n("314892"),
        E = n("50885"),
        g = n("13798"),
        m = n("999819"),
        S = n("49111"),
        v = n("782340"),
        I = n("233327"),
        y = n("890957");
      ((a = i || (i = {})).GENERAL = "GENERAL"),
        (a.VOICE = "VOICE"),
        (a.DEVELOPER = "DEVELOPER");
      let _ = () => [
          {
            value: S.OverlayAvatarSizes.LARGE,
            name: v.default.Messages.AVATAR_SIZE_OPTION_LARGE,
          },
          {
            value: S.OverlayAvatarSizes.SMALL,
            name: v.default.Messages.AVATAR_SIZE_OPTION_SMALL,
          },
        ],
        N = () => [
          {
            value: S.OverlayDisplayNames.ALWAYS,
            name: v.default.Messages.DISPLAY_OPTION_ALWAYS,
          },
          {
            value: S.OverlayDisplayNames.ONLY_WHILE_SPEAKING,
            name: v.default.Messages.DISPLAY_OPTION_ONLY_WHILE_SPEAKING,
          },
          {
            value: S.OverlayDisplayNames.NEVER,
            name: v.default.Messages.DISPLAY_OPTION_NEVER,
          },
        ],
        T = () => [
          {
            value: S.OverlayDisplayUsers.ALWAYS,
            name: v.default.Messages.DISPLAY_OPTION_ALWAYS,
          },
          {
            value: S.OverlayDisplayUsers.ONLY_WHILE_SPEAKING,
            name: v.default.Messages.DISPLAY_OPTION_ONLY_WHILE_SPEAKING,
          },
        ];
      function O() {
        let e = f.default.getNotificationPositionMode(),
          t = e !== S.OverlayNotificationPositions.DISABLED,
          n = c.default.getOverlayKeybind(),
          i = c.default.getOverlayChatKeybind();
        d.default.track(S.AnalyticEvents.OVERLAY_SETTINGS_UPDATED, {
          enabled: !0,
          notifications_enabled: t,
          notifications_position: t ? e : null,
          text_notifications_mode: f.default.getTextChatNotificationMode(),
          text_opacity_slider: f.default.getTextWidgetOpacity(),
          hotkey: null != n ? (0, g.toString)(n.shortcut) : null,
          text_activation_hotkey:
            null != i ? (0, g.toString)(i.shortcut) : null,
        });
      }
      class C extends s.PureComponent {
        componentDidMount() {
          d.default.track(S.AnalyticEvents.SETTINGS_PANE_VIEWED, {
            settings_type: "overlay",
            destination_pane: "OVERLAY SETTINGS",
            origin_pane: null,
          });
        }
        handleChangeNotificationPositionMode(e, t) {
          d.default.setNotificationPositionMode(t), O();
        }
        handleChangeAvatarSizeMode(e) {
          let { value: t } = e;
          d.default.setAvatarSizeMode(t);
        }
        handleChangeDisplayNameMode(e) {
          let { value: t } = e;
          d.default.setDisplayNameMode(t);
        }
        handleChangeDisplayUserMode(e) {
          let { value: t } = e;
          d.default.setDisplayUserMode(t);
        }
        renderHeader() {
          return (0, l.jsxs)(h.default, {
            direction: h.default.Direction.VERTICAL,
            grow: 0,
            shrink: 0,
            className: I.header,
            children: [
              (0, l.jsxs)(h.default, {
                children: [
                  (0, l.jsx)(r.FormTitle, {
                    className: I.headerTitle,
                    tag: "h1",
                    children: v.default.Messages.OVERLAY_SETTINGS_TITLE,
                  }),
                  (0, l.jsx)(r.ModalCloseButton, {
                    className: I.headerClose,
                    onClick: this.props.onClose,
                  }),
                ],
              }),
              this.renderTabBar(),
            ],
          });
        }
        renderTabBar() {
          let { selectedSection: e } = this.state,
            t = u.default.isDeveloper
              ? (0, l.jsx)(r.TabBar.Item, {
                  id: "DEVELOPER",
                  className: I.tabBarItem,
                  children: "Developer",
                })
              : null;
          return (0, l.jsxs)(r.TabBar, {
            selectedItem: e,
            type: "top",
            className: I.tabBar,
            onItemSelect: this.handleSelectSection,
            children: [
              (0, l.jsx)(r.TabBar.Item, {
                id: "GENERAL",
                className: I.tabBarItem,
                children: v.default.Messages.OVERLAY_SETTINGS_GENERAL_TAB,
              }),
              (0, l.jsx)(r.TabBar.Item, {
                id: "VOICE",
                className: I.tabBarItem,
                children: v.default.Messages.OVERLAY_SETTINGS_VOICE_TAB,
              }),
              t,
            ],
          });
        }
        renderBody() {
          let e;
          let { selectedSection: t } = this.state;
          switch (t) {
            case "DEVELOPER":
              e = this.renderDeveloperSettings();
              break;
            case "VOICE":
              e = this.renderVoiceSettings();
              break;
            default:
              e = this.renderGeneralSettings();
          }
          return (0, l.jsx)(
            r.ModalContent,
            { className: I.content, children: e },
            t
          );
        }
        renderGeneralSettings() {
          let {
              textChatNotificationMode: e,
              notificationPositionMode: t,
              shouldShowKeybindIndicators: n,
              showKeybindIndicators: i,
            } = this.props,
            a = t !== S.OverlayNotificationPositions.DISABLED;
          return (0, l.jsxs)(s.Fragment, {
            children: [
              (0, l.jsx)(r.FormItem, {
                title: v.default.Messages.FORM_LABEL_NOTIFICATION_POSITION,
                className: y.marginBottom20,
                children: (0, l.jsx)(p.default, {
                  position: t,
                  onChange: this.handleChangeNotificationPositionMode,
                }),
              }),
              (0, l.jsx)(r.FormSwitch, {
                value: a && e === S.OverlayNotificationTextChatTypes.ENABLED,
                onChange: this.handleToggleTextChatNotifications,
                disabled: !a,
                hideBorder: !0,
                children:
                  v.default.Messages.FORM_LABEL_OVERLAY_TEXT_CHAT_NOTIFICATIONS,
              }),
              i &&
                (0, l.jsx)(r.FormSwitch, {
                  value: n,
                  onChange: e => d.default.setShowKeybindIndicators(e),
                  hideBorder: !0,
                  children:
                    v.default.Messages
                      .FORM_LABEL_OVERLAY_SHOW_MUTE_DEAFEN_KEYBINDS,
                }),
            ],
          });
        }
        renderVoiceSettings() {
          let {
            avatarSizeMode: e,
            displayNameMode: t,
            displayUserMode: n,
          } = this.props;
          return (0, l.jsxs)(s.Fragment, {
            children: [
              (0, l.jsx)(r.FormItem, {
                title: v.default.Messages.FORM_LABEL_AVATAR_SIZE,
                className: y.marginBottom20,
                children: (0, l.jsx)(r.RadioGroup, {
                  onChange: this.handleChangeAvatarSizeMode,
                  options: _(),
                  value: e,
                  size: r.RadioGroup.Sizes.SMALL,
                }),
              }),
              (0, l.jsx)(r.FormItem, {
                title: v.default.Messages.FORM_LABEL_DISPLAY_NAMES,
                className: y.marginBottom20,
                children: (0, l.jsx)(r.RadioGroup, {
                  onChange: this.handleChangeDisplayNameMode,
                  options: N(),
                  value: t,
                  size: r.RadioGroup.Sizes.SMALL,
                }),
              }),
              (0, l.jsx)(r.FormItem, {
                title: v.default.Messages.FORM_LABEL_DISPLAY_USERS,
                className: y.marginBottom20,
                children: (0, l.jsx)(r.RadioGroup, {
                  onChange: this.handleChangeDisplayUserMode,
                  options: T(),
                  value: n,
                  size: r.RadioGroup.Sizes.SMALL,
                }),
              }),
            ],
          });
        }
        renderDeveloperSettings() {
          return (0, l.jsx)(s.Fragment, {
            children: (0, l.jsx)(r.FormItem, {
              title: "Crashes",
              className: y.marginBottom20,
              children: (0, l.jsx)(r.SingleSelect, {
                value: void 0,
                options: [
                  { value: void 0, label: "Native crash" },
                  { value: 0, label: "Abort()" },
                  { value: 1, label: "SIGSEGV()" },
                  { value: 2, label: "EXCEPTION_ACCESS_VIOLATION" },
                  { value: 3, label: "RaiseFailFastException" },
                  { value: 4, label: "Out of Memory" },
                ],
                onChange: e => null != e && E.default.crash(e),
              }),
            }),
          });
        }
        render() {
          return (0, l.jsxs)(r.ModalRoot, {
            "aria-label": v.default.Messages.OVERLAY_SETTINGS_TITLE,
            transitionState: r.ModalTransitionState.ENTERED,
            children: [this.renderHeader(), this.renderBody()],
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = { selectedSection: "GENERAL" }),
            (this.handleSelectSection = e => {
              this.setState({ selectedSection: e });
            }),
            (this.handleToggleTextChatNotifications = () => {
              let { ENABLED: e, DISABLED: t } =
                  S.OverlayNotificationTextChatTypes,
                n = this.props.textChatNotificationMode === e ? t : e;
              d.default.setTextChatNotificationMode(n), O();
            });
        }
      }
      function A(e) {
        let { onClose: t } = e,
          {
            avatarSizeMode: n,
            displayNameMode: i,
            displayUserMode: a,
            notificationPositionMode: s,
            textChatNotificationMode: r,
            shouldShowKeybindIndicators: d,
          } = (0, o.useStateFromStoresObject)([f.default], () => ({
            avatarSizeMode: f.default.getAvatarSizeMode(),
            displayNameMode: f.default.getDisplayNameMode(),
            displayUserMode: f.default.getDisplayUserMode(),
            notificationPositionMode: f.default.getNotificationPositionMode(),
            textChatNotificationMode: f.default.getTextChatNotificationMode(),
            shouldShowKeybindIndicators: f.default.showKeybindIndicators,
          })),
          { showKeybindIndicators: u } = m.default.useExperiment({
            location: "Overlay Settings",
          });
        return (0, l.jsx)(C, {
          onClose: t,
          avatarSizeMode: n,
          displayNameMode: i,
          displayUserMode: a,
          notificationPositionMode: s,
          textChatNotificationMode: r,
          shouldShowKeybindIndicators: d,
          showKeybindIndicators: u,
        });
      }
    },
    890291: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return g;
          },
        });
      var i = n("37983"),
        a = n("884691"),
        l = n("446674"),
        s = n("631316"),
        o = n("934743"),
        r = n("104589"),
        d = n("393027"),
        u = n("901165"),
        c = n("819068"),
        f = n("49111"),
        h = n("782340"),
        p = n("183374");
      let E = () => (0, r.show)("DM_SEARCH");
      var g = a.memo(function () {
        let e = (0, l.useStateFromStores)([u.default], () =>
            u.default.isUILocked((0, c.getPID)()) ? "true" : "false"
          ),
          t = (0, d.default)(e => {
            let { channelId: t } = e;
            return t;
          });
        return (0, i.jsxs)("div", {
          className: p.privateChannels,
          children: [
            (0, i.jsx)("div", {
              className: p.searchBar,
              children: (0, i.jsx)("button", {
                type: "button",
                className: p.searchBarComponent,
                onClick: E,
                children: h.default.Messages.DM_SEARCH_PLACEHOLDER,
              }),
            }),
            (0, i.jsx)(s.default, {
              padding: 8,
              theme: f.ThemeTypes.DARK,
              version: e,
              selectedChannelId: t,
            }),
            (0, i.jsx)("section", {
              className: p.panels,
              "aria-label": h.default.Messages.ACCOUNT_A11Y_LABEL,
              children: (0, i.jsx)(o.default, { guildId: null }),
            }),
          ],
        });
      });
    },
    758547: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("414456"),
        l = n.n(a),
        s = n("77078"),
        o = n("474571"),
        r = n("560995"),
        d = n("49111"),
        u = n("782340"),
        c = n("812524"),
        f = function (e) {
          let t;
          let {
            title: n,
            header: a,
            children: f,
            renderSettings: h,
            onDragStart: p,
          } = e;
          return (
            (t =
              null != n
                ? (0, i.jsxs)(r.default.Bar, {
                    className: l(c.header, c.draggableStartArea),
                    onMouseDown: p,
                    children: [
                      (0, i.jsx)(r.default.Content, {
                        className: l(c.headerTitle, c.draggableStartArea),
                        dynamicSize: !0,
                        children: n,
                      }),
                      (0, i.jsx)(r.default.Content, {
                        children: (0, i.jsx)(s.Popout, {
                          position: "right",
                          renderPopout: null != h ? h : d.NOOP,
                          autoInvert: !1,
                          children: e =>
                            (0, i.jsx)(r.default.Icon, {
                              ...e,
                              icon: o.default,
                              label: u.default.Messages.SETTINGS,
                            }),
                        }),
                      }),
                    ],
                  })
                : a),
            (0, i.jsxs)("div", {
              className: c.sidebar,
              children: [
                t,
                (0, i.jsx)("div", { className: c.children, children: f }),
              ],
            })
          );
        };
    },
    878720: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ChangePhoneReason: function () {
            return a;
          },
          default: function () {
            return f;
          },
        });
      var i,
        a,
        l = n("759843"),
        s = n("872717"),
        o = n("913144"),
        r = n("271938"),
        d = n("840707"),
        u = n("482931"),
        c = n("49111");
      ((i = a || (a = {})).USER_ACTION_REQUIRED = "user_action_required"),
        (i.USER_SETTINGS_UPDATE = "user_settings_update"),
        (i.GUILD_PHONE_REQUIRED = "guild_phone_required"),
        (i.MFA_PHONE_UPDATE = "mfa_phone_update"),
        (i.CONTACT_SYNC = "contact_sync");
      var f = {
        setCountryCode(e) {
          o.default.dispatch({
            type: "PHONE_SET_COUNTRY_CODE",
            countryCode: e,
          });
        },
        removePhone: (e, t) =>
          s.default.delete({
            url: c.Endpoints.PHONE,
            body: { password: e, change_phone_reason: t },
            oldFormErrors: !0,
          }),
        resendCode(e) {
          let t = {},
            n = r.default.getFingerprint();
          return (
            null != n && "" !== n && (t["X-Fingerprint"] = n),
            s.default.post({
              url: c.Endpoints.RESEND_PHONE,
              headers: t,
              body: { phone: e },
            })
          );
        },
        beginAddPhone: (e, t) =>
          s.default.post({
            url: c.Endpoints.PHONE,
            body: { phone: e, change_phone_reason: t },
          }),
        addPhone: (e, t, n) =>
          s.default.post({
            url: c.Endpoints.PHONE,
            body: { phone_token: e, password: t, change_phone_reason: n },
            oldFormErrors: !0,
          }),
        addPhoneWithoutPassword: e =>
          s.default.post({
            url: c.Endpoints.PHONE_VERIFY_NO_PASSWORD,
            body: { code: e },
          }),
        beginReverifyPhone: (e, t) =>
          s.default.post({
            url: c.Endpoints.PHONE_REVERIFY,
            body: { phone: e, change_phone_reason: t },
          }),
        reverifyPhone: (e, t, n) =>
          s.default.post({
            url: c.Endpoints.PHONE_REVERIFY,
            body: { phone_token: e, password: t, change_phone_reason: n },
            oldFormErrors: !0,
          }),
        validatePhoneForSupport: e =>
          s.default.post({
            url: c.Endpoints.VERIFY_PHONE_FOR_TICKET,
            body: { token: e },
            oldFormErrors: !0,
          }),
        async verifyPhone(e, t) {
          let n =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            a = {},
            s = r.default.getFingerprint();
          null != s && "" !== s && (a["X-Fingerprint"] = s),
            i && (a.authorization = "");
          let f = await d.default.post({
            url: c.Endpoints.VERIFY_PHONE,
            headers: a,
            body: { phone: e, code: t },
            oldFormErrors: !0,
            trackedActionData: {
              event: l.NetworkActionNames.USER_VERIFY_PHONE,
            },
          });
          return (
            n &&
              o.default.dispatch({
                type: "MODAL_POP",
                key: u.PHONE_VERIFICATION_MODAL_KEY,
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
            return i;
          },
          PHONE_VERIFICATION_CODE_NUM_DIGITS: function () {
            return a;
          },
        });
      let i = "PHONE_VERIFICATION_MODAL_KEY",
        a = 6;
    },
    762993: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var i = n("446674"),
        a = n("913144");
      let l = !1,
        s = !1;
      class o extends i.default.Store {
        get keepOpen() {
          return s;
        }
        get enabled() {
          return l;
        }
      }
      o.displayName = "SoundboardOverlayStore";
      var r = new o(a.default, {
        SOUNDBOARD_SET_OVERLAY_ENABLED: function (e) {
          if (((l = e.enabled), e.enabled)) {
            var t;
            s = null !== (t = e.keepOpen) && void 0 !== t && t;
          }
        },
      });
    },
    786770: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return ee;
          },
        }),
        n("222007"),
        n("424973");
      var i,
        a,
        l,
        s,
        o = n("627445"),
        r = n.n(o),
        d = n("748820"),
        u = n("446674"),
        c = n("913144"),
        f = n("539405"),
        h = n("415635"),
        p = n("387129"),
        E = n("981253"),
        g = n("931237"),
        m = n("37359"),
        S = n("364864"),
        v = n("523505"),
        I = n("47271"),
        y = n("386045"),
        _ = n("969416"),
        N = n("827922"),
        T = n("845579"),
        O = n("271938"),
        C = n("42203"),
        A = n("385649"),
        x = n("824563"),
        R = n("18494"),
        M = n("101125"),
        L = n("102985"),
        D = n("697218"),
        j = n("189857"),
        P = n("901165"),
        b = n("718517"),
        k = n("189771"),
        w = n("686069"),
        V = n("703370"),
        U = n("49111"),
        F = n("6791"),
        B = n("782340");
      ((l = i || (i = {}))[(l.GENERIC = 0)] = "GENERIC"),
        (l[(l.TEXT = 1)] = "TEXT"),
        (l[(l.INCOMING_CALL = 2)] = "INCOMING_CALL"),
        ((s = a || (a = {}))[(s.NORMAL = 0)] = "NORMAL"),
        (s[(s.HIGH = 1)] = "HIGH"),
        (s[(s.URGENT = 2)] = "URGENT");
      let H = 5 * b.default.Millis.SECOND,
        G = 8 * b.default.Millis.SECOND,
        Y = 30 * b.default.Millis.SECOND,
        W = Object.freeze({
          priority: 0,
          duration: H,
          expirationExternallyManaged: !1,
          type: 0,
        }),
        z = [],
        K = (e, t, n) => {
          let i = t
            ? U.OverlayNotificationStatus.TIMED_OUT
            : U.OverlayNotificationStatus.DISMISSED;
          return setTimeout(
            () => f.default.updateNotificationStatus(e, i),
            null != n ? n : H
          );
        };
      function Z(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : U.OverlayNotificationStatus.DISMISSED;
        if (null == e) return !1;
        let n = z.findIndex(t => t.id === e);
        if (-1 === n) return !1;
        let i = z[n];
        clearTimeout(i.timerId),
          (z = [...z]),
          t === U.OverlayNotificationStatus.DISMISSED
            ? z.splice(n, 1)
            : (z[n] = { ...i, status: t });
      }
      function X(e) {
        let t = z.length;
        return (
          (z = z.filter(t => 1 !== t.type || t.channelId !== e || !1))
            .length !== t
        );
      }
      function J(e) {
        let t = z.find(t => 2 === t.type && t.channelId === e);
        return null != t ? t.id : null;
      }
      function q(e, t) {
        let n = { ...W, ...t };
        if (2 !== n.priority && !P.default.isInstanceFocused()) return null;
        let i = (0, d.v4)(),
          a = {
            id: i,
            status: U.OverlayNotificationStatus.ACTIVE,
            timerId: K(i, n.expirationExternallyManaged, n.duration),
            props: e,
            ...n,
          };
        z = [...z];
        let l = z.findIndex(e => e.priority <= n.priority);
        if ((-1 === l ? z.push(a) : z.splice(l, 0, a), z.length > 10)) {
          let e = z.pop();
          clearTimeout(e.timerId);
        }
        return i;
      }
      function Q(e) {
        let { channelId: t, ringing: n } = e,
          i = J(t),
          a = n.includes(O.default.getId());
        if (!a) return Z(i);
        if (null != i) return !1;
        let l = C.default.getChannel(t);
        if (
          null == l ||
          !l.isPrivate() ||
          M.default.getStatus() === U.StatusTypes.DND ||
          T.FocusMode.getSetting()
        )
          return !1;
        let s = z.find(
          e =>
            1 === e.type &&
            e.channelId === t &&
            e.messageType === U.MessageTypes.CALL
        );
        null != s && Z(s.id),
          q((0, g.default)(l), {
            priority: 1,
            expirationExternallyManaged: !0,
            type: 2,
            channelId: l.id,
          });
      }
      class $ extends u.default.Store {
        initialize() {
          this.waitFor(C.default, D.default);
        }
        getNotifications() {
          return z;
        }
      }
      $.displayName = "OverlayNotificationsStore";
      var ee = new $(
        c.default,
        __OVERLAY__
          ? {
              OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
                let { notificationId: t, status: n } = e;
                Z(t, n);
              },
              OVERLAY_MOUNTED: function (e) {
                let { nudge: t } = e,
                  n = (function (e) {
                    switch (e.type) {
                      case F.OverlayNudgeTypes.BROADCAST:
                        return (0, I.default)(e);
                      case F.OverlayNudgeTypes.GO_LIVE_VOICE:
                      case F.OverlayNudgeTypes.GO_LIVE_NON_VOICE:
                        return (0, E.default)(e);
                      case F.OverlayNudgeTypes.KEYBIND_INDICATORS:
                        return (0, N.default)(e);
                      case F.OverlayNudgeTypes.NEWS:
                      default:
                        return (0, v.default)(e);
                    }
                  })(t);
                null != n && q(n, { priority: 2, duration: G });
              },
              OVERLAY_SET_INPUT_LOCKED: function (e) {
                let { locked: t } = e;
                if (t) return !1;
                z = z.map(e =>
                  e.status === U.OverlayNotificationStatus.ACTIVE
                    ? (clearTimeout(e.timerId),
                      { ...e, timerId: K(e.id, e.expirationExternallyManaged) })
                    : e
                );
              },
              MESSAGE_CREATE: function (e) {
                var t, n, i;
                let { channelId: a, message: l } = e,
                  s = C.default.getChannel(a),
                  o = D.default.getUser(
                    null === (t = l.author) || void 0 === t ? void 0 : t.id
                  );
                if (null == s || null == o) return !1;
                if (
                  (null === (n = l.activity) || void 0 === n
                    ? void 0
                    : n.type) === U.ActivityActionTypes.JOIN ||
                  (null === (i = l.activity) || void 0 === i
                    ? void 0
                    : i.type) === U.ActivityActionTypes.JOIN_REQUEST
                ) {
                  if (!(0, k.shouldNotify)(l, a, !0, !0)) return !1;
                  let e = (function (e, t, n) {
                    let i, a;
                    if (
                      (r(null != t.activity, "received null message activity"),
                      n.id === O.default.getId())
                    )
                      return !1;
                    let l = V.default.getGame();
                    if (null == l) return !1;
                    switch (t.activity.type) {
                      case U.ActivityActionTypes.JOIN:
                        if (
                          null ==
                            (i = x.default.getApplicationActivity(
                              n.id,
                              l.id
                            )) ||
                          null == i.party ||
                          i.party.id !== t.activity.party_id
                        )
                          return !1;
                        a = (0, h.default)(e, t, n, l, i);
                        break;
                      case U.ActivityActionTypes.JOIN_REQUEST:
                        if (
                          null ==
                            (i = M.default.getApplicationActivity(l.id)) ||
                          null == i.party ||
                          i.party.id !== t.activity.party_id
                        )
                          return !1;
                        a = (0, m.default)(e, n, l, i);
                    }
                    if (null == a) return !1;
                    let s = q(a, {
                      priority: 2,
                      expirationExternallyManaged: !0,
                      channelId: e.id,
                    });
                    return null != s && K(s, !1, Y), !0;
                  })(s, l, o);
                  if (!1 !== e) return e;
                }
                if (
                  ((!P.default.isInstanceUILocked() ||
                    P.default.isPinned(U.OverlayWidgets.TEXT)) &&
                    a === R.default.getChannelId()) ||
                  P.default.getTextChatNotificationMode() ===
                    U.OverlayNotificationTextChatTypes.DISABLED ||
                  L.default.disableNotifications ||
                  !(0, k.shouldNotify)(l, a)
                )
                  return !1;
                let d = !A.default.isSoundDisabled(j.MESSAGE_SOUND);
                q((0, S.default)(s, l, o, d), {
                  type: 1,
                  channelId: s.id,
                  messageType: l.type,
                });
              },
              CHANNEL_SELECT: function (e) {
                let { channelId: t } = e;
                return null != t && X(t);
              },
              MESSAGE_ACK: function (e) {
                let { channelId: t } = e;
                return X(t);
              },
              CALL_CREATE: Q,
              CALL_UPDATE: Q,
              CALL_DELETE: function (e) {
                let { channelId: t } = e;
                Z(J(t));
              },
              ACTIVITY_USER_ACTION: function (e) {
                let t,
                  { actionType: n, user: i, applicationId: a } = e,
                  l = V.default.getGame();
                if (null == l || l.id !== a) return !1;
                if (n === U.ActivityActionTypes.JOIN) t = (0, p.default)(i, l);
                if (null == t) return !1;
                q(t, { priority: 2, type: 0 });
              },
              CLIPS_SAVE_CLIP_START: function () {
                q(
                  (0, _.createClipsNotification)(
                    B.default.Messages.CLIPS_SAVE_START_NOTIFICATION_TITLE
                  )
                );
              },
              CLIPS_SAVE_CLIP: function () {
                q(
                  (0, _.createClipsNotification)(
                    B.default.Messages.CLIPS_NOTIFICATION_TITLE.format({
                      duration: (0, w.getSecondsSliderLabel)(
                        y.default.getSettings().clipsLength / 1e3,
                        !0
                      ),
                    })
                  )
                );
              },
              CLIPS_SAVE_CLIP_ERROR: function () {
                q(
                  (0, _.createClipsNotification)(
                    B.default.Messages.CLIPS_SAVE_ERROR_NOTIFICATION_TITLE
                  )
                );
              },
              STREAM_START: function (e) {
                let t = (0, _.createClipsReminderNotification)();
                null != t && q(t);
              },
            }
          : {}
      );
    },
    783419: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        }),
        n("808653");
      var i = n("446674"),
        a = n("913144"),
        l = n("49111");
      let s = {};
      function o(e) {
        let t = s[(e = null != e ? e : "null")];
        return (
          null == t &&
            (t = s[e] =
              {
                state: l.RTCConnectionStates.DISCONNECTED,
                quality: l.RTCConnectionQuality.UNKNOWN,
                pings: [],
                hostname: null,
                lossRate: null,
              }),
          t
        );
      }
      function r(e, t, n) {
        e = null != e ? e : "null";
        let i = s[e];
        return null != i ? t(i) : n;
      }
      function d(e) {
        let { lobbyId: t } = e;
        delete s[t];
      }
      class u extends i.default.Store {
        getConnectionState(e) {
          return r(
            e,
            e => {
              let { state: t } = e;
              return t;
            },
            l.RTCConnectionStates.DISCONNECTED
          );
        }
        getQuality(e) {
          return r(
            e,
            e => {
              let { quality: t } = e;
              return t;
            },
            l.RTCConnectionQuality.UNKNOWN
          );
        }
        getHostname(e) {
          return r(
            e,
            e => {
              let { hostname: t } = e;
              return t;
            },
            null
          );
        }
        getPings(e) {
          return r(
            e,
            e => {
              let { pings: t } = e;
              return t;
            },
            []
          );
        }
        getAveragePing(e) {
          let t = this.getPings(e);
          return 0 === t.length
            ? 0
            : t.reduce((e, t) => e + t.value, 0) / t.length;
        }
        getLastPing(e) {
          var t;
          let n = this.getPings(e);
          if (0 === n.length) return 0;
          return null === (t = n[n.length - 1]) || void 0 === t
            ? void 0
            : t.value;
        }
        getOutboundLossRate(e) {
          return r(
            e,
            e => {
              let { lossRate: t } = e;
              return t;
            },
            null
          );
        }
      }
      u.displayName = "OverlayRTCConnectionStore";
      var c = new u(a.default, {
        OVERLAY_INITIALIZE: function (e) {
          s = e.rtcConnectionStates;
        },
        RTC_CONNECTION_STATE: function (e) {
          if (null != e.streamKey) return !1;
          let t = o(e.lobbyId);
          (t.state = e.state), (t.hostname = e.hostname);
        },
        RTC_CONNECTION_PING: function (e) {
          let t = o(e.lobbyId);
          (t.pings = e.pings), (t.quality = e.quality);
        },
        RTC_CONNECTION_LOSS_RATE: function (e) {
          let t = o(e.lobbyId);
          t.lossRate = e.lossRate;
        },
        LOBBY_DELETE: d,
        LOBBY_DISCONNECT: d,
      });
    },
    959479: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Operations: function () {
            return i;
          },
          default: function () {
            return y;
          },
        }),
        n("222007"),
        n("70102");
      var i,
        a,
        l = n("37983"),
        s = n("884691"),
        o = n("414456"),
        r = n.n(o),
        d = n("233736"),
        u = n("80687"),
        c = n("49111"),
        f = n("667232");
      let h = (e, t, n, i) => Math.pow(e - n, 2) + Math.pow(t - i, 2);
      ((a = i || (i = {})).MOVE = "MOVE"),
        (a.RESIZE_NORTH = "RESIZE_NORTH"),
        (a.RESIZE_WEST = "RESIZE_WEST"),
        (a.RESIZE_EAST = "RESIZE_EAST"),
        (a.RESIZE_SOUTH = "RESIZE_SOUTH"),
        (a.RESIZE_NORTH_WEST = "RESIZE_NORTH_WEST"),
        (a.RESIZE_NORTH_EAST = "RESIZE_NORTH_EAST"),
        (a.RESIZE_SOUTH_WEST = "RESIZE_SOUTH_WEST"),
        (a.RESIZE_SOUTH_EAST = "RESIZE_SOUTH_EAST");
      let p = new Set([
        "RESIZE_NORTH",
        "RESIZE_WEST",
        "RESIZE_EAST",
        "RESIZE_SOUTH",
        "RESIZE_NORTH_WEST",
        "RESIZE_NORTH_EAST",
        "RESIZE_SOUTH_WEST",
        "RESIZE_SOUTH_EAST",
      ]);
      function E(e, t, n) {
        let { width: i, height: a } = e;
        return {
          width: "auto" === i ? "auto" : Math.max(t, i),
          height: "auto" === a ? "auto" : Math.max(n, a),
        };
      }
      function g(e) {
        let { top: t, left: n, bottom: i, right: a } = e;
        return (
          null == n && null == a && (n = 0),
          null != n && null != a && (a = null),
          null == t && null == i && (t = 0),
          null != t && null != i && (i = null),
          { top: t, left: n, bottom: i, right: a }
        );
      }
      function m(e) {
        return "auto" === e || null == e ? "auto" : "".concat(e, "px");
      }
      function S(e, t) {
        let n = 0,
          i = 0;
        return (
          (n = "auto" === t.width ? (null != e ? e.clientWidth : 0) : t.width),
          {
            width: n,
            height: (i =
              "auto" === t.height
                ? null != e
                  ? e.clientHeight
                  : 0
                : t.height),
          }
        );
      }
      function v(e, t) {
        let { top: n, left: i, bottom: a, right: l } = t;
        switch (e) {
          case "RESIZE_EAST":
          case "RESIZE_NORTH_EAST":
          case "RESIZE_NORTH":
            return { bottom: a, left: i, right: null, top: null };
          case "RESIZE_WEST":
          case "RESIZE_NORTH_WEST":
            return { bottom: a, right: l, left: null, top: null };
          case "RESIZE_SOUTH_EAST":
            return { top: n, left: i, bottom: null, right: null };
          case "RESIZE_SOUTH":
          case "RESIZE_SOUTH_WEST":
            return { top: n, right: l, bottom: null, left: null };
          default:
            throw Error("getOrientedCoords: Invalid orientation: ".concat(e));
        }
      }
      class I extends s.Component {
        shouldComponentUpdate(e, t) {
          return (
            !(0, d.default)(t, this.state) ||
            !(0, d.default)(e, this.props, [
              "anchor",
              "size",
              "minSize",
              "container",
            ]) ||
            !(0, d.default)(e.anchor, this.props.anchor) ||
            !(0, d.default)(e.size, this.props.size) ||
            !(0, d.default)(e.minSize, this.props.minSize) ||
            !(0, d.default)(e.container, this.props.container)
          );
        }
        componentDidUpdate(e, t) {
          null == t.operation &&
            (!(0, d.default)(this.props.anchor, e.anchor) &&
              this.setDOMPositions(g(this.props.anchor)),
            !(0, d.default)(this.props.size, e.size) &&
              this.setDOMSize(
                E(
                  this.props.size,
                  this.props.minSize.width,
                  this.props.minSize.height
                )
              ));
        }
        componentWillUnmount() {
          this.handleOperationEnd();
        }
        handleResizeMouseDown(e, t) {
          let { clientX: n, clientY: i } = e;
          e.stopPropagation(), this.handleOperationStart(t, n, i);
        }
        handleDragMove(e, t) {
          let {
            ref: { current: n },
            props: {
              id: i,
              container: { maxX: a, maxY: l, minX: s, minY: o },
              onDragStart: r,
              onDrag: d,
              snapOrientation: c,
            },
            dragState: { offsetX: f, offsetY: h },
            state: { operationStarted: p },
          } = this;
          if (null == n) return null;
          (e = Math.max(Math.min(a, e), s)), (t = Math.max(Math.min(l, t), o));
          let { width: E, height: g } = S(n, this.size),
            m = t - h,
            I = e - f,
            y = (0, u.fitFullCoordsToContainer)(
              (0, u.getFullCoordsFromAnchorCoords)(
                { top: m, left: I, bottom: null, right: null },
                a,
                l,
                E,
                g
              )
            ),
            _ = c
              ? (0, u.getAnchorCoordsFromFullCoords)(y)
              : v("RESIZE_SOUTH_EAST", y);
          this.setDOMPositions(_),
            !p && (null != r && r(), this.setState({ operationStarted: !0 })),
            null != d && d(i, "MOVE", this.anchor, this.size);
        }
        handleResizeMove(e, t) {
          let {
              props: {
                id: n,
                minSize: i,
                container: { maxX: a, maxY: l, minX: s, minY: o },
                onDragStart: r,
                onDrag: d,
              },
              state: { operation: u, operationStarted: c },
            } = this,
            {
              startX: f,
              startY: h,
              offsetWidth: p,
              offsetHeight: E,
            } = this.dragState,
            g = 0,
            m = 0;
          if (null != u) {
            switch (
              ((e = Math.max(Math.min(a, e), s)),
              (t = Math.max(Math.min(l, t), o)),
              u)
            ) {
              case "RESIZE_EAST":
              case "RESIZE_SOUTH_EAST":
              case "RESIZE_NORTH_EAST":
                g -= f - e;
                break;
              case "RESIZE_WEST":
              case "RESIZE_SOUTH_WEST":
              case "RESIZE_NORTH_WEST":
                g += f - e;
            }
            switch (u) {
              case "RESIZE_SOUTH":
              case "RESIZE_SOUTH_WEST":
              case "RESIZE_SOUTH_EAST":
                m -= h - t;
                break;
              case "RESIZE_NORTH":
              case "RESIZE_NORTH_WEST":
              case "RESIZE_NORTH_EAST":
                m += h - t;
            }
            (p = Math.max(p + g, i.width)),
              (E = Math.max(E + m, i.height)),
              this.setDOMSize({ width: p, height: E }),
              !c && (null != r && r(), this.setState({ operationStarted: !0 })),
              null != d && d(n, u, this.anchor, this.size);
          }
        }
        setDOMPositions(e) {
          let { top: t, left: n, bottom: i, right: a } = e,
            { current: l } = this.ref;
          (this.anchor = { top: t, left: n, bottom: i, right: a }),
            null != l &&
              ((l.style.top = m(t)),
              (l.style.bottom = m(i)),
              (l.style.left = m(n)),
              (l.style.right = m(a)));
        }
        setDOMSize(e) {
          let { width: t, height: n } = e,
            { current: i } = this.ref;
          (t = "auto" === this.size.width ? "auto" : t),
            (n = "auto" === this.size.height ? "auto" : n),
            (this.size = { width: t, height: n }),
            null != i && ((i.style.width = m(t)), (i.style.height = m(n)));
        }
        renderResizeHandles() {
          let { resizeY: e, resizeX: t, active: n } = this.props;
          return (0, l.jsxs)(s.Fragment, {
            children: [
              e
                ? (0, l.jsxs)(s.Fragment, {
                    children: [
                      (0, l.jsx)("div", {
                        className: r(f.resizeNorth, { [f.resizeNSCursor]: n }),
                        onMouseDown: e =>
                          this.handleResizeMouseDown(e, "RESIZE_NORTH"),
                      }),
                      (0, l.jsx)("div", {
                        className: r(f.resizeSouth, { [f.resizeNSCursor]: n }),
                        onMouseDown: e =>
                          this.handleResizeMouseDown(e, "RESIZE_SOUTH"),
                      }),
                    ],
                  })
                : null,
              t
                ? (0, l.jsxs)(s.Fragment, {
                    children: [
                      (0, l.jsx)("div", {
                        className: r(f.resizeEast, { [f.resizeEWCursor]: n }),
                        onMouseDown: e =>
                          this.handleResizeMouseDown(e, "RESIZE_EAST"),
                      }),
                      (0, l.jsx)("div", {
                        className: r(f.resizeWest, { [f.resizeEWCursor]: n }),
                        onMouseDown: e =>
                          this.handleResizeMouseDown(e, "RESIZE_WEST"),
                      }),
                    ],
                  })
                : null,
              t && e
                ? (0, l.jsxs)(s.Fragment, {
                    children: [
                      (0, l.jsx)("div", {
                        className: r(f.resizeNorthWest, {
                          [f.resizeNWSECursor]: n,
                        }),
                        onMouseDown: e =>
                          this.handleResizeMouseDown(e, "RESIZE_NORTH_WEST"),
                      }),
                      (0, l.jsx)("div", {
                        className: r(f.resizeNorthEast, {
                          [f.resizeNESWCursor]: n,
                        }),
                        onMouseDown: e =>
                          this.handleResizeMouseDown(e, "RESIZE_NORTH_EAST"),
                      }),
                      (0, l.jsx)("div", {
                        className: r(f.resizeSouthWest, {
                          [f.resizeNESWCursor]: n,
                        }),
                        onMouseDown: e =>
                          this.handleResizeMouseDown(e, "RESIZE_SOUTH_WEST"),
                      }),
                      (0, l.jsx)("div", {
                        className: r(f.resizeSouthEast, {
                          [f.resizeNWSECursor]: n,
                        }),
                        onMouseDown: e =>
                          this.handleResizeMouseDown(e, "RESIZE_SOUTH_EAST"),
                      }),
                    ],
                  })
                : null,
            ],
          });
        }
        render() {
          let {
            props: { children: e, hidden: t, onClick: n, id: i, style: a },
            size: s,
            anchor: o,
            state: { operation: d, operationStarted: u },
          } = this;
          return (0, l.jsxs)("div", {
            ref: this.ref,
            style: {
              ...o,
              ...s,
              ...a,
              ...(null != d ? { zIndex: 1e3 } : void 0),
              ...(t ? { visibility: "hidden" } : void 0),
            },
            className: r({ [f.wrapper]: !0, [f.operation]: u }),
            onMouseDown: this.handleMouseDown,
            onClick: null != n ? () => n(i) : void 0,
            children: [
              e(this.handleOperationStart),
              this.renderResizeHandles(),
            ],
          });
        }
        constructor(e) {
          super(e),
            (this.ref = s.createRef()),
            (this.dragState = {
              startX: 0,
              startY: 0,
              offsetX: 0,
              offsetY: 0,
              offsetWidth: 0,
              offsetHeight: 0,
            }),
            (this.state = { operation: null, operationStarted: !1 }),
            (this.handleMouseDown = e => {
              e.stopPropagation();
              let { dragAnywhere: t } = this.props,
                { current: n } = this.ref;
              null != n &&
                e.button === c.MouseButtons.PRIMARY &&
                t &&
                this.handleOperationStart("MOVE", e.clientX, e.clientY);
            }),
            (this.handleMouseMove = e => {
              e.preventDefault(), e.stopPropagation();
              let { clientX: t, clientY: n } = e,
                {
                  dragState: { startX: i, startY: a },
                  state: { operation: l, operationStarted: s },
                } = this;
              !(null == l || (!s && 3 > h(i, a, t, n))) &&
                ("MOVE" === l
                  ? this.handleDragMove(t, n)
                  : p.has(l) && this.handleResizeMove(t, n));
            }),
            (this.handleOperationStart = (e, t, n) => {
              let {
                ref: { current: i },
                props: {
                  active: a,
                  container: { maxX: l, maxY: s },
                },
              } = this;
              if (null == i || !a) return;
              let { width: o, height: r } = S(i, this.size),
                d = (0, u.getFullCoordsFromAnchorCoords)(
                  this.anchor,
                  l,
                  s,
                  o,
                  r
                );
              if ("MOVE" === e) {
                let { x: e, y: i } = (function (e) {
                  let { top: t, left: n } = e;
                  return { x: n, y: t };
                })(d);
                this.dragState = {
                  ...this.dragState,
                  startX: t,
                  startY: n,
                  offsetX: t - e,
                  offsetY: n - i,
                };
              } else {
                let i = v(e, d);
                this.setDOMPositions(i),
                  (this.dragState = {
                    ...this.dragState,
                    startX: t,
                    startY: n,
                    offsetWidth: o,
                    offsetHeight: r,
                  });
              }
              this.setState({ operation: e, operationStarted: !1 }, () => {
                window.addEventListener("mousemove", this.handleMouseMove),
                  window.addEventListener("mouseup", this.handleOperationEnd);
              });
            }),
            (this.handleOperationEnd = () => {
              let { operation: e, operationStarted: t } = this.state,
                { onDragEnd: n } = this.props;
              window.removeEventListener("mousemove", this.handleMouseMove),
                window.removeEventListener("mouseup", this.handleOperationEnd);
              let i = t
                ? () => {
                    let { onUpdate: t, id: n } = this.props;
                    t(
                      e,
                      n,
                      this.anchor,
                      this.size,
                      S(this.ref.current, this.size)
                    );
                  }
                : void 0;
              if (t) {
                let { maxX: e, maxY: t } = this.props.container,
                  { width: i, height: a } = S(this.ref.current, this.size),
                  l = (0, u.getFullCoordsFromAnchorCoords)(
                    this.anchor,
                    e,
                    t,
                    i,
                    a
                  ),
                  s = (0, u.getAnchorCoordsFromFullCoords)(l);
                this.setDOMPositions(s),
                  this.setDOMSize({ width: i, height: a }),
                  null != n && n();
              }
              this.setState({ operation: null, operationStarted: !1 }, i);
            }),
            (this.anchor = g(e.anchor)),
            (this.size = E(e.size, e.minSize.width, e.minSize.height));
        }
      }
      (I.Operations = i),
        (I.defaultProps = {
          snapOrientation: !0,
          minSize: { width: 0, height: 0 },
          container: { minX: 0, minY: 0, maxX: 1 / 0, maxY: 1 / 0 },
          resizeX: !0,
          resizeY: !0,
          hidden: !1,
          dragAnywhere: !0,
          active: !0,
        });
      var y = I;
    },
    942699: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var i = n("37983"),
        a = n("884691"),
        l = n("414456"),
        s = n.n(l),
        o = n("540076");
      let r = e => {
        let { keybind: t, separator: n, className: l } = e;
        return (0, i.jsx)(i.Fragment, {
          children: t.map((e, r) =>
            (0, i.jsxs)(
              a.Fragment,
              {
                children: [
                  (0, i.jsx)("span", { className: s(o.key, l), children: e }),
                  r === t.length - 1 ? void 0 : n,
                ],
              },
              r
            )
          ),
        });
      };
      r.defaultProps = { separator: "+" };
      var d = r;
    },
    415518: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          renderKeybindHint: function () {
            return S;
          },
          renderSubtleHint: function () {
            return v;
          },
          ColorSchemes: function () {
            return a;
          },
          default: function () {
            return I;
          },
        });
      var i,
        a,
        l = n("37983"),
        s = n("884691"),
        o = n("414456"),
        r = n.n(o),
        d = n("77078"),
        u = n("942699"),
        c = n("945330"),
        f = n("782340"),
        h = n("699602"),
        p = n("890957");
      let E = e => e.stopPropagation(),
        g = () =>
          (0, l.jsx)("div", {
            className: h.clickBlocker,
            onClick: E,
            onMouseEnter: E,
            onMouseOver: E,
          }),
        m = () => (0, l.jsx)("div", { className: h.divider }),
        S = (e, t, n) =>
          (0, l.jsx)("div", {
            className: h.keybindMessage,
            children: n.format({
              keybind: t,
              keybindHook: (e, n) =>
                (0, l.jsx)(u.default, { keybind: t, className: h.keybind }, n),
            }),
          }),
        v = (e, t) =>
          (0, l.jsx)("div", { className: h.hintSubtleText, children: t });
      ((i = a || (a = {})).PRIMARY = "PRIMARY"),
        (i.BRAND = "BRAND"),
        (i.DANGER = "DANGER");
      class Notification extends s.PureComponent {
        static getDerivedStateFromProps(e, t) {
          let { expand: n } = e,
            { expanded: i } = t;
          return !i && n ? { expanded: !0 } : null;
        }
        componentDidMount() {
          let { onNotificationShow: e } = this.props;
          null == e || e();
        }
        componentDidUpdate(e) {
          let { onNotificationShow: t } = this.props;
          null != t && null == e.onNotificationShow && t();
        }
        renderCloseButton() {
          return (0, l.jsx)(d.Button, {
            look: d.Button.Looks.BLANK,
            size: d.Button.Sizes.NONE,
            onClick: this.handleDismiss,
            className: h.dismissButton,
            "aria-label": f.default.Messages.NOTIFICATION_DISMISS,
            children: (0, l.jsx)(c.default, {
              width: 16,
              height: 16,
              className: h.dismissIcon,
            }),
          });
        }
        renderHint() {
          let {
            props: { hint: e, colorScheme: t },
            state: { expanded: n },
          } = this;
          if (null == e) return null;
          if ("function" == typeof e) {
            let i = e(n, t);
            return null != i
              ? (0, l.jsxs)(
                  s.Fragment,
                  { children: [(0, l.jsx)(m, {}), i] },
                  "hint-custom"
                )
              : null;
          }
          return (0, l.jsxs)(
            s.Fragment,
            {
              children: [
                (0, l.jsx)(m, {}),
                (0, l.jsx)(
                  "div",
                  {
                    className: "string" == typeof e ? h.hintText : void 0,
                    children: e,
                  },
                  "hint-text"
                ),
              ],
            },
            "hint-text"
          );
        }
        renderFooter() {
          let {
            props: {
              renderFooter: e,
              cancelText: t,
              confirmText: n,
              onConfirmClick: i,
              onCancelClick: a,
              hint: o,
              colorScheme: r,
            },
            state: { expanded: u },
          } = this;
          if (!u) return null != o ? this.renderHint() : null;
          if (null != e) {
            let t = e(u, r);
            return null != t
              ? (0, l.jsxs)(
                  s.Fragment,
                  { children: [(0, l.jsx)(m, {}), t] },
                  "footer-custom-content"
                )
              : null;
          }
          if (null != i || null != a) {
            let e = d.Button.Colors.GREEN,
              o = d.Button.Colors.PRIMARY,
              u = d.Button.Looks.FILLED;
            switch (r) {
              case "DANGER":
              case "BRAND":
                (e = o = d.Button.Colors.WHITE), (u = d.Button.Looks.OUTLINED);
            }
            return (0, l.jsxs)(
              s.Fragment,
              {
                children: [
                  (0, l.jsx)(m, {}),
                  (0, l.jsxs)("div", {
                    className: h.buttonContainer,
                    children: [
                      null != i
                        ? (0, l.jsx)(d.Button, {
                            fullWidth: !0,
                            size: d.Button.Sizes.SMALL,
                            color: e,
                            onClick: this.handleConfirmClick,
                            className: h.button,
                            innerClassName: h.innerText,
                            children: null != n ? n : f.default.Messages.OKAY,
                          })
                        : null,
                      null != a
                        ? (0, l.jsx)(d.Button, {
                            fullWidth: !0,
                            size: d.Button.Sizes.SMALL,
                            look: u,
                            color: o,
                            onClick: this.handleCancelClick,
                            className: h.button,
                            children: null != t ? t : f.default.Messages.CANCEL,
                          })
                        : null,
                    ],
                  }),
                ],
              },
              "footer-button-content"
            );
          }
          return this.renderHint();
        }
        renderIcon() {
          let { icon: e } = this.props;
          return null == e
            ? null
            : "string" == typeof e
              ? (0, l.jsx)(d.Avatar, {
                  src: e,
                  size: d.AvatarSizes.SIZE_40,
                  className: h.avatar,
                  "aria-hidden": !0,
                })
              : (0, l.jsx)("div", { className: h.avatar, children: e });
        }
        renderContent() {
          let { body: e, title: t, maxBodyLines: n } = this.props;
          return (0, l.jsxs)("div", {
            className: h.content,
            children: [
              this.renderIcon(),
              (0, l.jsxs)("div", {
                className: h.details,
                children: [
                  (0, l.jsx)("div", { className: h.title, children: t }),
                  null != e
                    ? (0, l.jsx)("div", {
                        className: r(h.body, p.marginTop4),
                        style: { WebkitLineClamp: n, lineClamp: n },
                        children: e,
                      })
                    : null,
                ],
              }),
            ],
          });
        }
        render() {
          let {
              props: { onNotificationClick: e, colorScheme: t, disabled: n },
              state: { expanded: i },
            } = this,
            a = null != e ? d.Clickable : "div";
          return (0, l.jsxs)(a, {
            onMouseOver: i ? null : this.handleMouseEnter,
            onFocus: i ? null : this.handleMouseEnter,
            onClick: e,
            className: r(h.container, {
              [h.themePrimary]: "PRIMARY" === t,
              [h.themeBrand]: "BRAND" === t,
              [h.themeDanger]: "DANGER" === t,
              [h.clickable]: null != e && !n,
            }),
            children: [
              this.renderCloseButton(),
              this.renderContent(),
              this.renderFooter(),
              n ? (0, l.jsx)(g, {}) : null,
            ],
          });
        }
        constructor(e) {
          super(e),
            (this.handleDismiss = e => {
              e.stopPropagation();
              let { onDismissClick: t } = this.props;
              null == t || t(e);
            }),
            (this.handleConfirmClick = e => {
              e.stopPropagation();
              let { onConfirmClick: t } = this.props;
              null == t || t(e);
            }),
            (this.handleCancelClick = e => {
              e.stopPropagation();
              let { onCancelClick: t } = this.props;
              null == t || t(e);
            }),
            (this.handleMouseEnter = () => {
              !this.props.disabled && this.setState({ expanded: !0 });
            });
          let { expand: t } = e;
          this.state = { expanded: t };
        }
      }
      (Notification.ColorSchemes = a),
        (Notification.defaultProps = {
          maxBodyLines: void 0,
          colorScheme: "PRIMARY",
          expand: !1,
          disabled: !1,
        });
      var I = Notification;
    },
    673220: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("469563"),
        l = n("436984"),
        s = n("75196"),
        o = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: n = 16,
              color: a = "currentColor",
              ...l
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(l),
              width: t,
              height: n,
              viewBox: "0 0 4 14",
              children: (0, i.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                  (0, i.jsx)("ellipse", {
                    fill: a,
                    cx: "3.75",
                    cy: "1",
                    rx: "1.125",
                    ry: "1.08333333",
                  }),
                  (0, i.jsx)("ellipse", {
                    fill: a,
                    cx: "3.75",
                    cy: "4.61111107",
                    rx: "1.125",
                    ry: "1.08333333",
                  }),
                  (0, i.jsx)("ellipse", {
                    fill: a,
                    cx: "0",
                    cy: "4.61111107",
                    rx: "1.125",
                    ry: "1.08333333",
                  }),
                  (0, i.jsx)("ellipse", {
                    fill: a,
                    cx: "3.75",
                    cy: "8.22222227",
                    rx: "1.125",
                    ry: "1.08333333",
                  }),
                  (0, i.jsx)("ellipse", {
                    fill: a,
                    cx: "0",
                    cy: "8.22222227",
                    rx: "1.125",
                    ry: "1.08333333",
                  }),
                  (0, i.jsx)("ellipse", {
                    fill: a,
                    cx: "3.75",
                    cy: "11.83333337",
                    rx: "1.125",
                    ry: "1.08333333",
                  }),
                  (0, i.jsx)("ellipse", {
                    fill: a,
                    cx: "0",
                    cy: "11.83333337",
                    rx: "1.125",
                    ry: "1.08333333",
                  }),
                  (0, i.jsx)("ellipse", {
                    fill: a,
                    cx: "0",
                    cy: "1",
                    rx: "1.125",
                    ry: "1.08333333",
                  }),
                ],
              }),
            });
          },
          l.DragIcon,
          void 0,
          { size: 16 }
        );
    },
    960086: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("469563"),
        l = n("676665"),
        s = n("75196"),
        o = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              foreground: l,
              ...o
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(o),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                fill: a,
                className: l,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M21 2H3C1.897 2 1 2.898 1 4V6H23V4C23 2.898 22.103 2 21 2ZM13 12H15V14H13V12ZM11 12H13V10H15V12H17V14H15V16H13V14H11V12ZM9 12H11V10H9V12ZM9 14V12H7V10H5V12H7V14H5V16H7V18H9V16H11V18H13V16H11V14H9ZM9 14V16H7V14H9ZM17 16V14H19V16H17ZM17 16H15V18H17V16ZM17 12H19V10H17V12ZM3 22C1.897 22 1 21.103 1 20V7H23V20C23 21.103 22.103 22 21 22H3Z",
              }),
            });
          },
          l.BrowserCheckeredIcon,
          void 0,
          { size: 24 }
        );
    },
    720691: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("75196");
      function l(e) {
        let {
          width: t = 16,
          height: n = 16,
          color: l = "currentColor",
          foreground: s,
          ...o
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, a.default)(o),
          width: t,
          height: n,
          viewBox: "0 0 430 430",
          children: (0, i.jsx)("path", {
            className: s,
            color: l,
            d: "M187.9,308.1c17.9-13.5,43-13.7,61.1-0.3c1.9,1.3,2.4,4,1.1,5.8s-3.7,2.3-5.6,0.9l-0.3-0.3 c-15.1-11.3-36.3-11.2-51.3,0.1c-0.8,0.5-1.6,0.8-2.4,0.8c-1.2,0-2.4-0.5-3.2-1.6C185.8,312,186.2,309.3,187.9,308.1 M124.4,236 c11.7,0,21.3,9.4,21.3,21.1s-9.4,21.1-21.1,21.1c-11.7,0-21.1-9.4-21.1-21.1C103.1,245.6,112.7,236,124.4,236 M315,236 c11.7,0,21.3,9.4,21.3,21.3c0,11.7-9.4,21.1-21.1,21.1s-21.1-9.4-21.1-21.1C294,245.6,303.5,236,315,236 M347.8,307.2 c2-0.3,4-0.7,6-1.2c2.3-0.5,4.4,0.7,5,2.9c0.7,2.1-0.7,4.4-2.8,5c-2.3,0.7-4.6,1.1-7,1.3c-0.1,0-0.3,0-0.5,0c-2,0-3.7-1.5-4-3.6 C344.1,309.7,345.7,307.6,347.8,307.2 M128.1,87.2l-0.3,0.1c-14.3,5.8-23.6,19.5-23.6,35.1c0,8.5,2.9,16.6,8.5,23.5 c0,0,0,0.1,0.1,0.1l0,0c0.1,0.1,11.3,15.3,31.4,16.9c2.3,0.1,3.9,2.1,3.7,4.4c-0.1,2.1-2,3.7-4,3.7c-0.1,0-0.3,0-0.3,0 c-18.9-1.5-30.8-12.8-35.3-17.8l-4.6,1.7c-0.1,0.1-0.3,0.1-0.5,0.3c-25.6,9.6-42.2,32.1-42.2,57.5c0,10.6,3.1,21.1,8.6,30.4 c0.7,1.1,0.8,2.3,0.4,3.3c-0.3,1.2-1.2,2-2.3,2.5C36.2,263.1,16,293.6,16,327c0,47.6,39.9,86.2,88.9,86.2c32.4,0,68-6.2,106.1-18.5 c3.1-1.3,39.5-16.7,91.1-14.5c2.3,0.1,4,2,3.9,4.3c-0.1,2.3-1.9,4.1-4.3,3.9c-35.6-1.6-64,5.7-78.1,10.4 c26.2,9.6,63.8,14.5,111.7,14.5c43.3,0,78.6-35.2,78.6-78.6c0-20.3-8-39.7-22.1-54.3c-3.2,7.6-10.2,20.2-23.2,28.2 c-0.7,0.4-1.3,0.7-2.1,0.7c-1.3,0-2.7-0.7-3.5-1.9c-1.2-1.9-0.5-4.4,1.3-5.6c16.2-10,21.8-28.7,22.1-29.6 c4.1-17.7,2.4-35.6-4.9-53.3c-4.1-10-10.1-19-17.8-26.8c-1.5-1.6-13.5-11.3-13.5-11.3c-3.6,6.9-12.8,19-33.6,23.6 c-0.3,0-0.5,0.1-0.8,0.1c-1.9,0-3.6-1.3-4-3.2c-0.5-2.3,0.9-4.4,3.1-4.8c23.9-5.2,29.2-21.7,29.6-22.7c3.5-13,2.3-26.4-3.5-39.6 c-8.2-18.9-25.9-32.7-47.4-37.2c-3.5,5.2-12.8,16.1-31.6,20.3c-0.3,0.1-0.7,0.1-0.9,0.1c-1.9,0-3.6-1.3-4-3.2 c-0.5-2.3,0.8-4.4,3.1-4.9c20.2-4.6,27.2-17.7,27.8-18.7c2.8-6.4,2.8-13.7,0.3-21.4c-4.6-14.1-15.9-16.9-31.6-20.9 c-16.9-4.1-37.6-9.3-55.7-31.5c-15.7,10.9-30.8,33.3-29,50.7c1.1,9.8,7.4,16.9,19,20.9c2.1,0.8,3.2,3.1,2.5,5.2 c-0.8,2.1-3.1,3.2-5.2,2.5c-11.8-4.1-18.1-10.5-21.4-17C167,79.1,141.9,80.6,128.1,87.2z",
          }),
        });
      }
    },
    314892: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        }),
        n("222007");
      var i = n("37983"),
        a = n("884691"),
        l = n("414456"),
        s = n.n(l),
        o = n("77078"),
        r = n("468759"),
        d = n("49111"),
        u = n("782340"),
        c = n("299867"),
        f = n("890957");
      let h = 0,
        p = () => "notification-position-selector-".concat(h++),
        E = e => {
          switch (e) {
            case d.OverlayNotificationPositions.TOP_LEFT:
              return u.default.Messages.OVERLAY_NOTIFICATIONS_TOP_LEFT;
            case d.OverlayNotificationPositions.TOP_RIGHT:
              return u.default.Messages.OVERLAY_NOTIFICATIONS_TOP_RIGHT;
            case d.OverlayNotificationPositions.BOTTOM_LEFT:
              return u.default.Messages.OVERLAY_NOTIFICATIONS_BOTTOM_LEFT;
            case d.OverlayNotificationPositions.BOTTOM_RIGHT:
              return u.default.Messages.OVERLAY_NOTIFICATIONS_BOTTOM_RIGHT;
            default:
              return u.default.Messages.OVERLAY_NOTIFICATIONS_DISABLED;
          }
        },
        g = [
          d.OverlayNotificationPositions.DISABLED,
          d.OverlayNotificationPositions.TOP_LEFT,
          d.OverlayNotificationPositions.TOP_RIGHT,
          d.OverlayNotificationPositions.BOTTOM_LEFT,
          d.OverlayNotificationPositions.BOTTOM_RIGHT,
        ];
      function m(e) {
        let { position: t, onChange: n } = e,
          [l] = a.useState(() => p()),
          h =
            t === d.OverlayNotificationPositions.DISABLED
              ? u.default.Messages.OVERLAY_NOTIFICATION_SETTINGS_DISABLED
              : u.default.Messages.OVERLAY_NOTIFICATION_SETTINGS_POSITION.format(
                  { position: E(t) }
                );
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)(o.FocusRing, {
              within: !0,
              offset: -2,
              children: (0, i.jsx)("div", {
                className: s(c.wrapper, {
                  [c.disabledSelected]:
                    t === d.OverlayNotificationPositions.DISABLED,
                }),
                children: g.map(e =>
                  (0, i.jsxs)(
                    "label",
                    {
                      className: s({
                        [c.selected]: e === t,
                        [c.disabled]:
                          e === d.OverlayNotificationPositions.DISABLED,
                        [c.topRight]:
                          e === d.OverlayNotificationPositions.TOP_RIGHT,
                        [c.topLeft]:
                          e === d.OverlayNotificationPositions.TOP_LEFT,
                        [c.bottomRight]:
                          e === d.OverlayNotificationPositions.BOTTOM_RIGHT,
                        [c.bottomLeft]:
                          e === d.OverlayNotificationPositions.BOTTOM_LEFT,
                      }),
                      children: [
                        E(e),
                        e === d.OverlayNotificationPositions.DISABLED
                          ? (0, i.jsx)(r.default, { className: c.disabledIcon })
                          : null,
                        (0, i.jsx)("input", {
                          type: "radio",
                          name: l,
                          value: e,
                          onChange: t => n(t, e),
                          className: c.hiddenInput,
                        }),
                      ],
                    },
                    e
                  )
                ),
              }),
            }),
            (0, i.jsx)(o.FormText, {
              type: o.FormTextTypes.DESCRIPTION,
              className: f.marginTop8,
              children: h,
            }),
          ],
        });
      }
      m.Positions = d.OverlayNotificationPositions;
      var S = m;
    },
    560995: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          DEFAULT_OPACITY: function () {
            return p;
          },
          default: function () {
            return y;
          },
        }),
        n("70102");
      var i = n("37983"),
        a = n("884691"),
        l = n("414456"),
        s = n.n(l),
        o = n("208302"),
        r = n.n(o),
        d = n("77078"),
        u = n("49111"),
        c = n("666716"),
        f = n("125047");
      let h = u.OverlayWidgetTypes.DEFAULT,
        p = 1,
        E = a.createContext({ type: h, opacity: p }),
        g = a.createContext(void 0),
        m = e => {
          let { children: t, className: n, ...a } = e;
          return (0, i.jsx)(E.Consumer, {
            children: e => {
              let { type: l } = e;
              return (0, i.jsx)(g.Consumer, {
                children: e =>
                  (0, i.jsx)("div", {
                    className: s(n, c.bar, c[r(l)]),
                    style: e,
                    ...a,
                    children: t,
                  }),
              });
            },
          });
        };
      class S extends a.PureComponent {
        render() {
          let { disableScroll: e, children: t, className: n } = this.props;
          return (0, i.jsx)(g.Consumer, {
            children: a =>
              (0, i.jsx)(E.Consumer, {
                children: l => {
                  let o = s(c.body, c[r(l.type)], n);
                  return e
                    ? (0, i.jsx)("div", { className: o, style: a, children: t })
                    : (0, i.jsx)(d.Scroller, {
                        fade: !0,
                        className: o,
                        children: t,
                      });
                },
              }),
          });
        }
      }
      S.defaultProps = { disableScroll: !1 };
      let v = e => {
          let {
            type: t = h,
            width: n,
            height: a,
            children: l,
            className: o,
            opacity: d = p,
            onClick: u,
          } = e;
          return (0, i.jsx)(E.Provider, {
            value: { type: t, opacity: d },
            children: (0, i.jsx)("div", {
              className: s(c.widget, c[r(t)], o),
              style: { width: n, height: a },
              onClick: u,
              children: l,
            }),
          });
        },
        I = e => {
          let { children: t, className: n, dynamicSize: a = !1 } = e;
          return (0, i.jsx)(g.Consumer, {
            children: e =>
              (0, i.jsx)("div", {
                className: s(c.content, n, { [c.staticSize]: !a }),
                style: e,
                children: t,
              }),
          });
        };
      (v.Background = e => {
        let { children: t, opacityOverride: n } = e;
        if (null == t) return null;
        let l = [m, S, I];
        return (0, i.jsx)(E.Consumer, {
          children: e => {
            let { opacity: s } = e,
              o = {
                backgroundColor: "rgba(54, 57, 63, ".concat(
                  "" + (null != n ? n : s),
                  ")"
                ),
              };
            if ("string" == typeof t.type)
              return a.cloneElement(t, { style: o });
            {
              if (l.includes(t.type))
                return (0, i.jsx)(g.Provider, { value: o, children: t });
              let e = t.type.displayName;
              throw Error(
                "Widget.Background cannot be wrapped around "
                  .concat(e, ". Pass a DOM node or one of ")
                  .concat(l.map(e => "Widget." + e.name).join(","))
              );
            }
          },
        });
      }),
        (v.Body = S),
        (v.Content = I),
        (v.Icon = e => {
          let {
            icon: t,
            label: n,
            onClick: a,
            isActive: l,
            tooltipPosition: o = "top",
            size: r = 20,
            isTutorial: u = !1,
          } = e;
          return (0, i.jsx)(d.Tooltip, {
            text: u
              ? (0, i.jsx)("div", { className: c.tutorialTip, children: n })
              : n,
            "aria-label": n,
            position: o,
            forceOpen: u,
            color: u ? d.Tooltip.Colors.BRAND : d.Tooltip.Colors.BLACK,
            children: e => {
              let { onMouseEnter: o, onMouseLeave: u } = e;
              return (0, i.jsx)(d.Button, {
                look: d.Button.Looks.BLANK,
                size: d.Button.Sizes.NONE,
                onClick: a,
                onMouseEnter: o,
                onMouseLeave: u,
                className: s(c.icon, { [c.toggledIconOn]: l }),
                innerClassName: f.flexCenter,
                "aria-label": n,
                children: (0, i.jsx)(t, { width: r, height: r, role: "img" }),
              });
            },
          });
        }),
        (v.Bar = m);
      var y = v;
    },
    686069: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getSecondsSliderLabel: function () {
            return s;
          },
        });
      var i = n("866227"),
        a = n.n(i),
        l = n("782340");
      function s(e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : l.default.Messages.FORM_LABEL_OFF,
          i = a.duration(e, "seconds");
        if (i.days() > 0)
          return (
            t
              ? l.default.Messages.DURATION_DAYS_SHORT
              : l.default.Messages.DURATION_DAYS
          ).format({ days: i.days() });
        if (i.hours() > 0)
          return (
            t
              ? l.default.Messages.DURATION_HOURS_SHORT
              : l.default.Messages.DURATION_HOURS
          ).format({ hours: i.hours() });
        if (i.minutes() > 0)
          return (
            t
              ? l.default.Messages.DURATION_MINUTES_SHORT
              : l.default.Messages.DURATION_MINUTES
          ).format({ minutes: i.minutes() });
        else if (e > 0)
          return (
            t
              ? l.default.Messages.DURATION_SECONDS_SHORT
              : l.default.Messages.DURATION_SECONDS
          ).format({ seconds: i.seconds() });
        else return t ? l.default.Messages.FORM_LABEL_OFF : n;
      }
    },
    170585: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          BrowserCheckeredIcon: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("669491"),
        l = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...r
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, l.default)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              fillRule: "evenodd",
              d: "M4 3a3 3 0 0 0-3 3v2a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a3 3 0 0 0-3-3H4Zm1 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
              clipRule: "evenodd",
              className: o,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M9 15h2v2H9v-2ZM13 15v2h2v-2h-2Z",
              className: o,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              fillRule: "evenodd",
              d: "M2 11a1 1 0 0 0-1 1v6a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1H2Zm5 4v-2H5v2h2Zm2 0H7v2H5v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h-2v-2h2v-2h-2v2h-2v-2h-2v2h-2v-2H9v2Z",
              clipRule: "evenodd",
              className: o,
            }),
          ],
        });
      };
    },
    168535: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          DragIcon: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("669491"),
        l = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...r
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, l.default)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            fillRule: "evenodd",
            d: "M6 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm6-18a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm-2 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z",
            clipRule: "evenodd",
            className: o,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=bd99590951f5f8390e70.js.map
