(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["53827"],
  {
    107681: function (e, t, a) {
      "use strict";
      e.exports = a.p + "93ddb0353236900986d8.png";
    },
    259707: function (e, t, a) {
      "use strict";
      e.exports = a.p + "80fd3641042d437f5b2b.png";
    },
    907572: function (e, t, a) {
      "use strict";
      a.r(t);
      var s = a("437816");
      a.es(s, t);
    },
    775955: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return l;
          },
        });
      var s = a("37983");
      a("884691");
      var n = a("669491"),
        i = a("75196");
      function l(e) {
        let {
          width: t = 24,
          height: a = 24,
          color: l = n.default.unsafe_rawColors.WHITE_500.css,
          backgroundColor: r = n.default.unsafe_rawColors.BRAND_500.css,
          ...o
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, i.default)(o),
          width: t,
          height: a,
          viewBox: "0 0 14 14",
          children: [
            (0, s.jsx)("path", {
              fill: r,
              d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166",
            }),
            (0, s.jsx)("path", {
              d: "M6.5,10.3L3.4,8l0.9-1.2l1.8,1.4l3.3-4.3l1.2,0.9L6.5,10.3z",
              fill: l,
            }),
          ],
        });
      }
    },
    255403: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return m;
          },
        });
      var s = a("759843"),
        n = a("872717"),
        i = a("913144"),
        l = a("448993"),
        r = a("599110"),
        o = a("840707"),
        d = a("210898"),
        u = a("856368"),
        c = a("697543"),
        E = a("49111"),
        f = a("782340");
      a("2581");
      var m = {
        resetSuggestions: () =>
          i.default.dispatch({ type: "POMELO_SUGGESTIONS_RESET" }),
        async fetchSuggestionsRegistration(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1500;
          if ((0, c.hasRegistrationUsernameSuggestions)()) {
            i.default.dispatch({ type: "POMELO_SUGGESTIONS_RESET" });
            try {
              var a;
              let s = await n.default.get({
                url: E.Endpoints.POMELO_SUGGESTIONS_UNAUTHED,
                query: null == e ? void 0 : { global_name: e },
                timeout: t,
              });
              if (
                s.ok &&
                (null === (a = s.body) || void 0 === a ? void 0 : a.username) !=
                  null
              )
                return i.default.dispatch({
                  type: "POMELO_REGISTRATION_SUGGESTIONS_SUCCESS",
                  suggestion: s.body,
                  source: e,
                });
            } catch (e) {
              return;
            }
          }
        },
        async fetchSuggestions(e) {
          if ((0, u.isInPomeloSuggestionsExperiment)())
            try {
              var t;
              i.default.dispatch({
                type: "POMELO_SUGGESTIONS_FETCH",
                usernameSuggestionLoading: !0,
              });
              let a = await n.default.get({
                url: E.Endpoints.POMELO_SUGGESTIONS,
                timeout: e,
              });
              if (
                a.ok &&
                (null === (t = a.body) || void 0 === t ? void 0 : t.username) !=
                  null
              )
                return i.default.dispatch({
                  type: "POMELO_SUGGESTIONS_SUCCESS",
                  suggestion: a.body,
                });
            } catch (e) {
              return;
            }
        },
        async attemptPomelo(e) {
          var t, a;
          let n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "modal",
            u = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            c = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          let m =
            ((t = e),
            !1 === /^[A-Za-z0-9_.]*$/.test(t)
              ? f.default.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
              : t.includes("..")
                ? f.default.Messages.POMELO_EXISTING_FLOW_ERROR_DOT_DOT
                : t.length < 2 || t.length > 32
                  ? f.default.Messages.POMELO_EXISTING_FLOW_ERROR_LIMIT.format({
                      maxNum: 32,
                      minNum: 2,
                    })
                  : void 0);
          if (null != m)
            return (
              r.default.track(E.AnalyticEvents.POMELO_ERRORS, {
                reason: m,
                username_error: !0,
                location: n,
                one_click_flow: c,
              }),
              i.default.dispatch({
                type: "POMELO_ATTEMPT_FAILURE",
                username: e,
                error: m,
              })
            );
          if ((0, d.getPomeloAttempt)())
            try {
              let t = await o.default.post({
                url: u
                  ? E.Endpoints.POMELO_ATTEMPT_UNAUTHED
                  : E.Endpoints.POMELO_ATTEMPT,
                body: { username: e },
                trackedActionData: {
                  event: s.NetworkActionNames.POMELO_ATTEMPT,
                  properties: { requested_username: e },
                },
              });
              t.body.taken &&
                r.default.track(E.AnalyticEvents.POMELO_ERRORS, {
                  reason: "already_taken",
                  username_error: !0,
                  location: n,
                  one_click_flow: c,
                }),
                i.default.dispatch({
                  type: "POMELO_ATTEMPT_SUCCESS",
                  username: e,
                  taken: t.body.taken,
                });
            } catch (o) {
              let t = new l.APIError(o),
                s =
                  null !== (a = t.getAnyErrorMessage()) && void 0 !== a
                    ? a
                    : void 0;
              r.default.track(E.AnalyticEvents.POMELO_ERRORS, {
                reason: s,
                username_error: !0,
                location: n,
                one_click_flow: c,
              }),
                i.default.dispatch({
                  username: e,
                  type: "POMELO_ATTEMPT_FAILURE",
                  error:
                    null != t.status && t.status < 500 && 401 !== t.status
                      ? s
                      : void 0,
                  statusCode: t.status,
                  retryAfter: t.retryAfter,
                });
            }
        },
        async createPomelo(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            a = await o.default.post({
              body: e,
              url: E.Endpoints.POMELO_CREATE,
              trackedActionData: {
                event: s.NetworkActionNames.POMELO_CREATE,
                properties: { one_click_flow: t },
              },
            });
          return (
            i.default.dispatch({ type: "CURRENT_USER_UPDATE", user: a.body }),
            a.body
          );
        },
      };
    },
    210898: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          getPomeloAttempt: function () {
            return i;
          },
        });
      var s = a("862205");
      let n = (0, s.createExperiment)({
          kind: "user",
          label: "Pomelo Attempt",
          id: "2023-04_pomelo_attempt",
          defaultConfig: { enabled: !1 },
          treatments: [{ id: 1, label: "enabled", config: { enabled: !0 } }],
        }),
        i = () =>
          n.getCurrentConfig(
            { location: "c22166_1" },
            { autoTrackExposure: !1 }
          ).enabled;
    },
    947962: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          usePomeloDebounceDelay: function () {
            return i;
          },
        });
      var s = a("862205");
      let n = (0, s.createExperiment)({
          kind: "user",
          label: "Pomelo Debounce Delay",
          id: "2023-03_pomelo_debounce_delay",
          defaultConfig: { delay: 600 },
          treatments: [
            { id: 1, label: "600ms", config: { delay: 600 } },
            { id: 2, label: "700ms", config: { delay: 700 } },
            { id: 3, label: "800ms", config: { delay: 800 } },
            { id: 4, label: "900ms", config: { delay: 900 } },
            { id: 5, label: "1000ms", config: { delay: 1e3 } },
          ],
        }),
        i = () =>
          n.useExperiment({ location: "52560d_1" }, { autoTrackExposure: !1 })
            .delay;
    },
    2581: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return c;
          },
        });
      var s = a("693566"),
        n = a.n(s),
        i = a("446674"),
        l = a("913144"),
        r = a("718517");
      let o = { taken: null, error: void 0, rateLimited: !0 },
        d = {
          validations: new n({ max: 100, maxAge: 6e4 }),
          currentUsernameInvalid: !1,
          retryAfterTime: null,
          suggestions: {
            migration: {
              suggestion: { username: void 0 },
              fetched: !1,
              usernameSuggestionLoading: !1,
            },
            registration: {
              suggestion: { username: void 0 },
              source: void 0,
              fetched: !1,
            },
          },
        };
      class u extends i.default.Store {
        isRateLimited() {
          return null != d.retryAfterTime && Date.now() < d.retryAfterTime;
        }
        validate(e) {
          let t = d.validations.get(e);
          return this.isRateLimited() && (null == t || t.rateLimited)
            ? o
            : this.isRateLimited() || null == t || !t.rateLimited
              ? t
              : void 0;
        }
        registrationUsernameSuggestion() {
          return d.suggestions.registration.suggestion.username;
        }
        usernameSuggestion() {
          return d.suggestions.migration.suggestion.username;
        }
        usernameSuggestionLoading() {
          return d.suggestions.migration.usernameSuggestionLoading;
        }
        isCurrentUsernameInvalid() {
          return d.currentUsernameInvalid;
        }
        wasRegistrationSuggestionFetched(e) {
          return (
            d.suggestions.registration.source === e &&
            d.suggestions.registration.fetched
          );
        }
        wasSuggestionsFetched() {
          return d.suggestions.migration.fetched;
        }
      }
      u.displayName = "PomeloStore";
      var c = new u(l.default, {
        POMELO_ATTEMPT_SUCCESS: function (e) {
          let { username: t, taken: a } = e;
          d.validations.set(t, { taken: a });
        },
        POMELO_ATTEMPT_FAILURE: function (e) {
          let { username: t, error: a, statusCode: s, retryAfter: n } = e;
          429 === s
            ? d.validations.set(
                t,
                { taken: null, error: a, rateLimited: !0 },
                (null != n ? n : 7) * r.default.Millis.SECOND
              )
            : d.validations.set(t, { taken: null, error: a }),
            null != n &&
              (d.retryAfterTime = Date.now() + n * r.default.Millis.SECOND);
        },
        POMELO_SUGGESTIONS_RESET: function () {
          (d.suggestions.migration = {
            suggestion: { username: void 0 },
            fetched: !1,
            usernameSuggestionLoading: !1,
          }),
            (d.suggestions.registration = {
              suggestion: { username: void 0 },
              source: void 0,
              fetched: !1,
            });
        },
        POMELO_SUGGESTIONS_SUCCESS: function (e) {
          let { suggestion: t } = e;
          (d.suggestions.migration = {
            suggestion: t,
            fetched: !0,
            usernameSuggestionLoading: !1,
          }),
            (null == t ? void 0 : t.invalid_current_username) === !0 &&
              (d.currentUsernameInvalid = !0);
        },
        POMELO_SUGGESTIONS_FETCH: function (e) {
          let { usernameSuggestionLoading: t } = e;
          d.suggestions.migration.usernameSuggestionLoading = t;
        },
        POMELO_REGISTRATION_SUGGESTIONS_SUCCESS: function (e) {
          let { suggestion: t, source: a } = e;
          (d.suggestions.registration = {
            suggestion: t,
            source: a,
            fetched: !0,
          }),
            (null == t ? void 0 : t.username) != null &&
              d.validations.set(t.username, { taken: !1 });
        },
      });
    },
    856368: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          isInPomeloSuggestionsExperiment: function () {
            return i;
          },
        });
      var s = a("862205");
      let n = (0, s.createExperiment)({
          kind: "user",
          label: "Pomelo Suggestions",
          id: "2023-04_pomelo_suggestions",
          defaultConfig: { enabled: !1 },
          treatments: [{ id: 1, label: "enabled", config: { enabled: !0 } }],
        }),
        i = () =>
          n.getCurrentConfig(
            { location: "1907ae_1" },
            { autoTrackExposure: !1 }
          ).enabled;
    },
    644417: function (e, t, a) {
      "use strict";
      var s, n;
      a.r(t),
        a.d(t, {
          NameValidationState: function () {
            return s;
          },
        }),
        ((n = s || (s = {})).AVAILABLE = "AVAILABLE"),
        (n.ERROR = "ERROR"),
        (n.RATE_LIMIT = "RATE_LIMIT"),
        (n.INTERNAL_ERROR = "INTERNAL_ERROR");
    },
    415133: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          getUserAvatarURLForPomelo: function () {
            return E;
          },
          getDefaultPomelo: function () {
            return f;
          },
          shouldSkipToEditUsername: function () {
            return _;
          },
          formatPomeloForEditing: function () {
            return I;
          },
          getMemberSince: function () {
            return T;
          },
          formatUsernameLiveCheckValidation: function () {
            return h;
          },
          getLocalizedForcedUUDate: function () {
            return O;
          },
        }),
        a("781738"),
        a("222007"),
        a("794252");
      var s = a("866227"),
        n = a.n(s),
        i = a("506838"),
        l = a("315102"),
        r = a("299039"),
        o = a("159885"),
        d = a("644417"),
        u = a("935583"),
        c = a("782340");
      function E(e) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return l.default.getUserAvatarURL(
          { id: e.id, avatar: e.avatar, bot: e.bot, discriminator: "0000" },
          t,
          80
        );
      }
      function f(e) {
        let t = (0, o.stripDiacritics)(e.username)
          .replace(u.dirtyChars, "")
          .replace(u.coalescePeriods, ".")
          .toLowerCase();
        return "".concat(t).concat(e.discriminator).substring(0, 32);
      }
      let m = ["@", "#", ":"],
        S = [
          "```",
          "discord",
          "hypesquad",
          "system message",
          "system mesage",
          "sustem message",
          "sustem mesage",
          "clyde",
        ],
        g = [
          "discordtag",
          "everyone",
          "here",
          "discord nitro",
          "discord",
          "snowsgiving",
        ];
      function _(e) {
        var t, a;
        let s = e.username.toLowerCase();
        if (
          ((t = s),
          (a = u.CONTROL_CHARACTERS_CODE),
          t
            .split("")
            .filter(e => !a.includes(e.charCodeAt(0)))
            .join("")).length < 2
        )
          return !0;
        for (let e of m) if (s.includes(e)) return !0;
        for (let e of g) if (s === e.toLowerCase()) return !0;
        for (let e of S) if (s.includes(e.toLowerCase())) return !0;
        return !1;
      }
      function I(e) {
        return e.toLowerCase().replace(/\s/g, "").replace("@", "");
      }
      function T(e) {
        let t = r.default.extractTimestamp(e);
        try {
          return n(new Date(t)).format("MMM DD, YYYY");
        } catch (e) {}
        return null;
      }
      function h(e) {
        return (0, i.match)(e)
          .with({ rateLimited: !0 }, () => ({
            type: d.NameValidationState.RATE_LIMIT,
            message:
              c.default.Messages
                .APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT,
          }))
          .with({ error: i.P.not(i.P.nullish) }, e => {
            let { error: t } = e;
            return { type: d.NameValidationState.ERROR, message: t };
          })
          .with({ taken: !1 }, () => ({
            type: d.NameValidationState.AVAILABLE,
            message: c.default.Messages.POMELO_EXISTING_FLOW_AVAILABLE,
          }))
          .with({ taken: !0 }, () => ({
            type: d.NameValidationState.ERROR,
            message: c.default.Messages.POMELO_EXISTING_FLOW_ERROR_UNAVAILABLE,
          }))
          .with({ error: i.P.nullish }, () => ({
            type: d.NameValidationState.INTERNAL_ERROR,
            message: "",
          }))
          .otherwise(() => void 0);
      }
      function O(e) {
        let t = new Date(2024, 2, 4);
        return t.toLocaleDateString(e, {
          month: "long",
          day: "numeric",
          year: "numeric",
        });
      }
    },
    697543: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useUURegistrationExperiment: function () {
            return i;
          },
          hasRegistrationUsernameSuggestions: function () {
            return l;
          },
        });
      var s = a("862205");
      let n = (0, s.createExperiment)({
          kind: "user",
          id: "2023-06_unique_username_registration",
          label: "Unique Username Registration",
          defaultConfig: { livecheckEnabled: !0, suggestions: !0 },
          treatments: [
            {
              id: 1,
              label:
                "Unique Username Registration enabled -livecheck -suggestions",
              config: { livecheckEnabled: !1, suggestions: !1 },
            },
            {
              id: 2,
              label:
                "Unique Username Registration enabled -livecheck +suggestions",
              config: { livecheckEnabled: !1, suggestions: !0 },
            },
            {
              id: 3,
              label:
                "Unique Username Registration enabled +livecheck -suggestions",
              config: { livecheckEnabled: !0, suggestions: !1 },
            },
            {
              id: 4,
              label:
                "Unique Username Registration enabled +livecheck +suggestions",
              config: { livecheckEnabled: !0, suggestions: !0 },
            },
          ],
        }),
        i = () =>
          n.useExperiment({ location: "83ca1a_3" }, { autoTrackExposure: !1 }),
        l = () =>
          n.getCurrentConfig(
            { location: "83ca1a_4" },
            { autoTrackExposure: !1 }
          ).suggestions;
    },
    44984: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useUsernameLiveCheck: function () {
            return u;
          },
        });
      var s = a("884691"),
        n = a("917351"),
        i = a("65597"),
        l = a("255403"),
        r = a("947962"),
        o = a("2581"),
        d = a("415133");
      let u = function (e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          c = (0, i.default)([o.default], () => o.default.validate(e), [e]),
          E = (0, i.default)([o.default], () => o.default.isRateLimited()),
          f = (0, r.usePomeloDebounceDelay)(),
          m = s.useMemo(
            () =>
              (0, n.debounce)(
                e =>
                  l.default.attemptPomelo(
                    e,
                    a ? "registration" : "modal",
                    a,
                    u
                  ),
                f
              ),
            [f, a, u]
          );
        return (
          s.useEffect(() => {
            t && !E && null == c && "" !== e && m(e);
          }, [t, E, c, e, m]),
          s.useMemo(
            () =>
              null != c ? (0, d.formatUsernameLiveCheckValidation)(c) : void 0,
            [c]
          )
        );
      };
    },
    22658: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useUsernameSuggestion: function () {
            return o;
          },
        }),
        a("222007"),
        a("506083");
      var s = a("884691"),
        n = a("65597"),
        i = a("913144"),
        l = a("255403"),
        r = a("2581");
      let o = e => {
        let [t, a] = (0, n.useStateFromStoresArray)([r.default], () => [
          r.default.usernameSuggestion(),
          r.default.usernameSuggestionLoading(),
        ]);
        return (
          s.useEffect(
            () => (
              r.default.wasSuggestionsFetched()
                ? i.default.dispatch({
                    type: "POMELO_SUGGESTIONS_FETCH",
                    usernameSuggestionLoading: !1,
                  })
                : l.default.fetchSuggestions(e).finally(() => {
                    i.default.dispatch({
                      type: "POMELO_SUGGESTIONS_FETCH",
                      usernameSuggestionLoading: !1,
                    });
                  }),
              () => {
                l.default.resetSuggestions();
              }
            ),
            []
          ),
          { usernameSuggestion: t, usernameSuggestionLoading: a }
        );
      };
    },
    386244: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return i;
          },
        });
      var s = a("37983");
      a("884691");
      var n = a("75196");
      function i(e) {
        let {
          width: t = 16,
          height: a = 16,
          color: i = "currentColor",
          foreground: l,
          ...r
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, n.default)(r),
          width: t,
          height: a,
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("g", {
              clipPath: "url(#clip0_3283_145261)",
              children: (0, s.jsx)("path", {
                d: "M3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H5C3.89 3 3 3.9 3 5ZM15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6C13.66 6 15 7.34 15 9ZM6 17C6 15 10 13.9 12 13.9C14 13.9 18 15 18 17V18H6V17Z",
                fill: i,
                className: l,
              }),
            }),
            (0, s.jsx)("defs", {
              children: (0, s.jsx)("clipPath", {
                id: "clip0_3283_145261",
                children: (0, s.jsx)("rect", {
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
    253989: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return i;
          },
        });
      var s = a("37983");
      a("884691");
      var n = a("75196");
      function i(e) {
        let {
          width: t = 16,
          height: a = 16,
          color: i = "currentColor",
          foreground: l,
          ...r
        } = e;
        return (0, s.jsx)("svg", {
          ...(0, n.default)(r),
          width: t,
          height: a,
          viewBox: "0 0 23 23",
          children: (0, s.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M11.5 23C17.8513 23 23 17.8513 23 11.5C23 5.14873 17.8513 0 11.5 0C5.14873 0 0 5.14873 0 11.5C0 17.8513 5.14873 23 11.5 23ZM10.0284 5.58634C10.5187 5.66805 10.8499 6.13176 10.7682 6.62205L10.4697 8.41282H13.7544L14.1022 6.32613C14.1839 5.83584 14.6476 5.50462 15.1379 5.58634C15.6282 5.66805 15.9594 6.13176 15.8777 6.62205L15.5792 8.41282H16.6933C17.1903 8.41282 17.5933 8.81577 17.5933 9.31282C17.5933 9.80988 17.1903 10.2128 16.6933 10.2128H15.2792L14.8223 12.9547H16.1256C16.6226 12.9547 17.0256 13.3577 17.0256 13.8547C17.0256 14.3518 16.6226 14.7547 16.1256 14.7547H14.5223L14.1745 16.8414C14.0928 17.3317 13.6291 17.6629 13.1388 17.5812C12.6485 17.4995 12.3173 17.0358 12.399 16.5455L12.6974 14.7547H9.41273L9.06495 16.8414C8.98324 17.3317 8.51953 17.6629 8.02924 17.5812C7.53895 17.4995 7.20773 17.0358 7.28944 16.5455L7.5879 14.7547H6.47395C5.97689 14.7547 5.57395 14.3518 5.57395 13.8547C5.57395 13.3577 5.97689 12.9547 6.47395 12.9547H7.8879L8.34489 10.2128H7.04168C6.54462 10.2128 6.14168 9.80988 6.14168 9.31282C6.14168 8.81577 6.54462 8.41282 7.04168 8.41282H8.64489L8.99267 6.32613C9.07438 5.83584 9.53809 5.50462 10.0284 5.58634ZM13.4544 10.2128L12.9974 12.9547H9.71273L10.1697 10.2128H13.4544Z",
            fill: i,
            className: l,
          }),
        });
      }
    },
    892845: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return A;
          },
        }),
        a("222007");
      var s = a("37983"),
        n = a("884691"),
        i = a("627445"),
        l = a.n(i),
        r = a("759843"),
        o = a("65597"),
        d = a("77078"),
        u = a("327037"),
        c = a("152584"),
        E = a("599417"),
        f = a("506885"),
        m = a("697218"),
        S = a("945330"),
        g = a("599110"),
        _ = a("158998"),
        I = a("255403"),
        T = a("2581"),
        h = a("415133"),
        O = a("42060"),
        N = a("22658"),
        M = a("998957"),
        L = a("426149"),
        R = a("767282"),
        P = a("935583"),
        v = a("15881"),
        C = a("49111"),
        x = a("782340"),
        p = a("197920");
      function A(e) {
        let t,
          {
            source: a,
            transitionState: i,
            onClose: A,
            oneClickFlow: U = !1,
          } = e,
          [G, D] = n.useState(
            U ? v.PomeloModalSlides.SUGGESTIONS : v.PomeloModalSlides.INFO
          ),
          [b, j] = n.useState(!1),
          [k, F] = n.useState(null),
          [w, B] = n.useState(U ? P.EditState.SUGGESTION : P.EditState.NONE),
          [H, V] = n.useState(!1),
          [W, X] = n.useState(!1),
          z = n.useRef(null),
          Y = (0, o.default)([T.default], () =>
            T.default.isCurrentUsernameInvalid()
          ),
          Z = (0, o.default)([m.default], () => {
            let e = m.default.getCurrentUser();
            return l(null != e, "PomeloModal: user cannot be undefined"), e;
          }),
          q = (0, O.useForceMigration)(),
          { usernameSuggestion: K, usernameSuggestionLoading: Q } = (0,
          N.useUsernameSuggestion)(U ? P.TIMEOUT_TIME : void 0);
        n.useEffect(() => {
          w === P.EditState.EDIT_USERNAME && X(!0),
            g.default.track(C.AnalyticEvents.POMELO_EDIT_STEP_VIEWED, {
              source: a,
              step: w,
            });
        }, [w, a]),
          n.useEffect(() => {
            !W &&
              !H &&
              null != K &&
              K.length > 0 &&
              J(e => ({ ...e, username: K }));
          }, [K, W, H]);
        let [$, J] = n.useState({
            username: (0, h.getDefaultPomelo)(Z),
            globalName: _.default.getName(Z),
          }),
          ee = e => {
            F(null), null != e.username && V(!0), J(t => ({ ...t, ...e }));
          },
          et = n.useMemo(
            () => [
              {
                slideId: v.PomeloModalSlides.INFO,
                next: v.PomeloModalSlides.EDIT_SCREEN,
                footerButtons: ["REMIND_ME_LATER", "GET_STARTED"],
              },
              {
                slideId: v.PomeloModalSlides.EDIT_SCREEN,
                next: v.PomeloModalSlides.FINISH_LATER,
                back: v.PomeloModalSlides.INFO,
                footerButtons: [
                  w === P.EditState.PREVIEW ? "GOT_IT" : "BACK",
                  w === P.EditState.PREVIEW
                    ? "GOT_IT"
                    : w === P.EditState.EDIT_USERNAME
                      ? "SUBMIT"
                      : "NEXT",
                ],
              },
              {
                slideId: v.PomeloModalSlides.FINISH_LATER,
                back: v.PomeloModalSlides.EDIT_SCREEN,
              },
              {
                slideId: v.PomeloModalSlides.SUGGESTIONS,
                footerButtons: [
                  w === P.EditState.PREVIEW ? "GOT_IT" : "UPDATE",
                ],
              },
              { slideId: v.PomeloModalSlides.FINISH_LATER },
            ],
            [w]
          ),
          ea = et.length,
          es = n.useCallback(async () => {
            if ($.globalName.length <= 0) {
              let e =
                x.default.Messages.POMELO_EXISTING_FLOW_ERROR_LIMIT.format({
                  minNum: 1,
                  maxNum: 32,
                });
              F(e),
                g.default.track(C.AnalyticEvents.POMELO_ERRORS, {
                  reason: e,
                  display_name_error: !0,
                  location: "modal",
                });
              return;
            }
            if (_.default.getGlobalName(Z) === $.globalName) {
              B(P.EditState.EDIT_USERNAME);
              return;
            }
            try {
              F(null),
                j(!0),
                await (0, c.saveAccountRequest)({ global_name: $.globalName }),
                B(P.EditState.EDIT_USERNAME);
            } catch (a) {
              let e = new E.default(a),
                t = e.getAnyErrorMessage();
              g.default.track(C.AnalyticEvents.POMELO_ERRORS, {
                reason: t,
                display_name_error: !0,
                location: "modal",
              }),
                F(t);
            } finally {
              j(!1);
            }
          }, [Z, $]),
          en = n.useCallback(async () => {
            try {
              F(null),
                j(!0),
                await I.default.createPomelo(
                  { username: (0, h.formatPomeloForEditing)($.username) },
                  U
                ),
                await (0, u.fetchProfile)(Z.id),
                B(P.EditState.PREVIEW);
            } catch (a) {
              let e = new E.default(a),
                t =
                  (null == e ? void 0 : e.status) != null &&
                  e.status >= 400 &&
                  e.status < 500
                    ? e.getAnyErrorMessage()
                    : x.default.Messages.ERROR_GENERIC_TITLE;
              F(t),
                g.default.track(C.AnalyticEvents.POMELO_ERRORS, {
                  reason: t,
                  username_error: !0,
                  location: "modal",
                  one_click_flow: U,
                });
            } finally {
              j(!1);
            }
          }, [$, Z.id, U]),
          ei = Y || (0, h.shouldSkipToEditUsername)(Z),
          el = n.useCallback(() => {
            B(ei ? P.EditState.EDIT_USERNAME : P.EditState.EDIT_DISPLAY_NAME),
              D(et[Math.min(ea - 1, G + 1)].slideId);
          }, [G, et, ea, ei]),
          er = n.useCallback(() => {
            F(null),
              G === v.PomeloModalSlides.EDIT_SCREEN
                ? w === P.EditState.EDIT_USERNAME
                  ? ei
                    ? (B(P.EditState.NONE), D(et[Math.max(0, G - 1)].slideId))
                    : B(P.EditState.EDIT_DISPLAY_NAME)
                  : w === P.EditState.EDIT_DISPLAY_NAME
                    ? (B(P.EditState.NONE), D(et[Math.max(0, G - 1)].slideId))
                    : w === P.EditState.PREVIEW && B(P.EditState.EDIT_USERNAME)
                : D(et[Math.max(0, G - 1)].slideId);
          }, [et, G, w, ei]),
          eo = n.useCallback(() => {
            D(v.PomeloModalSlides.FINISH_LATER);
          }, []),
          ed = n.useCallback(() => {
            U
              ? (D(v.PomeloModalSlides.SUGGESTIONS), B(P.EditState.SUGGESTION))
              : (D(v.PomeloModalSlides.INFO), B(P.EditState.NONE));
          }, [U]),
          eu = n.useMemo(() => {
            if (
              G === v.PomeloModalSlides.EDIT_SCREEN &&
              w === P.EditState.EDIT_DISPLAY_NAME
            )
              return es;
            if (
              G === v.PomeloModalSlides.EDIT_SCREEN &&
              w === P.EditState.EDIT_USERNAME
            )
              return en;
            if (
              G === v.PomeloModalSlides.SUGGESTIONS &&
              w === P.EditState.SUGGESTION
            )
              return en;
            else return el;
          }, [G, w, es, en, el]),
          ec = n.useMemo(() => {
            var e, t;
            return y(
              null !==
                (t =
                  null === (e = et.find(e => e.slideId === G)) || void 0 === e
                    ? void 0
                    : e.footerButtons) && void 0 !== t
                ? t
                : [],
              {
                handleNext: eu,
                handleBack: er,
                handleRemindMeLater: eo,
                onClose: A,
              },
              b,
              Q,
              H
            );
          }, [er, eo, eu, A, et, G, b, Q, H]),
          eE = n.useMemo(() => (0, h.getUserAvatarURLForPomelo)(Z), [Z]);
        n.useLayoutEffect(() => {
          (0, f.default)(Z.id, eE);
        }, [Z, eE]),
          n.useEffect(() => {
            var e, t;
            switch (w) {
              case P.EditState.EDIT_DISPLAY_NAME:
                null === (e = z.current) ||
                  void 0 === e ||
                  e.focusDisplayName();
                break;
              case P.EditState.EDIT_USERNAME:
              case P.EditState.SUGGESTION:
                null === (t = z.current) || void 0 === t || t.focusUsername();
            }
          }, [w]);
        return (
          !H &&
            null == k &&
            (w === P.EditState.EDIT_USERNAME
              ? (t = x.default.Messages.POMELO_SUGGESTION_ORIGIN_NOTICE.format({
                  source: Z.username,
                }))
              : w === P.EditState.SUGGESTION &&
                (Q || null != K) &&
                (t = x.default.Messages.POMELO_SUGGESTIONS_OCF)),
          (0, s.jsxs)(d.ModalRoot, {
            className: p.modalRoot,
            impression: {
              impressionName: r.ImpressionNames.POMELO_LANDING,
              impressionProperties: {
                source: a,
                impression_group: r.ImpressionGroups.POMELO_FLOW,
                one_click_flow: U,
              },
            },
            transitionState: i,
            size: d.ModalSize.DYNAMIC,
            children: [
              (0, s.jsx)(d.Button, {
                onClick: () => {
                  q &&
                  (G === v.PomeloModalSlides.SUGGESTIONS ||
                    G === v.PomeloModalSlides.EDIT_SCREEN)
                    ? D(v.PomeloModalSlides.FINISH_LATER)
                    : A();
                },
                size: d.Button.Sizes.MIN,
                look: d.Button.Looks.BLANK,
                className: p.closeContainer,
                "aria-label": x.default.Messages.CLOSE,
                children: (0, s.jsx)(S.default, {
                  width: 15,
                  height: 15,
                  className: p.close,
                }),
              }),
              (0, s.jsx)(d.ModalContent, {
                className: p.contentContainer,
                children: (0, s.jsxs)(d.Slides, {
                  activeSlide: G,
                  width: 480,
                  children: [
                    (0, s.jsx)(d.Slide, {
                      id: v.PomeloModalSlides.INFO,
                      children: (0, s.jsx)(R.default, { user: Z }),
                    }),
                    (0, s.jsx)(d.Slide, {
                      id: v.PomeloModalSlides.EDIT_SCREEN,
                      children: (0, s.jsx)(M.default, {
                        user: Z,
                        error: k,
                        editState: w,
                        userRef: z,
                        formValues: $,
                        footerNotice: t,
                        onChangeFormValue: ee,
                        onFocusUsername: () => B(P.EditState.EDIT_USERNAME),
                        onFocusDisplayName: () =>
                          B(P.EditState.EDIT_DISPLAY_NAME),
                        onClose: A,
                      }),
                    }),
                    (0, s.jsx)(d.Slide, {
                      id: v.PomeloModalSlides.FINISH_LATER,
                      children: (0, s.jsx)(L.default, {
                        onClose: A,
                        handleStartFlow: ed,
                      }),
                    }),
                    (0, s.jsx)(d.Slide, {
                      id: v.PomeloModalSlides.SUGGESTIONS,
                      children: (0, s.jsx)(M.default, {
                        user: Z,
                        error: k,
                        editState: w,
                        userRef: z,
                        formValues: $,
                        footerNotice: t,
                        onChangeFormValue: ee,
                        onFocusUsername: () => B(P.EditState.SUGGESTION),
                        onFocusDisplayName: () =>
                          B(P.EditState.EDIT_DISPLAY_NAME),
                        onClose: A,
                        usernameSuggestionLoading: Q,
                        oneClickFlow: U,
                      }),
                    }),
                  ],
                }),
              }),
              ec,
            ],
          })
        );
      }
      let y = (e, t, a, n, i) =>
        0 === e.length
          ? null
          : (0, s.jsxs)(d.ModalFooter, {
              className: p.footer,
              children: [
                (0, s.jsxs)("div", {
                  className: p.inline,
                  children: [
                    e.includes("REMIND_ME_LATER") &&
                      (0, s.jsx)(d.Button, {
                        className: p.unfilledButton,
                        type: "button",
                        size: d.Button.Sizes.SMALL,
                        look: d.Button.Looks.BLANK,
                        color: d.Button.Colors.CUSTOM,
                        onClick: t.handleRemindMeLater,
                        children:
                          x.default.Messages
                            .POMELO_EXISTING_FLOW_PROMPT_SKIP_CTA,
                      }),
                    e.includes("NEXT") &&
                      (0, s.jsx)(d.Button, {
                        type: "button",
                        size: d.Button.Sizes.SMALL,
                        submitting: a,
                        onClick: t.handleNext,
                        children: x.default.Messages.NEXT,
                      }),
                    e.includes("SUBMIT") &&
                      (0, s.jsx)(d.Button, {
                        type: "button",
                        size: d.Button.Sizes.SMALL,
                        submitting: a,
                        onClick: t.handleNext,
                        children: x.default.Messages.SUBMIT,
                      }),
                    e.includes("GET_STARTED") &&
                      (0, s.jsx)(d.Button, {
                        type: "button",
                        size: d.Button.Sizes.SMALL,
                        onClick: t.handleNext,
                        children: x.default.Messages.GET_STARTED,
                      }),
                    e.includes("GOT_IT") &&
                      (0, s.jsx)(d.Button, {
                        type: "button",
                        size: d.Button.Sizes.SMALL,
                        onClick: t.onClose,
                        children: x.default.Messages.GOT_IT,
                      }),
                    e.includes("UPDATE") &&
                      (0, s.jsx)(d.Button, {
                        type: "button",
                        size: d.Button.Sizes.SMALL,
                        disabled: n && !i,
                        submitting: a,
                        onClick: t.handleNext,
                        children: x.default.Messages.UPDATE,
                      }),
                  ],
                }),
                e.includes("BACK") &&
                  (0, s.jsx)(d.Button, {
                    className: p.unfilledButton,
                    type: "button",
                    size: d.Button.Sizes.SMALL,
                    look: d.Button.Looks.BLANK,
                    color: d.Button.Colors.CUSTOM,
                    onClick: t.handleBack,
                    children: x.default.Messages.BACK,
                  }),
              ],
            });
    },
    500645: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return S;
          },
        }),
        a("794252");
      var s = a("37983");
      a("884691");
      var n = a("414456"),
        i = a.n(n),
        l = a("506838"),
        r = a("669491"),
        o = a("77078"),
        d = a("775955"),
        u = a("381546"),
        c = a("250727");
      let E = () =>
          (0, s.jsx)(d.default, {
            width: 13,
            height: 13,
            backgroundColor: r.default.colors.TEXT_POSITIVE.css,
          }),
        f = () =>
          (0, s.jsx)(u.default, {
            width: 13,
            height: 13,
            color: r.default.colors.TEXT_DANGER.css,
          }),
        m = () =>
          (0, s.jsx)(u.default, {
            width: 13,
            height: 13,
            color: r.default.colors.TEXT_WARNING.css,
          });
      function S(e) {
        let t = (0, l.match)(e.type)
          .with("info", () => (0, s.jsx)(m, {}))
          .with("error", () => (0, s.jsx)(f, {}))
          .with("success", () => (0, s.jsx)(E, {}))
          .otherwise(() => null);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            t,
            (0, s.jsx)(o.Text, {
              variant: "text-sm/medium",
              className: i(c.formMessage, {
                [c.formMessageNegative]: "error" === e.type,
                [c.formMessagePositive]: "success" === e.type,
              }),
              children: e.children,
            }),
          ],
        });
      }
    },
    998957: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return g;
          },
        }),
        a("222007");
      var s = a("37983"),
        n = a("884691"),
        i = a("146606"),
        l = a("77078"),
        r = a("79112"),
        o = a("217513"),
        d = a("701909"),
        u = a("158998"),
        c = a("303270"),
        E = a("935583"),
        f = a("49111"),
        m = a("782340"),
        S = a("250727");
      function g(e) {
        let {
            userRef: t,
            usernameSuggestionLoading: a = !1,
            oneClickFlow: g = !1,
            ..._
          } = e,
          { user: I, editState: T, onClose: h } = _,
          O = (0, o.default)(I.id),
          N = (function (e, t, a) {
            switch (e) {
              case E.EditState.EDIT_USERNAME:
                return {
                  header: m.default.Messages.POMELO_EXISTING_FLOW_STEP_2_TITLE,
                  subtitle:
                    m.default.Messages.POMELO_EXISTING_FLOW_STEP_2_SUBTITLE,
                };
              case E.EditState.EDIT_DISPLAY_NAME:
                return {
                  header: m.default.Messages.POMELO_EXISTING_FLOW_STEP_1_TITLE,
                  subtitle:
                    m.default.Messages.POMELO_EXISTING_FLOW_STEP_1_SUBTITLE,
                };
              case E.EditState.PREVIEW:
                return {
                  header:
                    m.default.Messages.POMELO_EXISTING_FLOW_COMPLETION_TITLE.format(
                      { displayName: t }
                    ),
                  subtitle:
                    m.default.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_2.format(
                      {
                        onClick: () => {
                          a(), r.default.open(f.UserSettingsSections.ACCOUNT);
                        },
                      }
                    ),
                };
              case E.EditState.SUGGESTION:
                return {
                  header: m.default.Messages.POMELO_ACTION_LABEL_OCF,
                  subtitle:
                    m.default.Messages.POMELO_EXISTING_FLOW_PROMPT_OCF.format(),
                  link: m.default.Messages.POMELO_EXISTING_FLOW_PROMPT_BODY_2.format(
                    {
                      helpdeskArticle: d.default.getArticleURL(
                        f.HelpdeskArticles.POMELO_FAQ
                      ),
                    }
                  ),
                };
              default:
                return {
                  header: m.default.Messages.POMELO_EXISTING_FLOW_STEP_2_TITLE,
                  subtitle:
                    m.default.Messages.POMELO_EXISTING_FLOW_STEP_2_SUBTITLE,
                };
            }
          })(T, u.default.getName(I), h),
          [M, L] = (0, i.useSpring)(() => ({ opacity: 0, y: 10 }));
        return (
          n.useEffect(() => {
            L({ y: 0, opacity: 1, from: { y: 10, opacity: 0 } });
          }, [L, T]),
          (0, s.jsxs)("div", {
            className: S.displayNameContainer,
            children: [
              (0, s.jsxs)(i.animated.div, {
                style: { opacity: M.opacity, y: M.y },
                children: [
                  (0, s.jsx)(l.Heading, {
                    className: S.title,
                    color: "header-primary",
                    variant: "heading-xl/extrabold",
                    children: N.header,
                  }),
                  (0, s.jsxs)("div", {
                    className: S.subtitle,
                    children: [
                      (0, s.jsx)(l.Heading, {
                        color: "header-secondary",
                        variant: "heading-sm/medium",
                        children: N.subtitle,
                      }),
                      null != N.link &&
                        (0, s.jsx)(l.Text, {
                          className: S.link,
                          color: "header-secondary",
                          variant: "text-sm/medium",
                          children: N.link,
                        }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)(c.default, {
                ..._,
                displayProfile: O,
                ref: t,
                usernameSuggestionLoading: a,
                oneClickFlow: g,
              }),
            ],
          })
        );
      }
    },
    303270: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return L;
          },
        }),
        a("222007"),
        a("781738");
      var s = a("37983"),
        n = a("884691"),
        i = a("414456"),
        l = a.n(i),
        r = a("146606"),
        o = a("65597"),
        d = a("77078"),
        u = a("206230"),
        c = a("526887"),
        E = a("289918"),
        f = a("935409"),
        m = a("158998"),
        S = a("415133"),
        g = a("500645"),
        _ = a("925922"),
        I = a("935583"),
        T = a("590456"),
        h = a("782340"),
        O = a("250727"),
        N = a("107681");
      let M = n.forwardRef(function (e, t) {
        let {
          style: a,
          value: n,
          placeholder: i,
          maxLength: r,
          onFocus: o,
          onChange: u,
        } = e;
        return (0, s.jsx)(d.TextArea, {
          className: l(O.userCardInput, a),
          autosize: !0,
          error: null,
          showCharacterCount: !1,
          spellCheck: !1,
          showRemainingCharacterCount: !1,
          value: n,
          placeholder: i,
          rows: 1,
          maxLength: r,
          onChange: u,
          onFocus: o,
          onKeyDown: e => {
            "Enter" === e.key && e.preventDefault();
          },
          inputRef: t,
        });
      });
      var L = n.forwardRef(function (e, t) {
        let {
            user: a,
            error: i,
            formValues: L,
            displayProfile: R,
            onChangeFormValue: P,
            onFocusDisplayName: v,
            onFocusUsername: C,
            editState: x,
            footerNotice: p,
            usernameSuggestionLoading: A,
            oneClickFlow: y,
          } = e,
          { username: U, globalName: G } = L,
          D = n.useRef(null),
          b = n.useRef(null),
          j = n.useMemo(() => a.merge({ discriminator: "0000" }), [a]),
          [k, F] = (0, r.useSpring)(() => ({ opacity: 0, y: 5 }));
        n.useEffect(() => {
          F({ y: 0, opacity: 1, from: { y: 5, opacity: 0 } });
        }, [F, x]),
          n.useImperativeHandle(
            t,
            () => ({
              focusDisplayName: () => {
                var e, t, a;
                null === (t = b.current) ||
                  void 0 === t ||
                  t.setSelection(
                    0,
                    null === (e = b.current) || void 0 === e
                      ? void 0
                      : e.value.length
                  ),
                  null === (a = b.current) || void 0 === a || a.focus();
              },
              focusUsername: () => {
                var e, t, a;
                null === (t = D.current) ||
                  void 0 === t ||
                  t.setSelection(
                    0,
                    null === (e = D.current) || void 0 === e
                      ? void 0
                      : e.value.length
                  ),
                  null === (a = D.current) || void 0 === a || a.focus();
              },
            }),
            []
          );
        let w = (0, o.default)([u.default], () => u.default.useReducedMotion),
          { createMultipleConfettiAt: B } = n.useContext(
            c.ConfettiCannonContext
          ),
          H = null == R ? void 0 : R.getLegacyUsername();
        return (
          n.useEffect(() => {
            if (!w && x === I.EditState.PREVIEW)
              a.username.includes(I.POMELO_KEYWORD) &&
                (B(
                  window.innerWidth / 2 + 150,
                  0,
                  {
                    velocity: {
                      type: "static-random",
                      minValue: { x: 0, y: -180 },
                      maxValue: { x: 500, y: 180 },
                    },
                  },
                  15
                ),
                B(
                  window.innerWidth / 2 - 150,
                  0,
                  {
                    velocity: {
                      type: "static-random",
                      minValue: { x: -500, y: -180 },
                      maxValue: { x: 0, y: 180 },
                    },
                  },
                  15
                ));
          }, [B, x, a, w]),
          (0, s.jsxs)("div", {
            className: l(O.userCardContainer, {
              [O.shinyCard]: x === I.EditState.PREVIEW,
            }),
            children: [
              (0, s.jsxs)("div", {
                className: O.profileCard,
                children: [
                  (0, s.jsx)(E.default, {
                    displayProfile: R,
                    user: j,
                    allowEdit: !1,
                    guildId: void 0,
                    profileType: T.UserProfileTypes.POMELO_POPOUT,
                    showPremiumBadgeUpsell: !1,
                  }),
                  (0, s.jsx)(f.UserPopoutAvatar, {
                    user: j,
                    displayProfile: R,
                    isMobile: !1,
                    status: null,
                    onClose: void 0,
                    disableUserProfileLink: !0,
                    hasBanner: !1,
                    profileType: T.UserProfileTypes.POMELO_POPOUT,
                    animateOnHover: !1,
                  }),
                  x === I.EditState.PREVIEW &&
                    null != H &&
                    (0, s.jsx)("div", {
                      className: O.legacyUsernameBadgeContainer,
                      children: (0, s.jsx)(d.Tooltip, {
                        position: "top",
                        text: h.default.Messages.ORIGINALLY_KNOWN_AS.format({
                          legacyUsername: H,
                        }),
                        spacing: 12,
                        children: e =>
                          (0, s.jsx)(d.Anchor, {
                            ...e,
                            onClick: e.onClick,
                            children: (0, s.jsx)("img", {
                              className: O.legacyUsernameBadge,
                              alt: "",
                              src: N,
                            }),
                          }),
                      }),
                    }),
                ],
              }),
              x !== I.EditState.PREVIEW &&
                (0, s.jsxs)(r.animated.div, {
                  style: { opacity: k.opacity, y: k.y },
                  className: O.inputContainer,
                  children: [
                    x === I.EditState.EDIT_DISPLAY_NAME &&
                      (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(d.Text, {
                            className: O.textPadding,
                            color: "text-muted",
                            variant: "text-sm/semibold",
                            children: h.default.Messages.DISPLAY_NAME,
                          }),
                          (0, s.jsx)(M, {
                            style: l(O.displayNameHeight, O["heading-xl/bold"]),
                            value: null != G ? G : "",
                            placeholder: m.default.getName(a),
                            maxLength: I.MAX_DISPLAY_NAME_LENGTH,
                            onChange: e => P({ globalName: e }),
                            onFocus: v,
                            ref: b,
                          }),
                        ],
                      }),
                    (x === I.EditState.EDIT_USERNAME ||
                      x === I.EditState.SUGGESTION) &&
                      (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(d.Text, {
                            className: O.textPadding,
                            color: "text-muted",
                            variant: "text-sm/semibold",
                            children: h.default.Messages.USERNAME,
                          }),
                          (0, s.jsx)(M, {
                            style: l(
                              O.userCardHeight,
                              O.lowercaseUsername,
                              O["heading-lg/medium"]
                            ),
                            value: null != U ? U : "",
                            placeholder: a.username,
                            maxLength: I.MAX_DISPLAY_NAME_LENGTH,
                            onChange: e => P({ username: e.replace("@", "") }),
                            onFocus: C,
                            ref: D,
                          }),
                        ],
                      }),
                    (0, s.jsx)("div", {
                      className: O.messageContainer,
                      children: (() => {
                        if (null != i)
                          return (0, s.jsx)(g.default, {
                            type: "error",
                            children: i,
                          });
                        if (null != p) {
                          if (x !== I.EditState.SUGGESTION)
                            return (0, s.jsx)(d.Text, {
                              variant: "text-sm/normal",
                              children: p,
                            });
                          if (!A)
                            return (0, s.jsx)(g.default, {
                              type: "success",
                              children: p,
                            });
                        }
                        return null == p &&
                          null == i &&
                          (x === I.EditState.EDIT_USERNAME ||
                            x === I.EditState.SUGGESTION)
                          ? (0, s.jsx)(_.default, {
                              username: U,
                              oneClickFlow: y,
                            })
                          : null;
                      })(),
                    }),
                  ],
                }),
              x === I.EditState.PREVIEW &&
                (0, s.jsxs)("div", {
                  className: O.userCard,
                  children: [
                    (0, s.jsx)(d.Heading, {
                      color: "header-primary",
                      variant: "heading-xl/bold",
                      children: m.default.getName(a),
                    }),
                    (0, s.jsx)(d.Heading, {
                      color: "text-normal",
                      variant: "heading-lg/medium",
                      children: a.username,
                    }),
                    (0, s.jsx)(d.Text, {
                      className: O.memberText,
                      color: "text-muted",
                      variant: "text-sm/medium",
                      children:
                        h.default.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format(
                          { date: (0, S.getMemberSince)(a.id) }
                        ),
                    }),
                  ],
                }),
            ],
          })
        );
      });
    },
    426149: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return S;
          },
        });
      var s = a("37983");
      a("884691");
      var n = a("414456"),
        i = a.n(n),
        l = a("446674"),
        r = a("77078"),
        o = a("79112"),
        d = a("915639"),
        u = a("415133"),
        c = a("42060"),
        E = a("49111"),
        f = a("782340"),
        m = a("250727");
      function S(e) {
        let { onClose: t, handleStartFlow: a } = e,
          n = (0, c.useForceMigration)(),
          S = (0, l.useStateFromStores)([d.default], () => d.default.locale);
        return (0, s.jsxs)("div", {
          className: m.infoContainer,
          children: [
            (0, s.jsx)(r.Heading, {
              className: i(m.finishTitle, { [m.finishTitlePadding]: n }),
              color: "header-primary",
              variant: "heading-xl/bold",
              children: n
                ? f.default.Messages.UU_FORCE_MIGRATION_EXISTING_FLOW_REMINDER_BODY_1.format(
                    { date: (0, u.getLocalizedForcedUUDate)(S) }
                  )
                : f.default.Messages.POMELO_EXISTING_FLOW_REMINDER_TITLE,
            }),
            (0, s.jsx)(r.Text, {
              className: m.subtitleFinish,
              color: "header-secondary",
              variant: "text-md/medium",
              children: n
                ? f.default.Messages.UU_FORCE_MIGRATION_EXISTING_FLOW_REMINDER_BODY_2.format(
                    { date: (0, u.getLocalizedForcedUUDate)(S) }
                  )
                : f.default.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_1,
            }),
            (0, s.jsx)(r.Text, {
              className: m.promptFinish,
              color: "header-secondary",
              variant: "text-md/medium",
              children:
                f.default.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_2.format({
                  onClick: () => {
                    t(), o.default.open(E.UserSettingsSections.ACCOUNT);
                  },
                }),
            }),
            (0, s.jsx)(r.Button, {
              className: m.button,
              type: "button",
              size: r.Button.Sizes.SMALL,
              onClick: n ? a : t,
              children: n
                ? f.default.Messages
                    .PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_BUTTON_TEXT
                : f.default.Messages.INVITES_DISABLED_CONFIRMATION,
            }),
          ],
        });
      }
    },
    767282: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return S;
          },
        });
      var s = a("37983");
      a("884691");
      var n = a("414456"),
        i = a.n(n),
        l = a("77078"),
        r = a("564875"),
        o = a("701909"),
        d = a("386244"),
        u = a("253989"),
        c = a("49111"),
        E = a("782340"),
        f = a("250727"),
        m = a("259707");
      function S(e) {
        let { user: t } = e;
        return (0, s.jsxs)("div", {
          className: f.infoContainer,
          children: [
            (0, s.jsx)("img", { className: f.infoPicture, alt: "", src: m }),
            (0, s.jsx)(l.Heading, {
              className: f.title,
              color: "header-primary",
              variant: "heading-xl/bold",
              children:
                E.default.Messages.POMELO_EXISTING_FLOW_PROMPT_TITLE.format({
                  n: t.tag,
                }),
            }),
            (0, s.jsx)(l.Text, {
              className: f.subtitleInfo,
              color: "header-secondary",
              variant: "text-md/medium",
              children:
                E.default.Messages.POMELO_EXISTING_FLOW_PROMPT_BODY_1.format(),
            }),
            (0, s.jsx)(l.Text, {
              className: f.prompt,
              color: "header-secondary",
              variant: "text-sm/medium",
              children:
                E.default.Messages.POMELO_EXISTING_FLOW_PROMPT_BODY_2.format({
                  helpdeskArticle: o.default.getArticleURL(
                    c.HelpdeskArticles.POMELO_FAQ
                  ),
                }),
            }),
            (0, s.jsxs)("div", {
              className: i([f.infoItem, f.infoItemSpacing]),
              children: [
                (0, s.jsx)("div", {
                  className: f.infoIcon,
                  children: (0, s.jsx)(r.default, { width: 20, height: 20 }),
                }),
                (0, s.jsx)(l.Text, {
                  color: "header-secondary",
                  variant: "text-sm/medium",
                  children:
                    E.default.Messages.POMELO_EXISTING_FLOW_PROMPT_ITEM_1.format(),
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: i([f.infoItem, f.infoItemSpacing]),
              children: [
                (0, s.jsx)("div", {
                  className: f.infoIcon,
                  children: (0, s.jsx)(d.default, { width: 20, height: 20 }),
                }),
                (0, s.jsx)(l.Text, {
                  color: "header-secondary",
                  variant: "text-sm/medium",
                  children:
                    E.default.Messages.POMELO_EXISTING_FLOW_PROMPT_ITEM_2.format(),
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: f.infoItem,
              children: [
                (0, s.jsx)("div", {
                  className: f.infoIcon,
                  children: (0, s.jsx)(u.default, { width: 20, height: 20 }),
                }),
                (0, s.jsx)(l.Text, {
                  color: "header-secondary",
                  variant: "text-sm/medium",
                  children:
                    E.default.Messages.UNIQUE_USERNAME_EXISTING_FLOW_PROMPT_ITEM_3.format(
                      { username: t.tag }
                    ),
                }),
              ],
            }),
          ],
        });
      }
    },
    15881: function (e, t, a) {
      "use strict";
      var s, n;
      a.r(t),
        a.d(t, {
          PomeloModalSlides: function () {
            return s;
          },
        }),
        ((n = s || (s = {}))[(n.INFO = 0)] = "INFO"),
        (n[(n.EDIT_SCREEN = 1)] = "EDIT_SCREEN"),
        (n[(n.FINISH_LATER = 2)] = "FINISH_LATER"),
        (n[(n.SUGGESTIONS = 3)] = "SUGGESTIONS");
    },
    925922: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return d;
          },
        }),
        a("794252");
      var s = a("37983");
      a("884691");
      var n = a("506838"),
        i = a("644417"),
        l = a("415133"),
        r = a("44984"),
        o = a("500645");
      function d(e) {
        let { username: t, oneClickFlow: a = !1 } = e,
          d = (0, r.useUsernameLiveCheck)(
            (0, l.formatPomeloForEditing)(t),
            !0,
            !1,
            a
          );
        if (null == d) return null;
        let u = (0, n.match)(d.type)
          .with(i.NameValidationState.RATE_LIMIT, () => "info")
          .with(i.NameValidationState.ERROR, () => "error")
          .with(i.NameValidationState.AVAILABLE, () => "success")
          .with(i.NameValidationState.INTERNAL_ERROR, () => null)
          .exhaustive();
        return null == u
          ? null
          : (0, s.jsx)(o.default, { type: u, children: d.message });
      }
    },
    564875: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return r;
          },
        });
      var s = a("37983");
      a("884691");
      var n = a("469563"),
        i = a("907572"),
        l = a("75196"),
        r = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: a = 16,
              color: n = "currentColor",
              foreground: i,
              ...r
            } = e;
            return (0, s.jsx)("svg", {
              ...(0, l.default)(r),
              width: t,
              height: a,
              viewBox: "0 0 24 24",
              children: (0, s.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                  (0, s.jsx)("path", {
                    fill: n,
                    className: i,
                    fillRule: "nonzero",
                    d: "M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z",
                    transform: "translate(2 4)",
                  }),
                  (0, s.jsx)("path", {
                    d: "M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z",
                  }),
                ],
              }),
            });
          },
          i.FriendsIcon,
          void 0,
          { size: 16 }
        );
    },
    437816: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          FriendsIcon: function () {
            return l;
          },
        });
      var s = a("37983");
      a("884691");
      var n = a("669491"),
        i = a("82169");
      let l = e => {
        let {
          width: t = 24,
          height: a = 24,
          color: l = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, i.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: a,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M13 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
              className: r,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M3 5v-.75C3 3.56 3.56 3 4.25 3s1.24.56 1.33 1.25C6.12 8.65 9.46 12 13 12h1a8 8 0 0 1 8 8 2 2 0 0 1-2 2 .21.21 0 0 1-.2-.15 7.65 7.65 0 0 0-1.32-2.3c-.15-.2-.42-.06-.39.17l.25 2c.02.15-.1.28-.25.28H9a2 2 0 0 1-2-2v-2.22c0-1.57-.67-3.05-1.53-4.37A15.85 15.85 0 0 1 3 5Z",
              className: r,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=5341d38148eedd3a5c3f.js.map
