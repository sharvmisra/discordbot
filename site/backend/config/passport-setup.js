const passport = require("passport");
var DiscordStrategy = require("passport-discord").Strategy;

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.use(
    new DiscordStrategy({
        clientID: '949545168690884648',
        clientSecret: 'D7xEHLik5zbrO9WGGwTbp_Ss3II4ksl5',
        callbackURL: 'http://localhost:4000/auth/discord/callback',
        scope: ["bot", "identify"]
    },
    async (accessToken, refreshToken, profile, done) => {
        done(null, profile);
    })
)
