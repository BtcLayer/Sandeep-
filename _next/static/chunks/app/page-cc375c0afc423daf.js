(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [979],
  {
    3485: function (e, t, i) {
      Promise.resolve().then(i.bind(i, 6890));
    },
    1998: function (e, t, i) {
      "use strict";
      i.d(t, {
        kW: function () {
          return n;
        },
        LK: function () {
          return a;
        },
        VS: function () {
          return l;
        },
        f5: function () {
          return s;
        },
      });
      let r = "http://localhost:1337/api/",
        a = async () => {
          try {
            let e = await fetch("".concat(r, "teams?populate=*"), {
                cache: "no-store",
              }),
              t = await e.json();
            return null == t ? void 0 : t.data;
          } catch (e) {
            console.error(e);
          }
        },
        n = async () => {
          try {
            let e = await fetch("".concat(r, "partners?populate=*"), {
                cache: "no-store",
              }),
              t = await e.json();
            return null == t ? void 0 : t.data;
          } catch (e) {
            console.error(e);
          }
        },
        s = async () => {
          try {
            let e = await fetch("".concat(r, "use-cases?populate=*"), {
                cache: "no-store",
              }),
              t = await e.json();
            return null == t ? void 0 : t.data;
          } catch (e) {
            console.error(e);
          }
        },
        l = async () => {
          try {
            let e = await fetch("".concat(r, "timelines?populate=*"), {
                cache: "no-store",
              }),
              t = await e.json();
            return null == t ? void 0 : t.data;
          } catch (e) {
            console.error(e);
          }
        };
    },
    6890: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return w;
          },
        });
      var r = i(7437),
        a = i(703),
        n = i(7141),
        s = i(4539),
        l = i(2265),
        o = Object.defineProperty,
        c = new Map(),
        d = new WeakMap(),
        m = 0,
        x = void 0;
      l.Component;
      var h = i(5423),
        u = i(3619),
        f = i(6843),
        p = i(1998);
      function w() {
        let { ref: e, inView: t } = (function () {
            var e;
            let {
                threshold: t,
                delay: i,
                trackVisibility: r,
                rootMargin: a,
                root: n,
                triggerOnce: s,
                skip: o,
                initialInView: h,
                fallbackInView: u,
                onChange: f,
              } = arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
              [p, w] = l.useState(null),
              g = l.useRef(),
              [v, b] = l.useState({ inView: !!h, entry: void 0 });
            (g.current = f),
              l.useEffect(() => {
                let e;
                if (!o && p)
                  return (
                    (e = (function (e, t) {
                      let i =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {},
                        r =
                          arguments.length > 3 && void 0 !== arguments[3]
                            ? arguments[3]
                            : x;
                      if (
                        void 0 === window.IntersectionObserver &&
                        void 0 !== r
                      ) {
                        let a = e.getBoundingClientRect();
                        return (
                          t(r, {
                            isIntersecting: r,
                            target: e,
                            intersectionRatio:
                              "number" == typeof i.threshold ? i.threshold : 0,
                            time: 0,
                            boundingClientRect: a,
                            intersectionRect: a,
                            rootBounds: a,
                          }),
                          () => {}
                        );
                      }
                      let {
                          id: a,
                          observer: n,
                          elements: s,
                        } = (function (e) {
                          let t = Object.keys(e)
                              .sort()
                              .filter((t) => void 0 !== e[t])
                              .map((t) => {
                                var i;
                                return ""
                                  .concat(t, "_")
                                  .concat(
                                    "root" === t
                                      ? (i = e.root)
                                        ? (d.has(i) ||
                                            ((m += 1), d.set(i, m.toString())),
                                          d.get(i))
                                        : "0"
                                      : e[t]
                                  );
                              })
                              .toString(),
                            i = c.get(t);
                          if (!i) {
                            let r;
                            let a = new Map(),
                              n = new IntersectionObserver((t) => {
                                t.forEach((t) => {
                                  var i;
                                  let n =
                                    t.isIntersecting &&
                                    r.some((e) => t.intersectionRatio >= e);
                                  e.trackVisibility &&
                                    void 0 === t.isVisible &&
                                    (t.isVisible = n),
                                    null == (i = a.get(t.target)) ||
                                      i.forEach((e) => {
                                        e(n, t);
                                      });
                                });
                              }, e);
                            (r =
                              n.thresholds ||
                              (Array.isArray(e.threshold)
                                ? e.threshold
                                : [e.threshold || 0])),
                              (i = { id: t, observer: n, elements: a }),
                              c.set(t, i);
                          }
                          return i;
                        })(i),
                        l = s.get(e) || [];
                      return (
                        s.has(e) || s.set(e, l),
                        l.push(t),
                        n.observe(e),
                        function () {
                          l.splice(l.indexOf(t), 1),
                            0 === l.length && (s.delete(e), n.unobserve(e)),
                            0 === s.size && (n.disconnect(), c.delete(a));
                        }
                      );
                    })(
                      p,
                      (t, i) => {
                        b({ inView: t, entry: i }),
                          g.current && g.current(t, i),
                          i.isIntersecting && s && e && (e(), (e = void 0));
                      },
                      {
                        root: n,
                        rootMargin: a,
                        threshold: t,
                        trackVisibility: r,
                        delay: i,
                      },
                      u
                    )),
                    () => {
                      e && e();
                    }
                  );
              }, [Array.isArray(t) ? t.toString() : t, p, n, a, s, o, r, u, i]);
            let y = null == (e = v.entry) ? void 0 : e.target,
              j = l.useRef();
            p ||
              !y ||
              s ||
              o ||
              j.current === y ||
              ((j.current = y), b({ inView: !!h, entry: void 0 }));
            let N = [w, v.inView, v.entry];
            return (N.ref = N[0]), (N.inView = N[1]), (N.entry = N[2]), N;
          })({ triggerOnce: !0, threshold: 0.5 }),
          [i, o] = (0, l.useState)([]),
          [w, g] = (0, l.useState)([]),
          [v, b] = (0, l.useState)([]);
        return (
          (0, l.useEffect)(() => {
            (async () => {
              try {
                let e = await (0, p.kW)();
                o(e);
              } catch (e) {
                console.error("Error fetching partner data:", e);
              }
            })();
          }, []),
          (0, l.useEffect)(() => {
            (async () => {
              try {
                let e = await (0, p.f5)();
                g(e);
              } catch (e) {
                console.error("Error fetching usecase data:", e);
              }
            })();
          }, []),
          (0, l.useEffect)(() => {
            (async () => {
              try {
                let e = await (0, p.VS)();
                b(e);
              } catch (e) {
                console.error("Error fetching timeline data:", e);
              }
            })();
          }, []),
          (0, r.jsxs)("div", {
            className:
              "flex min-h-screen flex-col items-center justify-between",
            children: [
              (0, r.jsx)(h.Z, {}),
              (0, r.jsxs)("div", {
                className: "bg-btc-dark-bg min-h-screen w-full relative",
                children: [
                  (0, r.jsx)("video", {
                    src: "/video.mp4",
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    width: 1e3,
                    height: 1e3,
                    className: "w-full opacity-30",
                  }),
                  (0, r.jsxs)("div", {
                    className: "absolute top-0 w-full",
                    children: [
                      (0, r.jsx)(a.default, {
                        priority: !0,
                        src: "/images/blob-1.png",
                        className:
                          "absolute  ml-auto top-0 mt-[-15rem]  right-0 z-[10]",
                        width: 800,
                        height: 800,
                        alt: "",
                      }),
                      (0, r.jsxs)("div", {
                        className: "mt-[18rem]",
                        children: [
                          (0, r.jsxs)("h1", {
                            className:
                              "md:text-[50px] text-[26px] text-center text-white font-interB md:mx-24",
                            children: [
                              (0, r.jsxs)("span", {
                                className:
                                  "bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text mx-6",
                                children: [
                                  "Bitcoin's Utility Infra Layer",
                                  (0, r.jsx)("br", {}),
                                ],
                              }),
                              " ",
                              "Flexible L2 As A Service & Liquid Staking",
                            ],
                          }),
                          (0, r.jsx)("p", {
                            className: "text-center text-white text-[20px]",
                            children:
                              "Scalable, Lightning Fast and Affordable with Bitcoin Grade Security and Data Availability",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: "bg-[#130700] min-h-screen w-full relative ",
                children: [
                  (0, r.jsxs)("div", {
                    className: "mt-20 mb-20 p-10 md:p-0",
                    children: [
                      (0, r.jsx)("div", {
                        className:
                          "bg-[#1d120d] mb-5 rounded-3xl mx-auto px-10 py-2 w-fit border-white border border-opacity-20",
                        children: (0, r.jsx)("span", {
                          className:
                            "bg-gradient-to-r from-yellow-400 to-orange-500 text-[15px] text-transparent bg-clip-text",
                          children: "Features",
                        }),
                      }),
                      (0, r.jsx)("h1", {
                        className:
                          "md:text-[50px] text-[26px] font-font-interB text-center text-white",
                        children: "Key Features",
                      }),
                    ],
                  }),
                  (0, r.jsxs)(n.Z, {
                    autoFill: !0,
                    loop: 0,
                    className: "p-20 ",
                    pauseOnHover: !0,
                    children: [
                      (0, r.jsxs)("div", {
                        className:
                          "fadedCard mr-10 h-50 p-5 w-fit max-w-[20rem] min-h-[20rem] relative rounded-md",
                        children: [
                          (0, r.jsx)(a.default, {
                            priority: !0,
                            src: "/images/features/1.svg",
                            width: 100,
                            height: 100,
                            alt: "",
                            className: "mx-auto mt-[-5rem] z-10",
                          }),
                          (0, r.jsxs)("div", {
                            className: "mt-5",
                            children: [
                              (0, r.jsx)("p", {
                                className:
                                  "text-white text-center text-[20px] font-interB",
                                children:
                                  "ZK EVM powered Security & Scalability",
                              }),
                              (0, r.jsx)("p", {
                                className:
                                  "text-white text-center text-[14px] mt-2",
                                children:
                                  "Elevate Bitcoin security and scalability with ZK EVM, enabling private transactions, smart contract execution, and efficient transaction processing.",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "fadedCard mr-10 h-50 p-5 w-fit max-w-[20rem] min-h-[20rem] relative rounded-md",
                        children: [
                          (0, r.jsx)(a.default, {
                            priority: !0,
                            src: "/images/features/2.svg",
                            width: 100,
                            height: 100,
                            alt: "",
                            className: "mx-auto mt-[-5rem] z-10",
                          }),
                          (0, r.jsxs)("div", {
                            className: "mt-5",
                            children: [
                              (0, r.jsx)("p", {
                                className:
                                  "text-white text-center text-[20px] font-interB",
                                children:
                                  "Bitcoin's Decentralised Economic Frontier",
                              }),
                              (0, r.jsx)("p", {
                                className:
                                  "text-white text-center text-[14px] mt-2",
                                children:
                                  "Unleash a new era of decentralised economics with BTCLayer's DEF, empowering transparent governance, efficient resource allocation, and increased resilience using Bitcoin for fees",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "fadedCard mr-10 h-50 p-5 w-fit max-w-[20rem] min-h-[20rem] relative rounded-md",
                        children: [
                          (0, r.jsx)(a.default, {
                            priority: !0,
                            src: "/images/features/3.svg",
                            width: 100,
                            height: 100,
                            alt: "",
                            className: "mx-auto mt-[-5rem] z-10",
                          }),
                          (0, r.jsxs)("div", {
                            className: "mt-5",
                            children: [
                              (0, r.jsx)("p", {
                                className:
                                  "text-white text-center text-[20px] font-interB",
                                children: "Next Gen Fast and Secure dApps",
                              }),
                              (0, r.jsx)("p", {
                                className:
                                  "text-white text-center text-[14px] mt-2",
                                children:
                                  "Experience the future of decentralised applications with BTCLayer's next-gen dApps, offering enhanced speed, security, and scalability.",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "fadedCard mr-10 h-50 p-5 w-fit max-w-[20rem] min-h-[20rem] relative rounded-md",
                        children: [
                          (0, r.jsx)(a.default, {
                            priority: !0,
                            src: "/images/features/4.svg",
                            width: 100,
                            height: 100,
                            alt: "",
                            className: "mx-auto mt-[-5rem] z-10",
                          }),
                          (0, r.jsxs)("div", {
                            className: "mt-5",
                            children: [
                              (0, r.jsx)("p", {
                                className:
                                  "text-white text-center text-[20px] font-interB",
                                children: "Flash and roll ups",
                              }),
                              (0, r.jsx)("p", {
                                className:
                                  "text-white text-center text-[14px] mt-2",
                                children:
                                  "Revolutionise transaction efficiency with BTCLayer's flash and roll ups, enabling instant and cost-effective transactions.",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "fadedCard mr-10 h-50 p-5 w-fit max-w-[20rem] min-h-[20rem] relative rounded-md",
                        children: [
                          (0, r.jsx)(a.default, {
                            priority: !0,
                            src: "/images/features/5.svg",
                            width: 100,
                            height: 100,
                            alt: "",
                            className: "mx-auto mt-[-5rem] z-10",
                          }),
                          (0, r.jsxs)("div", {
                            className: "mt-5",
                            children: [
                              (0, r.jsx)("p", {
                                className:
                                  "text-white text-center text-[20px] font-interB",
                                children: "Flexible L2 Infra",
                              }),
                              (0, r.jsx)("p", {
                                className:
                                  "text-white text-center text-[14px] mt-2",
                                children:
                                  "Revolutionise transaction efficiency with BTCLayer's flash and roll ups, enabling instant and cost-effective transactions.",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "fadedCard mr-10 h-50 p-5 w-fit max-w-[20rem] min-h-[20rem] relative rounded-md",
                        children: [
                          (0, r.jsx)(a.default, {
                            priority: !0,
                            src: "/images/features/6.svg",
                            width: 100,
                            height: 100,
                            alt: "",
                            className: "mx-auto mt-[-5rem] z-10",
                          }),
                          (0, r.jsxs)("div", {
                            className: "mt-5",
                            children: [
                              (0, r.jsx)("p", {
                                className:
                                  "text-white text-center text-[20px] font-interB",
                                children: "Liquid Staking",
                              }),
                              (0, r.jsx)("p", {
                                className:
                                  "text-white text-center text-[14px] mt-2",
                                children:
                                  "Revolutionise transaction efficiency with BTCLayer's flash and roll ups, enabling instant and cost-effective transactions.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)(a.default, {
                    priority: !0,
                    src: "/images/blob-1.png",
                    className:
                      "absolute mr-auto top-0 mt-[2rem]  left-0 rotate-180",
                    width: 800,
                    height: 800,
                    alt: "",
                  }),
                  (0, r.jsxs)("div", {
                    className: "flex md:flex-row flex-col md:mt-20 md:mb-20",
                    children: [
                      (0, r.jsx)("div", {
                        className: "md:w-[50%]",
                        children: (0, r.jsx)(a.default, {
                          priority: !0,
                          src: "/images/cube.png",
                          width: 700,
                          height: 700,
                          alt: "",
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "md:w-[50%] p-10 gap-y-5 flex flex-col justify-center items-center",
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "bg-[#1d120d] rounded-3xl mr-auto px-10 py-2 w-fit border-white border border-opacity-20",
                            children: (0, r.jsx)("span", {
                              className:
                                "bg-gradient-to-r from-yellow-400 to-orange-500 text-[15px] text-transparent bg-clip-text",
                              children: "About Us",
                            }),
                          }),
                          (0, r.jsx)("p", {
                            className:
                              "text-white  md:text-[50px] text-[26px] font-interB md:leading-[60px]",
                            children:
                              "Empowering Token Holders To Shape The Future Of Web3",
                          }),
                          (0, r.jsxs)("p", {
                            className:
                              "text-white  text-[14px] md:w-[80%] mr-auto",
                            children: [
                              "BTCLAYER is Utility Infra Layer on Bitcoin and shall offer Flexible L2 Infra & Liquid Staking capabilities.",
                              (0, r.jsx)("br", {}),
                              " ",
                              "BTCLAYER's governance approach is rooted in the principles of decentralization, transparency, and accountability. By empowering token holders to play an active role in decision-making, BTCLAYER shall ensure that the platform remains aligned with the needs and interests of its community.",
                            ],
                          }),
                          (0, r.jsx)("button", {
                            className:
                              "transition-all ease-in-out duration-500 hover:scale-[1.1] font-interB mt-1 text-white mr-auto flex items-center justify-center text-center cursor-pointer rounded-[10px] h-[41px] px-[19px] text-[15px] bg-gradient  text-white-A700 glow",
                            children: "More About Us",
                          }),
                        ],
                      }),
                    ],
                  }),
                  // (0, r.jsxs)("div", {
                  //   className: "container m-auto p-20 md:p-0 md:mb-28",
                  //   children: [
                  //     (0, r.jsx)("div", {
                  //       className: "mt-10 mb-10",
                  //       children: (0, r.jsx)("h1", {
                  //         className:
                  //           "md:text-[50px] text-[26px] font-interB text-center text-white mb-2",
                  //         children: "UseCases",
                  //       }),
                  //     }),
                  //     (0, r.jsx)("div", {
                  //       className:
                  //         "grid grid-cols-1 md:grid-cols-6 gap-x-10 gap-y-5 justify-center items-center mx-20",
                  //       children:
                  //         null == w
                  //           ? void 0
                  //           : w.map((e, t) => {
                  //               var i;
                  //               return (0, r.jsx)(
                  //                 s.E.div,
                  //                 {
                  //                   initial: "hidden",
                  //                   whileInView: "visible",
                  //                   viewport: { once: !0 },
                  //                   transition: { duration: 2 },
                  //                   variants: {
                  //                     visible: { y: 0, opacity: 1 },
                  //                     hidden: { y: 200, opacity: 0 },
                  //                   },
                  //                   children: (0, r.jsx)(a.default, {
                  //                     priority: !0,
                  //                     src: "http://localhost:1337".concat(
                  //                       null == e
                  //                         ? void 0
                  //                         : null === (i = e.attributes) ||
                  //                           void 0 === i
                  //                         ? void 0
                  //                         : i.image.data.attributes.url
                  //                     ),
                  //                     width: 250,
                  //                     height: 250,
                  //                     alt: "",
                  //                     className:
                  //                       "cursor-pointer m-auto hover:scale-[1.05] transition-all ease-in-out duration-500",
                  //                   }),
                  //                 },
                  //                 e.id
                  //               );
                  //             }),
                  //     }),
                  //   ],
                  // }),
                  // (0, r.jsxs)("div", {
                  //   className: "m-auto ",
                  //   children: [
                  //     (0, r.jsxs)("div", {
                  //       className: "mt-10 mb-10 p-5 md:p-0",
                  //       children: [
                  //         (0, r.jsx)("div", {
                  //           className:
                  //             "bg-[#1d120d] mb-4 rounded-3xl mx-auto px-10 py-2 w-fit border-white border border-opacity-20",
                  //           children: (0, r.jsx)("span", {
                  //             className:
                  //               "bg-gradient-to-r from-yellow-400 to-orange-500 text-[15px] text-transparent bg-clip-text",
                  //             children: "Roadmap",
                  //           }),
                  //         }),
                  //         (0, r.jsx)("h1", {
                  //           className:
                  //             "md:text-[50px] text-[26px] font-interB text-center text-white mb-2",
                  //           children: "The Journey of BTCLAYER",
                  //         }),
                  //       ],
                  //     }),
                  //     (0, r.jsx)(n.Z, {
                  //       autoFill: !0,
                  //       loop: 0,
                  //       className: "hover cursor-pointer",
                  //       pauseOnHover: !0,
                  //       children: (0, r.jsxs)("div", {
                  //         className: "flex flex-col",
                  //         children: [
                  //           (0, r.jsx)("div", {
                  //             className:
                  //               "flex flex-row md:gap-x-[2rem] justify-center items-center md:ml-[10rem] md:pl-[50rem]",
                  //             children:
                  //               null == v
                  //                 ? void 0
                  //                 : v.slice(0, 6).map((e) =>
                  //                     (0, r.jsx)(
                  //                       a.default,
                  //                       {
                  //                         priority: !0,
                  //                         src: "http://localhost:1337".concat(
                  //                           null == e
                  //                             ? void 0
                  //                             : e.attributes.image.data
                  //                                 .attributes.url
                  //                         ),
                  //                         alt: e.attributes.name,
                  //                         width: 450,
                  //                         height: 450,
                  //                         className:
                  //                           "md:w-[18rem] md:h-[12rem] object-contain",
                  //                       },
                  //                       null == e ? void 0 : e.id
                  //                     )
                  //                   ),
                  //           }),
                  //           (0, r.jsx)("div", {
                  //             className:
                  //               "md:w-fit  h-5 border-b border-yellow-500 mx-auto relative  md:ml-[70rem]",
                  //             children: (0, r.jsxs)("div", {
                  //               className:
                  //                 "flex flex-row justify-between gap-x-[17rem]",
                  //               children: [
                  //                 (0, r.jsx)("div", {
                  //                   className:
                  //                     "h-10 w-10 bg-white rounded-full",
                  //                 }),
                  //                 (0, r.jsx)("div", {
                  //                   className:
                  //                     "h-10 w-10 bg-white rounded-full",
                  //                 }),
                  //                 (0, r.jsx)("div", {
                  //                   className:
                  //                     "h-10 w-10 bg-white rounded-full",
                  //                 }),
                  //                 (0, r.jsx)("div", {
                  //                   className:
                  //                     "h-10 w-10 bg-white rounded-full",
                  //                 }),
                  //                 (0, r.jsx)("div", {
                  //                   className:
                  //                     "h-10 w-10 bg-white rounded-full",
                  //                 }),
                  //                 (0, r.jsx)("div", {
                  //                   className:
                  //                     "h-10 w-10 bg-white rounded-full",
                  //                 }),
                  //               ],
                  //             }),
                  //           }),
                  //           (0, r.jsx)("div", {
                  //             className:
                  //               "flex flex-row md:gap-x-[2rem] justify-center items-center md:pl-[50rem]",
                  //             children:
                  //               null == v
                  //                 ? void 0
                  //                 : v.slice(6).map((e) =>
                  //                     (0, r.jsx)(
                  //                       a.default,
                  //                       {
                  //                         priority: !0,
                  //                         src: "http://localhost:1337".concat(
                  //                           null == e
                  //                             ? void 0
                  //                             : e.attributes.image.data
                  //                                 .attributes.url
                  //                         ),
                  //                         alt: e.attributes.name,
                  //                         width: 450,
                  //                         height: 450,
                  //                         className:
                  //                           "md:w-[18rem] md:h-[12rem] object-contain",
                  //                       },
                  //                       null == e ? void 0 : e.id
                  //                     )
                  //                   ),
                  //           }),
                  //         ],
                  //       }),
                  //     }),
                  //   ],
                  // }),
                  // (0, r.jsxs)("div", {
                  //   className: "team mt-[15rem] mb-[10rem]",
                  //   children: [
                  //     (0, r.jsx)("h1", {
                  //       className:
                  //         "md:text-[50px] text-[26px] font-interB text-center text-white mb-[5rem]",
                  //       children: "Partnerships",
                  //     }),
                  //     (0, r.jsx)(n.Z, {
                  //       autoFill: !0,
                  //       loop: 0,
                  //       pauseOnHover: !0,
                  //       children:
                  //         null == i
                  //           ? void 0
                  //           : i.map((e) =>
                  //               (0, r.jsx)(
                  //                 a.default,
                  //                 {
                  //                   priority: !0,
                  //                   src: "http://localhost:1337".concat(
                  //                     null == e
                  //                       ? void 0
                  //                       : e.attributes.img.data.attributes.url
                  //                   ),
                  //                   alt: e.attributes.name,
                  //                   className:
                  //                     "mr-[4rem] w-28 h-28 object-contain",
                  //                   width: 250,
                  //                   height: 250,
                  //                 },
                  //                 e.id
                  //               )
                  //             ),
                  //     }),
                  //   ],
                  // }),
                  (0, r.jsx)("div", {
                    className:
                      "h-auto w-full mt-[93px] mx-auto md:p-10 relative max-w-[1320px]",
                    children: (0, r.jsx)("div", {
                      className:
                        "mx-4 sm:mx-0 md:w-full md:h-auto bottom-[19%] right-0 left-0 m-auto bg-gradient  rounded-[26px]",
                      children: (0, r.jsxs)("div", {
                        className: "flex md:flex-row flex-col justify-between",
                        children: [
                          (0, r.jsxs)("div", {
                            className:
                              "flex ml-10 flex-col md:w-[46%] h-max gap-[21px] left-[30.00px] bottom-0 top-0 my-auto ",
                            children: [
                              (0, r.jsx)("h1", {
                                className:
                                  "text-[30px] font-interB text-black mt-5",
                                children:
                                  "Dont Miss BTCLayer News And Updates!",
                              }),
                              (0, r.jsx)("p", {
                                className: "text-[14px]",
                                children:
                                  "By subscribing to our mailing list you will always be update with the latest news from us.",
                              }),
                              (0, r.jsxs)("div", {
                                className:
                                  "flex flex-col lg:flex-row justify-start gap-2.5 mb-10",
                                children: [
                                  (0, r.jsx)("div", {
                                    children: (0, r.jsx)("input", {
                                      type: "email",
                                      name: "date",
                                      placeholder: "Email Address",
                                      className:
                                        "sm:px-5 bg-white   md:w-[25rem] p-5 rounded-md w-[20rem]",
                                    }),
                                  }),
                                  (0, r.jsx)("button", {
                                    className:
                                      "rounded-lg font-bold w-fit px-10 py-5  bg-gradient-to-r from-[#FFCB52] to-[#FF7B02] text-white glow transition-all ease-in-out duration-400",
                                    children: "Join Now",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsx)(a.default, {
                            priority: !0,
                            src: "/images/email-asset.png",
                            alt: "createcd5fb5aei",
                            width: 500,
                            height: 500,
                            className:
                              "h-[300px] md:w-[38%] right-[17.00px] bottom-0 top-0 my-auto object-cover ",
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, r.jsx)(f.Z, {}),
                  (0, r.jsx)(u.Z, {}),
                ],
              }),
            ],
          })
        );
      }
    },
    3619: function (e, t, i) {
      "use strict";
      var r = i(7437);
      i(2265);
      var a = i(703),
        n = i(7907);
      t.Z = () => {
        let e = (0, n.useRouter)();
        return (0, r.jsx)("div", {
          className: "",
          children: (0, r.jsx)("div", {
            className:
              "w-full border-t border-2 border-white border-opacity-[19%] justify-center items-center p-6",
            children: (0, r.jsxs)("div", {
              className: " container flex flex-col md:flex-row justify-between",
              children: [
                (0, r.jsx)("div", {
                  className: "md:mx-10",
                  children: (0, r.jsx)(a.default, {
                    priority: !0,
                    src: "/images/logo.png",
                    width: 200,
                    height: 200,
                    alt: "",
                  }),
                }),
                (0, r.jsxs)("div", {
                  className: " m-auto w-full justify-center items-center",
                  children: [
                    (0, r.jsxs)("div", {
                      className:
                        "flex w-fit mx-auto gap-x-5 md:gap-x-32 justify-center items-center",
                      children: [
                        (0, r.jsx)("p", {
                          className:
                            "text-white font-interB text-[16px] cursor-pointer",
                          onClick: () => {
                            e.push("/");
                          },
                          children: "Home",
                        }),
                        (0, r.jsx)("p", {
                          className:
                            "text-white font-interB text-[16px] cursor-pointer ",
                          onClick: () => {
                            e.push("/learn");
                          },
                          children: "Learn",
                        }),
                        (0, r.jsx)("p", {
                          className:
                            "text-white font-interB text-[16px] cursor-pointer",
                          onClick: () => {
                            e.push("https://faucet.btcscan.app");
                          },
                          children: "Faucet",
                        }),
                        (0, r.jsx)("p", {
                          className:
                            "text-white font-interB text-[16px] cursor-pointer",
                          onClick: () => {
                            e.push("https://btclayer.gitbook.io/btclayer");
                          },
                          children: "Gitbook",
                        }),
                        (0, r.jsx)("p", {
                          className:
                            "text-white font-interB text-[16px] cursor-pointer",
                          onClick: () => {
                            e.push("https://bridge.btclayer.org");
                          },
                          children: "Bridge",
                        }),
                        (0, r.jsx)("p", {
                          className:
                            "text-white font-interB text-[16px] cursor-pointer",
                          onClick: () => {
                            e.push("https://btcscan.app/");
                          },
                          children: "Explore",
                        }),
                        (0, r.jsx)("p", {
                          className:
                            "text-white font-interB text-[16px] cursor-pointer",
                          onClick: () => {
                            e.push("/get-started");
                          },
                          children: "Build",
                        }),
                      ],
                    }),
                    (0, r.jsx)("p", {
                      className:
                        "text-white font-interL text-[13px] text-center mt-4 text-opacity-45",
                      children: "Copyright \xa9 2024, BTCLAYER",
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
    },
    6843: function (e, t, i) {
      "use strict";
      var r = i(7437);
      i(2265);
      var a = i(703);
      t.Z = () =>
        (0, r.jsx)("div", {
          children: (0, r.jsxs)("div", {
            className: "flex flex-col mt-[10rem] mb-[10rem]",
            children: [
              (0, r.jsx)("h1", {
                className:
                  "md:text-[50px] text-[26px] font-interB text-center text-white mb-2",
                children: "Join the Community",
              }),
              (0, r.jsxs)("div", {
                className:
                  "flex flex-col md:flex-row justify-between w-fit mx-auto gap-x-5 mt-5",
                children: [
                  (0, r.jsx)(a.default, {
                    priority: !0,
                    src: "/images/footer/twitter.png",
                    width: 80,
                    height: 80,
                    alt: "",
                    className:
                      "cursor-pointer transition-all ease-in-out duration-500 hover:scale-[1.1]",
                    onClick: () => {
                      window.open("https://twitter.com/Btclayer_");
                    },
                  }),
                  (0, r.jsx)(a.default, {
                    priority: !0,
                    src: "/images/footer/discord.png",
                    width: 80,
                    height: 80,
                    alt: "",
                    className:
                      "cursor-pointer transition-all ease-in-out duration-500 hover:scale-[1.1]",
                    onClick: () => {
                      window.open("https://discord.com/invite/4cfgtA2u");
                    },
                  }),
                  (0, r.jsx)(a.default, {
                    priority: !0,
                    src: "/images/footer/telegram.png",
                    width: 80,
                    height: 80,
                    alt: "",
                    className:
                      "cursor-pointer transition-all ease-in-out duration-500 hover:scale-[1.1]",
                    onClick: () => {
                      window.open("https://t.me/OfficialBtclayer");
                    },
                  }),
                  (0, r.jsx)(a.default, {
                    priority: !0,
                    src: "/images/footer/github.png",
                    width: 80,
                    height: 80,
                    alt: "",
                    className:
                      "cursor-pointer transition-all ease-in-out duration-500 hover:scale-[1.1]",
                    onClick: () => {
                      window.open("https://github.com/BtcLayer");
                    },
                  }),
                  (0, r.jsx)(a.default, {
                    priority: !0,
                    src: "/images/footer/linkedin.png",
                    width: 80,
                    height: 80,
                    alt: "",
                    className:
                      "cursor-pointer transition-all ease-in-out duration-500 hover:scale-[1.1]",
                    onClick: () => {
                      window.open("https://www.linkedin.com/company/btclayer/");
                    },
                  }),
                ],
              }),
            ],
          }),
        });
    },
    7141: function (e, t, i) {
      "use strict";
      var r = i(2265),
        a = r && "object" == typeof r && "default" in r ? r : { default: r };
      !(function (e) {
        if (!e || "undefined" == typeof window) return;
        let t = document.createElement("style");
        t.setAttribute("type", "text/css"),
          (t.innerHTML = e),
          document.head.appendChild(t);
      })(
        '.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}'
      );
      let n = r.forwardRef(function (e, t) {
        let {
            style: i = {},
            className: n = "",
            autoFill: s = !1,
            play: l = !0,
            pauseOnHover: o = !1,
            pauseOnClick: c = !1,
            direction: d = "left",
            speed: m = 50,
            delay: x = 0,
            loop: h = 0,
            gradient: u = !1,
            gradientColor: f = "white",
            gradientWidth: p = 200,
            onFinish: w,
            onCycleComplete: g,
            onMount: v,
            children: b,
          } = e,
          [y, j] = r.useState(0),
          [N, B] = r.useState(0),
          [E, C] = r.useState(1),
          [k, A] = r.useState(!1),
          R = r.useRef(null),
          L = t || R,
          S = r.useRef(null),
          F = r.useCallback(() => {
            if (S.current && L.current) {
              let e = L.current.getBoundingClientRect(),
                t = S.current.getBoundingClientRect(),
                i = e.width,
                r = t.width;
              ("up" === d || "down" === d) && ((i = e.height), (r = t.height)),
                s && i && r ? C(r < i ? Math.ceil(i / r) : 1) : C(1),
                j(i),
                B(r);
            }
          }, [s, L, d]);
        r.useEffect(() => {
          if (k && (F(), S.current && L.current)) {
            let e = new ResizeObserver(() => F());
            return (
              e.observe(L.current),
              e.observe(S.current),
              () => {
                e && e.disconnect();
              }
            );
          }
        }, [F, L, k]),
          r.useEffect(() => {
            F();
          }, [F, b]),
          r.useEffect(() => {
            A(!0);
          }, []),
          r.useEffect(() => {
            "function" == typeof v && v();
          }, []);
        let O = r.useMemo(
            () => (s ? (N * E) / m : N < y ? y / m : N / m),
            [s, y, N, E, m]
          ),
          T = r.useMemo(
            () =>
              Object.assign(Object.assign({}, i), {
                "--pause-on-hover": !l || o ? "paused" : "running",
                "--pause-on-click": !l || (o && !c) || c ? "paused" : "running",
                "--width": "up" === d || "down" === d ? "100vh" : "100%",
                "--transform":
                  "up" === d
                    ? "rotate(-90deg)"
                    : "down" === d
                    ? "rotate(90deg)"
                    : "none",
              }),
            [i, l, o, c, d]
          ),
          M = r.useMemo(
            () => ({
              "--gradient-color": f,
              "--gradient-width": "number" == typeof p ? "".concat(p, "px") : p,
            }),
            [f, p]
          ),
          z = r.useMemo(
            () => ({
              "--play": l ? "running" : "paused",
              "--direction": "left" === d ? "normal" : "reverse",
              "--duration": "".concat(O, "s"),
              "--delay": "".concat(x, "s"),
              "--iteration-count": h ? "".concat(h) : "infinite",
              "--min-width": s ? "auto" : "100%",
            }),
            [l, d, O, x, h, s]
          ),
          V = r.useMemo(
            () => ({
              "--transform":
                "up" === d
                  ? "rotate(90deg)"
                  : "down" === d
                  ? "rotate(-90deg)"
                  : "none",
            }),
            [d]
          ),
          Z = r.useCallback(
            (e) =>
              [...Array(Number.isFinite(e) && e >= 0 ? e : 0)].map((e, t) =>
                a.default.createElement(
                  r.Fragment,
                  { key: t },
                  r.Children.map(b, (e) =>
                    a.default.createElement(
                      "div",
                      { style: V, className: "rfm-child" },
                      e
                    )
                  )
                )
              ),
            [V, b]
          );
        return k
          ? a.default.createElement(
              "div",
              { ref: L, style: T, className: "rfm-marquee-container " + n },
              u &&
                a.default.createElement("div", {
                  style: M,
                  className: "rfm-overlay",
                }),
              a.default.createElement(
                "div",
                {
                  className: "rfm-marquee",
                  style: z,
                  onAnimationIteration: g,
                  onAnimationEnd: w,
                },
                a.default.createElement(
                  "div",
                  { className: "rfm-initial-child-container", ref: S },
                  r.Children.map(b, (e) =>
                    a.default.createElement(
                      "div",
                      { style: V, className: "rfm-child" },
                      e
                    )
                  )
                ),
                Z(E - 1)
              ),
              a.default.createElement(
                "div",
                { className: "rfm-marquee", style: z },
                Z(E)
              )
            )
          : null;
      });
      t.Z = n;
    },
  },
  function (e) {
    e.O(0, [520, 116, 423, 971, 69, 744], function () {
      return e((e.s = 3485));
    }),
      (_N_E = e.O());
  },
]);
