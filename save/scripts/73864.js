(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["73864"],
  {
    884745: function (e, s, a) {
      var t = a("700718");
      e.exports = function (e) {
        return e && e.length ? t(e) : [];
      };
    },
    864984: function (e, s, a) {
      "use strict";
      e.exports = a.p + "d3735abaf143d4749cfd.svg";
    },
    797491: function (e, s, a) {
      "use strict";
      e.exports = a.p + "b3fb8c64a6eb47bf8a0d.svg";
    },
    369684: function (e, s, a) {
      "use strict";
      e.exports = a.p + "0e62a9c9a822a207e2ef.svg";
    },
    76244: function (e, s, a) {
      "use strict";
      e.exports = a.p + "667b49e32583559c2cfb.svg";
    },
    492094: function (e, s, a) {
      "use strict";
      e.exports = a.p + "a5049a603d8eebb8d728.svg";
    },
    300933: function (e, s, a) {
      "use strict";
      e.exports = a.p + "15253e2e8b246b57f156.svg";
    },
    941089: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return h;
          },
        }),
        a("222007");
      var t = a("37983"),
        l = a("884691"),
        i = a("446674"),
        r = a("77078"),
        d = a("716241"),
        n = a("592407"),
        o = a("900938"),
        c = a("610903"),
        u = a("476765"),
        E = a("283167"),
        S = a("495446"),
        R = a("535732"),
        m = a("95555"),
        _ = a("858555"),
        x = a("149632"),
        C = a("447621"),
        p = a("49111"),
        I = a("782340"),
        g = a("607016"),
        T = a("175717"),
        h = e => {
          let { transitionState: s, onClose: h } = e,
            { guild: f, guildMetadata: v } = (0, i.useStateFromStoresObject)(
              [o.default],
              () => o.default.getProps()
            ),
            D = (0, u.useUID)(),
            [N, O] = l.useState(!1),
            [A, M] = l.useState(0),
            [V, j] = l.useState(!1);
          if (
            (l.useEffect(() => {
              d.default.trackWithMetadata(p.AnalyticEvents.OPEN_MODAL, {
                type: p.AnalyticsSections.DISCOVERY_SETUP_SUCCESS_MODAL,
              });
            }, []),
            null == f)
          )
            return null;
          let y = (0, t.jsx)(R.default, { guild: f, headerId: D }),
            L = (0, t.jsx)(S.default, {
              guild: f,
              guildMetadata: v,
              headerId: D,
            }),
            k = (0, t.jsx)(_.default, {
              guild: f,
              guildMetadata: v,
              headerId: D,
            }),
            Y = (0, t.jsx)(m.default, {
              guild: f,
              headerId: D,
              onAgreedChange: j,
            }),
            G = (0, t.jsx)("img", {
              alt: "",
              src: T,
              className: g.footerImage,
              width: 240,
            }),
            b = async () => {
              if (0 === A) {
                O(!0);
                try {
                  await n.default.saveGuild(
                    f.id,
                    { description: f.description },
                    { isForDiscovery: !0, throwErr: !0 }
                  ),
                    M(A + 1),
                    (0, x.trackFlowAnalytics)(
                      x.DiscoverySetupModalSteps.DESCRIPTION,
                      x.DiscoverySetupModalSteps.CATEGORIES,
                      f.id
                    );
                } catch (e) {}
              } else if (1 === A)
                M(A + 1),
                  (0, x.trackFlowAnalytics)(
                    x.DiscoverySetupModalSteps.CATEGORIES,
                    x.DiscoverySetupModalSteps.TAGS,
                    f.id
                  );
              else if (2 === A) {
                O(!0);
                try {
                  await (0, E.saveGuildMetadata)({
                    guildId: f.id,
                    primaryCategoryId: v.primaryCategoryId,
                    keywords: v.keywords,
                    emojiDiscoverabilityEnabled: v.emojiDiscoverabilityEnabled,
                    partnerActionedTimestamp: v.partnerActionedTimestamp,
                    partnerApplicationTimestamp: v.partnerApplicationTimestamp,
                    isPublished: v.isPublished,
                    reasonsToJoin: v.reasonsToJoin,
                    socialLinks: v.socialLinks,
                    about: v.about,
                  }),
                    M(A + 1),
                    (0, x.trackFlowAnalytics)(
                      x.DiscoverySetupModalSteps.TAGS,
                      x.DiscoverySetupModalSteps.AGREE_TO_RULES,
                      f.id
                    );
                } catch (e) {}
              }
              O(!1);
            },
            P = [
              {
                modalContent: y,
                disableNextStep: null == f.description,
                overviewTitle: I.default.Messages.SERVER_DISCOVERY_DESCRIPTION,
              },
              {
                modalContent: L,
                disableNextStep:
                  v.primaryCategoryId === C.DEFAULT_DISCOVERY_CATEGORY_ID ||
                  null == v.primaryCategoryId,
                overviewTitle: I.default.Messages.SERVER_DISCOVERY_CATEGORY,
              },
              {
                modalContent: k,
                disableNextStep: 0 === v.keywords.length,
                overviewTitle: I.default.Messages.SERVER_DISCOVERY_TAGS,
              },
              {
                modalContent: Y,
                disableNextStep: !V,
                overviewTitle:
                  I.default.Messages.SERVER_DISCOVERY_AGREE_TO_RULES,
              },
            ];
          return (0, t.jsx)(c.default, {
            stepData: P,
            title: I.default.Messages.SERVER_DISCOVERY_SETUP_SIDEBAR_HEADLINE,
            transitionState: s,
            onClose: h,
            completeButtonText: I.default.Messages.ALL_DONE,
            onNextPressed: b,
            onPrevPressed: () => {
              M(A - 1);
            },
            forceStep: A,
            onComplete: () => {
              let e = f.features;
              !f.hasFeature(p.GuildFeatures.DISCOVERABLE) &&
                e.add(p.GuildFeatures.DISCOVERABLE),
                n.default.saveGuild(f.id, {
                  features: e,
                  description: f.description,
                }),
                (0, r.openModalLazy)(async () => {
                  let { default: e } = await a
                    .el("502155")
                    .then(a.bind(a, "502155"));
                  return s => (0, t.jsx)(e, { ...s, guild: f });
                });
            },
            overviewFooter: G,
            submitting: N,
            sequencerClassName: g.container,
          });
        };
    },
    495446: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return R;
          },
        });
      var t = a("37983");
      a("884691");
      var l = a("414456"),
        i = a.n(l),
        r = a("77078"),
        d = a("26991"),
        n = a("414943"),
        o = a("283167"),
        c = a("868246"),
        u = a("447621"),
        E = a("782340"),
        S = a("607016"),
        R = e => {
          let { guild: s, guildMetadata: a, headerId: l } = e,
            R = c.default.getPrimaryCategories().map(e => {
              let { categoryId: s, name: a } = e;
              return { value: s, label: a };
            });
          return (0, t.jsxs)("div", {
            className: S.container,
            children: [
              (0, t.jsxs)("div", {
                className: S.content,
                children: [
                  (0, t.jsx)("div", { className: i(S.stepImage, S.tagImage) }),
                  (0, t.jsx)(r.Heading, {
                    variant: "heading-xl/semibold",
                    className: S.header,
                    id: l,
                    children: E.default.Messages.SERVER_DISCOVERY_CATEGORY,
                  }),
                  (0, t.jsx)(r.Text, {
                    color: "none",
                    variant: "text-md/normal",
                    className: S.headerCaption,
                    children:
                      E.default.Messages.SERVER_DISCOVERY_SEARCH_SUBHEADING,
                  }),
                ],
              }),
              (0, t.jsxs)(r.FormSection, {
                className: S.form,
                children: [
                  (0, t.jsx)(r.FormTitle, {
                    required: !0,
                    children: E.default.Messages.SERVER_DISCOVERY_CATEGORY,
                  }),
                  (0, t.jsx)(r.FormText, {
                    type: r.FormTextTypes.DESCRIPTION,
                    className: S.description,
                    children:
                      E.default.Messages
                        .SERVER_DISCOVERY_CATEGORY_INPUT_SUBLABEL,
                  }),
                  (0, t.jsx)(n.default, {
                    value:
                      a.primaryCategoryId === u.DEFAULT_DISCOVERY_CATEGORY_ID
                        ? null
                        : a.primaryCategoryId,
                    placeholder: E.default.Messages.SELECT,
                    searchable: !0,
                    clearable: !1,
                    options: R,
                    onChange: e => {
                      var a;
                      (null == s ? void 0 : s.id) != null &&
                        o.updateGuildPrimaryCategory(
                          null == s ? void 0 : s.id,
                          null !== (a = null == e ? void 0 : e.value) &&
                            void 0 !== a
                            ? a
                            : u.DEFAULT_DISCOVERY_CATEGORY_ID
                        );
                    },
                    maxMenuHeight: 250,
                  }),
                ],
              }),
              (0, t.jsxs)(r.FormSection, {
                className: S.form,
                children: [
                  (0, t.jsx)(r.FormTitle, {
                    children:
                      E.default.Messages
                        .SERVER_DISCOVERY_SUBCATEGORY_INPUT_LABEL,
                  }),
                  (0, t.jsx)(r.FormText, {
                    type: r.FormTextTypes.DESCRIPTION,
                    className: S.description,
                    children:
                      E.default.Messages
                        .SERVER_DISCOVERY_SUBCATEGORY_INPUT_SUBLABEL,
                  }),
                  (0, t.jsx)(d.default, {
                    guild: s,
                    guildMetadata: a,
                    menuPlacement: n.default.MenuPlacements.TOP,
                  }),
                ],
              }),
            ],
          });
        };
    },
    535732: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return R;
          },
        });
      var t = a("37983");
      a("884691");
      var l = a("414456"),
        i = a.n(l),
        r = a("446674"),
        d = a("77078"),
        n = a("592407"),
        o = a("900938"),
        c = a("149632"),
        u = a("49111"),
        E = a("782340"),
        S = a("607016"),
        R = e => {
          var s;
          let { guild: a, headerId: l } = e,
            R = (0, r.useStateFromStores)(
              [o.default],
              () => "description" in o.default.getErrors()
            ),
            m = R
              ? E.default.Messages.SERVER_DISCOVERY_BLOCKED_WORD_LEARN_MORE.format(
                  {
                    onLearnMoreClick: () => {
                      (0, c.navigateToAndTrackHelpCenterClick)({
                        articleId:
                          u.HelpdeskArticles.SERVER_DISCOVERY_GUIDELINES,
                        guildId: a.id,
                        modalStep: c.DiscoverySetupModalSteps.DESCRIPTION,
                      });
                    },
                  }
                )
              : null;
          return (0, t.jsxs)("div", {
            className: S.container,
            children: [
              (0, t.jsxs)("div", {
                className: S.content,
                children: [
                  (0, t.jsx)("div", {
                    className: i(S.stepImage, S.pencilImage),
                  }),
                  (0, t.jsx)(d.Heading, {
                    variant: "heading-xl/semibold",
                    className: S.header,
                    id: l,
                    children:
                      E.default.Messages
                        .SERVER_DISCOVERY_DESCRIPTION_PAGE_HEADER,
                  }),
                  (0, t.jsx)(d.Text, {
                    color: "none",
                    variant: "text-md/normal",
                    className: S.headerCaption,
                    children:
                      E.default.Messages
                        .SERVER_DISCOVERY_DESCRIPTION_PAGE_SUBHEADING,
                  }),
                ],
              }),
              (0, t.jsxs)(d.FormSection, {
                className: S.form,
                children: [
                  (0, t.jsx)(d.FormTitle, {
                    required: !0,
                    children: E.default.Messages.FORM_LABEL_SERVER_DESCRIPTION,
                  }),
                  (0, t.jsx)(d.FormText, {
                    type: d.FormTextTypes.DESCRIPTION,
                    className: S.description,
                    children:
                      E.default.Messages
                        .SERVER_DISCOVERY_SERVER_DESCRIPTION_INPUT_SUBLABEL,
                  }),
                  (0, t.jsx)(d.TextArea, {
                    autoFocus: !0,
                    value:
                      null !== (s = a.description) && void 0 !== s ? s : "",
                    placeholder: E.default.Messages.SERVER_DESCIPTION_EMPTY,
                    onChange: e => {
                      n.default.updateGuild({ description: e });
                    },
                    maxLength: 120,
                    className: S.textArea,
                    error: m,
                  }),
                ],
              }),
            ],
          });
        };
    },
    95555: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return E;
          },
        }),
        a("222007");
      var t = a("37983"),
        l = a("884691"),
        i = a("414456"),
        r = a.n(i),
        d = a("77078"),
        n = a("149632"),
        o = a("49111"),
        c = a("782340"),
        u = a("607016"),
        E = e => {
          let { headerId: s, guild: a, onAgreedChange: i } = e,
            [E, S] = l.useState(!1),
            [R, m] = l.useState(!1),
            [_, x] = l.useState(!1);
          l.useEffect(() => {
            E && R && _ ? i(!0) : i(!1);
          }, [E, R, _, i]);
          let C =
            c.default.Messages.SERVER_DISCOVERY_RULES_COMPLY_GUIDELINES.format({
              onCommunityGuidelinesClick: () =>
                (0, n.navigateToAndTrackHelpCenterClick)({
                  articleId: o.HelpdeskArticles.PUBLIC_GUILD_GUILDLINES,
                  guildId: a.id,
                  modalStep: n.DiscoverySetupModalSteps.AGREE_TO_RULES,
                }),
              onDiscoveryGuidelinesClick: () =>
                (0, n.navigateToAndTrackHelpCenterClick)({
                  articleId: o.HelpdeskArticles.SERVER_DISCOVERY_GUIDELINES,
                  guildId: a.id,
                  modalStep: n.DiscoverySetupModalSteps.AGREE_TO_RULES,
                }),
            });
          return (0, t.jsxs)("div", {
            className: u.container,
            children: [
              (0, t.jsxs)("div", {
                className: u.content,
                children: [
                  (0, t.jsx)("div", {
                    className: r(u.stepImage, u.checkImage),
                  }),
                  (0, t.jsx)(d.Heading, {
                    variant: "heading-xl/semibold",
                    className: u.header,
                    id: s,
                    children:
                      c.default.Messages.SERVER_DISCOVERY_AGREE_TO_RULES,
                  }),
                  (0, t.jsx)(d.Text, {
                    color: "none",
                    variant: "text-md/normal",
                    className: u.headerCaption,
                    children:
                      c.default.Messages.SERVER_DISCOVERY_RULES_PAGE_SUBHEADING,
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: u.form,
                children: [
                  (0, t.jsx)(d.FormTitle, {
                    required: !0,
                    children:
                      c.default.Messages.SERVER_DISCOVERY_RULES_FORM_LABEL,
                  }),
                  (0, t.jsx)("div", {
                    className: u.checkboxWrapper,
                    children: (0, t.jsxs)(d.Checkbox, {
                      type: d.Checkbox.Types.ROW,
                      value: E,
                      align: d.Checkbox.Aligns.TOP,
                      onChange: () => S(!E),
                      children: [
                        (0, t.jsx)(d.Text, {
                          variant: "text-md/semibold",
                          className: u.checkboxTitle,
                          children:
                            c.default.Messages
                              .SERVER_DISCOVERY_RULES_HEALTHY_ENV_HEADING,
                        }),
                        (0, t.jsx)(d.Text, {
                          variant: "text-sm/normal",
                          children:
                            c.default.Messages
                              .SERVER_DISCOVERY_RULES_HEALTHY_ENV_DESCRIPTION,
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: u.checkboxWrapper,
                    children: (0, t.jsxs)(d.Checkbox, {
                      type: d.Checkbox.Types.ROW,
                      align: d.Checkbox.Aligns.TOP,
                      value: R,
                      onChange: () => m(!R),
                      children: [
                        (0, t.jsx)(d.Text, {
                          variant: "text-md/semibold",
                          className: u.checkboxTitle,
                          children:
                            c.default.Messages
                              .SERVER_DISCOVERY_RULES_SEXUAL_CONTENT_HEADING,
                        }),
                        (0, t.jsx)(d.Text, {
                          variant: "text-sm/normal",
                          children:
                            c.default.Messages
                              .SERVER_DISCOVERY_RULES_SEXUAL_CONTENT_DESCRIPTION,
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: u.checkboxWrapper,
                    children: (0, t.jsxs)(d.Checkbox, {
                      type: d.Checkbox.Types.ROW,
                      align: d.Checkbox.Aligns.TOP,
                      value: _,
                      onChange: () => x(!_),
                      children: [
                        (0, t.jsx)(d.Text, {
                          variant: "text-md/semibold",
                          className: u.checkboxTitle,
                          children: C,
                        }),
                        (0, t.jsx)(d.Text, {
                          variant: "text-sm/normal",
                          children:
                            c.default.Messages
                              .SERVER_DISCOVERY_RULES_COMPLY_GUIDELINES_DESCRIPTION,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        };
    },
    858555: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return h;
          },
        }),
        a("222007");
      var t = a("37983"),
        l = a("884691"),
        i = a("414456"),
        r = a.n(i),
        d = a("884745"),
        n = a.n(d),
        o = a("446674"),
        c = a("77078"),
        u = a("828116"),
        E = a("716241"),
        S = a("900938"),
        R = a("599110"),
        m = a("758276"),
        _ = a("283167"),
        x = a("149632"),
        C = a("49111"),
        p = a("53948"),
        I = a("782340"),
        g = a("607016");
      let T = /^[A-Za-z0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF-]+$/u;
      var h = e => {
        var s;
        let { guild: a, guildMetadata: i, headerId: d } = e,
          [h, f] = l.useState(!1),
          v = (0, o.useStateFromStores)(
            [S.default],
            () => "keywords" in S.default.getErrors()
          ),
          D = e => {
            if (T.test(e)) f(!1);
            else {
              f(!0);
              return;
            }
            if ((null == a ? void 0 : a.id) == null) return;
            let { keywords: s } = i;
            !(s.length >= p.MAX_KEYWORDS) &&
              _.updateGuildKeywords(a.id, n([...s, e.toLowerCase()]));
          },
          N = e => {
            D(e),
              R.default.track(
                C.AnalyticEvents.DISCOVERY_SETUP_POPULAR_TAG_CLICKED,
                {
                  tag: e,
                  primary_category_id: i.primaryCategoryId,
                  ...(0, E.collectGuildAnalyticsMetadata)(a.id),
                }
              );
          },
          O = h
            ? I.default.Messages.SERVER_DISCOVERY_TAGS_ERROR_MSG_DASHES_ONLY
            : v
              ? I.default.Messages.SERVER_DISCOVERY_BLOCKED_WORD_LEARN_MORE.format(
                  {
                    onLearnMoreClick: () => {
                      (0, x.navigateToAndTrackHelpCenterClick)({
                        articleId:
                          C.HelpdeskArticles.SERVER_DISCOVERY_GUIDELINES,
                        guildId: a.id,
                        modalStep: x.DiscoverySetupModalSteps.TAGS,
                      });
                    },
                  }
                )
              : null,
          A = new Set(i.keywords);
        return (0, t.jsxs)("div", {
          className: g.container,
          children: [
            (0, t.jsxs)("div", {
              className: g.content,
              children: [
                (0, t.jsx)("div", { className: r(g.stepImage, g.tagImage) }),
                (0, t.jsx)(c.Heading, {
                  variant: "heading-xl/semibold",
                  className: g.header,
                  id: d,
                  children: I.default.Messages.SERVER_DISCOVERY_TAGS,
                }),
                (0, t.jsx)(c.Text, {
                  color: "none",
                  variant: "text-md/normal",
                  className: g.headerCaption,
                  children:
                    I.default.Messages.SERVER_DISCOVERY_SEARCH_SUBHEADING,
                }),
              ],
            }),
            (0, t.jsxs)(c.FormSection, {
              className: g.form,
              children: [
                (0, t.jsx)(c.FormTitle, {
                  required: !0,
                  children: I.default.Messages.SERVER_DISCOVERY_TAGS,
                }),
                (0, t.jsx)(c.FormText, {
                  type: c.FormTextTypes.DESCRIPTION,
                  className: g.description,
                  children:
                    I.default.Messages.SERVER_DISCOVERY_TAGS_INPUT_SUBLABEL,
                }),
                (0, t.jsx)(u.default, {
                  className: r(g.tags, { [g.error]: null != O }),
                  tags: i.keywords,
                  onRemoveTag: e => {
                    if ((null == a ? void 0 : a.id) == null) return;
                    let s = [...i.keywords];
                    s.splice(e, 1), _.updateGuildKeywords(a.id, s);
                  },
                  onAddTag: D,
                  maxTags: p.MAX_KEYWORDS,
                  maxTaxLength: p.MAX_KEYWORD_LENGTH,
                  placeholder:
                    (null == i
                      ? void 0
                      : null === (s = i.keywords) || void 0 === s
                        ? void 0
                        : s.length) === 0
                      ? I.default.Messages
                          .SERVER_DISCOVERY_TAGS_INPUT_PLACEHOLDER
                      : "",
                }),
                (0, t.jsx)(c.Text, {
                  className: g.error,
                  color: "text-danger",
                  variant: "text-sm/normal",
                  children: O,
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className: g.form,
              children: (0, t.jsx)(c.FormTitle, {
                children: I.default.Messages.SERVER_DISCOVERY_POPULAR_TAGS,
              }),
            }),
            (0, t.jsx)("div", {
              className: g.tagContainer,
              children: (0, m.getSuggestedTags)(i.primaryCategoryId).map(e =>
                (0, t.jsx)(
                  c.Anchor,
                  {
                    onClick: () => N(e),
                    className: r(g.tag, { [g.usedTag]: A.has(e) }),
                    children: e,
                  },
                  e
                )
              ),
            }),
          ],
        });
      };
    },
    610903: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return E;
          },
        }),
        a("222007");
      var t = a("37983"),
        l = a("884691"),
        i = a("414456"),
        r = a.n(i),
        d = a("77078"),
        n = a("476765"),
        o = a("782340"),
        c = a("888946");
      let u = e => {
        let { index: s, title: a, selected: l } = e;
        return (0, t.jsxs)("div", {
          className: r(c.overviewStep, { [c.selected]: l }),
          children: [
            (0, t.jsx)(d.Text, {
              className: c.stepIndex,
              variant: "text-sm/normal",
              children: s + 1,
            }),
            (0, t.jsx)(d.Text, {
              variant: "text-md/normal",
              className: c.stepTitle,
              children: a,
            }),
          ],
        });
      };
      var E = e => {
        let {
            className: s,
            title: a,
            stepData: i,
            transitionState: E,
            onClose: S,
            completeButtonText: R,
            overviewFooter: m,
            onNextPressed: _,
            onPrevPressed: x,
            onComplete: C,
            sequencerClassName: p,
            initialStep: I = 0,
            forceStep: g,
            submitting: T = !1,
            autoCloseOnComplete: h = !0,
          } = e,
          [f, v] = l.useState([]),
          [D, N] = l.useState(I),
          O = (0, n.useUID)();
        l.useEffect(() => {
          v([...Array(i.length).keys()]);
        }, [i.length]);
        let A = null != g ? g : D,
          M = i[A],
          V = 0 === A,
          j = A === i.length - 1,
          y = null != R ? R : o.default.Messages.DONE,
          L = l.useCallback(() => {
            null == x || x(), N(A - 1);
          }, [x, A, N]);
        return (0, t.jsxs)(d.ModalRoot, {
          size: d.ModalSize.MEDIUM,
          className: r(c.container, s),
          transitionState: E,
          "aria-labelledby": O,
          children: [
            (0, t.jsxs)("div", {
              className: c.overviewSidebar,
              children: [
                (0, t.jsx)(d.Heading, {
                  id: O,
                  variant: "heading-xl/semibold",
                  className: c.header,
                  children: a,
                }),
                (0, t.jsx)("div", {
                  className: c.overviewSteps,
                  children: i.map((e, s) =>
                    (0, t.jsx)(
                      u,
                      { index: s, title: e.overviewTitle, selected: s === A },
                      s
                    )
                  ),
                }),
                m,
              ],
            }),
            (0, t.jsxs)("div", {
              className: c.modal,
              children: [
                (0, t.jsxs)(d.ModalContent, {
                  children: [
                    (0, t.jsx)(d.ModalCloseButton, {
                      focusProps: { offset: { top: 4, right: 4, left: 4 } },
                      onClick: S,
                      className: c.closeButton,
                    }),
                    (0, t.jsx)(d.Sequencer, {
                      step: A,
                      steps: f,
                      sideMargin: 24,
                      verticalMargin: 24,
                      className: r(c.sequencer, p),
                      innerClassName: c.innerSequencer,
                      children: M.modalContent,
                    }),
                  ],
                }),
                (0, t.jsxs)(d.ModalFooter, {
                  className: c.footer,
                  children: [
                    (0, t.jsx)(d.Button, {
                      type: "submit",
                      submitting: T,
                      onClick: () => {
                        j ? (C(), h && S()) : (null == _ || _(), N(A + 1));
                      },
                      color: d.Button.Colors.GREEN,
                      disabled: M.disableNextStep,
                      children: j ? y : o.default.Messages.NEXT,
                    }),
                    V
                      ? null
                      : (0, t.jsx)(d.Button, {
                          look: d.Button.Looks.LINK,
                          color: d.Button.Colors.PRIMARY,
                          size: d.Button.Sizes.MIN,
                          onClick: L,
                          children: o.default.Messages.BACK,
                        }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=aaa13b8006ee069ab6e3.js.map
