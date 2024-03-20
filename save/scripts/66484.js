(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["66484"],
  {
    529861: function (e, t, n) {
      "use strict";
      e.exports = n.p + "ebd4163d89c2d849ec54.svg";
    },
    843528: function (e, t, n) {
      "use strict";
      e.exports = n.p + "e708b2106aafde7efdc2.svg";
    },
    14896: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f2f07ab12b7f080c25e7.svg";
    },
    669711: function (e, t, n) {
      "use strict";
      e.exports = n.p + "b46b2dcd6fe124cdaec7.svg";
    },
    142833: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var a = n("759843"),
        s = n("627929"),
        l = n("913144"),
        i = n("840707"),
        r = n("49111"),
        o = {
          signup: (e, t) =>
            i.default.post({
              url: r.Endpoints.HUB_WAITLIST_SIGNUP,
              body: { email: e, school: t },
              trackedActionData: {
                event: a.NetworkActionNames.HUB_WAITLIST_SIGNUP,
                properties: e => {
                  var t;
                  let n = !1,
                    a =
                      null == e
                        ? void 0
                        : null === (t = e.body) || void 0 === t
                          ? void 0
                          : t.email_domain;
                  if (null != a) {
                    let e = a.split(".");
                    n = -1 !== e.indexOf("edu");
                  }
                  return (0, s.exact)({ is_edu_email: n });
                },
              },
            }),
          async sendVerificationEmail(e, t, n) {
            let l = await i.default.post({
              url: r.Endpoints.HUB_EMAIL_VERIFY_SEND,
              body: {
                email: e,
                guild_id: n,
                allow_multiple_guilds: t,
                use_verification_code: !0,
              },
              trackedActionData: {
                event: a.NetworkActionNames.HUB_EMAIL_VERIFY_SEND,
                properties: e => {
                  var t;
                  let n =
                    null == e
                      ? void 0
                      : null === (t = e.body) || void 0 === t
                        ? void 0
                        : t.has_matching_guild;
                  return (0, s.exact)({ has_matching_guild: n });
                },
              },
            });
            return l.body;
          },
          async verify(e) {
            if (null != e)
              try {
                var t;
                let n = await i.default.post({
                    url: r.Endpoints.HUB_EMAIL_VERIFY,
                    body: { token: e },
                    trackedActionData: {
                      event: a.NetworkActionNames.HUB_EMAIL_VERIFY,
                    },
                  }),
                  s =
                    null === (t = n.body.guild) || void 0 === t ? void 0 : t.id;
                l.default.dispatch({
                  type: "HUB_VERIFY_EMAIL_SUCCESS",
                  guildId: s,
                });
              } catch (e) {
                l.default.dispatch({
                  type: "HUB_VERIFY_EMAIL_FAILURE",
                  errors: e.body,
                });
              }
          },
          async verifyCode(e, t, n) {
            if (null != e)
              try {
                var s;
                let o = await i.default.post({
                    url: r.Endpoints.HUB_EMAIL_VERIFY_CODE,
                    body: { code: e, guild_id: t, email: n },
                    trackedActionData: {
                      event: a.NetworkActionNames.HUB_EMAIL_VERIFY,
                    },
                  }),
                  c =
                    null === (s = o.body.guild) || void 0 === s ? void 0 : s.id;
                return (
                  l.default.dispatch({
                    type: "HUB_VERIFY_EMAIL_SUCCESS",
                    guildId: c,
                  }),
                  o.body
                );
              } catch (e) {
                throw (
                  (l.default.dispatch({
                    type: "HUB_VERIFY_EMAIL_FAILURE",
                    errors: e.body,
                  }),
                  e)
                );
              }
          },
        };
    },
    284016: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var a = n("56676"),
        s = n("330387");
      function l() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : a.default,
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : s.default;
        return null != t.getAction() || Object.keys(e.getState()).length > 0;
      }
    },
    229929: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
          backToSchoolEnabled: function () {
            return i;
          },
        });
      var a = n("862205");
      let s = (0, a.createExperiment)({
        kind: "user",
        id: "2022-08_back_to_school",
        label: "Back to School Event",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Back to School experience enabled",
            config: { enabled: !0 },
          },
        ],
      });
      var l = s;
      function i() {
        return s.getCurrentConfig(
          { location: "68acbb_1" },
          { autoTrackExposure: !1 }
        ).enabled;
      }
    },
    238055: function (e, t, n) {
      "use strict";
      var a, s;
      n.r(t),
        n.d(t, {
          HubEmailConnectionSteps: function () {
            return a;
          },
          INVITE_ROUTING_HUB_GUILD_ID: function () {
            return l;
          },
        }),
        ((s = a || (a = {})).STUDENT_PROMPT = "STUDENT_PROMPT"),
        (s.VERIFY_EMAIL = "VERIFY_EMAIL"),
        (s.VERIFY_PIN = "VERIFY_PIN"),
        (s.SELECT_SCHOOL = "SELECT_SCHOOL"),
        (s.SELECT_SCHOOL_SEARCH = "SELECT_SCHOOL_SEARCH"),
        (s.SUBMIT_SCHOOL = "SUBMIT_SCHOOL"),
        (s.EMAIL_CONFIRMATION = "EMAIL_CONFIRMATION"),
        (s.EMAIL_WAITLIST = "EMAIL_WAITLIST");
      let l = "884924873015689226";
    },
    353983: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var a = n("866227"),
        s = n.n(a),
        l = n("151426"),
        i = n("284016"),
        r = n("10641"),
        o = n("263901"),
        c = n("305961"),
        d = n("697218"),
        u = n("197881"),
        _ = n("299039"),
        E = n("229929"),
        N = n("49111"),
        I = n("994428"),
        m = {
          init(e) {
            let { hasModalOpen: t, openModal: n } = e;
            !u.ProcessArgs.isDisallowPopupsSet() &&
              (0, o.addPostConnectionCallback)(() => {
                if ((0, i.default)()) return;
                let e = d.default.getCurrentUser(),
                  a =
                    null != e &&
                    7 > s().diff(s(_.default.extractTimestamp(e.id)), "days"),
                  o = Object.values(c.default.getGuilds()),
                  u = null != o.find(e => e.hasFeature(N.GuildFeatures.HUB)),
                  I = !(0, r.isDismissibleContentDismissed)(
                    l.DismissibleContent.HUB_BACK_TO_SCHOOL_UPSELL
                  ),
                  m = a || t() || u || !I;
                !m &&
                  (0, E.backToSchoolEnabled)() &&
                  (E.default.trackExposure({ location: "8b792a_1" }),
                  n(),
                  (0, r.requestMarkDismissibleContentAsShown)(
                    l.DismissibleContent.HUB_BACK_TO_SCHOOL_UPSELL
                  ));
              });
          },
          hideHubUpsell() {
            (0, r.markDismissibleContentAsDismissed)(
              l.DismissibleContent.HUB_BACK_TO_SCHOOL_UPSELL,
              { dismissAction: I.ContentDismissActionType.AUTO }
            );
          },
        };
    },
    658636: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        }),
        n("222007");
      var a = n("37983"),
        s = n("884691"),
        l = n("414456"),
        i = n.n(l),
        r = n("77078"),
        o = n("142833"),
        c = n("448993"),
        d = n("42203"),
        u = n("476765"),
        _ = n("238055"),
        E = n("49111"),
        N = n("782340"),
        I = n("406742");
      let m = (0, u.uid)();
      var f = e => {
        let {
            setStep: t,
            setGuildsInfo: n,
            email: l,
            setEmail: u,
            setGuildId: f,
            invite: C,
            onClose: T,
            isNUXFlow: S,
          } = e,
          [h, g] = s.useState(null),
          [A, p] = s.useState(!1),
          x = async e => {
            e.preventDefault(), g(null), p(!0);
            try {
              var a, s, i, r, u;
              let e =
                null !==
                  (u =
                    null !==
                      (r =
                        null == C
                          ? void 0
                          : null === (a = C.guild) || void 0 === a
                            ? void 0
                            : a.id) && void 0 !== r
                      ? r
                      : null ===
                            (s = d.default.getChannel(
                              null == C
                                ? void 0
                                : null === (i = C.channel) || void 0 === i
                                  ? void 0
                                  : i.id
                            )) || void 0 === s
                        ? void 0
                        : s.getGuildId()) && void 0 !== u
                  ? u
                  : void 0;
              e === _.INVITE_ROUTING_HUB_GUILD_ID && (e = void 0);
              let c = await o.default.sendVerificationEmail(l, !0, e),
                E = c.guilds_info,
                N = c.has_matching_guild;
              N
                ? (f(e), t(_.HubEmailConnectionSteps.VERIFY_PIN))
                : 0 === E.length
                  ? t(_.HubEmailConnectionSteps.SUBMIT_SCHOOL)
                  : 1 === E.length
                    ? (f(E[0].id),
                      await o.default.sendVerificationEmail(l, !0, E[0].id),
                      t(_.HubEmailConnectionSteps.VERIFY_PIN))
                    : (n(E), t(_.HubEmailConnectionSteps.SELECT_SCHOOL));
            } catch (e) {
              g(new c.APIError(e));
            } finally {
              p(!1);
            }
          },
          v = N.default.Messages.HUB_EMAIL_CONNECTION_CONTENT_HEADER,
          O = N.default.Messages.HUB_EMAIL_CONNECTION_CONTENT_DESCRIPTION;
        if (S)
          (v = N.default.Messages.HUB_EMAIL_CONNECTION_NUX_HEADER),
            (O =
              N.default.Messages.HUB_EMAIL_CONNECTION_NUX_CONTENT_DESCRIPTION);
        else if (
          (null == C ? void 0 : C.guild) != null &&
          C.guild.id !== _.INVITE_ROUTING_HUB_GUILD_ID &&
          (null == C ? void 0 : C.approximate_member_count) != null
        ) {
          let { name: e } = C.guild;
          v = N.default.Messages.HUB_EMAIL_CONNECTION_INVITE_HEADER.format({
            guildName: e,
            count: C.approximate_member_count,
          });
        }
        return (0, a.jsxs)("div", {
          className: I.container,
          children: [
            (0, a.jsx)("div", { className: I.topImage }),
            (0, a.jsx)(r.Heading, {
              className: i(I.centerText, I.header),
              variant: "heading-xl/semibold",
              children: v,
            }),
            (0, a.jsx)("div", {
              className: I.descriptionWidth,
              children: (0, a.jsx)(r.Text, {
                className: I.centerText,
                variant: "text-sm/normal",
                color: "header-secondary",
                children: O,
              }),
            }),
            (0, a.jsxs)("form", {
              className: I.formContent,
              onSubmit: x,
              children: [
                (0, a.jsxs)(r.FormItem, {
                  children: [
                    (0, a.jsx)(r.FormTitle, {
                      id: m,
                      children:
                        N.default.Messages
                          .HUB_EMAIL_CONNECTION_CONTENT_INPUT_HEADER,
                    }),
                    (0, a.jsx)(r.TextInput, {
                      placeholder:
                        N.default.Messages
                          .HUB_EMAIL_CONNECTION_CONTENT_INPUT_PLACEHOLDER,
                      onChange: e => {
                        u(e);
                      },
                      error: null == h ? void 0 : h.getAnyErrorMessage(),
                      "aria-labelledby": m,
                    }),
                  ],
                }),
                (0, a.jsx)(r.Text, {
                  color: "header-secondary",
                  className: I.formDescription,
                  variant: "text-sm/normal",
                  children:
                    N.default.Messages
                      .HUB_EMAIL_CONNECTION_CONTENT_INPUT_DESCRIPTION,
                }),
                (0, a.jsx)(r.Button, {
                  type: "submit",
                  size: r.Button.Sizes.LARGE,
                  color: r.Button.Colors.BRAND,
                  className: I.submitButton,
                  submitting: A,
                  children:
                    N.default.Messages.HUB_EMAIL_CONNECTION_CONTENT_BUTTON,
                }),
                (0, a.jsx)(r.Text, {
                  className: I.termsPhrase,
                  color: "header-secondary",
                  variant: "text-xs/normal",
                  children:
                    N.default.Messages.HUB_EMAIL_CONNECTION_CONTENT_TOS_AND_PP.format(
                      {
                        termsURL: E.MarketingURLs.TERMS,
                        privacyURL: E.MarketingURLs.PRIVACY,
                      }
                    ),
                }),
                S &&
                  (0, a.jsx)(r.Button, {
                    look: r.Button.Looks.LINK,
                    onClick: T,
                    className: I.cancelButton,
                    children: N.default.Messages.HUB_EMAIL_CONNECTION_CANCEL,
                  }),
              ],
            }),
          ],
        });
      };
    },
    124604: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        }),
        n("222007");
      var a = n("37983"),
        s = n("884691"),
        l = n("658636"),
        i = n("469147"),
        r = n("181221"),
        o = n("393421"),
        c = n("930794"),
        d = n("238055"),
        u = e => {
          let {
              onClose: t,
              invite: n,
              forceGuildScrollHeight: u = !0,
              isNUXFlow: _,
            } = e,
            [E, N] = s.useState([d.HubEmailConnectionSteps.VERIFY_EMAIL]),
            [I, m] = s.useState(""),
            [f, C] = s.useState(""),
            [T, S] = s.useState(void 0),
            [h, g] = s.useState([]),
            A = e => {
              let t = E.concat(e);
              N(t.slice(-4));
            },
            p = E[E.length - 1];
          switch (p) {
            case d.HubEmailConnectionSteps.VERIFY_EMAIL:
              return (0, a.jsx)(l.default, {
                setGuildsInfo: g,
                setStep: A,
                email: I,
                setEmail: m,
                setGuildId: S,
                invite: n,
                onClose: t,
                isNUXFlow: _,
              });
            case d.HubEmailConnectionSteps.SELECT_SCHOOL:
              return (0, a.jsx)(i.default, {
                guildsInfo: h,
                setStep: A,
                email: I,
                setGuildId: S,
                forceGuildScrollHeight: u,
              });
            case d.HubEmailConnectionSteps.SUBMIT_SCHOOL:
              return (0, a.jsx)(r.default, {
                onBack: () => {
                  if (E.length > 1) {
                    let e = E.slice(0, -1);
                    N(e.slice(-4));
                  }
                },
                setStep: A,
                email: I,
                school: f,
                setSchool: C,
              });
            case d.HubEmailConnectionSteps.VERIFY_PIN:
              return (0, a.jsx)(o.default, {
                email: I,
                onClose: t,
                guildId: T,
              });
            case d.HubEmailConnectionSteps.EMAIL_WAITLIST:
              return (0, a.jsx)(c.default, { setStep: A, school: f });
            default:
              return null;
          }
        };
    },
    469147: function (e, t, n) {
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
        r = n("448105"),
        o = n.n(r),
        c = n("77078"),
        d = n("142833"),
        u = n("448993"),
        _ = n("813006"),
        E = n("476263"),
        N = n("466857"),
        I = n("587974"),
        m = n("315102"),
        f = n("238055"),
        C = n("782340"),
        T = n("69012"),
        S = n("529861");
      function h(e) {
        var t;
        let { guildInfo: n, onClick: s, submitting: l } = e,
          i =
            null !==
              (t = m.default.getGuildIconURL({
                id: n.id,
                icon: n.icon,
                size: 40,
              })) && void 0 !== t
              ? t
              : void 0;
        return (0, a.jsxs)(c.Clickable, {
          className: T.clickableGuildInfoRow,
          onClick: s,
          children: [
            (0, a.jsx)(I.default, {
              mask: I.default.Masks.AVATAR_DEFAULT,
              width: 40,
              height: 40,
              children: (0, a.jsx)(E.default, {
                className: T.guildIcon,
                iconSrc: i,
                guild: new _.default(n),
                size: E.default.Sizes.MEDIUM,
              }),
            }),
            (0, a.jsx)(c.Text, {
              className: T.guildName,
              variant: "text-md/semibold",
              children: n.name,
            }),
            l
              ? (0, a.jsx)(c.Spinner, { type: c.Spinner.Type.PULSING_ELLIPSIS })
              : (0, a.jsx)("img", { className: T.arrow, alt: "", src: S }),
          ],
        });
      }
      var g = e => {
        let {
            setStep: t,
            email: n,
            guildsInfo: l,
            setGuildId: r,
            forceGuildScrollHeight: _,
          } = e,
          [E, I] = s.useState(null),
          [m, S] = s.useState(void 0),
          [g, A] = s.useState(null),
          p = e => async () => {
            I(null), r(e), A(e);
            try {
              await d.default.sendVerificationEmail(n, !0, e),
                t(f.HubEmailConnectionSteps.VERIFY_PIN);
            } catch (e) {
              I(new u.APIError(e));
            } finally {
              A(null);
            }
          },
          x = () => t(f.HubEmailConnectionSteps.SUBMIT_SCHOOL),
          v = l;
        return (
          null != m &&
            "" !== m &&
            (v = l.filter(e => o(m.toLowerCase(), e.name.toLowerCase()))),
          (0, a.jsxs)("div", {
            className: T.container,
            children: [
              (0, a.jsx)(c.Heading, {
                className: i(T.centerText, T.header),
                variant: "heading-xl/semibold",
                children:
                  C.default.Messages.HUB_EMAIL_CONNECTION_GUILD_SELECT_HEADER,
              }),
              (0, a.jsx)("div", {
                className: T.description,
                children: (0, a.jsx)(c.Text, {
                  className: T.centerText,
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children:
                    C.default.Messages.HUB_EMAIL_CONNECTION_GUILD_SELECT_SUBHEADER.format(
                      { onJoinWaitlist: x }
                    ),
                }),
              }),
              (0, a.jsxs)("div", {
                className: i(T.guildList, { [T.forcedHeight]: _ }),
                children: [
                  (0, a.jsxs)("div", {
                    className: T.searchContainer,
                    children: [
                      (0, a.jsx)(N.default, {
                        placeholder: C.default.Messages.SEARCH,
                        className: T.searchBox,
                        inputClassName: T.searchBoxInput,
                        searchIconClassName: T.searchBoxIcon,
                        closeIconClassName: T.searchBoxIcon,
                        onChange: e => {
                          S(e);
                        },
                        label: C.default.Messages.SEARCH,
                        searchTerm: m,
                        onClear: () => {
                          S(void 0);
                        },
                      }),
                      (0, a.jsx)(c.Text, {
                        color: "text-danger",
                        variant: "text-xs/normal",
                        children: null == E ? void 0 : E.getAnyErrorMessage(),
                      }),
                    ],
                  }),
                  v.length > 0
                    ? (0, a.jsx)(c.ScrollerThin, {
                        className: T.scroller,
                        children: v.map(e =>
                          void 0 === e
                            ? null
                            : (0, a.jsx)(
                                h,
                                {
                                  guildInfo: e,
                                  onClick: p(e.id),
                                  submitting: g === e.id,
                                },
                                e.id
                              )
                        ),
                      })
                    : (0, a.jsx)("div", {
                        className: T.noResultsContainer,
                        children: (0, a.jsxs)("div", {
                          className: T.noResultsContent,
                          children: [
                            (0, a.jsx)("div", { className: T.noResultsImage }),
                            (0, a.jsx)(c.Heading, {
                              className: i(T.centerText, T.header),
                              variant: "heading-xl/semibold",
                              children:
                                C.default.Messages
                                  .HUB_EMAIL_CONNECTION_GUILD_SELECT_NO_RESULTS_HEADER,
                            }),
                            (0, a.jsx)(c.Text, {
                              className: T.centerText,
                              variant: "text-md/normal",
                              children:
                                C.default.Messages.HUB_EMAIL_CONNECTION_GUILD_SELECT_NO_RESULTS_SUBHEADER.format(
                                  { onJoinWaitlist: x }
                                ),
                            }),
                          ],
                        }),
                      }),
                ],
              }),
            ],
          })
        );
      };
    },
    927475: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
          },
          HubEmailConnectionModalView: function () {
            return I;
          },
        });
      var a = n("37983"),
        s = n("884691"),
        l = n("759843"),
        i = n("77078"),
        r = n("42963"),
        o = n("353983"),
        c = n("124604"),
        d = n("21873"),
        u = n("149806"),
        _ = n("782340"),
        E = n("353990");
      function N(e) {
        let { transitionState: t, onClose: n, isNUXFlow: N } = e;
        return (
          s.useEffect(() => {
            o.default.hideHubUpsell(),
              N &&
                r.default.flowStep(
                  u.FlowType.ORGANIC,
                  u.RegistrationSteps.HUB_CONNECTION
                );
          }, [N]),
          (0, a.jsx)(i.ModalRoot, {
            className: E.modalRoot,
            transitionState: t,
            "aria-label": _.default.Messages.HUB_WAITLIST_MODAL_JOIN_HEADER,
            impression: { impressionName: l.ImpressionNames.HUB_EMAIL_SIGNUP },
            children: (0, a.jsx)(i.ModalContent, {
              style: { overflow: "hidden", paddingRight: "0px" },
              paddingFix: !1,
              className: E.modalContent,
              children: (0, a.jsxs)("div", {
                className: E.container,
                children: [
                  (0, a.jsx)("div", {
                    className: E.sidebarContainer,
                    children: (0, a.jsx)(d.default, {}),
                  }),
                  (0, a.jsxs)("div", {
                    className: E.contentContainer,
                    children: [
                      (0, a.jsx)(i.ModalCloseButton, {
                        onClick: n,
                        className: E.closeButton,
                      }),
                      (0, a.jsx)(c.default, { isNUXFlow: N, onClose: n }),
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      }
      let I = e => {
        let { invite: t } = e;
        return (0, a.jsxs)("div", {
          className: E.container,
          children: [
            (0, a.jsx)("div", {
              className: E.sidebarContainer,
              children: (0, a.jsx)(d.default, {}),
            }),
            (0, a.jsx)("div", {
              className: E.contentContainer,
              children: (0, a.jsx)(c.default, { invite: t }),
            }),
          ],
        });
      };
    },
    21873: function (e, t, n) {
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
        i = n("64323"),
        r = () =>
          (0, a.jsxs)("div", {
            className: i.container,
            children: [
              (0, a.jsx)("div", {
                className: i.iconContainer,
                children: (0, a.jsx)("div", { className: i.icon }),
              }),
              (0, a.jsx)(s.Text, {
                color: "header-primary",
                variant: "text-lg/semibold",
                className: i.header,
                children:
                  l.default.Messages.HUB_EMAIL_CONNECTION_SIDEBAR_HEADER,
              }),
              (0, a.jsx)(s.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: i.description,
                children:
                  l.default.Messages.HUB_EMAIL_CONNECTION_SIDEBAR_DESCRIPTION.format(),
              }),
            ],
          });
    },
    181221: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        }),
        n("222007");
      var a = n("37983"),
        s = n("884691"),
        l = n("414456"),
        i = n.n(l),
        r = n("77078"),
        o = n("142833"),
        c = n("448993"),
        d = n("476765"),
        u = n("238055"),
        _ = n("49111"),
        E = n("782340"),
        N = n("291115");
      let I = (0, d.uid)();
      var m = e => {
        let { email: t, setStep: n, onBack: l, school: d, setSchool: m } = e,
          [f, C] = s.useState(null),
          [T, S] = s.useState(!1),
          h = async () => {
            C(null), S(!0);
            try {
              await o.default.signup(t, d),
                n(u.HubEmailConnectionSteps.EMAIL_WAITLIST);
            } catch (e) {
              C(new c.APIError(e));
            } finally {
              S(!1);
            }
          },
          g = async e => {
            null != d &&
              "" !== d &&
              e.charCode === _.KeyboardKeys.ENTER &&
              (await h());
          };
        return (0, a.jsxs)("div", {
          className: N.container,
          children: [
            (0, a.jsx)("div", { className: N.topImage }),
            (0, a.jsx)(r.Heading, {
              className: i(N.centerText, N.header),
              variant: "heading-xl/semibold",
              children:
                E.default.Messages.HUB_EMAIL_CONNECTION_SCHOOL_SUBMIT_HEADER,
            }),
            (0, a.jsx)("div", {
              className: N.descriptionWidth,
              children: (0, a.jsx)(r.Text, {
                className: N.centerText,
                variant: "text-sm/normal",
                color: "header-secondary",
                children:
                  E.default.Messages
                    .HUB_EMAIL_CONNECTION_SCHOOL_SUBMIT_DESCRIPTION,
              }),
            }),
            (0, a.jsxs)(r.FormItem, {
              className: N.formItem,
              children: [
                (0, a.jsx)(r.FormTitle, {
                  id: I,
                  children:
                    E.default.Messages
                      .HUB_EMAIL_CONNECTION_SCHOOL_SUBMIT_INPUT_HEADER,
                }),
                (0, a.jsx)(r.TextInput, {
                  onKeyPress: g,
                  placeholder:
                    E.default.Messages
                      .HUB_EMAIL_CONNECTION_SCHOOL_SUBMIT_INPUT_PLACEHOLDER,
                  onChange: e => {
                    m(e);
                  },
                  error: null == f ? void 0 : f.getAnyErrorMessage(),
                  "aria-labelledby": I,
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: N.footer,
              children: [
                (0, a.jsx)(r.Button, {
                  className: N.backButton,
                  onClick: l,
                  look: r.Button.Looks.LINK,
                  size: r.Button.Sizes.NONE,
                  color: r.Button.Colors.PRIMARY,
                  children: E.default.Messages.BACK,
                }),
                (0, a.jsx)(r.Button, {
                  onClick: h,
                  size: r.Button.Sizes.MEDIUM,
                  color: r.Button.Colors.BRAND,
                  className: N.submitButton,
                  submitting: T,
                  children: E.default.Messages.JOIN_WAITLIST,
                }),
              ],
            }),
          ],
        });
      };
    },
    393421: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        }),
        n("222007");
      var a = n("37983"),
        s = n("884691"),
        l = n("414456"),
        i = n.n(l),
        r = n("917351"),
        o = n.n(r),
        c = n("77078"),
        d = n("142833"),
        u = n("448993"),
        _ = n("393414"),
        E = n("476765"),
        N = n("49111"),
        I = n("782340"),
        m = n("398096");
      let f = (0, E.uid)();
      var C = e => {
        let { email: t, guildId: n, onClose: l } = e,
          [r, E] = s.useState(""),
          [C, T] = s.useState(null),
          S = s.useCallback(async () => {
            if (null != n)
              try {
                let e = await d.default.verifyCode(r, n, t);
                e.guild &&
                  (null == l || l(),
                  (0, _.transitionTo)(N.Routes.CHANNEL(e.guild.id)));
              } catch (e) {
                T(new u.APIError(e));
              }
          }, [r, t, n, l]),
          h = o.throttle(() => {
            d.default.sendVerificationEmail(t, !0, n);
          }, 1e3),
          g = async e => {
            null != r &&
              "" !== r &&
              e.charCode === N.KeyboardKeys.ENTER &&
              (await S());
          };
        return (0, a.jsxs)("div", {
          className: m.container,
          children: [
            (0, a.jsx)("div", { className: m.topImage }),
            (0, a.jsx)(c.Heading, {
              className: i(m.centerText, m.header),
              variant: "heading-xl/semibold",
              children: I.default.Messages.HUB_VERIFY_EMAIL_ADDRESS,
            }),
            (0, a.jsx)("div", {
              className: m.descriptionWidth,
              children: (0, a.jsx)(c.Text, {
                className: m.centerText,
                variant: "text-sm/normal",
                color: "header-secondary",
                children: I.default.Messages.HUB_PIN_DESCRIPTION.format({
                  email: t,
                  onClick: h,
                }),
              }),
            }),
            (0, a.jsxs)(c.FormItem, {
              className: m.formItem,
              children: [
                (0, a.jsx)(c.FormTitle, {
                  id: f,
                  children: I.default.Messages.HUB_ENTER_PIN,
                }),
                (0, a.jsx)(c.TextInput, {
                  onKeyPress: g,
                  onChange: e => {
                    null != e && "" !== e && E(e);
                  },
                  error: null == C ? void 0 : C.getAnyErrorMessage(),
                  "aria-labelledby": f,
                }),
              ],
            }),
            (0, a.jsx)(c.Button, {
              fullWidth: !0,
              onClick: S,
              size: c.Button.Sizes.LARGE,
              color: c.Button.Colors.BRAND,
              children: (0, a.jsx)(c.Text, {
                className: m.submitText,
                variant: "text-sm/normal",
                children: I.default.Messages.SUBMIT,
              }),
            }),
          ],
        });
      };
    },
    930794: function (e, t, n) {
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
        r = n("238055"),
        o = n("782340"),
        c = n("406742"),
        d = e => {
          let { school: t, setStep: n } = e;
          return (0, a.jsxs)("div", {
            className: c.container,
            children: [
              (0, a.jsx)("div", { className: c.topImage }),
              (0, a.jsx)(i.Heading, {
                className: l(c.centerText, c.header),
                variant: "heading-xl/semibold",
                children: o.default.Messages.HUB_WAITLIST_MODAL_JOINED_HEADER,
              }),
              (0, a.jsx)("div", {
                className: c.descriptionWidth,
                children: (0, a.jsx)(i.Text, {
                  className: c.centerText,
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children:
                    o.default.Messages.HUB_WAITLIST_MODAL_JOINED_DESCRIPTION.format(
                      { school: t }
                    ),
                }),
              }),
              (0, a.jsx)(i.Button, {
                look: i.Button.Looks.LINK,
                size: i.Button.Sizes.SMALL,
                color: i.Button.Colors.LINK,
                onClick: () => {
                  n(r.HubEmailConnectionSteps.VERIFY_EMAIL);
                },
                className: c.resendLink,
                children:
                  o.default.Messages.HUB_EMAIL_CONFIRMATION_DIFFERENT_EMAIL,
              }),
            ],
          });
        };
    },
    149806: function (e, t, n) {
      "use strict";
      var a, s, l, i, r, o, c, d, u, _;
      n.r(t),
        n.d(t, {
          FlowType: function () {
            return a;
          },
          AgeGateSteps: function () {
            return s;
          },
          ClaimAccountSteps: function () {
            return l;
          },
          CreateGuildSteps: function () {
            return i;
          },
          RegistrationSteps: function () {
            return r;
          },
        }),
        ((o = a || (a = {})).UNKNOWN = "unknown"),
        (o.ANY = "any"),
        (o.INVITE = "invite"),
        (o.ORGANIC = "organic_registration"),
        (o.ORGANIC_MARKETING = "organic_marketing"),
        (o.ORGANIC_GUILD_TEMPLATES = "organic_guild_template"),
        (o.CREATE_GUILD = "create_guild"),
        ((c = s || (s = {})).AGE_GATE = "age_gate"),
        (c.AGE_GATE_UNDERAGE = "age_gate_underage"),
        ((d = l || (l = {})).CLAIM_ACCOUNT = "claim_account"),
        (d.CLAIM_ACCOUNT_SUCCESS = "claim_account_success"),
        ((u = i || (i = {})).GUILD_TEMPLATES = "guild_templates"),
        (u.GUILD_CREATE = "guild_create"),
        (u.CREATION_INTENT = "creation_intent"),
        (u.CHANNEL_PROMPT = "channel_prompt"),
        (u.JOIN_GUILD = "join_guild"),
        (u.SUCCESS = "create_success"),
        ((_ = r || (r = {})).NUF_STARTED = "nuf_started"),
        (_.AGE_GATE = "age_gate"),
        (_.NUF_COMPLETE = "nuf_complete"),
        (_.HUB_CONNECTION = "hub_connection");
    },
    42963: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var a = n("308503"),
        s = n("95410"),
        l = n("605250"),
        i = n("599110"),
        r = n("149806"),
        o = n("49111");
      let c = "UserFlowAnalyticsStore_current",
        d = "UserFlowAnalyticsStore";
      function u(e) {
        if (e === r.FlowType.UNKNOWN) return null;
        let t = s.default.get("".concat(d, "-").concat(e));
        if (null == t) return null;
        let { version: n, ...a } = t;
        return 1 !== n ? null : a;
      }
      new l.default("UserFlowAnalytics");
      let _ = (0, a.default)((e, t) => ({
        flows: {},
        currentFlow: null,
        activeFlow: () => {
          var e;
          let n =
            null !== (e = t().currentFlow) && void 0 !== e
              ? e
              : s.default.get(c);
          if (null == n) return null;
          let { [n]: a } = t().flows,
            l = null != a ? a : u(n);
          return (null == l ? void 0 : l.currentStep) != null ? n : null;
        },
      }));
      function E(e, t) {
        let { [e]: n, ...a } = _.getState().flows,
          s = null != n ? n : u(e);
        if ((null == s ? void 0 : s.currentStep) == null || s.currentStep !== t)
          _.setState({
            flows: {
              ...a,
              [e]: {
                type: e,
                lastStep: null,
                lastTimestamp: null,
                currentStep: t,
                currentTimestamp: new Date(),
                skipped: !1,
              },
            },
            currentFlow: e,
          });
      }
      function N(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          a = e;
        if (e === r.FlowType.ANY) {
          var s;
          a =
            null !== (s = _.getState().activeFlow()) && void 0 !== s
              ? s
              : r.FlowType.UNKNOWN;
        }
        let { [a]: l, ...i } = _.getState().flows,
          o = null != l ? l : u(a);
        if (null != o && null != o.currentStep)
          o.currentStep !== t &&
            _.setState({
              flows: {
                ...i,
                [a]: {
                  ...o,
                  lastStep: o.currentStep,
                  lastTimestamp: o.currentTimestamp,
                  currentStep: t,
                  currentTimestamp: new Date(),
                  ended: n,
                },
              },
              currentFlow: a,
            });
      }
      _.subscribe(
        e => {
          var t;
          if (
            null != e &&
            (!(function (e) {
              if (e.type === r.FlowType.UNKNOWN) return;
              let t = "".concat(d, "-").concat(e.type);
              e.ended
                ? (s.default.remove(t), s.default.remove(c))
                : (s.default.set("".concat(d, "-").concat(e.type), {
                    ...e,
                    version: 1,
                  }),
                  s.default.set(c, e.type));
            })(e),
            i.default.track(
              o.AnalyticEvents.NUO_TRANSITION,
              {
                flow_type: e.type,
                from_step: e.lastStep,
                to_step: e.currentStep,
                seconds_on_from_step:
                  "function" !=
                  typeof (null === (t = e.lastTimestamp) || void 0 === t
                    ? void 0
                    : t.getTime)
                    ? 0
                    : (e.currentTimestamp.getTime() -
                        e.lastTimestamp.getTime()) /
                      1e3,
              },
              { flush: !0 }
            ),
            e.ended)
          ) {
            let t = { ..._.getState().flows };
            delete t[e.type], _.setState({ flows: t, currentFlow: null });
          }
        },
        e => (null != e.currentFlow ? e.flows[e.currentFlow] : void 0)
      );
      function I() {
        return null != _.getState().activeFlow();
      }
      var m = {
        flowStart: E,
        flowStepOrStart: function (e, t) {
          I() ? N(e, t) : E(e, t);
        },
        flowStep: N,
        hasActiveFlow: I,
      };
    },
  },
]);
//# sourceMappingURL=5b9a230644739803bb50.js.map
