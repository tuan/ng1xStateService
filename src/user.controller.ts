import { UserState, UserStateService } from "./user.state";

export class UserController {
    public static $inject = ["userState"];

    // inputs
    public userId: string;

    // state 
    private state: UserState;
    constructor(private homeState: UserStateService) {}

    $onInit() {
        this.state = this.homeState.createInstance(this.userId);
        this.state.loadUser();
    }

    $onChanges() {
        console.log("changes!");
    }
}