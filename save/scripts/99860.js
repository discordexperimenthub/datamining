(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["99860"],
  {
    876087: function (e, t, s) {
      "use strict";
      e.exports = s.p + "0da9027583d375c510f3.svg";
    },
    711438: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return y;
          },
        }),
        s("222007");
      var a = s("37983"),
        l = s("884691"),
        n = s("627445"),
        u = s.n(n),
        r = s("446674"),
        i = s("77078"),
        o = s("430568"),
        S = s("901582"),
        d = s("86678"),
        h = s("583232"),
        c = s("845579"),
        m = s("52028"),
        T = s("697218"),
        f = s("882641"),
        p = s("381546"),
        C = s("599110"),
        A = s("158998"),
        g = s("921917"),
        M = s("413524"),
        N = s("49111"),
        _ = s("958706"),
        j = s("782340"),
        O = s("453578");
      let U = Object.values(M.ClearAfterValues)
        .filter(e => "number" == typeof e)
        .sort((e, t) => e - t);
      function x(e) {
        return (0, a.jsxs)("div", {
          className: O.statusOptionItem,
          children: [
            (0, a.jsx)(i.Status, {
              status: e.value,
              size: 10,
              className: O.statusIcon,
            }),
            e.label,
          ],
        });
      }
      let v = [
        {
          key: 1,
          value: i.StatusTypes.ONLINE,
          label: (0, A.humanizeStatus)(i.StatusTypes.ONLINE),
        },
        {
          key: 2,
          value: i.StatusTypes.IDLE,
          label: (0, A.humanizeStatus)(i.StatusTypes.IDLE),
        },
        {
          key: 3,
          value: i.StatusTypes.DND,
          label: (0, A.humanizeStatus)(i.StatusTypes.DND),
        },
        {
          key: 4,
          value: i.StatusTypes.INVISIBLE,
          label: (0, A.humanizeStatus)(i.StatusTypes.INVISIBLE),
        },
      ];
      class E extends l.PureComponent {
        componentDidMount() {
          let { sourceAnalyticsContext: e } = this.props;
          C.default.track(N.AnalyticEvents.OPEN_MODAL, {
            source: e.location,
            type: N.AnalyticsSections.CUSTOM_STATUS_MODAL,
            load_id: e.loadId,
          });
        }
        get clearAfterOptions() {
          return [
            {
              key: 1,
              value: M.ClearAfterValues.TODAY,
              label: j.default.Messages.CUSTOM_STATUS_TODAY,
            },
            {
              key: 2,
              value: M.ClearAfterValues.HOURS_4,
              label: j.default.Messages.CUSTOM_STATUS_HOURS.format({
                hours: 4,
              }),
            },
            {
              key: 3,
              value: M.ClearAfterValues.HOURS_1,
              label: j.default.Messages.CUSTOM_STATUS_HOURS.format({
                hours: 1,
              }),
            },
            {
              key: 4,
              value: M.ClearAfterValues.MINUTES_30,
              label: j.default.Messages.CUSTOM_STATUS_MINUTES.format({
                minutes: 30,
              }),
            },
            {
              key: 5,
              value: null,
              label: j.default.Messages.CUSTOM_STATUS_DONT_CLEAR,
            },
          ];
        }
        get analyticsLocation() {
          return { page: N.AnalyticsPages.CUSTOM_STATUS_MODAL };
        }
        getEmojiButtonRenderer() {
          let { emojiInfo: e } = this.state;
          return null == e
            ? null
            : () =>
                (0, a.jsx)(o.default, {
                  className: O.emoji,
                  emojiId: e.id,
                  emojiName: e.name,
                  animated: !!e.animated,
                });
        }
        renderCustomStatusInput() {
          let { user: e } = this.props,
            { text: t, emojiInfo: s } = this.state;
          return (0, a.jsx)(i.FormSection, {
            className: O.formGroup,
            title: j.default.Messages.CUSTOM_STATUS_MODAL_BODY.format({
              username: e.username,
            }),
            children: (0, a.jsxs)("div", {
              className: O.inputContainer,
              children: [
                (0, a.jsx)("div", {
                  className: O.emojiButtonContainer,
                  children: (0, a.jsx)(i.Popout, {
                    renderPopout: this.renderEmojiPicker,
                    position: "left",
                    animation: i.Popout.Animation.NONE,
                    align: "top",
                    children: (e, t) => {
                      let { isShown: s } = t;
                      return (0, a.jsx)(f.default, {
                        ...e,
                        active: s,
                        className: O.emojiButton,
                        tabIndex: 0,
                        renderButtonContents: this.getEmojiButtonRenderer(),
                      });
                    },
                  }),
                }),
                (0, a.jsx)(i.TextInput, {
                  maxLength: M.STATUS_MAX_LENGTH,
                  value: t,
                  inputClassName: O.input,
                  placeholder:
                    j.default.Messages.CUSTOM_STATUS_MODAL_PLACEHOLDER,
                  onChange: this.handleStatusChange,
                  onKeyPress: this.handleKeyPress,
                  autoFocus: !0,
                }),
                t.length > 0 || null != s
                  ? (0, a.jsx)(i.Button, {
                      focusProps: {
                        offset: { top: 8, bottom: 8, left: -2, right: -2 },
                      },
                      className: O.clearButton,
                      onClick: this.handleClearStatus,
                      look: i.Button.Looks.BLANK,
                      size: i.Button.Sizes.NONE,
                      children: (0, a.jsx)(p.default, {
                        className: O.clearIcon,
                      }),
                    })
                  : null,
              ],
            }),
          });
        }
        renderClearAfter() {
          let { clearAfter: e } = this.state;
          return (0, a.jsx)(i.FormSection, {
            className: O.formGroup,
            title: j.default.Messages.CUSTOM_STATUS_CLEAR_AFTER,
            children: (0, a.jsx)(i.SingleSelect, {
              placeholder: j.default.Messages.CUSTOM_STATUS_CLEAR_AFTER,
              maxVisibleItems: 5,
              value: e,
              options: this.clearAfterOptions,
              onChange: this.handleChangeClearAfter,
            }),
          });
        }
        renderStatusInput() {
          let { status: e } = this.state;
          return (0, a.jsx)(i.FormSection, {
            className: O.formGroup,
            title: j.default.Messages.CUSTOM_STATUS_STATUS_TITLE,
            children: (0, a.jsx)(i.SingleSelect, {
              maxVisibleItems: 4,
              value: e,
              options: v,
              onChange: this.handleChangeStatus,
              renderOptionLabel: x,
            }),
          });
        }
        render() {
          let { transitionState: e, onClose: t } = this.props;
          return (0, a.jsx)(S.default, {
            ...this.analyticsLocation,
            children: (0, a.jsxs)(i.ModalRoot, {
              transitionState: e,
              className: O.modalRoot,
              "aria-label": j.default.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS,
              children: [
                (0, a.jsxs)(i.ModalHeader, {
                  separator: !1,
                  className: O.headerContainer,
                  children: [
                    (0, a.jsx)("div", { className: O.art }),
                    (0, a.jsx)("div", {
                      className: O.header,
                      children: (0, a.jsx)(i.H, {
                        className: O.headerText,
                        children:
                          j.default.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS,
                      }),
                    }),
                    (0, a.jsx)(i.ModalCloseButton, {
                      onClick: t,
                      className: O.modalCloseButton,
                    }),
                  ],
                }),
                (0, a.jsxs)(i.ModalContent, {
                  children: [
                    this.renderCustomStatusInput(),
                    this.renderClearAfter(),
                    (0, a.jsx)(i.FormDivider, { className: O.formDivider }),
                    this.renderStatusInput(),
                  ],
                }),
                (0, a.jsxs)(i.ModalFooter, {
                  children: [
                    (0, a.jsx)(i.Button, {
                      onClick: this.handleSubmit,
                      children: j.default.Messages.SAVE,
                    }),
                    (0, a.jsx)(i.Button, {
                      onClick: t,
                      look: i.Button.Looks.LINK,
                      color: O.cancelButton,
                      children: j.default.Messages.CANCEL,
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = {
              emojiInfo:
                null != this.props.customStatus
                  ? this.props.customStatus.emoji
                  : null,
              text:
                null != this.props.customStatus &&
                null != this.props.customStatus.state
                  ? this.props.customStatus.state
                  : "",
              clearAfter: (function () {
                var e, t, s;
                let a = c.CustomStatusSetting.getSetting();
                if (null == a || "" === a.expiresAtMs)
                  return M.ClearAfterValues.TODAY;
                let l = Number(a.expiresAtMs);
                if (isNaN(l)) return M.ClearAfterValues.TODAY;
                let n = new Date(),
                  u = new Date(l);
                if (
                  ((t = n),
                  (s = u),
                  t.getFullYear() !== s.getFullYear() ||
                    t.getMonth() !== s.getMonth() ||
                    t.getDate() !== s.getDate())
                )
                  return M.ClearAfterValues.TODAY;
                let r = Number(l) - Date.now();
                return null !== (e = U.find(e => r <= e)) && void 0 !== e
                  ? e
                  : M.ClearAfterValues.TODAY;
              })(),
              status: (function () {
                let e = c.StatusSetting.getSetting();
                return v.some(t => t.value === e) ? e : i.StatusTypes.ONLINE;
              })(),
            }),
            (this.handleClearStatus = () => {
              this.setState({ emojiInfo: null, text: "" });
            }),
            (this.handleSubmit = e => {
              e.preventDefault(), this.handleSaveStatus();
            }),
            (this.handleStatusChange = e => {
              this.setState({ text: e });
            }),
            (this.handleEmojiChange = e => {
              if (null == e) return;
              let t =
                null != e.id
                  ? { id: e.id, name: e.name, animated: e.animated }
                  : {
                      id: null,
                      name: e.optionallyDiverseSequence,
                      animated: !1,
                    };
              this.setState({ emojiInfo: t });
            }),
            (this.handleChangeClearAfter = e => {
              this.setState({ clearAfter: e });
            }),
            (this.handleChangeStatus = e => {
              this.setState({ status: e });
            }),
            (this.handleSaveStatus = () => {
              let { sourceAnalyticsContext: e, onClose: t } = this.props,
                {
                  emojiInfo: s,
                  text: a,
                  clearAfter: l,
                  status: n,
                } = this.state,
                u = c.StatusSetting.getSetting();
              u !== n && (0, h.default)(n, u, e),
                (0, g.default)(a, s, l, e),
                t();
            }),
            (this.handleKeyPress = e => {
              e.which === N.KeyboardKeys.ENTER && this.handleSaveStatus();
            }),
            (this.renderEmojiPicker = e => {
              let { closePopout: t } = e,
                { onClose: s } = this.props;
              return (0, a.jsx)(d.default, {
                closePopout: t,
                onSelectEmoji: (e, s) => {
                  this.handleEmojiChange(e), s && t();
                },
                pickerIntention: _.EmojiIntention.STATUS,
                onNavigateAway: s,
              });
            });
        }
      }
      var y = r.default.connectStores(
        [m.default, T.default],
        () => {
          let e = T.default.getCurrentUser();
          return (
            u(null != e, "CustomStatusModal: user cannot be null"),
            { customStatus: m.default.getCustomStatusActivity(), user: e }
          );
        },
        { forwardRef: !0 }
      )(E);
    },
  },
]);
//# sourceMappingURL=918728b7f644ef93607e.js.map
