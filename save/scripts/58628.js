(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["58628"],
  {
    685073: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          loadInviteSuggestions: function () {
            return i;
          },
          searchInviteSuggestions: function () {
            return s;
          },
        }),
        n("222007");
      var a = n("913144"),
        l = n("777273");
      function i(e) {
        let {
          omitUserIds: t,
          guild: n,
          channel: i,
          applicationId: s,
          inviteTargetType: r,
        } = e;
        return (0, l.fetchUserAffinities)().then(() => {
          a.default.dispatch({
            type: "LOAD_INVITE_SUGGESTIONS",
            omitUserIds: null != t ? t : new Set(),
            guild: n,
            channel: i,
            applicationId: s,
            inviteTargetType: r,
          });
        });
      }
      function s(e) {
        a.default.dispatch({ type: "INVITE_SUGGESTIONS_SEARCH", query: e });
      }
    },
    777273: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          fetchUserAffinities: function () {
            return r;
          },
        });
      var a = n("872717"),
        l = n("913144"),
        i = n("843823"),
        s = n("49111");
      function r() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return i.default.needsRefresh()
          ? (l.default.dispatch({ type: "LOAD_USER_AFFINITIES" }),
            a.HTTP.get({
              url: s.Endpoints.USER_AFFINITIES,
              retries: e ? 3 : 0,
              oldFormErrors: !0,
            }).then(
              e => {
                let { body: t } = e;
                l.default.dispatch({
                  type: "LOAD_USER_AFFINITIES_SUCCESS",
                  affinities: t,
                });
              },
              () => {
                l.default.dispatch({ type: "LOAD_USER_AFFINITIES_FAILURE" });
              }
            ))
          : Promise.resolve();
      }
    },
    505088: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("506070");
      n.es(a, t);
    },
    159747: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return k;
          },
        }),
        n("222007"),
        n("424973");
      var a = n("37983"),
        l = n("884691"),
        i = n("759843"),
        s = n("446674"),
        r = n("77078"),
        o = n("450911"),
        c = n("685073"),
        u = n("819689"),
        d = n("812204"),
        f = n("685665"),
        p = n("428958"),
        m = n("843962"),
        h = n("679653"),
        I = n("305961"),
        g = n("705955"),
        v = n("27618"),
        C = n("697218"),
        T = n("466857"),
        y = n("578706"),
        x = n("83900"),
        E = n("599110"),
        N = n("315102"),
        A = n("306160"),
        R = n("354023"),
        S = n("159885"),
        _ = n("158998"),
        w = n("969380"),
        L = n("49111"),
        j = n("91366"),
        D = n("782340"),
        M = n("838352");
      function k(e) {
        let { activityItem: t, analyticsLocations: n, ...m } = e,
          h = (0, s.useStateFromStores)([C.default], () =>
            C.default.getCurrentUser()
          ),
          { analyticsLocations: I } = (0, f.default)(n);
        (0, p.default)({
          type: i.ImpressionTypes.MODAL,
          name: i.ImpressionNames.ACTIVITY_BOOKMARK_SHARE_MODAL,
          properties: { application_id: t.application.id, location_stack: I },
        });
        let [v, y] = l.useState(""),
          [x, N] = l.useState([]),
          A = (0, w.default)({ applicationId: t.application.id, size: 256 }),
          S = ""
            .concat(window.location.origin)
            .concat(L.Routes.ACTIVITY_DETAILS(t.application.id)),
          _ = (0, s.useStateFromStoresArray)([g.default], () =>
            g.default.getInviteSuggestionRows()
          );
        l.useEffect(() => {
          (0, c.loadInviteSuggestions)({
            omitUserIds: new Set(),
            applicationId: t.application.id,
            inviteTargetType: j.InviteTargetTypes.EMBEDDED_APPLICATION,
          });
        }, [t.application.id]),
          l.useEffect(() => (0, c.searchInviteSuggestions)(v), [v]);
        let k = l.useCallback(async () => {
          let e = 0,
            n = 0,
            a = 0,
            l = g.default
              .getInviteSuggestionRows()
              .filter(e => x.includes(e.item.id))
              .map(t =>
                (function (t, l) {
                  switch (t.type) {
                    case R.RowTypes.DM:
                    case R.RowTypes.FRIEND:
                      e++;
                      break;
                    case R.RowTypes.GROUP_DM:
                      n++;
                      break;
                    case R.RowTypes.CHANNEL:
                      a++;
                  }
                  return t.type === R.RowTypes.GROUP_DM ||
                    t.type === R.RowTypes.CHANNEL
                    ? u.default.sendActivityBookmark(
                        t.item.id,
                        l,
                        d.default.ACTIVITY_DETAIL_PAGE,
                        null
                      )
                    : t.type === R.RowTypes.DM || t.type === R.RowTypes.FRIEND
                      ? o.default
                          .ensurePrivateChannel(t.item.id)
                          .then(e =>
                            u.default.sendActivityBookmark(
                              e,
                              S,
                              d.default.ACTIVITY_DETAIL_PAGE,
                              null
                            )
                          )
                      : Promise.resolve();
                })(t, S)
              );
          await l,
            E.default.track(L.AnalyticEvents.ACTIVITY_BOOKMARK_SHARED, {
              user_id: null == h ? void 0 : h.id,
              application_id: t.application.id,
              n_users: e,
              n_gdms: n,
              n_channels: a,
            }),
            m.onClose();
        }, [t, x, m, S, h]);
        return (0, a.jsxs)(r.ModalRoot, {
          ...m,
          className: M.modalRoot,
          children: [
            (0, a.jsxs)(r.ModalHeader, {
              className: M.header,
              children: [
                (0, a.jsx)(r.Heading, {
                  variant: "heading-md/semibold",
                  children:
                    D.default.Messages.EMBEDDED_ACTIVITIES_SHARE_ACTIVITY_WITH.format(
                      { activityName: t.application.name }
                    ),
                }),
                (0, a.jsx)(r.ModalCloseButton, { onClick: m.onClose }),
              ],
            }),
            (0, a.jsxs)(r.ModalContent, {
              className: M.modalContent,
              children: [
                (0, a.jsx)(T.default, {
                  className: M.searchBar,
                  placeholder: D.default.Messages.SEARCH,
                  label: D.default.Messages.SEARCH,
                  searchTerm: v,
                  onChange: e => y(e),
                  onClear: () => y(""),
                }),
                _.map((e, t) =>
                  (0, a.jsxs)(
                    l.Fragment,
                    {
                      children: [
                        0 === t
                          ? null
                          : (0, a.jsx)("div", { className: M.rowDivider }),
                        (0, a.jsx)(U, {
                          row: e,
                          onClick: () => {
                            let t = [...x];
                            t.includes(e.item.id)
                              ? (t = t.filter(t => t !== e.item.id))
                              : t.push(e.item.id),
                              N(t);
                          },
                          checked: x.includes(e.item.id),
                        }),
                      ],
                    },
                    e.item.id
                  )
                ),
              ],
            }),
            (0, a.jsxs)(r.ModalFooter, {
              className: M.footer,
              children: [
                (0, a.jsx)("div", {
                  className: M.activityInfoOuterContainer,
                  children: (0, a.jsxs)("div", {
                    className: M.activityInfoInnerContainer,
                    children: [
                      (0, a.jsx)("img", {
                        src: A.url,
                        className: M.activityInfoImage,
                        alt: t.application.name,
                      }),
                      (0, a.jsxs)("div", {
                        className: M.activityInfoText,
                        children: [
                          (0, a.jsx)(r.Text, {
                            variant: "text-md/semibold",
                            className: M.ellipsis,
                            children: t.application.name,
                          }),
                          (0, a.jsx)(r.Text, {
                            variant: "text-sm/medium",
                            className: M.ellipsis,
                            children: t.application.description,
                          }),
                          (0, a.jsx)(r.Text, {
                            variant: "text-xs/medium",
                            className: M.ellipsis,
                            children: (0, a.jsx)(r.Anchor, {
                              href: S,
                              children: S,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("div", { className: M.footerDivider }),
                (0, a.jsxs)("div", {
                  className: M.copySendBar,
                  children: [
                    (0, a.jsx)(b, { link: S, applicationId: t.application.id }),
                    (0, a.jsx)(r.Button, {
                      onClick: k,
                      disabled: x.length <= 0,
                      children: D.default.Messages.SEND,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function U(e) {
        let { row: t, onClick: n, checked: l } = e,
          i = null,
          s = null,
          o = null;
        switch (t.type) {
          case R.RowTypes.DM:
          case R.RowTypes.FRIEND:
            (i = (0, a.jsx)(r.Avatar, {
              size: r.AvatarSizes.SIZE_40,
              src: t.item.getAvatarURL(null, 128, !1),
              "aria-label": t.item.username,
            })),
              (s = _.default.getName(t.item)),
              (o = _.default.getUserTag(t.item));
            break;
          case R.RowTypes.GROUP_DM: {
            let e = (0, m.getChannelIconURL)(t.item),
              n = (0, h.computeChannelName)(t.item, C.default, v.default);
            (i = (0, a.jsx)(r.Avatar, {
              src: e,
              "aria-label": n,
              size: r.AvatarSizes.SIZE_40,
            })),
              (s = (0, h.computeChannelName)(t.item, C.default, v.default));
            break;
          }
          case R.RowTypes.CHANNEL: {
            let e = t.item,
              n = I.default.getGuild(e.guild_id);
            if (null == n) return null;
            if (
              ((s = "#".concat(
                (0, h.computeChannelName)(e, C.default, v.default)
              )),
              (o = n.name),
              null != n.icon)
            ) {
              let t = N.default.getGuildIconURL({
                id: e.guild_id,
                icon: n.icon,
                size: 40,
              });
              i = (0, a.jsx)(r.Avatar, {
                src: t,
                "aria-label": s,
                size: r.AvatarSizes.SIZE_40,
              });
            } else {
              let e = (0, S.getAcronym)(n.name);
              i = (0, a.jsx)("div", {
                className: M.acronym,
                "aria-hidden": !0,
                children: e,
              });
            }
          }
        }
        return (0, a.jsxs)(r.Clickable, {
          onClick: n,
          className: M.rowContainer,
          children: [
            (0, a.jsxs)("div", {
              className: M.rowLeft,
              children: [
                (0, a.jsx)("div", { className: M.rowAvatar, children: i }),
                (0, a.jsxs)("div", {
                  className: M.rowNameContainer,
                  children: [
                    (0, a.jsx)(r.Text, {
                      variant: "text-md/semibold",
                      className: M.rowName,
                      children: s,
                    }),
                    (0, a.jsx)(r.Text, {
                      variant: "text-xs/medium",
                      className: M.rowSubName,
                      children: o,
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)(r.Checkbox, {
              value: l,
              type: r.Checkbox.Types.INVERTED,
              displayOnly: !0,
              className: M.rowRight,
            }),
          ],
        });
      }
      function b(e) {
        let { applicationId: t, link: n } = e,
          i = (0, s.useStateFromStores)([C.default], () =>
            C.default.getCurrentUser()
          ),
          [o, c] = l.useState(!1);
        return (
          l.useEffect(() => {
            let e;
            return (
              o &&
                (e = setTimeout(() => {
                  c(!1);
                }, 1e3)),
              () => {
                null != e && clearTimeout(e);
              }
            );
          }, [o]),
          (0, a.jsxs)(r.Button, {
            look: r.Button.Looks.LINK,
            color: r.Button.Colors.LINK,
            onClick: function () {
              E.default.track(L.AnalyticEvents.ACTIVITY_BOOKMARK_COPY_URL, {
                user_id: null == i ? void 0 : i.id,
                application_id: t,
              }),
                (0, A.copy)(n),
                c(!0);
            },
            innerClassName: M.copyButton,
            children: [
              o ? (0, a.jsx)(y.default, {}) : (0, a.jsx)(x.default, {}),
              o ? D.default.Messages.COPIED : D.default.Messages.COPY_LINK,
            ],
          })
        );
      }
    },
    428958: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return g;
          },
        });
      var a = n("884691"),
        l = n("714617"),
        i = n.n(l),
        s = n("995008"),
        r = n.n(s),
        o = n("759843"),
        c = n("913144"),
        u = n("42203"),
        d = n("18494"),
        f = n("162771"),
        p = n("599110"),
        m = n("716241"),
        h = n("939011");
      let I = (0, o.trackMaker)({
        analyticEventConfigs: p.AnalyticEventConfigs,
        dispatcher: c.default,
        TRACK_ACTION_NAME: "TRACK",
      });
      function g(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { disableTrack: !1, trackOnInitialLoad: !1 },
          n = arguments.length > 2 ? arguments[2] : void 0,
          l = a.useRef(),
          s = a.useRef();
        a.useEffect(
          () => {
            let a = !i(l.current, e);
            a && (l.current = e);
            let c = !i(s.current, n);
            if ((c && (s.current = n), !a && !c)) return;
            let g = { ...e, sequenceId: r("impression_") };
            return (
              !(function (e) {
                var t, n;
                let a =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  { name: l, type: i, properties: s } = e;
                if (
                  e.type === o.ImpressionTypes.MODAL &&
                  null == e.name &&
                  (0, h.getImpressionStack)().some(e => {
                    var t;
                    return null === (t = e._stackContext) || void 0 === t
                      ? void 0
                      : t.isSlide;
                  })
                )
                  return;
                (0, h.setCurrentImpression)(e);
                let r =
                    null !== (t = null == s ? void 0 : s.guild_id) &&
                    void 0 !== t
                      ? t
                      : f.default.getGuildId(),
                  c =
                    null !== (n = null == s ? void 0 : s.channel_id) &&
                    void 0 !== n
                      ? n
                      : d.default.getChannelId(r),
                  g = (0, p.expandEventProperties)({
                    impression_type: i,
                    location: (0, h.getLocation)(),
                    ...(0, m.collectGuildAnalyticsMetadata)(r),
                    ...(0, m.collectChannelAnalyticsMetadata)(
                      u.default.getChannel(c)
                    ),
                    ...s,
                  });
                if (a) {
                  (0, h.setDebugTrackedData)(null, null);
                  return;
                }
                null != l && null != i && ((0, p.debugLogEvent)(l, g), I(l, g)),
                  (0, h.setDebugTrackedData)(l, g);
              })(g, t.disableTrack),
              () => {
                null != g && (0, h.cleanupImpression)(g);
              }
            );
          },
          t.trackOnInitialLoad ? [] : void 0
        );
      }
    },
    843962: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getChannelIconURL: function () {
            return r;
          },
        }),
        n("222007");
      var a = n("697218"),
        l = n("315102"),
        i = n("449008"),
        s = n("49111");
      function r(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
          n = arguments.length > 2 ? arguments[2] : void 0;
        switch (e.type) {
          case s.ChannelTypes.DM:
            let [r] = e.recipients
              .map(a.default.getUser)
              .filter(i.isNotNullish);
            if (null == r) return null;
            return r.getAvatarURL(void 0, t, n);
          case s.ChannelTypes.GROUP_DM:
            return l.default.getChannelIconURL({
              id: e.id,
              icon: e.icon,
              applicationId: e.getApplicationId(),
              size: t,
            });
        }
      }
    },
    705955: function (e, t, n) {
      "use strict";
      let a, l, i, s, r, o, c;
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        }),
        n("222007");
      var u = n("446674"),
        d = n("913144"),
        f = n("116460"),
        p = n("449008"),
        m = n("354023"),
        h = n("299039"),
        I = n("42203"),
        g = n("957255"),
        v = n("27618"),
        C = n("843823"),
        T = n("49111"),
        y = n("91366");
      let x = new Set(),
        E = [],
        N = new Map();
      function A(e) {
        let t = new Set(),
          n =
            null == s || c === y.InviteTargetTypes.EMBEDDED_APPLICATION
              ? void 0
              : s.id,
          a = (0, m.getMostRecentDMedUser)(x, n);
        for (let e of (null != a && !v.default.isBlocked(a.id) && t.add(a.id),
        C.default.getUserAffinitiesUserIds()))
          t.add(e);
        let l = new Set();
        if (c === y.InviteTargetTypes.EMBEDDED_APPLICATION) {
          let e = f.default.getChannelHistory();
          e.map(e => I.default.getChannel(e))
            .filter(p.isNotNullish)
            .filter(e => e.type === T.ChannelTypes.GUILD_TEXT)
            .filter(e => g.default.can(T.Permissions.SEND_MESSAGES, e))
            .slice(0, 3)
            .forEach(e => l.add(e.id));
        }
        return (0, m.generateRowsForQuery)({
          query: e,
          omitUserIds: x,
          suggestedUserIds: t,
          maxRowsWithoutQuery: 100,
          omitGuildId: n,
          suggestedChannelIds: l,
          inviteTargetType: c,
        });
      }
      function R(e) {
        (E = e),
          (N = new Map()),
          e.forEach((e, t) => {
            N.set(e, { index: t });
          });
      }
      class S extends u.default.Store {
        initialize() {
          this.waitFor(v.default, C.default);
        }
        getInviteSuggestionRows() {
          return E;
        }
        getTotalSuggestionsCount() {
          return l;
        }
        getInitialCounts() {
          return a;
        }
        getSelectedInviteMetadata(e) {
          let t = N.get(e),
            n = C.default.getUserAffinitiesUserIds();
          return null != t
            ? {
                rowNum: t.index,
                isAffinitySuggestion: e.isSuggested,
                numTotal: E.length,
                numAffinityConnections: n.size,
                isFiltered: i,
              }
            : null;
        }
      }
      S.displayName = "InviteSuggestionsStore";
      var _ = new S(d.default, {
        LOAD_INVITE_SUGGESTIONS: function (e) {
          let {
            omitUserIds: t,
            guild: n,
            channel: u,
            applicationId: d,
            inviteTargetType: f,
          } = e;
          (s = null != u ? n : null), (r = u), (o = d), (c = f);
          let p = v.default.getRelationships(),
            I = h.default
              .keys(p)
              .filter(e => p[e] === T.RelationshipTypes.BLOCKED),
            g = (0, m.getUsersAlreadyJoined)({
              channel: r,
              applicationId: o,
              inviteTargetType: f,
            });
          (x = new Set([...t, ...I, ...g])), (i = !1);
          let { rows: C, counts: y } = A("");
          R(C), (a = y), (l = E.length);
        },
        INVITE_SUGGESTIONS_SEARCH: function (e) {
          let { query: t } = e;
          i = "" !== t;
          let { rows: n } = A(t);
          R(n);
        },
      });
    },
    466857: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        i = n("414456"),
        s = n.n(i),
        r = n("77078"),
        o = n("381546"),
        c = n("229915"),
        u = n("782340"),
        d = n("717386");
      class f extends l.Component {
        render() {
          let {
              autoFocus: e,
              label: t,
              placeholder: n,
              searchTerm: l,
              inputClassName: i,
              className: f,
              onChange: p,
              onFocus: m,
              onBlur: h,
              onKeyPress: I,
              autoComplete: g,
              forwardedRef: v,
              closeIconClassName: C,
              searchIconClassName: T,
              cta: y,
            } = this.props,
            x = null != l && l.length > 0,
            E = null != v ? v : this._textInputRef;
          return (0, a.jsx)(r.FocusRing, {
            focusTarget: E,
            ringTarget: this._containerRef,
            children: (0, a.jsxs)("div", {
              className: s(d.searchBox, f),
              ref: this._containerRef,
              children: [
                (0, a.jsx)(r.TextInput, {
                  inputRef: E,
                  focusProps: { enabled: !1 },
                  name: "search",
                  maxLength: 100,
                  className: d.searchBoxInputWrapper,
                  inputClassName: s(d.searchBoxInput, i),
                  onChange: p,
                  onFocus: m,
                  onBlur: h,
                  onKeyPress: I,
                  value: x ? l : "",
                  placeholder: n,
                  autoFocus: e,
                  "aria-label": t,
                  autoComplete: g ? "on" : "off",
                }),
                null != y
                  ? (0, a.jsx)(r.Text, {
                      color: "text-muted",
                      variant: "text-xs/normal",
                      className: d.cta,
                      children: y,
                    })
                  : null,
                x
                  ? (0, a.jsx)(r.Clickable, {
                      onClick: this.handleClear,
                      className: d.clear,
                      "aria-label": u.default.Messages.SEARCH_CLEAR,
                      children: (0, a.jsx)(o.default, {
                        className: s(d.clearIcon, C),
                      }),
                    })
                  : (0, a.jsx)(c.default, {
                      className: s(d.searchIcon, T),
                      "aria-label": u.default.Messages.SEARCH,
                    }),
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            (this._textInputRef = l.createRef()),
            (this._containerRef = l.createRef()),
            (this.handleClear = () => {
              let { onClear: e, forwardedRef: t } = this.props,
                { current: n } = null != t ? t : this._textInputRef;
              null != n && n.focus(), null != e && e();
            });
        }
      }
      f.defaultProps = { autoComplete: !1 };
      var p = l.forwardRef((e, t) => (0, a.jsx)(f, { forwardedRef: t, ...e }));
    },
    381546: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("469563"),
        i = n("505088"),
        s = n("75196"),
        r = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: l = "currentColor",
              foreground: i,
              backgroundColor: r,
              ...o
            } = e;
            return (0, a.jsxs)("svg", {
              ...(0, s.default)(o),
              width: t,
              height: n,
              viewBox: "0 0 14 14",
              children: [
                null != r
                  ? (0, a.jsx)("circle", { r: 5, cx: 7, cy: 7, fill: r })
                  : null,
                (0, a.jsx)("path", {
                  fill: l,
                  className: i,
                  d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z",
                }),
              ],
            });
          },
          i.CircleXIcon,
          void 0,
          { size: 24 }
        );
    },
    306160: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SUPPORTS_COPY: function () {
            return s;
          },
          copy: function () {
            return r;
          },
        }),
        n("70102");
      var a = n("281071"),
        l = n("773336"),
        i = n("50885");
      let s = (() => {
        if (l.isPlatformEmbedded) return null != i.default.copy;
        try {
          return (
            document.queryCommandEnabled("copy") ||
            document.queryCommandSupported("copy")
          );
        } catch (e) {
          return !1;
        }
      })();
      function r(e) {
        return (
          !!s && (l.isPlatformEmbedded ? (i.default.copy(e), !0) : a.copy(e))
        );
      }
    },
    506070: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CircleXIcon: function () {
            return s;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("669491"),
        i = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          secondaryColor: s = "transparent",
          secondaryColorClass: r = "",
          color: o = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: c = "",
          ...u
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, i.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, a.jsx)("circle", {
              cx: "12",
              cy: "12",
              r: "10",
              fill: "string" == typeof s ? s : s.css,
              className: r,
            }),
            (0, a.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              fillRule: "evenodd",
              d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm4.7-15.7a1 1 0 0 0-1.4 0L12 10.58l-3.3-3.3a1 1 0 0 0-1.4 1.42L10.58 12l-3.3 3.3a1 1 0 1 0 1.42 1.4L12 13.42l3.3 3.3a1 1 0 0 0 1.4-1.42L13.42 12l3.3-3.3a1 1 0 0 0 0-1.4Z",
              clipRule: "evenodd",
              className: c,
            }),
          ],
        });
      };
    },
    281071: function (e, t, n) {
      "use strict";
      function a(e) {
        let t = document.body;
        if (null == t)
          throw Error(
            "[Utils] ClipboardUtils.copy(): assert failed: document.body != null"
          );
        let n = document.createRange(),
          a = window.getSelection(),
          l = document.createElement("textarea");
        (l.value = e),
          (l.contentEditable = "true"),
          (l.style.visibility = "none"),
          t.appendChild(l),
          n.selectNodeContents(l),
          null == a || a.removeAllRanges(),
          null == a || a.addRange(n),
          l.focus(),
          l.setSelectionRange(0, e.length);
        let i = document.execCommand("copy");
        return t.removeChild(l), i;
      }
      n.r(t),
        n.d(t, {
          copy: function () {
            return a;
          },
        }),
        n("70102");
    },
  },
]);
//# sourceMappingURL=a09557926cac89be1636.js.map
