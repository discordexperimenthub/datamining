(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["56495"],
  {
    577766: function (e, l, a) {
      "use strict";
      a.r(l),
        a.d(l, {
          default: function () {
            return L;
          },
        }),
        a("222007"),
        a("702976");
      var i = a("37983"),
        t = a("884691"),
        s = a("90915"),
        n = a("854588"),
        d = a("77078"),
        c = a("812204"),
        r = a("685665"),
        u = a("393414"),
        o = a("980428"),
        h = a("665382"),
        m = a("155207"),
        v = a("82636"),
        x = a("507692"),
        g = a("664336"),
        p = a("58608"),
        I = a("568734"),
        j = a("550766"),
        f = a("986214"),
        E = a("161918"),
        S = a("607384"),
        C = a("744203"),
        N = a("248210"),
        T = a("525167"),
        _ = a("698372"),
        A = a("969380"),
        M = a("141962"),
        y = a("231457"),
        D = a("707181"),
        b = a("905647"),
        O = a("49111"),
        k = a("782340"),
        B = a("748831");
      function L(e) {
        var l, a;
        let { match: f } = e,
          C =
            null !== (l = (0, u.getLastRouteChangeSourceLocationStack)()) &&
            void 0 !== l
              ? l
              : [],
          { AnalyticsLocationProvider: N } = (0, r.default)([
            ...C,
            c.default.ACTIVITY_DETAIL_PAGE,
          ]),
          { applicationId: _ } = f.params;
        (0, S.useFetchDeveloperActivityShelfItems)(),
          t.useEffect(() => {
            (0, j.fetchShelf)({ guildId: null });
          }, []);
        let M = (0, A.default)({
            applicationId: null != _ ? _ : "",
            size: 2048,
          }),
          y = (0, E.useActivityShelfItemData)(
            null,
            null != _ && "" !== _ ? _ : null
          );
        if (null == _ || null == y) return null;
        if (!(0, I.hasFlag)(y.application.flags, O.ApplicationFlags.EMBEDDED))
          return (0, i.jsx)(s.Redirect, { to: O.Routes.ACTIVITIES });
        let D =
            null != y.activity.activity_preview_video_asset_id
              ? (0, T.default)(_, y.activity.activity_preview_video_asset_id)
              : null,
          L = b.ACTIVITIES_EXTRA_DETAILS[_],
          V =
            (null == L ? void 0 : L.playersSuggestionMin) != null &&
            (null == L ? void 0 : L.playersSuggestionMax) != null
              ? ""
                  .concat(L.playersSuggestionMin, " - ")
                  .concat(L.playersSuggestionMax)
              : void 0;
        return (0, i.jsx)(N, {
          children: (0, i.jsxs)("div", {
            className: B.outerContainer,
            children: [
              (0, i.jsxs)(g.default, {
                children: [
                  (0, i.jsxs)("div", {
                    className: B.titleContainer,
                    children: [
                      (0, i.jsx)(v.default, { className: B.rocketIcon }),
                      (0, i.jsx)(d.Heading, {
                        variant: "heading-md/semibold",
                        children: y.application.name,
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", { className: B.headerBarRightSideFiller }),
                ],
              }),
              (0, i.jsx)(d.Scroller, {
                className: B.scroller,
                children: (0, i.jsxs)("div", {
                  className: B.innerContainer,
                  children: [
                    (0, i.jsxs)("div", {
                      className: B.header,
                      children: [
                        (0, i.jsx)("img", {
                          src: M.url,
                          className: B.headerImage,
                          alt: y.application.name,
                        }),
                        (0, i.jsx)("div", { className: B.headerImageOverlay }),
                        (0, i.jsxs)(d.Clickable, {
                          onClick: () => {
                            (0, u.back)();
                          },
                          className: B.backButtonContainer,
                          children: [
                            (0, i.jsx)(o.default, {
                              color: n.default.unsafe_rawColors.WHITE_100,
                              className: B.backButtonIcon,
                            }),
                            (0, i.jsx)(d.Heading, {
                              color: "always-white",
                              variant: "heading-lg/semibold",
                              children: k.default.Messages.BACK,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: B.detailsOuterContainer,
                      children: (0, i.jsx)("div", {
                        className: B.detailsInnerContainer,
                        children: (0, i.jsxs)("div", {
                          className: B.detailsInnerInnerContainer,
                          children: [
                            (0, i.jsxs)("div", {
                              className: B.activityDetailsContainer,
                              children: [
                                (0, i.jsxs)("div", {
                                  children: [
                                    (0, i.jsx)("div", {
                                      className: B.detailsTitle,
                                      children: (0, i.jsx)(d.Heading, {
                                        variant: "heading-xxl/bold",
                                        children: y.application.name,
                                      }),
                                    }),
                                    (0, i.jsxs)("div", {
                                      className: B.detailsDetails,
                                      children: [
                                        null != V
                                          ? (0, i.jsxs)("div", {
                                              className: B.detailItem,
                                              children: [
                                                (0, i.jsx)(m.default, {
                                                  width: 16,
                                                  height: 16,
                                                }),
                                                (0, i.jsx)(d.Text, {
                                                  variant: "text-xs/semibold",
                                                  className: B.detailItemText,
                                                  children:
                                                    k.default.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_PLAYERS.format(
                                                      { nPlayers: V }
                                                    ),
                                                }),
                                              ],
                                            })
                                          : null,
                                        (null == L
                                          ? void 0
                                          : L.timeSuggestionMinutes) != null
                                          ? (0, i.jsxs)("div", {
                                              className: B.detailItem,
                                              children: [
                                                (0, i.jsx)(h.default, {
                                                  width: 16,
                                                  height: 16,
                                                }),
                                                (0, i.jsx)(d.Text, {
                                                  variant: "text-xs/semibold",
                                                  className: B.detailItemText,
                                                  children:
                                                    k.default.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_MINUTES.format(
                                                      {
                                                        nMinutes:
                                                          L.timeSuggestionMinutes,
                                                      }
                                                    ),
                                                }),
                                              ],
                                            })
                                          : null,
                                        (0, i.jsxs)("div", {
                                          className: B.detailItem,
                                          children: [
                                            (0, i.jsx)(x.default, {
                                              width: 16,
                                              height: 16,
                                            }),
                                            (0, i.jsx)(d.Text, {
                                              variant: "text-xs/semibold",
                                              className: B.detailItemText,
                                              children: y.application.tags
                                                .slice(0, 3)
                                                .join(", "),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, i.jsx)(d.Heading, {
                                  variant: "heading-lg/medium",
                                  className: B.detailsDescription,
                                  children: y.application.description,
                                }),
                                (0, i.jsx)("div", { className: B.divider }),
                                (0, i.jsxs)("div", {
                                  className: B.imagesContainer,
                                  children: [
                                    (null !==
                                      (a =
                                        null == L
                                          ? void 0
                                          : L.gameplayImageUrls) && void 0 !== a
                                      ? a
                                      : []
                                    ).map(e =>
                                      (0, i.jsx)(
                                        "img",
                                        {
                                          src: e,
                                          alt: k.default.Messages.EMBEDDED_ACTIVITIES_GAMEPLAY_ALT.format(
                                            { activityName: y.application.name }
                                          ),
                                          className: B.activityImage,
                                        },
                                        e
                                      )
                                    ),
                                    (0, i.jsx)(p.default, {
                                      loop: !0,
                                      autoPlay: !0,
                                      muted: !0,
                                      className: B.activityImage,
                                      src: D,
                                      poster: M.url,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, i.jsx)("div", {
                              className: B.launcherOuterContainer,
                              children: (0, i.jsx)(R, { activityItem: y }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      function R(e) {
        var l, s;
        let { activityItem: n } = e,
          { analyticsLocations: c } = (0, r.default)(),
          u = (0, _.default)(),
          [o, h] = t.useState(
            null !== (l = (0, C.getActivityGuildSuggestion)()) && void 0 !== l
              ? l
              : void 0
          ),
          [m, v] = t.useState(
            null !==
              (s = (0, N.getActivityVoiceChannelSuggestion)({ guildId: o })) &&
              void 0 !== s
              ? s
              : void 0
          ),
          x = (0, C.useSelectGuildOptions)(),
          g = (0, N.useSelectVoiceChannelOptions)(o),
          p = t.useCallback(() => {
            null != m &&
              null != o &&
              (0, f.default)({
                activityItem: n,
                currentEmbeddedApplication: u,
                channelId: m,
                guildId: o,
                embeddedActivitiesManager: M.default,
                analyticsLocations: c,
              });
          }, [n, c, u, m, o]),
          I = t.useCallback(() => {
            (0, d.openModalLazy)(async () => {
              let { default: e } = await a
                .el("159747")
                .then(a.bind(a, "159747"));
              return l =>
                (0, i.jsx)(e, { activityItem: n, ...l, analyticsLocations: c });
            });
          }, [n, c]);
        return (0, i.jsxs)("div", {
          className: B.launcherInnerContainer,
          children: [
            (0, i.jsx)(d.Text, {
              variant: "text-md/medium",
              children: k.default.Messages.EMBEDDED_ACTIVITIES_START_OR_SHARE,
            }),
            (0, i.jsx)(d.Select, {
              placeholder: k.default.Messages.GUILD_SELECT,
              optionClassName: B.option,
              options: x,
              renderOptionValue: e => {
                let l = e.find(e => e.value === o);
                return null == l
                  ? null
                  : (0, i.jsx)(D.SelectGuildOption, { guildId: l.value });
              },
              renderOptionLabel: e => {
                let { value: l } = e;
                return (0, i.jsx)(D.SelectGuildOption, { guildId: l });
              },
              isSelected: e => e === o,
              select: e => {
                var l;
                h(e),
                  v(
                    null !==
                      (l = (0, N.getActivityVoiceChannelSuggestion)({
                        guildId: e,
                      })) && void 0 !== l
                      ? l
                      : void 0
                  );
              },
              serialize: e => e,
            }),
            (0, i.jsx)(d.Select, {
              placeholder:
                k.default.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
              optionClassName: B.option,
              options: g,
              isSelected: e => {
                let { channel: l } = e;
                return l.id === m;
              },
              select: e => {
                let { channel: l } = e;
                return v(l.id);
              },
              serialize: e => {
                let { channel: l } = e;
                return l.id;
              },
              renderOptionValue: () => {
                let e = g.find(e => e.value.channel.id === m);
                return null == e
                  ? null
                  : (0, i.jsx)(y.SelectChannelOption, {
                      channel: e.value.channel,
                      users: e.value.users,
                    });
              },
              renderOptionLabel: e => {
                let {
                  value: { channel: l, users: a },
                } = e;
                return (0, i.jsx)(y.SelectChannelOption, {
                  channel: l,
                  users: a,
                });
              },
            }),
            (0, i.jsx)(d.Button, {
              fullWidth: !0,
              disabled:
                null == o ||
                null == m ||
                !x.some(e => e.value === o) ||
                !g.some(e => e.value.channel.id === m),
              onClick: p,
              children: k.default.Messages.START,
            }),
            (0, i.jsx)("div", { className: B.divider }),
            (0, i.jsx)(d.Button, {
              fullWidth: !0,
              color: d.Button.Colors.PRIMARY,
              onClick: I,
              children: k.default.Messages.SHARE,
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=054b9972b86802292d4c.js.map
