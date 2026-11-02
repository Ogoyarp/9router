export default {
  id: "ogoyarp",
  priority: 60,
  alias: "ogoyarp",
  aliases: ["ogy"],
  uiAlias: "ogoyarp",
  display: {
    name: "Ogoyarp",
    icon: "bolt",
    color: "#2563EB",
    textIcon: "OG",
    website: "https://ogoyarp.com",
    notice: {
      text: "OpenAI-compatible personal gateway. Uncensored models (glm-5.3-flash:uncensored, deepseek-v4-pro:uncensored, ultimate). Stream-only upstream: non-stream requests are answered via SSE aggregation.",
      apiKeyUrl: "https://ogoyarp.com",
    },
  },
  category: "oauth",
  authType: "apikey",
  authModes: ["oauth", "apikey"],
  hasOAuth: true,
  transport: {
    baseUrl: "https://api.ogoyarp.com/v1/chat/completions",
    validateUrl: "https://api.ogoyarp.com/v1/models",
    headers: {
      "User-Agent": "curl/8.5.0",
    },
  },
  models: [
    { id: "glm-5.3-flash:uncensored", name: "GLM 5.3 Flash (Uncensored)" },
    { id: "deepseek-v4-pro:uncensored", name: "DeepSeek V4 Pro (Uncensored)" },
    { id: "ultimate", name: "Ultimate" },
  ],
  modelsFetcher: { url: "https://api.ogoyarp.com/v1/models", type: "openai" },
  passthroughModels: true,
};
