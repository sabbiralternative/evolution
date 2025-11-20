import { useSelector } from "react-redux";
import { Fragment, useMemo } from "react";
import { useSound } from "../../context/ApiProvider";
import { useNavigate } from "react-router-dom";
import { playClick } from "../../utils/sound";
import { FaLock } from "react-icons/fa";
import { useGetCasinoThumbnail } from "../../hooks/casino";

const RecentlyPlayed = () => {
  const navigate = useNavigate();
  const { sound } = useSound();
  const { username } = useSelector((state) => state.auth);
  const { data } = useGetCasinoThumbnail({ id: "casino" });

  const safeParse = (value) => {
    try {
      return JSON.parse(value);
    } catch {
      return null;
    }
  };

  const games = useMemo(() => {
    if (!data?.length) return [];
    const stored = localStorage.getItem(`${username}-recent-played`);
    const parseRecentGame = safeParse(stored);
    if (!parseRecentGame) return [];

    const eventIds = parseRecentGame.map((ids) => Number(ids?.eventId));
    const filterGames = data.filter((game) => eventIds.includes(game?.eventId));

    return filterGames
      .map((game) => {
        const storedGame = parseRecentGame.find(
          (item) => Number(item?.eventId) === game?.eventId
        );
        return { ...game, sortBy: storedGame?.sort };
      })
      .sort((a, b) => b.sortBy - a.sortBy);
  }, [data, username]);

  const getCasinoLink = (casino) =>
    `/game/${casino?.slug}/${casino?.eventTypeId}/${casino?.eventId}`;

  const handleNavigate = (casino) => {
    if (sound) playClick();
    navigate(getCasinoLink(casino));
  };

  const historyData = [
    "A",
    "H",
    "A",
    "H",
    "A",
    "B",
    "A",
    "A",
    "H",
    "A",
    "H",
    "A",
    "B",
    "A",
    "A",
    "B",
    "A",
    "A",
    "H",
    "A",
    "H",
    "A",
    "B",
    "A",
  ];
  return (
    <Fragment>
      {games?.length > 0 && (
        <section
          className="AbstractCategory--f5e0f"
          id="category-recently_played"
        >
          <div className="AbstractCategoryHeader--04845">
            <div className="AbstractCategoryHeaderTitle--110c9">
              <span
                className="Typography--d2c9a Typography_xs_h4--0d32f Typography_md_h3--49299 bold--d200f colorPrimary--f2f02 ellipsisModeOneLine--825c0"
                data-role="category-header"
              >
                Recently Played
              </span>
              <div className="SeeAllLink--68bcb">
                <button
                  aria-label="button"
                  className="Button--3be20 colorPrimary--5595c rounded--3f2de sizeMini--96400 variantText--5b2ec"
                  data-role="see-all-button"
                  type="button"
                >
                  <span
                    className="Typography--d2c9a Typography_xs_subtitle1--6fd5e Typography_md_h6--9d8db Typography_xl_h5--ded48 colorSecondarySub--1089b"
                    data-role="typography"
                  >
                    <div className="LobbyIcon--67f66 LobbyIcon_xs_tiny--3e71a LobbyIcon_md_small--40c38 LobbyIcon_xl_reduced--3585c">
                      <svg
                        data-role="arrowRight"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                      >
                        <use xlinkHref="#arrowRight" />
                      </svg>
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div
            aria-label="Grid"
            className="Grid--5cf62"
            data-role="grid"
            id="category-grid-recently_played"
            style={{
              "-arrowWidth": "1.25rem",
              "-arrowHeightIndent": "54px",
              "-columns": 2,
              "-columnGap": "1rem",
              "-columnGutter": "1.25rem",
            }}
          >
            <ul
              className="GridList--d4aee HorizontalGridList--1021f"
              data-role="grid-list"
            >
              {games?.map((game) => {
                return (
                  <li
                    style={{
                      pointerEvents: game?.active ? "auto" : "none",
                    }}
                    onClick={() => handleNavigate(game)}
                    key={game?.name}
                    className="GridListItem--42b25"
                    data-role="grid-list-item"
                    id="DragonTiger00001::top_picks_for_you"
                  >
                    <div id="DragonTiger00001">
                      <article className="Table--d130c">
                        <div
                          data-role="table-tile"
                          className="AspectRatioGridBox--082d0 TableTile--8c70b clickable--0e8a0 Format4to3--0756d"
                        >
                          <div
                            className="ThumbnailImage--e120f rounded--acc2d rightCornerShadow--151b0"
                            data-role="thumbnail"
                            style={{
                              backgroundImage: `url(${game?.image})`,
                            }}
                          />
                          {!game?.active && (
                            <div
                              className="TableOverlay--2e8c7 occupied--38045 tile--83efd"
                              aria-label="Occupied"
                              data-role="occupied-table"
                            >
                              <div className="LobbyIcon--67f66 LobbyIcon_md_large--a67e3 LobbyIcon_xl_huge--3a29c LobbyIcon_xs_increased--bc5f6">
                                <FaLock size={20} />
                              </div>
                              <span
                                className="Typography--d2c9a Typography_xs_subtitle1--6fd5e Typography_md_h6--9d8db Typography_xl_h5--ded48 bold--d200f colorPrimary--f2f02 ellipsisModeOneLine--825c0 hyphens--b1b61"
                                data-role="typography"
                                style={{ color: "rgb(196, 196, 196)" }}
                              >
                                Table Closed
                              </span>
                            </div>
                          )}
                          <div className="TableTileFooter--9a6e3 animate--bf579" />
                          <div className="History--87740 tile--466c7">
                            <div
                              className="ordinary--c80d8"
                              style={{
                                position: "relative",
                                overflow: "hidden",
                              }}
                            >
                              <div
                                className="HistoryGrid--4c95d stretched--bce7a"
                                data-role="history-grid"
                                style={{
                                  "--history-grid-columns": "auto-fill",
                                  "--history-grid-rows": 1,
                                  "--history-grid-auto-rows": 0,
                                  "--history-grid-item-height": "20px",
                                  "--history-grid-item-width": "26px",
                                  "--history-grid-column-gap": "3px",
                                  "--history-grid-row-gap": "3px",
                                  "--history-grid-max-height":
                                    "calc(20px * 1 + 3px * 0)",
                                  position: "absolute",
                                  bottom: "0px",
                                  display: "flex",
                                  overflow: "auto",
                                }}
                              >
                                {historyData?.map((item, idx) => {
                                  const color =
                                    item == "A"
                                      ? "#d83b32"
                                      : item === "H"
                                      ? "#38b142"
                                      : item == "B"
                                      ? "#156ed1"
                                      : "transparent";
                                  return (
                                    <div
                                      key={idx}
                                      className="HistoryGridItem--3593c"
                                    >
                                      <svg
                                        width={53}
                                        height={31}
                                        viewBox="0 0 53 31"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <g filter="url(#history)">
                                          <path
                                            fill="black"
                                            fillOpacity="0.4"
                                            d="M 37.5 1 H 5.5 C 3.6 1 2.4 2.9 3.3 4.5 L 7.7 11.5 C 8.1 12.2 8.1 13.1 7.7 13.8 L 3.3 20.9 C 2.4 22.4 3.6 24.4 5.5 24.4 H 37.5 C 39.8 24.4 41.8 23.2 42.9 21.4 L 47.6 13.8 C 48 13.1 48 12.2 47.6 11.5 L 42.9 3.9 C 41.8 2.1 39.8 1 37.5 1 Z"
                                          />
                                          <path
                                            fill={color}
                                            fillOpacity="0.8"
                                            stroke={`url(#history-icon-LasWin-Tiger-${idx})`}
                                            fillRule="evenodd"
                                            strokeWidth={2}
                                            d="M 37.5 1 H 5.5 C 3.6 1 2.4 2.9 3.3 4.5 L 7.7 11.5 C 8.1 12.2 8.1 13.1 7.7 13.8 L 3.3 20.9 C 2.4 22.4 3.6 24.4 5.5 24.4 H 37.5 C 39.8 24.4 41.8 23.2 42.9 21.4 L 47.6 13.8 C 48 13.1 48 12.2 47.6 11.5 L 42.9 3.9 C 41.8 2.1 39.8 1 37.5 1 Z"
                                          />
                                          <text
                                            x={19}
                                            y={19}
                                            fill="#fff"
                                            fontSize={16}
                                          >
                                            {item}
                                          </text>
                                        </g>
                                        <filter
                                          id="history"
                                          x="0.307218"
                                          y="0.10144"
                                          width="52.1238"
                                          height="30.5495"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feFlood
                                            floodOpacity={0}
                                            result="BackgroundImageFix"
                                          />
                                          <feColorMatrix
                                            in="SourceAlpha"
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            result="hardAlpha"
                                          />
                                          <feOffset
                                            dx="0.898515"
                                            dy="2.69554"
                                          />
                                          <feGaussianBlur stdDeviation="1.34777" />
                                          <feComposite
                                            in2="hardAlpha"
                                            operator="out"
                                          />
                                          <feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0"
                                          />
                                          <feBlend
                                            mode="normal"
                                            in2="BackgroundImageFix"
                                            result="effect1_dropShadow_84_5998"
                                          />
                                          <feBlend
                                            mode="normal"
                                            in="SourceGraphic"
                                            in2="effect1_dropShadow_84_5998"
                                            result="shape"
                                          />
                                        </filter>
                                        <defs>
                                          <linearGradient
                                            id={`history-icon-LasWin-Tiger-${idx}`}
                                            x1={27}
                                            y1={1}
                                            x2={27}
                                            y2={27}
                                            gradientUnits="userSpaceOnUse"
                                          >
                                            <stop stopColor={color} />
                                            <stop
                                              offset={1}
                                              stopColor={color}
                                              stopOpacity={0}
                                            />
                                          </linearGradient>
                                        </defs>
                                      </svg>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                          <div className="FavoriteButton--9ff10">
                            <div className="TooltipWrapper--ce397">
                              <div
                                className="Typography--d2c9a Typography_xs_subtitle2--d8518 colorPrimary--f2f02"
                                data-role="typography"
                              >
                                <div className="MobileTooltipWrapper--09e4d" />
                              </div>
                              <button
                                aria-label="button"
                                className="Button--3be20 colorPrimary--5595c rounded--3f2de sizeSmall--8ac06 variantText--5b2ec toned--77238"
                                data-role="table-favorite-icon"
                                type="button"
                              >
                                <div className="LobbyIcon--67f66 LobbyIcon_xs_reduced--aa91d">
                                  <svg
                                    className="FavoriteIcon--93af8"
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                    data-role="favoriteEmpty"
                                  >
                                    <g className="FavoriteIconGroup--5232b">
                                      <path
                                        id="animatedFavorite"
                                        className="HeartRotation--547e9"
                                        d="M6.19217 5.13748C6.01645 5.13038 5.84114 5.16011 5.67651 5.22494C5.51188 5.28977 5.36123 5.38839 5.23339 5.51503C5.10556 5.64167 5.0031 5.79379 4.93202 5.96247C4.86093 6.13115 4.82265 6.313 4.81941 6.49739C4.81941 7.65353 6.06123 8.8141 7.94086 10.5727L7.9704 10.5993H7.99577C9.88385 8.82739 11.1299 7.67568 11.1299 6.51954C11.1288 6.33519 11.0927 6.15291 11.0236 5.98338C10.9546 5.81384 10.854 5.66044 10.7278 5.53216C10.6015 5.40388 10.4521 5.3033 10.2884 5.23629C10.1246 5.16928 9.94974 5.1372 9.77401 5.14191C9.55387 5.14416 9.33665 5.19503 9.13651 5.29119C8.93637 5.38736 8.75781 5.52667 8.61244 5.70005L7.97463 6.47081L7.33682 5.70005C7.19111 5.5271 7.01251 5.38808 6.81245 5.29195C6.61238 5.19582 6.3953 5.14471 6.17526 5.14191L6.19217 5.13748ZM6.17526 4.25598C6.51579 4.25943 6.85185 4.33769 7.16177 4.4857C7.4717 4.63372 7.7486 4.84821 7.97463 5.11533C8.20015 4.84756 8.47699 4.63263 8.78703 4.48456C9.09706 4.33649 9.43335 4.25861 9.77401 4.25598C10.0612 4.24714 10.3472 4.29838 10.6152 4.40673C10.8833 4.51507 11.1281 4.67835 11.3353 4.88702C11.5426 5.09569 11.708 5.34556 11.8222 5.62206C11.9363 5.89855 11.9968 6.19612 12 6.49739C12 8.0522 10.6399 9.31909 8.57867 11.2416L7.99577 11.7643L7.4171 11.246C5.36007 9.31909 4 8.0522 4 6.49739C3.99995 6.19637 4.05714 5.89836 4.16824 5.62081C4.27935 5.34325 4.44212 5.09172 4.64704 4.88094C4.85196 4.67016 5.09491 4.50437 5.36167 4.39325C5.62844 4.28214 5.91364 4.22794 6.20062 4.23383L6.17526 4.25598Z"
                                        fill="currentColor"
                                      />
                                    </g>
                                  </svg>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div
                          className="Info--2c65e clickable--9bc55 tile--5d2e6"
                          data-role="table-tile-info"
                        >
                          <div className="InfoRow--e30fc InfoRowMain--17f9c">
                            <p
                              className="Typography--d2c9a Typography_xs_subtitle1--6fd5e Typography_md_h6--9d8db Typography_xl_h5--ded48 bold--d200f colorPrimary--f2f02 ellipsisModeOneLine--825c0"
                              data-role="tile-name"
                            >
                              {game?.name}
                            </p>
                          </div>
                          <div className="InfoRow--e30fc InfoRowSub--d7d19">
                            <span
                              className="Typography--d2c9a Limits--300ef Typography_xs_subtitle2--d8518 Typography_md_subtitle1--a027c Typography_xl_h6--d162d bold--d200f colorAccent--465da"
                              data-role="typography"
                            >
                              ₹{game?.min}
                            </span>
                            <div className="Players--5da78">
                              <div className="LobbyIcon--67f66 Icon--ce81e LobbyIcon_xs_atomic--45429 LobbyIcon_md_micro--75f95 LobbyIcon_xl_tiny--ad0cd">
                                <svg
                                  data-role="user"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 16 16"
                                >
                                  <use xlinkHref="#user" />
                                </svg>
                              </div>
                              <span
                                className="Typography--d2c9a Typography_xs_subtitle2--d8518 Typography_md_subtitle1--a027c Typography_xl_h6--d162d bold--d200f colorInfo--34ae1 numeric--2507e"
                                data-role="table-players"
                              >
                                {game?.users}
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}
    </Fragment>
  );
};

export default RecentlyPlayed;
