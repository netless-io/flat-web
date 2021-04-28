import { Plugin } from "white-web-sdk";
import { PluginContext, WhiteAudioPluginAttributes } from "./types";
import { WhiteAudioPlugin } from "./WhiteAudioPlugin";

/**
 * white-web-sdk audio plugin.
 * @example
 * const plugins = createPlugins({ "audio2": audioPlugin2 });
 * plugins.setPluginContext("audio2", {
 *     identity: identity === Identity.creator ? "host" : ""
 * });
 * let sdk = new WhiteWebSdk({ plugins });
 * let room = await sdk.joinRoom(...);
 * room.insertPlugin("audio2", {
 *     ...,
 *     attributes: { src: url, isNavigationDisable: false },
 * });
 */
export const audioPlugin: Plugin<PluginContext, WhiteAudioPluginAttributes> = Object.freeze({
    kind: "audio",
    render: WhiteAudioPlugin,
    defaultAttributes: {
        src: "",
        hostTime: 0,
        currentTime: 0,
        paused: true,
        muted: false,
        volume: 1,

        pluginAudioUrl: "",
        play: false,
        mute: false,
        seek: 0,
        seekTime: 0,
    },
    hitTest(plugin) {
        const memberState = (plugin as any).component.context.getMemberState();
        return !(memberState?.currentApplianceName === "eraser");
    },
});
