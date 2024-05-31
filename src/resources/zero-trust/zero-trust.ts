// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ConnectivitySettingsAPI from './connectivity-settings';
import * as IdentityProvidersAPI from './identity-providers';
import * as OrganizationsAPI from './organizations';
import * as SeatsAPI from './seats';
import * as AccessAPI from './access/access';
import * as DevicesAPI from './devices/devices';
import * as DEXAPI from './dex/dex';
import * as DLPAPI from './dlp/dlp';
import * as GatewayAPI from './gateway/gateway';
import * as NetworksAPI from './networks/networks';
import * as RiskScoringAPI from './risk-scoring/risk-scoring';
import * as TunnelsAPI from './tunnels/tunnels';

export class ZeroTrust extends APIResource {
  devices: DevicesAPI.Devices = new DevicesAPI.Devices(this._client);
  identityProviders: IdentityProvidersAPI.IdentityProviders = new IdentityProvidersAPI.IdentityProviders(
    this._client,
  );
  organizations: OrganizationsAPI.Organizations = new OrganizationsAPI.Organizations(this._client);
  seats: SeatsAPI.Seats = new SeatsAPI.Seats(this._client);
  access: AccessAPI.Access = new AccessAPI.Access(this._client);
  dex: DEXAPI.DEX = new DEXAPI.DEX(this._client);
  tunnels: TunnelsAPI.Tunnels = new TunnelsAPI.Tunnels(this._client);
  connectivitySettings: ConnectivitySettingsAPI.ConnectivitySettings =
    new ConnectivitySettingsAPI.ConnectivitySettings(this._client);
  dlp: DLPAPI.DLP = new DLPAPI.DLP(this._client);
  gateway: GatewayAPI.Gateway = new GatewayAPI.Gateway(this._client);
  networks: NetworksAPI.Networks = new NetworksAPI.Networks(this._client);
  riskScoring: RiskScoringAPI.RiskScoring = new RiskScoringAPI.RiskScoring(this._client);
}

