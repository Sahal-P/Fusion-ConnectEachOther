export const MessageNotification = (props) => {
  return (
    <div className="chat-new-message-jum-notification barBase-jump-notifcation">
      <button
        type="button"
        className="chat-message-barButtonMain chat-message-barButtonBase"
        aria-label="Jump to last unread message"
        aria-describedby="NewMessagesBarJumpToNewMessages_53"
      >
        <span id="NewMessagesBarJumpToNewMessages_53" className="span-3">
          {/* 50+ new messages since 10:30 AM */}
          {`${props.count}+ new messages since ${props.since}`}
        </span>
      </button>
      <button
        type="button"
        className="chat-message-barButtonAlt chat-message-barButtonBase"
      >
        Mark As Read
        <svg
          className="chat-message-barButtonIcon"
          aria-hidden="true"
          role="img"
          width={24}
          height={24}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.291 5.70697L15.998 9.41397L21.705 3.70697L20.291 2.29297L15.998 6.58597L13.705 4.29297L12.291 5.70697ZM1.99805 7H11.088C11.564 9.837 14.025 12 16.998 12V18C16.998 19.103 16.102 20 14.998 20H8.33205L2.99805 24V20H1.99805C0.894047 20 -0.00195312 19.103 -0.00195312 18V9C-0.00195312 7.897 0.894047 7 1.99805 7Z"
          />
        </svg>
      </button>
    </div>
  );
};
