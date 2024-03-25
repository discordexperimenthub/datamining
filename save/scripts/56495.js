(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["56495"],
  {
    577766: function (e, l, a) {
      "use strict";
      a.r(l),
        a.d(l, {
          default: function () {
            return B;
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
        v = a("665382"),
        h = a("155207"),
        m = a("82636"),
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
        L = a("782340"),
        k = a("748831");
      function B(e) {
        var l, a;
        let { match: f } = e,
          C =
            null !== (l = (0, u.getLastRouteChangeSourceLocationStack)()) &&
            void 0 !== l
              ? l
              : [],
          { analyticsLocations: N } = (0, r.default)([
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
          B = b.ACTIVITIES_EXTRA_DETAILS[_],
          V =
            (null == B ? void 0 : B.playersSuggestionMin) != null &&
            (null == B ? void 0 : B.playersSuggestionMax) != null
              ? ""
                  .concat(B.playersSuggestionMin, " - ")
                  .concat(B.playersSuggestionMax)
              : void 0;
        return (0, i.jsx)(r.AnalyticsLocationProvider, {
          value: N,
          children: (0, i.jsxs)("div", {
            className: k.outerContainer,
            children: [
              (0, i.jsxs)(g.default, {
                children: [
                  (0, i.jsxs)("div", {
                    className: k.titleContainer,
                    children: [
                      (0, i.jsx)(m.default, { className: k.rocketIcon }),
                      (0, i.jsx)(d.Heading, {
                        variant: "heading-md/semibold",
                        children: y.application.name,
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", { className: k.headerBarRightSideFiller }),
                ],
              }),
              (0, i.jsx)(d.Scroller, {
                className: k.scroller,
                children: (0, i.jsxs)("div", {
                  className: k.innerContainer,
                  children: [
                    (0, i.jsxs)("div", {
                      className: k.header,
                      children: [
                        (0, i.jsx)("img", {
                          src: M.url,
                          className: k.headerImage,
                          alt: y.application.name,
                        }),
                        (0, i.jsx)("div", { className: k.headerImageOverlay }),
                        (0, i.jsxs)(d.Clickable, {
                          onClick: () => {
                            (0, u.back)();
                          },
                          className: k.backButtonContainer,
                          children: [
                            (0, i.jsx)(o.default, {
                              color: n.default.unsafe_rawColors.WHITE_100,
                              className: k.backButtonIcon,
                            }),
                            (0, i.jsx)(d.Heading, {
                              color: "always-white",
                              variant: "heading-lg/semibold",
                              children: L.default.Messages.BACK,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: k.detailsOuterContainer,
                      children: (0, i.jsx)("div", {
                        className: k.detailsInnerContainer,
                        children: (0, i.jsxs)("div", {
                          className: k.detailsInnerInnerContainer,
                          children: [
                            (0, i.jsxs)("div", {
                              className: k.activityDetailsContainer,
                              children: [
                                (0, i.jsxs)("div", {
                                  children: [
                                    (0, i.jsx)("div", {
                                      className: k.detailsTitle,
                                      children: (0, i.jsx)(d.Heading, {
                                        variant: "heading-xxl/bold",
                                        children: y.application.name,
                                      }),
                                    }),
                                    (0, i.jsxs)("div", {
                                      className: k.detailsDetails,
                                      children: [
                                        null != V
                                          ? (0, i.jsxs)("div", {
                                              className: k.detailItem,
                                              children: [
                                                (0, i.jsx)(h.default, {
                                                  width: 16,
                                                  height: 16,
                                                }),
                                                (0, i.jsx)(d.Text, {
                                                  variant: "text-xs/semibold",
                                                  className: k.detailItemText,
                                                  children:
                                                    L.default.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_PLAYERS.format(
                                                      { nPlayers: V }
                                                    ),
                                                }),
                                              ],
                                            })
                                          : null,
                                        (null == B
                                          ? void 0
                                          : B.timeSuggestionMinutes) != null
                                          ? (0, i.jsxs)("div", {
                                              className: k.detailItem,
                                              children: [
                                                (0, i.jsx)(v.default, {
                                                  width: 16,
                                                  height: 16,
                                                }),
                                                (0, i.jsx)(d.Text, {
                                                  variant: "text-xs/semibold",
                                                  className: k.detailItemText,
                                                  children:
                                                    L.default.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_MINUTES.format(
                                                      {
                                                        nMinutes:
                                                          B.timeSuggestionMinutes,
                                                      }
                                                    ),
                                                }),
                                              ],
                                            })
                                          : null,
                                        (0, i.jsxs)("div", {
                                          className: k.detailItem,
                                          children: [
                                            (0, i.jsx)(x.default, {
                                              width: 16,
                                              height: 16,
                                            }),
                                            (0, i.jsx)(d.Text, {
                                              variant: "text-xs/semibold",
                                              className: k.detailItemText,
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
                                  className: k.detailsDescription,
                                  children: y.application.description,
                                }),
                                (0, i.jsx)("div", { className: k.divider }),
                                (0, i.jsxs)("div", {
                                  className: k.imagesContainer,
                                  children: [
                                    (null !==
                                      (a =
                                        null == B
                                          ? void 0
                                          : B.gameplayImageUrls) && void 0 !== a
                                      ? a
                                      : []
                                    ).map(e =>
                                      (0, i.jsx)(
                                        "img",
                                        {
                                          src: e,
                                          alt: L.default.Messages.EMBEDDED_ACTIVITIES_GAMEPLAY_ALT.format(
                                            { activityName: y.application.name }
                                          ),
                                          className: k.activityImage,
                                        },
                                        e
                                      )
                                    ),
                                    (0, i.jsx)(p.default, {
                                      loop: !0,
                                      autoPlay: !0,
                                      muted: !0,
                                      className: k.activityImage,
                                      src: D,
                                      poster: M.url,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, i.jsx)("div", {
                              className: k.launcherOuterContainer,
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
          [o, v] = t.useState(
            null !== (l = (0, C.getActivityGuildSuggestion)()) && void 0 !== l
              ? l
              : void 0
          ),
          [h, m] = t.useState(
            null !==
              (s = (0, N.getActivityVoiceChannelSuggestion)({ guildId: o })) &&
              void 0 !== s
              ? s
              : void 0
          ),
          x = (0, C.useSelectGuildOptions)(),
          g = (0, N.useSelectVoiceChannelOptions)(o),
          p = t.useCallback(() => {
            null != h &&
              null != o &&
              (0, f.default)({
                activityItem: n,
                currentEmbeddedApplication: u,
                channelId: h,
                guildId: o,
                embeddedActivitiesManager: M.default,
                analyticsLocations: c,
              });
          }, [n, c, u, h, o]),
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
          className: k.launcherInnerContainer,
          children: [
            (0, i.jsx)(d.Text, {
              variant: "text-md/medium",
              children: L.default.Messages.EMBEDDED_ACTIVITIES_START_OR_SHARE,
            }),
            (0, i.jsx)(d.Select, {
              placeholder: L.default.Messages.GUILD_SELECT,
              optionClassName: k.option,
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
                v(e),
                  m(
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
                L.default.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
              optionClassName: k.option,
              options: g,
              isSelected: e => {
                let { channel: l } = e;
                return l.id === h;
              },
              select: e => {
                let { channel: l } = e;
                return m(l.id);
              },
              serialize: e => {
                let { channel: l } = e;
                return l.id;
              },
              renderOptionValue: () => {
                let e = g.find(e => e.value.channel.id === h);
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
                null == h ||
                !x.some(e => e.value === o) ||
                !g.some(e => e.value.channel.id === h),
              onClick: p,
              children: L.default.Messages.START,
            }),
            (0, i.jsx)("div", { className: k.divider }),
            (0, i.jsx)(d.Button, {
              fullWidth: !0,
              color: d.Button.Colors.PRIMARY,
              onClick: I,
              children: L.default.Messages.SHARE,
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=5ef790bafaa541924cb9.js.map
