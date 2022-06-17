import {LocationResponse} from "./location.model";

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev?: any;
}

export interface LocationsResponse {
  info: Info;
  results: LocationResponse[];
}
