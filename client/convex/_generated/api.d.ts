/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as apis_get_getCasualContact from '../apis/get/getCasualContact.js';
import type * as apis_get_getSmartContact from '../apis/get/getSmartContact.js';
import type * as apis_post_generateUploadUrl from '../apis/post/generateUploadUrl.js';
import type * as apis_post_insertCasualContact from '../apis/post/insertCasualContact.js';
import type * as apis_post_insertSmartContact from '../apis/post/insertSmartContact.js';
import type * as apis_post_readMessage from '../apis/post/readMessage.js';
import type * as apis_post_readMesssageCasual from '../apis/post/readMesssageCasual.js';
import type * as schemas_casual_contact_rate_limit_schema from '../schemas/casual_contact_rate_limit_schema.js';
import type * as schemas_casual_contact_schema from '../schemas/casual_contact_schema.js';
import type * as schemas_smart_contact_rate_limit_schema from '../schemas/smart_contact_rate_limit_schema.js';
import type * as schemas_smart_contact_schema from '../schemas/smart_contact_schema.js';

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from 'convex/server';

declare const fullApi: ApiFromModules<{
  'apis/get/getCasualContact': typeof apis_get_getCasualContact;
  'apis/get/getSmartContact': typeof apis_get_getSmartContact;
  'apis/post/generateUploadUrl': typeof apis_post_generateUploadUrl;
  'apis/post/insertCasualContact': typeof apis_post_insertCasualContact;
  'apis/post/insertSmartContact': typeof apis_post_insertSmartContact;
  'apis/post/readMessage': typeof apis_post_readMessage;
  'apis/post/readMesssageCasual': typeof apis_post_readMesssageCasual;
  'schemas/casual_contact_rate_limit_schema': typeof schemas_casual_contact_rate_limit_schema;
  'schemas/casual_contact_schema': typeof schemas_casual_contact_schema;
  'schemas/smart_contact_rate_limit_schema': typeof schemas_smart_contact_rate_limit_schema;
  'schemas/smart_contact_schema': typeof schemas_smart_contact_schema;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, 'public'>
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, 'internal'>
>;

export declare const components: {};
