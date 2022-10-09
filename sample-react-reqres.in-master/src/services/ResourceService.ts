import {UserDto} from "../dtos/UserDto";
import {UsersDto} from "../dtos/UsersDto";
import {inject, injectable} from "inversify";
import ownTypes from "../ioc/ownTypes";
import DefaultHttpService, {HttpService, MethodType} from "./HttpService";
import {UserResponse} from "../dtos/UserResponse";
import {ResourcesResponse} from "../dtos/ResourcesResponse";
import {ResourceResponse} from "../dtos/ResourceResponse";

export interface ResourceService {
    getById(id: number): Promise<ResourceResponse>;
    getAll(): Promise<ResourcesResponse>;
}

@injectable()
export default class DefaultResourceService implements ResourceService {
    public constructor(
        @inject(ownTypes.httpService) private readonly httpService: DefaultHttpService
    ) {
    }

    public async getById(id: number): Promise<ResourceResponse> {
        const result = await this.httpService.send<ResourceResponse>(`unknown/${id}`, MethodType.GET);
        return result.data;
    }

    public async getAll(): Promise<ResourcesResponse> {
        const result = await this.httpService.send<ResourcesResponse>(`unknown`, MethodType.GET);
        return {...result.data};
    }
}
