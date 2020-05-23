import * as socialTwitter from "./social/twitter"
import * as socialFacebook from "./social/facebook"
import * as socialTelegram from "./social/telegram"
import * as socialGithub from "./social/github"
import * as inputWarning from "./input/warning"
import * as statsBlock from "./stats/block"
import * as statsKeys from "./stats/keys"
import * as statsTag from "./stats/tag"
import * as statsUser from "./stats/user"
import * as statsWriting from "./stats/writing"
import * as userLogout from "./user/logout"
import * as userMedal from "./user/medal"

const instances = {
  social: {
    twitter: socialTwitter,
    facebook: socialFacebook,
    telegram: socialTelegram,
    github: socialGithub
  },
  input: {
    warning: inputWarning
  },
  stats: {
    block: statsBlock,
    keys: statsKeys,
    tag: statsTag,
    user: statsUser,
    writing: statsWriting
  },
  user: {
    logout: userLogout,
    medal: userMedal
  }
}

export const getIconObject = (icon) => {
  let iconObject = instances

  for (let name of icon) {
    if (iconObject[name]) {
      iconObject = iconObject[name]
    }
    else {
      return false
    }
  }

  return iconObject.default
}
