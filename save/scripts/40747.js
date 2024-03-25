(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["40747"],
  {
    979897: function (e, t, n) {
      (e = n.nmd(e)), n("854508");
      var o =
        o ||
        (function (e) {
          "use strict";
          if (
            !(
              "undefined" != typeof navigator &&
              /MSIE [1-9]\./.test(navigator.userAgent)
            )
          ) {
            var t = e.document,
              n = function () {
                return e.URL || e.webkitURL || e;
              },
              o = t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
              r = "download" in o,
              a = function (e) {
                var t = new MouseEvent("click");
                e.dispatchEvent(t);
              },
              i = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
              u = e.webkitRequestFileSystem,
              s = e.requestFileSystem || u || e.mozRequestFileSystem,
              l = function (t) {
                (e.setImmediate || e.setTimeout)(function () {
                  throw t;
                }, 0);
              },
              d = "application/octet-stream",
              c = 0,
              f = function (e) {
                setTimeout(function () {
                  "string" == typeof e ? n().revokeObjectURL(e) : e.remove();
                }, 4e4);
              },
              p = function (e, t, n) {
                for (var o = (t = [].concat(t)).length; o--; ) {
                  var r = e["on" + t[o]];
                  if ("function" == typeof r)
                    try {
                      r.call(e, n || e);
                    } catch (e) {
                      l(e);
                    }
                }
              },
              O = function (e) {
                return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                  e.type
                )
                  ? new Blob(["\xef\xbb\xbf", e], { type: e.type })
                  : e;
              },
              h = function (t, l, h) {
                !h && (t = O(t));
                var v,
                  D,
                  S = this,
                  y = t.type,
                  _ = !1,
                  g = function () {
                    p(S, "writestart progress write writeend".split(" "));
                  },
                  b = function () {
                    if (D && i && "undefined" != typeof FileReader) {
                      var o = new FileReader();
                      (o.onloadend = function () {
                        var e = o.result;
                        (D.location.href =
                          "data:attachment/file" + e.slice(e.search(/[,;]/))),
                          (S.readyState = S.DONE),
                          g();
                      }),
                        o.readAsDataURL(t),
                        (S.readyState = S.INIT);
                      return;
                    }
                    (_ || !v) && (v = n().createObjectURL(t)),
                      D
                        ? (D.location.href = v)
                        : void 0 === e.open(v, "_blank") &&
                          i &&
                          (e.location.href = v),
                      (S.readyState = S.DONE),
                      g(),
                      f(v);
                  },
                  N = function (e) {
                    return function () {
                      if (S.readyState !== S.DONE)
                        return e.apply(this, arguments);
                    };
                  },
                  m = { create: !0, exclusive: !1 };
                if (((S.readyState = S.INIT), !l && (l = "download"), r)) {
                  (v = n().createObjectURL(t)),
                    setTimeout(function () {
                      (o.href = v),
                        (o.download = l),
                        a(o),
                        g(),
                        f(v),
                        (S.readyState = S.DONE);
                    });
                  return;
                }
                if (
                  (e.chrome &&
                    y &&
                    y !== d &&
                    ((t = (t.slice || t.webkitSlice).call(t, 0, t.size, d)),
                    (_ = !0)),
                  u && "download" !== l && (l += ".download"),
                  (y === d || u) && (D = e),
                  !s)
                ) {
                  b();
                  return;
                }
                (c += t.size),
                  s(
                    e.TEMPORARY,
                    c,
                    N(function (e) {
                      e.root.getDirectory(
                        "saved",
                        m,
                        N(function (e) {
                          var n = function () {
                            e.getFile(
                              l,
                              m,
                              N(function (e) {
                                e.createWriter(
                                  N(function (n) {
                                    (n.onwriteend = function (t) {
                                      (D.location.href = e.toURL()),
                                        (S.readyState = S.DONE),
                                        p(S, "writeend", t),
                                        f(e);
                                    }),
                                      (n.onerror = function () {
                                        var e = n.error;
                                        e.code !== e.ABORT_ERR && b();
                                      }),
                                      "writestart progress write abort"
                                        .split(" ")
                                        .forEach(function (e) {
                                          n["on" + e] = S["on" + e];
                                        }),
                                      n.write(t),
                                      (S.abort = function () {
                                        n.abort(), (S.readyState = S.DONE);
                                      }),
                                      (S.readyState = S.WRITING);
                                  }),
                                  b
                                );
                              }),
                              b
                            );
                          };
                          e.getFile(
                            l,
                            { create: !1 },
                            N(function (e) {
                              e.remove(), n();
                            }),
                            N(function (e) {
                              e.code === e.NOT_FOUND_ERR ? n() : b();
                            })
                          );
                        }),
                        b
                      );
                    }),
                    b
                  );
              },
              v = h.prototype;
            return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob
              ? function (e, t, n) {
                  return (
                    !n && (e = O(e)),
                    navigator.msSaveOrOpenBlob(e, t || "download")
                  );
                }
              : ((v.abort = function () {
                  (this.readyState = this.DONE), p(this, "abort");
                }),
                (v.readyState = v.INIT = 0),
                (v.WRITING = 1),
                (v.DONE = 2),
                (v.error =
                  v.onwritestart =
                  v.onprogress =
                  v.onwrite =
                  v.onabort =
                  v.onerror =
                  v.onwriteend =
                    null),
                function (e, t, n) {
                  return new h(e, t, n);
                });
          }
        })(
          ("undefined" != typeof self && self) ||
            ("undefined" != typeof window && window) ||
            this.content
        );
      void 0 !== e && e.exports
        ? (e.exports.saveAs = o)
        : "undefined" != typeof define &&
          null !== define &&
          null !== define.amd &&
          define([], function () {
            return o;
          });
    },
    901582: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var o,
        r,
        a = n("37983"),
        i = n("884691"),
        u = n("748820"),
        s = n("599110"),
        l = n("117362"),
        d = n("49111");
      ((o = class extends i.Component {
        renderProvider(e) {
          var t, n;
          let {
              section: o,
              page: r,
              object: i,
              objectType: u,
              children: l,
            } = this.props,
            d = this.mergeLocation(e.location, this.getLocation(r, o, i, u)),
            c = this.getContext(
              d,
              null !== (t = this._loadDate) && void 0 !== t ? t : e.loadDate,
              null !== (n = this._loadId) && void 0 !== n ? n : e.loadId
            );
          return (0, a.jsx)(s.AnalyticsContext.Provider, {
            value: c,
            children: l,
          });
        }
        render() {
          let { context: e } = this.props;
          return null != e
            ? this.renderProvider(e)
            : (0, a.jsx)(s.AnalyticsContext.Consumer, {
                children: e => this.renderProvider(e),
              });
        }
        constructor(e) {
          super(e),
            (this._loadId = null),
            (this._loadDate = this.props.root ? Date.now() : null),
            (this.getLocation = (0, l.cachedFunction)((e, t, n, o) => {
              let r = {};
              return (
                null != e && (r.page = e),
                null != t && (r.section = t),
                null != n && (r.object = n),
                null != o && (r.objectType = o),
                r
              );
            })),
            (this.mergeLocation = (0, l.cachedFunction)((e, t) => ({
              ...e,
              ...t,
            }))),
            (this.getContext = (0, l.cachedFunction)((e, t, n) => ({
              location: e,
              loadDate: t,
              loadId: n,
            }))),
            null != e.loadId
              ? (this._loadId = e.loadId)
              : e.root && (this._loadId = (0, u.v4)());
        }
      }).Pages = d.AnalyticsPages),
        (o.Sections = d.AnalyticsSections),
        (o.Objects = d.AnalyticsObjects),
        (o.ObjectTypes = d.AnalyticsObjectTypes),
        (o.defaultProps = { root: !1 }),
        (r = o);
    },
    838446: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var o = n("37983");
      n("884691");
      var r = n("901582");
      function a(e, t) {
        return function (n) {
          return (0, o.jsx)(r.default, {
            page: t.page,
            section: t.section,
            object: t.object,
            objectType: t.objectType,
            children: (0, o.jsx)(e, { ...n }),
          });
        };
      }
    },
    158534: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var o = n("37983");
      n("884691");
      var r = n("685665");
      function a(e, t) {
        return function (n) {
          let { analyticsLocations: a } = (0, r.default)(t);
          return (0, o.jsx)(r.AnalyticsLocationProvider, {
            value: a,
            children: (0, o.jsx)(e, { ...n }),
          });
        };
      }
    },
    632507: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return g;
          },
        }),
        n("70102");
      var o = n("37983"),
        r = n("884691"),
        a = n("979897"),
        i = n("446674"),
        u = n("77078"),
        s = n("404118"),
        l = n("272030"),
        d = n("838446"),
        c = n("158534"),
        f = n("812204"),
        p = n("957255"),
        O = n("773336"),
        h = n("50885"),
        v = n("520497"),
        D = n("112646"),
        S = n("846325"),
        y = n("49111"),
        _ = n("782340"),
        g = (0, c.default)(
          (0, d.default)(
            function (e) {
              let {
                  soundGuild: t,
                  sound: d,
                  activeCallGuildId: c,
                  onSelect: f,
                } = e,
                y = (function (e, t) {
                  let { canManageGuildExpressions: a } = (0,
                    i.useStateFromStoresObject)(
                      [p.default],
                      () =>
                        null == t
                          ? { canManageGuildExpressions: !1 }
                          : p.default.getGuildPermissionProps(t),
                      [t]
                    ),
                    s = r.useCallback(() => {
                      if ((null == t ? void 0 : t.id) == null) return null;
                      (0, u.openModalLazy)(async () => {
                        let { default: r } = await n
                          .el("823749")
                          .then(n.bind(n, "823749"));
                        return n =>
                          (0, o.jsx)(r, {
                            ...n,
                            existingSound: e,
                            guildId: t.id,
                          });
                      });
                    }, [t, e]);
                  return a
                    ? (0, o.jsx)(
                        u.MenuItem,
                        {
                          id: "edit-soundboard-sound",
                          label:
                            _.default.Messages
                              .SOUNDBOARD_CONTEXT_MENU_EDIT_SOUND,
                          action: s,
                        },
                        "edit-soundboard-sound"
                      )
                    : null;
                })(d, t),
                g = (function (e) {
                  let { soundId: t } = e,
                    n = r.useCallback(async () => {
                      try {
                        let e = (0, v.default)(t),
                          n = await fetch(e),
                          o = await n.blob(),
                          r = (function (e) {
                            switch (e.type) {
                              case "audio/mpeg":
                              case "audio/mpeg3":
                                return "mp3";
                              case "audio/ogg":
                                return "ogg";
                              default:
                                throw Error("unable to determine file type");
                            }
                          })(o),
                          i = "".concat(t, ".").concat(r);
                        O.isPlatformEmbedded
                          ? await h.default.saveFile(e, i)
                          : (0, a.saveAs)(o, i);
                      } catch (e) {
                        s.default.show({
                          title:
                            _.default.Messages
                              .SOUNDBOARD_DOWNLOAD_SOUND_FAILED_TITLE,
                          body: _.default.Messages
                            .SOUNDBOARD_DOWNLOAD_SOUND_FAILED_BODY,
                          confirmText: _.default.Messages.OKAY,
                        });
                      }
                    }, [t]);
                  return e.guildId === S.DEFAULT_SOUND_GUILD_ID
                    ? null
                    : (0, o.jsx)(
                        u.MenuItem,
                        {
                          id: "download-soundboard-sound",
                          label:
                            _.default.Messages
                              .SOUNDBOARD_CONTEXT_MENU_DOWNLOAD_SOUND,
                          action: n,
                        },
                        "download-soundboard-sound"
                      );
                })(d),
                b = (0, D.default)(d, c);
              return (0, o.jsx)(u.Menu, {
                navId: "sound-button-context",
                onClose: l.closeContextMenu,
                "aria-label": _.default.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: f,
                children: (0, o.jsxs)(u.MenuGroup, { children: [y, b, g] }),
              });
            },
            { object: y.AnalyticsObjects.CONTEXT_MENU }
          ),
          [f.default.CONTEXT_MENU, f.default.SOUNDBOARD_BUTTON]
        );
    },
    112646: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var o = n("37983");
      n("884691");
      var r = n("446674"),
        a = n("77078"),
        i = n("685665"),
        u = n("697218"),
        s = n("476765"),
        l = n("719923"),
        d = n("78581"),
        c = n("846325"),
        f = n("782340");
      function p(e, t) {
        let { analyticsLocations: n } = (0, i.default)(),
          p = (0, r.useStateFromStores)([u.default], () =>
            u.default.getCurrentUser()
          ),
          O = (0, s.useUID)(),
          h = (0, s.useUID)();
        return null != t && l.default.canUseCustomCallSounds(p)
          ? (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)(a.MenuItem, {
                  id: O,
                  label: f.default.Messages.CALL_SOUNDS_CONTEXT_MENU_GUILD,
                  action: () => (0, d.updateCustomJoinSound)(t, e, n),
                }),
                (0, o.jsx)(a.MenuItem, {
                  id: h,
                  label: f.default.Messages.CALL_SOUNDS_CONTEXT_MENU_GLOBAL,
                  action: () =>
                    (0, d.updateCustomJoinSound)(
                      c.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID,
                      e,
                      n
                    ),
                }),
              ],
            })
          : null;
      }
    },
    476765: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          uid: function () {
            return i;
          },
          useUID: function () {
            return u;
          },
          UID: function () {
            return s;
          },
        });
      var o = n("995008"),
        r = n.n(o),
        a = n("775560");
      let i = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return r(e);
        },
        u = () => (0, a.useLazyValue)(() => i()),
        s = e => {
          let { children: t } = e;
          return t(u());
        };
    },
  },
]);
//# sourceMappingURL=9bdd80350abedc997d0a.js.map
