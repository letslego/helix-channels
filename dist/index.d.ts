export interface ChannelDefinition {
    name: string;
    kind: "http" | "web" | "slack" | "discord" | "cron" | "custom";
    description?: string;
    config?: Record<string, unknown>;
}
export declare function defineChannel(def: Omit<ChannelDefinition, "name"> & {
    name?: string;
}): ChannelDefinition;
export declare function httpChannel(config?: {
    path?: string;
    auth?: "none" | "bearer";
}): ChannelDefinition;
export declare function webChannel(config?: {
    path?: string;
}): ChannelDefinition;
export declare function slackChannel(config?: {
    webhookEnv?: string;
}): ChannelDefinition;
export declare function discordChannel(config?: {
    tokenEnv?: string;
}): ChannelDefinition;
//# sourceMappingURL=index.d.ts.map