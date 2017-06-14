import { IUserStateFactory, UserState } from "./user.state";

export class UserController {
    public static $inject = ["userStateFactory"];

    // inputs
    public userId: string;

    // state of this component
    private state: UserState;

    constructor(private userStateFactory: IUserStateFactory) {}

    $onInit() {
        // state could be initialized based on custom inputs
        this.state = this.userStateFactory(this.userId);

        // execute an async action
        this.state.loadUser();
    }
}