(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["43481"],
  {
    94234: function (e, t, l) {
      "use strict";
      l.r(t);
      var s = l("394611");
      l.es(s, t);
    },
    168050: function (e, t, l) {
      "use strict";
      l.r(t);
      var s = l("804423");
      l.es(s, t);
    },
    640570: function (e, t, l) {
      "use strict";
      l.r(t);
      var s = l("247797");
      l.es(s, t);
    },
    4780: function (e, t, l) {
      "use strict";
      l.r(t);
      var s = l("90383");
      l.es(s, t);
    },
    609104: function (e, t, l) {
      "use strict";
      l.r(t);
      var s = l("939423");
      l.es(s, t);
    },
    713666: function (e, t, l) {
      "use strict";
      l.r(t);
      var s = l("468835");
      l.es(s, t);
    },
    320687: function (e, t, l) {
      "use strict";
      l.r(t);
      var s = l("81107");
      l.es(s, t);
    },
    837150: function (e, t, l) {
      "use strict";
      l.r(t);
      var s = l("628031");
      l.es(s, t);
    },
    547585: function (e, t, l) {
      "use strict";
      l.r(t);
      var s = l("355988");
      l.es(s, t);
    },
    197346: function (e, t, l) {
      "use strict";
      l.r(t);
      var s = l("123328");
      l.es(s, t);
    },
    457558: function (e, t, l) {
      "use strict";
      l.r(t);
      var s = l("233452");
      l.es(s, t);
    },
    401773: function (e, t, l) {
      "use strict";
      l.r(t);
      var s = l("511619");
      l.es(s, t);
    },
    793012: function (e, t, l) {
      "use strict";
      l.r(t);
      var s = l("722531");
      l.es(s, t);
    },
    938329: function (e, t, l) {
      "use strict";
      l.r(t);
      var s = l("142509");
      l.es(s, t);
    },
    277084: function (e, t, l) {
      "use strict";
      l.r(t);
      var s = l("130919");
      l.es(s, t);
    },
    998262: function (e, t, l) {
      "use strict";
      l.r(t);
      var s = l("67511");
      l.es(s, t);
    },
    260945: function (e, t, l) {
      "use strict";
      l.r(t);
      var s = l("332223");
      l.es(s, t);
    },
    318154: function (e, t, l) {
      "use strict";
      l.r(t);
      var s = l("863411");
      l.es(s, t);
    },
    834979: function (e, t, l) {
      "use strict";
      l.r(t);
      var s = l("345540");
      l.es(s, t);
    },
    237673: function (e, t, l) {
      "use strict";
      l.r(t);
      var s = l("172518");
      l.es(s, t);
    },
    391478: function (e, t, l) {
      "use strict";
      l.r(t);
      var s = l("160379");
      l.es(s, t);
    },
    993479: function (e, t, l) {
      "use strict";
      l.r(t);
      var s = l("21013");
      l.es(s, t);
    },
    703448: function (e, t, l) {
      "use strict";
      l.r(t);
      var s = l("922936");
      l.es(s, t);
    },
    848848: function (e, t, l) {
      "use strict";
      l.r(t);
      var s = l("910378");
      l.es(s, t);
    },
    376946: function (e, t, l) {
      "use strict";
      l.r(t);
      var s = l("924054");
      l.es(s, t);
    },
    379455: function (e, t, l) {
      "use strict";
      l.r(t);
      var s = l("869277");
      l.es(s, t);
    },
    183529: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return E;
          },
        }),
        l("653041"),
        l("216116"),
        l("78328"),
        l("815648");
      var s = l("392711"),
        n = l.n(s),
        i = l("302454"),
        r = l.n(i),
        u = l("259537"),
        a = l("775822"),
        c = l("421219"),
        o = l("405127"),
        d = l("731865"),
        h = l("677239"),
        f = l("610043"),
        C = l("606929"),
        p = l("871831"),
        v = l("604293"),
        L = l("497160"),
        g = l("366230"),
        _ = l("428521"),
        R = l("555083"),
        H = l("221281"),
        N = l("467006");
      let I = Object.freeze({});
      function T(e, t) {
        if (!t.frecencyBoosters) return {};
        let l = h.default.getFrequentlyWithoutFetchingLatest(),
          s = l.reduce((e, t) => {
            let { id: l } = t,
              s = h.default.getScoreWithoutFetchingLatest(l);
            return s > e ? s : e;
          }, 0),
          n = [];
        switch (e) {
          case H.AutocompleterResultTypes.GUILD:
            n = l.filter(e => e instanceof c.default);
            break;
          case H.AutocompleterResultTypes.USER:
            n = l.filter(
              e =>
                e instanceof a.ChannelRecordBase && e.type === N.ChannelTypes.DM
            );
            break;
          case H.AutocompleterResultTypes.GROUP_DM:
            n = l.filter(
              e => e instanceof a.ChannelRecordBase && e.isMultiUserDM()
            );
            break;
          case H.AutocompleterResultTypes.TEXT_CHANNEL:
            n = l.filter(
              e =>
                e instanceof a.ChannelRecordBase &&
                (0, a.isGuildSelectableChannelType)(e.type)
            );
            break;
          case H.AutocompleterResultTypes.VOICE_CHANNEL:
            n = l.filter(
              e => e instanceof a.ChannelRecordBase && e.isGuildVocal()
            );
        }
        let i = {};
        for (let t of n) {
          let { id: l } = t,
            n = h.default.getScoreWithoutFetchingLatest(l);
          if (
            e === H.AutocompleterResultTypes.USER &&
            t instanceof a.PrivateChannelRecord
          ) {
            if (t.type === N.ChannelTypes.DM)
              i[(l = t.getRecipientId())] = 1 + n / s;
            else if (t.type === N.ChannelTypes.GROUP_DM) {
              let e = t.recipients.length;
              for (let l of t.recipients) i[l] = 1 + (n / s) * (1 / e);
            }
          } else i[l] = 1 + n / s;
        }
        for (let e of C.default.getFriendIDs()) i[e] = (i[e] ?? 1) + 0.2;
        for (let e of d.default.getDMUserIds()) i[e] = (i[e] ?? 1) + 0.1;
        return i;
      }
      class E {
        constructor(e, t, l = 100, s = I) {
          (this.query = ""),
            (this.options = I),
            (this.results = []),
            (this._userResults = []),
            (this._groupDMResults = []),
            (this._textChannelResults = []),
            (this._voiceChannelResults = []),
            (this._guildResults = []),
            (this._applicationResults = []),
            (this._linkResults = []),
            (this._userBlacklist = null),
            (this.parseUserResults = e => {
              let { results: t } = e;
              if (this._include(H.AutocompleterResultTypes.USER)) {
                for (let {
                  id: e,
                  score: l,
                  comparator: s,
                } of ((this._userResults = []), t)) {
                  let t = p.default.getUser(e);
                  null != t &&
                    this._userResults.push({
                      type: H.AutocompleterResultTypes.USER,
                      record: t,
                      score: (function () {
                        let e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 0,
                          t = arguments.length > 1 ? arguments[1] : void 0;
                        return 1e3 * e * (t ?? 1);
                      })(l),
                      comparator: s ?? void 0,
                    });
                }
                this._userResults.length > this._limit &&
                  (this._userResults.length = this._limit),
                  this.updateAllResults();
              }
            }),
            (this.updateAllResults = () => {
              clearTimeout(this._asyncTimeout),
                (this.results = n()([
                  ...this._userResults,
                  ...this._groupDMResults,
                  ...this._textChannelResults,
                  ...this._voiceChannelResults,
                  ...this._guildResults,
                  ...this._linkResults,
                ])
                  .uniqBy(e => `${e.type}-${e.record.id}`)
                  .sort(R.default)
                  .value()),
                this.onResultsChange(this.results, this.query);
            }),
            (this.onResultsChange = e),
            this.setOptions(s, !0),
            (this._limit = l),
            this.createSearchContext(),
            this.setResultTypes(t);
        }
        createSearchContext() {
          null == this.userSearchContext &&
            (this.userSearchContext = _.default.getSearchContext(
              this.parseUserResults,
              this._limit
            ));
        }
        setLimit(e) {
          let { userSearchContext: t } = this;
          (this._limit = e),
            null != t && t.setLimit(e),
            this._userResults.length > this._limit &&
              (this._userResults.length = this._limit),
            this._groupDMResults.length > this._limit &&
              (this._groupDMResults.length = this._limit),
            this._textChannelResults.length > this._limit &&
              (this._textChannelResults.length = this._limit),
            this._voiceChannelResults.length > this._limit &&
              (this._voiceChannelResults.length = this._limit),
            this._guildResults.length > this._limit &&
              (this._guildResults.length = this._limit),
            this._applicationResults.length > this._limit &&
              (this._applicationResults.length = this._limit),
            this._linkResults.length > this._limit &&
              (this._linkResults.length = this._limit);
        }
        setResultTypes(e) {
          (this.resultTypes = null != e ? new Set(e) : null),
            (this._userResults = this._include(H.AutocompleterResultTypes.USER)
              ? this._userResults
              : []),
            (this._groupDMResults = this._include(
              H.AutocompleterResultTypes.GROUP_DM
            )
              ? this._groupDMResults
              : []),
            (this._textChannelResults = this._include(
              H.AutocompleterResultTypes.TEXT_CHANNEL
            )
              ? this._textChannelResults
              : []),
            (this._voiceChannelResults = this._include(
              H.AutocompleterResultTypes.VOICE_CHANNEL
            )
              ? this._voiceChannelResults
              : []),
            (this._guildResults = this._include(
              H.AutocompleterResultTypes.GUILD
            )
              ? this._guildResults
              : []),
            (this._applicationResults = this._include(
              H.AutocompleterResultTypes.APPLICATION
            )
              ? this._applicationResults
              : []),
            (this._linkResults = this._include(H.AutocompleterResultTypes.LINK)
              ? this._linkResults
              : []);
        }
        _include(e) {
          return null == this.resultTypes || this.resultTypes.has(e);
        }
        _isAsyncSearch() {
          return this._include(H.AutocompleterResultTypes.USER);
        }
        setOptions(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          t ? (this.options = { ...this.options, ...e }) : (this.options = e),
            null != this.options.blacklist
              ? (this._userBlacklist = Array.from(this.options.blacklist)
                  .map(e =>
                    e.startsWith("user:") ? e.replace("user:", "") : ""
                  )
                  .filter(e => "" !== e))
              : (this._userBlacklist = null);
        }
        search(e, t) {
          if (((this.query = e), "" === e.trim())) {
            this.clear(), this.updateAllResults();
            return;
          }
          (this.options.frecencyBoosters
            ? u.FrecencyUserSettingsActionCreators.loadIfNecessary()
            : Promise.resolve()
          ).finally(() => {
            this.queryUsers(e, t, this._limit),
              (this._groupDMResults = this.queryGroupDMs(e, this._limit)),
              (this._textChannelResults = this.queryTextChannels(
                e,
                this._limit
              )),
              (this._voiceChannelResults = this.queryVoiceChannels(
                e,
                this._limit
              )),
              (this._guildResults = this.queryGuilds(e, this._limit)),
              (this._applicationResults = this.queryApplications(
                e,
                this._limit
              )),
              (this._linkResults = this.queryLink(e, this._limit)),
              this._isAsyncSearch()
                ? (clearTimeout(this._asyncTimeout),
                  (this._asyncTimeout = setTimeout(this.updateAllResults, 300)))
                : this.updateAllResults();
          });
        }
        clear() {
          let { userSearchContext: e } = this;
          null != e && e.clearQuery(),
            (this.results = []),
            (this._userResults = []),
            (this._groupDMResults = []),
            (this._textChannelResults = []),
            (this._voiceChannelResults = []),
            (this._guildResults = []),
            (this._applicationResults = []),
            (this._linkResults = []);
        }
        clean() {
          this.clear(),
            this.destroy(),
            (this.query = ""),
            this.updateAllResults();
        }
        pause() {
          this.userSearchContext?.unsubscribe?.();
        }
        resume() {
          this.userSearchContext?.subscribe?.();
        }
        destroy() {
          let { userSearchContext: e } = this;
          null != e && (e.destroy(), (this.userSearchContext = null));
        }
        queryTextChannels(e, t) {
          if (!this._include(H.AutocompleterResultTypes.TEXT_CHANNEL))
            return [];
          let l = T(H.AutocompleterResultTypes.TEXT_CHANNEL, this.options),
            { blacklist: s } = this.options;
          return v.default.queryChannels({
            query: e,
            guildId: null,
            limit: t,
            fuzzy: !0,
            filter: null != s ? e => !s.has(`channel:${e.id}`) : void 0,
            boosters: l,
          });
        }
        queryVoiceChannels(e, t) {
          if (!this._include(H.AutocompleterResultTypes.VOICE_CHANNEL))
            return [];
          let { voiceChannelGuildFilter: l } = this.options,
            s = T(H.AutocompleterResultTypes.VOICE_CHANNEL, this.options);
          return v.default.queryChannels({
            query: e,
            guildId: l,
            limit: t,
            fuzzy: !0,
            type: f.GUILD_VOCAL_CHANNELS_KEY,
            boosters: s,
          });
        }
        queryGuilds(e, t) {
          if (!this._include(H.AutocompleterResultTypes.GUILD)) return [];
          let l = T(H.AutocompleterResultTypes.GUILD, this.options),
            { blacklist: s } = this.options;
          return v.default.queryGuilds({
            query: e,
            limit: t,
            fuzzy: !0,
            filter: null != s ? e => !s.has(`guild:${e.id}`) : void 0,
            boosters: l,
          });
        }
        queryUsers(e, t, l) {
          let { userSearchContext: s } = this;
          if (null == s || !this._include(H.AutocompleterResultTypes.USER))
            return;
          let { userFilters: n } = this.options;
          void 0 !== t && L.default.requestMembers(t, e, 100),
            s.setLimit(l),
            s.setQuery(
              e,
              n,
              this._userBlacklist,
              T(H.AutocompleterResultTypes.USER, this.options)
            );
        }
        queryGroupDMs(e, t) {
          if (!this._include(H.AutocompleterResultTypes.GROUP_DM)) return [];
          let { blacklist: l } = this.options,
            s = T(H.AutocompleterResultTypes.GROUP_DM, this.options);
          return v.default.queryGroupDMs({
            query: e,
            limit: t,
            fuzzy: !0,
            filter: null != l ? e => !l.has(`channel:${e.id}`) : void 0,
            boosters: s,
          });
        }
        queryApplications(e, t) {
          return this._include(H.AutocompleterResultTypes.APPLICATION)
            ? v.default.queryApplications({ query: e, limit: t, fuzzy: !0 })
            : [];
        }
        queryLink(e, t) {
          let l;
          if (!this._include(H.AutocompleterResultTypes.LINK)) return [];
          let s = r().sanitizeUrl(e);
          try {
            l = new URL(s);
          } catch (e) {
            return [];
          }
          let { pathname: n, hostname: i = "", host: u } = l,
            a = g.default.isDiscordHostname(i) || window.location.host === u;
          return null !== n && a && g.default.isAppRoute(n)
            ? [
                {
                  type: H.AutocompleterResultTypes.LINK,
                  record: o.default.fromPath(n),
                  score: 1,
                },
              ]
            : [];
        }
      }
    },
    428521: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          SearchContext: function () {
            return H;
          },
          default: function () {
            return I;
          },
        }),
        l("653041"),
        l("216116"),
        l("78328"),
        l("815648");
      var s,
        n,
        i = l("392711"),
        r = l.n(i),
        u = l("153832"),
        a = l("963694"),
        c = l("775822"),
        o = l("731865"),
        d = l("361733"),
        h = l("606929"),
        f = l("871831"),
        C = l("370275"),
        p = l("84819"),
        v = l("439823");
      function L(e) {
        if (null == e || h.default.isBlocked(e.id)) return null;
        let t = {
          id: e.id,
          username:
            "0" !== e.discriminator
              ? `${e.username}#${e.discriminator}`
              : e.username,
        };
        return (
          null != v.default.getGlobalName(e) && (t.globalName = e.globalName),
          e.bot && (t.isBot = !0),
          h.default.isFriend(e.id) &&
            ((t.isFriend = !0),
            (t.friendNickname = h.default.getNickname(e.id))),
          t
        );
      }
      function g(e, t, l) {
        null != e && (e[t] = null != l && "" !== l ? l : null);
      }
      function _(e) {
        let t = [];
        if (null == e || !(0, c.isPrivate)(e.type)) return t;
        let { recipients: l = [] } = e;
        return (
          l.forEach(l => {
            let s = L(f.default.getUser(l));
            null != e && g(s, e.id), t.push(s);
          }),
          t
        );
      }
      function R(e, t) {
        let l = [];
        return (
          e.forEach(e => {
            let s = L(e.user);
            null != s && (g(s, t, e.nick), l.push(s));
          }),
          l
        );
      }
      ((n = s || (s = {})).UPDATE_USERS = "UPDATE_USERS"),
        (n.USER_RESULTS = "USER_RESULTS"),
        (n.QUERY_SET = "QUERY_SET"),
        (n.QUERY_CLEAR = "QUERY_CLEAR");
      class H {
        constructor(e, t, l = 10) {
          (this.handleMessages = e => {
            let t = e.data;
            null != t &&
              "USER_RESULTS" === t.type &&
              t.uuid === this._uuid &&
              (!1 !== this._currentQuery && this._callback(t.payload),
              null != this._currentQuery && (this._currentQuery = null),
              this._setNextQuery());
          }),
            (this._worker = e),
            (this._uuid = (0, u.v4)()),
            (this._callback = t),
            (this._limit = l),
            (this._currentQuery = null),
            (this._nextQuery = null),
            (this._subscribed = !1),
            this.subscribe();
        }
        setLimit(e) {
          (this._limit = e),
            null != this._nextQuery && (this._nextQuery.limit = e);
        }
        subscribe() {
          null != this._worker &&
            !this._subscribed &&
            (this._worker.addEventListener("message", this.handleMessages, !1),
            (this._subscribed = !0),
            this._setNextQuery());
        }
        unsubscribe() {
          null != this._worker &&
            this._subscribed &&
            (this._worker.removeEventListener(
              "message",
              this.handleMessages,
              !1
            ),
            (this._subscribed = !1));
        }
        destroy() {
          this.clearQuery(), this.unsubscribe();
        }
        clearQuery() {
          (this._currentQuery = !1),
            (this._nextQuery = null),
            null != this._worker &&
              this._subscribed &&
              this._worker.postMessage({
                uuid: this._uuid,
                type: "QUERY_CLEAR",
              });
        }
        setQuery(e, t, l, s) {
          null != e &&
            ((this._nextQuery = {
              query: e,
              filters: t,
              blacklist: l,
              boosters: s ?? {},
              limit: this._limit,
            }),
            this._setNextQuery());
        }
        _setNextQuery() {
          (null == this._currentQuery || !1 === this._currentQuery) &&
            null != this._nextQuery &&
            (null != this._worker && this._subscribed
              ? ((this._currentQuery = this._nextQuery),
                (this._nextQuery = null),
                this._worker.postMessage({
                  uuid: this._uuid,
                  type: "QUERY_SET",
                  payload: this._currentQuery,
                }))
              : !this._subscribed && this.subscribe());
        }
      }
      class N extends a.default {
        _initialize() {
          this.rebootWebworker();
        }
        _terminate() {
          null != this._worker &&
            (this._worker.terminate(), (this._worker = null));
        }
        rebootWebworker() {
          null != this._worker &&
            (this._worker.terminate(), (this._worker = null)),
            (this._worker = new Worker(new URL(l.p + l.u("45563"), l.b)));
        }
        updateUsers(e) {
          let { _worker: t } = this;
          null != t &&
            ((e = e.filter(C.isNotNullish)),
            t.postMessage({ type: "UPDATE_USERS", payload: e }));
        }
        getSearchContext(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
          this.initialize();
          let { _worker: l } = this;
          if (null == l)
            throw Error("SearchContextManager: No webworker initialized");
          return new H(l, e, t);
        }
        constructor(...e) {
          super(...e),
            (this.actions = {
              LOGOUT: () => this._handleLogout(),
              POST_CONNECTION_OPEN: () => this._handleConnectionOpen(),
              CONNECTION_OPEN_SUPPLEMENTAL: e =>
                this._handleConnectionOpenSupplemental(e),
              OVERLAY_INITIALIZE: e => this._handleOverlayInitialize(e),
              CURRENT_USER_UPDATE: e => this._handleCurrentUserUpdate(e),
              GUILD_CREATE: e => this._handleGuildCreate(e),
              GUILD_MEMBERS_CHUNK: e => this._handleGuildMembersChunk(e),
              GUILD_MEMBER_ADD: e => this._handleGuildMemberUpdate(e),
              GUILD_MEMBER_UPDATE: e => this._handleGuildMemberUpdate(e),
              RELATIONSHIP_ADD: e => this._handleRelationshipAdd(e),
              RELATIONSHIP_UPDATE: e => this._handleRelationshipUpdate(e),
              RELATIONSHIP_REMOVE: e => this._handleRelationshipRemove(e),
              CHANNEL_CREATE: e => this._handleDMCreate(e),
              CHANNEL_UPDATES: e => this._handleDMUpdates(e),
              CHANNEL_RECIPIENT_ADD: e => this._handleRecipientChanges(e),
              PASSIVE_UPDATE_V1: e => this._handlePassiveUpdateV1(e),
            }),
            (this._handleLogout = () => {
              this.rebootWebworker();
            }),
            (this._handleConnectionOpen = () => {
              setTimeout(() => {
                let e = f.default.getCurrentUser();
                if (null == e) return;
                let t = L(e),
                  l = { [t.id]: t };
                Object.values(f.default.getUsers()).forEach(e => {
                  l[e.id] = L(e);
                });
                let s = d.default.getMutableAllGuildsAndMembers();
                for (let e in s)
                  for (let t in s[e]) {
                    let n = l[t],
                      i = s[e][t]?.nick ?? v.default.getGlobalName(n);
                    null != n && (n[e] = null != i && "" !== i ? i : null);
                  }
                this.updateUsers(Object.values(l));
              }, 3e3);
            }),
            (this._handleConnectionOpenSupplemental = e => {
              let { guilds: t } = e;
              setTimeout(() => {
                let e = r().flatMap(t, e => R(e.members, e.id));
                this.updateUsers(e);
              }, 3e3);
            }),
            (this._handleOverlayInitialize = e => {
              let { users: t, guildMembers: l } = e,
                s = new Map();
              for (let e of t) s.set(e.id, L(e));
              for (let e of p.default.keys(l)) {
                let t = l[e];
                if (null != t)
                  for (let l of p.default.keys(t)) {
                    let n = s.get(l),
                      i = t[l];
                    null != n &&
                      null != i &&
                      null != i.nick &&
                      (g(n, e, i.nick), s.set(l, n));
                  }
              }
              this.updateUsers(Array.from(s.values())), s.clear();
            }),
            (this._handleCurrentUserUpdate = e => {
              let { user: t } = e,
                l = L(t);
              null != l && this.updateUsers([l]);
            }),
            (this._handleGuildCreate = e => {
              let { guild: t } = e,
                { members: l } = t;
              this.updateUsers(R(l, t.id));
            }),
            (this._handleGuildMembersChunk = e => {
              let { members: t, guildId: l } = e;
              this.updateUsers(R(t, l));
            }),
            (this._handleGuildMemberUpdate = e => {
              let { guildId: t, user: l, nick: s } = e,
                n = L(l);
              null != n && (g(n, t, s), this.updateUsers([n]));
            }),
            (this._handlePassiveUpdateV1 = e => {
              null != e.members && this.updateUsers(R(e.members, e.guildId));
            }),
            (this._handleRelationshipAdd = e => {
              let t = L(e.relationship.user);
              this.updateUsers([t]);
            }),
            (this._handleRelationshipUpdate = e => {
              let t = L(f.default.getUser(e.relationship.id));
              this.updateUsers([t]);
            }),
            (this._handleRelationshipRemove = e => {
              let t = L(f.default.getUser(e.relationship.id));
              this.updateUsers([t]);
            }),
            (this._handleDMCreate = e => {
              let {
                  channel: { id: t },
                } = e,
                l = _(o.default.getChannel(t));
              if (0 === l.length) return;
              let s = L(f.default.getCurrentUser());
              g(s, t), l.push(s), this.updateUsers(l);
            }),
            (this._handleDMUpdates = e => {
              let { channels: t } = e;
              for (let e of t) {
                let t = _(o.default.getChannel(e.id));
                if (0 === t.length) continue;
                let l = L(f.default.getCurrentUser());
                g(l, e.id), t.push(l), this.updateUsers(t);
              }
            }),
            (this._handleRecipientChanges = e => {
              let { channelId: t, user: l, isMember: s } = e;
              if (!s) return;
              let n = L(l);
              g(n, t), this.updateUsers([n]);
            });
        }
      }
      var I = new N();
    },
    454509: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          createHeaderResult: function () {
            return n;
          },
        });
      var s = l("221281");
      function n(e) {
        return {
          type: s.AutocompleterResultTypes.HEADER,
          record: new s.HeaderRecord(e),
          score: 0,
        };
      }
    },
    101003: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return c;
          },
        });
      var s = l("741312"),
        n = l("731865"),
        i = l("606929"),
        r = l("871831"),
        u = l("221281"),
        a = l("467006");
      function c(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : n.default,
          l =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : r.default,
          c =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : i.default,
          o = t.getChannel(e);
        if (null == o) return null;
        let d = (0, s.computeChannelName)(o, l, c);
        switch (o.type) {
          case a.ChannelTypes.DM: {
            let e = l.getUser(o.getRecipientId());
            if (null == e) return null;
            return {
              type: u.AutocompleterResultTypes.USER,
              record: e,
              score: 0,
              comparator: d,
            };
          }
          case a.ChannelTypes.GROUP_DM:
            return {
              type: u.AutocompleterResultTypes.GROUP_DM,
              record: o,
              score: 0,
              comparator: d,
            };
          case a.ChannelTypes.GUILD_VOICE:
          case a.ChannelTypes.GUILD_STAGE_VOICE:
            return {
              type: u.AutocompleterResultTypes.VOICE_CHANNEL,
              record: o,
              score: 0,
              comparator: d,
            };
          default:
            return {
              type: u.AutocompleterResultTypes.TEXT_CHANNEL,
              record: o,
              score: 0,
              comparator: d,
            };
        }
      }
    },
    162900: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return function e(t, l, n, i) {
              let { length: r } = n,
                u = i,
                a = l;
              if (0 === r) return 0;
              if (null == u) u = a;
              else if (u === a) return a;
              return (a += t === s.FindResultDirections.UP ? -1 : 1) < 0 ||
                a >= r
                ? e(t, a < 0 ? r : -1, n, u)
                : n[a].type === s.AutocompleterResultTypes.HEADER
                  ? e(t, a, n, u)
                  : a;
            };
          },
        });
      var s = l("221281");
    },
    929451: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          createHeaderResult: function () {
            return i.createHeaderResult;
          },
          default: function () {
            return u;
          },
          findNextSelectedResult: function () {
            return r.default;
          },
        });
      var s = l("183529"),
        n = l("221281");
      l.es(n, t);
      var i = l("454509"),
        r = l("162900");
      l("555083");
      var u = s.default;
    },
    968384: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          getChannelIconComponent: function () {
            return X;
          },
          getChannelIconTooltipText: function () {
            return Y;
          },
          getSimpleChannelIconComponent: function () {
            return $;
          },
        });
      var s = l("138795"),
        n = l("222556"),
        i = l("361733"),
        r = l("327271"),
        u = l("200560"),
        a = l("871831"),
        c = l("253156"),
        o = l("701789"),
        d = l("477661"),
        h = l("94345"),
        f = l("829704"),
        C = l("294107"),
        p = l("736807"),
        v = l("699054"),
        L = l("899186"),
        g = l("546509"),
        _ = l("541194"),
        R = l("283218"),
        H = l("233293"),
        N = l("170309"),
        I = l("1936"),
        T = l("93710"),
        E = l("719287"),
        m = l("187281"),
        M = l("145134"),
        x = l("177791"),
        y = l("803322"),
        A = l("484656"),
        V = l("659940"),
        w = l("73632"),
        U = l("677379"),
        Z = l("674535"),
        O = l("563775"),
        S = l("795865"),
        j = l("877915"),
        D = l("654703"),
        G = l("502083"),
        P = l("157916"),
        k = l("139820"),
        B = l("14093"),
        b = l("31948"),
        W = l("433887"),
        F = l("658934"),
        z = l("132818"),
        Q = l("551835"),
        q = l("467006"),
        K = l("30175");
      function Y(e, t, l, s) {
        if (null == e) return null;
        if (e.id === t?.rulesChannelId)
          return K.default.Messages.CHANNEL_TOOLTIP_RULES;
        switch (e.type) {
          case q.ChannelTypes.GUILD_TEXT:
            if (s)
              return K.default.Messages.CHANNEL_TOOLTIP_TEXT_ACTIVE_THREADS;
            if (e.isNSFW()) return K.default.Messages.CHANNEL_TOOLTIP_TEXT_NSFW;
            if ((0, z.default)(e))
              return K.default.Messages.CHANNEL_TOOLTIP_TEXT_LIMITED;
            return K.default.Messages.CHANNEL_TOOLTIP_TEXT;
          case q.ChannelTypes.GUILD_FORUM:
            let n = e.isMediaChannel();
            if (e.isNSFW())
              return n
                ? K.default.Messages.CHANNEL_TOOLTIP_MEDIA_NSFW
                : K.default.Messages.CHANNEL_TOOLTIP_FORUM_NSFW;
            if ((0, z.default)(e))
              return n
                ? K.default.Messages.CHANNEL_TOOLTIP_MEDIA_LIMITED
                : K.default.Messages.CHANNEL_TOOLTIP_FORUM_LIMITED;
            return n
              ? K.default.Messages.MEDIA_CHANNEL
              : K.default.Messages.FORUM;
          case q.ChannelTypes.GUILD_MEDIA:
            if (e.isNSFW())
              return K.default.Messages.CHANNEL_TOOLTIP_MEDIA_NSFW;
            if ((0, z.default)(e))
              return K.default.Messages.CHANNEL_TOOLTIP_MEDIA_LIMITED;
            return K.default.Messages.MEDIA_CHANNEL;
          case q.ChannelTypes.GUILD_STAGE_VOICE:
            if (l) return K.default.Messages.CHANNEL_TOOLTIP_STAGE_LOCKED;
            if ((0, z.default)(e))
              return K.default.Messages.CHANNEL_TOOLTIP_STAGE_LIMITED;
            return K.default.Messages.CHANNEL_TOOLTIP_STAGE;
          case q.ChannelTypes.GUILD_VOICE:
            if (l) return K.default.Messages.CHANNEL_TOOLTIP_VOICE_LOCKED;
            if ((0, z.default)(e))
              return K.default.Messages.CHANNEL_TOOLTIP_VOICE_LIMITED;
            return K.default.Messages.CHANNEL_TOOLTIP_VOICE;
          case q.ChannelTypes.GUILD_ANNOUNCEMENT:
            if (e.isNSFW())
              return K.default.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS_NSFW;
            if ((0, z.default)(e))
              return K.default.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS_LIMITED;
            return K.default.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS;
          case q.ChannelTypes.GUILD_STORE:
            return K.default.Messages.CHANNEL_TOOLTIP_STORE;
          case q.ChannelTypes.DM:
            return K.default.Messages.DM;
          case q.ChannelTypes.GROUP_DM:
            return K.default.Messages.GROUP_DM;
          case q.ChannelTypes.GUILD_DIRECTORY:
            return K.default.Messages.CHANNEL_TOOLTIP_DIRECTORY;
          case q.ChannelTypes.PUBLIC_THREAD:
            return K.default.Messages.THREAD;
          case q.ChannelTypes.PRIVATE_THREAD:
            return K.default.Messages.PRIVATE_THREAD;
          default:
            return null;
        }
      }
      function X(e, t) {
        let l =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          {
            locked: K = !1,
            video: Y = !1,
            stream: X = !1,
            hasActiveThreads: $ = !1,
            textFocused: J = !1,
          } = l;
        if (null == e) return null;
        null == t && (t = r.default.getGuild(e.getGuildId()));
        let ee = (0, n.shouldShowMembershipVerificationGate)(t?.id, [
            r.default,
            u.default,
            a.default,
            i.default,
          ]),
          et = null != t && (0, s.canSeeGuildHome)(t?.id);
        if (e?.id === t?.rulesChannelId) return v.default;
        switch (e.type) {
          case q.ChannelTypes.GUILD_ANNOUNCEMENT:
            if ($) {
              if (e.isNSFW()) return U.default;
              if ((0, z.default)(e)) return O.default;
              else return c.default;
            }
            if (e.isNSFW()) return w.default;
            if ((0, z.default)(e)) return V.default;
            return A.default;
          case q.ChannelTypes.GUILD_STORE:
            return b.default;
          case q.ChannelTypes.DM:
          case q.ChannelTypes.GROUP_DM:
            return o.default;
          case q.ChannelTypes.PRIVATE_THREAD:
            return S.default;
          case q.ChannelTypes.ANNOUNCEMENT_THREAD:
          case q.ChannelTypes.PUBLIC_THREAD:
            if (e.isNSFW()) return Z.default;
            if (e.isForumPost()) return T.default;
            else return F.default;
          case q.ChannelTypes.GUILD_TEXT:
            if ($) {
              if (e.isNSFW()) return Z.default;
              if ((0, z.default)(e)) return S.default;
              else return F.default;
            }
            if (e.isNSFW()) return _.default;
            if ((0, z.default)(e)) return g.default;
            return L.default;
          case q.ChannelTypes.GUILD_FORUM:
            let el = e.isMediaChannel();
            if (e.isNSFW()) return el ? y.default : I.default;
            if ((0, z.default)(e)) return el ? x.default : N.default;
            else return el ? M.default : H.default;
          case q.ChannelTypes.GUILD_MEDIA:
            if (e.isNSFW()) return y.default;
            if ((0, z.default)(e)) return x.default;
            else return M.default;
          case q.ChannelTypes.GUILD_STAGE_VOICE:
            if (ee) return (0, z.default)(e) ? m.default : B.default;
            if (K) return m.default;
            if ((0, z.default)(e)) return B.default;
            else return k.default;
          case q.ChannelTypes.GUILD_VOICE:
            if (J) return R.default;
            if (e.isNSFW()) return P.default;
            if (X) return W.default;
            if (ee) {
              if ((0, z.default)(e)) return m.default;
              return Y ? h.default : G.default;
            }
            if (K) return m.default;
            if ((0, z.default)(e)) return Y ? h.default : G.default;
            else return Y ? d.default : D.default;
          case q.ChannelTypes.GUILD_DIRECTORY:
            return p.default;
          case q.ChannelTypes.GUILD_CATEGORY:
            return C.default;
          default:
            if (Q.StaticChannelIds.has(e.id)) {
              if (
                e.id === Q.StaticChannelId.GUILD_HOME ||
                e.id === Q.StaticChannelId.SERVER_GUIDE
              ) {
                if (et) return E.default;
                return j.default;
              }
              if (
                e.id === Q.StaticChannelId.CHANNEL_BROWSER ||
                e.id === Q.StaticChannelId.CUSTOMIZE_COMMUNITY
              )
                return f.default;
            }
            return null;
        }
      }
      function $(e) {
        switch (e) {
          case q.ChannelTypes.GUILD_ANNOUNCEMENT:
            return A.default;
          case q.ChannelTypes.GUILD_STORE:
            return b.default;
          case q.ChannelTypes.DM:
          case q.ChannelTypes.GROUP_DM:
            return o.default;
          case q.ChannelTypes.PRIVATE_THREAD:
            return S.default;
          case q.ChannelTypes.ANNOUNCEMENT_THREAD:
          case q.ChannelTypes.PUBLIC_THREAD:
            return F.default;
          case q.ChannelTypes.GUILD_TEXT:
          case q.ChannelTypes.GUILD_FORUM:
          case q.ChannelTypes.GUILD_MEDIA:
            return L.default;
          case q.ChannelTypes.GUILD_STAGE_VOICE:
            return k.default;
          case q.ChannelTypes.GUILD_VOICE:
            return D.default;
          case q.ChannelTypes.GUILD_CATEGORY:
            return C.default;
          default:
            return null;
        }
      }
    },
    359916: function (e, t, l) {
      "use strict";
      let s;
      l.r(t),
        l.d(t, {
          default: function () {
            return q;
          },
        }),
        l("653041"),
        l("733860");
      var n = l("392711"),
        i = l.n(n),
        r = l("661223"),
        u = l("986329"),
        a = l("312916"),
        c = l("929451"),
        o = l("101003"),
        d = l("655864"),
        h = l("806790"),
        f = l("786649"),
        C = l("293377"),
        p = l("262047"),
        v = l("731865"),
        L = l("911388"),
        g = l("610043"),
        _ = l("361733"),
        R = l("327271"),
        H = l("197905"),
        N = l("417223"),
        I = l("232733"),
        T = l("632706"),
        E = l("301309"),
        m = l("604293"),
        M = l("370275"),
        x = l("467006"),
        y = l("30175");
      let A = "seenQSTutorial",
        V = [
          c.AutocompleterResultTypes.USER,
          c.AutocompleterResultTypes.GROUP_DM,
          c.AutocompleterResultTypes.TEXT_CHANNEL,
          c.AutocompleterResultTypes.GUILD,
          c.AutocompleterResultTypes.APPLICATION,
          c.AutocompleterResultTypes.LINK,
        ],
        w = 0,
        U = !1,
        Z = !1,
        O = null,
        S = [],
        j = null,
        D = 0,
        G = [],
        P = [];
      function k() {
        (Z =
          R.default.getGuildCount() >= 3 ||
          i().size(v.default.getMutablePrivateChannels()) >= 20),
          (G = []);
      }
      function B(e) {
        let t = (0, o.default)(e);
        return null == t || (null != O && O !== t.type) ? null : t;
      }
      function b(e) {
        let { query: t, queryMode: l } = e,
          n = (0, d.isSplitMessagesTabAndOnMessagesTab)()
            ? void 0
            : T.default.getGuildId() ?? void 0,
          i = new Set([`user:${p.default.getId()}`]);
        null != n && i.add(`guild:${n}`),
          (s =
            s ??
            new c.default(W, V, null != l ? 100 : 5, {
              frecencyBoosters: !0,
              blacklist: i,
            })),
          (j = null),
          (D = t.length),
          (O = l),
          s.search(t);
      }
      function W(e, t) {
        !(function (e, t) {
          if (e.length !== t.length) return !1;
          for (let l = 0; l < e.length; l++) {
            let s = e[l],
              n = t[l];
            if (s.record.id !== n.record.id) return !1;
          }
          return !0;
        })(
          (e =
            "" === (t = t.trim()).trim()
              ? (function () {
                  let e = T.default.getGuildId() ?? void 0,
                    t = I.default.getChannelId() ?? void 0;
                  switch (O) {
                    case c.AutocompleterResultTypes.USER: {
                      let e = p.default.getId();
                      return m.default.getRecentlyTalked(t, 100).filter(t => {
                        let { record: l } = t;
                        return l.id !== e;
                      });
                    }
                    case c.AutocompleterResultTypes.APPLICATION:
                      return m.default.queryApplications({
                        query: "",
                        limit: 100,
                        fuzzy: !0,
                      });
                    case c.AutocompleterResultTypes.GUILD:
                      return m.default.queryGuilds({
                        query: "",
                        limit: 100,
                        fuzzy: !0,
                      });
                    case c.AutocompleterResultTypes.TEXT_CHANNEL:
                      return m.default.queryChannels({
                        query: "",
                        guildId: T.default.getGuildId(),
                        limit: 100,
                        fuzzy: !0,
                      });
                    case c.AutocompleterResultTypes.VOICE_CHANNEL:
                      return m.default.queryChannels({
                        query: "",
                        guildId: T.default.getGuildId(),
                        limit: 100,
                        fuzzy: !0,
                        filter: () => !0,
                        type: g.GUILD_VOCAL_CHANNELS_KEY,
                      });
                  }
                  let l = [],
                    s = [];
                  for (let e = 1; e < P.length; e += 1) {
                    let t = B(P[e]);
                    if (null != t)
                      ((t.type !== c.AutocompleterResultTypes.TEXT_CHANNEL &&
                        t.type !== c.AutocompleterResultTypes.VOICE_CHANNEL) ||
                        H.default.can(x.Permissions.VIEW_CHANNEL, t.record)) &&
                        s.push(t);
                  }
                  s.length > 0 &&
                    l.push(
                      (0, c.createHeaderResult)(
                        y.default.Messages.QUICKSWITCHER_LAST_CHANNEL
                      ),
                      ...s
                    );
                  let n = (function (e) {
                    let t = [];
                    return (
                      L.default
                        .getRecentlyEditedDrafts(L.DraftType.ChannelMessage)
                        .forEach(l => {
                          let { channelId: s } = l;
                          if (e(s)) return;
                          let n = B(s);
                          null != n && t.push(n);
                        }),
                      t
                    );
                  })(e => e === t || P.includes(e));
                  n.length > 0 &&
                    l.push(
                      (0, c.createHeaderResult)(
                        y.default.Messages.QUICKSWITCHER_DRAFTS
                      ),
                      ...n
                    );
                  let r = N.default
                    .getMentionChannelIds()
                    .filter(e => e !== t && !P.includes(e))
                    .map(e => B(e))
                    .filter(M.isNotNullish)
                    .reverse();
                  if (
                    (r.length > 0 &&
                      (l.push(
                        (0, c.createHeaderResult)(
                          y.default.Messages.QUICKSWITCHER_MENTIONS
                        )
                      ),
                      (l = l.concat(r))),
                    null != e)
                  ) {
                    let s = g.default
                      .getSelectableChannelIds(e)
                      .filter(e => {
                        let l = v.default.getChannel(e);
                        return (
                          !(
                            null == l ||
                            e === t ||
                            P.includes(e) ||
                            E.default.isChannelMuted(l.guild_id, e) ||
                            (null != l.parent_id &&
                              E.default.isChannelMuted(l.guild_id, l.parent_id))
                          ) && (0, h.getHasImportantUnread)(l)
                        );
                      })
                      .map(e => B(e))
                      .filter(e => e);
                    Object.values(
                      f.default.getActiveJoinedUnreadThreadsForGuild(e)
                    ).forEach(e => {
                      for (let t in e) {
                        let e = B(t);
                        null != e && s.push(e);
                      }
                    }),
                      s.length > 0 &&
                        (l.push(
                          (0, c.createHeaderResult)(
                            y.default.Messages.QUICKSWITCHER_UNREAD_CHANNELS
                          )
                        ),
                        (l = l.concat(s)));
                  }
                  return i()(l)
                    .uniqBy(e => e.record.id)
                    .value();
                })()
              : e),
          G
        ) &&
          ((G = e),
          !(function (e, t) {
            switch (O) {
              case c.AutocompleterResultTypes.USER: {
                let t = R.default.getGuild(T.default.getGuildId());
                e.unshift(
                  (0, c.createHeaderResult)(
                    null != t
                      ? y.default.Messages.QUICKSWITCHER_QUERYMODE_USERS_IN_GUILD.format(
                          { name: t.name }
                        )
                      : y.default.Messages.QUICKSWITCHER_QUERYMODE_USERS
                  )
                ),
                  (S = e);
                break;
              }
              case c.AutocompleterResultTypes.TEXT_CHANNEL:
                e.unshift(
                  (0, c.createHeaderResult)(
                    y.default.Messages.QUICKSWITCHER_QUERYMODE_TEXT_CHANNELS
                  )
                ),
                  (S = e);
                break;
              case c.AutocompleterResultTypes.VOICE_CHANNEL:
                e.unshift(
                  (0, c.createHeaderResult)(
                    y.default.Messages.QUICKSWITCHER_QUERYMODE_VOICE_CHANNELS
                  )
                ),
                  (S = e);
                break;
              case c.AutocompleterResultTypes.GUILD:
                e.unshift(
                  (0, c.createHeaderResult)(
                    y.default.Messages.QUICKSWITCHER_QUERYMODE_GUILDS
                  )
                ),
                  (S = e);
                break;
              case c.AutocompleterResultTypes.APPLICATION:
                e.unshift(
                  (0, c.createHeaderResult)(
                    y.default.Messages.QUICKSWITCHER_QUERYMODE_APPLICATIONS
                  )
                ),
                  (S = e);
                break;
              default:
                S = e;
            }
            if (t !== j)
              (j = t),
                (D = Math.max(t.length, D)),
                (w = (0, c.findNextSelectedResult)(
                  c.FindResultDirections.DOWN,
                  -1,
                  S
                ));
            else {
              let e = S[w];
              null != e &&
                e.type === c.AutocompleterResultTypes.HEADER &&
                (w = (0, c.findNextSelectedResult)(
                  c.FindResultDirections.DOWN,
                  w,
                  S
                ));
            }
            Q.emitChange();
          })(e, t));
      }
      function F() {
        (j = null), (D = 0), (G = []), null != s && (s.destroy(), (s = null));
      }
      class z extends r.default.PersistedStore {
        static #e = (this.displayName = "QuickSwitcherStore");
        static #t = (this.persistKey = "QuickSwitcherStore");
        initialize(e) {
          this.waitFor(_.default, R.default, v.default),
            this.syncWith([C.default], () => !0),
            (U = u.default.get(A) || !1),
            (P = e?.channelHistory ?? []);
        }
        getState() {
          return { channelHistory: P };
        }
        isOpen() {
          return null != s;
        }
        getResultTotals(e) {
          return null == s
            ? 0
            : null == e
              ? s.results.reduce(
                  (e, t) =>
                    t.type !== c.AutocompleterResultTypes.HEADER ? e + 1 : e,
                  0
                )
              : s.results.reduce((t, l) => (l.type === e ? t + 1 : t), 0);
        }
        channelNoticePredicate(e, t) {
          let l = Date.now() - t >= x.CHANNEL_NOTICE_SHOW_DELAY;
          return Z && l;
        }
        getFrequentGuilds() {
          return null != s ? s.queryGuilds("", 100) : null;
        }
        getFrequentGuildsLength() {
          return null != s ? s.queryGuilds("", 100).length : 0;
        }
        getChannelHistory() {
          return P;
        }
        getProps() {
          return {
            theme: C.default.theme,
            query: null != s ? s.query : "",
            queryMode: O,
            results: S,
            selectedIndex: w,
            seenTutorial: U,
            maxQueryLength: D,
          };
        }
      }
      let Q = new z(a.default, {
        CONNECTION_OPEN: k,
        CONNECTION_OPEN_SUPPLEMENTAL: k,
        QUICKSWITCHER_SHOW: b,
        SHOW_ACTION_SHEET_QUICK_SWITCHER: b,
        QUICKSWITCHER_HIDE: F,
        OVERLAY_SET_INPUT_LOCKED: F,
        HIDE_ACTION_SHEET_QUICK_SWITCHER: F,
        QUICKSWITCHER_SEARCH: function (e) {
          let { query: t, queryMode: l } = e;
          if (null == s) return !1;
          let n = T.default.getGuildId() ?? null;
          if (O !== l) {
            s.setResultTypes(null != l ? [l] : V),
              s.setLimit(null != l ? 100 : 5);
            let e = T.default.getGuildId() ?? void 0;
            l === c.AutocompleterResultTypes.USER && null != e
              ? s.setOptions({ userFilters: { guild: e, friends: !0 } }, !0)
              : l === c.AutocompleterResultTypes.VOICE_CHANNEL
                ? s.setOptions({ voiceChannelGuildFilter: null }, !0)
                : s.setOptions(
                    { userFilters: null, voiceChannelGuildFilter: void 0 },
                    !0
                  );
          }
          (O = l),
            s.search(t, O === c.AutocompleterResultTypes.USER ? n : void 0);
        },
        QUICKSWITCHER_SELECT: function (e) {
          w = e.selectedIndex;
        },
        QUICKSWITCHER_SWITCH_TO: function () {
          if (U) return !1;
          (U = !0), u.default.set(A, !0);
        },
        CHANNEL_SELECT: function (e) {
          let { channelId: t } = e;
          if (null == t) return !1;
          (P = P.filter(e => e !== t)).unshift(t),
            P.length > 4 && (P.length = 4);
        },
      });
      var q = Q;
    },
    806790: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          getHasImportantUnread: function () {
            return r;
          },
        }),
        l("661223");
      var s = l("417223"),
        n = l("301309"),
        i = l("587361");
      function r(e) {
        return (
          s.default.hasUnread(e.id) &&
          n.default.resolveUnreadSetting(e) === i.UnreadSetting.ALL_MESSAGES
        );
      }
    },
    405127: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return i;
          },
        });
      var s = l("885714");
      class n extends s.default {
        static fromPath(e) {
          return new n({ id: e, path: e });
        }
        constructor(e) {
          super(), (this.id = e.id), (this.path = e.path);
        }
      }
      var i = n;
    },
    677239: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          MAX_NUM_SELECTED_ITEMS: function () {
            return p;
          },
          default: function () {
            return I;
          },
        }),
        l("653041");
      var s = l("392711"),
        n = l.n(s),
        i = l("661223"),
        r = l("312916"),
        u = l("580905"),
        a = l("991400"),
        c = l("731865"),
        o = l("327271"),
        d = l("232733"),
        h = l("632706"),
        f = l("467006"),
        C = l("746835");
      let p = 100,
        v = new u.default({
          computeBonus: () => 100,
          computeWeight: e => {
            let t = 0;
            return (
              0 === e
                ? (t = 100)
                : e >= 1 && e < 2
                  ? (t = 70)
                  : e >= 2 && e < 4
                    ? (t = 50)
                    : e >= 4 && e < 7
                      ? (t = 30)
                      : e >= 7 && (t = 10),
              t
            );
          },
          lookupKey: e =>
            o.default.getGuild(e) ??
            c.default.getChannel(e) ??
            c.default.getChannel(c.default.getDMFromUserId(e)),
          afterCompute: () => {},
          numFrequentlyItems: p,
          maxSamples: 10,
        }),
        L = null,
        g = null;
      function _(e) {
        let { guildId: t, channelId: l } = e,
          s = !1;
        return (
          l !== L &&
            ((L = l ?? null),
            null != l &&
              f.ID_REGEX.test(l) &&
              ((s = !0),
              v.track(l),
              H.pendingUsages.push({ key: l, timestamp: Date.now() }))),
          t !== g &&
            ((g = t ?? null),
            null != t &&
              f.ID_REGEX.test(t) &&
              ((s = !0),
              v.track(t),
              H.pendingUsages.push({ key: t, timestamp: Date.now() }))),
          s
        );
      }
      function R() {
        let e =
          a.default.frecencyWithoutFetchingLatest.guildAndChannelFrecency
            ?.guildAndChannels;
        if (null == e) return !1;
        v.overwriteHistory(
          n().mapValues(e, e => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter(e => e > 0),
          })),
          H.pendingUsages
        );
      }
      let H = { pendingUsages: [] };
      class N extends i.default.PersistedStore {
        static #e = (this.displayName = "FrecencyStore");
        static #t = (this.persistKey = "FrecencyStore");
        initialize(e) {
          this.waitFor(h.default, d.default),
            null != e &&
              ((e.pendingUsages = e.pendingUsages.filter(
                e => null != e && f.ID_REGEX.test(e.key)
              )),
              (H = e)),
            this.syncWith([a.default], R);
        }
        getState() {
          return H;
        }
        hasPendingUsage() {
          return H.pendingUsages.length > 0;
        }
        get frecencyWithoutFetchingLatest() {
          return v;
        }
        getFrequentlyWithoutFetchingLatest() {
          return v.frequently;
        }
        getScoreWithoutFetchingLatest(e) {
          return v.getFrecency(e) ?? 0;
        }
        getScoreForDMWithoutFetchingLatest(e) {
          let t = c.default.getDMFromUserId(e);
          return null != t ? this.getScoreWithoutFetchingLatest(t) : 0;
        }
        getMaxScore() {
          return 10 * p;
        }
        getBonusScore() {
          return 100;
        }
      }
      var I = new N(r.default, {
        CHANNEL_SELECT: _,
        VOICE_CHANNEL_SELECT: _,
        USER_SETTINGS_PROTO_UPDATE: function (e) {
          let {
            settings: { type: t },
            wasSaved: l,
          } = e;
          return (
            t === C.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS &&
            !!l &&
            ((H.pendingUsages = []), !0)
          );
        },
      });
    },
    733679: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return c;
          },
        });
      var s = l("735250"),
        n = l("470079"),
        i = l("803997"),
        r = l.n(i),
        u = l("974328"),
        a = l("413856");
      function c(e) {
        let { children: t, "aria-label": l, className: i, position: c } = e,
          o = n.useRef(null),
          d = l ?? ("string" == typeof t && t);
        return (0, s.jsx)(u.Tooltip, {
          position: c ?? "top",
          delay: 500,
          text: t,
          "aria-label": d,
          children: l => {
            let { onMouseEnter: n, onMouseLeave: u } = l;
            return (0, s.jsx)("div", {
              className: r()(i, a.overflow),
              ref: o,
              "aria-hidden": e["aria-hidden"],
              onMouseEnter: () => {
                let { current: e } = o;
                null != e && e.offsetWidth < e.scrollWidth && n?.();
              },
              onMouseLeave: u,
              children: t,
            });
          },
        });
      }
    },
    253156: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("336328"),
        i = l("94234"),
        r = l("262113"),
        u = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: n = "currentColor",
              foreground: i,
              ...u
            } = e;
            return (0, s.jsxs)("svg", {
              ...(0, r.default)(u),
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, s.jsx)("path", {
                  className: i,
                  fill: n,
                  d: "M19.0999 3.99994V5.12653L4.84988 8.26441V18.1176C4.84988 18.5496 5.14628 18.9251 5.56998 19.0315L9.36998 19.9726C9.44598 19.9905 9.52388 19.9999 9.59988 19.9999C9.89533 19.9999 10.1775 19.8635 10.3599 19.6235L10.5599 19.3593V16.2214L9.21798 17.9943L6.74988 17.3825V15.2112L10.5599 16.0509V13.92C10.5599 12.3294 11.8493 11.04 13.4399 11.04H20.9999V3.99994H19.0999Z",
                }),
                (0, s.jsx)("path", {
                  className: i,
                  fill: n,
                  d: "M3.89988 8.25994H1.99988V15.2941H3.89988V8.25994Z",
                }),
                (0, s.jsx)("path", {
                  className: i,
                  fill: n,
                  d: "M12.48 13.92C12.48 13.3898 12.9098 12.96 13.44 12.96H22.56C23.0901 12.96 23.52 13.3898 23.52 13.92V20.2213C23.52 20.7514 23.0901 21.1813 22.56 21.1813H18.1294C17.8916 21.1813 17.6623 21.2695 17.4858 21.4289L15.0408 23.6378C14.8865 23.7772 14.64 23.6677 14.64 23.4597V21.4213C14.64 21.2887 14.5325 21.1813 14.4 21.1813H13.44C12.9098 21.1813 12.48 20.7514 12.48 20.2213V13.92Z",
                }),
              ],
            });
          },
          i.AnnouncementsIcon,
          void 0,
          { size: 24 }
        );
    },
    701789: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("336328"),
        i = l("4780"),
        r = l("262113"),
        u = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: n = "currentColor",
              foreground: i,
              ...u
            } = e;
            return (0, s.jsx)("svg", {
              ...(0, r.default)(u),
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              children: (0, s.jsx)("path", {
                className: i,
                fill: n,
                d: "M12 2C6.486 2 2 6.486 2 12C2 17.515 6.486 22 12 22C14.039 22 15.993 21.398 17.652 20.259L16.521 18.611C15.195 19.519 13.633 20 12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12V12.782C20 14.17 19.402 15 18.4 15L18.398 15.018C18.338 15.005 18.273 15 18.209 15H18C17.437 15 16.6 14.182 16.6 13.631V12C16.6 9.464 14.537 7.4 12 7.4C9.463 7.4 7.4 9.463 7.4 12C7.4 14.537 9.463 16.6 12 16.6C13.234 16.6 14.35 16.106 15.177 15.313C15.826 16.269 16.93 17 18 17L18.002 16.981C18.064 16.994 18.129 17 18.195 17H18.4C20.552 17 22 15.306 22 12.782V12C22 6.486 17.514 2 12 2ZM12 14.599C10.566 14.599 9.4 13.433 9.4 11.999C9.4 10.565 10.566 9.399 12 9.399C13.434 9.399 14.6 10.565 14.6 11.999C14.6 13.433 13.434 14.599 12 14.599Z",
              }),
            });
          },
          i.AtIcon,
          void 0,
          { size: 24 }
        );
    },
    477661: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("336328"),
        i = l("703448"),
        r = l("262113"),
        u = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: n = "currentColor",
              foreground: i,
              ...u
            } = e;
            return (0, s.jsx)("svg", {
              ...(0, r.default)(u),
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              children: (0, s.jsx)("path", {
                className: i,
                fill: n,
                d: "M21.526 8.149C21.231 7.966 20.862 7.951 20.553 8.105L18 9.382V7C18 5.897 17.103 5 16 5H4C2.897 5 2 5.897 2 7V17C2 18.104 2.897 19 4 19H16C17.103 19 18 18.104 18 17V14.618L20.553 15.894C20.694 15.965 20.847 16 21 16C21.183 16 21.365 15.949 21.526 15.851C21.82 15.668 22 15.347 22 15V9C22 8.653 21.82 8.332 21.526 8.149Z",
              }),
            });
          },
          i.VideoIcon,
          void 0,
          { size: 24 }
        );
    },
    94345: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return r;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("336328"),
        i = l("848848"),
        r = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: l = 16,
              color: n = "currentColor",
              className: i,
              foreground: r,
              background: u,
            } = e;
            return (0, s.jsx)("svg", {
              className: i,
              width: t,
              height: l,
              viewBox: "0 0 16 16",
              children: (0, s.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                  (0, s.jsx)("path", {
                    className: u,
                    fill: n,
                    d: "M14,8.99751269 L14,11.6666667 L11.3333333,9 L11.3333333,11.3333333 C11.3333333,11.7 11.0333333,12 10.6666667,12 L2.66666667,12 C2.3,12 2,11.7 2,11.3333333 L2,4.66666667 C2,4.3 2.3,4 2.66666667,4 L9.01132709,4 L9.00227441,7.99603187 L9.00227328,7.9999947 C9.00321074,8.55227865 9.4516853,8.9992333 10.0039693,8.99829584 L11.96,8.99497564 L14,8.99751269 Z",
                    opacity: ".6",
                  }),
                  (0, s.jsx)("path", {
                    className: r,
                    fill: n,
                    fillRule: "nonzero",
                    d: "M15.1,3.2 L15.1,2 C15.1,0.88 14.05,0 13,0 C11.95,0 10.9,0.88 10.9,2 L10.9,3.2 C10.45,3.2 10,3.68 10,4.16 L10,6.96 C10,7.52 10.45,8 10.9,8 L15.025,8 C15.55,8 16,7.52 16,7.04 L16,4.24 C16,3.68 15.55,3.2 15.1,3.2 Z M14,3 L12,3 L12,1.92857143 C12,1.35714286 12.4666667,1 13,1 C13.5333333,1 14,1.35714286 14,1.92857143 L14,3 Z",
                  }),
                ],
              }),
            });
          },
          i.VideoLockIcon,
          void 0,
          { size: 16 }
        );
    },
    829704: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("336328"),
        i = l("713666"),
        r = l("262113"),
        u = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: n = "currentColor",
              ...i
            } = e;
            return (0, s.jsxs)("svg", {
              ...(0, r.default)(i),
              width: t,
              height: l,
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, s.jsx)("path", {
                  d: "M5.00328 17.5C4.69218 17.5 4.4566 17.2189 4.51097 16.9126L4.99838 14.1667H2.26014C1.94953 14.1667 1.71409 13.8864 1.76763 13.5805L1.8843 12.9138C1.92617 12.6746 2.13392 12.5 2.37681 12.5H5.29005L6.17338 7.5H3.43514C3.12453 7.5 2.88909 7.21977 2.94263 6.91381L3.0593 6.24714C3.10117 6.00789 3.30892 5.83333 3.55181 5.83333H6.46505L6.98347 2.91262C7.02584 2.67391 7.23335 2.5 7.47578 2.5H8.12681C8.43792 2.5 8.67349 2.78107 8.61912 3.08738L8.13171 5.83333H13.1317L13.6501 2.91262C13.6925 2.67391 13.9 2.5 14.1424 2.5H14.7935C15.1046 2.5 15.3402 2.78107 15.2858 3.08738L14.7984 5.83333H17.5366C17.8472 5.83333 18.0827 6.11356 18.0291 6.41952L17.9125 7.08619C17.8706 7.32544 17.6628 7.5 17.4199 7.5H14.5067L14.2417 9H12.5754L12.8404 7.5H7.84041L6.95708 12.5H8.99835V14.1667H6.66505L6.14662 17.0874C6.10425 17.3261 5.89675 17.5 5.65431 17.5H5.00328Z",
                  fill: n,
                }),
                (0, s.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M10.4 14C10.4 12.0118 12.0118 10.4 14 10.4C15.9883 10.4 17.6 12.0118 17.6 14C17.6 14.7775 17.3536 15.4975 16.9345 16.0859L18.9243 18.0758C19.1586 18.3101 19.1586 18.69 18.9243 18.9243C18.69 19.1586 18.3101 19.1586 18.0758 18.9243L16.0859 16.9345C15.4975 17.3536 14.7775 17.6 14 17.6C12.0118 17.6 10.4 15.9883 10.4 14ZM14 11.6C12.6745 11.6 11.6 12.6745 11.6 14C11.6 15.3255 12.6745 16.4 14 16.4C15.3255 16.4 16.4 15.3255 16.4 14C16.4 12.6745 15.3255 11.6 14 11.6Z",
                  fill: n,
                }),
              ],
            });
          },
          i.ChannelListMagnifyingGlassIcon,
          void 0,
          { size: 24 }
        );
    },
    294107: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return r;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("336328"),
        i = l("837150"),
        r = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: l = 16,
              color: n = "currentColor",
              className: i,
              foreground: r,
            } = e;
            return (0, s.jsx)("svg", {
              width: t,
              height: l,
              className: i,
              viewBox: "0 0 16 16",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, s.jsx)("path", {
                transform: "translate(2.000000, 2.000000)",
                fillRule: "nonzero",
                fill: n,
                className: r,
                d: "M4,0 L4,3 L0,3 L0,0 L4,0 Z M12,4 L12,7 L8,7 L8,4 L12,4 Z M8,9 L12,9 L12,12 L8,12 L8,9.33333333 L8,9 Z M7,7 L3,7 L3,10 L7,10 L7,12 L3,12 L1,12 L1,4 L3,4 L3,5 L7,5 L7,7 Z",
              }),
            });
          },
          i.FolderIcon,
          void 0,
          { size: 16 }
        );
    },
    736807: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return r;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("336328"),
        i = l("401773"),
        r = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: n = "currentColor",
              className: i,
              foreground: r,
            } = e;
            return (0, s.jsxs)("svg", {
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              className: i,
              children: [
                (0, s.jsx)("path", {
                  className: r,
                  fill: n,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M12.75 18L12.75 6L11.25 6L11.25 18L12.75 18Z",
                }),
                (0, s.jsx)("path", {
                  className: r,
                  fill: n,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M6.5 12.75C5.80964 12.75 5.25 13.3096 5.25 14V18H3.75V14C3.75 12.4812 4.98122 11.25 6.5 11.25H17.5C19.0188 11.25 20.25 12.4812 20.25 14V18H18.75V14C18.75 13.3096 18.1904 12.75 17.5 12.75H6.5Z",
                }),
                (0, s.jsx)("path", {
                  className: r,
                  fill: n,
                  d: "M12 7C10.6193 7 9.5 5.88071 9.5 4.5C9.5 3.11929 10.6193 2 12 2C13.3807 2 14.5 3.11929 14.5 4.5C14.5 5.88071 13.3807 7 12 7Z",
                }),
                (0, s.jsx)("path", {
                  className: r,
                  fill: n,
                  d: "M19.5 22C18.1193 22 17 20.8807 17 19.5C17 18.1193 18.1193 17 19.5 17C20.8807 17 22 18.1193 22 19.5C22 20.8807 20.8807 22 19.5 22Z",
                }),
                (0, s.jsx)("path", {
                  className: r,
                  fill: n,
                  d: "M12 22C10.6193 22 9.5 20.8807 9.5 19.5C9.5 18.1193 10.6193 17 12 17C13.3807 17 14.5 18.1193 14.5 19.5C14.5 20.8807 13.3807 22 12 22Z",
                }),
                (0, s.jsx)("path", {
                  className: r,
                  fill: n,
                  d: "M4.5 22C3.11929 22 2 20.8807 2 19.5C2 18.1193 3.11929 17 4.5 17C5.88071 17 7 18.1193 7 19.5C7 20.8807 5.88071 22 4.5 22Z",
                }),
              ],
            });
          },
          i.HubIcon,
          void 0,
          { size: 24 }
        );
    },
    699054: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return r;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("336328"),
        i = l("609104"),
        r = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: n = "currentColor",
              className: i,
              foreground: r,
            } = e;
            return (0, s.jsx)("svg", {
              width: t,
              height: l,
              viewBox: "0 0 40 40",
              fill: "none",
              className: i,
              children: (0, s.jsx)("path", {
                className: r,
                fill: n,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M33 34.5833V7.49998H35V36.6666H9C6.791 36.6666 5 34.801 5 32.5V7.49998C5 5.19894 6.791 3.33331 9 3.33331H31V30.4166H9C7.8955 30.4166 7 31.3485 7 32.5C7 33.6515 7.8955 34.5833 9 34.5833H33ZM23.9718 9.99998L15.8889 17.9915L12.7086 14.8441L10 17.5058L15.8885 23.3333L26.6667 12.6669L23.9718 9.99998Z",
              }),
            });
          },
          i.BookCheckIcon,
          void 0,
          { size: 24 }
        );
    },
    899186: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("336328"),
        i = l("237673"),
        r = l("262113"),
        u = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: n = "currentColor",
              className: i,
              foreground: u,
              ...a
            } = e;
            return (0, s.jsx)("svg", {
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              className: i,
              ...(0, r.default)(a),
              children: (0, s.jsx)("path", {
                className: u,
                fill: n,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z",
              }),
            });
          },
          i.TextIcon,
          void 0,
          { size: 24 }
        );
    },
    546509: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return r;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("336328"),
        i = l("391478"),
        r = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: n = "currentColor",
              className: i,
              foreground: r,
              background: u,
            } = e;
            return (0, s.jsxs)("svg", {
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              className: i,
              children: [
                (0, s.jsx)("path", {
                  className: u,
                  fill: n,
                  d: "M14 8C14 7.44772 13.5523 7 13 7H9.76001L10.3657 3.58738C10.4201 3.28107 10.1845 3 9.87344 3H8.88907C8.64664 3 8.43914 3.17391 8.39677 3.41262L7.76001 7H4.18011C3.93722 7 3.72946 7.17456 3.68759 7.41381L3.51259 8.41381C3.45905 8.71977 3.69449 9 4.00511 9H7.41001L6.35001 15H2.77011C2.52722 15 2.31946 15.1746 2.27759 15.4138L2.10259 16.4138C2.04905 16.7198 2.28449 17 2.59511 17H6.00001L5.39427 20.4126C5.3399 20.7189 5.57547 21 5.88657 21H6.87094C7.11337 21 7.32088 20.8261 7.36325 20.5874L8.00001 17H14L13.3943 20.4126C13.3399 20.7189 13.5755 21 13.8866 21H14.8709C15.1134 21 15.3209 20.8261 15.3632 20.5874L16 17H19.5799C19.8228 17 20.0306 16.8254 20.0724 16.5862L20.2474 15.5862C20.301 15.2802 20.0655 15 19.7549 15H16.35L16.6758 13.1558C16.7823 12.5529 16.3186 12 15.7063 12C15.2286 12 14.8199 12.3429 14.7368 12.8133L14.3504 15H8.35045L9.41045 9H13C13.5523 9 14 8.55228 14 8Z",
                }),
                (0, s.jsx)("path", {
                  className: r,
                  fill: n,
                  d: "M21.025 5V4C21.025 2.88 20.05 2 19 2C17.95 2 17 2.88 17 4V5C16.4477 5 16 5.44772 16 6V9C16 9.55228 16.4477 10 17 10H19H21C21.5523 10 22 9.55228 22 9V5.975C22 5.43652 21.5635 5 21.025 5ZM20 5H18V4C18 3.42857 18.4667 3 19 3C19.5333 3 20 3.42857 20 4V5Z",
                }),
              ],
            });
          },
          i.TextLockIcon,
          void 0,
          { size: 24 }
        );
    },
    541194: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return r;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("336328"),
        i = l("993479"),
        r = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: n = "currentColor",
              className: i,
              foreground: r,
              background: u,
            } = e;
            return (0, s.jsxs)("svg", {
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              className: i,
              children: [
                (0, s.jsx)("path", {
                  className: r,
                  fill: n,
                  d: "M14 8C14 7.44772 13.5523 7 13 7H9.76001L10.3657 3.58738C10.4201 3.28107 10.1845 3 9.87344 3H8.88907C8.64664 3 8.43914 3.17391 8.39677 3.41262L7.76001 7H4.18011C3.93722 7 3.72946 7.17456 3.68759 7.41381L3.51259 8.41381C3.45905 8.71977 3.69449 9 4.00511 9H7.41001L6.35001 15H2.77011C2.52722 15 2.31946 15.1746 2.27759 15.4138L2.10259 16.4138C2.04905 16.7198 2.28449 17 2.59511 17H6.00001L5.39427 20.4126C5.3399 20.7189 5.57547 21 5.88657 21H6.87094C7.11337 21 7.32088 20.8261 7.36325 20.5874L8.00001 17H14L13.3943 20.4126C13.3399 20.7189 13.5755 21 13.8866 21H14.8709C15.1134 21 15.3209 20.8261 15.3632 20.5874L16 17H19.5799C19.8228 17 20.0306 16.8254 20.0724 16.5862L20.2474 15.5862C20.301 15.2802 20.0655 15 19.7549 15H16.35L16.6758 13.1558C16.7823 12.5529 16.3186 12 15.7063 12C15.2286 12 14.8199 12.3429 14.7368 12.8133L14.3504 15H8.35045L9.41045 9H13C13.5523 9 14 8.55228 14 8Z",
                }),
                (0, s.jsx)("path", {
                  className: u,
                  fill: n,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M19.8914 3.80204L22.2438 8.55654C22.5726 9.22119 22.0891 9.99999 21.3475 10L16.6179 10C15.8745 10 15.391 9.21769 15.7235 8.55279L18.1007 3.79829C18.4701 3.05951 19.5251 3.06172 19.8914 3.80204ZM18.4998 5H19.4999V7.5H18.4999L18.4998 5ZM18.4998 8.49887C18.4998 8.77589 18.7238 9 18.9998 9C19.2759 9 19.4999 8.77589 19.4999 8.49887C19.4999 8.22224 19.2759 7.99773 18.9998 7.99773C18.7238 7.99773 18.4998 8.22224 18.4998 8.49887Z",
                }),
              ],
            });
          },
          i.TextWarningIcon,
          void 0,
          { size: 24 }
        );
    },
    283218: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("336328"),
        i = l("320687"),
        r = l("262113"),
        u = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: n = "currentColor",
              foreground: i,
              ...u
            } = e;
            return (0, s.jsx)("svg", {
              ...(0, r.default)(u),
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, s.jsx)("path", {
                className: i,
                fill: n,
                d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z",
              }),
            });
          },
          i.ChatIcon,
          void 0,
          { size: 24 }
        );
    },
    233293: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("336328"),
        i = l("547585"),
        r = l("262113"),
        u = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: n = "currentColor",
              foreground: i,
              ...u
            } = e;
            return (0, s.jsx)("svg", {
              ...(0, r.default)(u),
              width: t,
              height: l,
              viewBox: "0 0 20 20",
              fill: "none",
              children: (0, s.jsx)("path", {
                className: i,
                fill: n,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M6.56929 14.6869H2.34375C1.97079 14.6869 1.61311 14.5387 1.34938 14.275C1.08566 14.0113 0.9375 13.6536 0.9375 13.2806V8.12437C0.9375 6.38389 1.6289 4.7147 2.85961 3.484C4.09032 2.25329 5.75951 1.56189 7.49999 1.56189C9.24047 1.56189 10.9097 2.25329 12.1404 3.484C12.6953 4.03895 13.1406 4.68307 13.4623 5.38267C14.9101 5.5973 16.2513 6.29124 17.2655 7.36251C18.4194 8.58133 19.0625 10.1959 19.0625 11.8744V17.0306C19.0625 17.4036 18.9144 17.7613 18.6506 18.025C18.3869 18.2887 18.0292 18.4369 17.6563 18.4369H12.5C11.1428 18.4369 9.81899 18.0162 8.71072 17.2328C7.7871 16.58 7.05103 15.7019 6.56929 14.6869ZM4.18544 4.80982C5.06451 3.93075 6.25679 3.43689 7.49999 3.43689C8.74319 3.43689 9.93549 3.93075 10.8146 4.80983C11.6936 5.6889 12.1875 6.88119 12.1875 8.12439C12.1875 9.36759 11.6936 10.5599 10.8146 11.439C9.93549 12.318 8.74321 12.8119 7.50001 12.8119H7.20268C7.19767 12.8118 7.19266 12.8118 7.18764 12.8119H2.8125V8.12438C2.8125 6.88118 3.30636 5.6889 4.18544 4.80982ZM8.672 14.5814C8.97763 15.0132 9.35591 15.3928 9.79299 15.7017C10.5847 16.2614 11.5305 16.5619 12.5 16.5619H17.1875V11.8744C17.1875 10.6755 16.7281 9.52219 15.9039 8.65159C15.3804 8.09865 14.735 7.68644 14.027 7.44246C14.0506 7.66798 14.0625 7.89557 14.0625 8.12439C14.0625 9.86487 13.3711 11.5341 12.1404 12.7648C11.1896 13.7156 9.97697 14.3445 8.672 14.5814Z",
              }),
            });
          },
          i.ForumIcon,
          void 0,
          { size: 24 }
        );
    },
    170309: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("336328"),
        i = l("197346"),
        r = l("262113"),
        u = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: n = "currentColor",
              foreground: i,
              ...u
            } = e;
            return (0, s.jsxs)("svg", {
              ...(0, r.default)(u),
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, s.jsx)("path", {
                  d: "M13 4C13 3.66767 13.0405 3.3448 13.1169 3.03607C11.8881 2.28254 10.4651 1.87427 8.99999 1.87427C6.91141 1.87427 4.90838 2.70395 3.43153 4.1808C1.95469 5.65764 1.125 7.66067 1.125 9.74925V15.9368C1.125 16.3843 1.30279 16.8135 1.61926 17.13C1.93573 17.4465 2.36495 17.6243 2.8125 17.6243H7.88314C8.46123 18.8423 9.34451 19.896 10.4529 20.6794C11.7828 21.6195 13.3714 22.1242 15 22.1243H21.1875C21.6351 22.1243 22.0643 21.9465 22.3808 21.63C22.6972 21.3135 22.875 20.8843 22.875 20.4368V14.2492C22.875 13.3832 22.7323 12.5314 22.4596 11.7253C22.0074 11.9026 21.5151 12 21 12H20.1557C20.4625 12.7033 20.625 13.4682 20.625 14.2493V19.8743H15C13.8365 19.8743 12.7017 19.5136 11.7516 18.8421C11.2271 18.4713 10.7732 18.0159 10.4064 17.4977C11.9724 17.2135 13.4275 16.4587 14.5685 15.3177C15.5076 14.3786 16.185 13.2267 16.5538 11.9754C15.7646 11.8878 15.0447 11.5706 14.4624 11.0921C14.2192 12.0813 13.7097 12.9945 12.9775 13.7267C11.9226 14.7816 10.4919 15.3743 9.00001 15.3743H3.375V9.74925C3.375 8.25741 3.96763 6.82668 5.02252 5.77179C6.07741 4.7169 7.50815 4.12427 8.99999 4.12427C10.4918 4.12427 11.9226 4.7169 12.9775 5.77179L13 5.79444V4Z",
                  fill: n,
                  className: i,
                }),
                (0, s.jsx)("path", {
                  d: "M21.025 4V5C21.5635 5 22 5.43652 22 5.975V9C22 9.55228 21.5523 10 21 10H17C16.4477 10 16 9.55228 16 9V6C16 5.44772 16.4477 5 17 5V4C17 2.88 17.95 2 19 2C20.05 2 21.025 2.88 21.025 4ZM18 5H20V4C20 3.42857 19.5333 3 19 3C18.4667 3 18 3.42857 18 4V5Z",
                  fill: n,
                  className: i,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                }),
              ],
            });
          },
          i.ForumLockIcon,
          void 0,
          { size: 24 }
        );
    },
    1936: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("336328"),
        i = l("457558"),
        r = l("262113"),
        u = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: n = "currentColor",
              foreground: i,
              ...u
            } = e;
            return (0, s.jsxs)("svg", {
              ...(0, r.default)(u),
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, s.jsx)("path", {
                  d: "M13 4C13 3.66767 13.0405 3.3448 13.1169 3.03607C11.8881 2.28254 10.4651 1.87427 8.99999 1.87427C6.91141 1.87427 4.90838 2.70395 3.43153 4.1808C1.95469 5.65764 1.125 7.66067 1.125 9.74925V15.9368C1.125 16.3843 1.30279 16.8135 1.61926 17.13C1.93573 17.4465 2.36495 17.6243 2.8125 17.6243H7.88314C8.46123 18.8423 9.34451 19.896 10.4529 20.6794C11.7828 21.6195 13.3714 22.1242 15 22.1243H21.1875C21.6351 22.1243 22.0643 21.9465 22.3808 21.63C22.6972 21.3135 22.875 20.8843 22.875 20.4368V14.2492C22.875 13.3832 22.7323 12.5314 22.4596 11.7253C22.0074 11.9026 21.5151 12 21 12H20.1557C20.4625 12.7033 20.625 13.4682 20.625 14.2493V19.8743H15C13.8365 19.8743 12.7017 19.5136 11.7516 18.8421C11.2271 18.4713 10.7732 18.0159 10.4064 17.4977C11.9724 17.2135 13.4275 16.4587 14.5685 15.3177C15.5076 14.3786 16.185 13.2267 16.5538 11.9754C15.7646 11.8878 15.0447 11.5706 14.4624 11.0921C14.2192 12.0813 13.7097 12.9945 12.9775 13.7267C11.9226 14.7816 10.4919 15.3743 9.00001 15.3743H3.375V9.74925C3.375 8.25741 3.96763 6.82668 5.02252 5.77179C6.07741 4.7169 7.50815 4.12427 8.99999 4.12427C10.4918 4.12427 11.9226 4.7169 12.9775 5.77179L13 5.79444V4Z",
                  fill: n,
                  className: i,
                }),
                (0, s.jsx)("path", {
                  d: "M22.2821 7.55654L19.9173 2.80204C19.5491 2.06172 18.4885 2.05951 18.1172 2.79829L15.7274 7.55279C15.3932 8.21769 15.8793 9 16.6265 9L21.3811 9C22.1265 8.99999 22.6126 8.22119 22.2821 7.55654ZM19.5237 4H18.5184L18.5184 6.5H19.5237V4ZM19.021 8C18.7436 8 18.5184 7.77589 18.5184 7.49887C18.5184 7.22224 18.7436 6.99773 19.021 6.99773C19.2985 6.99773 19.5237 7.22224 19.5237 7.49887C19.5237 7.77589 19.2985 8 19.021 8Z",
                  fill: n,
                  className: i,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                }),
              ],
            });
          },
          i.ForumWarningIcon,
          void 0,
          { size: 24 }
        );
    },
    93710: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("336328"),
        i = l("320687"),
        r = l("262113"),
        u = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: n = "currentColor",
              strokeWidth: i = "2.5",
              foreground: u,
              ...a
            } = e;
            return (0, s.jsx)("svg", {
              ...(0, r.default)(a),
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, s.jsx)("path", {
                className: u,
                stroke: n,
                strokeWidth: i,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M4.25892 16.5936C3.14073 14.7086 2.74913 12.4802 3.15765 10.3269C3.56618 8.17362 4.74672 6.24353 6.47761 4.89906C8.2085 3.55459 10.3707 2.88823 12.5581 3.02511C14.7455 3.16199 16.8077 4.0927 18.3575 5.64247C19.9073 7.19223 20.838 9.25445 20.9749 11.4419C21.1118 13.6293 20.4454 15.7915 19.101 17.5224C17.7565 19.2532 15.8264 20.4338 13.6731 20.8423C11.5198 21.2509 9.29146 20.8593 7.40646 19.7411L7.40648 19.741L4.29805 20.6291C4.16944 20.6659 4.03335 20.6676 3.90387 20.634C3.7744 20.6005 3.65625 20.5329 3.56167 20.4383C3.4671 20.3437 3.39953 20.2256 3.36598 20.0961C3.33243 19.9666 3.33412 19.8306 3.37086 19.7019L4.25898 16.5935L4.25892 16.5936Z",
              }),
            });
          },
          i.ChatIcon,
          void 0,
          { size: 24 }
        );
    },
    857363: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("336328"),
        i = l("998262"),
        r = l("262113"),
        u = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: n = "currentColor",
              foreground: i,
              ...u
            } = e;
            return 16 === t || 16 === l
              ? (0, s.jsx)("svg", {
                  ...(0, r.default)(u),
                  width: t,
                  height: l,
                  viewBox: "0 0 16 16",
                  children: (0, s.jsx)("path", {
                    fill: n,
                    className: i,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z",
                  }),
                })
              : (0, s.jsx)("svg", {
                  ...(0, r.default)(u),
                  width: t,
                  height: l,
                  viewBox: "0 0 24 24",
                  children: (0, s.jsx)("path", {
                    fill: n,
                    className: i,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z",
                  }),
                });
          },
          i.SettingsIcon,
          void 0,
          { size: 24 }
        );
    },
    719287: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("336328"),
        i = l("847869"),
        r = l("262113"),
        u = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: n = "currentColor",
              foreground: i,
              ...u
            } = e;
            return (0, s.jsx)("svg", {
              ...(0, r.default)(u),
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, s.jsx)("path", {
                className: i,
                d: "M12.3345 2.71469L21.0315 10.542C21.3721 10.8486 21.1553 11.4137 20.697 11.4137H19V18.4137C19 18.9659 18.5523 19.4137 18 19.4137H15C14.4477 19.4137 14 18.9659 14 18.4137V13.4137H10V18.4137C10 18.9659 9.55228 19.4137 9 19.4137H6C5.44771 19.4137 5 18.9659 5 18.4137V11.4137H3.30298C2.84473 11.4137 2.62789 10.8486 2.96849 10.542L11.6655 2.71469C11.8557 2.54356 12.1443 2.54356 12.3345 2.71469Z",
                fill: n,
              }),
            });
          },
          i.HomeIcon,
          void 0,
          { size: 24 }
        );
    },
    145134: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("336328"),
        i = l("793012"),
        r = l("262113"),
        u = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: n = "currentColor",
              foreground: i,
              ...u
            } = e;
            return (0, s.jsx)("svg", {
              ...(0, r.default)(u),
              width: t,
              height: l,
              viewBox: "0 0 20 20",
              fill: "none",
              children: (0, s.jsx)("path", {
                transform: "translate(2, 1.5)",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.2 0C1.43269 0 0 1.43269 0 3.2V12.8C0 14.5673 1.43269 16 3.2 16H12.8C14.5673 16 16 14.5673 16 12.8V3.2C16 1.43269 14.5673 0 12.8 0H3.2ZM6.4 4.8C6.4 3.91616 5.68256 3.2 4.8 3.2C3.91552 3.2 3.2 3.91616 3.2 4.8C3.2 5.68448 3.91552 6.4 4.8 6.4C5.68256 6.4 6.4 5.68448 6.4 4.8ZM5.6 9.6L3.2 12.8H12.8L10.4 7.2L7.2 11.2L5.6 9.6Z",
                className: i,
                fill: n,
              }),
            });
          },
          i.ImageIcon,
          void 0,
          { size: 24 }
        );
    },
    177791: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("336328"),
        i = l("938329"),
        r = l("262113"),
        u = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: n = "currentColor",
              foreground: i,
              ...u
            } = e;
            return (0, s.jsxs)("svg", {
              ...(0, r.default)(u),
              width: t,
              height: l,
              viewBox: "0 0 20 20",
              fill: "none",
              children: [
                (0, s.jsxs)("g", {
                  clipPath: "url(#clip0_1139_61304)",
                  children: [
                    (0, s.jsx)("path", {
                      transform: "translate(2, 1.5)",
                      d: "M15.2 3.27273V5.72727C15.2 6.17727 14.84 6.54545 14.4 6.54545H11.2C10.76 6.54545 10.4 6.17727 10.4 5.72727V3.27273C10.4 2.82273 10.76 2.45455 11.2 2.45455V1.63636C11.2 0.736364 11.92 0 12.8 0C13.68 0 14.4 0.736364 14.4 1.63636V2.45455C14.84 2.45455 15.2 2.82273 15.2 3.27273ZM12 2.45455H13.6V1.63636C13.6 1.18636 13.24 0.818182 12.8 0.818182C12.36 0.818182 12 1.18636 12 1.63636V2.45455Z",
                      fill: n,
                      className: i,
                    }),
                    (0, s.jsx)("path", {
                      transform: "translate(2, 1.5)",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M8.8 1.63636H3.2C1.43269 1.63636 0 3.06905 0 4.83636V14.4364C0 16.2036 1.43269 17.6364 3.2 17.6364H12.8C14.5673 17.6364 16 16.2036 16 14.4364V8.03636H10.4C9.51632 8.03636 8.8 7.32002 8.8 6.43636V1.63636ZM4.8 4.83636C5.68256 4.83636 6.4 5.55252 6.4 6.43636C6.4 7.32084 5.68256 8.03636 4.8 8.03636C3.91552 8.03636 3.2 7.32084 3.2 6.43636C3.2 5.55252 3.91552 4.83636 4.8 4.83636ZM3.2 14.4364L5.6 11.2364L7.2 12.8364L10.4 8.83636L12.8 14.4364H3.2Z",
                      fill: n,
                      className: i,
                    }),
                  ],
                }),
                (0, s.jsx)("defs", {
                  children: (0, s.jsx)("clipPath", {
                    id: "clip0_1139_61304",
                    children: (0, s.jsx)("rect", {
                      width: t,
                      height: l,
                      fill: n,
                    }),
                  }),
                }),
              ],
            });
          },
          i.ImageLockIcon,
          void 0,
          { size: 24 }
        );
    },
    803322: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("336328"),
        i = l("277084"),
        r = l("262113"),
        u = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: n = "currentColor",
              foreground: i,
              ...u
            } = e;
            return (0, s.jsxs)("svg", {
              ...(0, r.default)(u),
              width: t,
              height: l,
              viewBox: "0 0 20 20",
              fill: "none",
              children: [
                (0, s.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M13.9071 1.4744L15.9233 5.36444C16.2053 5.90825 15.7907 6.54545 15.1551 6.54545H11.1011C10.4639 6.54545 10.0496 5.90538 10.3345 5.36137L12.3721 1.47133C12.6887 0.866872 13.5931 0.86868 13.9071 1.4744ZM12.7142 2.45455H13.5714V4.5H12.7143L12.7142 2.45455ZM12.7142 5.31726C12.7142 5.54391 12.9063 5.72727 13.1429 5.72727C13.3794 5.72727 13.5714 5.54391 13.5714 5.31726C13.5714 5.09092 13.3794 4.90723 13.1429 4.90723C12.9063 4.90723 12.7142 5.09092 12.7142 5.31726Z",
                  fill: n,
                  className: i,
                  transform: "translate(1.5, 1)",
                }),
                (0, s.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M8.8 1.63636H3.2C1.43269 1.63636 0 3.06905 0 4.83636V14.4364C0 16.2036 1.43269 17.6364 3.2 17.6364H12.8C14.5673 17.6364 16 16.2036 16 14.4364V8.03636H10.4C9.51632 8.03636 8.8 7.32002 8.8 6.43636V1.63636ZM4.8 4.83636C5.68256 4.83636 6.4 5.55252 6.4 6.43636C6.4 7.32084 5.68256 8.03636 4.8 8.03636C3.91552 8.03636 3.2 7.32084 3.2 6.43636C3.2 5.55252 3.91552 4.83636 4.8 4.83636ZM3.2 14.4364L5.6 11.2364L7.2 12.8364L10.4 8.83636L12.8 14.4364H3.2Z",
                  fill: n,
                  className: i,
                  transform: "translate(1.5, 1)",
                }),
              ],
            });
          },
          i.ImageWarningIcon,
          void 0,
          { size: 24 }
        );
    },
    484656: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("336328"),
        i = l("94234"),
        r = l("262113"),
        u = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: l = 16,
              color: n = "currentColor",
              foreground: i,
              ...u
            } = e;
            return (0, s.jsxs)("svg", {
              ...(0, r.default)(u),
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              children: [
                (0, s.jsx)("path", {
                  d: "M3.9 8.26H2V15.2941H3.9V8.26Z",
                  fill: n,
                  className: i,
                }),
                (0, s.jsx)("path", {
                  d: "M19.1 4V5.12659L4.85 8.26447V18.1176C4.85 18.5496 5.1464 18.9252 5.5701 19.0315L9.3701 19.9727C9.4461 19.9906 9.524 20 9.6 20C9.89545 20 10.1776 19.8635 10.36 19.6235L12.7065 16.5242L19.1 17.9304V19.0588H21V4H19.1ZM9.2181 17.9944L6.75 17.3826V15.2113L10.6706 16.0753L9.2181 17.9944Z",
                  fill: n,
                  className: i,
                }),
              ],
            });
          },
          i.AnnouncementsIcon,
          void 0,
          { size: 16 }
        );
    },
    659940: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return r;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("336328"),
        i = l("168050"),
        r = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: l = 16,
              color: n = "currentColor",
              className: i,
              foreground: r,
            } = e;
            return (0, s.jsxs)("svg", {
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              className: i,
              children: [
                (0, s.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: n,
                  className: r,
                  d: "M22.545 4.87988V5.87988H23.28C23.4126 5.87988 23.52 5.98733 23.52 6.11988V10.6399C23.52 10.7724 23.4126 10.8799 23.28 10.8799H17.76C17.6275 10.8799 17.52 10.7724 17.52 10.6399V6.11988C17.52 5.98733 17.6275 5.87988 17.76 5.87988H18.52V4.87988C18.52 3.75988 19.47 2.87988 20.52 2.87988C21.57 2.87988 22.545 3.75988 22.545 4.87988ZM19.52 5.87988H21.52V4.87988C21.52 4.30845 21.0534 3.87988 20.52 3.87988C19.9867 3.87988 19.52 4.30845 19.52 4.87988V5.87988Z",
                }),
                (0, s.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: n,
                  className: r,
                  d: "M4.85 8.26429L15.84 5.84426V10.5599C15.84 11.6202 16.6996 12.4799 17.76 12.4799H21V19.0586H19.1V17.9302L12.7065 16.524L10.36 19.6233C10.1776 19.8633 9.89545 19.9998 9.6 19.9998C9.524 19.9998 9.4461 19.9904 9.3701 19.9725L5.5701 19.0313C5.1464 18.925 4.85 18.5495 4.85 18.1175V8.26429ZM9.2181 17.9942L6.75 17.3824V15.2111L10.6706 16.0751L9.2181 17.9942Z",
                }),
                (0, s.jsx)("path", {
                  d: "M3.9 8.25981H2V15.2939H3.9V8.25981Z",
                  fill: n,
                }),
              ],
            });
          },
          i.AnnouncementsLockIcon,
          void 0,
          { size: 16 }
        );
    },
    73632: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return r;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("336328"),
        i = l("640570"),
        r = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: l = 16,
              color: n = "currentColor",
              className: i,
              foreground: r,
              background: u,
            } = e;
            return (0, s.jsxs)("svg", {
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              className: i,
              children: [
                (0, s.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: n,
                  className: r,
                  d: "M20.4683 4.76211L22.8094 9.51661C23.1366 10.1813 22.6554 10.9601 21.9174 10.9601L17.2104 10.9601C16.4706 10.9601 15.9894 10.1778 16.3203 9.51286L18.6861 4.75836C19.0537 4.01957 20.1037 4.02179 20.4683 4.76211ZM19.0833 5.96007H20.0786V8.46007H19.0834L19.0833 5.96007ZM19.0833 9.45894C19.0833 9.73596 19.3063 9.96007 19.5809 9.96007C19.8556 9.96007 20.0786 9.73596 20.0786 9.45894C20.0786 9.18231 19.8556 8.9578 19.5809 8.9578C19.3063 8.9578 19.0833 9.18231 19.0833 9.45894Z",
                }),
                (0, s.jsx)("path", {
                  className: u,
                  fill: n,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M4.85 8.26445L16.7165 5.65143L15.1067 9.30608C14.5477 10.5751 15.4771 12 16.8638 12H21V19.0588H19.1V17.9303L12.7065 16.5242L10.36 19.6235C10.1776 19.8635 9.89545 20 9.6 20C9.524 20 9.4461 19.9906 9.3701 19.9727L5.5701 19.0315C5.1464 18.9252 4.85 18.5496 4.85 18.1176V8.26445ZM9.2181 17.9943L6.75 17.3826V15.2113L10.6706 16.0753L9.2181 17.9943Z",
                }),
                (0, s.jsx)("path", {
                  d: "M3.9 8.25998H2V15.2941H3.9V8.25998Z",
                  fill: n,
                }),
              ],
            });
          },
          i.AnnouncementsWarningIcon,
          void 0,
          { size: 16 }
        );
    },
    677379: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("336328"),
        i = l("640570"),
        r = l("262113"),
        u = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: n = "currentColor",
              foreground: i,
              ...u
            } = e;
            return (0, s.jsxs)("svg", {
              ...(0, r.default)(u),
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, s.jsx)("path", {
                  className: i,
                  fill: n,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M20.4681 4.76205L22.8092 9.51655C23.1365 10.1812 22.6552 10.96 21.9172 10.96L17.2103 10.96C16.4705 10.96 15.9893 10.1777 16.3201 9.5128L18.686 4.75829C19.0536 4.01951 20.1036 4.02173 20.4681 4.76205ZM19.0832 5.96001H20.0785V8.46001H19.0832L19.0832 5.96001ZM19.0832 9.45888C19.0832 9.7359 19.3061 9.96001 19.5808 9.96001C19.8555 9.96001 20.0784 9.7359 20.0784 9.45888C20.0784 9.18225 19.8555 8.95774 19.5808 8.95774C19.3061 8.95774 19.0832 9.18225 19.0832 9.45888Z",
                }),
                (0, s.jsx)("path", {
                  className: i,
                  fill: n,
                  d: "M16.6811 5.6591L4.84988 8.26437V18.1175C4.84988 18.5495 5.14628 18.9251 5.56998 19.0314L9.36998 19.9726C9.44598 19.9905 9.52388 19.9999 9.59988 19.9999C9.89533 19.9999 10.1775 19.8634 10.3599 19.6234L10.5599 19.3592V16.2214L9.21798 17.9943L6.74988 17.3825V15.2112L10.5599 16.0508V13.9199C10.5599 12.3294 11.8493 11.0399 13.4399 11.0399H13.92L16.6811 5.6591Z",
                }),
                (0, s.jsx)("path", {
                  className: i,
                  fill: n,
                  d: "M3.89988 8.2599H1.99988V15.294H3.89988V8.2599Z",
                }),
                (0, s.jsx)("path", {
                  className: i,
                  fill: n,
                  d: "M13.44 12.96C12.9098 12.96 12.48 13.3898 12.48 13.92V20.2213C12.48 20.7515 12.9098 21.1813 13.44 21.1813H14.4C14.5325 21.1813 14.64 21.2887 14.64 21.4213V23.4597C14.64 23.6677 14.8865 23.7773 15.0408 23.6378L17.4858 21.4289C17.6623 21.2695 17.8916 21.1813 18.1294 21.1813H22.56C23.0901 21.1813 23.52 20.7515 23.52 20.2213V13.92C23.52 13.3898 23.0901 12.96 22.56 12.96H13.44Z",
                }),
              ],
            });
          },
          i.AnnouncementsWarningIcon,
          void 0,
          { size: 24 }
        );
    },
    674535: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("336328"),
        i = l("993479"),
        r = l("262113"),
        u = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: n = "currentColor",
              foreground: i,
              ...u
            } = e;
            return (0, s.jsxs)("svg", {
              ...(0, r.default)(u),
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, s.jsx)("path", {
                  className: i,
                  fill: n,
                  d: "M14.4 7C14.5326 7 14.64 7.10745 14.64 7.24V8.76C14.64 8.89255 14.5326 9 14.4 9H9.41045L8.35045 15H10.56V17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H14.4Z",
                }),
                (0, s.jsx)("path", {
                  className: i,
                  fill: n,
                  d: "M12.48 13.92C12.48 13.3898 12.9098 12.96 13.44 12.96H22.56C23.0902 12.96 23.52 13.3898 23.52 13.92V20.2213C23.52 20.7515 23.0902 21.1813 22.56 21.1813H18.1294C17.8917 21.1813 17.6623 21.2695 17.4859 21.4289L15.0409 23.6378C14.8866 23.7773 14.64 23.6677 14.64 23.4597V21.4213C14.64 21.2887 14.5326 21.1813 14.4 21.1813H13.44C12.9098 21.1813 12.48 20.7515 12.48 20.2213V13.92Z",
                }),
                (0, s.jsx)("path", {
                  className: i,
                  fill: n,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M22.8093 8.55658L20.4681 3.80208C20.1036 3.06176 19.0536 3.05954 18.686 3.79833L16.3201 8.55283C15.9893 9.21773 16.4705 10 17.2103 10L21.9173 10C22.6553 10 23.1365 9.22122 22.8093 8.55658ZM20.0785 5.00004H19.0832L19.0833 7.50004H20.0785V5.00004ZM19.5808 9.00004C19.3061 9.00004 19.0832 8.77593 19.0832 8.49891C19.0832 8.22228 19.3061 7.99777 19.5808 7.99777C19.8555 7.99777 20.0785 8.22228 20.0785 8.49891C20.0785 8.77593 19.8555 9.00004 19.5808 9.00004Z",
                }),
              ],
            });
          },
          i.TextWarningIcon,
          void 0,
          { size: 24 }
        );
    },
    563775: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("336328"),
        i = l("168050"),
        r = l("262113"),
        u = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: n = "currentColor",
              foreground: i,
              ...u
            } = e;
            return (0, s.jsxs)("svg", {
              ...(0, r.default)(u),
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, s.jsx)("path", {
                  className: i,
                  fill: n,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M22.545 4.88V5.88H23.28C23.4126 5.88 23.52 5.98746 23.52 6.12001V10.64C23.52 10.7726 23.4126 10.88 23.28 10.88H17.76C17.6275 10.88 17.52 10.7726 17.52 10.64V6.12C17.52 5.98746 17.6275 5.88 17.76 5.88H18.52V4.88C18.52 3.76 19.47 2.88 20.52 2.88C21.57 2.88 22.545 3.76 22.545 4.88ZM19.52 5.88H21.52V4.88C21.52 4.30858 21.0534 3.88 20.52 3.88C19.9867 3.88 19.52 4.30858 19.52 4.88V5.88Z",
                }),
                (0, s.jsx)("path", {
                  className: i,
                  fill: n,
                  d: "M15.84 5.84438L4.85 8.26441V18.1176C4.85 18.5496 5.1464 18.9251 5.5701 19.0315L9.3701 19.9726C9.4461 19.9905 9.524 19.9999 9.6 19.9999C9.89545 19.9999 10.1776 19.8635 10.36 19.6235L10.56 19.3593V16.2214L9.2181 17.9943L6.75 17.3825V15.2112L10.56 16.0509V13.92C10.56 12.3294 11.8494 11.04 13.44 11.04H15.84V5.84438Z",
                }),
                (0, s.jsx)("path", {
                  className: i,
                  fill: n,
                  d: "M3.9 8.25994H2V15.2941H3.9V8.25994Z",
                }),
                (0, s.jsx)("path", {
                  className: i,
                  fill: n,
                  d: "M13.44 12.96C12.9098 12.96 12.48 13.3898 12.48 13.92V20.2213C12.48 20.7515 12.9098 21.1813 13.44 21.1813H14.4C14.5326 21.1813 14.64 21.2887 14.64 21.4213V23.4597C14.64 23.6677 14.8866 23.7773 15.0409 23.6378L17.4859 21.4289C17.6623 21.2695 17.8917 21.1813 18.1294 21.1813H22.56C23.0902 21.1813 23.52 20.7515 23.52 20.2213V13.92C23.52 13.3898 23.0902 12.96 22.56 12.96H13.44Z",
                }),
              ],
            });
          },
          i.AnnouncementsLockIcon,
          void 0,
          { size: 24 }
        );
    },
    795865: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("336328"),
        i = l("391478"),
        r = l("262113"),
        u = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: n = "currentColor",
              foreground: i,
              ...u
            } = e;
            return (0, s.jsxs)("svg", {
              ...(0, r.default)(u),
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, s.jsx)("path", {
                  className: i,
                  fill: n,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M22.545 4.91992V3.91992C22.545 2.79992 21.57 1.91992 20.52 1.91992C19.47 1.91992 18.52 2.79992 18.52 3.91992V4.91992H17.76C17.6275 4.91992 17.52 5.02737 17.52 5.15992V9.67992C17.52 9.81247 17.6275 9.91992 17.76 9.91992H23.28C23.4126 9.91992 23.52 9.81247 23.52 9.67992V5.15992C23.52 5.02737 23.4126 4.91992 23.28 4.91992H22.545ZM21.52 4.91992H19.52V3.91992C19.52 3.34849 19.9867 2.91992 20.52 2.91992C21.0533 2.91992 21.52 3.34849 21.52 3.91992V4.91992Z",
                }),
                (0, s.jsx)("path", {
                  className: i,
                  fill: n,
                  d: "M15.44 6.99992C15.5725 6.99992 15.68 7.10737 15.68 7.23992V8.75992C15.68 8.89247 15.5725 8.99992 15.44 8.99992H9.41045L8.35045 14.9999H10.56V16.9999H8.00001L7.36325 20.5873C7.32088 20.826 7.11337 20.9999 6.87094 20.9999H5.88657C5.57547 20.9999 5.3399 20.7189 5.39427 20.4125L6.00001 16.9999H2.59511C2.28449 16.9999 2.04905 16.7197 2.10259 16.4137L2.27759 15.4137C2.31946 15.1745 2.52722 14.9999 2.77011 14.9999H6.35001L7.41001 8.99992H4.00511C3.69449 8.99992 3.45905 8.71969 3.51259 8.41373L3.68759 7.41373C3.72946 7.17448 3.93722 6.99992 4.18011 6.99992H7.76001L8.39677 3.41254C8.43914 3.17384 8.64664 2.99992 8.88907 2.99992H9.87344C10.1845 2.99992 10.4201 3.28099 10.3657 3.58731L9.76001 6.99992H15.44Z",
                }),
                (0, s.jsx)("path", {
                  className: i,
                  fill: n,
                  d: "M13.44 12.9599C12.9098 12.9599 12.48 13.3897 12.48 13.9199V20.2212C12.48 20.7514 12.9098 21.1812 13.44 21.1812H14.4C14.5326 21.1812 14.64 21.2886 14.64 21.4212V23.4597C14.64 23.6677 14.8866 23.7772 15.0409 23.6377L17.4859 21.4289C17.6623 21.2694 17.8917 21.1812 18.1294 21.1812H22.56C23.0902 21.1812 23.52 20.7514 23.52 20.2212V13.9199C23.52 13.3897 23.0902 12.9599 22.56 12.9599H13.44Z",
                }),
              ],
            });
          },
          i.TextLockIcon,
          void 0,
          { size: 24 }
        );
    },
    877915: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("336328"),
        i = l("260945"),
        r = l("262113"),
        u = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: n = "currentColor",
              foreground: i,
              ...u
            } = e;
            return (0, s.jsxs)("svg", {
              ...(0, r.default)(u),
              width: t,
              height: l,
              viewBox: "0 0 16 16",
              fill: "none",
              children: [
                (0, s.jsx)("path", {
                  className: i,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M7 15H9V8H12.5L15 5.5L12.5 3H9V1H7V3H1L3.5 5.5L1 8H7V15Z",
                  fill: n,
                }),
                (0, s.jsx)("path", {
                  className: i,
                  d: "M5 14C5 12.8954 5.89543 12 7 12H9C10.1046 12 11 12.8954 11 14V15H5V14Z",
                  fill: n,
                }),
              ],
            });
          },
          i.SignPostIcon,
          void 0,
          { size: 24 }
        );
    },
    502083: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return r;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("336328"),
        i = l("376946"),
        r = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: n = "currentColor",
              className: i,
              foreground: r,
              background: u,
            } = e;
            return (0, s.jsxs)("svg", {
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              className: i,
              children: [
                (0, s.jsx)("path", {
                  className: u,
                  fill: n,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M15 12C15 12.0007 15 12.0013 15 12.002C15 12.553 14.551 13.002 14 13.002V15.002C15.654 15.002 17 13.657 17 12.002C17 12.0013 17 12.0007 17 12H15ZM19 12C19 12.0007 19 12.0013 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 12.0013 21 12.0007 21 12H19ZM10.293 3.29604C10.579 3.01004 11.009 2.92504 11.383 3.07904C11.757 3.23204 12 3.59904 12 4.00204V20.002C12 20.407 11.757 20.772 11.383 20.927C11.009 21.082 10.579 20.996 10.293 20.71L6 16.002H3C2.45 16.002 2 15.552 2 15.002V9.00204C2 8.45304 2.45 8.00204 3 8.00204H6L10.293 3.29604Z",
                }),
                (0, s.jsx)("path", {
                  className: r,
                  fill: n,
                  d: "M21.025 5V4C21.025 2.88 20.05 2 19 2C17.95 2 17 2.88 17 4V5C16.4477 5 16 5.44772 16 6V9C16 9.55228 16.4477 10 17 10H19H21C21.5523 10 22 9.55228 22 9V5.975C22 5.43652 21.5635 5 21.025 5ZM20 5H18V4C18 3.42857 18.4667 3 19 3C19.5333 3 20 3.42857 20 4V5Z",
                }),
              ],
            });
          },
          i.VoiceLockIcon,
          void 0,
          { size: 24 }
        );
    },
    157916: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("336328"),
        i = l("379455"),
        r = l("262113"),
        u = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: n = "currentColor",
              foreground: i,
              ...u
            } = e;
            return (0, s.jsxs)("svg", {
              ...(0, r.default)(u),
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              children: [
                (0, s.jsx)("path", {
                  className: i,
                  fill: n,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M15 12C15 12.0007 15 12.0013 15 12.002C15 12.553 14.551 13.002 14 13.002V15.002C15.654 15.002 17 13.657 17 12.002C17 12.0013 17 12.0007 17 12H15ZM19 12C19 12.0007 19 12.0013 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 12.0013 21 12.0007 21 12H19ZM10.293 3.29604C10.579 3.01004 11.009 2.92504 11.383 3.07904C11.757 3.23204 12 3.59904 12 4.00204V20.002C12 20.407 11.757 20.772 11.383 20.927C11.009 21.082 10.579 20.996 10.293 20.71L6 16.002H3C2.45 16.002 2 15.552 2 15.002V9.00204C2 8.45304 2.45 8.00204 3 8.00204H6L10.293 3.29604Z",
                }),
                (0, s.jsx)("path", {
                  className: i,
                  fill: n,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M19.8916 3.80204L22.2439 8.55654C22.5728 9.22119 22.0892 9.99999 21.3476 10L16.618 10C15.8746 10 15.3912 9.21769 15.7236 8.55279L18.1008 3.79829C18.4702 3.05951 19.5253 3.06172 19.8916 3.80204ZM18.4999 5H19.5V7.5H18.5L18.4999 5ZM18.4999 8.49887C18.4999 8.77589 18.724 9 19 9C19.276 9 19.5 8.77589 19.5 8.49887C19.5 8.22224 19.276 7.99773 19 7.99773C18.724 7.99773 18.4999 8.22224 18.4999 8.49887Z",
                }),
              ],
            });
          },
          i.VoiceWarningIcon,
          void 0,
          { size: 24 }
        );
    },
    14093: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("336328"),
        i = l("318154"),
        r = l("262113"),
        u = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 32,
              height: l = 32,
              color: n = "currentColor",
              ...i
            } = e;
            return (0, s.jsxs)("svg", {
              ...(0, r.default)(i),
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, s.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M22.025 2V3C22.5635 3 23 3.43652 23 3.975V7C23 7.55228 22.5523 8 22 8H18C17.4477 8 17 7.55228 17 7V4C17 3.44772 17.4477 3 18 3V2C18 0.88 18.95 0 20 0C21.05 0 22.025 0.88 22.025 2ZM19 3H21V2C21 1.42857 20.5333 1 20 1C19.4667 1 19 1.42857 19 2V3Z",
                  fill: n,
                }),
                (0, s.jsx)("path", {
                  d: "M15 2.41495C14.0462 2.14467 13.0398 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13C2.5 7.75 6.75 3.5 12 3.5C13.0485 3.5 14.0571 3.66952 15 3.98267V2.41495Z",
                  fill: n,
                }),
                (0, s.jsx)("path", {
                  d: "M21.0173 10C21.3305 10.9429 21.5 11.9515 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 11.9602 22.8553 10.9538 22.585 10H21.0173Z",
                  fill: n,
                }),
                (0, s.jsx)("path", {
                  d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13Z",
                  fill: n,
                }),
                (0, s.jsx)("path", {
                  d: "M8.5 19.5V20H15.5V19.5C15.5 17.8 14.06 16.5 12 16.5C9.94 16.5 8.5 17.8 8.5 19.5Z",
                  fill: n,
                }),
                (0, s.jsx)("path", {
                  d: "M7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13Z",
                  fill: n,
                }),
              ],
            });
          },
          i.StageLockIcon,
          void 0,
          { size: 32 }
        );
    },
    31948: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("336328"),
        i = l("834979"),
        r = l("262113"),
        u = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: n = "currentColor",
              foreground: i,
              ...u
            } = e;
            return (0, s.jsx)("svg", {
              ...(0, r.default)(u),
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              children: (0, s.jsx)("path", {
                className: i,
                fill: n,
                d: "M21.707 13.293l-11-11C10.519 2.105 10.266 2 10 2H3c-.553 0-1 .447-1 1v7c0 .266.105.519.293.707l11 11c.195.195.451.293.707.293s.512-.098.707-.293l7-7c.391-.391.391-1.023 0-1.414zM7 9c-1.106 0-2-.896-2-2 0-1.106.894-2 2-2 1.104 0 2 .894 2 2 0 1.104-.896 2-2 2z",
              }),
            });
          },
          i.TagIcon,
          void 0,
          { size: 24 }
        );
    },
    658934: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("336328"),
        i = l("237673"),
        r = l("262113"),
        u = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: n = "currentColor",
              foreground: i,
              ...u
            } = e;
            return (0, s.jsxs)("svg", {
              ...(0, r.default)(u),
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, s.jsx)("path", {
                  className: i,
                  fill: n,
                  d: "M5.43309 21C5.35842 21 5.30189 20.9325 5.31494 20.859L5.99991 17H2.14274C2.06819 17 2.01168 16.9327 2.02453 16.8593L2.33253 15.0993C2.34258 15.0419 2.39244 15 2.45074 15H6.34991L7.40991 9H3.55274C3.47819 9 3.42168 8.93274 3.43453 8.85931L3.74253 7.09931C3.75258 7.04189 3.80244 7 3.86074 7H7.75991L8.45234 3.09903C8.46251 3.04174 8.51231 3 8.57049 3H10.3267C10.4014 3 10.4579 3.06746 10.4449 3.14097L9.75991 7H15.7599L16.4523 3.09903C16.4625 3.04174 16.5123 3 16.5705 3H18.3267C18.4014 3 18.4579 3.06746 18.4449 3.14097L17.7599 7H21.6171C21.6916 7 21.7481 7.06725 21.7353 7.14069L21.4273 8.90069C21.4172 8.95811 21.3674 9 21.3091 9H17.4099L17.0495 11.04H15.05L15.4104 9H9.41035L8.35035 15H10.5599V17H7.99991L7.30749 20.901C7.29732 20.9583 7.24752 21 7.18934 21H5.43309Z",
                }),
                (0, s.jsx)("path", {
                  className: i,
                  fill: n,
                  d: "M13.4399 12.96C12.9097 12.96 12.4799 13.3898 12.4799 13.92V20.2213C12.4799 20.7515 12.9097 21.1813 13.4399 21.1813H14.3999C14.5325 21.1813 14.6399 21.2887 14.6399 21.4213V23.4597C14.6399 23.6677 14.8865 23.7773 15.0408 23.6378L17.4858 21.4289C17.6622 21.2695 17.8916 21.1813 18.1294 21.1813H22.5599C23.0901 21.1813 23.5199 20.7515 23.5199 20.2213V13.92C23.5199 13.3898 23.0901 12.96 22.5599 12.96H13.4399Z",
                }),
              ],
            });
          },
          i.TextIcon,
          void 0,
          { size: 24 }
        );
    },
    394611: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          AnnouncementsIcon: function () {
            return r;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("600186"),
        i = l("11768");
      let r = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: r = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...a
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, i.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              fillRule: "evenodd",
              d: "M19.56 2a3 3 0 0 0-2.46 1.28 3.85 3.85 0 0 1-1.86 1.42l-8.9 3.18a.5.5 0 0 0-.34.47v10.09a3 3 0 0 0 2.27 2.9l.62.16c1.57.4 3.15-.56 3.55-2.12a.92.92 0 0 1 1.23-.63l2.36.94c.42.27.79.62 1.07 1.03A3 3 0 0 0 19.56 22h.94c.83 0 1.5-.67 1.5-1.5v-17c0-.83-.67-1.5-1.5-1.5h-.94Zm-8.53 15.8L8 16.7v1.73a1 1 0 0 0 .76.97l.62.15c.5.13 1-.17 1.12-.67.1-.41.29-.78.53-1.1Z",
              clipRule: "evenodd",
              className: u,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M2 10c0-1.1.9-2 2-2h.5c.28 0 .5.22.5.5v7a.5.5 0 0 1-.5.5H4a2 2 0 0 1-2-2v-4Z",
              className: u,
            }),
          ],
        });
      };
    },
    804423: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          AnnouncementsLockIcon: function () {
            return r;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("600186"),
        i = l("11768");
      let r = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: r = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...a
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, i.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              fillRule: "evenodd",
              d: "M16 4h.5v-.5a2.5 2.5 0 0 1 5 0V4h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm4-.5V4h-2v-.5a1 1 0 1 1 2 0Z",
              clipRule: "evenodd",
              className: u,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              fillRule: "evenodd",
              d: "M12.33 5.74a.5.5 0 0 1 .67.47V9a3 3 0 0 0 3 3h5.5c.28 0 .5.22.5.5v8c0 .83-.67 1.5-1.5 1.5h-.94a3 3 0 0 1-2.46-1.28 3.86 3.86 0 0 0-1.07-1.03l-2.36-.94a.92.92 0 0 0-1.23.63 2.92 2.92 0 0 1-3.55 2.12l-.62-.15A3 3 0 0 1 6 18.44V8.35c0-.2.13-.4.33-.47l6-2.14Zm-1.3 12.06L8 16.7v1.73a1 1 0 0 0 .76.97l.62.15c.5.13 1-.17 1.12-.67.1-.41.29-.78.53-1.1Z",
              clipRule: "evenodd",
              className: u,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M2 10c0-1.1.9-2 2-2h.5c.28 0 .5.22.5.5v7a.5.5 0 0 1-.5.5H4a2 2 0 0 1-2-2v-4Z",
              className: u,
            }),
          ],
        });
      };
    },
    247797: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          AnnouncementsWarningIcon: function () {
            return r;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("600186"),
        i = l("11768");
      let r = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: r = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...a
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, i.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              fillRule: "evenodd",
              d: "M18.09 1.63c.4-.7 1.43-.7 1.82 0l3.96 6.9c.38.66-.12 1.47-.91 1.47h-7.92c-.79 0-1.3-.81-.91-1.48l3.96-6.9Zm.46 1.87h.9c.3 0 .52.26.5.55l-.22 2.02c-.01.16-.17.26-.33.23a1.92 1.92 0 0 0-.8 0c-.16.03-.32-.07-.33-.23l-.21-2.02a.5.5 0 0 1 .5-.55ZM19 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
              clipRule: "evenodd",
              className: u,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              fillRule: "evenodd",
              d: "M12.43 5.7a.5.5 0 0 1 .6.72l-.63 1.1c-1.22 2.13.46 4.48 2.64 4.48h6.46c.28 0 .5.22.5.5v8c0 .83-.67 1.5-1.5 1.5h-.94a3 3 0 0 1-2.46-1.28 3.85 3.85 0 0 0-1.07-1.03l-2.36-.94a.92.92 0 0 0-1.23.63 2.92 2.92 0 0 1-3.55 2.12l-.62-.15A3 3 0 0 1 6 18.44V8.35c0-.2.13-.4.33-.47l6.1-2.18Zm-1.4 12.1L8 16.7v1.73a1 1 0 0 0 .76.97l.62.15c.5.13 1-.17 1.12-.67.1-.41.29-.78.53-1.1Z",
              clipRule: "evenodd",
              className: u,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M2 10c0-1.1.9-2 2-2h.5c.28 0 .5.22.5.5v7a.5.5 0 0 1-.5.5H4a2 2 0 0 1-2-2v-4Z",
              className: u,
            }),
          ],
        });
      };
    },
    90383: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          AtIcon: function () {
            return r;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("600186"),
        i = l("11768");
      let r = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: r = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...a
        } = e;
        return (0, s.jsx)("svg", {
          ...(0, i.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, s.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M16.44 6.96c.29 0 .51.25.47.54l-.82 6.34c-.02.08-.03.2-.03.34 0 .71.28 1.07.85 1.07.49 0 .94-.21 1.36-.63.43-.42.77-1 1.02-1.72.26-.75.38-1.57.38-2.48 0-1.35-.29-2.54-.87-3.56a5.92 5.92 0 0 0-2.45-2.35 7.68 7.68 0 0 0-3.61-.83c-1.55 0-2.96.37-4.22 1.1a7.66 7.66 0 0 0-2.96 3.07 9.53 9.53 0 0 0-1.09 4.66c0 1.45.26 2.77.78 3.95a6.3 6.3 0 0 0 2.47 2.81 8.3 8.3 0 0 0 4.36 1.05 12.43 12.43 0 0 0 5.35-1.18.5.5 0 0 1 .7.24l.46 1.07c.1.22.02.47-.19.59-.77.43-1.69.77-2.75 1.02-1.23.3-2.48.44-3.76.44-2.18 0-4-.44-5.48-1.33a8.1 8.1 0 0 1-3.27-3.57 11.93 11.93 0 0 1-1.07-5.12c0-2.24.47-4.19 1.4-5.84a9.7 9.7 0 0 1 3.86-3.8c1.62-.9 3.4-1.34 5.36-1.34 1.8 0 3.4.37 4.8 1.12 1.4.72 2.5 1.76 3.28 3.1a8.86 8.86 0 0 1 1.16 4.56c0 1.36-.23 2.57-.7 3.64a5.81 5.81 0 0 1-1.92 2.47c-.82.58-1.76.87-2.81.87a2.4 2.4 0 0 1-1.6-.5c-.4-.35-.65-.78-.73-1.32-.3.55-.74 1-1.36 1.34a4.3 4.3 0 0 1-2.03.48A3.4 3.4 0 0 1 8 16C7.33 15.16 7 14 7 12.5c0-1.14.2-2.16.6-3.05.43-.89 1-1.57 1.73-2.06a4.3 4.3 0 0 1 4.27-.31c.47.29.82.68 1.07 1.16l.3-.95c.06-.2.25-.33.46-.33h1.02Zm-5.06 8.24c.8 0 1.45-.35 1.97-1.04.51-.7.77-1.6.77-2.7 0-.88-.18-1.56-.53-2.03a1.76 1.76 0 0 0-1.5-.73c-.8 0-1.45.35-1.97 1.04a4.28 4.28 0 0 0-.78 2.67c0 .9.17 1.58.51 2.06.36.49.87.73 1.53.73Z",
            className: u,
          }),
        });
      };
    },
    939423: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          BookCheckIcon: function () {
            return r;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("600186"),
        i = l("11768");
      let r = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: r = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...a
        } = e;
        return (0, s.jsx)("svg", {
          ...(0, i.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, s.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            fillRule: "evenodd",
            d: "M15 2a3 3 0 0 1 3 3v12H5.5a1.5 1.5 0 0 0 0 3h14a.5.5 0 0 0 .5-.5V5h1a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h10Zm-.3 5.7a1 1 0 0 0-1.4-1.4L9 10.58l-2.3-2.3a1 1 0 0 0-1.4 1.42l3 3a1 1 0 0 0 1.4 0l5-5Z",
            clipRule: "evenodd",
            className: u,
          }),
        });
      };
    },
    468835: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          ChannelListMagnifyingGlassIcon: function () {
            return r;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("600186"),
        i = l("11768");
      let r = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: r = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...a
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, i.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fillRule: "evenodd",
              d: "M18.5 23c.88 0 1.7-.25 2.4-.69l1.4 1.4a1 1 0 0 0 1.4-1.42l-1.39-1.4A4.5 4.5 0 1 0 18.5 23Zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
              clipRule: "evenodd",
              fill: "string" == typeof r ? r : r.css,
              className: u,
            }),
            (0, s.jsx)("path", {
              d: "M3 3a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2H3ZM2 8a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 11a1 1 0 1 0 0 2h11a1 1 0 1 0 0-2H3ZM2 16a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 19a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H3Z",
              fill: "string" == typeof r ? r : r.css,
              className: u,
            }),
          ],
        });
      };
    },
    81107: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          ChatIcon: function () {
            return r;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("600186"),
        i = l("11768");
      let r = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: r = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...a
        } = e;
        return (0, s.jsx)("svg", {
          ...(0, i.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, s.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z",
            className: u,
          }),
        });
      };
    },
    628031: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          FolderIcon: function () {
            return r;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("600186"),
        i = l("11768");
      let r = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: r = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...a
        } = e;
        return (0, s.jsx)("svg", {
          ...(0, i.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, s.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M2 5a3 3 0 0 1 3-3h3.93a2 2 0 0 1 1.66.9L12 5h7a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Z",
            className: u,
          }),
        });
      };
    },
    355988: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          ForumIcon: function () {
            return r;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("600186"),
        i = l("11768");
      let r = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: r = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...a
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, i.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M18.91 12.98a5.45 5.45 0 0 1 2.18 6.2c-.1.33-.09.68.1.96l.83 1.32a1 1 0 0 1-.84 1.54h-5.5A5.6 5.6 0 0 1 10 17.5a5.6 5.6 0 0 1 5.68-5.5c1.2 0 2.32.36 3.23.98Z",
              className: u,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M19.24 10.86c.32.16.72-.02.74-.38L20 10c0-4.42-4.03-8-9-8s-9 3.58-9 8c0 1.5.47 2.91 1.28 4.11.14.21.12.49-.06.67l-1.51 1.51A1 1 0 0 0 2.4 18h5.1a.5.5 0 0 0 .49-.5c0-4.2 3.5-7.5 7.68-7.5 1.28 0 2.5.3 3.56.86Z",
              className: u,
            }),
          ],
        });
      };
    },
    123328: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          ForumLockIcon: function () {
            return r;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("600186"),
        i = l("11768");
      let r = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: r = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...a
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, i.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              fillRule: "evenodd",
              d: "M16 4h.5v-.5a2.5 2.5 0 0 1 5 0V4h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm4-.5V4h-2v-.5a1 1 0 1 1 2 0Z",
              clipRule: "evenodd",
              className: u,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M13.58 3.23c.24-.33.16-.86-.24-.96C12.59 2.1 11.8 2 11 2c-4.97 0-9 3.58-9 8 0 1.5.47 2.91 1.28 4.11.14.21.12.49-.06.67l-1.51 1.51A1 1 0 0 0 2.4 18h5.1a.5.5 0 0 0 .49-.5c0-3.17 2-5.82 4.77-6.94.29-.11.43-.45.34-.75A3 3 0 0 1 13 9V5c0-.66.22-1.28.58-1.77ZM18.91 12.98a5.45 5.45 0 0 1 2.18 6.2c-.1.33-.09.68.1.96l.83 1.32a1 1 0 0 1-.84 1.54h-5.5A5.6 5.6 0 0 1 10 17.5a5.6 5.6 0 0 1 5.68-5.5c1.2 0 2.32.36 3.23.98Z",
              className: u,
            }),
          ],
        });
      };
    },
    233452: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          ForumWarningIcon: function () {
            return r;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("600186"),
        i = l("11768");
      let r = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: r = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...a
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, i.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              fillRule: "evenodd",
              d: "M18.09 1.63c.4-.7 1.43-.7 1.82 0l3.96 6.9c.38.66-.12 1.47-.91 1.47h-7.92c-.79 0-1.3-.81-.91-1.48l3.96-6.9Zm.46 1.87h.9c.3 0 .52.26.5.55l-.22 2.02c-.01.16-.17.26-.33.23a1.92 1.92 0 0 0-.8 0c-.16.03-.32-.07-.33-.23l-.21-2.02a.5.5 0 0 1 .5-.55ZM19 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
              clipRule: "evenodd",
              className: u,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M14.8 3.34a.48.48 0 0 0-.24-.69A9.94 9.94 0 0 0 11 2c-4.97 0-9 3.58-9 8 0 1.5.47 2.91 1.28 4.11.14.21.12.49-.06.67l-1.51 1.51A1 1 0 0 0 2.4 18h5.1a.5.5 0 0 0 .49-.5c0-2.86 1.62-5.3 3.97-6.56.28-.15.38-.51.25-.8a2.87 2.87 0 0 1 .18-2.61l2.4-4.19ZM18.91 12.98a5.45 5.45 0 0 1 2.18 6.2c-.1.33-.09.68.1.96l.83 1.32a1 1 0 0 1-.84 1.54h-5.5A5.6 5.6 0 0 1 10 17.5a5.6 5.6 0 0 1 5.68-5.5c1.2 0 2.32.36 3.23.98Z",
              className: u,
            }),
          ],
        });
      };
    },
    511619: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          HubIcon: function () {
            return r;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("600186"),
        i = l("11768");
      let r = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: r = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...a
        } = e;
        return (0, s.jsx)("svg", {
          ...(0, i.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, s.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M13 7.83a3 3 0 1 0-2 0V11H8a4 4 0 0 0-4 4v1.17a3 3 0 1 0 2 0V15c0-1.1.9-2 2-2h3v3.17a3 3 0 1 0 2 0V13h3a2 2 0 0 1 2 2v1.17a3 3 0 1 0 2 0V15a4 4 0 0 0-4-4h-3V7.83Z",
            className: u,
          }),
        });
      };
    },
    722531: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          ImageIcon: function () {
            return r;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("600186"),
        i = l("11768");
      let r = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: r = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...a
        } = e;
        return (0, s.jsx)("svg", {
          ...(0, i.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, s.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            fillRule: "evenodd",
            d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm13.35 8.13 3.5 4.67c.37.5.02 1.2-.6 1.2H5.81a.75.75 0 0 1-.59-1.22l1.86-2.32a1.5 1.5 0 0 1 2.34 0l.5.64 2.23-2.97a2 2 0 0 1 3.2 0ZM10.2 5.98c.23-.91-.88-1.55-1.55-.9a.93.93 0 0 1-1.3 0c-.67-.65-1.78-.01-1.55.9a.93.93 0 0 1-.65 1.12c-.9.26-.9 1.54 0 1.8.48.14.77.63.65 1.12-.23.91.88 1.55 1.55.9a.93.93 0 0 1 1.3 0c.67.65 1.78.01 1.55-.9a.93.93 0 0 1 .65-1.12c.9-.26.9-1.54 0-1.8a.93.93 0 0 1-.65-1.12Z",
            clipRule: "evenodd",
            className: u,
          }),
        });
      };
    },
    142509: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          ImageLockIcon: function () {
            return r;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("600186"),
        i = l("11768");
      let r = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: r = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...a
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, i.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              fillRule: "evenodd",
              d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v9.15a4.48 4.48 0 0 0-5.93-.06l-.72-.96a2 2 0 0 0-3.2 0L9.93 16.1l-.5-.64a1.5 1.5 0 0 0-2.35 0l-1.86 2.32A.75.75 0 0 0 5.81 19H13v3H5a3 3 0 0 1-3-3V5Zm8.2.98c.23-.91-.88-1.55-1.55-.9a.93.93 0 0 1-1.3 0c-.67-.65-1.78-.01-1.55.9a.93.93 0 0 1-.65 1.12c-.9.26-.9 1.54 0 1.8.48.14.77.63.65 1.12-.23.91.88 1.55 1.55.9a.93.93 0 0 1 1.3 0c.67.65 1.78.01 1.55-.9a.93.93 0 0 1 .65-1.12c.9-.26.9-1.54 0-1.8a.93.93 0 0 1-.65-1.12Z",
              clipRule: "evenodd",
              className: u,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              fillRule: "evenodd",
              d: "M16 18h.5v-.5a2.5 2.5 0 0 1 5 0v.5h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Zm4-.5v.5h-2v-.5a1 1 0 1 1 2 0Z",
              clipRule: "evenodd",
              className: u,
            }),
          ],
        });
      };
    },
    130919: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          ImageWarningIcon: function () {
            return r;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("600186"),
        i = l("11768");
      let r = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: r = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...a
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, i.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              fillRule: "evenodd",
              d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6.99c0-.48.12-.98.4-1.47l.88-1.53H5.81a.75.75 0 0 1-.59-1.22l1.86-2.32a1.5 1.5 0 0 1 2.34 0l.5.64 2.23-2.97a2 2 0 0 1 3.2 0l.73.98.27-.48a3.06 3.06 0 0 1 5.3 0l.35.62V5a3 3 0 0 0-3-3H5Zm3.65 3.08c.67-.65 1.78-.01 1.55.9-.12.49.17.98.65 1.12.9.26.9 1.54 0 1.8a.93.93 0 0 0-.65 1.12c.23.91-.88 1.55-1.55.9a.93.93 0 0 0-1.3 0c-.67.65-1.78.01-1.55-.9a.93.93 0 0 0-.65-1.12c-.9-.26-.9-1.54 0-1.8a.93.93 0 0 0 .65-1.12c-.23-.91.88-1.55 1.55-.9.36.35.94.35 1.3 0Z",
              clipRule: "evenodd",
              className: u,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              fillRule: "evenodd",
              d: "M19.91 14.63a1.06 1.06 0 0 0-1.82 0l-3.96 6.9c-.38.66.12 1.47.91 1.47h7.92c.79 0 1.3-.81.91-1.48l-3.96-6.9Zm-.46 1.87h-.9a.5.5 0 0 0-.5.55l.22 2.02c.01.16.17.26.33.23a1.93 1.93 0 0 1 .8 0c.16.03.32-.07.33-.23l.21-2.02a.5.5 0 0 0-.5-.55ZM20 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
              clipRule: "evenodd",
              className: u,
            }),
          ],
        });
      };
    },
    67511: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          SettingsIcon: function () {
            return r;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("600186"),
        i = l("11768");
      let r = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: r = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...a
        } = e;
        return (0, s.jsx)("svg", {
          ...(0, i.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, s.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            fillRule: "evenodd",
            d: "M10.56 1.1c-.46.05-.7.53-.64.98.18 1.16-.19 2.2-.98 2.53-.8.33-1.79-.15-2.49-1.1-.27-.36-.78-.52-1.14-.24-.77.59-1.45 1.27-2.04 2.04-.28.36-.12.87.24 1.14.96.7 1.43 1.7 1.1 2.49-.33.8-1.37 1.16-2.53.98-.45-.07-.93.18-.99.64a11.1 11.1 0 0 0 0 2.88c.06.46.54.7.99.64 1.16-.18 2.2.19 2.53.98.33.8-.14 1.79-1.1 2.49-.36.27-.52.78-.24 1.14.59.77 1.27 1.45 2.04 2.04.36.28.87.12 1.14-.24.7-.95 1.7-1.43 2.49-1.1.8.33 1.16 1.37.98 2.53-.07.45.18.93.64.99a11.1 11.1 0 0 0 2.88 0c.46-.06.7-.54.64-.99-.18-1.16.19-2.2.98-2.53.8-.33 1.79.14 2.49 1.1.27.36.78.52 1.14.24.77-.59 1.45-1.27 2.04-2.04.28-.36.12-.87-.24-1.14-.96-.7-1.43-1.7-1.1-2.49.33-.8 1.37-1.16 2.53-.98.45.07.93-.18.99-.64a11.1 11.1 0 0 0 0-2.88c-.06-.46-.54-.7-.99-.64-1.16.18-2.2-.19-2.53-.98-.33-.8.14-1.79 1.1-2.49.36-.27.52-.78.24-1.14a11.07 11.07 0 0 0-2.04-2.04c-.36-.28-.87-.12-1.14.24-.7.96-1.7 1.43-2.49 1.1-.8-.33-1.16-1.37-.98-2.53.07-.45-.18-.93-.64-.99a11.1 11.1 0 0 0-2.88 0ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
            clipRule: "evenodd",
            className: u,
          }),
        });
      };
    },
    332223: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          SignPostIcon: function () {
            return r;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("600186"),
        i = l("11768");
      let r = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: r = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...a
        } = e;
        return (0, s.jsx)("svg", {
          ...(0, i.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, s.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M11 3a1 1 0 1 1 2 0v2h5.75c.16 0 .3.07.4.2l2.63 3.5a.5.5 0 0 1 0 .6l-2.63 3.5a.5.5 0 0 1-.4.2H13v5h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1c0-1.1.9-2 2-2h2v-5H2.8a.5.5 0 0 1-.44-.72L3.9 9.22a.5.5 0 0 0 0-.44L2.36 5.72A.5.5 0 0 1 2.81 5H11V3Z",
            className: u,
          }),
        });
      };
    },
    863411: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          StageLockIcon: function () {
            return r;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("600186"),
        i = l("11768");
      let r = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: r = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...a
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, i.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M21.92 14.08c.32.27.86.15.93-.26A11 11 0 1 0 2.91 18.2c.34.5 1.05.51 1.46.07l.02-.02c.33-.36.34-.91.07-1.33a9 9 0 1 1 16.48-3.88c-.03.22.1.44.29.55.24.14.48.3.7.49Z",
              className: u,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M13.48 16.18c.39.1.45.62.2.93A2.99 2.99 0 0 0 13 19v3.5c0 .26-.2.47-.46.49a11.16 11.16 0 0 1-5.4-1.12 1.52 1.52 0 0 1-.8-1.84 6 6 0 0 1 7.14-3.85ZM18.98 12.58c-.02.24-.23.42-.48.45-.18.02-.35.05-.53.09-.45.1-1-.36-.98-.82L17 12a5 5 0 1 0-9.6 1.94c.17.42.13.9-.18 1.23l-.05.06c-.43.47-1.18.42-1.45-.14a7 7 0 1 1 13.26-2.51Z",
              className: u,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
              className: u,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              fillRule: "evenodd",
              d: "M16.5 18H16a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-.5a2.5 2.5 0 0 0-5 0v.5Zm3.5 0v-.5a1 1 0 1 0-2 0v.5h2Z",
              clipRule: "evenodd",
              className: u,
            }),
          ],
        });
      };
    },
    345540: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          TagIcon: function () {
            return r;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("600186"),
        i = l("11768");
      let r = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: r = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...a
        } = e;
        return (0, s.jsx)("svg", {
          ...(0, i.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, s.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            fillRule: "evenodd",
            d: "M12.24 2a3 3 0 0 0-2.12.88l-8.25 8.25a3 3 0 0 0 0 4.24l6.76 6.76a3 3 0 0 0 4.24 0l8.25-8.25a3 3 0 0 0 .88-2.12V4a2 2 0 0 0-2-2h-7.76ZM17 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
            clipRule: "evenodd",
            className: u,
          }),
        });
      };
    },
    172518: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          TextIcon: function () {
            return r;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("600186"),
        i = l("11768");
      let r = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: r = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...a
        } = e;
        return (0, s.jsx)("svg", {
          ...(0, i.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, s.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            fillRule: "evenodd",
            d: "M10.99 3.16A1 1 0 1 0 9 2.84L8.15 8H4a1 1 0 0 0 0 2h3.82l-.67 4H3a1 1 0 1 0 0 2h3.82l-.8 4.84a1 1 0 0 0 1.97.32L8.85 16h4.97l-.8 4.84a1 1 0 0 0 1.97.32l.86-5.16H20a1 1 0 1 0 0-2h-3.82l.67-4H21a1 1 0 1 0 0-2h-3.82l.8-4.84a1 1 0 1 0-1.97-.32L15.15 8h-4.97l.8-4.84ZM14.15 14l.67-4H9.85l-.67 4h4.97Z",
            clipRule: "evenodd",
            className: u,
          }),
        });
      };
    },
    160379: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          TextLockIcon: function () {
            return r;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("600186"),
        i = l("11768");
      let r = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: r = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...a
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, i.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              fillRule: "evenodd",
              d: "M16 4h.5v-.5a2.5 2.5 0 0 1 5 0V4h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm4-.5V4h-2v-.5a1 1 0 1 1 2 0Z",
              clipRule: "evenodd",
              className: u,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M12.5 8c.28 0 .5.22.5.5V9c0 .1 0 .2.02.31.03.34-.21.69-.56.69H9.85l-.67 4h4.97l.28-1.68c.06-.34.44-.52.77-.43a3 3 0 0 0 .8.11c.27 0 .47.24.43.5l-.25 1.5H20a1 1 0 1 1 0 2h-4.15l-.86 5.16a1 1 0 0 1-1.98-.32l.8-4.84H8.86l-.86 5.16A1 1 0 0 1 6 20.84L6.82 16H3a1 1 0 1 1 0-2h4.15l.67-4H4a1 1 0 1 1 0-2h4.15l.86-5.16a1 1 0 1 1 1.98.32L10.19 8h2.31Z",
              className: u,
            }),
          ],
        });
      };
    },
    21013: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          TextWarningIcon: function () {
            return r;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("600186"),
        i = l("11768");
      let r = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: r = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...a
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, i.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              fillRule: "evenodd",
              d: "M18.09 1.63c.4-.7 1.43-.7 1.82 0l3.96 6.9c.38.66-.12 1.47-.91 1.47h-7.92c-.79 0-1.3-.81-.91-1.48l3.96-6.9Zm.46 1.87h.9c.3 0 .52.26.5.55l-.22 2.02c-.01.16-.17.26-.33.23a1.92 1.92 0 0 0-.8 0c-.16.03-.32-.07-.33-.23l-.21-2.02a.5.5 0 0 1 .5-.55ZM19 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
              clipRule: "evenodd",
              className: u,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M11.45 8c.35 0 .6.35.55.7-.02.2-.02.4 0 .6.04.35-.2.7-.55.7h-1.6l-.67 4h4.97l.26-1.55c.05-.27.31-.45.59-.45h.92c.31 0 .55.28.5.58L16.18 14H20a1 1 0 1 1 0 2h-4.15l-.86 5.16a1 1 0 0 1-1.98-.32l.8-4.84H8.86l-.86 5.16A1 1 0 0 1 6 20.84L6.82 16H3a1 1 0 1 1 0-2h4.15l.67-4H4a1 1 0 0 1 0-2h4.15l.86-5.16a1 1 0 1 1 1.98.32L10.19 8h1.26Z",
              className: u,
            }),
          ],
        });
      };
    },
    922936: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          VideoIcon: function () {
            return r;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("600186"),
        i = l("11768");
      let r = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: r = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...a
        } = e;
        return (0, s.jsx)("svg", {
          ...(0, i.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, s.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M4 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-2.12a1 1 0 0 0 .55.9l3 1.5a1 1 0 0 0 1.45-.9V7.62a1 1 0 0 0-1.45-.9l-3 1.5a1 1 0 0 0-.55.9V7a3 3 0 0 0-3-3H4Z",
            className: u,
          }),
        });
      };
    },
    910378: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          VideoLockIcon: function () {
            return r;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("600186"),
        i = l("11768");
      let r = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: r = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...a
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, i.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M4 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h8.5a.5.5 0 0 0 .5-.5V19a3 3 0 0 1 1.46-2.58.6.6 0 0 0 .26-.32 4.5 4.5 0 0 1 6.96-2.22c.42.32 1.32.02 1.32-.5V7.62a1 1 0 0 0-1.45-.9l-3 1.5a1 1 0 0 0-.55.9V7a3 3 0 0 0-3-3H4Z",
              className: u,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              fillRule: "evenodd",
              d: "M16 18h.5v-.5a2.5 2.5 0 0 1 5 0v.5h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Zm4-.5v.5h-2v-.5a1 1 0 1 1 2 0Z",
              clipRule: "evenodd",
              className: u,
            }),
          ],
        });
      };
    },
    924054: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          VoiceLockIcon: function () {
            return r;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("600186"),
        i = l("11768");
      let r = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: r = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...a
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, i.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              fillRule: "evenodd",
              d: "M16 4h.5v-.5a2.5 2.5 0 0 1 5 0V4h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm4-.5V4h-2v-.5a1 1 0 1 1 2 0Z",
              clipRule: "evenodd",
              className: u,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M11 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-.06a1 1 0 0 1-.74-.32L5.92 17H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2.92l4.28-4.68a1 1 0 0 1 .74-.32H11ZM20.5 12c-.28 0-.5.22-.52.5a7 7 0 0 1-5.13 6.25c-.48.13-.85.55-.85 1.05v.03c0 .6.52 1.06 1.1.92a9 9 0 0 0 6.89-8.25.48.48 0 0 0-.49-.5h-1ZM16.5 12c-.28 0-.5.23-.54.5a3 3 0 0 1-1.33 2.02c-.35.23-.63.6-.63 1.02v.14c0 .63.59 1.1 1.16.83a5 5 0 0 0 2.82-4.01c.02-.28-.2-.5-.48-.5h-1Z",
              className: u,
            }),
          ],
        });
      };
    },
    869277: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          VoiceWarningIcon: function () {
            return r;
          },
        });
      var s = l("735250");
      l("470079");
      var n = l("600186"),
        i = l("11768");
      let r = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: r = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...a
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, i.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              fillRule: "evenodd",
              d: "M18.09 1.63c.4-.7 1.43-.7 1.82 0l3.96 6.9c.38.66-.12 1.47-.91 1.47h-7.92c-.79 0-1.3-.81-.91-1.48l3.96-6.9Zm.46 1.87h.9c.3 0 .52.26.5.55l-.22 2.02c-.01.16-.17.26-.33.23a1.92 1.92 0 0 0-.8 0c-.16.03-.32-.07-.33-.23l-.21-2.02a.5.5 0 0 1 .5-.55ZM19 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
              clipRule: "evenodd",
              className: u,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M11 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-.06a1 1 0 0 1-.74-.32L5.92 17H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2.92l4.28-4.68a1 1 0 0 1 .74-.32H11ZM20.5 12c-.28 0-.5.22-.52.5a7 7 0 0 1-5.13 6.25c-.48.13-.85.55-.85 1.05v.03c0 .6.52 1.06 1.1.92a9 9 0 0 0 6.89-8.25.48.48 0 0 0-.49-.5h-1ZM16.5 12c-.28 0-.5.23-.54.5a3 3 0 0 1-1.33 2.02c-.35.23-.63.6-.63 1.02v.14c0 .63.59 1.1 1.16.83a5 5 0 0 0 2.82-4.01c.02-.28-.2-.5-.48-.5h-1Z",
              className: u,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=43481.cf2080bc5013d8916fba.js.map
