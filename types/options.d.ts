/// <reference types="node" />
export default processOptions;
/**
 * Agent-like object or Agent class or it's instance.
 */
export type httpAgent = object | Agent | SSLAgent;
/**
 * Common nHentai API hosts object.
 */
export type nHentaiHosts = {
    /**
     * Main API host.
     */
    api: string | null;
    /**
     * Media API host.
     */
    images: string | null;
    /**
     * Media thumbnails API host.
     */
    thumbs: string | null;
};
/**
 * Common nHentai options object.
 */
export type nHentaiOptions = {
    /**
     * Hosts.
     */
    hosts: nHentaiHosts | null;
    /**
     * Prefer HTTPS over HTTP.
     */
    ssl: boolean | null;
    /**
     * HTTP(S) agent.
     */
    agent: httpAgent | null;
};
/**
 * Agent-like object or Agent class or it's instance.
 * @global
 * @typedef {object|Agent|SSLAgent} httpAgent
 */
/**
 * Common nHentai API hosts object.
 * @global
 * @typedef {object} nHentaiHosts
 * @property {?string} api    Main API host.
 * @property {?string} images Media API host.
 * @property {?string} thumbs Media thumbnails API host.
 */
/**
 * Common nHentai options object.
 * @global
 * @typedef {object} nHentaiOptions
 * @property {?nHentaiHosts} hosts Hosts.
 * @property {?boolean}      ssl   Prefer HTTPS over HTTP.
 * @property {?httpAgent}    agent HTTP(S) agent.
 */
/**
 * Applies provided options on top of defaults.
 * @param {?nHentaiOptions} [options={}] Options to apply.
 * @returns {nHentaiOptions} Unified options.
 */
declare function processOptions({ hosts: { api, images, thumbs, }, ssl, agent, }?: nHentaiOptions | null): nHentaiOptions;
import { Agent } from "http";
import { Agent as SSLAgent } from "https";
