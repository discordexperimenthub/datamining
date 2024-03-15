(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["96210"],
  {
    766665: function (e, t, n) {
      var r = n("424498");
      e.exports = function (e, t, n) {
        "__proto__" == t && r
          ? r(e, t, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0,
            })
          : (e[t] = n);
      };
    },
    53708: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f6c7b8245d3a54cf98b2.png";
    },
    284434: function (e, t, n) {
      "use strict";
      e.exports = n.p + "51063f34b3960c1d5da8.svg";
    },
    315956: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f92a8b5812e2da52a179.svg";
    },
    112679: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          updateStripePaymentRequest: function () {
            return i;
          },
          updateCardInfo: function () {
            return s;
          },
          clearCardInfo: function () {
            return l;
          },
          updateAddressInfo: function () {
            return a;
          },
          clearError: function () {
            return o;
          },
        });
      var r = n("913144");
      function i(e) {
        r.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
          stripePaymentMethod: e,
        });
      }
      function s(e, t) {
        r.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
          info: e,
          isValid: t,
        });
      }
      function l() {
        r.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
          info: { name: "" },
          isValid: !1,
        });
      }
      function a(e, t) {
        r.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
          info: e,
          isValid: t,
        });
      }
      function o() {
        r.default.wait(() =>
          r.default.dispatch({ type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR" })
        );
      }
    },
    55689: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          clearPurchaseTokenAuthState: function () {
            return i;
          },
        });
      var r = n("913144");
      function i() {
        r.default.dispatch({ type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE" });
      }
    },
    145079: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("414456"),
        s = n.n(i),
        l = n("446674"),
        a = n("77078"),
        o = n("102985"),
        u = n("79798"),
        c = n("754474"),
        d = n("158998"),
        f = n("782340"),
        h = n("168540");
      function E(e) {
        if (e.isSystemUser()) return c.BotTypes.SYSTEM_DM;
        if (e.isClyde()) return c.BotTypes.AI;
        if (e.bot) return c.BotTypes.BOT;
        return null;
      }
      let m = e => {
        let {
          primary: t,
          secondary: n,
          botType: i,
          botVerified: l,
          discriminatorClass: o,
          className: c,
          usernameClass: d,
          color: E,
          botClass: m,
          showStreamerModeTooltip: v,
        } = e;
        return (0, r.jsxs)("div", {
          className: s(h.info, c),
          children: [
            (0, r.jsx)(a.Tooltip, {
              text: f.default.Messages.STREAMER_MODE_ENABLED,
              shouldShow: v,
              "aria-label": !!v && void 0,
              children: e =>
                (0, r.jsx)("span", {
                  ...e,
                  className: s(h.username, d),
                  style: null != E ? { color: E } : void 0,
                  children: t,
                }),
            }),
            null != n
              ? (0, r.jsx)("span", {
                  className: s(h.infoSpacing, o),
                  children: n,
                })
              : void 0,
            null != i &&
              (0, r.jsx)(u.default, {
                type: i,
                className: s(h.infoSpacing, m),
                verified: l,
              }),
          ],
        });
      };
      var v = e => {
        let {
            hideDiscriminator: t = !1,
            user: n,
            nick: i,
            forceUsername: s,
            showAccountIdentifier: a,
            overrideDiscriminator: u,
            forcePomelo: f,
            ...h
          } = e,
          v = (0, l.useStateFromStores)(
            [o.default],
            () => o.default.hidePersonalInformation
          ),
          p = v || t || n.isNonUserBot(),
          C = n.toString(),
          _ = d.default.getName(n),
          N = s ? C : null != i ? i : _,
          g = n.isPomelo() || f;
        if (g || N !== C) {
          let e =
              N === C && g && s
                ? d.default.getUserTag(n, { forcePomelo: f })
                : N,
            t = a && e !== "@".concat(C) ? d.default.getUserTag(n) : void 0;
          return (0, r.jsx)(m, {
            primary: e,
            secondary: t,
            botVerified: n.isVerifiedBot(),
            botType: E(n),
            showStreamerModeTooltip: v && e !== _,
            ...h,
          });
        }
        return (0, r.jsx)(c.default, {
          name: N,
          botType: E(n),
          botVerified: n.isVerifiedBot(),
          discriminator: p || N !== C ? null : null != u ? u : n.discriminator,
          ...h,
        });
      };
    },
    45299: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        }),
        n("222007");
      var r = n("37983"),
        i = n("884691"),
        s = n("907002"),
        l = n("669491"),
        a = n("77078"),
        o = n("659500"),
        u = n("49111"),
        c = n("782340"),
        d = n("645780"),
        f = function (e) {
          var t;
          let {
              message: n,
              errorMessage: f,
              submitting: h,
              onReset: E,
              onSave: m,
              onSaveText: v,
              onResetText: p,
              onSaveButtonColor: C,
              disabled: _,
              saveButtonTooltip: N,
            } = e,
            g = i.useRef(null),
            [{ spring: T }, S] = (0, s.useSpring)(() => ({ spring: 0 }));
          i.useEffect(() => {
            function e() {
              S({ spring: 1, config: s.config.gentle }),
                S({ spring: 0, config: s.config.gentle, delay: 1e3 });
            }
            return (
              o.ComponentDispatch.subscribe(
                u.ComponentActions.EMPHASIZE_NOTICE,
                e
              ),
              () => {
                o.ComponentDispatch.unsubscribe(
                  u.ComponentActions.EMPHASIZE_NOTICE,
                  e
                );
              }
            );
          }, [S]);
          let I = T.to({
              range: [0, 1],
              output: [
                (0, a.useToken)(l.default.colors.TEXT_NORMAL).hex(),
                (0, a.useToken)(l.default.unsafe_rawColors.WHITE_500).hex(),
              ],
            }),
            R = T.to({
              range: [0, 1],
              output: [
                (0, a.useToken)(l.default.colors.BACKGROUND_FLOATING).hex(),
                (0, a.useToken)(l.default.colors.STATUS_DANGER).hex(),
              ],
            }),
            x = T.to({
              range: [0, 1],
              output: [
                (0, a.useToken)(l.default.colors.TEXT_DANGER).hex(),
                (0, a.useToken)(l.default.unsafe_rawColors.WHITE_500).hex(),
              ],
            });
          return (0, r.jsx)(s.animated.div, {
            className: d.container,
            style: { backgroundColor: R },
            children: (0, r.jsx)("div", {
              className: d.flexContainer,
              ref: g,
              children: (0, r.jsxs)(a.FocusRingScope, {
                containerRef: g,
                children: [
                  (0, r.jsx)("div", {
                    className: d.shrinkingContainer,
                    children: (0, r.jsx)(s.animated.div, {
                      className: d.message,
                      style: { color: null != f ? x : I },
                      children:
                        null !== (t = null != f ? f : n) && void 0 !== t
                          ? t
                          : c.default.Messages.SETTINGS_NOTICE_MESSAGE,
                    }),
                  }),
                  (0, r.jsxs)("div", {
                    className: d.actions,
                    children: [
                      null != E &&
                        (0, r.jsx)(a.Button, {
                          className: d.resetButton,
                          size: a.Button.Sizes.SMALL,
                          color: a.Button.Colors.PRIMARY,
                          look: a.Button.Looks.LINK,
                          onClick: E,
                          children: (0, r.jsx)(s.animated.span, {
                            style: { color: I },
                            children: null != p ? p : c.default.Messages.RESET,
                          }),
                        }),
                      null != m
                        ? (0, r.jsx)(a.Tooltip, {
                            text: N,
                            children: e =>
                              (0, r.jsx)(a.Button, {
                                size: a.Button.Sizes.SMALL,
                                color: null != C ? C : a.Button.Colors.GREEN,
                                submitting: h,
                                disabled: _,
                                onClick: m,
                                ...e,
                                children:
                                  null != v
                                    ? v
                                    : c.default.Messages.SAVE_CHANGES,
                              }),
                          })
                        : null,
                    ],
                  }),
                ],
              }),
            }),
          });
        };
    },
    733154: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("76527");
      n.es(r, t);
    },
    505088: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("506070");
      n.es(r, t);
    },
    495137: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("656930");
      n.es(r, t);
    },
    163725: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("962821");
      n.es(r, t);
    },
    185020: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("193291");
      n.es(r, t);
    },
    424823: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("632874");
      n.es(r, t);
    },
    125094: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("782542");
      n.es(r, t);
    },
    287083: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("618807");
      n.es(r, t);
    },
    769174: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("28289");
      n.es(r, t);
    },
    390300: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("882039");
      n.es(r, t);
    },
    252744: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        }),
        n("222007");
      var r = n("884691");
      function i(e) {
        let [t, n] = (0, r.useState)(!1),
          i = (0, r.useRef)(e.current);
        return (
          (0, r.useEffect)(() => {
            i.current = e.current;
          }, [e]),
          (0, r.useEffect)(() => {
            let e = i.current;
            if (null == e) return;
            let t = () => n(!0),
              r = () => n(!1);
            return (
              e.addEventListener("mouseenter", t),
              e.addEventListener("mouseleave", r),
              () => {
                e.removeEventListener("mouseenter", t),
                  e.removeEventListener("mouseleave", r);
              }
            );
          }, [i]),
          t
        );
      }
    },
    889014: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var r = n("446674"),
        i = n("76393");
      function s() {
        return (0, r.useStateFromStores)(
          [i.default],
          () =>
            null != i.default.getRemoteSessionId() ||
            null != i.default.getAwaitingRemoteSessionInfo()
        );
      }
    },
    390236: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var r = n("884691");
      let i = r.createContext(void 0);
      var s = i;
    },
    689226: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getRoleIconData: function () {
            return d;
          },
          replaceRoleIconSourceSize: function () {
            return f;
          },
          isRoleIconAssetUrl: function () {
            return E;
          },
          canGuildUseRoleIcons: function () {
            return m;
          },
        }),
        n("781738");
      var r = n("867805"),
        i = n("407063"),
        s = n("315102"),
        l = n("773336"),
        a = n("49111");
      let o = ""
          .concat(location.protocol, "//")
          .concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
        u = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
        c = (0, l.isAndroid)(),
        d = (e, t) => {
          if (null == e) return null;
          let n =
            null != e.unicodeEmoji
              ? r.default.getByName(
                  r.default.convertSurrogateToName(e.unicodeEmoji, !1)
                )
              : void 0;
          return {
            customIconSrc: h(e, t),
            unicodeEmoji: null != n ? n : void 0,
          };
        },
        f = (e, t) =>
          e.replace(
            /size=[0-9]+/g,
            "size=".concat(
              (0, i.getBestMediaProxySize)(t * (0, i.getDevicePixelRatio)())
            )
          ),
        h = (e, t) => {
          let { id: n, icon: r } = e;
          if (null == r) return;
          if (r.startsWith("data:")) return r;
          let l = s.SUPPORTS_WEBP ? "webp" : "png",
            d = "",
            f = "quality=lossless";
          return (null != t &&
            ((d =
              "size=" +
              (0, i.getBestMediaProxySize)(t * (0, i.getDevicePixelRatio)())),
            (f = c ? "" : "&" + f)),
          null != window.GLOBAL_ENV.CDN_HOST)
            ? ""
                .concat(o, "/")
                .concat(n, "/")
                .concat(r, ".")
                .concat(l, "?")
                .concat(d)
                .concat(f)
            : "".concat(u).concat(a.Endpoints.ROLE_ICON(n, r), "?").concat(d);
        },
        E = e =>
          e.startsWith(o) ||
          (e.startsWith("".concat(u, "/roles")) && e.includes("/icons/")),
        m = (e, t) => {
          var n;
          let r =
            (null == t
              ? void 0
              : null === (n = t.tags) || void 0 === n
                ? void 0
                : n.subscription_listing_id) != null;
          return r || e.features.has(a.GuildFeatures.ROLE_ICONS);
        };
    },
    409464: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          isValidFormResponse: function () {
            return l;
          },
          isAutomaticApprovalFormField: function () {
            return a;
          },
          isManualApprovalFormField: function () {
            return o;
          },
        });
      var r = n("449008"),
        i = n("567054"),
        s = n("394294");
      let l = e => {
        let { required: t, response: n, field_type: s } = e;
        if (!t) return !0;
        if (null == n) return !1;
        switch (s) {
          case i.VerificationFormFieldTypes.TERMS:
          case i.VerificationFormFieldTypes.VERIFICATION:
            return !!n;
          case i.VerificationFormFieldTypes.TEXT_INPUT:
          case i.VerificationFormFieldTypes.PARAGRAPH:
            return "string" == typeof n && "" !== n.trim();
          case i.VerificationFormFieldTypes.MULTIPLE_CHOICE:
            return "number" == typeof n;
          default:
            return (0, r.assertNever)(s);
        }
      };
      function a(e) {
        return s.AUTOMATIC_APPROVAL_FORM_FIELDS.has(
          null == e ? void 0 : e.field_type
        );
      }
      function o(e) {
        return s.MANUAL_APPROVAL_FORM_FIELDS.has(
          null == e ? void 0 : e.field_type
        );
      }
    },
    93184: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        });
      var r = n("37983"),
        i = n("884691"),
        s = n("446674"),
        l = n("266491"),
        a = n("77078"),
        o = n("45299"),
        u = n("965397"),
        c = n("476765"),
        d = n("526253"),
        f = n("347977"),
        h = n("267235"),
        E = n("394294"),
        m = n("782340"),
        v = n("874426");
      let p = () =>
        (0, r.jsx)(o.default, {
          submitting: !1,
          message: m.default.Messages.MEMBER_VERIFICATION_PROGRESS_LOST_TITLE,
          onReset: () => {
            (0, f.setShowWarning)(!1);
          },
          onResetText: m.default.Messages.CANCEL,
          onSave: () => {
            (0, f.setShowWarning)(!1),
              (0, a.closeModal)(E.IN_APP_MEMBER_VERIFICATION_MODAL_KEY);
          },
          onSaveText:
            m.default.Messages.MEMBER_VERIFICATION_PROGRESS_LOST_CONTINUE,
          onSaveButtonColor: a.ButtonColors.RED,
        });
      var C = e => {
        let {
            guildId: t,
            transitionState: n,
            onClose: o,
            onComplete: E,
            isPreview: m = !1,
          } = e,
          C = (0, f.useMemberVerificationFormNoticeStore)(
            e => e.shouldShowWarning
          ),
          _ = (0, s.useStateFromStores)([d.default], () => d.default.get(t)),
          N = (0, c.useUID)();
        return (i.useEffect(() => {
          _ === d.NO_MEMBER_VERIFICATION_FORM && o();
        }, [o, _]),
        _ === d.NO_MEMBER_VERIFICATION_FORM)
          ? null
          : (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsxs)(a.ModalRoot, {
                  size: a.ModalSize.MEDIUM,
                  className: v.container,
                  transitionState: n,
                  "aria-labelledby": N,
                  children: [
                    (0, r.jsx)(a.ModalCloseButton, {
                      onClick: () => o(!1),
                      className: v.closeButton,
                    }),
                    (0, r.jsx)(h.default, {
                      headerId: N,
                      guildId: t,
                      onClose: o,
                      onComplete: E,
                      isPreview: m,
                    }),
                  ],
                }),
                (0, r.jsx)(l.TransitionGroup, {
                  children:
                    !0 === C &&
                    (0, r.jsx)(u.default, {
                      className: v.notice,
                      children: (0, r.jsx)(p, {}),
                    }),
                }),
              ],
            });
      };
    },
    272460: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          QuestionRenderer: function () {
            return u;
          },
          RequirementRenderer: function () {
            return c;
          },
          RequirementWithActionRenderer: function () {
            return d;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("669491"),
        s = n("77078"),
        l = n("578706"),
        a = n("381546"),
        o = n("142435");
      function u(e) {
        let { title: t, children: n } = e;
        return (0, r.jsxs)("div", {
          className: o.questionContainer,
          children: [
            (0, r.jsx)(s.Text, {
              className: o.questionTitle,
              variant: "text-md/semibold",
              color: "header-primary",
              children: t,
            }),
            n,
          ],
        });
      }
      function c(e) {
        let { icon: t, text: n, meetsRequirement: u } = e;
        return (0, r.jsxs)("div", {
          className: o.requirementContainer,
          children: [
            (0, r.jsx)(t, {
              className: o.requirementIcon,
              height: 20,
              width: 20,
            }),
            (0, r.jsx)(s.Text, {
              className: o.requirementText,
              variant: "text-md/normal",
              children: n,
            }),
            u
              ? (0, r.jsx)(l.default, {
                  width: 24,
                  height: 24,
                  className: o.requirementSuccess,
                  backgroundColor: i.default.unsafe_rawColors.WHITE_500.css,
                })
              : (0, r.jsx)(a.default, {
                  width: 24,
                  height: 24,
                  className: o.requirementFailure,
                  backgroundColor: i.default.unsafe_rawColors.WHITE_500.css,
                }),
          ],
        });
      }
      function d(e) {
        let {
          icon: t,
          text: n,
          footnote: a,
          meetsRequirement: u,
          children: c,
        } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)("div", {
              className: o.requirementContainer,
              children: [
                (0, r.jsx)(t, {
                  className: o.requirementIcon,
                  height: 20,
                  width: 20,
                }),
                (0, r.jsx)(s.Text, {
                  className: o.requirementText,
                  variant: "text-md/normal",
                  children: n,
                }),
                u
                  ? (0, r.jsx)(l.default, {
                      width: 24,
                      height: 24,
                      className: o.requirementSuccess,
                      backgroundColor: i.default.unsafe_rawColors.WHITE_500.css,
                    })
                  : c,
              ],
            }),
            null != a &&
              (0, r.jsx)(s.Text, {
                color: "header-secondary",
                className: o.footnote,
                variant: "text-xs/normal",
                children: a,
              }),
          ],
        });
      }
    },
    472850: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          MultipleChoiceFieldBody: function () {
            return d;
          },
          DisabledMultipleChoiceFormField: function () {
            return f;
          },
          MultipleChoiceFormField: function () {
            return h;
          },
        });
      var r = n("37983"),
        i = n("884691"),
        s = n("414456"),
        l = n.n(s),
        a = n("77078"),
        o = n("272460"),
        u = n("621115"),
        c = n("28551");
      function d(e) {
        let {
            disabled: t,
            field: n,
            value: s,
            radioItemClassName: o,
            radioItemIconClassName: u,
            onChange: d,
          } = e,
          { choices: f } = n,
          h = i.useMemo(
            () =>
              f.map((e, t) => ({
                name: e,
                value: t,
                radioItemIconClassName: l(c.multipleChoiceIcon, u),
              })),
            [f, u]
          );
        return (0, r.jsx)(a.RadioGroup, {
          disabled: t,
          options: h,
          value: s,
          onChange: d,
          radioItemClassName: o,
          withTransparentBackground: !0,
        });
      }
      function f(e) {
        let { formField: t } = e,
          n = null != t.response ? t.choices[t.response] : "";
        return (0, r.jsx)(o.QuestionRenderer, {
          title: t.label,
          children: (0, r.jsx)(u.TextInputFieldBody, {
            className: c.fieldBackground,
            value: n,
            disabled: !0,
          }),
        });
      }
      function h(e) {
        let { formField: t, onChange: n } = e;
        return (0, r.jsx)(o.QuestionRenderer, {
          title: t.label,
          children: (0, r.jsx)(d, {
            radioItemClassName: c.fieldBackground,
            field: t,
            value: t.response,
            onChange: n,
          }),
        });
      }
    },
    199901: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ParagraphFieldBody: function () {
            return c;
          },
          DisabledParagraphFormField: function () {
            return d;
          },
          ParagraphFormField: function () {
            return f;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("414456"),
        s = n.n(i),
        l = n("77078"),
        a = n("272460"),
        o = n("394294"),
        u = n("28551");
      function c(e) {
        let {
          value: t,
          placeholder: n,
          onChange: i,
          disabled: a,
          className: c,
        } = e;
        return (0, r.jsx)(l.TextArea, {
          className: s(u.paragraphFieldBody, c),
          maxLength: o.MAX_PARAGRAPH_RESPONSE_LENGTH,
          value: null != t ? t : "",
          placeholder: null != n ? n : "",
          onChange: i,
          disabled: a,
          autosize: !0,
        });
      }
      function d(e) {
        let { formField: t } = e;
        return (0, r.jsx)(a.QuestionRenderer, {
          title: t.label,
          children: (0, r.jsx)(c, {
            className: u.fieldBackground,
            value: t.response,
            disabled: !0,
          }),
        });
      }
      function f(e) {
        let { formField: t, onChange: n } = e;
        return (0, r.jsx)(a.QuestionRenderer, {
          title: t.label,
          children: (0, r.jsx)(c, {
            className: u.fieldBackground,
            value: t.response,
            onChange: n,
          }),
        });
      }
    },
    772970: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          TermsFieldBody: function () {
            return f;
          },
          TermsFieldCheckbox: function () {
            return h;
          },
          DisabledTermsRequirementFormField: function () {
            return E;
          },
          TermsFormField: function () {
            return m;
          },
        }),
        n("222007");
      var r = n("37983");
      n("884691");
      var i = n("414456"),
        s = n.n(i),
        l = n("77078"),
        a = n("367376"),
        o = n("213523"),
        u = n("272460"),
        c = n("782340"),
        d = n("28551");
      function f(e) {
        let { terms: t, channelId: n, className: i } = e;
        return (0, r.jsx)("div", {
          className: s(d.termsFieldBody, i),
          children: t.map((e, t) =>
            (0, r.jsxs)(
              "div",
              {
                className: d.termsRow,
                children: [
                  (0, r.jsx)(l.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: "".concat(t + 1, "."),
                  }),
                  (0, r.jsx)(l.Text, {
                    variant: "text-md/normal",
                    className: d.termsRowContent,
                    children: a.default.parseGuildVerificationFormRule(e, !0, {
                      channelId: n,
                    }),
                  }),
                ],
              },
              "term-".concat(t)
            )
          ),
        });
      }
      function h(e) {
        let { onChange: t, checked: n, disabled: i } = e;
        return (0, r.jsx)(l.Checkbox, {
          size: 20,
          type: l.Checkbox.Types.INVERTED,
          value: n,
          onChange: t,
          disabled: i,
          style: { borderWidth: 2 },
          className: d.checkbox,
          children: (0, r.jsx)(l.Text, {
            variant: "text-sm/normal",
            children: c.default.Messages.MEMBER_VERIFICATION_READ_RULES,
          }),
        });
      }
      function E(e) {
        let { formField: t } = e;
        return (0, r.jsx)(u.RequirementRenderer, {
          icon: o.default,
          text: c.default.Messages.MEMBER_VERIFICATION_AGREED_TO_RULES,
          meetsRequirement: !!t.response,
        });
      }
      let m = e => {
        let { channelId: t, formField: n, onChange: i } = e;
        return (0, r.jsxs)(u.QuestionRenderer, {
          title: c.default.Messages.SERVER_DISCOVERY_AGREE_TO_RULES,
          children: [
            (0, r.jsx)(f, {
              className: d.fieldBackground,
              terms: n.values,
              channelId: t,
            }),
            (0, r.jsx)(h, { onChange: i, checked: n.response }),
          ],
        });
      };
    },
    621115: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          TextInputFieldBody: function () {
            return c;
          },
          DisabledTextInputFormField: function () {
            return d;
          },
          TextInputFormField: function () {
            return f;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("414456"),
        s = n.n(i),
        l = n("77078"),
        a = n("272460"),
        o = n("394294"),
        u = n("28551");
      function c(e) {
        let {
          value: t,
          placeholder: n,
          onChange: i,
          disabled: a,
          className: c,
        } = e;
        return (0, r.jsx)(l.TextInput, {
          inputClassName: s(u.textInputFieldBodyInput, c),
          maxLength: o.MAX_TEXT_RESPONSE_LENGTH,
          value: null != t ? t : "",
          placeholder: n,
          onChange: i,
          disabled: a,
        });
      }
      function d(e) {
        let { formField: t } = e;
        return (0, r.jsx)(a.QuestionRenderer, {
          title: t.label,
          children: (0, r.jsx)(c, {
            className: u.fieldBackground,
            value: t.response,
            disabled: !0,
          }),
        });
      }
      function f(e) {
        let { formField: t, onChange: n } = e;
        return (0, r.jsx)(a.QuestionRenderer, {
          title: t.label,
          children: (0, r.jsx)(c, {
            className: u.fieldBackground,
            onChange: n,
            value: t.response,
          }),
        });
      }
    },
    270161: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CREATE_GUILD_EVENT_CORE_PERMISSIONS: function () {
            return l;
          },
          CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function () {
            return a;
          },
          CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function () {
            return o;
          },
        });
      var r = n("316693"),
        i = n("923510"),
        s = n("49111");
      let l = s.Permissions.VIEW_CHANNEL,
        a = r.default.combine(l, s.Permissions.CONNECT),
        o = r.default.combine(l, i.MODERATE_STAGE_CHANNEL_PERMISSIONS);
    },
    649844: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("748820"),
        s = n("77078"),
        l = n("112679"),
        a = n("55689"),
        o = n("676379"),
        u = n("697218"),
        c = n("599110"),
        d = n("659500"),
        f = n("719923"),
        h = n("49111"),
        E = n("646718");
      function m(e) {
        let {
            initialPlanId: t,
            followupSKUInfo: m,
            onClose: v,
            onComplete: p,
            onSubscriptionConfirmation: C,
            analyticsLocations: _,
            analyticsObject: N,
            analyticsLocation: g,
            analyticsSourceLocation: T,
            isGift: S = !1,
            giftMessage: I,
            subscriptionTier: R,
            trialId: x,
            postSuccessGuild: A,
            openInvoiceId: M,
            applicationId: P,
            referralTrialOfferId: y,
            giftRecipient: b,
            returnRef: O,
            subscription: L,
          } = null != e ? e : {},
          w = !1,
          j = (0, i.v4)(),
          V = u.default.getCurrentUser(),
          F = (0, f.isPremiumExactly)(V, E.PremiumTypes.TIER_2);
        (0, s.openModalLazy)(
          async () => {
            let { default: e } = await n.el("646139").then(n.bind(n, "646139"));
            return n => {
              let { onClose: i, ...s } = n;
              return (0, r.jsx)(e, {
                ...s,
                loadId: j,
                subscriptionTier: R,
                skuId: (0, f.castPremiumSubscriptionAsSkuId)(R),
                isGift: S,
                giftMessage: I,
                giftRecipient: b,
                initialPlanId: t,
                followupSKUInfo: m,
                onClose: (e, t) => {
                  i(),
                    null == v || v(e),
                    e &&
                      (null == C || C(),
                      !S &&
                        null != t &&
                        t === E.PremiumSubscriptionSKUs.TIER_2 &&
                        !F &&
                        d.ComponentDispatch.dispatch(
                          h.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED
                        ));
                },
                onComplete: () => {
                  (w = !0),
                    null == p || p(),
                    !S && (0, o.setCanPlayWowMoment)(!0);
                },
                onSubscriptionConfirmation: C,
                analyticsLocations: _,
                analyticsObject: N,
                analyticsLocation: g,
                analyticsSourceLocation: T,
                trialId: x,
                postSuccessGuild: A,
                planGroup: E.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                openInvoiceId: M,
                applicationId: P,
                referralTrialOfferId: y,
                returnRef: O,
                subscription: L,
              });
            };
          },
          {
            modalKey: "payment-modal",
            onCloseCallback: () => {
              !w &&
                c.default.track(h.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                  load_id: j,
                  payment_type:
                    h.PurchaseTypeToAnalyticsPaymentType[
                      h.PurchaseTypes.SUBSCRIPTION
                    ],
                  location: null != g ? g : N,
                  source: T,
                  subscription_type: h.SubscriptionTypes.PREMIUM,
                  is_gift: S,
                  eligible_for_trial: null != x,
                  application_id: P,
                  location_stack: _,
                }),
                (0, l.clearError)(),
                (0, a.clearPurchaseTokenAuthState)(),
                null == v || v(w),
                w && (null == C || C());
            },
          }
        );
      }
    },
    817963: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useManageResourcePermissions: function () {
            return E;
          },
          getManageResourcePermissions: function () {
            return m;
          },
        }),
        n("222007");
      var r = n("884691"),
        i = n("316693"),
        s = n("446674"),
        l = n("813006");
      n("923959");
      var a = n("957255"),
        o = n("697218");
      n("991170");
      var u = n("270161"),
        c = n("843455");
      let d = {
          canCreateExpressions: !1,
          canCreateGuildEvent: !1,
          canManageAllExpressions: !1,
          canManageAllEvents: !1,
          canManageGuildExpression: () => !1,
          canManageGuildEvent: () => !1,
        },
        f = (e, t, n, r) => {
          if (null == e) return !1;
          if (n) return !0;
          if ("creator_id" in e) return r && null != t && e.creator_id === t.id;
          if ("userId" in e) return r && null != t && e.userId === t.id;
          if ("user" in e) {
            var i;
            return (
              r &&
              null != t &&
              (null === (i = e.user) || void 0 === i ? void 0 : i.id) === t.id
            );
          }
          return !1;
        },
        h = e => {
          if (null == e)
            return [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS];
          let t = u.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
          return (
            e.isGuildStageVoice()
              ? (t = u.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS)
              : e.isGuildVoice() &&
                (t = u.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS),
            [
              i.default.combine(t, c.Permissions.CREATE_EVENTS),
              i.default.combine(t, c.Permissions.MANAGE_EVENTS),
            ]
          );
        },
        E = e => {
          let [t, n] =
              e instanceof l.default
                ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS]
                : h(e),
            [i, u, E, m] = (0, s.useStateFromStoresArray)([a.default], () => [
              a.default.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
              a.default.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
              a.default.can(t, e),
              a.default.can(n, e),
            ]),
            v = (0, s.useStateFromStores)([o.default], () =>
              o.default.getCurrentUser()
            ),
            p = r.useCallback(e => f(e, v, u, i), [i, u, v]),
            C = r.useCallback(e => f(e, v, m, E), [m, E, v]);
          return null == e
            ? d
            : {
                canCreateExpressions: i,
                canCreateGuildEvent: E,
                canManageAllExpressions: u,
                canManageAllEvents: m,
                canManageGuildExpression: p,
                canManageGuildEvent: C,
              };
        },
        m = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : a.default,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : o.default,
            [r, i] =
              e instanceof l.default
                ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS]
                : h(e),
            s = t.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
            u = t.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
            E = t.can(r, e),
            m = t.can(i, e),
            v = n.getCurrentUser();
          return null == e
            ? d
            : {
                canCreateExpressions: s,
                canCreateGuildEvent: E,
                canManageAllExpressions: u,
                canManageAllEvents: m,
                canManageGuildExpression: e => f(e, v, u, s),
                canManageGuildEvent: e => f(e, v, m, E),
              };
        };
    },
    878720: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ChangePhoneReason: function () {
            return i;
          },
          default: function () {
            return f;
          },
        });
      var r,
        i,
        s = n("759843"),
        l = n("872717"),
        a = n("913144"),
        o = n("271938"),
        u = n("840707"),
        c = n("482931"),
        d = n("49111");
      ((r = i || (i = {})).USER_ACTION_REQUIRED = "user_action_required"),
        (r.USER_SETTINGS_UPDATE = "user_settings_update"),
        (r.GUILD_PHONE_REQUIRED = "guild_phone_required"),
        (r.MFA_PHONE_UPDATE = "mfa_phone_update"),
        (r.CONTACT_SYNC = "contact_sync");
      var f = {
        setCountryCode(e) {
          a.default.dispatch({
            type: "PHONE_SET_COUNTRY_CODE",
            countryCode: e,
          });
        },
        removePhone: (e, t) =>
          l.default.delete({
            url: d.Endpoints.PHONE,
            body: { password: e, change_phone_reason: t },
            oldFormErrors: !0,
          }),
        resendCode(e) {
          let t = {},
            n = o.default.getFingerprint();
          return (
            null != n && "" !== n && (t["X-Fingerprint"] = n),
            l.default.post({
              url: d.Endpoints.RESEND_PHONE,
              headers: t,
              body: { phone: e },
            })
          );
        },
        beginAddPhone: (e, t) =>
          l.default.post({
            url: d.Endpoints.PHONE,
            body: { phone: e, change_phone_reason: t },
          }),
        addPhone: (e, t, n) =>
          l.default.post({
            url: d.Endpoints.PHONE,
            body: { phone_token: e, password: t, change_phone_reason: n },
            oldFormErrors: !0,
          }),
        addPhoneWithoutPassword: e =>
          l.default.post({
            url: d.Endpoints.PHONE_VERIFY_NO_PASSWORD,
            body: { code: e },
          }),
        beginReverifyPhone: (e, t) =>
          l.default.post({
            url: d.Endpoints.PHONE_REVERIFY,
            body: { phone: e, change_phone_reason: t },
          }),
        reverifyPhone: (e, t, n) =>
          l.default.post({
            url: d.Endpoints.PHONE_REVERIFY,
            body: { phone_token: e, password: t, change_phone_reason: n },
            oldFormErrors: !0,
          }),
        validatePhoneForSupport: e =>
          l.default.post({
            url: d.Endpoints.VERIFY_PHONE_FOR_TICKET,
            body: { token: e },
            oldFormErrors: !0,
          }),
        async verifyPhone(e, t) {
          let n =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            i = {},
            l = o.default.getFingerprint();
          null != l && "" !== l && (i["X-Fingerprint"] = l),
            r && (i.authorization = "");
          let f = await u.default.post({
            url: d.Endpoints.VERIFY_PHONE,
            headers: i,
            body: { phone: e, code: t },
            oldFormErrors: !0,
            trackedActionData: {
              event: s.NetworkActionNames.USER_VERIFY_PHONE,
            },
          });
          return (
            n &&
              a.default.dispatch({
                type: "MODAL_POP",
                key: c.PHONE_VERIFICATION_MODAL_KEY,
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
            return r;
          },
          PHONE_VERIFICATION_CODE_NUM_DIGITS: function () {
            return i;
          },
        });
      let r = "PHONE_VERIFICATION_MODAL_KEY",
        i = 6;
    },
    676379: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          setCanPlayWowMoment: function () {
            return i;
          },
        });
      var r = n("913144");
      let i = e => {
        r.default.dispatch({
          type: "PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT",
          value: e,
        });
      };
    },
    38766: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var r = n("884691"),
        i = n("79112"),
        s = n("685665"),
        l = n("929423");
      n("424562");
      var a = n("49111"),
        o = n("397336");
      function u(e) {
        let {
            guild: t,
            scrollPosition: n,
            analyticsLocation: u,
            analyticsLocations: c,
            openWithoutBackstack: d = !1,
          } = e,
          { analyticsLocations: f } = (0, s.default)(),
          h = (0, r.useCallback)(() => {
            null != t && (0, l.initGuildIdentitySettings)(t, null != c ? c : f),
              i.default.open(
                a.UserSettingsSections.PROFILE_CUSTOMIZATION,
                null != t
                  ? o.ProfileCustomizationSubsection.GUILD
                  : o.ProfileCustomizationSubsection.USER_PROFILE,
                {
                  scrollPosition: n,
                  analyticsLocation: u,
                  analyticsLocations: c,
                  openWithoutBackstack: d,
                }
              );
          }, [t, n, u, c, d, f]);
        return h;
      }
    },
    300322: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VoiceInThreadsExperiment: function () {
            return p;
          },
          useCanStartPublicThread: function () {
            return C;
          },
          computeCanStartPublicThread: function () {
            return _;
          },
          useCanStartPrivateThread: function () {
            return N;
          },
          useCanStartThread: function () {
            return g;
          },
          useCanViewThreadForMessage: function () {
            return S;
          },
          useHasActiveThreads: function () {
            return I;
          },
          useCanManageThread: function () {
            return R;
          },
          useCanUnarchiveThread: function () {
            return M;
          },
          canUnarchiveThread: function () {
            return P;
          },
          useIsActiveChannelOrUnarchivableThread: function () {
            return y;
          },
          getIsActiveChannelOrUnarchivableThread: function () {
            return b;
          },
          computeIsReadOnlyThread: function () {
            return O;
          },
          useIsThreadModerator: function () {
            return w;
          },
          useCanJoinThreadVoice: function () {
            return j;
          },
          useIsNonModInLockedThread: function () {
            return V;
          },
        });
      var r = n("917351"),
        i = n.n(r),
        s = n("316693"),
        l = n("446674"),
        a = n("296892"),
        o = n("889014"),
        u = n("913491"),
        c = n("233069"),
        d = n("271938"),
        f = n("42203"),
        h = n("957255"),
        E = n("299039"),
        m = n("401690"),
        v = n("49111");
      let p = (0, a.default)({
        id: "2022-07_voice_in_threads",
        label: "Voice in Threads",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "On", config: { enabled: !0 } }],
      });
      function C(e, t) {
        let n = (0, l.useStateFromStores)(
          [h.default],
          () => {
            let t = e.isForumLikeChannel()
              ? v.Permissions.SEND_MESSAGES
              : s.default.combine(
                  v.Permissions.CREATE_PUBLIC_THREADS,
                  v.Permissions.READ_MESSAGE_HISTORY
                );
            return h.default.can(t, e);
          },
          [e]
        );
        return T(n, e, t);
      }
      function _(e, t) {
        let n = e.isForumLikeChannel()
            ? v.Permissions.SEND_MESSAGES
            : s.default.combine(
                v.Permissions.CREATE_PUBLIC_THREADS,
                v.Permissions.READ_MESSAGE_HISTORY
              ),
          r = h.default.can(n, e);
        return T(r, e, t);
      }
      function N(e) {
        let t = (0, l.useStateFromStores)(
          [h.default],
          () =>
            h.default.can(
              s.default.combine(v.Permissions.CREATE_PRIVATE_THREADS),
              e
            ),
          [e]
        );
        return e.type === v.ChannelTypes.GUILD_TEXT && T(t, e);
      }
      function g(e) {
        let t = C(e),
          n = N(e);
        return t || n;
      }
      function T(e, t, n) {
        return (
          !(
            __OVERLAY__ ||
            !e ||
            !c.THREADED_CHANNEL_TYPES.has(t.type) ||
            (null != n &&
              (n.hasFlag(v.MessageFlags.HAS_THREAD) || (0, u.default)(n)))
          ) && !0
        );
      }
      function S(e) {
        let t = (0, l.useStateFromStores)(
            [f.default],
            () =>
              f.default.getChannel(E.default.castMessageIdAsChannelId(e.id)),
            [e]
          ),
          n = (0, l.useStateFromStores)(
            [h.default],
            () => h.default.can(v.Permissions.VIEW_CHANNEL, t),
            [t]
          );
        return (function (e, t, n) {
          return (
            (!!t.hasFlag(v.MessageFlags.HAS_THREAD) && null != n && !!e) || !1
          );
        })(n, e, t);
      }
      function I(e) {
        return (0, l.useStateFromStoresObject)([m.default, h.default], () => {
          let t = m.default.getActiveJoinedThreadsForParent(e.guild_id, e.id),
            n = m.default.getActiveJoinedRelevantThreadsForParent(
              e.guild_id,
              e.id
            ),
            r = m.default.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
            s = i(n).some(e =>
              h.default.can(v.Permissions.VIEW_CHANNEL, e.channel)
            ),
            l = i(t).some(
              e =>
                !(e.channel.id in n) &&
                h.default.can(v.Permissions.VIEW_CHANNEL, e.channel)
            ),
            a = i(r).some(e => h.default.can(v.Permissions.VIEW_CHANNEL, e));
          return {
            hasActiveThreads: s || l || a,
            hasMoreActiveThreads: a || l,
          };
        });
      }
      function R(e) {
        let t = (0, l.useStateFromStores)([f.default], () =>
            f.default.getChannel(null == e ? void 0 : e.parent_id)
          ),
          n = (0, l.useStateFromStores)(
            [h.default],
            () => null != t && h.default.can(v.Permissions.MANAGE_THREADS, t),
            [t]
          ),
          r = (0, l.useStateFromStores)([d.default], () => d.default.getId());
        return (
          !!(null != e && null != t && e.isThread()) &&
          (!!n || (!e.isLockedThread() && (e.ownerId === r || !1)))
        );
      }
      function x(e, t) {
        return null != e && t.can(v.Permissions.SEND_MESSAGES_IN_THREADS, e);
      }
      function A(e, t, n) {
        var r;
        return (
          !!(null != e && e.isThread()) &&
          ((null === (r = e.threadMetadata) || void 0 === r ? void 0 : r.locked)
            ? n
            : t)
        );
      }
      function M(e) {
        let t = (0, l.useStateFromStores)([h.default], () => x(e, h.default)),
          n = w(e);
        return A(e, t, n);
      }
      function P(e) {
        let t = x(e, h.default),
          n = (function (e) {
            return L(e, h.default);
          })(e);
        return A(e, t, n);
      }
      function y(e) {
        var t;
        let n = (0, l.useStateFromStores)(
          [h.default],
          () =>
            null != e &&
            h.default.can(v.Permissions.SEND_MESSAGES_IN_THREADS, e)
        );
        return (
          null != e &&
          (!e.isThread() ||
            e.isActiveThread() ||
            (e.isArchivedThread() &&
              (null === (t = e.threadMetadata) || void 0 === t
                ? void 0
                : t.locked) !== !0 &&
              n))
        );
      }
      function b(e) {
        var t;
        return (
          null != e &&
          (!e.isThread() ||
            e.isActiveThread() ||
            (e.isArchivedThread() &&
              (null === (t = e.threadMetadata) || void 0 === t
                ? void 0
                : t.locked) !== !0 &&
              h.default.can(v.Permissions.SEND_MESSAGES_IN_THREADS, e)))
        );
      }
      function O(e) {
        let t = h.default.can(v.Permissions.MANAGE_THREADS, e);
        return e.isArchivedLockedThread() && !t;
      }
      function L(e, t) {
        return null != e && t.can(v.Permissions.MANAGE_THREADS, e);
      }
      function w(e) {
        return (0, l.useStateFromStores)([h.default], () => L(e, h.default));
      }
      function j(e) {
        let t = (0, o.default)(),
          n = (0, l.useStateFromStores)([h.default], () =>
            h.default.can(v.Permissions.CONNECT, e)
          ),
          r = y(e),
          i = p.useExperiment(
            { guildId: e.guild_id, location: "e791ea_1" },
            { autoTrackExposure: !1 }
          ).enabled;
        return !t && e.isVocalThread() && i && n && r;
      }
      function V(e) {
        let t = w(e);
        return e.isLockedThread() && !t;
      }
    },
    931138: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var r = n("37983"),
        i = n("884691"),
        s = n("414456"),
        l = n.n(s),
        a = n("77078"),
        o = n("760607"),
        u = n("684133");
      function c(e) {
        let {
            children: t,
            size: n = 16,
            className: s,
            flowerStarClassName: c,
            ...d
          } = e,
          f = i.Children.only(t),
          h = (0, a.useRedesignIconContext)().enabled;
        return (0, r.jsxs)("div", {
          className: l(u.flowerStarContainer, s),
          style: { width: n, height: n },
          children: [
            (0, r.jsx)(o.default, { ...d, className: l(c, u.flowerStar) }),
            (0, r.jsx)("div", {
              className: l(u.childContainer, {
                [u.redesignIconChildContainer]: h,
              }),
              children: f,
            }),
          ],
        });
      }
    },
    754474: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          BotTypes: function () {
            return a.BotTagTypes;
          },
          default: function () {
            return u;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("414456"),
        s = n.n(i),
        l = n("79798"),
        a = n("988268"),
        o = n("293005"),
        u = e => {
          let {
            name: t,
            discriminator: n,
            invertBotTagColor: i,
            nameColor: a,
            className: u,
            botType: c,
            usernameClass: d,
            discriminatorClass: f,
            botClass: h,
            botVerified: E = !1,
            style: m,
            useRemSizes: v = !1,
            usernameIcon: p,
          } = e;
          return (0, r.jsxs)("div", {
            className: s(u, o.nameTag),
            style: m,
            children: [
              (0, r.jsxs)("span", {
                className: s(o.username, d),
                style: null != a ? { color: a } : void 0,
                children: [p, t],
              }),
              null != n
                ? (0, r.jsxs)("span", {
                    className: null != f ? f : void 0,
                    children: ["#", n],
                  })
                : null,
              null != c
                ? (0, r.jsx)(l.default, {
                    type: c,
                    invertColor: i,
                    className: s(h, o.bot),
                    verified: E,
                    useRemSizes: v,
                  })
                : null,
            ],
          });
        };
    },
    181114: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ShineSizes: function () {
            return i;
          },
          Shine: function () {
            return v;
          },
          default: function () {
            return C;
          },
        });
      var r,
        i,
        s = n("37983"),
        l = n("884691"),
        a = n("414456"),
        o = n.n(a),
        u = n("458960"),
        c = n("77078"),
        d = n("252744"),
        f = n("145131"),
        h = n("61435");
      ((r = i || (i = {})).DEFAULT = "default"), (r.SMALL = "small");
      let E = { default: h.shineDefault, small: h.shineSmall },
        m = { default: h.shineInnerDefault, small: h.shineInnerSmall };
      class v extends l.PureComponent {
        render() {
          let { className: e, shineSize: t, shinePaused: n, ...r } = this.props;
          return (0, s.jsx)(u.default.div, {
            ...r,
            className: o(h.shineContainer, e, { [h.shinePaused]: n }),
            children: (0, s.jsx)(f.default, {
              align: f.default.Align.CENTER,
              justify: f.default.Justify.CENTER,
              className: E[t],
              children: (0, s.jsx)("div", { className: m[t] }),
            }),
          });
        }
      }
      v.defaultProps = { shineSize: "default" };
      let p = e => {
        let {
            children: t,
            className: n,
            disabled: r,
            submitting: i,
            pauseAnimation: a,
            shineSize: u = "default",
            shinePaused: f,
            buttonShineClassName: E,
            onlyShineOnHover: m,
            ...p
          } = e,
          C = l.createRef(),
          _ = (0, d.default)(C),
          N = !r && !i && !0 !== a && (!m || _);
        return (0, s.jsxs)(c.Button, {
          buttonRef: C,
          ...p,
          className: o(h.shinyButton, n),
          disabled: r,
          submitting: i,
          children: [
            t,
            N
              ? (0, s.jsx)(v, {
                  shinePaused: f,
                  className: o(
                    h.buttonShine,
                    m ? h.onlyShineOnHover : void 0,
                    E
                  ),
                  shineSize: u,
                })
              : null,
          ],
        });
      };
      p.ShineSizes = i;
      var C = p;
    },
    965397: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        }),
        n("222007");
      var r = n("37983"),
        i = n("884691"),
        s = n("414456"),
        l = n.n(s),
        a = n("458960"),
        o = n("77078"),
        u = n("899284");
      let c = { friction: 7, tension: 60 };
      class d extends i.Component {
        componentWillAppear(e) {
          this.animateTo(1).start(e);
        }
        componentWillEnter(e) {
          this.animateTo(1).start(e);
        }
        componentWillLeave(e) {
          let { reducedMotion: t } = this.context;
          t.enabled
            ? this.animateTo(0).start(e)
            : a.default
                .stagger(250, [this.animateTo(1.3), this.animateTo(0)])
                .start(e);
        }
        animateTo(e) {
          return a.default.spring(this.animation, { ...c, toValue: e });
        }
        getAnimatedStyle() {
          let { reducedMotion: e } = this.context;
          return a.default.accelerate({
            opacity: this.animation,
            transform: e.enabled
              ? void 0
              : [
                  {
                    translateY: this.animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: ["150%", "0%"],
                    }),
                  },
                ],
          });
        }
        render() {
          let { className: e, children: t } = this.props;
          return (0, r.jsx)(a.default.div, {
            className: l(e, u.slider),
            style: this.getAnimatedStyle(),
            children: t,
          });
        }
        constructor(...e) {
          super(...e), (this.animation = new a.default.Value(0));
        }
      }
      d.contextType = o.AccessibilityPreferencesContext;
      var f = d;
    },
    191814: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var r = n("37983");
      function i(e) {
        let { size: t, horizontal: n = !1 } = e,
          i = n ? t : 1,
          s = n ? 1 : t;
        return (0, r.jsx)("span", {
          style: {
            display: "block",
            width: i,
            minWidth: i,
            height: s,
            minHeight: s,
          },
        });
      }
      n("884691");
    },
    476765: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          uid: function () {
            return l;
          },
          useUID: function () {
            return a;
          },
          UID: function () {
            return o;
          },
        });
      var r = n("995008"),
        i = n.n(r),
        s = n("775560");
      let l = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return i(e);
        },
        a = () => (0, s.useLazyValue)(() => l()),
        o = e => {
          let { children: t } = e;
          return t(a());
        };
    },
    461380: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("414456"),
        s = n.n(i),
        l = n("384737"),
        a = n("448052"),
        o = n("748802"),
        u = n("260792"),
        c = n("77078"),
        d = n("75196"),
        f = n("366842");
      let h = {
          UP: f.directionUp,
          RIGHT: f.directionRight,
          DOWN: f.directionDown,
          LEFT: f.directionLeft,
        },
        E = e => {
          let {
              direction: t = h.DOWN,
              width: n = 24,
              height: i = 24,
              color: E = "currentColor",
              transition: m = f.transition,
              className: v,
              foreground: p,
              expanded: C,
              ..._
            } = e,
            { enabled: N } = (0, c.useRedesignIconContext)(),
            g = t;
          if ((!0 === C ? (g = h.DOWN) : !1 === C && (g = h.RIGHT), N)) {
            let e = {
              [h.UP]: u.ChevronSmallUpIcon,
              [h.DOWN]: l.ChevronSmallDownIcon,
              [h.LEFT]: a.ChevronSmallLeftIcon,
              [h.RIGHT]: o.ChevronSmallRightIcon,
            }[g];
            return (0, r.jsx)(e, {
              ..._,
              className: v,
              width: n,
              height: i,
              color: E,
              colorClass: p,
            });
          }
          return (0, r.jsx)("svg", {
            className: s(v, m, g),
            width: n,
            height: i,
            viewBox: "0 0 24 24",
            ...(0, d.default)(_),
            children: (0, r.jsx)("path", {
              className: p,
              fill: "none",
              stroke: E,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M7 10L12 15 17 10",
              "aria-hidden": !0,
            }),
          });
        };
      E.Directions = h;
      var m = E;
    },
    109264: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("469563"),
        s = n("733154"),
        l = n("75196"),
        a = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: i = "currentColor",
              foreground: s,
              ...a
            } = e;
            return (0, r.jsx)("svg", {
              ...(0, l.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, r.jsx)("path", {
                className: s,
                fill: i,
                d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z",
              }),
            });
          },
          s.ChatIcon,
          void 0,
          { size: 24 }
        );
    },
    381546: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("469563"),
        s = n("505088"),
        l = n("75196"),
        a = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: i = "currentColor",
              foreground: s,
              backgroundColor: a,
              ...o
            } = e;
            return (0, r.jsxs)("svg", {
              ...(0, l.default)(o),
              width: t,
              height: n,
              viewBox: "0 0 14 14",
              children: [
                null != a
                  ? (0, r.jsx)("circle", { r: 5, cx: 7, cy: 7, fill: a })
                  : null,
                (0, r.jsx)("path", {
                  fill: i,
                  className: s,
                  d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z",
                }),
              ],
            });
          },
          s.CircleXIcon,
          void 0,
          { size: 24 }
        );
    },
    867544: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("669491"),
        s = n("469563"),
        l = n("163725"),
        a = n("75196"),
        o = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: s = "currentColor",
              foregroundColor: l = i.default.unsafe_rawColors.RED_400.css,
              foreground: o,
              background: u,
              ...c
            } = e;
            return (0, r.jsxs)("svg", {
              ...(0, a.default)(c),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, r.jsx)("rect", {
                  fill: l,
                  className: o,
                  x: "2",
                  y: "21.2154",
                  width: "26",
                  height: "2",
                  transform: "rotate(-45 2 21.2154)",
                }),
                (0, r.jsx)("path", {
                  fill: s,
                  className: u,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M10.1843 18.8115C10.7713 18.9328 11.3775 19 12 19C18.352 19 23 12 23 12C23 12 21.9643 10.4402 20.2026 8.79322L15.8265 13.1693C15.4393 14.4384 14.4382 15.4393 13.1694 15.8264L10.1843 18.8115ZM12.4818 8.02871C12.3238 8.00975 12.1631 8 12 8C9.791 8 8 9.79 8 12C8 12.1631 8.00975 12.3239 8.0287 12.4818L4.59645 15.914C2.35293 14.0375 1 12 1 12C1 12 5.648 5 12 5C13.0508 5 14.055 5.19157 14.9992 5.51132L12.4818 8.02871Z",
                }),
              ],
            });
          },
          l.EyeSlashIcon,
          void 0,
          { size: 24 }
        );
    },
    760607: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("75196"),
        s = function (e) {
          let {
            width: t = 16,
            height: n = 16,
            color: s = "currentColor",
            foreground: l,
            ...a
          } = e;
          return (0, r.jsx)("svg", {
            ...(0, i.default)(a),
            width: t,
            height: n,
            viewBox: "0 0 16 15.2",
            children: (0, r.jsx)("path", {
              className: l,
              fill: s,
              fillRule: "evenodd",
              d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z",
            }),
          });
        };
    },
    543289: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("75196");
      function s(e) {
        let { width: t = 104, height: n = 80, ...s } = e;
        return (0, r.jsxs)("svg", {
          ...(0, i.default)(s),
          width: t,
          height: n,
          viewBox: "0 0 104 80",
          fill: "none",
          children: [
            (0, r.jsx)("path", {
              d: "M95.6718 1.80634C95.6718 0.808724 94.863 0 93.8654 0C92.8678 0 92.0591 0.808724 92.0591 1.80634V3.64278C92.0591 4.64039 92.8678 5.44911 93.8654 5.44911C94.863 5.44911 95.6718 4.64039 95.6718 3.64278V1.80634Z",
              fill: "#ADF3FF",
            }),
            (0, r.jsx)("path", {
              d: "M95.6713 16.3574C95.6713 15.3598 94.8625 14.5511 93.8649 14.5511C92.8673 14.5511 92.0586 15.3598 92.0586 16.3574V18.1939C92.0586 19.1915 92.8673 20.0002 93.8649 20.0002C94.8625 20.0002 95.6713 19.1915 95.6713 18.1939V16.3574Z",
              fill: "#ADF3FF",
            }),
            (0, r.jsx)("path", {
              d: "M102.194 11.8412C103.191 11.8412 104 11.0325 104 10.0349C104 9.03724 103.191 8.22852 102.194 8.22852H100.357C99.3596 8.22852 98.5509 9.03724 98.5509 10.0349C98.5509 11.0325 99.3596 11.8412 100.357 11.8412H102.194Z",
              fill: "#ADF3FF",
            }),
            (0, r.jsx)("path", {
              d: "M87.6434 11.7413C88.641 11.7413 89.4497 10.9325 89.4497 9.93494C89.4497 8.93733 88.641 8.1286 87.6434 8.1286H85.8069C84.8093 8.1286 84.0006 8.93733 84.0006 9.93494C84.0006 10.9325 84.8093 11.7413 85.8069 11.7413H87.6434Z",
              fill: "#ADF3FF",
            }),
            (0, r.jsx)("path", {
              d: "M11.1501 74.4573L15.3147 73.0684C15.5192 72.9747 15.6925 72.8241 15.814 72.6347C15.9354 72.4454 16 72.225 16 72C16 71.775 15.9354 71.5546 15.814 71.3653C15.6925 71.1759 15.5192 71.0253 15.3147 70.9316L11.1501 69.5427C10.8657 69.4142 10.6378 69.1862 10.5094 68.9016L9.01446 64.7348C8.94423 64.521 8.80835 64.3349 8.62619 64.203C8.44403 64.071 8.22488 64 7.99999 64C7.77511 64 7.55597 64.071 7.37381 64.203C7.19165 64.3349 7.05576 64.521 6.98554 64.7348L5.49057 68.9016C5.36216 69.1862 5.13433 69.4142 4.84986 69.5427L0.685276 70.9316C0.480802 71.0253 0.307523 71.1759 0.186045 71.3653C0.0645662 71.5546 0 71.775 0 72C0 72.225 0.0645662 72.4454 0.186045 72.6347C0.307523 72.8241 0.480802 72.9747 0.685276 73.0684L4.84986 74.4573C5.0011 74.5032 5.1387 74.5858 5.25046 74.6976C5.36222 74.8094 5.44469 74.9471 5.49057 75.0984L6.98554 79.2652C7.05576 79.479 7.19165 79.6651 7.37381 79.797C7.55597 79.929 7.77511 80 7.99999 80C8.22488 80 8.44403 79.929 8.62619 79.797C8.80835 79.6651 8.94423 79.479 9.01446 79.2652L10.5094 75.0984C10.5553 74.9471 10.6378 74.8094 10.7495 74.6976C10.8613 74.5858 10.9989 74.5032 11.1501 74.4573Z",
              fill: "#FFD01A",
            }),
          ],
        });
      }
    },
    556081: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("469563"),
        s = n("495137"),
        l = n("75196"),
        a = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: i = "currentColor",
              foreground: s,
              ...a
            } = e;
            return (0, r.jsxs)("svg", {
              ...(0, l.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, r.jsx)("path", {
                  d: "M12.0002 10.823L20.9652 5.26C20.6772 5.1 20.3522 5 20.0002 5H4.00016C3.64816 5 3.32216 5.1 3.03516 5.26L12.0002 10.823Z",
                  fill: i,
                  className: s,
                }),
                (0, r.jsx)("path", {
                  d: "M12.527 12.8489C12.366 12.9489 12.183 12.9999 12 12.9999C11.817 12.9999 11.634 12.9489 11.473 12.8499L2.003 6.97292C2.003 6.98192 2 6.99092 2 6.99892V15.9989C2 17.1009 2.897 17.9989 4 17.9989H20C21.103 17.9989 22 17.1009 22 15.9989V6.99892C22 6.98992 21.997 6.98092 21.997 6.97192L12.527 12.8489Z",
                  fill: i,
                  className: s,
                }),
              ],
            });
          },
          s.EnvelopeIcon,
          void 0,
          { size: 24 }
        );
    },
    216947: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("469563"),
        s = n("185020"),
        l = n("75196"),
        a = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: n = 16,
              color: i = "currentColor",
              ...s
            } = e;
            return (0, r.jsx)("svg", {
              ...(0, l.default)(s),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, r.jsx)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: (0, r.jsx)("path", {
                  fill: i,
                  d: "M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z",
                }),
              }),
            });
          },
          s.MobilePhoneIcon,
          void 0,
          { size: 16 }
        );
    },
    151185: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("469563"),
        s = n("424823"),
        l = n("75196"),
        a = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: i = "currentColor",
              foreground: s,
              ...a
            } = e;
            return (0, r.jsx)("svg", {
              ...(0, l.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, r.jsx)("path", {
                fill: i,
                className: s,
                d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z",
              }),
            });
          },
          s.PlusSmallIcon,
          void 0,
          { size: 24 }
        );
    },
    368121: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("469563"),
        s = n("390300"),
        l = n("75196"),
        a = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: i = "currentColor",
              foreground: s,
              ...a
            } = e;
            return (0, r.jsx)("svg", {
              ...(0, l.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, r.jsx)("path", {
                className: s,
                fill: i,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                "aria-hidden": !0,
              }),
            });
          },
          s.VoiceNormalIcon,
          void 0,
          { size: 24 }
        );
    },
    228427: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("469563"),
        s = n("287083"),
        l = n("75196"),
        a = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 32,
              height: n = 32,
              color: i = "currentColor",
              ...s
            } = e;
            return (0, r.jsx)("svg", {
              ...(0, l.default)(s),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                fill: i,
              }),
            });
          },
          s.StageIcon,
          void 0,
          { size: 32 }
        );
    },
    306160: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SUPPORTS_COPY: function () {
            return l;
          },
          copy: function () {
            return a;
          },
        }),
        n("70102");
      var r = n("281071"),
        i = n("773336"),
        s = n("50885");
      let l = (() => {
        if (i.isPlatformEmbedded) return null != s.default.copy;
        try {
          return (
            document.queryCommandEnabled("copy") ||
            document.queryCommandSupported("copy")
          );
        } catch (e) {
          return !1;
        }
      })();
      function a(e) {
        return (
          !!l && (i.isPlatformEmbedded ? (s.default.copy(e), !0) : r.copy(e))
        );
      }
    },
    76527: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ChatIcon: function () {
            return l;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("669491"),
        s = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z",
            className: a,
          }),
        });
      };
    },
    506070: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CircleXIcon: function () {
            return l;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("669491"),
        s = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          secondaryColor: l = "transparent",
          secondaryColorClass: a = "",
          color: o = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...c
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, s.default)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, r.jsx)("circle", {
              cx: "12",
              cy: "12",
              r: "10",
              fill: "string" == typeof l ? l : l.css,
              className: a,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              fillRule: "evenodd",
              d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm4.7-15.7a1 1 0 0 0-1.4 0L12 10.58l-3.3-3.3a1 1 0 0 0-1.4 1.42L10.58 12l-3.3 3.3a1 1 0 1 0 1.42 1.4L12 13.42l3.3 3.3a1 1 0 0 0 1.4-1.42L13.42 12l3.3-3.3a1 1 0 0 0 0-1.4Z",
              clipRule: "evenodd",
              className: u,
            }),
          ],
        });
      };
    },
    656930: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          EnvelopeIcon: function () {
            return l;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("669491"),
        s = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M1.16 5.02c-.1.28.04.58.29.74l10.27 6.85a.5.5 0 0 0 .56 0l10.27-6.85c.25-.16.38-.46.29-.74A3 3 0 0 0 20 3H4a3 3 0 0 0-2.84 2.02Z",
              className: a,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M23 8.8a.5.5 0 0 0-.78-.41l-9.53 6.35c-.42.28-.96.28-1.38 0L1.78 8.39A.5.5 0 0 0 1 8.8V18a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V8.8Z",
              className: a,
            }),
          ],
        });
      };
    },
    962821: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          EyeSlashIcon: function () {
            return l;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("669491"),
        s = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M1.3 21.3a1 1 0 1 0 1.4 1.4l20-20a1 1 0 0 0-1.4-1.4l-20 20ZM3.16 16.05c.18.24.53.26.74.05l.72-.72c.18-.18.2-.45.05-.66a15.7 15.7 0 0 1-1.43-2.52.48.48 0 0 1 0-.4c.4-.9 1.18-2.37 2.37-3.72C7.13 6.38 9.2 5 12 5c.82 0 1.58.12 2.28.33.18.05.38 0 .52-.13l.8-.8c.25-.25.18-.67-.15-.79A9.79 9.79 0 0 0 12 3C4.89 3 1.73 10.11 1.11 11.7a.83.83 0 0 0 0 .6c.25.64.9 2.15 2.05 3.75Z",
              className: a,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M8.18 10.81c-.13.43.36.65.67.34l2.3-2.3c.31-.31.09-.8-.34-.67a4 4 0 0 0-2.63 2.63ZM12.85 15.15c-.31.31-.09.8.34.67a4.01 4.01 0 0 0 2.63-2.63c.13-.43-.36-.65-.67-.34l-2.3 2.3Z",
              className: a,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M9.72 18.67a.52.52 0 0 0-.52.13l-.8.8c-.25.25-.18.67.15.79 1.03.38 2.18.61 3.45.61 7.11 0 10.27-7.11 10.89-8.7a.83.83 0 0 0 0-.6c-.25-.64-.9-2.15-2.05-3.75a.49.49 0 0 0-.74-.05l-.72.72a.51.51 0 0 0-.05.66 15.7 15.7 0 0 1 1.43 2.52c.06.13.06.27 0 .4-.4.9-1.18 2.37-2.37 3.72C16.87 17.62 14.8 19 12 19c-.82 0-1.58-.12-2.28-.33Z",
              className: a,
            }),
          ],
        });
      };
    },
    193291: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          MobilePhoneIcon: function () {
            return l;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("669491"),
        s = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            fillRule: "evenodd",
            d: "M5 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V4Zm5 16a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM8 3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H8Z",
            clipRule: "evenodd",
            className: a,
          }),
        });
      };
    },
    632874: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PlusSmallIcon: function () {
            return l;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("669491"),
        s = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
            className: a,
          }),
        });
      };
    },
    782542: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ScreenArrowIcon: function () {
            return l;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("669491"),
        s = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              fillRule: "evenodd",
              d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L14.58 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 18 8Z",
              clipRule: "evenodd",
              className: a,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
              className: a,
            }),
          ],
        });
      };
    },
    618807: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          StageIcon: function () {
            return l;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("669491"),
        s = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M19.61 18.25a1.08 1.08 0 0 1-.07-1.33 9 9 0 1 0-15.07 0c.26.42.25.97-.08 1.33l-.02.02c-.41.44-1.12.43-1.46-.07a11 11 0 1 1 18.17 0c-.33.5-1.04.51-1.45.07l-.02-.02Z",
              className: a,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M16.83 15.23c.43.47 1.18.42 1.45-.14a7 7 0 1 0-12.57 0c.28.56 1.03.6 1.46.14l.05-.06c.3-.33.35-.81.17-1.23A4.98 4.98 0 0 1 12 7a5 5 0 0 1 4.6 6.94c-.17.42-.13.9.18 1.23l.05.06Z",
              className: a,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.33 20.03c-.25.72.12 1.5.8 1.84a10.96 10.96 0 0 0 9.73 0 1.52 1.52 0 0 0 .8-1.84 6 6 0 0 0-11.33 0Z",
              className: a,
            }),
          ],
        });
      };
    },
    28289: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          TrophyIcon: function () {
            return l;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("669491"),
        s = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            fillRule: "evenodd",
            d: "M8 20a1 1 0 0 0-1 1v.5c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5V21a1 1 0 0 0-1-1h-1a2 2 0 0 1-2-2v-.48c0-.95.7-1.73 1.5-2.23a5.7 5.7 0 0 0 1.23-1.08l2.3-.7A7 7 0 0 0 23 6.81V6a2 2 0 0 0-2-2h-2.24A2.85 2.85 0 0 0 16 2H8c-1.3 0-2.43.84-2.76 2H3a2 2 0 0 0-2 2v.82a7 7 0 0 0 4.96 6.7l2.31.7c.37.42.79.78 1.24 1.07.8.5 1.49 1.28 1.49 2.23V18a2 2 0 0 1-2 2H8Zm9.29-8.35.17-.05A5 5 0 0 0 21 6.82V6h-2.27a21.75 21.75 0 0 1-1.44 5.65Zm-10.58 0-.17-.05A5 5 0 0 1 3 6.82V6h2.27c.25 1.94.7 3.95 1.44 5.65Z",
            clipRule: "evenodd",
            className: a,
          }),
        });
      };
    },
    882039: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VoiceNormalIcon: function () {
            return l;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("669491"),
        s = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, s.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z",
              className: a,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z",
              className: a,
            }),
          ],
        });
      };
    },
    157590: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        }),
        n("222007");
      var r,
        i = n("817736"),
        s = n("118810");
      let l = { root: null, rootMargin: "0px", threshold: 0.5 };
      r = class {
        isVisible(e) {
          return null == this._observer || this._visibleComponents.has(e);
        }
        observe(e) {
          let t = this._observer;
          if (null == t) return;
          this.unobserve(e);
          let n = (0, i.findDOMNode)(e);
          (0, s.isElement)(n, HTMLElement) &&
            (this._nodes.set(n, e), this._components.set(e, n), t.observe(n));
        }
        unobserve(e) {
          let t = this._observer;
          if (null == t) return;
          let n = this._components.get(e);
          null != n &&
            (this._nodes.delete(n),
            this._components.delete(e),
            this._visibleComponents.delete(e),
            t.unobserve(n));
        }
        constructor(e = l) {
          (this._nodes = new WeakMap()),
            (this._components = new WeakMap()),
            (this._visibleComponents = new WeakSet()),
            (this._handleEntries = e => {
              e.forEach(e => {
                let t;
                if (null != e.isIntersecting) t = e.isIntersecting;
                else {
                  let { threshold: n } = this._options;
                  t =
                    null == n
                      ? e.intersectionRatio > 0
                      : Array.isArray(n)
                        ? n.some(t => e.intersectionRatio > t)
                        : e.intersectionRatio > n;
                }
                let n = this._nodes.get(e.target);
                if (null != n) {
                  let e = !1;
                  t
                    ? !this._visibleComponents.has(n) &&
                      (this._visibleComponents.add(n), (e = !0))
                    : this._visibleComponents.has(n) &&
                      (this._visibleComponents.delete(n), (e = !0)),
                    e && n.forceUpdate();
                }
              });
            }),
            (this._options = e),
            null != window.IntersectionObserver &&
              (this._observer = new window.IntersectionObserver(
                this._handleEntries,
                e
              ));
        }
      };
    },
    235855: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        }),
        n("222007"),
        n("70102");
      var r = n("884691"),
        i = n("748820"),
        s = n("157590");
      let l = (0, i.v4)(),
        a = new Map(),
        o = new Map();
      class u extends r.Component {
        componentDidMount() {
          if (this.props.active) {
            let e = this.getVisibilityObserver();
            e.observe(this),
              (this.isVisible = e.isVisible(this)),
              this.props.onChange(this.isVisible);
          }
        }
        componentDidUpdate(e) {
          let t = this.getVisibilityObserver(),
            n = t.isVisible(this);
          this.props.active && n !== this.isVisible && this.props.onChange(n),
            !e.active && this.props.active
              ? t.observe(this)
              : e.active && !this.props.active && t.unobserve(this),
            (this.isVisible = n);
        }
        componentWillUnmount() {
          this.getVisibilityObserver().unobserve(this);
        }
        getVisibilityObserverId() {
          let { rootMargin: e, threshold: t } = this.props;
          return "".concat(this.elementId, " ").concat(e, " ").concat(t);
        }
        getVisibilityObserver() {
          let e = this.getVisibilityObserverId(),
            t = o.get(e);
          if (!t)
            throw Error("Visibility sensor with id ".concat(e, " not found."));
          return t;
        }
        render() {
          return r.Children.only(this.props.children);
        }
        constructor(e) {
          super(e), (this.isVisible = !1);
          let { root: t, rootMargin: n, threshold: r } = e;
          t
            ? a.has(t)
              ? (this.elementId = a.get(t) || "")
              : a.set(t, (0, i.v4)())
            : (this.elementId = l);
          let u = this.getVisibilityObserverId();
          !o.has(u) &&
            o.set(u, new s.default({ root: t, rootMargin: n, threshold: r }));
        }
      }
      u.defaultProps = {
        active: !0,
        children: r.createElement("span"),
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0, Number.MIN_VALUE],
      };
      var c = u;
    },
    290381: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VisibilityObserver: function () {
            return r.default;
          },
          VisibilitySensor: function () {
            return i.default;
          },
        }),
        n("6268");
      var r = n("157590"),
        i = n("235855");
    },
    281071: function (e, t, n) {
      "use strict";
      function r(e) {
        let t = document.body;
        if (null == t)
          throw Error(
            "[Utils] ClipboardUtils.copy(): assert failed: document.body != null"
          );
        let n = document.createRange(),
          r = window.getSelection(),
          i = document.createElement("textarea");
        (i.value = e),
          (i.contentEditable = "true"),
          (i.style.visibility = "none"),
          t.appendChild(i),
          n.selectNodeContents(i),
          null == r || r.removeAllRanges(),
          null == r || r.addRange(n),
          i.focus(),
          i.setSelectionRange(0, e.length);
        let s = document.execCommand("copy");
        return t.removeChild(i), s;
      }
      n.r(t),
        n.d(t, {
          copy: function () {
            return r;
          },
        }),
        n("70102");
    },
  },
]);
//# sourceMappingURL=e9ced5cf59a0578971af.js.map
