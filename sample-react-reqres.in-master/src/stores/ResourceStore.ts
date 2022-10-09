import {inject, injectable} from "inversify";
import ownTypes from "../ioc/ownTypes";
import {makeAutoObservable} from "mobx";
import {Resource} from "../dtos/ResourcesResponse";
import DefaultResourceService, {ResourceService} from "../services/ResourceService";


@injectable()
export default class ResourceStore {
    resource : Resource| null = null;
    isLoading = false;
    error = '';
    queryString = '';

    constructor(
        @inject(ownTypes.resourceService) private readonly resourceService: DefaultResourceService
    ) {
        makeAutoObservable(this);
    }


    public search = async () => {
        this.error = '';
        try {
            this.isLoading = true;
            const id = Number(this.queryString);
            if (id === NaN) {
                this.queryString = '';
                //this.error = i18n.('user:error.input');
                return;
            }
            const result = await this.resourceService.getById(id);
            this.resource = { ...result.data };

        } catch (e) {
            if (e instanceof Error) {
                this.queryString = '';
                this.error = e.message;
            }
        }
        this.isLoading = false;
    }

    public changeQueryString = (query: string) : void => {
        this.queryString = query;
    }
}
