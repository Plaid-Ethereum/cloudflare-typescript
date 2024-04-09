// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as HistoryAPI from 'cloudflare/resources/user/billing/history';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class History extends APIResource {
  /**
   * Accesses your billing history object.
   */
  list(
    query?: HistoryListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<BillingHistoriesV4PagePaginationArray, BillingHistory>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<BillingHistoriesV4PagePaginationArray, BillingHistory>;
  list(
    query: HistoryListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<BillingHistoriesV4PagePaginationArray, BillingHistory> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/user/billing/history', BillingHistoriesV4PagePaginationArray, {
      query,
      ...options,
    });
  }
}

export class BillingHistoriesV4PagePaginationArray extends V4PagePaginationArray<BillingHistory> {}

export interface BillingHistory {
  /**
   * Billing item identifier tag.
   */
  id: string;

  /**
   * The billing item action.
   */
  action: string;

  /**
   * The amount associated with this billing item.
   */
  amount: number;

  /**
   * The monetary unit in which pricing information is displayed.
   */
  currency: string;

  /**
   * The billing item description.
   */
  description: string;

  /**
   * When the billing item was created.
   */
  occurred_at: string;

  /**
   * The billing item type.
   */
  type: string;

  zone: BillingHistory.Zone;
}

export namespace BillingHistory {
  export interface Zone {
    name?: unknown;
  }
}

export interface HistoryListParams extends V4PagePaginationArrayParams {
  /**
   * The billing item action.
   */
  action?: string;

  /**
   * When the billing item was created.
   */
  occured_at?: string;

  /**
   * When the billing item was created.
   */
  occurred_at?: string;

  /**
   * Field to order billing history by.
   */
  order?: 'type' | 'occured_at' | 'action';

  /**
   * The billing item type.
   */
  type?: string;
}

export namespace History {
  export import BillingHistory = HistoryAPI.BillingHistory;
  export import BillingHistoriesV4PagePaginationArray = HistoryAPI.BillingHistoriesV4PagePaginationArray;
  export import HistoryListParams = HistoryAPI.HistoryListParams;
}
