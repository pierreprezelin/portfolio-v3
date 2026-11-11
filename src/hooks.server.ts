import type { Handle } from "@sveltejs/kit/hooks";

import { paraglideMiddleware } from "#lib/paraglide/server.js";

const paraglideHandle: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request, locale }) =>
		resolve(
			{ ...event, request },
			{
				transformPageChunk: ({ html }) => html.replace("%lang%", locale)
			}
		)
	);

export const handle: Handle = paraglideHandle;
