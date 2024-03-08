(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["28145"],
  {
    533007: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          setDevice: function () {
            return s;
          },
          ignoreDevice: function () {
            return i;
          },
          neverShowModal: function () {
            return d;
          },
        });
      var a = n("913144");
      function s(e, t, n) {
        a.default.dispatch({
          type: "CONNECTED_DEVICE_SET",
          displayName: e,
          connectedDevicePreference: t,
          location: n,
        });
      }
      function i(e) {
        a.default.dispatch({ type: "CONNECTED_DEVICE_IGNORE", displayName: e });
      }
      function d() {
        a.default.dispatch({ type: "CONNECTED_DEVICE_NEVER_SHOW_MODAL" });
      }
    },
    134064: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var a,
        s,
        i,
        d = n("37983"),
        o = n("884691"),
        c = n("77078"),
        l = n("533007"),
        r = n("145131"),
        E = n("599110"),
        D = n("49111"),
        T = n("782340"),
        N = n("402488");
      ((a = s || (s = {})).CERTIFIED = "New Audio Device Detected - Certified"),
        (a.NOT_CERTIFIED = "New Audio Device Detected - Not Certified"),
        (i = class extends o.Component {
          track() {
            let { certifiedDeviceMetadata: e, device: t } = this.props;
            E.default.track(D.AnalyticEvents.OPEN_MODAL, {
              type:
                null != e
                  ? "New Audio Device Detected - Certified"
                  : "New Audio Device Detected - Not Certified",
              device_name:
                null != e
                  ? "".concat(e.vendor.name, " ").concat(e.model.name)
                  : t.displayName,
            });
          }
          componentDidMount() {
            this.track();
          }
          componentDidUpdate(e) {
            let { device: t } = this.props;
            t.displayName !== e.device.displayName && this.track();
          }
          renderBody() {
            let e;
            let { device: t, certifiedDeviceMetadata: n } = this.props,
              { devicePreference: a } = this.state;
            switch (t.type) {
              case D.ConnectedDeviceType.INPUT:
                e =
                  null != n
                    ? T.default.Messages.CERTIFIED_DEVICE_RECOMMENDATION_AUDIO_INPUT_BODY.format(
                        { vendorName: n.vendor.name, modelName: n.model.name }
                      )
                    : T.default.Messages.CONNECTED_DEVICE_DETECTED_INPUT_BODY.format(
                        { name: t.displayName }
                      );
                break;
              case D.ConnectedDeviceType.OUTPUT:
                e =
                  null != n
                    ? T.default.Messages.CERTIFIED_DEVICE_RECOMMENDATION_AUDIO_OUTPUT_BODY.format(
                        { vendorName: n.vendor.name, modelName: n.model.name }
                      )
                    : T.default.Messages.CONNECTED_DEVICE_DETECTED_OUTPUT_BODY.format(
                        { name: t.displayName }
                      );
                break;
              default:
                e = (0, d.jsxs)(o.Fragment, {
                  children: [
                    null != n
                      ? T.default.Messages.CERTIFIED_DEVICE_RECOMMENDATION_AUDIO_INPUT_AND_OUTPUT_BODY.format(
                          { vendorName: n.vendor.name, modelName: n.model.name }
                        )
                      : T.default.Messages.CONNECTED_DEVICE_DETECTED_INPUT_AND_OUTPUT_BODY.format(
                          { name: t.displayName }
                        ),
                    (0, d.jsx)(c.RadioGroup, {
                      value: a,
                      className: N.options,
                      onChange: this.handleConnectedDeviceType,
                      options: [
                        {
                          name: T.default.Messages
                            .CONNECTED_DEVICE_DETECTED_OPTION_INPUT_AND_OUTPUT,
                          value: D.ConnectedDeviceType.INPUT_AND_OUTPUT,
                        },
                        {
                          name: T.default.Messages
                            .CONNECTED_DEVICE_DETECTED_OPTION_INPUT,
                          value: D.ConnectedDeviceType.INPUT,
                        },
                        {
                          name: T.default.Messages
                            .CONNECTED_DEVICE_DETECTED_OPTION_OUTPUT,
                          value: D.ConnectedDeviceType.OUTPUT,
                        },
                      ],
                    }),
                  ],
                });
            }
            return (0, d.jsxs)(
              o.Fragment,
              {
                children: [
                  e,
                  (0, d.jsx)(c.Button, {
                    className: N.neverShow,
                    look: c.Button.Looks.LINK,
                    color: c.Button.Colors.LINK,
                    onClick: this.neverShow,
                    children: T.default.Messages.DONT_SHOW_AGAIN,
                  }),
                ],
              },
              t.displayName
            );
          }
          render() {
            let { certifiedDeviceMetadata: e, transitionState: t } = this.props,
              n =
                null != e
                  ? T.default.Messages.CERTIFIED_DEVICE_RECOMMENDATION_TITLE
                  : T.default.Messages.CONNECTED_DEVICE_DETECTED_TITLE;
            return (0, d.jsxs)(c.ModalRoot, {
              transitionState: t,
              "aria-label": n,
              children: [
                (0, d.jsx)(c.ModalHeader, {
                  separator: !1,
                  children: (0, d.jsx)(c.Heading, {
                    variant: "heading-lg/semibold",
                    children: n,
                  }),
                }),
                (0, d.jsx)(c.ModalContent, {
                  children: (0, d.jsx)(c.Text, {
                    variant: "text-md/normal",
                    children: this.renderBody(),
                  }),
                }),
                (0, d.jsx)(c.ModalFooter, {
                  children: (0, d.jsxs)(r.default, {
                    justify: r.default.Justify.END,
                    children: [
                      (0, d.jsx)(c.Button, {
                        color: c.Button.Colors.PRIMARY,
                        onClick: this.cancel,
                        className: N.cancelButton,
                        children:
                          T.default.Messages
                            .CONNECTED_DEVICE_DETECTED_CANCEL_BUTTON,
                      }),
                      (0, d.jsx)(c.Button, {
                        onClick: this.confirm,
                        children:
                          T.default.Messages
                            .CONNECTED_DEVICE_DETECTED_CONFIRM_BUTTON,
                      }),
                    ],
                  }),
                }),
              ],
            });
          }
          constructor(e) {
            super(e),
              (this.confirm = () => {
                let { device: e, onClose: t } = this.props,
                  { devicePreference: n } = this.state;
                null != n &&
                  (l.setDevice(
                    e.displayName,
                    n,
                    "New Audio Device Detected Modal"
                  ),
                  t());
              }),
              (this.cancel = () => {
                let { device: e, onClose: t } = this.props;
                l.ignoreDevice(e.displayName), t();
              }),
              (this.neverShow = () => {
                let { certifiedDeviceMetadata: e, onClose: t } = this.props;
                l.neverShowModal(),
                  t(),
                  E.default.track(D.AnalyticEvents.MODAL_DISMISSED, {
                    type:
                      null != e
                        ? "New Audio Device Detected - Certified"
                        : "New Audio Device Detected - Not Certified",
                    dismiss_type: "permanent",
                  });
              }),
              (this.handleConnectedDeviceType = e => {
                let { value: t } = e;
                this.setState({ devicePreference: t });
              }),
              (this.state = {
                devicePreference:
                  null != e.device
                    ? (function (e) {
                        switch (e) {
                          case D.ConnectedDeviceType.INPUT:
                            return D.ConnectedDevicePreference.INPUT;
                          case D.ConnectedDeviceType.OUTPUT:
                            return D.ConnectedDevicePreference.OUTPUT;
                          case D.ConnectedDeviceType.INPUT_AND_OUTPUT:
                            return D.ConnectedDevicePreference.INPUT_AND_OUTPUT;
                          default:
                            return null;
                        }
                      })(e.device.type)
                    : null,
              });
          }
        });
    },
  },
]);
//# sourceMappingURL=c0d3ff4aea6ac78c1c6e.js.map
