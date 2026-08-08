export function defineChannel(def) {
    return {
        name: def.name ?? "channel",
        kind: def.kind,
        description: def.description,
        config: def.config ?? {},
    };
}
export function httpChannel(config = {}) {
    return defineChannel({
        name: "http",
        kind: "http",
        description: "HTTP JSON API for sessions and streaming turns",
        config: { path: config.path ?? "/helix/v1", auth: config.auth ?? "none" },
    });
}
export function webChannel(config = {}) {
    return defineChannel({
        name: "web",
        kind: "web",
        description: "Built-in operator web chat console",
        config: { path: config.path ?? "/" },
    });
}
export function slackChannel(config = {}) {
    return defineChannel({
        name: "slack",
        kind: "slack",
        description: "Slack channel adapter (webhook/token via env)",
        config: { webhookEnv: config.webhookEnv ?? "SLACK_WEBHOOK_URL" },
    });
}
export function discordChannel(config = {}) {
    return defineChannel({
        name: "discord",
        kind: "discord",
        description: "Discord channel adapter",
        config: { tokenEnv: config.tokenEnv ?? "DISCORD_BOT_TOKEN" },
    });
}
//# sourceMappingURL=index.js.map