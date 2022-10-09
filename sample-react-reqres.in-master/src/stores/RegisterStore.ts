import {inject, injectable} from "inversify";
import ownTypes from "../ioc/ownTypes";
import AuthenticationService from "../services/AuthenticationService";
import {makeAutoObservable} from "mobx";

@injectable()
export default class RegisterStore {

    email = '';
    password = '';
    id = '';
    isLoading = false;
    error = '';
    token = '';

    constructor(
        @inject(ownTypes.authenticationService) private readonly authenticationService: AuthenticationService
    ) {
        makeAutoObservable(this);
    }


    public register = async () => {
        this.token = '';
        this.id = ''
        this.error = '';
        try {
            this.isLoading = true;
            const result = await this.authenticationService.register(this.email, this.password);
            this.token = result.token;
            this.id = result.id;
        } catch (e) {
            if (e instanceof Error) {
                this.error = e.message;
            }
        }
        this.isLoading = false;
    }


    public changeEmail = (text: string) : void => {
        this.email = text;
    }


    public changePassword = (text: string) : void => {
        this.password = text;
    }

    public arePasswordsIdentical = (text: string) : void => {
        this.error = this.password === text ? '' : 'Invalid password';
    }
}
