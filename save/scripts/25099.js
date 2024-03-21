(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["25099"],
  {
    568131: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          fetchLibrary: function () {
            return c;
          },
          createTestModeLibraryApplications: function () {
            return o;
          },
          setActiveLaunchOptionId: function () {
            return l;
          },
        });
      var r = n("872717"),
        a = n("913144"),
        i = n("370999"),
        u = n("271560"),
        d = n("49111");
      async function c() {
        try {
          let t = await (0, u.httpGetWithCountryCodeQuery)(
            { url: d.Endpoints.LIBRARY, oldFormErrors: !0 },
            !1
          );
          a.default.dispatch({
            type: "LIBRARY_FETCH_SUCCESS",
            libraryApplications: t.body,
          });
        } catch (t) {
          a.default.dispatch({ type: "LIBRARY_FETCH_FAIL", error: t });
        }
      }
      async function o(t) {
        let e = t.primarySkuId;
        if (null == e) return;
        let n = await r.HTTP.get({
            url: d.Endpoints.APPLICATION_BRANCH_LIST(t.id),
            oldFormErrors: !0,
          }).then(t => t.body),
          u = n.map(n =>
            i.default.createForTestMode({ id: t.id, skuId: e, branch: n })
          );
        a.default.dispatch({
          type: "LIBRARY_APPLICATIONS_TEST_MODE_ENABLED",
          libraryApplications: u,
        });
      }
      function l(t, e, n) {
        a.default.dispatch({
          type: "LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE",
          applicationId: t,
          branchId: e,
          launchOptionId: n,
        });
      }
    },
    220792: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return c;
          },
        });
      var r = n("37983");
      n("884691");
      var a = n("77078"),
        i = n("272030"),
        u = n("525402"),
        d = n("782340");
      function c(t) {
        let { libraryApplication: e, onPlay: n, onSelect: c } = t,
          o = (0, u.default)(e, n);
        return (0, r.jsx)(a.Menu, {
          navId: "launch-context",
          onClose: i.closeContextMenu,
          "aria-label": d.default.Messages.APPLICATION_ACTIONS_MENU_LABEL,
          onSelect: c,
          children: o,
        });
      }
    },
    525402: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return o;
          },
        });
      var r = n("37983");
      n("884691");
      var a = n("446674"),
        i = n("77078"),
        u = n("568131"),
        d = n("686470"),
        c = n("535974");
      function o(t, e) {
        let n = (0, a.useStateFromStores)([c.default], () =>
            c.default.getLaunchOptions(t.id, t.branchId)
          ),
          o = (0, a.useStateFromStores)([d.default], () =>
            d.default.getActiveLaunchOptionId(t.id, t.branchId)
          );
        return n.length < 2
          ? null
          : n.map(n =>
              (0, r.jsx)(
                i.MenuItem,
                {
                  id: n.id,
                  label: n.name,
                  action: r => {
                    n.id !== o &&
                      u.setActiveLaunchOptionId(t.id, t.branchId, n.id),
                      null == e || e(r);
                  },
                },
                n.id
              )
            );
      }
    },
  },
]);
//# sourceMappingURL=af5c505c7e68388b87a3.js.map
