import { app } from "./app";
import * as angular from "angular";

/**
 * This class contains all state management for User component
 */
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
        }, 1000);
    }
}

/**
 * Each component will be associated with a state factory function.
 * This is unfortunately a boilerplate code you need to have for each component
 */
export interface IUserStateFactory {
    (userId: string): UserState;
}

app.service("userStateFactory", ["$timeout", ($timeout: angular.ITimeoutService): IUserStateFactory => {
    return (userId: string) => new UserState($timeout, userId);
}]);