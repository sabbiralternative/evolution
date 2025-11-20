import Navbar from "../../../component/UI/Header";
import Footer from "../../../component/UI/Footer";
import ScrollableTab from "../../../component/UI/ScrollableTab";
import RecentlyPlayed from "./RecentPlayed";
import SliderThumbnail from "./SliderThumbnail";
import { useGetCasinoThumbnail } from "../../../hooks/casino";
import Loader from "../../../component/shared/Loader/Loader";

const Home = () => {
  const { data, isLoading } = useGetCasinoThumbnail({ id: "home" });

  const top_picks = data?.top_picks;
  const casinos_choice = data?.casinos_choice;
  const top_games = data?.top_games;

  return (
    <div
      id="root"
      className="rootContainer--308ad"
      style={{ overflow: "auto", zIndex: 99 }}
    >
      <div>
        <div className="customScroll--56dbd">
          <div className="ModalBackground--91107">
            <div className="Root--ee70b" id="lobby-root">
              <div className="Content--2ceeb">
                <Navbar />
                <ScrollableTab />
                {isLoading && <Loader />}
                {!isLoading && (
                  <main className="InnerContent--56377">
                    <div className="SliderWrapper--0c3ac" style={{}}>
                      <div className="Slider--079e7">
                        <div className="SliderLeftArrow--389b9">
                          <div className="SliderArrowClickArea--8ba45" />
                          <div className="SliderArrowContainer--fa455">
                            <div className="LobbyIcon--67f66 LobbyIcon_xs_little--634d1 LobbyIcon_md_mini--31b72 LobbyIcon_lg_regular--f0e47">
                              <svg
                                data-role="arrowAngledLeft"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                              >
                                <use xlinkHref="#arrowAngledLeft" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="SliderRightArrow--e4387">
                          <div className="SliderArrowClickArea--8ba45" />
                          <div className="SliderArrowContainer--fa455">
                            <div className="LobbyIcon--67f66 LobbyIcon_xs_little--634d1 LobbyIcon_md_mini--31b72 LobbyIcon_lg_regular--f0e47">
                              <svg
                                data-role="arrowAngledRight"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                              >
                                <use xlinkHref="#arrowAngledRight" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="SliderList--96b96">
                          <div className="SliderListItem--30f76 active--74e70">
                            <div style={{ marginTop: "0px" }}>
                              <div
                                className="Hero--9fa55 slider--e61af"
                                data-role="hero"
                                style={{}}
                              >
                                <div className="AspectRatioGridBox--082d0 HeroMedia--b4167 Format40to17--932cb">
                                  <section className="TableHeroMedia--ae588 loaded--c8c6b">
                                    <div
                                      className="TableHeroMediaItem--2a315 slider--1fc6a"
                                      data-role="hero-thumbnail"
                                    >
                                      <div
                                        className="ThumbnailImage--e120f TableHeroMediaItemPosition--2d397"
                                        data-role="thumbnail"
                                        style={{
                                          backgroundImage:
                                            'url("blob:https://babylonbetst.evo-games.com/059a9f23-3b2c-4f03-bd51-b315e5847600")',
                                        }}
                                      />
                                    </div>
                                    <div
                                      className="TableHeroMediaVideoItem--ccf15 show--5e0ad slider--1fc6a"
                                      data-role="hero-video"
                                    >
                                      <div className="Video--f19d1">
                                        <video
                                          className="VideoContent--3c796"
                                          src="https://bshots.egcvi.com/thumbnail/hero_topdice_video.mp4"
                                        />
                                      </div>
                                    </div>
                                  </section>
                                  <div
                                    aria-hidden="true"
                                    className="HeroMediaShadow--2137a"
                                  />
                                  <div
                                    aria-hidden="true"
                                    className="HeroMediaBottomShadow--32b7b"
                                  />
                                </div>
                                <div
                                  className="HeroContent--2a74b"
                                  data-role="hero-content"
                                >
                                  <div className="HeroContentItem--ecfc2 HeroContentItemLogos--6376c">
                                    <div className="ItemLogos--9df27">
                                      <div className="Logos--514a1 loaded--37e72">
                                        <svg
                                          className="ProviderLogo--dfa1d"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 83 16"
                                          data-role="provider-logo"
                                        >
                                          <use href="#logo-evolution" />
                                        </svg>
                                        <img
                                          alt="Hero screen game logo"
                                          className="GameLogo--edfc9"
                                          src="blob:https://babylonbetst.evo-games.com/a2e4c7c3-0af5-446e-a1e4-b1a57147cd07"
                                          data-role="game-logo"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="HeroContentItem--ecfc2 HeroContentItemInfos--90be0">
                                    <div className="ItemPlayButton--f8a29">
                                      <button
                                        aria-label="button"
                                        className="Button--3be20 colorPrimary--5595c sizeMedium--7851e variantContained--c1d90 PlayButton--2fc40"
                                        data-role="hero-play-button"
                                        type="button"
                                      >
                                        <span
                                          className="Typography--d2c9a Typography_xs_h5--2ca2d Typography_md_h4--be412 Typography_xl_h3--48d14 bold--d200f colorPrimarySub--07925"
                                          data-role="typography"
                                        >
                                          Play
                                        </span>
                                      </button>
                                    </div>
                                    <div
                                      className="ItemLimits--e12c2"
                                      data-role="hero-bet-limits"
                                    >
                                      <span
                                        className="Typography--d2c9a Limits--300ef mounted--6d304 Typography_xs_h6--849a9 Typography_md_h5--e3ed7 Typography_xl_h4--c75e6 bold--d200f colorPrimarySub--07925"
                                        data-role="typography"
                                      >
                                        ₹50–100K
                                      </span>
                                    </div>
                                    <div
                                      className="ItemPlayers--ef699"
                                      data-role="hero-players"
                                    >
                                      <div className="Players--5da78">
                                        <div className="LobbyIcon--67f66 Icon--ce81e LobbyIcon_xs_tiny--3e71a LobbyIcon_md_little--3faf3 LobbyIcon_xl_reduced--3585c">
                                          <svg
                                            data-role="user"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                          >
                                            <use xlinkHref="#user" />
                                          </svg>
                                        </div>
                                        <span
                                          className="Typography--d2c9a Typography_xs_h6--849a9 Typography_md_h5--e3ed7 Typography_xl_h4--c75e6 bold--d200f colorInfo--34ae1 numeric--2507e"
                                          data-role="table-players"
                                        >
                                          92
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="HeroContentItem--ecfc2 HeroContentItemControls--c3089">
                                    <button
                                      aria-label="button"
                                      className="Button--3be20 colorPrimary--5595c rounded--3f2de sizeSmall--8ac06 variantText--5b2ec"
                                      data-role="sound-button"
                                      type="button"
                                    >
                                      <div className="LobbyIcon--67f66 LobbyIcon_xl_increased--8aa35 LobbyIcon_xs_reduced--aa91d">
                                        <svg
                                          data-role="soundOff"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 16 16"
                                        >
                                          <use xlinkHref="#soundOff" />
                                        </svg>
                                      </div>
                                    </button>
                                    <div className="TooltipWrapper--ce397">
                                      <div
                                        className="Typography--d2c9a Typography_xs_h6--849a9 Typography_md_h5--e3ed7 Typography_xl_h4--c75e6 colorPrimary--f2f02"
                                        data-role="typography"
                                      />
                                      <button
                                        aria-label="button"
                                        className="Button--3be20 colorPrimary--5595c rounded--3f2de sizeSmall--8ac06 variantText--5b2ec HeroContentItemFavorite--e6cda"
                                        data-role="hero-favorite-button"
                                        type="button"
                                      >
                                        <div className="LobbyIcon--67f66 LobbyIcon_xl_increased--8aa35 LobbyIcon_xs_reduced--aa91d">
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
                              </div>
                            </div>
                          </div>
                          <div className="SliderListItem--30f76">
                            <div style={{ marginTop: "0px" }}>
                              <div
                                className="Hero--9fa55 slider--e61af"
                                data-role="hero"
                                style={{}}
                              >
                                <div className="AspectRatioGridBox--082d0 HeroMedia--b4167 Format40to17--932cb">
                                  <section className="TableHeroMedia--ae588 loaded--c8c6b">
                                    <div
                                      className="TableHeroMediaItem--2a315 slider--1fc6a show--5e0ad"
                                      data-role="hero-thumbnail"
                                    >
                                      <div
                                        className="ThumbnailImage--e120f TableHeroMediaItemPosition--2d397"
                                        data-role="thumbnail"
                                        style={{
                                          backgroundImage:
                                            'url("blob:https://babylonbetst.evo-games.com/5f5cdc17-97de-4100-a867-9815138a3424")',
                                        }}
                                      />
                                    </div>
                                    <div
                                      className="TableHeroMediaVideoItem--ccf15 slider--1fc6a"
                                      data-role="hero-video"
                                    >
                                      <div className="Video--f19d1">
                                        <video className="VideoContent--3c796" />
                                      </div>
                                    </div>
                                  </section>
                                  <div
                                    aria-hidden="true"
                                    className="HeroMediaShadow--2137a"
                                  />
                                  <div
                                    aria-hidden="true"
                                    className="HeroMediaBottomShadow--32b7b"
                                  />
                                </div>
                                <div
                                  className="HeroContent--2a74b"
                                  data-role="hero-content"
                                >
                                  <div className="HeroContentItem--ecfc2 HeroContentItemLogos--6376c">
                                    <div className="ItemLogos--9df27">
                                      <div className="Logos--514a1 loaded--37e72">
                                        <svg
                                          className="ProviderLogo--dfa1d"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 83 16"
                                          data-role="provider-logo"
                                        >
                                          <use href="#logo-evolution" />
                                        </svg>
                                        <img
                                          alt="Hero screen game logo"
                                          className="GameLogo--edfc9"
                                          src="blob:https://babylonbetst.evo-games.com/5ef6464b-328f-4e79-bf6c-e01fc0b0948e"
                                          data-role="game-logo"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="HeroContentItem--ecfc2 HeroContentItemInfos--90be0">
                                    <div className="ItemPlayButton--f8a29">
                                      <button
                                        aria-label="button"
                                        className="Button--3be20 colorPrimary--5595c sizeMedium--7851e variantContained--c1d90 PlayButton--2fc40"
                                        data-role="hero-play-button"
                                        type="button"
                                      >
                                        <span
                                          className="Typography--d2c9a Typography_xs_h5--2ca2d Typography_md_h4--be412 Typography_xl_h3--48d14 bold--d200f colorPrimarySub--07925"
                                          data-role="typography"
                                        >
                                          Play
                                        </span>
                                      </button>
                                    </div>
                                    <div
                                      className="ItemLimits--e12c2"
                                      data-role="hero-bet-limits"
                                    >
                                      <span
                                        className="Typography--d2c9a Limits--300ef mounted--6d304 Typography_xs_h6--849a9 Typography_md_h5--e3ed7 Typography_xl_h4--c75e6 bold--d200f colorPrimarySub--07925"
                                        data-role="typography"
                                      >
                                        ⁦⁦⁦₹⁩20⁩–250K⁩
                                      </span>
                                    </div>
                                    <div
                                      className="ItemPlayers--ef699"
                                      data-role="hero-players"
                                    >
                                      <div className="Players--5da78">
                                        <div className="LobbyIcon--67f66 Icon--ce81e LobbyIcon_xs_tiny--3e71a LobbyIcon_md_little--3faf3 LobbyIcon_xl_reduced--3585c">
                                          <svg
                                            data-role="user"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                          >
                                            <use xlinkHref="#user" />
                                          </svg>
                                        </div>
                                        <span
                                          className="Typography--d2c9a Typography_xs_h6--849a9 Typography_md_h5--e3ed7 Typography_xl_h4--c75e6 bold--d200f colorInfo--34ae1 numeric--2507e"
                                          data-role="table-players"
                                        >
                                          1,000
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="HeroContentItem--ecfc2 HeroContentItemControls--c3089">
                                    <button
                                      aria-label="button"
                                      className="Button--3be20 colorPrimary--5595c rounded--3f2de sizeSmall--8ac06 variantText--5b2ec"
                                      data-role="sound-button"
                                      type="button"
                                    >
                                      <div className="LobbyIcon--67f66 LobbyIcon_xl_increased--8aa35 LobbyIcon_xs_reduced--aa91d">
                                        <svg
                                          data-role="soundOff"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 16 16"
                                        >
                                          <use xlinkHref="#soundOff" />
                                        </svg>
                                      </div>
                                    </button>
                                    <div className="TooltipWrapper--ce397">
                                      <div
                                        className="Typography--d2c9a Typography_xs_h6--849a9 Typography_md_h5--e3ed7 Typography_xl_h4--c75e6 colorPrimary--f2f02"
                                        data-role="typography"
                                      />
                                      <button
                                        aria-label="button"
                                        className="Button--3be20 colorPrimary--5595c rounded--3f2de sizeSmall--8ac06 variantText--5b2ec HeroContentItemFavorite--e6cda"
                                        data-role="hero-favorite-button"
                                        type="button"
                                      >
                                        <div className="LobbyIcon--67f66 LobbyIcon_xl_increased--8aa35 LobbyIcon_xs_reduced--aa91d">
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
                              </div>
                            </div>
                          </div>
                          <div className="SliderListItem--30f76">
                            <div style={{ marginTop: "0px" }}>
                              <div
                                className="Hero--9fa55 slider--e61af"
                                data-role="hero"
                                style={{}}
                              >
                                <div className="AspectRatioGridBox--082d0 HeroMedia--b4167 Format40to17--932cb">
                                  <section className="TableHeroMedia--ae588 loaded--c8c6b">
                                    <div
                                      className="TableHeroMediaItem--2a315 slider--1fc6a show--5e0ad"
                                      data-role="hero-thumbnail"
                                    >
                                      <div
                                        className="ThumbnailImage--e120f TableHeroMediaItemPosition--2d397"
                                        data-role="thumbnail"
                                        style={{
                                          backgroundImage:
                                            'url("blob:https://babylonbetst.evo-games.com/e66a94b3-c5bb-4787-87a2-37ef683b9fdb")',
                                        }}
                                      />
                                    </div>
                                    <div
                                      className="TableHeroMediaVideoItem--ccf15 slider--1fc6a"
                                      data-role="hero-video"
                                    >
                                      <div className="Video--f19d1">
                                        <video className="VideoContent--3c796" />
                                      </div>
                                    </div>
                                  </section>
                                  <div
                                    aria-hidden="true"
                                    className="HeroMediaShadow--2137a"
                                  />
                                  <div
                                    aria-hidden="true"
                                    className="HeroMediaBottomShadow--32b7b"
                                  />
                                </div>
                                <div
                                  className="HeroContent--2a74b"
                                  data-role="hero-content"
                                >
                                  <div className="HeroContentItem--ecfc2 HeroContentItemLogos--6376c">
                                    <div className="ItemLogos--9df27">
                                      <div className="Logos--514a1 loaded--37e72">
                                        <svg
                                          className="ProviderLogo--dfa1d"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 83 16"
                                          data-role="provider-logo"
                                        >
                                          <use href="#logo-evolution" />
                                        </svg>
                                        <img
                                          alt="Hero screen game logo"
                                          className="GameLogo--edfc9"
                                          src="blob:https://babylonbetst.evo-games.com/aef5bba7-6e30-491b-b802-182119421a3c"
                                          data-role="game-logo"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="HeroContentItem--ecfc2 HeroContentItemInfos--90be0">
                                    <div className="ItemPlayButton--f8a29">
                                      <button
                                        aria-label="button"
                                        className="Button--3be20 colorPrimary--5595c sizeMedium--7851e variantContained--c1d90 PlayButton--2fc40"
                                        data-role="hero-play-button"
                                        type="button"
                                      >
                                        <span
                                          className="Typography--d2c9a Typography_xs_h5--2ca2d Typography_md_h4--be412 Typography_xl_h3--48d14 bold--d200f colorPrimarySub--07925"
                                          data-role="typography"
                                        >
                                          Play
                                        </span>
                                      </button>
                                    </div>
                                    <div
                                      className="ItemLimits--e12c2"
                                      data-role="hero-bet-limits"
                                    >
                                      <span
                                        className="Typography--d2c9a Limits--300ef mounted--6d304 Typography_xs_h6--849a9 Typography_md_h5--e3ed7 Typography_xl_h4--c75e6 bold--d200f colorPrimarySub--07925"
                                        data-role="typography"
                                      >
                                        ⁦⁦⁦₹⁩1⁩–25,000⁩
                                      </span>
                                    </div>
                                    <div
                                      className="ItemPlayers--ef699"
                                      data-role="hero-players"
                                    >
                                      <div className="Players--5da78">
                                        <div className="LobbyIcon--67f66 Icon--ce81e LobbyIcon_xs_tiny--3e71a LobbyIcon_md_little--3faf3 LobbyIcon_xl_reduced--3585c">
                                          <svg
                                            data-role="user"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                          >
                                            <use xlinkHref="#user" />
                                          </svg>
                                        </div>
                                        <span
                                          className="Typography--d2c9a Typography_xs_h6--849a9 Typography_md_h5--e3ed7 Typography_xl_h4--c75e6 bold--d200f colorInfo--34ae1 numeric--2507e"
                                          data-role="table-players"
                                        >
                                          6,756
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="HeroContentItem--ecfc2 HeroContentItemControls--c3089">
                                    <button
                                      aria-label="button"
                                      className="Button--3be20 colorPrimary--5595c rounded--3f2de sizeSmall--8ac06 variantText--5b2ec"
                                      data-role="sound-button"
                                      type="button"
                                    >
                                      <div className="LobbyIcon--67f66 LobbyIcon_xl_increased--8aa35 LobbyIcon_xs_reduced--aa91d">
                                        <svg
                                          data-role="soundOff"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 16 16"
                                        >
                                          <use xlinkHref="#soundOff" />
                                        </svg>
                                      </div>
                                    </button>
                                    <div className="TooltipWrapper--ce397">
                                      <div
                                        className="Typography--d2c9a Typography_xs_h6--849a9 Typography_md_h5--e3ed7 Typography_xl_h4--c75e6 colorPrimary--f2f02"
                                        data-role="typography"
                                      />
                                      <button
                                        aria-label="button"
                                        className="Button--3be20 colorPrimary--5595c rounded--3f2de sizeSmall--8ac06 variantText--5b2ec HeroContentItemFavorite--e6cda"
                                        data-role="hero-favorite-button"
                                        type="button"
                                      >
                                        <div className="LobbyIcon--67f66 LobbyIcon_xl_increased--8aa35 LobbyIcon_xs_reduced--aa91d">
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
                              </div>
                            </div>
                          </div>
                          <div className="SliderListItem--30f76">
                            <div style={{ marginTop: "0px" }}>
                              <div
                                className="Hero--9fa55 slider--e61af"
                                data-role="hero"
                                style={{}}
                              >
                                <div className="AspectRatioGridBox--082d0 HeroMedia--b4167 Format40to17--932cb">
                                  <section className="TableHeroMedia--ae588 loaded--c8c6b">
                                    <div
                                      className="TableHeroMediaItem--2a315 slider--1fc6a show--5e0ad"
                                      data-role="hero-thumbnail"
                                    >
                                      <div
                                        className="ThumbnailImage--e120f TableHeroMediaItemPosition--2d397"
                                        data-role="thumbnail"
                                        style={{
                                          backgroundImage:
                                            'url("blob:https://babylonbetst.evo-games.com/5c15b811-6abd-43ab-b6b1-2e07163b739f")',
                                        }}
                                      />
                                    </div>
                                    <div
                                      className="TableHeroMediaVideoItem--ccf15 slider--1fc6a"
                                      data-role="hero-video"
                                    >
                                      <div className="Video--f19d1">
                                        <video className="VideoContent--3c796" />
                                      </div>
                                    </div>
                                  </section>
                                  <div
                                    aria-hidden="true"
                                    className="HeroMediaShadow--2137a"
                                  />
                                  <div
                                    aria-hidden="true"
                                    className="HeroMediaBottomShadow--32b7b"
                                  />
                                </div>
                                <div
                                  className="HeroContent--2a74b"
                                  data-role="hero-content"
                                >
                                  <div className="HeroContentItem--ecfc2 HeroContentItemLogos--6376c">
                                    <div className="ItemLogos--9df27">
                                      <div className="Logos--514a1 loaded--37e72">
                                        <svg
                                          className="ProviderLogo--dfa1d"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 83 16"
                                          data-role="provider-logo"
                                        >
                                          <use href="#logo-evolution" />
                                        </svg>
                                        <img
                                          alt="Hero screen game logo"
                                          className="GameLogo--edfc9"
                                          src="blob:https://babylonbetst.evo-games.com/5a4ee17b-24c1-4efd-9b10-122e45767668"
                                          data-role="game-logo"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="HeroContentItem--ecfc2 HeroContentItemInfos--90be0">
                                    <div className="ItemPlayButton--f8a29">
                                      <button
                                        aria-label="button"
                                        className="Button--3be20 colorPrimary--5595c sizeMedium--7851e variantContained--c1d90 PlayButton--2fc40"
                                        data-role="hero-play-button"
                                        type="button"
                                      >
                                        <span
                                          className="Typography--d2c9a Typography_xs_h5--2ca2d Typography_md_h4--be412 Typography_xl_h3--48d14 bold--d200f colorPrimarySub--07925"
                                          data-role="typography"
                                        >
                                          Play
                                        </span>
                                      </button>
                                    </div>
                                    <div
                                      className="ItemLimits--e12c2"
                                      data-role="hero-bet-limits"
                                    >
                                      <span
                                        className="Typography--d2c9a Limits--300ef mounted--6d304 Typography_xs_h6--849a9 Typography_md_h5--e3ed7 Typography_xl_h4--c75e6 bold--d200f colorPrimarySub--07925"
                                        data-role="typography"
                                      >
                                        ⁦⁦⁦₹⁩100⁩–500K⁩
                                      </span>
                                    </div>
                                    <div
                                      className="ItemPlayers--ef699"
                                      data-role="hero-players"
                                    >
                                      <div className="Players--5da78">
                                        <div className="LobbyIcon--67f66 Icon--ce81e LobbyIcon_xs_tiny--3e71a LobbyIcon_md_little--3faf3 LobbyIcon_xl_reduced--3585c">
                                          <svg
                                            data-role="user"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                          >
                                            <use xlinkHref="#user" />
                                          </svg>
                                        </div>
                                        <span
                                          className="Typography--d2c9a Typography_xs_h6--849a9 Typography_md_h5--e3ed7 Typography_xl_h4--c75e6 bold--d200f colorInfo--34ae1 numeric--2507e"
                                          data-role="table-players"
                                        >
                                          1,285
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="HeroContentItem--ecfc2 HeroContentItemControls--c3089">
                                    <button
                                      aria-label="button"
                                      className="Button--3be20 colorPrimary--5595c rounded--3f2de sizeSmall--8ac06 variantText--5b2ec"
                                      data-role="sound-button"
                                      type="button"
                                    >
                                      <div className="LobbyIcon--67f66 LobbyIcon_xl_increased--8aa35 LobbyIcon_xs_reduced--aa91d">
                                        <svg
                                          data-role="soundOff"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 16 16"
                                        >
                                          <use xlinkHref="#soundOff" />
                                        </svg>
                                      </div>
                                    </button>
                                    <div className="TooltipWrapper--ce397">
                                      <div
                                        className="Typography--d2c9a Typography_xs_h6--849a9 Typography_md_h5--e3ed7 Typography_xl_h4--c75e6 colorPrimary--f2f02"
                                        data-role="typography"
                                      />
                                      <button
                                        aria-label="button"
                                        className="Button--3be20 colorPrimary--5595c rounded--3f2de sizeSmall--8ac06 variantText--5b2ec HeroContentItemFavorite--e6cda"
                                        data-role="hero-favorite-button"
                                        type="button"
                                      >
                                        <div className="LobbyIcon--67f66 LobbyIcon_xl_increased--8aa35 LobbyIcon_xs_reduced--aa91d">
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
                              </div>
                            </div>
                          </div>
                          <div className="SliderListItem--30f76">
                            <div style={{ marginTop: "0px" }}>
                              <div
                                className="Hero--9fa55 slider--e61af"
                                data-role="hero"
                                style={{}}
                              >
                                <div className="AspectRatioGridBox--082d0 HeroMedia--b4167 Format40to17--932cb">
                                  <section className="TableHeroMedia--ae588 loaded--c8c6b">
                                    <div
                                      className="TableHeroMediaItem--2a315 slider--1fc6a show--5e0ad"
                                      data-role="hero-thumbnail"
                                    >
                                      <div
                                        className="ThumbnailImage--e120f TableHeroMediaItemPosition--2d397"
                                        data-role="thumbnail"
                                        style={{
                                          backgroundImage:
                                            'url("blob:https://babylonbetst.evo-games.com/7f8d749d-8eed-49f3-a389-711b4ee0def8")',
                                        }}
                                      />
                                    </div>
                                    <div
                                      className="TableHeroMediaVideoItem--ccf15 slider--1fc6a"
                                      data-role="hero-video"
                                    >
                                      <div className="Video--f19d1">
                                        <video className="VideoContent--3c796" />
                                      </div>
                                    </div>
                                  </section>
                                  <div
                                    aria-hidden="true"
                                    className="HeroMediaShadow--2137a"
                                  />
                                  <div
                                    aria-hidden="true"
                                    className="HeroMediaBottomShadow--32b7b"
                                  />
                                </div>
                                <div
                                  className="HeroContent--2a74b"
                                  data-role="hero-content"
                                >
                                  <div className="HeroContentItem--ecfc2 HeroContentItemLogos--6376c">
                                    <div className="ItemLogos--9df27">
                                      <div className="Logos--514a1 loaded--37e72">
                                        <svg
                                          className="ProviderLogo--dfa1d"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 83 16"
                                          data-role="provider-logo"
                                        >
                                          <use href="#logo-evolution" />
                                        </svg>
                                        <img
                                          alt="Hero screen game logo"
                                          className="GameLogo--edfc9"
                                          src="blob:https://babylonbetst.evo-games.com/9bdb76ea-bcc4-4433-aa7b-71978084ca5e"
                                          data-role="game-logo"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="HeroContentItem--ecfc2 HeroContentItemInfos--90be0">
                                    <div className="ItemPlayButton--f8a29">
                                      <button
                                        aria-label="button"
                                        className="Button--3be20 colorPrimary--5595c sizeMedium--7851e variantContained--c1d90 PlayButton--2fc40"
                                        data-role="hero-play-button"
                                        type="button"
                                      >
                                        <span
                                          className="Typography--d2c9a Typography_xs_h5--2ca2d Typography_md_h4--be412 Typography_xl_h3--48d14 bold--d200f colorPrimarySub--07925"
                                          data-role="typography"
                                        >
                                          Play
                                        </span>
                                      </button>
                                    </div>
                                    <div
                                      className="ItemLimits--e12c2"
                                      data-role="hero-bet-limits"
                                    >
                                      <span
                                        className="Typography--d2c9a Limits--300ef mounted--6d304 Typography_xs_h6--849a9 Typography_md_h5--e3ed7 Typography_xl_h4--c75e6 bold--d200f colorPrimarySub--07925"
                                        data-role="typography"
                                      >
                                        ⁦⁦⁦₹⁩100⁩–100K⁩
                                      </span>
                                    </div>
                                    <div
                                      className="ItemPlayers--ef699"
                                      data-role="hero-players"
                                    >
                                      <div className="Players--5da78">
                                        <div className="LobbyIcon--67f66 Icon--ce81e LobbyIcon_xs_tiny--3e71a LobbyIcon_md_little--3faf3 LobbyIcon_xl_reduced--3585c">
                                          <svg
                                            data-role="user"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                          >
                                            <use xlinkHref="#user" />
                                          </svg>
                                        </div>
                                        <span
                                          className="Typography--d2c9a Typography_xs_h6--849a9 Typography_md_h5--e3ed7 Typography_xl_h4--c75e6 bold--d200f colorInfo--34ae1 numeric--2507e"
                                          data-role="table-players"
                                        >
                                          259
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="HeroContentItem--ecfc2 HeroContentItemControls--c3089">
                                    <button
                                      aria-label="button"
                                      className="Button--3be20 colorPrimary--5595c rounded--3f2de sizeSmall--8ac06 variantText--5b2ec"
                                      data-role="sound-button"
                                      type="button"
                                    >
                                      <div className="LobbyIcon--67f66 LobbyIcon_xl_increased--8aa35 LobbyIcon_xs_reduced--aa91d">
                                        <svg
                                          data-role="soundOff"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 16 16"
                                        >
                                          <use xlinkHref="#soundOff" />
                                        </svg>
                                      </div>
                                    </button>
                                    <div className="TooltipWrapper--ce397">
                                      <div
                                        className="Typography--d2c9a Typography_xs_h6--849a9 Typography_md_h5--e3ed7 Typography_xl_h4--c75e6 colorPrimary--f2f02"
                                        data-role="typography"
                                      />
                                      <button
                                        aria-label="button"
                                        className="Button--3be20 colorPrimary--5595c rounded--3f2de sizeSmall--8ac06 variantText--5b2ec HeroContentItemFavorite--e6cda"
                                        data-role="hero-favorite-button"
                                        type="button"
                                      >
                                        <div className="LobbyIcon--67f66 LobbyIcon_xl_increased--8aa35 LobbyIcon_xs_reduced--aa91d">
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
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="SliderPagination--1f4cd">
                        <div
                          className="PaginationDots--b1d8a"
                          data-role="grid-pagination-dots"
                        >
                          <div className="PaginationDotContainer--8b6e6">
                            <div
                              className="PaginationDot--61885 active--da160"
                              style={{ "--pagination-dot-scale": 1 }}
                            >
                              <div
                                className="ProgressFill--69b4d"
                                style={{ "--pagination-dot-progress": "0.29" }}
                              />
                            </div>
                          </div>
                          <div className="PaginationDotContainer--8b6e6">
                            <div
                              className="PaginationDot--61885"
                              style={{ "--pagination-dot-scale": 1 }}
                            />
                          </div>
                          <div className="PaginationDotContainer--8b6e6">
                            <div
                              className="PaginationDot--61885"
                              style={{ "--pagination-dot-scale": "0.8" }}
                            />
                          </div>
                          <div className="PaginationDotContainer--8b6e6">
                            <div
                              className="PaginationDot--61885"
                              style={{ "--pagination-dot-scale": "0.6" }}
                            />
                          </div>
                          <div className="PaginationDotContainer--8b6e6">
                            <div
                              className="PaginationDot--61885"
                              style={{ "--pagination-dot-scale": "0.5" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <SliderThumbnail
                      data={top_picks}
                      title="Top Picks for you"
                    />

                    <RecentlyPlayed />
                    <SliderThumbnail
                      data={casinos_choice}
                      title="Casino's Choice"
                    />
                    <SliderThumbnail data={top_games} title="Top Games" />
                  </main>
                )}

                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
