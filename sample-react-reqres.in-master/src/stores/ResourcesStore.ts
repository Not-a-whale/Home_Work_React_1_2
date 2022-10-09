import {User} from "../models/User";
import {inject, injectable} from "inversify";
import ownTypes from "../ioc/ownTypes";
import UserService from "../services/UserService";
import {makeAutoObservable} from "mobx";
import {Resource} from "../dtos/ResourcesResponse";
import DefaultResourceService, {ResourceService} from "../services/ResourceService";


@injectable()
export default class ResourcesStore {

    resources : Resource[] = [];
    isLoading = false;
    totalPages = 0;
    currentPage = 1;

    constructor(
        @inject(ownTypes.resourceService) private readonly resourcesService: DefaultResourceService
    ) {
        makeAutoObservable(this);
    }


    public init = async () => {
        this.getAll();
    }


    private getAll = async () => {
        try {
            this.isLoading = true;
            const result = await this.resourcesService.getAll();
            this.resources = result.data;
            this.totalPages = result.total_pages;

        } catch (e) {
            if (e instanceof Error) {
                console.error(e.message);
            }
        }
        this.isLoading = false;
    }
}
