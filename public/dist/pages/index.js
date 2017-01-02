"use strict";
var character_component_1 = require('./characters/character.component');
var page_not_fount_component_1 = require('./page-not-fount/page-not-fount.component');
var publications_component_1 = require('./publications/publications.component');
var movies_component_1 = require('./movies/movies.component');
var home_component_1 = require('./home/home.component');
var login_component_1 = require('./login/login.component');
var register_component_1 = require('./register/register.component');
exports.pages = {
    pageNotFound: page_not_fount_component_1.PageNotFoundComponent,
    characters: character_component_1.CharacterComponent,
    movies: movies_component_1.MoviesComponent,
    publications: publications_component_1.PublicationsComponent,
    home: home_component_1.HomeComponent,
    login: login_component_1.LoginComponent,
    register: register_component_1.RegisterComponent
};
//# sourceMappingURL=index.js.map