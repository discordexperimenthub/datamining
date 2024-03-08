(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["94626"],
  {
    200008: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          addFavoriteChannel: function () {
            return f;
          },
          removeFavoriteChannel: function () {
            return C;
          },
          setFavoriteChannelNickname: function () {
            return v;
          },
          addFavoriteCategory: function () {
            return h;
          },
          removeFavoriteCategory: function () {
            return p;
          },
          updateFavoriteChannels: function () {
            return E;
          },
          updateFavoriteChannelParent: function () {
            return A;
          },
          toggleFavoriteServerMuted: function () {
            return g;
          },
        }),
        n("222007");
      var a = n("151426"),
        r = n("872173"),
        i = n("42203"),
        o = n("957255"),
        s = n("299039"),
        l = n("379881"),
        u = n("843455");
      function d() {
        let e = l.default.getFavoriteChannels(),
          t = 1;
        for (let n in e) t = Math.max(t, e[n].order);
        return t + 1;
      }
      function c(e) {
        for (let t in e) {
          let n = e[t];
          if (null == n) {
            delete e[t];
            continue;
          }
          if (n.type === a.FavoriteChannelType.CATEGORY) continue;
          let r = i.default.getChannel(t);
          if (
            null == r ||
            (!r.isPrivate() && !o.default.can(u.Permissions.VIEW_CHANNEL, r))
          ) {
            delete e[t];
            continue;
          }
        }
      }
      function f(e, t) {
        let n = l.default.isFavorite(e);
        !n &&
          r.PreloadedUserSettingsActionCreators.updateAsync(
            "favorites",
            n => {
              (n.favoriteChannels[e] = a.FavoriteChannel.create({
                nickname: "",
                type: a.FavoriteChannelType.REFERENCE_ORIGINAL,
                position: d(),
                parentId: null != t ? t : "0",
              })),
                c(n.favoriteChannels);
            },
            r.UserSettingsDelay.FREQUENT_USER_ACTION
          );
      }
      function C(e) {
        let t = l.default.getFavorite(e);
        null != t &&
          r.PreloadedUserSettingsActionCreators.updateAsync(
            "favorites",
            n => {
              if (
                (delete n.favoriteChannels[e],
                t.type === a.FavoriteChannelType.CATEGORY)
              )
                for (let t in n.favoriteChannels)
                  n.favoriteChannels[t].parentId === e &&
                    (n.favoriteChannels[t].parentId = "0");
              c(n.favoriteChannels);
            },
            r.UserSettingsDelay.INFREQUENT_USER_ACTION
          );
      }
      function v(e, t) {
        let n = l.default.isFavorite(e);
        n &&
          r.PreloadedUserSettingsActionCreators.updateAsync(
            "favorites",
            n => {
              n.favoriteChannels[e].nickname = null != t ? t : "";
            },
            r.UserSettingsDelay.INFREQUENT_USER_ACTION
          );
      }
      function h(e) {
        let t = s.default.fromTimestamp(Date.now());
        r.PreloadedUserSettingsActionCreators.updateAsync(
          "favorites",
          n => {
            n.favoriteChannels[t] = a.FavoriteChannel.create({
              nickname: e,
              type: a.FavoriteChannelType.CATEGORY,
              position: d(),
              parentId: "0",
            });
          },
          r.UserSettingsDelay.FREQUENT_USER_ACTION
        );
      }
      function p(e) {
        C(e);
      }
      function E(e) {
        r.PreloadedUserSettingsActionCreators.updateAsync(
          "favorites",
          t => {
            for (let a of e)
              if (
                (null != a.position &&
                  (t.favoriteChannels[a.id].position = a.position),
                void 0 !== a.parent_id)
              ) {
                var n;
                t.favoriteChannels[a.id].parentId =
                  null !== (n = a.parent_id) && void 0 !== n ? n : "0";
              }
          },
          r.UserSettingsDelay.FREQUENT_USER_ACTION
        );
      }
      function A(e, t) {
        r.PreloadedUserSettingsActionCreators.updateAsync(
          "favorites",
          n => {
            n.favoriteChannels[e].parentId = null != t ? t : "0";
          },
          r.UserSettingsDelay.FREQUENT_USER_ACTION
        );
      }
      function g() {
        r.PreloadedUserSettingsActionCreators.updateAsync(
          "favorites",
          e => {
            e.muted = !e.muted;
          },
          r.UserSettingsDelay.INFREQUENT_USER_ACTION
        );
      }
    },
    515680: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        }),
        n("222007");
      var a = n("37983"),
        r = n("884691"),
        i = n("77078"),
        o = n("476765"),
        s = n("200008"),
        l = n("782340"),
        u = n("118930");
      function d(e) {
        let { onClose: t, transitionState: n } = e,
          d = (0, o.useUID)(),
          [c, f] = r.useState("");
        return (0, a.jsx)("form", {
          onSubmit: function (e) {
            e.preventDefault(), (0, s.addFavoriteCategory)(c), t();
          },
          children: (0, a.jsxs)(i.ModalRoot, {
            transitionState: n,
            "aria-labelledby": d,
            children: [
              (0, a.jsxs)(i.ModalContent, {
                children: [
                  (0, a.jsx)(i.Heading, {
                    id: d,
                    className: u.header,
                    variant: "heading-xl/semibold",
                    children: l.default.Messages.CREATE_CATEGORY,
                  }),
                  (0, a.jsx)(i.ModalCloseButton, {
                    onClick: t,
                    className: u.closeButton,
                  }),
                  (0, a.jsx)(i.FormItem, {
                    title: l.default.Messages.CATEGORY_NAME,
                    className: u.name,
                    children: (0, a.jsx)(i.TextInput, {
                      value: c,
                      onChange: f,
                      maxLength: 100,
                      placeholder: l.default.Messages.CATEGORY_NAME_PLACEHOLDER,
                      className: u.inputWrapper,
                      autoFocus: !0,
                    }),
                  }),
                ],
              }),
              (0, a.jsxs)(i.ModalFooter, {
                children: [
                  (0, a.jsx)(i.Button, {
                    type: "submit",
                    disabled: "" === c,
                    children: l.default.Messages.CREATE_CATEGORY,
                  }),
                  (0, a.jsx)(i.Button, {
                    onClick: t,
                    look: i.Button.Looks.LINK,
                    color: i.Button.Colors.PRIMARY,
                    children: l.default.Messages.CANCEL,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    476765: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          uid: function () {
            return o;
          },
          useUID: function () {
            return s;
          },
          UID: function () {
            return l;
          },
        });
      var a = n("995008"),
        r = n.n(a),
        i = n("775560");
      let o = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return r(e);
        },
        s = () => (0, i.useLazyValue)(() => o()),
        l = e => {
          let { children: t } = e;
          return t(s());
        };
    },
  },
]);
//# sourceMappingURL=f84562ce660fb5849d87.js.map
