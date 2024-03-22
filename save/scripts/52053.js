(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["52053"],
  {
    92693: function (e, t, s) {
      "use strict";
      e.exports = s.p + "0c1a82e7889ced7b3bf1.svg";
    },
    913801: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return m;
          },
        });
      var a = s("37983"),
        l = s("884691"),
        n = s("414456"),
        r = s.n(n),
        o = s("862337"),
        i = s("77078"),
        d = s("920700"),
        c = s("306160"),
        u = s("782340"),
        f = s("206887");
      class h extends l.PureComponent {
        componentWillUnmount() {
          this._timeout.stop();
        }
        render() {
          let {
              isVertical: e,
              value: t,
              text: s,
              className: l,
              inputClassName: n,
            } = this.props,
            { mode: o } = this.state,
            c = o === d.default.Modes.SUCCESS ? u.default.Messages.COPIED : s;
          return e
            ? (0, a.jsxs)("div", {
                className: r(l, o),
                children: [
                  (0, a.jsx)(i.TextInput, { value: t, inputClassName: n }),
                  (0, a.jsx)(i.Button, {
                    className: f.button,
                    onClick: this.handleCopy,
                    size: i.Button.Sizes.MIN,
                    color: this.getVerticalButtonColor(o),
                    look: i.Button.Looks.FILLED,
                    children: c,
                  }),
                ],
              })
            : (0, a.jsx)(d.default, {
                ...this.props,
                onCopy: this.handleCopy,
                mode: o,
                text: c,
              });
        }
        handleCopy() {
          let { onCopy: e, value: t, delay: s } = this.props,
            a = (0, c.copy)(t);
          this.setState({
            mode: a ? d.default.Modes.SUCCESS : d.default.Modes.ERROR,
          }),
            this._timeout.start(s, () =>
              this.setState({ mode: d.default.Modes.DEFAULT })
            ),
            null == e || e();
        }
        getVerticalButtonColor(e) {
          switch (e) {
            case d.default.Modes.SUCCESS:
              return i.Button.Colors.GREEN;
            case d.default.Modes.ERROR:
              return i.Button.Colors.RED;
            default:
              return i.Button.Colors.BRAND;
          }
        }
        constructor(e) {
          super(e),
            (this.state = { mode: d.default.Modes.DEFAULT }),
            (this._timeout = new o.Timeout()),
            (this.handleCopy = this.handleCopy.bind(this));
        }
      }
      h.defaultProps = { isVertical: !1, delay: 300 };
      var m = h;
    },
    24763: function (e, t, s) {
      "use strict";
      s.r(t);
      var a = s("291010");
      s.es(a, t);
    },
    199179: function (e, t, s) {
      "use strict";
      s.r(t);
      var a = s("226515");
      s.es(a, t);
    },
    91297: function (e, t, s) {
      "use strict";
      s.r(t);
      var a = s("179367");
      s.es(a, t);
    },
    265614: function (e, t, s) {
      "use strict";
      s.r(t);
      var a = s("247230");
      s.es(a, t);
    },
    267013: function (e, t, s) {
      "use strict";
      s.r(t);
      var a = s("182565");
      s.es(a, t);
    },
    36170: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return w;
          },
        }),
        s("222007");
      var a = s("37983"),
        l = s("884691"),
        n = s("446674"),
        r = s("669491"),
        o = s("276825"),
        i = s("24763"),
        d = s("199179"),
        c = s("91297"),
        u = s("265614"),
        f = s("267013"),
        h = s("819855"),
        m = s("77078"),
        C = s("913801"),
        R = s("841098"),
        E = s("367376"),
        p = s("697218"),
        g = s("284679"),
        x = s("448881"),
        S = s("2973"),
        v = s("588025"),
        _ = s("227231"),
        N = s("260952"),
        M = s("782340"),
        A = s("435251");
      function T(e) {
        var t;
        let { quest: s, rewardCode: l } = e,
          n = (0, h.isThemeDark)((0, R.default)()),
          i = {
            border: "1px solid ".concat(s.config.colors.primary),
            background:
              "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      "
                .concat(
                  (0, g.hexOpacityToRgba)(s.config.colors.primary, 0.2),
                  " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      "
                )
                .concat(
                  (0, g.hexOpacityToRgba)(s.config.colors.primary, 0.6),
                  " 44%,\n      transparent 76%\n    ),\n    "
                )
                .concat(n ? "var(--black)" : "var(--white)", "\n    "),
          },
          d =
            (null === (t = s.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) != null || null != l;
        return (0, a.jsxs)("div", {
          style: i,
          className: A.rewardTile,
          children: [
            (0, a.jsx)("img", {
              src: (0, _.getRewardAssetUrl)(s.id),
              alt: s.config.messages.rewardName,
              style: { border: "1px solid ".concat(s.config.colors.primary) },
              className: A.reward,
            }),
            (0, a.jsxs)("div", {
              className: A.rewardSubheading,
              children: [
                d &&
                  (0, a.jsx)(o.CheckmarkSmallIcon, {
                    width: 16,
                    height: 16,
                    color: r.default.colors.TEXT_MUTED,
                    className: A.rewardSubheadingIcon,
                  }),
                (0, a.jsx)(m.Text, {
                  variant: "eyebrow",
                  color: "text-muted",
                  className: A.rewardSubheadingText,
                  children: d
                    ? M.default.Messages
                        .QUESTS_REWARD_CODE_CLAIMED_REWARD_TILE_SUBHEADER
                    : M.default.Messages
                        .QUESTS_REWARD_CODE_UNCLAIMED_REWARD_TILE_SUBHEADER,
                }),
              ],
            }),
            (0, a.jsx)(m.Heading, {
              variant: "display-sm",
              color: "header-primary",
              className: A.rewardHeading,
              children: s.config.messages.rewardName,
            }),
          ],
        });
      }
      function w(e) {
        let t = (0, n.useStateFromStores)([p.default], () => {
          var e;
          return null === (e = p.default.getCurrentUser()) || void 0 === e
            ? void 0
            : e.verified;
        });
        return t
          ? (0, a.jsx)(I, { ...e })
          : (0, a.jsx)(N.QuestsRewardCodeModalUnverified, { ...e });
      }
      function I(e) {
        var t;
        let { transitionState: s, onClose: r, quest: o, location: h } = e,
          R = l.useMemo(() => {
            var e;
            return (
              (null === (e = o.userStatus) || void 0 === e
                ? void 0
                : e.claimedAt) != null
            );
          }, []),
          p = o.config.rewardCodePlatforms.length > 1,
          [g, N] = l.useState(p ? null : o.config.rewardCodePlatforms[0]),
          {
            rewardCode: w,
            isFetchingRewardCode: I,
            isClaimingRewardCode: j,
          } = (0, n.useStateFromStoresObject)([S.default], () => ({
            rewardCode: S.default.getRewardCode(o.id),
            isFetchingRewardCode: S.default.isFetchingRewardCode(o.id),
            isClaimingRewardCode: S.default.isClaimingRewardCode(o.id),
          })),
          [D, O] = l.useState(!1),
          L =
            p &&
            (null === (t = o.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) == null &&
            null == w,
          b = l.useCallback((e, t, s) => {
            O(!1), (0, x.claimQuestRewardCode)(e, t, s).catch(() => O(!0));
          }, []),
          B = l.useCallback(e => {
            O(!1), (0, x.fetchQuestRewardCode)(e).catch(() => O(!0));
          }, []);
        l.useEffect(() => {
          var e, t;
          null == w &&
            !D &&
            !j &&
            !I &&
            !L &&
            ((null === (e = o.userStatus) || void 0 === e
              ? void 0
              : e.claimedAt) == null && null != g
              ? b(o.id, g, h)
              : (null === (t = o.userStatus) || void 0 === t
                  ? void 0
                  : t.claimedAt) != null && B(o.id));
        }, [o, w, j, I, D, L, g, h, b, B]);
        let y = null;
        R && null != w
          ? (y = M.default.Messages.QUESTS_REWARD_CODE_HEADER)
          : null != w
            ? (y = M.default.Messages.QUESTS_REWARD_CODE_CONGRATS)
            : L &&
              (y =
                M.default.Messages
                  .QUESTS_REWARD_CODE_PLATFORM_SELECTION_HEADER);
        let U =
            null != y
              ? (0, a.jsx)(m.Heading, {
                  variant: "heading-xl/semibold",
                  color: "header-primary",
                  className: A.heading,
                  children: y,
                })
              : null,
          k = null;
        L &&
          (k =
            M.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS.format(
              { rewardName: o.config.messages.rewardName }
            ));
        let F =
          null != g
            ? o.config.messages.rewardRedemptionInstructionsByPlatform[g]
            : void 0;
        null != w &&
          null != F &&
          (k = E.default.parse(F, !1, { allowLinks: !0 }));
        let P =
            null != k
              ? (0, a.jsx)(m.Text, {
                  variant: "text-sm/normal",
                  color: "text-normal",
                  className: A.bodyCopy,
                  children: k,
                })
              : null,
          Q = l.useMemo(
            () =>
              o.config.rewardCodePlatforms.map(e => ({
                label: (0, _.getPlatformString)(e),
                value: e,
              })),
            [o.config.rewardCodePlatforms]
          ),
          W = null;
        L &&
          (W = (0, a.jsxs)(m.FormItem, {
            title: M.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_LABEL,
            children: [
              (0, a.jsx)(m.Select, {
                placeholder:
                  M.default.Messages
                    .QUESTS_REWARD_CODE_SELECT_PLATFORM_PLACEHOLDER,
                options: Q,
                select: e => {
                  O(!1), N(e);
                },
                isSelected: e => e === g,
                serialize: e => (0, _.getPlatformString)(e),
                className: D ? A.errorInput : "",
                isDisabled: j,
                renderOptionLabel: e => {
                  let t = (function (e) {
                    switch (e) {
                      case v.QuestRewardCodePlatforms.CROSS_PLATFORM:
                        return (0, a.jsx)(c.ScienceIcon, {
                          className: A.platformSelectionOptionIcon,
                        });
                      case v.QuestRewardCodePlatforms.PC:
                        return (0, a.jsx)(u.ScreenIcon, {
                          className: A.platformSelectionOptionIcon,
                        });
                      case v.QuestRewardCodePlatforms.PLAYSTATION:
                        return (0, a.jsx)(d.PlaystationIcon, {
                          className: A.platformSelectionOptionIcon,
                        });
                      case v.QuestRewardCodePlatforms.SWITCH:
                        return (0, a.jsx)(i.NintendoSwitchNeutralIcon, {
                          className: A.platformSelectionOptionIcon,
                        });
                      case v.QuestRewardCodePlatforms.XBOX:
                        return (0, a.jsx)(f.XboxIcon, {
                          className: A.platformSelectionOptionIcon,
                        });
                    }
                  })(e.value);
                  return (0, a.jsxs)("div", {
                    className: A.platformSelectionOptionLabelContainer,
                    children: [t, e.label],
                  });
                },
              }),
              D
                ? (0, a.jsx)(m.InputError, {
                    error: M.default.Messages.QUESTS_REWARD_CODE_ERROR,
                  })
                : null,
            ],
          }));
        let H = null == w && (I || j),
          Z = H && !L ? (0, a.jsx)(m.Spinner, { className: A.spinner }) : null,
          V = null;
        null != w
          ? (V = (0, a.jsx)(m.FormItem, {
              title: M.default.Messages.QUESTS_REWARD_CODE_HEADER,
              children: (0, a.jsx)(C.default, {
                value: w.code,
                delay: 1e3,
                buttonColor: m.Button.Colors.BRAND,
              }),
            }))
          : D &&
            !L &&
            (V = (0, a.jsx)(m.FormItem, {
              title: M.default.Messages.QUESTS_REWARD_CODE_HEADER,
              children: (0, a.jsx)(m.TextInput, {
                disabled: !0,
                error: M.default.Messages.QUESTS_REWARD_CODE_ERROR,
                inputClassName: A.errorInput,
              }),
            }));
        let z = () => {
            var e;
            L && null != g
              ? b(o.id, g, h)
              : D
                ? (null === (e = o.userStatus) || void 0 === e
                    ? void 0
                    : e.claimedAt) != null
                  ? B(o.id)
                  : null != g && b(o.id, g, h)
                : r();
          },
          G = L && j,
          Y = !G && ((L && null == g) || H),
          X = M.default.Messages.QUESTS_REWARD_CODE_DONE;
        L
          ? (X = M.default.Messages.QUESTS_REWARD_CODE_GET_CODE)
          : !L && D && (X = M.default.Messages.QUESTS_REWARD_CODE_TRY_AGAIN);
        let q = (0, a.jsx)(m.Button, {
          onClick: () => z(),
          submitting: G,
          disabled: Y,
          children: X,
        });
        return (0, a.jsxs)(m.ModalRoot, {
          transitionState: s,
          size: m.ModalSize.DYNAMIC,
          children: [
            (0, a.jsxs)("div", {
              className: A.modalBody,
              children: [
                (0, a.jsx)(m.ModalCloseButton, {
                  className: A.closeButton,
                  onClick: () => r(),
                }),
                (0, a.jsx)(T, { quest: o, rewardCode: w }),
                (0, a.jsxs)("div", {
                  className: A.modalContent,
                  children: [U, P, W, Z, V],
                }),
              ],
            }),
            (0, a.jsx)(m.ModalFooter, { children: q }),
          ],
        });
      }
    },
    260952: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          QuestsRewardCodeModalUnverified: function () {
            return m;
          },
        }),
        s("222007");
      var a = s("37983"),
        l = s("884691"),
        n = s("446674"),
        r = s("77078"),
        o = s("437822"),
        i = s("697218"),
        d = s("68238"),
        c = s("227231"),
        u = s("782340"),
        f = s("283401"),
        h = s("92693");
      function m(e) {
        let { transitionState: t, onClose: s } = e,
          m = (0, n.useStateFromStores)([i.default], () => {
            var e;
            return null === (e = i.default.getCurrentUser()) || void 0 === e
              ? void 0
              : e.email;
          }),
          [C, R] = l.useState({ status: "unknown" });
        l.useEffect(() => {
          R({ status: "loading" }),
            o.default.verifyResend().then(
              () => R({ status: "success" }),
              e => {
                R({ status: "error" }),
                  (0, c.captureQuestsException)(e, {
                    tags: { location: "QuestsRewardCodeModalUnverified" },
                  });
              }
            );
        }, []);
        let E = () =>
          (0, a.jsx)(r.ModalFooter, {
            className: f.modalFooter,
            children: (0, a.jsx)(r.Button, {
              color: r.Button.Colors.BRAND,
              size: r.Button.Sizes.MEDIUM,
              onClick: s,
              children: u.default.Messages.CLOSE,
            }),
          });
        return (0, a.jsxs)(r.ModalRoot, {
          transitionState: t,
          disableTrack: !0,
          children: [
            (0, a.jsx)("img", { alt: "", className: f.headerImage, src: h }),
            (0, a.jsxs)(r.ModalHeader, {
              separator: !1,
              className: f.header,
              children: [
                (0, a.jsx)(r.Heading, {
                  className: f.title,
                  variant: "heading-xl/bold",
                  children: u.default.Messages.QUESTS_REWARD_VERIFICATION_TITLE,
                }),
                (0, a.jsx)(r.ModalCloseButton, {
                  onClick: s,
                  className: f.modalCloseButton,
                }),
              ],
            }),
            "loading" === C.status &&
              (0, a.jsx)(r.ModalContent, {
                className: f.content,
                children: (0, a.jsx)(r.Spinner, {}),
              }),
            "error" === C.status &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(r.ModalContent, {
                    className: f.content,
                    children: (0, a.jsx)(r.Text, {
                      variant: "text-md/normal",
                      children:
                        u.default.Messages.QUESTS_REWARD_VERIFICATION_ERROR,
                    }),
                  }),
                  E(),
                ],
              }),
            "success" === C.status &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(r.ModalContent, {
                    className: f.content,
                    children: (0, a.jsx)(r.Text, {
                      variant: "text-md/normal",
                      children:
                        u.default.Messages.QUESTS_REWARD_VERIFICATION_BODY.format(
                          {
                            emailAddress: m,
                            emailAddressLink: "mailto:".concat(m),
                          }
                        ),
                    }),
                  }),
                  (0, a.jsx)(r.ModalContent, {
                    className: f.content,
                    children: (0, a.jsxs)("div", {
                      className: f.tooltip,
                      children: [
                        (0, a.jsx)(d.default, { className: f.infoFilledIcon }),
                        (0, a.jsx)(r.Text, {
                          className: f.tooltipText,
                          variant: "text-sm/normal",
                          children:
                            u.default.Messages
                              .USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CHECK_SPAM,
                        }),
                      ],
                    }),
                  }),
                  E(),
                ],
              }),
          ],
        });
      }
    },
    920700: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          CopyInputModes: function () {
            return f;
          },
          default: function () {
            return m;
          },
        }),
        s("222007");
      var a = s("37983"),
        l = s("884691"),
        n = s("414456"),
        r = s.n(n),
        o = s("77078"),
        i = s("474293"),
        d = s("145131"),
        c = s("782340"),
        u = s("704524");
      let f = { DEFAULT: "default", SUCCESS: "success", ERROR: "error" };
      class h extends l.PureComponent {
        select() {
          var e;
          null === (e = this.inputRef.current) || void 0 === e || e.select();
        }
        renderInput(e) {
          var t;
          let { value: s, mode: l } = this.props,
            n =
              null === (t = this.context) || void 0 === t ? void 0 : t.titleId;
          return (0, a.jsx)("input", {
            className: r((0, i.getClass)(u, "input", l), {
              [u.inputHidden]: e,
            }),
            ref: this.inputRef,
            type: "text",
            value: s,
            onClick: this.handleInputClick,
            readOnly: !0,
            "aria-labelledby": n,
          });
        }
        render() {
          let e;
          let {
              text: t = c.default.Messages.COPY,
              mode: s,
              hideMessage: l,
              className: n,
              buttonLook: h,
            } = this.props,
            m = null != l;
          switch (s) {
            case f.SUCCESS:
              e = o.ButtonColors.GREEN;
              break;
            case f.ERROR:
              e = o.ButtonColors.RED;
              break;
            default:
              e = this.props.buttonColor;
          }
          return (0, a.jsx)(o.FocusRing, {
            focusTarget: this.inputRef,
            ringTarget: this.containerRef,
            children: (0, a.jsx)("div", {
              className: r((0, i.getClass)(u, "copyInput", s), n),
              ref: this.containerRef,
              children: (0, a.jsxs)(d.default, {
                className: u.layout,
                children: [
                  (0, a.jsxs)(d.default, {
                    className: u.inputWrapper,
                    children: [
                      this.renderInput(m),
                      m
                        ? (0, a.jsx)("div", {
                            className: u.hiddenMessage,
                            children: l,
                          })
                        : null,
                    ],
                  }),
                  (0, a.jsx)(d.default, {
                    shrink: 1,
                    grow: 0,
                    style: { margin: 0 },
                    children: (0, a.jsx)(o.Button, {
                      className: u.button,
                      onClick: this.handleButtonClick,
                      size: o.ButtonSizes.MIN,
                      color: e,
                      look: h,
                      children: t,
                    }),
                  }),
                ],
              }),
            }),
          });
        }
        constructor(...e) {
          super(...e),
            (this.inputRef = l.createRef()),
            (this.containerRef = l.createRef()),
            (this.handleButtonClick = () => {
              this.select();
              let { onCopy: e, value: t } = this.props;
              e(t);
            }),
            (this.handleInputClick = () => {
              this.select();
            });
        }
      }
      (h.contextType = o.FormContext),
        (h.defaultProps = {
          supportsCopy: !0,
          buttonColor: o.ButtonColors.PRIMARY,
          buttonLook: o.ButtonLooks.FILLED,
          mode: f.DEFAULT,
        }),
        (h.Modes = f),
        (h.ButtonColors = o.ButtonColors),
        (h.ButtonLooks = o.ButtonLooks);
      var m = h;
    },
    291010: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          NintendoSwitchNeutralIcon: function () {
            return r;
          },
        });
      var a = s("37983");
      s("884691");
      var l = s("669491"),
        n = s("82169");
      let r = e => {
        let {
          width: t = 24,
          height: s = 24,
          color: r = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...i
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, n.default)(i),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: s,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M10.04 20.25H7.12a3.5 3.5 0 0 1-2.48-1.03A3.37 3.37 0 0 1 3.6 16.8V7.21a3.48 3.48 0 0 1 3.52-3.45h2.92v16.49ZM11.5 2.18H7.12A5.08 5.08 0 0 0 2 7.2v9.58c0 2.78 2.3 5.03 5.12 5.03h4.38c.08 0 .15-.06.15-.14V2.32c0-.08-.07-.14-.15-.14ZM5.1 8.07c0 1.02.85 1.85 1.89 1.85s1.88-.83 1.88-1.85S8.03 6.22 7 6.22s-1.88.83-1.88 1.85ZM17.6 11a2 2 0 0 1 2.02 1.98 2 2 0 0 1-2.01 2 2 2 0 0 1-2.03-2A2 2 0 0 1 17.61 11ZM13.8 21.82h3.09A5.08 5.08 0 0 0 22 16.8V7.21c0-2.78-2.3-5.03-5.12-5.03h-3.1c-.07 0-.13.05-.13.12v19.38c0 .08.06.14.14.14Z",
            className: o,
          }),
        });
      };
    },
    226515: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          PlaystationIcon: function () {
            return r;
          },
        });
      var a = s("37983");
      s("884691");
      var l = s("669491"),
        n = s("82169");
      let r = e => {
        let {
          width: t = 24,
          height: s = 24,
          color: r = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...i
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, n.default)(i),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: s,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            fillRule: "evenodd",
            d: "M23.79 16.92c-.47.59-1.62 1.01-1.62 1.01L13.62 21v-2.26l6.3-2.24c.7-.26.82-.62.24-.81a4.24 4.24 0 0 0-2.35.12l-4.19 1.48v-2.35l.25-.08s1.2-.43 2.9-.62c1.71-.19 3.8.02 5.43.64 1.85.59 2.05 1.45 1.59 2.04Zm-9.35-3.86V7.27c0-.67-.13-1.3-.77-1.48-.48-.15-.79.3-.79.98v14.5l-3.9-1.25V2.74a47 47 0 0 1 5.38 1.48c3.31 1.13 4.43 2.55 4.43 5.74 0 3.1-1.92 4.28-4.35 3.1ZM1.8 18.5c-1.9-.53-2.2-1.64-1.34-2.28.8-.6 2.15-1.04 2.15-1.04l5.6-2v2.28L4.18 16.9c-.71.26-.82.62-.24.81.58.19 1.63.14 2.34-.12l1.93-.7v2.03l-.38.06c-1.94.32-4 .19-6.03-.48Z",
            clipRule: "evenodd",
            className: o,
          }),
        });
      };
    },
    179367: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          ScienceIcon: function () {
            return r;
          },
        });
      var a = s("37983");
      s("884691");
      var l = s("669491"),
        n = s("82169");
      let r = e => {
        let {
          width: t = 24,
          height: s = 24,
          color: r = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...i
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, n.default)(i),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: s,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, a.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
              className: o,
            }),
            (0, a.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              fillRule: "evenodd",
              d: "M19.5 15.46a13.2 13.2 0 0 0-.72-1.62c-.68.9-1.45 1.78-2.3 2.64a21.05 21.05 0 0 1-7.24 4.9c-2.24.83-4.63.98-6.12-.5-1.48-1.49-1.33-3.88-.5-6.12.33-.89.78-1.82 1.35-2.76a16.28 16.28 0 0 1-1.35-2.76c-.83-2.24-.98-4.63.5-6.12C4.61 1.64 7 1.8 9.24 2.62c.89.33 1.82.78 2.76 1.35a13.7 13.7 0 0 1 4.62-1.86c1.58-.27 3.17-.07 4.26 1.01 1.48 1.49 1.33 3.88.5 6.12-.33.89-.78 1.82-1.35 2.76.57.94 1.02 1.87 1.35 2.76.83 2.24.98 4.63-.5 6.12-1.1 1.09-2.68 1.29-4.3 1a1.5 1.5 0 0 1-2.08-1.38 1.5 1.5 0 0 1 2.9-.52c1.01.1 1.68-.14 2.06-.52.6-.6.81-1.92.04-4ZM8.54 4.5c2 .73 4.35 2.26 6.52 4.44 1 1 1.87 2.04 2.58 3.06A22.82 22.82 0 0 1 12 17.64 22.83 22.83 0 0 1 6.36 12a22.6 22.6 0 0 1 2.27-2.76 1.5 1.5 0 1 0-1.6-1.2 25 25 0 0 0-1.8 2.12c-.3-.56-.54-1.1-.73-1.62-.77-2.08-.56-3.4.04-4 .6-.6 1.92-.81 4-.04ZM4.5 15.46c.19-.52.43-1.06.72-1.62a25.3 25.3 0 0 0 4.94 4.94c-.56.29-1.1.53-1.62.72-2.08.77-3.4.56-4-.04-.6-.6-.81-1.92-.04-4ZM16.96 4.08c-.91.16-1.98.54-3.12 1.14a25.3 25.3 0 0 1 4.94 4.94c.29-.56.53-1.1.72-1.62.77-2.08.56-3.4-.04-4-.43-.43-1.23-.68-2.5-.46Z",
              clipRule: "evenodd",
              className: o,
            }),
          ],
        });
      };
    },
    247230: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          ScreenIcon: function () {
            return r;
          },
        });
      var a = s("37983");
      s("884691");
      var l = s("669491"),
        n = s("82169");
      let r = e => {
        let {
          width: t = 24,
          height: s = 24,
          color: r = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...i
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, n.default)(i),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: s,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M5 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM13.5 20a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-.5.5H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-1.5Z",
            className: o,
          }),
        });
      };
    },
    182565: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          XboxIcon: function () {
            return r;
          },
        });
      var a = s("37983");
      s("884691");
      var l = s("669491"),
        n = s("82169");
      let r = e => {
        let {
          width: t = 24,
          height: s = 24,
          color: r = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...i
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, n.default)(i),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: s,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M10.9 22.95c-1.7-.16-3.4-.77-4.88-1.73-1.24-.8-1.52-1.13-1.52-1.8 0-1.32 1.46-3.65 3.96-6.3 1.42-1.5 3.4-3.26 3.61-3.22.42.1 3.74 3.33 4.98 4.86 1.97 2.4 2.87 4.38 2.41 5.26-.35.67-2.51 1.98-4.1 2.48-1.32.42-3.04.6-4.46.45Zm-8.06-4.9a11.4 11.4 0 0 1-1.8-5.37A8.59 8.59 0 0 1 1.23 10c.3-1.9 1.38-4.08 2.67-5.43.56-.57.6-.59 1.28-.36.81.27 1.69.88 3.04 2.1l.79.71-.43.53c-2 2.46-4.12 5.94-4.91 8.1-.43 1.17-.6 2.34-.42 2.83.12.34 0 .21-.41-.43Zm18.01.26c.1-.5-.03-1.4-.33-2.32-.65-1.98-2.82-5.67-4.82-8.18l-.63-.8.68-.62c.89-.81 1.5-1.3 2.17-1.71a4.18 4.18 0 0 1 1.6-.62c.2 0 .9.73 1.46 1.52a11.51 11.51 0 0 1 1.85 4.26c.21 1 .23 3.15.03 4.14-.16.82-.5 1.89-.82 2.6-.25.55-.86 1.6-1.13 1.94-.14.17-.14.17-.06-.2ZM11.08 3.68a13.7 13.7 0 0 0-3.12-1.1 5.74 5.74 0 0 0-1.05-.06c-.65.03-.62 0 .42-.5.87-.4 1.59-.64 2.57-.84 1.1-.24 3.17-.24 4.25-.01 1.17.25 2.55.76 3.33 1.24l.23.14-.53-.03c-1.06-.05-2.59.37-4.24 1.17-.5.25-.92.44-.96.43-.03 0-.43-.2-.9-.44Z",
            className: o,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=04ffcb0228d1af74d15a.js.map
