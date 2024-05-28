"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [423],
  {
    5423: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return k;
        },
      });
      var i = s(7437),
        r = s(2265),
        n = s(4504),
        a = s(9681),
        c = s(4194),
        l = s(8192),
        o = s(2117),
        h = s(521),
        d = s(9227),
        x = s(8096),
        p = s(3132),
        u = s(1431),
        m = s(3700),
        j = s(6726),
        g = s(703),
        w = s(7907);
      function k() {
        let [e, t] = r.useState(!1),
          s = (0, w.useRouter)(),
          [k, f] = (0, r.useState)(!1),
          [b, v] = (0, r.useState)(!1),
          C = () => {
            v(!b);
          };
        return (0, i.jsxs)(n.R, {
          onMenuOpenChange: t,
          className: "  bg-[#130700] px-[2rem] py-[0.5rem]",
          maxWidth: "full",
          children: [
            (0, i.jsxs)(a.U, {
              children: [
                (0, i.jsx)(c.L, {
                  "aria-label": e ? "Close menu" : "Open menu",
                  className: "sm:hidden text-white",
                }),
                (0, i.jsx)(l.H, {
                  children: (0, i.jsx)(o.O, {
                    onClick: () => s.push("/"),
                    children: (0, i.jsx)(g.default, {
                      priority: !0,
                      src: "/images/logo.png",
                      width: 180,
                      height: 180,
                      alt: "logo",
                    }),
                  }),
                }),
              ],
            }),
            (0, i.jsxs)(a.U, {
              className: "hidden sm:flex md:gap-x-20",
              justify: "center",
              children: [
                (0, i.jsxs)(h.F, {
                  children: [
                    (0, i.jsx)(d.k, {
                      children: (0, i.jsx)(x.S, {
                        children: (0, i.jsx)(p.A, {
                          disableRipple: !0,
                          className:
                            "p-0 bg-transparent data-[hover=true]:bg-transparent",
                          radius: "sm",
                          variant: "light",
                          endContent: (0, i.jsx)("svg", {
                            fill: "none",
                            height: 12,
                            viewBox: "0 0 24 24",
                            width: 12,
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, i.jsx)("path", {
                              d: "m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95",
                              stroke: "white",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeMiterlimit: 10,
                              strokeWidth: 1.5,
                            }),
                          }),
                          children: (0, i.jsx)("p", {
                            className:
                              "text-white font-interB text-[1rem] hover:text-[#F6931F]",
                            children: "Home",
                          }),
                        }),
                      }),
                    }),
                    (0, i.jsxs)(u.a, {
                      className: "w-[340px]",
                      itemClasses: { base: "gap-4" },
                      children: [
                        (0, i.jsx)(
                          m.W,
                          {
                            onClick: () => {
                              s.push("/vision-mission");
                            },
                            children: "Vision & Mission",
                          },
                          "autoscaling"
                        ),
                        (0, i.jsx)(
                          m.W,
                          {
                            onClick: () => {
                              s.push("/team");
                            },
                            children: "Team",
                          },
                          "usage_metrics"
                        ),
                        (0, i.jsx)(
                          m.W,
                          {
                            onClick: () => {
                              s.push("/governance");
                            },
                            children: "Project Governence",
                          },
                          "production_ready"
                        ),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)(h.F, {
                  children: [
                    (0, i.jsx)(d.k, {
                      children: (0, i.jsx)(x.S, {
                        children: (0, i.jsx)(p.A, {
                          disableRipple: !0,
                          className:
                            "p-0 bg-transparent data-[hover=true]:bg-transparent",
                          radius: "sm",
                          variant: "light",
                          endContent: (0, i.jsx)("svg", {
                            fill: "none",
                            height: 12,
                            viewBox: "0 0 24 24",
                            width: 12,
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, i.jsx)("path", {
                              d: "m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95",
                              stroke: "white",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeMiterlimit: 10,
                              strokeWidth: 1.5,
                            }),
                          }),
                          children: (0, i.jsx)("p", {
                            className:
                              "text-white font-interB text-[1rem] hover:text-[#F6931F]",
                            children: "Learn",
                          }),
                        }),
                      }),
                    }),
                    (0, i.jsxs)(u.a, {
                      className: "w-[340px]",
                      itemClasses: { base: "gap-4" },
                      children: [
                        (0, i.jsx)(
                          m.W,
                          {
                            children: (0, i.jsx)(h.F, {
                              children: (0, i.jsxs)(d.k, {
                                children: [
                                  (0, i.jsx)(x.S, {
                                    children: (0, i.jsx)(p.A, {
                                      onClick: C,
                                      disableRipple: !0,
                                      className:
                                        "p-0 bg-transparent data-[hover=true]:bg-transparent",
                                      radius: "sm",
                                      variant: "light",
                                      endContent: (0, i.jsx)("svg", {
                                        fill: "none",
                                        height: 12,
                                        viewBox: "0 0 24 24",
                                        width: 12,
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0, i.jsx)("path", {
                                          d: "m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95",
                                          stroke: "black",
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeMiterlimit: 10,
                                          strokeWidth: 1.5,
                                        }),
                                      }),
                                      children: "Bitcoin Economy",
                                    }),
                                  }),
                                  b &&
                                    (0, i.jsxs)(u.a, {
                                      "aria-label": "ACME features",
                                      className: "w-[300px] flex ".concat(
                                        b ? "block" : "hidden"
                                      ),
                                      itemClasses: { base: "gap-4" },
                                      children: [
                                        (0, i.jsx)(
                                          m.W,
                                          {
                                            onClick: () =>
                                              s.push("/bitcoin-history"),
                                            children: "Bitcoin History",
                                          },
                                          "bitcoin-history"
                                        ),
                                        (0, i.jsx)(
                                          m.W,
                                          {
                                            onClick: () =>
                                              s.push("/bitcoinBasic"),
                                            children: "Bitcoin Basic",
                                          },
                                          "bitcoin-basic"
                                        ),
                                        (0, i.jsx)(
                                          m.W,
                                          {
                                            onClick: () =>
                                              s.push("/opportunity-challenges"),
                                            children:
                                              "Opportunity & Challenges",
                                          },
                                          "opportunity-challenges"
                                        ),
                                        (0, i.jsx)(
                                          m.W,
                                          {
                                            onClick: () =>
                                              s.push("/research-advancements"),
                                            children: "Research & Advancements",
                                          },
                                          "research-advancements"
                                        ),
                                      ],
                                    }),
                                ],
                              }),
                            }),
                          },
                          "usage_metrics"
                        ),
                        (0, i.jsx)(
                          m.W,
                          {
                            onClick: () => {
                              s.push("/bitcoin-ecosystem");
                            },
                            children: "Bitcoin Ecosystem",
                          },
                          "usage_metrics"
                        ),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)(h.F, {
                  children: [
                    (0, i.jsx)(d.k, {
                      children: (0, i.jsx)(x.S, {
                        children: (0, i.jsx)(p.A, {
                          disableRipple: !0,
                          className:
                            "p-0 bg-transparent data-[hover=true]:bg-transparent",
                          radius: "sm",
                          variant: "light",
                          endContent: (0, i.jsx)("svg", {
                            fill: "none",
                            height: 12,
                            viewBox: "0 0 24 24",
                            width: 12,
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, i.jsx)("path", {
                              d: "m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95",
                              stroke: "white",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeMiterlimit: 10,
                              strokeWidth: 1.5,
                            }),
                          }),
                          children: (0, i.jsx)("p", {
                            className:
                              "text-white font-interB text-[1rem] hover:text-[#F6931F]",
                            children: "Build",
                          }),
                        }),
                      }),
                    }),
                    (0, i.jsxs)(u.a, {
                      className: "w-[340px]",
                      itemClasses: { base: "gap-4" },
                      children: [
                        (0, i.jsx)(
                          m.W,
                          {
                            onClick: () => s.push("/get-started"),
                            children: "Get Started",
                          },
                          "autoscaling"
                        ),
                        (0, i.jsx)(
                          m.W,
                          {
                            onClick: () => s.push("/resources"),
                            children: "Resources",
                          },
                          "usage_metrics"
                        ),
                        (0, i.jsx)(
                          m.W,
                          {
                            onClick: () => s.push("/contribute"),
                            children: "Contribute to BTCLAYER Development",
                          },
                          "usage_metrics"
                        ),
                        (0, i.jsx)(
                          m.W,
                          {
                            onClick: () => s.push("/fund-your-project"),
                            children: "Fund your project",
                          },
                          "usage_metrics"
                        ),
                        (0, i.jsx)(
                          m.W,
                          {
                            onClick: () => s.push("/your-project"),
                            children: "Share your project",
                          },
                          "usage_metrics"
                        ),
                        (0, i.jsx)(
                          m.W,
                          {
                            onClick: () => s.push("/community"),
                            children: "Community",
                          },
                          "usage_metrics"
                        ),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsxs)(a.U, {
              justify: "end",
              children: [
                (0, i.jsx)(d.k, {
                  className: "hidden lg:flex",
                  children: (0, i.jsxs)(h.F, {
                    children: [
                      (0, i.jsx)(d.k, {
                        children: (0, i.jsx)(x.S, {
                          children: (0, i.jsx)("button", {
                            className:
                              "transition-all ease-in-out duration-500 hover:scale-[1.1] font-interB mt-1 text-white mr-auto flex items-center justify-center text-center cursor-pointer rounded-[10px] h-[41px] px-[19px] text-[15px] bg-gradient  text-white-A700 glow",
                            children: (0, i.jsx)("p", {
                              className: "text-white font-interB text-[1rem]",
                              children: "Join Now",
                            }),
                          }),
                        }),
                      }),
                      (0, i.jsxs)(u.a, {
                        className: "w-[340px]",
                        itemClasses: { base: "gap-4" },
                        children: [
                          (0, i.jsx)(
                            m.W,
                            {
                              onClick: () => {
                                window.open(
                                  "https://discord.com/invite/4cfgtA2u"
                                );
                              },
                              className: "bg-gray-800",
                              children: (0, i.jsxs)("div", {
                                className: "flex flex-row items-center",
                                children: [
                                  (0, i.jsx)(g.default, {
                                    priority: !0,
                                    src: "/images/footer/discord.png",
                                    width: 30,
                                    height: 30,
                                    alt: "",
                                    className:
                                      "cursor-pointer transition-all ease-in-out duration-500 hover:scale-[1.1]",
                                  }),
                                  (0, i.jsx)("p", {
                                    className: "text-white",
                                    children: "Discord",
                                  }),
                                ],
                              }),
                            },
                            "autoscaling"
                          ),
                          (0, i.jsx)(
                            m.W,
                            {
                              onClick: () => {
                                window.open("https://twitter.com/Btclayer_");
                              },
                              className: "bg-gray-800",
                              children: (0, i.jsxs)("div", {
                                className: "flex flex-row items-center",
                                children: [
                                  (0, i.jsx)(g.default, {
                                    priority: !0,
                                    src: "/images/footer/twitter.png",
                                    width: 30,
                                    height: 30,
                                    alt: "",
                                    className:
                                      "cursor-pointer transition-all ease-in-out duration-500 hover:scale-[1.1]",
                                  }),
                                  (0, i.jsx)("p", {
                                    className: "text-white",
                                    children: "Twitter",
                                  }),
                                ],
                              }),
                            },
                            "autoscaling"
                          ),
                          (0, i.jsx)(
                            m.W,
                            {
                              onClick: () => {
                                window.open("https://t.me/OfficialBtclayer");
                              },
                              className: "bg-gray-800",
                              children: (0, i.jsxs)("div", {
                                className: "flex flex-row items-center",
                                children: [
                                  (0, i.jsx)(g.default, {
                                    priority: !0,
                                    src: "/images/footer/telegram.png",
                                    width: 30,
                                    height: 30,
                                    alt: "",
                                    className:
                                      "cursor-pointer transition-all ease-in-out duration-500 hover:scale-[1.1]",
                                  }),
                                  (0, i.jsx)("p", {
                                    className: "text-white",
                                    children: "Telegram",
                                  }),
                                ],
                              }),
                            },
                            "autoscaling"
                          ),
                          (0, i.jsx)(
                            m.W,
                            {
                              onClick: () => {
                                window.open("https://github.com/BtcLayer");
                              },
                              className: "bg-gray-800",
                              children: (0, i.jsxs)("div", {
                                className: "flex flex-row items-center",
                                children: [
                                  (0, i.jsx)(g.default, {
                                    priority: !0,
                                    src: "/images/footer/github.png",
                                    width: 30,
                                    height: 30,
                                    alt: "",
                                    className:
                                      "cursor-pointer transition-all ease-in-out duration-500 hover:scale-[1.1]",
                                  }),
                                  (0, i.jsx)("p", {
                                    className: "text-white",
                                    children: "Github",
                                  }),
                                ],
                              }),
                            },
                            "autoscaling"
                          ),
                          (0, i.jsx)(
                            m.W,
                            {
                              onClick: () => {
                                window.open(
                                  "https://www.linkedin.com/company/btclayer/"
                                );
                              },
                              className: "bg-gray-800",
                              children: (0, i.jsxs)("div", {
                                className: "flex flex-row items-center",
                                children: [
                                  (0, i.jsx)(g.default, {
                                    priority: !0,
                                    src: "/images/footer/linkedin.png",
                                    width: 30,
                                    height: 30,
                                    alt: "",
                                    className:
                                      "cursor-pointer transition-all ease-in-out duration-500 hover:scale-[1.1]",
                                  }),
                                  (0, i.jsx)("p", {
                                    className: "text-white",
                                    children: "Linkedin",
                                  }),
                                ],
                              }),
                            },
                            "autoscaling"
                          ),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)(d.k, {
                  children: (0, i.jsx)("button", {
                    onClick: () => {
                      window.open("https://btcscan.app/");
                    },
                    className:
                      "transition-all ease-in-out duration-500 hover:scale-[1.1] font-interB mt-1 text-white mr-auto flex items-center justify-center text-center cursor-pointer rounded-[10px] h-[41px] px-[19px] text-[15px] bg-gradient  text-white-A700 glow",
                    children: "Explorer",
                  }),
                }),
              ],
            }),
            (0, i.jsxs)(j.$, {
              children: [
                (0, i.jsxs)(h.F, {
                  children: [
                    (0, i.jsx)(d.k, {
                      children: (0, i.jsx)(x.S, {
                        children: (0, i.jsx)(p.A, {
                          disableRipple: !0,
                          className:
                            "p-0 bg-transparent data-[hover=true]:bg-transparent",
                          radius: "sm",
                          variant: "light",
                          endContent: (0, i.jsx)("svg", {
                            fill: "none",
                            height: 12,
                            viewBox: "0 0 24 24",
                            width: 12,
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, i.jsx)("path", {
                              d: "m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95",
                              stroke: "white",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeMiterlimit: 10,
                              strokeWidth: 1.5,
                            }),
                          }),
                          children: (0, i.jsx)("p", {
                            className: "text-white font-interB text-[1rem]",
                            children: "About",
                          }),
                        }),
                      }),
                    }),
                    (0, i.jsxs)(u.a, {
                      className: "w-[340px]",
                      itemClasses: { base: "gap-4" },
                      children: [
                        (0, i.jsx)(
                          m.W,
                          { children: "Vision & Mission" },
                          "autoscaling"
                        ),
                        (0, i.jsx)(
                          m.W,
                          {
                            onClick: () => {
                              s.push("/team");
                            },
                            children: "Team",
                          },
                          "usage_metrics"
                        ),
                        (0, i.jsx)(
                          m.W,
                          {
                            onClick: () => {
                              s.push("/governance");
                            },
                            children: "Project Governence",
                          },
                          "production_ready"
                        ),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)(h.F, {
                  children: [
                    (0, i.jsx)(d.k, {
                      children: (0, i.jsx)(x.S, {
                        children: (0, i.jsx)(p.A, {
                          disableRipple: !0,
                          className:
                            "p-0 bg-transparent data-[hover=true]:bg-transparent",
                          radius: "sm",
                          variant: "light",
                          endContent: (0, i.jsx)("svg", {
                            fill: "none",
                            height: 12,
                            viewBox: "0 0 24 24",
                            width: 12,
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, i.jsx)("path", {
                              d: "m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95",
                              stroke: "white",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeMiterlimit: 10,
                              strokeWidth: 1.5,
                            }),
                          }),
                          children: (0, i.jsx)("p", {
                            className:
                              "text-white font-interB text-[1rem] hover:text-[#F6931F]",
                            children: "Learn",
                          }),
                        }),
                      }),
                    }),
                    (0, i.jsxs)(u.a, {
                      className: "w-[340px]",
                      itemClasses: { base: "gap-4" },
                      children: [
                        (0, i.jsx)(
                          m.W,
                          {
                            children: (0, i.jsx)(h.F, {
                              children: (0, i.jsxs)(d.k, {
                                children: [
                                  (0, i.jsx)(x.S, {
                                    children: (0, i.jsx)(p.A, {
                                      onClick: C,
                                      disableRipple: !0,
                                      className:
                                        "p-0 bg-transparent data-[hover=true]:bg-transparent",
                                      radius: "sm",
                                      variant: "light",
                                      endContent: (0, i.jsx)("svg", {
                                        fill: "none",
                                        height: 12,
                                        viewBox: "0 0 24 24",
                                        width: 12,
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0, i.jsx)("path", {
                                          d: "m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95",
                                          stroke: "black",
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeMiterlimit: 10,
                                          strokeWidth: 1.5,
                                        }),
                                      }),
                                      children: "Bitcoin Economy",
                                    }),
                                  }),
                                  b &&
                                    (0, i.jsxs)(u.a, {
                                      "aria-label": "ACME features",
                                      className: "w-[300px] flex ".concat(
                                        b ? "block" : "hidden"
                                      ),
                                      itemClasses: { base: "gap-4" },
                                      children: [
                                        (0, i.jsx)(
                                          m.W,
                                          {
                                            onClick: () =>
                                              s.push("/bitcoin-history"),
                                            children: "Bitcoin History",
                                          },
                                          "bitcoin-history"
                                        ),
                                        (0, i.jsx)(
                                          m.W,
                                          {
                                            onClick: () =>
                                              s.push("/bitcoinBasic"),
                                            children: "Bitcoin Basic",
                                          },
                                          "bitcoin-basic"
                                        ),
                                        (0, i.jsx)(
                                          m.W,
                                          {
                                            onClick: () =>
                                              s.push("/opportunity-challenges"),
                                            children:
                                              "Opportunity & Challenges",
                                          },
                                          "opportunity-challenges"
                                        ),
                                        (0, i.jsx)(
                                          m.W,
                                          {
                                            onClick: () =>
                                              s.push("/research-advancements"),
                                            children: "Research & Advancements",
                                          },
                                          "research-advancements"
                                        ),
                                      ],
                                    }),
                                ],
                              }),
                            }),
                          },
                          "usage_metrics"
                        ),
                        (0, i.jsx)(
                          m.W,
                          {
                            onClick: () => {
                              s.push("/bitcoin-ecosystem");
                            },
                            children: "Bitcoin Ecosystem",
                          },
                          "usage_metrics"
                        ),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)(d.k, {
                  children: (0, i.jsx)(o.O, {
                    href: "/",
                    "aria-current": "page",
                    children: (0, i.jsx)("p", {
                      className: "text-white font-interB text-left text-[1rem]",
                      children: "Explore",
                    }),
                  }),
                }),
                (0, i.jsx)(d.k, {
                  children: (0, i.jsx)(o.O, {
                    href: "/faucet",
                    "aria-current": "page",
                    children: (0, i.jsx)("p", {
                      className: "text-white font-interB text-left text-[1rem]",
                      children: "Faucet",
                    }),
                  }),
                }),
                (0, i.jsx)(d.k, {
                  children: (0, i.jsx)(o.O, {
                    href: "/developer-gitbook",
                    "aria-current": "page",
                    children: (0, i.jsx)("p", {
                      className: "text-white font-interB text-left text-[1rem]",
                      children: "Developer Gitbook",
                    }),
                  }),
                }),
                (0, i.jsx)(d.k, {
                  children: (0, i.jsx)(o.O, {
                    href: "/bridge",
                    "aria-current": "page",
                    children: (0, i.jsx)("p", {
                      className: "text-white font-interB text-left text-[1rem]",
                      children: "Bridge",
                    }),
                  }),
                }),
                (0, i.jsxs)(h.F, {
                  children: [
                    (0, i.jsx)(d.k, {
                      children: (0, i.jsx)(x.S, {
                        children: (0, i.jsx)(p.A, {
                          disableRipple: !0,
                          className:
                            "p-0 bg-transparent data-[hover=true]:bg-transparent",
                          radius: "sm",
                          variant: "light",
                          endContent: (0, i.jsx)("svg", {
                            fill: "none",
                            height: 12,
                            viewBox: "0 0 24 24",
                            width: 12,
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, i.jsx)("path", {
                              d: "m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95",
                              stroke: "white",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeMiterlimit: 10,
                              strokeWidth: 1.5,
                            }),
                          }),
                          children: (0, i.jsx)("p", {
                            className: "text-white font-interB text-[1rem]",
                            children: "Build",
                          }),
                        }),
                      }),
                    }),
                    (0, i.jsxs)(u.a, {
                      className: "w-[340px]",
                      itemClasses: { base: "gap-4" },
                      children: [
                        (0, i.jsx)(
                          m.W,
                          {
                            onClick: () => s.push("/get-started"),
                            children: "Get Started",
                          },
                          "autoscaling"
                        ),
                        (0, i.jsx)(
                          m.W,
                          {
                            onClick: () => s.push("/resources"),
                            children: "Resources",
                          },
                          "usage_metrics"
                        ),
                        (0, i.jsx)(
                          m.W,
                          {
                            onClick: () => s.push("/contribute"),
                            children: "Contribute to BTCLAYER Development",
                          },
                          "usage_metrics"
                        ),
                        (0, i.jsx)(
                          m.W,
                          {
                            onClick: () => s.push("/fund-your-project"),
                            children: "Fund your project",
                          },
                          "usage_metrics"
                        ),
                        (0, i.jsx)(
                          m.W,
                          {
                            onClick: () => s.push("/your-project"),
                            children: "Share your project",
                          },
                          "usage_metrics"
                        ),
                        (0, i.jsx)(
                          m.W,
                          {
                            onClick: () => s.push("/community"),
                            children: "Community",
                          },
                          "usage_metrics"
                        ),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)(d.k, {
                  className: "",
                  children: (0, i.jsx)("button", {
                    className:
                      "transition-all w-full ease-in-out duration-500 hover:scale-[1.1] font-interB mt-1 text-white mr-auto flex items-center justify-center text-center cursor-pointer rounded-[10px] h-[41px] px-[19px] text-[15px] bg-gradient  text-white-A700 glow",
                    children: "Join Now",
                  }),
                }),
                (0, i.jsx)(d.k, {
                  children: (0, i.jsx)("button", {
                    onClick: () => {
                      window.open("https://btcscan.app/");
                    },
                    className:
                      "transition-all w-full ease-in-out duration-500 hover:scale-[1.1] font-interB mt-1 text-white mr-auto flex items-center justify-center text-center cursor-pointer rounded-[10px] h-[41px] px-[19px] text-[15px] bg-gradient  text-white-A700 glow",
                    children: "Explorer",
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
