import { app } from "./app";
import * as angular from "angular";

export class UserState {
    inProgress: boolean;
    user: string;

    constructor(private $timeout: angular.ITimeoutService, private userId: string) {
        this.inProgress = false;
    }

    loadUser() {
        this.inProgress = true;

        this.$timeout(() => {
            switch (this.userId) {
                case "tuan":
                    this.user = "Tuan Nguyen";
                    break;
                case "tunguy":
                    this.user = "tunguy@msft";
                    break;
                default:
                    this.user = "Unknown"
            }

            this.inProgress = false;
        }, 5000);
    }
}

export class UserStateService {
    public static $inject = ["$timeout"];

    constructor(private $timeout: angular.ITimeoutService) {}

    createInstance(userId: string) {
        return new UserState(this.$timeout, userId);
    }
}

app.service("userState", UserStateService);