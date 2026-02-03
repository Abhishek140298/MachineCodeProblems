import React from "react";

const availableSharingButton = [
  { name: "whatsapp", url: "" },
  { name: "facebook", url: "https://www.facebook.com/sharer/sharer.php" },
  { name: "twiter", url: "https://twitter.com/intent/tweet" },
];

const SocialMediaSharingButton = () => {
  const shareUrl = window.location?.href;
  const text = "Amazin web app";
  return (
    <div>
      <h1>Share on social media</h1>
      <div>
        {availableSharingButton?.map((socialMedia, index) => (
          <div>
            <a
              href={
                name === "facebook"
                  ? `${socialMedia?.url}?u=${encodeURIComponent(shareUrl)}`
                  : `${socialMedia?.url}?text=${encodeURIComponent(
                      text + " " + shareUrl
                    )}`
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              {socialMedia?.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaSharingButton;
