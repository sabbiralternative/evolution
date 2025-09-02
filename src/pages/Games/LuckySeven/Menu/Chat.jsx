const Chat = ({ setTab, closeModal }) => {
  return (
    <div
      className="root--594e2 root--ac0ae withBorder--a433d"
      data-role="drawer-container"
    >
      <div className="touchEventBlocker--32d6c" />
      <div
        className="backgroundScrim--f8ae8 backgroundScrim--3380d"
        data-role="drawer-scrim"
        style={{
          opacity: "0.4",
          transitionDuration: "initial",
          transitionTimingFunction: "initial",
        }}
      />
      <div
        className="card--9bed2 card--2080f withBorderRadius--f0b89 heightPositioning--83fc8"
        data-role="drawer-card"
        data-test-size="65%"
        style={{
          pointerEvents: "initial",
          transitionDuration: "initial",
          transitionTimingFunction: "initial",
          height: "605px",
        }}
      >
        <div
          className="contentContainer--736bb contentSizeRestrictContainer--9da92"
          data-role="content-restrict-container"
          style={{ maxHeight: "838px" }}
        >
          <div className="handleBarContainer--1d331 handleBarContainer--b1c45">
            <div className="handleBar--d2af5" data-role="swipe-bar">
              <div className="bar--28f5d" />
            </div>
          </div>
          <div className="contentContainer--bced0">
            <div
              className="headerContainer--74784 header--bbb34"
              data-role="header-container"
            >
              <div
                className="backButtonContainer--3999f"
                onClick={() => setTab("menu")}
              >
                <div
                  className="backButton--096e8 visible--24b70 animated--9d0fa"
                  data-role="drawer-back-button-container"
                >
                  <div
                    data-role="drawer-back-button"
                    className="container--0ac6d drawerHeaderButton--a3e59"
                  >
                    <svg
                      viewBox="0 0 100 100"
                      className="iconWrapper--b4e49"
                      style={{ height: "100%" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="icon--8dcd0"
                        height="100%"
                        y="0%"
                      >
                        <path d="m7.83 13.36 3.95 3.95-1.42 1.42L4 12.36 10.36 6l1.42 1.41-3.95 3.95H20v2H7.83Z" />
                      </svg>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="titleContainer--62dac">
                <div
                  data-role="title-animation-container"
                  className="animatedTitleContainer--0ef83"
                >
                  <div
                    className="currentTitle--5f5a4"
                    data-role="title-current"
                  >
                    <div className="titleContainer--ae994">
                      <div className="title--b94ad">
                        <div className="titleIcon--f10b6">
                          <svg
                            viewBox="0 0 100 100"
                            className="iconWrapper--b4e49"
                            style={{ height: "100%" }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              className="icon--8dcd0"
                              data-role="chat-icon-svg"
                              height="100%"
                              y="0%"
                            >
                              <path d="M5 4h10.5c.55 0 1 .45 1 1v7c0 .55-.45 1-1 1H10l-3.99 3v-3H5c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1Zm12.99 17v-3H19c.55 0 1-.45 1-1v-7c0-.55-.45-1-1-1h-1v3.5c0 1.1-.9 2-2 2h-5.5l-3 2.31V17c0 .55.45 1 1 1H14l3.99 3Z" />
                            </svg>
                          </svg>
                        </div>
                        <div
                          data-role="title-text"
                          className="titleText--44453"
                        >
                          Chat
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                onClick={closeModal}
                data-role="drawer-close-button"
                className="container--0ac6d drawerHeaderButton--a3e59"
              >
                <svg
                  viewBox="0 0 100 100"
                  className="iconWrapper--b4e49"
                  style={{ height: "100%" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="icon--8dcd0"
                    height="100%"
                    y="0%"
                  >
                    <path d="m13.615 11.864 6.116 6.116-1.748 1.747-6.115-6.116-6.12 6.12L4 17.984l6.12-6.12-6.116-6.117L5.75 4l6.117 6.116 6.112-6.112 1.747 1.748-6.112 6.112Z" />
                  </svg>
                </svg>
              </div>
            </div>
            <div
              className="content--00be2"
              data-role="drawer-content"
              data-drawer-prevent-drag="true"
            >
              <div className="screensView--8d90a" data-role="menu-container">
                <div className="screens--eb504" data-role="stack-screens">
                  <div
                    className="screen--f0473"
                    data-screen-id="chat"
                    data-role="menu-screen-chat"
                    style={{ display: "block" }}
                  >
                    <div data-role="chat-public" className="layout--6624c">
                      <div className="header--36c74">
                        <div
                          data-role="chat-header"
                          className="header--9ada0 mobile--d2d6c"
                        >
                          <p className="dealerTitle--cd368 commonUiElement mobile--1277c">
                            <span className="label--0f90a">DEALER:&nbsp;</span>
                            <span
                              data-role="dealerName"
                              className="dealerName--9808d"
                            >
                              ELIZAVETA
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="content--ddd06">
                        <div
                          data-role="scrollable-content"
                          className="scrollable--3a113 gradient--9a444 alignEnd--b2c37"
                          style={{
                            "-contentMaskSide": "0deg",
                            "-contentMaskStart": "0%",
                            "-contentMaskEnd": "100%",
                          }}
                        >
                          <div>
                            <div
                              data-role="mobile-chat-list-messages"
                              className="messagesList--5a342 fullHeight--a159e messagesListColumnDirection--73d85"
                            >
                              <li
                                className="row--46c58 messageRow--53dce mobile--bd7ac"
                                data-role="chat-message"
                              >
                                <div className="bubble--aef29">
                                  <div
                                    className="name--5b112"
                                    data-role="chat-message__sender-name"
                                  >
                                    Kells:{" "}
                                  </div>
                                  <div
                                    className="message--a529e"
                                    data-role="chat-message__text"
                                  >
                                    *** joy hehe
                                  </div>
                                </div>
                              </li>
                              <li
                                className="row--46c58 messageRow--53dce paddingForMessagesWithSameName--d1d3e mobile--bd7ac"
                                data-role="chat-message"
                              >
                                <div className="bubble--aef29">
                                  <div
                                    className="message--a529e"
                                    data-role="chat-message__text"
                                  >
                                    B4lato joy
                                  </div>
                                </div>
                              </li>
                              <li
                                className="row--46c58 messageRow--53dce mobile--bd7ac"
                                data-role="chat-message"
                              >
                                <div className="bubble--aef29 dealer--4af2e">
                                  <div
                                    className="name--5b112"
                                    data-role="chat-message__sender-name"
                                  >
                                    Elizaveta:{" "}
                                  </div>
                                  <div
                                    className="message--a529e"
                                    data-role="chat-message__text"
                                  >
                                    Hello, magic! Welcome to Golden Wealth
                                    Baccarat!
                                  </div>
                                </div>
                              </li>
                              <li
                                className="row--46c58 messageRow--53dce messageEnd--77454 mobile--bd7ac alignEnd--f66b0"
                                data-role="chat-message"
                              >
                                <div className="bubble--aef29 own--97353 alignEnd--f66b0">
                                  <div
                                    className="name--5b112"
                                    data-role="chat-message__sender-name"
                                  >
                                    magic:{" "}
                                  </div>
                                  <div
                                    className="message--a529e"
                                    data-role="chat-message__text"
                                  >
                                    hello
                                  </div>
                                </div>
                                <div className="icon--06d73">
                                  <svg
                                    viewBox="0 0 100 100"
                                    className="iconWrapper--b4e49"
                                    style={{ height: "100%" }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      className="icon--8dcd0"
                                      height="100%"
                                      y="0%"
                                    >
                                      <circle
                                        cx={12}
                                        cy={12}
                                        r={12}
                                        fill="white"
                                        fillOpacity="0.9"
                                      />
                                      <path
                                        d="m13.387 5.4-0.243 9.127h-2.288l-0.249-9.127h2.78zm-1.387 13.2c-0.824 0-1.506-0.681-1.5-1.528-6e-3 -0.833 0.676-1.514 1.5-1.514 0.799 0 1.493 0.681 1.5 1.514-7e-3 0.847-0.701 1.528-1.5 1.528z"
                                        fill="#1A1A1A"
                                      />
                                    </svg>
                                  </svg>
                                </div>
                                <div className="rowCaption--7412a">
                                  Message failed to send
                                </div>
                              </li>
                              <li
                                className="row--46c58 messageRow--53dce mobile--bd7ac"
                                data-role="chat-message"
                              >
                                <div className="bubble--aef29 system--a57c8">
                                  <div
                                    className="message--a529e"
                                    data-role="chat-message__text"
                                  >
                                    Please place your bets to participate in
                                    chat.
                                  </div>
                                </div>
                              </li>
                              <li
                                className="row--46c58 messageRow--53dce mobile--bd7ac"
                                data-role="chat-message"
                              >
                                <div className="bubble--aef29 dealer--4af2e">
                                  <div
                                    className="message--a529e"
                                    data-role="chat-message__text"
                                  >
                                    Please be respectful – harsh or spam
                                    messages may lead to automated system bans.
                                    See{" "}
                                    <button
                                      type="button"
                                      className="button--457c2"
                                      data-role="chat-rules-link"
                                    >
                                      Chat Rules
                                    </button>{" "}
                                    for details.
                                  </div>
                                </div>
                              </li>
                            </div>
                          </div>
                        </div>
                        <button
                          className="scrollButton--8fbb3"
                          type="button"
                          data-role="scroll-button"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="icon--75ce1"
                          >
                            <path d="m17.31 8-4.95 4.95L7.41 8 6 9.41l6.36 6.37 6.36-6.37L17.31 8Z" />
                          </svg>
                        </button>
                      </div>
                      <div className="footer--16634">
                        <div className="footer--11dc1">
                          <div
                            className="rowContainer--72491 commonUiElement"
                            data-role="message-input__text-row"
                          >
                            <form
                              className="inputRow--0978c"
                              data-overlay-ignore-click="true"
                            >
                              <div
                                className="inputContainer--21456 container--bc043 withBackground--425d6"
                                data-role="message-input__text-container"
                              >
                                <input
                                  className="input--fe760 input--eaa7d increased--eba9b"
                                  data-role="message-input__text"
                                  autoComplete="off"
                                  autoCapitalize="on"
                                  maxLength={75}
                                  placeholder="Tap to chat"
                                  type="text"
                                  readOnly
                                  defaultValue
                                />
                              </div>
                              <div>
                                <div
                                  className="menuTransition--4e689"
                                  style={{
                                    "-enterDuration": "125ms",
                                    "-enterDoneDuration": "100ms",
                                    "-exitDuration": "125ms",
                                  }}
                                >
                                  <button
                                    type="button"
                                    className="button--256e8"
                                    data-role="chat-menu-button"
                                    data-overlay-ignore-click="false"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 32 32"
                                      className="icon--b8507"
                                    >
                                      <path d="M16 10.6666C17.4728 10.6666 18.6667 9.47268 18.6667 7.99992C18.6667 6.52716 17.4728 5.33325 16 5.33325C14.5273 5.33325 13.3334 6.52716 13.3334 7.99992C13.3334 9.47268 14.5273 10.6666 16 10.6666Z" />
                                      <path d="M16 18.6666C17.4728 18.6666 18.6667 17.4727 18.6667 15.9999C18.6667 14.5272 17.4728 13.3333 16 13.3333C14.5273 13.3333 13.3334 14.5272 13.3334 15.9999C13.3334 17.4727 14.5273 18.6666 16 18.6666Z" />
                                      <path d="M18.6667 23.9999C18.6667 25.4727 17.4728 26.6666 16 26.6666C14.5273 26.6666 13.3334 25.4727 13.3334 23.9999C13.3334 22.5272 14.5273 21.3333 16 21.3333C17.4728 21.3333 18.6667 22.5272 18.6667 23.9999Z" />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="floatingContainer--039f0 transformFloatingContainer--20649"
        data-role="floating-container"
        style={{
          transitionProperty: "transform",
          transform: "translate3d(0px, 0px, 1px)",
          transitionDuration: "initial",
          transitionTimingFunction: "initial",
        }}
      />
      <div
        data-role="drawer-content-mask"
        className="contentMask--32bde"
        style={{ transform: "scaleY(0) translate3d(0px, 0px, 1px)" }}
      />
    </div>
  );
};

export default Chat;
