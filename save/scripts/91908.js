(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["91908"],
  {
    426319: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return S;
          },
        }),
        s("222007");
      var l = s("37983"),
        n = s("884691"),
        a = s("77078"),
        o = s("363658"),
        i = s("161454"),
        d = s("145131"),
        r = s("599110"),
        u = s("49111"),
        E = s("782340"),
        h = s("890957");
      class c extends n.Component {
        componentDidMount() {
          let { pid: e } = this.props,
            t = null != e ? i.default.getGameForPID(e) : null;
          r.default.track(u.AnalyticEvents.OPEN_MODAL, {
            type: "Elevated Permissions Sound",
            application_id: null != t ? t.id : null,
            application_name: null != t ? t.name : null,
            game_id: null != t ? t.id : null,
          });
        }
        render() {
          return (0, l.jsxs)(a.ModalRoot, {
            transitionState: this.props.transitionState,
            "aria-label": E.default.Messages.ELEVATED_PERMISSIONS_SOUND_TITLE,
            children: [
              (0, l.jsxs)(a.ModalHeader, {
                justify: d.default.Justify.BETWEEN,
                separator: !1,
                children: [
                  (0, l.jsx)(a.Heading, {
                    variant: "heading-lg/semibold",
                    children:
                      E.default.Messages.ELEVATED_PERMISSIONS_SOUND_TITLE,
                  }),
                  (0, l.jsx)(a.ModalCloseButton, { onClick: this.handleClose }),
                ],
              }),
              (0, l.jsx)(a.ModalContent, {
                children: (0, l.jsx)(a.Text, {
                  tag: "strong",
                  variant: "text-md/normal",
                  className: h.marginBottom20,
                  children: E.default.Messages.ELEVATED_PERMISSIONS_SOUND_BODY,
                }),
              }),
              (0, l.jsxs)(a.ModalFooter, {
                children: [
                  (0, l.jsx)(a.Button, {
                    onClick: this.handleRequestElevated,
                    children:
                      E.default.Messages
                        .ELEVATED_PERMISSIONS_SOUND_REQUEST_ACCESS_BUTTON,
                  }),
                  (0, l.jsx)(a.Button, {
                    look: a.Button.Looks.LINK,
                    color: a.Button.Colors.PRIMARY,
                    onClick: this.handleStreamWithoutSound,
                    children:
                      E.default.Messages
                        .ELEVATED_PERMISSIONS_SOUND_NO_SOUND_BUTTON,
                  }),
                ],
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this.handleClose = () => {
              let { onClose: e } = this.props;
              null == e || e();
            }),
            (this.handleStreamWithoutSound = () => {
              let { handleStream: e, onClose: t, pid: s } = this.props;
              o.default.continueNonelevatedProcess(s), e(), t();
            }),
            (this.handleRequestElevated = () => {
              let { handleStream: e, onClose: t, pid: s } = this.props;
              o.default.requestElevatedProcess(s), e(), t();
            });
        }
      }
      var S = c;
    },
  },
]);
//# sourceMappingURL=989eda3d14fc2018c14d.js.map
