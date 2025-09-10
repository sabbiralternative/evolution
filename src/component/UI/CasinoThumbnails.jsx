import { useNavigate } from "react-router-dom";
import { useGetLiveCasinoThumbnailQuery } from "../../redux/features/casino/casino.api";
import StaticThumbnail from "../shared/StaticThumbnail";

const CasinoThumbnail = ({ title, id }) => {
  const navigate = useNavigate();
  const { data } = useGetLiveCasinoThumbnailQuery({ id });

  const handleNavigate = (casino) => {
    const formatLink = `/game/${casino?.slug}/${casino?.eventTypeId}/${casino?.eventId}`;
    new Audio("/click.mp3").play();
    navigate(formatLink);
  };
  return (
    <main className="InnerContent--56377">
      <section className="AbstractCategory--f5e0f" id="category-top_games">
        <div className="AbstractCategoryHeader--04845">
          <div className="AbstractCategoryHeaderTitle--110c9 withMargin--7f145">
            <span
              className="Typography--d2c9a Typography_xs_h4--0d32f Typography_md_h3--49299 bold--d200f colorPrimary--f2f02 ellipsisModeOneLine--825c0"
              data-role="category-header"
            >
              {title}
            </span>
          </div>
          <div className="AbstractCategoryHeaderSubtitle--c88d3"></div>
        </div>
        <div
          aria-label="Grid"
          className="Grid--5cf62 VerticalGrid--f55ec"
          data-role="grid"
          id="category-grid-top_games"
          style={{
            "-arrowWidth": "1rem",
            "-columns": 2,
            "-columnGap": "1rem",
            "-columnGutter": "1rem",
            "-rowGap": "1rem",
          }}
        >
          <ul
            className="GridList--d4aee VerticalGridList--d7dca"
            data-role="grid-list"
          >
            {data?.map((casino) => {
              return (
                <li
                  key={casino?.eventId}
                  onClick={() => handleNavigate(casino)}
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
                            backgroundImage: `url(${casino?.image})`,
                          }}
                        />
                        <div className="TableTileFooter--9a6e3 animate--bf579" />
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
                            {casino?.name}
                          </p>
                        </div>
                        <div className="InfoRow--e30fc InfoRowSub--d7d19">
                          <span
                            className="Typography--d2c9a Limits--300ef Typography_xs_subtitle2--d8518 Typography_md_subtitle1--a027c Typography_xl_h6--d162d bold--d200f colorAccent--465da"
                            data-role="typography"
                          >
                            ₹{casino?.min} ₹{casino?.max}
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
                              648
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </li>
              );
            })}
            <StaticThumbnail slug="football-dice" name="Football Dice" />
          </ul>
        </div>
      </section>
    </main>
  );
};

export default CasinoThumbnail;
