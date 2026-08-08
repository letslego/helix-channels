# @letslego/helix-channels

**Channel adapters** for Helix agents — one agent, many surfaces.

- HTTP API (`/helix/v1`)
- Web console
- Slack / Discord adapters
- Cron-friendly channel kinds

```bash
npm install @letslego/helix-channels
```

```ts
import { httpChannel, webChannel } from "@letslego/helix-channels";

export default httpChannel({ path: "/helix/v1" });
```

## Ecosystem

| Package | Role |
| --- | --- |
| [@letslego/helix](https://github.com/letslego/helix) | Agent framework |
| [@letslego/helix-workflow](https://github.com/letslego/helix-workflow) | Durable workflows |
| [@letslego/helix-gateway](https://github.com/letslego/helix-gateway) | AI Gateway |
| [@letslego/helix-sandbox](https://github.com/letslego/helix-sandbox) | Isolated compute |
| [@letslego/helix-connect](https://github.com/letslego/helix-connect) | Credential brokering |
| [@letslego/helix-channels](https://github.com/letslego/helix-channels) | Delivery surfaces |

Overview: https://letslego.github.io/helix-ecosystem/


## License

Apache-2.0 © LetsLego
