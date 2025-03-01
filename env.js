
module.exports = {
    private_only_first: process.env.PRIVATE_ONLY_FIRST || false,
    private_threadx: process.env.PRIVATE_THREADX || 10,
    family_threadx: process.env.FAMILY_THREADX || 10,
    tyys: process.env.TYYS || "",
    TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID || "",
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || "",
    WX_PUSHER_APP_TOKEN: process.env.WX_PUSHER_APP_TOKEN || "AT_OzwCik0QP4p4AQlKdO4jbgjWApTiWsJr",
    WX_PUSHER_UID: process.env.WX_PUSHER_UID || "",
};