import { Suspense, lazy } from "react";
const ViteApp = lazy(() => import("viteRemote/App"));

export default function ViteRemoteComponent() {
	return (
		<Suspense fallback="Loading">
			<ViteApp />
		</Suspense>
	);
}
