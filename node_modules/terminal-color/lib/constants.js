const Reset = "\x1b[0m%s\x1b[0m"
const Bright = "\x1b[1m%s\x1b[0m"
const Dim = "\x1b[2m%s\x1b[0m"
const Underscore = "\x1b[4m%s\x1b[0m"
const Blink = "\x1b[5m%s\x1b[0m"
const Reverse = "\x1b[7m%s\x1b[0m"
const Hidden = "\x1b[8m%s\x1b[0m"

const FgBlack = "\x1b[30m%s\x1b[0m"
const FgRed = "\u001b[31m%s\x1b[0m"
const FgGreen = "\x1b[32m%s\x1b[0m"
const FgYellow = "\x1b[33m%s\x1b[0m"
const FgBlue = "\x1b[34m%s\x1b[0m"
const FgMagenta = "\x1b[35m%s\x1b[0m"
const FgCyan = "\x1b[36m%s\x1b[0m"
const FgWhite = "\x1b[37m%s\x1b[0m"

const BgBlack = "\x1b[40m%s\x1b[0m"
const BgRed = "\x1b[41m%s\x1b[0m"
const BgGreen = "\x1b[42m%s\x1b[0m"
const BgYellow = "\x1b[43m%s\x1b[0m"
const BgBlue = "\x1b[44m%s\x1b[0m"
const BgMagenta = "\x1b[45m%s\x1b[0m"
const BgCyan = "\x1b[46m%s\x1b[0m"
const BgWhite = "\x1b[47m%s\x1b[0m"



module.exports = { 
    Reset, Bright, Dim, Underscore, Blink, Reverse, Hidden, 
    FgBlack, FgRed, FgGreen, FgYellow, FgBlue, FgMagenta, FgCyan, FgWhite,
    BgBlack, BgRed, BgGreen, BgYellow, BgBlue, BgMagenta, BgCyan, BgWhite
};