export namespace ZeroTrust {
  export import Devices = DevicesAPI.Devices;
  export import Device = DevicesAPI.Device;
  export import DeviceGetResponse = DevicesAPI.DeviceGetResponse;
  export import DevicesSinglePage = DevicesAPI.DevicesSinglePage;
  export import DeviceListParams = DevicesAPI.DeviceListParams;
  export import DeviceGetParams = DevicesAPI.DeviceGetParams;
  export import IdentityProviders = IdentityProvidersAPI.IdentityProviders;
  export import AzureAD = IdentityProvidersAPI.AzureAD;
  export import GenericOAuthConfig = IdentityProvidersAPI.GenericOAuthConfig;
  export import IdentityProvider = IdentityProvidersAPI.IdentityProvider;
  export import IdentityProviderType = IdentityProvidersAPI.IdentityProviderType;
  export import ScimConfig = IdentityProvidersAPI.ScimConfig;
  export import IdentityProviderListResponse = IdentityProvidersAPI.IdentityProviderListResponse;
  export import IdentityProviderListResponsesSinglePage = IdentityProvidersAPI.IdentityProviderListResponsesSinglePage;
  export import IdentityProviderCreateParams = IdentityProvidersAPI.IdentityProviderCreateParams;
  export import IdentityProviderListParams = IdentityProvidersAPI.IdentityProviderListParams;
  export import Organizations = OrganizationsAPI.Organizations;
  export import LoginDesign = OrganizationsAPI.LoginDesign;
  export import Organization = OrganizationsAPI.Organization;
  export import OrganizationRevokeUsersResponse = OrganizationsAPI.OrganizationRevokeUsersResponse;
  export import OrganizationCreateParams = OrganizationsAPI.OrganizationCreateParams;
  export import OrganizationUpdateParams = OrganizationsAPI.OrganizationUpdateParams;
  export import OrganizationListParams = OrganizationsAPI.OrganizationListParams;
  export import OrganizationRevokeUsersParams = OrganizationsAPI.OrganizationRevokeUsersParams;
  export import Seats = SeatsAPI.Seats;
  export import Seat = SeatsAPI.Seat;
  export import Access = AccessAPI.Access;
  export import AccessDevicePostureRule = AccessAPI.AccessDevicePostureRule;
  export import AccessRule = AccessAPI.AccessRule;
  export import AnyValidServiceTokenRule = AccessAPI.AnyValidServiceTokenRule;
  export import AuthenticationMethodRule = AccessAPI.AuthenticationMethodRule;
  export import AzureGroupRule = AccessAPI.AzureGroupRule;
  export import CertificateRule = AccessAPI.CertificateRule;
  export import CountryRule = AccessAPI.CountryRule;
  export import DomainRule = AccessAPI.DomainRule;
  export import EmailListRule = AccessAPI.EmailListRule;
  export import EmailRule = AccessAPI.EmailRule;
  export import EveryoneRule = AccessAPI.EveryoneRule;
  export import ExternalEvaluationRule = AccessAPI.ExternalEvaluationRule;
  export import GitHubOrganizationRule = AccessAPI.GitHubOrganizationRule;
  export import GroupRule = AccessAPI.GroupRule;
  export import GSuiteGroupRule = AccessAPI.GSuiteGroupRule;
  export import IPListRule = AccessAPI.IPListRule;
  export import IPRule = AccessAPI.IPRule;
  export import OktaGroupRule = AccessAPI.OktaGroupRule;
  export import SAMLGroupRule = AccessAPI.SAMLGroupRule;
  export import ServiceTokenRule = AccessAPI.ServiceTokenRule;
  export import DEX = DEXAPI.DEX;
  export import DeviceExperienceMonitor = DEXAPI.DeviceExperienceMonitor;
  export import NetworkPath = DEXAPI.NetworkPath;
  export import NetworkPathResponse = DEXAPI.NetworkPathResponse;
  export import Percentiles = DEXAPI.Percentiles;
  export import Tunnels = TunnelsAPI.Tunnels;
  export import Connection = TunnelsAPI.Connection;
  export import TunnelCreateResponse = TunnelsAPI.TunnelCreateResponse;
  export import TunnelListResponse = TunnelsAPI.TunnelListResponse;
  export import TunnelDeleteResponse = TunnelsAPI.TunnelDeleteResponse;
  export import TunnelEditResponse = TunnelsAPI.TunnelEditResponse;
  export import TunnelGetResponse = TunnelsAPI.TunnelGetResponse;
  export import TunnelListResponsesV4PagePaginationArray = TunnelsAPI.TunnelListResponsesV4PagePaginationArray;
  export import TunnelCreateParams = TunnelsAPI.TunnelCreateParams;
  export import TunnelListParams = TunnelsAPI.TunnelListParams;
  export import TunnelDeleteParams = TunnelsAPI.TunnelDeleteParams;
  export import TunnelEditParams = TunnelsAPI.TunnelEditParams;
  export import TunnelGetParams = TunnelsAPI.TunnelGetParams;
  export import ConnectivitySettings = ConnectivitySettingsAPI.ConnectivitySettings;
  export import ConnectivitySettingEditResponse = ConnectivitySettingsAPI.ConnectivitySettingEditResponse;
  export import ConnectivitySettingGetResponse = ConnectivitySettingsAPI.ConnectivitySettingGetResponse;
  export import ConnectivitySettingEditParams = ConnectivitySettingsAPI.ConnectivitySettingEditParams;
  export import ConnectivitySettingGetParams = ConnectivitySettingsAPI.ConnectivitySettingGetParams;
  export import DLP = DLPAPI.DLP;
  export import Gateway = GatewayAPI.Gateway;
  export import GatewayCreateResponse = GatewayAPI.GatewayCreateResponse;
  export import GatewayListResponse = GatewayAPI.GatewayListResponse;
  export import GatewayCreateParams = GatewayAPI.GatewayCreateParams;
  export import GatewayListParams = GatewayAPI.GatewayListParams;
  export import Networks = NetworksAPI.Networks;
  export import RiskScoring = RiskScoringAPI.RiskScoring;
  export import RiskScoringGetResponse = RiskScoringAPI.RiskScoringGetResponse;
  export import RiskScoringResetResponse = RiskScoringAPI.RiskScoringResetResponse;
  export import RiskScoringGetParams = RiskScoringAPI.RiskScoringGetParams;
}
