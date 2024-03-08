(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["97618"],
  {
    437083: function (e, t, s) {
      var n = s("561449"),
        r = s("877297");
      e.exports = function (e) {
        return r(n(e));
      };
    },
    329252: function (e, t, s) {
      var n = s("877297"),
        r = s("164099");
      e.exports = function (e) {
        return n(r(e));
      };
    },
    957478: function (e, t, s) {
      var n = s("626785");
      e.exports = function (e, t) {
        return n(t, function (t) {
          return e[t];
        });
      };
    },
    877297: function (e, t, s) {
      var n = s("68421");
      e.exports = function (e, t) {
        var s = -1,
          r = e.length,
          a = r - 1;
        for (t = void 0 === t ? r : t; ++s < t; ) {
          var o = n(s, a),
            i = e[o];
          (e[o] = e[s]), (e[s] = i);
        }
        return (e.length = t), e;
      };
    },
    375128: function (e, t, s) {
      var n = s("437083"),
        r = s("329252"),
        a = s("725502");
      e.exports = function (e) {
        return (a(e) ? n : r)(e);
      };
    },
    164099: function (e, t, s) {
      var n = s("957478"),
        r = s("466731");
      e.exports = function (e) {
        return null == e ? [] : n(e, r(e));
      };
    },
    27905: function (e, t, s) {
      "use strict";
      e.exports = s.p + "cd9a43954ad17d7b1d12.svg";
    },
    795098: function (e, t, s) {
      "use strict";
      e.exports = s.p + "5804ba1176fbcfa70f66.svg";
    },
    576348: function (e, t, s) {
      "use strict";
      e.exports = s.p + "141627ecad8029bd9e74.svg";
    },
    769703: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return n;
          },
        }),
        s("222007");
      var n,
        r = s("37983"),
        a = s("884691"),
        o = s("458960"),
        i = s("77078"),
        u = s("254792");
      n = class extends a.Component {
        componentWillEnter(e) {
          let { offset: t } = this.state;
          t.setValue(1),
            o.default.spring(t, { toValue: 0, duration: 75 }).start(e);
        }
        componentWillLeave(e) {
          let { offset: t } = this.state;
          t.setValue(0),
            this.setState({ isExiting: !0 }, () => {
              o.default.spring(t, { toValue: -1, duration: 75 }).start(e);
            });
        }
        render() {
          let { isExiting: e, offset: t } = this.state;
          return (0, r.jsx)(o.default.div, {
            className: u.wrapper,
            style: {
              left: 0,
              position: e ? "absolute" : "relative",
              top: 0,
              transform: [
                {
                  translateX: t.interpolate({
                    inputRange: [-1, 1],
                    outputRange: ["-100%", "100%"],
                  }),
                },
              ],
            },
            children: (0, r.jsx)(i.ModalContent, {
              className: u.contentWrapper,
              children: this.props.children,
            }),
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = {
              isExiting: !1,
              offset: new o.default.Value(0),
              selectedValue: null,
            });
        }
      };
    },
    655615: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return U;
          },
        }),
        s("222007");
      var n = s("37983"),
        r = s("884691"),
        a = s("414456"),
        o = s.n(a),
        i = s("266491"),
        u = s("77078"),
        l = s("6481"),
        d = s("259051"),
        c = s("769703"),
        h = s("183766"),
        p = s("49111"),
        S = s("782340"),
        H = s("347312"),
        m = s("890957");
      let g = e =>
          (0, n.jsx)("div", {
            className: H.innerContentWrapper,
            children: e.children,
          }),
        f = {
          [p.HypeSquadHouses.HOUSE_1]: s("27905"),
          [p.HypeSquadHouses.HOUSE_2]: s("795098"),
          [p.HypeSquadHouses.HOUSE_3]: s("576348"),
        },
        E = {
          [p.HypeSquadHouses.HOUSE_1]: H.quizResultLogoWrapperHouse1,
          [p.HypeSquadHouses.HOUSE_2]: H.quizResultLogoWrapperHouse2,
          [p.HypeSquadHouses.HOUSE_3]: H.quizResultLogoWrapperHouse3,
        },
        _ = e => {
          let t = {
            [p.HypeSquadHouses.HOUSE_1]:
              S.default.Messages.HYPESQUAD_QUIZ_BODY_HOUSE_1,
            [p.HypeSquadHouses.HOUSE_2]:
              S.default.Messages.HYPESQUAD_QUIZ_BODY_HOUSE_2,
            [p.HypeSquadHouses.HOUSE_3]:
              S.default.Messages.HYPESQUAD_QUIZ_BODY_HOUSE_3,
          };
          return t[e];
        };
      class x extends r.Component {
        getSelectedHouseID() {
          let e;
          let { responses: t } = this.state,
            s = {},
            n = 0;
          return (Object.keys(t).forEach(r => {
            let a = t[r];
            null == s[a] && (s[a] = 0),
              s[a]++,
              s[a] > n && ((e = a), (n = s[a]));
          }),
          null == e || e === p.RANDOM_HYPESQUAD_HOUSE)
            ? (0, d.getRandomHouse)()
            : e;
        }
        renderUnknownErrorMessage() {
          return (0, n.jsx)(
            c.default,
            {
              children: (0, n.jsxs)(r.Fragment, {
                children: [
                  (0, n.jsx)(u.Heading, {
                    className: H.quizResultHeading,
                    variant: "heading-xl/semibold",
                    children: S.default.Messages.HYPESQUAD_ERROR_HEADING,
                  }),
                  (0, n.jsx)(u.Text, {
                    variant: "text-sm/normal",
                    children: S.default.Messages.HYPESQUAD_ERROR_BODY.format({
                      emailAddress: "hypesquad@".concat(p.EMAIL_DOMAIN),
                      emailAddressLink: "mailto:hypesquad@".concat(
                        p.EMAIL_DOMAIN
                      ),
                    }),
                  }),
                ],
              }),
            },
            "error"
          );
        }
        renderQuizResult() {
          let { selectedHouse: e } = this.state;
          if (null == e) return null;
          let t = S.default.Messages.HYPESQUAD_QUIZ_TITLE.format({
            house: (0, d.getHouseNameFromHouseID)(e),
          });
          return (0, n.jsx)(
            c.default,
            {
              children: (0, n.jsxs)(r.Fragment, {
                children: [
                  (0, n.jsx)("div", {
                    className: o(
                      H.quizResultLogoWrapper,
                      E[e],
                      m.marginBottom20
                    ),
                    children: (0, n.jsx)("img", {
                      alt: t,
                      className: H.quizResultLogo,
                      src: f[e],
                    }),
                  }),
                  (0, n.jsx)(u.Heading, {
                    className: H.quizResultHeading,
                    variant: "heading-xl/semibold",
                    children: t,
                  }),
                  (0, n.jsx)(u.Text, {
                    className: H.quizResultBody,
                    variant: "text-sm/normal",
                    children: _(e),
                  }),
                ],
              }),
            },
            "submit-step"
          );
        }
        renderContent() {
          let {
            currentStep: e,
            hasUnknownError: t,
            hasSubmittedHouse: s,
            questions: r,
          } = this.state;
          if (t) return this.renderUnknownErrorMessage();
          if (s) return this.renderQuizResult();
          let a = r[e];
          return (0, n.jsx)(
            c.default,
            {
              children: (0, n.jsx)(
                h.default,
                {
                  onSelect: this.handleQuestionSelect,
                  options: a.options,
                  prompt: a.prompt,
                },
                e
              ),
            },
            e
          );
        }
        renderHeaderCopy() {
          let {
            currentStep: e,
            hasUnknownError: t,
            hasSubmittedHouse: s,
            questions: n,
          } = this.state;
          return t
            ? S.default.Messages.HYPESQUAD_QUIZ_ERROR_MODAL_TITLE
            : s
              ? S.default.Messages.HYPESQUAD_QUIZ_COMPLETED_MODAL_TITLE
              : S.default.Messages.HYPESQUAD_QUIZ_ONGOING_MODAL_TITLE.format({
                  currentQuestion: e + 1,
                  questionCount: n.length,
                });
        }
        renderNewsletterWarning() {
          return (0, n.jsx)(c.default, {
            children: (0, n.jsx)(u.Text, {
              className: H.nameFormPreface,
              variant: "text-md/normal",
              children: S.default.Messages.HYPESQUAD_NEWSLETTER_WARNING,
            }),
          });
        }
        renderPrimaryAction() {
          let {
              currentStep: e,
              responses: t,
              hasUnknownError: s,
              hasSubmittedHouse: r,
              isRequestPending: a,
              questions: o,
            } = this.state,
            i = null == t[e];
          return s
            ? (0, n.jsx)(u.Button, {
                type: "submit",
                color: u.Button.Colors.BRAND,
                onClick: this.handleSubmitButtonClick,
                submitting: a,
                children: S.default.Messages.HYPESQUAD_QUIZ_RETRY,
              })
            : r
              ? (0, n.jsx)(u.Button, {
                  type: "submit",
                  color: u.Button.Colors.BRAND,
                  onClick: this.props.onClose,
                  children: S.default.Messages.HYPESQUAD_QUIZ_CLOSE,
                })
              : e === o.length - 1
                ? (0, n.jsx)(u.Button, {
                    disabled: i,
                    type: "submit",
                    color: u.Button.Colors.BRAND,
                    onClick: this.handleSubmitButtonClick,
                    submitting: a,
                    children: S.default.Messages.HYPESQUAD_QUIZ_SHOW_MY_HOUSE,
                  })
                : (0, n.jsx)(u.Button, {
                    disabled: i,
                    type: "submit",
                    color: u.Button.Colors.BRAND,
                    onClick: this.handleNextQuestionButtonClick,
                    children: S.default.Messages.HYPESQUAD_QUIZ_NEXT_QUESTION,
                  });
        }
        renderSecondaryAction() {
          let { hasSubmittedHouse: e } = this.state;
          return e
            ? null
            : (0, n.jsx)(u.Button, {
                type: "button",
                look: u.Button.Looks.LINK,
                color: u.Button.Colors.PRIMARY,
                onClick: this.props.onClose,
                children: S.default.Messages.HYPESQUAD_QUIZ_CANCEL,
              });
        }
        render() {
          let { selectedHouse: e } = this.state,
            { transitionState: t } = this.props;
          return (0, n.jsxs)(u.ModalRoot, {
            size: null == e ? u.ModalSize.MEDIUM : u.ModalSize.SMALL,
            transitionState: t,
            children: [
              (0, n.jsx)(u.ModalHeader, {
                separator: !1,
                children: (0, n.jsx)(u.Heading, {
                  variant: "heading-lg/semibold",
                  children: this.renderHeaderCopy(),
                }),
              }),
              (0, n.jsx)("div", {
                className: H.outerContentWrapper,
                children: (0, n.jsx)(i.default, {
                  component: g,
                  children: this.renderContent(),
                }),
              }),
              (0, n.jsxs)(u.ModalFooter, {
                children: [
                  this.renderPrimaryAction(),
                  this.renderSecondaryAction(),
                ],
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = {
              currentStep: 0,
              hasSubmittedHouse: !1,
              hasUnknownError: !1,
              isRequestPending: !1,
              questions: (0, d.getQuestions)(),
              responses: {},
              selectedHouse: null,
            }),
            (this.handleQuestionSelect = e => {
              this.setState(t => ({
                responses: { ...t.responses, [t.currentStep]: e },
              }));
            }),
            (this.handleSubmitButtonClick = () => {
              let e = this.getSelectedHouseID();
              this.setState({ isRequestPending: !0 }, () => {
                l.default
                  .joinHypeSquadOnline({ houseID: e })
                  .then(() => {
                    this.setState({
                      hasUnknownError: !1,
                      hasSubmittedHouse: !0,
                      isRequestPending: !1,
                      selectedHouse: e,
                    });
                  })
                  .catch(() => {
                    this.setState({
                      hasUnknownError: !0,
                      hasSubmittedHouse: !1,
                      isRequestPending: !1,
                    });
                  });
              });
            }),
            (this.handleKeyDown = e => {
              e.keyCode === p.KeyboardKeys.ENTER &&
                this.handleSubmitButtonClick();
            }),
            (this.handleNextQuestionButtonClick = () => {
              this.setState(e => ({ currentStep: e.currentStep + 1 }));
            });
        }
      }
      var U = x;
    },
    183766: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return n;
          },
        }),
        s("222007");
      var n,
        r = s("37983"),
        a = s("884691"),
        o = s("661201"),
        i = s.n(o),
        u = s("375128"),
        l = s.n(u),
        d = s("77078"),
        c = s("782340"),
        h = s("595337");
      n = class extends a.Component {
        render() {
          let { selectedValue: e } = this.state;
          return (0, r.jsxs)(a.Fragment, {
            children: [
              (0, r.jsx)(d.Heading, {
                className: h.prompt,
                variant: "heading-md/semibold",
                children: this.props.prompt,
              }),
              (0, r.jsx)("hr", { className: h.separator }),
              (0, r.jsx)(d.Text, {
                className: h.selectYourAnswer,
                variant: "text-xs/normal",
                children: c.default.Messages.HYPESQUAD_QUIZ_SELECT_ANSWER,
              }),
              (0, r.jsx)(d.RadioGroup, {
                options: this.getQuestionOptions(),
                onChange: this.handleOptionChange,
                value: e,
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = { selectedValue: null }),
            (this.getQuestionOptions = i(() =>
              l(this.props.options.map(e => ({ name: e.copy, value: e.house })))
            )),
            (this.handleOptionChange = e => {
              let { onSelect: t } = this.props;
              this.setState({ selectedValue: e.value }), t(e.value);
            });
        }
      };
    },
  },
]);
//# sourceMappingURL=3abd8d758e280ba7e0bb.js.map
