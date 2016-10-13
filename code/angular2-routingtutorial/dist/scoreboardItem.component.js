"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var race_1 = require('./race');
var raceScore_service_1 = require('./raceScore.service');
var ScoreboardItemComponent = (function () {
    function ScoreboardItemComponent(raceScoreService) {
        this.raceScoreService = raceScoreService;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', race_1.Race)
    ], ScoreboardItemComponent.prototype, "race", void 0);
    ScoreboardItemComponent = __decorate([
        core_1.Component({
            selector: "scoreboard-item",
            template: "\n  <div class='scoreboard-item'>\n  <h2>{{race.name}}</h2>\n  <p></p>\n  <ol>\n  <li>\n  </li>\n  </ol>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [raceScore_service_1.RaceScoreService])
    ], ScoreboardItemComponent);
    return ScoreboardItemComponent;
}());
exports.ScoreboardItemComponent = ScoreboardItemComponent;
//# sourceMappingURL=scoreboardItem.component.js.map