(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84537"],
  {
    730647: function (e, _, E) {
      "use strict";
      E.r(_),
        E.d(_, {
          DirectoryEntryTypes: function () {
            return L;
          },
          CreateOrAddGuildSlideTypes: function () {
            return M;
          },
          HubGuildTemplateId: function () {
            return t;
          },
          DirectoryEntryCategories: function () {
            return A;
          },
          getHubCategories: function () {
            return U;
          },
          getHubGuildTemplatesMap: function () {
            return G;
          },
        });
      var a,
        T,
        s,
        n,
        L,
        M,
        t,
        A,
        I = E("316693"),
        d = E("991170"),
        l = E("49111"),
        C = E("782340");
      ((a = L || (L = {}))[(a.GUILD = 0)] = "GUILD"),
        (a[(a.GUILD_SCHEDULED_EVENT = 1)] = "GUILD_SCHEDULED_EVENT"),
        ((T = M || (M = {})).GUILD_TEMPLATES = "guild-templates"),
        (T.CUSTOMIZE_NEW_GUILD = "customize-new-guild"),
        (T.CHOOSE_GUILD = "choose-guild"),
        (T.CUSTOMIZE_EXISTING_GUILD = "customize-existing-guild"),
        (T.CONFIRMATION = "confirmation"),
        ((s = t || (t = {})).CREATE = "CREATE"),
        (s.HUB_SCHOOL_CLUB = "HUB_SCHOOL_CLUB"),
        (s.HUB_STUDY = "HUB_STUDY"),
        (s.HUB_CLASS = "HUB_CLASS"),
        (s.HUB_SOCIAL = "HUB_SOCIAL"),
        (s.HUB_MAJOR = "HUB_MAJOR"),
        (s.HUB_DORM = "HUB_DORM"),
        ((n = A || (A = {}))[(n.ALL = -1)] = "ALL"),
        (n[(n.UNCATEGORIZED = 0)] = "UNCATEGORIZED"),
        (n[(n.SCHOOL_CLUB = 1)] = "SCHOOL_CLUB"),
        (n[(n.CLASS = 2)] = "CLASS"),
        (n[(n.STUDY_SOCIAL = 3)] = "STUDY_SOCIAL"),
        (n[(n.MISC = 5)] = "MISC");
      function U(e) {
        return "883060064561299456" === e
          ? [
              {
                value: 1,
                label: C.default.Messages.DIRECTORY_CATEGORY_INTERNAL_1,
              },
              {
                value: 2,
                label: C.default.Messages.DIRECTORY_CATEGORY_INTERNAL_2,
              },
              {
                value: 3,
                label: C.default.Messages.DIRECTORY_CATEGORY_INTERNAL_3,
              },
              {
                value: 5,
                label: C.default.Messages.DIRECTORY_CATEGORY_INTERNAL_5,
              },
            ]
          : [
              {
                value: 1,
                label: C.default.Messages.DIRECTORY_CATEGORY_SCHOOL_CLUB,
                idealSize: 100,
              },
              { value: 2, label: C.default.Messages.DIRECTORY_CATEGORY_CLASS },
              {
                value: 3,
                label: C.default.Messages.DIRECTORY_CATEGORY_STUDY_SOCIAL,
                idealSize: 50,
              },
              {
                value: 5,
                label: C.default.Messages.DIRECTORY_CATEGORY_MISCELLANEOUS,
              },
            ];
      }
      function G() {
        return {
          CREATE: {
            id: "CREATE",
            code: "2TffvPucqHkN",
            label: C.default.Messages.GUILD_TEMPLATE_HEADER_CREATE,
            channels: [],
            system_channel_id: null,
          },
          HUB_SCHOOL_CLUB: {
            id: "HUB_SCHOOL_CLUB",
            code: "UMUbvRpRZhS6",
            label: C.default.Messages.GUILD_TEMPLATE_HEADER_SCHOOL_CLUB,
            channels: [
              {
                id: "00",
                parent_id: null,
                name: C.default.Messages
                  .GUILD_TEMPLATE_NAME_CATEGORY_INFORMATION,
                type: l.ChannelTypes.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_WELCOME_AND_RULES,
                type: l.ChannelTypes.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_ANNOUNCEMENTS,
                type: l.ChannelTypes.GUILD_TEXT,
              },
              {
                id: "03",
                parent_id: "00",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_RESOURCES,
                type: l.ChannelTypes.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: C.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_TEXT,
                type: l.ChannelTypes.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                type: l.ChannelTypes.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                type: l.ChannelTypes.GUILD_TEXT,
              },
              {
                id: "13",
                parent_id: "10",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                type: l.ChannelTypes.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: C.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                type: l.ChannelTypes.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                type: l.ChannelTypes.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: C.default.Messages
                  .GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM_1,
                type: l.ChannelTypes.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: C.default.Messages
                  .GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM_2,
                type: l.ChannelTypes.GUILD_VOICE,
              },
            ],
            roles: [
              { id: "00", name: "@everyone", permissions: d.default.DEFAULT },
              {
                id: "01",
                name: "officers (example)",
                mentionable: !0,
                hoist: !0,
                permissions: I.default.combine(
                  d.default.DEFAULT,
                  l.Permissions.MANAGE_ROLES,
                  l.Permissions.MANAGE_CHANNELS,
                  l.Permissions.KICK_MEMBERS,
                  l.Permissions.BAN_MEMBERS,
                  l.Permissions.MANAGE_NICKNAMES,
                  l.Permissions.MANAGE_GUILD_EXPRESSIONS,
                  l.Permissions.MANAGE_MESSAGES,
                  l.Permissions.SEND_TTS_MESSAGES
                ),
                color: 3066993,
              },
            ],
            system_channel_id: "12",
          },
          HUB_STUDY: {
            id: "HUB_STUDY",
            code: "2JBhzzca2vfT",
            label: C.default.Messages.GUILD_TEMPLATE_HEADER_STUDY,
            channels: [
              {
                id: "00",
                parent_id: null,
                name: C.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                type: l.ChannelTypes.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_NOTES_RESOURCES,
                type: l.ChannelTypes.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
                type: l.ChannelTypes.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: C.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                type: l.ChannelTypes.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                type: l.ChannelTypes.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                type: l.ChannelTypes.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                type: l.ChannelTypes.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: C.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                type: l.ChannelTypes.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                type: l.ChannelTypes.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format(
                  { number: 1 }
                ),
                type: l.ChannelTypes.GUILD_VOICE,
              },
              {
                id: "23",
                parent_id: "20",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format(
                  { number: 2 }
                ),
                type: l.ChannelTypes.GUILD_VOICE,
              },
            ],
            system_channel_id: "12",
          },
          HUB_CLASS: {
            id: "HUB_CLASS",
            code: "r86WWBwTGspb",
            label: C.default.Messages.GUILD_TEMPLATE_HEADER_CLASS,
            channels: [
              {
                id: "00",
                parent_id: null,
                name: C.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                type: l.ChannelTypes.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_ASSIGNMENTS,
                type: l.ChannelTypes.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
                type: l.ChannelTypes.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: C.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                type: l.ChannelTypes.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                type: l.ChannelTypes.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                type: l.ChannelTypes.GUILD_TEXT,
              },
              {
                id: "13",
                parent_id: "10",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                type: l.ChannelTypes.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: C.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                type: l.ChannelTypes.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                type: l.ChannelTypes.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format(
                  { number: 1 }
                ),
                type: l.ChannelTypes.GUILD_VOICE,
              },
              {
                id: "23",
                parent_id: "20",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format(
                  { number: 2 }
                ),
                type: l.ChannelTypes.GUILD_VOICE,
              },
            ],
            system_channel_id: "12",
          },
          HUB_SOCIAL: {
            id: "HUB_SOCIAL",
            code: "AvvtXE3mfbCR",
            label: C.default.Messages.GUILD_TEMPLATE_HEADER_SOCIAL,
            channels: [
              {
                id: "00",
                parent_id: null,
                name: C.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                type: l.ChannelTypes.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                type: l.ChannelTypes.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                type: l.ChannelTypes.GUILD_TEXT,
              },
              {
                id: "03",
                parent_id: "00",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                type: l.ChannelTypes.GUILD_TEXT,
              },
              {
                id: "04",
                parent_id: "00",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_MEETUPS,
                type: l.ChannelTypes.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: C.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                type: l.ChannelTypes.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_VOICE_COUCHES,
                type: l.ChannelTypes.GUILD_VOICE,
              },
              {
                id: "12",
                parent_id: "10",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_VOICE_MOVIE_ROOM,
                type: l.ChannelTypes.GUILD_VOICE,
              },
              {
                id: "13",
                parent_id: "10",
                name: C.default.Messages
                  .GUILD_TEMPLATE_NAME_VOICE_UNNUMBERED_STUDY_ROOM,
                type: l.ChannelTypes.GUILD_VOICE,
              },
            ],
            system_channel_id: "02",
          },
          HUB_MAJOR: {
            id: "HUB_MAJOR",
            code: "FhmfDR6Arvsc",
            label: C.default.Messages.GUILD_TEMPLATE_HEADER_MAJOR,
            channels: [
              {
                id: "00",
                parent_id: null,
                name: C.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                type: l.ChannelTypes.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_RESOURCES,
                type: l.ChannelTypes.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
                type: l.ChannelTypes.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: C.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                type: l.ChannelTypes.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                type: l.ChannelTypes.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                type: l.ChannelTypes.GUILD_TEXT,
              },
              {
                id: "13",
                parent_id: "10",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                type: l.ChannelTypes.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: C.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                type: l.ChannelTypes.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                type: l.ChannelTypes.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format(
                  { number: 1 }
                ),
                type: l.ChannelTypes.GUILD_VOICE,
              },
              {
                id: "23",
                parent_id: "20",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format(
                  { number: 2 }
                ),
                type: l.ChannelTypes.GUILD_VOICE,
              },
            ],
            system_channel_id: "12",
          },
          HUB_DORM: {
            id: "HUB_DORM",
            code: "fkq8xHfrGE58",
            label: C.default.Messages.GUILD_TEMPLATE_HEADER_DORM,
            channels: [
              {
                id: "00",
                parent_id: null,
                name: C.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                type: l.ChannelTypes.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_DORM_NEWS,
                type: l.ChannelTypes.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: C.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                type: l.ChannelTypes.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                type: l.ChannelTypes.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                type: l.ChannelTypes.GUILD_TEXT,
              },
              {
                id: "13",
                parent_id: "10",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                type: l.ChannelTypes.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: C.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                type: l.ChannelTypes.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                type: l.ChannelTypes.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_VOICE_MOVIE_ROOM,
                type: l.ChannelTypes.GUILD_VOICE,
              },
              {
                id: "23",
                parent_id: "20",
                name: C.default.Messages.GUILD_TEMPLATE_NAME_VOICE_COUCHES,
                type: l.ChannelTypes.GUILD_VOICE,
              },
            ],
            system_channel_id: "12",
          },
        };
      }
    },
  },
]);
//# sourceMappingURL=8701d3a6acf17eed664a.js.map
