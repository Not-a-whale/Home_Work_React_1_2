import {Resource} from "./ResourcesResponse";

export interface ResourceResponse {
    "data": Resource,
    "support": {
        "url": string,
        "text": string
    }
}
